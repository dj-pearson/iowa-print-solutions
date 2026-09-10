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

// Register Service Worker for PWA support.
// Production only - in dev the worker's network-first cache serves stale
// bundles after an HMR reload, which looks like edits silently not applying.
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered:', registration.scope)
      })
      .catch((error) => {
        console.log('SW registration failed:', error)
      })
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)