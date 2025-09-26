import React from 'react'
import { motion } from 'framer-motion'
import { Printer, Shield, Users, BarChart3, Clock, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import AIOptimizedFAQ from '../../components/AIOptimizedFAQ'

const PaperCutIowa = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'PaperCut Iowa', href: '/services/papercut-iowa' }
  ]

  const paperCutFAQ = [
    {
      question: 'What PaperCut features do you set up for Iowa organizations?',
      answer: 'We implement complete PaperCut MF solutions including secure user authentication, print quotas and cost controls, department tracking, mobile printing (PaperCut Mobility Print), secure print release, comprehensive reporting, and integration with existing Active Directory systems. Iowa clients also receive training and ongoing optimization support.'
    },
    {
      question: 'Which Iowa organizations benefit most from PaperCut?',
      answer: 'PaperCut works exceptionally well for Iowa K-12 schools managing student printing, colleges tracking departmental costs, healthcare facilities requiring HIPAA compliance, manufacturing companies controlling technical documentation, and professional services firms needing detailed client billing allocation.'
    },
    {
      question: 'What printer brands does PaperCut support in Iowa?',
      answer: 'PaperCut supports all major printer brands used in Iowa including Canon, Ricoh, Konica Minolta, HP, Kyocera, Sharp, Xerox, and Brother. We handle mixed-brand environments and ensure seamless integration regardless of your existing printer fleet.'
    },
    {
      question: 'What is the typical PaperCut implementation timeline?',
      answer: 'Small Iowa organizations (under 50 users) complete implementation in 1-2 weeks. Medium businesses take 2-3 weeks, while large enterprises like major Iowa healthcare systems require 4-6 weeks. Timeline includes discovery, pilot testing, full rollout, training, and optimization.'
    },
    {
      question: 'How much does PaperCut cost for Iowa businesses?',
      answer: 'PaperCut licensing starts around $3-5 per user annually, with total implementation costs typically $5,000-$25,000 depending on organization size and complexity. Most Iowa clients see ROI within 6-8 months through reduced printing costs and improved efficiency.'
    }
  ]

  const setupFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure User Authentication',
      description: 'Badge readers, PIN codes, mobile app release, and Active Directory integration'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Cost Tracking & Control',
      description: 'User quotas, department billing, color restrictions, and detailed cost reporting'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'User Management',
      description: 'Automated user sync, group policies, guest printing, and self-service portals'
    },
    {
      icon: <Printer className="h-6 w-6" />,
      title: 'Mobile & Remote Printing',
      description: 'PaperCut Mobility Print, email-to-print, and secure cloud printing solutions'
    }
  ]

  const supportedOrganizations = [
    {
      type: 'K-12 Schools',
      benefits: [
        'Student print quotas and budgeting',
        'FERPA-compliant secure printing',
        'Teacher vs. student print policies',
        'Easy account balance management'
      ]
    },
    {
      type: 'Iowa Colleges & Universities',
      benefits: [
        'Campus-wide print management',
        'Department cost allocation',
        'Research project tracking',
        'Student account integration'
      ]
    },
    {
      type: 'Healthcare Organizations',
      benefits: [
        'HIPAA-compliant document security',
        'Patient information protection',
        'Department cost tracking',
        'Audit trail compliance'
      ]
    },
    {
      type: 'Professional Services',
      benefits: [
        'Client billing integration',
        'Project cost allocation',
        'Document confidentiality',
        'Detailed usage reporting'
      ]
    }
  ]

  const deviceSupport = [
    { brand: 'Canon', models: 'imageRUNNER, imageRUNNER ADVANCE, imageCLASS series' },
    { brand: 'Ricoh', models: 'IM C series, MP series, SP series multifunction devices' },
    { brand: 'Konica Minolta', models: 'bizhub series, AccurioPress, magicolor printers' },
    { brand: 'HP', models: 'LaserJet, OfficeJet, PageWide, MFP series devices' },
    { brand: 'Kyocera', models: 'ECOSYS, TASKalfa, TRIUMPH-ADLER series' }
  ]

  const implementationPhases = [
    {
      phase: 'Discovery & Planning',
      timeline: '3-5 days',
      activities: [
        'Site assessment and current state analysis',
        'User requirements gathering',
        'Network and printer inventory',
        'Implementation plan development'
      ]
    },
    {
      phase: 'Pilot Deployment',
      timeline: '1 week',
      activities: [
        'Test environment setup',
        'Limited user group testing',
        'Policy configuration and testing',
        'Integration validation'
      ]
    },
    {
      phase: 'Full Rollout',
      timeline: '1-3 weeks',
      activities: [
        'Production environment deployment',
        'All user account provisioning',
        'Printer configuration completion',
        'Policy enforcement activation'
      ]
    },
    {
      phase: 'Training & Optimization',
      timeline: 'Ongoing',
      activities: [
        'Administrator training sessions',
        'End-user orientation',
        'Performance monitoring',
        'Continuous optimization'
      ]
    }
  ]

  const seoSchema = {
    '@type': 'Service',
    'name': 'PaperCut Implementation Services Iowa',
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
    'serviceType': 'Print Management Software Implementation'
  }

  return (
    <>
      <SEO 
        title="PaperCut Support in Iowa | Secure Print & Cost Control"
        description="Expert PaperCut implementation in Iowa. Secure printing, cost tracking & mobile solutions for schools, healthcare & business. Free consultation available."
        keywords="PaperCut Iowa, PaperCut implementation Iowa, Iowa print management, secure printing Iowa, PaperCut MF Iowa, print cost control Iowa, Iowa PaperCut support"
        canonicalUrl="https://iowaprintsolutions.com/services/papercut-iowa"
        schemaType="Service"
        additionalSchema={seoSchema}
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
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
                PaperCut Support in Iowa
              </h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
                Expert PaperCut MF implementation and support across Iowa. Secure printing, 
                cost control, and mobile solutions for schools, healthcare, and businesses 
                throughout Des Moines, Cedar Rapids, Iowa City, and statewide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors"
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
                Complete PaperCut MF deployment with all features configured for your 
                specific Iowa business needs and compliance requirements.
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
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
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
                Perfect Fit for Iowa Organizations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                PaperCut MF delivers exceptional value across Iowa's diverse business landscape, 
                from K-12 schools to major healthcare systems.
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
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Devices We Support Across Iowa
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                PaperCut works with all major printer brands. We handle mixed environments 
                and ensure seamless integration with your existing Iowa printer fleet.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deviceSupport.map((device, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{device.brand}</h3>
                  <p className="text-gray-600 text-sm">{device.models}</p>
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
                Our proven implementation process ensures smooth deployment with minimal 
                disruption to your Iowa business operations.
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
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                        <div className="flex items-center text-blue-600">
                          <Clock className="h-5 w-5 mr-2" />
                          <span className="font-semibold">{phase.timeline}</span>
                        </div>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {phase.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center">
                            <ArrowRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
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
                Transparent Pricing for Iowa Organizations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                PaperCut licensing starts around $3-5 per user annually. Implementation 
                costs vary based on organization size and complexity.
              </p>
            </motion.div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Small Organizations</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">$5K-$10K</p>
                  <p className="text-gray-600">Under 50 users</p>
                  <p className="text-sm text-gray-500 mt-2">1-2 week implementation</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Medium Organizations</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">$10K-$25K</p>
                  <p className="text-gray-600">50-250 users</p>
                  <p className="text-sm text-gray-500 mt-2">2-3 week implementation</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Large Organizations</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">$25K+</p>
                  <p className="text-gray-600">250+ users</p>
                  <p className="text-sm text-gray-500 mt-2">4-6 week implementation</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-sm text-gray-600 mb-4">
                  Most Iowa organizations see ROI within 6-8 months through reduced printing costs and improved efficiency.
                </p>
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
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
              faqs={paperCutFAQ}
              title="PaperCut Iowa - Frequently Asked Questions"
              description="Get answers to common questions about PaperCut implementation and support in Iowa."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Iowa Organization with PaperCut?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Book your free consultation with Iowa's leading PaperCut experts. 
                Serving organizations across Des Moines, Cedar Rapids, Iowa City, and statewide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
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

export default PaperCutIowa