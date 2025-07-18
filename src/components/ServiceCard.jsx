import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, features, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-lg mr-4">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      {features && (
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      )}
      
      <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center space-x-1 group">
        <span>Learn More</span>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  )
}

export default ServiceCard