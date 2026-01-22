import React from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Cloud, Tablet, Laptop, CheckCircle, ArrowRight, Wifi, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

const UniflowMobileCloudPrinting = () => {
  const mobileCloudFeatures = [
    {
      icon: Smartphone,
      title: 'Native Mobile Applications',
      description: 'Dedicated iOS and Android apps for seamless mobile printing experience.',
      capabilities: [
        'Native iOS and Android apps',
        'Intuitive touch interface',
        'Camera scanning integration',
        'Mobile authentication',
        'Offline job queuing'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Integration Platform',
      description: 'Direct integration with popular cloud storage and productivity platforms.',
      capabilities: [
        'Microsoft 365 integration',
        'Google Workspace connectivity',
        'Dropbox and OneDrive support',
        'SharePoint document access',
        'Cloud storage synchronization'
      ]
    },
    {
      icon: Tablet,
      title: 'Cross-Device Compatibility',
      description: 'Consistent printing experience across all mobile devices and platforms.',
      capabilities: [
        'Universal device support',
        'Cross-platform synchronization',
        'Device-specific optimization',
        'Automatic driver installation',
        'Seamless handoff between devices'
      ]
    },
    {
      icon: Wifi,
      title: 'Wireless Print Discovery',
      description: 'Automatic discovery and connection to available printers.',
      capabilities: [
        'Zero-configuration setup',
        'Automatic printer discovery',
        'Location-based printer lists',
        'Network printer mapping',
        'Guest network support'
      ]
    }
  ]

  const cloudPlatforms = [
    {
      platform: 'Microsoft 365',
      description: 'Direct printing from Word, Excel, PowerPoint, and Outlook',
      features: [
        'OneDrive document access',
        'SharePoint integration',
        'Outlook attachment printing',
        'Teams file sharing',
        'Azure AD authentication'
      ]
    },
    {
      platform: 'Google Workspace',
      description: 'Seamless integration with Google Drive and productivity apps',
      features: [
        'Google Drive connectivity',
        'Gmail attachment printing',
        'Google Docs integration',
        'Shared drive access',
        'Google authentication'
      ]
    },
    {
      platform: 'Apple iCloud',
      description: 'Native iOS integration with iCloud document storage',
      features: [
        'iCloud Drive access',
        'AirPrint compatibility',
        'iOS document picker',
        'iCloud synchronization',
        'Touch ID authentication'
      ]
    },
    {
      platform: 'Dropbox Business',
      description: 'Enterprise file storage and collaboration platform integration',
      features: [
        'Dropbox folder access',
        'Team folder support',
        'Version control integration',
        'Collaborative printing',
        'Enterprise security'
      ]
    }
  ]

  const mobileWorkflows = [
    {
      workflow: 'Email Attachment Printing',
      description: 'Print documents directly from mobile email applications',
      steps: [
        'Receive email with document attachment',
        'Open attachment in Uniflow mobile app',
        'Select printer from available devices',
        'Configure print settings and options',
        'Release print job at chosen printer'
      ]
    },
    {
      workflow: 'Cloud Document Printing',
      description: 'Access and print documents stored in cloud platforms',
      steps: [
        'Open Uniflow mobile app',
        'Navigate to connected cloud storage',
        'Browse and select document to print',
        'Choose printer and print settings',
        'Authenticate and release print job'
      ]
    },
    {
      workflow: 'Camera Scan to Print',
      description: 'Scan physical documents and print copies at different locations',
      steps: [
        'Use mobile app camera to scan document',
        'Apply image enhancement and corrections',
        'Select destination printer',
        'Configure copy settings',
        'Print enhanced scan at chosen location'
      ]
    }
  ]

  const securityMeasures = [
    {
      measure: 'Mobile Device Authentication',
      description: 'Secure authentication methods optimized for mobile devices',
      implementation: 'Biometric authentication, PIN codes, and device certificates'
    },
    {
      measure: 'Encrypted Cloud Communication',
      description: 'All cloud platform communications use enterprise-grade encryption',
      implementation: 'TLS 1.3 encryption and OAuth 2.0 authentication protocols'
    },
    {
      measure: 'Secure Print Release',
      description: 'Documents remain encrypted until user authentication at printer',
      implementation: 'NFC, QR codes, or mobile app-based print release'
    },
    {
      measure: 'Mobile Device Management',
      description: 'Integration with MDM solutions for corporate device control',
      implementation: 'Policy enforcement and remote app management'
    }
  ]

  const businessBenefits = [
    {
      benefit: 'Increased Mobility',
      description: 'Employees can print from anywhere using their mobile devices',
      impact: '45% increase in mobile workforce productivity'
    },
    {
      benefit: 'Cloud Efficiency',
      description: 'Direct access to cloud-stored documents eliminates file transfers',
      impact: '60% reduction in document handling time'
    },
    {
      benefit: 'Enhanced Collaboration',
      description: 'Team members can easily share and print collaborative documents',
      impact: 'Improved project coordination and communication'
    },
    {
      benefit: 'Reduced IT Support',
      description: 'Self-service mobile printing reduces IT helpdesk tickets',
      impact: '40% reduction in print-related support requests'
    }
  ]

  const deviceCompatibility = [
    {
      category: 'iOS Devices',
      devices: ['iPhone (iOS 12+)', 'iPad (iPadOS 13+)', 'iPad Pro', 'iPad Air', 'iPad mini'],
      features: ['AirPrint integration', 'Touch ID/Face ID auth', 'iOS document picker', 'Siri shortcuts']
    },
    {
      category: 'Android Devices',
      devices: ['Android phones (8.0+)', 'Android tablets', 'Samsung Galaxy series', 'Google Pixel devices'],
      features: ['Native Android printing', 'Fingerprint auth', 'Google Drive integration', 'NFC support']
    },
    {
      category: 'Windows Mobile',
      devices: ['Surface tablets', 'Windows laptops', '2-in-1 devices', 'Windows phones'],
      features: ['Windows Hello auth', 'OneDrive integration', 'Office 365 connectivity', 'Cortana integration']
    },
    {
      category: 'Cross-Platform',
      devices: ['Web browsers', 'Progressive web apps', 'Hybrid devices', 'Chromebooks'],
      features: ['Browser-based printing', 'Platform-agnostic access', 'Responsive design', 'Universal compatibility']
    }
  ]

  const implementationPhases = [
    {
      phase: 'Assessment & Planning',
      duration: '1-2 weeks',
      activities: [
        'Mobile device inventory and compatibility check',
        'Cloud platform integration assessment',
        'Security requirement analysis',
        'User workflow mapping',
        'Network infrastructure evaluation'
      ]
    },
    {
      phase: 'Cloud Integration Setup',
      duration: '2-3 weeks',
      activities: [
        'Cloud platform API configuration',
        'Authentication system integration',
        'Security policy implementation',
        'Mobile app deployment preparation',
        'Testing environment setup'
      ]
    },
    {
      phase: 'Mobile App Deployment',
      duration: '1-2 weeks',
      activities: [
        'Mobile device management configuration',
        'App distribution to user devices',
        'User account provisioning',
        'Initial connectivity testing',
        'Security validation'
      ]
    },
    {
      phase: 'Training & Optimization',
      duration: '2-3 weeks',
      activities: [
        'User training and onboarding',
        'Workflow optimization',
        'Performance monitoring',
        'Security compliance verification',
        'Ongoing support setup'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-cyan-600 to-cyan-800 text-white py-20">
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
              Uniflow Mobile & Cloud Printing for Iowa Organizations
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
              Transform your printing infrastructure with Uniflow's comprehensive mobile and cloud printing solutions. Seamless integration with popular cloud platforms and native mobile apps for enhanced productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Mobile Printing Demo
              </Link>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Schedule Cloud Integration
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
              Mobile & Cloud Printing Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uniflow provides comprehensive mobile and cloud printing solutions that integrate seamlessly with your existing technology stack.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileCloudFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                    <feature.icon className="h-8 w-8 text-cyan-600" />
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

      <section className="py-16 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cloud Platform Integration
            </h2>
            <p className="text-xl text-gray-600">
              Direct integration with the cloud platforms your Iowa organization already uses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{platform.platform}</h3>
                <p className="text-gray-700 mb-4">{platform.description}</p>
                <div className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
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

      <section className="py-16 bg-white">
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
              Common workflows that demonstrate the power and flexibility of mobile and cloud printing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mobileWorkflows.map((workflow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{workflow.workflow}</h3>
                <p className="text-gray-700 mb-4">{workflow.description}</p>
                <div className="space-y-3">
                  {workflow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
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
              Device Compatibility & Support
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support for all mobile devices and platforms used in Iowa organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {deviceCompatibility.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.category}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Supported Devices:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.devices.map((device, deviceIndex) => (
                      <span key={deviceIndex} className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded">
                        {device}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {category.features.map((feature, featureIndex) => (
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Security & Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Advanced security measures protect your documents across all mobile and cloud printing activities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((security, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{security.measure}</h3>
                <p className="text-gray-700 mb-3">{security.description}</p>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-sm text-gray-600 font-medium">Implementation:</p>
                  <p className="text-sm text-gray-600">{security.implementation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Modernize Your Iowa Organization's Printing Infrastructure
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Enable mobile and cloud printing to support modern work patterns and improve productivity across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Mobile & Cloud Printing Quote
              </Link>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-md font-medium transition-colors"
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

export default UniflowMobileCloudPrinting 