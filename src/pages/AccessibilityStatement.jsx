import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, Phone, ExternalLink } from 'lucide-react'
import SEO from '../components/SEO'

const AccessibilityStatement = () => {
  const lastUpdated = 'January 2026'

  const accessibilityFeatures = [
    {
      title: 'Keyboard Navigation',
      description: 'All interactive elements can be accessed using keyboard navigation. Use Tab to move forward, Shift+Tab to move backward, and Enter or Space to activate elements.'
    },
    {
      title: 'Skip Links',
      description: 'Skip navigation links allow keyboard and screen reader users to bypass repetitive content and jump directly to main content.'
    },
    {
      title: 'Screen Reader Support',
      description: 'Our website is optimized for screen readers with proper ARIA labels, landmarks, and semantic HTML structure.'
    },
    {
      title: 'Focus Indicators',
      description: 'Visible focus indicators help users identify which element is currently selected when navigating with a keyboard.'
    },
    {
      title: 'Text Alternatives',
      description: 'All images include descriptive alt text, and icons have appropriate labels for assistive technologies.'
    },
    {
      title: 'Form Accessibility',
      description: 'All form fields have associated labels, error messages are announced to screen readers, and required fields are clearly indicated.'
    },
    {
      title: 'Color Contrast',
      description: 'We maintain WCAG 2.1 Level AA compliant color contrast ratios throughout our website to ensure text is readable.'
    },
    {
      title: 'Responsive Design',
      description: 'Our website is fully responsive and supports text resizing up to 200% without loss of content or functionality.'
    }
  ]

  const wcagGuidelines = [
    { name: 'Perceivable', description: 'Content is presented in ways that users can perceive, including text alternatives for images and captions for multimedia.' },
    { name: 'Operable', description: 'All functionality is accessible via keyboard, users have enough time to read content, and navigation is consistent.' },
    { name: 'Understandable', description: 'Content is readable and predictable, and users are helped to avoid and correct errors.' },
    { name: 'Robust', description: 'Content is compatible with current and future assistive technologies and user agents.' }
  ]

  return (
    <>
      <SEO
        title="Accessibility Statement | Iowa Print Solutions - WCAG 2.1 AA Compliance"
        description="Iowa Print Solutions is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility features and commitment to WCAG 2.1 Level AA compliance."
        keywords="accessibility statement, WCAG compliance, ADA compliance, web accessibility, Iowa Print Solutions accessibility, screen reader support"
        canonicalUrl="https://iowaprintsolutions.com/accessibility"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Accessibility Statement
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Iowa Print Solutions is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Commitment
              </h2>
              <div className="prose prose-blue max-w-none">
                <p className="text-gray-700 mb-4">
                  Iowa Print Solutions (powered by Infomax Office Systems) is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We aim to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                </p>
                <p className="text-gray-700 mb-4">
                  We believe that the web should be accessible to everyone, and we are dedicated to providing equal access to information and functionality for all users, including those who rely on assistive technologies.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WCAG Guidelines */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                WCAG 2.1 Compliance
              </h2>
              <p className="text-gray-700 mb-6">
                We strive to meet WCAG 2.1 Level AA compliance, which is organized around four core principles:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {wcagGuidelines.map((guideline, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">
                      {guideline.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {guideline.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Accessibility Features
              </h2>
              <p className="text-gray-700 mb-6">
                Our website includes the following accessibility features:
              </p>
              <div className="space-y-4">
                {accessibilityFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-5 flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Assistive Technology */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Assistive Technology Compatibility
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Our website is designed to be compatible with the following assistive technologies:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
                  <li>Screen magnification software</li>
                  <li>Speech recognition software</li>
                  <li>Keyboard-only navigation</li>
                  <li>Browser zoom functionality (up to 200%)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We recommend using the latest versions of browsers for the best experience with assistive technologies.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Known Limitations */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Known Limitations
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  While we strive for full accessibility, some content may have limitations:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Some third-party content or embedded widgets may not meet our accessibility standards</li>
                  <li>Older PDF documents may not be fully accessible (we are working to remediate these)</li>
                  <li>Some interactive calculators may have limited screen reader announcements</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We are actively working to address these limitations and improve accessibility across all areas of our website.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-12 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center text-white"
            >
              <h2 className="text-2xl font-bold mb-4">
                Feedback and Contact Information
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
                <a
                  href="mailto:DPearson@InfomaxOffice.com?subject=Accessibility%20Feedback"
                  className="flex items-center justify-center space-x-3 bg-white text-blue-600 px-6 py-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  <span className="font-medium">Email Us</span>
                </a>
                <a
                  href="tel:5152372352"
                  className="flex items-center justify-center space-x-3 bg-white text-blue-600 px-6 py-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  <span className="font-medium">(515) 237-2352</span>
                </a>
              </div>
              <p className="text-blue-100 mt-6 text-sm">
                We aim to respond to accessibility feedback within 2 business days.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Additional Resources
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Learn more about web accessibility:
                </p>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                      Web Content Accessibility Guidelines (WCAG)
                      <span className="sr-only">(opens in new window)</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ada.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                      Americans with Disabilities Act (ADA)
                      <span className="sr-only">(opens in new window)</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3.org/WAI/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                      W3C Web Accessibility Initiative (WAI)
                      <span className="sr-only">(opens in new window)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AccessibilityStatement
