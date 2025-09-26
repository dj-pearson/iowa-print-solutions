import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import SEO from '../components/SEO'
import IowaBusinessFAQSchema from '../components/IowaBusinessFAQSchema'
import OrganizationSchema from '../components/OrganizationSchema'
import { SmartCTA, ExitIntentModal, SocialProofBanner } from '../components/PerformanceComponents'
import { useEngagementTracking, PhoneTracker } from '../components/AnalyticsComponents'
import { Printer, Settings, BarChart3, Shield, Users, Award, ArrowRight, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [showExitIntent, setShowExitIntent] = useState(false)
  const { scrollDepth, timeOnPage } = useEngagementTracking()
  
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && timeOnPage > 30 && !showExitIntent) {
        setShowExitIntent(true)
      }
    }
    
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [timeOnPage, showExitIntent])

  const stats = [
    { icon: Users, number: 'Hundreds', label: 'Iowa Clients via Infomax' },
    { icon: Award, number: '15+', label: 'Years Infomax Software Solutions' },
    { icon: Settings, number: '3', label: 'Major Platforms' },
    { icon: Shield, number: '100%', label: 'Security Focused' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Iowa Healthcare Organization',
      location: 'Des Moines, IA',
      testimonial: 'Working with Infomax Office Systems transformed our printing infrastructure. We reduced costs by 35% and improved efficiency dramatically.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Central Iowa School District',
      location: 'Cedar Rapids, IA',
      testimonial: 'The PaperCut implementation through Infomax was seamless. Their Iowa-based support team is incredibly responsive and knowledgeable.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Iowa Professional Services Firm',
      location: 'Iowa City, IA',
      testimonial: 'Uniflow has revolutionized our document workflows. The security features give us peace of mind, and the cost savings exceeded expectations.',
      rating: 5
    }
  ]

  const seoSchema = [
    {
      '@type': 'WebSite',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://iowaprintsolutions.com/resources?search={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'LocalBusiness',
      'name': 'Infomax Office Systems',
      'alternateName': 'Iowa Print Solutions',
      'description': 'Leading provider of print management solutions in Iowa since 1958. Expert PaperCut, uniFLOW, and PrinterLogic implementation and support.',
      'foundingDate': '1958',
      'telephone': '515-237-2352',
      'email': 'gfleschinfomaxoffice@gmail.com',
      'url': 'https://iowaprintsolutions.com',
      'logo': 'https://iowaprintsolutions.com/logo.png',
      'image': 'https://iowaprintsolutions.com/logo.png',
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
          '@type': 'State',
          'name': 'Iowa'
        },
        {
          '@type': 'City',
          'name': 'Des Moines'
        },
        {
          '@type': 'City',
          'name': 'Cedar Rapids'
        },
        {
          '@type': 'City',
          'name': 'Iowa City'
        },
        {
          '@type': 'City',
          'name': 'Davenport'
        }
      ],
      'serviceType': [
        'Print Management Software Implementation',
        'PaperCut Support and Services',
        'uniFLOW Implementation',
        'PrinterLogic Deployment',
        'Managed Print Services',
        'Document Management Solutions'
      ],
      'openingHours': 'Mo-Fr 08:00-17:00',
      'sameAs': [
        'https://www.infomaxoffice.com'
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Print Management Services',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'PaperCut Implementation',
              'description': 'Complete PaperCut MF deployment and support'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'uniFLOW Implementation',
              'description': 'Canon uniFLOW document workflow solutions'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'PrinterLogic Implementation',
              'description': 'Serverless print management deployment'
            }
          }
        ]
      }
    }
  ]

  return (
    <>
      <SEO 
        title="Print Management for Iowa | PaperCut, uniFLOW, PrinterLogic"
        description="Iowa print management experts. PaperCut, uniFLOW & PrinterLogic solutions via Infomax Office Systems. Serving Des Moines, Cedar Rapids since 1958."
        keywords="Iowa print management, print solutions Iowa, PaperCut Iowa implementation, Uniflow Iowa, PrinterLogic Iowa, managed print services Iowa, document management Iowa, print security Iowa, Infomax Office Systems, Des Moines print solutions, Cedar Rapids print management, Iowa City print services"
        canonicalUrl="https://iowaprintsolutions.com"
        schemaType="WebSite"
        additionalSchema={seoSchema}
      />
      <OrganizationSchema />
      <IowaBusinessFAQSchema />

      <div className="min-h-screen">
        <Hero />

        {/* Iowa Print Solutions Overview - GEO Optimized */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Iowa's Leading Print Management Solutions Provider Since 1958
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Infomax Office Systems serves as Iowa's premier print management partner, specializing in PaperCut MF, Canon Uniflow, and PrinterLogic implementations across Des Moines, Cedar Rapids, Iowa City, Davenport, and statewide. Our certified experts help Iowa businesses including healthcare systems like UnityPoint Health and Mercy Medical, educational institutions such as Iowa State University and University of Iowa, major corporations like Principal Financial and HyVee, and government agencies optimize printing costs, enhance security, and streamline document workflows.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">65+</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Years Serving Iowa</h3>
                  <p className="text-gray-600">Since 1958, we've been Iowa's trusted technology partner</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">500+</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Iowa Organizations</h3>
                  <p className="text-gray-600">Businesses, schools, and healthcare facilities trust our solutions</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">40%</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Average Cost Savings</h3>
                  <p className="text-gray-600">Typical print cost reduction for Iowa clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Iowa-Specific Service Areas */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serving All of Iowa's Print Management Needs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                From major metropolitan areas to rural Iowa communities, we provide comprehensive print management solutions statewide.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900">Des Moines Metro</h3>
                  <p className="text-sm text-gray-600">Central Iowa's business hub</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900">Cedar Rapids</h3>
                  <p className="text-sm text-gray-600">Eastern Iowa corridor</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900">Iowa City</h3>
                  <p className="text-sm text-gray-600">University and healthcare</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900">Davenport</h3>
                  <p className="text-sm text-gray-600">Quad Cities region</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900">Sioux City</h3>
                  <p className="text-sm text-gray-600">Northwest Iowa</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900">Waterloo</h3>
                  <p className="text-sm text-gray-600">Cedar Valley region</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900">Council Bluffs</h3>
                  <p className="text-sm text-gray-600">Southwest Iowa</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900">Dubuque</h3>
                  <p className="text-sm text-gray-600">Mississippi River region</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900">Ames</h3>
                  <p className="text-sm text-gray-600">Iowa State University</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900">Statewide</h3>
                  <p className="text-sm text-gray-600">All 99 Iowa counties</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with SEO-optimized content */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Iowa Print Solutions Information Hub
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive resources about PaperCut, Uniflow, and PrinterLogic solutions. Connect with Infomax Office Systems for professional implementation services throughout Iowa.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section with enhanced SEO content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Expert Iowa Print Management Resources & Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with comprehensive guides on print management solutions for Iowa organizations. From PaperCut implementation to Uniflow security and PrinterLogic serverless printing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Printer className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Complete PaperCut Implementation Guide for Iowa Organizations
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive guide to implementing PaperCut MF in your Iowa business. Best practices, cost optimization strategies, and step-by-step deployment for Des Moines, Cedar Rapids, and statewide organizations.
                  </p>
                  <Link
                    to="/resources/papercut-implementation-guide"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Read Implementation Guide
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Settings className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Uniflow Document Workflow Optimization for Iowa Businesses
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Maximize your Uniflow investment with advanced workflow automation and security features. Tailored solutions for Iowa healthcare, education, and professional services organizations.
                  </p>
                  <Link
                    to="/resources/uniflow-platform-overview"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Explore Uniflow Solutions
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Iowa Print Cost Reduction Strategies & ROI Analysis
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Proven methods to reduce printing costs by 20-40% in Iowa organizations. Real case studies from Des Moines, Cedar Rapids, and Iowa City businesses showing measurable results.
                  </p>
                  <Link
                    to="/resources/papercut-cost-reduction"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    View Cost Savings Strategies
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <Shield className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Enterprise Print Security Best Practices for Iowa
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Essential security measures for protecting sensitive documents in Iowa healthcare, financial, and government organizations. HIPAA, SOX, and compliance-ready solutions.
                  </p>
                  <Link
                    to="/resources/papercut-security-practices"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Learn Security Best Practices
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <Wrench className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    PrinterLogic Serverless Printing Migration for Iowa
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Step-by-step guide to migrating from traditional print servers to PrinterLogic's cloud-based serverless architecture. Reduce costs and improve reliability for Iowa organizations.
                  </p>
                  <a
                    href="https://www.infomaxoffice.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Consult with Iowa Experts
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Iowa Print Management Success Stories & Case Studies
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Real-world success stories from Iowa businesses that transformed their print infrastructure. Healthcare, education, and enterprise implementations across the state.
                  </p>
                  <Link
                    to="/resources"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Browse All Case Studies
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Testimonials Section with local SEO focus */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Iowa Organizations Trust Infomax Office Systems
              </h2>
              <p className="text-xl text-gray-600">
                See what Iowa clients across Des Moines, Cedar Rapids, Iowa City, and statewide are saying about Infomax Office Systems print management services and implementations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Performance Components */}
        <SocialProofBanner 
          message="Join 200+ Iowa businesses saving 30% on printing costs"
          cta="Get Your Free Assessment"
          ctaLink="/contact"
        />
        
        <ExitIntentModal 
          isOpen={showExitIntent}
          onClose={() => setShowExitIntent(false)}
          title="Wait! Don't Miss Out on Print Savings"
          message="Iowa businesses save an average of $2,400 annually with our print management solutions. Get your free cost analysis before you leave!"
          ctaText="Get Free Analysis"
          ctaLink="/print-cost-calculator"
        />
      </div>
    </>
  )
}

export default Home