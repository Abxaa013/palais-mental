/* Palais mental : fonctionnement hors ligne.
   Tous les fichiers sont mis en cache à l'installation ; l'appli s'ouvre ensuite sans connexion.
   Si vous modifiez un fichier, changez VERSION pour que le téléphone récupère la nouvelle version. */
const VERSION = 'palais-mental-v1';
const ASSETS = [
  'index.html',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-192.png',
  'icons/icon-maskable-512.png',
  'fonts/ibm-plex-sans-latin-400-normal.woff2',
  'fonts/ibm-plex-sans-latin-500-normal.woff2',
  'fonts/ibm-plex-sans-latin-600-normal.woff2',
  'fonts/ibm-plex-sans-latin-700-normal.woff2',
  'fonts/literata-latin-opsz-normal.woff2',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION)
      .then((cache) => cache.addAll(ASSETS.map((url) => new Request(url, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

// Met à jour la page en cache en arrière-plan ; la nouvelle version s'affiche à l'ouverture suivante.
function refreshIndex() {
  return fetch('index.html', { cache: 'no-cache' })
    .then((res) => {
      if (res.ok && !res.redirected) {
        return caches.open(VERSION).then((cache) => cache.put('index.html', res));
      }
      return undefined;
    })
    .catch(() => undefined);
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    // Ouverture instantanée depuis le cache, même sans réseau.
    event.respondWith(caches.match('index.html').then((cached) => cached || fetch(req)));
    event.waitUntil(refreshIndex());
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      if (res.ok && !res.redirected) {
        const copy = res.clone();
        caches.open(VERSION).then((cache) => cache.put(req, copy));
      }
      return res;
    }))
  );
});
