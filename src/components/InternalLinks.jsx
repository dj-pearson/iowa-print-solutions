import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { siteConfig } from '../config/site'

/**
 * Collection of internal linking components for improved SEO
 * Provides consistent, optimized link components throughout the site
 */

/**
 * Smart internal link with optional external handling
 */
export const SmartLink = ({
  to,
  children,
  className = '',
  external = false,
  ...props
}) => {
  // Determine if link is external
  const isExternal = external || (to && (to.startsWith('http') && !to.includes(siteConfig.url)))

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline ${className}`}
        {...props}
      >
        {children}
        <ExternalLink className="w-3 h-3" />
      </a>
    )
  }

  return (
    <Link
      to={to}
      className={`text-blue-600 hover:text-blue-800 hover:underline ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

/**
 * Call-to-action link with arrow
 */
export const CTALink = ({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-blue-600 hover:text-blue-800 hover:underline',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  }

  const baseClass = variant === 'ghost'
    ? ''
    : 'inline-flex items-center justify-center rounded-lg font-medium transition-colors'

  return (
    <Link
      to={to}
      className={`${baseClass} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      <ArrowRight className={`ml-2 ${size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'}`} />
    </Link>
  )
}

/**
 * Service link card for product/service pages
 */
export const ServiceLink = ({
  to,
  title,
  description,
  icon: Icon,
  className = '',
}) => {
  return (
    <Link
      to={to}
      className={`group block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all ${className}`}
    >
      {Icon && (
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      )}
      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        {description}
      </p>
      <span className="inline-flex items-center text-sm font-medium text-blue-600">
        Learn more
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  )
}

/**
 * Location link for Iowa cities
 */
export const LocationLink = ({
  city,
  slug,
  region,
  className = '',
}) => {
  const path = `/locations/${slug}-print-management`

  return (
    <Link
      to={path}
      className={`group inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 ${className}`}
    >
      <span className="hover:underline">{city}</span>
      {region && (
        <span className="text-gray-400 text-sm">({region})</span>
      )}
    </Link>
  )
}

/**
 * Quick links section for footers and sidebars
 */
export const QuickLinks = ({
  title,
  links,
  columns = 1,
  className = '',
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }

  return (
    <div className={className}>
      {title && (
        <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <ul className={`grid ${gridCols[columns]} gap-2`}>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="text-gray-600 hover:text-blue-600 hover:underline text-sm"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Breadcrumb-style location trail
 */
export const LocationTrail = ({
  city,
  region,
  state = 'Iowa',
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2 text-sm text-gray-600 ${className}`}>
      <Link to="/locations" className="hover:text-blue-600 hover:underline">
        {state}
      </Link>
      <span>/</span>
      {region && (
        <>
          <span>{region}</span>
          <span>/</span>
        </>
      )}
      <span className="font-medium text-gray-900">{city}</span>
    </div>
  )
}

/**
 * Product comparison link section
 */
export const ComparisonLinks = ({
  currentProduct,
  products = ['papercut', 'uniflow', 'printerlogic'],
  className = '',
}) => {
  const productInfo = {
    papercut: { name: 'PaperCut', path: '/services/papercut-iowa' },
    uniflow: { name: 'uniFLOW', path: '/services/uniflow-iowa' },
    printerlogic: { name: 'PrinterLogic', path: '/services/printerlogic-iowa' },
  }

  const otherProducts = products.filter(p => p !== currentProduct)

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <span className="text-sm text-gray-600">Compare with:</span>
      {otherProducts.map(product => (
        <Link
          key={product}
          to={productInfo[product].path}
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          {productInfo[product].name}
        </Link>
      ))}
      <Link
        to="/print-management-comparison"
        className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
      >
        Full comparison
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  )
}

export default {
  SmartLink,
  CTALink,
  ServiceLink,
  LocationLink,
  QuickLinks,
  LocationTrail,
  ComparisonLinks,
}
