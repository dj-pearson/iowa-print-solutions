import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, CheckCircle, ArrowRight, GraduationCap } from 'lucide-react'
import SEO from '../../components/SEO'
import LocalBusinessSchema from '../../components/LocalBusinessSchema'
import Breadcrumbs from '../../components/Breadcrumbs'
import TestimonialCard from '../../components/TestimonialCard'

const IowaCityPrintSolutions = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Locations', path: '/locations' },
    { label: 'Iowa City', path: '/locations/iowa-city' }
  ]

  const services = [
    'PaperCut MF Implementation & Support',
    'Canon Uniflow Document Solutions',
    'PrinterLogic Serverless Printing',
    'HIPAA-Compliant Print Security',
    'Educational Print Management',
    'Research Document Workflows',
    'Mobile & Cloud Printing Solutions',
    'Cost Analytics & Reporting'
  ]

  const industries = [
    {
      name: 'University of Iowa',
      description: 'Comprehensive print management for academic and administrative needs',
      highlights: ['UIHC medical printing', 'Student services', 'Research departments', 'Administrative offices']
    },
    {
      name: 'Healthcare Systems',
      description: 'HIPAA-compliant printing solutions for Iowa City medical facilities',
      highlights: ['UI Hospitals & Clinics', 'Mercy Iowa City', 'Private practices', 'Clinical research']
    },
    {
      name: 'Professional Services',
      description: 'Secure document management for Iowa City businesses',
      highlights: ['Legal firms', 'Financial services', 'Government agencies', 'Consulting practices']
    },
    {
      name: 'K-12 Education',
      description: 'Cost-effective printing solutions for area school districts',
      highlights: ['Iowa City Schools', 'West Branch Schools', 'Solon Schools', 'Private schools']
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      company: 'University of Iowa Research Department',
      location: 'Iowa City, IA',
      testimonial: 'The PaperCut implementation has revolutionized how we manage research document printing. Excellent security and cost controls.',
      rating: 5
    },
    {
      name: 'Michael Thompson',
      company: 'Iowa City Community School District',
      location: 'Iowa City, IA',
      testimonial: 'Infomax Office Systems provided outstanding service for our district-wide Uniflow deployment. Great support and training.',
      rating: 5
    }
  ]

  return (
    <>
      <SEO 
        title="Iowa City Print Solutions - University & Healthcare Print Management"
        description="Expert print management solutions in Iowa City, Iowa. Specialized PaperCut, Uniflow, and PrinterLogic services for University of Iowa, UIHC, and Johnson County businesses since 1958."
        keywords="Iowa City print management, University of Iowa printing, UIHC print solutions, PaperCut Iowa City, Uniflow Iowa City, PrinterLogic Iowa City, Johnson County printing, Coralville print management"
        canonicalUrl="https://iowaprintsolutions.com/locations/iowa-city"
        schemaType="LocalBusiness"
      />
      
      <LocalBusinessSchema />
      
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-yellow-600 to-yellow-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} className="mb-8 text-yellow-200" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <GraduationCap className="h-16 w-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Iowa City Print Management Solutions
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Serving the University of Iowa, UIHC, and Johnson County with specialized print management 
                solutions since 1958. Expert PaperCut, Uniflow, and PrinterLogic implementation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Iowa City Service Area */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                University & Healthcare Print Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive print solutions for Iowa City's unique academic and medical environment. 
                Serving the University of Iowa, UI Hospitals & Clinics, and surrounding communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Iowa City</h3>
                <p className="text-sm text-gray-600">University & medical hub</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Coralville</h3>
                <p className="text-sm text-gray-600">Growing business corridor</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">University Heights</h3>
                <p className="text-sm text-gray-600">Campus community</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Johnson County</h3>
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
                  Specialized Print Solutions for Academic & Medical Environments
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Infomax Office Systems understands the unique requirements of academic institutions 
                  and healthcare facilities. Our solutions ensure HIPAA compliance, research security, 
                  and cost-effective operations for Iowa City's premier organizations.
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
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Iowa City Service Information</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Service Area</p>
                      <p className="text-gray-600">Iowa City, Coralville & Johnson County</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">(515) 237-2352</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
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
                  className="inline-flex items-center justify-center w-full bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition-colors"
                >
                  Schedule Iowa City Consultation
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
                Iowa City Sectors We Specialize In
              </h2>
              <p className="text-xl text-gray-600">
                Tailored print management solutions for Iowa City's academic, healthcare, and business community
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
                  <div className="flex flex-wrap gap-2">
                    {industry.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* University of Iowa Focus */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                University of Iowa Print Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Specialized solutions for the University of Iowa's complex printing needs, from residence halls 
                to research facilities, libraries to administrative offices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Academic Departments</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Secure research printing</li>
                  <li>• Department cost allocation</li>
                  <li>• Student quota management</li>
                  <li>• Faculty mobile printing</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">UI Hospitals & Clinics</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• HIPAA-compliant printing</li>
                  <li>• Patient record security</li>
                  <li>• Medical forms management</li>
                  <li>• 24/7 support availability</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Student Services</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Library printing systems</li>
                  <li>• Residence hall solutions</li>
                  <li>• Campus-wide integration</li>
                  <li>• Student card authentication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Iowa City Client Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                See what Iowa City organizations are saying about our specialized print management services
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
        <section className="py-16 bg-yellow-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Iowa City Print Environment?
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Contact Infomax Office Systems for specialized academic and healthcare print solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.infomaxoffice.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-yellow-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Specialized Assessment
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
              <a
                href="tel:5152372352"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-yellow-600 transition-colors inline-flex items-center justify-center"
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

export default IowaCityPrintSolutions
