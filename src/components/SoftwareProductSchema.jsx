import React from 'react'
import { Helmet } from 'react-helmet'

const SoftwareProductSchema = ({
  productName = "PaperCut MF",
  description = "Enterprise print management and security software",
  category = "SecurityApplication",
  price,
  // Real version string, e.g. "26.0". Omitted from schema when not supplied -
  // this used to hardcode the literal string "Latest", which is meaningless.
  softwareVersion,
  features = []
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': productName,
    'applicationCategory': category,
    'description': description,
    'operatingSystem': 'Windows, macOS, Linux',
    ...(softwareVersion && { 'softwareVersion': softwareVersion }),
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
    // No aggregateRating: this component describes third-party vendor
    // software, so any rating here would be Iowa Print Solutions inventing
    // ratings for someone else's product. See OrganizationSchema.jsx.
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
      'email': 'DPearson@InfomaxOffice.com',
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
