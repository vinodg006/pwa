self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("static").then(function (cache) {
      cache.addAll([
        "/",
        "./index.html",
        "./src/js/app.js",
        "./src/css/app.css",
        "./src/images/pwa.jpg",
        "https://fonts.googleapis.com/css?family=Raleway:400,700",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (res) {
      if (res) {
        return res;
      } else {
        return fetch(event.request);
      }
    })
  );
});
