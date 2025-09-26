import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, X, Star, ArrowRight, Download, Calculator, Phone, Mail, Users, Shield, DollarSign, Zap } from 'lucide-react'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import ServiceSchema from '../components/ServiceSchema'

const PrintManagementComparison = () => {
  const [selectedFeature, setSelectedFeature] = useState('overview')
  
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Print Management Comparison', href: '/print-management-comparison' }
  ]

  const comparisonData = {
    overview: {
      title: 'Platform Overview',
      features: [
        { feature: 'Primary Strength', papercut: 'Cost Control & Quotas', uniflow: 'Document Workflows', printerlogic: 'Serverless Architecture' },
        { feature: 'Best Fit', papercut: 'Schools & Small-Medium Business', uniflow: 'Healthcare & Legal', printerlogic: 'Multi-Location Enterprises' },
        { feature: 'Implementation Time', papercut: '1-2 weeks', uniflow: '2-4 weeks', printerlogic: '1-3 weeks' },
        { feature: 'Iowa Market Share', papercut: 'Leading', uniflow: 'Strong in Healthcare', printerlogic: 'Growing Rapidly' }
      ]
    },
    features: {
      title: 'Feature Comparison',
      features: [
        { feature: 'Secure Print Release', papercut: true, uniflow: true, printerlogic: true },
        { feature: 'User Quotas', papercut: true, uniflow: true, printerlogic: true },
        { feature: 'Mobile Printing', papercut: true, uniflow: true, printerlogic: true },
        { feature: 'Advanced Workflows', papercut: false, uniflow: true, printerlogic: false },
        { feature: 'Serverless Architecture', papercut: false, uniflow: false, printerlogic: true },
        { feature: 'HIPAA Compliance', papercut: true, uniflow: true, printerlogic: true },
        { feature: 'Cost Tracking', papercut: true, uniflow: true, printerlogic: true },
        { feature: 'Badge Integration', papercut: true, uniflow: true, printerlogic: true }
      ]
    },
    pricing: {
      title: 'Pricing & ROI',
      features: [
        { feature: 'Starting Price (per user/year)', papercut: '$3-5', uniflow: '$8-12', printerlogic: '$6-10' },
        { feature: 'Implementation Cost', papercut: 'Low', uniflow: 'Medium-High', printerlogic: 'Medium' },
        { feature: 'Maintenance Overhead', papercut: 'Low', uniflow: 'Medium', printerlogic: 'Very Low' },
        { feature: 'Typical ROI Timeline', papercut: '3-6 months', uniflow: '6-9 months', printerlogic: '4-7 months' }
      ]
    }
  }

  const useCases = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'K-12 Schools & Universities',
      recommendation: 'PaperCut',
      reasoning: 'Student quotas, FERPA compliance, budget control',
      iowaExample: 'Iowa City School District saves $50K annually with PaperCut student printing management'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Healthcare Facilities',
      recommendation: 'uniFLOW',
      reasoning: 'HIPAA workflows, EHR integration, document security',
      iowaExample: 'UnityPoint Health Des Moines uses uniFLOW for secure patient record printing'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Multi-Location Businesses',
      recommendation: 'PrinterLogic',
      reasoning: 'Serverless architecture, centralized management, scalability',
      iowaExample: 'Casey\'s General Stores eliminated print servers statewide with PrinterLogic'
    }
  ]

  const decisionMatrix = [
    { criteria: 'Budget Conscious', papercut: 9, uniflow: 6, printerlogic: 7 },
    { criteria: 'Complex Workflows', papercut: 6, uniflow: 10, printerlogic: 5 },
    { criteria: 'Multi-Location', papercut: 7, uniflow: 6, printerlogic: 10 },
    { criteria: 'Healthcare/Legal', papercut: 7, uniflow: 10, printerlogic: 7 },
    { criteria: 'Education Sector', papercut: 10, uniflow: 6, printerlogic: 7 },
    { criteria: 'Minimal IT Overhead', papercut: 8, uniflow: 5, printerlogic: 10 }
  ]

  const renderComparisonValue = (value, type = 'text') => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-gray-400 mx-auto" />
      )
    }
    return <span className={type === 'highlight' ? 'font-semibold text-blue-600' : ''}>{value}</span>
  }

  return (
    <>
      <SEO 
        title="PaperCut vs uniFLOW vs PrinterLogic Comparison | Iowa Print Solutions"
        description="Compare PaperCut, uniFLOW, and PrinterLogic print management solutions. Expert analysis for Iowa businesses with pricing, features, and implementation guidance."
        keywords="PaperCut vs uniFLOW, PrinterLogic comparison, print management software comparison, Iowa print solutions comparison, best print management software"
        canonicalUrl="https://iowaprintsolutions.com/print-management-comparison"
      />

      <ServiceSchema 
        serviceName="Print Management Software Comparison & Consultation"
        description="Expert comparison and consultation services for PaperCut, uniFLOW, and PrinterLogic print management solutions. Helping Iowa businesses choose the right print management software."
        serviceType="Technology Consultation Service"
        offers={[
          {
            name: "Software Comparison Analysis",
            description: "Detailed comparison of print management solutions with Iowa business case studies"
          },
          {
            name: "Implementation Planning",
            description: "Custom implementation roadmaps based on business requirements and budget"
          },
          {
            name: "ROI Assessment",
            description: "Print cost analysis and return on investment projections for each solution"
          }
        ]}
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                PaperCut vs uniFLOW vs PrinterLogic
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Complete comparison guide for Iowa businesses choosing print management software. 
                Expert analysis with real Iowa case studies and implementation costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:(515) 237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Expert Consultation
                </a>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  <Download className="h-5 w-5 mr-2" />
                  Download Comparison Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Decision Tool */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quick Decision Guide
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find the right print management solution based on your Iowa business type and requirements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-blue-600 mb-6">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <div className="mb-4">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Recommended: {useCase.recommendation}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{useCase.reasoning}</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 italic">
                      <strong>Iowa Example:</strong> {useCase.iowaExample}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Comparison Table */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Detailed Feature Comparison
              </h2>
              <p className="text-lg text-gray-600">
                Interactive comparison across key decision criteria
              </p>
            </motion.div>

            {/* Comparison Tabs */}
            <div className="flex flex-wrap justify-center mb-8 space-x-2">
              {Object.entries(comparisonData).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setSelectedFeature(key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedFeature === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {data.title}
                </button>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                        {comparisonData[selectedFeature].title}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-lg">PaperCut</span>
                          <span className="text-xs text-gray-500">Cost Control Leader</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-lg">uniFLOW</span>
                          <span className="text-xs text-gray-500">Workflow Expert</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-lg">PrinterLogic</span>
                          <span className="text-xs text-gray-500">Serverless Innovation</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonData[selectedFeature].features.map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {item.feature}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 text-center">
                          {renderComparisonValue(item.papercut)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 text-center">
                          {renderComparisonValue(item.uniflow)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 text-center">
                          {renderComparisonValue(item.printerlogic)}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Matrix */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Decision Matrix Scoring
              </h2>
              <p className="text-lg text-gray-600">
                How each solution scores across key business criteria (1-10 scale)
              </p>
            </motion.div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                {decisionMatrix.map((criterion, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{criterion.criteria}</span>
                      <div className="flex space-x-4 text-sm">
                        <span className="text-blue-600 font-medium">PC: {criterion.papercut}/10</span>
                        <span className="text-green-600 font-medium">UF: {criterion.uniflow}/10</span>
                        <span className="text-purple-600 font-medium">PL: {criterion.printerlogic}/10</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${criterion.papercut * 10}%` }}
                        ></div>
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${criterion.uniflow * 10}%` }}
                        ></div>
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${criterion.printerlogic * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Overall Recommendations</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h4 className="font-bold text-blue-800">PaperCut</h4>
                      <p className="text-sm text-blue-600">Best for budget-conscious organizations and education</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-lg p-4">
                      <h4 className="font-bold text-green-800">uniFLOW</h4>
                      <p className="text-sm text-green-600">Ideal for healthcare, legal, and complex workflows</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-lg p-4">
                      <h4 className="font-bold text-purple-800">PrinterLogic</h4>
                      <p className="text-sm text-purple-600">Perfect for multi-location and serverless environments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Iowa Success Stories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Real Iowa Implementation Results
              </h2>
              <p className="text-lg text-gray-600">
                How Iowa businesses saved money and improved efficiency with each solution
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  solution: 'PaperCut',
                  client: 'Iowa City School District',
                  industry: 'K-12 Education',
                  savings: '$50,000 annually',
                  benefits: 'Student quota management, 60% reduction in printing waste, FERPA compliance',
                  timeline: '2 weeks implementation'
                },
                {
                  solution: 'uniFLOW',
                  client: 'UnityPoint Health',
                  industry: 'Healthcare System',
                  savings: '$75,000 annually',
                  benefits: 'HIPAA compliance, EHR integration, 80% faster document workflows',
                  timeline: '4 weeks implementation'
                },
                {
                  solution: 'PrinterLogic',
                  client: 'Casey\'s General Stores',
                  industry: 'Retail Chain',
                  savings: '$100,000 annually',
                  benefits: 'Eliminated 50 print servers, centralized management, 90% less IT overhead',
                  timeline: '6 weeks rollout'
                }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <Star className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="font-bold text-blue-600">{story.solution}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{story.client}</h3>
                  <p className="text-sm text-gray-600 mb-3">{story.industry}</p>
                  <div className="bg-green-100 p-3 rounded mb-3">
                    <p className="text-green-800 font-bold">{story.savings}</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">{story.benefits}</p>
                  <p className="text-blue-600 text-sm font-medium">{story.timeline}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Choose the Right Solution for Your Iowa Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get personalized recommendations based on your specific requirements and budget. 
                Our Iowa print management experts will guide you to the perfect solution.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Link
                  to="/services/papercut-iowa"
                  className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/20 transition-colors"
                >
                  <h3 className="font-bold mb-2">Explore PaperCut</h3>
                  <p className="text-sm opacity-80">Cost control & education focus</p>
                </Link>
                <Link
                  to="/services/uniflow-iowa"
                  className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/20 transition-colors"
                >
                  <h3 className="font-bold mb-2">Explore uniFLOW</h3>
                  <p className="text-sm opacity-80">Healthcare & workflow automation</p>
                </Link>
                <Link
                  to="/services/printerlogic-iowa"
                  className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/20 transition-colors"
                >
                  <h3 className="font-bold mb-2">Explore PrinterLogic</h3>
                  <p className="text-sm opacity-80">Serverless & multi-location</p>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:(515) 237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Expert Consultation
                </a>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate Your Savings
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PrintManagementComparison