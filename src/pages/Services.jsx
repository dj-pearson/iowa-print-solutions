import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import { Printer, Settings, BarChart3, Shield, Wrench, HeadphonesIcon } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Printer,
      title: 'PaperCut MF Implementation',
      description: 'Complete PaperCut Mobility & Fleet solutions for Iowa organizations.',
      features: [
        'Full installation and configuration',
        'User authentication setup',
        'Cost center management',
        'Quota and billing controls',
        'Mobile printing enablement',
        'Ongoing optimization'
      ]
    },
    {
      icon: Settings,
      title: 'Uniflow Solutions',
      description: 'Advanced document workflow automation and security solutions.',
      features: [
        'Secure pull printing',
        'Document workflow automation',
        'Integration with existing systems',
        'Mobile device support',
        'Advanced security features',
        'Custom workflow development'
      ]
    },
    {
      icon: BarChart3,
      title: 'PrinterLogic Setup',
      description: 'Eliminate print servers with cloud-based print management.',
      features: [
        'Serverless printing architecture',
        'Automated driver management',
        'Centralized print queue management',
        'Detailed usage analytics',
        'Mobile and remote printing',
        'Reduced IT overhead'
      ]
    },
    {
      icon: Shield,
      title: 'Print Security Solutions',
      description: 'Comprehensive print security and compliance management.',
      features: [
        'Document encryption',
        'User authentication',
        'Audit trail management',
        'Compliance reporting',
        'Secure release printing',
        'Data loss prevention'
      ]
    },
    {
      icon: Wrench,
      title: 'Print Optimization',
      description: 'Analyze and optimize your entire print infrastructure.',
      features: [
        'Print environment assessment',
        'Cost analysis and reduction',
        'Device consolidation',
        'Workflow optimization',
        'Performance monitoring',
        'ROI reporting'
      ]
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      description: 'Dedicated Iowa-based support for all your print solutions.',
      features: [
        '24/7 technical support',
        'Remote troubleshooting',
        'On-site service visits',
        'Regular system updates',
        'Training and documentation',
        'Proactive monitoring'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Print Solutions for Iowa
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From implementation to ongoing support, we provide comprehensive print management solutions tailored specifically for Iowa businesses and organizations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Print Infrastructure?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact Iowa's print solutions experts for a free consultation and discover how we can optimize your printing environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors">
                Request Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services