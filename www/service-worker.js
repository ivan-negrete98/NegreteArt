/* ==========================================================
   NegreteArt Studio Service Worker
========================================================== */

const CACHE_NAME = "negreteart-studio-v1";

const FILES_TO_CACHE = [

    "./",

    "./index.html",

    "./manifest.json",

    "./theme.css",
    "./studio.css",
    "./mobile.css",
    "./tablet.css",
    "./desktop.css",

    "./scene.js",
    "./camera.js",
    "./lights.js",
    "./grid.js",
    "./gizmos.js",
    "./selection.js",
    "./primitives.js",
    "./ui.js",
    "./engine.js",

    "./icons/icon-192.png",
    "./icons/icon-512.png"

];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache => cache.addAll(FILES_TO_CACHE))

    );

});

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys.map(key => {

                    if(key !== CACHE_NAME){

                        return caches.delete(key);

                    }

                })

            );

        })

    );

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

        .then(response => {

            return response || fetch(event.request);

        })

    );

});