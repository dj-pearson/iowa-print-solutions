import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Zap, Shield, DollarSign, CheckCircle, ArrowRight, Server, Users, Monitor, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'

const PrinterLogicServerlessPrinting = () => {
  const benefits = [
    'Eliminate print servers and related hardware costs',
    'Reduce IT maintenance and support overhead',
    'Improve printing reliability and uptime',
    'Enable seamless remote and mobile printing',
    'Simplify printer driver management',
    'Scale printing infrastructure effortlessly'
  ]

  const features = [
    {
      icon: Cloud,
      title: 'Cloud-Based Architecture',
      description: 'Eliminate on-premises print servers with secure cloud infrastructure that handles all print management tasks.',
      benefits: [
        'No server hardware to maintain',
        'Automatic updates and patches',
        'High availability and redundancy',
        'Scalable cloud infrastructure'
      ]
    },
    {
      icon: Zap,
      title: 'Direct IP Printing',
      description: 'Printers communicate directly with client devices, eliminating server bottlenecks and improving performance.',
      benefits: [
        'Faster print job processing',
        'Reduced network traffic',
        'Improved print reliability',
        'Lower latency printing'
      ]
    },
    {
      icon: Monitor,
      title: 'Centralized Management',
      description: 'Manage all printers and users from a single web-based console, regardless of location.',
      benefits: [
        'Unified printer management',
        'Real-time status monitoring',
        'Remote configuration updates',
        'Comprehensive reporting'
      ]
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Built-in security features protect print data without the vulnerabilities of traditional print servers.',
      benefits: [
        'Encrypted print communications',
        'Secure user authentication',
        'No print server attack surface',
        'Compliance-ready architecture'
      ]
    }
  ]

  const comparison = [
    {
      aspect: 'Server Hardware',
      traditional: 'Required physical/virtual servers',
      serverless: 'No servers needed'
    },
    {
      aspect: 'IT Maintenance',
      traditional: 'Regular server maintenance required',
      serverless: 'Minimal IT overhead'
    },
    {
      aspect: 'Print Reliability',
      traditional: 'Single point of failure',
      serverless: 'Distributed, resilient architecture'
    },
    {
      aspect: 'Remote Printing',
      traditional: 'Complex VPN setup required',
      serverless: 'Native cloud connectivity'
    },
    {
      aspect: 'Scalability',
      traditional: 'Limited by server capacity',
      serverless: 'Unlimited cloud scaling'
    },
    {
      aspect: 'Total Cost',
      traditional: 'High ongoing server costs',
      serverless: 'Lower total cost of ownership'
    }
  ]

  const implementationSteps = [
    {
      step: '1',
      title: 'Assessment & Planning',
      description: 'Evaluate current print infrastructure and plan the serverless migration strategy.',
      timeframe: '1-2 weeks'
    },
    {
      step: '2',
      title: 'Cloud Setup',
      description: 'Configure PrinterLogic cloud environment and establish secure connections.',
      timeframe: '1 week'
    },
    {
      step: '3',
      title: 'Printer Migration',
      description: 'Migrate printers to direct IP printing and configure cloud management.',
      timeframe: '2-3 weeks'
    },
    {
      step: '4',
      title: 'User Deployment',
      description: 'Deploy PrinterLogic client software and migrate user print queues.',
      timeframe: '1-2 weeks'
    },
    {
      step: '5',
      title: 'Server Decommission',
      description: 'Safely decommission old print servers and complete the migration.',
      timeframe: '1 week'
    }
  ]

  const costSavings = [
    {
      category: 'Hardware Costs',
      traditional: '$15,000 - $50,000',
      serverless: '$0',
      savings: '100%'
    },
    {
      category: 'IT Labor (Annual)',
      traditional: '$8,000 - $25,000',
      serverless: '$2,000 - $5,000',
      savings: '75-80%'
    },
    {
      category: 'Maintenance & Support',
      traditional: '$5,000 - $15,000',
      serverless: '$1,000 - $3,000',
      savings: '70-80%'
    },
    {
      category: 'Downtime Costs',
      traditional: '$10,000 - $30,000',
      serverless: '$1,000 - $3,000',
      savings: '85-90%'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Cloud className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              PrinterLogic Serverless Printing for Iowa Organizations
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Eliminate print servers and revolutionize your Iowa organization's printing infrastructure with PrinterLogic's cloud-based serverless printing solution. Reduce costs, improve reliability, and simplify management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Book Serverless Printing Consultation
              </a>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-md font-medium transition-colors"
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
                What is Serverless Printing?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                PrinterLogic's serverless printing eliminates the need for traditional print servers by moving print management to the cloud. Instead of routing print jobs through servers, printers communicate directly with user devices through secure cloud coordination.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This revolutionary approach reduces infrastructure costs, improves reliability, and simplifies print management for Iowa organizations of all sizes.
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
              className="bg-purple-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Iowa Organizations Choose Serverless
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <DollarSign className="h-8 w-8 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cost Reduction</h4>
                    <p className="text-gray-700">Eliminate server hardware, maintenance, and IT overhead costs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="h-8 w-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Improved Performance</h4>
                    <p className="text-gray-700">Faster printing with direct IP communication and reduced latency.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-blue-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Enhanced Security</h4>
                    <p className="text-gray-700">Eliminate server vulnerabilities with cloud-native security.</p>
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
              Serverless Printing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud-based printing capabilities that transform how Iowa organizations manage their print infrastructure.
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
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-purple-600" />
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

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Traditional vs. Serverless Printing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how PrinterLogic's serverless approach compares to traditional print server infrastructure.
            </p>
          </motion.div>

          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-purple-600 text-white">
              <div className="p-4 font-semibold">Aspect</div>
              <div className="p-4 font-semibold border-l border-purple-500">Traditional Print Servers</div>
              <div className="p-4 font-semibold border-l border-purple-500">Serverless Printing</div>
            </div>
            {comparison.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div className="p-4 font-medium text-gray-900">{item.aspect}</div>
                <div className="p-4 text-gray-700 border-l border-gray-200">{item.traditional}</div>
                <div className="p-4 text-green-700 font-medium border-l border-gray-200">{item.serverless}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Savings Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cost Savings for Iowa Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the significant cost reductions Iowa organizations achieve by moving to serverless printing.
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-green-600 text-white">
              <div className="p-4 font-semibold">Cost Category</div>
              <div className="p-4 font-semibold border-l border-green-500">Traditional (Annual)</div>
              <div className="p-4 font-semibold border-l border-green-500">Serverless (Annual)</div>
              <div className="p-4 font-semibold border-l border-green-500">Savings</div>
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
                <div className="p-4 text-red-600 border-l border-gray-200">{item.traditional}</div>
                <div className="p-4 text-green-600 border-l border-gray-200">{item.serverless}</div>
                <div className="p-4 text-green-700 font-bold border-l border-gray-200">{item.savings}</div>
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
              Serverless Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven implementation process ensures a smooth transition to serverless printing for your Iowa organization.
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
                      <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-purple-600 font-medium">{step.timeframe}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Eliminate Print Servers?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your Iowa organization's printing infrastructure with PrinterLogic's serverless solution. Contact Infomax Office Systems for expert implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Book Serverless Assessment
              </a>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-md font-medium transition-colors"
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

export default PrinterLogicServerlessPrinting 