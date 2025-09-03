import React from 'react'
import { motion } from 'framer-motion'
import { Printer, CheckCircle, ArrowRight, Users, BarChart3, Shield, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

const PaperCutService = () => {
  const features = [
    {
      icon: Users,
      title: 'User Authentication',
      description: 'Secure user login with Active Directory integration and card-based authentication options.'
    },
    {
      icon: BarChart3,
      title: 'Cost Tracking',
      description: 'Detailed cost analysis with department billing, quota management, and usage reporting.'
    },
    {
      icon: Shield,
      title: 'Secure Printing',
      description: 'Hold and release printing with PIN codes, card authentication, and follow-me printing.'
    },
    {
      icon: Settings,
      title: 'Mobile Integration',
      description: 'Print from any mobile device with PaperCut Mobility Print and web-based submission.'
    }
  ]

  const benefits = [
    'Reduce printing costs by up to 30%',
    'Eliminate unauthorized printing',
    'Track usage by department or user',
    'Implement print quotas and budgets',
    'Enable secure mobile printing',
    'Generate detailed compliance reports'
  ]

  const process = [
    {
      step: '1',
      title: 'Assessment',
      description: 'We analyze your current print environment and identify optimization opportunities.'
    },
    {
      step: '2',
      title: 'Planning',
      description: 'Custom implementation plan tailored to your Iowa organization\'s specific needs.'
    },
    {
      step: '3',
      title: 'Installation',
      description: 'Professional installation and configuration of PaperCut MF software and hardware.'
    },
    {
      step: '4',
      title: 'Training',
      description: 'Comprehensive training for administrators and end users to maximize system benefits.'
    },
    {
      step: '5',
      title: 'Support',
      description: 'Ongoing Iowa-based support and system optimization to ensure continued success.'
    }
  ]

  const seoSchema = {
    '@type': 'Service',
    'serviceType': 'PaperCut MF Implementation',
    'provider': {
      '@type': 'Organization',
      'name': 'Infomax Office Systems'
    },
    'areaServed': {
      '@type': 'State',
      'name': 'Iowa'
    }
  }

  return (
    <>
      <SEO 
        title="PaperCut MF Implementation Services Iowa | Print Management Solutions"
        description="Professional PaperCut MF implementation services for Iowa businesses. Complete setup, user training, and ongoing support for print cost reduction and security. Contact Infomax Office Systems today."
        keywords="PaperCut MF implementation Iowa, PaperCut installation Iowa, print management services Iowa, document security Iowa, cost tracking Iowa, follow me printing Iowa"
        canonicalUrl="https://iowaprintsolutions.com/services/papercut"
        schemaType="Service"
        additionalSchema={seoSchema}
      />
      
      <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Printer className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              PaperCut MF Implementation Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Learn about PaperCut Mobility & Fleet solutions for Iowa organizations. For professional implementation, connect with Infomax Office Systems to reduce costs, enhance security, and gain complete visibility into your print environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Book Infomax Consultation
              </a>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Call (515) 237-2352
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              PaperCut MF Solution Components
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Infomax Office Systems provides end-to-end PaperCut implementation for Iowa organizations, from initial assessment to ongoing optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Iowa Organizations Choose PaperCut MF
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="https://calendly.com/pearsondan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center space-x-2"
                >
                  <span>Book Infomax Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Stats</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Average Cost Reduction</span>
                    <span className="font-bold text-green-600">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Implementation Time</span>
                    <span className="font-bold text-blue-600">2-4 weeks</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">User Adoption Rate</span>
                    <span className="font-bold text-purple-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our PaperCut Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven 5-step process that ensures successful deployment and maximum ROI.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>
            <div className="space-y-12">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 lg:pr-8">
                    <div className={`bg-white rounded-lg shadow-lg p-6 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 lg:pl-8">
                    <div className="hidden lg:block"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Implement PaperCut MF?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the many Iowa organizations that have transformed their print infrastructure with our expert PaperCut implementation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Free Consultation
              </Link>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Schedule Assessment
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}

export default PaperCutService