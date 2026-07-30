import React from 'react'
import { CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react'
import { getProduct, FACTS_VERIFIED } from '../config/products'

/**
 * Renders a verified, vendor-cited release-facts block.
 *
 * Every feature shown comes from src/config/products.js, where each entry is
 * traceable to a vendor source. Use this instead of hand-writing feature lists
 * into article bodies: it keeps claims accurate, keeps them consistent across
 * pages, and makes a single release a one-file update.
 *
 * The visible source citations are deliberate. Accurate, attributed claims are
 * what earn citations in AI search results and what separates this site from
 * the vendor-brochure content it competes with.
 *
 * @param {Object} props
 * @param {string} props.productId - 'papercut' | 'uniflow' | 'printerlogic'
 * @param {string[]} [props.featureIds] - Subset of feature ids, in display order.
 *   Omit to show all features for the product.
 * @param {string} [props.version] - Only show features tagged with this version.
 * @param {string} [props.title] - Heading override.
 * @param {boolean} [props.showSources=true] - Render the vendor citation list.
 */
const VerifiedReleaseFacts = ({
  productId,
  featureIds,
  version,
  title,
  showSources = true,
}) => {
  const product = getProduct(productId)
  if (!product) return null

  let features = product.features || []
  if (version) {
    features = features.filter((f) => !f.version || f.version === version)
  }
  if (featureIds?.length) {
    features = featureIds
      .map((id) => features.find((f) => f.id === id))
      .filter(Boolean)
  }
  if (!features.length) return null

  const heading =
    title || `What actually shipped in ${product.currentVersionLabel || product.name}`

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden mb-8">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="flex items-start">
          <ShieldCheck
            className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0"
            aria-hidden="true"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{heading}</h3>
            <p className="text-sm text-gray-600 mt-1">
              Feature list taken from {product.vendor} release documentation.
              Last checked against vendor sources on{' '}
              <time dateTime={FACTS_VERIFIED}>
                {new Date(`${FACTS_VERIFIED}T00:00:00`).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-5">
        <dl className="space-y-5">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start">
              <CheckCircle
                className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <dt className="font-semibold text-gray-900">{feature.title}</dt>
                <dd className="text-gray-600 mt-1">{feature.description}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      {showSources && product.sources?.length > 0 && (
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Vendor sources
          </h4>
          <ul className="space-y-1">
            {product.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                >
                  {source.label}
                  <ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default VerifiedReleaseFacts
