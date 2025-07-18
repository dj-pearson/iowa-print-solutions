import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialCard = ({ name, company, location, testimonial, rating = 5, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <Quote className="h-8 w-8 text-blue-600 opacity-50" />
      </div>
      
      <p className="text-gray-700 mb-6 italic">"{testimonial}"</p>
      
      <div className="flex items-center mb-3">
        {[...Array(rating)].map((_, index) => (
          <Star key={index} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <div className="border-t pt-4">
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{company}</p>
        <p className="text-xs text-blue-600 font-medium">{location}</p>
      </div>
    </motion.div>
  )
}

export default TestimonialCard