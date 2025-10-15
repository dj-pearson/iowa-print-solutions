
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { Helmet } from 'react-helmet'

const Breadcrumbs = ({ customPath = null }) => {
  const location = useLocation()

  // Defensive: Ensure we always have a valid array of pathnames
  let pathnames = []
  if (customPath && Array.isArray(customPath)) {
    pathnames = customPath
  } else if (customPath && typeof customPath === 'string') {
    pathnames = customPath.split('/').filter(x => x)
  } else if (location && location.pathname) {
    pathnames = location.pathname.split('/').filter(x => x)
  }

  const breadcrumbItems = [
    { name: 'Home', path: '/' }
  ]

  // Defensive: Only process if pathnames is a valid array
  if (Array.isArray(pathnames) && pathnames.length > 0) {
    let currentPath = ''
    pathnames.forEach(pathname => {
      if (pathname && typeof pathname === 'string') {
        currentPath += `/${pathname}`
        const name = pathname.charAt(0).toUpperCase() + pathname.slice(1)
          .replace(/-/g, ' ')
          .replace(/([A-Z])/g, ' $1')
          .trim()
        breadcrumbItems.push({ name, path: currentPath })
      }
    })
  }

  // Defensive: Ensure breadcrumbItems is valid before mapping
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': (Array.isArray(breadcrumbItems) ? breadcrumbItems : []).map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name || '',
      'item': `https://iowaprintsolutions.com${item.path || '/'}`
    }))
  }

  // Don't render if there are no additional paths beyond home
  if (!Array.isArray(pathnames) || pathnames.length === 0) return null

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <nav className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 py-3 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            {(Array.isArray(breadcrumbItems) ? breadcrumbItems.slice(1) : []).map((item, index) => (
              <React.Fragment key={item.path || index}>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                {index === breadcrumbItems.length - 2 ? (
                  <span className="text-gray-600 font-medium">{item.name || ''}</span>
                ) : (
                  <Link to={item.path || '/'} className="text-blue-600 hover:text-blue-800">
                    {item.name || ''}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Breadcrumbs
