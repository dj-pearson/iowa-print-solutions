
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { Helmet } from 'react-helmet'

const Breadcrumbs = ({ customPath = null }) => {
  const location = useLocation()
  const pathnames = customPath || location.pathname.split('/').filter(x => x)

  const breadcrumbItems = [
    { name: 'Home', path: '/' }
  ]

  let currentPath = ''
  pathnames.forEach(pathname => {
    currentPath += `/${pathname}`
    const name = pathname.charAt(0).toUpperCase() + pathname.slice(1)
      .replace(/-/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .trim()
    breadcrumbItems.push({ name, path: currentPath })
  })

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://iowa-print-solutions.pages.dev${item.path}`
    }))
  }

  if (pathnames.length === 0) return null

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
            {breadcrumbItems.slice(1).map((item, index) => (
              <React.Fragment key={item.path}>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                {index === breadcrumbItems.length - 2 ? (
                  <span className="text-gray-600 font-medium">{item.name}</span>
                ) : (
                  <Link to={item.path} className="text-blue-600 hover:text-blue-800">
                    {item.name}
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
