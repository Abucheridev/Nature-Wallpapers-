const C="wildwalls-v1",F=["./","index.html","manifest.json","icon.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;const u=new URL(e.request.url);
 if(u.origin!==location.origin){return}
 e.respondWith(fetch(e.request).then(r=>{if(F.some(f=>u.pathname.endsWith(f.replace("./","")))||u.pathname.endsWith("/")){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request)))});
