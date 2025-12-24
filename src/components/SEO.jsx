import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/og-image.jpg',
  schemaType = 'WebPage',
  additionalSchema = null,
  noindex = false,
  datePublished = null,
  dateModified = null
}) => {
  const siteUrl = 'https://iowaprintsolutions.com'
  const siteName = 'Iowa Print Solutions'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Leading Print Management Solutions in Iowa`

  // Generate current date for last-modified if not provided
  const currentDate = new Date().toISOString()
  const lastModified = dateModified || currentDate
  const published = datePublished || lastModified
  
  const defaultDescription = 'Iowa\'s premier resource for print management solutions. Expert information on PaperCut, Uniflow, and PrinterLogic implementations. Connect with Infomax Office Systems for professional services.'
  
  const metaDescription = description || defaultDescription
  
  const defaultKeywords = 'Iowa print solutions, print management Iowa, PaperCut Iowa, Uniflow Iowa, PrinterLogic Iowa, Infomax Office Systems, print security, managed print services, document management Iowa'
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    'name': title || siteName,
    'description': metaDescription,
    'url': canonicalUrl || siteUrl,
    'inLanguage': 'en-US',
    'isPartOf': {
      '@type': 'WebSite',
      'name': siteName,
      'url': siteUrl
    },
    'about': {
      '@type': 'Thing',
      'name': 'Print Management Solutions',
      'description': 'Comprehensive print management and document solutions for Iowa organizations'
    },
    'provider': {
      '@type': 'Organization',
      'name': 'Infomax Office Systems',
      'url': 'https://www.infomaxoffice.com',
      'foundingDate': '1958',
      'areaServed': {
        '@type': 'State',
        'name': 'Iowa'
      },
      'serviceArea': {
        '@type': 'State',
        'name': 'Iowa'
      }
    }
  }

  // Create schema based on type
  let finalSchema = { ...structuredData }
  
  if (additionalSchema) {
    try {
      // For Article schema, merge more carefully
      if (schemaType === 'Article' && additionalSchema['@type'] === 'Article') {
        finalSchema = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': additionalSchema.headline || title,
          'description': metaDescription,
          'url': canonicalUrl || siteUrl,
          'datePublished': additionalSchema.datePublished,
          'dateModified': additionalSchema.dateModified,
          'author': additionalSchema.author || {
            '@type': 'Person',
            'name': 'Dan Pearson'
          },
          'publisher': additionalSchema.publisher || {
            '@type': 'Organization',
            'name': 'Iowa Print Solutions'
          },
          'inLanguage': 'en-US'
        }
      } else {
        Object.assign(finalSchema, additionalSchema)
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Error merging additional schema:', error)
      }
      finalSchema = structuredData
    }
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Content Freshness Signals - Critical for SEO */}
      <meta httpEquiv="last-modified" content={lastModified} />
      <meta name="revised" content={lastModified} />
      {schemaType === 'Article' && (
        <>
          <meta property="article:published_time" content={published} />
          <meta property="article:modified_time" content={lastModified} />
        </>
      )}

      {/* Additional SEO Tags */}
      <meta name="geo.region" content="US-IA" />
      <meta name="geo.placename" content="Iowa" />
      <meta name="geo.position" content="42.0046;-93.214" />
      <meta name="ICBM" content="42.0046, -93.214" />
      
      {/* Google Search Console Verification - Add your verification code */}
      <meta name="google-site-verification" content="your-verification-code-here" />
      
      {/* Local Business */}
      <meta name="business:contact_data:locality" content="Iowa" />
      <meta name="business:contact_data:region" content="IA" />
      <meta name="business:contact_data:country_name" content="USA" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  )
}

export default SEO 