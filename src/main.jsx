import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initGA4 } from './utils/analytics.js'
import { GA_CONFIG } from './utils/analyticsConfig.js'

// Initialize Google Analytics
initGA4(GA_CONFIG.MEASUREMENT_ID)

// Ensure React is available globally for compatibility
window.React = React

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)