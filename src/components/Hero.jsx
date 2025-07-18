import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Printer } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              Iowa's Premier Print Solutions Expert
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Specializing in PaperCut, Uniflow, and PrinterLogic implementations. Reduce costs, enhance security, and optimize your print infrastructure with Iowa's trusted print management professionals.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Certified PaperCut & Uniflow Specialists</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>15+ Years Serving Iowa Organizations</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Average 30% Cost Reduction</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center space-x-2"
              >
                <span>Get Free Assessment</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
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
                <div className="bg-white/20 p-4 rounded-full">
                  <Printer className="h-16 w-16" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
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