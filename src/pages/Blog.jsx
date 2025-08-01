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
      id: 'uniflow-2025-updates',
      title: 'uniFLOW 2025 Updates: Enhanced Security and Modern Print Architecture',
      excerpt: 'Canon uniFLOW 2025 brings Microsoft Modern Printing support, enhanced security, Sharp device integration, and zero trust environment capabilities for Iowa businesses.',
      author: 'Dan Pearson',
      date: '2025-07-24',
      readTime: '14 min read',
      category: 'Product Updates',
      image: '/api/placeholder/400/250',
      slug: 'uniflow-2025-updates'
    },
    {
      id: 'papercut-mf-24-1-updates',
      title: 'PaperCut MF 24.1: What\'s New and What It Means for Your Business',
      excerpt: 'Major updates to PaperCut MF 24.1 introduce self-hosted document processing, new licensing models, and enhanced data residency options. Critical information for Iowa businesses planning upgrades.',
      author: 'Dan Pearson',
      date: '2025-07-24',
      readTime: '15 min read',
      category: 'Product Updates',
      image: '/api/placeholder/400/250',
      slug: 'papercut-mf-24-1-updates'
    },
    {
      id: 'papercut-healthcare-iowa',
      title: 'PaperCut Healthcare Solutions for Iowa Medical Facilities',
      excerpt: 'HIPAA-compliant printing solutions for Iowa healthcare. Patient information security, audit trails, and compliance management.',
      author: 'Dan Pearson',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Healthcare',
      image: '/api/placeholder/400/250',
      slug: 'papercut-healthcare-iowa'
    },
    {
      id: 'hipaa-printing-iowa',
      title: 'HIPAA Compliant Printing for Iowa Healthcare Organizations',
      excerpt: 'Ensure HIPAA compliance with secure printing solutions. Document protection, access controls, and audit requirements.',
      author: 'Dan Pearson',
      date: '2024-01-12',
      readTime: '10 min read',
      category: 'Healthcare',
      image: '/api/placeholder/400/250',
      slug: 'hipaa-printing-iowa'
    },
    {
      id: 'uniflow-medical-iowa',
      title: 'Uniflow Medical Print Security for Iowa Healthcare',
      excerpt: 'Advanced medical document security with Uniflow. Patient data protection, secure workflows, and compliance automation.',
      author: 'Dan Pearson',
      date: '2024-01-14',
      readTime: '11 min read',
      category: 'Healthcare',
      image: '/api/placeholder/400/250',
      slug: 'uniflow-medical-iowa'
    },
    {
      id: 'papercut-education-iowa',
      title: 'PaperCut Education Solutions for Iowa Schools & Universities',
      excerpt: 'Student print management, FERPA compliance, and campus-wide cost control for Iowa educational institutions.',
      author: 'Dan Pearson',
      date: '2024-01-16',
      readTime: '13 min read',
      category: 'Education',
      image: '/api/placeholder/400/250',
      slug: 'papercut-education-iowa'
    },
    {
      id: 'school-district-iowa',
      title: 'Print Management for Iowa School Districts',
      excerpt: 'Comprehensive print management solutions for Iowa K-12 school districts. Student account management, teacher workflows, and administrative cost control.',
      author: 'Dan Pearson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Education',
      image: '/api/placeholder/400/250',
      slug: 'school-district-iowa'
    },
    {
      id: 'uniflow-university-iowa',
      title: 'Uniflow University Solutions for Iowa Higher Education',
      excerpt: 'Transform your Iowa university with Uniflow\'s advanced academic document workflows. FERPA compliance and administrative automation.',
      author: 'Dan Pearson',
      date: '2024-01-17',
      readTime: '14 min read',
      category: 'Education',
      image: '/api/placeholder/400/250',
      slug: 'uniflow-university-iowa'
    },
    {
      id: 'reduce-printing-costs-iowa',
      title: 'Reduce Printing Costs for Iowa Businesses',
      excerpt: 'Proven strategies to reduce printing costs by 30-50% for Iowa organizations. Cost tracking, policy enforcement, and optimization techniques.',
      author: 'Dan Pearson',
      date: '2024-01-20',
      readTime: '12 min read',
      category: 'Cost Management',
      image: '/api/placeholder/400/250',
      slug: 'reduce-printing-costs-iowa'
    },
    {
      id: 'eliminate-print-servers-iowa',
      title: 'Eliminate Print Servers for Iowa Organizations',
      excerpt: 'Transform your printing infrastructure with PrinterLogic serverless solutions. Reduce IT costs by 60-80% and improve reliability.',
      author: 'Dan Pearson',
      date: '2024-01-22',
      readTime: '10 min read',
      category: 'Technology',
      image: '/api/placeholder/400/250',
      slug: 'eliminate-print-servers-iowa'
    },
    {
      id: 'secure-print-release-iowa',
      title: 'Secure Print Release Solutions for Iowa',
      excerpt: 'Protect sensitive documents with secure print release. Authentication methods, compliance benefits, and industry applications.',
      author: 'Dan Pearson',
      date: '2024-01-25',
      readTime: '11 min read',
      category: 'Security',
      image: '/api/placeholder/400/250',
      slug: 'secure-print-release-iowa'
    },
    {
      id: 'papercut-cost-reduction-iowa',
      title: 'PaperCut Cost Reduction for Iowa Organizations',
      excerpt: 'Reduce printing expenses by 40-60% with PaperCut cost management features. Track usage, enforce policies, and optimize print budgets.',
      author: 'Dan Pearson',
      date: '2024-01-18',
      readTime: '9 min read',
      category: 'Cost Management',
      image: '/api/placeholder/400/250',
      slug: 'papercut-cost-reduction-iowa'
    },
    {
      id: 'print-security-software-des-moines',
      title: 'Print Security Software Solutions in Des Moines',
      excerpt: 'Comprehensive print security software for Des Moines businesses. Document protection, access control, and compliance management.',
      author: 'Dan Pearson',
      date: '2024-01-20',
      readTime: '10 min read',
      category: 'Security',
      image: '/api/placeholder/400/250',
      slug: 'print-security-software-des-moines'
    },
    {
      id: 'document-security-printing-cedar-rapids',
      title: 'Document Security Printing Solutions for Cedar Rapids',
      excerpt: 'Secure document printing for Cedar Rapids organizations. Protect confidential information with advanced security features.',
      author: 'Dan Pearson',
      date: '2024-01-22',
      readTime: '8 min read',
      category: 'Security',
      image: '/api/placeholder/400/250',
      slug: 'document-security-printing-cedar-rapids'
    },
    {
      id: 'managed-print-services-iowa',
      title: 'Managed Print Services for Iowa Organizations',
      excerpt: 'Comprehensive managed print services for Iowa businesses. Device management, cost control, security enhancement, and analytics for optimal print operations.',
      author: 'Dan Pearson',
      date: '2024-01-28',
      readTime: '15 min read',
      category: 'Managed Services',
      image: '/api/placeholder/400/250',
      slug: 'managed-print-services-iowa'
    },
    {
      id: 'document-management-iowa',
      title: 'Document Management Solutions for Iowa Organizations',
      excerpt: 'Transform your Iowa organization with digital document management solutions. Eliminate paper chaos, improve security, and streamline workflows.',
      author: 'Dan Pearson',
      date: '2024-01-30',
      readTime: '14 min read',
      category: 'Document Management',
      image: '/api/placeholder/400/250',
      slug: 'document-management-iowa'
    },
    {
      id: 'print-management-des-moines',
      title: 'Professional Print Management for Des Moines',
      excerpt: 'Expert print management services for Des Moines businesses. PaperCut, Uniflow & PrinterLogic implementation serving Iowa\'s capital city since 1958.',
      author: 'Dan Pearson',
      date: '2024-02-01',
      readTime: '13 min read',
      category: 'Local Services',
      image: '/api/placeholder/400/250',
      slug: 'print-management-des-moines'
    },
    {
      id: 'papercut-vs-alternatives-iowa',
      title: 'PaperCut vs Alternatives: Iowa Print Management Comparison',
      excerpt: 'Comprehensive comparison of PaperCut versus other leading print management solutions. Features, costs, and implementation guidance for Iowa organizations.',
      author: 'Dan Pearson',
      date: '2024-02-03',
      readTime: '16 min read',
      category: 'Comparison',
      image: '/api/placeholder/400/250',
      slug: 'papercut-vs-alternatives-iowa'
    },
    {
      id: 'print-management-software-comparison-iowa',
      title: 'Print Management Software Comparison for Iowa',
      excerpt: 'Complete evaluation of leading print management software solutions. Expert guidance to help Iowa organizations make informed technology decisions.',
      author: 'Dan Pearson',
      date: '2024-02-05',
      readTime: '18 min read',
      category: 'Software Comparison',
      image: '/api/placeholder/400/250',
      slug: 'print-management-software-comparison-iowa'
    }
  ]

  const categories = ['all', 'Product Updates', 'Healthcare', 'Education', 'Cost Management', 'Technology', 'Security', 'Managed Services', 'Document Management', 'Local Services', 'Comparison', 'Software Comparison']

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
                    to={post.slug.startsWith('/') ? post.slug : `/blog/${post.slug}`}
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