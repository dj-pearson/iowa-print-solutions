import {
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  FileSearch,
  Landmark,
  ShieldCheck,
  ShieldOff,
  Wrench,
} from 'lucide-react'
import { getAdvisory, FACTS_VERIFIED } from '../config/products'

const severityStyles = {
  critical: 'bg-red-100 text-red-800',
  high: 'bg-orange-100 text-orange-800',
  medium: 'bg-amber-100 text-amber-800',
  low: 'bg-gray-100 text-gray-800',
}

/**
 * Full vendor-cited detail block for one security advisory.
 *
 * Everything rendered here comes from `securityAdvisories` in
 * src/config/products.js, where each entry carries its vendor, researcher, or
 * CISA source. Sections are opt-out via props so an audience-specific article
 * can show the parts its readers act on and skip the rest.
 *
 * @param {Object} props
 * @param {string} props.advisoryId
 * @param {boolean} [props.showIndicators=true] - Render the indicators-of-compromise list.
 * @param {boolean} [props.showPatchHistory=true] - Render superseded patch releases.
 * @param {boolean} [props.showSources=true]
 */
const SecurityAdvisoryDetail = ({
  advisoryId,
  showIndicators = true,
  showPatchHistory = true,
  showSources = true,
}) => {
  const advisory = getAdvisory(advisoryId)
  if (!advisory) return null

  const currentPatch = advisory.patches.find((p) => p.current)
  const supersededPatches = advisory.patches.filter((p) => !p.current)

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden mb-8">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="flex items-start">
          <ShieldCheck
            className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0"
            aria-hidden="true"
          />
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {advisory.title}
              </h3>
              <span
                className={`text-xs font-semibold uppercase px-2 py-1 rounded ${
                  severityStyles[advisory.severity] || severityStyles.low
                }`}
              >
                {advisory.severity}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Disclosed{' '}
              <time dateTime={advisory.disclosedDate}>
                {advisory.disclosedDateDisplay}
              </time>
              . Details taken from the vendor advisory and the security
              researchers cited below, last checked{' '}
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

      <div className="px-6 py-5 space-y-6">
        {/* CVEs */}
        <section>
          <h4 className="font-semibold text-gray-900 mb-3">The vulnerabilities</h4>
          <dl className="space-y-4">
            {advisory.cves.map((cve) => (
              <div key={cve.id} className="border border-gray-200 rounded-lg p-4">
                <dt className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-mono text-sm font-semibold text-gray-900">
                    {cve.id}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                    {cve.cvss ? `CVSS ${cve.cvss} ${cve.rating}` : cve.rating}
                  </span>
                </dt>
                <dd className="text-gray-600 text-sm">{cve.description}</dd>
                {cve.cwe && (
                  <dd className="text-gray-500 text-xs mt-1">{cve.cwe}</dd>
                )}
              </div>
            ))}
          </dl>
          {advisory.chainNote && (
            <p className="text-gray-700 text-sm mt-3">
              <strong>Why the pair matters:</strong> {advisory.chainNote}
            </p>
          )}
        </section>

        {/* Affected / not affected */}
        <section className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 rounded-lg p-4">
            <h4 className="flex items-center font-semibold text-red-900 mb-2 text-sm">
              <AlertTriangle className="h-4 w-4 mr-2" aria-hidden="true" />
              Affected
            </h4>
            <p className="text-red-800 text-sm">{advisory.affected}</p>
          </div>
          {advisory.notAffected?.length > 0 && (
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="flex items-center font-semibold text-green-900 mb-2 text-sm">
                <ShieldOff className="h-4 w-4 mr-2" aria-hidden="true" />
                Not affected
              </h4>
              <ul className="text-green-800 text-sm space-y-1">
                {advisory.notAffected.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Patches */}
        {currentPatch && (
          <section>
            <h4 className="font-semibold text-gray-900 mb-3">
              The build you need to be on
            </h4>
            <div className="border-2 border-green-500 rounded-lg p-4 bg-green-50">
              <p className="font-semibold text-green-900">
                {currentPatch.label}
                <span className="font-normal text-green-800">
                  {' '}
                  &mdash;{' '}
                  <time dateTime={currentPatch.date}>
                    {currentPatch.dateDisplay}
                  </time>
                  , for {currentPatch.branches.join(', ')}
                </span>
              </p>
              <p className="text-green-800 text-sm mt-2">{currentPatch.note}</p>
              {advisory.bulletinUrl && (
                <a
                  href={advisory.bulletinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-800 transition-colors"
                >
                  {advisory.bulletinLabel || 'Open the vendor security bulletin'}
                  <ExternalLink className="h-4 w-4 ml-2" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </div>
            {showPatchHistory && supersededPatches.length > 0 && (
              <div className="mt-4">
                <h5 className="text-sm font-semibold text-gray-700 mb-2">
                  Superseded releases, for anyone reconstructing the timeline
                </h5>
                <ul className="space-y-2">
                  {supersededPatches.map((p) => (
                    <li
                      key={p.label}
                      className="text-sm text-gray-600 border border-gray-200 rounded p-3"
                    >
                      <span className="font-medium text-gray-800">{p.label}</span>{' '}
                      &mdash;{' '}
                      <time dateTime={p.date}>{p.dateDisplay}</time>. {p.note}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Mitigations */}
        {advisory.mitigations?.length > 0 && (
          <section>
            <h4 className="flex items-center font-semibold text-gray-900 mb-3">
              <Wrench className="h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
              What to do
            </h4>
            <ol className="space-y-3">
              {advisory.mitigations.map((m, i) => (
                <li key={i} className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 font-semibold text-xs rounded-full h-5 w-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 text-sm">{m}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Indicators of compromise */}
        {showIndicators && advisory.indicators?.length > 0 && (
          <section>
            <h4 className="flex items-center font-semibold text-gray-900 mb-3">
              <FileSearch
                className="h-4 w-4 mr-2 text-blue-600"
                aria-hidden="true"
              />
              Published indicators of compromise
            </h4>
            <p className="text-gray-600 text-sm mb-3">
              Patching does not evict an attacker who already has a foothold.
              Check these before you close the ticket.
            </p>
            <dl className="space-y-3">
              {advisory.indicators.map((ind) => (
                <div key={ind.where} className="bg-gray-50 rounded p-3">
                  <dt className="font-mono text-xs font-semibold text-gray-900">
                    {ind.where}
                  </dt>
                  <dd className="text-gray-700 text-sm mt-1">{ind.what}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* CISA KEV */}
        {advisory.kev?.listed && (
          <section className="bg-amber-50 rounded-lg p-4">
            <h4 className="flex items-center font-semibold text-amber-900 mb-2 text-sm">
              <Landmark className="h-4 w-4 mr-2" aria-hidden="true" />
              On the CISA Known Exploited Vulnerabilities catalog
            </h4>
            <p className="text-amber-800 text-sm">
              Added{' '}
              <time dateTime={advisory.kev.addedDate}>
                {advisory.kev.addedDateDisplay}
              </time>
              . {advisory.kev.note}
            </p>
          </section>
        )}

        {advisory.exposureNote && (
          <p className="text-gray-500 text-sm border-t border-gray-200 pt-4">
            <CheckCircle
              className="h-4 w-4 text-gray-400 inline mr-1 -mt-0.5"
              aria-hidden="true"
            />
            Scope: {advisory.exposureNote}
          </p>
        )}
      </div>

      {showSources && advisory.sources?.length > 0 && (
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Sources</h4>
          <ul className="space-y-1">
            {advisory.sources.map((source) => (
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

export default SecurityAdvisoryDetail
