import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Award, CheckCircle, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'

const DavenportPrintSolutions = () => {
  const services = [
    {
      title: 'Healthcare Print Management',
      description: 'HIPAA-compliant solutions for Genesis Health System and other Quad Cities medical facilities.',
      features: ['Secure patient document printing', 'Audit trail compliance', 'Mobile nursing station printing']
    },
    {
      title: 'Manufacturing Print Solutions', 
      description: 'Robust solutions for ALCOA, John Deere, and other Quad Cities manufacturers.',
      features: ['Production floor printing', 'Document workflow automation', 'Multi-site management']
    },
    {
      title: 'Educational Institution Support',
      description: 'Complete solutions for St. Ambrose University and Davenport Community Schools.',
      features: ['Student secure printing', 'FERPA-compliant document handling', 'Campus-wide implementation']
    }
  ]

  const seoSchema = {
    '@type': 'LocalBusiness',
    'name': 'Infomax Office Systems - Davenport Print Solutions',
    'description': 'Professional print management services for Davenport and Quad Cities businesses. PaperCut, Uniflow, and PrinterLogic implementation by Iowa\'s trusted provider.',
    'areaServed': {
      '@type': 'City',
      'name': 'Davenport',
      'addressRegion': 'IA'
    },
    'serviceArea': [{
      '@type': 'City',
      'name': 'Davenport'
    }, {
      '@type': 'City', 
      'name': 'Bettendorf'
    }, {
      '@type': 'City',
      'name': 'Rock Island'
    }, {
      '@type': 'City',
      'name': 'Moline'
    }],
    'telephone': '+15152372352',
    'email': 'DPearson@InfomaxOffice.com'
  }

  return (
    <>
      <SEO 
        title="Davenport Print Solutions | Quad Cities Print Management | Infomax Office Systems"
        description="Professional print management services for Davenport and Quad Cities businesses. PaperCut MF, Uniflow, and PrinterLogic implementation for Genesis Health System, ALCOA, John Deere, and St. Ambrose University. Expert Iowa solutions."
        keywords="Davenport print management, Quad Cities print solutions, Genesis Health System printing, ALCOA print management, John Deere document solutions, St. Ambrose University printing, Bettendorf print services, Scott County print management, Iowa print solutions Davenport"
        canonicalUrl="https://iowaprintsolutions.com/locations/davenport"
        schemaType="LocalBusiness"
        additionalSchema={seoSchema}
      />
      
      <div className="min-h-screen bg-gray-50">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Iowa Locations', href: '/locations' },
            { label: 'Davenport Print Solutions' }
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold mb-6">
                Davenport Print Management Solutions
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Professional print management services for Davenport and the entire Quad Cities region. Serving Genesis Health System, ALCOA, John Deere, St. Ambrose University, and businesses throughout Scott County with expert PaperCut MF, Uniflow, and PrinterLogic implementations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:5152372352"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call (515) 237-2352</span>
                </a>
                <a
                  href="https://calendly.com/pearsondan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>Schedule Consultation</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Infomax for Davenport */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Davenport Businesses Choose Infomax Office Systems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With over 65 years serving Iowa, we understand the unique needs of Quad Cities businesses and provide tailored print management solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Local Iowa Expertise
                </h3>
                <p className="text-gray-600">
                  Iowa-based team with deep understanding of Quad Cities business environment and regulations.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Proven Track Record
                </h3>
                <p className="text-gray-600">
                  Successfully serving major Davenport employers including healthcare, manufacturing, and education sectors.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Comprehensive Support
                </h3>
                <p className="text-gray-600">
                  Full-service implementation, training, and ongoing support for all print management solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Davenport */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Specialized Solutions for Davenport Industries
              </h2>
              <p className="text-xl text-gray-600">
                Tailored print management solutions for Quad Cities' major industry sectors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Clients Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serving Major Davenport Organizations
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Trusted by leading Quad Cities healthcare systems, manufacturers, and educational institutions.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Genesis Health System</h3>
                  <p className="text-sm text-gray-600 mt-2">Healthcare printing solutions</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900">ALCOA Davenport</h3>
                  <p className="text-sm text-gray-600 mt-2">Manufacturing document management</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900">John Deere</h3>
                  <p className="text-sm text-gray-600 mt-2">Enterprise print solutions</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900">St. Ambrose University</h3>
                  <p className="text-sm text-gray-600 mt-2">Educational printing management</p>
                </div>
              </div>
            </div>
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
                Ready to Optimize Your Davenport Print Environment?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join hundreds of satisfied Quad Cities businesses who have reduced costs and improved efficiency with professional print management solutions from Infomax Office Systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:5152372352"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call (515) 237-2352</span>
                </a>
                <Link
                  to="/contact"
                  className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>Get Free Consultation</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default DavenportPrintSolutions
