// MindScreen Service Worker — Network-First Strategy
// Always fetches fresh content, falls back to cache only when offline

const CACHE_NAME = 'mindscreen-v2.0';
const ASSETS = [
    '/mindscreen/',
    '/mindscreen/index.html',
    '/mindscreen/styles.css',
    '/mindscreen/app.js',
    '/mindscreen/questionnaires.js',
    '/mindscreen/translations.js',
    '/mindscreen/manifest.json',
    '/mindscreen/icon-192.png',
    '/mindscreen/icon-512.png'
];

// Install — pre-cache core assets
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting(); // Activate immediately
});

// Activate — clear old caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim(); // Take control immediately
});

// Fetch — NETWORK FIRST, fallback to cache
// This ensures the app ALWAYS gets the latest version when online
self.addEventListener('fetch', (e) => {
    // Skip non-GET and cross-origin requests
    if (e.request.method !== 'GET') return;

    e.respondWith(
        fetch(e.request)
            .then(response => {
                // Got fresh response — update the cache
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
                return response;
            })
            .catch(() => {
                // Network failed — serve from cache (offline mode)
                return caches.match(e.request);
            })
    );
});
