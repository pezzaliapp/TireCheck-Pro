const CACHE_NAME = 'tirecheck-pro-v3';

self.addEventListener('install', event => {
  self.skipWaiting(); // attiva subito senza aspettare
});

self.addEventListener('activate', event => {
  // Elimina TUTTE le cache precedenti senza eccezioni
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = event.request.url;

  // API esterne: sempre rete diretta
  if (
    url.includes('generativelanguage.googleapis.com') ||
    url.includes('make.com') ||
    url.includes('fonts.googleapis.com') ||
    url.includes('fonts.gstatic.com') ||
    url.includes('cdnjs.cloudflare.com')
  ) {
    return; // passa alla rete nativa
  }

  // index.html e root: SEMPRE dalla rete (network-first)
  if (
    url.endsWith('/') ||
    url.includes('index.html') ||
    url.includes('TireCheck-Pro/')
  ) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // manifest.json e sw.js: network-first
  if (url.includes('manifest.json') || url.includes('sw.js')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }).catch(() => caches.match(event.request))
    );
    return;
  }

  // tutto il resto: network con fallback cache
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
