/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a49ad9ba6c5f29d170aaee0e7f4360b5"
  },
  {
    "url": "assets/css/0.styles.7db47135.css",
    "revision": "afbf5a09ee9706f0d1d711e091bc4d07"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.35e6220c.js",
    "revision": "ecf26a122a23a60606cf012efacc0817"
  },
  {
    "url": "assets/js/11.ccc70dcc.js",
    "revision": "31287abee7900b8e57dd56592865758f"
  },
  {
    "url": "assets/js/2.7cceee75.js",
    "revision": "8f14e10436a26697cc7393ce2effc5b8"
  },
  {
    "url": "assets/js/3.df6f948b.js",
    "revision": "4f88e04773bbf7a91f2a0db80b0d1fc4"
  },
  {
    "url": "assets/js/4.8e3100ec.js",
    "revision": "4ad3b345314b8b1dc5074565d60a3d5c"
  },
  {
    "url": "assets/js/5.0f0c99aa.js",
    "revision": "9f8785d340c048d8da832e4e7a940b90"
  },
  {
    "url": "assets/js/6.8e21a56b.js",
    "revision": "d3d1ef018687bbd375671c692b38aada"
  },
  {
    "url": "assets/js/7.237970f5.js",
    "revision": "bcb87ea65beb1ee70f1e6a68578af42e"
  },
  {
    "url": "assets/js/8.a759532e.js",
    "revision": "4f91e55c960ed8ef69463c8119f3c9c1"
  },
  {
    "url": "assets/js/9.1d2dadb0.js",
    "revision": "19b0d516df8f49fa36f16545411bed10"
  },
  {
    "url": "assets/js/app.45e28561.js",
    "revision": "bf9e2c456ffe3151317e2727bed46544"
  },
  {
    "url": "guide/index.html",
    "revision": "fe01d8b0e37f6fb7e05ec39b1e1e5344"
  },
  {
    "url": "index.html",
    "revision": "c804c4c0d29ab605b270ff12f293f381"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
