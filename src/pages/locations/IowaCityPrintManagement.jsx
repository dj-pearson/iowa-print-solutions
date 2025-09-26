import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Users, CheckCircle, Star, ArrowRight, Shield, BarChart3, GraduationCap } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import AIOptimizedFAQ from '../../components/AIOptimizedFAQ'

const IowaCityPrintManagement = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Iowa City Print Management', href: '/locations/iowa-city-print-management' }
  ]

  const iowaCityFAQ = [
    {
      question: 'Why choose Iowa City print management services from Infomax Office Systems?',
      answer: 'Infomax Office Systems understands Iowa City\'s unique combination of academic, healthcare, and professional services. From the University of Iowa\'s massive campus printing needs to UI Hospitals\' HIPAA requirements and Iowa City\'s thriving legal and consulting practices, we\'ve served this sophisticated market since 1958.'
    },
    {
      question: 'Which Iowa City organizations use PaperCut and uniFLOW solutions?',
      answer: 'Major Iowa City organizations including University of Iowa departments, UI Hospitals & Clinics, Iowa City Community School District, numerous law firms, accounting practices, and healthcare facilities throughout Johnson County rely on our print management expertise and local knowledge.'
    },
    {
      question: 'How do you handle University of Iowa\'s complex printing requirements?',
      answer: 'We have extensive experience with large-scale academic environments, including multi-building implementations, research department needs, student print quotas, FERPA compliance, and integration with university billing systems. Our solutions scale from individual departments to campus-wide deployments.'
    },
    {
      question: 'What makes Iowa City print management different from other Iowa markets?',
      answer: 'Iowa City combines world-class healthcare (UI Hospitals), major research university operations, and a sophisticated professional services sector. This creates unique requirements for HIPAA compliance, research data security, student privacy, and high-volume document processing that we specialize in addressing.'
    },
    {
      question: 'Do you provide Iowa City-specific case studies and references?',
      answer: 'Yes, we have extensive Iowa City client references across higher education, healthcare, legal, and professional services. We can provide relevant case studies showing cost savings, compliance achievements, and efficiency improvements specific to Iowa City\'s academic and professional environments.'
    }
  ]

  const services = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Higher Education Solutions',
      description: 'Campus-wide print management for University of Iowa and academic institutions',
      features: [
        'Student print quota management',
        'FERPA compliance & privacy',
        'Research data security',
        'Multi-building coordination'
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Healthcare Print Security',
      description: 'HIPAA-compliant solutions for UI Hospitals and Iowa City medical facilities',
      features: [
        'HIPAA compliance assurance',
        'Patient data protection',
        'Secure medical record printing',
        'Audit trail reporting'
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Professional Services',
      description: 'Advanced document workflows for Iowa City legal and consulting firms',
      features: [
        'Client confidentiality protection',
        'Matter-based cost tracking',
        'Automated billing integration',
        'Secure document workflows'
      ]
    }
  ]

  const localCaseStudy = {
    organization: 'Iowa City Professional Services Group',
    challenge: 'Managing confidential client documents and accurate billing across multiple practice areas',
    solution: 'PaperCut MF with advanced user authentication and detailed cost center tracking',
    results: [
      '35% improvement in billing accuracy',
      '50% reduction in confidential document incidents',
      'Streamlined client matter tracking',
      'Enhanced security compliance'
    ],
    timeline: '3 weeks implementation',
    quote: 'The detailed cost tracking and security features have transformed how we manage client work. Our billing is more accurate and our confidential documents are properly protected.'
  }

  const stats = [
    { number: '120+', label: 'Iowa City Clients' },
    { number: '65+', label: 'Years Local Experience' },
    { number: '< 2hr', label: 'Average Response Time' },
    { number: '100%', label: 'HIPAA/FERPA Compliant' }
  ]

  const universitySolutions = [
    {
      department: 'Academic Departments',
      solutions: ['Faculty printing quotas', 'Student lab management', 'Research document security', 'Course material printing']
    },
    {
      department: 'Administrative Offices',
      solutions: ['Departmental cost tracking', 'Secure document workflows', 'Budget management', 'Multi-site coordination']
    },
    {
      department: 'Student Services',
      solutions: ['Campus card integration', 'Student print quotas', 'Self-service printing', 'Mobile print release']
    },
    {
      department: 'Libraries & Computer Labs',
      solutions: ['Public printing management', 'Usage tracking', 'Time-based access', 'Cost recovery systems']
    }
  ]

  const seoSchema = {
    '@type': 'LocalBusiness',
    'name': 'Infomax Office Systems - Iowa City',
    'alternateName': 'Iowa City Print Management Solutions',
    'description': 'Expert print management services in Iowa City, Iowa. Specializing in University of Iowa, healthcare, and professional services since 1958.',
    'telephone': '515-237-2352',
    'email': 'gfleschinfomaxoffice@gmail.com',
    'url': 'https://iowaprintsolutions.com/locations/iowa-city-print-management',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Iowa City',
      'addressRegion': 'IA',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '41.6611',
      'longitude': '-91.5302'
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Iowa City',
        'sameAs': 'https://en.wikipedia.org/wiki/Iowa_City,_Iowa'
      },
      {
        '@type': 'City',
        'name': 'Coralville'
      },
      {
        '@type': 'City',
        'name': 'North Liberty'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Johnson County'
      }
    ],
    'serviceType': [
      'University Print Management Iowa City',
      'HIPAA Compliant Printing',
      'Legal Document Security',
      'Academic Print Solutions'
    ]
  }

  return (
    <>
      <SEO 
        title="Iowa City Print Management | University & Healthcare Solutions"
        description="Expert print management for Iowa City. University of Iowa, UI Hospitals & legal firms trust our HIPAA/FERPA compliant solutions. Serving Coralville & Johnson County."
        keywords="Iowa City print management, University of Iowa printing, UI Hospitals print solutions, HIPAA compliant printing Iowa City, FERPA compliance Iowa"
        canonicalUrl="https://iowaprintsolutions.com/locations/iowa-city-print-management"
        schemaType="LocalBusiness"
        additionalSchema={seoSchema}
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-600 via-yellow-700 to-amber-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <GraduationCap className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Print Management & Document Security in Iowa City, IA
              </h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
                Iowa City organizations trust Infomax Office Systems for sophisticated print management solutions. 
                Serving the University of Iowa, UI Hospitals, legal professionals, and businesses since 1958 with 
                expert PaperCut, uniFLOW, and PrinterLogic implementation throughout Iowa City and Johnson County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Iowa City: (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-yellow-700 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get Compliance Assessment
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Intro */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Iowa City Organizations Choose Our Print Management Expertise
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Iowa City represents a unique convergence of world-class academics, cutting-edge healthcare, 
                and sophisticated professional services. From the University of Iowa's massive research 
                operations to UI Hospitals' life-critical patient care and the city's thriving legal 
                community, we understand the complex compliance, security, and scalability requirements 
                that define Iowa City's professional landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* University Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                University of Iowa Print Management Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive campus-wide solutions designed for large-scale academic environments 
                and research institutions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {universitySolutions.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-yellow-50 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{dept.department}</h3>
                  <ul className="space-y-3">
                    {dept.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Specialized Print Management Services for Iowa City
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored solutions for Iowa City's unique academic, healthcare, and 
                professional service environments.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Case Study */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Iowa City Professional Services Success Story
              </h2>
              <p className="text-xl text-gray-600">
                Real results from an Iowa City multi-practice professional group
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                  <p className="text-gray-700 mb-6">{localCaseStudy.challenge}</p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                  <p className="text-gray-700 mb-6">{localCaseStudy.solution}</p>
                  
                  <div className="flex items-center text-yellow-600 font-semibold">
                    <Clock className="h-5 w-5 mr-2" />
                    {localCaseStudy.timeline}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Results Achieved</h3>
                  <ul className="space-y-3 mb-6">
                    {localCaseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <blockquote className="bg-white rounded-lg p-6 shadow-sm">
                    <p className="text-gray-600 italic">"{localCaseStudy.quote}"</p>
                    <footer className="text-sm text-gray-500 mt-2">
                      — {localCaseStudy.organization}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AIOptimizedFAQ 
              faqs={iowaCityFAQ}
              title="Iowa City Print Management - Frequently Asked Questions"
              description="Get answers to common questions about print management services for Iowa City academic, healthcare, and professional organizations."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-yellow-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Enhance Your Iowa City Organization's Print Management?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join University of Iowa departments, UI Hospitals, and Iowa City's leading 
                professional firms who trust Infomax Office Systems for compliant, secure print management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Iowa City Team: (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-yellow-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Schedule Compliance Assessment
                </a>
              </div>
              
              <div className="mt-8 text-sm opacity-75">
                <p>Serving Iowa City, Coralville, North Liberty, and throughout Johnson County</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default IowaCityPrintManagement