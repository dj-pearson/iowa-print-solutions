#!/usr/bin/env node
/**
 * Generate public/sitemap.xml from the routes actually declared in src/App.jsx.
 *
 * The hand-maintained sitemap had drifted: 13 live pages were missing,
 * including every one of the newest blog posts. Generating it from the route
 * table means adding a route is enough - the sitemap cannot silently fall
 * behind again.
 *
 * Run via `npm run sitemap`, or automatically as part of `npm run build`.
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://iowaprintsolutions.com'

/** Paths that exist as routes but must never appear in the sitemap. */
const EXCLUDED = new Set([
  '*', // 404 catch-all
  '/analytics-test', // internal diagnostic page
  '/search', // search results are thin, parameterised, and not indexable content
])

/**
 * Priority and change frequency by path shape. Ordered - first match wins.
 * These are hints only; search engines largely infer their own scheduling.
 */
const RULES = [
  { test: (p) => p === '/', priority: '1.0', changefreq: 'weekly' },
  { test: (p) => /^\/services\//.test(p), priority: '0.9', changefreq: 'monthly' },
  { test: (p) => /^\/industries\//.test(p), priority: '0.9', changefreq: 'monthly' },
  { test: (p) => /^\/locations\//.test(p), priority: '0.8', changefreq: 'monthly' },
  { test: (p) => /^\/resources\//.test(p), priority: '0.7', changefreq: 'monthly' },
  { test: (p) => /^\/blog\//.test(p), priority: '0.6', changefreq: 'monthly' },
  { test: () => true, priority: '0.7', changefreq: 'monthly' },
]

const classify = (path) => RULES.find((r) => r.test(path))

function extractRoutes(appSource) {
  const paths = new Set()
  const re = /<Route\s+path="([^"]+)"/g
  let match
  while ((match = re.exec(appSource)) !== null) {
    paths.add(match[1])
  }
  return [...paths]
}

const appSource = readFileSync(join(root, 'src/App.jsx'), 'utf8')
const allRoutes = extractRoutes(appSource)
const routes = allRoutes.filter((p) => !EXCLUDED.has(p)).sort()

const skipped = allRoutes.filter((p) => EXCLUDED.has(p))

// Date only, no time: a build timestamp would imply every page changed at
// build time, which is the same false-freshness problem the meta tags had.
const lastmod = new Date().toISOString().slice(0, 10)

const body = routes
  .map((path) => {
    const { priority, changefreq } = classify(path)
    return [
      '  <url>',
      `    <loc>${SITE}${path}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n')
  })
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  GENERATED FILE - do not edit by hand.
  Regenerate with: npm run sitemap
  Source of truth: the <Route> declarations in src/App.jsx
-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`

writeFileSync(join(root, 'public/sitemap.xml'), xml)

console.log(`sitemap.xml: ${routes.length} URLs written`)
if (skipped.length) {
  console.log(`excluded ${skipped.length}: ${skipped.join(', ')}`)
}
