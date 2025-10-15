import React, { useState, useEffect } from 'react'
import { trackEvent } from '../utils/analytics'
import { GA_CONFIG, getOrgSizeCategory } from '../utils/analyticsConfig'

export const useLeadScoring = () => {
  const [leadScore, setLeadScore] = useState(0)
  const [engagementLevel, setEngagementLevel] = useState('cold')
  const [userProfile, setUserProfile] = useState({
    visitCount: 0,
    pagesViewed: [],
    timeOnSite: 0,
    interactions: [],
    lastVisit: null,
    interests: []
  })

  useEffect(() => {
    // Load existing profile from localStorage
    try {
      const savedProfile = localStorage.getItem('ips_user_profile')
      if (savedProfile) {
        const profile = JSON.parse(savedProfile)
        // Ensure all required properties exist with defaults
        const safeProfile = {
          visitCount: profile.visitCount || 0,
          pagesViewed: Array.isArray(profile.pagesViewed) ? profile.pagesViewed : [],
          timeOnSite: profile.timeOnSite || 0,
          interactions: Array.isArray(profile.interactions) ? profile.interactions : [],
          lastVisit: profile.lastVisit || null,
          interests: Array.isArray(profile.interests) ? profile.interests : []
        }
        setUserProfile(safeProfile)
        calculateLeadScore(safeProfile)
      }
    } catch (error) {
      console.warn('Error loading user profile from localStorage:', error)
      // Reset to defaults if parsing fails
      localStorage.removeItem('ips_user_profile')
    }
  }, [])

  const updateUserProfile = (updates) => {
    const newProfile = { ...userProfile, ...updates, lastVisit: Date.now() }
    setUserProfile(newProfile)
    localStorage.setItem('ips_user_profile', JSON.stringify(newProfile))
    calculateLeadScore(newProfile)
  }

  const addPageView = (pathname, title) => {
    const pageType = getPageType(pathname)
    const currentPages = Array.isArray(userProfile.pagesViewed) ? userProfile.pagesViewed : []
    const newPages = [...currentPages, { path: pathname, title, timestamp: Date.now(), type: pageType }]
    
    updateUserProfile({
      visitCount: userProfile.visitCount + 1,
      pagesViewed: newPages,
      interests: updateInterests(pathname, Array.isArray(userProfile.interests) ? userProfile.interests : [])
    })

    // Track high-value page views
    if (pageType === 'Calculator' || pageType === 'Industry Page') {
      trackEvent('high_value_page_view', 'Lead Scoring', pageType)
    }
  }

  const addInteraction = (type, details) => {
    const interaction = {
      type,
      details,
      timestamp: Date.now(),
      value: getInteractionValue(type)
    }

    const currentInteractions = Array.isArray(userProfile.interactions) ? userProfile.interactions : []
    const newInteractions = [...currentInteractions, interaction]
    updateUserProfile({ interactions: newInteractions })

    // Track significant interactions
    if (interaction.value >= 50) {
      trackEvent('significant_interaction', 'Lead Scoring', type)
    }
  }

  const addTimeSpent = (additionalTime) => {
    updateUserProfile({
      timeOnSite: userProfile.timeOnSite + additionalTime
    })
  }

  const calculateLeadScore = (profile) => {
    let score = 0

    // Page visit scoring
    score += Math.min(profile.visitCount * 5, 50) // Max 50 points for visits

    // Page type scoring (with null checks)
    const pagesViewed = Array.isArray(profile.pagesViewed) ? profile.pagesViewed : []
    const industryPages = pagesViewed.filter(p => p && p.type === 'Industry Page').length
    const toolPages = pagesViewed.filter(p => p && p.type === 'Tool Page').length
    const servicePages = pagesViewed.filter(p => p && p.type === 'Service Page').length

    score += industryPages * 15 // High value for industry interest
    score += toolPages * 20 // Very high value for tool usage
    score += servicePages * 10 // Medium value for service interest

    // Time on site scoring
    const timeMinutes = profile.timeOnSite / (1000 * 60)
    if (timeMinutes > 10) score += 20
    if (timeMinutes > 30) score += 30
    if (timeMinutes > 60) score += 50

    // Interaction scoring (with null check)
    const interactions = Array.isArray(profile.interactions) ? profile.interactions : []
    const interactionScore = interactions.reduce((sum, interaction) => {
      return sum + interaction.value
    }, 0)
    score += interactionScore

    // Recency bonus
    const hoursSinceLastVisit = (Date.now() - profile.lastVisit) / (1000 * 60 * 60)
    if (hoursSinceLastVisit < 24) score += 10
    if (hoursSinceLastVisit < 1) score += 20

    // Interest diversity bonus (with null check)
    const interests = Array.isArray(profile.interests) ? profile.interests : []
    const uniqueInterests = [...new Set(interests)]
    if (uniqueInterests.length > 2) score += 15

    setLeadScore(Math.min(score, 300)) // Cap at 300
    setEngagementLevel(getEngagementLevel(score))

    // Track lead score milestones
    if (score >= 100 && leadScore < 100) {
      trackEvent('lead_score_milestone', 'Lead Scoring', 'Qualified Lead (100+)')
    }
    if (score >= 200 && leadScore < 200) {
      trackEvent('lead_score_milestone', 'Lead Scoring', 'Hot Lead (200+)')
    }
  }

  const getPageType = (pathname) => {
    if (pathname === '/' || pathname === '/home') return 'Homepage'
    if (pathname.includes('/industries/')) return 'Industry Page'
    if (pathname.includes('/print-cost-calculator')) return 'Calculator'
    if (pathname.includes('/print-management-comparison')) return 'Comparison Tool'
    if (pathname.includes('/services')) return 'Service Page'
    if (pathname.includes('/locations')) return 'Location Page'
    if (pathname.includes('/resources')) return 'Resource Page'
    if (pathname.includes('/contact')) return 'Contact Page'
    return 'Other'
  }

  const updateInterests = (pathname, currentInterests) => {
    const interests = [...currentInterests]
    
    if (pathname.includes('healthcare')) interests.push('Healthcare')
    if (pathname.includes('education')) interests.push('Education')
    if (pathname.includes('papercut')) interests.push('PaperCut')
    if (pathname.includes('uniflow')) interests.push('uniFLOW')
    if (pathname.includes('cost-calculator')) interests.push('Cost Analysis')
    if (pathname.includes('comparison')) interests.push('Solution Comparison')
    if (pathname.includes('security')) interests.push('Print Security')

    return [...new Set(interests)] // Remove duplicates
  }

  const getInteractionValue = (type) => {
    const values = {
      'phone_click': 75,
      'email_click': 50,
      'form_start': 40,
      'form_submit': 100,
      'download': 60,
      'calculator_complete': 80,
      'quote_request': 120,
      'demo_request': 150,
      'consultation_request': 200,
      'video_play': 30,
      'scroll_75': 15,
      'scroll_100': 25,
      'external_link': 10,
      'search': 20
    }
    return values[type] || 0
  }

  const getEngagementLevel = (score) => {
    if (score >= 200) return 'hot'
    if (score >= 100) return 'warm'
    if (score >= 50) return 'interested'
    return 'cold'
  }

  const getLeadQuality = () => {
    const { interests, interactions, timeOnSite, pagesViewed } = userProfile

    const hasHighValueInteractions = interactions.some(i => i.value >= 75)
    const hasIndustryInterest = interests.some(i => ['Healthcare', 'Education'].includes(i))
    const hasToolUsage = pagesViewed.some(p => p.type === 'Calculator' || p.type === 'Comparison Tool')
    const hasSignificantTimeSpent = timeOnSite > 30 * 60 * 1000 // 30 minutes

    if (hasHighValueInteractions && hasToolUsage && hasIndustryInterest) {
      return 'premium'
    }
    if (hasHighValueInteractions || (hasToolUsage && hasIndustryInterest)) {
      return 'qualified'
    }
    if (hasSignificantTimeSpent || interests.length > 1) {
      return 'interested'
    }
    return 'visitor'
  }

  const shouldShowAggressiveCTA = () => {
    return engagementLevel === 'hot' || leadScore >= 150
  }

  const getPersonalizedMessage = () => {
    const { interests } = userProfile
    const quality = getLeadQuality()

    if (interests.includes('Healthcare')) {
      if (quality === 'premium') {
        return "Healthcare organizations save an average of $15,000 annually with our HIPAA-compliant print solutions."
      }
      return "Discover secure print solutions designed specifically for Iowa healthcare organizations."
    }

    if (interests.includes('Education')) {
      if (quality === 'premium') {
        return "Iowa schools reduce printing costs by 40% on average with PaperCut education licensing."
      }
      return "Learn how Iowa schools are saving money and improving efficiency with print management."
    }

    if (interests.includes('Cost Analysis')) {
      return "Based on your cost analysis, you could save significantly with professional print management."
    }

    if (quality === 'premium') {
      return "You've shown significant interest in print management solutions. Let's discuss your specific needs."
    }

    return "Iowa businesses trust our print management expertise. Discover your savings potential."
  }

  return {
    leadScore,
    engagementLevel,
    userProfile,
    addPageView,
    addInteraction,
    addTimeSpent,
    getLeadQuality: getLeadQuality(),
    shouldShowAggressiveCTA: shouldShowAggressiveCTA(),
    personalizedMessage: getPersonalizedMessage()
  }
}

// Smart CTA Component with Lead Scoring
export const SmartLeadCTA = ({ defaultCTA, urgentCTA, premiumCTA }) => {
  // const { engagementLevel, getLeadQuality, personalizedMessage, shouldShowAggressiveCTA } = useLeadScoring()
  
  const getCTA = () => {
    // if (shouldShowAggressiveCTA && premiumCTA) return premiumCTA
    // if (engagementLevel === 'warm' && urgentCTA) return urgentCTA
    return defaultCTA
  }

  const cta = getCTA()

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg">
      <p className="text-lg mb-4">{personalizedMessage}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={cta.primaryLink}
          className="bg-yellow-400 text-blue-900 px-6 py-3 rounded font-bold hover:bg-yellow-300 transition-colors text-center"
          onClick={() => trackEvent('smart_cta_click', 'Lead Scoring', `${engagementLevel}_${getLeadQuality}`)}
        >
          {cta.primaryText}
        </a>
        {cta.secondaryLink && (
          <a
            href={cta.secondaryLink}
            className="border-2 border-white text-white px-6 py-3 rounded font-bold hover:bg-white hover:text-blue-600 transition-colors text-center"
            onClick={() => trackEvent('smart_cta_secondary', 'Lead Scoring', `${engagementLevel}_${getLeadQuality}`)}
          >
            {cta.secondaryText}
          </a>
        )}
      </div>
      {shouldShowAggressiveCTA && (
        <div className="mt-4 text-sm opacity-90">
          <p>🔥 Limited time: Free implementation for qualifying organizations</p>
        </div>
      )}
    </div>
  )
}

// Behavioral Trigger Component
export const BehaviorTrigger = ({ children, triggerType, threshold = 1 }) => {
  // const { addInteraction } = useLeadScoring()
  const [triggerCount, setTriggerCount] = useState(0)

  const handleTrigger = () => {
    const newCount = triggerCount + 1
    setTriggerCount(newCount)
    
    if (newCount >= threshold) {
      // addInteraction(triggerType, { count: newCount })
    }
  }

  return (
    <div onClick={handleTrigger} onMouseEnter={handleTrigger}>
      {children}
    </div>
  )
}