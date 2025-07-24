
import React from 'react'
import { motion } from 'framer-motion'
import { Building2, DollarSign, Shield, TrendingUp, Users, CheckCircle, Phone, Mail } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'

const ManagedPrintServicesIowa = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Managed Print Services Iowa', href: '/blog/managed-print-services-iowa' }
  ]

  const serviceFeatures = [
    {
      icon: Building2,
      title: 'Device Management',
      description: 'Complete fleet management of all printing devices across your Iowa locations'
    },
    {
      icon: DollarSign,
      title: 'Cost Control',
      description: 'Reduce printing costs by 20-40% through usage monitoring and optimization'
    },
    {
      icon: Shield,
      title: 'Security Enhancement',
      description: 'Enterprise-grade security with secure print release and document protection'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Detailed insights into printing behavior and cost allocation by department'
    }
  ]

  const iowaBusinessBenefits = [
    {
      business: 'Manufacturing Companies',
      benefits: [
        'Reduce printing costs across multiple Iowa facilities',
        'Standardize printing infrastructure statewide',
        'Improve document security for technical drawings',
        'Track printing costs by project and department'
      ]
    },
    {
      business: 'Healthcare Organizations',
      benefits: [
        'HIPAA-compliant printing solutions',
        'Secure patient document handling',
        'Cost tracking by department and location',
        'Mobile printing for healthcare professionals'
      ]
    },
    {
      business: 'Government Agencies',
      benefits: [
        'Standardized printing across Iowa offices',
        'Enhanced security for sensitive documents',
        'Detailed audit trails and compliance reporting',
        'Budget control and cost allocation'
      ]
    }
  ]

  return (
    <>
      <SEO 
        title="Managed Print Services Iowa | Professional Print Management Solutions"
        description="Comprehensive managed print services for Iowa businesses. Device management, cost control, security enhancement, and analytics. Serving Des Moines, Cedar Rapids, Iowa City & statewide."
        keywords="managed print services Iowa, print management Iowa, MPS Iowa, print fleet management, Iowa print solutions, document management services, print cost reduction Iowa, Des Moines managed print, Cedar Rapids print services"
        canonicalUrl="https://iowaprintsolutions.com/blog/managed-print-services-iowa"
      />
      
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} className="mb-8 text-blue-200" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Building2 className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Managed Print Services for Iowa Organizations
              </h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
                Transform your Iowa organization's printing infrastructure with comprehensive managed print services. 
                Reduce costs, enhance security, and streamline operations across all your locations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get Free Assessment
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Are Managed Print Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Are Managed Print Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Managed Print Services (MPS) is a comprehensive approach to optimizing your organization's entire 
                printing and document infrastructure. For Iowa businesses, this means partnering with experts who 
                handle everything from device management to cost optimization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits for Iowa Organizations */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                MPS Benefits for Iowa Business Sectors
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Every Iowa industry has unique printing challenges. Our managed print services are tailored 
                to meet the specific needs of your sector.
              </p>
            </motion.div>

            <div className="space-y-8">
              {iowaBusinessBenefits.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {sector.business}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sector.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MPS Implementation Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our MPS Implementation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We follow a proven methodology to ensure successful managed print services implementation 
                across your Iowa locations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive audit of your current printing environment, usage patterns, and costs 
                  across all Iowa locations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Solution Design</h3>
                <p className="text-gray-600">
                  Custom MPS solution design including device optimization, software implementation, 
                  and security enhancements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation & Support</h3>
                <p className="text-gray-600">
                  Professional deployment with user training, ongoing monitoring, and continuous 
                  optimization of your print environment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cost Savings Examples */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Real Cost Savings for Iowa Organizations
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Iowa organizations consistently achieve significant cost reductions through our managed print services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">35%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Average Cost Reduction</h3>
                <p className="text-gray-600">
                  Iowa manufacturing companies typically reduce printing costs by 35% in the first year
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">IT Time Savings</h3>
                <p className="text-gray-600">
                  IT departments save 60% of time previously spent on print-related issues
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Uptime Improvement</h3>
                <p className="text-gray-600">
                  Proactive maintenance ensures 90%+ device uptime across Iowa locations
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Iowa Organization's Printing?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free managed print services assessment and discover how much your Iowa organization can save.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </motion.a>
                <motion.a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Schedule Assessment
                </motion.a>
              </div>
              <p className="text-sm mt-4 opacity-80">
                Serving Des Moines, Cedar Rapids, Iowa City, Davenport and all Iowa communities
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ManagedPrintServicesIowa
