import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Printer, QrCode, Settings, CheckCircle, ArrowRight, Zap, Shield, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'

const UniflowPlatformOverview = () => {
  const platformFeatures = [
    {
      icon: Printer,
      title: 'Advanced Print Management',
      description: 'Comprehensive print control with secure release, user authentication, and detailed tracking.',
      benefits: [
        'Secure pull printing across all devices',
        'User-based print quotas and restrictions',
        'Automatic driver deployment',
        'Mobile and cloud printing support'
      ]
    },
    {
      icon: QrCode,
      title: 'Intelligent Scan Workflows',
      description: 'Automated document capture with smart routing, OCR, and integration capabilities.',
      benefits: [
        'OCR and intelligent document recognition',
        'Automated workflow routing',
        'Integration with business applications',
        'Metadata extraction and indexing'
      ]
    },
    {
      icon: Settings,
      title: 'Centralized Device Management',
      description: 'Monitor, manage, and optimize all multifunction devices from a single platform.',
      benefits: [
        'Real-time device monitoring',
        'Predictive maintenance alerts',
        'Firmware and configuration management',
        'Performance optimization tools'
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security features protecting documents and ensuring compliance.',
      benefits: [
        'End-to-end encryption',
        'Active Directory integration',
        'Detailed audit trails',
        'Compliance reporting tools'
      ]
    }
  ]

  const integrationBenefits = [
    {
      benefit: 'Reduced Complexity',
      description: 'Single platform eliminates the need for multiple software solutions',
      impact: 'Simplified IT management and reduced training requirements'
    },
    {
      benefit: 'Cost Efficiency',
      description: 'Consolidated licensing and reduced infrastructure requirements',
      impact: 'Lower total cost of ownership for Iowa organizations'
    },
    {
      benefit: 'Enhanced Security',
      description: 'Unified security policies across all print and scan operations',
      impact: 'Improved compliance and reduced security vulnerabilities'
    },
    {
      benefit: 'Better Analytics',
      description: 'Comprehensive reporting across all device activities',
      impact: 'Data-driven insights for optimization and cost reduction'
    }
  ]

  const workflowExamples = [
    {
      title: 'Invoice Processing Workflow',
      description: 'Automated invoice capture, OCR, validation, and routing to accounting systems',
      steps: [
        'Scan invoice at any MFD',
        'OCR extracts vendor and amount data',
        'System validates against purchase orders',
        'Routes to appropriate approver',
        'Integrates with ERP system'
      ]
    },
    {
      title: 'HR Document Management',
      description: 'Secure employee document capture and routing with retention policies',
      steps: [
        'Employee scans documents securely',
        'System applies metadata and indexing',
        'Documents routed to HR system',
        'Retention policies automatically applied',
        'Audit trail maintained for compliance'
      ]
    },
    {
      title: 'Customer Service Workflows',
      description: 'Fast document processing for customer inquiries and support',
      steps: [
        'Customer documents scanned at reception',
        'OCR identifies document type',
        'Routes to appropriate department',
        'Notifications sent to relevant staff',
        'Response time tracking enabled'
      ]
    }
  ]

  const iowaBusinessTypes = [
    {
      industry: 'Healthcare Systems',
      use_case: 'HIPAA-compliant document workflows and patient record management',
      benefit: 'Secure patient information handling with audit trails'
    },
    {
      industry: 'Financial Services',
      use_case: 'Automated loan processing and compliance documentation',
      benefit: 'Streamlined operations with regulatory compliance'
    },
    {
      industry: 'Manufacturing',
      use_case: 'Quality control documentation and supply chain workflows',
      benefit: 'Improved traceability and operational efficiency'
    },
    {
      industry: 'Education',
      use_case: 'Student records management and administrative workflows',
      benefit: 'FERPA compliance with improved document accessibility'
    }
  ]

  const seoSchema = {
    '@type': 'TechArticle',
    'headline': 'Canon Uniflow Platform Complete Overview for Iowa Organizations',
    'description': 'Comprehensive guide to Canon Uniflow platform features, capabilities, and implementation for Iowa businesses.',
    'author': {
      '@type': 'Organization',
      'name': 'Iowa Print Solutions'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Infomax Office Systems'
    }
  }

  return (
    <>
      <SEO 
        title="Canon Uniflow Platform Overview | Complete Features Guide Iowa"
        description="Complete Canon Uniflow platform overview for Iowa businesses. Learn about advanced document management, secure printing, mobile solutions, and workflow automation features and capabilities."
        keywords="Canon Uniflow platform Iowa, Uniflow features Iowa, document management Iowa, secure printing Iowa, workflow automation Iowa, mobile printing Iowa, Uniflow capabilities Iowa"
        canonicalUrl="https://iowaprintsolutions.com/resources/uniflow-platform-overview"
        schemaType="TechArticle"
        additionalSchema={seoSchema}
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: 'Uniflow Platform Overview' }
        ]}
      />
      
      <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Layers className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Uniflow: Integrated Print, Scan & Device Management Platform
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
              Discover how Uniflow's single integrated platform revolutionizes document workflows for Iowa organizations. Comprehensive print management, intelligent scanning, and centralized device control in one powerful solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Uniflow Demo
              </Link>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Schedule Platform Tour
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uniflow integrates print management, scan workflows, and device monitoring into a single, powerful platform designed for Iowa businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <feature.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Integration Matters for Iowa Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Single platform advantages that drive efficiency and reduce costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationBenefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.benefit}</h3>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <p className="text-sm text-indigo-600 font-medium">{item.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real-World Workflow Examples
            </h2>
            <p className="text-xl text-gray-600">
              See how Uniflow transforms common business processes in Iowa organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workflowExamples.map((workflow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{workflow.title}</h3>
                <p className="text-gray-700 mb-4">{workflow.description}</p>
                <div className="space-y-2">
                  {workflow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {stepIndex + 1}
                      </div>
                      <span className="text-sm text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Uniflow Solutions by Industry
            </h2>
            <p className="text-xl text-gray-600">
              Tailored implementations for different Iowa business sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {iowaBusinessTypes.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{business.industry}</h3>
                <p className="text-gray-700 mb-3">{business.use_case}</p>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{business.benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Iowa Organization with Uniflow?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how a single integrated platform can revolutionize your print, scan, and device management operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Uniflow Quote
              </Link>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Call (515) 237-2352
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}

export default UniflowPlatformOverview 