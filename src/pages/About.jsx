import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, MapPin, Phone, Mail, CheckCircle, Target, Heart, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Expertise',
      description: 'Deep knowledge in PaperCut, Uniflow, and PrinterLogic solutions with 15+ years of experience.'
    },
    {
      icon: Heart,
      title: 'Iowa Focus',
      description: 'Dedicated to serving Iowa businesses with local support and understanding of regional needs.'
    },
    {
      icon: Zap,
      title: 'Results',
      description: 'Proven track record of reducing print costs by 30% while improving security and efficiency.'
    }
  ]

  const certifications = [
    'PaperCut Certified Partner',
    'Uniflow Authorized Reseller',
    'PrinterLogic Implementation Specialist',
    'Canon Solutions America Partner',
    'Microsoft Partner Network Member'
  ]

  const timeline = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Started with a mission to help Iowa businesses optimize their print infrastructure.'
    },
    {
      year: '2012',
      title: 'PaperCut Partnership',
      description: 'Became certified PaperCut partner, expanding our print management capabilities.'
    },
    {
      year: '2016',
      title: 'Uniflow Specialization',
      description: 'Added Uniflow solutions to provide comprehensive document workflow automation.'
    },
    {
      year: '2020',
      title: 'PrinterLogic Integration',
      description: 'Integrated PrinterLogic solutions to offer serverless printing alternatives.'
    },
    {
      year: '2024',
      title: '500+ Clients Served',
      description: 'Reached milestone of serving over 500 Iowa organizations with print solutions.'
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
              About Iowa Print Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Iowa's trusted partner for comprehensive print management solutions, serving businesses across the state for over 15 years.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-6">
                Founded in 2008, Iowa Print Solutions emerged from a simple observation: Iowa businesses needed specialized expertise in print management that understood their unique challenges and requirements.
              </p>
              <p className="text-gray-700 mb-6">
                Over the years, we've evolved from a small consulting firm to Iowa's leading print solutions provider, specializing in PaperCut, Uniflow, and PrinterLogic implementations. Our team combines deep technical expertise with genuine care for our clients' success.
              </p>
              <p className="text-gray-700 mb-8">
                Today, we're proud to serve over 500 Iowa organizations, from small businesses to large enterprises, helping them reduce costs, improve security, and streamline their print operations.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Work With Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">By the Numbers</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Hundreds</div>
                    <div className="text-sm text-gray-600">Iowa Clients Served</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-600">Years Serving Iowa</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">99</div>
                    <div className="text-sm text-gray-600">Iowa Counties Served</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do for Iowa businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to serve Iowa businesses.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 lg:pr-8">
                    <div className={`bg-white rounded-lg shadow-lg p-6 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="text-blue-600 font-bold text-lg mb-1">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 mx-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 lg:pl-8">
                    <div className="hidden lg:block"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Certifications & Partnerships
              </h2>
              <p className="text-gray-700 mb-6">
                Our team maintains the highest level of certifications and partnerships to ensure we deliver the best solutions to our Iowa clients.
              </p>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{cert}</span>
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
                Meet Dan Pearson
              </h3>
              <p className="text-gray-700 mb-4">
                As the founder and lead consultant of Iowa Print Solutions, Dan brings over 15 years of experience in print management and document workflow optimization.
              </p>
              <p className="text-gray-700 mb-6">
                Dan's expertise spans across all major print management platforms, with particular specialization in PaperCut, Uniflow, and PrinterLogic implementations for Iowa businesses.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">(515) 237-2352</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">DPearson@InfomaxOffice.com</span>
                </div>
              </div>
            </motion.div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can optimize your Iowa organization's print infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Free Consultation
              </Link>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About