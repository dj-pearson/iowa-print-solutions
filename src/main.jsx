import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initGA4 } from './utils/analytics.js'

// Initialize Google Analytics 4
// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics 4 measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Update this with your actual GA4 measurement ID
initGA4(GA_MEASUREMENT_ID)

// Ensure React is available globally for compatibility
window.React = React

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)