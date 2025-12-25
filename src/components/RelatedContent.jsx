import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, BookOpen, MapPin, Briefcase, Wrench, Settings } from 'lucide-react'
import { getRelatedContent as getRelatedFromIndex, contentTypeLabels } from '../data/searchIndex'
import { getRelatedContent as getRelatedFromSEO, getContextualLinks } from '../utils/seoUtils'

// Icons for different content types
const typeIcons = {
  blog: FileText,
  resource: BookOpen,
  location: MapPin,
  industry: Briefcase,
  service: Settings,
  tool: Wrench
}

// Colors for different content types
const typeColors = {
  blog: 'bg-blue-50 border-blue-200 text-blue-600',
  resource: 'bg-green-50 border-green-200 text-green-600',
  location: 'bg-purple-50 border-purple-200 text-purple-600',
  industry: 'bg-indigo-50 border-indigo-200 text-indigo-600',
  service: 'bg-cyan-50 border-cyan-200 text-cyan-600',
  tool: 'bg-orange-50 border-orange-200 text-orange-600'
}

/**
 * Enhanced RelatedContent component with multiple display variants
 * Supports both legacy ID-based matching and new path/keyword-based matching
 *
 * @param {Object} props
 * @param {string} props.currentId - Legacy: ID of current content for related matching
 * @param {string} props.title - Section title
 * @param {number} props.limit - Maximum items to display
 * @param {boolean} props.showType - Whether to show content type badge
 * @param {Array} props.keywords - Keywords for contextual matching
 * @param {string} props.type - Filter by content type
 * @param {string} props.category - Filter by category
 * @param {Array} props.excludePaths - Paths to exclude from results
 * @param {string} props.variant - Display variant: 'cards', 'grid', 'list', 'compact'
 * @param {boolean} props.animate - Whether to animate items
 */
const RelatedContent = ({
  currentId,
  title = 'Related Resources',
  limit = 3,
  showType = true,
  keywords = [],
  type = null,
  category = null,
  excludePaths = [],
  variant = 'grid',
  animate = true,
}) => {
  const location = useLocation()

  const relatedItems = useMemo(() => {
    // Try keyword-based matching first if keywords provided
    if (keywords && keywords.length > 0) {
      const contextual = getContextualLinks(keywords, {
        limit,
        excludePaths: [location.pathname, ...excludePaths],
      })
      if (contextual.length > 0) return contextual
    }

    // Try path-based related content if we have location
    if (location?.pathname && location.pathname !== '/') {
      const pathBased = getRelatedFromSEO(location.pathname, {
        limit,
        type,
        category,
        excludePaths,
      })
      if (pathBased.length > 0) return pathBased
    }

    // Fall back to legacy ID-based matching
    if (currentId) {
      return getRelatedFromIndex(currentId, limit)
    }

    return []
  }, [currentId, keywords, location?.pathname, limit, type, category, excludePaths])

  if (!relatedItems || relatedItems.length === 0) return null

  // Wrapper component for optional animation
  const ItemWrapper = animate
    ? ({ children, index }) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {children}
        </motion.div>
      )
    : ({ children }) => <div>{children}</div>

  // Grid variant (default, matches original)
  if (variant === 'grid') {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {title}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedItems.map((item, index) => {
              const Icon = typeIcons[item.type] || FileText
              const colorClass = typeColors[item.type] || 'bg-gray-50 border-gray-200 text-gray-600'

              return (
                <ItemWrapper key={item.id || item.path} index={index}>
                  <Link
                    to={item.path}
                    className="block bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 transition-all group h-full"
                  >
                    <div className="flex flex-col h-full">
                      {showType && (
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`p-1.5 rounded-md border ${colorClass}`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-xs font-medium text-gray-500 uppercase">
                            {contentTypeLabels[item.type] || item.type}
                          </span>
                        </div>
                      )}

                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 line-clamp-2 flex-grow">
                        {item.description}
                      </p>

                      <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                        Read more
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </ItemWrapper>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  // Cards variant (4-column layout)
  if (variant === 'cards') {
    return (
      <section className="mt-12 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedItems.map((item, index) => {
            const Icon = typeIcons[item.type] || FileText

            return (
              <ItemWrapper key={item.id || item.path} index={index}>
                <Link
                  to={item.path}
                  className="group bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg hover:border-blue-300 transition-all duration-200 block h-full"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                      {contentTypeLabels[item.type] || item.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-sm text-blue-600 font-medium">
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ItemWrapper>
            )
          })}
        </div>
      </section>
    )
  }

  // List variant
  if (variant === 'list') {
    return (
      <section className="mt-12 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <ul className="space-y-4">
          {relatedItems.map((item, index) => {
            const Icon = typeIcons[item.type] || FileText

            return (
              <li key={item.id || item.path}>
                <ItemWrapper index={index}>
                  <Link
                    to={item.path}
                    className="group flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                      <span className="inline-block text-xs font-medium text-blue-600 mt-2 uppercase tracking-wide">
                        {contentTypeLabels[item.type] || item.type}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </Link>
                </ItemWrapper>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }

  // Compact variant (for sidebars)
  if (variant === 'compact') {
    return (
      <aside className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
        <ul className="space-y-3">
          {relatedItems.map((item) => (
            <li key={item.id || item.path}>
              <Link
                to={item.path}
                className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium flex items-center gap-2"
              >
                <ArrowRight className="w-3 h-3 flex-shrink-0" />
                <span className="line-clamp-1">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    )
  }

  return null
}

export default RelatedContent
