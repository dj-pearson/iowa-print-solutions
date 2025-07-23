
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'PaperCut NG 22.1 New Features for Iowa Healthcare Organizations',
      excerpt: 'Discover the latest PaperCut NG features that enhance security and compliance for Iowa healthcare facilities.',
      author: 'Dan Pearson',
      date: '2025-01-15',
      category: 'PaperCut',
      readTime: '5 min read',
      image: '/blog/papercut-ng-features.jpg',
      slug: 'papercut-ng-22-1-features-iowa-healthcare'
    },
    {
      id: 2,
      title: 'Uniflow 2024 Updates: Enhanced Security for Iowa Financial Institutions',
      excerpt: 'Learn about new Uniflow security features that help Iowa banks and credit unions maintain compliance.',
      author: 'Dan Pearson',
      date: '2025-01-10',
      category: 'Uniflow',
      readTime: '4 min read',
      image: '/blog/uniflow-security-updates.jpg',
      slug: 'uniflow-2024-security-updates-iowa-financial'
    },
    {
      id: 3,
      title: 'PrinterLogic Cloud Migration Success Story: Iowa State University',
      excerpt: 'How Iowa State University successfully migrated to PrinterLogic cloud printing infrastructure.',
      author: 'Dan Pearson',
      date: '2025-01-05',
      category: 'PrinterLogic',
      readTime: '6 min read',
      image: '/blog/printerlogic-isu-case-study.jpg',
      slug: 'printerlogic-cloud-migration-iowa-state-university'
    }
  ]

  const categories = ['all', 'PaperCut', 'Uniflow', 'PrinterLogic', 'Security', 'Implementation']

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Iowa Print Management Blog - Latest News & Updates"
        description="Stay updated with the latest print management news, PaperCut updates, Uniflow features, and PrinterLogic developments for Iowa organizations."
        keywords="Iowa print management blog, PaperCut news, Uniflow updates, PrinterLogic articles, print security news Iowa, document management blog"
        canonicalUrl="https://iowa-print-solutions.pages.dev/blog"
        schemaType="Blog"
      />

      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Iowa Print Management Blog
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Stay informed with the latest updates, best practices, and insights for PaperCut, Uniflow, and PrinterLogic implementations in Iowa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Tag className="h-3 w-3 mr-1 inline" />
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <span className="text-white font-semibold">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Iowa Print Management News
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest updates on print management solutions delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
