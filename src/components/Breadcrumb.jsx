import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ChevronRight, Home } from 'lucide-react'

/**
 * Breadcrumb component with Schema.org BreadcrumbList markup
 * Improves navigation UX and enables breadcrumb rich snippets in search results
 */
const Breadcrumb = ({ customItems = null }) => {
  const location = useLocation()

  // Function to generate breadcrumb items from URL path
  const generateBreadcrumbs = () => {
    if (customItems) return customItems

    const pathnames = location.pathname.split('/').filter(x => x)

    // Return null for home page (no breadcrumbs needed)
    if (pathnames.length === 0) return null

    const breadcrumbs = [
      { name: 'Home', path: '/' }
    ]

    let currentPath = ''

    pathnames.forEach((pathname, index) => {
      currentPath += `/${pathname}`

      // Convert pathname to readable label
      const label = pathname
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

      breadcrumbs.push({
        name: label,
        path: currentPath
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  // Don't render if no breadcrumbs or only home
  if (!breadcrumbs || breadcrumbs.length <= 1) return null

  // Generate Schema.org BreadcrumbList structured data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://iowaprintsolutions.com${crumb.path}`
    }))
  }

  return (
    <>
      {/* Add Schema.org markup */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Breadcrumb navigation UI */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1
              const isHome = index === 0

              return (
                <li key={crumb.path} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                  )}

                  {isLast ? (
                    <span className="text-gray-900 font-medium" aria-current="page">
                      {isHome && <Home className="w-4 h-4 inline mr-1" />}
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      to={crumb.path}
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                    >
                      {isHome && <Home className="w-4 h-4 inline mr-1" />}
                      {crumb.name}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}

export default Breadcrumb
