import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Users, CheckCircle, Star, ArrowRight, Shield, BarChart3, Building } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import AIOptimizedFAQ from '../../components/AIOptimizedFAQ'

const CedarRapidsPrintManagement = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Cedar Rapids Print Management', href: '/locations/cedar-rapids-print-management' }
  ]

  const cedarRapidsFAQ = [
    {
      question: 'Why choose Cedar Rapids print management services from Infomax Office Systems?',
      answer: 'Infomax Office Systems understands Cedar Rapids\' unique business landscape, from major manufacturing facilities like Rockwell Collins and General Mills to Cedar Rapids Community Schools. We\'ve served the Cedar Rapids corridor since 1958, providing specialized solutions for the city\'s diverse industrial, healthcare, and educational organizations.'
    },
    {
      question: 'Which Cedar Rapids organizations use PaperCut and uniFLOW solutions?',
      answer: 'Major Cedar Rapids organizations including Mercy Medical Center, Cedar Rapids Community School District, Kirkwood Community College, Collins Aerospace facilities, and numerous Cedar Rapids manufacturing companies rely on our print management expertise. We serve everything from the NewBo District to Marion and Hiawatha.'
    },
    {
      question: 'How quickly can you respond to Cedar Rapids print management issues?',
      answer: 'With our Cedar Rapids area presence, we provide same-day response for all issues, typically within 2-4 hours. Our technicians know Cedar Rapids traffic patterns, industrial facility protocols, and can quickly reach locations throughout the metro including Marion, Hiawatha, and surrounding Linn County communities.'
    },
    {
      question: 'What makes Cedar Rapids print management different from other Iowa markets?',
      answer: 'Cedar Rapids has a unique mix of aerospace/defense contractors requiring security compliance, major food processing facilities needing HACCP documentation, and growing healthcare systems. We tailor print management solutions for these specific Cedar Rapids industry requirements and compliance needs.'
    },
    {
      question: 'Do you provide Cedar Rapids-specific case studies and references?',
      answer: 'Yes, we have extensive Cedar Rapids client references across aerospace, manufacturing, healthcare, education, and professional services. We can provide relevant case studies showing cost savings and efficiency improvements specific to Cedar Rapids business environments and industry requirements.'
    }
  ]

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Aerospace & Defense Solutions',
      description: 'Secure print management for Cedar Rapids aerospace and defense contractors',
      features: [
        'Security compliance (ITAR, CMMC)',
        'Controlled document printing',
        'Audit trails & reporting',
        'Badge-based authentication'
      ]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Manufacturing Print Control',
      description: 'Industrial-grade solutions for Cedar Rapids manufacturing facilities',
      features: [
        'Production documentation control',
        'Quality system compliance',
        'Multi-shift user management',
        'Cost center tracking'
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Healthcare & Education',
      description: 'HIPAA-compliant and FERPA-compliant solutions for Cedar Rapids',
      features: [
        'HIPAA/FERPA compliance',
        'Secure document workflows',
        'Student/patient data protection',
        'Department cost allocation'
      ]
    }
  ]

  const localCaseStudy = {
    organization: 'Cedar Rapids Manufacturing Facility',
    challenge: 'Complex production documentation needs and high security requirements for aerospace contracts',
    solution: 'Canon uniFLOW implementation with secure authentication and controlled document workflows',
    results: [
      '40% reduction in document processing time',
      '100% audit trail compliance achieved',
      'Streamlined quality documentation',
      'Enhanced security for controlled documents'
    ],
    timeline: '4 weeks implementation',
    quote: 'The uniFLOW solution perfectly fits our aerospace manufacturing needs. Security compliance is seamless, and our quality documentation processes are much more efficient.'
  }

  const stats = [
    { number: '85+', label: 'Cedar Rapids Clients' },
    { number: '65+', label: 'Years Local Experience' },
    { number: '< 2hr', label: 'Average Response Time' },
    { number: '100%', label: 'Security Compliance' }
  ]

  const industryFocus = [
    {
      industry: 'Aerospace & Defense',
      companies: ['Collins Aerospace', 'Rockwell Collins legacy facilities', 'Defense contractors'],
      needs: ['ITAR compliance', 'Controlled document printing', 'Security protocols']
    },
    {
      industry: 'Manufacturing',
      companies: ['General Mills', 'Quaker Oats', 'Industrial equipment manufacturers'],
      needs: ['Production documentation', 'Quality system compliance', 'Multi-shift operations']
    },
    {
      industry: 'Healthcare & Education',
      companies: ['Mercy Medical Center', 'Cedar Rapids Community Schools', 'Kirkwood Community College'],
      needs: ['HIPAA/FERPA compliance', 'Secure workflows', 'Cost tracking']
    }
  ]

  const seoSchema = {
    '@type': 'LocalBusiness',
    'name': 'Infomax Office Systems - Cedar Rapids',
    'alternateName': 'Cedar Rapids Print Management Solutions',
    'description': 'Expert print management services in Cedar Rapids, Iowa. Specializing in aerospace, manufacturing, and healthcare solutions since 1958.',
    'telephone': '515-237-2352',
    'email': 'gfleschinfomaxoffice@gmail.com',
    'url': 'https://iowaprintsolutions.com/locations/cedar-rapids-print-management',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Cedar Rapids',
      'addressRegion': 'IA',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '41.9778',
      'longitude': '-91.6656'
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Cedar Rapids',
        'sameAs': 'https://en.wikipedia.org/wiki/Cedar_Rapids,_Iowa'
      },
      {
        '@type': 'City',
        'name': 'Marion'
      },
      {
        '@type': 'City',
        'name': 'Hiawatha'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Linn County'
      }
    ],
    'serviceType': [
      'Aerospace Print Management Cedar Rapids',
      'Manufacturing Document Control',
      'HIPAA Compliant Printing',
      'PaperCut Cedar Rapids'
    ]
  }

  return (
    <>
      <SEO 
        title="Cedar Rapids Print Management | Manufacturing & Aerospace Solutions"
        description="Expert print management for Cedar Rapids aerospace, manufacturing & healthcare. ITAR compliance, secure workflows. Serving Collins Aerospace & Cedar Rapids metro."
        keywords="Cedar Rapids print management, aerospace printing Cedar Rapids, manufacturing document control, Collins Aerospace printing, Mercy Medical print solutions"
        canonicalUrl="https://iowaprintsolutions.com/locations/cedar-rapids-print-management"
        schemaType="LocalBusiness"
        additionalSchema={seoSchema}
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Building className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Print Management & Document Control in Cedar Rapids, IA
              </h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
                Cedar Rapids businesses trust Infomax Office Systems for specialized print management solutions. 
                Serving aerospace, manufacturing, healthcare, and education since 1958 with expert PaperCut, 
                uniFLOW, and PrinterLogic implementation throughout Cedar Rapids, Marion, and Linn County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-red-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Cedar Rapids: (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-700 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get Security Assessment
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Intro */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Cedar Rapids Organizations Choose Our Print Management Expertise
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Cedar Rapids is home to world-class aerospace and manufacturing companies requiring the highest 
                levels of document security and compliance. From Collins Aerospace's defense contracts to 
                General Mills' food safety documentation, we understand the unique challenges of Cedar Rapids 
                industries. Our specialized experience with ITAR compliance, HACCP documentation, and 
                healthcare privacy makes us the trusted choice for Cedar Rapids' most demanding organizations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cedar Rapids Industry Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep specialization in Cedar Rapids' key industries with proven compliance 
                and security track record.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {industryFocus.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{sector.industry}</h3>
                  
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Clients</h4>
                  <ul className="space-y-2 mb-6">
                    {sector.companies.map((company, companyIndex) => (
                      <li key={companyIndex} className="text-gray-700 text-sm">
                        • {company}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Specialized Solutions</h4>
                  <ul className="space-y-2">
                    {sector.needs.map((need, needIndex) => (
                      <li key={needIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{need}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Specialized Print Management Services for Cedar Rapids
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-specific solutions designed for Cedar Rapids' unique compliance 
                and security requirements.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Case Study */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cedar Rapids Manufacturing Success Story
              </h2>
              <p className="text-xl text-gray-600">
                Real results from a Cedar Rapids aerospace manufacturing facility
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                  <p className="text-gray-700 mb-6">{localCaseStudy.challenge}</p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                  <p className="text-gray-700 mb-6">{localCaseStudy.solution}</p>
                  
                  <div className="flex items-center text-red-600 font-semibold">
                    <Clock className="h-5 w-5 mr-2" />
                    {localCaseStudy.timeline}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Results Achieved</h3>
                  <ul className="space-y-3 mb-6">
                    {localCaseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <blockquote className="bg-white rounded-lg p-6 shadow-sm">
                    <p className="text-gray-600 italic">"{localCaseStudy.quote}"</p>
                    <footer className="text-sm text-gray-500 mt-2">
                      — {localCaseStudy.organization}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AIOptimizedFAQ 
              faqs={cedarRapidsFAQ}
              title="Cedar Rapids Print Management - Frequently Asked Questions"
              description="Get answers to common questions about specialized print management services for Cedar Rapids businesses."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Secure Your Cedar Rapids Organization's Document Processes?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join Cedar Rapids aerospace, manufacturing, and healthcare leaders who trust 
                Infomax Office Systems for compliance-ready print management solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Cedar Rapids Team: (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Schedule Security Assessment
                </a>
              </div>
              
              <div className="mt-8 text-sm opacity-75">
                <p>Serving Cedar Rapids, Marion, Hiawatha, and throughout Linn County</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CedarRapidsPrintManagement