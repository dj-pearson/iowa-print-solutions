import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Wifi, Cloud, Users, CheckCircle, ArrowRight, Laptop, Building, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

const UniflowPrintFromAnywhere = () => {
  const printFromAnywhereFeatures = [
    {
      icon: Cloud,
      title: 'Cloud-Based Print Management',
      description: 'Access your organization\'s printers from any location with internet connectivity.',
      capabilities: [
        'Cloud print server connectivity',
        'Secure tunneling technology',
        'Global printer access',
        'Real-time print queue management',
        'Cross-location print routing'
      ]
    },
    {
      icon: Laptop,
      title: 'Remote Worker Support',
      description: 'Enable seamless printing for remote employees working from home or satellite offices.',
      capabilities: [
        'VPN-independent printing',
        'Home printer integration',
        'Secure document transmission',
        'Remote print release',
        'Virtual printer deployment'
      ]
    },
    {
      icon: Building,
      title: 'Multi-Location Management',
      description: 'Unified print management across multiple office locations and branches.',
      capabilities: [
        'Centralized administration',
        'Location-based printer groups',
        'Cross-site print routing',
        'Unified user experience',
        'Global policy enforcement'
      ]
    },
    {
      icon: Wifi,
      title: 'Guest and Visitor Printing',
      description: 'Secure printing solutions for temporary users and visitors at any location.',
      capabilities: [
        'Guest print portal access',
        'Temporary user accounts',
        'Visitor authentication',
        'Time-limited access',
        'Secure guest isolation'
      ]
    }
  ]

  const useCase = [
    {
      scenario: 'Remote Employee at Home',
      description: 'Employee working from home needs to print confidential documents',
      workflow: [
        'Employee prints from home computer',
        'Document securely transmitted to cloud',
        'Employee authenticates at office printer',
        'Document prints with full security',
        'Audit trail maintained for compliance'
      ],
      benefit: 'Secure printing without compromising confidentiality'
    },
    {
      scenario: 'Traveling Executive',
      description: 'Executive traveling between multiple office locations',
      workflow: [
        'Executive prints from laptop at any location',
        'Uniflow identifies nearest available printer',
        'Authentication required at chosen device',
        'Document prints with executive privileges',
        'Usage tracked across all locations'
      ],
      benefit: 'Seamless printing experience regardless of location'
    },
    {
      scenario: 'Client Meeting at Satellite Office',
      description: 'Team member needs to print materials for client meeting',
      workflow: [
        'User prints to satellite office from main location',
        'Documents held in secure queue',
        'User arrives and authenticates at satellite office',
        'Materials print just before meeting',
        'Professional presentation ensured'
      ],
      benefit: 'Just-in-time printing for improved presentations'
    }
  ]

  const securityFeatures = [
    {
      feature: 'End-to-End Encryption',
      description: 'All print data encrypted during transmission and storage',
      importance: 'Protects sensitive documents across all networks'
    },
    {
      feature: 'Multi-Factor Authentication',
      description: 'Enhanced security for remote and cross-location printing',
      importance: 'Ensures only authorized users access print resources'
    },
    {
      feature: 'Secure Print Release',
      description: 'Documents only print when user is physically present',
      importance: 'Prevents unauthorized access to printed materials'
    },
    {
      feature: 'Audit Trail Tracking',
      description: 'Complete logging of all print activities across locations',
      importance: 'Maintains compliance and security oversight'
    }
  ]

  const implementationBenefits = [
    {
      benefit: 'Enhanced Productivity',
      description: 'Employees can print from anywhere without location constraints',
      impact: '40% reduction in print-related delays and frustrations'
    },
    {
      benefit: 'Improved Security',
      description: 'Centralized security policies applied across all locations',
      impact: 'Reduced risk of document exposure and data breaches'
    },
    {
      benefit: 'Cost Optimization',
      description: 'Better utilization of printer resources across locations',
      impact: '25% reduction in overall printing infrastructure costs'
    },
    {
      benefit: 'Simplified Management',
      description: 'Single interface to manage printing across all locations',
      impact: '60% reduction in IT administration time'
    }
  ]

  const locationTypes = [
    {
      location: 'Corporate Headquarters',
      features: ['Full printer fleet access', 'Administrative controls', 'Policy management'],
      users: 'All employees and executives'
    },
    {
      location: 'Branch Offices',
      features: ['Local printer access', 'Headquarters integration', 'Shared resources'],
      users: 'Local staff and visiting employees'
    },
    {
      location: 'Home Offices',
      features: ['Secure document transmission', 'Personal printer support', 'VPN-free access'],
      users: 'Remote workers and telecommuters'
    },
    {
      location: 'Client Sites',
      features: ['Temporary access', 'Guest printing', 'Secure isolation'],
      users: 'Field workers and client-facing staff'
    }
  ]

  const technologyComponents = [
    {
      component: 'Uniflow Cloud Gateway',
      purpose: 'Secure connection between locations and cloud services',
      benefit: 'Enables printing from anywhere with internet access'
    },
    {
      component: 'Print Server Federation',
      purpose: 'Links multiple print servers across locations',
      benefit: 'Unified print experience across all sites'
    },
    {
      component: 'Mobile Print Connectors',
      purpose: 'Integrates mobile devices with print infrastructure',
      benefit: 'Seamless mobile printing from any location'
    },
    {
      component: 'Authentication Bridge',
      purpose: 'Extends corporate authentication to remote locations',
      benefit: 'Consistent security regardless of print location'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <MapPin className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Uniflow Print from Anywhere Solutions for Iowa Organizations
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
              Enable location-independent printing with Uniflow's comprehensive remote printing solutions. Secure, flexible, and seamless printing for Iowa businesses with distributed workforces and multiple locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Remote Printing Demo
              </Link>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-md font-medium transition-colors"
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
              Complete Print from Anywhere Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uniflow enables secure, location-independent printing that supports modern work patterns and distributed teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {printFromAnywhereFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <feature.icon className="h-8 w-8 text-teal-600" />
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

      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              See how Uniflow's print from anywhere capabilities solve common Iowa business challenges.
            </p>
          </motion.div>

          <div className="space-y-8">
            {useCase.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{scenario.scenario}</h3>
                    <p className="text-gray-700 mb-4">{scenario.description}</p>
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <p className="text-sm text-teal-800 font-medium">Key Benefit:</p>
                      <p className="text-sm text-teal-700">{scenario.benefit}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-medium text-gray-900 mb-3">Workflow Process:</h4>
                    <div className="space-y-3">
                      {scenario.workflow.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
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
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade security ensures document protection across all printing locations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((security, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{security.feature}</h3>
                <p className="text-gray-700 mb-3">{security.description}</p>
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="text-sm text-gray-600 font-medium">Why It Matters:</p>
                  <p className="text-sm text-gray-600">{security.importance}</p>
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
              Supported Location Types
            </h2>
            <p className="text-xl text-gray-600">
              Uniflow adapts to every type of work environment your Iowa organization uses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locationTypes.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{location.location}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Available Features:</h4>
                  <div className="space-y-1">
                    {location.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <p className="text-sm text-teal-800 font-medium">Primary Users:</p>
                  <p className="text-sm text-teal-700">{location.users}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Enable Print from Anywhere for Your Iowa Organization
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your printing infrastructure to support modern work patterns with Uniflow's comprehensive remote printing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Print from Anywhere Quote
              </Link>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-md font-medium transition-colors"
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

export default UniflowPrintFromAnywhere 