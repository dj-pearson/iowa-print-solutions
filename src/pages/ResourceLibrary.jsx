import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, CheckCircle, Mail, Phone, BookOpen, Calculator, Shield, Users } from 'lucide-react'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

const ResourceLibrary = () => {
  const [selectedResource, setSelectedResource] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    phone: ''
  })

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Download Library', href: '/resource-library' }
  ]

  const resources = [
    {
      id: 'print-management-buyers-guide',
      title: 'Iowa Print Management Buyer\'s Guide',
      description: '24-page comprehensive guide comparing PaperCut, uniFLOW, and PrinterLogic with Iowa-specific case studies and implementation costs.',
      pages: 24,
      category: 'Buyer\'s Guide',
      icon: <BookOpen className="h-8 w-8" />,
      benefits: [
        'Side-by-side feature comparison of all major platforms',
        'Real Iowa business case studies with ROI data',
        'Implementation timeline and cost breakdowns',
        'Industry-specific recommendations and best practices'
      ]
    },
    {
      id: 'healthcare-hipaa-compliance-checklist',
      title: 'HIPAA Print Compliance Checklist for Iowa Healthcare',
      description: 'Essential checklist and implementation guide for Iowa healthcare facilities to achieve HIPAA compliance with print management.',
      pages: 12,
      category: 'Healthcare',
      icon: <Shield className="h-8 w-8" />,
      benefits: [
        'Complete HIPAA compliance requirements for printing',
        'Step-by-step implementation checklist',
        'Iowa healthcare facility case studies',
        'Audit preparation and documentation guidelines'
      ]
    },
    {
      id: 'k12-print-management-toolkit',
      title: 'K-12 Print Management Toolkit',
      description: 'Complete implementation toolkit for Iowa school districts including policies, training materials, and cost reduction strategies.',
      pages: 18,
      category: 'Education',
      icon: <Users className="h-8 w-8" />,
      benefits: [
        'Ready-to-use print policies for students and staff',
        'Training materials and user guides',
        'Budget planning and cost allocation templates',
        'FERPA compliance guidelines and procedures'
      ]
    },
    {
      id: 'print-cost-reduction-guide',
      title: 'Ultimate Print Cost Reduction Guide',
      description: 'Proven strategies used by Iowa businesses to reduce printing costs by 40-60% with real implementation examples.',
      pages: 16,
      category: 'Cost Reduction',
      icon: <Calculator className="h-8 w-8" />,
      benefits: [
        'Step-by-step cost reduction methodology',
        'User quota and policy best practices',
        'Waste elimination techniques and monitoring',
        'ROI calculation templates and tracking tools'
      ]
    },
    {
      id: 'print-security-best-practices',
      title: 'Iowa Business Print Security Best Practices',
      description: 'Comprehensive security guide covering secure print release, document encryption, and compliance requirements for Iowa businesses.',
      pages: 14,
      category: 'Security',
      icon: <Shield className="h-8 w-8" />,
      benefits: [
        'Print security threat assessment and mitigation',
        'Secure print release implementation guide',
        'Access control and user authentication strategies',
        'Compliance requirements for different Iowa industries'
      ]
    },
    {
      id: 'roi-calculator-spreadsheet',
      title: 'Print Management ROI Calculator',
      description: 'Advanced Excel spreadsheet with pre-built formulas to calculate print management ROI for any Iowa organization size.',
      pages: 1,
      category: 'Tool',
      icon: <Calculator className="h-8 w-8" />,
      benefits: [
        'Pre-built ROI calculation formulas',
        'Multiple scenario planning capabilities',
        'Industry-specific cost benchmarks',
        'Implementation timeline and milestone tracking'
      ]
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDownload = (resource) => {
    setSelectedResource(resource)
    // In a real implementation, this would trigger the download and send lead data to CRM
    setTimeout(() => {
      alert(`Thank you! Your download will begin shortly. Check your email for the link to "${resource.title}".`)
      setSelectedResource(null)
      setFormData({
        name: '',
        email: '',
        company: '',
        title: '',
        phone: ''
      })
    }, 1000)
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (selectedResource) {
      handleDownload(selectedResource)
    }
  }

  return (
    <>
      <SEO 
        title="Iowa Print Management Resource Library | Free Downloads & Guides"
        description="Free print management resources for Iowa businesses. Download buyer's guides, compliance checklists, cost calculators, and implementation toolkits."
        keywords="print management resources, Iowa print management guides, print management downloads, HIPAA print compliance, K-12 print management toolkit"
        canonicalUrl="https://iowaprintsolutions.com/resource-library"
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Download className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Iowa Print Management Resource Library
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Free guides, checklists, and tools to help Iowa businesses optimize their print management. 
                Download expert resources created specifically for Iowa organizations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Expert Resources for Every Iowa Business Need
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive guides and tools developed from real Iowa implementations 
                and trusted by hundreds of local businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-blue-600 mr-3">{resource.icon}</div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {resource.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {resource.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-xs text-gray-500">
                      {resource.pages} pages • PDF Format
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Includes:</h4>
                    <ul className="space-y-1">
                      {resource.benefits.slice(0, 3).map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start text-xs text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => setSelectedResource(resource)}
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Free Download
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Modal */}
        {selectedResource && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center mb-6">
                <div className="text-blue-600 mr-3">{selectedResource.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedResource.title}
                  </h3>
                  <p className="text-gray-600">{selectedResource.category} • {selectedResource.pages} pages</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {selectedResource.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={submitForm} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address *"
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company/Organization *"
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Your Title"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Your privacy matters.</strong> We'll send you the download link and occasionally 
                    share relevant Iowa print management insights. Unsubscribe anytime.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Resource
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedResource(null)}
                    className="px-6 py-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Iowa Businesses Trust Our Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Created from real implementations across hundreds of Iowa organizations
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  stat: '500+',
                  label: 'Iowa Implementations',
                  description: 'Real data from actual deployments'
                },
                {
                  stat: '15+',
                  label: 'Years Experience',
                  description: 'Deep Iowa market knowledge'
                },
                {
                  stat: '100%',
                  label: 'Free Resources',
                  description: 'No cost, no strings attached'
                },
                {
                  stat: '24hr',
                  label: 'Expert Followup',
                  description: 'Personal consultation available'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{item.label}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Personalized Guidance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our Iowa print management experts are available to discuss your specific needs 
              and provide customized recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(515) 237-2352"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (515) 237-2352
              </a>
              <a
                href="mailto:gfleschinfomaxoffice@gmail.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ResourceLibrary