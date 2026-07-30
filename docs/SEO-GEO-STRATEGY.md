# SEO / GEO Strategy

**Last updated:** 2026-07-30

This is the single strategy document for the site. It replaces five overlapping
legacy files (`iowa-seo-optimization-report.md`,
`iowa-blog-seo-optimization-report.md`, `iowa_print_solutions_seo_analysis.md`,
`SEO-MOBILE-OPTIMIZATION-GUIDE.md`, `ai-search-implementation-guide.md`), which
contained duplicated advice, contradictory recommendations, and completed items
presented as pending.

---

## The goal, stated precisely

Be the source that both Google and AI assistants reach for when someone in
Iowa asks about print management software for their copier fleet.

Two audiences, one requirement:

- **Google** ranks pages. It needs crawlable content, one page per intent, and
  trust signals that hold up.
- **AI answer engines** (ChatGPT Search, Perplexity, Google AI Overviews,
  Claude) synthesise and cite. They reward specific, verifiable, attributed
  claims and quietly drop vague or unsupported ones.

These pull in the same direction more than people assume. Both punish thin
duplicated pages, and both reward content a knowledgeable human would accept.
The failure modes fixed in this pass were failures against *both*.

## Positioning

The competition is vendor marketing (papercut.com, canon.com, vasion.com) and
national resellers. Neither can credibly answer "what should a 220-bed Iowa
hospital with a mixed Canon and Ricoh fleet actually do?"

The defensible position is therefore:

> **Vendor-neutral, verifiable, Iowa-specific.** Three products compared
> honestly, including when the answer is "not this one," with claims that cite
> their sources and context that only a local implementer has.

This means:

- **Never restate vendor marketing.** Vendor pages already rank for their own
  product names. Distinguish "new in this release" from "already existed" —
  vendor release blogs blur this, and being the source that separates them is a
  genuine differentiator.
- **Say who a product is wrong for.** Comparison pages that only pick winners
  read as sales collateral. Ones that state disqualifiers get cited.
- **Iowa specificity must be substantive.** Naming a city in an H1 is not local
  content. Critical-access hospital staffing, AEA shared-services structures,
  Board of Regents procurement, multi-state Quad Cities employers — that is.

---

## What was fixed in this pass, and why it mattered

### 1. robots.txt was blocking the JavaScript that renders the site

The highest-severity issue found. `robots.txt` contained:

```
Disallow: /assets/
Disallow: /*.js$
Disallow: /*.css$
```

This is a client-rendered React SPA — `dist/index.html` ships an empty
`<div id="root">`. All content, headings, links, and meta tags come from the
bundle in `/assets/`. Any crawler respecting robots.txt saw a blank page on
every URL.

This undermined everything else on the site. It is fixed, with a prominent
warning comment in `public/robots.txt` so it cannot be reintroduced.

**Follow-up worth considering:** even with the bundle crawlable, client-side
rendering is a handicap. Google renders JS but on a delay and with a budget;
several AI crawlers do not execute JS at all, so they see nothing. Pre-rendering
(e.g. `vite-plugin-ssr`, `react-snap`, or Cloudflare's rendering) would produce
static HTML per route and is the single largest remaining technical win. It is
not done here because it is an architectural change deserving its own decision.

### 2. Fabricated review markup

The site emitted `AggregateRating` schema with an invented 4.8/150 rating, plus
per-page review counts (47, 156, 98, 32, 28, 52, 35, 31, 23, 26, 73, 67, 127)
and `Review` entries attributed to people who do not exist ("Sarah Johnson",
"Mark Thompson").

Google's review snippet guidelines prohibit self-serving review markup and
require rated reviews to be genuinely collected and visible on the page. This
was a structured-data manual action waiting to happen. All of it is removed.

**To reinstate ratings properly:** collect real Google Business Profile
reviews, display them on the page, and emit markup matching what a visitor can
actually see. Real reviews are also a stronger local ranking signal than markup
ever was.

### 3. Product content described features the vendors never shipped

Six posts covering "PaperCut MF 26" and "uniFLOW 2026" were written *before*
those releases and attributed invented capabilities to them — FIDO2 release,
Epic chart-aware scan routing, PHI redaction hooks, native sustainability and
CO2 dashboards, grant-code chargeback models, Workday sync, zero-trust
continuous session validation. Their `datePublished` values (March–May 2026)
predated the releases they claimed to describe.

For a site whose entire pitch is expertise, publishing checkable falsehoods
about real product versions is the worst possible failure. A prospect who reads
the PaperCut release notes finds the discrepancy in thirty seconds.

Now: `src/config/products.js` is the single source of truth. Every version
number and feature is traceable to a vendor source listed in the file, rendered
through `VerifiedReleaseFacts` with visible citations.

### 4. Fake freshness signals

`SEO.jsx` defaulted `datePublished` and `dateModified` to
`new Date().toISOString()`. Every page claimed it was modified at render time.
Search engines discount this, and it devalues dates on pages that genuinely
were updated. Dates are now omitted unless real ones are supplied.

### 5. Keyword cannibalization on location pages

Four cities each had two pages competing for the same intent. Merged to the
clean `/locations/{city}` URL with 301s from the old paths, and all internal
links repointed so they no longer hop through a redirect.

### 6. Sitemap omitted 13 live pages

Including all twelve of the newest blog posts. Now generated from the route
table (`scripts/generate-sitemap.mjs`, wired into `prebuild`), so it cannot
drift again.

### 7. Entity naming

`Uniflow` → `uniFLOW` (Canon's actual casing, 312 instances), and PrinterLogic
updated to Vasion Print — renamed September 2024, roughly two years stale.
Entity strings are how both search engines and LLMs resolve which product you
mean; wrong casing weakens the association.

URLs were deliberately **not** renamed. `/services/printerlogic-iowa` holds
existing rankings and many buyers still search the old name. Copy names both.

---

## Standing rules

### Product claims

1. Version numbers and feature lists live in `src/config/products.js`. Never
   hardcode them into a page.
2. Every entry needs a vendor source. No source, no claim.
3. Separate "new in release X" from "long-standing capability." State which.
4. `FACTS_VERIFIED` in that file records the last vendor check. Update it when
   you verify, not when you edit.
5. uniFLOW Online and on-premise uniFLOW version independently. Do not conflate.

### Statistics

Any number implying measurement needs a citable source or stated scope.
Round unsourced percentages ("92% risk reduction", "40% savings") are worse than
no number: buyers discount them and AI engines drop them.

Prefer a described mechanism ("jobs are held until you authenticate at the
device") over an invented metric. When a customer agrees to be cited, use the
real figure with its scope — industry, user count, timeframe.

### Page architecture

- One page per intent. Before adding a page, check nothing already targets that
  query.
- Location pages need genuinely local substance, not a find-and-replaced city.
- Add the route in `App.jsx`; the sitemap follows automatically.

---

## Prioritised backlog

**High — technical**

1. **Pre-render or SSR the site.** Biggest remaining win. Client-side rendering
   costs Google crawl efficiency and loses AI crawlers that don't execute JS
   entirely.
2. **Add the real Google Business Profile URL** to `siteConfig.social`. There is
   a `TODO` in `src/config/site.js`; the placeholder CID was removed. Highest-
   value `sameAs` link for local search, and the source for legitimate reviews.
3. **Verify indexing recovered** in Search Console after the robots.txt fix.
   Check rendered HTML via URL Inspection, not just the raw response.

**High — content**

4. **Collect real reviews and testimonials.** Unblocks legitimate rating markup
   and is a direct local ranking factor.
5. **Audit the remaining older posts** the way the six release posts were
   audited. `PaperCutMF250Iowa`, `PaperCutMF241Updates`, `Uniflow2025Updates`,
   `PaperCutHiveQ42025Iowa`, and `Vasion2026Iowa` were not reviewed in this pass
   and may carry the same class of unverified claims.
6. **Build the comparison page into the flagship asset.** "PaperCut vs uniFLOW
   vs Vasion Print" with honest disqualifiers is the highest-intent query in
   this market and the most citable page type for AI answers.

**Medium**

7. **Decide on the remaining four location URLs.** Waterloo-Cedar Falls, Sioux
   City, Dubuque, and Council Bluffs still sit at `-print-management` paths
   while the other four use clean slugs. The inconsistency is deliberate —
   those four have no duplicate to merge, so renaming is pure ranking risk. Either
   accept the inconsistency or migrate all four together with 301s. Do not do it
   piecemeal.
8. **Central Iowa depth.** Ames, West Des Moines, and Ankeny are in
   `siteConfig.serviceAreas.cities` but have no pages. Central Iowa is the
   stated primary market.
9. **Retire `meta name="keywords"`.** Ignored by every major engine; `getKeywords()`
   currently injects the same nine defaults into every page.
10. **Add `Person` schema for Dan Pearson** with real credentials. Author
    identity is a meaningful E-E-A-T signal and currently only a name string.

**Low**

11. Clean up repo root: `worker.js.disabled`, `wrangler.toml.disabled`, duplicate
    `postcss.config.*` / `tailwind.config.*`, several megabytes of unreferenced
    PSD/PNG/MP4, and the `EMERGENCY-HASHROUTER-FIX.md` / `HASHROUTER-FINAL-SOLUTION.md`
    pair documenting an abandoned approach.
12. Address the ~795 pre-existing ESLint errors, dominated by missing
    `react/prop-types` and unused `React` imports.

---

## Measurement

Track quarterly, not weekly:

- **Google Search Console** — impressions and position for `[product] Iowa` and
  `[service] [city]` clusters. Watch that merged location pages absorb the
  traffic of both predecessors.
- **AI citations** — periodically ask ChatGPT, Perplexity, and Claude questions
  a real Iowa buyer would ask ("print management software for Iowa hospitals",
  "PaperCut vs uniFLOW for a school district") and record whether this site is
  cited. This is the GEO metric that matters and there is no dashboard for it.
- **Indexed page count** vs the 87 URLs in the sitemap. A large gap after the
  robots.txt fix points at the rendering problem in item 1.
