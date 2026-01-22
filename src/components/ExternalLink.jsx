import React from 'react'

/**
 * ExternalLink Component
 *
 * A reusable component for external links that ensures WCAG 2.1 AA compliance by:
 * - Opening links in a new tab/window with target="_blank"
 * - Adding rel="noopener noreferrer" for security
 * - Providing screen reader announcement that the link opens in a new window
 *
 * @param {string} href - The URL to link to
 * @param {React.ReactNode} children - The link content
 * @param {string} className - Optional additional CSS classes
 * @param {object} props - Any additional props to pass to the anchor element
 */
const ExternalLink = ({ href, children, className = '', ...props }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
      <span className="sr-only"> (opens in new window)</span>
    </a>
  )
}

export default ExternalLink
