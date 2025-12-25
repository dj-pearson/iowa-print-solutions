/**
 * SEO utility functions for programmatic page generation
 * Provides helpers for generating optimized metadata, internal links, and content
 */

import { siteConfig, getCanonicalUrl } from '../config/site'
import { searchIndex } from '../data/searchIndex'

/**
 * Generate location-specific SEO metadata
 */
export const generateLocationSEO = (locationData) => {
  const { city, region, industries = [], nearbyCities = [] } = locationData

  return {
    title: `Print Management Solutions in ${city}, Iowa`,
    description: `Expert print management services for ${city} businesses. PaperCut, uniFLOW & PrinterLogic implementation serving ${region}. ${industries.slice(0, 2).join(' and ')} specialists.`,
    keywords: [
      `${city} print management`,
      `${city} printing solutions`,
      `print software ${city} Iowa`,
      `managed print services ${city}`,
      ...industries.map(i => `${i.toLowerCase()} printing ${city}`),
      `${region} print solutions`,
    ],
    canonicalUrl: getCanonicalUrl(`/locations/${locationData.slug}`),
  }
}

/**
 * Generate industry-specific SEO metadata
 */
export const generateIndustrySEO = (industryData) => {
  const { industry, compliance = [] } = industryData

  const complianceText = compliance.length > 0
    ? `${compliance.join(' and ')}-compliant `
    : ''

  return {
    title: `${industry} Print Solutions for Iowa`,
    description: `${complianceText}print management solutions for Iowa ${industry.toLowerCase()} organizations. Expert implementation of PaperCut, uniFLOW & PrinterLogic.`,
    keywords: [
      `${industry.toLowerCase()} print management Iowa`,
      `${industry.toLowerCase()} printing solutions`,
      ...compliance.map(c => `${c} compliant printing`),
      `Iowa ${industry.toLowerCase()} document security`,
    ],
    canonicalUrl: getCanonicalUrl(`/industries/${industryData.slug}`),
  }
}

/**
 * Generate product/service SEO metadata
 */
export const generateProductSEO = (productData) => {
  const { product, features = [] } = productData

  return {
    title: `${product} Implementation & Support in Iowa`,
    description: `Professional ${product} implementation and support for Iowa organizations. ${features.slice(0, 2).join(', ')} and more.`,
    keywords: [
      `${product} Iowa`,
      `${product} implementation`,
      `${product} support Iowa`,
      ...features.slice(0, 3).map(f => f.toLowerCase()),
    ],
    canonicalUrl: getCanonicalUrl(`/services/${productData.slug}`),
  }
}

/**
 * Generate blog post SEO metadata
 */
export const generateBlogSEO = (blogData) => {
  const { title, description, category, keywords = [], datePublished, dateModified } = blogData

  return {
    title,
    description,
    keywords: [
      ...keywords,
      category?.toLowerCase(),
      'Iowa print management',
      'print solutions',
    ].filter(Boolean),
    canonicalUrl: getCanonicalUrl(`/blog/${blogData.slug}`),
    schemaType: 'Article',
    ogType: 'article',
    datePublished,
    dateModified: dateModified || datePublished,
    category,
  }
}

/**
 * Get related content based on current page context
 * Enhanced version with better scoring algorithm
 */
export const getRelatedContent = (currentPath, options = {}) => {
  const {
    limit = 4,
    type = null,
    category = null,
    excludePaths = [],
  } = options

  // Find current page in search index
  const current = searchIndex.find(item => item.path === currentPath)
  if (!current) return []

  // Score and filter related content
  const scored = searchIndex
    .filter(item => {
      if (item.path === currentPath) return false
      if (excludePaths.includes(item.path)) return false
      if (type && item.type !== type) return false
      if (category && item.category !== category) return false
      return true
    })
    .map(item => {
      let score = 0

      // Category match (high weight)
      if (item.category === current.category) score += 15

      // Type match (medium weight)
      if (item.type === current.type) score += 8

      // Keyword overlap (variable weight)
      const currentKeywords = current.keywords || []
      const itemKeywords = item.keywords || []
      const sharedKeywords = currentKeywords.filter(kw =>
        itemKeywords.some(ik =>
          ik.toLowerCase().includes(kw.toLowerCase()) ||
          kw.toLowerCase().includes(ik.toLowerCase())
        )
      )
      score += sharedKeywords.length * 4

      // Title similarity (check for common words)
      const currentTitleWords = current.title.toLowerCase().split(/\s+/)
      const itemTitleWords = item.title.toLowerCase().split(/\s+/)
      const sharedTitleWords = currentTitleWords.filter(w =>
        w.length > 3 && itemTitleWords.includes(w)
      )
      score += sharedTitleWords.length * 3

      // Recency boost for blog posts
      if (item.type === 'blog' && item.date) {
        const daysOld = (Date.now() - new Date(item.date).getTime()) / (1000 * 60 * 60 * 24)
        if (daysOld < 30) score += 5
        else if (daysOld < 90) score += 3
        else if (daysOld < 180) score += 1
      }

      return { ...item, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  return scored
}

/**
 * Get contextual internal links for content
 * Returns links relevant to the current page's topic
 */
export const getContextualLinks = (keywords = [], options = {}) => {
  const { limit = 5, excludePaths = [] } = options

  if (!keywords || keywords.length === 0) return []

  const scored = searchIndex
    .filter(item => !excludePaths.includes(item.path))
    .map(item => {
      let score = 0

      // Check keyword matches
      const itemKeywords = item.keywords || []
      const titleLower = item.title.toLowerCase()
      const descLower = (item.description || '').toLowerCase()

      keywords.forEach(keyword => {
        const keywordLower = keyword.toLowerCase()

        // Exact keyword match
        if (itemKeywords.some(k => k.toLowerCase() === keywordLower)) {
          score += 10
        }

        // Partial keyword match
        if (itemKeywords.some(k => k.toLowerCase().includes(keywordLower))) {
          score += 5
        }

        // Title contains keyword
        if (titleLower.includes(keywordLower)) {
          score += 8
        }

        // Description contains keyword
        if (descLower.includes(keywordLower)) {
          score += 3
        }
      })

      return { ...item, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  return scored
}

/**
 * Generate breadcrumb items for a given path
 */
export const generateBreadcrumbs = (path, customLabels = {}) => {
  const segments = path.split('/').filter(Boolean)

  const defaultLabels = {
    blog: 'Blog',
    resources: 'Resources',
    services: 'Services',
    locations: 'Locations',
    industries: 'Industries',
    tools: 'Tools',
  }

  const labels = { ...defaultLabels, ...customLabels }

  const breadcrumbs = [{ name: 'Home', path: '/' }]

  let currentPath = ''
  segments.forEach(segment => {
    currentPath += `/${segment}`

    const name = labels[segment] ||
      segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

    breadcrumbs.push({ name, path: currentPath })
  })

  return breadcrumbs
}

/**
 * Generate FAQ structured data from questions array
 */
export const generateFAQSchema = (questions) => {
  if (!questions || questions.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }
}

/**
 * Generate HowTo structured data from steps array
 */
export const generateHowToSchema = (name, description, steps) => {
  if (!steps || steps.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name || step.title,
      text: step.text || step.description,
      ...(step.image && { image: step.image }),
    })),
  }
}

/**
 * Calculate reading time for content
 */
export const calculateReadingTime = (content) => {
  if (!content) return 1

  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)

  return Math.max(1, minutes)
}

/**
 * Generate meta description from content
 * Ensures optimal length for search results
 */
export const generateMetaDescription = (content, maxLength = 155) => {
  if (!content) return siteConfig.seo.defaultDescription

  // Clean content
  let cleaned = content
    .replace(/<[^>]*>/g, '') // Remove HTML
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim()

  if (cleaned.length <= maxLength) return cleaned

  // Truncate at word boundary
  const truncated = cleaned.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')

  return lastSpace > 0
    ? truncated.slice(0, lastSpace) + '...'
    : truncated + '...'
}

/**
 * Extract keywords from content
 */
export const extractKeywords = (content, count = 10) => {
  if (!content) return []

  // Common stop words to filter out
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
    'could', 'should', 'may', 'might', 'must', 'shall', 'can', 'need',
    'this', 'that', 'these', 'those', 'it', 'its', 'they', 'them', 'their',
    'we', 'our', 'you', 'your', 'he', 'she', 'him', 'her', 'his', 'hers',
  ])

  // Extract words and count frequency
  const words = content
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word))

  const frequency = {}
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1
  })

  // Sort by frequency and return top keywords
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([word]) => word)
}

export default {
  generateLocationSEO,
  generateIndustrySEO,
  generateProductSEO,
  generateBlogSEO,
  getRelatedContent,
  getContextualLinks,
  generateBreadcrumbs,
  generateFAQSchema,
  generateHowToSchema,
  calculateReadingTime,
  generateMetaDescription,
  extractKeywords,
}
