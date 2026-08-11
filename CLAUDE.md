# CLAUDE.md - Iowa Print Solutions

## Project Overview

This is the marketing website for **Iowa Print Solutions** (powered by Infomax Office Systems), a company specializing in print management software and services across Iowa since 1958. The site covers PaperCut MF, Canon uniFLOW, and Vasion Print (formerly PrinterLogic) for businesses, schools, and healthcare organizations.

**Live Site**: Deployed on Cloudflare Pages

## Tech Stack

- **Framework**: React 18.3 with Vite 5.4
- **Routing**: React Router DOM v6 (BrowserRouter with code splitting)
- **Styling**: Tailwind CSS 3.4 with Typography plugin
- **Animations**: Framer Motion 11.5
- **Icons**: Lucide React 0.441
- **SEO**: React Helmet + Schema.org structured data
- **Analytics**: Google Analytics GA4 (via GTM)
- **Deployment**: Cloudflare Pages
- **PWA**: Manifest configured for standalone app mode

## Quick Commands

```bash
npm run dev      # Start development server
npm run build    # Production build (outputs to /dist; regenerates sitemap first)
npm run sitemap  # Regenerate public/sitemap.xml from App.jsx routes
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Non-Negotiables

Read `docs/SEO-GEO-STRATEGY.md` before SEO, content, or schema work. Three
rules exist because each was violated and caused real damage:

1. **Never `Disallow` `/assets/`, `*.js`, or `*.css` in robots.txt.** This is a
   client-rendered SPA — `index.html` is an empty shell. Blocking the bundle
   makes every page render blank to crawlers. It shipped that way once.

2. **Never invent ratings, reviews, or statistics.** No `AggregateRating` or
   `Review` markup without real, on-page, independently collected reviews — it
   violates Google's review snippet guidelines. Any number implying measurement
   needs a citable source or stated scope.

3. **Product version numbers and feature claims live only in
   `src/config/products.js`,** where each is traceable to a vendor source. Never
   hardcode them into a page. Six posts once described features their vendors
   never shipped.

## Project Structure

```
src/
├── components/     # 37 reusable UI components
│   ├── Navbar.jsx              # Multi-level megamenu navigation
│   ├── Footer.jsx              # Site footer
│   ├── SEO.jsx                 # Comprehensive meta tag management
│   ├── VerifiedReleaseFacts.jsx # Vendor-cited release facts from products.js
│   ├── Breadcrumbs.jsx         # Navigation breadcrumbs
│   ├── ErrorBoundary.jsx       # Error handling wrapper
│   ├── AnalyticsProvider.jsx   # GA4 context provider
│   ├── *Schema.jsx             # Schema.org structured data (8 components)
│   └── ...                     # Performance, lead scoring, FAQ components
├── pages/              # 94 page components
│   ├── blog/           # 41 blog articles (SEO-focused)
│   ├── industries/     # 2 industry pages (Healthcare, Education)
│   ├── locations/      # 12 components, 8 routed (see App.jsx comment)
│   ├── resources/      # 18 product guides
│   └── services/       # 5 service offering pages
├── hooks/              # Custom React hooks (form validation, etc.)
├── utils/              # Analytics and SEO utilities
├── config/
│   ├── site.js         # Business info, SEO defaults, service areas
│   └── products.js     # VERIFIED product facts + vendor sources (see below)
├── data/               # Page data and search index
├── assets/             # Static assets
├── App.jsx             # Main app with lazy-loaded routing (280 lines)
└── main.jsx            # Entry point with GA4 integration
scripts/
└── generate-sitemap.mjs  # Generates sitemap.xml from App.jsx routes (prebuild)
public/                 # Static files (manifest.json, robots.txt, llms.txt, sitemap.xml)
docs/
└── SEO-GEO-STRATEGY.md  # Strategy, standing rules, prioritised backlog
dist/                   # Build output (~1.9MB)
```

## Key Architectural Patterns

### Routing & Code Splitting
- All routes defined in `src/App.jsx` with React.lazy() for route-level code splitting
- Suspense boundary with PageLoadingFallback for loading states
- 404 catch-all route for error handling

When adding new pages:
1. Create the component in the appropriate `src/pages/` subdirectory
2. Import with `lazy(() => import('./pages/...'))` in `App.jsx`
3. Add a `<Route>` element with the path
4. The sitemap picks it up automatically on the next build - do not hand-edit
   `public/sitemap.xml`, it is generated

Location URLs: Des Moines, Cedar Rapids, Iowa City, and Davenport live at the
clean `/locations/{city}` path with 301s from the old `-print-management` paths
in `public/_redirects`. Do not add routes for the old paths - a client-side
route would shadow the redirect.

### SEO & Schema
- Enhanced `SEO.jsx` component with comprehensive meta tags
- Date meta and schema dates are emitted **only** when a real date is passed;
  they must never default to the current timestamp
- Open Graph and Twitter Card support
- 8 Schema.org components for structured data (Article, FAQ, LocalBusiness, etc.)
- Geographic meta tags for local SEO
- Breadcrumb navigation with schema

### Styling
- Tailwind CSS utility classes throughout
- Blue/green color scheme in `tailwind.config.js`
- Global styles in `src/index.css`
- Mobile-first responsive design

### Analytics & Performance
- Google Analytics GA4 with AnalyticsProvider context
- Lead scoring and form tracking components
- Performance monitoring utilities
- Route-level code splitting reduces initial bundle

## Content Focus

The site targets Iowa businesses with content organized by:
- **Products**: PaperCut MF, Canon uniFLOW, Vasion Print (formerly PrinterLogic)
  - Brand casing matters for entity matching: it is `uniFLOW`, never `Uniflow`
  - PrinterLogic was renamed Vasion Print in Sept 2024; copy names both, URLs keep `printerlogic`
- **Industries**: Healthcare (HIPAA compliance), Education (K-12, Universities)
- **Locations**: Des Moines, Cedar Rapids, Iowa City, Davenport, Waterloo, Sioux City, Dubuque, Council Bluffs
- **Topics**: Cost reduction, security, mobile printing, cloud solutions

## Site Statistics

| Metric | Count |
|--------|-------|
| Page components | 94 |
| Components | 37 |
| Blog Posts | 41 |
| Location page components | 12 (8 routed; 4 thin duplicates retired) |
| Resource Guides | 18 |
| Routes | 90 |
| URLs in sitemap | 87 (generated; 3 excluded) |

## Build & Deployment Notes

- Build output goes to `/dist` directory
- Cloudflare Pages deployment configured
- Uses BrowserRouter (requires `_redirects` for SPA routing)
- Vendor code splitting for better caching (react, UI libs, SEO)
- See `CLOUDFLARE-DEPLOYMENT.md` for deployment details

## Development Guidelines

1. **New Blog Posts**: Follow existing patterns in `src/pages/blog/` - include SEO meta tags, structured content, and Iowa-focused keywords
2. **New Location Pages**: Use `EnhancedLocationTemplate.jsx` component
3. **New Industry Pages**: Use `EnhancedIndustryTemplate.jsx` component
4. **Images**: Store in `/public` or `src/assets/`, optimize for web
5. **Testing**: Run `npm run build` before committing to catch any build errors
6. **SEO**: Use the `SEO` component with proper canonical URLs and schema types
7. **Product claims**: Import from `src/config/products.js`. Use
   `VerifiedReleaseFacts` to render release features so vendor citations appear
8. **Never hand-edit** `public/sitemap.xml` - run `npm run sitemap`

## Key Components Reference

| Component | Purpose |
|-----------|---------|
| `SEO` | Meta tags, OG, Twitter Cards, Schema |
| `Breadcrumbs` | Navigation trail with schema |
| `AIOptimizedFAQ` | FAQ sections with structured data |
| `SmartCTA` | Conversion-optimized call-to-action |
| `FormTracker` | Form analytics and tracking |
| `EnhancedLocationTemplate` | Reusable location page layout |
| `PageLoadingFallback` | Loading state for lazy routes |
| `VerifiedReleaseFacts` | Vendor-cited release features from `products.js` |

## Contact Information (for content reference)

- **Phone**: (515) 237-2352
- **Email**: DPearson@InfomaxOffice.com
- **Company**: Infomax Office Systems (since 1958)
- **Service Area**: All 99 Iowa counties

<!-- SELVEDGE:START -->
## Pearson Media — shared context

*Managed from the vault. Edit `14 - Resources/Shared CLAUDE Block.md` in the vault; direct edits between these markers are overwritten once a sync exists. Everything outside them is yours and is never touched.*

**The memory vault.** Portfolio-wide memory lives in the **Hermes** vault at `<your-home>\Documents\Hermes` (`C:\Users\dpearson\Documents\Hermes` on this machine; remote: https://github.com/dj-pearson/Hermes). It holds the profile, the map of all ten projects, and cross-project knowledge. Read `VAULT-INDEX.md` there when a task needs context beyond this repo. This repo's own `CLAUDE.md`, `~/.claude` memory, and skills remain authoritative for work inside it — the vault supplements them, never replaces them.

**Name the project.** Pearson Media runs ten projects on a shared stack. Never say "the app," "the repo," or "production" without naming which one. A right answer about the wrong project is a wrong answer.

**The shared stack.** React + TypeScript + Vite, Tailwind, shadcn/ui, self-hosted Supabase, Cloudflare Pages, Coolify on Contabo, Stripe. A problem solved in one repo is usually already solved for this one — check the vault before solving it twice.

**Secrets are references, never values.** Never write a password, key, or token value into a note, summary, commit, or setup doc; name where it's stored instead. Loose credential files exist under your `Documents` folder (`C:\Users\dpearson\Documents` on this machine) — never read one into a document.

**Never delete what Claude Code relies on.** Repo `CLAUDE.md` files, `~/.claude/projects/*/memory/`, `.claude/skills/`, settings. Copy from them freely; removing or stubbing them is Dj's call alone.

**Evidence only.** Verify state from the actual file or command before claiming anything is done or in place. If unsure, say so and go find out.

**Write like a person.** Every model was trained on the same corpus, so the default register is recognisable within a sentence and it lands in commits, PR bodies, docs, UI copy and error strings alike. State the point first, then support it. Have an opinion; asked which of two, name one. Use real names and numbers, not categories. Never label your own significance ("important", "crucial", "worth noting", "notably"); if it matters the reader will see it. Banned outright: *delve, dive into, deep dive, unpack, shed light on, pave the way, usher in, tap into, supercharge, unlock, elevate, empower, streamline, curate, showcase, boast, groundbreaking, cutting-edge, transformative, game-changing, innovative, pivotal, invaluable, meticulous, bespoke, vibrant, multifaceted, holistic, testament, tapestry, synergy, cornerstone, treasure trove, plethora, myriad, moreover, furthermore, additionally.* Banned decoratively but fine literally: *navigate, harness, leverage, robust, comprehensive, landscape, realm, journey*; the test is whether a reader could check the claim. Banned phrases: *"In today's…", "It's important/worth noting", "When it comes to", "At its core", "At the end of the day", "This is where X comes in", "Let's break it down", "plays a crucial role", "cannot be overstated", "underscoring the importance of", "highlighting the need for"*, and the whole chat register (*"Great question!", "Absolutely!", "I'd be happy to", "Let me know if you need anything else", "I hope this helps"*). Banned structures, which imitate insight without carrying any: *"not just X, it's Y"*, *"not only X but Y"*, *"this isn't about X, it's about Y"*, *"No X. No Y. Just Z."*, the rule of three that goes abstract on the third item, the rhetorical question as a transition, and closing with a summary of what was just read. **At most one em dash** per piece of writing, never as the default connector; use commas, parentheses and semicolons. Vary sentence and paragraph length deliberately. Uniform 18-word sentences are the signature that survives every word-level edit. Use contractions. Don't restate the question, don't open with a sweeping scene-setter, don't over-format (no emoji as structure, no header on a three-paragraph answer, no table for two rows). The one allowed exception is a **bold lead-in used as a heading** in a reference document like this one; a *run* of "**Bold term:** one sentence" bullets standing in for prose is the tell.

**Plain characters only.** Generated text carries Unicode that renders as ordinary punctuation, as ordinary whitespace, or as nothing at all, and it survives review precisely because it looks correct. **Anything a machine parses is ASCII unless the content requires otherwise**: code, config, JSON, YAML, CSV, SQL, regex, env values, filenames, URLs, commit subjects. Straight quotes `'` `"`, hyphen-minus `-`, three dots for an ellipsis, one ordinary space between words. Never emit curly quotes (U+2018/2019/201C/201D), en/em dashes (U+2013/2014), U+2026 ellipsis, U+2212 minus or U+2032 primes into code; a look-alike character in a PowerShell string or a SQL literal is a runtime failure, which is how `backup-databases.ps1` and `ssl-check.ps1` sat unparseable for months. Never emit a no-break space (U+00A0, and U+202F/2007/2009/2002/2003/3000), which breaks shell word-splitting, `grep` and column parsing while looking exactly like a space, or U+2028/U+2029, which are valid JSON and a syntax error inside a JS string literal. **Never emit an invisible or bidi character anywhere:** U+200B-U+200F, U+2060-U+2064, U+FEFF, U+00AD, U+034F, U+180E, the bidi controls U+202A-U+202E and U+2066-U+2069, and above all the Unicode tag block **U+E0000-U+E007F**, which encodes arbitrary ASCII invisibly and is the usual carrier for text a reviewer cannot see. Avoid homoglyphs (Cyrillic a/e/o/p/c/x, Greek omicron, fullwidth Latin, mathematical alphanumerics for bold): an identifier holding one compares unequal to the identifier it appears to be. Prose may use real typography and real accented names; prose may not carry characters that don't render. The one exception is a deliberate, load-bearing use, which carries a comment saying why. Scan with `rg -n '[\x{00AD}\x{034F}\x{061C}\x{180E}\x{200B}-\x{200F}\x{202A}-\x{202E}\x{2060}-\x{2064}\x{2066}-\x{2069}\x{FEFF}\x{E0000}-\x{E007F}]'`.

**Terminal output is scrollback, not a report.** Answer first — no "I'll start by", no restating the request, no narrating tool calls the transcript already shows. Don't summarise a diff the reader can see or paste back code you just wrote; one line naming what changed and where, with `file:line` because it's clickable. Length matches the question: a yes/no gets a yes/no plus the clause that makes it trustworthy, and under about six lines there are no headers, bullets or tables. Report actual output, not a paraphrase: quote the failing assertion, say what was skipped, say plainly what's verified and what isn't. No emoji and no status theatre; "246 tests, 246 passing" beats "✅ All tests passing!" and is falsifiable. Don't close with an offer of more help or unrequested next steps: ask a real question, or name the real remaining work. Commits are imperative, what and why, no launch copy. PR bodies say what changed, why, how it was verified, and what's still open.

**UI has a craft floor.** Every model trained on the same SaaS templates, so the *default* frontend output is a recognizable handful of tells — and Tailwind + shadcn/ui puts each of them one autocomplete away. Treat the following as the category's defaults rather than as bans: the brief's own words can earn any of them, but reaching for one on a free axis means you were not deciding. Refuse **purple/blue gradients and gradient text** (emphasis comes from weight and size); **Inter or a system default as the type *choice***; a colored **`border-left`/`border-right` above 1px** on cards, list items, callouts or alerts — the single most recognizable tell; grids of **same-size icon-tile + heading + text cards** as the page structure, and **cards nested in cards**; a **1px border under a wide soft shadow** (declare elevation once — border *or* shadow); **gray text on colored surfaces** (tint secondary text from the surface hue or the foreground); **bounce/elastic easing**; **monospace as a costume** for "technical" rather than for code, data or measurement; and a **tracked uppercase eyebrow over every section**. Keep body measure at 65–75ch, tracking no tighter than -0.04em, and card radii at 12–16px.

**Check UI, don't just intend it.** `npx impeccable detect <path>` runs 60 deterministic anti-pattern rules with no install, no API key and no LLM — it works from any repo, so there is no excuse for asserting a UI is clean. Use the `/impeccable` skill (`audit`, `critique`, `polish`, `colorize`, `typeset`) for the judgement calls it cannot make. Source: [Impeccable](https://github.com/pbakaus/impeccable), Apache 2.0.
<!-- SELVEDGE:END -->
