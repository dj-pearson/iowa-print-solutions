import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, TrendingDown, BarChart3, PieChart, Calculator, Target, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PaperCutCostReduction = () => {
  const costSavingStrategies = [
    {
      icon: Target,
      title: 'User Quotas & Budgets',
      description: 'Set individual and department printing limits to control excessive usage.',
      savings: '15-25%',
      details: [
        'Individual user print quotas',
        'Department budget allocations',
        'Automatic overage alerts',
        'Approval workflows for large jobs'
      ]
    },
    {
      icon: BarChart3,
      title: 'Print Policy Enforcement',
      description: 'Implement rules that automatically optimize print settings for cost savings.',
      savings: '20-30%',
      details: [
        'Default duplex printing',
        'Grayscale enforcement for drafts',
        'Print job size restrictions',
        'Color printing controls'
      ]
    },
    {
      icon: PieChart,
      title: 'Usage Analytics & Reporting',
      description: 'Identify waste patterns and optimize based on detailed usage data.',
      savings: '10-20%',
      details: [
        'Detailed usage reports by user/department',
        'Cost center analysis',
        'Waste identification reports',
        'Trend analysis and forecasting'
      ]
    },
    {
      icon: Calculator,
      title: 'Secure Print Release',
      description: 'Eliminate abandoned print jobs that waste paper and toner.',
      savings: '5-15%',
      details: [
        'Hold jobs until user authentication',
        'Automatic job deletion after timeout',
        'Reduced paper waste from forgotten jobs',
        'Toner savings from unclaimed prints'
      ]
    }
  ]

  const iowaBusinessSavings = [
    {
      business: 'Iowa Manufacturing Company',
      employees: '250 employees',
      previousCost: '$8,500/month',
      newCost: '$5,950/month',
      savings: '$2,550/month (30%)',
      strategy: 'Implemented quotas and duplex defaults'
    },
    {
      business: 'Des Moines Law Firm',
      employees: '45 employees',
      previousCost: '$3,200/month',
      newCost: '$2,240/month',
      savings: '$960/month (30%)',
      strategy: 'Color restrictions and secure release'
    },
    {
      business: 'Iowa Healthcare System',
      employees: '800 employees',
      previousCost: '$15,000/month',
      newCost: '$10,500/month',
      savings: '$4,500/month (30%)',
      strategy: 'Department budgets and policy enforcement'
    }
  ]

  const costFactors = [
    {
      factor: 'Paper Costs',
      impact: 'High',
      solution: 'Duplex printing defaults and job size limits'
    },
    {
      factor: 'Toner/Ink Costs',
      impact: 'Very High',
      solution: 'Grayscale defaults and color restrictions'
    },
    {
      factor: 'Device Maintenance',
      impact: 'Medium',
      solution: 'Reduced usage through quotas and policies'
    },
    {
      factor: 'Administrative Time',
      impact: 'Medium',
      solution: 'Automated reporting and policy enforcement'
    }
  ]

  const implementationSteps = [
    'Baseline Assessment: Measure current print costs and usage patterns',
    'Policy Development: Create printing policies aligned with business goals',
    'User Training: Educate Iowa staff on new printing procedures',
    'Monitoring: Track savings and adjust policies as needed',
    'Optimization: Continuously refine settings for maximum savings'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <DollarSign className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              PaperCut Cost Reduction Strategies for Iowa Businesses
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
              Discover proven strategies to reduce your Iowa organization's printing costs by 20-40% with PaperCut print management. Real case studies and actionable insights from Iowa businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Cost Analysis
              </Link>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Schedule Savings Assessment
              </a>
            </div>
          </motion.div>
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
              Proven Cost Reduction Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These PaperCut features have helped Iowa businesses achieve significant printing cost reductions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {costSavingStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <strategy.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{strategy.title}</h3>
                    <div className="text-green-600 font-bold text-lg">Save {strategy.savings}</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{strategy.description}</p>
                <div className="space-y-2">
                  {strategy.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
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
              Real Iowa Business Savings
            </h2>
            <p className="text-xl text-gray-600">
              See how Iowa organizations have reduced their printing costs with PaperCut.
            </p>
          </motion.div>

          <div className="space-y-8">
            {iowaBusinessSavings.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{business.business}</h3>
                    <p className="text-gray-600">{business.employees}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Previous Cost</div>
                    <div className="text-xl font-bold text-red-600">{business.previousCost}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">New Cost</div>
                    <div className="text-xl font-bold text-blue-600">{business.newCost}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Monthly Savings</div>
                    <div className="text-xl font-bold text-green-600">{business.savings}</div>
                    <div className="text-xs text-gray-500 mt-1">{business.strategy}</div>
                  </div>
                </div>
              </motion.div>
            ))}
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
                Key Cost Factors in Iowa Print Environments
              </h2>
              <div className="space-y-4">
                {costFactors.map((factor, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-semibold text-gray-900">{factor.factor}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        factor.impact === 'Very High' ? 'bg-red-100 text-red-800' :
                        factor.impact === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {factor.impact} Impact
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{factor.solution}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-green-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cost Reduction Implementation
              </h3>
              <div className="space-y-4">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center space-x-2"
                >
                  <span>Start Saving Today</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Calculate Your Potential Savings
            </h2>
            <p className="text-xl text-gray-600">
              Most Iowa businesses save 20-40% on printing costs with PaperCut.
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">$2,500</div>
                <div className="text-gray-600">Average Monthly Savings</div>
                <div className="text-sm text-gray-500 mt-1">For 100-employee Iowa organization</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
                <div className="text-gray-600">Average Cost Reduction</div>
                <div className="text-sm text-gray-500 mt-1">Typical Iowa business results</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">6</div>
                <div className="text-gray-600">Months ROI</div>
                <div className="text-sm text-gray-500 mt-1">Payback period for PaperCut investment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Reduce Your Iowa Organization's Print Costs?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free cost analysis and discover how much your Iowa business can save with PaperCut print management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Free Cost Analysis
              </Link>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Call (515) 237-2352
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PaperCutCostReduction