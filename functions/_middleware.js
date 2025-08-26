export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  console.log(`[MIDDLEWARE] Processing: ${url.pathname}`);
  
  // Force correct MIME types for assets - AGGRESSIVE approach
  if (url.pathname.startsWith('/assets/')) {
    console.log(`[MIDDLEWARE] Asset request: ${url.pathname}`);
    
    try {
      // Try to fetch the actual asset
      const response = await context.next();
      console.log(`[MIDDLEWARE] Asset response status: ${response.status}, content-type: ${response.headers.get('content-type')}`);
      
      // If we get HTML for an asset, it means Cloudflare is serving index.html instead
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('text/html') || contentType.includes('html')) {
        console.log(`[MIDDLEWARE] ERROR: Asset ${url.pathname} returned HTML instead of asset!`);
        
        // Return 404 with proper error message
        return new Response(`Asset not found: ${url.pathname}`, { 
          status: 404,
          headers: {
            'Content-Type': 'text/plain',
            'X-Debug': 'Asset returned HTML instead of asset content'
          }
        });
      }
      
      // Clone response and FORCE correct MIME type
      const newHeaders = new Headers(response.headers);
      
      // Force MIME types based on file extension
      if (url.pathname.endsWith('.css')) {
        newHeaders.set('Content-Type', 'text/css; charset=utf-8');
        console.log(`[MIDDLEWARE] Forced CSS MIME type for ${url.pathname}`);
      } else if (url.pathname.endsWith('.js')) {
        newHeaders.set('Content-Type', 'application/javascript; charset=utf-8');
        console.log(`[MIDDLEWARE] Forced JS MIME type for ${url.pathname}`);
      }
      
      // Add cache headers
      newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
      
      const newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
      
      console.log(`[MIDDLEWARE] Serving ${url.pathname} with content-type: ${newResponse.headers.get('Content-Type')}`);
      return newResponse;
      
    } catch (error) {
      console.log(`[MIDDLEWARE] Error fetching asset ${url.pathname}:`, error);
      return new Response(`Error loading asset: ${error.message}`, { 
        status: 500,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  }
  
  // For non-asset requests, proceed normally
  console.log(`[MIDDLEWARE] Non-asset request, proceeding: ${url.pathname}`);
  return context.next();
}