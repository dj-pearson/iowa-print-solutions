
import React from 'react'
import { Helmet } from 'react-helmet'

const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Infomax Office Systems',
    'image': 'https://iowa-print-solutions.pages.dev/og-image.jpg',
    'description': 'Iowa\'s leading print management solutions provider specializing in PaperCut, Uniflow, and PrinterLogic implementations since 1958.',
    'address': [
      {
        '@type': 'PostalAddress',
        'streetAddress': '5619 NE 14th St',
        'addressLocality': 'Des Moines',
        'addressRegion': 'IA',
        'postalCode': '50313',
        'addressCountry': 'US'
      },
      {
        '@type': 'PostalAddress',
        'addressLocality': 'Cedar Rapids',
        'addressRegion': 'IA',
        'addressCountry': 'US'
      },
      {
        '@type': 'PostalAddress',
        'addressLocality': 'Iowa City',
        'addressRegion': 'IA',
        'addressCountry': 'US'
      }
    ],
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 41.5868,
      'longitude': -93.6250
    },
    'areaServed': [
      {
        '@type': 'State',
        'name': 'Iowa'
      },
      {
        '@type': 'City',
        'name': 'Des Moines',
        'containedInPlace': {
          '@type': 'State',
          'name': 'Iowa'
        }
      },
      {
        '@type': 'City',
        'name': 'Cedar Rapids',
        'containedInPlace': {
          '@type': 'State',
          'name': 'Iowa'
        }
      },
      {
        '@type': 'City',
        'name': 'Iowa City',
        'containedInPlace': {
          '@type': 'State',
          'name': 'Iowa'
        }
      },
      {
        '@type': 'City',
        'name': 'Davenport',
        'containedInPlace': {
          '@type': 'State',
          'name': 'Iowa'
        }
      }
    ],
    'url': 'https://iowa-print-solutions.pages.dev',
    'telephone': '+15152372352',
    'priceRange': '$$',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday', 
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        'opens': '08:00',
        'closes': '17:00'
      }
    ],
    'serviceArea': {
      '@type': 'State',
      'name': 'Iowa'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Print Management Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'PaperCut Implementation',
            'description': 'Professional PaperCut MF installation and configuration'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Uniflow Solutions',
            'description': 'Document workflow automation and security'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'PrinterLogic Services',
            'description': 'Serverless printing infrastructure'
          }
        }
      ]
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'bestRating': '5',
      'worstRating': '1',
      'ratingCount': '47'
    },
    'review': [
      {
        '@type': 'Review',
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5',
          'bestRating': '5'
        },
        'author': {
          '@type': 'Person',
          'name': 'Sarah Johnson'
        },
        'reviewBody': 'Excellent PaperCut implementation at our Iowa healthcare facility. Professional service and ongoing support.'
      }
    ]
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default LocalBusinessSchema
