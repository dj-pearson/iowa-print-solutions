import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import SEO from '../../components/SEO'
import LocalBusinessSchema from '../../components/LocalBusinessSchema'
import Breadcrumbs from '../../components/Breadcrumbs'
import TestimonialCard from '../../components/TestimonialCard'

const CedarRapidsPrintSolutions = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Locations', path: '/locations' },
    { label: 'Cedar Rapids', path: '/locations/cedar-rapids' }
  ]

  const services = [
    'PaperCut MF Implementation & Support',
    'Canon Uniflow Document Solutions',
    'PrinterLogic Serverless Printing',
    'Managed Print Services (MPS)',
    'Print Security & Compliance',
    'Document Workflow Optimization',
    'Cost Reduction & Analytics',
    'Mobile & Cloud Printing'
  ]

  const industries = [
    {
      name: 'Healthcare Organizations',
      description: 'HIPAA-compliant print solutions for Cedar Rapids medical facilities',
      locations: ['Mercy Medical Center', 'UnityPoint Health', 'Cedar Rapids medical practices']
    },
    {
      name: 'Educational Institutions',
      description: 'Secure, cost-effective printing for Cedar Rapids schools and colleges',
      locations: ['Kirkwood Community College', 'Cedar Rapids Community Schools', 'Private schools']
    },
    {
      name: 'Manufacturing & Industrial',
      description: 'Robust print management for Cedar Rapids manufacturing sector',
      locations: ['Rockwell Collins', 'General Mills', 'Industrial facilities']
    },
    {
      name: 'Professional Services',
      description: 'Secure document handling for Cedar Rapids businesses',
      locations: ['Law firms', 'Accounting practices', 'Consulting services']
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Williams',
      company: 'Cedar Rapids Healthcare System',
      location: 'Cedar Rapids, IA',
      testimonial: 'Infomax Office Systems provided exceptional PaperCut implementation. Our HIPAA compliance improved significantly while reducing print costs by 30%.',
      rating: 5
    },
    {
      name: 'Robert Johnson',
      company: 'Cedar Rapids Manufacturing',
      location: 'Cedar Rapids, IA',
      testimonial: 'The Uniflow solution has streamlined our document workflows across multiple departments. Excellent support from the Iowa team.',
      rating: 5
    }
  ]

  return (
    <>
      <SEO 
        title="Cedar Rapids Print Solutions - PaperCut, Uniflow & PrinterLogic Services"
        description="Leading print management solutions in Cedar Rapids, Iowa. Expert PaperCut, Uniflow, and PrinterLogic implementation for healthcare, education, and business. Serving Eastern Iowa since 1958."
        keywords="Cedar Rapids print management, print solutions Cedar Rapids Iowa, PaperCut Cedar Rapids, Uniflow Cedar Rapids, PrinterLogic Cedar Rapids, Marion printing, Hiawatha print management, Eastern Iowa document solutions"
        canonicalUrl="https://iowaprintsolutions.com/locations/cedar-rapids"
        schemaType="LocalBusiness"
      />
      
      <LocalBusinessSchema />
      
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} className="mb-8 text-green-200" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <MapPin className="h-16 w-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cedar Rapids Print Management Solutions
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Serving Eastern Iowa's print management needs since 1958. Expert PaperCut, Uniflow, 
                and PrinterLogic implementation for Cedar Rapids businesses, healthcare, and educational institutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cedar Rapids Service Area */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Eastern Iowa Print Management Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive print solutions serving Cedar Rapids and the greater Eastern Iowa corridor. 
                From Marion to Hiawatha, we provide local support with statewide expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Cedar Rapids</h3>
                <p className="text-sm text-gray-600">Eastern Iowa's business hub</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Marion</h3>
                <p className="text-sm text-gray-600">Growing business community</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Hiawatha</h3>
                <p className="text-sm text-gray-600">Commercial district</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Linn County</h3>
                <p className="text-sm text-gray-600">Complete county coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Professional Print Management Services in Cedar Rapids
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Infomax Office Systems brings 65+ years of experience to Cedar Rapids organizations. 
                  Our certified technicians provide comprehensive print management solutions tailored 
                  to Eastern Iowa's unique business needs.
                </p>
                
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cedar Rapids Office Information</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Service Area</p>
                      <p className="text-gray-600">Cedar Rapids Metro & Eastern Iowa</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">(515) 237-2352</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Service Hours</p>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.infomaxoffice.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
                >
                  Schedule Cedar Rapids Consultation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cedar Rapids Industries We Serve
              </h2>
              <p className="text-xl text-gray-600">
                Specialized print management solutions for Cedar Rapids's diverse business sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div className="text-sm text-gray-500">
                    <strong>Serving:</strong> {industry.locations.join(', ')}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cedar Rapids Client Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                See what Eastern Iowa organizations are saying about our print management services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Cedar Rapids Print Environment?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Contact Infomax Office Systems for a free print assessment and customized solution proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.infomaxoffice.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Free Assessment
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
              <a
                href="tel:5152372352"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
              >
                Call (515) 237-2352
                <Phone className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CedarRapidsPrintSolutions
