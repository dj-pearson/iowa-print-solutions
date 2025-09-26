import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Users, CheckCircle, Star, ArrowRight, Shield, BarChart3, Building } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import AIOptimizedFAQ from '../../components/AIOptimizedFAQ'
import LocationBusinessSchema from '../../components/LocationBusinessSchema'
import FAQSchema from '../../components/FAQSchema'

const DubuquePrintManagement = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Dubuque Print Management', href: '/locations/dubuque-print-management' }
  ]

  const dubuqueFAQ = [
    {
      question: 'What print management services do you offer in Dubuque?',
      answer: 'We provide comprehensive PaperCut, uniFLOW, and PrinterLogic solutions for Dubuque area businesses. Our specialties include manufacturing print security, healthcare HIPAA compliance, financial services document workflows, and multi-campus educational support.'
    },
    {
      question: 'Do you work with Dubuque manufacturing companies?',
      answer: 'Yes, we have extensive experience with Dubuque manufacturers including John Deere Dubuque Works, Flexsteel, and other industrial companies. We understand manufacturing requirements for technical documentation, quality control printing, and shop floor secure document access.'
    },
    {
      question: 'Can you support University of Dubuque and other local colleges?',
      answer: 'Absolutely. We provide campus-wide print management solutions including student printing quotas, departmental cost tracking, secure faculty printing, and integration with existing IT infrastructure. Our systems scale from small colleges to large university campuses.'
    },
    {
      question: 'How do you help Dubuque healthcare facilities?',
      answer: 'We specialize in HIPAA-compliant print solutions for Dubuque medical facilities including secure patient record printing, prescription workflows, insurance documentation, and integration with electronic health record systems. Complete audit trail capabilities ensure compliance.'
    },
    {
      question: 'What is your service coverage for the greater Dubuque area?',
      answer: 'We serve Dubuque proper and the surrounding tri-state area including East Dubuque, Platteville, Prairie du Chien, and other regional communities. Our team understands the unique business relationships across state lines in this region.'
    }
  ]

  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Manufacturing Excellence',
      description: 'Secure technical documentation and quality control printing for major Dubuque manufacturers'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Healthcare Compliance',
      description: 'HIPAA-compliant patient record printing and medical workflow automation'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Higher Education',
      description: 'Campus-wide print management for University of Dubuque and regional colleges'
    }
  ]

  const caseStudies = [
    {
      client: 'Major Dubuque Manufacturer',
      challenge: 'Secure technical drawings and quality documentation across production lines',
      solution: 'PaperCut MF with badge release and department cost tracking',
      result: '95% reduction in document security incidents, $25K annual cost savings'
    },
    {
      client: 'Dubuque Regional Medical Center',
      challenge: 'HIPAA-compliant patient record printing and audit trails',
      solution: 'uniFLOW secure workflows with encrypted document storage',
      result: 'Perfect HIPAA audit results, 70% faster document retrieval'
    },
    {
      client: 'University of Dubuque',
      challenge: 'Student print quota management across multiple campus buildings',
      solution: 'PaperCut campus deployment with mobile printing integration',
      result: '60% reduction in printing costs, improved student experience'
    }
  ]

  const industries = [
    'Manufacturing & Industrial',
    'Healthcare & Medical',
    'Higher Education',
    'Financial Services',
    'Professional Services',
    'Government & Municipal'
  ]

  // SEO Schema for location
  const seoSchema = {
    '@type': 'LocalBusiness',
    'name': 'Iowa Print Solutions - Dubuque',
    'description': 'Professional print management services for Dubuque manufacturing, healthcare, and education. PaperCut, uniFLOW & PrinterLogic expertise.',
    'areaServed': [
      'Dubuque',
      'East Dubuque',
      'Tri-State Area',
      'Dubuque County'
    ],
    'serviceType': 'Print Management Services'
  }

  return (
    <>
      <SEO 
        title="Dubuque Print Management | Manufacturing & Healthcare Solutions"
        description="Expert print management for Dubuque manufacturing, healthcare, and education. PaperCut, uniFLOW & PrinterLogic implementation with tri-state area expertise."
        keywords="Dubuque print management, manufacturing printing Iowa, healthcare print security, PaperCut Dubuque, University of Dubuque printing, tri-state print solutions"
        canonicalUrl="https://iowaprintsolutions.com/locations/dubuque-print-management"
        schemaType="LocalBusiness"
        additionalSchema={seoSchema}
      />
      
      <LocationBusinessSchema 
        locationName="Dubuque"
        description="Comprehensive print management services for Dubuque's manufacturing, healthcare, and education sectors. Expert solutions with deep understanding of tri-state area business requirements and cross-border operations."
        address={{
          city: "Dubuque",
          state: "IA",
          postalCode: "52001"
        }}
        serviceArea="Greater Dubuque and Tri-State Area"
        services={[
          {
            name: "Manufacturing Print Security",
            description: "Secure technical documentation and quality control printing for Dubuque industrial companies"
          },
          {
            name: "Healthcare HIPAA Compliance",
            description: "Complete HIPAA-compliant printing solutions for Dubuque medical facilities and clinics"
          },
          {
            name: "Higher Education Solutions",
            description: "Campus-wide print management for University of Dubuque and regional educational institutions"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.9",
          reviewCount: "35"
        }}
        review={{
          ratingValue: "5",
          author: "Robert Wilson, Manufacturing IT Manager",
          reviewBody: "Iowa Print Solutions' expertise in manufacturing environments is unmatched. Their PaperCut implementation secured our technical documents while dramatically reducing our printing costs.",
          datePublished: "2024-01-12"
        }}
      />
      
      <FAQSchema faqs={dubuqueFAQ} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dubuque Print Management Solutions
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Expert print management for Dubuque manufacturing, healthcare, and education sectors. 
                PaperCut, uniFLOW & PrinterLogic expertise serving the tri-state area since 1958.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:(515) 237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Free Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dubuque Industry Specialization
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From John Deere Dubuque Works to the University of Dubuque, we understand the unique 
                print management requirements of this historic river city.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="text-purple-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dubuque Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from manufacturing companies, healthcare facilities, and educational institutions 
                throughout the greater Dubuque area.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-3 text-purple-600">{study.client}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-700">Challenge:</span>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Solution:</span>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Result:</span>
                      <p className="text-green-600 font-medium text-sm">{study.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Industries We Serve in Dubuque
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized expertise across Dubuque's diverse economic landscape.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="font-medium">{industry}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions from Dubuque area businesses about our print management solutions.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <AIOptimizedFAQ faqs={dubuqueFAQ} />
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Dubuque Print Infrastructure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join leading Dubuque manufacturers, healthcare facilities, and educational institutions 
                optimizing their document workflows and reducing costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:(515) 237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (515) 237-2352
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Schedule Assessment
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default DubuquePrintManagement