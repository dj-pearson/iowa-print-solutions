import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView, trackScrollDepth, trackTimeOnPage } from '../utils/analytics'

// Lead scoring context for tracking visitor engagement
const LeadScoringContext = createContext(null)

// Lead scoring values for different interactions
const LEAD_VALUES = {
  page_view: 1,
  blog_read: 2,
  resource_view: 3,
  calculator_use: 10,
  comparison_view: 5,
  contact_page: 8,
  form_start: 15,
  form_submit: 50,
  phone_click: 25,
  email_click: 20,
  scroll_25: 1,
  scroll_50: 2,
  scroll_75: 3,
  scroll_100: 5,
  time_30s: 2,
  time_60s: 3,
  time_120s: 5,
  return_visit: 10
}

// Categories for different content types
const PAGE_CATEGORIES = {
  '/blog': 'blog',
  '/resources': 'resource',
  '/services': 'service',
  '/industries': 'industry',
  '/locations': 'location',
  '/contact': 'contact',
  '/print-cost-calculator': 'tool',
  '/print-management-comparison': 'tool',
  '/resource-library': 'resource'
}

export const useLeadScoring = () => {
  const context = useContext(LeadScoringContext)
  if (!context) {
    return {
      score: 0,
      interactions: [],
      addInteraction: () => {},
      getLeadGrade: () => 'cold'
    }
  }
  return context
}

export const AnalyticsProvider = ({ children }) => {
  const location = useLocation()
  const [score, setScore] = useState(() => {
    try {
      const saved = localStorage.getItem('ips_lead_score')
      return saved ? parseInt(saved, 10) : 0
    } catch {
      return 0
    }
  })
  const [interactions, setInteractions] = useState(() => {
    try {
      const saved = localStorage.getItem('ips_interactions')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [scrollMilestones, setScrollMilestones] = useState({})
  const [pageStartTime, setPageStartTime] = useState(Date.now())
  const [timeMilestones, setTimeMilestones] = useState({})

  // Add an interaction and update score
  const addInteraction = useCallback((type, metadata = {}) => {
    const value = LEAD_VALUES[type] || 1
    const interaction = {
      type,
      value,
      timestamp: Date.now(),
      path: location.pathname,
      ...metadata
    }

    setInteractions(prev => {
      const updated = [...prev, interaction].slice(-100) // Keep last 100
      try {
        localStorage.setItem('ips_interactions', JSON.stringify(updated))
      } catch {}
      return updated
    })

    setScore(prev => {
      const updated = prev + value
      try {
        localStorage.setItem('ips_lead_score', String(updated))
      } catch {}
      return updated
    })

    // Also track in GA4
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'lead_scoring', {
        event_category: 'Lead Generation',
        event_label: type,
        value: value,
        custom_parameters: {
          total_score: score + value,
          interaction_type: type,
          ...metadata
        }
      })
    }
  }, [location.pathname, score])

  // Get lead grade based on score
  const getLeadGrade = useCallback(() => {
    if (score >= 100) return 'hot'
    if (score >= 50) return 'warm'
    if (score >= 20) return 'interested'
    return 'cold'
  }, [score])

  // Track page views
  useEffect(() => {
    // Reset scroll and time milestones for new page
    setScrollMilestones({})
    setTimeMilestones({})
    setPageStartTime(Date.now())

    // Track page view
    trackPageView(window.location.href, document.title)

    // Determine page category and add appropriate interaction
    const path = location.pathname
    let category = 'page_view'

    for (const [prefix, cat] of Object.entries(PAGE_CATEGORIES)) {
      if (path.startsWith(prefix)) {
        category = cat === 'blog' ? 'blog_read' :
                   cat === 'resource' ? 'resource_view' :
                   cat === 'tool' ? 'calculator_use' :
                   cat === 'contact' ? 'contact_page' : 'page_view'
        break
      }
    }

    addInteraction(category, { page: path })

    // Check for return visit
    const lastVisit = localStorage.getItem('ips_last_visit')
    const now = Date.now()
    if (lastVisit) {
      const daysSinceLastVisit = (now - parseInt(lastVisit, 10)) / (1000 * 60 * 60 * 24)
      if (daysSinceLastVisit >= 1 && daysSinceLastVisit <= 30) {
        addInteraction('return_visit')
      }
    }
    localStorage.setItem('ips_last_visit', String(now))
  }, [location.pathname, addInteraction])

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      if (documentHeight <= 0) return

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100)

      const milestones = [25, 50, 75, 100]
      for (const milestone of milestones) {
        if (scrollPercent >= milestone && !scrollMilestones[milestone]) {
          setScrollMilestones(prev => ({ ...prev, [milestone]: true }))
          trackScrollDepth(milestone)
          addInteraction(`scroll_${milestone}`)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollMilestones, addInteraction])

  // Track time on page
  useEffect(() => {
    const checkTimeOnPage = () => {
      const timeSpent = (Date.now() - pageStartTime) / 1000

      if (timeSpent >= 30 && !timeMilestones['30']) {
        setTimeMilestones(prev => ({ ...prev, '30': true }))
        addInteraction('time_30s')
      }
      if (timeSpent >= 60 && !timeMilestones['60']) {
        setTimeMilestones(prev => ({ ...prev, '60': true }))
        addInteraction('time_60s')
      }
      if (timeSpent >= 120 && !timeMilestones['120']) {
        setTimeMilestones(prev => ({ ...prev, '120': true }))
        addInteraction('time_120s')
      }
    }

    const interval = setInterval(checkTimeOnPage, 5000)

    // Track time when leaving page
    const handleBeforeUnload = () => {
      const timeSpent = (Date.now() - pageStartTime) / 1000
      if (timeSpent > 10) {
        trackTimeOnPage(timeSpent, location.pathname)
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      clearInterval(interval)
      window.removeEventListener('beforeunload', handleBeforeUnload)

      // Track time when navigating away
      const timeSpent = (Date.now() - pageStartTime) / 1000
      if (timeSpent > 10) {
        trackTimeOnPage(timeSpent, location.pathname)
      }
    }
  }, [pageStartTime, timeMilestones, location.pathname, addInteraction])

  const contextValue = {
    score,
    interactions,
    addInteraction,
    getLeadGrade
  }

  return (
    <LeadScoringContext.Provider value={contextValue}>
      {children}
    </LeadScoringContext.Provider>
  )
}

export default AnalyticsProvider
