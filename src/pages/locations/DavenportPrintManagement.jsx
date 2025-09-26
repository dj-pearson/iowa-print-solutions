import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Users, CheckCircle, Star, ArrowRight, Shield, BarChart3, Truck } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import AIOptimizedFAQ from '../../components/AIOptimizedFAQ'

const DavenportPrintManagement = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Davenport Print Management', href: '/locations/davenport-print-management' }
  ]

  const davenportFAQ = [
    {
      question: 'Why choose Davenport print management services from Infomax Office Systems?',
      answer: 'Infomax Office Systems understands the Quad Cities business environment and Davenport\'s strategic location as a Mississippi River transportation hub. From major manufacturers like Alcoa and John Deere to Genesis Health System and St. Ambrose University, we\'ve served the Davenport area since 1958 with specialized knowledge of regional business needs.'
    },
    {
      question: 'Which Davenport organizations use PaperCut and uniFLOW solutions?',
      answer: 'Major Davenport organizations including Genesis Health System, St. Ambrose University, Davenport Community School District, major manufacturing facilities, logistics companies, and professional services throughout the Quad Cities area rely on our print management expertise and regional understanding.'
    },
    {
      question: 'How do you handle multi-state Quad Cities implementations?',
      answer: 'We have extensive experience with multi-location implementations across Iowa and Illinois, including coordination between Davenport, Bettendorf, Rock Island, and Moline facilities. Our solutions handle cross-state compliance requirements and unified management across the entire Quad Cities region.'
    },
    {
      question: 'What makes Davenport print management different from other Iowa markets?',
      answer: 'Davenport\'s position in the Quad Cities creates unique challenges including multi-state operations, major logistics and transportation companies, significant manufacturing presence, and cross-border business relationships. We specialize in solutions that work seamlessly across this complex regional business environment.'
    },
    {
      question: 'Do you provide Davenport-specific case studies and references?',
      answer: 'Yes, we have extensive Quad Cities client references across healthcare, manufacturing, logistics, education, and professional services. We can provide relevant case studies showing cost savings and efficiency improvements specific to Davenport and the broader Quad Cities business environment.'
    }
  ]

  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Manufacturing & Logistics',
      description: 'Industrial-strength solutions for Davenport\'s transportation and manufacturing sectors',
      features: [
        'Multi-shift operations support',
        'Production documentation control',
        'Logistics workflow integration',
        'Cross-facility management'
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Healthcare & Education',
      description: 'Compliant solutions for Genesis Health System and St. Ambrose University',
      features: [
        'HIPAA compliance assurance',
        'Student privacy protection (FERPA)',
        'Secure patient data handling',
        'Academic department management'
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Multi-State Operations',
      description: 'Seamless print management across the Iowa-Illinois Quad Cities region',
      features: [
        'Cross-state coordination',
        'Unified reporting & management',
        'Consistent policy enforcement',
        'Regional compliance handling'
      ]
    }
  ]

  const localCaseStudy = {
    organization: 'Quad Cities Manufacturing Company',
    challenge: 'Managing print operations across multiple facilities in Iowa and Illinois with different compliance requirements',
    solution: 'PrinterLogic deployment with centralized management and location-specific policy controls',
    results: [
      '45% reduction in IT management overhead',
      'Unified print policies across all locations',
      'Simplified multi-state compliance',
      '30% decrease in printing costs'
    ],
    timeline: '5 weeks implementation',
    quote: 'Having one system manage our printing across Iowa and Illinois has been a game-changer. The consistency and cost savings have exceeded our expectations.'
  }

  const stats = [
    { number: '95+', label: 'Quad Cities Clients' },
    { number: '65+', label: 'Years Regional Experience' },
    { number: '< 3hr', label: 'Average Response Time' },
    { number: '2 States', label: 'Seamless Coverage' }
  ]

  const quadCitiesAdvantages = [
    {
      advantage: 'Regional Expertise',
      description: 'Deep understanding of Iowa-Illinois business operations and compliance requirements'
    },
    {
      advantage: 'Cross-State Coordination',
      description: 'Seamless implementation and support across state boundaries'
    },
    {
      advantage: 'Manufacturing Focus',
      description: 'Specialized solutions for industrial and logistics operations'
    },
    {
      advantage: 'Healthcare Leadership',
      description: 'Extensive experience with Genesis Health System and regional medical facilities'
    }
  ]

  const seoSchema = {
    '@type': 'LocalBusiness',
    'name': 'Infomax Office Systems - Davenport',
    'alternateName': 'Davenport Print Management Solutions',
    'description': 'Expert print management services in Davenport, Iowa and the Quad Cities. Specializing in multi-state operations, manufacturing, and healthcare since 1958.',
    'telephone': '515-237-2352',
    'email': 'gfleschinfomaxoffice@gmail.com',
    'url': 'https://iowaprintsolutions.com/locations/davenport-print-management',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Davenport',
      'addressRegion': 'IA',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '41.5236',
      'longitude': '-90.5776'
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Davenport',
        'sameAs': 'https://en.wikipedia.org/wiki/Davenport,_Iowa'
      },
      {
        '@type': 'City',
        'name': 'Bettendorf'
      },
      {
        '@type': 'City',
        'name': 'Rock Island'
      },
      {
        '@type': 'City',
        'name': 'Moline'
      }
    ],
    'serviceType': [
      'Quad Cities Print Management',
      'Multi-State Print Solutions',
      'Manufacturing Document Control',
      'Healthcare Print Security'
    ]
  }

  return (
    <>
      <SEO 
        title="Davenport Print Management | Quad Cities Multi-State Solutions"
        description="Expert print management for Davenport & Quad Cities. Multi-state operations, manufacturing & healthcare solutions. Genesis Health System & regional businesses trust us."
        keywords="Davenport print management, Quad Cities printing, multi-state print solutions, Genesis Health System printing, Davenport manufacturing print control"
        canonicalUrl="https://iowaprintsolutions.com/locations/davenport-print-management"
        schemaType="LocalBusiness"
        additionalSchema={seoSchema}
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Truck className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Print Management & Multi-State Solutions in Davenport, IA
              </h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
                Davenport and Quad Cities businesses trust Infomax Office Systems for comprehensive print management solutions. 
                Serving Iowa-Illinois multi-state operations since 1958 with expert PaperCut, uniFLOW, and PrinterLogic 
                implementation throughout Davenport, Bettendorf, and the entire Quad Cities region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Davenport: (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get Multi-Site Assessment
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
                Why Quad Cities Organizations Choose Our Print Management Expertise
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Davenport's position as the heart of the Quad Cities creates unique business opportunities and challenges. 
                From major manufacturers like John Deere and Alcoa requiring multi-shift operations to Genesis Health 
                System's comprehensive healthcare network and the region's thriving logistics sector, we understand 
                the complex requirements of businesses operating across Iowa and Illinois state lines. Our regional 
                expertise ensures seamless print management regardless of geographic or regulatory complexity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quad Cities Advantages */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quad Cities Regional Advantages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized expertise for the unique challenges and opportunities of the 
                Iowa-Illinois Quad Cities business environment.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {quadCitiesAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-green-50 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{advantage.advantage}</h3>
                  <p className="text-gray-700">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-green-50">
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
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
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
                Specialized Print Management Services for Davenport & Quad Cities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-focused solutions designed for the Quad Cities' unique multi-state 
                business environment and regional industries.
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
                    <div className="bg-green-100 p-3 rounded-full mr-4">
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
                Quad Cities Multi-State Success Story
              </h2>
              <p className="text-xl text-gray-600">
                Real results from a Quad Cities company with operations in both Iowa and Illinois
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                  <p className="text-gray-700 mb-6">{localCaseStudy.challenge}</p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                  <p className="text-gray-700 mb-6">{localCaseStudy.solution}</p>
                  
                  <div className="flex items-center text-green-600 font-semibold">
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
              faqs={davenportFAQ}
              title="Davenport & Quad Cities Print Management - Frequently Asked Questions"
              description="Get answers to common questions about multi-state print management services for Davenport and Quad Cities businesses."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Streamline Your Quad Cities Print Operations?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join Genesis Health System, manufacturing leaders, and Quad Cities businesses who trust 
                Infomax Office Systems for seamless multi-state print management solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Quad Cities Team: (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Schedule Multi-Site Assessment
                </a>
              </div>
              
              <div className="mt-8 text-sm opacity-75">
                <p>Serving Davenport, Bettendorf, Rock Island, Moline, and the entire Quad Cities region</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default DavenportPrintManagement