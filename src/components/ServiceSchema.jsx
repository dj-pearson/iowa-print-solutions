import React from 'react'

const ServiceSchema = ({ 
  serviceName, 
  description, 
  provider = "Iowa Print Solutions",
  serviceType = "Professional Service",
  areaServed = "Iowa, United States",
  offers = [],
  aggregateRating,
  review
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Des Moines",
        "addressRegion": "IA",
        "addressCountry": "US"
      },
      "telephone": "(515) 555-PRINT",
      "url": "https://iowaprintsolutions.com"
    },
    "serviceType": serviceType,
    "areaServed": {
      "@type": "State",
      "name": areaServed
    }
  }

  // Add offers if provided
  if (offers.length > 0) {
    schemaData.offers = offers.map(offer => ({
      "@type": "Offer",
      "name": offer.name,
      "description": offer.description,
      "price": offer.price || "Contact for pricing",
      "priceCurrency": "USD"
    }))
  }

  // Add aggregate rating if provided
  if (aggregateRating) {
    schemaData.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // Add review if provided
  if (review) {
    schemaData.review = {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.ratingValue,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
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

export default ServiceSchema