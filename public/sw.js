const CACHE_NAME = "portfolio-v1.1.0";
const urlsToCache = ["/", "/index.html", "/resume.pdf"];

// Install service worker
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => {
				return cache.addAll(urlsToCache).catch((err) => {
					console.warn("Cache addAll error:", err);
					return Promise.resolve();
				});
			})
			.then(() => self.skipWaiting()),
	);
});

// Fetch event - Stale-while-revalidate strategy
self.addEventListener("fetch", (event) => {
	// Skip cross-origin and non-GET requests
	if (
		!event.request.url.startsWith(self.location.origin) ||
		event.request.method !== "GET"
	) {
		return;
	}

	// Skip chrome-extension and other protocols
	if (!event.request.url.startsWith("http")) {
		return;
	}

	// Cache strategy for static assets
	if (
		event.request.destination === "image" ||
		event.request.destination === "font" ||
		event.request.destination === "style" ||
		event.request.destination === "script"
	) {
		event.respondWith(
			caches.open(CACHE_NAME).then((cache) => {
				return cache.match(event.request).then((cachedResponse) => {
					const fetchPromise = fetch(event.request)
						.then((networkResponse) => {
							if (networkResponse && networkResponse.status === 200) {
								cache.put(event.request, networkResponse.clone());
							}
							return networkResponse;
						})
						.catch(() => cachedResponse);

					return cachedResponse || fetchPromise;
				});
			}),
		);
	}
	// Network-first for HTML
	else if (event.request.headers.get("accept")?.includes("text/html")) {
		event.respondWith(
			fetch(event.request)
				.then((response) => {
					if (response && response.status === 200) {
						const responseToCache = response.clone();
						caches.open(CACHE_NAME).then((cache) => {
							cache.put(event.request, responseToCache);
						});
					}
					return response;
				})
				.catch(() => caches.match(event.request)),
		);
	}
});

// Activate and clean up old caches
self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames
						.filter((cacheName) => cacheName !== CACHE_NAME)
						.map((cacheName) => caches.delete(cacheName)),
				);
			})
			.then(() => self.clients.claim()),
	);
});
