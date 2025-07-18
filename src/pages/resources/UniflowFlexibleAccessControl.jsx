import React from 'react'
import { motion } from 'framer-motion'
import { Users, Shield, Key, Settings, CheckCircle, ArrowRight, Lock, UserCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const UniflowFlexibleAccessControl = () => {
  const accessControlFeatures = [
    {
      icon: Users,
      title: 'Role-Based Access Control',
      description: 'Define granular permissions based on user roles and organizational hierarchy.',
      capabilities: [
        'Hierarchical role definitions',
        'Department-based permissions',
        'Job function access levels',
        'Temporary role assignments',
        'Inheritance-based permissions'
      ]
    },
    {
      icon: Key,
      title: 'Multi-Factor Authentication',
      description: 'Multiple authentication methods for enhanced security and user convenience.',
      capabilities: [
        'PIN-based authentication',
        'Card reader integration',
        'Biometric verification',
        'Mobile app authentication',
        'Active Directory SSO'
      ]
    },
    {
      icon: Settings,
      title: 'Dynamic Policy Management',
      description: 'Flexible policies that adapt to user context, location, and time.',
      capabilities: [
        'Time-based access restrictions',
        'Location-aware permissions',
        'Device-specific policies',
        'Context-sensitive rules',
        'Automatic policy updates'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance & Auditing',
      description: 'Comprehensive audit trails and compliance reporting for regulatory requirements.',
      capabilities: [
        'Detailed access logging',
        'Compliance report generation',
        'Real-time security monitoring',
        'Violation alerts and responses',
        'Forensic audit capabilities'
      ]
    }
  ]

  const userRoleExamples = [
    {
      role: 'Executive',
      description: 'Senior leadership with broad printing access',
      permissions: [
        'Unlimited printing quotas',
        'Access to all printer locations',
        'Color printing privileges',
        'Confidential document handling',
        'Override capability for restrictions'
      ],
      restrictions: ['Enhanced security logging', 'Executive-level authentication']
    },
    {
      role: 'Department Manager',
      description: 'Middle management with departmental oversight',
      permissions: [
        'Department printer access',
        'Staff quota management',
        'Cost center reporting',
        'Policy configuration for team',
        'Approval workflow participation'
      ],
      restrictions: ['Department budget limits', 'Location-based access']
    },
    {
      role: 'Regular Employee',
      description: 'Standard staff members with basic printing needs',
      permissions: [
        'Personal printing quota',
        'Standard printer access',
        'Basic print options',
        'Secure print release',
        'Mobile printing capability'
      ],
      restrictions: ['Color printing limits', 'Daily/monthly quotas', 'Standard authentication']
    },
    {
      role: 'Contractor/Temporary',
      description: 'External workers with limited access',
      permissions: [
        'Guest printer access',
        'Basic black & white printing',
        'Supervised printing areas',
        'Time-limited access',
        'Essential print functions'
      ],
      restrictions: ['Strict quota limits', 'Enhanced monitoring', 'Supervised access areas']
    }
  ]

  const authenticationMethods = [
    {
      method: 'Smart Card Authentication',
      description: 'Employee ID cards with embedded chips for secure access',
      security_level: 'Very High',
      use_cases: ['High-security environments', 'Government facilities', 'Financial institutions'],
      benefits: ['Non-repudiation', 'Strong encryption', 'Audit trail integration']
    },
    {
      method: 'Biometric Verification',
      description: 'Fingerprint, facial recognition, or other biometric authentication',
      security_level: 'Very High',
      use_cases: ['Healthcare facilities', 'Research laboratories', 'Executive areas'],
      benefits: ['Unique identification', 'Cannot be lost or stolen', 'Fast authentication']
    },
    {
      method: 'Mobile App Authentication',
      description: 'Smartphone-based authentication with push notifications',
      security_level: 'High',
      use_cases: ['Modern workplaces', 'BYOD environments', 'Remote workers'],
      benefits: ['User convenience', 'Push notifications', 'Location awareness']
    },
    {
      method: 'PIN-Based Access',
      description: 'Simple numeric PIN entry for basic authentication',
      security_level: 'Medium',
      use_cases: ['General office environments', 'Shared workspaces', 'Basic security needs'],
      benefits: ['Easy to use', 'Quick authentication', 'No additional hardware']
    }
  ]

  const policyScenarios = [
    {
      scenario: 'Time-Based Restrictions',
      description: 'Automatically adjust printing permissions based on time of day or business hours',
      implementation: [
        'After-hours printing requires manager approval',
        'Weekend access limited to essential personnel',
        'Overtime printing triggers notifications',
        'Holiday schedules automatically applied'
      ],
      benefit: 'Reduces unauthorized usage and controls costs'
    },
    {
      scenario: 'Location-Aware Permissions',
      description: 'Grant access based on user location and printer proximity',
      implementation: [
        'Floor-specific printer access',
        'Building security integration',
        'Remote location restrictions',
        'Visitor area limitations'
      ],
      benefit: 'Enhances physical security and access control'
    },
    {
      scenario: 'Project-Based Access',
      description: 'Temporary permissions for specific projects or initiatives',
      implementation: [
        'Project team printer access',
        'Temporary high-volume permissions',
        'Client-specific printing areas',
        'Time-limited project access'
      ],
      benefit: 'Flexible access for changing business needs'
    },
    {
      scenario: 'Compliance-Driven Controls',
      description: 'Automatically enforce regulatory compliance requirements',
      implementation: [
        'HIPAA-compliant document handling',
        'SOX financial document controls',
        'Confidentiality level enforcement',
        'Retention policy compliance'
      ],
      benefit: 'Ensures regulatory compliance without manual oversight'
    }
  ]

  const integrationCapabilities = [
    {
      system: 'Active Directory',
      description: 'Seamless integration with Microsoft Active Directory for user management',
      features: [
        'Automatic user synchronization',
        'Group-based permissions',
        'Single sign-on capability',
        'Password policy enforcement',
        'Domain controller integration'
      ]
    },
    {
      system: 'LDAP Directory Services',
      description: 'Integration with LDAP-based directory services for user authentication',
      features: [
        'Standards-based integration',
        'Cross-platform compatibility',
        'Centralized user management',
        'Attribute-based access control',
        'Federation support'
      ]
    },
    {
      system: 'SAML/SSO Providers',
      description: 'Support for SAML-based single sign-on solutions',
      features: [
        'Identity federation',
        'Multi-provider support',
        'Token-based authentication',
        'Cross-domain access',
        'Standards compliance'
      ]
    },
    {
      system: 'Badge/Card Systems',
      description: 'Integration with existing employee badge and card access systems',
      features: [
        'Existing card utilization',
        'Badge reader integration',
        'Physical access correlation',
        'Visitor badge support',
        'Multi-technology support'
      ]
    }
  ]

  const securityCompliance = [
    {
      standard: 'ISO 27001',
      description: 'Information security management system compliance',
      requirements: 'Access control policies, audit trails, risk management',
      uniflow_support: 'Comprehensive logging, policy enforcement, risk assessment tools'
    },
    {
      standard: 'HIPAA',
      description: 'Healthcare information protection and privacy',
      requirements: 'Patient data protection, access controls, audit logs',
      uniflow_support: 'Secure print release, detailed audit trails, encryption'
    },
    {
      standard: 'SOX',
      description: 'Financial reporting and document control',
      requirements: 'Document integrity, access controls, retention policies',
      uniflow_support: 'Document tracking, approval workflows, compliance reporting'
    },
    {
      standard: 'GDPR',
      description: 'Data protection and privacy regulations',
      requirements: 'Data protection, user consent, right to deletion',
      uniflow_support: 'Data encryption, consent management, secure deletion'
    }
  ]

  const implementationBenefits = [
    {
      benefit: 'Enhanced Security',
      description: 'Multi-layered access controls protect sensitive documents',
      metrics: '75% reduction in security incidents'
    },
    {
      benefit: 'Operational Efficiency',
      description: 'Automated policy enforcement reduces manual administration',
      metrics: '50% reduction in IT management overhead'
    },
    {
      benefit: 'Regulatory Compliance',
      description: 'Built-in compliance features ensure regulatory adherence',
      metrics: '100% audit compliance achievement'
    },
    {
      benefit: 'User Productivity',
      description: 'Streamlined access improves user experience',
      metrics: '30% improvement in user satisfaction'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-violet-600 to-violet-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <UserCheck className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Uniflow Flexible Access Control for Iowa Organizations
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
              Implement sophisticated access control and user management with Uniflow's flexible security framework. Role-based permissions, multi-factor authentication, and comprehensive compliance capabilities for Iowa businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Access Control Demo
              </Link>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-violet-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Schedule Security Assessment
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
              Advanced Access Control Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uniflow provides enterprise-grade access control capabilities that adapt to your organization's security requirements and business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessControlFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-violet-100 p-3 rounded-lg mr-4">
                    <feature.icon className="h-8 w-8 text-violet-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Role-Based Access Examples
            </h2>
            <p className="text-xl text-gray-600">
              See how different user roles receive appropriate access levels and restrictions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {userRoleExamples.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{role.role}</h3>
                <p className="text-gray-700 mb-4">{role.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Permissions:</h4>
                  <div className="space-y-1">
                    {role.permissions.map((permission, permIndex) => (
                      <div key={permIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{permission}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Security Measures:</h4>
                  <div className="space-y-1">
                    {role.restrictions.map((restriction, resIndex) => (
                      <div key={resIndex} className="flex items-start space-x-2">
                        <Lock className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{restriction}</span>
                      </div>
                    ))}
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
              Authentication Methods
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right authentication approach for your Iowa organization's security requirements.
            </p>
          </motion.div>

          <div className="space-y-8">
            {authenticationMethods.map((auth, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{auth.method}</h3>
                      <span className={`ml-3 px-2 py-1 rounded text-xs font-medium ${
                        auth.security_level === 'Very High' ? 'bg-red-100 text-red-800' :
                        auth.security_level === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {auth.security_level}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{auth.description}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Use Cases:</h4>
                    <div className="space-y-1">
                      {auth.use_cases.map((useCase, ucIndex) => (
                        <span key={ucIndex} className="block text-sm text-gray-600">• {useCase}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {auth.benefits.map((benefit, benIndex) => (
                        <span key={benIndex} className="block text-sm text-gray-600">• {benefit}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-violet-100 p-3 rounded-lg">
                      <Key className="h-8 w-8 text-violet-600" />
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
              Dynamic Policy Scenarios
            </h2>
            <p className="text-xl text-gray-600">
              Flexible policies that automatically adapt to changing conditions and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {policyScenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{scenario.scenario}</h3>
                <p className="text-gray-700 mb-4">{scenario.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Implementation Examples:</h4>
                  <div className="space-y-2">
                    {scenario.implementation.map((impl, implIndex) => (
                      <div key={implIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{impl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-violet-50 p-3 rounded-lg">
                  <p className="text-sm text-violet-800 font-medium">Business Benefit:</p>
                  <p className="text-sm text-violet-700">{scenario.benefit}</p>
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
              System Integration Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Seamless integration with your existing identity and access management systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {integrationCapabilities.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{integration.system}</h3>
                <p className="text-gray-700 mb-4">{integration.description}</p>
                <div className="space-y-2">
                  {integration.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compliance & Regulatory Support
            </h2>
            <p className="text-xl text-gray-600">
              Built-in compliance features help Iowa organizations meet industry-specific requirements.
            </p>
          </motion.div>

          <div className="space-y-6">
            {securityCompliance.map((compliance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{compliance.standard}</h3>
                    <p className="text-sm text-gray-600">Standard</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                    <p className="text-sm text-gray-700">{compliance.description}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Requirements</h4>
                    <p className="text-sm text-gray-700">{compliance.requirements}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Uniflow Support</h4>
                    <p className="text-sm text-gray-700">{compliance.uniflow_support}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-violet-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Implement Advanced Access Control for Your Iowa Organization
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Secure your printing infrastructure with Uniflow's comprehensive access control and user management capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Access Control Quote
              </Link>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-violet-600 px-8 py-3 rounded-md font-medium transition-colors"
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

export default UniflowFlexibleAccessControl 