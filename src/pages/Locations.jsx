import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone, ArrowRight, Building2 } from 'lucide-react'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'

const Locations = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Locations', path: '/locations' }
  ]

  const locations = [
    {
      name: 'Des Moines',
      slug: 'des-moines',
      region: 'Central Iowa',
      description: 'Serving the Des Moines metro area including West Des Moines, Ankeny, Urbandale, and surrounding Polk County communities.',
      highlights: ['Corporate headquarters region', 'Financial services hub', 'Government center', 'Healthcare systems'],
      color: 'blue'
    },
    {
      name: 'Cedar Rapids',
      slug: 'cedar-rapids',
      region: 'Eastern Iowa',
      description: 'Comprehensive print solutions for Cedar Rapids, Marion, Hiawatha, and the greater Linn County area.',
      highlights: ['Manufacturing center', 'Healthcare facilities', 'Educational institutions', 'Business corridor'],
      color: 'green'
    },
    {
      name: 'Iowa City',
      slug: 'iowa-city',
      region: 'University & Medical',
      description: 'Specialized services for Iowa City, Coralville, University Heights, and Johnson County academic and medical facilities.',
      highlights: ['University of Iowa', 'UI Hospitals & Clinics', 'Research institutions', 'Academic community'],
      color: 'yellow'
    }
  ]

  const serviceAreas = [
    'Adel', 'Albia', 'Algona', 'Ames', 'Ankeny', 'Atlantic', 'Bettendorf', 'Boone', 'Burlington', 
    'Carroll', 'Cedar Falls', 'Cedar Rapids', 'Centerville', 'Charles City', 'Cherokee', 'Clarinda',
    'Clinton', 'Council Bluffs', 'Cresco', 'Creston', 'Davenport', 'Decorah', 'Des Moines',
    'Dubuque', 'Elkader', 'Fairfield', 'Forest City', 'Fort Dodge', 'Fort Madison', 'Glenwood',
    'Grinnell', 'Grundy Center', 'Guthrie Center', 'Harlan', 'Independence', 'Indianola',
    'Iowa City', 'Iowa Falls', 'Jefferson', 'Keokuk', 'Keosauqua', 'Knoxville', 'Le Mars',
    'Leon', 'Logan', 'Maquoketa', 'Marengo', 'Marshall', 'Marshalltown', 'Mason City',
    'Mount Ayr', 'Mount Pleasant', 'Nevada', 'New Hampton', 'Newton', 'Northwood', 'Onawa',
    'Orange City', 'Osage', 'Osceola', 'Ottumwa', 'Perry', 'Pocahontas', 'Primghar',
    'Red Oak', 'Rock Rapids', 'Rockwell City', 'Sac City', 'Sheldon', 'Shenandoah',
    'Sibley', 'Sioux City', 'Spencer', 'Storm Lake', 'Tipton', 'Toledo', 'Vinton',
    'Washington', 'Waterloo', 'Waukon', 'Waverly', 'Webster City', 'West Union'
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-600',
        hover: 'hover:bg-blue-700',
        text: 'text-blue-600',
        border: 'border-blue-600'
      },
      green: {
        bg: 'bg-green-600',
        hover: 'hover:bg-green-700',
        text: 'text-green-600',
        border: 'border-green-600'
      },
      yellow: {
        bg: 'bg-yellow-600',
        hover: 'hover:bg-yellow-700',
        text: 'text-yellow-600',
        border: 'border-yellow-600'
      }
    }
    return colors[color] || colors.blue
  }

  return (
    <>
      <SEO 
        title="Iowa Print Solutions Locations - Statewide Print Management Services"
        description="Infomax Office Systems serves all of Iowa with expert print management solutions. Local service in Des Moines, Cedar Rapids, Iowa City, and statewide support for PaperCut, Uniflow, and PrinterLogic."
        keywords="Iowa print solutions locations, Des Moines print management, Cedar Rapids printing services, Iowa City print solutions, Iowa statewide print support, Infomax Office Systems locations"
        canonicalUrl="https://iowaprintsolutions.com/locations"
        schemaType="CollectionPage"
      />
      
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbItems} className="mb-8 text-blue-200" />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Building2 className="h-16 w-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Iowa Print Solutions Service Locations
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Serving all of Iowa since 1958. Local expertise with statewide reach for comprehensive 
                print management solutions across all 99 Iowa counties.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Primary Service Locations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Primary Service Locations
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Dedicated service areas with specialized expertise for Iowa's major business and academic centers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {locations.map((location, index) => {
                const colorClasses = getColorClasses(location.color)
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className={`h-32 ${colorClasses.bg} flex items-center justify-center`}>
                      <MapPin className="h-12 w-12 text-white" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{location.name}</h3>
                      <p className={`${colorClasses.text} font-medium mb-3`}>{location.region}</p>
                      <p className="text-gray-600 mb-4">{location.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-2">Key Industries:</h4>
                        <div className="flex flex-wrap gap-2">
                          {location.highlights.map((highlight, idx) => (
                            <span 
                              key={idx}
                              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        to={`/locations/${location.slug}`}
                        className={`inline-flex items-center justify-center w-full ${colorClasses.bg} ${colorClasses.hover} text-white px-6 py-3 rounded-md font-medium transition-colors`}
                      >
                        Learn More About {location.name}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Statewide Coverage */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Iowa Coverage
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                While we have specialized locations in Des Moines, Cedar Rapids, and Iowa City, 
                Infomax Office Systems provides comprehensive print management services throughout Iowa.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Iowa Cities We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm">
                {serviceAreas.map((city, index) => (
                  <div key={index} className="text-center p-2 bg-gray-50 rounded-md">
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6">
                ...and many more Iowa communities. Contact us to confirm service in your area.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Contact Infomax Office Systems today to discuss your Iowa print management needs. 
                We'll connect you with local experts who understand your region's unique requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://www.infomaxoffice.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Request Consultation
                  <ArrowRight className="h-4 w-4 ml-2" />
                  <span className="sr-only"> (opens in new window)</span>
                </a>
                <a
                  href="tel:5152372352"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Call (515) 237-2352
                  <Phone className="h-4 w-4 ml-2" />
                </a>
              </div>

              <div className="bg-blue-700 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-white mb-2">Local Iowa Expertise</h3>
                <p className="text-blue-100">
                  Our Iowa-based team understands local business needs, compliance requirements, 
                  and industry-specific challenges. We're not just a vendor – we're your local technology partner.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Locations
