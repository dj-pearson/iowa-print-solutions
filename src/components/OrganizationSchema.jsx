import React from 'react'

const OrganizationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Iowa Print Solutions (Infomax Office Systems)",
    "alternateName": "Infomax Office Systems",
    "description": "Iowa's premier print management solutions provider specializing in PaperCut MF, Canon uniFLOW, and Vasion Print (formerly PrinterLogic) implementations. Serving Iowa businesses since 1958 with expert print security, cost control, and workflow optimization.",
    "url": "https://iowaprintsolutions.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://iowaprintsolutions.com/logo.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-515-237-2352",
      "contactType": "customer service",
      "email": "DPearson@InfomaxOffice.com",
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
            "name": "Vasion Print (formerly PrinterLogic) Serverless Printing",
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
    // NOTE: No aggregateRating or review markup here, deliberately.
    //
    // This block previously emitted a hardcoded 4.8/150 rating plus two
    // Review entries attributed to invented people. Google's review snippet
    // guidelines prohibit self-serving review markup and require that rated
    // reviews be genuinely collected and visible on the page, so that markup
    // was both untrue and a manual-action risk.
    //
    // To add ratings back: collect real reviews (Google Business Profile is
    // the natural source), display them on the page, and emit markup that
    // matches what a visitor can actually see.
    "sameAs": [
      "https://www.facebook.com/infomaxofficesystems",
      "https://www.linkedin.com/company/infomax-office-systems"
    ],
    "knowsAbout": [
      "PaperCut MF",
      "uniFLOW",
      "Vasion Print",
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