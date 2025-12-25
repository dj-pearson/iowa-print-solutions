import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { siteConfig, getCanonicalUrl, getPageTitle, getKeywords } from '../config/site'

/**
 * Enhanced SEO component for comprehensive meta tag management
 * Provides optimized meta tags for search engines and social sharing
 *
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string|Array} props.keywords - Additional keywords
 * @param {string} props.canonicalUrl - Canonical URL (relative or absolute)
 * @param {string} props.ogImage - Open Graph image path
 * @param {string} props.ogType - Open Graph type (website, article, etc.)
 * @param {string} props.schemaType - Schema.org type for structured data
 * @param {Object} props.additionalSchema - Additional schema data to merge
 * @param {boolean} props.noindex - Whether to noindex the page
 * @param {string} props.datePublished - ISO date for article publication
 * @param {string} props.dateModified - ISO date for last modification
 * @param {string} props.author - Author name for articles
 * @param {string} props.category - Content category for articles
 * @param {Array} props.alternateLanguages - Alternate language versions [{lang, url}]
 */
const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  schemaType = 'WebPage',
  additionalSchema = null,
  noindex = false,
  datePublished = null,
  dateModified = null,
  author = null,
  category = null,
  alternateLanguages = [],
}) => {
  // Compute meta values using centralized config
  const metaValues = useMemo(() => {
    const fullTitle = getPageTitle(title)
    const metaDescription = description || siteConfig.seo.defaultDescription
    const metaKeywords = Array.isArray(keywords)
      ? getKeywords(keywords)
      : getKeywords(keywords ? keywords.split(',').map(k => k.trim()) : [])

    // Handle canonical URL - support both relative and absolute
    let canonical = canonicalUrl
    if (canonical) {
      canonical = canonical.startsWith('http')
        ? canonical
        : getCanonicalUrl(canonical)
    }

    // Handle OG image
    const ogImageUrl = ogImage
      ? (ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`)
      : `${siteConfig.url}${siteConfig.defaultOgImage}`

    // Dates for freshness signals
    const now = new Date().toISOString()
    const lastModified = dateModified || now
    const published = datePublished || lastModified

    return {
      fullTitle,
      metaDescription,
      metaKeywords,
      canonical,
      ogImageUrl,
      lastModified,
      published,
    }
  }, [title, description, keywords, canonicalUrl, ogImage, datePublished, dateModified])

  // Generate structured data
  const structuredData = useMemo(() => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: title || siteConfig.name,
      description: metaValues.metaDescription,
      url: metaValues.canonical || siteConfig.url,
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
      },
      provider: {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.business.legalName,
        url: siteConfig.url,
      },
    }

    // Handle Article schema
    if (schemaType === 'Article' || ogType === 'article') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: metaValues.metaDescription,
        url: metaValues.canonical || siteConfig.url,
        datePublished: metaValues.published,
        dateModified: metaValues.lastModified,
        author: {
          '@type': 'Person',
          name: author || siteConfig.defaultAuthor.name,
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${siteConfig.url}/#organization`,
          name: siteConfig.name,
          logo: {
            '@type': 'ImageObject',
            url: siteConfig.logoFull,
          },
        },
        image: metaValues.ogImageUrl,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': metaValues.canonical || siteConfig.url,
        },
        articleSection: category || 'Print Management',
        inLanguage: 'en-US',
        ...(additionalSchema || {}),
      }
    }

    // Merge additional schema if provided
    if (additionalSchema) {
      return { ...baseSchema, ...additionalSchema }
    }

    return baseSchema
  }, [schemaType, ogType, title, metaValues, author, category, additionalSchema])

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{metaValues.fullTitle}</title>
      <meta name="title" content={metaValues.fullTitle} />
      <meta name="description" content={metaValues.metaDescription} />
      <meta name="keywords" content={metaValues.metaKeywords} />

      {/* Robots */}
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : siteConfig.seo.robots}
      />
      <meta
        name="googlebot"
        content={noindex ? 'noindex, nofollow' : siteConfig.seo.robots}
      />

      {/* Canonical URL */}
      {metaValues.canonical && (
        <link rel="canonical" href={metaValues.canonical} />
      )}

      {/* Alternate Languages */}
      {alternateLanguages.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={metaValues.canonical || siteConfig.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={metaValues.fullTitle} />
      <meta property="og:description" content={metaValues.metaDescription} />
      <meta property="og:url" content={metaValues.canonical || siteConfig.url} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image" content={metaValues.ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || siteConfig.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaValues.fullTitle} />
      <meta name="twitter:description" content={metaValues.metaDescription} />
      <meta name="twitter:image" content={metaValues.ogImageUrl} />
      <meta name="twitter:image:alt" content={title || siteConfig.name} />

      {/* Article-specific meta tags */}
      {(schemaType === 'Article' || ogType === 'article') && (
        <>
          <meta property="article:published_time" content={metaValues.published} />
          <meta property="article:modified_time" content={metaValues.lastModified} />
          <meta property="article:author" content={author || siteConfig.defaultAuthor.name} />
          {category && <meta property="article:section" content={category} />}
        </>
      )}

      {/* Content Freshness Signals */}
      <meta httpEquiv="last-modified" content={metaValues.lastModified} />
      <meta name="revised" content={metaValues.lastModified} />

      {/* Geographic Meta Tags */}
      <meta name="geo.region" content={`US-${siteConfig.address.state}`} />
      <meta name="geo.placename" content={siteConfig.serviceAreas.state} />
      <meta name="geo.position" content={`${siteConfig.geo.iowaCenter.latitude};${siteConfig.geo.iowaCenter.longitude}`} />
      <meta name="ICBM" content={`${siteConfig.geo.iowaCenter.latitude}, ${siteConfig.geo.iowaCenter.longitude}`} />

      {/* Local Business Meta */}
      <meta name="business:contact_data:locality" content={siteConfig.address.city} />
      <meta name="business:contact_data:region" content={siteConfig.address.state} />
      <meta name="business:contact_data:country_name" content={siteConfig.address.countryFullName} />
      <meta name="business:contact_data:phone_number" content={siteConfig.business.phone} />
      <meta name="business:contact_data:email" content={siteConfig.business.email} />

      {/* Additional SEO optimizations */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteConfig.name} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

export default SEO
