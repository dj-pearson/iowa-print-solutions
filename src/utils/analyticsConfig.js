// Analytics configuration for Iowa Print Solutions
export const GA_CONFIG = {
  // Replace with your actual Google Analytics 4 measurement ID
  MEASUREMENT_ID: 'G-XXXXXXXXXX',
  
  // Enable debug mode for development
  DEBUG_MODE: process.env.NODE_ENV === 'development',
  
  // Custom events configuration
  EVENTS: {
    // Conversion events
    FORM_SUBMISSION: 'form_submission',
    PHONE_CALL: 'phone_call',
    RESOURCE_DOWNLOAD: 'resource_download',
    CALCULATOR_COMPLETED: 'calculator_completed',
    
    // Engagement events
    SCROLL_DEPTH: 'scroll',
    TIME_ON_PAGE: 'timing_complete',
    VIDEO_PLAY: 'video_play',
    
    // Business-specific events
    IOWA_BUSINESS_INTERACTION: 'iowa_business_interaction',
    INDUSTRY_INTEREST: 'industry_page_view',
    LOCATION_INTEREST: 'location_page_view',
    COMPARISON_VIEW: 'comparison_interaction',
    
    // Lead generation events
    QUOTE_REQUEST: 'quote_request',
    CONSULTATION_REQUEST: 'consultation_request',
    DEMO_REQUEST: 'demo_request'
  },
  
  // Event categories
  CATEGORIES: {
    LEAD_GENERATION: 'Lead Generation',
    ENGAGEMENT: 'Engagement',
    CONTACT: 'Contact',
    TOOLS: 'Tools',
    RESOURCES: 'Resources',
    IOWA_BUSINESS: 'Iowa Business',
    INDUSTRY_INTEREST: 'Industry Interest',
    LOCATION_INTEREST: 'Location Interest'
  },
  
  // Conversion values for lead scoring
  LEAD_VALUES: {
    CONTACT_FORM: 50,
    PHONE_CALL: 75,
    QUOTE_REQUEST: 100,
    DEMO_REQUEST: 150,
    CONSULTATION_REQUEST: 200,
    RESOURCE_DOWNLOAD: 25,
    CALCULATOR_USE: 40
  },
  
  // Industry-specific tracking
  INDUSTRIES: {
    HEALTHCARE: 'Healthcare',
    EDUCATION: 'Education',
    GOVERNMENT: 'Government',
    LEGAL: 'Legal',
    FINANCE: 'Finance',
    MANUFACTURING: 'Manufacturing',
    NONPROFIT: 'Non-Profit'
  },
  
  // Iowa cities for location tracking
  IOWA_CITIES: {
    DES_MOINES: 'Des Moines',
    CEDAR_RAPIDS: 'Cedar Rapids',
    DAVENPORT: 'Davenport',
    SIOUX_CITY: 'Sioux City',
    IOWA_CITY: 'Iowa City',
    WATERLOO: 'Waterloo',
    AMES: 'Ames',
    WEST_DES_MOINES: 'West Des Moines'
  },
  
  // Custom dimensions for advanced tracking
  CUSTOM_DIMENSIONS: {
    USER_TYPE: 'user_type',
    COMPANY_SIZE: 'company_size',
    INDUSTRY: 'industry',
    IOWA_CITY: 'iowa_city',
    LEAD_SOURCE: 'lead_source',
    PAGE_TYPE: 'page_type',
    CONTENT_CATEGORY: 'content_category'
  }
}

// Helper function to get lead value based on action
export const getLeadValue = (actionType) => {
  return GA_CONFIG.LEAD_VALUES[actionType] || 0
}

// Helper function to determine organization size category
export const getOrgSizeCategory = (employeeCount) => {
  if (employeeCount <= 25) return 'Small (1-25)'
  if (employeeCount <= 100) return 'Medium (26-100)'
  if (employeeCount <= 500) return 'Large (101-500)'
  return 'Enterprise (500+)'
}

// Helper function to categorize page types
export const getPageType = (pathname) => {
  if (pathname === '/' || pathname === '/home') return 'Homepage'
  if (pathname.includes('/services')) return 'Service Page'
  if (pathname.includes('/locations')) return 'Location Page'
  if (pathname.includes('/industries')) return 'Industry Page'
  if (pathname.includes('/resources')) return 'Resource Page'
  if (pathname.includes('/blog')) return 'Blog Page'
  if (pathname.includes('/tools')) return 'Tool Page'
  if (pathname.includes('/about')) return 'About Page'
  if (pathname.includes('/contact')) return 'Contact Page'
  return 'Other'
}

// Enhanced conversion tracking for different lead types
export const CONVERSION_MAPPING = {
  'contact-form': {
    value: GA_CONFIG.LEAD_VALUES.CONTACT_FORM,
    category: GA_CONFIG.CATEGORIES.LEAD_GENERATION,
    label: 'Contact Form Submission'
  },
  'quote-request': {
    value: GA_CONFIG.LEAD_VALUES.QUOTE_REQUEST,
    category: GA_CONFIG.CATEGORIES.LEAD_GENERATION,
    label: 'Quote Request'
  },
  'demo-request': {
    value: GA_CONFIG.LEAD_VALUES.DEMO_REQUEST,
    category: GA_CONFIG.CATEGORIES.LEAD_GENERATION,
    label: 'Demo Request'
  },
  'consultation-request': {
    value: GA_CONFIG.LEAD_VALUES.CONSULTATION_REQUEST,
    category: GA_CONFIG.CATEGORIES.LEAD_GENERATION,
    label: 'Consultation Request'
  },
  'resource-download': {
    value: GA_CONFIG.LEAD_VALUES.RESOURCE_DOWNLOAD,
    category: GA_CONFIG.CATEGORIES.RESOURCES,
    label: 'Resource Download'
  },
  'phone-call': {
    value: GA_CONFIG.LEAD_VALUES.PHONE_CALL,
    category: GA_CONFIG.CATEGORIES.CONTACT,
    label: 'Phone Call'
  },
  'calculator-use': {
    value: GA_CONFIG.LEAD_VALUES.CALCULATOR_USE,
    category: GA_CONFIG.CATEGORIES.TOOLS,
    label: 'Calculator Usage'
  }
}