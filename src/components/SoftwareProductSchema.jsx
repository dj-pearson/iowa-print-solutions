import React from 'react'
import { Helmet } from 'react-helmet'

const SoftwareProductSchema = ({
  productName = "PaperCut MF",
  description = "Enterprise print management and security software",
  category = "SecurityApplication",
  price,
  ratingValue = "4.8",
  reviewCount = "127",
  features = []
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': productName,
    'applicationCategory': category,
    'description': description,
    'operatingSystem': 'Windows, macOS, Linux',
    'softwareVersion': 'Latest',
    'offers': price ? {
      '@type': 'Offer',
      'price': price,
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'Organization',
        'name': 'Infomax Office Systems',
        'url': 'https://iowaprintsolutions.com'
      }
    } : {
      '@type': 'AggregateOffer',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'Organization',
        'name': 'Infomax Office Systems',
        'url': 'https://iowaprintsolutions.com'
      }
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': ratingValue,
      'reviewCount': reviewCount,
      'bestRating': '5',
      'worstRating': '1'
    },
    'featureList': features.length > 0 ? features.join(', ') : [
      'Secure Print Release',
      'User Authentication',
      'Cost Tracking',
      'Mobile Printing',
      'Audit Trails',
      'HIPAA Compliance'
    ].join(', '),
    'applicationSubCategory': 'Print Management Software',
    'downloadUrl': 'https://iowaprintsolutions.com/contact',
    'screenshot': 'https://iowaprintsolutions.com/og-image.jpg',
    'softwareRequirements': 'Network-connected printers and copiers',
    'releaseNotes': 'Latest security features and Iowa-specific optimizations',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Infomax Office Systems',
      'url': 'https://iowaprintsolutions.com',
      'telephone': '515-237-2352',
      'email': 'gfleschinfomaxoffice@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'addressRegion': 'IA',
        'addressCountry': 'US',
        'addressLocality': 'Des Moines'
      },
      'areaServed': {
        '@type': 'State',
        'name': 'Iowa'
      }
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default SoftwareProductSchema
