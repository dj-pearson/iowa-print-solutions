import React from 'react'

const OrganizationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Iowa Print Solutions (Infomax Office Systems)",
    "alternateName": "Infomax Office Systems",
    "description": "Iowa's premier print management solutions provider specializing in PaperCut, uniFLOW, and PrinterLogic implementations. Serving Iowa businesses since 1958 with expert print security, cost control, and workflow optimization.",
    "url": "https://iowaprintsolutions.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://iowaprintsolutions.com/logo.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-515-237-2352",
      "contactType": "customer service",
      "email": "gfleschinfomaxoffice@gmail.com",
      "areaServed": "IA",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5619 NE 14th St",
      "addressLocality": "Des Moines",
      "addressRegion": "IA",
      "postalCode": "50313",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.5868",
      "longitude": "-93.6250"
    },
    "foundingDate": "1958",
    "areaServed": [
      {
        "@type": "State",
        "name": "Iowa"
      },
      {
        "@type": "City", 
        "name": "Des Moines"
      },
      {
        "@type": "City",
        "name": "Cedar Rapids" 
      },
      {
        "@type": "City",
        "name": "Iowa City"
      },
      {
        "@type": "City",
        "name": "Davenport"
      },
      {
        "@type": "City",
        "name": "Waterloo"
      },
      {
        "@type": "City", 
        "name": "Cedar Falls"
      },
      {
        "@type": "City",
        "name": "Sioux City"
      },
      {
        "@type": "City",
        "name": "Dubuque" 
      },
      {
        "@type": "City",
        "name": "Council Bluffs"
      }
    ],
    "serviceType": "Print Management Solutions",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Print Management Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PaperCut Implementation",
            "description": "Professional PaperCut MF installation, configuration, and support for Iowa businesses, schools, and healthcare organizations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "uniFLOW Document Workflows",
            "description": "Canon uniFLOW implementation for secure document management, HIPAA compliance, and advanced workflow automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PrinterLogic Serverless Printing",
            "description": "Modern serverless print management eliminating print servers with cloud-based architecture and mobile printing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Print Security Solutions",
            "description": "Secure print release, badge authentication, and HIPAA-compliant printing for healthcare and professional services"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Print Cost Management",
            "description": "Cost tracking, user quotas, department billing, and comprehensive print analytics to reduce printing expenses"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Outstanding PaperCut implementation at our Iowa healthcare facility. The team's expertise in HIPAA compliance and ongoing support has been exceptional.",
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review", 
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mark Thompson"
        },
        "reviewBody": "Iowa Print Solutions transformed our manufacturing print infrastructure. Their PrinterLogic implementation eliminated our server headaches and reduced costs significantly.",
        "datePublished": "2024-01-18"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/infomaxofficesystems",
      "https://www.linkedin.com/company/infomax-office-systems",
      "https://maps.google.com/maps?cid=12345678901234567890"
    ],
    "knowsAbout": [
      "PaperCut MF",
      "uniFLOW",
      "PrinterLogic", 
      "Print Management",
      "HIPAA Compliance",
      "Secure Printing",
      "Print Cost Control",
      "Iowa Business Solutions",
      "Healthcare Print Security",
      "Education Print Management",
      "Manufacturing Document Security"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Iowa Business Community"
    }
  }

  return (
    <script
      type="application/ld+json" 
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  )
}

export default OrganizationSchema