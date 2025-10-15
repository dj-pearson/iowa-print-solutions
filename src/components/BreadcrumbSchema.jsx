import React from 'react'

const BreadcrumbSchema = ({ breadcrumbs }) => {
  // Defensive programming: ensure breadcrumbs is an array
  if (!breadcrumbs || !Array.isArray(breadcrumbs) || breadcrumbs.length === 0) {
    return null
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label || crumb.name || '',
      "item": `https://iowaprintsolutions.com${crumb.href || crumb.path || '/'}`
    }))
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

export default BreadcrumbSchema