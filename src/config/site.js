/**
 * Centralized site configuration for Iowa Print Solutions
 * Single source of truth for business info, SEO defaults, and structured data
 */

export const siteConfig = {
  // Basic site info
  name: 'Iowa Print Solutions',
  tagline: 'Leading Print Management Solutions in Iowa',
  url: 'https://iowaprintsolutions.com',
  logo: '/IPSLogo.png',
  logoFull: 'https://iowaprintsolutions.com/IPSLogo.png',
  defaultOgImage: '/og-image.jpg',

  // Business entity
  business: {
    legalName: 'Infomax Office Systems',
    alternateName: 'Iowa Print Solutions',
    foundingDate: '1958',
    phone: '+1-515-237-2352',
    phoneDisplay: '(515) 237-2352',
    email: 'gfleschinfomaxoffice@gmail.com',
    website: 'https://www.infomaxoffice.com',
    priceRange: '$$',
  },

  // Primary address
  address: {
    street: '5619 NE 14th St',
    city: 'Des Moines',
    state: 'IA',
    stateFullName: 'Iowa',
    zip: '50313',
    country: 'US',
    countryFullName: 'United States',
  },

  // Geo coordinates (Des Moines center)
  geo: {
    latitude: 41.5868,
    longitude: -93.6250,
    // Iowa center for general state targeting
    iowaCenter: {
      latitude: 42.0046,
      longitude: -93.214,
    }
  },

  // Social profiles
  social: {
    facebook: 'https://www.facebook.com/infomaxofficesystems',
    linkedin: 'https://www.linkedin.com/company/infomax-office-systems',
    googleMaps: 'https://maps.google.com/maps?cid=12345678901234567890',
  },

  // Business hours
  hours: {
    weekdays: '08:00-17:00',
    saturday: 'Closed',
    sunday: 'Closed',
    timezone: 'America/Chicago',
  },

  // SEO defaults
  seo: {
    titleSuffix: ' | Iowa Print Solutions',
    defaultTitle: 'Iowa Print Solutions - Leading Print Management Solutions in Iowa',
    defaultDescription: "Iowa's premier resource for print management solutions. Expert information on PaperCut, Uniflow, and PrinterLogic implementations. Connect with Infomax Office Systems for professional services.",
    defaultKeywords: [
      'Iowa print solutions',
      'print management Iowa',
      'PaperCut Iowa',
      'Uniflow Iowa',
      'PrinterLogic Iowa',
      'Infomax Office Systems',
      'print security',
      'managed print services',
      'document management Iowa',
    ],
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  },

  // Service areas
  serviceAreas: {
    state: 'Iowa',
    stateAbbr: 'IA',
    cities: [
      { name: 'Des Moines', region: 'Central Iowa', slug: 'des-moines', isCapital: true },
      { name: 'Cedar Rapids', region: 'Eastern Iowa', slug: 'cedar-rapids' },
      { name: 'Iowa City', region: 'Eastern Iowa', slug: 'iowa-city' },
      { name: 'Davenport', region: 'Quad Cities', slug: 'davenport' },
      { name: 'Waterloo', region: 'Cedar Valley', slug: 'waterloo' },
      { name: 'Cedar Falls', region: 'Cedar Valley', slug: 'cedar-falls' },
      { name: 'Sioux City', region: 'Northwest Iowa', slug: 'sioux-city' },
      { name: 'Dubuque', region: 'Northeast Iowa', slug: 'dubuque' },
      { name: 'Council Bluffs', region: 'Southwest Iowa', slug: 'council-bluffs' },
      { name: 'Ames', region: 'Central Iowa', slug: 'ames' },
      { name: 'West Des Moines', region: 'Central Iowa', slug: 'west-des-moines' },
      { name: 'Ankeny', region: 'Central Iowa', slug: 'ankeny' },
    ],
  },

  // Products/Services offered
  products: [
    {
      id: 'papercut',
      name: 'PaperCut MF',
      fullName: 'PaperCut Print Management',
      description: 'Comprehensive print management software for cost control, security, and environmental tracking',
      category: 'Print Management Software',
      path: '/services/papercut-iowa',
    },
    {
      id: 'uniflow',
      name: 'uniFLOW',
      fullName: 'Canon uniFLOW',
      description: 'Enterprise print management with advanced security, document workflows, and Canon integration',
      category: 'Print Management Software',
      path: '/services/uniflow-iowa',
    },
    {
      id: 'printerlogic',
      name: 'PrinterLogic',
      fullName: 'PrinterLogic Serverless Printing',
      description: 'Cloud-based serverless print management eliminating print servers with direct IP printing',
      category: 'Print Management Software',
      path: '/services/printerlogic-iowa',
    },
  ],

  // Industries served
  industries: [
    {
      id: 'healthcare',
      name: 'Healthcare',
      description: 'HIPAA-compliant print management for hospitals, clinics, and medical practices',
      compliance: ['HIPAA'],
      path: '/industries/iowa-healthcare-print-solutions',
    },
    {
      id: 'education',
      name: 'Education',
      description: 'Print management for K-12 schools, community colleges, and universities',
      compliance: ['FERPA'],
      path: '/industries/iowa-education-print-solutions',
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      description: 'Secure document printing and cost control for Iowa manufacturers',
      compliance: [],
      path: null,
    },
    {
      id: 'government',
      name: 'Government',
      description: 'Secure print solutions for state and local government agencies',
      compliance: [],
      path: null,
    },
    {
      id: 'legal',
      name: 'Legal',
      description: 'Confidential document printing with audit trails for law firms',
      compliance: [],
      path: null,
    },
  ],

  // Content categories for blog/resources
  categories: {
    blog: [
      'AI & Technology',
      'Cloud Technology',
      'Comparison',
      'Cost Management',
      'Document Management',
      'Education',
      'Healthcare',
      'Local Services',
      'Managed Services',
      'Mobile Technology',
      'Product Updates',
      'ROI & Analysis',
      'Security',
      'Small Business',
      'Software Comparison',
      'Technology',
    ],
    resource: [
      'Implementation Guide',
      'Platform Guide',
      'Cost Guide',
      'Security Guide',
      'Comparison Guide',
    ],
  },

  // Author info for articles
  defaultAuthor: {
    name: 'Dan Pearson',
    title: 'Print Solutions Specialist',
    organization: 'Iowa Print Solutions',
  },

  // Ratings/Reviews aggregation
  ratings: {
    aggregateRating: 4.8,
    reviewCount: 150,
    bestRating: 5,
    worstRating: 1,
  },

  // Expertise areas (for schema.org knowsAbout)
  expertise: [
    'PaperCut MF',
    'uniFLOW',
    'PrinterLogic',
    'Print Management',
    'HIPAA Compliance',
    'FERPA Compliance',
    'Secure Printing',
    'Print Cost Control',
    'Mobile Printing',
    'Cloud Printing',
    'Healthcare Print Security',
    'Education Print Management',
    'Manufacturing Document Security',
  ],
}

// Helper function to generate canonical URL
export const getCanonicalUrl = (path = '') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.url}${cleanPath}`
}

// Helper function to get full page title
export const getPageTitle = (title) => {
  if (!title) return siteConfig.seo.defaultTitle
  return `${title}${siteConfig.seo.titleSuffix}`
}

// Helper function to combine keywords with defaults
export const getKeywords = (pageKeywords = []) => {
  const combined = [...pageKeywords, ...siteConfig.seo.defaultKeywords]
  return [...new Set(combined)].join(', ')
}

// Get city by slug
export const getCityBySlug = (slug) => {
  return siteConfig.serviceAreas.cities.find(city => city.slug === slug)
}

// Get product by id
export const getProductById = (id) => {
  return siteConfig.products.find(product => product.id === id)
}

// Get industry by id
export const getIndustryById = (id) => {
  return siteConfig.industries.find(industry => industry.id === id)
}

export default siteConfig
