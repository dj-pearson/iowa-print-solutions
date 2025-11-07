import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import SEO from '../components/SEO'
import AIOptimizedFAQ from '../components/AIOptimizedFAQ'
import { SmartCTA } from '../components/PerformanceComponents'
import { PhoneTracker, EmailTracker, FormTracker } from '../components/AnalyticsComponents'
import { trackFormSubmission } from '../utils/analytics'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    // Track form submission
    trackFormSubmission('contact_form', 'Contact Page')

    try {
      const response = await fetch('https://formspree.io/f/mwpqlzdw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        })
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to send message')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message || 'Failed to send message. Please try again.')
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const services = [
    'PaperCut Implementation',
    'Uniflow Solutions',
    'PrinterLogic Setup',
    'Print Security',
    'Cost Optimization',
    'General Consultation'
  ]

  const contactFAQ = [
    {
      question: 'How quickly can Infomax Office Systems respond to Iowa businesses?',
      answer: 'Infomax Office Systems provides same-day response for all Iowa inquiries, typically within 2-4 hours during business hours. For urgent technical issues, we offer 24/7 emergency support. Our Iowa-based team ensures faster response times than national providers, with on-site service available throughout the state within 24-48 hours.'
    },
    {
      question: 'What is included in a free consultation from Infomax Office Systems?',
      answer: 'Your free consultation includes a complete print environment assessment, cost analysis showing potential savings, custom solution recommendations based on your specific needs, implementation timeline and pricing, and a no-obligation written proposal. This typically takes 60-90 minutes and can be conducted on-site or virtually.'
    },
    {
      question: 'Does Infomax Office Systems charge for initial consultations in Iowa?',
      answer: 'No, all initial consultations are completely free for Iowa businesses. This includes the assessment, recommendations, and written proposal. We believe in demonstrating our expertise and value before asking for any investment from Iowa organizations.'
    },
    {
      question: 'What areas of Iowa does Infomax Office Systems serve?',
      answer: 'Infomax Office Systems serves all 99 Iowa counties with comprehensive print management services. We have the strongest presence in Des Moines metro, Cedar Rapids, Iowa City, Davenport, Waterloo, Council Bluffs, Dubuque, Sioux City, and Ames, but provide statewide coverage with on-site service and local support throughout Iowa.'
    },
    {
      question: 'How can Iowa businesses get emergency print management support?',
      answer: 'Iowa businesses can reach emergency support by calling (515) 237-2352 and selecting the emergency option, or emailing DPearson@InfomaxOffice.com with &apos;URGENT&apos; in the subject line. We provide 24/7 emergency response for critical print infrastructure issues, with remote troubleshooting available immediately and on-site service within hours when needed.'
    },
    {
      question: 'What should Iowa businesses expect after contacting Infomax Office Systems?',
      answer: 'After initial contact, you can expect: acknowledgment within 2-4 hours during business hours, scheduling of your free consultation within 1-2 business days, detailed assessment and recommendations within one week, and a comprehensive written proposal with timeline and pricing. We maintain regular communication throughout the entire process.'
    }
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(515) 237-2352',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'DPearson@InfomaxOffice.com',
      description: 'Send us your questions anytime'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Statewide Iowa',
      description: 'Serving all Iowa businesses'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri 8AM-6PM',
      description: '24/7 emergency support available'
    }
  ]

  const seoSchema = [
    {
      '@type': 'ContactPage'
    },
    {
      '@type': 'LocalBusiness',
      'name': 'Infomax Office Systems',
      'alternateName': 'Iowa Print Solutions',
      'description': 'Expert print management solutions for Iowa businesses since 1958',
      'telephone': '515-237-2352',
      'email': 'gfleschinfomaxoffice@gmail.com',
      'url': 'https://iowaprintsolutions.com',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Des Moines',
        'addressRegion': 'IA',
        'postalCode': '50309',
        'addressCountry': 'US'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '41.5868',
        'longitude': '-93.6250'
      },
      'areaServed': [
        {
          '@type': 'State',
          'name': 'Iowa'
        },
        {
          '@type': 'City',
          'name': 'Des Moines',
          'containedInPlace': 'Iowa'
        },
        {
          '@type': 'City',
          'name': 'Cedar Rapids',
          'containedInPlace': 'Iowa'
        },
        {
          '@type': 'City',
          'name': 'Iowa City',
          'containedInPlace': 'Iowa'
        },
        {
          '@type': 'City',
          'name': 'Davenport',
          'containedInPlace': 'Iowa'
        }
      ],
      'serviceType': [
        'Print Management Implementation',
        'PaperCut Services',
        'uniFLOW Solutions',
        'PrinterLogic Deployment'
      ],
      'openingHours': 'Mo-Fr 08:00-18:00',
      'foundingDate': '1958',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '515-237-2352',
        'contactType': 'customer service',
        'availableLanguage': 'English',
        'areaServed': 'Iowa'
      }
    }
  ]

  return (
    <>
      <SEO
        title="Contact Iowa Print Solutions 2025 | Call (515) 237-2352 - Free Consultation, 2-4 Hour Response"
        description="Contact Infomax Office Systems for print management solutions. Call (515) 237-2352 or email DPearson@InfomaxOffice.com. Free consultations, 2-4 hour response time. 24/7 emergency support. Serving all 99 Iowa counties: Des Moines, Cedar Rapids, Iowa City, Davenport, Waterloo. PaperCut, uniFLOW & PrinterLogic experts since 1958."
        keywords="contact Iowa print solutions 2025, Infomax Office Systems contact, Iowa print management consultation, PaperCut Iowa contact, print solutions Des Moines phone, Cedar Rapids print services contact, Iowa document management consultation, free print assessment Iowa, 515-237-2352, DPearson InfomaxOffice"
        canonicalUrl="https://iowaprintsolutions.com/contact"
        schemaType="ContactPage"
        additionalSchema={seoSchema}
      />
      
      <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Iowa's Print Solutions Experts
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to optimize your print infrastructure? Get in touch with our Iowa-based team for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get Your Free Consultation
              </h2>

              <FormTracker 
                formType="contact_form"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Honeypot field for spam protection - hidden from users */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                {/* Success Message */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-md p-4 mb-6"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <h3 className="text-sm font-medium text-green-800">
                          Message sent successfully!
                        </h3>
                        <p className="text-sm text-green-700 mt-1">
                          Thank you for contacting us. We'll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-md p-4 mb-6"
                  >
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <div>
                        <h3 className="text-sm font-medium text-red-800">
                          Failed to send message
                        </h3>
                        <p className="text-sm text-red-700 mt-1">
                          {errorMessage || 'Please try again or contact us directly.'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(515) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your print management needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 ${
                    status === 'submitting'
                      ? 'bg-blue-400 cursor-not-allowed'
                      : status === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </FormTracker>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-lg text-blue-600 font-medium">{info.details}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Why Choose Iowa Print Solutions?
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Iowa-based team with local expertise</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>15+ years of print management experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Certified in PaperCut, Uniflow & PrinterLogic</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>24/7 support and emergency service</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Free Consultation Includes:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Print environment assessment</li>
                  <li>• Cost analysis and savings projection</li>
                  <li>• Custom solution recommendations</li>
                  <li>• Implementation timeline and pricing</li>
                  <li>• No-obligation proposal</li>
                </ul>
              </div>
            </motion.div>
            </div>
          </div>
        </section>
        
        {/* Smart CTA Section */}
        <section className="py-8 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SmartCTA 
              primaryText="Ready to Transform Your Print Environment?"
              secondaryText="Get a free assessment and discover how much you could save"
              ctaText="Schedule Free Consultation"
              ctaLink="/print-cost-calculator"
              variant="conversion"
            />
          </div>
        </section>      {/* FAQ Section */}
      <AIOptimizedFAQ
        title="Contact & Support FAQ - Get Answers About Working with Us"
        faqs={contactFAQ}
      />

      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Optimize Your Print Infrastructure?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 500+ Iowa businesses that trust us with their print management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5152372352"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now: (515) 237-2352</span>
              </a>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>Book a Time With Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Contact