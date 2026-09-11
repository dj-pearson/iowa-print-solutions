#!/usr/bin/env node
/**
 * Load every route in the built site in a real browser and check what renders.
 *
 * This exists because the bugs that mattered most on this site were invisible
 * to anything that only read source. An infinite render loop in
 * AnalyticsProvider left every page showing nothing but the loading skeleton;
 * four pages crashed into the ErrorBoundary and served "Something went wrong";
 * all 91 URLs emitted two conflicting canonicals. The build was green through
 * all of it. Rendering the pages is the only check that would have caught any
 * of them.
 *
 * Usage:
 *   npm run build
 *   npm run audit            # all routes in public/sitemap.xml
 *   npm run audit -- --sample 10
 *
 * Playwright is deliberately NOT a dependency of this project. Cloudflare Pages
 * runs npm install on every deploy, and pulling Playwright plus a Chromium
 * download into that path would cost minutes per build for a tool only ever run
 * locally. Install it when you want to audit:
 *
 *   npm i -D playwright && npx playwright install chromium
 *
 * Set CHROMIUM_PATH to point at an existing browser instead, if the
 * environment already manages one.
 *
 * Exits non-zero if any check fails, so it can gate a release if you want it to.
 */

import { readFileSync, existsSync } from 'node:fs'
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join, extname } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(root, 'dist')
const SITE = 'https://iowaprintsolutions.com'
const PORT = 4317

// Google truncates around these lengths. Not hard limits, but past them the
// tail of the string is not what a searcher sees.
const TITLE_MAX = 60
const DESC_MIN = 70
const DESC_MAX = 160

let chromium
try {
  ;({ chromium } = await import('playwright'))
} catch {
  console.error(
    'audit-site needs Playwright, which is not a dependency of this project.\n' +
      '  npm i -D playwright && npx playwright install chromium\n' +
      'See the comment at the top of scripts/audit-site.mjs for why.'
  )
  process.exit(2)
}

if (!existsSync(join(DIST, 'index.html'))) {
  console.error('No dist/index.html. Run `npm run build` first.')
  process.exit(2)
}

const args = process.argv.slice(2)
const sampleAt = args.indexOf('--sample')
const sample = sampleAt === -1 ? 0 : Number(args[sampleAt + 1] || 0)

const xml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8')
let routes = [...xml.matchAll(new RegExp(`<loc>${SITE}([^<]*)</loc>`, 'g'))].map((m) => m[1] || '/')
if (sample > 0) {
  const step = Math.max(1, Math.floor(routes.length / sample))
  routes = routes.filter((_, i) => i % step === 0).slice(0, sample)
}

const TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

const server = createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0])
  let file = join(DIST, url)
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html')
  } catch {
    file = join(DIST, 'index.html') // SPA fallback, same as Cloudflare _redirects
  }
  try {
    const body = await readFile(file)
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' })
    res.end(body)
  } catch {
    res.writeHead(404)
    res.end('not found')
  }
})
await new Promise((r) => server.listen(PORT, '127.0.0.1', r))

// CHROMIUM_PATH lets this run against a browser the environment already
// manages, rather than one Playwright downloaded for itself. Needed wherever
// the installed Playwright and the available Chromium build differ.
const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
)
const failures = []
const note = (route, msg) => failures.push(`${route}\n    ${msg}`)

for (const route of routes) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await ctx.newPage()
  const pageErrors = []
  page.on('pageerror', (e) => pageErrors.push(String(e).split('\n')[0].slice(0, 160)))
  // Third-party origins (fonts, GTM, image CDNs) are not what this audits, and
  // letting them hang means `load` never fires.
  await page.route('**/*', (r) =>
    new URL(r.request().url()).hostname === '127.0.0.1' ? r.continue() : r.abort()
  )

  try {
    await page.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: 'load', timeout: 30000 })
    await page.waitForSelector('main h1, main h2', { timeout: 20000 })
    await page.waitForTimeout(200)
  } catch {
    const crashed = await page
      .evaluate(() => document.body.innerText.includes('Something went wrong'))
      .catch(() => false)
    const spinning = await page
      .evaluate(() => !!document.querySelector('main [aria-busy="true"]'))
      .catch(() => false)
    note(
      route,
      crashed
        ? 'crashed into the ErrorBoundary ("Something went wrong")'
        : spinning
          ? 'never left the loading skeleton - Suspense did not resolve'
          : 'no h1 or h2 rendered in <main> within 20s'
    )
    if (pageErrors.length) note(route, `first page error: ${pageErrors[0]}`)
    await ctx.close()
    continue
  }

  const r = await page.evaluate(() => {
    const heads = [...document.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6')]
    let jump = null
    for (let i = 1; i < heads.length; i++) {
      const lvl = +heads[i].tagName[1]
      const prev = +heads[i - 1].tagName[1]
      if (lvl - prev > 1) {
        jump = `${heads[i - 1].tagName} -> ${heads[i].tagName} at "${heads[i].textContent.trim().slice(0, 50)}"`
        break
      }
    }
    return {
      title: document.title,
      h1Count: document.querySelectorAll('main h1').length,
      canonicals: [...document.querySelectorAll('link[rel="canonical"]')].map((l) => l.href),
      descriptions: [...document.querySelectorAll('meta[name="description"]')].map((m) => m.content),
      jump,
    }
  })

  if (r.h1Count !== 1) note(route, `expected exactly 1 h1 in <main>, found ${r.h1Count}`)
  if (r.canonicals.length !== 1)
    note(route, `expected exactly 1 canonical, found ${r.canonicals.length}: ${r.canonicals.join(' , ')}`)
  else if (r.canonicals[0].replace(SITE, '').replace(/\/$/, '') !== route.replace(/\/$/, ''))
    note(route, `canonical points elsewhere: ${r.canonicals[0]}`)
  if (r.descriptions.length !== 1)
    note(route, `expected exactly 1 meta description, found ${r.descriptions.length}`)
  else if (r.descriptions[0].length < DESC_MIN || r.descriptions[0].length > DESC_MAX)
    note(route, `description is ${r.descriptions[0].length} chars (want ${DESC_MIN}-${DESC_MAX})`)
  if (r.title.length > TITLE_MAX) note(route, `title is ${r.title.length} chars (want <= ${TITLE_MAX})`)
  if (r.jump) note(route, `heading level skipped: ${r.jump}`)
  if (pageErrors.length) note(route, `page error: ${pageErrors[0]}`)

  await ctx.close()
}

await browser.close()
server.close()

const bad = new Set(failures.map((f) => f.split('\n')[0]))
console.log(`\naudited ${routes.length} routes | ${routes.length - bad.size} clean | ${bad.size} with findings`)
if (failures.length) {
  console.log('')
  for (const f of failures) console.log('  ' + f)
  console.log(`\n${failures.length} findings across ${bad.size} routes`)
  process.exit(1)
}
console.log('no findings')
