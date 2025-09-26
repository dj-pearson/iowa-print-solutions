import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Users, CheckCircle, Star, ArrowRight, Shield, BarChart3 } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import AIOptimizedFAQ from '../../components/AIOptimizedFAQ'
import LocationBusinessSchema from '../../components/LocationBusinessSchema'
import FAQSchema from '../../components/FAQSchema'
import { SmartLeadCTA, BehaviorTrigger } from '../../components/LeadScoringComponents'
import { PhoneTracker, EmailTracker } from '../../components/AnalyticsComponents'
import { useLeadScoring } from '../../components/LeadScoringComponents'
import { trackLocationPageView } from '../../utils/analytics'

const DesMoinesPrintManagement = () => {
  const { addInteraction, addPageView } = useLeadScoring()
  
  React.useEffect(() => {
    addPageView('/locations/des-moines-print-management', 'Des Moines Print Management')
    trackLocationPageView('Des Moines')
  }, [addPageView])

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Des Moines Print Management', href: '/locations/des-moines-print-management' }
  ]

  const desMoinesFAQ = [
    {
      question: 'Why choose Des Moines print management services from Infomax Office Systems?',
      answer: 'Infomax Office Systems has served Des Moines businesses since 1958, providing deep local expertise in Iowa business environments. We understand Des Moines-specific challenges like state government compliance, insurance industry requirements, and multi-site coordination across the metro area including West Des Moines, Ankeny, and Urbandale.'
    },
    {
      question: 'Which Des Moines organizations use PaperCut and uniFLOW?',
      answer: 'Major Des Moines organizations including state government agencies, Principal Financial Group locations, UnityPoint Health facilities, Drake University, and Des Moines Public Schools rely on our print management solutions. We serve everything from downtown office buildings to suburban business parks.'
    },
    {
      question: 'How quickly can you respond to Des Moines print management issues?',
      answer: 'With our local Des Moines presence, we provide same-day response for all issues, typically within 2-4 hours. Our technicians are familiar with Des Moines traffic patterns, building access procedures, and can reach any location in the metro area quickly, including West Des Moines, Ankeny, and surrounding communities.'
    },
    {
      question: 'What makes Des Moines print management different from other Iowa cities?',
      answer: 'Des Moines has unique requirements as Iowa\'s capital city, including state government compliance needs, major insurance and financial services presence, and diverse organizational sizes from Fortune 500 companies to small professional practices. We tailor solutions for this specific business environment.'
    },
    {
      question: 'Do you provide Des Moines-specific case studies and references?',
      answer: 'Yes, we have extensive Des Moines client references across healthcare, government, education, financial services, and professional organizations. We can provide relevant case studies showing cost savings and efficiency improvements specific to Des Moines business environments.'
    }
  ]

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'PaperCut Implementation',
      description: 'Complete PaperCut MF deployment for Des Moines organizations',
      features: [
        'User authentication & security',
        'Cost tracking & quotas',
        'Mobile printing solutions',
        'Integration with existing systems'
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'uniFLOW Document Workflows',
      description: 'Advanced Canon uniFLOW solutions for Des Moines businesses',
      features: [
        'Secure document processing',
        'HIPAA-compliant workflows',
        'Automated routing & filing',
        'Advanced authentication'
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'PrinterLogic Serverless',
      description: 'Eliminate print servers across Des Moines locations',
      features: [
        'Server elimination',
        'Multi-site management',
        'Reduced IT overhead',
        'Cloud-based administration'
      ]
    }
  ]

  const localCaseStudy = {
    organization: 'Des Moines Professional Services Firm',
    challenge: 'High printing costs and lack of visibility into departmental usage',
    solution: 'PaperCut MF implementation with department tracking and user quotas',
    results: [
      '32% reduction in overall printing costs',
      '45% decrease in color printing waste',
      'Complete visibility into department usage',
      'Improved client billing accuracy'
    ],
    timeline: '3 weeks implementation',
    quote: 'Working with Infomax transformed our print environment. The cost savings exceeded our expectations, and the detailed reporting helps us bill clients accurately.'
  }

  const stats = [
    { number: '150+', label: 'Des Moines Clients' },
    { number: '65+', label: 'Years Local Experience' },
    { number: '< 2hr', label: 'Average Response Time' },
    { number: '24/7', label: 'Emergency Support' }
  ]

  const seoSchema = {
    '@type': 'LocalBusiness',
    'name': 'Infomax Office Systems - Des Moines',
    'alternateName': 'Des Moines Print Management Solutions',
    'description': 'Leading print management services in Des Moines, Iowa. Expert PaperCut, uniFLOW, and PrinterLogic implementation since 1958.',
    'telephone': '515-237-2352',
    'email': 'gfleschinfomaxoffice@gmail.com',
    'url': 'https://iowaprintsolutions.com/locations/des-moines-print-management',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Des Moines',
      'addressRegion': 'IA',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '41.5868',
      'longitude': '-93.6250'
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Des Moines',
        'sameAs': 'https://en.wikipedia.org/wiki/Des_Moines,_Iowa'
      },
      {
        '@type': 'City',
        'name': 'West Des Moines'
      },
      {
        '@type': 'City',
        'name': 'Ankeny'
      },
      {
        '@type': 'City',
        'name': 'Urbandale'
      }
    ],
    'serviceType': [
      'PaperCut Implementation Des Moines',
      'uniFLOW Services Des Moines',
      'PrinterLogic Deployment Des Moines',
      'Print Management Des Moines'
    ]
  }

  return (
    <>
      <SEO 
        title="Des Moines Print Management | PaperCut, uniFLOW & PrinterLogic"
        description="Expert print management services in Des Moines, IA. PaperCut, uniFLOW & PrinterLogic implementation since 1958. Serving West Des Moines, Ankeny & metro area."
        keywords="Des Moines print management, PaperCut Des Moines, uniFLOW Des Moines, PrinterLogic Des Moines, West Des Moines printing, Ankeny print services"
        canonicalUrl="https://iowaprintsolutions.com/locations/des-moines-print-management"
        schemaType="LocalBusiness"
        additionalSchema={seoSchema}
      />
      
      <LocationBusinessSchema 
        locationName="Des Moines"
        description="Professional print management services for Des Moines area businesses. Expert implementation of PaperCut, uniFLOW, and PrinterLogic solutions with specialized support for insurance companies, government agencies, and healthcare organizations."
        address={{
          streetAddress: "5619 NE 14th St",
          city: "Des Moines",
          state: "IA",
          postalCode: "50313"
        }}
        serviceArea="Des Moines Metro Area"
        services={[
          {
            name: "PaperCut Implementation",
            description: "Complete PaperCut MF setup for Des Moines businesses with secure printing and cost tracking"
          },
          {
            name: "uniFLOW Document Workflows",
            description: "Advanced document workflow automation for Des Moines healthcare and insurance companies"
          },
          {
            name: "PrinterLogic Serverless Printing",
            description: "Modern serverless print management for Des Moines multi-location businesses"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.9",
          reviewCount: "52"
        }}
        review={{
          ratingValue: "5",
          author: "Jennifer Martinez, Insurance Operations Manager",
          reviewBody: "Iowa Print Solutions revolutionized our Des Moines office printing workflows. Their PaperCut implementation saved us thousands annually while improving security and efficiency.",
          datePublished: "2024-01-10"
        }}
      />
      
      <FAQSchema faqs={desMoinesFAQ} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Print Management & PaperCut Support in Des Moines, IA
              </h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
                Des Moines businesses trust Infomax Office Systems for expert print management solutions. 
                Serving Iowa's capital city since 1958 with PaperCut, uniFLOW, and PrinterLogic 
                implementation throughout Des Moines, West Des Moines, Ankeny, and the entire metro area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <PhoneTracker 
                    phoneNumber="(515) 237-2352"
                    location="Des Moines Page - Hero CTA"
                    className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors block text-center"
                  >
                    Call Des Moines: (515) 237-2352
                  </PhoneTracker>
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get Free Consultation
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
                Why Des Moines Organizations Choose Our Print Management Services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                As Iowa's capital city, Des Moines has unique business requirements. From state government 
                agencies requiring strict compliance to Fortune 500 insurance companies needing enterprise-scale 
                solutions, we understand Des Moines' diverse printing needs. Our 65+ years of local experience 
                means we know how to navigate everything from downtown office building access to suburban 
                business park logistics across West Des Moines, Ankeny, and Urbandale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blue-50 rounded-xl p-6"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Print Management Services for Des Moines Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions tailored for Des Moines organizations, from state 
                government compliance to enterprise-scale implementations.
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
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
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
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Des Moines Success Story
              </h2>
              <p className="text-xl text-gray-600">
                Real results from a Des Moines professional services organization
              </p>
            </motion.div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                  <p className="text-gray-700 mb-6">{localCaseStudy.challenge}</p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                  <p className="text-gray-700 mb-6">{localCaseStudy.solution}</p>
                  
                  <div className="flex items-center text-blue-600 font-semibold">
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AIOptimizedFAQ 
              faqs={desMoinesFAQ}
              title="Des Moines Print Management - Frequently Asked Questions"
              description="Get answers to common questions about print management services specifically for Des Moines businesses."
            />
          </div>
        </section>

        {/* Nearby Locations */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serving Iowa Statewide
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                While based in Des Moines, we provide expert print management services throughout Iowa. 
                Explore our specialized solutions for other major Iowa cities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  city: "Cedar Rapids",
                  href: "/locations/cedar-rapids-print-management",
                  description: "Manufacturing & healthcare print solutions",
                  industries: "Medical • Manufacturing • Professional"
                },
                {
                  city: "Iowa City", 
                  href: "/locations/iowa-city-print-management",
                  description: "University & healthcare specialization",
                  industries: "University • Healthcare • Research"
                },
                {
                  city: "Waterloo-Cedar Falls",
                  href: "/locations/waterloo-cedar-falls-print-management", 
                  description: "UNI & manufacturing expertise",
                  industries: "Education • Manufacturing • Agriculture"
                },
                {
                  city: "Davenport",
                  href: "/locations/davenport-print-management",
                  description: "Quad Cities business solutions",
                  industries: "Healthcare • Manufacturing • Logistics"
                },
                {
                  city: "Sioux City",
                  href: "/locations/sioux-city-print-management",
                  description: "Agriculture & transportation focus", 
                  industries: "Agriculture • Transportation • Medical"
                },
                {
                  city: "Dubuque",
                  href: "/locations/dubuque-print-management",
                  description: "Tri-state manufacturing solutions",
                  industries: "Manufacturing • Healthcare • Education"
                },
                {
                  city: "Council Bluffs", 
                  href: "/locations/council-bluffs-print-management",
                  description: "Omaha metro area expertise",
                  industries: "Transportation • Manufacturing • Healthcare"
                }
              ].map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{location.city}</h3>
                  <p className="text-sm text-gray-600 mb-3">{location.description}</p>
                  <p className="text-xs text-gray-500 mb-4">{location.industries}</p>
                  <Link
                    to={location.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Learn More
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Optimize Your Des Moines Organization's Printing?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of Des Moines businesses that trust Infomax Office Systems 
                for their print management needs. Free consultation and assessment included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:515-237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <PhoneTracker 
                    phoneNumber="(515) 237-2352"
                    location="Des Moines Page - Footer CTA"
                    className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                  >
                    Call Des Moines Team: (515) 237-2352
                  </PhoneTracker>
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Schedule Free Assessment
                </a>
              </div>
              
              <div className="mt-8 text-sm opacity-75">
                <p>Serving Des Moines, West Des Moines, Ankeny, Urbandale, and surrounding metro areas</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default DesMoinesPrintManagement