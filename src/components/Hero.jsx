import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <img
                src="/IPSLogo.png"
                alt="Iowa Print Solutions Logo"
                className="h-12 w-12 sm:h-16 sm:w-16 mr-3 sm:mr-4 object-contain"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  Iowa Print Solutions Resources
                </h1>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90">
              Comprehensive information about PaperCut, Uniflow, and PrinterLogic solutions for Iowa organizations. Connect with certified specialists at Infomax Office Systems for professional implementation and support.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-6 md:mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Expert Print Management Information</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Connect with Infomax Office Systems Specialists</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Serving Iowa Organizations Since 2009</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center space-x-2"
              >
                <span>Book Consultation with Infomax</span>
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only"> (opens in new window)</span>
              </a>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Call (515) 237-2352
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 p-6 rounded-full">
                  <img 
                    src="/IPSLogo.png" 
                    alt="Iowa Print Solutions Logo" 
                    className="h-20 w-20 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">
                Complete Print Management Solutions
              </h3>
              <div className="space-y-3 text-center">
                <div className="bg-white/10 rounded-md p-3">
                  <span className="font-medium">PaperCut MF Implementation</span>
                </div>
                <div className="bg-white/10 rounded-md p-3">
                  <span className="font-medium">Uniflow Document Workflows</span>
                </div>
                <div className="bg-white/10 rounded-md p-3">
                  <span className="font-medium">PrinterLogic Serverless Printing</span>
                </div>
                <div className="bg-white/10 rounded-md p-3">
                  <span className="font-medium">24/7 Iowa-Based Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero