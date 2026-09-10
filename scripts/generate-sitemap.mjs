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

import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
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

/**
 * Map each route path to the page module that renders it, so lastmod can come
 * from that file's history rather than from the clock.
 *
 *   const Home = lazy(() => import('./pages/Home'))   ->  Home: src/pages/Home
 *   <Route path="/" element={<Home />} />             ->  '/': Home
 */
function extractRouteSources(appSource) {
  const modules = new Map()
  const importRe = /const\s+(\w+)\s*=\s*lazy\(\s*\(\)\s*=>\s*import\(\s*['"]\.\/([^'"]+)['"]\s*\)/g
  let match
  while ((match = importRe.exec(appSource)) !== null) {
    modules.set(match[1], `src/${match[2]}`)
  }

  const sources = new Map()
  const routeRe = /<Route\s+path="([^"]+)"\s+element=\{<(\w+)/g
  while ((match = routeRe.exec(appSource)) !== null) {
    const file = resolveModule(modules.get(match[2]) ?? '')
    if (file) sources.set(match[1], file)
  }
  return sources
}

/**
 * Last commit date for a file, as YYYY-MM-DD.
 *
 * Returns null rather than guessing. A missing date means the <lastmod>
 * element is omitted for that URL, which is the honest outcome: Google's
 * stated position is that it ignores lastmod once the value looks unreliable,
 * and a fabricated date poisons the signal for the pages that did change.
 *
 * Shallow clones and export tarballs have no history. That is fine - the
 * sitemap is still complete and correct, just without lastmod hints.
 */
function resolveModule(spec) {
  // Import specifiers are extensionless: './pages/Home' -> src/pages/Home.jsx
  for (const candidate of [spec, `${spec}.jsx`, `${spec}.js`, `${spec}/index.jsx`]) {
    if (existsSync(join(root, candidate))) return candidate
  }
  return null
}

function lastCommitDate(file) {
  if (!existsSync(join(root, file))) return null
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null
  } catch {
    return null
  }
}

const appSource = readFileSync(join(root, 'src/App.jsx'), 'utf8')
const allRoutes = extractRoutes(appSource)
const routes = allRoutes.filter((p) => !EXCLUDED.has(p)).sort()

const skipped = allRoutes.filter((p) => EXCLUDED.has(p))

// lastmod comes from each page's own last commit, not from the clock.
//
// The previous version stamped every URL with the build date. That asserted
// all 91 pages changed on every deploy, which is the same false-freshness
// problem the meta tags had - and it is self-defeating, because a lastmod that
// is obviously wrong gets discounted wholesale, taking the genuinely updated
// pages down with it.
const routeSources = extractRouteSources(appSource)
const dateCache = new Map()
const lastmodFor = (path) => {
  const file = routeSources.get(path)
  if (!file) return null
  if (!dateCache.has(file)) dateCache.set(file, lastCommitDate(file))
  return dateCache.get(file)
}

const body = routes
  .map((path) => {
    const { priority, changefreq } = classify(path)
    const lastmod = lastmodFor(path)
    return [
      '  <url>',
      `    <loc>${SITE}${path}</loc>`,
      ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n')
  })
  .join('\n')

const undated = routes.filter((p) => !lastmodFor(p))

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
if (undated.length) {
  console.log(
    `no lastmod for ${undated.length} URL(s) (no git history or unmapped route): ${undated.join(', ')}`
  )
}
