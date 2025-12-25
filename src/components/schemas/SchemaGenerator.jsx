import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { siteConfig, getCanonicalUrl } from '../../config/site'

/**
 * Unified Schema.org structured data generator
 * Consolidates all schema types into a single, configurable component
 *
 * @param {Object} props
 * @param {string} props.type - Schema type: 'organization', 'localBusiness', 'website', 'article', 'service', 'product', 'faq', 'location'
 * @param {Object} props.data - Type-specific data for schema generation
 * @param {boolean} props.includeOrganization - Include organization schema (default: false)
 */
const SchemaGenerator = ({ type = 'website', data = {}, includeOrganization = false }) => {
  const schemas = useMemo(() => {
    const result = []

    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.business.legalName,
      alternateName: siteConfig.business.alternateName,
      description: siteConfig.seo.defaultDescription,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logoFull,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.business.phone,
        contactType: 'customer service',
        email: siteConfig.business.email,
        areaServed: siteConfig.serviceAreas.stateAbbr,
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      foundingDate: siteConfig.business.foundingDate,
      areaServed: [
        { '@type': 'State', name: siteConfig.serviceAreas.state },
        ...siteConfig.serviceAreas.cities.slice(0, 8).map(city => ({
          '@type': 'City',
          name: city.name,
        })),
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Print Management Services',
        itemListElement: siteConfig.products.map(product => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: product.fullName,
            description: product.description,
          },
        })),
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: siteConfig.ratings.aggregateRating,
        reviewCount: siteConfig.ratings.reviewCount,
        bestRating: siteConfig.ratings.bestRating,
        worstRating: siteConfig.ratings.worstRating,
      },
      sameAs: Object.values(siteConfig.social),
      knowsAbout: siteConfig.expertise,
    }

    // LocalBusiness Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      image: siteConfig.logoFull,
      url: siteConfig.url,
      telephone: siteConfig.business.phone,
      priceRange: siteConfig.business.priceRange,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
      areaServed: siteConfig.serviceAreas.cities.map(city => ({
        '@type': 'City',
        name: city.name,
      })),
      serviceArea: {
        '@type': 'State',
        name: siteConfig.serviceAreas.state,
      },
      description: siteConfig.seo.defaultDescription,
    }

    // WebSite Schema with SearchAction
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
      publisher: {
        '@id': `${siteConfig.url}/#organization`,
      },
    }

    // Generate schema based on type
    switch (type) {
      case 'organization':
        result.push(organizationSchema)
        break

      case 'localBusiness':
        result.push(localBusinessSchema)
        if (includeOrganization) result.push(organizationSchema)
        break

      case 'website':
      case 'home':
        result.push(websiteSchema)
        result.push(organizationSchema)
        result.push(localBusinessSchema)
        break

      case 'article':
        if (data.title) {
          result.push({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: data.title,
            description: data.description || '',
            image: data.image || siteConfig.logoFull,
            datePublished: data.datePublished,
            dateModified: data.dateModified || data.datePublished,
            author: {
              '@type': 'Person',
              name: data.author || siteConfig.defaultAuthor.name,
            },
            publisher: {
              '@type': 'Organization',
              name: siteConfig.name,
              logo: {
                '@type': 'ImageObject',
                url: siteConfig.logoFull,
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': data.url || siteConfig.url,
            },
            keywords: data.keywords || [],
            articleSection: data.category || 'Print Management',
          })
        }
        if (includeOrganization) result.push(organizationSchema)
        break

      case 'service':
        if (data.name) {
          result.push({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: data.name,
            description: data.description || '',
            provider: {
              '@type': 'Organization',
              name: siteConfig.name,
              url: siteConfig.url,
            },
            areaServed: {
              '@type': 'State',
              name: siteConfig.serviceAreas.state,
            },
            serviceType: data.serviceType || 'Print Management Software',
            url: data.url || siteConfig.url,
          })
        }
        if (includeOrganization) result.push(organizationSchema)
        result.push(localBusinessSchema)
        break

      case 'product':
        if (data.name) {
          result.push({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: data.name,
            description: data.description || '',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Windows, macOS, Linux',
            offers: {
              '@type': 'Offer',
              price: data.price || '0',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              seller: {
                '@type': 'Organization',
                name: siteConfig.name,
              },
            },
          })
        }
        break

      case 'faq':
        if (data.questions && data.questions.length > 0) {
          result.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: data.questions.map(q => ({
              '@type': 'Question',
              name: q.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: q.answer,
              },
            })),
          })
        }
        break

      case 'location':
        if (data.city) {
          const cityConfig = siteConfig.serviceAreas.cities.find(
            c => c.slug === data.citySlug || c.name === data.city
          )
          result.push({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': `${siteConfig.url}/locations/${data.citySlug || data.city.toLowerCase().replace(/\s+/g, '-')}`,
            name: `${siteConfig.name} - ${data.city}`,
            image: siteConfig.logoFull,
            url: data.url || siteConfig.url,
            telephone: siteConfig.business.phone,
            priceRange: siteConfig.business.priceRange,
            address: {
              '@type': 'PostalAddress',
              addressLocality: data.city,
              addressRegion: siteConfig.address.state,
              addressCountry: siteConfig.address.country,
            },
            areaServed: {
              '@type': 'City',
              name: data.city,
            },
            parentOrganization: {
              '@id': `${siteConfig.url}/#organization`,
            },
            description: data.description || `Print management solutions for ${data.city}, Iowa businesses`,
          })
        }
        if (includeOrganization) result.push(organizationSchema)
        break

      case 'howTo':
        if (data.name && data.steps) {
          result.push({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: data.name,
            description: data.description || '',
            step: data.steps.map((step, index) => ({
              '@type': 'HowToStep',
              position: index + 1,
              name: step.name,
              text: step.text,
            })),
          })
        }
        break

      default:
        result.push(organizationSchema)
    }

    return result
  }, [type, data, includeOrganization])

  if (schemas.length === 0) return null

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={`schema-${type}-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export default SchemaGenerator
