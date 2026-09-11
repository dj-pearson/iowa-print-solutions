import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowRight, ExternalLink } from 'lucide-react'
import { getAdvisory, getCurrentPatch } from '../config/products'

/**
 * Compact alert banner for an active security advisory.
 *
 * Drop this at the top of any page that recommends or explains an affected
 * product, so a reader who lands on an evergreen article still sees that
 * there is an emergency patch outstanding. Content comes from
 * `securityAdvisories` in src/config/products.js - when the advisory is
 * resolved, that one file update clears every banner on the site.
 *
 * @param {Object} props
 * @param {string} props.advisoryId - id from securityAdvisories, e.g. 'papercut-aug-2026'
 * @param {string} [props.href] - Path to the full write-up.
 * @param {string} [props.linkLabel]
 * @param {string} [props.className]
 */
const SecurityAdvisoryBanner = ({
  advisoryId,
  href = '/blog/papercut-emergency-patch-cve-2026-82078-iowa',
  linkLabel = 'Read the Iowa response guide',
  className = '',
}) => {
  const advisory = getAdvisory(advisoryId)
  if (!advisory) return null

  const patch = getCurrentPatch(advisoryId)
  const cveList = advisory.cves.map((c) => c.id).join(' and ')

  return (
    <aside
      role="note"
      aria-label="Active security advisory"
      className={`bg-red-50 border-l-4 border-red-600 p-6 mb-8 ${className}`}
    >
      <div className="flex items-start">
        <AlertTriangle
          className="h-6 w-6 text-red-600 mt-0.5 mr-3 flex-shrink-0"
          aria-hidden="true"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-red-900 mb-2">
            Active security advisory: {advisory.title}
          </h2>
          <p className="text-red-800 mb-3">
            {advisory.summary} {cveList} are being exploited in the wild.
            {patch && (
              <>
                {' '}
                The build you need is <strong>{patch.label}</strong>, released{' '}
                <time dateTime={patch.date}>{patch.dateDisplay}</time> for the{' '}
                {patch.branches.join(', ')} branches.
              </>
            )}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Link
              to={href}
              className="inline-flex items-center text-red-900 font-medium hover:text-red-700 underline"
            >
              {linkLabel}
              <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
            </Link>
            {advisory.bulletinUrl && (
              <a
                href={advisory.bulletinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-900 font-medium hover:text-red-700 underline"
              >
                Get the patch from {advisory.productId === 'papercut' ? 'PaperCut' : 'the vendor'}
                <ExternalLink className="h-4 w-4 ml-1" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            <a
              href="tel:5152372352"
              className="inline-flex items-center text-red-900 font-medium hover:text-red-700"
            >
              Or call (515) 237-2352
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SecurityAdvisoryBanner
