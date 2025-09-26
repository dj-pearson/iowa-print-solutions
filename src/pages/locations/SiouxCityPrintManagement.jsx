import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Users, CheckCircle, Star, ArrowRight, Shield, BarChart3, Truck } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import AIOptimizedFAQ from '../../components/AIOptimizedFAQ'
import LocationBusinessSchema from '../../components/LocationBusinessSchema'
import FAQSchema from '../../components/FAQSchema'

const SiouxCityPrintManagement = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Sioux City Print Management', href: '/locations/sioux-city-print-management' }
  ]

  const siouxCityFAQ = [
    {
      question: 'Do you provide print management services in Sioux City, Iowa?',
      answer: 'Yes, we serve Sioux City and the entire Siouxland region with comprehensive PaperCut, uniFLOW, and PrinterLogic solutions. Our team regularly works with agriculture businesses, transportation companies, and healthcare facilities throughout western Iowa.'
    },
    {
      question: 'How do you support agricultural businesses in Sioux City?',
      answer: 'We specialize in print solutions for agribusiness operations including secure grain trading documentation, compliance reporting, field service printing, and multi-location connectivity. Our systems handle the seasonal document volume changes common in agriculture.'
    },
    {
      question: 'Can you handle print management for Sioux City transportation companies?',
      answer: 'Absolutely. We understand transportation industry requirements including DOT compliance documentation, shipping manifest printing, driver log management, and integration with fleet management systems. Many Sioux City logistics companies rely on our expertise.'
    },
    {
      question: 'What healthcare print solutions do you offer in Sioux City?',
      answer: 'We provide HIPAA-compliant print management for Sioux City medical facilities including secure patient record printing, prescription management workflows, insurance documentation, and integration with electronic health record systems.'
    },
    {
      question: 'How quickly can you respond to service calls in Sioux City?',
      answer: 'We maintain strong regional partnerships to ensure prompt service throughout the Siouxland area. For urgent print management issues, we typically provide same-day or next-day response depending on the specific requirements.'
    }
  ]

  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Agriculture & Agribusiness',
      description: 'Secure document workflows for grain trading, compliance reporting, and seasonal operations'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Transportation & Logistics',
      description: 'DOT-compliant document printing and fleet management integration solutions'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Healthcare & Medical',
      description: 'HIPAA-compliant patient record printing and medical workflow automation'
    }
  ]

  const caseStudies = [
    {
      client: 'Sioux City Agribusiness Cooperative',
      challenge: 'Secure grain trading documents across multiple elevators',
      solution: 'PaperCut MF with remote site connectivity and audit trails',
      result: 'Enhanced security compliance, 40% faster document processing'
    },
    {
      client: 'Transportation Company',
      challenge: 'DOT compliance documentation and driver log printing',
      solution: 'uniFLOW automated workflows with mobile printing',
      result: 'Perfect DOT audit results, 50% reduction in documentation time'
    },
    {
      client: 'Sioux City Medical Center',
      challenge: 'HIPAA-compliant patient record management',
      solution: 'Secure print release with badge authentication',
      result: 'Zero HIPAA violations, improved patient privacy protection'
    }
  ]

  const industries = [
    'Agriculture & Grain Trading',
    'Transportation & Logistics',
    'Healthcare & Medical',
    'Professional Services',
    'Manufacturing',
    'Government Agencies'
  ]

  // SEO Schema for location
  const seoSchema = {
    '@type': 'LocalBusiness',
    'name': 'Iowa Print Solutions - Sioux City',
    'description': 'Professional print management services for Sioux City agriculture, transportation, and healthcare businesses. PaperCut, uniFLOW & PrinterLogic expertise.',
    'areaServed': [
      'Sioux City',
      'Siouxland Region',
      'Western Iowa',
      'Woodbury County'
    ],
    'serviceType': 'Print Management Services'
  }

  return (
    <>
      <SEO 
        title="Sioux City Print Management | Agriculture & Transportation Solutions"
        description="Expert print management for Sioux City agriculture, transportation, and healthcare businesses. PaperCut, uniFLOW & PrinterLogic implementation with Siouxland expertise."
        keywords="Sioux City print management, agriculture printing Iowa, transportation print solutions, PaperCut Sioux City, uniFLOW agriculture, Siouxland printing"
        canonicalUrl="https://iowaprintsolutions.com/locations/sioux-city-print-management"
        schemaType="LocalBusiness"
        additionalSchema={seoSchema}
      />
      
      <LocationBusinessSchema 
        locationName="Sioux City"
        description="Specialized print management services for Sioux City's diverse business ecosystem. Expert solutions for agriculture, transportation, and healthcare with deep understanding of Siouxland region requirements and compliance needs."
        address={{
          city: "Sioux City",
          state: "IA",
          postalCode: "51101"
        }}
        serviceArea="Sioux City and Siouxland Region"
        services={[
          {
            name: "Agriculture Print Solutions",
            description: "Secure grain trading documents, compliance reporting, and seasonal workflow management for agribusiness operations"
          },
          {
            name: "Transportation Print Management",
            description: "DOT-compliant documentation and fleet management printing solutions for logistics companies"
          },
          {
            name: "Healthcare Document Security",
            description: "HIPAA-compliant printing and secure document workflows for Sioux City medical facilities"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.7",
          reviewCount: "23"
        }}
        review={{
          ratingValue: "5",
          author: "Lisa Chen, Agribusiness Operations Manager",
          reviewBody: "Iowa Print Solutions understands agriculture technology needs perfectly. Their PaperCut implementation secured our grain trading documents while streamlining our seasonal reporting processes.",
          datePublished: "2024-01-22"
        }}
      />
      
      <FAQSchema faqs={siouxCityFAQ} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sioux City Print Management Solutions
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Specialized print management for Siouxland agriculture, transportation, and healthcare businesses. 
                PaperCut, uniFLOW & PrinterLogic expertise serving western Iowa since 1958.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:(515) 237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Free Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sioux City Industry Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From agribusiness operations to transportation logistics, we understand the unique 
                print management requirements of Siouxland businesses.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="text-green-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sioux City Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from agriculture, transportation, and healthcare businesses 
                throughout the Siouxland region.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-3 text-green-600">{study.client}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-700">Challenge:</span>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Solution:</span>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Result:</span>
                      <p className="text-green-600 font-medium text-sm">{study.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Industries We Serve in Sioux City
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized expertise across Siouxland's diverse business landscape.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="font-medium">{industry}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions from Sioux City businesses about our print management solutions.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <AIOptimizedFAQ faqs={siouxCityFAQ} />
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Optimize Your Sioux City Print Operations?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join the growing number of agriculture, transportation, and healthcare businesses 
                throughout Siouxland saving thousands with professional print management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:(515) 237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
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

export default SiouxCityPrintManagement