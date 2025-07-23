
import React, { useState } from 'react'
import { ThumbsUp, ThumbsDown, Star } from 'lucide-react'

const ContentRating = ({ contentId, title }) => {
  const [rating, setRating] = useState(0)
  const [hasRated, setHasRated] = useState(false)
  const [feedback, setFeedback] = useState('')

  const handleRating = (value) => {
    setRating(value)
    setHasRated(true)
    // In a real app, you'd send this to your analytics
    console.log(`Content "${title}" rated ${value} stars`)
  }

  const handleFeedback = (type) => {
    setFeedback(type)
    // Send feedback to analytics
    console.log(`Content "${title}" feedback: ${type}`)
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Was this helpful?
      </h3>
      
      {!hasRated ? (
        <div className="flex items-center space-x-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <Star className="h-6 w-6" />
            </button>
          ))}
        </div>
      ) : (
        <div className="flex items-center space-x-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-6 w-6 ${
                star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-gray-600">Thank you for your rating!</span>
        </div>
      )}

      <div className="flex items-center space-x-4">
        <button
          onClick={() => handleFeedback('helpful')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
            feedback === 'helpful'
              ? 'bg-green-100 text-green-700'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          <ThumbsUp className="h-4 w-4" />
          <span>Helpful</span>
        </button>
        
        <button
          onClick={() => handleFeedback('not-helpful')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
            feedback === 'not-helpful'
              ? 'bg-red-100 text-red-700'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          <ThumbsDown className="h-4 w-4" />
          <span>Not Helpful</span>
        </button>
      </div>
    </div>
  )
}

export default ContentRating
