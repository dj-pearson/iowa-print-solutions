import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Mail, Download, Calculator } from 'lucide-react'

const LoadingSpinner = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
    </div>
  )
}

const LoadingButton = ({ loading, children, className, ...props }) => {
  return (
    <button
      className={`relative ${className} ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <LoadingSpinner size="sm" />
          <span className="ml-2">Processing...</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}

const ProgressBar = ({ progress, className = '' }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <motion.div
        className="bg-blue-600 h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}

const SmartCTA = ({ pageType, location }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show CTA when user has scrolled 50% of the page
      if (scrollPosition > windowHeight * 0.5) {
        setHasScrolled(true)
      }
      
      // Hide CTA when user reaches footer (90% of page)
      if (scrollPosition > documentHeight * 0.9) {
        setIsVisible(false)
      } else if (hasScrolled) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  const getCTAContent = () => {
    switch (pageType) {
      case 'healthcare':
        return {
          title: 'Get HIPAA-Compliant Print Solutions',
          subtitle: 'Free healthcare print assessment',
          primaryCTA: 'Schedule HIPAA Assessment',
          primaryAction: 'mailto:gfleschinfomaxoffice@gmail.com?subject=HIPAA Print Assessment',
          secondaryCTA: 'Call Healthcare Team',
          secondaryAction: 'tel:(515) 237-2352',
          icon: <Phone className="h-5 w-5" />
        }
      case 'education':
        return {
          title: 'Reduce School Printing Costs by 40-60%',
          subtitle: 'Student quotas & FERPA compliance',
          primaryCTA: 'Download Education Guide',
          primaryAction: '/resource-library',
          secondaryCTA: 'Calculate Savings',
          secondaryAction: '/print-cost-calculator',
          icon: <Download className="h-5 w-5" />
        }
      case 'calculator':
        return {
          title: 'Get Expert Implementation Guidance',
          subtitle: 'Turn your savings into reality',
          primaryCTA: 'Schedule Consultation',
          primaryAction: 'mailto:gfleschinfomaxoffice@gmail.com',
          secondaryCTA: 'Call (515) 237-2352',
          secondaryAction: 'tel:(515) 237-2352',
          icon: <Phone className="h-5 w-5" />
        }
      case 'comparison':
        return {
          title: 'Ready to Choose the Right Solution?',
          subtitle: 'Get personalized recommendations',
          primaryCTA: 'Free Consultation',
          primaryAction: 'mailto:gfleschinfomaxoffice@gmail.com',
          secondaryCTA: 'Calculate ROI',
          secondaryAction: '/print-cost-calculator',
          icon: <Calculator className="h-5 w-5" />
        }
      default:
        return {
          title: 'Get Expert Print Management Guidance',
          subtitle: 'Free consultation & assessment',
          primaryCTA: 'Schedule Assessment',
          primaryAction: 'mailto:gfleschinfomaxoffice@gmail.com',
          secondaryCTA: 'Call (515) 237-2352',
          secondaryAction: 'tel:(515) 237-2352',
          icon: <Phone className="h-5 w-5" />
        }
    }
  }

  const ctaContent = getCTAContent()

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-6 right-6 z-50 max-w-sm"
      >
        <div className="bg-white border border-gray-200 rounded-lg shadow-xl p-6">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
          
          <div className="flex items-center mb-3">
            <div className="text-blue-600 mr-2">{ctaContent.icon}</div>
            <h3 className="font-bold text-gray-900 text-sm">{ctaContent.title}</h3>
          </div>
          
          <p className="text-gray-600 text-xs mb-4">{ctaContent.subtitle}</p>
          
          <div className="space-y-2">
            <a
              href={ctaContent.primaryAction}
              className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {ctaContent.primaryCTA}
            </a>
            <a
              href={ctaContent.secondaryAction}
              className="block w-full border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              {ctaContent.secondaryCTA}
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

const ExitIntentModal = ({ isOpen, onClose, pageType }) => {
  if (!isOpen) return null

  const getExitContent = () => {
    switch (pageType) {
      case 'healthcare':
        return {
          title: 'Wait! Get Your Free HIPAA Compliance Checklist',
          subtitle: 'Before you go, download our essential HIPAA print compliance guide used by Iowa healthcare facilities.',
          offer: 'HIPAA Print Compliance Checklist',
          cta: 'Get Free Checklist'
        }
      case 'education':
        return {
          title: 'Download the K-12 Print Management Toolkit',
          subtitle: 'Get ready-to-use policies, training materials, and cost reduction strategies for Iowa schools.',
          offer: 'Complete K-12 Toolkit',
          cta: 'Download Free Toolkit'
        }
      default:
        return {
          title: 'Get Your Free Print Cost Analysis',
          subtitle: 'See how much your Iowa business can save with professional print management.',
          offer: 'Print Cost Calculator + Expert Analysis',
          cta: 'Get Free Analysis'
        }
    }
  }

  const content = getExitContent()

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-lg p-8 max-w-md w-full"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{content.title}</h2>
            <p className="text-gray-600 mb-6">{content.subtitle}</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="font-medium text-blue-900">{content.offer}</p>
            </div>
            
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                {content.cta}
              </button>
              <button
                onClick={onClose}
                className="w-full text-gray-500 hover:text-gray-700 transition-colors"
              >
                No thanks, continue browsing
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const SocialProofBanner = ({ stats }) => {
  const [currentStat, setCurrentStat] = useState(0)

  useEffect(() => {
    // Defensive programming: ensure stats is an array before setting interval
    if (!stats || !Array.isArray(stats) || stats.length === 0) {
      return
    }

    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [stats, stats?.length])

  // Defensive programming: ensure stats is an array before rendering
  if (!stats || !Array.isArray(stats) || stats.length === 0) {
    return null
  }

  return (
    <div className="bg-blue-600 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStat}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-sm"
          >
            <span className="font-medium">{stats[currentStat].value}</span> {stats[currentStat].label}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export {
  LoadingSpinner,
  LoadingButton,
  ProgressBar,
  SmartCTA,
  ExitIntentModal,
  SocialProofBanner
}