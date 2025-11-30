import React, { useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, FileText, MapPin, Briefcase, BookOpen, Wrench, Filter, ArrowRight, X } from 'lucide-react'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import { useSearch } from '../hooks/useSearch'
import { contentTypeLabels } from '../data/searchIndex'

// Icons for different content types
const typeIcons = {
  blog: FileText,
  resource: BookOpen,
  location: MapPin,
  industry: Briefcase,
  service: Briefcase,
  tool: Wrench
}

// Colors for different content types
const typeColors = {
  blog: 'bg-blue-100 text-blue-600 border-blue-200',
  resource: 'bg-green-100 text-green-600 border-green-200',
  location: 'bg-purple-100 text-purple-600 border-purple-200',
  industry: 'bg-indigo-100 text-indigo-600 border-indigo-200',
  service: 'bg-cyan-100 text-cyan-600 border-cyan-200',
  tool: 'bg-orange-100 text-orange-600 border-orange-200'
}

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const initialType = searchParams.get('type') || 'all'

  const {
    query,
    setQuery,
    filters,
    updateFilter,
    results,
    filterOptions,
    clearSearch,
    resultCount
  } = useSearch()

  // Initialize from URL params
  React.useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery)
    }
    if (initialType !== 'all') {
      updateFilter('type', initialType)
    }
  }, [initialQuery, initialType, setQuery, updateFilter])

  // Update URL when search changes
  React.useEffect(() => {
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (filters.type !== 'all') params.set('type', filters.type)
    setSearchParams(params, { replace: true })
  }, [query, filters.type, setSearchParams])

  // Group results by type for better organization
  const groupedResults = useMemo(() => {
    if (filters.type !== 'all') {
      return { [filters.type]: results }
    }

    return results.reduce((acc, item) => {
      if (!acc[item.type]) acc[item.type] = []
      acc[item.type].push(item)
      return acc
    }, {})
  }, [results, filters.type])

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={query ? `Search: ${query} - Iowa Print Solutions` : 'Search - Iowa Print Solutions'}
        description="Search Iowa Print Solutions for blog articles, resources, guides, and location information about print management."
        canonicalUrl="https://iowaprintsolutions.com/search"
      />

      <Breadcrumbs />

      {/* Search Header */}
      <section className="bg-white border-b py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Search Iowa Print Solutions
            </h1>

            {/* Search Input */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for articles, resources, locations..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                autoFocus
              />
              {query && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 justify-center">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Filter:
              </span>
              {filterOptions.types.map(type => (
                <button
                  key={type}
                  onClick={() => updateFilter('type', type)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    filters.type === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {type === 'all' ? 'All' : contentTypeLabels[type] || type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          {query && (
            <div className="mb-8">
              <p className="text-gray-600">
                {resultCount === 0 ? (
                  <>No results found for "<span className="font-medium text-gray-900">{query}</span>"</>
                ) : (
                  <>Found <span className="font-medium text-gray-900">{resultCount}</span> result{resultCount !== 1 ? 's' : ''} for "<span className="font-medium text-gray-900">{query}</span>"</>
                )}
              </p>
            </div>
          )}

          {/* No Query State */}
          {!query && (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                What are you looking for?
              </h2>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Search our blog articles, implementation guides, location pages, and resources to find what you need.
              </p>

              {/* Popular Searches */}
              <div className="max-w-lg mx-auto">
                <p className="text-sm font-medium text-gray-700 mb-3">Popular searches:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['PaperCut', 'HIPAA', 'Des Moines', 'cost reduction', 'education', 'secure print'].map(term => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* No Results State */}
          {query && resultCount === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                <Search className="h-10 w-10 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                No results found
              </h2>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                We couldn't find anything matching "{query}". Try different keywords or browse our content below.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="/blog"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Browse Blog
                </Link>
                <Link
                  to="/resources"
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  View Resources
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}

          {/* Results Grid */}
          {resultCount > 0 && (
            <div className="space-y-12">
              {Object.entries(groupedResults).map(([type, items]) => (
                <div key={type}>
                  {filters.type === 'all' && (
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      {(() => {
                        const Icon = typeIcons[type] || FileText
                        return <Icon className="h-5 w-5 text-gray-500" />
                      })()}
                      {contentTypeLabels[type] || type}s
                      <span className="text-sm font-normal text-gray-500">({items.length})</span>
                    </h2>
                  )}

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((result, index) => {
                      const Icon = typeIcons[result.type] || FileText
                      const colorClass = typeColors[result.type] || 'bg-gray-100 text-gray-600 border-gray-200'

                      return (
                        <motion.div
                          key={result.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={result.path}
                            className="block bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition-all group"
                          >
                            <div className="flex items-start gap-4">
                              <div className={`p-2.5 rounded-lg border ${colorClass}`}>
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs font-medium text-gray-500 uppercase">
                                    {contentTypeLabels[result.type]}
                                  </span>
                                  {result.category && result.category !== contentTypeLabels[result.type] && (
                                    <>
                                      <span className="text-gray-300">•</span>
                                      <span className="text-xs text-gray-500">{result.category}</span>
                                    </>
                                  )}
                                </div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                                  {result.title}
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-2">
                                  {result.description}
                                </p>
                                <div className="mt-3 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                                  View {contentTypeLabels[result.type]}
                                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-600 mb-6">
            Our Iowa-based team is here to help. Contact us for personalized assistance with your print management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:5152372352"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium border border-blue-200 hover:bg-blue-50 transition-colors"
            >
              Call (515) 237-2352
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SearchResults
