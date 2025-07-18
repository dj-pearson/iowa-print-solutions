import React from 'react'
import { motion } from 'framer-motion'
import { Settings, CheckCircle, ArrowRight, FileText, Shield, Smartphone, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'

const UniflowService = () => {
  const features = [
    {
      icon: FileText,
      title: 'Document Workflows',
      description: 'Automate document processing with custom workflows for scanning, routing, and archiving.'
    },
    {
      icon: Shield,
      title: 'Secure Release',
      description: 'Hold documents securely until user authentication at the device for confidential printing.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Integration',
      description: 'Print and scan from mobile devices with seamless integration across your organization.'
    },
    {
      icon: Workflow,
      title: 'Custom Automation',
      description: 'Create custom workflows that integrate with your existing business systems and processes.'
    }
  ]

  const benefits = [
    'Eliminate paper-based processes',
    'Reduce document processing time by 60%',
    'Ensure document security and compliance',
    'Integrate with existing business systems',
    'Enable mobile document workflows',
    'Automate repetitive document tasks'
  ]

  const workflows = [
    {
      title: 'Scan to Email',
      description: 'Automatically scan and email documents to specified recipients with OCR processing.'
    },
    {
      title: 'Scan to Folder',
      description: 'Route scanned documents to network folders based on content or user selection.'
    },
    {
      title: 'Print Release',
      description: 'Hold print jobs securely until user authentication at any compatible device.'
    },
    {
      title: 'Document Archive',
      description: 'Automatically archive documents to document management systems with metadata.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Settings className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Uniflow Document Solution Information
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Learn about advanced Uniflow solutions for Iowa organizations. For professional implementation through Infomax Office Systems, streamline your document workflows, automate processes, and enhance security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Book Infomax Consultation
              </a>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Call (515) 237-2352
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
              Advanced Document Workflow Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your document processes with intelligent automation and seamless integration capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Uniflow for Your Iowa Organization
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="https://calendly.com/pearsondan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center space-x-2"
                >
                  <span>Book Infomax Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Workflows</h3>
              <div className="space-y-6">
                {workflows.map((workflow, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{workflow.title}</h4>
                    <p className="text-gray-600 text-sm">{workflow.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
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
              Uniflow Integration Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Seamlessly connect with your existing business systems and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Document Management</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• SharePoint Integration</li>
                <li>• OneDrive Connectivity</li>
                <li>• Network Folder Access</li>
                <li>• Cloud Storage Support</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Systems</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ERP System Integration</li>
                <li>• CRM Connectivity</li>
                <li>• Database Integration</li>
                <li>• Custom API Support</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security & Compliance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Active Directory Integration</li>
                <li>• LDAP Authentication</li>
                <li>• Audit Trail Logging</li>
                <li>• Compliance Reporting</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Automate Your Document Workflows?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your Iowa organization's document processes with our expert Uniflow implementation and optimization services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.infomaxoffice.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Visit Infomax Office Systems
              </a>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default UniflowService