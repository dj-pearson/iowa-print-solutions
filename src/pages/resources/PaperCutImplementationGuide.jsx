import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Users, Settings, Shield, BarChart3, Smartphone, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const PaperCutImplementationGuide = () => {
  const implementationSteps = [
    {
      step: '1',
      title: 'Pre-Implementation Assessment',
      description: 'Evaluate your current Iowa print environment, identify all devices, and assess user requirements.',
      details: [
        'Inventory all printers and multifunction devices',
        'Analyze current print volumes and costs',
        'Identify user groups and departments',
        'Assess network infrastructure requirements'
      ]
    },
    {
      step: '2',
      title: 'PaperCut Server Installation',
      description: 'Install and configure the PaperCut application server on your Iowa network infrastructure.',
      details: [
        'Install PaperCut MF on Windows or Linux server',
        'Configure database connections',
        'Set up SSL certificates for secure communication',
        'Configure backup and disaster recovery'
      ]
    },
    {
      step: '3',
      title: 'Device Integration',
      description: 'Connect and configure all printers and multifunction devices with PaperCut.',
      details: [
        'Install print queues and drivers',
        'Configure device authentication methods',
        'Set up embedded terminals on MFDs',
        'Test print release functionality'
      ]
    },
    {
      step: '4',
      title: 'User Authentication Setup',
      description: 'Configure user authentication methods including Active Directory integration.',
      details: [
        'Integrate with Active Directory or LDAP',
        'Configure card authentication systems',
        'Set up PIN-based authentication',
        'Test user login and authentication'
      ]
    },
    {
      step: '5',
      title: 'Policy Configuration',
      description: 'Establish printing policies, quotas, and cost centers for your Iowa organization.',
      details: [
        'Set up department cost centers',
        'Configure user quotas and budgets',
        'Establish printing policies and restrictions',
        'Configure approval workflows'
      ]
    },
    {
      step: '6',
      title: 'Training and Go-Live',
      description: 'Train users and administrators, then launch PaperCut across your organization.',
      details: [
        'Train administrators on system management',
        'Conduct end-user training sessions',
        'Provide documentation and quick reference guides',
        'Monitor system performance and user adoption'
      ]
    }
  ]

  const benefits = [
    'Reduce printing costs by 20-40% in Iowa organizations',
    'Eliminate unauthorized and wasteful printing',
    'Gain complete visibility into print usage',
    'Implement secure print release functionality',
    'Enable mobile printing from any device',
    'Generate detailed compliance and audit reports'
  ]

  const commonChallenges = [
    {
      challenge: 'User Resistance to Change',
      solution: 'Comprehensive training and clear communication about benefits to Iowa staff'
    },
    {
      challenge: 'Complex Network Integration',
      solution: 'Professional assessment and phased implementation approach'
    },
    {
      challenge: 'Device Compatibility Issues',
      solution: 'Thorough device testing and driver optimization'
    },
    {
      challenge: 'Authentication Problems',
      solution: 'Multiple authentication methods and fallback options'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Complete PaperCut Implementation Guide for Iowa Organizations
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
              Step-by-step guide to successfully implementing PaperCut MF in your Iowa business. From planning to go-live, this comprehensive guide covers everything you need to know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Implementation Help
              </Link>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Schedule Consultation
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
              Why PaperCut is Essential for Iowa Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PaperCut MF provides comprehensive print management that helps Iowa organizations reduce costs, improve security, and gain complete control over their printing environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              6-Step PaperCut Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              Our proven methodology ensures successful PaperCut deployment in Iowa organizations.
            </p>
          </motion.div>

          <div className="space-y-12">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
              Common Implementation Challenges & Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Learn from our 15+ years of PaperCut implementations in Iowa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonChallenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-red-600 mb-2">Challenge: {item.challenge}</h3>
                <p className="text-gray-700"><strong>Solution:</strong> {item.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              PaperCut Implementation Timeline for Iowa Organizations
            </h2>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">1-2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Weeks</h3>
                <p className="text-gray-600">Small Iowa businesses (1-5 printers)</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">2-4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Weeks</h3>
                <p className="text-gray-600">Medium Iowa organizations (5-20 printers)</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">4-8</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Weeks</h3>
                <p className="text-gray-600">Large Iowa enterprises (20+ printers)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Implement PaperCut in Your Iowa Organization?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our Iowa-based experts have successfully implemented PaperCut for hundreds of organizations. Let us help you achieve the same success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Free Implementation Quote
              </Link>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Call (515) 237-2352
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PaperCutImplementationGuide