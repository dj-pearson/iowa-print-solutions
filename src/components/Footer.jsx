
import React from 'react'
import { Printer, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Printer className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">Iowa Print Solutions</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Iowa's leading expert in print management solutions. Specializing in PaperCut, Uniflow, PrinterLogic, and comprehensive print optimization services.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Serving all of Iowa</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(515) 237-2352</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">DPearson@InfomaxOffice.com</span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://calendly.com/pearsondan/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Book a Time With Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Iowa Print Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
