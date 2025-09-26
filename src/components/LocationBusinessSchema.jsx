import React from 'react'

const LocationBusinessSchema = ({ 
  locationName,
  description,
  address,
  telephone = "(515) 555-PRINT",
  url = "https://iowaprintsolutions.com",
  openingHours = [
    "Mo-Fr 08:00-17:00"
  ],
  aggregateRating,
  review,
  serviceArea,
  services = [],
  priceRange = "$$$"
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Iowa Print Solutions - ${locationName}`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress || "Professional Print Management Services",
      "addressLocality": address.city,
      "addressRegion": address.state || "IA",
      "postalCode": address.postalCode,
      "addressCountry": "US"
    },
    "telephone": telephone,
    "url": url,
    "openingHoursSpecification": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.includes("Mo-Fr") ? 
        ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] :
        hours.split("-"),
      "opens": hours.split(" ")[1]?.split("-")[0] || "08:00",
      "closes": hours.split(" ")[1]?.split("-")[1] || "17:00"
    })),
    "priceRange": priceRange,
    "areaServed": {
      "@type": "City",
      "name": serviceArea || locationName
    }
  }

  // Add services offered
  if (services.length > 0) {
    schemaData.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": "Print Management Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }))
    }
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

export default LocationBusinessSchema