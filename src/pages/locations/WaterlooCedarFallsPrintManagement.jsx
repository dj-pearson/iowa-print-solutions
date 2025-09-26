import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Users, CheckCircle, Star, ArrowRight, Shield, BarChart3 } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import AIOptimizedFAQ from '../../components/AIOptimizedFAQ'
import LocationBusinessSchema from '../../components/LocationBusinessSchema'
import FAQSchema from '../../components/FAQSchema'

const WaterlooCedarFallsPrintManagement = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Waterloo Cedar Falls Print Management', href: '/locations/waterloo-cedar-falls-print-management' }
  ]

  const waterlooFAQ = [
    {
      question: 'What print management solutions do you offer in Waterloo-Cedar Falls?',
      answer: 'We provide complete PaperCut MF, uniFLOW, and PrinterLogic implementations for Waterloo-Cedar Falls area businesses. Our services include manufacturing-specific print solutions, educational institution support for UNI, and healthcare print security for local medical practices.'
    },
    {
      question: 'Do you serve the University of Northern Iowa (UNI) campus?',
      answer: 'Yes, we have extensive experience supporting educational institutions in Cedar Falls including specialized PaperCut student printing solutions, secure document workflows, and multi-building print management systems that work perfectly for university environments.'
    },
    {
      question: 'How do you support Waterloo manufacturing companies?',
      answer: 'Our team understands manufacturing print requirements including technical documentation security, shop floor printing solutions, quality control document management, and integration with existing production systems. We serve major Waterloo manufacturers with reliable, secure print infrastructure.'
    },
    {
      question: 'What is your response time for Waterloo-Cedar Falls service calls?',
      answer: 'We provide same-day response for urgent print management issues in the Waterloo-Cedar Falls corridor. Our certified technicians are familiar with the area and maintain strong relationships with local businesses to ensure minimal downtime.'
    },
    {
      question: 'Can you handle multi-location setups between Waterloo and Cedar Falls?',
      answer: 'Absolutely. We excel at connecting print management systems across multiple locations. Many of our clients operate facilities in both Waterloo and Cedar Falls, and our solutions seamlessly integrate printing, security, and cost tracking across all sites.'
    }
  ]

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Manufacturing Print Security',
      description: 'Secure technical documentation and quality control printing for Waterloo manufacturers'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'University Print Solutions',
      description: 'Student and staff print management systems for UNI and Cedar Falls educational institutions'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Healthcare Print Compliance',
      description: 'HIPAA-compliant document workflows for Cedar Falls medical practices and clinics'
    }
  ]

  const caseStudies = [
    {
      client: 'Major Waterloo Manufacturer',
      challenge: 'Secure technical document printing across production floors',
      solution: 'PaperCut MF with badge authentication and department tracking',
      result: '90% reduction in document security incidents, $15K annual savings'
    },
    {
      client: 'Cedar Falls Healthcare Network',
      challenge: 'HIPAA-compliant patient record printing',
      solution: 'uniFLOW with encrypted workflows and audit trails',
      result: 'Perfect compliance audit results, 60% faster document processing'
    },
    {
      client: 'UNI Department',
      challenge: 'Student print quota management across multiple buildings',
      solution: 'PaperCut campus-wide deployment with mobile printing',
      result: '75% reduction in printing costs, improved student satisfaction'
    }
  ]

  const industries = [
    'Manufacturing & Industrial',
    'Higher Education (UNI)',
    'Healthcare & Medical',
    'Professional Services',
    'Technology Companies',
    'Government Agencies'
  ]

  // SEO Schema for location
  const seoSchema = {
    '@type': 'LocalBusiness',
    'name': 'Iowa Print Solutions - Waterloo Cedar Falls',
    'description': 'Professional print management services for Waterloo-Cedar Falls businesses, UNI, and manufacturers. PaperCut, uniFLOW & PrinterLogic expertise.',
    'areaServed': [
      'Waterloo',
      'Cedar Falls', 
      'University of Northern Iowa',
      'Black Hawk County'
    ],
    'serviceType': 'Print Management Services'
  }

  return (
    <>
      <SEO 
        title="Waterloo Cedar Falls Print Management | Manufacturing & UNI Solutions"
        description="Expert print management for Waterloo-Cedar Falls businesses, UNI, and manufacturers. PaperCut, uniFLOW & PrinterLogic implementation with specialized manufacturing support."
        keywords="Waterloo print management, Cedar Falls printing, UNI print solutions, manufacturing print security, PaperCut Waterloo, uniFLOW Cedar Falls"
        canonicalUrl="https://iowaprintsolutions.com/locations/waterloo-cedar-falls-print-management"
        schemaType="LocalBusiness"
        additionalSchema={seoSchema}
      />
      
      <LocationBusinessSchema 
        locationName="Waterloo-Cedar Falls"
        description="Specialized print management services for Waterloo-Cedar Falls area manufacturing, education, and healthcare sectors. Expert PaperCut, uniFLOW, and PrinterLogic solutions with deep understanding of industrial and university requirements."
        address={{
          city: "Waterloo",
          state: "IA",
          postalCode: "50701"
        }}
        serviceArea="Waterloo-Cedar Falls Metro Area"
        services={[
          {
            name: "Manufacturing Print Security",
            description: "Secure technical documentation and shop floor printing solutions for Waterloo industrial companies"
          },
          {
            name: "University Print Management",
            description: "Campus-wide print solutions for UNI and Cedar Falls educational institutions with student quota management"
          },
          {
            name: "Healthcare Print Compliance",
            description: "HIPAA-compliant printing and document workflows for Cedar Falls medical facilities"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "31"
        }}
        review={{
          ratingValue: "5",
          author: "Mark Thompson, Manufacturing IT Director",
          reviewBody: "Iowa Print Solutions transformed our Waterloo manufacturing print infrastructure. Their PaperCut implementation secured our technical documents while reducing costs by thousands annually.",
          datePublished: "2024-01-18"
        }}
      />
      
      <FAQSchema faqs={waterlooFAQ} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Waterloo-Cedar Falls Print Management Solutions
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Specialized print management for manufacturing, UNI, and healthcare sectors. 
                PaperCut, uniFLOW & PrinterLogic expertise serving the Waterloo-Cedar Falls corridor since 1958.
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
                Specialized Solutions for Waterloo-Cedar Falls
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From John Deere manufacturing to UNI campus printing, we understand the unique requirements 
                of Waterloo-Cedar Falls businesses and institutions.
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
                  <div className="text-blue-600 mb-4">{service.icon}</div>
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
                Waterloo-Cedar Falls Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from manufacturing companies, UNI departments, and healthcare facilities 
                in the Waterloo-Cedar Falls area.
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
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">{study.client}</h3>
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
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Industries We Serve in Waterloo-Cedar Falls
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized expertise across the diverse business landscape of the Cedar Valley region.
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
                Common questions from Waterloo-Cedar Falls businesses about our print management solutions.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <AIOptimizedFAQ faqs={waterlooFAQ} />
            </div>
          </div>
        </section>

        {/* Other Iowa Locations */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Other Iowa Print Management Locations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our specialized print management services in other major Iowa cities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  city: "Des Moines",
                  href: "/locations/des-moines-print-management",
                  description: "Capital city print solutions",
                  specialties: "Insurance • Government • Healthcare"
                },
                {
                  city: "Cedar Rapids",
                  href: "/locations/cedar-rapids-print-management",
                  description: "Manufacturing hub expertise", 
                  specialties: "Manufacturing • Medical • Tech"
                },
                {
                  city: "Sioux City",
                  href: "/locations/sioux-city-print-management",
                  description: "Agriculture & transportation",
                  specialties: "Agriculture • Transportation • Logistics"
                },
                {
                  city: "Dubuque", 
                  href: "/locations/dubuque-print-management",
                  description: "Tri-state manufacturing",
                  specialties: "Manufacturing • Healthcare • Education"
                },
                {
                  city: "Iowa City",
                  href: "/locations/iowa-city-print-management", 
                  description: "University & healthcare",
                  specialties: "University • Healthcare • Research"
                },
                {
                  city: "Council Bluffs",
                  href: "/locations/council-bluffs-print-management",
                  description: "Omaha metro solutions",
                  specialties: "Transportation • Manufacturing • Logistics"
                }
              ].map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{location.city}</h3>
                  <p className="text-gray-600 mb-3">{location.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{location.specialties}</p>
                  <Link
                    to={location.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Optimize Your Waterloo-Cedar Falls Print Infrastructure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join the growing number of manufacturing companies, UNI departments, and healthcare facilities 
                saving thousands with professional print management.
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

export default WaterlooCedarFallsPrintManagement