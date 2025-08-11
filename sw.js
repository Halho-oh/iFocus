self.addEventListener('install', e => {
    e.waitUntill(
        caches.open('focus-manager-v1').then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './css/style.css',
                './js/main.js',
                './manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});