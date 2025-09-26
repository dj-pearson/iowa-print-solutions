import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Users, CheckCircle, Star, ArrowRight, Shield, BarChart3, Truck, Building } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import AIOptimizedFAQ from '../../components/AIOptimizedFAQ'
import LocationBusinessSchema from '../../components/LocationBusinessSchema'
import FAQSchema from '../../components/FAQSchema'

const CouncilBluffsPrintManagement = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Council Bluffs Print Management', href: '/locations/council-bluffs-print-management' }
  ]

  const councilBluffsFAQ = [
    {
      question: 'Do you provide print management services in Council Bluffs?',
      answer: 'Yes, we serve Council Bluffs and the greater Omaha metro area with comprehensive PaperCut, uniFLOW, and PrinterLogic solutions. Our team understands the unique requirements of businesses operating across the Iowa-Nebraska border.'
    },
    {
      question: 'How do you support transportation and logistics companies in Council Bluffs?',
      answer: 'We specialize in print solutions for the transportation industry including DOT compliance documentation, shipping manifests, fleet management integration, and multi-location connectivity. Council Bluffs\' strategic location makes it a major logistics hub we serve extensively.'
    },
    {
      question: 'Can you handle print management for businesses with Omaha operations?',
      answer: 'Absolutely. Many of our Council Bluffs clients operate across the metro area. Our print management systems seamlessly connect Iowa and Nebraska locations, providing unified cost tracking, security policies, and user management across state lines.'
    },
    {
      question: 'What healthcare print solutions do you offer in Council Bluffs?',
      answer: 'We provide HIPAA-compliant print management for Council Bluffs medical facilities including secure patient record printing, prescription workflows, insurance documentation, and integration with major electronic health record systems used throughout the region.'
    },
    {
      question: 'How do you support manufacturing companies in Council Bluffs?',
      answer: 'Our team understands manufacturing print requirements including quality documentation, technical drawings security, shop floor printing solutions, and integration with production management systems. We serve several major manufacturers in the Council Bluffs area.'
    }
  ]

  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Transportation & Logistics',
      description: 'DOT-compliant documentation and fleet management integration for major logistics operations'
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Manufacturing Support',
      description: 'Secure technical documentation and quality control printing for industrial companies'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Healthcare Compliance',
      description: 'HIPAA-compliant patient record printing and medical workflow automation'
    }
  ]

  const caseStudies = [
    {
      client: 'Council Bluffs Logistics Company',
      challenge: 'Cross-state print management for Iowa-Nebraska operations',
      solution: 'PrinterLogic serverless deployment with centralized management',
      result: 'Eliminated print servers, 50% reduction in IT maintenance costs'
    },
    {
      client: 'Regional Manufacturing Facility',
      challenge: 'Secure technical drawings and quality documentation',
      solution: 'PaperCut MF with badge authentication and department tracking',
      result: '90% improvement in document security, $18K annual savings'
    },
    {
      client: 'Council Bluffs Medical Center',
      challenge: 'HIPAA-compliant patient record management across departments',
      solution: 'uniFLOW secure workflows with encrypted document storage',
      result: 'Perfect compliance audit, 65% faster document processing'
    }
  ]

  const industries = [
    'Transportation & Logistics',
    'Manufacturing & Industrial',
    'Healthcare & Medical',
    'Professional Services',
    'Government & Municipal',
    'Retail & Distribution'
  ]

  // SEO Schema for location
  const seoSchema = {
    '@type': 'LocalBusiness',
    'name': 'Iowa Print Solutions - Council Bluffs',
    'description': 'Professional print management services for Council Bluffs transportation, manufacturing, and healthcare businesses. PaperCut, uniFLOW & PrinterLogic expertise.',
    'areaServed': [
      'Council Bluffs',
      'Omaha Metro Area',
      'Pottawattamie County',
      'Southwest Iowa'
    ],
    'serviceType': 'Print Management Services'
  }

  return (
    <>
      <SEO 
        title="Council Bluffs Print Management | Transportation & Manufacturing Solutions"
        description="Expert print management for Council Bluffs transportation, manufacturing, and healthcare businesses. PaperCut, uniFLOW & PrinterLogic implementation with Omaha metro expertise."
        keywords="Council Bluffs print management, transportation printing Iowa, logistics print solutions, PaperCut Council Bluffs, Omaha metro printing, cross-state print management"
        canonicalUrl="https://iowaprintsolutions.com/locations/council-bluffs-print-management"
        schemaType="LocalBusiness"
        additionalSchema={seoSchema}
      />
      
      <LocationBusinessSchema 
        locationName="Council Bluffs"
        description="Strategic print management services for Council Bluffs businesses leveraging the city's transportation hub status. Expert solutions for cross-state operations with deep understanding of Iowa-Nebraska business requirements."
        address={{
          city: "Council Bluffs",
          state: "IA", 
          postalCode: "51501"
        }}
        serviceArea="Council Bluffs and Omaha Metro Area"
        services={[
          {
            name: "Transportation Print Solutions",
            description: "DOT-compliant documentation and logistics workflow management for Council Bluffs transportation companies"
          },
          {
            name: "Cross-State Integration",
            description: "Seamless print management connecting Iowa and Nebraska operations with unified policies and tracking"
          },
          {
            name: "Manufacturing Document Security",
            description: "Secure technical documentation and quality control printing for Council Bluffs industrial facilities"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "26"
        }}
        review={{
          ratingValue: "5",
          author: "Patricia Williams, Logistics Operations Manager",
          reviewBody: "Iowa Print Solutions perfectly understands our cross-state operations. Their PrinterLogic implementation unified our Council Bluffs and Omaha printing while eliminating server maintenance headaches.",
          datePublished: "2024-01-28"
        }}
      />
      
      <FAQSchema faqs={councilBluffsFAQ} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Council Bluffs Print Management Solutions
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Strategic print management for Council Bluffs transportation, manufacturing, and healthcare businesses. 
                PaperCut, uniFLOW & PrinterLogic expertise serving the Omaha metro area since 1958.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:(515) 237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
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
                Council Bluffs Business Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Leveraging Council Bluffs' strategic location as a transportation hub, we provide 
                print management solutions that connect Iowa and Nebraska operations seamlessly.
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
                  <div className="text-orange-600 mb-4">{service.icon}</div>
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
                Council Bluffs Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from transportation, manufacturing, and healthcare businesses 
                throughout the Council Bluffs and Omaha metro area.
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
                  <h3 className="text-lg font-semibold mb-3 text-orange-600">{study.client}</h3>
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
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Industries We Serve in Council Bluffs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized expertise across Council Bluffs' strategic business sectors.
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
                Common questions from Council Bluffs area businesses about our print management solutions.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <AIOptimizedFAQ faqs={councilBluffsFAQ} />
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Streamline Your Council Bluffs Operations?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join the growing number of transportation companies, manufacturers, and healthcare facilities 
                throughout the Omaha metro optimizing their print infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:(515) 237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors"
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

export default CouncilBluffsPrintManagement