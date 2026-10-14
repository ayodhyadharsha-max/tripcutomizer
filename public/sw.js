/**
 * Trip Customizer High-Performance Service Worker (v5-perf)
 * Optimized for Instant APK Launch, Offline Resiliency & Fast Photo Delivery
 */

const STATIC_CACHE = 'tripcustomizer-static-v6';
const IMAGE_CACHE = 'tripcustomizer-images-v6';
const PAGES_CACHE = 'tripcustomizer-pages-v6';

const PRECACHE_ASSETS = [
  '/',
  '/manifest.json',
  '/hero-banner.webp',
  '/favicon.ico',
  '/favicon-48x48.png',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-icon.png',
];

// Max images to keep in runtime cache to prevent mobile storage bloat
const MAX_CACHED_IMAGES = 90;

async function trimCache(cacheName, maxItems) {
  try {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    if (keys.length > maxItems) {
      await cache.delete(keys[0]);
      await trimCache(cacheName, maxItems);
    }
  } catch (e) {}
}

// 1. Install Event: Precache core shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(async (cache) => {
      await Promise.allSettled(
        PRECACHE_ASSETS.map((asset) =>
          cache.add(asset).catch((err) => {
            console.warn('Pre-cache skip:', asset, err);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

// 2. Activate Event: Clean up outdated caches
self.addEventListener('activate', (event) => {
  const currentCaches = [STATIC_CACHE, IMAGE_CACHE, PAGES_CACHE];
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (!currentCaches.includes(key)) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Fetch Event Routing
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Bypass API calls, auth, and analytics from caching
  if (
    url.pathname.startsWith('/api/') ||
    url.hostname.includes('razorpay.com') ||
    url.hostname.includes('supabase.co') ||
    url.hostname.includes('firebaseio.com') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('google-analytics.com') ||
    url.hostname.includes('googletagmanager.com') ||
    url.hostname.includes('facebook.com') ||
    url.hostname.includes('facebook.net')
  ) {
    return;
  }

  // A. Static Next.js Bundles & Core Shell (Cache-First)
  if (
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.match(/\.(js|css|woff2|woff|ttf|ico)$/i)
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone)).catch(() => {});
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // B. Photos & Media (Images from Unsplash, /_next/image, or local WebP/JPG/PNG)
  // Strategy: Cache-First with Stale-While-Revalidate for instant 0ms photo delivery
  const isImageRequest =
    request.destination === 'image' ||
    url.hostname === 'images.unsplash.com' ||
    url.pathname.startsWith('/_next/image') ||
    url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|avif)$/i);

  if (isImageRequest) {
    event.respondWith(
      (async () => {
        try {
          const cache = await caches.open(IMAGE_CACHE);
          const cachedResponse = await cache.match(request);

          const networkFetch = fetch(request)
            .then(async (networkResponse) => {
              if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
                try {
                  await cache.put(request, networkResponse.clone());
                  trimCache(IMAGE_CACHE, MAX_CACHED_IMAGES);
                } catch (e) {}
              }
              return networkResponse;
            })
            .catch(() => null);

          if (cachedResponse) {
            // Keep cache updated in the background
            event.waitUntil(networkFetch);
            return cachedResponse;
          }

          const networkResponse = await networkFetch;
          if (networkResponse) return networkResponse;

          return new Response('', { status: 408, statusText: 'Image Timeout' });
        } catch (e) {
          return fetch(request);
        }
      })()
    );
    return;
  }

  // C. HTML Page Navigation (Stale-While-Revalidate with fast 1.2s network timeout)
  // Guarantees the APK opens instantly instead of hanging on a blank screen
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(PAGES_CACHE);
        const cachedResponse = await cache.match(request);

        const fetchWithTimeout = new Promise((resolve, reject) => {
          const timer = setTimeout(() => {
            if (cachedResponse) resolve(cachedResponse);
          }, 1200);

          fetch(request)
            .then((networkResponse) => {
              clearTimeout(timer);
              if (networkResponse && networkResponse.status === 200) {
                cache.put(request, networkResponse.clone());
              }
              resolve(networkResponse);
            })
            .catch((err) => {
              clearTimeout(timer);
              if (cachedResponse) resolve(cachedResponse);
              else reject(err);
            });
        });

        try {
          return await fetchWithTimeout;
        } catch (e) {
          return cachedResponse || (await caches.match('/'));
        }
      })()
    );
    return;
  }
});
