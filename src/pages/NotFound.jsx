import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Home, Search, ArrowLeft, FileQuestion } from 'lucide-react'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Iowa Print Solutions</title>
        <meta name="description" content="The page you're looking for doesn't exist. Find print management solutions for Iowa businesses." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full text-center"
        >
          {/* 404 Icon */}
          <div className="mb-8 flex justify-center">
            <div className="bg-blue-100 rounded-full p-6">
              <FileQuestion className="h-16 w-16 text-blue-600" aria-hidden="true" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Home className="h-5 w-5 mr-2" aria-hidden="true" />
              Go to Homepage
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Search className="h-5 w-5 mr-2" aria-hidden="true" />
              Contact Support
            </Link>
          </div>

          {/* Back Link */}
          <button
            onClick={() => window.history.back()}
            className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-1" aria-hidden="true" />
            Go back to previous page
          </button>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Looking for print solutions?</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/services" className="text-blue-600 hover:underline">Our Services</Link>
              <Link to="/resources" className="text-blue-600 hover:underline">Resources</Link>
              <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link>
              <Link to="/locations" className="text-blue-600 hover:underline">Locations</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default NotFound
