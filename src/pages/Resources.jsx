import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, Clock, ArrowRight, BookOpen, Shield, DollarSign, Smartphone, Settings } from 'lucide-react'

const Resources = () => {
  const resources = [
    {
      id: 'papercut-implementation-guide',
      title: 'Complete PaperCut Implementation Guide for Iowa Organizations',
      description: 'Step-by-step guide to successfully implementing PaperCut MF in your Iowa business. From planning to go-live, this comprehensive guide covers everything you need to know.',
      category: 'Implementation',
      tags: ['PaperCut'],
      readTime: '12 min read',
      icon: Settings,
      color: 'blue',
      gradient: 'from-blue-600 to-blue-800',
      link: '/resources/papercut-implementation-guide'
    },
    {
      id: 'papercut-cost-reduction',
      title: 'PaperCut Cost Reduction Strategies for Iowa Businesses',
      description: 'Discover proven strategies to reduce your Iowa organization\'s printing costs by 20-40% with PaperCut print management. Real case studies and actionable insights from Iowa businesses.',
      category: 'Cost Savings',
      tags: ['PaperCut'],
      readTime: '8 min read',
      icon: DollarSign,
      color: 'green',
      gradient: 'from-green-600 to-green-800',
      link: '/resources/papercut-cost-reduction'
    },
    {
      id: 'papercut-mobile-printing',
      title: 'PaperCut Mobile Printing Solutions for Iowa Businesses',
      description: 'Enable seamless mobile printing for your Iowa organization with PaperCut Mobility Print. Support BYOD policies, improve productivity, and maintain security.',
      category: 'Mobile Solutions',
      tags: ['PaperCut'],
      readTime: '10 min read',
      icon: Smartphone,
      color: 'purple',
      gradient: 'from-purple-600 to-purple-800',
      link: '/resources/papercut-mobile-printing'
    },
    {
      id: 'papercut-security-practices',
      title: 'PaperCut Print Security Best Practices for Iowa Organizations',
      description: 'Protect your Iowa organization\'s sensitive documents with comprehensive PaperCut security features. Learn industry best practices for secure printing and compliance.',
      category: 'Security',
      tags: ['PaperCut'],
      readTime: '9 min read',
      icon: Shield,
      color: 'red',
      gradient: 'from-red-600 to-red-800',
      link: '/resources/papercut-security-practices'
    }
  ]

  const categories = ['All', 'Implementation', 'Cost Savings', 'Mobile Solutions', 'Security']
  const products = ['All Products', 'PaperCut', 'Uniflow', 'PrinterLogic']
  
  const [selectedCategory, setSelectedCategory] = React.useState('All')
  const [selectedProduct, setSelectedProduct] = React.useState('All Products')

  const filteredResources = resources.filter(resource => {
    const categoryMatch = selectedCategory === 'All' || resource.category === selectedCategory
    const productMatch = selectedProduct === 'All Products' || resource.tags.includes(selectedProduct)
    return categoryMatch && productMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <BookOpen className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Print Management Resources
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
              Comprehensive guides, best practices, and implementation resources for PaperCut, Uniflow, and PrinterLogic solutions in Iowa. Learn from real-world case studies and expert insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Filter by Topic</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Product Filters */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3">Filter by Product</h3>
            <div className="flex flex-wrap gap-3">
              {products.map((product) => (
                <button
                  key={product}
                  onClick={() => setSelectedProduct(product)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedProduct === product
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {product}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found for the selected filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedProduct('All Products')
                }}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredResources.map((resource, index) => (
                <motion.article
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`bg-gradient-to-r ${resource.gradient} p-6`}>
                    <div className="flex items-center justify-between text-white mb-4">
                      <div className="flex items-center">
                        <div className="bg-white/20 p-3 rounded-lg mr-4">
                          <resource.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <span className="text-sm font-medium opacity-90">{resource.category}</span>
                          <div className="flex items-center mt-1">
                            <Clock className="h-4 w-4 mr-1" />
                            <span className="text-sm opacity-90">{resource.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Tags */}
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {resource.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {resource.description}
                    </p>
                    
                    <Link
                      to={resource.link}
                      className={`inline-flex items-center text-${resource.color}-600 hover:text-${resource.color}-800 font-medium transition-colors`}
                    >
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Need Personalized Guidance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our Iowa-based print management experts are ready to help you implement these solutions in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Expert Consultation
              </Link>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Schedule Free Assessment
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Resources 