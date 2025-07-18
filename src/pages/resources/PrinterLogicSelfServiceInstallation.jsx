import React from 'react'
import { motion } from 'framer-motion'
import { Download, Users, Clock, Wrench, CheckCircle, ArrowRight, Monitor, Smartphone, Laptop, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const PrinterLogicSelfServiceInstallation = () => {
  const benefits = [
    'Reduce IT support tickets by 80%',
    'Enable instant printer access for users',
    'Simplify printer deployment across locations',
    'Improve user productivity and satisfaction',
    'Eliminate manual driver installation',
    'Provide 24/7 printer access capabilities'
  ]

  const features = [
    {
      icon: Download,
      title: 'One-Click Installation',
      description: 'Users can install printers with a single click through an intuitive web portal or mobile app.',
      benefits: [
        'No technical knowledge required',
        'Automatic driver installation',
        'Instant printer availability',
        'Cross-platform compatibility'
      ]
    },
    {
      icon: Monitor,
      title: 'Web-Based Portal',
      description: 'Centralized self-service portal accessible from any device with web browser.',
      benefits: [
        'Device-independent access',
        'Real-time printer status',
        'Location-based printer lists',
        'User-friendly interface'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Application',
      description: 'Native mobile apps for iOS and Android enable printer installation on mobile devices.',
      benefits: [
        'Mobile printing capabilities',
        'Location-aware printer discovery',
        'Push notification support',
        'Offline printer management'
      ]
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Control which printers users can access based on their role, department, or location.',
      benefits: [
        'Granular access control',
        'Department-specific printers',
        'Location-based restrictions',
        'Cost center management'
      ]
    }
  ]

  const userTypes = [
    {
      type: 'End Users',
      icon: Users,
      description: 'Employees can self-install printers without IT assistance',
      capabilities: [
        'Browse available printers by location',
        'Install printers with one click',
        'Remove printers when no longer needed',
        'View printer status and capabilities'
      ]
    },
    {
      type: 'Remote Workers',
      icon: Laptop,
      description: 'Home and remote workers can easily connect to office printers',
      capabilities: [
        'Secure VPN-free printer access',
        'Home printer integration',
        'Mobile device printing',
        'Cloud print job routing'
      ]
    },
    {
      type: 'Guests & Contractors',
      icon: Shield,
      description: 'Temporary users get controlled access to designated printers',
      capabilities: [
        'Time-limited printer access',
        'Guest-specific printer pools',
        'Restricted printing capabilities',
        'Automatic access expiration'
      ]
    }
  ]

  const deploymentOptions = [
    {
      method: 'Web Portal',
      description: 'Browser-based self-service portal',
      bestFor: 'Desktop users and general access',
      features: [
        'No software installation required',
        'Works on any operating system',
        'Real-time printer information',
        'Administrative controls'
      ]
    },
    {
      method: 'Mobile Apps',
      description: 'Native iOS and Android applications',
      bestFor: 'Mobile workers and BYOD environments',
      features: [
        'Native mobile printing',
        'Location services integration',
        'Push notifications',
        'Offline capabilities'
      ]
    },
    {
      method: 'Desktop Client',
      description: 'Lightweight desktop application',
      bestFor: 'Power users and advanced features',
      features: [
        'System tray integration',
        'Advanced printer preferences',
        'Batch printer installation',
        'Background driver updates'
      ]
    }
  ]

  const implementationSteps = [
    {
      step: '1',
      title: 'Printer Discovery & Configuration',
      description: 'Identify and configure all printers for self-service access with appropriate metadata.',
      timeframe: '1-2 weeks',
      tasks: [
        'Inventory existing printers',
        'Configure printer metadata',
        'Set location information',
        'Define printer capabilities'
      ]
    },
    {
      step: '2',
      title: 'User Group Setup',
      description: 'Create user groups and define access policies for different departments and roles.',
      timeframe: '1 week',
      tasks: [
        'Import user directory',
        'Create access groups',
        'Define printer permissions',
        'Set usage policies'
      ]
    },
    {
      step: '3',
      title: 'Portal Customization',
      description: 'Customize the self-service portal with branding and organization-specific settings.',
      timeframe: '3-5 days',
      tasks: [
        'Apply company branding',
        'Configure portal layout',
        'Set default preferences',
        'Test user workflows'
      ]
    },
    {
      step: '4',
      title: 'Pilot Testing',
      description: 'Deploy to a small group of users for testing and feedback collection.',
      timeframe: '1-2 weeks',
      tasks: [
        'Select pilot user group',
        'Conduct training sessions',
        'Collect user feedback',
        'Refine configurations'
      ]
    },
    {
      step: '5',
      title: 'Full Deployment',
      description: 'Roll out self-service installation to all users with training and support materials.',
      timeframe: '2-3 weeks',
      tasks: [
        'Organization-wide deployment',
        'User training materials',
        'Support documentation',
        'Monitor adoption metrics'
      ]
    }
  ]

  const metrics = [
    {
      metric: 'IT Support Tickets',
      before: '150-200 monthly',
      after: '20-30 monthly',
      improvement: '80-85% reduction'
    },
    {
      metric: 'Printer Installation Time',
      before: '15-30 minutes',
      after: '30 seconds',
      improvement: '95% faster'
    },
    {
      metric: 'User Satisfaction',
      before: '6.5/10',
      after: '9.2/10',
      improvement: '41% increase'
    },
    {
      metric: 'IT Labor Hours',
      before: '40 hours/week',
      after: '8 hours/week',
      improvement: '80% reduction'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Download className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              PrinterLogic Self Service Printer Installation for Iowa
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Empower your Iowa organization's users to install printers themselves with PrinterLogic's intuitive self-service solution. Reduce IT workload while improving user productivity and satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Book Self-Service Demo
              </a>
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

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Self Service Printer Installation?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                PrinterLogic's self-service installation empowers users to install, remove, and manage printers independently through intuitive web portals and mobile applications. This eliminates the need for IT intervention in routine printer management tasks.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Iowa organizations using self-service installation see dramatic reductions in IT support tickets while improving user satisfaction and productivity.
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
              className="bg-blue-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Self-Service Benefits for Iowa Organizations
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-blue-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Instant Access</h4>
                    <p className="text-gray-700">Users get immediate printer access without waiting for IT support.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Reduced IT Burden</h4>
                    <p className="text-gray-700">Free IT staff to focus on strategic initiatives instead of routine tasks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Wrench className="h-8 w-8 text-purple-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Zero Configuration</h4>
                    <p className="text-gray-700">Automatic driver installation and printer configuration.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Self-Service Installation Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive self-service capabilities that empower users and reduce IT overhead.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Self-Service for Every User Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored self-service experiences for different user roles and access requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {userTypes.map((userType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <userType.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{userType.type}</h3>
                </div>
                <p className="text-gray-700 mb-6">{userType.description}</p>
                <ul className="space-y-3">
                  {userType.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Deployment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to deliver self-service printer installation to your Iowa organization.
            </p>
          </motion.div>

          <div className="space-y-8">
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`bg-white rounded-lg shadow-lg p-8 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.method}</h3>
                    <p className="text-gray-700 mb-4">{option.description}</p>
                    <div className="mb-6">
                      <span className="text-sm font-medium text-blue-600">Best For: </span>
                      <span className="text-sm text-gray-700">{option.bestFor}</span>
                    </div>
                    <ul className="space-y-2">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process for implementing self-service printer installation in Iowa organizations.
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
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    <span className="text-blue-600 font-medium">{step.timeframe}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{step.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {step.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Results Iowa Organizations Achieve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable improvements from implementing self-service printer installation.
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-blue-600 text-white">
              <div className="p-4 font-semibold">Metric</div>
              <div className="p-4 font-semibold border-l border-blue-500">Before</div>
              <div className="p-4 font-semibold border-l border-blue-500">After</div>
              <div className="p-4 font-semibold border-l border-blue-500">Improvement</div>
            </div>
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div className="p-4 font-medium text-gray-900">{metric.metric}</div>
                <div className="p-4 text-red-600 border-l border-gray-200">{metric.before}</div>
                <div className="p-4 text-green-600 border-l border-gray-200">{metric.after}</div>
                <div className="p-4 text-green-700 font-bold border-l border-gray-200">{metric.improvement}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Empower Your Users with Self-Service Printing
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your Iowa organization's printing experience with PrinterLogic's self-service installation. Contact Infomax Office Systems to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Book Self-Service Demo
              </a>
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

export default PrinterLogicSelfServiceInstallation 