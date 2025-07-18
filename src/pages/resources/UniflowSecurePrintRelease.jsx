import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, UserCheck, Smartphone, CheckCircle, ArrowRight, Eye, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'

const UniflowSecurePrintRelease = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Advanced Authentication',
      description: 'Multiple authentication methods ensure only authorized users can access their documents.',
      features: [
        'PIN-based authentication',
        'Card reader integration (HID, MIFARE)',
        'Biometric authentication support',
        'Mobile app authentication',
        'Active Directory integration'
      ]
    },
    {
      icon: Shield,
      title: 'Document Protection',
      description: 'Comprehensive security measures protect sensitive documents throughout the print process.',
      features: [
        'End-to-end encryption',
        'Secure job storage',
        'Automatic job deletion',
        'Watermark application',
        'Print job tracking'
      ]
    },
    {
      icon: Eye,
      title: 'Complete Monitoring',
      description: 'Real-time monitoring and detailed audit trails for compliance and security oversight.',
      features: [
        'Real-time print monitoring',
        'Detailed audit logs',
        'Security incident alerts',
        'Compliance reporting',
        'User activity tracking'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Integration',
      description: 'Secure mobile printing with full authentication and job management capabilities.',
      features: [
        'Mobile app print release',
        'QR code scanning',
        'Remote job management',
        'Mobile authentication',
        'BYOD support'
      ]
    }
  ]

  const implementationSteps = [
    {
      step: '1',
      title: 'Security Assessment',
      description: 'Evaluate current security posture and identify requirements for your Iowa organization.',
      details: [
        'Assess current print security risks',
        'Identify compliance requirements',
        'Define user authentication methods',
        'Plan device integration strategy'
      ]
    },
    {
      step: '2',
      title: 'System Configuration',
      description: 'Configure Uniflow servers and integrate with your existing Iowa infrastructure.',
      details: [
        'Install Uniflow print servers',
        'Configure Active Directory integration',
        'Set up authentication methods',
        'Implement security policies'
      ]
    },
    {
      step: '3',
      title: 'Device Deployment',
      description: 'Deploy secure print release capabilities across all multifunction devices.',
      details: [
        'Install device software components',
        'Configure authentication terminals',
        'Test print release functionality',
        'Validate security measures'
      ]
    },
    {
      step: '4',
      title: 'User Training & Rollout',
      description: 'Train Iowa staff and implement secure printing across the organization.',
      details: [
        'Conduct user training sessions',
        'Provide authentication setup assistance',
        'Monitor initial adoption',
        'Provide ongoing support'
      ]
    }
  ]

  const securityBenefits = [
    {
      benefit: 'Eliminate Document Exposure',
      description: 'Documents are only printed when the authorized user is present at the device',
      impact: 'Prevents confidential information from being left unattended'
    },
    {
      benefit: 'Reduce Print Waste',
      description: 'Unclaimed print jobs are automatically deleted after specified timeouts',
      impact: 'Significant reduction in paper and toner waste'
    },
    {
      benefit: 'Ensure Compliance',
      description: 'Detailed audit trails and compliance reporting for regulatory requirements',
      impact: 'Meet HIPAA, SOX, and other regulatory standards'
    },
    {
      benefit: 'Control Print Costs',
      description: 'User authentication enables detailed cost tracking and budget controls',
      impact: 'Better visibility and control over printing expenses'
    }
  ]

  const authenticationMethods = [
    {
      method: 'PIN Authentication',
      description: 'Simple 4-digit PIN entry at device terminals',
      best_for: 'General office environments with basic security needs',
      security_level: 'Medium'
    },
    {
      method: 'Card Authentication',
      description: 'Employee ID cards with RFID/NFC technology',
      best_for: 'Organizations with existing card access systems',
      security_level: 'High'
    },
    {
      method: 'Biometric Authentication',
      description: 'Fingerprint or other biometric verification',
      best_for: 'High-security environments and healthcare facilities',
      security_level: 'Very High'
    },
    {
      method: 'Mobile Authentication',
      description: 'Smartphone app with QR code or NFC release',
      best_for: 'BYOD environments and mobile workforces',
      security_level: 'High'
    }
  ]

  const complianceRequirements = [
    {
      regulation: 'HIPAA (Healthcare)',
      requirements: 'Protect patient health information in print workflows',
      uniflow_solution: 'Secure release with audit trails and user authentication'
    },
    {
      regulation: 'SOX (Financial)',
      requirements: 'Maintain detailed records of financial document handling',
      uniflow_solution: 'Comprehensive logging and compliance reporting features'
    },
    {
      regulation: 'FERPA (Education)',
      requirements: 'Protect student education records and privacy',
      uniflow_solution: 'Secure document handling with access controls'
    },
    {
      regulation: 'GDPR (Data Privacy)',
      requirements: 'Protect personal data throughout processing lifecycle',
      uniflow_solution: 'Data encryption and secure deletion capabilities'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
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
              Uniflow Secure Print Release for Iowa Organizations
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
              Protect sensitive documents and ensure compliance with Uniflow's comprehensive secure print release solution. Advanced authentication, complete monitoring, and seamless integration for Iowa businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Security Assessment
              </Link>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Schedule Security Demo
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
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uniflow provides enterprise-grade security features to protect your Iowa organization's sensitive documents at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <feature.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Authentication Methods for Every Need
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right authentication method for your Iowa organization's security requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {authenticationMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{method.method}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    method.security_level === 'Very High' ? 'bg-red-100 text-red-800' :
                    method.security_level === 'High' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {method.security_level} Security
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{method.description}</p>
                <p className="text-sm text-emerald-600 font-medium">
                  Best for: {method.best_for}
                </p>
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
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              Our proven methodology for implementing secure print release in Iowa organizations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
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

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compliance & Regulatory Requirements
            </h2>
            <p className="text-xl text-gray-600">
              How Uniflow helps Iowa organizations meet industry-specific compliance requirements.
            </p>
          </motion.div>

          <div className="space-y-6">
            {complianceRequirements.map((compliance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{compliance.regulation}</h3>
                    <p className="text-sm text-gray-600">Regulation</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                    <p className="text-sm text-gray-700">{compliance.requirements}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Uniflow Solution</h4>
                    <p className="text-sm text-gray-700">{compliance.uniflow_solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Secure Your Iowa Organization's Print Environment
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Implement enterprise-grade print security with Uniflow's comprehensive secure release solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Security Quote
              </Link>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-md font-medium transition-colors"
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

export default UniflowSecurePrintRelease 