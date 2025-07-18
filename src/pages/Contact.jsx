import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const services = [
    'PaperCut Implementation',
    'Uniflow Solutions',
    'PrinterLogic Setup',
    'Print Security',
    'Cost Optimization',
    'General Consultation'
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

              <form onSubmit={handleSubmit} className="space-y-6">
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
                  disabled={submitted}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-green-600 text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  {submitted ? (
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
              </form>
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
  )
}

export default Contact