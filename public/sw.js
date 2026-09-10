/**
 * Service Worker for Iowa Print Solutions PWA
 * Provides offline support and caching for better performance
 */

const CACHE_NAME = 'iowa-print-solutions-v2'
const OFFLINE_URL = '/offline.html'

// Assets to cache on install.
//
// Every path here must exist in /public. cache.addAll() is atomic: one 404
// rejects the whole batch, install() fails, and the worker never activates.
// v1 listed /favicon.ico and /IPS-blue.webp, neither of which ships, so the
// worker never installed and the site had no offline support at all. The
// install handler below now caches entries individually so a single bad path
// degrades one asset instead of the entire PWA.
const STATIC_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/IPSLogo-Icon.ico',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(
        STATIC_ASSETS.map((url) =>
          cache.add(new Request(url, { cache: 'reload' }))
        )
      ).then((results) => {
        results.forEach((result, i) => {
          if (result.status === 'rejected') {
            console.warn('SW: failed to precache', STATIC_ASSETS[i], result.reason)
          }
        })
      })
    )
  )
  // Activate immediately
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    })
  )
  // Take control of all clients immediately
  self.clients.claim()
})

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return

  // Skip Chrome extension requests
  if (event.request.url.includes('chrome-extension')) return

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone the response before caching
        const responseClone = response.clone()

        // Cache successful, non-opaque responses
        if (response.status === 200 && response.type === 'basic') {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone)
          })
        }

        return response
      })
      .catch(() => {
        // Try to get from cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse
          }

          // For navigation requests, serve the cached app shell so client-side
          // routing still works offline; fall back to the offline page.
          if (event.request.mode === 'navigate') {
            return caches.match('/').then((shell) => shell || caches.match(OFFLINE_URL))
          }

          // Return a basic offline response for other requests
          return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable'
          })
        })
      })
  )
})
