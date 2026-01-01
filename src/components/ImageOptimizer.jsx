import React, { useState, useRef, useEffect } from 'react'

/**
 * Optimized Image component with lazy loading, placeholder, and performance enhancements
 * Improves Core Web Vitals (LCP, CLS) through proper sizing and loading strategies
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional CSS classes
 * @param {number|string} width - Image width
 * @param {number|string} height - Image height
 * @param {string} loading - 'lazy' or 'eager' (default: 'lazy')
 * @param {boolean} priority - If true, loads immediately with high fetchpriority (for LCP images)
 * @param {string} sizes - Responsive sizes attribute
 * @param {string} aspectRatio - CSS aspect ratio (e.g., '16/9', '4/3')
 */
const ImageOptimizer = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes,
  aspectRatio
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    if (!imgRef.current || priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px' // Start loading slightly before in view
      }
    )

    observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [priority])

  const shouldLoad = priority || isInView

  // Calculate aspect ratio for CLS prevention
  const containerStyle = {
    width: width || '100%',
    height: height || 'auto',
    ...(aspectRatio && { aspectRatio })
  }

  // Handle image load error
  const handleError = () => {
    setHasError(true)
    setIsLoaded(true) // Stop showing placeholder
  }

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={containerStyle}
    >
      {/* Placeholder skeleton while loading */}
      {!isLoaded && shouldLoad && !hasError && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div
          className="absolute inset-0 bg-gray-100 flex items-center justify-center"
          aria-label={`Image failed to load: ${alt}`}
        >
          <div className="text-gray-400 text-center p-4">
            <svg
              className="w-8 h-8 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">Image unavailable</span>
          </div>
        </div>
      )}

      {/* Actual image */}
      {shouldLoad && !hasError && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : loading}
          decoding={priority ? 'sync' : 'async'}
          fetchpriority={priority ? 'high' : 'auto'}
          sizes={sizes}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          width={width}
          height={height}
        />
      )}
    </div>
  )
}

export default ImageOptimizer
