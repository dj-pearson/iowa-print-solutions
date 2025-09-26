import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, DollarSign, TrendingDown, Users, Printer, Mail, Phone, Download, CheckCircle } from 'lucide-react'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

const PrintCostCalculator = () => {
  const [formData, setFormData] = useState({
    employees: '',
    pagesPerMonth: '',
    costPerPage: '0.05',
    organizationType: 'business',
    currentSolution: 'none',
    name: '',
    email: '',
    company: '',
    phone: ''
  })
  
  const [results, setResults] = useState(null)
  const [showLeadForm, setShowLeadForm] = useState(false)
  
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Print Cost Calculator', href: '/print-cost-calculator' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const calculateSavings = () => {
    const employees = parseInt(formData.employees) || 0
    const pagesPerMonth = parseInt(formData.pagesPerMonth) || 0
    const costPerPage = parseFloat(formData.costPerPage) || 0.05
    
    // Current monthly cost
    const currentMonthlyCost = pagesPerMonth * costPerPage
    const currentYearlyCost = currentMonthlyCost * 12
    
    // Estimated savings based on organization type and solution
    let wastageReduction = 0.4 // 40% default waste reduction
    let efficiencyGain = 0.2 // 20% efficiency improvement
    
    switch (formData.organizationType) {
      case 'education':
        wastageReduction = 0.55 // Schools see higher waste reduction
        efficiencyGain = 0.25
        break
      case 'healthcare':
        wastageReduction = 0.35
        efficiencyGain = 0.3 // Higher efficiency due to workflows
        break
      case 'manufacturing':
        wastageReduction = 0.45
        efficiencyGain = 0.25
        break
    }
    
    // Calculate potential savings
    const wasteReductionSavings = currentYearlyCost * wastageReduction
    const efficiencySavings = currentYearlyCost * efficiencyGain
    const totalAnnualSavings = wasteReductionSavings + efficiencySavings
    
    // Implementation costs (estimated)
    const implementationCost = employees * 15 // $15 per user average
    const licenseCoser = employees * 4 * 12 // $4 per user per month average
    const totalFirstYearCost = implementationCost + licenseCoser
    
    // ROI calculation
    const netSavings = totalAnnualSavings - totalFirstYearCost
    const roiMonths = totalFirstYearCost / (totalAnnualSavings / 12)
    
    setResults({
      currentMonthlyCost: currentMonthlyCost.toFixed(0),
      currentYearlyCost: currentYearlyCost.toFixed(0),
      wasteReductionSavings: wasteReductionSavings.toFixed(0),
      efficiencySavings: efficiencySavings.toFixed(0),
      totalAnnualSavings: totalAnnualSavings.toFixed(0),
      implementationCost: implementationCost.toFixed(0),
      licenseCoser: licenseCoser.toFixed(0),
      netSavings: netSavings.toFixed(0),
      roiMonths: Math.ceil(roiMonths),
      employees,
      pagesPerMonth: pagesPerMonth.toLocaleString()
    })
    
    setShowLeadForm(true)
  }

  const submitLeadForm = async (e) => {
    e.preventDefault()
    // In a real implementation, this would submit to your CRM/email service
    alert('Thank you! We\'ll send you a detailed analysis and contact you within 24 hours.')
  }

  const organizationTypes = [
    { value: 'business', label: 'General Business' },
    { value: 'education', label: 'K-12 School/University' },
    { value: 'healthcare', label: 'Healthcare/Medical' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'government', label: 'Government Agency' }
  ]

  return (
    <>
      <SEO 
        title="Print Cost Calculator | Calculate Iowa Print Management Savings"
        description="Free print cost calculator for Iowa businesses. Calculate potential savings with PaperCut, uniFLOW, and PrinterLogic print management solutions. Get instant ROI analysis."
        keywords="print cost calculator, print management savings calculator, Iowa print costs, printing ROI calculator, print management cost analysis"
        canonicalUrl="https://iowaprintsolutions.com/print-cost-calculator"
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Calculator className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Print Cost Calculator
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Discover how much your Iowa business can save with professional print management. 
                Get instant ROI analysis and personalized recommendations.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Calculator Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Calculate Your Potential Savings
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees
                    </label>
                    <input
                      type="number"
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pages Printed Per Month
                    </label>
                    <input
                      type="number"
                      name="pagesPerMonth"
                      value={formData.pagesPerMonth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 10000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Cost Per Page
                    </label>
                    <select
                      name="costPerPage"
                      value={formData.costPerPage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="0.03">$0.03 (Black & White)</option>
                      <option value="0.05">$0.05 (Mixed B&W/Color)</option>
                      <option value="0.08">$0.08 (Color Heavy)</option>
                      <option value="0.12">$0.12 (Premium/Photo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Type
                    </label>
                    <select
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {organizationTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={calculateSavings}
                    className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Calculator className="h-5 w-5 mr-2" />
                    Calculate My Savings
                  </button>
                </div>
              </motion.div>

              {/* Results Display */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {!results ? (
                  <div className="bg-blue-50 p-8 rounded-lg text-center">
                    <DollarSign className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Ready to See Your Savings?
                    </h3>
                    <p className="text-gray-600">
                      Fill out the form to calculate your potential print management savings. 
                      Results are based on real Iowa business implementations.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Current Costs */}
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                      <h3 className="text-lg font-bold text-red-800 mb-4">Current Print Costs</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Monthly</p>
                          <p className="text-2xl font-bold text-red-700">${results.currentMonthlyCost}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Yearly</p>
                          <p className="text-2xl font-bold text-red-700">${results.currentYearlyCost}</p>
                        </div>
                      </div>
                    </div>

                    {/* Potential Savings */}
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <h3 className="text-lg font-bold text-green-800 mb-4">Potential Annual Savings</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Waste Reduction:</span>
                          <span className="font-bold text-green-700">${results.wasteReductionSavings}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Efficiency Gains:</span>
                          <span className="font-bold text-green-700">${results.efficiencySavings}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between">
                          <span className="font-bold text-gray-900">Total Savings:</span>
                          <span className="text-2xl font-bold text-green-600">${results.totalAnnualSavings}</span>
                        </div>
                      </div>
                    </div>

                    {/* ROI Analysis */}
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h3 className="text-lg font-bold text-blue-800 mb-4">Investment & ROI</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Implementation:</span>
                          <span className="font-medium">${results.implementationCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Annual Licenses:</span>
                          <span className="font-medium">${results.licenseCoser}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Net First Year:</span>
                          <span className="font-bold text-green-600">${results.netSavings}</span>
                        </div>
                        <div className="bg-blue-100 p-3 rounded">
                          <p className="text-center">
                            <span className="font-bold text-blue-800">ROI achieved in {results.roiMonths} months</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Summary Stats */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-3">Your Organization Summary:</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Employees:</span>
                          <span className="ml-2 font-medium">{results.employees}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Monthly Pages:</span>
                          <span className="ml-2 font-medium">{results.pagesPerMonth}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Lead Form */}
                {showLeadForm && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white border-2 border-blue-200 p-6 rounded-lg"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Get Detailed Analysis & Expert Consultation
                    </h3>
                    <form onSubmit={submitLeadForm} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address"
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
                          placeholder="Company/Organization"
                          required
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone Number"
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          type="submit"
                          className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                        >
                          <Mail className="h-5 w-5 mr-2" />
                          Get Detailed Analysis
                        </button>
                        <a
                          href="tel:(515) 237-2352"
                          className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                        >
                          <Phone className="h-5 w-5 mr-2" />
                          Call Now
                        </a>
                      </div>
                    </form>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Iowa Businesses Choose Professional Print Management
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real benefits experienced by hundreds of Iowa organizations across all industries
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingDown className="h-8 w-8" />,
                  title: 'Average 40-60% Cost Reduction',
                  description: 'Iowa businesses reduce printing costs through waste elimination, user quotas, and efficient policies'
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: 'Improved User Accountability',
                  description: 'Secure print release and user tracking create responsible printing behavior across your organization'
                },
                {
                  icon: <Printer className="h-8 w-8" />,
                  title: 'Streamlined IT Management',
                  description: 'Centralized print management reduces IT overhead and eliminates print server maintenance'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm text-center"
                >
                  <div className="text-blue-600 mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Saving on Print Costs?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a personalized implementation plan and detailed ROI analysis from our Iowa print management experts.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                'Free consultation and site assessment',
                'Detailed savings analysis and timeline',
                'No-obligation pilot program available'
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(515) 237-2352"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (515) 237-2352
              </a>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                <Download className="h-5 w-5 mr-2" />
                Download ROI Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PrintCostCalculator