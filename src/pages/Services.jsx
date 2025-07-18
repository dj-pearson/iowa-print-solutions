import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import SEO from '../components/SEO'
import { Printer, Settings, BarChart3, Shield, Wrench, HeadphonesIcon } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Printer,
      title: 'PaperCut MF Implementation Services',
      description: 'Complete PaperCut Mobility & Fleet solutions for Iowa organizations through Infomax Office Systems. From planning to deployment and ongoing support.',
      link: '/services/papercut',
      features: [
        'Professional installation and configuration',
        'User authentication and directory setup',
        'Cost center and department management',
        'Quota controls and billing implementation',
        'Mobile printing enablement',
        'Ongoing optimization and support'
      ]
    },
    {
      icon: Settings,
      title: 'Uniflow Document Management Solutions',
      description: 'Advanced document workflow automation and security solutions through Infomax Office Systems. Streamline processes and enhance security for Iowa businesses.',
      link: '/services/uniflow',
      features: [
        'Secure pull printing implementation',
        'Document workflow automation design',
        'Integration with existing business systems',
        'Mobile device and BYOD support',
        'Advanced security feature configuration',
        'Custom workflow development'
      ]
    },
    {
      icon: BarChart3,
      title: 'PrinterLogic Serverless Printing Setup',
      description: 'Eliminate print servers with cloud-based print management through Infomax Office Systems. Reduce costs and improve reliability for Iowa organizations.',
      link: 'https://www.infomaxoffice.com/',
      features: [
        'Serverless printing architecture migration',
        'Automated driver management setup',
        'Centralized print queue management',
        'Detailed usage analytics and reporting',
        'Mobile and remote printing enablement',
        'Reduced IT overhead implementation'
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Print Security Solutions',
      description: 'Comprehensive print security and compliance management through Infomax Office Systems. Protect sensitive documents for Iowa healthcare, financial, and government organizations.',
      link: 'https://www.infomaxoffice.com/',
      features: [
        'Document encryption and secure transmission',
        'Multi-factor user authentication',
        'Comprehensive audit trail management',
        'Compliance reporting for HIPAA, SOX, GDPR',
        'Secure release printing implementation',
        'Data loss prevention configuration'
      ]
    },
    {
      icon: Wrench,
      title: 'Print Environment Optimization',
      description: 'Analyze and optimize your entire print infrastructure with Infomax Office Systems expertise. Comprehensive assessments for Iowa businesses.',
      link: 'https://www.infomaxoffice.com/',
      features: [
        'Complete print environment assessment',
        'Cost analysis and reduction strategies',
        'Device consolidation planning',
        'Workflow optimization recommendations',
        'Performance monitoring setup',
        'ROI reporting and analysis'
      ]
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support & Maintenance',
      description: 'Dedicated Iowa-based support through Infomax Office Systems for all your print solutions. Comprehensive maintenance and optimization services.',
      link: 'https://www.infomaxoffice.com/',
      features: [
        '24/7 technical support availability',
        'Remote troubleshooting and diagnostics',
        'On-site service visits when needed',
        'Regular system updates and patches',
        'User training and documentation',
        'Proactive monitoring and maintenance'
      ]
    }
  ]

  const seoSchema = {
    '@type': 'Service',
    'serviceType': 'Print Management Services',
    'provider': {
      '@type': 'Organization',
      'name': 'Infomax Office Systems',
      'areaServed': {
        '@type': 'State',
        'name': 'Iowa'
      }
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Print Management Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'PaperCut Implementation',
            'description': 'Complete PaperCut MF implementation and support services'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service', 
            'name': 'Uniflow Solutions',
            'description': 'Document workflow automation and security solutions'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'PrinterLogic Setup',
            'description': 'Serverless printing architecture implementation'
          }
        }
      ]
    }
  }

  return (
    <>
      <SEO 
        title="Iowa Print Management Services - PaperCut, Uniflow & PrinterLogic Implementation"
        description="Professional print management services in Iowa. Expert PaperCut, Uniflow, and PrinterLogic implementation through Infomax Office Systems. Serving Des Moines, Cedar Rapids, Iowa City & statewide since 1958."
        keywords="Iowa print management services, PaperCut implementation Iowa, Uniflow services Iowa, PrinterLogic setup Iowa, managed print services Des Moines, print solutions Cedar Rapids, document management Iowa City, print security services Iowa, Infomax Office Systems services"
        canonicalUrl="https://iowa-print-solutions.pages.dev/services"
        schemaType="Service"
        additionalSchema={seoSchema}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Professional Print Management Services for Iowa Organizations
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive information about professional print management services available through Infomax Office Systems. From implementation to ongoing support, discover solutions tailored specifically for Iowa healthcare, education, and business organizations.
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
                Ready to Implement Professional Print Solutions?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact Infomax Office Systems for professional print management implementation and discover how we can optimize your Iowa organization's printing environment with expert PaperCut, Uniflow, and PrinterLogic services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/pearsondan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
                >
                  Schedule Expert Consultation
                </a>
                <a
                  href="https://www.infomaxoffice.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors"
                >
                  Visit Infomax Office Systems
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Services