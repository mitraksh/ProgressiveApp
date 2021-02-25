var cahcheName = 'petstore-v1';
var cacheFiles = [
    'index.html',
    'lessons.js',
    'petstore1.webmanifest',
    'images/bio.png',
    'images/chem.jpeg',
    'images/english.png',
    'images/french.png',
    'images/geography.jpeg',
    'images/german.png',
    'images/history.png',
    'images/icon-store.png',
    'images/maths.png',
    'images/physics.png',
    'images/politicalscience.png',

];

self.addEventListener('install' (e) => {
    console.log('[Service Worker] install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] caching all files');
            return cache.addAll(cacheFiles);
        })
    );
});