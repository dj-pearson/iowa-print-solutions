
import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Building2, Shield, DollarSign, Users, CheckCircle, Phone, Mail } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'

const PrintManagementDesMoines = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Print Management Des Moines', href: '/blog/print-management-des-moines' }
  ]

  const desMoinesIndustries = [
    {
      icon: Building2,
      name: 'Financial Services',
      companies: 'Principal Financial, Wells Fargo, Nationwide',
      challenges: 'Secure document handling, compliance reporting, client confidentiality',
      solutions: 'Secure print release, audit trails, encrypted document workflows'
    },
    {
      icon: Shield,
      name: 'Insurance',
      companies: 'Allied Insurance, Farm Bureau, EMC Insurance',
      challenges: 'Claims processing, policy documentation, regulatory compliance',
      solutions: 'Automated workflows, document retention policies, mobile printing'
    },
    {
      icon: Users,
      name: 'Government',
      companies: 'City of Des Moines, Polk County, State of Iowa offices',
      challenges: 'Public records management, budget constraints, security requirements',
      solutions: 'Cost control systems, secure access, transparent reporting'
    },
    {
      icon: DollarSign,
      name: 'Healthcare',
      companies: 'UnityPoint Health, MercyOne, Broadlawns Medical Center',
      challenges: 'HIPAA compliance, patient privacy, medical record security',
      solutions: 'HIPAA-compliant printing, secure workflows, mobile healthcare printing'
    }
  ]

  const desMoinesLocations = [
    {
      area: 'Downtown Des Moines',
      businesses: 'Corporate headquarters, government offices, law firms',
      printNeeds: 'High-volume printing, secure document handling, professional presentation materials'
    },
    {
      area: 'West Des Moines',
      businesses: 'Financial services, insurance companies, tech firms',
      printNeeds: 'Secure financial documents, compliance reporting, client presentations'
    },
    {
      area: 'Ankeny',
      businesses: 'Manufacturing, distribution centers, corporate offices',
      printNeeds: 'Industrial documentation, safety materials, logistics paperwork'
    },
    {
      area: 'Urbandale',
      businesses: 'Insurance headquarters, professional services, retail management',
      printNeeds: 'Policy documentation, training materials, marketing collateral'
    }
  ]

  return (
    <>
      <SEO 
        title="Print Management Des Moines | Professional Print Solutions Iowa Capital"
        description="Expert print management services for Des Moines businesses including Principal Financial, Wells Fargo, Allied Insurance, and Polk County. PaperCut, Uniflow & PrinterLogic implementation serving downtown, West Des Moines, Ankeny, Urbandale & surrounding central Iowa areas since 1958."
        keywords="print management Des Moines, Des Moines print solutions, managed print services Des Moines Iowa, PaperCut Des Moines implementation, Uniflow Des Moines, PrinterLogic Des Moines, West Des Moines print management, Ankeny print services, Urbandale print solutions, downtown Des Moines printing, Polk County print management, central Iowa printing solutions"
        canonicalUrl="https://iowaprintsolutions.com/blog/print-management-des-moines"
        schemaType="Article"
        additionalSchema={{
          '@type': 'Article',
          'headline': 'Professional Print Management for Des Moines',
          'author': {
            '@type': 'Organization',
            'name': 'Infomax Office Systems',
            'url': 'https://www.infomaxoffice.com'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Iowa Print Solutions',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://iowaprintsolutions.com/logo.png'
            }
          },
          'datePublished': '2024-02-01',
          'dateModified': '2025-08-26',
          'articleSection': 'Local Business Solutions',
          'about': [
            {
              '@type': 'Thing',
              'name': 'Print Management',
              'sameAs': 'https://en.wikipedia.org/wiki/Print_management'
            },
            {
              '@type': 'Place',
              'name': 'Des Moines, Iowa',
              'geo': {
                '@type': 'GeoCoordinates',
                'latitude': 41.5868,
                'longitude': -93.6250
              }
            }
          ],
          'mentions': [
            {
              '@type': 'Organization',
              'name': 'Principal Financial Group',
              'sameAs': 'https://en.wikipedia.org/wiki/Principal_Financial_Group'
            },
            {
              '@type': 'Organization',
              'name': 'Wells Fargo'
            }
          ]
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} className="mb-8 text-blue-200" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <MapPin className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Professional Print Management for Des Moines
              </h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
                Des Moines businesses including Principal Financial Group, Wells Fargo, Allied Insurance, Nationwide, and hundreds of local companies trust Infomax Office Systems' expert print management solutions to reduce costs, enhance security, and streamline operations. Proudly serving Iowa's capital city and the greater central Iowa region including West Des Moines, Ankeny, Urbandale, Johnston, Altoona, and Pleasant Hill since 1958.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get Free Assessment
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Des Moines Business Landscape */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Des Moines Print Management by Industry
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                As Iowa's business capital, Des Moines hosts diverse industries with unique print management requirements. 
                Our solutions are tailored to meet the specific needs of each sector.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {desMoinesIndustries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <industry.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Major Companies:</p>
                      <p className="text-sm text-gray-600">{industry.companies}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Print Challenges:</p>
                      <p className="text-sm text-gray-600">{industry.challenges}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Our Solutions:</p>
                      <p className="text-sm text-gray-600">{industry.solutions}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Des Moines Area Coverage */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Des Moines Metro Coverage
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We provide print management services throughout the Des Moines metropolitan area, 
                understanding the unique needs of each community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {desMoinesLocations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {location.area}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Primary Businesses:</p>
                      <p className="text-sm text-gray-600">{location.businesses}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">Typical Print Needs:</p>
                      <p className="text-sm text-gray-600">{location.printNeeds}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Des Moines Success Stories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Des Moines Print Management Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Real results from Des Moines organizations that have transformed their print operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Downtown Financial Firm
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Cost Reduction:</span>
                    <span className="text-lg font-bold text-green-600">42%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Security Incidents:</span>
                    <span className="text-lg font-bold text-green-600">Zero</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Implementation Time:</span>
                    <span className="text-lg font-bold text-blue-600">2 weeks</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Implemented PaperCut with secure print release across 5 floors, 
                  achieving significant cost savings and enhanced document security.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  West Des Moines Insurance HQ
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Print Volume Reduction:</span>
                    <span className="text-lg font-bold text-green-600">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Workflow Efficiency:</span>
                    <span className="text-lg font-bold text-green-600">+60%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">User Satisfaction:</span>
                    <span className="text-lg font-bold text-blue-600">95%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Uniflow implementation with automated policy processing workflows, 
                  dramatically improving claims handling efficiency.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Ankeny Manufacturing Plant
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">IT Support Reduction:</span>
                    <span className="text-lg font-bold text-green-600">80%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Device Uptime:</span>
                    <span className="text-lg font-bold text-green-600">99.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">ROI Achievement:</span>
                    <span className="text-lg font-bold text-blue-600">8 months</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  PrinterLogic serverless solution eliminated print servers, 
                  reducing IT overhead and improving manufacturing documentation workflows.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Local Advantages */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Local Des Moines Print Management?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Working with a local Iowa partner provides unique advantages for Des Moines businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Local Presence</h3>
                <p className="text-gray-600">
                  On-site support throughout the Des Moines metro area with rapid response times 
                  and local expertise.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry Knowledge</h3>
                <p className="text-gray-600">
                  Deep understanding of Des Moines business environment, from financial services 
                  to government operations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Trusted Partnership</h3>
                <p className="text-gray-600">
                  65+ years serving Iowa businesses with a reputation for reliability, 
                  integrity, and exceptional service.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Optimize Your Des Moines Print Management?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of Des Moines businesses that have transformed their printing operations. 
                Get your free assessment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </motion.a>
                <motion.a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Schedule Assessment
                </motion.a>
              </div>
              <p className="text-sm mt-4 opacity-80">
                Serving Downtown Des Moines, West Des Moines, Ankeny, Urbandale and surrounding communities
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PrintManagementDesMoines
