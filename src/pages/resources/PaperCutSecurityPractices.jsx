import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, UserCheck, FileText, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PaperCutSecurityPractices = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Secure Print Release',
      description: 'Hold print jobs until user authentication at the device to prevent confidential documents from being left unattended.',
      benefits: [
        'PIN-based authentication',
        'Card reader integration',
        'Biometric authentication support',
        'Mobile device authentication'
      ]
    },
    {
      icon: UserCheck,
      title: 'User Access Controls',
      description: 'Comprehensive user authentication and authorization controls integrated with your Iowa organization\'s existing systems.',
      benefits: [
        'Active Directory integration',
        'LDAP authentication',
        'Role-based access control',
        'Multi-factor authentication'
      ]
    },
    {
      icon: Eye,
      title: 'Print Monitoring & Auditing',
      description: 'Complete visibility into all print activities with detailed logging and compliance reporting.',
      benefits: [
        'Real-time print monitoring',
        'Detailed audit trails',
        'Compliance reporting',
        'Security incident alerts'
      ]
    },
    {
      icon: FileText,
      title: 'Document Security Policies',
      description: 'Enforce security policies automatically based on document content, user roles, and device capabilities.',
      benefits: [
        'Watermark enforcement',
        'Color printing restrictions',
        'Copy prevention policies',
        'Confidential document handling'
      ]
    }
  ]

  const securityThreats = [
    {
      threat: 'Confidential Document Exposure',
      risk: 'High',
      solution: 'Secure print release ensures documents are only printed when the authorized user is present at the device.'
    },
    {
      threat: 'Unauthorized Print Access',
      risk: 'Medium',
      solution: 'User authentication and access controls prevent unauthorized users from accessing print resources.'
    },
    {
      threat: 'Print Data Interception',
      risk: 'Medium',
      solution: 'Encrypted print queues and secure communication protocols protect data in transit.'
    },
    {
      threat: 'Compliance Violations',
      risk: 'High',
      solution: 'Comprehensive audit trails and compliance reporting ensure regulatory requirements are met.'
    }
  ]

  const bestPractices = [
    {
      category: 'Authentication',
      practices: [
        'Implement multi-factor authentication for sensitive documents',
        'Use card readers or biometric authentication for high-security areas',
        'Regularly review and update user access permissions',
        'Enable automatic logout after inactivity periods'
      ]
    },
    {
      category: 'Document Handling',
      practices: [
        'Enable secure print release for all confidential documents',
        'Implement automatic watermarking for sensitive content',
        'Set up document retention policies and automatic deletion',
        'Use print policies to restrict color printing of confidential documents'
      ]
    },
    {
      category: 'Monitoring & Compliance',
      practices: [
        'Enable comprehensive audit logging for all print activities',
        'Set up real-time alerts for suspicious print behavior',
        'Regularly review print usage reports for security anomalies',
        'Maintain compliance documentation and reporting'
      ]
    }
  ]

  const iowaCompliance = [
    {
      regulation: 'HIPAA (Healthcare)',
      requirements: 'Patient information protection, audit trails, access controls',
      papercut_solution: 'Secure print release, detailed logging, user authentication'
    },
    {
      regulation: 'FERPA (Education)',
      requirements: 'Student record privacy, authorized access only',
      papercut_solution: 'Role-based access, secure document handling, audit trails'
    },
    {
      regulation: 'SOX (Financial)',
      requirements: 'Financial document security, audit trails, access controls',
      papercut_solution: 'Document security policies, comprehensive logging, user controls'
    },
    {
      regulation: 'State Privacy Laws',
      requirements: 'Personal information protection, data breach prevention',
      papercut_solution: 'Secure print release, encryption, monitoring alerts'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
              PaperCut Print Security Best Practices for Iowa Organizations
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
              Protect your Iowa organization's sensitive documents with comprehensive PaperCut security features. Learn industry best practices for secure printing, compliance, and document protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Security Assessment
              </Link>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Schedule Security Consultation
                <span className="sr-only"> (opens in new window)</span>
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
              Essential PaperCut Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security controls to protect your Iowa organization's sensitive documents and comply with industry regulations.
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
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <feature.icon className="h-8 w-8 text-red-600" />
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Print Security Threats & Solutions
            </h2>
            <p className="text-xl text-gray-600">
              How PaperCut addresses the most common print security vulnerabilities in Iowa organizations.
            </p>
          </motion.div>

          <div className="space-y-6">
            {securityThreats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <AlertTriangle className={`h-6 w-6 ${
                      item.risk === 'High' ? 'text-red-500' : 'text-yellow-500'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.threat}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.risk === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.risk} Risk
                      </span>
                    </div>
                    <p className="text-gray-700"><strong>Solution:</strong> {item.solution}</p>
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
              Print Security Best Practices for Iowa Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Implement these proven security practices to protect your organization's sensitive information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bestPractices.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.practices.map((practice, practiceIndex) => (
                    <div key={practiceIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{practice}</span>
                    </div>
                  ))}
                </div>
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
              Compliance Requirements for Iowa Organizations
            </h2>
            <p className="text-xl text-gray-600">
              How PaperCut helps Iowa businesses meet regulatory compliance requirements.
            </p>
          </motion.div>

          <div className="space-y-6">
            {iowaCompliance.map((compliance, index) => (
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
                    <p className="text-sm text-gray-600">Regulation Type</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Requirements</h4>
                    <p className="text-sm text-gray-700">{compliance.requirements}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">PaperCut Solution</h4>
                    <p className="text-sm text-gray-700">{compliance.papercut_solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Security Implementation Checklist
            </h2>
            <p className="text-xl opacity-90">
              Essential steps for implementing comprehensive print security with PaperCut.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Phase 1: Assessment & Planning</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Conduct security risk assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Identify compliance requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Define security policies and procedures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Plan authentication methods</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Phase 2: Implementation & Training</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Configure secure print release</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Set up user authentication systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Enable audit logging and monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Train staff on security procedures</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Secure Your Iowa Organization's Print Environment Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't leave your sensitive documents vulnerable. Implement comprehensive PaperCut security with our Iowa-based experts.
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

export default PaperCutSecurityPractices