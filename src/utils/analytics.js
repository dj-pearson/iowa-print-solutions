import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Initialize Google Analytics 4
export const initGA4 = (measurementId) => {
  // Load the Google Analytics script
  window.gtag = window.gtag || function() {
    (window.gtag.q = window.gtag.q || []).push(arguments)
  }
  window.gtag.l = +new Date()
  
  // Create and append the script tag
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
  
  // Initialize Google Analytics
  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true
  })
}

// Track page views
export const trackPageView = (url, title) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: url
    })
  }
}

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    })
  }
}

// Track conversions
export const trackConversion = (conversionType, value, location) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      event_category: 'Lead Generation',
      event_label: conversionType,
      value: value,
      custom_parameters: {
        conversion_type: conversionType,
        page_location: location
      }
    })
  }
}

// Track print cost calculator usage
export const trackCalculatorUsage = (employees, pagesPerMonth, orgType, savings) => {
  trackEvent('calculator_completed', 'Engagement', 'Print Cost Calculator', savings)
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'calculator_usage', {
      event_category: 'Tools',
      custom_parameters: {
        employees: employees,
        pages_per_month: pagesPerMonth,
        organization_type: orgType,
        estimated_savings: savings
      }
    })
  }
}

// Track resource downloads
export const trackResourceDownload = (resourceName, category, userInfo) => {
  trackEvent('download', 'Resource', resourceName)
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'resource_download', {
      event_category: 'Lead Generation',
      event_label: resourceName,
      custom_parameters: {
        resource_category: category,
        company: userInfo.company || 'Unknown',
        organization_type: userInfo.organizationType || 'Unknown'
      }
    })
  }
}

// Track phone calls
export const trackPhoneCall = (location, context) => {
  trackEvent('phone_call', 'Contact', location)
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'phone_call', {
      event_category: 'Contact',
      event_label: location,
      custom_parameters: {
        call_context: context,
        page_location: window.location.pathname
      }
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formType, formLocation) => {
  trackConversion(formType, 1, formLocation)
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'form_submission', {
      event_category: 'Lead Generation',
      event_label: formType,
      custom_parameters: {
        form_location: formLocation
      }
    })
  }
}

// Track comparison tool usage
export const trackComparisonView = (comparisonType, selectedSolution) => {
  trackEvent('comparison_view', 'Engagement', comparisonType)
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'comparison_interaction', {
      event_category: 'Tools',
      event_label: comparisonType,
      custom_parameters: {
        selected_solution: selectedSolution
      }
    })
  }
}

// Track industry page views
export const trackIndustryPageView = (industry) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'industry_page_view', {
      event_category: 'Industry Interest',
      event_label: industry,
      custom_parameters: {
        industry_focus: industry
      }
    })
  }
}

// Track location page views
export const trackLocationPageView = (city) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'location_page_view', {
      event_category: 'Location Interest',
      event_label: city,
      custom_parameters: {
        iowa_city: city
      }
    })
  }
}

// Hook for automatic page view tracking
export const usePageTracking = () => {
  const location = useLocation()
  
  useEffect(() => {
    trackPageView(window.location.href, document.title)
    
    // Track industry page views
    if (location.pathname.includes('/industries/iowa-healthcare')) {
      trackIndustryPageView('Healthcare')
    } else if (location.pathname.includes('/industries/iowa-education')) {
      trackIndustryPageView('Education')
    }
    
    // Track location page views
    if (location.pathname.includes('/locations/')) {
      const city = location.pathname.split('/').pop().replace('-print-management', '').replace('-', ' ')
      trackLocationPageView(city)
    }
    
    // Track tool page views
    if (location.pathname.includes('/print-cost-calculator')) {
      trackEvent('page_view', 'Tools', 'Print Cost Calculator')
    } else if (location.pathname.includes('/print-management-comparison')) {
      trackEvent('page_view', 'Tools', 'Solution Comparison')
    } else if (location.pathname.includes('/resource-library')) {
      trackEvent('page_view', 'Resources', 'Resource Library')
    }
    
  }, [location])
}

// Enhanced event tracking for specific Iowa business interactions
export const trackIowaBusinessEvent = (eventType, businessType, city) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'iowa_business_interaction', {
      event_category: 'Iowa Business',
      event_label: eventType,
      custom_parameters: {
        business_type: businessType,
        iowa_city: city,
        interaction_type: eventType
      }
    })
  }
}

// Track scroll depth for engagement
export const trackScrollDepth = (depth) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'scroll', {
      event_category: 'Engagement',
      event_label: `${depth}% Scroll`,
      custom_parameters: {
        scroll_depth: depth
      }
    })
  }
}

// Track time on page
export const trackTimeOnPage = (timeSpent, pagePath) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'timing_complete', {
      event_category: 'Engagement',
      name: 'page_time',
      value: Math.round(timeSpent),
      custom_parameters: {
        page_path: pagePath
      }
    })
  }
}

// E-commerce-style tracking for lead value
export const trackLeadValue = (leadType, estimatedValue, source) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'purchase', {
      transaction_id: `lead_${Date.now()}`,
      value: estimatedValue,
      currency: 'USD',
      items: [{
        item_id: leadType,
        item_name: `${leadType} Lead`,
        category: 'Lead Generation',
        quantity: 1,
        price: estimatedValue
      }],
      custom_parameters: {
        lead_source: source,
        lead_type: leadType
      }
    })
  }
}