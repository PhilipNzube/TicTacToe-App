let cacheData = "MyAppCache";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/static/css/main.7c74254f.css',
                '/static/js/main.75a6179e.js',
                '/manifest.json',
                '/ICON.png',
                '/ICON192.png',
                '/ICON512.png',
                '/index.html',
                '/',
                '/MainGame'
            ])
        })
    )
})
this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
            })


        )
    }
})