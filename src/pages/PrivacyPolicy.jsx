import React from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Iowa Print Solutions is committed to protecting your privacy
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  Iowa Print Solutions may collect the following types of information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Company information for service delivery</li>
                  <li>Technical information for support purposes</li>
                  <li>Usage data to improve our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the collected information for:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Providing print management services</li>
                  <li>Technical support and troubleshooting</li>
                  <li>Communication about our services</li>
                  <li>Improving our service offerings</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-700">
                  Iowa Print Solutions does not sell, trade, or otherwise transfer your personal information to third parties except as necessary to provide our services or as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Iowa Print Solutions</strong><br />
                    Email: DPearson@InfomaxOffice.com<br />
                    Phone: (515) 237-2352
                  </p>
                </div>
              </div>

              <div className="text-sm text-gray-500 border-t pt-6">
                <p>This Privacy Policy was last updated on January 2025.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy 