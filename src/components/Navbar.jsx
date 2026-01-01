import React, { useState, useEffect, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, MapPin, Users, Calculator, Download, ArrowRight, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SearchBar from './SearchBar'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isOpen) setIsOpen(false)
        if (activeDropdown) setActiveDropdown(null)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, activeDropdown])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      megaMenu: {
        sections: [
          {
            title: 'Core Solutions',
            items: [
              { name: 'PaperCut Implementation', path: '/services/papercut', description: 'Print management & cost control' },
              { name: 'uniFLOW Solutions', path: '/services/uniflow', description: 'Document workflows & security' },
              { name: 'All Services', path: '/services', description: 'Complete service overview' }
            ]
          },
          {
            title: 'Iowa-Specific Solutions',
            items: [
              { name: 'PaperCut for Iowa', path: '/services/papercut-iowa', description: 'Iowa business implementations' },
              { name: 'uniFLOW for Iowa', path: '/services/uniflow-iowa', description: 'Iowa healthcare & workflows' },
              { name: 'PrinterLogic for Iowa', path: '/services/printerlogic-iowa', description: 'Serverless printing solutions' }
            ]
          },
          {
            title: 'Industries',
            items: [
              { name: 'Healthcare Solutions', path: '/industries/iowa-healthcare-print-solutions', description: 'HIPAA-compliant printing' },
              { name: 'Education Solutions', path: '/industries/iowa-education-print-solutions', description: 'K-12 & university solutions' },
              { name: 'Compare Solutions', path: '/print-management-comparison', description: 'PaperCut vs uniFLOW vs PrinterLogic' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Resources', 
      path: '/resources',
      megaMenu: {
        sections: [
          {
            title: 'Guides & Documentation',
            items: [
              { name: 'All Resources', path: '/resources', description: 'Complete resource center' },
              { name: 'Download Library', path: '/resource-library', description: 'Free guides & toolkits' },
              { name: 'Implementation Guides', path: '/resources/papercut-implementation-guide', description: 'Step-by-step setup guides' }
            ]
          },
          {
            title: 'Tools & Calculators',
            items: [
              { name: 'Print Cost Calculator', path: '/print-cost-calculator', description: 'Calculate potential savings' },
              { name: 'ROI Analysis Tools', path: '/tools', description: 'Business analysis tools' },
              { name: 'Comparison Tools', path: '/print-management-comparison', description: 'Solution comparisons' }
            ]
          },
          {
            title: 'Support Resources',
            items: [
              { name: 'Best Practices', path: '/resources/papercut-security-practices', description: 'Security & optimization tips' },
              { name: 'Training Materials', path: '/resources/papercut-cost-reduction', description: 'User guides & training' },
              { name: 'Troubleshooting', path: '/resources', description: 'Common issues & solutions' }
            ]
          }
        ]
      }
    },
    { name: 'Blog', path: '/blog' },
    { 
      name: 'Iowa Locations', 
      path: '/locations',
      megaMenu: {
        sections: [
          {
            title: 'Major Cities',
            items: [
              { name: 'Des Moines', path: '/locations/des-moines-print-management', description: 'Capital city solutions' },
              { name: 'Cedar Rapids', path: '/locations/cedar-rapids-print-management', description: 'Manufacturing & healthcare' },
              { name: 'Iowa City', path: '/locations/iowa-city-print-management', description: 'University & medical center' },
              { name: 'Davenport', path: '/locations/davenport-print-management', description: 'Quad Cities solutions' }
            ]
          },
          {
            title: 'Regional Centers',
            items: [
              { name: 'Waterloo-Cedar Falls', path: '/locations/waterloo-cedar-falls-print-management', description: 'UNI & manufacturing' },
              { name: 'Sioux City', path: '/locations/sioux-city-print-management', description: 'Agriculture & transportation' },
              { name: 'Dubuque', path: '/locations/dubuque-print-management', description: 'Tri-state manufacturing' },
              { name: 'Council Bluffs', path: '/locations/council-bluffs-print-management', description: 'Omaha metro solutions' }
            ]
          },
          {
            title: 'Service Areas',
            items: [
              { name: 'All Iowa Locations', path: '/locations', description: 'Complete coverage map' },
              { name: 'Service Coverage', path: '/about', description: 'Areas we serve' },
              { name: 'Remote Support', path: '/contact', description: 'Statewide assistance' }
            ]
          }
        ]
      }
    },
    { name: 'Contact', path: '/contact' }
  ]

  const handleDropdownEnter = (itemName) => {
    setActiveDropdown(itemName)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  const isActive = (item) => {
    if (item.path === location.pathname) return true
    if (item.path === '/resources' && location.pathname.startsWith('/resources')) return true
    if (item.path === '/services' && location.pathname.startsWith('/services')) return true
    if (item.path === '/locations' && location.pathname.startsWith('/locations')) return true
    if (item.path === '/industries' && location.pathname.startsWith('/industries')) return true
    return false
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/IPSLogo.png" 
                alt="Iowa Print Solutions Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-xl text-gray-900">Iowa Print Solutions</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.megaMenu && handleDropdownEnter(item.name)}
                onMouseLeave={() => item.megaMenu && handleDropdownLeave()}
              >
                {item.megaMenu ? (
                  <button
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Mega Menu */}
                <AnimatePresence>
                  {item.megaMenu && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-screen max-w-4xl bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                      style={{ left: '-50vw', transform: 'translateX(50%)' }}
                    >
                      <div className="p-8">
                        <div className="grid grid-cols-3 gap-8">
                          {item.megaMenu.sections.map((section, index) => (
                            <div key={index}>
                              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                                {section.title}
                              </h3>
                              <ul className="space-y-3">
                                {section.items.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link
                                      to={subItem.path}
                                      className="group block p-2 -m-2 rounded-lg hover:bg-gray-50 transition-colors"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <div className="flex items-start">
                                        <div className="flex-1">
                                          <div className="flex items-center">
                                            <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                              {subItem.name}
                                            </span>
                                            <ArrowRight className="ml-1 h-3 w-3 text-gray-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                                          </div>
                                          <p className="text-xs text-gray-500 mt-1">
                                            {subItem.description}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="mt-8 pt-8 border-t border-gray-200">
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-6">
                              <Link
                                to="/print-cost-calculator"
                                className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <Calculator className="h-4 w-4 mr-2" />
                                Cost Calculator
                              </Link>
                              <Link
                                to="/resource-library"
                                className="flex items-center text-sm text-green-600 hover:text-green-700 font-medium"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Free Resources
                              </Link>
                            </div>
                            <a
                              href="tel:(515) 237-2352"
                              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                              Call (515) 237-2352
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Desktop Search */}
            <div className="ml-4">
              <SearchBar variant="navbar" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 pt-4 pb-4 space-y-2">
              {/* Mobile Search */}
              <div className="pb-3 mb-2 border-b border-gray-200">
                <SearchBar variant="navbar" onClose={() => setIsOpen(false)} />
              </div>

              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-medium ${
                      isActive(item)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Mobile submenu items for key pages - expanded for better navigation */}
                  {item.megaMenu && (
                    <div className="ml-4 mt-2 space-y-1 pb-2">
                      {item.megaMenu.sections.slice(0, 2).map((section, sectionIdx) => (
                        <div key={sectionIdx} className={sectionIdx > 0 ? 'mt-3 pt-2 border-t border-gray-100' : ''}>
                          <p className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            {section.title}
                          </p>
                          {section.items.slice(0, 3).map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md mt-2"
                      >
                        View All {item.name} →
                      </Link>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:(515) 237-2352"
                  className="block w-full bg-blue-600 text-white text-center px-4 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Call (515) 237-2352
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default memo(Navbar)