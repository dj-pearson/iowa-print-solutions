
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, DollarSign, Clock, BarChart3, Printer, Settings, Target, TrendingDown, HelpCircle, CheckCircle, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

const Tools = () => {
  const [activeCalculator, setActiveCalculator] = useState('cost')
  const [activeFaq, setActiveFaq] = useState(null)

  // Cost Savings Calculator
  const [costInputs, setCostInputs] = useState({
    monthlyPrintVolume: '',
    colorCostPerPage: '0.12',
    bwCostPerPage: '0.03',
    colorPercentage: '30',
    paperCost: '0.01',
    currentMaintenance: '',
    employees: ''
  })

  const [costResults, setCostResults] = useState(null)

  const calculateCostSavings = () => {
    const volume = parseInt(costInputs.monthlyPrintVolume) || 0
    const colorCost = parseFloat(costInputs.colorCostPerPage) || 0
    const bwCost = parseFloat(costInputs.bwCostPerPage) || 0
    const colorPercent = parseFloat(costInputs.colorPercentage) / 100 || 0
    const paperCost = parseFloat(costInputs.paperCost) || 0
    const maintenance = parseFloat(costInputs.currentMaintenance) || 0

    const colorPages = volume * colorPercent
    const bwPages = volume * (1 - colorPercent)
    
    const currentMonthlyCost = (colorPages * colorCost) + (bwPages * bwCost) + (volume * paperCost) + maintenance
    
    // Estimated savings with print management
    const potentialSavings = currentMonthlyCost * 0.25 // 25% average savings
    const newMonthlyCost = currentMonthlyCost - potentialSavings
    
    setCostResults({
      currentMonthlyCost: currentMonthlyCost.toFixed(0),
      potentialSavings: potentialSavings.toFixed(0),
      newMonthlyCost: newMonthlyCost.toFixed(0),
      annualSavings: (potentialSavings * 12).toFixed(0)
    })
  }

  // ROI Calculator
  const [roiInputs, setRoiInputs] = useState({
    implementationCost: '',
    monthlySavings: '',
    monthlyLicenseCost: ''
  })

  const [roiResults, setRoiResults] = useState(null)

  const calculateROI = () => {
    const implementation = parseFloat(roiInputs.implementationCost) || 0
    const savings = parseFloat(roiInputs.monthlySavings) || 0
    const license = parseFloat(roiInputs.monthlyLicenseCost) || 0
    
    const netMonthlySavings = savings - license
    const paybackMonths = implementation / netMonthlySavings
    const threeYearROI = ((netMonthlySavings * 36 - implementation) / implementation) * 100
    
    setRoiResults({
      paybackMonths: paybackMonths.toFixed(1),
      netMonthlySavings: netMonthlySavings.toFixed(0),
      threeYearROI: threeYearROI.toFixed(0),
      threeYearSavings: (netMonthlySavings * 36).toFixed(0)
    })
  }

  // Device Optimization Calculator
  const [deviceInputs, setDeviceInputs] = useState({
    currentDevices: '',
    averageUsage: '',
    optimalUsage: '2000',
    deviceCost: '300',
    maintenanceCost: '50'
  })

  const [deviceResults, setDeviceResults] = useState(null)

  const calculateDeviceOptimization = () => {
    const current = parseInt(deviceInputs.currentDevices) || 0
    const avgUsage = parseInt(deviceInputs.averageUsage) || 0
    const optimal = parseInt(deviceInputs.optimalUsage) || 2000
    const deviceCost = parseFloat(deviceInputs.deviceCost) || 0
    const maintenance = parseFloat(deviceInputs.maintenanceCost) || 0
    
    const totalUsage = current * avgUsage
    const optimalDevices = Math.ceil(totalUsage / optimal)
    const devicesReduced = current - optimalDevices
    const monthlySavings = devicesReduced * (deviceCost + maintenance)
    
    setDeviceResults({
      optimalDevices: optimalDevices,
      devicesReduced: Math.max(0, devicesReduced),
      monthlySavings: monthlySavings.toFixed(0),
      annualSavings: (monthlySavings * 12).toFixed(0),
      utilizationImprovement: ((totalUsage / optimalDevices / optimal) * 100).toFixed(0)
    })
  }

  // Paper Usage Calculator
  const [paperInputs, setPaperInputs] = useState({
    dailyPages: '',
    duplexRate: '20',
    paperCost: '0.01',
    workDays: '22'
  })

  const [paperResults, setPaperResults] = useState(null)

  const calculatePaperSavings = () => {
    const daily = parseInt(paperInputs.dailyPages) || 0
    const duplexRate = parseFloat(paperInputs.duplexRate) / 100 || 0
    const cost = parseFloat(paperInputs.paperCost) || 0
    const workDays = parseInt(paperInputs.workDays) || 22
    
    const monthlyPages = daily * workDays
    const currentDuplexPages = monthlyPages * duplexRate
    const singleSidedPages = monthlyPages - currentDuplexPages
    
    // Potential savings if 80% duplex
    const potentialDuplexPages = monthlyPages * 0.8
    const paperSaved = (potentialDuplexPages - currentDuplexPages) / 2
    const monthlySavings = paperSaved * cost
    
    setPaperResults({
      monthlyPages: monthlyPages.toLocaleString(),
      paperSaved: paperSaved.toFixed(0),
      monthlySavings: monthlySavings.toFixed(0),
      annualSavings: (monthlySavings * 12).toFixed(0),
      treesPerYear: (monthlySavings * 12 / 2000 * 0.125).toFixed(2) // Rough tree calculation
    })
  }

  const calculators = [
    {
      id: 'cost',
      title: 'Print Cost Savings Calculator',
      icon: DollarSign,
      description: 'Calculate potential savings with print management solutions like PaperCut and Uniflow',
      longDescription: 'Analyze your current printing costs including color vs black & white ratios, paper expenses, and maintenance fees. Discover how much your Iowa organization can save annually with professional print management implementation.',
      benefits: ['Reduce printing costs by 15-30%', 'Identify waste patterns', 'Budget planning assistance', 'ROI projections']
    },
    {
      id: 'roi',
      title: 'Print Management ROI Calculator',
      icon: TrendingDown,
      description: 'Determine payback period and return on investment for print management solutions',
      longDescription: 'Calculate the exact return on investment and payback timeline for implementing PaperCut, Uniflow, or PrinterLogic solutions in your Iowa business. Factor in implementation costs, licensing, and projected savings.',
      benefits: ['Accurate payback calculations', '3-year ROI projections', 'Net savings analysis', 'Investment justification']
    },
    {
      id: 'device',
      title: 'Printer Fleet Optimization Tool',
      icon: Printer,
      description: 'Optimize your copier and printer fleet for maximum cost efficiency',
      longDescription: 'Analyze your current printer deployment and discover the optimal number of devices needed. Reduce unnecessary hardware costs while improving utilization rates and employee productivity.',
      benefits: ['Right-size your fleet', 'Reduce device costs', 'Improve utilization', 'Streamline support']
    },
    {
      id: 'paper',
      title: 'Environmental Impact Calculator',
      icon: BarChart3,
      description: 'Calculate paper savings and environmental benefits with duplex printing',
      longDescription: 'Measure the environmental and cost impact of implementing duplex printing policies. Calculate paper consumption reduction, cost savings, and trees saved annually.',
      benefits: ['Reduce paper consumption', 'Environmental benefits', 'Sustainability reporting', 'Cost reduction analysis']
    }
  ]

  const faqs = [
    {
      question: 'How accurate are these print management calculators?',
      answer: 'Our calculators use industry-standard metrics and over 65 years of experience from Infomax Office Systems. Results are estimates based on typical Iowa business scenarios and should be verified with a professional assessment.'
    },
    {
      question: 'What is the average ROI for print management solutions in Iowa?',
      answer: 'Most Iowa organizations see a positive ROI within 6-18 months. Typical savings range from 15-30% of total print costs, with larger organizations often seeing higher percentage savings.'
    },
    {
      question: 'Which print management solution is best for my Iowa business?',
      answer: 'The best solution depends on your specific needs. PaperCut excels in education and healthcare, Uniflow is ideal for complex workflows, and PrinterLogic works well for organizations wanting to eliminate print servers.'
    },
    {
      question: 'Do these tools work for both small and large Iowa organizations?',
      answer: 'Yes, our calculators scale from small businesses with 10-20 employees to large enterprises with thousands of users. The savings percentages and optimization strategies apply across all organization sizes.'
    },
    {
      question: 'How do I implement print management solutions in Iowa?',
      answer: 'Contact Infomax Office Systems for professional implementation. We provide assessment, planning, installation, training, and ongoing support for all major print management platforms across Iowa.'
    },
    {
      question: 'What ongoing support is available for print management systems?',
      answer: 'Infomax Office Systems provides comprehensive support including system monitoring, user training, policy optimization, reporting, and technical troubleshooting for all print management implementations.'
    }
  ]

  const toolBenefits = [
    'Free professional-grade calculators',
    'Iowa-specific cost assumptions',
    'Instant results and analysis',
    'Professional implementation support',
    'Comprehensive ROI analysis',
    'Environmental impact assessment'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Free Print Management Calculators & Tools for Iowa Businesses | Cost Savings Analysis"
        description="Professional print management calculators for Iowa organizations. Calculate cost savings, ROI, fleet optimization, and environmental impact with PaperCut, Uniflow, and PrinterLogic solutions. Free tools from Infomax Office Systems."
        keywords="print management calculator Iowa, cost savings calculator, ROI calculator Iowa, printer fleet optimization, paper usage calculator, PaperCut calculator, Uniflow cost analysis, PrinterLogic ROI, Iowa print solutions tools, document management calculator, copier cost analysis Iowa"
        canonicalUrl="https://iowa-print-solutions.pages.dev/tools"
        schemaType="WebApplication"
        additionalSchema={{
          '@type': ['WebApplication', 'SoftwareApplication'],
          'applicationCategory': 'BusinessApplication',
          'operatingSystem': 'Web Browser',
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD'
          },
          'featureList': [
            'Print Cost Savings Calculator',
            'ROI Calculator',
            'Device Optimization Calculator',
            'Paper Usage Calculator',
            'Environmental Impact Analysis'
          ]
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Calculator className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Free Print Management Calculators for Iowa Businesses
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
              Professional-grade calculators and analysis tools to help Iowa organizations optimize their print environment, reduce costs, and improve efficiency. Calculate potential savings with PaperCut, Uniflow, and PrinterLogic solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
              {toolBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-sm bg-white/10 rounded-lg p-3">
                  <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tool Selection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Print Management Analysis Tool
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select from our comprehensive suite of calculators designed specifically for Iowa businesses evaluating print management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {calculators.map((calc, index) => (
              <motion.div
                key={calc.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-lg border-2 transition-all cursor-pointer ${
                  activeCalculator === calc.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
                onClick={() => setActiveCalculator(calc.id)}
              >
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-lg mr-4 ${
                    activeCalculator === calc.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <calc.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{calc.title}</h3>
                    <p className="text-gray-600 mb-3">{calc.description}</p>
                    <p className="text-sm text-gray-500 mb-4">{calc.longDescription}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {calc.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <ArrowRight className="h-3 w-3 mr-1 text-blue-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {activeCalculator === calc.id && (
                  <div className="text-center">
                    <span className="text-blue-600 font-medium">Calculator Active Below</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Cost Savings Calculator */}
          {activeCalculator === 'cost' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Print Cost Savings Calculator</h2>
                <p className="text-gray-600">Discover how much your Iowa organization can save with professional print management</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Enter Your Current Print Environment</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Print Volume (pages) *
                      </label>
                      <input
                        type="number"
                        value={costInputs.monthlyPrintVolume}
                        onChange={(e) => setCostInputs({...costInputs, monthlyPrintVolume: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 10000"
                      />
                      <p className="text-xs text-gray-500 mt-1">Total pages printed per month across all devices</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Color Cost Per Page ($) *
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={costInputs.colorCostPerPage}
                        onChange={(e) => setCostInputs({...costInputs, colorCostPerPage: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Typical range: $0.08 - $0.15 per page</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Black & White Cost Per Page ($) *
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={costInputs.bwCostPerPage}
                        onChange={(e) => setCostInputs({...costInputs, bwCostPerPage: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Typical range: $0.02 - $0.05 per page</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Color Printing Percentage (%) *
                      </label>
                      <input
                        type="number"
                        value={costInputs.colorPercentage}
                        onChange={(e) => setCostInputs({...costInputs, colorPercentage: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">What percentage of pages are printed in color?</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Maintenance Cost ($)
                      </label>
                      <input
                        type="number"
                        value={costInputs.currentMaintenance}
                        onChange={(e) => setCostInputs({...costInputs, currentMaintenance: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Include service contracts, supplies, repairs</p>
                    </div>
                    <button
                      onClick={calculateCostSavings}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                      Calculate My Potential Savings
                    </button>
                  </div>
                </div>
                
                {costResults && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Estimated Annual Savings</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Current Monthly Cost:</span>
                          <span className="font-semibold text-lg">${costResults.currentMonthlyCost}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Potential Monthly Savings:</span>
                          <span className="font-semibold text-green-600 text-lg">${costResults.potentialSavings}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">New Monthly Cost:</span>
                          <span className="font-semibold text-lg">${costResults.newMonthlyCost}</span>
                        </div>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg border-2 border-green-200">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-lg">Total Annual Savings:</span>
                          <span className="font-bold text-green-600 text-2xl">${costResults.annualSavings}</span>
                        </div>
                        <p className="text-sm text-green-700 mt-2">
                          Based on 25% average savings with professional print management implementation
                        </p>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p><strong>Note:</strong> Actual savings may vary. Contact Infomax Office Systems for a detailed assessment of your Iowa organization's print environment.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* ROI Calculator */}
          {activeCalculator === 'roi' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Print Management ROI Calculator</h2>
                <p className="text-gray-600">Calculate return on investment and payback period for your print management project</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Investment & Savings Analysis</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Implementation Cost ($) *
                      </label>
                      <input
                        type="number"
                        value={roiInputs.implementationCost}
                        onChange={(e) => setRoiInputs({...roiInputs, implementationCost: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 15000"
                      />
                      <p className="text-xs text-gray-500 mt-1">One-time setup, training, and implementation costs</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Savings ($) *
                      </label>
                      <input
                        type="number"
                        value={roiInputs.monthlySavings}
                        onChange={(e) => setRoiInputs({...roiInputs, monthlySavings: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 2500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Use results from Cost Savings Calculator above</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly License Cost ($) *
                      </label>
                      <input
                        type="number"
                        value={roiInputs.monthlyLicenseCost}
                        onChange={(e) => setRoiInputs({...roiInputs, monthlyLicenseCost: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 300"
                      />
                      <p className="text-xs text-gray-500 mt-1">Ongoing licensing and support costs</p>
                    </div>
                    <button
                      onClick={calculateROI}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                      Calculate ROI & Payback Period
                    </button>
                  </div>
                </div>
                
                {roiResults && (
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">ROI Analysis Results</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Payback Period:</span>
                          <span className="font-semibold text-lg">{roiResults.paybackMonths} months</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Net Monthly Savings:</span>
                          <span className="font-semibold text-green-600 text-lg">${roiResults.netMonthlySavings}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">3-Year ROI:</span>
                          <span className="font-semibold text-lg">{roiResults.threeYearROI}%</span>
                        </div>
                      </div>
                      <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-200">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-lg">3-Year Total Savings:</span>
                          <span className="font-bold text-blue-600 text-2xl">${roiResults.threeYearSavings}</span>
                        </div>
                        <p className="text-sm text-blue-700 mt-2">
                          Net savings after all costs and implementation investment
                        </p>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p><strong>Recommendation:</strong> {parseFloat(roiResults.paybackMonths) < 18 ? 'Excellent ROI - Highly recommended for implementation' : parseFloat(roiResults.paybackMonths) < 36 ? 'Good ROI - Worth implementing' : 'Consider optimizing costs or exploring alternative solutions'}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Device Optimization Calculator */}
          {activeCalculator === 'device' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Printer Fleet Optimization Calculator</h2>
                <p className="text-gray-600">Optimize your printer and copier deployment for maximum efficiency and cost savings</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Current Fleet Analysis</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Number of Devices *
                      </label>
                      <input
                        type="number"
                        value={deviceInputs.currentDevices}
                        onChange={(e) => setDeviceInputs({...deviceInputs, currentDevices: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 25"
                      />
                      <p className="text-xs text-gray-500 mt-1">Total printers, copiers, and MFPs</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Average Monthly Usage Per Device *
                      </label>
                      <input
                        type="number"
                        value={deviceInputs.averageUsage}
                        onChange={(e) => setDeviceInputs({...deviceInputs, averageUsage: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 800"
                      />
                      <p className="text-xs text-gray-500 mt-1">Average pages per device per month</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Optimal Usage Per Device (pages/month)
                      </label>
                      <input
                        type="number"
                        value={deviceInputs.optimalUsage}
                        onChange={(e) => setDeviceInputs({...deviceInputs, optimalUsage: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Recommended: 1500-2500 pages per device</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Cost Per Device ($)
                      </label>
                      <input
                        type="number"
                        value={deviceInputs.deviceCost}
                        onChange={(e) => setDeviceInputs({...deviceInputs, deviceCost: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Lease, maintenance, supplies per device</p>
                    </div>
                    <button
                      onClick={calculateDeviceOptimization}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                      Optimize My Fleet
                    </button>
                  </div>
                </div>
                
                {deviceResults && (
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Fleet Optimization Results</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Optimal Device Count:</span>
                          <span className="font-semibold text-lg">{deviceResults.optimalDevices}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Devices to Remove:</span>
                          <span className="font-semibold text-red-600 text-lg">{deviceResults.devicesReduced}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">New Utilization Rate:</span>
                          <span className="font-semibold text-lg">{deviceResults.utilizationImprovement}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Monthly Savings:</span>
                          <span className="font-semibold text-green-600 text-lg">${deviceResults.monthlySavings}</span>
                        </div>
                      </div>
                      <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-200">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-lg">Annual Fleet Savings:</span>
                          <span className="font-bold text-purple-600 text-2xl">${deviceResults.annualSavings}</span>
                        </div>
                        <p className="text-sm text-purple-700 mt-2">
                          Savings from optimized device deployment and improved utilization
                        </p>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p><strong>Optimization Benefits:</strong> Reduced hardware costs, simplified support, improved user experience, and better resource utilization.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Paper Usage Calculator */}
          {activeCalculator === 'paper' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Environmental Impact & Paper Savings Calculator</h2>
                <p className="text-gray-600">Calculate paper reduction and environmental benefits with duplex printing policies</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Paper Usage Analysis</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Daily Page Volume *
                      </label>
                      <input
                        type="number"
                        value={paperInputs.dailyPages}
                        onChange={(e) => setPaperInputs({...paperInputs, dailyPages: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Total pages printed daily across organization</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Duplex Rate (%) *
                      </label>
                      <input
                        type="number"
                        value={paperInputs.duplexRate}
                        onChange={(e) => setPaperInputs({...paperInputs, duplexRate: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">What percentage is currently printed duplex?</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Paper Cost Per Sheet ($)
                      </label>
                      <input
                        type="number"
                        step="0.001"
                        value={paperInputs.paperCost}
                        onChange={(e) => setPaperInputs({...paperInputs, paperCost: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Typical range: $0.008 - $0.015 per sheet</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Work Days Per Month
                      </label>
                      <input
                        type="number"
                        value={paperInputs.workDays}
                        onChange={(e) => setPaperInputs({...paperInputs, workDays: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Typical: 20-22 business days per month</p>
                    </div>
                    <button
                      onClick={calculatePaperSavings}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                      Calculate Environmental Impact
                    </button>
                  </div>
                </div>
                
                {paperResults && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Environmental & Cost Impact</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Monthly Pages:</span>
                          <span className="font-semibold text-lg">{paperResults.monthlyPages}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Sheets Saved/Month:</span>
                          <span className="font-semibold text-green-600 text-lg">{paperResults.paperSaved}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Monthly Cost Savings:</span>
                          <span className="font-semibold text-green-600 text-lg">${paperResults.monthlySavings}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Trees Saved Annually:</span>
                          <span className="font-semibold text-green-600 text-lg">{paperResults.treesPerYear}</span>
                        </div>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg border-2 border-green-200">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-lg">Annual Paper Savings:</span>
                          <span className="font-bold text-green-600 text-2xl">${paperResults.annualSavings}</span>
                        </div>
                        <p className="text-sm text-green-700 mt-2">
                          Environmental and cost benefits of 80% duplex printing policy
                        </p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Additional Environmental Benefits:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Reduced landfill waste</li>
                          <li>• Lower carbon footprint</li>
                          <li>• Decreased transportation costs</li>
                          <li>• Enhanced sustainability reporting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About Print Management Tools
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about using print management calculators and implementing solutions in Iowa
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <HelpCircle className={`h-5 w-5 text-gray-500 transition-transform ${
                    activeFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Implement Print Management in Your Iowa Organization?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Use these calculator results to justify your print management investment. Contact Infomax Office Systems for professional implementation of PaperCut, Uniflow, or PrinterLogic solutions across Iowa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Schedule Free Assessment
              </a>
              <a
                href="tel:5152372352"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call (515) 237-2352
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>Serving Iowa organizations since 1958 • Free consultations • Professional implementation • Ongoing support</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Tools
