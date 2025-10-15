import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Users, CheckCircle, Star, ArrowRight, Shield, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import { SmartLeadCTA, BehaviorTrigger } from '../../components/LeadScoringComponents'
import { PhoneTracker, EmailTracker, DownloadTracker } from '../../components/AnalyticsComponents'
// import { useLeadScoring } from '../../components/LeadScoringComponents'
import { trackLocationPageView } from '../../utils/analytics'

const EnhancedLocationTemplate = ({ 
  cityName, 
  phoneNumber, 
  email, 
  pageTitle, 
  pageDescription,
  businessTypes,
  localClients,
  locationSpecificFeatures 
}) => {
  // const { addInteraction, addPageView } = useLeadScoring()
  
  React.useEffect(() => {
    // addPageView(`/locations/${cityName.toLowerCase().replace(' ', '-')}-print-management`, `${cityName} Print Management`)
    trackLocationPageView(cityName)
  }, [cityName])

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Locations', href: '/locations' },
    { name: `${cityName} Print Management`, href: `/locations/${cityName.toLowerCase().replace(' ', '-')}-print-management` }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={`${cityName} print management, ${cityName} printing services, PaperCut ${cityName}, uniFLOW ${cityName}`}
        canonicalUrl={`https://iowaprint.com/locations/${cityName.toLowerCase().replace(' ', '-')}-print-management`}
      />
      
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <BehaviorTrigger triggerType="location_hero_view" threshold={1}>
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-5xl font-bold mb-6">
                  {cityName} Print Management Solutions
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Professional print management services for {cityName} businesses, schools, and healthcare organizations. 
                  Reduce costs, improve security, and streamline operations with expert local support.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={`/contact?location=${cityName.toLowerCase().replace(' ', '-')}`}
                    className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors text-center"
                    onClick={() => addInteraction('location_cta_click', { city: cityName, type: 'contact' })}
                  >
                    Get Free {cityName} Assessment
                  </Link>
                  <PhoneTracker 
                    phoneNumber={phoneNumber}
                    location={`${cityName} Page - Hero CTA`}
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
                  >
                    Call {cityName}: {phoneNumber}
                  </PhoneTracker>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4">Contact {cityName} Team</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    <span>Serving {cityName} Metro Area</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-yellow-400" />
                    <PhoneTracker 
                      phoneNumber={phoneNumber}
                      location={`${cityName} Page - Contact Info`}
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {phoneNumber}
                    </PhoneTracker>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-yellow-400" />
                    <EmailTracker 
                      email={email}
                      subject={`${cityName} Print Management Inquiry`}
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {email}
                    </EmailTracker>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </BehaviorTrigger>

      {/* Local Business Focus */}
      <BehaviorTrigger triggerType="local_business_focus" threshold={1}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted by {cityName} Organizations
              </h2>
              <p className="text-xl text-gray-600">
                We understand {cityName} business needs and provide tailored print management solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(Array.isArray(businessTypes) ? businessTypes : []).map((type, index) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
                  onClick={() => addInteraction('business_type_interest', { city: cityName, type })}
                >
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">{type}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </BehaviorTrigger>

      {/* Smart Lead CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SmartLeadCTA
            defaultCTA={{
              primaryText: `Get ${cityName} Assessment`,
              primaryLink: `/contact?location=${cityName.toLowerCase().replace(' ', '-')}`,
              secondaryText: "Calculate Savings",
              secondaryLink: "/print-cost-calculator"
            }}
            urgentCTA={{
              primaryText: `Immediate ${cityName} Consultation`,
              primaryLink: `/contact?urgent=true&location=${cityName.toLowerCase().replace(' ', '-')}`,
              secondaryText: `Call Now: ${phoneNumber}`,
              secondaryLink: `tel:${phoneNumber.replace(/[^0-9]/g, '')}`
            }}
            premiumCTA={{
              primaryText: `Executive Assessment - ${cityName}`,
              primaryLink: `/contact?executive=true&location=${cityName.toLowerCase().replace(' ', '-')}`,
              secondaryText: "Priority Implementation",
              secondaryLink: "/contact?priority=true"
            }}
          />
        </div>
      </section>

      {/* Local Features */}
      <BehaviorTrigger triggerType="local_features_view" threshold={1}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {cityName}-Specific Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Tailored services designed for {cityName} business environment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(Array.isArray(locationSpecificFeatures) ? locationSpecificFeatures : []).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
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

      {/* Local Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resources for {cityName} Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Download helpful guides specific to {cityName} organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">{cityName} Implementation Guide</h3>
              <p className="text-gray-600 mb-4">Step-by-step guide for {cityName} organizations</p>
              <DownloadTracker 
                fileName={`${cityName} Implementation Guide`}
                category="Location Resources"
                href={`/resources/${cityName.toLowerCase().replace(' ', '-')}-implementation-guide`}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Download Guide →
              </DownloadTracker>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Cost Calculator</h3>
              <p className="text-gray-600 mb-4">Calculate potential savings for your {cityName} organization</p>
              <Link 
                to={`/print-cost-calculator?location=${cityName.toLowerCase().replace(' ', '-')}`}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                onClick={() => addInteraction('calculator_link_click', { source: `${cityName}_location_page` })}
              >
                Use Calculator →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Local Case Studies</h3>
              <p className="text-gray-600 mb-4">See how other {cityName} organizations succeeded</p>
              <Link 
                to={`/case-studies?location=${cityName.toLowerCase().replace(' ', '-')}`}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                onClick={() => addInteraction('case_studies_click', { city: cityName })}
              >
                View Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your {cityName} Print Environment?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and discover how much your {cityName} organization could save
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/contact?location=${cityName.toLowerCase().replace(' ', '-')}`}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
              onClick={() => addInteraction('final_cta_click', { city: cityName })}
            >
              Schedule Free Consultation
            </Link>
            <PhoneTracker 
              phoneNumber={phoneNumber}
              location={`${cityName} Page - Final CTA`}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call {phoneNumber}
            </PhoneTracker>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnhancedLocationTemplate