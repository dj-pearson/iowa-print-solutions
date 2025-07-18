import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, DollarSign, Target, TrendingDown, CheckCircle, ArrowRight, Calculator, PieChart } from 'lucide-react'
import { Link } from 'react-router-dom'

const UniflowCostTracking = () => {
  const costTrackingFeatures = [
    {
      icon: BarChart3,
      title: 'Detailed Usage Analytics',
      description: 'Comprehensive tracking of all print, scan, and device usage across your Iowa organization.',
      capabilities: [
        'Real-time usage monitoring',
        'User and department breakdowns',
        'Device utilization reports',
        'Historical trend analysis',
        'Cost per page calculations'
      ]
    },
    {
      icon: Target,
      title: 'Budget Management',
      description: 'Set and enforce budgets at user, department, and organizational levels.',
      capabilities: [
        'Flexible budget allocation',
        'Automatic overage alerts',
        'Approval workflows for overages',
        'Budget rollover options',
        'Multi-level cost centers'
      ]
    },
    {
      icon: Calculator,
      title: 'Cost Allocation',
      description: 'Accurate cost allocation and chargeback capabilities for departments and projects.',
      capabilities: [
        'Automated cost calculations',
        'Project-based billing',
        'Client chargeback reports',
        'Custom cost rates',
        'Integration with accounting systems'
      ]
    },
    {
      icon: PieChart,
      title: 'Advanced Reporting',
      description: 'Comprehensive reporting suite with customizable dashboards and automated delivery.',
      capabilities: [
        'Executive dashboards',
        'Automated report delivery',
        'Custom report builder',
        'Compliance reporting',
        'ROI analysis tools'
      ]
    }
  ]

  const costSavingStrategies = [
    {
      strategy: 'User Accountability',
      description: 'Detailed user tracking creates awareness and reduces wasteful printing',
      savings: '15-20%',
      implementation: 'Enable user authentication and detailed usage reporting'
    },
    {
      strategy: 'Department Budgets',
      description: 'Budget limits encourage responsible usage and prevent overages',
      savings: '20-25%',
      implementation: 'Set department-specific budgets with approval workflows'
    },
    {
      strategy: 'Device Optimization',
      description: 'Usage analytics help optimize device placement and configuration',
      savings: '10-15%',
      implementation: 'Analyze device utilization and consolidate underused equipment'
    },
    {
      strategy: 'Policy Enforcement',
      description: 'Automated policies reduce color printing and encourage duplex',
      savings: '25-30%',
      implementation: 'Configure print policies and cost-aware defaults'
    }
  ]

  const reportingCapabilities = [
    {
      category: 'Executive Reports',
      reports: [
        'Total cost of ownership analysis',
        'Department comparison reports',
        'Cost reduction tracking',
        'ROI dashboard',
        'Trend analysis summaries'
      ]
    },
    {
      category: 'Operational Reports',
      reports: [
        'Device utilization reports',
        'User activity summaries',
        'Print volume analysis',
        'Queue performance metrics',
        'Maintenance scheduling reports'
      ]
    },
    {
      category: 'Financial Reports',
      reports: [
        'Cost center breakdowns',
        'Budget vs. actual reports',
        'Chargeback statements',
        'Project cost allocation',
        'Vendor spend analysis'
      ]
    },
    {
      category: 'Compliance Reports',
      reports: [
        'Audit trail reports',
        'Security incident summaries',
        'Data retention compliance',
        'Regulatory requirement tracking',
        'Policy violation reports'
      ]
    }
  ]

  const iowaBusinessExamples = [
    {
      business: 'Iowa Hospital System',
      employees: '1,200 staff',
      challenge: 'Uncontrolled printing costs across multiple departments',
      solution: 'Implemented Uniflow cost tracking with department budgets',
      results: {
        cost_reduction: '32%',
        monthly_savings: '$4,800',
        additional_benefits: 'Improved HIPAA compliance and audit trails'
      }
    },
    {
      business: 'Des Moines Law Firm',
      employees: '85 attorneys and staff',
      challenge: 'Client billing for document production costs',
      solution: 'Deployed project-based cost allocation and chargeback system',
      results: {
        cost_reduction: '18%',
        monthly_savings: '$1,200',
        additional_benefits: 'Accurate client billing and improved profitability'
      }
    },
    {
      business: 'Iowa Manufacturing Company',
      employees: '450 employees',
      challenge: 'High printing costs and no visibility into usage patterns',
      solution: 'Full Uniflow implementation with detailed analytics',
      results: {
        cost_reduction: '28%',
        monthly_savings: '$3,400',
        additional_benefits: 'Optimized device fleet and reduced IT support'
      }
    }
  ]

  const implementationPhases = [
    {
      phase: 'Assessment & Planning',
      duration: '1-2 weeks',
      activities: [
        'Current cost analysis',
        'Usage pattern assessment',
        'Cost center definition',
        'Budget planning',
        'Reporting requirements gathering'
      ]
    },
    {
      phase: 'System Configuration',
      duration: '2-3 weeks',
      activities: [
        'Uniflow server setup',
        'Cost tracking configuration',
        'Budget and policy setup',
        'Report template creation',
        'Integration with accounting systems'
      ]
    },
    {
      phase: 'User Deployment',
      duration: '2-4 weeks',
      activities: [
        'User account provisioning',
        'Authentication setup',
        'Training delivery',
        'Initial monitoring',
        'Fine-tuning and optimization'
      ]
    },
    {
      phase: 'Optimization & Reporting',
      duration: 'Ongoing',
      activities: [
        'Monthly cost reviews',
        'Budget adjustments',
        'Policy refinements',
        'Report automation',
        'Continuous improvement'
      ]
    }
  ]

  const costFactors = [
    {
      factor: 'Paper Consumption',
      tracking: 'Page-level tracking with paper type and size',
      optimization: 'Duplex defaults and job size limits'
    },
    {
      factor: 'Toner/Ink Usage',
      tracking: 'Color vs. mono tracking with coverage estimation',
      optimization: 'Color restrictions and grayscale policies'
    },
    {
      factor: 'Device Maintenance',
      tracking: 'Click-based maintenance cost allocation',
      optimization: 'Predictive maintenance and usage optimization'
    },
    {
      factor: 'Energy Consumption',
      tracking: 'Device power usage monitoring',
      optimization: 'Sleep mode policies and device consolidation'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-20">
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
              Uniflow Cost Tracking & Management for Iowa Organizations
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
              Gain complete visibility and control over your print costs with Uniflow's comprehensive cost tracking solution. Advanced analytics, budget management, and automated reporting for Iowa businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Cost Analysis
              </Link>
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Schedule Cost Review
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
              Comprehensive Cost Tracking Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uniflow provides detailed visibility into all aspects of your print environment costs, enabling data-driven decisions and significant savings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {costTrackingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <feature.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Cost Reduction Strategies
            </h2>
            <p className="text-xl text-gray-600">
              Real strategies that deliver measurable cost savings for Iowa organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {costSavingStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{strategy.strategy}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {strategy.savings} Savings
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{strategy.description}</p>
                <div className="border-l-4 border-amber-500 pl-4">
                  <p className="text-sm text-gray-600 font-medium">Implementation:</p>
                  <p className="text-sm text-gray-600">{strategy.implementation}</p>
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
              Comprehensive Reporting Suite
            </h2>
            <p className="text-xl text-gray-600">
              Detailed reports and analytics to support decision-making at every level of your Iowa organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {reportingCapabilities.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.reports.map((report, reportIndex) => (
                    <div key={reportIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{report}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Iowa Business Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how Uniflow cost tracking has delivered measurable results for Iowa organizations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {iowaBusinessExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{example.business}</h3>
                    <p className="text-gray-600 mb-3">{example.employees}</p>
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900 mb-1">Challenge:</h4>
                      <p className="text-sm text-gray-700">{example.challenge}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-700 mb-4">{example.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Results:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Cost Reduction:</span>
                        <span className="text-sm font-medium text-green-600">{example.results.cost_reduction}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Monthly Savings:</span>
                        <span className="text-sm font-medium text-green-600">{example.results.monthly_savings}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">{example.results.additional_benefits}</p>
                    </div>
                  </div>
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
              Cost Factor Tracking & Optimization
            </h2>
            <p className="text-xl text-gray-600">
              Detailed tracking of every cost component enables targeted optimization strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {costFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{factor.factor}</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Tracking Capability:</h4>
                    <p className="text-sm text-gray-700">{factor.tracking}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Optimization Strategy:</h4>
                    <p className="text-sm text-gray-700">{factor.optimization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Take Control of Your Iowa Organization's Print Costs?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Implement comprehensive cost tracking and achieve significant savings with Uniflow's advanced analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Get Cost Tracking Quote
              </Link>
              <a
                href="tel:5152372352"
                className="border border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-md font-medium transition-colors"
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

export default UniflowCostTracking 