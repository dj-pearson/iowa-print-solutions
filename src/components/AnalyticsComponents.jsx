import React, { useEffect, useState } from 'react'
import { trackScrollDepth, trackTimeOnPage } from '../utils/analytics'
import { getPageType } from '../utils/analyticsConfig'

// Hook for tracking user engagement metrics
export const useEngagementTracking = () => {
  const [scrollDepth, setScrollDepth] = useState(0)
  const [timeOnPage, setTimeOnPage] = useState(0)
  const [hasTracked25, setHasTracked25] = useState(false)
  const [hasTracked50, setHasTracked50] = useState(false)
  const [hasTracked75, setHasTracked75] = useState(false)
  const [hasTracked100, setHasTracked100] = useState(false)

  useEffect(() => {
    const startTime = Date.now()
    
    // Track scroll depth
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100)
      
      setScrollDepth(scrollPercent)
      
      // Track milestone scroll depths
      if (scrollPercent >= 25 && !hasTracked25) {
        trackScrollDepth(25)
        setHasTracked25(true)
      }
      if (scrollPercent >= 50 && !hasTracked50) {
        trackScrollDepth(50)
        setHasTracked50(true)
      }
      if (scrollPercent >= 75 && !hasTracked75) {
        trackScrollDepth(75)
        setHasTracked75(true)
      }
      if (scrollPercent >= 100 && !hasTracked100) {
        trackScrollDepth(100)
        setHasTracked100(true)
      }
    }
    
    // Track time on page
    const trackTime = () => {
      const currentTime = (Date.now() - startTime) / 1000
      setTimeOnPage(currentTime)
    }
    
    const timeInterval = setInterval(trackTime, 5000) // Track every 5 seconds
    
    window.addEventListener('scroll', handleScroll)
    
    // Track time when user leaves page
    const handleBeforeUnload = () => {
      const finalTime = (Date.now() - startTime) / 1000
      trackTimeOnPage(finalTime, window.location.pathname)
    }
    
    window.addEventListener('beforeunload', handleBeforeUnload)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      clearInterval(timeInterval)
      
      // Track final time on page
      const finalTime = (Date.now() - startTime) / 1000
      if (finalTime > 10) { // Only track if user stayed more than 10 seconds
        trackTimeOnPage(finalTime, window.location.pathname)
      }
    }
  }, [hasTracked25, hasTracked50, hasTracked75, hasTracked100])
  
  return { scrollDepth, timeOnPage }
}

// Component for tracking specific element visibility
export const VisibilityTracker = ({ children, eventName, category, threshold = 0.5 }) => {
  const [hasTracked, setHasTracked] = useState(false)
  const elementRef = React.useRef()
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked) {
          // Track element visibility
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'element_view', {
              event_category: category,
              event_label: eventName,
              custom_parameters: {
                element_visible: true
              }
            })
          }
          setHasTracked(true)
        }
      },
      { threshold }
    )
    
    if (elementRef.current) {
      observer.observe(elementRef.current)
    }
    
    return () => observer.disconnect()
  }, [eventName, category, threshold, hasTracked])
  
  return <div ref={elementRef}>{children}</div>
}

// Enhanced form tracking component
export const FormTracker = ({ children, formType, onSubmit, ...props }) => {
  const handleSubmit = (e) => {
    // Track form interaction
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'form_start', {
        event_category: 'Lead Generation',
        event_label: formType,
        custom_parameters: {
          form_type: formType,
          page_location: window.location.pathname
        }
      })
    }
    
    if (onSubmit) {
      onSubmit(e)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  )
}

// Phone number tracking component
export const PhoneTracker = ({ phoneNumber, location, className, children }) => {
  const handlePhoneClick = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: location,
        custom_parameters: {
          phone_number: phoneNumber,
          click_location: location,
          page_path: window.location.pathname
        }
      })
    }
  }
  
  return (
    <a 
      href={`tel:${phoneNumber}`}
      className={className}
      onClick={handlePhoneClick}
    >
      {children}
    </a>
  )
}

// Email tracking component
export const EmailTracker = ({ email, subject, className, children }) => {
  const handleEmailClick = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'email_click', {
        event_category: 'Contact',
        event_label: 'Email Click',
        custom_parameters: {
          email_address: email,
          subject: subject,
          page_path: window.location.pathname
        }
      })
    }
  }
  
  return (
    <a 
      href={`mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`}
      className={className}
      onClick={handleEmailClick}
    >
      {children}
    </a>
  )
}

// Download tracking component
export const DownloadTracker = ({ fileName, category, href, className, children }) => {
  const handleDownload = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'file_download', {
        event_category: category || 'Resources',
        event_label: fileName,
        custom_parameters: {
          file_name: fileName,
          download_url: href,
          page_path: window.location.pathname
        }
      })
    }
  }
  
  return (
    <a 
      href={href}
      className={className}
      onClick={handleDownload}
      download
    >
      {children}
    </a>
  )
}

// External link tracking component
export const ExternalLinkTracker = ({ href, label, className, children }) => {
  const handleExternalClick = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'click', {
        event_category: 'External Link',
        event_label: label || href,
        custom_parameters: {
          external_url: href,
          link_text: label,
          page_path: window.location.pathname
        }
      })
    }
  }
  
  return (
    <a 
      href={href}
      className={className}
      onClick={handleExternalClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

// Search tracking component
export const SearchTracker = ({ onSearch, placeholder, className }) => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      // Track search
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'search', {
          search_term: searchTerm,
          event_category: 'Site Search',
          custom_parameters: {
            search_location: window.location.pathname
          }
        })
      }
      
      if (onSearch) {
        onSearch(searchTerm)
      }
    }
  }
  
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className={className}
      />
      <button type="submit">Search</button>
    </form>
  )
}

// Video tracking component
export const VideoTracker = ({ videoId, title, src, ...props }) => {
  const handlePlay = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'video_play', {
        event_category: 'Video',
        event_label: title,
        custom_parameters: {
          video_id: videoId,
          video_title: title,
          page_path: window.location.pathname
        }
      })
    }
  }
  
  return (
    <video
      onPlay={handlePlay}
      src={src}
      {...props}
    />
  )
}