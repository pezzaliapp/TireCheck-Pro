const CACHE_NAME = 'tirecheck-pro-v3';
const ASSETS = [
  './index.html',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Elimina TUTTE le cache vecchie
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Elimino cache vecchia:', key);
            return caches.delete(key);
          })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Gemini e Make.com: sempre rete diretta, mai cache
  if (
    url.includes('generativelanguage.googleapis.com') ||
    url.includes('hook.') ||
    url.includes('make.com')
  ) {
    return;
  }

  // index.html: network-first (prende sempre la versione aggiornata)
  if (url.endsWith('/') || url.includes('index.html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // aggiorna la cache con la versione fresca
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request)) // fallback offline
    );
    return;
  }

  // Tutto il resto: cache-first
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
