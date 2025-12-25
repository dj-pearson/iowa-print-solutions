import React from 'react'
import { Helmet } from 'react-helmet'

/**
 * StructuredData component for adding Schema.org JSON-LD markup
 * Helps search engines understand the business and enables rich snippets
 */
const StructuredData = ({ type = 'default', pageData = {} }) => {
  // Base organization schema for Iowa Print Solutions
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Iowa Print Solutions',
    url: 'https://iowaprintsolutions.com',
    logo: 'https://iowaprintsolutions.com/IPSLogo.png',
    description: 'Expert print management software and services across Iowa, specializing in PaperCut, Uniflow, and PrinterLogic solutions for businesses, schools, and healthcare organizations.',
    sameAs: [
      'https://iowaprintsolutions.com'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: 'US-IA',
      availableLanguage: 'English'
    }
  }

  // LocalBusiness schema with Iowa-specific information
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://iowaprintsolutions.com/#localbusiness',
    name: 'Iowa Print Solutions',
    image: 'https://iowaprintsolutions.com/IPSLogo.png',
    url: 'https://iowaprintsolutions.com',
    telephone: '',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Iowa',
      addressRegion: 'IA',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.8780,
      longitude: -93.0977
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Iowa'
      },
      {
        '@type': 'City',
        name: 'Des Moines'
      },
      {
        '@type': 'City',
        name: 'Cedar Rapids'
      },
      {
        '@type': 'City',
        name: 'Iowa City'
      },
      {
        '@type': 'City',
        name: 'Davenport'
      },
      {
        '@type': 'City',
        name: 'Waterloo'
      },
      {
        '@type': 'City',
        name: 'Sioux City'
      },
      {
        '@type': 'City',
        name: 'Dubuque'
      },
      {
        '@type': 'City',
        name: 'Council Bluffs'
      }
    ],
    serviceArea: {
      '@type': 'State',
      name: 'Iowa'
    },
    description: 'Leading provider of print management software and services across Iowa, offering PaperCut, Uniflow, and PrinterLogic solutions for businesses, educational institutions, and healthcare organizations.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Print Management Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PaperCut Print Management',
            description: 'Comprehensive print management software for cost control and security'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Uniflow Print Solutions',
            description: 'Enterprise print management with advanced security and tracking'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PrinterLogic Serverless Printing',
            description: 'Cloud-based serverless printing solution'
          }
        }
      ]
    }
  }

  // Article schema for blog posts
  const articleSchema = pageData.article ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pageData.article.title,
    description: pageData.article.description,
    image: pageData.article.image || 'https://iowaprintsolutions.com/IPSLogo.png',
    datePublished: pageData.article.datePublished,
    dateModified: pageData.article.dateModified || pageData.article.datePublished,
    author: {
      '@type': 'Organization',
      name: 'Iowa Print Solutions'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Iowa Print Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iowaprintsolutions.com/IPSLogo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageData.article.url
    }
  } : null

  // Service schema for service pages
  const serviceSchema = pageData.service ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: pageData.service.name,
    description: pageData.service.description,
    provider: {
      '@type': 'Organization',
      name: 'Iowa Print Solutions'
    },
    areaServed: {
      '@type': 'State',
      name: 'Iowa'
    },
    serviceType: pageData.service.type || 'Print Management Software'
  } : null

  // WebSite schema with search action
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Iowa Print Solutions',
    url: 'https://iowaprintsolutions.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://iowaprintsolutions.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }

  // Determine which schemas to include based on type
  const schemas = []

  if (type === 'home' || type === 'default') {
    schemas.push(organizationSchema, localBusinessSchema, websiteSchema)
  } else if (type === 'article' && articleSchema) {
    schemas.push(articleSchema, organizationSchema)
  } else if (type === 'service' && serviceSchema) {
    schemas.push(serviceSchema, organizationSchema, localBusinessSchema)
  } else {
    schemas.push(organizationSchema)
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export default StructuredData
