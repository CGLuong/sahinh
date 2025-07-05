'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "34d803457020f627abe16a6db86e81dd",
".git/config": "8f3dfb5082ea5f0318195da87b71db01",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b0867ae1cb878945574869bb33d27e1a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "83cf146a43b5b114fc3d21a3c36eaf37",
".git/logs/refs/heads/gh-pages": "83cf146a43b5b114fc3d21a3c36eaf37",
".git/logs/refs/remotes/origin/gh-pages": "e9211e38ac3d97a17f6b4dfd68dc7724",
".git/objects/07/c87043ed35a69e873cbff1ce7c71c315648ca8": "9a1c34284b8cb14bb2abd22d59566e19",
".git/objects/5a/109b18349677b01a11f7fc93d86cc584dbf614": "78b66cbc2e8e918fddda177fd880a99d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/0498c0f71dc5de71adaf1030973174733b42a6": "ba83170055d0c4c26d588c545ae69640",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fb/9a63f7399e6e30de1aa5a6e39ce2758a6b6a2e": "2da37b5e8398e7b0d3abe22009ee42a4",
".git/refs/heads/gh-pages": "cf286b4b15ad1be2d93ecfd82f0ea79d",
".git/refs/remotes/origin/gh-pages": "cf286b4b15ad1be2d93ecfd82f0ea79d",
"assets/AssetManifest.bin": "eba3b083fc0ee195efe58079ed5837f5",
"assets/AssetManifest.bin.json": "1eb6205df424dfce81b3340cffeab259",
"assets/AssetManifest.json": "3f759c5433fc20c02d38785322068537",
"assets/assets/audio/audio_1.mp3": "27b5e8a9c94e5180e0d662d6b338b897",
"assets/assets/audio/audio_10.mp3": "37e1a78e53cd1a1c128833bf293fa2fb",
"assets/assets/audio/audio_11.mp3": "b6d3b2f25136268b4c8a9b6bd304ae95",
"assets/assets/audio/audio_12.mp3": "3eb10d2c6a87daf5d7977a19c49ca493",
"assets/assets/audio/audio_13.mp3": "030baf6ef4bd828e838a7242490e2f0b",
"assets/assets/audio/audio_14.mp3": "ec72fe48e37f21914fa191623be31a4b",
"assets/assets/audio/audio_15.mp3": "10b6d19d7fc82f587610c118946d9ecd",
"assets/assets/audio/audio_16.mp3": "c9f680aff07c145717060f16f5e1d173",
"assets/assets/audio/audio_17.mp3": "ec662263f2efd14991c951f35355631f",
"assets/assets/audio/audio_18.mp3": "2064066040ca2ddcfbd8dff5a735a215",
"assets/assets/audio/audio_19.mp3": "16b6639f31cf411f8eaf300dabfc5343",
"assets/assets/audio/audio_2.mp3": "7c018ed9f7a966b502bf0a3dfad61c2c",
"assets/assets/audio/audio_20.mp3": "f65ebb05c3c268fb109483e1bd7d2abe",
"assets/assets/audio/audio_21.mp3": "fec09358b0e42ee3014e5df1e037f444",
"assets/assets/audio/audio_22.mp3": "aa628534905c3b7552980f4a8eb668db",
"assets/assets/audio/audio_23.mp3": "803549cd8654546044059a1bc4d6469f",
"assets/assets/audio/audio_24.mp3": "f3d51257a43e30933190917ac1192362",
"assets/assets/audio/audio_25.mp3": "ee72c01011a3b61567aee78dd8d83a10",
"assets/assets/audio/audio_26.mp3": "ea49829f38ae0e8fd73da190bdceb237",
"assets/assets/audio/audio_27.mp3": "c06d6479aef1483c9851a3838593070e",
"assets/assets/audio/audio_28.mp3": "3ffc541a8ac9b1387fb3bc29e24ddf38",
"assets/assets/audio/audio_3.mp3": "27927a4c9ebaf68687caf663ec0e2dca",
"assets/assets/audio/audio_4.mp3": "13fa798dd7603083d79559411430c9ef",
"assets/assets/audio/audio_5.mp3": "b732ff87c7286aadd6bd4749c6a56283",
"assets/assets/audio/audio_6.mp3": "297740aa450612af067a04d826eee0bd",
"assets/assets/audio/audio_7.mp3": "1669993650ca27cdfa15e6bd6bb08dfc",
"assets/assets/audio/audio_8.mp3": "98a4367fae527d67c15dad17cb6bbb43",
"assets/assets/audio/audio_9.mp3": "da9300a4fa8107106088735b0cde1775",
"assets/assets/audio/BATDAUTHI.mp3": "48ed0d069d0e079237e65dcf80d60084",
"assets/assets/audio/CHAMVACH.mp3": "3c419fe65e121afe1df4c422dc409c5c",
"assets/assets/audio/CHAMVATCAN.mp3": "6de47f3250de44b11ea0b23c644faed2",
"assets/assets/audio/CHETMAY.mp3": "1341e18305de5d0ef087dfb07061a887",
"assets/assets/audio/CHONGCHAN.mp3": "1dee4857d70701255043506d00f99e38",
"assets/assets/audio/DOXE.mp3": "30fd1040b1efe4f71f18f31ea2755f5b",
"assets/assets/audio/KHONGDUNGTRINHTU.mp3": "89f31c48c89cfd90dfc461986f9beb2d",
"assets/assets/audio/KHONGHOANTHANH.mp3": "7324411f01214211bac128f0fde9cab5",
"assets/assets/audio/QUATHOIGIANTHI.mp3": "d62cc25349535be26b25e8a1ba008449",
"assets/assets/audio/RANGOAIHINH.mp3": "218c93f2d74f930907ac6f3e76c7ed1d",
"assets/assets/audio/THIDAT.mp3": "b780e591d83155f68174913d33faf08f",
"assets/assets/audio/THITRUOT.mp3": "97a38e5fa04689ce85dc0994ae4668ba",
"assets/assets/audio/TRUATQUYENTHI.mp3": "40fc0e096de3fe676ec3ce25c9607d8a",
"assets/assets/audio/XE01.mp3": "fd5b7476bba3a929212d21b81d0fa3cc",
"assets/assets/audio/XE02.mp3": "09f2b18dec4d6cb211b604b87ad5dd9e",
"assets/assets/audio/XE03.mp3": "15c6c12384ca3689362c9e662bad0d78",
"assets/assets/audio/XE04.mp3": "c90b594698111643f62cad3a245a7ffe",
"assets/assets/audio/XE05.mp3": "8ce03a00e95795bf56eedbdccf9d45c4",
"assets/assets/audio/XE06.mp3": "ca24a40157e0802999b555431a65fe77",
"assets/assets/audio/XE07.mp3": "b654fe79f77f11a85735b65e03bd3ca4",
"assets/assets/audio/XE08.mp3": "202e03a74eaa27d95442611eef5fce11",
"assets/assets/audio/XE09.mp3": "a2ae0552f7a59339d38c5a707e012545",
"assets/assets/audio/XE10.mp3": "63d86c341de0868cddf4fd40461af157",
"assets/assets/audio/XE11.mp3": "c36021de297f71035fbabe90829ddbff",
"assets/assets/audio/XE12.mp3": "f00203dcfee95b04f350e8f652e7314a",
"assets/assets/audio/XE13.mp3": "885eeef92033f18af47219b5a8edda8f",
"assets/assets/audio/XE14.mp3": "e7ab183f8e71d4195c6206044b0d26fe",
"assets/assets/audio/XE15.mp3": "eee186033a1687ed7917a235b184671a",
"assets/assets/fonts/NotoSans-Regular.ttf": "b72e420edb95cdf06e6e0a27bc0d964d",
"assets/FontManifest.json": "1031a1db63b0247eb065faa27bfb7b0e",
"assets/fonts/MaterialIcons-Regular.otf": "9f44a569b2d4df5f25e73cae7d0cb9c4",
"assets/NOTICES": "218ef3cbe100456f5734872d3f02c31b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "32175dcc6bb721e6bfb72e85f0cb76d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "21d3d728da22c23a425cc1a609436ff0",
"/": "21d3d728da22c23a425cc1a609436ff0",
"main.dart.js": "38a61e0ae73e2505363253fb21cc5600",
"manifest.json": "9a27b9abe7841fd534fd771a9a637e1a",
"version.json": "745a66453d38939896b522e0cb0350f7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
