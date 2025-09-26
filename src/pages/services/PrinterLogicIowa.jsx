import React from 'react'
import { motion } from 'framer-motion'
import { Server, Zap, Shield, BarChart3, Clock, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import AIOptimizedFAQ from '../../components/AIOptimizedFAQ'
import ServiceSchema from '../../components/ServiceSchema'
import FAQSchema from '../../components/FAQSchema'

const PrinterLogicIowa = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'PrinterLogic Iowa', href: '/services/printerlogic-iowa' }
  ]

  const printerLogicFAQ = [
    {
      question: 'What PrinterLogic features do you implement for Iowa organizations?',
      answer: 'We deploy complete PrinterLogic solutions including serverless print queue management, direct IP printing, automated driver distribution, mobile printing, secure print release, centralized printer management, and detailed print analytics. Iowa clients receive full training and ongoing support for this modern print infrastructure.'
    },
    {
      question: 'Which Iowa businesses benefit most from PrinterLogic?',
      answer: 'PrinterLogic is ideal for Iowa organizations wanting to eliminate print servers, including multi-site businesses, companies with remote workers, organizations upgrading from Windows Server print infrastructure, healthcare facilities with network security concerns, and businesses wanting simplified IT management.'
    },
    {
      question: 'What printer brands work with PrinterLogic in Iowa?',
      answer: 'PrinterLogic supports virtually all network-capable printers including Canon, HP, Ricoh, Konica Minolta, Kyocera, Sharp, Xerox, Brother, and more. The serverless architecture works with any printer that accepts direct IP printing, making it highly compatible with existing Iowa printer fleets.'
    },
    {
      question: 'How long does PrinterLogic implementation take?',
      answer: 'Small Iowa organizations complete PrinterLogic deployment in 1-2 weeks. Medium businesses typically require 2-3 weeks, while large enterprises with multiple sites need 3-4 weeks. The serverless architecture significantly reduces complexity compared to traditional print server migrations.'
    },
    {
      question: 'What does PrinterLogic cost for Iowa businesses?',
      answer: 'PrinterLogic licensing ranges $8-12 per user annually, with implementation costs typically $8,000-$30,000 depending on organization size and complexity. Most Iowa clients see immediate ROI through eliminated print server costs, reduced IT overhead, and improved reliability.'
    }
  ]

  const setupFeatures = [
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Serverless Architecture',
      description: 'Eliminate print servers entirely with direct IP printing and cloud-based management'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Automated Driver Management',
      description: 'Automatic driver distribution, updates, and printer deployment across your network'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Print Release',
      description: 'Badge-based authentication, secure document release, and user access controls'
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: 'Centralized Management',
      description: 'Web-based console for managing printers, users, and policies across all locations'
    }
  ]

  const supportedOrganizations = [
    {
      type: 'Multi-Site Iowa Businesses',
      benefits: [
        'Centralized print management across locations',
        'Eliminated server maintenance at branches',
        'Consistent printer deployment',
        'Reduced IT complexity'
      ]
    },
    {
      type: 'Remote Work Organizations',
      benefits: [
        'Direct printing without VPN complexity',
        'Home office printer management',
        'Secure document release anywhere',
        'Simplified remote IT support'
      ]
    },
    {
      type: 'Healthcare & Compliance',
      benefits: [
        'Reduced network attack surface',
        'HIPAA-compliant printing',
        'Simplified security auditing',
        'Reliable patient document printing'
      ]
    },
    {
      type: 'IT Modernization Projects',
      benefits: [
        'Windows Server print replacement',
        'Cloud-first infrastructure approach',
        'Reduced server licensing costs',
        'Future-proof print architecture'
      ]
    }
  ]

  const deviceSupport = [
    { brand: 'HP', models: 'LaserJet, OfficeJet, PageWide, DesignJet series', compatibility: 'Full Support' },
    { brand: 'Canon', models: 'imageRUNNER, imageCLASS, PIXMA series', compatibility: 'Full Support' },
    { brand: 'Ricoh', models: 'IM C, MP, SP series multifunction devices', compatibility: 'Full Support' },
    { brand: 'Konica Minolta', models: 'bizhub, AccurioPress, magicolor series', compatibility: 'Full Support' },
    { brand: 'Kyocera', models: 'ECOSYS, TASKalfa printer series', compatibility: 'Full Support' }
  ]

  const implementationPhases = [
    {
      phase: 'Infrastructure Assessment',
      timeline: '3-5 days',
      activities: [
        'Current print server analysis',
        'Network topology review',
        'Printer inventory and compatibility check',
        'Migration planning and timeline'
      ]
    },
    {
      phase: 'PrinterLogic Deployment',
      timeline: '1 week',
      activities: [
        'PrinterLogic server installation',
        'Initial printer discovery and setup',
        'User authentication configuration',
        'Policy and security setup'
      ]
    },
    {
      phase: 'Migration & Testing',
      timeline: '1-2 weeks',
      activities: [
        'Gradual print server migration',
        'User workstation configuration',
        'Print queue testing and validation',
        'Performance optimization'
      ]
    },
    {
      phase: 'Go-Live & Support',
      timeline: 'Ongoing',
      activities: [
        'Final print server decommissioning',
        'User training and support',
        'Monitoring and optimization',
        'Ongoing system maintenance'
      ]
    }
  ]

  const costSavings = [
    {
      category: 'Server Elimination',
      annual: '$8,000-$15,000',
      description: 'Print server hardware, licensing, and maintenance costs'
    },
    {
      category: 'IT Labor Reduction',
      annual: '$12,000-$25,000', 
      description: 'Reduced print-related help desk tickets and server management'
    },
    {
      category: 'Improved Uptime',
      annual: '$5,000-$10,000',
      description: 'Eliminated server downtime and print queue failures'
    }
  ]

  const seoSchema = {
    '@type': 'Service',
    'name': 'PrinterLogic Implementation Services Iowa',
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
    'serviceType': 'Serverless Print Management Implementation'
  }

  return (
    <>
      <SEO 
        title="PrinterLogic Support in Iowa | Serverless Print Management"
        description="Expert PrinterLogic implementation in Iowa. Eliminate print servers, reduce IT costs & improve reliability. Serving Des Moines, Cedar Rapids & statewide."
        keywords="PrinterLogic Iowa, serverless printing Iowa, eliminate print servers Iowa, PrinterLogic implementation Iowa, print server replacement Iowa"
        canonicalUrl="https://iowaprintsolutions.com/services/printerlogic-iowa"
        schemaType="Service"
        additionalSchema={seoSchema}
      />
      
      <ServiceSchema 
        serviceName="PrinterLogic Serverless Print Management"
        description="Professional PrinterLogic implementation and support for Iowa businesses eliminating traditional print servers. Serverless architecture reduces IT costs, improves reliability, and simplifies print management across multiple locations."
        serviceType="Serverless Print Management Service"
        offers={[
          {
            name: "PrinterLogic Implementation",
            description: "Complete migration from print servers to PrinterLogic's serverless architecture with zero downtime"
          },
          {
            name: "Multi-Location Setup", 
            description: "Centralized print management across multiple Iowa business locations without dedicated print servers"
          },
          {
            name: "Print Server Elimination",
            description: "Complete removal of traditional print server infrastructure with modern serverless solution"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.7",
          reviewCount: "28"
        }}
        review={{
          ratingValue: "5",
          author: "Tom Richards, IT Manager",
          reviewBody: "PrinterLogic eliminated our print server headaches completely. Iowa Print Solutions' expertise made the transition seamless and our IT team can now focus on strategic initiatives instead of print server maintenance.",
          datePublished: "2024-01-25"
        }}
      />
      
      <FAQSchema faqs={printerLogicFAQ} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Server className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                PrinterLogic Support in Iowa
              </h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
                Expert PrinterLogic implementation and support across Iowa. Eliminate print servers, 
                reduce IT complexity, and improve printing reliability for organizations throughout 
                Des Moines, Cedar Rapids, Iowa City, and statewide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition-colors"
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
                Complete PrinterLogic deployment that eliminates print servers while 
                improving reliability, security, and management simplicity.
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
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
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
                Perfect for Modern Iowa Organizations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                PrinterLogic transforms print infrastructure for Iowa businesses ready 
                to eliminate servers and embrace cloud-first technology.
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
        <section className="py-16 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Universal Device Support Across Iowa
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                PrinterLogic supports virtually any network printer, making it ideal 
                for mixed environments and legacy printer fleets throughout Iowa.
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
                      <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {device.compatibility}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Savings Analysis */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Typical Annual Savings for Iowa Organizations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                PrinterLogic delivers immediate and ongoing cost savings through 
                server elimination, reduced IT overhead, and improved reliability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {costSavings.map((saving, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 text-center"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{saving.category}</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-4">{saving.annual}</p>
                  <p className="text-gray-600">{saving.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-16 bg-gray-50">
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
                Our proven migration process eliminates print servers with minimal 
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
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                        <div className="flex items-center text-purple-600">
                          <Clock className="h-5 w-5 mr-2" />
                          <span className="font-semibold">{phase.timeline}</span>
                        </div>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {phase.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center">
                            <ArrowRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
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
        <section className="py-16 bg-white">
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
                PrinterLogic licensing ranges $8-12 per user annually. Implementation 
                costs are typically offset by immediate server elimination savings.
              </p>
            </motion.div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Small Organizations</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-2">$8K-$15K</p>
                  <p className="text-gray-600">Under 50 users</p>
                  <p className="text-sm text-gray-500 mt-2">1-2 week implementation</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Medium Organizations</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-2">$15K-$30K</p>
                  <p className="text-gray-600">50-250 users</p>
                  <p className="text-sm text-gray-500 mt-2">2-3 week implementation</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Large Organizations</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-2">$30K+</p>
                  <p className="text-gray-600">250+ users</p>
                  <p className="text-sm text-gray-500 mt-2">3-4 week implementation</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-sm text-gray-600 mb-4">
                  Most Iowa organizations see immediate ROI through eliminated print server costs and reduced IT overhead.
                </p>
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get Custom Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AIOptimizedFAQ 
              faqs={printerLogicFAQ}
              title="PrinterLogic Iowa - Frequently Asked Questions"
              description="Get answers to common questions about PrinterLogic implementation and support in Iowa."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Eliminate Print Servers in Your Iowa Organization?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Book your free consultation with Iowa's leading PrinterLogic experts. 
                Serving multi-site businesses and IT modernization projects across Des Moines, Cedar Rapids, and statewide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
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

export default PrinterLogicIowa