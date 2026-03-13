const CACHE = 'nfa-v1';
const FILES = ['/', '/index.html', '/favicon.ico', '/favicon-32.png', '/favicon-192.png', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
