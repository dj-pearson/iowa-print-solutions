import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { Helmet } from 'react-helmet'
import { siteConfig, getCanonicalUrl } from '../config/site'

/**
 * Unified Breadcrumbs component with Schema.org BreadcrumbList markup
 * Improves navigation UX and enables breadcrumb rich snippets in search results
 *
 * @param {Object} props
 * @param {Array} props.items - Custom breadcrumb items [{name, path}]
 * @param {string} props.customPath - Custom path string to parse
 */
const Breadcrumbs = ({ items = null, customPath = null }) => {
  const location = useLocation()

  // Readable label mappings for common path segments
  const labelMappings = {
    'blog': 'Blog',
    'resources': 'Resources',
    'services': 'Services',
    'locations': 'Locations',
    'industries': 'Industries',
    'tools': 'Tools',
    'about': 'About',
    'contact': 'Contact',
    'search': 'Search Results',
    'print-cost-calculator': 'Print Cost Calculator',
    'print-management-comparison': 'Solution Comparison',
    'resource-library': 'Resource Library',
    'privacy-policy': 'Privacy Policy',
    'papercut': 'PaperCut',
    'uniflow': 'uniFLOW',
    'printerlogic': 'PrinterLogic',
    'papercut-iowa': 'PaperCut Iowa',
    'uniflow-iowa': 'uniFLOW Iowa',
    'printerlogic-iowa': 'PrinterLogic Iowa',
    'des-moines': 'Des Moines',
    'des-moines-print-management': 'Des Moines Print Management',
    'cedar-rapids': 'Cedar Rapids',
    'cedar-rapids-print-management': 'Cedar Rapids Print Management',
    'iowa-city': 'Iowa City',
    'iowa-city-print-management': 'Iowa City Print Management',
    'davenport': 'Davenport',
    'davenport-print-management': 'Davenport Print Management',
    'waterloo-cedar-falls-print-management': 'Waterloo-Cedar Falls',
    'sioux-city-print-management': 'Sioux City',
    'dubuque-print-management': 'Dubuque',
    'council-bluffs-print-management': 'Council Bluffs',
    'iowa-healthcare-print-solutions': 'Healthcare Solutions',
    'iowa-education-print-solutions': 'Education Solutions',
  }

  // Generate breadcrumb items from path
  const breadcrumbItems = useMemo(() => {
    // If items prop is provided, use it directly
    if (items && Array.isArray(items) && items.length > 0) {
      return items.map(item => ({
        name: item.name || item.label || '',
        path: item.path || item.href || '/'
      }))
    }

    // Build breadcrumbs from path
    const result = [{ name: 'Home', path: '/' }]

    // Determine which path to parse
    let pathnames = []
    if (customPath && Array.isArray(customPath)) {
      pathnames = customPath
    } else if (customPath && typeof customPath === 'string') {
      pathnames = customPath.split('/').filter(x => x)
    } else if (location?.pathname) {
      pathnames = location.pathname.split('/').filter(x => x)
    }

    if (!Array.isArray(pathnames) || pathnames.length === 0) {
      return result
    }

    let currentPath = ''
    pathnames.forEach(pathname => {
      if (!pathname || typeof pathname !== 'string') return

      currentPath += `/${pathname}`

      // Use mapping if available, otherwise format the pathname
      const name = labelMappings[pathname] ||
        pathname
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')

      result.push({ name, path: currentPath })
    })

    return result
  }, [items, customPath, location.pathname])

  // Generate Schema.org BreadcrumbList structured data
  const breadcrumbSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path)
    }))
  }), [breadcrumbItems])

  // Don't render if there are no breadcrumb items or only Home
  if (!breadcrumbItems || breadcrumbItems.length <= 1) return null

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <nav
        aria-label="Breadcrumb"
        className="bg-gray-50 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol
            className="flex flex-wrap items-center gap-1 text-sm"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1
              const isHome = index === 0

              return (
                <li
                  key={item.path}
                  className="flex items-center"
                  itemScope
                  itemProp="itemListElement"
                  itemType="https://schema.org/ListItem"
                >
                  {index > 0 && (
                    <ChevronRight
                      className="w-4 h-4 text-gray-400 mx-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                  )}

                  {isLast ? (
                    <span
                      className="text-gray-700 font-medium flex items-center"
                      aria-current="page"
                      itemProp="name"
                    >
                      {isHome && <Home className="w-4 h-4 mr-1" aria-hidden="true" />}
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center transition-colors"
                      itemProp="item"
                    >
                      {isHome && <Home className="w-4 h-4 mr-1" aria-hidden="true" />}
                      <span itemProp="name">{item.name}</span>
                    </Link>
                  )}
                  <meta itemProp="position" content={String(index + 1)} />
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}

export default Breadcrumbs
