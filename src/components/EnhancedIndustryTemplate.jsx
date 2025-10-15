import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Shield, Users, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../SEO'
import Breadcrumbs from '../Breadcrumbs'
import { SmartLeadCTA, BehaviorTrigger } from '../LeadScoringComponents'
import { PhoneTracker, DownloadTracker } from '../AnalyticsComponents'
// import { useLeadScoring } from '../LeadScoringComponents'
import { trackIndustryPageView } from '../../utils/analytics'

const EnhancedIndustryTemplate = ({ 
  industryName,
  industryIcon: IndustryIcon,
  pageTitle,
  pageDescription,
  heroSubtitle,
  keyBenefits,
  industryFeatures,
  caseStudies,
  resources,
  complianceInfo,
  industrySpecificCTA
}) => {
  // const { addInteraction, addPageView } = useLeadScoring()
  
  React.useEffect(() => {
    // addPageView(`/industries/iowa-${industryName.toLowerCase()}-print-solutions`, `Iowa ${industryName} Print Solutions`)
    trackIndustryPageView(industryName)
  }, [industryName])

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Industries', href: '/industries' },
    { name: `Iowa ${industryName}`, href: `/industries/iowa-${industryName.toLowerCase()}-print-solutions` }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={`Iowa ${industryName} print management, ${industryName} printing solutions, PaperCut ${industryName}, uniFLOW ${industryName}`}
        canonicalUrl={`https://iowaprint.com/industries/iowa-${industryName.toLowerCase()}-print-solutions`}
      />
      
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <BehaviorTrigger triggerType={`${industryName.toLowerCase()}_hero_view`} threshold={1}>
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center lg:text-left"
              >
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <IndustryIcon className="w-12 h-12 text-yellow-400 mr-4" />
                  <span className="text-yellow-400 text-lg font-semibold">Iowa {industryName} Solutions</span>
                </div>
                
                <h1 className="text-5xl font-bold mb-6">
                  Print Management for Iowa {industryName} Organizations
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  {heroSubtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={`/contact?industry=${industryName.toLowerCase()}`}
                    className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors text-center"
                    // onClick={() => addInteraction('industry_cta_click', { industry: industryName, type: 'contact' })}
                  >
                    Get {industryName} Assessment
                  </Link>
                  <PhoneTracker 
                    phoneNumber="(515) 123-4567"
                    location={`${industryName} Page - Hero CTA`}
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
                  >
                    Call {industryName} Team
                  </PhoneTracker>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{industryName} Benefits</h3>
                <div className="space-y-3">
                  {(Array.isArray(keyBenefits) ? keyBenefits.slice(0, 4) : []).map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </BehaviorTrigger>

      {/* Industry-Specific Features */}
      <BehaviorTrigger triggerType={`${industryName.toLowerCase()}_features_view`} threshold={1}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {industryName}-Specific Print Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Tailored features designed for Iowa {industryName.toLowerCase()} organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(Array.isArray(industryFeatures) ? industryFeatures : []).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                  // onClick={() => addInteraction('feature_interest', { industry: industryName, feature: feature.title })}
                >
                  <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </BehaviorTrigger>

      {/* Compliance Information */}
      {complianceInfo && (
        <BehaviorTrigger triggerType={`${industryName.toLowerCase()}_compliance_view`} threshold={1}>
          <section className="py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {complianceInfo.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {complianceInfo.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(Array.isArray(complianceInfo.features) ? complianceInfo.features : []).map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-4 rounded-lg shadow-sm text-center"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <span className="text-sm font-medium text-gray-900">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </BehaviorTrigger>
      )}

      {/* Smart Lead CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SmartLeadCTA 
            defaultCTA={{
              primaryText: `Get ${industryName} Assessment`,
              primaryLink: `/contact?industry=${industryName.toLowerCase()}`,
              secondaryText: `Download ${industryName} Guide`,
              secondaryLink: `/resources/${industryName.toLowerCase()}-guide`
            }}
            urgentCTA={{
              primaryText: `Emergency ${industryName} Support`,
              primaryLink: `/contact?urgent=true&industry=${industryName.toLowerCase()}`,
              secondaryText: `Call ${industryName} Team: (515) 123-4567`,
              secondaryLink: "tel:(515)123-4567"
            }}
            premiumCTA={{
              primaryText: `Enterprise ${industryName} Consultation`,
              primaryLink: `/contact?enterprise=true&industry=${industryName.toLowerCase()}`,
              secondaryText: "Priority Implementation",
              secondaryLink: `/contact?priority=${industryName.toLowerCase()}`
            }}
          />
        </div>
      </section>

      {/* Case Studies */}
      <BehaviorTrigger triggerType={`${industryName.toLowerCase()}_case_studies_view`} threshold={1}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Iowa {industryName} Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                See how Iowa {industryName.toLowerCase()} organizations achieved success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {(Array.isArray(caseStudies) ? caseStudies : []).map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-lg"
                  // onClick={() => addInteraction('case_study_interest', { industry: industryName, case: caseStudy.title })}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{caseStudy.title}</h3>
                    <p className="text-blue-600 font-medium">{caseStudy.organization}</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{caseStudy.savings}</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{caseStudy.efficiency}</div>
                      <div className="text-sm text-gray-600">Efficiency Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{caseStudy.roi}</div>
                      <div className="text-sm text-gray-600">ROI Period</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  
                  <Link
                    to={caseStudy.link}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </BehaviorTrigger>

      {/* Industry Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {industryName} Resources
            </h2>
            <p className="text-xl text-gray-600">
              Helpful guides and tools for Iowa {industryName.toLowerCase()} organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Array.isArray(resources) ? resources : []).map((resource, index) => (
              <div key={resource.title} className="bg-white p-6 rounded-lg shadow-sm">
                <resource.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <DownloadTracker 
                  fileName={resource.title}
                  category={`${industryName} Resources`}
                  href={resource.href}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors inline-flex items-center"
                  // onClick={() => addInteraction('industry_resource_download', { industry: industryName, resource: resource.title })}
                >
                  {resource.ctaText}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </DownloadTracker>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {industrySpecificCTA.title}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {industrySpecificCTA.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/contact?industry=${industryName.toLowerCase()}`}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
              // onClick={() => addInteraction('final_industry_cta', { industry: industryName })}
            >
              {industrySpecificCTA.primaryCTA}
            </Link>
            <PhoneTracker 
              phoneNumber="(515) 123-4567"
              location={`${industryName} Page - Final CTA`}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (515) 123-4567
            </PhoneTracker>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnhancedIndustryTemplate