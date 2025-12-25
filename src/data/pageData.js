/**
 * Programmatic SEO page data configuration
 * Enables scalable page generation with dynamic metadata
 */

import { siteConfig, getCanonicalUrl } from '../config/site'

// Location page configurations
export const locationPages = [
  {
    slug: 'des-moines-print-management',
    city: 'Des Moines',
    region: 'Central Iowa',
    isCapital: true,
    population: '215,000+',
    industries: ['Insurance', 'Government', 'Healthcare', 'Finance'],
    nearbyCities: ['West Des Moines', 'Ankeny', 'Urbandale', 'Johnston', 'Clive'],
    highlights: [
      'State capital with major corporate headquarters',
      'Growing tech and startup ecosystem',
      'Major healthcare and insurance hub',
    ],
    seo: {
      title: 'Print Management Solutions in Des Moines, Iowa',
      description: 'Expert print management services for Des Moines businesses. PaperCut, uniFLOW & PrinterLogic implementation with local support. Serving the Des Moines metro area.',
      keywords: ['Des Moines print management', 'Des Moines printing solutions', 'print software Des Moines Iowa', 'managed print Des Moines'],
    },
  },
  {
    slug: 'cedar-rapids-print-management',
    city: 'Cedar Rapids',
    region: 'Eastern Iowa',
    population: '135,000+',
    industries: ['Manufacturing', 'Healthcare', 'Food Processing', 'Technology'],
    nearbyCities: ['Marion', 'Hiawatha', 'North Liberty', 'Coralville'],
    highlights: [
      'Major manufacturing and industrial center',
      'Strong healthcare sector with multiple hospitals',
      'Growing technology corridor',
    ],
    seo: {
      title: 'Print Management Solutions in Cedar Rapids, Iowa',
      description: 'Professional print management for Cedar Rapids manufacturing and healthcare organizations. PaperCut, uniFLOW & PrinterLogic experts serving Eastern Iowa.',
      keywords: ['Cedar Rapids print management', 'Cedar Rapids printing solutions', 'print software Cedar Rapids', 'manufacturing print solutions Iowa'],
    },
  },
  {
    slug: 'iowa-city-print-management',
    city: 'Iowa City',
    region: 'Eastern Iowa',
    population: '75,000+',
    industries: ['Education', 'Healthcare', 'Research', 'Technology'],
    nearbyCities: ['Coralville', 'North Liberty', 'Tiffin', 'Solon'],
    highlights: [
      'Home to University of Iowa',
      'Major academic medical center (UIHC)',
      'UNESCO City of Literature',
    ],
    seo: {
      title: 'Print Management Solutions in Iowa City, Iowa',
      description: 'Print management solutions for University of Iowa, UIHC, and Iowa City businesses. Expert implementation of PaperCut, uniFLOW & PrinterLogic for education and healthcare.',
      keywords: ['Iowa City print management', 'University of Iowa printing', 'UIHC print solutions', 'education print management Iowa'],
    },
  },
  {
    slug: 'davenport-print-management',
    city: 'Davenport',
    region: 'Quad Cities',
    population: '100,000+',
    industries: ['Manufacturing', 'Healthcare', 'Logistics', 'Gaming'],
    nearbyCities: ['Bettendorf', 'Rock Island', 'Moline', 'East Moline'],
    highlights: [
      'Major Quad Cities metro area',
      'Mississippi River commerce hub',
      'Strong manufacturing heritage',
    ],
    seo: {
      title: 'Print Management Solutions in Davenport & Quad Cities, Iowa',
      description: 'Print management services for Davenport and the Quad Cities region. PaperCut, uniFLOW & PrinterLogic implementation for manufacturing and healthcare.',
      keywords: ['Davenport print management', 'Quad Cities printing solutions', 'print software Davenport', 'Iowa Illinois print management'],
    },
  },
  {
    slug: 'waterloo-cedar-falls-print-management',
    city: 'Waterloo-Cedar Falls',
    region: 'Cedar Valley',
    population: '170,000+',
    industries: ['Manufacturing', 'Education', 'Agriculture', 'Insurance'],
    nearbyCities: ['Waverly', 'Independence', 'Evansdale', 'Grundy Center'],
    highlights: [
      'Major manufacturing center with John Deere operations',
      'Home to University of Northern Iowa',
      'Growing regional healthcare hub',
    ],
    seo: {
      title: 'Print Management Solutions in Waterloo-Cedar Falls, Iowa',
      description: 'Print management for Waterloo-Cedar Falls manufacturing and UNI campus. PaperCut, uniFLOW & PrinterLogic solutions for the Cedar Valley region.',
      keywords: ['Waterloo print management', 'Cedar Falls printing', 'UNI print solutions', 'Cedar Valley print management'],
    },
  },
  {
    slug: 'sioux-city-print-management',
    city: 'Sioux City',
    region: 'Northwest Iowa',
    population: '85,000+',
    industries: ['Agriculture', 'Healthcare', 'Manufacturing', 'Transportation'],
    nearbyCities: ['South Sioux City', 'Sergeant Bluff', 'Le Mars', 'Storm Lake'],
    highlights: [
      'Tri-state metro area (Iowa, Nebraska, South Dakota)',
      'Major agricultural processing center',
      'Regional healthcare leader',
    ],
    seo: {
      title: 'Print Management Solutions in Sioux City, Iowa',
      description: 'Print management services for Sioux City and Northwest Iowa. PaperCut, uniFLOW & PrinterLogic implementation for agriculture and healthcare industries.',
      keywords: ['Sioux City print management', 'Northwest Iowa printing', 'print solutions Sioux City', 'tri-state print management'],
    },
  },
  {
    slug: 'dubuque-print-management',
    city: 'Dubuque',
    region: 'Northeast Iowa',
    population: '60,000+',
    industries: ['Manufacturing', 'Healthcare', 'Tourism', 'Technology'],
    nearbyCities: ['Platteville', 'Galena', 'East Dubuque', 'Dyersville'],
    highlights: [
      'Tri-state area on Mississippi River',
      'Strong manufacturing and tech sector',
      'Growing tourism industry',
    ],
    seo: {
      title: 'Print Management Solutions in Dubuque, Iowa',
      description: 'Print management for Dubuque businesses and the tri-state region. Expert PaperCut, uniFLOW & PrinterLogic implementation for manufacturing and healthcare.',
      keywords: ['Dubuque print management', 'Northeast Iowa printing', 'print solutions Dubuque', 'Mississippi River print management'],
    },
  },
  {
    slug: 'council-bluffs-print-management',
    city: 'Council Bluffs',
    region: 'Southwest Iowa',
    population: '65,000+',
    industries: ['Logistics', 'Gaming', 'Healthcare', 'Data Centers'],
    nearbyCities: ['Omaha', 'Bellevue', 'Carter Lake', 'Glenwood'],
    highlights: [
      'Part of Omaha metro area',
      'Major data center corridor',
      'Growing logistics hub',
    ],
    seo: {
      title: 'Print Management Solutions in Council Bluffs, Iowa',
      description: 'Print management services for Council Bluffs and the Omaha metro. PaperCut, uniFLOW & PrinterLogic for data centers, healthcare, and logistics.',
      keywords: ['Council Bluffs print management', 'Omaha metro printing', 'print solutions Council Bluffs', 'Southwest Iowa print management'],
    },
  },
]

// Industry page configurations
export const industryPages = [
  {
    slug: 'iowa-healthcare-print-solutions',
    industry: 'Healthcare',
    title: 'Healthcare Print Solutions for Iowa',
    description: 'HIPAA-compliant print management solutions for Iowa hospitals, clinics, and medical practices.',
    compliance: ['HIPAA', 'HITECH'],
    challenges: [
      'Protecting patient health information (PHI)',
      'Ensuring HIPAA compliance for all print activities',
      'Managing high-volume medical document printing',
      'Controlling costs across multiple departments',
    ],
    solutions: [
      'Secure print release with badge authentication',
      'Comprehensive audit trails for compliance',
      'Watermarking and confidential document handling',
      'Department-level cost allocation',
    ],
    keywords: ['HIPAA printing Iowa', 'healthcare print management', 'medical print security', 'hospital printing solutions'],
  },
  {
    slug: 'iowa-education-print-solutions',
    industry: 'Education',
    title: 'Education Print Solutions for Iowa',
    description: 'Print management solutions for Iowa K-12 schools, community colleges, and universities.',
    compliance: ['FERPA', 'COPPA'],
    challenges: [
      'Managing student printing quotas and costs',
      'Ensuring FERPA compliance for student records',
      'Supporting diverse device types (BYOD)',
      'Budget constraints and cost reduction',
    ],
    solutions: [
      'Student quota management and allocation',
      'FERPA-compliant secure printing',
      'Mobile and BYOD print support',
      'Department and class-level cost tracking',
    ],
    keywords: ['education print management Iowa', 'school printing solutions', 'university print management', 'FERPA compliant printing'],
  },
]

// Product page configurations
export const productPages = [
  {
    slug: 'papercut-iowa',
    product: 'PaperCut MF',
    title: 'PaperCut Print Management for Iowa',
    description: 'Expert PaperCut MF implementation and support for Iowa businesses, schools, and healthcare organizations.',
    features: [
      'Print tracking and cost management',
      'Secure print release (Find-Me printing)',
      'Mobile and BYOD printing support',
      'Advanced reporting and analytics',
      'Environmental impact tracking',
    ],
    benefits: [
      'Reduce printing costs by 30-50%',
      'Improve document security',
      'Support hybrid work environments',
      'Gain visibility into print usage',
    ],
    keywords: ['PaperCut Iowa', 'PaperCut MF implementation', 'print management software Iowa'],
  },
  {
    slug: 'uniflow-iowa',
    product: 'Canon uniFLOW',
    title: 'uniFLOW Print Management for Iowa',
    description: 'Canon uniFLOW implementation for Iowa enterprises requiring advanced document workflows and security.',
    features: [
      'Advanced document capture and routing',
      'Integration with Canon MFPs',
      'Mobile printing and cloud support',
      'Secure print release options',
      'Comprehensive workflow automation',
    ],
    benefits: [
      'Streamline document workflows',
      'Enhance security with multiple authentication methods',
      'Reduce IT management overhead',
      'Optimize Canon device investments',
    ],
    keywords: ['uniFLOW Iowa', 'Canon print management', 'document workflow Iowa'],
  },
  {
    slug: 'printerlogic-iowa',
    product: 'PrinterLogic',
    title: 'PrinterLogic Serverless Printing for Iowa',
    description: 'Eliminate print servers with PrinterLogic cloud-based print management for Iowa organizations.',
    features: [
      'Serverless print infrastructure',
      'Direct IP printing',
      'Self-service printer installation',
      'Cloud and hybrid deployment options',
      'Centralized management console',
    ],
    benefits: [
      'Eliminate print server maintenance',
      'Reduce IT infrastructure costs',
      'Improve print reliability',
      'Simplify printer deployment',
    ],
    keywords: ['PrinterLogic Iowa', 'serverless printing', 'eliminate print servers Iowa'],
  },
]

// Blog category configurations for programmatic generation
export const blogCategories = [
  {
    slug: 'ai-technology',
    name: 'AI & Technology',
    description: 'Artificial intelligence and emerging technology in print management',
  },
  {
    slug: 'cloud-printing',
    name: 'Cloud Technology',
    description: 'Cloud-based printing solutions and SaaS platforms',
  },
  {
    slug: 'cost-management',
    name: 'Cost Management',
    description: 'Strategies for reducing print costs and improving ROI',
  },
  {
    slug: 'security',
    name: 'Security',
    description: 'Print security, compliance, and data protection',
  },
  {
    slug: 'education',
    name: 'Education',
    description: 'Print solutions for K-12 schools and higher education',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    description: 'HIPAA-compliant printing for medical facilities',
  },
]

// Helper function to get location page by slug
export const getLocationPage = (slug) => {
  return locationPages.find(page => page.slug === slug)
}

// Helper function to get industry page by slug
export const getIndustryPage = (slug) => {
  return industryPages.find(page => page.slug === slug)
}

// Helper function to get product page by slug
export const getProductPage = (slug) => {
  return productPages.find(page => page.slug === slug)
}

// Generate all page paths for sitemap
export const getAllPagePaths = () => {
  const paths = []

  // Static pages
  paths.push({ path: '/', priority: 1.0, changefreq: 'weekly' })
  paths.push({ path: '/services', priority: 0.9, changefreq: 'weekly' })
  paths.push({ path: '/resources', priority: 0.8, changefreq: 'weekly' })
  paths.push({ path: '/blog', priority: 0.8, changefreq: 'daily' })
  paths.push({ path: '/locations', priority: 0.8, changefreq: 'weekly' })
  paths.push({ path: '/about', priority: 0.7, changefreq: 'monthly' })
  paths.push({ path: '/contact', priority: 0.7, changefreq: 'monthly' })
  paths.push({ path: '/tools', priority: 0.7, changefreq: 'weekly' })
  paths.push({ path: '/print-cost-calculator', priority: 0.8, changefreq: 'monthly' })
  paths.push({ path: '/print-management-comparison', priority: 0.8, changefreq: 'monthly' })
  paths.push({ path: '/resource-library', priority: 0.7, changefreq: 'weekly' })

  // Location pages
  locationPages.forEach(page => {
    paths.push({
      path: `/locations/${page.slug}`,
      priority: 0.8,
      changefreq: 'monthly',
    })
  })

  // Industry pages
  industryPages.forEach(page => {
    paths.push({
      path: `/industries/${page.slug}`,
      priority: 0.8,
      changefreq: 'monthly',
    })
  })

  // Product pages
  productPages.forEach(page => {
    paths.push({
      path: `/services/${page.slug}`,
      priority: 0.9,
      changefreq: 'monthly',
    })
  })

  return paths
}

export default {
  locationPages,
  industryPages,
  productPages,
  blogCategories,
  getLocationPage,
  getIndustryPage,
  getProductPage,
  getAllPagePaths,
}
