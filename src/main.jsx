import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Temporarily comment out analytics initialization to debug
// import { initGA4 } from './utils/analytics.js'
// const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'
// initGA4(GA_MEASUREMENT_ID)

// Ensure React is available globally for compatibility
window.React = React

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)