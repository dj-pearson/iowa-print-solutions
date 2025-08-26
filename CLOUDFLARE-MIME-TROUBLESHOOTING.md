# Cloudflare MIME Type Issue - Troubleshooting Guide

## Problem
```
Refused to apply style from 'https://iowaprintsolutions.com/assets/index-Bv3NC5aP.css' because its MIME type ('text/html') is not a supported stylesheet MIME type

Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "text/html"
```

## Root Cause
Cloudflare Pages is serving HTML (likely index.html or 404.html) instead of the actual CSS and JS files. This happens when:
1. The `_redirects` file is too aggressive and catches asset requests
2. Static assets aren't being served with correct MIME types
3. Asset paths aren't resolving correctly on Cloudflare

## Solutions Implemented

### 1. Minimal `_redirects` Configuration
```
# Cloudflare Pages SPA redirect
# This is the minimal configuration for React Router SPA
/*    /index.html   200
```
- Simplified to only redirect HTML routes to index.html
- Static assets should be served automatically by Cloudflare

### 2. Explicit MIME Types in `_headers`
```
/assets/*.js
  Content-Type: application/javascript; charset=utf-8

/assets/*.css
  Content-Type: text/css; charset=utf-8
```
- Forces correct MIME types for assets

### 3. Added 404.html
- Provides fallback for any routing issues
- Same content as index.html to ensure SPA routing works

## Cloudflare Pages Deployment Settings

### Build Configuration
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: (leave empty for root)
- **Node.js version**: 18 or latest

### Environment Variables
Set in Cloudflare Pages dashboard:
- `NODE_ENV=production`

## Alternative Solutions (if issue persists)

### Option 1: Use Cloudflare Functions for Asset Handling
Create `functions/_middleware.js`:
```javascript
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // Serve static assets directly
  if (url.pathname.startsWith('/assets/') || 
      url.pathname.match(/\.(js|css|png|jpg|ico|svg)$/)) {
    return context.next();
  }
  
  // Serve index.html for all other routes (SPA)
  return context.next();
}
```

### Option 2: Alternative `_redirects` Format
```
# More explicit static asset handling
/assets/*  /assets/:splat  200
*.js       /:splat         200
*.css      /:splat         200
/*         /index.html     200
```

### Option 3: Use Hash Router Instead of Browser Router
If all else fails, switch to HashRouter in React Router:
```javascript
import { HashRouter as Router } from 'react-router-dom'
```

## Testing Steps

1. **Check Asset URLs**: Verify assets are accessible directly:
   - `https://yourdomain.com/assets/index-Bv3NC5aP.css`
   - `https://yourdomain.com/assets/index-Bb3hCfPB.js`

2. **Check Response Headers**: Use browser dev tools to verify:
   - CSS files return `Content-Type: text/css`
   - JS files return `Content-Type: application/javascript`

3. **Check Cloudflare Cache**: Try clearing Cloudflare cache in dashboard

4. **Test Local Preview**: Verify `npm run preview` works locally

## Current Status
- ✅ Simplified `_redirects` to minimal SPA configuration
- ✅ Added explicit MIME types in `_headers`
- ✅ Created 404.html fallback
- ✅ Updated wrangler.toml for proper Cloudflare Pages config
- ✅ Build process working correctly locally

**Next: Deploy to Cloudflare Pages and test asset serving**