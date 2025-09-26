import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { trackEvent } from '../utils/analytics'
import { GA_CONFIG } from '../utils/analyticsConfig'

const AnalyticsTestPage = () => {
  const [testResults, setTestResults] = useState({})
  const [isGA4Loaded, setIsGA4Loaded] = useState(false)

  useEffect(() => {
    // Check if GA4 is loaded
    const checkGA4 = () => {
      if (typeof window.gtag !== 'undefined') {
        setIsGA4Loaded(true)
        setTestResults(prev => ({
          ...prev,
          ga4_loaded: '✅ Google Analytics 4 is loaded'
        }))
      } else {
        setTestResults(prev => ({
          ...prev,
          ga4_loaded: '❌ Google Analytics 4 is not loaded'
        }))
      }
    }

    // Check GA4 status
    checkGA4()
    
    // Recheck after a delay in case script is still loading
    const timeout = setTimeout(checkGA4, 2000)
    
    return () => clearTimeout(timeout)
  }, [])

  const runTest = (testName, testFunction, description) => {
    try {
      testFunction()
      setTestResults(prev => ({
        ...prev,
        [testName]: `✅ ${description} - Success`
      }))
    } catch (error) {
      setTestResults(prev => ({
        ...prev,
        [testName]: `❌ ${description} - Error: ${error.message}`
      }))
    }
  }

  const testBasicEvent = () => {
    trackEvent('test_event', 'Analytics Test', 'Basic Event Test')
  }

  const testPageView = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_CONFIG.MEASUREMENT_ID, {
        page_title: 'Analytics Test Page',
        page_location: window.location.href
      })
    } else {
      throw new Error('gtag not available')
    }
  }

  const testFormSubmission = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'form_submission', {
        event_category: 'Test',
        event_label: 'Test Form',
        custom_parameters: {
          form_type: 'test_form'
        }
      })
    } else {
      throw new Error('gtag not available')
    }
  }

  const testLeadTracking = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'purchase', {
        transaction_id: `test_lead_${Date.now()}`,
        value: 100,
        currency: 'USD',
        items: [{
          item_id: 'test_lead',
          item_name: 'Test Lead',
          category: 'Lead Generation',
          quantity: 1,
          price: 100
        }]
      })
    } else {
      throw new Error('gtag not available')
    }
  }

  const testCustomEvent = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'iowa_business_interaction', {
        event_category: 'Iowa Business',
        event_label: 'Test Interaction',
        custom_parameters: {
          business_type: 'Test Business',
          iowa_city: 'Test City',
          interaction_type: 'Analytics Test'
        }
      })
    } else {
      throw new Error('gtag not available')
    }
  }

  const runAllTests = () => {
    runTest('basic_event', testBasicEvent, 'Basic Event Tracking')
    runTest('page_view', testPageView, 'Page View Tracking')
    runTest('form_submission', testFormSubmission, 'Form Submission Tracking')
    runTest('lead_tracking', testLeadTracking, 'Lead/Conversion Tracking')
    runTest('custom_event', testCustomEvent, 'Custom Iowa Business Event')
  }

  return (
    <>
      <Helmet>
        <title>Analytics Test Page - Iowa Print Solutions</title>
        <meta name="description" content="Test page for Google Analytics 4 implementation" />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics Test Dashboard</h1>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Google Analytics 4 Status</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-mono text-sm">
                  {testResults.ga4_loaded || 'Checking GA4 status...'}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Measurement ID: {GA_CONFIG.MEASUREMENT_ID}
                </p>
                <p className="text-sm text-gray-600">
                  Debug Mode: {GA_CONFIG.DEBUG_MODE ? 'Enabled' : 'Disabled'}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Event Tracking Tests</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <button 
                  onClick={() => runTest('basic_event', testBasicEvent, 'Basic Event Tracking')}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                  disabled={!isGA4Loaded}
                >
                  Test Basic Event
                </button>
                <button 
                  onClick={() => runTest('page_view', testPageView, 'Page View Tracking')}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                  disabled={!isGA4Loaded}
                >
                  Test Page View
                </button>
                <button 
                  onClick={() => runTest('form_submission', testFormSubmission, 'Form Submission Tracking')}
                  className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 disabled:opacity-50"
                  disabled={!isGA4Loaded}
                >
                  Test Form Submission
                </button>
                <button 
                  onClick={() => runTest('lead_tracking', testLeadTracking, 'Lead/Conversion Tracking')}
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50"
                  disabled={!isGA4Loaded}
                >
                  Test Lead Tracking
                </button>
                <button 
                  onClick={() => runTest('custom_event', testCustomEvent, 'Custom Iowa Business Event')}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
                  disabled={!isGA4Loaded}
                >
                  Test Custom Event
                </button>
                <button 
                  onClick={runAllTests}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50 md:col-span-2"
                  disabled={!isGA4Loaded}
                >
                  Run All Tests
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Test Results</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                {Object.keys(testResults).length === 0 ? (
                  <p className="text-gray-600">No tests run yet. Click the buttons above to test analytics functionality.</p>
                ) : (
                  <div className="space-y-2">
                    {Object.entries(testResults).map(([key, result]) => (
                      <p key={key} className="font-mono text-sm">
                        {result}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Implementation Instructions</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Replace 'G-XXXXXXXXXX' in <code>src/main.jsx</code> with your actual GA4 Measurement ID</li>
                  <li>Update the MEASUREMENT_ID in <code>src/utils/analyticsConfig.js</code></li>
                  <li>Deploy the site to your production environment</li>
                  <li>Test events in Google Analytics 4 Real-time reports</li>
                  <li>Set up conversion goals in GA4 for form submissions and phone calls</li>
                  <li>Configure enhanced e-commerce for lead value tracking</li>
                </ol>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Events Being Tracked</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold text-gray-800 mb-2">Conversion Events</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Form submissions</li>
                    <li>• Phone calls</li>
                    <li>• Quote requests</li>
                    <li>• Demo requests</li>
                    <li>• Resource downloads</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold text-gray-800 mb-2">Engagement Events</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Page scroll depth</li>
                    <li>• Time on page</li>
                    <li>• Calculator usage</li>
                    <li>• Comparison tool views</li>
                    <li>• Industry page visits</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Important Notes</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• This test page should be removed from production or hidden from search engines</li>
                <li>• Analytics events may take 24-48 hours to appear in full GA4 reports</li>
                <li>• Use Real-time reports in GA4 to see immediate event tracking</li>
                <li>• Ensure proper consent management for GDPR/CCPA compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnalyticsTestPage