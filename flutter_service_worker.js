'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d622cf2710b4fe18728500e8de184de7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "558eb83e2bb4065238586d56897dd971",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ac4f73ee548dcea719884ddbe3ea793",
".git/logs/refs/heads/main": "8ac4f73ee548dcea719884ddbe3ea793",
".git/logs/refs/remotes/origin/main": "c80bb1e8768007f260ffda2fda53eb31",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/09/c6078b2fff0cf24c08ab758a3703b1070b4875": "94ad367082982b8de0461b2a8422ad79",
".git/objects/0b/593e970fb5d8d158ae30c0344c6781e7f9e0de": "84abe752a2f6f091332d6072f7215030",
".git/objects/0c/b435303c7f51e4e2a2cc2f05896f2fa8dbea9c": "ecb474341df27396783cb7aa91289f2f",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/b024f8671936cb8a4fc02dde270f14f4d93eba": "e20eda86fdc4474c597050f2d41d2dd7",
".git/objects/1e/36e328745ac53505158537830da99225eba328": "0cad6f62c2ba051c1050c18114bb15de",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/9c4dfd9910a2d9844664c43294f7ce6a7120d2": "5c977ab5345018cc6e76210910c72e0a",
".git/objects/2e/ac2ce1541bfd2736bef38304605318d2f9c394": "6ddc43a7d942f8dd13cc170d2257bc5e",
".git/objects/35/fce79113fe7f502713f48b2f3521c8134e38a7": "47bc6c503c81e22f01b2e13c0f3366dc",
".git/objects/39/bd042c448cde9ef19a3309f19ae0d5179f390b": "aef5b7f03ad949ca32a95d97bb2c33c7",
".git/objects/39/deb2e7b5de843c5aa177c4acbf21671c9de84a": "fef06a3050e8fec45ee99c1a31bcf3d4",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3d/680716251f7ad7cf2aec99bdfac796d8b1f72d": "4189a06227ccccd946b8a352763ee288",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/15e20255d1ebb03edeb4e2a1c69ead336ab881": "1c8429b5a2bb0f11cce2062cacff8d1a",
".git/objects/44/ace342d93b42a2df2da9f35be6727079cca161": "a408ed3a24f33ab4e42e154979ac03df",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/c2d852f35d78f1b65579fc19f7fb384387d0ff": "06dcf767286cabf58fbdc345da48dfbb",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/21948efa6c8c519c9607c2cea9e3695143130d": "3bb5246b96f21039d8d2e43edec22caf",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/9bc69cef6fb9833b8e48df84655b0e5771a6fe": "f87e78f2a3bd33e33cd0e34d223cffdd",
".git/objects/5d/f9a3f71e56dbd5498a952290e302f6776f889c": "703c6515638b127fcdab230bddaf2baf",
".git/objects/62/f03f02656ec0d811cea2bd21212404b90ac4fe": "6e0f6fe5d5616a381de2cfde09e9984b",
".git/objects/6c/05360fbe9c87d8a0b87898c63fa03e1836e9b5": "ce03a3364f5f351231b63d567896b8a7",
".git/objects/6d/a6d18e395f01aa7824f5e9475f39400547f21d": "cf9153ec67787e2e60d681199ca996f9",
".git/objects/70/23e0ab4fd3acc16e807b11b0e4ba8841a7ec6d": "14d1b4951276135a779f2c9f6bb92c09",
".git/objects/71/f51683fcbace9c0c152132c4815bf76d1c012e": "2e009e6874dccd3c81c7218d1207606d",
".git/objects/72/daa73ee26dd29908575d1ced032fc04bdbe5ec": "771ccfa606fde8e486e254e40602625a",
".git/objects/75/11802d27e03a7cd1e73d323984e3d3f9f3e4ce": "64a41c3c741bd343fa8f87d546dd822f",
".git/objects/75/8a14fbb7cc3145b3a404525d3fe81187778027": "8aff01d00de847b832823d575ad2bd32",
".git/objects/76/7e1235135fe3c10937e924dde9217acb551806": "eb73e396dd8dd8a492356f71c4a5c596",
".git/objects/7c/6fc80de4360928ac79bfca8fb221443e702428": "c88308e027eb01e9e76d59f7c5c0a94a",
".git/objects/7d/ace451f355b1ee5b8eccc0e0544d8391db96ab": "b38dfe72f328b4a3747b1a444855f7bd",
".git/objects/7d/b151788957a83bc324a37c6d4487e279f84b04": "db2084ba7ad2fa73a9c262bf9874da71",
".git/objects/86/65026c3e35887f6e1136772b2bc1ee8d23eb8e": "297ce4b750c0bff10bed808c27afb365",
".git/objects/88/ad6d969f2ecb3ac4cde56506d58ac2c4665c51": "a6089d2abe6f4596ae26dfa5b7d64088",
".git/objects/89/dcb199a391d09398a4f017f5cf58bd63b1a03e": "393aa899475ffc1d07aaf318e5a72359",
".git/objects/8b/8ef790946c749d6f179ddc81c6016ccdb06d3d": "8ff2ba13bfb32c283868635dfa16a63b",
".git/objects/8b/ef68a05e75c5e198e09c78bf826f2b217706c0": "094472ec7e2ae4c31aa9e789bb471b9c",
".git/objects/8d/50fb938372f8325e07f211349620b2c2339456": "b666264a3211e8be51732c3ba34c3c00",
".git/objects/8f/25defb4b64ae4da0a555848088e65628542f7d": "a765e1ad0a489859ad42532447e39b33",
".git/objects/91/17cda8a1a753e03e0e1bce7ae4507b08b598ad": "4244885def9b044e826675e7b9e4bbd3",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/3a8cd38f96c2888c7bcfe5e77b9ef3469283fd": "a2bb9d499a7ab1c8db7c583c45531a8c",
".git/objects/9f/7f931f7348ae0358911e6bab46d8fb573586c3": "853e700c4cb824e5fa2fb831731f04be",
".git/objects/a0/4dd2ee4664d8781c34d432977b1de8ce1abe8f": "6cb84b78b301932243a4d08fb3171f5b",
".git/objects/aa/83c1091ec9b95d3698af433f1651c3233132ca": "17f90fe0dc203aa5e36315d6fbecaf53",
".git/objects/ab/359e56fe2d5b082c912dec56244ac1008205e6": "ad6331daa152c17ca012f41dd2f570f4",
".git/objects/b8/de0079a925ffccc48fddfd6907f9d0f69ef631": "000897e104951f16cd0679d61752a87c",
".git/objects/b9/4d6383be9a7186d771a13fac72b4a1ca685b01": "9b9b792a136ca7eb62467a4372a79ea9",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/177eab638e6cf3143d120226271ebc33e9a765": "6b6fe1f37d5da0912adf2f0d7bc78ce5",
".git/objects/c2/64030178596b073bdca9d5c8506f3685cf9c4b": "d36f65faac2eb4dc10b1afc00a5fa2f3",
".git/objects/c3/92f19836f299ea5c88a365fb2036062d20cc5c": "5b9b4ae6bac4748bf27e53cac18397eb",
".git/objects/c7/2bdb3f45f9739107e6b134e27da2dceb7b1ecb": "c3258cad8ce6082ab2ecb3f24099b028",
".git/objects/c9/a0364e27ef9fa665d94d95111bce8e5a6dcc99": "aa9a9ee3d56398d9deb8946ed5abd652",
".git/objects/ca/256d08bdfe75c0a32fa8275bc9ea116eaf6aa2": "c6e3a74e46149c0e86f1d938f6bd78cc",
".git/objects/ca/5d4fcb23965db2d43ad488826bf257d3be71df": "d189dbb90571d44f90b765743a10b5f9",
".git/objects/cd/3171aa62d06302b3d4ec32951803e835975db2": "f1a6474127e0912f10af5b3f4e484bcc",
".git/objects/d0/69a2340ccf551e04dea818f8ab74824f4269aa": "8a387ba55730a7823d442d0cbab06108",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/cc0490211f19e01bd0f6446d3765c87b678c53": "65961830e5cc98e4869da9a12e50d651",
".git/objects/e4/288169f26e26ec3137a5a191cc48c215db6462": "88b7b83902c75b9545ac18f2b9579bfb",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/730e9dc0f3f4618c2526127d5d929ee266c14f": "9ff0306334334383e3a8bfe78924542d",
".git/objects/e9/dfb7d45cfde78e6aec422660fa1e35676636d5": "183c2a6377d5a5a2ba9349aac5e57a9c",
".git/objects/ea/861d37d058ce8cd9273e22b5fa8b0d9c5b906c": "fd0f61438f8ae0e4831071a3ca7399aa",
".git/objects/ec/753505dff485caa69c4203f55d3bc383e2ddf0": "31de70235bb3a3bda8672db21a518bde",
".git/objects/f6/dc2884fcb37b7843eb18b45e65b840ef5b27cf": "23ebb3afd4208c102dc8234c390effa5",
".git/objects/f6/f6ad6a7898e01db1e3e6ae115f65326a7af457": "dcbc64f0114e2d35f37e0fee117d0f54",
".git/objects/fc/826840c5f6fcb4d744e18600ec55ee5545d5ea": "8a58841db21e8aced91eef5fbfc309b6",
".git/refs/heads/main": "8cc24e2fa3fc6e667eee425c0a235cee",
".git/refs/remotes/origin/main": "8cc24e2fa3fc6e667eee425c0a235cee",
"assets/AssetManifest.bin": "5b39d7b15373eeed7eed27572248a6f7",
"assets/AssetManifest.bin.json": "f87b32833eafc363aeb028fdd3f2e9c5",
"assets/AssetManifest.json": "11a222dd508dab3f46dd57f048ed1451",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/blob_drumstick_black.png": "381f70d9f8dd4fbbb720214fa02939a2",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/blog_01.jpg": "cd78990246f63c4d64ca5c26bcf31289",
"assets/assets/images/blog_02.jpg": "01c4b84663980a0b4f55f4bd196492bd",
"assets/assets/images/blog_03.jpg": "5f88a99b651c6dbad988d684c6fc41b3",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/coming_soon.png": "53192cdb6a3fe6629c942aa84721ae0d",
"assets/assets/images/dev_aboutme.png": "0f80b2a2275010c5384ffab7f7e4f04d",
"assets/assets/images/dev_aboutme1.png": "21ea8f79cfc69b619c767fa9573b5295",
"assets/assets/images/dev_award.png": "8845f91801f9b7c8d39566baa9a87a19",
"assets/assets/images/dev_award1.png": "9330277f7c4279bb73c0f637f6871af1",
"assets/assets/images/dev_header.png": "821431da32f8f436156fe7785db2adfd",
"assets/assets/images/dev_header1.png": "6e4b03020cee4b554c35ef65a45b0a05",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/dots_globe_yellow2.png": "d1394584431e43b6973ca031de59a284",
"assets/assets/images/ghana_flag.png": "0e7e9ac1ff48af846a5e3cd44abce59b",
"assets/assets/images/Group%252013.png": "1b3aa3c77a5b5f00b3293bb700737aa3",
"assets/assets/images/hi_there.png": "1ac6f5101b6a5511f4ad8f8965a49f89",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/logo_dark.png": "48cd11189c65452f4c936db22bef23e4",
"assets/assets/images/logo_light.png": "b6b6f1ae4b8fe4c627f4c1b53ee8c276",
"assets/assets/images/portfolio_01.png": "734d77cb2120181657e6544654b42e4f",
"assets/assets/images/portfolio_02.png": "84f16448ec899d2c7597093ae07c079c",
"assets/assets/images/portfolio_03.jpg": "45d7db96b72f25b4c76740e5dec2208e",
"assets/assets/images/portfolio_04.jpg": "ff07b0c6397e19d0cf30b03df9f196d2",
"assets/assets/images/portfolio_05.jpg": "9e5fedca2725d59b2692670505c8e7e5",
"assets/assets/images/portfolio_06.jpg": "015d9a88eeaa1a0f5e39b81d32e1bf87",
"assets/assets/images/spider.riv": "93d4ef2f0a17bf51a1a65c4c1cc29729",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/fonts/MaterialIcons-Regular.otf": "9f3f4583f55ec37eaa0743b024381b8f",
"assets/NOTICES": "472024f5ce9a74c0b40d83e65ddf4d03",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "8f721eca0eb6663465bf2ba95f02e659",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c3b067bcd4dea4ce8811cf929e8e3df1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "3ffcd9a3e6cd15207543b6d24099a538",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/logo.png": "32ea7e492ee734c65691426952bd8805",
"index.html": "9af44f58ce61ebd8b7affcb4509d63e7",
"/": "9af44f58ce61ebd8b7affcb4509d63e7",
"main.dart.js": "3e6c7bc78341bf79052488eb2ed037ae",
"manifest.json": "55c1cb04e8a554e1328dee651456b8f6",
"version.json": "e5c3a2e7c6ad8ca9d4b1da1be392d211"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
