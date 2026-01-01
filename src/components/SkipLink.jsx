import React from 'react'

/**
 * SkipLink component for keyboard accessibility
 * Allows users to skip navigation and jump directly to main content
 * WCAG 2.1 compliance for keyboard navigation
 */
const SkipLink = () => {
  const handleClick = (e) => {
    e.preventDefault()
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all"
    >
      Skip to main content
    </a>
  )
}

export default SkipLink
