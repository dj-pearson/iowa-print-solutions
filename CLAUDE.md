# CLAUDE.md - Iowa Print Solutions

## Project Overview

This is the marketing website for **Iowa Print Solutions**, a company specializing in print management software and services across Iowa. The site showcases solutions like PaperCut, Uniflow, and PrinterLogic for businesses, schools, and healthcare organizations.

**Live Site**: Deployed on Cloudflare Pages

## Tech Stack

- **Framework**: React 18 with Vite
- **Routing**: React Router DOM v6 (BrowserRouter)
- **Styling**: Tailwind CSS with Typography plugin
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: React Helmet
- **Deployment**: Cloudflare Pages

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
├── components/     # Reusable UI components (Navbar, Footer, ErrorBoundary)
├── pages/          # Page components
│   ├── blog/       # Blog articles (SEO-focused content)
│   ├── industries/ # Industry-specific pages (Healthcare, Education)
│   ├── locations/  # Iowa city location pages
│   ├── resources/  # Product guides and documentation
│   └── services/   # Service offering pages
├── utils/          # Utility functions
├── assets/         # Static assets
├── App.jsx         # Main app with routing
└── main.jsx        # Entry point
public/             # Static files (copied to dist)
dist/               # Build output
```

## Key Architectural Patterns

### Routing
All routes are defined in `src/App.jsx`. When adding new pages:
1. Create the component in the appropriate `src/pages/` subdirectory
2. Import it in `App.jsx`
3. Add a `<Route>` element with the path

### SEO
- Each page should use `react-helmet` for meta tags
- Blog posts are heavily SEO-optimized for Iowa-specific keywords
- Images should have descriptive alt text

### Styling
- Tailwind CSS utility classes are used throughout
- Global styles in `src/index.css`
- Component-specific styles use Tailwind's `@apply` sparingly

## Content Focus

The site targets Iowa businesses with content organized by:
- **Products**: PaperCut, Uniflow, PrinterLogic
- **Industries**: Healthcare (HIPAA compliance), Education (K-12, Universities)
- **Locations**: Des Moines, Cedar Rapids, Iowa City, Davenport, Waterloo, Sioux City, etc.
- **Topics**: Cost reduction, security, mobile printing, cloud solutions

## Build & Deployment Notes

- Build output goes to `/dist` directory
- Cloudflare Pages deployment is configured
- The site uses BrowserRouter (not HashRouter)
- See `CLOUDFLARE-DEPLOYMENT.md` for deployment details

## Development Guidelines

1. **New Blog Posts**: Follow existing patterns in `src/pages/blog/` - include SEO meta tags, structured content, and Iowa-focused keywords
2. **New Location Pages**: Use existing location pages as templates
3. **Images**: Store in `/public` or `src/assets/`, optimize for web
4. **Testing**: Run `npm run build` before committing to catch any build errors
