
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, DollarSign, Clock, BarChart3, Printer, Settings, Target, TrendingDown } from 'lucide-react'
import SEO from '../components/SEO'

const Tools = () => {
  const [activeCalculator, setActiveCalculator] = useState('cost')

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
      description: 'Calculate potential savings with print management'
    },
    {
      id: 'roi',
      title: 'ROI Calculator',
      icon: TrendingDown,
      description: 'Determine payback period for print management investment'
    },
    {
      id: 'device',
      title: 'Device Optimization Calculator',
      icon: Printer,
      description: 'Optimize your printer fleet for maximum efficiency'
    },
    {
      id: 'paper',
      title: 'Paper Usage Calculator',
      icon: BarChart3,
      description: 'Calculate paper savings with duplex printing'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Iowa Print Management Tools & Calculators | Cost Savings & ROI Analysis"
        description="Free print management calculators for Iowa businesses. Calculate cost savings, ROI, device optimization, and paper usage with PaperCut and Uniflow solutions."
        keywords="print management calculator, cost savings calculator, ROI calculator, Iowa print solutions, PaperCut calculator, Uniflow calculator"
      />

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
              Print Management Tools & Calculators
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Powerful calculators and tools to help Iowa organizations analyze their print environment, calculate potential savings, and optimize their copier infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            {calculators.map((calc, index) => (
              <motion.button
                key={calc.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCalculator(calc.id)}
                className={`p-6 rounded-lg text-left transition-all ${
                  activeCalculator === calc.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <calc.icon className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">{calc.title}</h3>
                <p className={`text-sm ${
                  activeCalculator === calc.id ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {calc.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Cost Savings Calculator */}
          {activeCalculator === 'cost' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Print Cost Savings Calculator</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Print Volume (pages)
                      </label>
                      <input
                        type="number"
                        value={costInputs.monthlyPrintVolume}
                        onChange={(e) => setCostInputs({...costInputs, monthlyPrintVolume: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="10000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Color Cost Per Page ($)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={costInputs.colorCostPerPage}
                        onChange={(e) => setCostInputs({...costInputs, colorCostPerPage: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        B&W Cost Per Page ($)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={costInputs.bwCostPerPage}
                        onChange={(e) => setCostInputs({...costInputs, bwCostPerPage: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Color Printing Percentage (%)
                      </label>
                      <input
                        type="number"
                        value={costInputs.colorPercentage}
                        onChange={(e) => setCostInputs({...costInputs, colorPercentage: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
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
                        placeholder="500"
                      />
                    </div>
                    <button
                      onClick={calculateCostSavings}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Calculate Savings
                    </button>
                  </div>
                </div>
                
                {costResults && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Estimated Savings</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current Monthly Cost:</span>
                        <span className="font-semibold">${costResults.currentMonthlyCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Potential Monthly Savings:</span>
                        <span className="font-semibold text-green-600">${costResults.potentialSavings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">New Monthly Cost:</span>
                        <span className="font-semibold">${costResults.newMonthlyCost}</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between">
                          <span className="text-gray-900 font-medium">Annual Savings:</span>
                          <span className="font-bold text-green-600 text-lg">${costResults.annualSavings}</span>
                        </div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Calculator</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Implementation Cost ($)
                      </label>
                      <input
                        type="number"
                        value={roiInputs.implementationCost}
                        onChange={(e) => setRoiInputs({...roiInputs, implementationCost: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="15000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Savings ($)
                      </label>
                      <input
                        type="number"
                        value={roiInputs.monthlySavings}
                        onChange={(e) => setRoiInputs({...roiInputs, monthlySavings: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="2500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly License Cost ($)
                      </label>
                      <input
                        type="number"
                        value={roiInputs.monthlyLicenseCost}
                        onChange={(e) => setRoiInputs({...roiInputs, monthlyLicenseCost: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="300"
                      />
                    </div>
                    <button
                      onClick={calculateROI}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Calculate ROI
                    </button>
                  </div>
                </div>
                
                {roiResults && (
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">ROI Analysis</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payback Period:</span>
                        <span className="font-semibold">{roiResults.paybackMonths} months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Net Monthly Savings:</span>
                        <span className="font-semibold text-green-600">${roiResults.netMonthlySavings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">3-Year ROI:</span>
                        <span className="font-semibold">{roiResults.threeYearROI}%</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between">
                          <span className="text-gray-900 font-medium">3-Year Savings:</span>
                          <span className="font-bold text-green-600 text-lg">${roiResults.threeYearSavings}</span>
                        </div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Device Optimization Calculator</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Number of Devices
                      </label>
                      <input
                        type="number"
                        value={deviceInputs.currentDevices}
                        onChange={(e) => setDeviceInputs({...deviceInputs, currentDevices: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="25"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Average Monthly Usage Per Device
                      </label>
                      <input
                        type="number"
                        value={deviceInputs.averageUsage}
                        onChange={(e) => setDeviceInputs({...deviceInputs, averageUsage: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Optimal Usage Per Device
                      </label>
                      <input
                        type="number"
                        value={deviceInputs.optimalUsage}
                        onChange={(e) => setDeviceInputs({...deviceInputs, optimalUsage: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Device Cost ($)
                      </label>
                      <input
                        type="number"
                        value={deviceInputs.deviceCost}
                        onChange={(e) => setDeviceInputs({...deviceInputs, deviceCost: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      onClick={calculateDeviceOptimization}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Calculate Optimization
                    </button>
                  </div>
                </div>
                
                {deviceResults && (
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Results</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Optimal Device Count:</span>
                        <span className="font-semibold">{deviceResults.optimalDevices}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Devices to Remove:</span>
                        <span className="font-semibold text-red-600">{deviceResults.devicesReduced}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Savings:</span>
                        <span className="font-semibold text-green-600">${deviceResults.monthlySavings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Utilization Rate:</span>
                        <span className="font-semibold">{deviceResults.utilizationImprovement}%</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between">
                          <span className="text-gray-900 font-medium">Annual Savings:</span>
                          <span className="font-bold text-green-600 text-lg">${deviceResults.annualSavings}</span>
                        </div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Paper Usage Calculator</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Daily Page Volume
                      </label>
                      <input
                        type="number"
                        value={paperInputs.dailyPages}
                        onChange={(e) => setPaperInputs({...paperInputs, dailyPages: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Duplex Rate (%)
                      </label>
                      <input
                        type="number"
                        value={paperInputs.duplexRate}
                        onChange={(e) => setPaperInputs({...paperInputs, duplexRate: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
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
                    </div>
                    <button
                      onClick={calculatePaperSavings}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Calculate Paper Savings
                    </button>
                  </div>
                </div>
                
                {paperResults && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Paper Savings Potential</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Pages:</span>
                        <span className="font-semibold">{paperResults.monthlyPages}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sheets Saved/Month:</span>
                        <span className="font-semibold text-green-600">{paperResults.paperSaved}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Savings:</span>
                        <span className="font-semibold text-green-600">${paperResults.monthlySavings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Trees Saved/Year:</span>
                        <span className="font-semibold text-green-600">{paperResults.treesPerYear}</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between">
                          <span className="text-gray-900 font-medium">Annual Savings:</span>
                          <span className="font-bold text-green-600 text-lg">${paperResults.annualSavings}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Optimize Your Print Environment?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact Infomax Office Systems for professional print management implementation in Iowa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:5152372352"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-colors"
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

export default Tools
