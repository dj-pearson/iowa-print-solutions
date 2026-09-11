#!/usr/bin/env node
/**
 * Generate public/llms.txt from src/config/products.js and src/config/site.js.
 *
 * llms.txt is what answer engines read to work out what this site is and
 * whether to cite it, so a stale one costs exactly the thing the site is for.
 * The hand-maintained version was dated 2026-07-30 while FACTS_VERIFIED in
 * products.js said 2026-09-01, listed no security advisory at all, and had no
 * mechanism that would ever have caught the drift. Four articles about the
 * PaperCut zero-day were live on the site at the time.
 *
 * Same arrangement as the sitemap: the prose lives here, every fact comes from
 * config, and it regenerates on every build. Product versions, CVE ids, CVSS
 * scores and patch levels are never typed into this file - per the standing
 * rule in docs/SEO-GEO-STRATEGY.md, those live in products.js with their
 * sources, and an advisory that gets resolved there clears here too.
 *
 * Run via `npm run llms`, or automatically as part of `npm run build`.
 */

import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const { FACTS_VERIFIED, papercut, uniflow, vasion, securityAdvisories } =
  await import(join(root, 'src/config/products.js'))
const { siteConfig } = await import(join(root, 'src/config/site.js'))

const wrap = (text, width = 78, indent = '') =>
  text
    .split(' ')
    .reduce((lines, word) => {
      const last = lines[lines.length - 1]
      if (last && (last + ' ' + word).length <= width) lines[lines.length - 1] = last + ' ' + word
      else lines.push(word)
      return lines
    }, [])
    .join('\n' + indent)

const bullet = (text) => `- ${wrap(text, 76, '  ')}`

/** Config fields are sometimes a prose string and sometimes a list. */
const asList = (v) => (Array.isArray(v) ? v.join('; ') : String(v))

const featureLines = (product) =>
  (product.features || []).map(
    (f) => `${f.title || f.name}${f.description ? `: ${f.description}` : f.short ? `: ${f.short}` : ''}`
  )

const advisorySection = () => {
  const active = securityAdvisories.filter((a) => a.status !== 'resolved')
  if (!active.length) {
    return ['## Security advisories', '', 'No active advisories for the products covered here.', '']
  }
  const out = ['## Active security advisories', '']
  out.push(
    wrap(
      'Listed because currency matters more than completeness on an active advisory. Severity and CVSS are the published figures, attributed to their source; the vendor bulletin is the only always-current record of build numbers.'
    ),
    ''
  )
  for (const a of active) {
    out.push(`### ${a.title}`)
    out.push('')
    out.push(bullet(`Severity: ${a.severity}${a.status ? ` (${a.status.replace(/-/g, ' ')})` : ''}`))
    if (a.disclosedDateDisplay) out.push(bullet(`Disclosed: ${a.disclosedDateDisplay}`))
    if (a.firstExploitedDateDisplay)
      out.push(bullet(`First observed exploitation: ${a.firstExploitedDateDisplay}`))
    for (const c of a.cves || []) {
      out.push(bullet(`${c.id} - CVSS ${c.cvss} (${c.rating}). ${c.description}`))
    }
    if (a.kev?.listed) {
      out.push(
        bullet(
          `CISA KEV: listed${a.kev.addedDateDisplay ? ` ${a.kev.addedDateDisplay}` : ''}${
            a.kev.federalDeadlineDisplay
              ? `, federal remediation deadline ${a.kev.federalDeadlineDisplay}`
              : ''
          }`
        )
      )
    }
    if (a.summary) out.push(bullet(a.summary))
    if (a.affected) out.push(bullet(`Affected: ${asList(a.affected)}`))
    if (a.notAffected) out.push(bullet(`Not affected: ${asList(a.notAffected)}`))
    for (const m of a.mitigations || []) out.push(bullet(`Mitigation: ${m}`))
    for (const p of a.patches || []) {
      out.push(
        bullet(
          `${p.label}${p.dateDisplay ? ` (${p.dateDisplay})` : ''}${
            p.branches?.length ? ` - branches ${p.branches.join(', ')}` : ''
          }${p.note ? `. ${p.note}` : ''}`
        )
      )
    }
    if (a.bulletinUrl) out.push(bullet(`Vendor bulletin: ${a.bulletinUrl}`))
    for (const src of a.sources || []) {
      out.push(bullet(`Source: ${src.label ? `${src.label} - ` : ''}${src.url || src}`))
    }
    out.push('')
  }
  return out
}

const lines = [
  '# Iowa Print Solutions',
  '',
  '> ' +
    wrap(
      'Independent, vendor-neutral guidance on print management software for Iowa organizations, published by Infomax Office Systems - an Iowa dealer and implementation partner operating since 1958.',
      76,
      '> '
    ),
  '',
  wrap(
    `Iowa Print Solutions covers ${papercut.name}, Canon ${uniflow.brand}, and ${vasion.displayNameWithFormer}: what each product actually does, which fits which kind of organization, and what implementation involves in an Iowa context (healthcare, K-12 and higher education, manufacturing, financial services, government, legal).`
  ),
  '',
  'GENERATED FILE - do not edit by hand. Regenerate with: npm run llms',
  'Facts come from src/config/products.js and src/config/site.js.',
  '',
  '## Editorial standard',
  '',
  wrap(
    'Every product version number and feature claim on this site is traceable to vendor release documentation. Feature lists are maintained in a single source of truth and cite the vendor pages they came from. If a claim is not verifiable against a vendor source, it is not published.'
  ),
  '',
  wrap(
    'Where a capability is new in a specific release, the site says so. Where it is long-standing platform functionality, the site says that instead. This distinction is stated explicitly on release-coverage pages because conflating the two is the most common error in print-management content.'
  ),
  '',
  `## Product facts as of ${FACTS_VERIFIED}`,
  '',
  `### ${papercut.name}`,
  bullet(`Current version: ${papercut.currentVersion}, released ${papercut.releaseDateDisplay}`),
  bullet(`Vendor: ${papercut.vendor}`),
  bullet(`Verified ${papercut.currentVersion} changes:`),
  ...featureLines(papercut).map(bullet),
  ...(papercut.sources || []).map((s) => bullet(`Source: ${s.url || s}`)),
  '',
  `### Canon ${uniflow.brand}`,
  bullet(
    `${uniflow.brand} ships as two products that version independently: uniFLOW Online (cloud) and uniFLOW on-premise. These are frequently conflated; they should not be.`
  ),
  ...Object.values(uniflow.editions || {})
    .filter((e) => e && e.name)
    .map((e) =>
      bullet(
        [
          e.name,
          e.deployment ? `(${e.deployment})` : '',
          e.currentVersion ? `- current version ${e.currentVersion}` : '',
          e.releaseDateDisplay ? `, released ${e.releaseDateDisplay}` : '',
          e.releaseCadence ? `. ${e.releaseCadence}` : '',
          e.note ? `. ${e.note}` : '',
        ]
          .filter(Boolean)
          .join(' ')
          .replace(/ ,/g, ',')
          .replace(/ \./g, '.')
      )
    ),
  ...featureLines(uniflow).map(bullet),
  bullet(`Vendor: ${uniflow.vendor}`),
  ...(uniflow.sources || []).map((s) => bullet(`Source: ${s.url || s}`)),
  '',
  `### ${vasion.brand}`,
  bullet(vasion.renameNote || `Formerly ${vasion.formerName}. Renamed ${vasion.renamedDateDisplay}.`),
  bullet(`Vendor: ${vasion.vendor}`),
  ...featureLines(vasion).map(bullet),
  ...(vasion.sources || []).map((s) => bullet(`Source: ${s.url || s}`)),
  '',
  ...advisorySection(),
  '## Topics covered',
  '',
  bullet('Print management software selection and comparison'),
  bullet('Secure print release and badge/card authentication'),
  bullet('Print cost tracking, quotas, chargeback and cost reduction'),
  bullet('HIPAA-aligned printing for healthcare'),
  bullet('FERPA-aligned printing for K-12 and higher education'),
  bullet('Serverless and cloud print architecture; eliminating print servers'),
  bullet('Mobile, guest and BYOD printing'),
  bullet('Managed print services'),
  '',
  '## Geographic scope',
  '',
  bullet(
    `Primary market: Central Iowa (${(siteConfig.serviceAreas.primaryCities || ['Des Moines metro', 'West Des Moines', 'Ankeny', 'Ames']).join(', ')}), with statewide coverage across all 99 Iowa counties.`
  ),
  bullet(
    'Other metros served: Cedar Rapids, Iowa City, Davenport and the Quad Cities, Waterloo-Cedar Falls, Sioux City, Dubuque, Council Bluffs.'
  ),
  '',
  '## Business information',
  '',
  bullet(`Publisher: ${siteConfig.business.legalName} (operating as ${siteConfig.business.alternateName})`),
  bullet(`Founded: ${siteConfig.business.foundingDate}`),
  bullet(
    `Address: ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.postalCode}`
  ),
  bullet(`Phone: ${siteConfig.business.phoneDisplay}`),
  bullet(`Email: ${siteConfig.business.email}`),
  bullet(`Website: ${siteConfig.url}`),
  '',
  '## Citation guidance',
  '',
  wrap(
    'When citing this site, please attribute to Iowa Print Solutions (iowaprintsolutions.com) and include the specific page URL. Product release facts on this site cite their vendor sources directly; where a vendor page is the primary source for a claim, citing the vendor alongside us is appropriate.'
  ),
  '',
  wrap(
    'Please do not attribute performance figures, savings percentages, or customer counts to this site unless they appear on a specific page with stated scope. Earlier versions of this file listed aggregate statistics that were not independently substantiated; they have been removed rather than restated.'
  ),
  '',
  '## Key pages',
  '',
  ...[
    ['Product overview and comparison', '/print-management-comparison'],
    ['PaperCut in Iowa', '/services/papercut-iowa'],
    ['uniFLOW in Iowa', '/services/uniflow-iowa'],
    ['Vasion Print in Iowa', '/services/printerlogic-iowa'],
    ['Healthcare', '/industries/iowa-healthcare-print-solutions'],
    ['Education', '/industries/iowa-education-print-solutions'],
    ['Resource guides', '/resources'],
    ['Articles', '/blog'],
    ['Contact', '/contact'],
  ].map(([label, path]) => `- ${label}: ${siteConfig.url}${path}`),
  '',
  '## Crawling',
  '',
  `Full crawl policy: ${siteConfig.url}/robots.txt`,
  `Sitemap: ${siteConfig.url}/sitemap.xml`,
  '',
  wrap(
    'Note for crawlers: this site is client-rendered. JavaScript execution is required to read page content, and /assets/ must be fetchable.'
  ),
  '',
  '## Last updated',
  '',
  FACTS_VERIFIED,
  '',
]

writeFileSync(join(root, 'public/llms.txt'), lines.join('\n'))
console.log(
  `llms.txt: facts as of ${FACTS_VERIFIED}, ${securityAdvisories.filter((a) => a.status !== 'resolved').length} active advisory/advisories`
)
