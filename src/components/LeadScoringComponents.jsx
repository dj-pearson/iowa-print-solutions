import { Link } from 'react-router-dom'
import { useLeadScoring } from './AnalyticsProvider'

/**
 * A call to action that escalates with visitor engagement.
 *
 * Two call shapes, both in use:
 *
 *   <SmartLeadCTA size="lg">Request an assessment</SmartLeadCTA>
 *   <SmartLeadCTA defaultCTA={{...}} urgentCTA={{...}} premiumCTA={{...}} />
 *
 * The second was what every caller in the codebase actually used, and the
 * component implemented only the first - so Blog.jsx and both page templates
 * passed fully written CTA copy into a component that discarded it and
 * rendered the string "Learn More". The config API is implemented here rather
 * than stripped from the callers, because the callers were right about what
 * this component is for.
 *
 * Each CTA object takes primaryText, primaryLink, secondaryText and
 * secondaryLink. Which one renders depends on the visitor's lead grade from
 * AnalyticsProvider: premium for a hot lead, urgent for a warm one, default
 * otherwise. Missing tiers fall back to defaultCTA, so passing only
 * defaultCTA is valid.
 *
 * This file also used to export its own useLeadScoring, a stub returning
 * zeroes that shadowed the real hook in AnalyticsProvider by name. Nothing
 * imported it - every import site was commented out - and two same-named
 * hooks returning different shapes is a trap, so it is gone.
 */

const isExternal = (href = '') => /^(https?:|tel:|mailto:)/.test(href)

const CTAButton = ({ href, children, variant = 'primary', size = 'lg' }) => {
  const base = 'font-semibold transition-colors inline-block text-center rounded-lg'
  const tone = variant === 'primary'
    ? 'bg-blue-600 hover:bg-blue-700 text-white'
    : 'bg-gray-600 hover:bg-gray-700 text-white'
  const scale = size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3'
  const className = `${base} ${tone} ${scale}`

  if (!href) return <div className={className}>{children}</div>
  return isExternal(href)
    ? <a href={href} className={className}>{children}</a>
    : <Link to={href} className={className}>{children}</Link>
}

export const SmartLeadCTA = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  defaultCTA,
  urgentCTA,
  premiumCTA,
}) => {
  const { getLeadGrade } = useLeadScoring()

  // Simple call shape: render whatever was passed as children.
  if (!defaultCTA && !urgentCTA && !premiumCTA) {
    const base = 'font-semibold transition-colors inline-block text-center rounded-lg'
    const tone = variant === 'primary'
      ? 'bg-blue-600 hover:bg-blue-700 text-white'
      : 'bg-gray-600 hover:bg-gray-700 text-white'
    const scale = size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3'
    return <div className={`${base} ${tone} ${scale} ${className}`}>{children || 'Learn More'}</div>
  }

  const grade = getLeadGrade()
  const cta =
    (grade === 'hot' && (premiumCTA || urgentCTA)) ||
    (grade === 'warm' && (urgentCTA || premiumCTA)) ||
    defaultCTA ||
    urgentCTA ||
    premiumCTA

  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
      {cta.primaryText && (
        <CTAButton href={cta.primaryLink} variant="primary" size="lg">
          {cta.primaryText}
        </CTAButton>
      )}
      {cta.secondaryText && (
        <CTAButton href={cta.secondaryLink} variant="secondary" size="lg">
          {cta.secondaryText}
        </CTAButton>
      )}
    </div>
  )
}

export const BehaviorTrigger = ({ children }) => <>{children}</>
