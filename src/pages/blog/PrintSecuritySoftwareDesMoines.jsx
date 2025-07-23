
import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, CheckCircle, Building2, FileText, Users, AlertTriangle } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'

const PrintSecuritySoftwareDesMoines = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Print Security Software Des Moines' }
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: 'Secure Print Release',
      description: 'Ensure documents are only printed when users authenticate at the device.',
      benefits: [
        'PIN, card, or biometric authentication',
        'Document encryption in transit',
        'Automatic job deletion after timeout',
        'Multi-device print pickup'
      ]
    },
    {
      icon: Eye,
      title: 'Comprehensive Audit Trails',
      description: 'Track all print activities with detailed logging for compliance and security.',
      benefits: [
        'Complete user activity logs',
        'Document access tracking',
        'Compliance reporting tools',
        'Real-time security alerts'
      ]
    },
    {
      icon: Users,
      title: 'Advanced Access Control',
      description: 'Control who can print what, when, and where with granular permissions.',
      benefits: [
        'Role-based access control',
        'Time-based restrictions',
        'Device-specific permissions',
        'Department-level policies'
      ]
    },
    {
      icon: FileText,
      title: 'Document Watermarking',
      description: 'Add dynamic watermarks to printed documents for traceability.',
      benefits: [
        'User identification stamps',
        'Date and time stamps',
        'Document classification labels',
        'Custom security markings'
      ]
    }
  ]

  const desMoinesBusinesses = [
    {
      sector: 'Financial Services',
      companies: ['Principal Financial Group', 'Wellmark Blue Cross', 'Farm Bureau Financial Services'],
      challenges: [
        'Customer data protection',
        'SOX compliance requirements',
        'Internal document security',
        'Audit trail maintenance'
      ],
      solutions: [
        'Secure print release for sensitive reports',
        'Automated compliance logging',
        'Role-based access control',
        'Document watermarking'
      ]
    },
    {
      sector: 'Healthcare',
      companies: ['UnityPoint Health', 'Mercy Medical Center', 'Iowa Clinic'],
      challenges: [
        'HIPAA compliance',
        'Patient privacy protection',
        'Medical record security',
        'Authorized access only'
      ],
      solutions: [
        'Authentication-based printing',
        'PHI protection protocols',
        'Audit trail compliance',
        'Secure document disposal'
      ]
    },
    {
      sector: 'Legal & Professional',
      companies: ['Nyemaster Goode', 'Davis Brown Koehn', 'Bradshaw Law'],
      challenges: [
        'Client confidentiality',
        'Document privilege protection',
        'Secure communication',
        'Compliance documentation'
      ],
      solutions: [
        'Confidential document controls',
        'User authentication requirements',
        'Activity monitoring',
        'Secure print queues'
      ]
    },
    {
      sector: 'Government',
      companies: ['City of Des Moines', 'Polk County', 'Iowa DOT'],
      challenges: [
        'Public record security',
        'Sensitive information protection',
        'Transparency requirements',
        'Budget accountability'
      ],
      solutions: [
        'Classification-based printing',
        'Access level controls',
        'Cost tracking by department',
        'Security incident reporting'
      ]
    }
  ]

  return (
    <>
      <SEO 
        title="Print Security Software Solutions in Des Moines | Document Protection"
        description="Comprehensive print security software for Des Moines businesses. Secure print release, audit trails, access control, and document protection solutions."
        keywords="print security software Des Moines, secure printing Iowa, document security, print access control, Des Moines IT security, business print protection"
        canonicalUrl="https://iowaprintsolutions.com/blog/print-security-software-des-moines"
      />
      
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} className="mb-8 text-blue-200" />
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
                Print Security Software Solutions in Des Moines
              </h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
                Protect your organization's sensitive documents with comprehensive print security software. Secure print release, access control, and audit trails for Des Moines businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Security Assessment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Essential Print Security Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect your organization's sensitive information with advanced print security software designed for modern business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <feature.icon className="h-8 w-8 text-blue-600" />
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

        {/* Des Moines Business Applications */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Industry Applications in Des Moines
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how different Des Moines business sectors benefit from comprehensive print security solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {desMoinesBusinesses.map((business, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Building2 className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{business.sector}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Organizations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {business.companies.map((company, companyIndex) => (
                        <span key={companyIndex} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 text-orange-500 mr-1" />
                        Security Challenges:
                      </h4>
                      <div className="space-y-1">
                        {business.challenges.map((challenge, challengeIndex) => (
                          <div key={challengeIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                        Security Solutions:
                      </h4>
                      <div className="space-y-1">
                        {business.solutions.map((solution, solutionIndex) => (
                          <div key={solutionIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{solution}</span>
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

        {/* Call to Action */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Secure Your Des Moines Organization's Documents
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Protect sensitive information with proven print security software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Security Review
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Download Security Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PrintSecuritySoftwareDesMoines
