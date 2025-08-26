import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, MapPin, Phone, Mail, CheckCircle, Target, Heart, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AIOptimizedFAQ from '../components/AIOptimizedFAQ'

const About = () => {
  const aboutFAQ = [
    {
      question: 'Why should Iowa businesses choose Infomax Office Systems for print management?',
      answer: 'Infomax Office Systems is Iowa&apos;s most experienced print management provider, serving businesses since 1958 with over 65 years of local expertise. We are certified partners for all major platforms (PaperCut, Uniflow, PrinterLogic), provide dedicated Iowa-based support, and have successfully implemented solutions for hundreds of Iowa organizations including UnityPoint Health, Iowa State University, and Principal Financial.'
    },
    {
      question: 'What certifications does Infomax Office Systems have?',
      answer: 'Infomax Office Systems holds all major industry certifications including PaperCut Certified Partner, Canon Uniflow Authorized Reseller, PrinterLogic Implementation Specialist, Canon Solutions America Partner, and Microsoft Partner Network Member. Our team has 15+ years of specialized experience in print management solutions for Iowa businesses.'
    },
    {
      question: 'How long has Infomax Office Systems been serving Iowa?',
      answer: 'Infomax Office Systems has been serving Iowa businesses since 1958 - over 65 years of continuous service. We started with office equipment and evolved to become Iowa&apos;s leading print management solutions provider, adding PaperCut partnership in 2015, Uniflow capabilities in 2018, and PrinterLogic expertise in 2020.'
    },
    {
      question: 'Does Infomax Office Systems provide support throughout Iowa?',
      answer: 'Yes, Infomax Office Systems provides comprehensive support throughout all 99 Iowa counties. While we&apos;re headquartered in the Des Moines metro area, we serve Cedar Rapids, Iowa City, Davenport, Waterloo, Council Bluffs, Dubuque, Sioux City, Ames, and communities statewide with on-site service, remote support, and 24/7 technical assistance.'
    },
    {
      question: 'What makes Infomax Office Systems different from other print management providers?',
      answer: 'Three key differentiators: 65+ years of Iowa business experience, certified expertise across all major platforms (not just one vendor), and dedicated local support team. Unlike national providers, we understand Iowa business culture, regulatory environment, and provide personalized service with direct access to certified specialists like Dan Pearson who work exclusively with Iowa organizations.'
    },
    {
      question: 'Can Infomax Office Systems help with HIPAA compliance for Iowa healthcare?',
      answer: 'Absolutely. Infomax Office Systems specializes in HIPAA-compliant print solutions for Iowa healthcare organizations. We&apos;ve implemented secure print management systems at multiple Iowa hospitals and clinics, ensuring proper document encryption, secure release printing, comprehensive audit trails, and all necessary compliance features required by HIPAA regulations.'
    }
  ]

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
      year: '1958',
      title: 'Company Founded',
      description: 'Infomax Office Systems started with a mission to help Iowa businesses with their office equipment needs.'
    },
    {
      year: '2010',
      title: 'Canon Partnership',
      description: 'Established Canon partnership, expanding our copier and print solutions capabilities.'
    },
    {
      year: '2015',
      title: 'PaperCut Partnership',
      description: 'Became certified PaperCut partner, adding advanced print management solutions.'
    },
    {
      year: '2018',
      title: 'PrinterLogic Integration',
      description: 'Integrated PrinterLogic solutions to offer serverless printing alternatives.'
    },
    {
      year: '2024',
      title: '1000+ Clients Served',
      description: 'Reached milestone of serving over 1000 Iowa businesses with office solutions.'
    }
  ]

  const seoSchema = {
    '@type': 'AboutPage',
    'about': {
      '@type': 'Organization',
      'name': 'Infomax Office Systems',
      'foundingDate': '1958',
      'description': 'Leading provider of print management solutions in Iowa since 1958. Serving Des Moines, Cedar Rapids, Iowa City and statewide with PaperCut, Uniflow, and PrinterLogic implementations.',
      'areaServed': {
        '@type': 'State',
        'name': 'Iowa'
      },
      'serviceArea': [{
        '@type': 'City',
        'name': 'Des Moines'
      }, {
        '@type': 'City', 
        'name': 'Cedar Rapids'
      }, {
        '@type': 'City',
        'name': 'Iowa City'
      }],
      'hasCredential': [
        'PaperCut Certified Partner',
        'Uniflow Authorized Reseller', 
        'PrinterLogic Implementation Specialist'
      ]
    }
  }

  return (
    <>
      <SEO 
        title="About Iowa Print Solutions | Infomax Office Systems - 65+ Years Serving Iowa"
        description="Since 1958, Infomax Office Systems has been Iowa's trusted print management partner. Learn about our 65+ year history serving Des Moines, Cedar Rapids, Iowa City, and all of Iowa with PaperCut, Uniflow, and PrinterLogic solutions."
        keywords="About Infomax Office Systems, Iowa print management history, Iowa office technology since 1958, Des Moines print solutions, Cedar Rapids document management, Iowa business services history"
        canonicalUrl="https://iowaprintsolutions.com/about"
        schemaType="AboutPage"
      />

      <div className="min-h-screen bg-gray-50">
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  About Iowa Print Solutions Resources
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  This resource hub provides comprehensive information about print management solutions for Iowa organizations. 
                  When you're ready to implement PaperCut, Uniflow, or PrinterLogic, connect directly with certified specialists at Infomax Office Systems.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Infomax Office Systems has been serving Iowa businesses since 1958, providing expert office solutions including 
                  print management, copiers, and ongoing support. Our team holds certifications in all major print management 
                  platforms and understands the unique needs of Iowa organizations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700">Educational print management resources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700">Direct connection to Infomax Office Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700">Iowa-focused implementation support</span>
                  </div>
                </div>
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
                      <div className="text-sm text-gray-600">Iowa Clients via Infomax</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">15+</div>
                      <div className="text-sm text-gray-600">Years Infomax Software Solutions</div>
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

        {/* FAQ Section */}
        <AIOptimizedFAQ
          title="About Infomax Office Systems - Frequently Asked Questions"
          faqs={aboutFAQ}
        />

        <section className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Implement Print Solutions?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Connect with Infomax Office Systems to discuss your Iowa organization&apos;s print management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.infomaxoffice.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
                >
                  Visit Infomax Office Systems
                </a>
                <a
                  href="https://calendly.com/pearsondan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About