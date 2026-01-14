/// <reference lib="webworker" />
import { precacheAndRoute, matchPrecache } from "workbox-precaching";

precacheAndRoute([
  ...self.__WB_MANIFEST,
  { url: "/portal.png", revision: "1" },
]);

const RUNTIME_CACHE = "rick-morty-runtime-v1";

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const precached = await matchPrecache(request).catch(() => null);
  if (precached) return precached;

  const cache = await caches.open(RUNTIME_CACHE);
  const cachedResponse = await cache.match(request);
  if (cachedResponse) return cachedResponse;

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone()).catch(() => {
        console.warn("Не удалось сохранить ответ в runtime cache:", request.url);
      });
    }
    return response;
  } catch (err) {
    console.warn("Fetch не удался, возвращаем fallback:", err);
    return await matchPrecache("/index.html").catch(() => null);
  }
}
