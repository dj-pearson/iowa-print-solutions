import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import { Printer, Settings, BarChart3, Shield, Users, Award, ArrowRight, Wrench } from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: Printer,
      title: 'PaperCut Solutions',
      description: 'Complete PaperCut implementation and optimization for Iowa businesses.',
      features: ['Installation & Setup', 'User Management', 'Cost Tracking', '24/7 Support']
    },
    {
      icon: Settings,
      title: 'Uniflow Integration',
      description: 'Streamline your document workflows with professional Uniflow solutions.',
      features: ['Workflow Automation', 'Document Security', 'Mobile Printing', 'Custom Integration']
    },
    {
      icon: BarChart3,
      title: 'PrinterLogic Setup',
      description: 'Eliminate print servers and reduce IT overhead with PrinterLogic.',
      features: ['Serverless Printing', 'Driver Management', 'Usage Analytics', 'Remote Support']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Des Moines Medical Center',
      location: 'Des Moines, IA',
      testimonial: 'Iowa Print Solutions transformed our printing infrastructure. We reduced costs by 35% and improved efficiency dramatically.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Cedar Rapids School District',
      location: 'Cedar Rapids, IA',
      testimonial: 'The PaperCut implementation was seamless. Their Iowa-based support team is incredibly responsive and knowledgeable.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Iowa City Law Firm',
      location: 'Iowa City, IA',
      testimonial: 'Professional service from start to finish. Our document security and printing costs have never been better managed.',
      rating: 5
    }
  ]

  const stats = [
    { icon: Users, number: '500+', label: 'Iowa Clients Served' },
    { icon: Award, number: '15+', label: 'Years of Expertise' },
    { icon: BarChart3, number: '30%', label: 'Average Cost Savings' },
    { icon: Shield, number: '99.9%', label: 'Uptime Guarantee' }
  ]

  return (
    <div>
      <Hero />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Print Solutions for Iowa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From PaperCut to PrinterLogic, we provide complete print management solutions tailored for Iowa businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Iowa Businesses
            </h2>
            <p className="text-xl text-gray-600">
              See what our clients across Iowa are saying about our print solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
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
              Resources & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest articles and guides on print management solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Printer className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  PaperCut Implementation Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete guide to implementing PaperCut MF in your Iowa organization, including best practices and cost optimization strategies.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Settings className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Uniflow Workflow Optimization
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to maximize your Uniflow investment with advanced workflow automation and security features for Iowa businesses.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <BarChart3 className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Print Cost Reduction Strategies
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover proven methods to reduce printing costs by up to 30% while improving efficiency in your Iowa organization.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <Shield className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Print Security Best Practices
                </h3>
                <p className="text-gray-600 mb-4">
                  Essential security measures for protecting sensitive documents and ensuring compliance in Iowa organizations.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Wrench className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  PrinterLogic Migration Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Step-by-step guide to migrating from traditional print servers to PrinterLogic's serverless architecture.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Iowa Print Management Case Studies
                </h3>
                <p className="text-gray-600 mb-4">
                  Real-world success stories from Iowa businesses that transformed their print infrastructure with our solutions.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Want to stay updated with the latest print management insights?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Subscribe to Our Newsletter
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home