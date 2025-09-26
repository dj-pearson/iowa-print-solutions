import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Shield, Users, FileText, CheckCircle, ArrowRight, Lock, BarChart3, Award, Phone, Mail } from 'lucide-react'
import SEO from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'
import ServiceCard from '../../components/ServiceCard'
import TestimonialCard from '../../components/TestimonialCard'
import AIOptimizedFAQ from '../../components/AIOptimizedFAQ'
import LocalBusinessSchema from '../../components/LocalBusinessSchema'

const IowaHealthcarePrintSolutions = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries' },
    { label: 'Healthcare Print Solutions', href: '/industries/iowa-healthcare-print-solutions' }
  ]

  const healthcareFAQ = [
    {
      question: 'How do Iowa healthcare facilities achieve HIPAA compliance with print management?',
      answer: 'Iowa healthcare facilities achieve HIPAA compliance through secure print release systems, encrypted document storage, comprehensive audit trails, and user authentication. Our PaperCut and uniFLOW solutions include badge readers, PIN codes, and mobile app release to ensure patient information never sits unattended on printers.'
    },
    {
      question: 'What print management solutions work best for Iowa hospitals and clinics?',
      answer: 'Iowa hospitals typically benefit from uniFLOW for complex document workflows and integration with EHR systems, while smaller clinics often prefer PaperCut for its simplicity and cost-effectiveness. Both solutions provide HIPAA compliance, secure printing, and comprehensive tracking required in healthcare environments.'
    },
    {
      question: 'How can Iowa medical practices reduce printing costs while maintaining security?',
      answer: 'Iowa medical practices reduce printing costs through user quotas, duplex printing defaults, color restrictions, and department-based cost tracking. Our solutions eliminate wasteful printing while maintaining strict security through secure print release and audit trails for compliance requirements.'
    },
    {
      question: 'Do you support electronic health record (EHR) integration?',
      answer: 'Yes, our print management solutions integrate with major EHR systems used throughout Iowa including Epic, Cerner, AllScripts, and athenahealth. This ensures seamless workflows for patient records, prescriptions, insurance forms, and medical documentation while maintaining HIPAA compliance.'
    },
    {
      question: 'What support do you provide for Iowa healthcare emergencies?',
      answer: 'We provide priority support for Iowa healthcare facilities with same-day response for critical issues. Our team understands that patient care cannot be disrupted, so we maintain emergency protocols and backup systems to ensure continuous operation of your print infrastructure.'
    }
  ]

  const healthcareServices = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'HIPAA-Compliant Printing',
      description: 'Secure print release, encrypted workflows, and comprehensive audit trails'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'EHR Integration',
      description: 'Seamless integration with Epic, Cerner, AllScripts, and other major EHR systems'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Secure Document Workflows',
      description: 'Patient records, prescriptions, and insurance forms with end-to-end encryption'
    }
  ]

  const healthcareLocations = [
    {
      city: 'Des Moines',
      facilities: 'UnityPoint Health, MercyOne, Iowa Methodist',
      specialties: 'Large hospital systems, medical campuses',
      link: '/locations/des-moines-print-management'
    },
    {
      city: 'Iowa City', 
      facilities: 'UIHC, Mercy Iowa City, UI Children\'s Hospital',
      specialties: 'Academic medical center, research facilities',
      link: '/locations/iowa-city-print-management'
    },
    {
      city: 'Cedar Rapids',
      facilities: 'UnityPoint St. Luke\'s, Mercy Medical',
      specialties: 'Regional medical centers, specialty clinics',
      link: '/locations/cedar-rapids-print-management'
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer, Iowa Regional Medical Center',
      content: 'The secure print solutions from Iowa Print Solutions have transformed our patient privacy protocols. HIPAA compliance is now seamless across all departments.',
      rating: 5
    },
    {
      name: 'Mark Stevens',
      role: 'IT Director, Des Moines Medical Group',
      content: 'Their understanding of healthcare workflows and EHR integration saved us months of implementation time. Patient record security has never been stronger.',
      rating: 5
    }
  ]

  const complianceFeatures = [
    'PHI Protection with encrypted print queues',
    'Comprehensive audit trails for all print activities', 
    'Role-based access controls for different user types',
    'Secure print release with badge/PIN authentication',
    'Integration with existing Active Directory systems',
    'Mobile printing with security for BYOD environments'
  ]

  return (
    <>
      <SEO 
        title="Iowa Healthcare Print Solutions | HIPAA Compliant Print Management"
        description="HIPAA-compliant print management for Iowa healthcare facilities. Secure EHR integration, patient record printing, and medical workflow solutions for hospitals, clinics, and medical practices."
        keywords="Iowa healthcare printing, HIPAA compliant printing, medical print management Iowa, EHR integration printing, patient record security, healthcare document workflows Iowa"
        canonicalUrl="https://iowaprintsolutions.com/industries/iowa-healthcare-print-solutions"
      />

      <LocalBusinessSchema 
        businessName="Iowa Print Solutions - Healthcare Division"
        description="Specialized print management solutions for Iowa healthcare facilities with HIPAA compliance, secure patient record printing, EHR integration, and medical workflow optimization."
        address={{
          streetAddress: "5619 NE 14th St",
          city: "Des Moines", 
          state: "IA",
          postalCode: "50313"
        }}
        serviceArea="Iowa Healthcare Facilities"
        services={[
          {
            name: "HIPAA Compliant Print Management",
            description: "Secure printing solutions ensuring patient privacy and healthcare compliance across Iowa medical facilities"
          },
          {
            name: "EHR Print Integration", 
            description: "Seamless integration with Epic, Cerner, AllScripts and other major electronic health record systems"
          },
          {
            name: "Medical Document Security",
            description: "Encrypted workflows for patient records, prescriptions, insurance forms, and medical documentation"
          }
        ]}
        aggregateRating={{
          ratingValue: "4.9",
          reviewCount: "73"
        }}
      />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="bg-gray-50 py-4" />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                HIPAA-Compliant Print Solutions for Iowa Healthcare
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Secure patient record printing, EHR integration, and medical workflow solutions 
                for Iowa hospitals, clinics, and healthcare facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:(515) 237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Healthcare Team
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Healthcare Assessment
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Healthcare Smart Lead CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SmartLeadCTA 
              defaultCTA={{
                primaryText: "Get HIPAA Compliance Assessment",
                primaryLink: "/contact?industry=healthcare",
                secondaryText: "Download Healthcare Guide",
                secondaryLink: "/resources/hipaa-printing-guide"
              }}
              urgentCTA={{
                primaryText: "Emergency HIPAA Audit Support",
                primaryLink: "/contact?urgent=true&industry=healthcare",
                secondaryText: "Call Healthcare Team: (515) 123-4567",
                secondaryLink: "tel:(515)123-4567"
              }}
              premiumCTA={{
                primaryText: "Enterprise Healthcare Consultation",
                primaryLink: "/contact?enterprise=true&industry=healthcare",
                secondaryText: "Priority Implementation",
                secondaryLink: "/contact?priority=healthcare"
              }}
            />
          </div>
        </section>

        {/* Healthcare Resources */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Healthcare Print Management Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized solutions for Iowa medical facilities ensuring patient privacy, 
                HIPAA compliance, and seamless healthcare workflows.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {healthcareServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="text-blue-600 mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HIPAA Compliance Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Complete HIPAA Compliance Solution
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our healthcare print management solutions ensure Iowa medical facilities 
                  meet all HIPAA requirements while improving workflow efficiency.
                </p>
                
                <div className="space-y-4">
                  {complianceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    to="/blog/hipaa-printing-iowa"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn About HIPAA Print Compliance
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Healthcare Compliance Checklist
                </h3>
                <div className="space-y-3">
                  {[
                    'Patient records never left unattended',
                    'Encrypted print queues and storage',
                    'Complete audit trails for all activities',
                    'User authentication for every print job',
                    'Secure mobile printing capabilities',
                    'Integration with existing security systems'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Iowa Healthcare Locations */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serving Major Iowa Healthcare Systems
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by leading hospitals, clinics, and medical practices across Iowa 
                for secure, compliant print management solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {healthcareLocations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{location.city}</h3>
                  <p className="text-gray-600 mb-3 font-medium">{location.facilities}</p>
                  <p className="text-gray-500 text-sm mb-4">{location.specialties}</p>
                  <Link
                    to={location.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Location Details
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted by Iowa Healthcare Professionals
              </h2>
              <p className="text-lg text-gray-600">
                See what healthcare leaders across Iowa say about our solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Healthcare Print Management FAQ
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from Iowa healthcare facilities about HIPAA-compliant printing
              </p>
            </motion.div>

            <AIOptimizedFAQ faqs={healthcareFAQ} />
          </div>
        </section>

        {/* Related Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Healthcare Print Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Specialized print management tools for different healthcare needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <ServiceCard
                icon={<Heart className="h-8 w-8" />}
                title="PaperCut for Healthcare"
                description="Secure print management with HIPAA compliance, patient record protection, and comprehensive audit trails for Iowa medical facilities."
                link="/services/papercut-iowa"
                iowaLink="/blog/papercut-healthcare-iowa"
              />
              <ServiceCard
                icon={<FileText className="h-8 w-8" />}
                title="uniFLOW Medical Workflows"
                description="Advanced document workflows for patient records, prescriptions, and medical forms with EHR integration and encryption."
                link="/services/uniflow-iowa"
                iowaLink="/blog/uniflow-medical-iowa"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Secure Your Iowa Healthcare Facility's Print Environment
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join Iowa healthcare facilities that have enhanced patient privacy and achieved 
                HIPAA compliance with professional print management solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:(515) 237-2352"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Healthcare Specialists
                </a>
                <a
                  href="mailto:gfleschinfomaxoffice@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Free HIPAA Assessment
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default IowaHealthcarePrintSolutions