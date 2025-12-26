import React from 'react'

/**
 * SEO-friendly page loading fallback component.
 *
 * Best practices for loading states:
 * 1. Minimal, fast-rendering placeholder (no heavy dependencies)
 * 2. Maintains page layout structure to prevent CLS (Cumulative Layout Shift)
 * 3. Accessible with proper ARIA attributes
 * 4. Matches the visual structure users will see
 */
const PageLoadingFallback = () => {
  return (
    <div
      className="min-h-screen bg-gray-50"
      role="progressbar"
      aria-label="Loading page content"
      aria-busy="true"
    >
      {/* Content area skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero section skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="h-8 bg-gray-200 rounded-lg w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>

        {/* Loading spinner */}
        <div className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="h-12 w-12 rounded-full border-4 border-gray-200"></div>
              <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
            </div>
            <span className="text-gray-500 text-sm">Loading...</span>
          </div>
        </div>

        {/* Content placeholder skeleton */}
        <div className="space-y-4 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  )
}

/**
 * Minimal inline loading spinner for smaller components
 */
const InlineLoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-3',
    xl: 'h-12 w-12 border-4'
  }

  return (
    <div className={`flex items-center justify-center ${className}`} role="progressbar" aria-busy="true">
      <div className={`${sizeClasses[size]} rounded-full border-gray-200 border-t-blue-600 animate-spin`}></div>
    </div>
  )
}

/**
 * Skeleton component for content placeholders
 */
const Skeleton = ({ className = '', variant = 'text' }) => {
  const baseClasses = 'animate-pulse bg-gray-200 rounded'

  const variantClasses = {
    text: 'h-4 w-full',
    title: 'h-8 w-3/4',
    subtitle: 'h-6 w-1/2',
    paragraph: 'h-4 w-full',
    card: 'h-48 w-full rounded-lg',
    avatar: 'h-12 w-12 rounded-full',
    button: 'h-10 w-32 rounded-md'
  }

  return <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}></div>
}

export { PageLoadingFallback, InlineLoadingSpinner, Skeleton }
export default PageLoadingFallback
