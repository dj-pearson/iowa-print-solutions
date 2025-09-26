import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Shield, Users, Workflow, Clock, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import AIOptimizedFAQ from '../../components/AIOptimizedFAQ'

const UniflowIowa = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'uniFLOW Iowa', href: '/services/uniflow-iowa' }
  ]

  const uniflowFAQ = [
    {
      question: 'What uniFLOW features do you implement for Iowa organizations?',
      answer: 'We deploy complete Canon uniFLOW solutions including secure document workflows, advanced user authentication, document routing and processing, cost center tracking, mobile printing, scan-to-email/folder, and comprehensive audit trails. Iowa clients receive full training and ongoing optimization support.'
    },
    {
      question: 'Which Iowa businesses benefit most from uniFLOW?',
      answer: 'uniFLOW excels for Iowa healthcare facilities requiring HIPAA compliance, legal firms managing confidential documents, financial institutions with strict security needs, manufacturing companies with complex document workflows, and government agencies needing detailed audit trails.'
    },
    {
      question: 'Does uniFLOW work with non-Canon devices in Iowa?',
      answer: 'While uniFLOW is optimized for Canon devices, it supports mixed environments including Ricoh, Konica Minolta, HP, and other major brands. However, the deepest integration and richest features are available with Canon imageRUNNER ADVANCE and imageCLASS series devices.'
    },
    {
      question: 'What is the typical uniFLOW implementation timeline?',
      answer: 'Small Iowa organizations complete uniFLOW implementation in 2-3 weeks. Medium businesses require 3-4 weeks, while large enterprises like major Iowa healthcare systems need 6-8 weeks. Timeline includes workflow design, system configuration, testing, training, and go-live support.'
    },
    {
      question: 'How much does uniFLOW cost for Iowa businesses?',
      answer: 'uniFLOW licensing typically ranges $5-8 per user annually, with total implementation costs of $8,000-$35,000 depending on complexity and workflow requirements. Most Iowa clients achieve ROI within 8-12 months through improved efficiency and reduced document processing costs.'
    }
  ]

  const setupFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Advanced Document Security',
      description: 'Encrypted document storage, secure print release, and comprehensive access controls'
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: 'Intelligent Document Workflows',
      description: 'Automated routing, processing, and distribution based on content and business rules'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Flexible User Authentication',
      description: 'Card readers, biometric, PIN, mobile app, and Active Directory integration'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Document Processing',
      description: 'OCR, format conversion, automatic filing, and intelligent document recognition'
    }
  ]

  const supportedOrganizations = [
    {
      type: 'Iowa Healthcare Facilities',
      benefits: [
        'HIPAA-compliant document handling',
        'Patient information protection',
        'Secure medical record processing',
        'Department cost allocation'
      ]
    },
    {
      type: 'Legal & Professional Services',
      benefits: [
        'Confidential document security',
        'Client matter cost tracking',
        'Automated document workflows',
        'Compliance audit trails'
      ]
    },
    {
      type: 'Financial Institutions',
      benefits: [
        'Banking regulation compliance',
        'Secure loan document processing',
        'Customer information protection',
        'Automated filing systems'
      ]
    },
    {
      type: 'Manufacturing & Enterprise',
      benefits: [
        'Complex document workflows',
        'Multi-site coordination',
        'Technical document control',
        'Process automation'
      ]
    }
  ]

  const deviceSupport = [
    { brand: 'Canon', models: 'imageRUNNER ADVANCE (C3300i, C5500i, C7500i series)', compatibility: 'Full Integration' },
    { brand: 'Canon', models: 'imageCLASS (MF series, LBP series)', compatibility: 'Full Integration' },
    { brand: 'Ricoh', models: 'IM C series, MP series multifunction devices', compatibility: 'Basic Integration' },
    { brand: 'Konica Minolta', models: 'bizhub series devices', compatibility: 'Basic Integration' },
    { brand: 'HP', models: 'LaserJet MFP, PageWide series', compatibility: 'Basic Integration' }
  ]

  const implementationPhases = [
    {
      phase: 'Workflow Analysis',
      timeline: '1 week',
      activities: [
        'Current document workflow assessment',
        'Business process mapping',
        'Security requirement analysis',
        'Integration planning'
      ]
    },
    {
      phase: 'System Configuration',
      timeline: '1-2 weeks',
      activities: [
        'uniFLOW server deployment',
        'Device configuration and testing',
        'Workflow rule creation',
        'User authentication setup'
      ]
    },
    {
      phase: 'Testing & Validation',
      timeline: '1 week',
      activities: [
        'Workflow testing with pilot users',
        'Security validation',
        'Performance optimization',
        'Integration verification'
      ]
    },
    {
      phase: 'Training & Go-Live',
      timeline: 'Ongoing',
      activities: [
        'Administrator training',
        'End-user workflow training',
        'Full production deployment',
        'Ongoing support and optimization'
      ]
    }
  ]

  const seoSchema = {
    '@type': 'Service',
    'name': 'Canon uniFLOW Implementation Services Iowa',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Infomax Office Systems',
      'address': {
        '@type': 'PostalAddress',
        'addressRegion': 'IA',
        'addressCountry': 'US'
      }
    },
    'areaServed': [
      'Des Moines, IA',
      'Cedar Rapids, IA', 
      'Iowa City, IA',
      'Davenport, IA',
      'Iowa'
    ],
    'serviceType': 'Document Workflow Management Implementation'
  }

  return (
    <>
      <SEO 
        title="uniFLOW Support in Iowa | Secure Document Workflows"
        description="Expert Canon uniFLOW implementation in Iowa. Advanced document workflows, HIPAA compliance & security for healthcare, legal & business. Free consultation."
        keywords="uniFLOW Iowa, Canon uniFLOW Iowa, document workflow Iowa, secure printing Iowa, HIPAA compliance Iowa, uniFLOW implementation Iowa"
        canonicalUrl="https://iowaprintsolutions.com/services/uniflow-iowa"
        schemaType="Service"
        additionalSchema={seoSchema}
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <FileText className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                uniFLOW Support in Iowa
              </h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
                Expert Canon uniFLOW implementation and support across Iowa. Advanced document 
                workflows, HIPAA compliance, and enterprise security for healthcare, legal, 
                and professional organizations throughout Des Moines, Cedar Rapids, and statewide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-red-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-700 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Request Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Set Up */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What We Set Up for Your Iowa Organization
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete Canon uniFLOW deployment with advanced document workflows 
                tailored to your Iowa business compliance and security requirements.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {setupFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It Fits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ideal for Complex Iowa Organizations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                uniFLOW excels where advanced document workflows, strict security, 
                and regulatory compliance are essential for Iowa business operations.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {supportedOrganizations.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{org.type}</h3>
                  <ul className="space-y-3">
                    {org.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Device Support */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Device Compatibility Across Iowa
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                uniFLOW works best with Canon devices but supports mixed environments. 
                Full feature integration requires Canon imageRUNNER ADVANCE series.
              </p>
            </motion.div>

            <div className="space-y-4">
              {deviceSupport.map((device, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{device.brand}</h3>
                      <p className="text-gray-600">{device.models}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                        device.compatibility === 'Full Integration' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {device.compatibility}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Typical Implementation Timeline
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our structured approach ensures proper workflow design and seamless 
                deployment with minimal disruption to your Iowa business operations.
              </p>
            </motion.div>

            <div className="space-y-8">
              {implementationPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                        <div className="flex items-center text-red-600">
                          <Clock className="h-5 w-5 mr-2" />
                          <span className="font-semibold">{phase.timeline}</span>
                        </div>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {phase.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center">
                            <ArrowRight className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Model */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Investment for Iowa Organizations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                uniFLOW licensing typically ranges $5-8 per user annually. Implementation 
                costs vary based on workflow complexity and integration requirements.
              </p>
            </motion.div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Small Organizations</h3>
                  <p className="text-3xl font-bold text-red-600 mb-2">$8K-$15K</p>
                  <p className="text-gray-600">Under 50 users</p>
                  <p className="text-sm text-gray-500 mt-2">2-3 week implementation</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Medium Organizations</h3>
                  <p className="text-3xl font-bold text-red-600 mb-2">$15K-$35K</p>
                  <p className="text-gray-600">50-250 users</p>
                  <p className="text-sm text-gray-500 mt-2">3-4 week implementation</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Large Organizations</h3>
                  <p className="text-3xl font-bold text-red-600 mb-2">$35K+</p>
                  <p className="text-gray-600">250+ users</p>
                  <p className="text-sm text-gray-500 mt-2">6-8 week implementation</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-sm text-gray-600 mb-4">
                  Most Iowa organizations achieve ROI within 8-12 months through improved efficiency and reduced document processing costs.
                </p>
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Get Custom Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AIOptimizedFAQ 
              faqs={uniflowFAQ}
              title="uniFLOW Iowa - Frequently Asked Questions"
              description="Get answers to common questions about Canon uniFLOW implementation and support in Iowa."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Streamline Your Iowa Organization with uniFLOW?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Book your free consultation with Iowa's leading uniFLOW experts. 
                Serving healthcare, legal, and enterprise organizations across Des Moines, Cedar Rapids, and statewide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
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
                  Book Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default UniflowIowa