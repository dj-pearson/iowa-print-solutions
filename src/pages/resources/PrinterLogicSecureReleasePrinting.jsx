import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, CreditCard, Eye, CheckCircle, ArrowRight, FileText, Users, AlertTriangle, Key } from 'lucide-react'
import { Link } from 'react-router-dom'

const PrinterLogicSecureReleasePrinting = () => {
  const benefits = [
    'Prevent confidential documents from sitting in output trays',
    'Eliminate waste from unclaimed print jobs',
    'Ensure document privacy and compliance',
    'Reduce printing costs and paper waste',
    'Track and audit document access',
    'Support multiple authentication methods'
  ]

  const authenticationMethods = [
    {
      icon: CreditCard,
      title: 'Badge/Card Authentication',
      description: 'Release prints using employee ID cards, proximity cards, or magnetic stripe cards.',
      features: [
        'Existing ID card integration',
        'Proximity card readers',
        'Magnetic stripe support',
        'Multi-card format compatibility'
      ]
    },
    {
      icon: Key,
      title: 'PIN Code Release',
      description: 'Users enter a personal PIN at the printer to release their documents.',
      features: [
        'Customizable PIN lengths',
        'Automatic PIN generation',
        'PIN expiration policies',
        'Temporary guest PINs'
      ]
    },
    {
      icon: Users,
      title: 'Username/Password',
      description: 'Standard login credentials for document release at any printer.',
      features: [
        'Active Directory integration',
        'LDAP authentication',
        'Single sign-on support',
        'Password policy enforcement'
      ]
    },
    {
      icon: Eye,
      title: 'Biometric Authentication',
      description: 'Fingerprint or facial recognition for the highest level of security.',
      features: [
        'Fingerprint scanners',
        'Facial recognition cameras',
        'Retina scan support',
        'Multi-factor authentication'
      ]
    }
  ]

  const securityFeatures = [
    {
      feature: 'Document Encryption',
      description: 'All print jobs are encrypted during transmission and storage',
      benefit: 'Protects sensitive data from interception'
    },
    {
      feature: 'Automatic Job Deletion',
      description: 'Unclaimed jobs are automatically deleted after specified time',
      benefit: 'Prevents accumulation of orphaned documents'
    },
    {
      feature: 'Audit Trails',
      description: 'Complete logging of who printed what, when, and where',
      benefit: 'Enables compliance reporting and security investigations'
    },
    {
      feature: 'User Authentication',
      description: 'Multiple authentication methods ensure only authorized access',
      benefit: 'Prevents unauthorized document retrieval'
    },
    {
      feature: 'Job Preview',
      description: 'Users can preview documents before printing',
      benefit: 'Reduces waste and ensures correct document selection'
    },
    {
      feature: 'Secure Storage',
      description: 'Print jobs stored securely until user authentication',
      benefit: 'Documents remain protected until release'
    }
  ]

  const complianceStandards = [
    {
      standard: 'HIPAA',
      description: 'Healthcare Information Portability and Accountability Act',
      requirements: [
        'Patient data protection',
        'Access controls and audit trails',
        'Secure document handling',
        'Privacy compliance reporting'
      ]
    },
    {
      standard: 'SOX',
      description: 'Sarbanes-Oxley Act',
      requirements: [
        'Financial document security',
        'Access logging and controls',
        'Document retention policies',
        'Audit trail maintenance'
      ]
    },
    {
      standard: 'GDPR',
      description: 'General Data Protection Regulation',
      requirements: [
        'Personal data protection',
        'Right to erasure compliance',
        'Data access controls',
        'Privacy by design principles'
      ]
    },
    {
      standard: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      requirements: [
        'Cardholder data protection',
        'Access control measures',
        'Secure network transmission',
        'Regular security monitoring'
      ]
    }
  ]

  const costSavings = [
    {
      category: 'Paper Waste Reduction',
      before: '$5,000 - $15,000 annually',
      after: '$1,000 - $3,000 annually',
      savings: '70-80%'
    },
    {
      category: 'Toner/Ink Savings',
      before: '$8,000 - $25,000 annually',
      after: '$2,000 - $6,000 annually',
      savings: '70-75%'
    },
    {
      category: 'Document Reprinting',
      before: '$3,000 - $10,000 annually',
      after: '$500 - $1,500 annually',
      savings: '80-85%'
    },
    {
      category: 'Compliance Costs',
      before: '$10,000 - $50,000 annually',
      after: '$2,000 - $8,000 annually',
      savings: '75-85%'
    }
  ]

  const implementationSteps = [
    {
      step: '1',
      title: 'Security Assessment',
      description: 'Evaluate current document security practices and identify requirements.',
      timeframe: '1 week',
      activities: [
        'Document workflow analysis',
        'Security requirement identification',
        'Compliance needs assessment',
        'Risk evaluation'
      ]
    },
    {
      step: '2',
      title: 'Authentication Method Selection',
      description: 'Choose and configure appropriate authentication methods for your organization.',
      timeframe: '1-2 weeks',
      activities: [
        'Card reader installation',
        'Biometric device setup',
        'PIN policy configuration',
        'Multi-factor setup'
      ]
    },
    {
      step: '3',
      title: 'Policy Configuration',
      description: 'Set up secure release policies, timeouts, and access controls.',
      timeframe: '1 week',
      activities: [
        'Job retention policies',
        'User access rules',
        'Department restrictions',
        'Audit configurations'
      ]
    },
    {
      step: '4',
      title: 'User Training',
      description: 'Train users on secure release procedures and best practices.',
      timeframe: '2 weeks',
      activities: [
        'Authentication training',
        'Secure printing procedures',
        'Mobile device setup',
        'Troubleshooting guidance'
      ]
    },
    {
      step: '5',
      title: 'Monitoring & Optimization',
      description: 'Monitor usage patterns and optimize security settings.',
      timeframe: 'Ongoing',
      activities: [
        'Usage pattern analysis',
        'Security event monitoring',
        'Policy refinement',
        'Compliance reporting'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Shield className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              PrinterLogic Secure Release Printing for Iowa Organizations
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Protect sensitive documents and ensure compliance with PrinterLogic's advanced secure release printing solution. Prevent unauthorized access while reducing waste and costs for your Iowa organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Book Security Assessment
                <span className="sr-only"> (opens in new window)</span>
              </a>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Call (515) 237-2352
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Secure Release Printing?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Secure release printing, also known as pull printing or follow-me printing, requires users to authenticate at the printer before their documents are printed. This prevents sensitive documents from sitting unattended in output trays.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                PrinterLogic's secure release solution supports multiple authentication methods and provides comprehensive audit trails to ensure document security and regulatory compliance.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-red-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Security Benefits for Iowa Organizations
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Lock className="h-8 w-8 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Document Protection</h4>
                    <p className="text-gray-700">Prevent confidential documents from unauthorized access.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FileText className="h-8 w-8 text-blue-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Compliance Assurance</h4>
                    <p className="text-gray-700">Meet HIPAA, SOX, GDPR, and other regulatory requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-8 w-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Risk Mitigation</h4>
                    <p className="text-gray-700">Reduce data breach risks and potential compliance violations.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authentication Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Authentication Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from various authentication methods to match your Iowa organization's security requirements and user preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {authenticationMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <method.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-layered security features protect your documents throughout the entire printing process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.feature}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="bg-green-50 rounded-lg p-4">
                      <span className="text-sm font-medium text-green-800">Security Benefit: </span>
                      <span className="text-sm text-green-700">{feature.benefit}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Regulatory Compliance Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet industry regulations and compliance requirements with built-in security controls and audit capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.standard}</h3>
                <p className="text-gray-700 mb-4">{standard.description}</p>
                <h4 className="font-semibold text-gray-900 mb-3">Key Requirements Addressed:</h4>
                <ul className="space-y-2">
                  {standard.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Savings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cost Savings from Secure Release Printing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Significant cost reductions achieved by Iowa organizations implementing secure release printing.
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-red-600 text-white">
              <div className="p-4 font-semibold">Cost Category</div>
              <div className="p-4 font-semibold border-l border-red-500">Before Implementation</div>
              <div className="p-4 font-semibold border-l border-red-500">After Implementation</div>
              <div className="p-4 font-semibold border-l border-red-500">Savings</div>
            </div>
            {costSavings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div className="p-4 font-medium text-gray-900">{item.category}</div>
                <div className="p-4 text-red-600 border-l border-gray-200">{item.before}</div>
                <div className="p-4 text-green-600 border-l border-gray-200">{item.after}</div>
                <div className="p-4 text-green-700 font-bold border-l border-gray-200">{item.savings}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Secure Release Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures successful deployment of secure release printing in your Iowa organization.
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`bg-white rounded-lg shadow-lg p-6 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-red-600 font-medium">{step.timeframe}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{activity}</span>
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

      {/* CTA Section */}
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Secure Your Documents with PrinterLogic
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Protect sensitive information and ensure compliance with PrinterLogic's secure release printing. Contact Infomax Office Systems for expert implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Book Security Assessment
                <span className="sr-only"> (opens in new window)</span>
              </a>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-md font-medium transition-colors"
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

export default PrinterLogicSecureReleasePrinting 