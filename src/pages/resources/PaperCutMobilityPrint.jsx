import React from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Wifi, Download, Users, CheckCircle, ArrowRight, Tablet, Cloud } from 'lucide-react'
import { Link } from 'react-router-dom'

const PaperCutMobilityPrint = () => {
  const mobilityFeatures = [
    {
      icon: Smartphone,
      title: 'Native Mobile Apps',
      description: 'Dedicated iOS and Android applications for seamless mobile printing experience.',
      capabilities: [
        'Native iOS and Android apps',
        'Intuitive user interface',
        'Print queue management',
        'Account balance viewing',
        'Secure authentication'
      ]
    },
    {
      icon: Wifi,
      title: 'Zero-Config Printing',
      description: 'Automatic printer discovery without manual driver installation or setup.',
      capabilities: [
        'Automatic printer discovery',
        'No driver installation required',
        'Network printer detection',
        'Seamless device connectivity',
        'Cross-platform compatibility'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Direct printing from cloud storage and popular productivity applications.',
      capabilities: [
        'Google Drive integration',
        'Microsoft OneDrive support',
        'Dropbox connectivity',
        'Email attachment printing',
        'Web-based document access'
      ]
    },
    {
      icon: Users,
      title: 'BYOD Support',
      description: 'Comprehensive Bring Your Own Device policy support for modern workplaces.',
      capabilities: [
        'Personal device printing',
        'Guest user access',
        'Device registration',
        'Security policy enforcement',
        'Usage tracking and billing'
      ]
    }
  ]

  const mobileWorkflows = [
    {
      workflow: 'Email Attachment Printing',
      description: 'Print documents directly from mobile email applications',
      steps: [
        'Open email with attachment on mobile device',
        'Select "Print" option from attachment menu',
        'Choose PaperCut Mobility Print service',
        'Select destination printer from available list',
        'Authenticate and release print job at device'
      ],
      supported_formats: ['PDF', 'Word', 'Excel', 'PowerPoint', 'Images', 'Plain text']
    },
    {
      workflow: 'Cloud Document Printing',
      description: 'Access and print documents stored in cloud services',
      steps: [
        'Open PaperCut mobile app',
        'Connect to cloud storage service',
        'Browse and select document to print',
        'Configure print settings and options',
        'Send to printer and authenticate for release'
      ],
      supported_services: ['Google Drive', 'OneDrive', 'Dropbox', 'iCloud', 'Box', 'SharePoint']
    },
    {
      workflow: 'Photo and Image Printing',
      description: 'Print photos and images directly from mobile device gallery',
      steps: [
        'Select photos from device gallery',
        'Choose print layout and sizing options',
        'Select color or black & white printing',
        'Choose paper type and quality settings',
        'Release print job at nearest printer'
      ],
      supported_formats: ['JPEG', 'PNG', 'HEIC', 'TIFF', 'BMP', 'GIF']
    }
  ]

  const deviceCompatibility = [
    {
      platform: 'iOS Devices',
      devices: ['iPhone', 'iPad', 'iPad Pro', 'iPad Air', 'iPad mini'],
      version_support: 'iOS 12.0 and later',
      features: ['AirPrint integration', 'Native sharing menu', 'Touch ID/Face ID support', 'Siri shortcuts']
    },
    {
      platform: 'Android Devices',
      devices: ['Android phones', 'Android tablets', 'Chromebooks'],
      version_support: 'Android 7.0 (API level 24) and later',
      features: ['Native print service', 'Google Cloud Print', 'Fingerprint authentication', 'NFC support']
    },
    {
      platform: 'Windows Mobile',
      devices: ['Windows tablets', 'Surface devices', '2-in-1 laptops'],
      version_support: 'Windows 10 and later',
      features: ['Universal Windows Platform', 'Windows Hello', 'OneDrive integration', 'Ink support']
    },
    {
      platform: 'Web Browsers',
      devices: ['Any device with modern browser'],
      version_support: 'Chrome, Safari, Firefox, Edge',
      features: ['Responsive web interface', 'Progressive web app', 'Cross-platform access', 'No app installation']
    }
  ]

  const securityFeatures = [
    {
      feature: 'User Authentication',
      description: 'Multiple authentication methods for secure mobile printing',
      implementation: [
        'Username and password authentication',
        'PIN-based quick authentication',
        'Biometric authentication (fingerprint, face)',
        'Single sign-on (SSO) integration',
        'Two-factor authentication support'
      ]
    },
    {
      feature: 'Data Encryption',
      description: 'End-to-end encryption for all mobile print communications',
      implementation: [
        'TLS 1.3 encryption for data transmission',
        'Encrypted storage of print jobs',
        'Secure communication protocols',
        'Certificate-based authentication',
        'Zero-knowledge architecture'
      ]
    },
    {
      feature: 'Access Controls',
      description: 'Granular access controls for mobile printing permissions',
      implementation: [
        'Role-based access control (RBAC)',
        'Device registration requirements',
        'Location-based access restrictions',
        'Time-based access controls',
        'Print quota enforcement'
      ]
    },
    {
      feature: 'Audit and Compliance',
      description: 'Comprehensive logging and compliance reporting',
      implementation: [
        'Detailed print activity logs',
        'User session tracking',
        'Device identification logging',
        'Compliance report generation',
        'Real-time security monitoring'
      ]
    }
  ]

  const implementationSteps = [
    {
      step: 'Infrastructure Assessment',
      duration: '1 week',
      activities: [
        'Network infrastructure evaluation',
        'Mobile device policy review',
        'Security requirement analysis',
        'Printer fleet compatibility check',
        'User workflow assessment'
      ]
    },
    {
      step: 'PaperCut Configuration',
      duration: '1-2 weeks',
      activities: [
        'PaperCut server configuration',
        'Mobility Print service installation',
        'Mobile device policy setup',
        'Authentication method configuration',
        'Security policy implementation'
      ]
    },
    {
      step: 'Mobile App Deployment',
      duration: '1 week',
      activities: [
        'Mobile device management (MDM) setup',
        'App distribution configuration',
        'User account provisioning',
        'Device registration process',
        'Initial testing and validation'
      ]
    },
    {
      step: 'User Training and Rollout',
      duration: '2-3 weeks',
      activities: [
        'User training session delivery',
        'Documentation and quick guides',
        'Support desk preparation',
        'Phased user rollout',
        'Ongoing monitoring and optimization'
      ]
    }
  ]

  const businessBenefits = [
    {
      benefit: 'Enhanced Productivity',
      description: 'Employees can print from anywhere without being tied to specific computers',
      impact: 'Increased mobile workforce efficiency and flexibility'
    },
    {
      benefit: 'Reduced IT Support',
      description: 'Elimination of printer driver installations and troubleshooting',
      impact: '50% reduction in mobile printing support tickets'
    },
    {
      benefit: 'Improved User Experience',
      description: 'Intuitive mobile interfaces that users already understand',
      impact: 'Higher user adoption and satisfaction rates'
    },
    {
      benefit: 'BYOD Enablement',
      description: 'Support for personal devices in the workplace',
      impact: 'Improved employee satisfaction and recruitment'
    }
  ]

  const iowaDeployments = [
    {
      organization: 'Iowa Insurance Company',
      size: '450 employees across 6 locations',
      challenge: 'Field agents needed to print client documents while mobile',
      solution: 'PaperCut Mobility Print with cloud integration for CRM documents',
      results: {
        productivity: '30% improvement in agent document workflow',
        satisfaction: 'High user adoption across all age groups',
        efficiency: 'Reduced time spent on document preparation'
      }
    },
    {
      organization: 'Des Moines Marketing Agency',
      size: '85 creative professionals',
      challenge: 'Creative team needed to print designs from tablets and phones',
      solution: 'Mobile printing with high-quality photo printing capabilities',
      results: {
        workflow: 'Streamlined creative review and approval process',
        quality: 'Maintained design quality in mobile print workflow',
        flexibility: 'Improved client presentation capabilities'
      }
    },
    {
      organization: 'Iowa Hospital Network',
      size: '2,000 medical staff across multiple facilities',
      challenge: 'Medical staff needed secure printing from mobile devices',
      solution: 'HIPAA-compliant mobile printing with secure authentication',
      results: {
        security: 'Full HIPAA compliance maintained',
        efficiency: 'Improved clinical workflow and patient care',
        adoption: 'Successful deployment across all departments'
      }
    }
  ]

  const troubleshooting = [
    {
      issue: 'App Cannot Discover Printers',
      symptoms: ['No printers visible in app', 'Network connectivity issues'],
      solutions: [
        'Verify mobile device is on same network as printers',
        'Check firewall settings for PaperCut communication',
        'Ensure Mobility Print service is running',
        'Verify printer compatibility with PaperCut'
      ]
    },
    {
      issue: 'Authentication Failures',
      symptoms: ['Cannot log into mobile app', 'Authentication errors'],
      solutions: [
        'Verify user credentials are correct',
        'Check user account status in PaperCut',
        'Ensure network connectivity to authentication server',
        'Reset user password if necessary'
      ]
    },
    {
      issue: 'Poor Print Quality from Mobile',
      symptoms: ['Blurry images', 'Incorrect colors', 'Layout issues'],
      solutions: [
        'Adjust print quality settings in mobile app',
        'Select appropriate paper type and size',
        'Ensure original document quality is sufficient',
        'Check printer maintenance and supplies'
      ]
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
                <Smartphone className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              PaperCut Mobility Print for Iowa Organizations
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
              Enable seamless mobile printing with PaperCut Mobility Print. Zero-configuration setup, native mobile apps, and comprehensive BYOD support for modern Iowa workplaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Mobility Print Demo
              </Link>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Schedule Mobile Assessment
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
              Mobility Print Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PaperCut Mobility Print provides comprehensive mobile printing capabilities with zero-configuration setup and native app experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <feature.icon className="h-8 w-8 text-green-600" />
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

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mobile Printing Workflows
            </h2>
            <p className="text-xl text-gray-600">
              Common mobile printing scenarios that demonstrate the flexibility and power of Mobility Print.
            </p>
          </motion.div>

          <div className="space-y-8">
            {mobileWorkflows.map((workflow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{workflow.workflow}</h3>
                    <p className="text-gray-700 mb-4">{workflow.description}</p>
                    <div className="bg-green-100 p-3 rounded-lg">
                      <p className="text-sm text-green-800 font-medium mb-2">Supported:</p>
                      <div className="flex flex-wrap gap-1">
                        {(workflow.supported_formats || workflow.supported_services).map((item, itemIndex) => (
                          <span key={itemIndex} className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-medium text-gray-900 mb-3">Step-by-Step Process:</h4>
                    <div className="space-y-3">
                      {workflow.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            {stepIndex + 1}
                          </div>
                          <span className="text-sm text-gray-700">{step}</span>
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
              Device Compatibility
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support for all major mobile platforms and devices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {deviceCompatibility.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{platform.platform}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Supported Devices:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.devices.map((device, deviceIndex) => (
                      <span key={deviceIndex} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        {device}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">Version Support:</h4>
                  <p className="text-sm text-gray-700">{platform.version_support}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
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
              Security & Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade security features protect mobile printing activities and ensure compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((security, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{security.feature}</h3>
                <p className="text-gray-700 mb-4">{security.description}</p>
                <div className="space-y-2">
                  {security.implementation.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
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
              Iowa Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real-world implementations of PaperCut Mobility Print in Iowa organizations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {iowaDeployments.map((deployment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{deployment.organization}</h3>
                    <p className="text-gray-600 mb-3">{deployment.size}</p>
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900 mb-1">Challenge:</h4>
                      <p className="text-sm text-gray-700">{deployment.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Solution:</h4>
                      <p className="text-sm text-gray-700">{deployment.solution}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-medium text-gray-900 mb-3">Results:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(deployment.results).map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="bg-green-50 p-3 rounded-lg">
                          <p className="text-xs text-green-600 font-medium capitalize">{key}</p>
                          <p className="text-sm text-green-800">{value}</p>
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

      <section className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Enable Mobile Printing for Your Iowa Organization
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your workplace with PaperCut Mobility Print and give your employees the freedom to print from any mobile device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Mobility Print Quote
              </Link>
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
    </div>
  )
}

export default PaperCutMobilityPrint 