// Cloudflare Worker to serve Iowa Print Solutions React SPA from GitHub
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    console.log(`[WORKER] Request: ${url.pathname}`);
    
    // GitHub raw content base URL for your repo
    // Replace 'main' with your branch name if different
    const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/dj-pearson/iowa-print-solutions/main/dist';
    
    // Handle static assets with proper MIME types
    if (url.pathname.startsWith('/assets/') || 
        url.pathname.endsWith('.js') || 
        url.pathname.endsWith('.css') ||
        url.pathname.endsWith('.png') ||
        url.pathname.endsWith('.jpg') ||
        url.pathname.endsWith('.svg') ||
        url.pathname.endsWith('.ico') ||
        url.pathname.endsWith('.json') ||
        url.pathname.endsWith('.txt') ||
        url.pathname.endsWith('.xml')) {
      
      console.log(`[WORKER] Asset request: ${url.pathname}`);
      
      try {
        // Fetch asset from GitHub
        const assetUrl = `${GITHUB_RAW_BASE}${url.pathname}`;
        console.log(`[WORKER] Fetching: ${assetUrl}`);
        
        const assetResponse = await fetch(assetUrl, {
          method: request.method,
          headers: {
            'User-Agent': 'Cloudflare-Worker-IPS/1.0',
            'Accept': '*/*',
          },
        });
        
        if (assetResponse.ok) {
          // Get the content and set proper MIME type
          const content = await assetResponse.arrayBuffer();
          const headers = new Headers();
          
          // Set correct MIME type based on file extension
          if (url.pathname.endsWith('.js')) {
            headers.set('Content-Type', 'application/javascript; charset=utf-8');
            console.log(`[WORKER] Serving JS: ${url.pathname}`);
          } else if (url.pathname.endsWith('.css')) {
            headers.set('Content-Type', 'text/css; charset=utf-8');
            console.log(`[WORKER] Serving CSS: ${url.pathname}`);
          } else if (url.pathname.endsWith('.png')) {
            headers.set('Content-Type', 'image/png');
          } else if (url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg')) {
            headers.set('Content-Type', 'image/jpeg');
          } else if (url.pathname.endsWith('.svg')) {
            headers.set('Content-Type', 'image/svg+xml');
          } else if (url.pathname.endsWith('.ico')) {
            headers.set('Content-Type', 'image/x-icon');
          } else if (url.pathname.endsWith('.json')) {
            headers.set('Content-Type', 'application/json');
          } else if (url.pathname.endsWith('.xml')) {
            headers.set('Content-Type', 'application/xml');
          } else if (url.pathname.endsWith('.txt')) {
            headers.set('Content-Type', 'text/plain');
          } else {
            // Default binary content
            headers.set('Content-Type', assetResponse.headers.get('Content-Type') || 'application/octet-stream');
          }
          
          // Add caching and security headers
          headers.set('Cache-Control', 'public, max-age=31536000, immutable');
          headers.set('X-Content-Type-Options', 'nosniff');
          headers.set('Access-Control-Allow-Origin', '*');
          
          return new Response(content, {
            status: 200,
            headers: headers,
          });
        } else {
          console.error(`[WORKER] Asset not found: ${assetUrl} - ${assetResponse.status}`);
        }
      } catch (error) {
        console.error(`[WORKER] Asset fetch error for ${url.pathname}:`, error);
      }
      
      // Asset not found, return 404
      return new Response('Asset not found', {
        status: 404,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
    
    // For all other routes (React SPA routes), serve index.html
    console.log(`[WORKER] SPA route: ${url.pathname}`);
    
    try {
      const indexUrl = `${GITHUB_RAW_BASE}/index.html`;
      console.log(`[WORKER] Fetching index.html: ${indexUrl}`);
      
      const indexResponse = await fetch(indexUrl, {
        method: 'GET',
        headers: {
          'User-Agent': 'Cloudflare-Worker-IPS/1.0',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        },
      });
      
      if (indexResponse.ok) {
        const html = await indexResponse.text();
        console.log(`[WORKER] Serving index.html for route: ${url.pathname}`);
        
        return new Response(html, {
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=300',
            'X-Frame-Options': 'DENY',
            'X-Content-Type-Options': 'nosniff',
            'X-XSS-Protection': '1; mode=block',
          },
        });
      } else {
        console.error(`[WORKER] Failed to fetch index.html: ${indexResponse.status}`);
      }
    } catch (error) {
      console.error(`[WORKER] Index.html fetch error:`, error);
    }
    
    // Final fallback
    return new Response(`
      <html>
        <head><title>Iowa Print Solutions - Loading</title></head>
        <body>
          <h1>Iowa Print Solutions</h1>
          <p>Application temporarily unavailable. Please try again in a moment.</p>
          <p>If this issue persists, please contact support.</p>
          <script>
            console.log('Fallback page loaded');
            // Retry after 3 seconds
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          </script>
        </body>
      </html>
    `, {
      status: 503,
      headers: { 
        'Content-Type': 'text/html; charset=utf-8',
        'Retry-After': '30'
      },
    });
  },
};