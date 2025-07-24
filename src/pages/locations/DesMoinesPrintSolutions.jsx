
import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Users, Building2, Shield } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import LocalBusinessSchema from '../../components/LocalBusinessSchema'

const DesMoinesPrintSolutions = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Des Moines Print Solutions' }
  ]

  const desMoinesServices = [
    {
      icon: Building2,
      title: 'Corporate Print Management',
      description: 'Serving Des Moines businesses, insurance companies, and financial institutions with enterprise-grade print solutions.',
      clients: ['Principal Financial Group', 'Casey\'s General Stores', 'Hy-Vee Corporate', 'Wells Fargo Des Moines']
    },
    {
      icon: Shield,
      title: 'Healthcare Print Security',
      description: 'HIPAA-compliant printing solutions for Des Moines medical facilities and healthcare systems.',
      clients: ['UnityPoint Health', 'MercyOne Des Moines', 'Broadlawns Medical Center']
    },
    {
      icon: Users,
      title: 'Government Solutions',
      description: 'Secure, cost-effective print management for Des Moines city government and Polk County agencies.',
      clients: ['City of Des Moines', 'Polk County', 'Iowa State Government']
    }
  ]

  return (
    <>
      <SEO 
        title="Des Moines Print Management Solutions | PaperCut, Uniflow & PrinterLogic Iowa"
        description="Leading print management solutions in Des Moines, Iowa. Expert PaperCut, Uniflow, and PrinterLogic implementation for Des Moines businesses, healthcare, and government. Serving West Des Moines, Ankeny, Urbandale, and metro area."
        keywords="Des Moines print management, print solutions Des Moines Iowa, PaperCut Des Moines, Uniflow Des Moines, PrinterLogic Des Moines, West Des Moines printing, Ankeny print management, Urbandale document solutions"
        canonicalUrl="https://iowaprintsolutions.com/locations/des-moines"
        schemaType="LocalBusiness"
      />
      
      <LocalBusinessSchema />
      
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} className="mb-8 text-blue-200" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <MapPin className="h-16 w-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Des Moines Print Management Solutions
              </h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
                Since 1958, Infomax Office Systems has been Des Moines' premier print management provider. We serve the greater Des Moines metro area including West Des Moines, Ankeny, Urbandale, Johnston, and Clive with expert PaperCut, Uniflow, and PrinterLogic implementations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:5152372352"
                  className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Des Moines: (515) 237-2352
                </a>
                <a
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-md font-medium transition-colors"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Des Moines Service Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serving Greater Des Moines Metro Area
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive print management solutions across all Des Moines metropolitan communities.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Des Moines</h3>
                <p className="text-sm text-gray-600">Downtown & East Side</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">West Des Moines</h3>
                <p className="text-sm text-gray-600">Business corridor</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Ankeny</h3>
                <p className="text-sm text-gray-600">North metro</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Urbandale</h3>
                <p className="text-sm text-gray-600">Northwest suburbs</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Johnston</h3>
                <p className="text-sm text-gray-600">North suburbs</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Clive</h3>
                <p className="text-sm text-gray-600">West metro</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Waukee</h3>
                <p className="text-sm text-gray-600">Growing community</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900">Altoona</h3>
                <p className="text-sm text-gray-600">East metro</p>
              </div>
            </div>
          </div>
        </section>

        {/* Des Moines Industry Focus */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Des Moines Industry Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized print management solutions for Des Moines' key industries.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {desMoinesServices.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-sm text-gray-500">
                    <strong>Notable Clients:</strong>
                    <ul className="mt-2">
                      {service.clients.map((client, idx) => (
                        <li key={idx} className="text-gray-600">• {client}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Optimize Your Des Moines Print Environment?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of Des Moines businesses who trust Infomax Office Systems for their print management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:5152372352"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
                >
                  Call (515) 237-2352
                </a>
                <a
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors"
                >
                  Request Free Assessment
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default DesMoinesPrintSolutions
