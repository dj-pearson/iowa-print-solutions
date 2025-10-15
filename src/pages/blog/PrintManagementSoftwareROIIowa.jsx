import React from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign, Clock, BarChart3, CheckCircle, Phone, Mail } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import { BehaviorTrigger, SmartLeadCTA } from '../../components/LeadScoringComponents'

const PrintManagementSoftwareROIIowa = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Print Management Software ROI Iowa', href: '/blog/print-management-software-roi-iowa' }
  ]

  const roiMetrics = [
    {
      category: 'Direct Cost Savings',
      metrics: [
        { item: 'Reduced paper usage', saving: '15-30%', annual: '$2,500-$8,000' },
        { item: 'Toner optimization', saving: '20-35%', annual: '$3,000-$12,000' },
        { item: 'Eliminated waste printing', saving: '25-40%', annual: '$1,800-$5,500' },
        { item: 'Device consolidation', saving: '10-25%', annual: '$5,000-$15,000' }
      ]
    },
    {
      category: 'Operational Efficiency',
      metrics: [
        { item: 'IT support time reduction', saving: '40-60%', annual: '$8,000-$20,000' },
        { item: 'Automated billing/reporting', saving: '80-90%', annual: '$3,000-$8,000' },
        { item: 'Help desk call reduction', saving: '50-70%', annual: '$2,000-$6,000' },
        { item: 'Driver management elimination', saving: '100%', annual: '$4,000-$10,000' }
      ]
    },
    {
      category: 'Security & Compliance',
      metrics: [
        { item: 'Document security breaches', saving: '90-100%', annual: 'Invaluable' },
        { item: 'Compliance audit costs', saving: '60-80%', annual: '$5,000-$15,000' },
        { item: 'Data loss prevention', saving: '95-100%', annual: 'Invaluable' },
        { item: 'Regulatory fine avoidance', saving: '100%', annual: '$10,000+' }
      ]
    }
  ]

  const caseStudies = [
    {
      company: 'Iowa Healthcare System',
      size: '500 employees',
      solution: 'PaperCut MF',
      implementation: '$25,000',
      annualSavings: '$85,000',
      roiPeriod: '3.5 months',
      keyBenefits: ['HIPAA compliance', '60% cost reduction', 'Eliminated security incidents']
    },
    {
      company: 'Cedar Rapids School District',
      size: '1,200 users',
      solution: 'Uniflow Online',
      implementation: '$40,000',
      annualSavings: '$120,000',
      roiPeriod: '4 months',
      keyBenefits: ['Student quota management', '70% paper reduction', 'Simplified IT management']
    },
    {
      company: 'Des Moines Manufacturing',
      size: '300 employees',
      solution: 'PrinterLogic',
      implementation: '$18,000',
      annualSavings: '$65,000',
      roiPeriod: '3.3 months',
      keyBenefits: ['Serverless printing', '50% IT time savings', 'Zero print servers']
    }
  ]

  const roiCalculatorSteps = [
    {
      step: '1',
      title: 'Current State Assessment',
      description: 'Document your current printing costs, including devices, supplies, and support.',
      items: ['Monthly print volumes', 'Device maintenance costs', 'IT support hours', 'Paper and toner expenses']
    },
    {
      step: '2',
      title: 'Solution Cost Analysis',
      description: 'Calculate the total investment required for print management software implementation.',
      items: ['Software licensing', 'Implementation services', 'Training costs', 'Hardware requirements']
    },
    {
      step: '3',
      title: 'Benefit Quantification',
      description: 'Identify and quantify the expected savings and efficiency gains.',
      items: ['Cost reduction potential', 'Efficiency improvements', 'Security risk mitigation', 'Compliance benefits']
    },
    {
      step: '4',
      title: 'ROI Calculation',
      description: 'Calculate payback period and return on investment over 3-5 years.',
      items: ['Net present value', 'Payback period', '3-year ROI percentage', 'Break-even analysis']
    }
  ]

  return (
    <BehaviorTrigger 
      eventName="roi_article_view"
      value={20}
      metadata={{ article: 'print-management-software-roi-iowa', category: 'business-analysis' }}
    >
      <div className="min-h-screen bg-gray-50">
        <SEO 
          title="Print Management Software ROI Iowa: Calculate Your Returns"
          description="Calculate the ROI of print management software for Iowa businesses. Real case studies, cost savings analysis, and ROI calculator for PaperCut, Uniflow, and PrinterLogic."
          keywords={[
            'print management ROI Iowa',
            'PaperCut ROI calculator',
            'Uniflow cost savings',
            'PrinterLogic ROI Iowa',
            'print software investment',
            'cost reduction printing Iowa',
            'print management savings',
            'Iowa business ROI analysis'
          ]}
          canonicalUrl="https://iowaprintsolutions.com/blog/print-management-software-roi-iowa"
        />
        
        <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={breadcrumbItems} className="text-green-100 mb-8" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Print Management Software ROI: Proven Returns for Iowa Businesses
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
                Discover how Iowa businesses achieve 300-500% ROI with print management software. Real case studies, cost breakdowns, and ROI calculators included.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <SmartLeadCTA 
                  variant="primary"
                  size="lg"
                  className="bg-white text-green-600 hover:bg-green-50"
                >
                  Calculate My ROI
                </SmartLeadCTA>
                <BehaviorTrigger 
                  eventName="phone_number_click"
                  value={25}
                  metadata={{ source: 'roi-hero', type: 'call' }}
                >
                  <a href="tel:515-555-0123" className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-green-600 rounded-lg font-semibold transition-colors">
                    <Phone className="h-5 w-5 mr-2" />
                    Call (515) 555-0123
                  </a>
                </BehaviorTrigger>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* ROI Metrics Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Where Iowa Businesses See the Greatest ROI
            </h2>
            
            <div className="space-y-8">
              {roiMetrics.map((category, index) => (
                <BehaviorTrigger
                  key={index}
                  eventName="roi_category_view"
                  value={10}
                  metadata={{ category: category.category, type: 'savings-analysis' }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                      <DollarSign className="h-6 w-6 text-green-600 mr-2" />
                      {category.category}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {(category.metrics && Array.isArray(category.metrics) ? category.metrics : []).map((metric, idx) => (
                        <div key={idx} className="border border-gray-200 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">{metric.item}</h4>
                          <p className="text-2xl font-bold text-green-600 mb-1">{metric.saving}</p>
                          <p className="text-sm text-gray-600">{metric.annual}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </BehaviorTrigger>
              ))}
            </div>
          </motion.section>

          {/* Case Studies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Real Iowa ROI Success Stories
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <BehaviorTrigger
                  key={index}
                  eventName="case_study_view"
                  value={15}
                  metadata={{ company: study.company, solution: study.solution, roi: study.roiPeriod }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.company}</h3>
                      <p className="text-gray-600">{study.size}</p>
                      <p className="text-sm font-medium text-blue-600">{study.solution}</p>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Implementation:</span>
                        <span className="font-semibold">{study.implementation}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Annual Savings:</span>
                        <span className="font-semibold text-green-600">{study.annualSavings}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">ROI Period:</span>
                        <span className="font-bold text-blue-600">{study.roiPeriod}</span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {(study.keyBenefits && Array.isArray(study.keyBenefits) ? study.keyBenefits : []).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </BehaviorTrigger>
              ))}
            </div>
          </motion.section>

          {/* ROI Calculator Guide */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Calculate Your Print Management ROI
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {roiCalculatorSteps.map((step, index) => (
                <BehaviorTrigger
                  key={index}
                  eventName="roi_calculator_step_view"
                  value={8}
                  metadata={{ step: step.step, title: step.title }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <ul className="text-left text-sm text-gray-600 space-y-1">
                      {(step.items && Array.isArray(step.items) ? step.items : []).map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <BarChart3 className="h-3 w-3 text-blue-600 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </BehaviorTrigger>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <SmartLeadCTA 
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start My ROI Analysis
              </SmartLeadCTA>
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Maximize Your Print Management ROI?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join Iowa businesses already saving $50,000+ annually with smart print management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SmartLeadCTA 
                variant="primary"
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50"
              >
                Get Custom ROI Report
              </SmartLeadCTA>
              <BehaviorTrigger 
                eventName="email_contact_click"
                value={20}
                metadata={{ source: 'roi-final-cta', type: 'email' }}
              >
                <a href="mailto:info@iowaprintsolutions.com" className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-green-600 rounded-lg font-semibold transition-colors">
                  <Mail className="h-5 w-5 mr-2" />
                  Email ROI Experts
                </a>
              </BehaviorTrigger>
            </div>
          </motion.section>
        </div>
      </div>
    </BehaviorTrigger>
  )
}

export default PrintManagementSoftwareROIIowa