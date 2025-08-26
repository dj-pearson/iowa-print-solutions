export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // For asset requests, ensure proper MIME types are set
  if (url.pathname.startsWith('/assets/')) {
    const response = await context.next();
    
    // Check if we got HTML instead of the asset (which means 404 or redirect issue)
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      // Return 404 instead of HTML for missing assets
      return new Response('Asset not found', { 
        status: 404,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
    
    // Clone the response and ensure correct MIME type
    const newResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: new Headers(response.headers)
    });
    
    // Set correct MIME type based on extension
    if (url.pathname.endsWith('.css')) {
      newResponse.headers.set('Content-Type', 'text/css; charset=utf-8');
    } else if (url.pathname.endsWith('.js')) {
      newResponse.headers.set('Content-Type', 'application/javascript; charset=utf-8');
    }
    
    return newResponse;
  }
  
  // For all other requests, proceed normally
  return context.next();
}