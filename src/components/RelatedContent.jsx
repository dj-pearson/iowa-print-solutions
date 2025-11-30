import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, BookOpen, MapPin, Briefcase, Wrench } from 'lucide-react'
import { getRelatedContent, contentTypeLabels } from '../data/searchIndex'

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
  blog: 'bg-blue-50 border-blue-200 text-blue-600',
  resource: 'bg-green-50 border-green-200 text-green-600',
  location: 'bg-purple-50 border-purple-200 text-purple-600',
  industry: 'bg-indigo-50 border-indigo-200 text-indigo-600',
  service: 'bg-cyan-50 border-cyan-200 text-cyan-600',
  tool: 'bg-orange-50 border-orange-200 text-orange-600'
}

const RelatedContent = ({
  currentId,
  title = "Related Resources",
  limit = 3,
  showType = true
}) => {
  const relatedItems = useMemo(() => {
    return getRelatedContent(currentId, limit)
  }, [currentId, limit])

  if (relatedItems.length === 0) return null

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
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
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
                          {contentTypeLabels[item.type]}
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
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RelatedContent
