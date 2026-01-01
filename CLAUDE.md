# CLAUDE.md - Iowa Print Solutions

## Project Overview

This is the marketing website for **Iowa Print Solutions** (powered by Infomax Office Systems), a company specializing in print management software and services across Iowa since 1958. The site showcases solutions like PaperCut, Uniflow, and PrinterLogic for businesses, schools, and healthcare organizations.

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
npm run build    # Production build (outputs to /dist)
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/     # 33 reusable UI components
│   ├── Navbar.jsx              # Multi-level megamenu navigation
│   ├── Footer.jsx              # Site footer
│   ├── SEO.jsx                 # Comprehensive meta tag management
│   ├── Breadcrumbs.jsx         # Navigation breadcrumbs
│   ├── ErrorBoundary.jsx       # Error handling wrapper
│   ├── AnalyticsProvider.jsx   # GA4 context provider
│   ├── *Schema.jsx             # Schema.org structured data (8 components)
│   └── ...                     # Performance, lead scoring, FAQ components
├── pages/              # 81 page components
│   ├── blog/           # 29 blog articles (SEO-focused)
│   ├── industries/     # 2 industry pages (Healthcare, Education)
│   ├── locations/      # 12 Iowa city pages
│   ├── resources/      # 18 product guides
│   └── services/       # 5 service offering pages
├── hooks/              # Custom React hooks (form validation, etc.)
├── utils/              # Analytics and SEO utilities
├── config/             # Site configuration (business info, SEO defaults)
├── data/               # Page data and search index
├── assets/             # Static assets
├── App.jsx             # Main app with lazy-loaded routing (280 lines)
└── main.jsx            # Entry point with GA4 integration
public/                 # Static files (manifest.json, robots.txt, sitemap.xml)
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

### SEO & Schema
- Enhanced `SEO.jsx` component with comprehensive meta tags
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
- **Products**: PaperCut, Uniflow, PrinterLogic
- **Industries**: Healthcare (HIPAA compliance), Education (K-12, Universities)
- **Locations**: Des Moines, Cedar Rapids, Iowa City, Davenport, Waterloo, Sioux City, Dubuque, Council Bluffs
- **Topics**: Cost reduction, security, mobile printing, cloud solutions

## Site Statistics

| Metric | Count |
|--------|-------|
| Total Pages | 81 |
| Components | 33 |
| Blog Posts | 29 |
| Location Pages | 12 |
| Resource Guides | 18 |
| Routes | 112+ |

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

## Contact Information (for content reference)

- **Phone**: (515) 237-2352
- **Email**: DPearson@InfomaxOffice.com
- **Company**: Infomax Office Systems (since 1958)
- **Service Area**: All 99 Iowa counties
