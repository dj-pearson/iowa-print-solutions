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
