"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[4013],{2133:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"rx-storage-performance","title":"\ud83d\udcc8 Discover RxDB Storage Benchmarks","description":"Explore real-world benchmarks comparing RxDB\'s persistent and semi-persistent storages. Discover which storage option delivers the fastest performance.","source":"@site/docs/rx-storage-performance.md","sourceDirName":".","slug":"/rx-storage-performance.html","permalink":"/rx-storage-performance.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\ud83d\udcc8 Discover RxDB Storage Benchmarks","slug":"rx-storage-performance.html","description":"Explore real-world benchmarks comparing RxDB\'s persistent and semi-persistent storages. Discover which storage option delivers the fastest performance."},"sidebar":"tutorialSidebar","previous":{"title":"Third Party Plugins","permalink":"/third-party-plugins.html"},"next":{"title":"NoSQL Performance Tips","permalink":"/nosql-performance-tips.html"}}');var n=s(4848),o=s(8453);const a={title:"\ud83d\udcc8 Discover RxDB Storage Benchmarks",slug:"rx-storage-performance.html",description:"Explore real-world benchmarks comparing RxDB's persistent and semi-persistent storages. Discover which storage option delivers the fastest performance."},i=void 0,c={},d=[{value:"RxStorage Performance comparison",id:"rxstorage-performance-comparison",level:2},{value:"Persistend vs Semi-Persistend storages",id:"persistend-vs-semi-persistend-storages",level:2},{value:"Performance comparison",id:"performance-comparison",level:2},{value:"Measurements",id:"measurements",level:3},{value:"Browser based Storages Performance Comparison",id:"browser-based-storages-performance-comparison",level:2},{value:"Node/Native based Storages Performance Comparison",id:"nodenative-based-storages-performance-comparison",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"rxstorage-performance-comparison",children:"RxStorage Performance comparison"}),"\n",(0,n.jsxs)(r.p,{children:["A big difference in the RxStorage implementations is the ",(0,n.jsx)(r.strong,{children:"performance"}),". In difference to a server side database, RxDB is bound to the limits of the JavaScript runtime and depending on the runtime, there are different possibilities to store and fetch data. For example in the browser it is only possible to store data in a ",(0,n.jsx)(r.a,{href:"/slow-indexeddb.html",children:"slow IndexedDB"})," or OPFS instead of a filesystem while on React-Native you can use the ",(0,n.jsx)(r.a,{href:"/rx-storage-sqlite.html",children:"SQLite storage"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Therefore the performance can be completely different depending on where you use RxDB and what you do with it. Here you can see some performance measurements and descriptions on how the different ",(0,n.jsx)(r.a,{href:"/rx-storage.html",children:"storages"})," work and how their performance is different."]}),"\n",(0,n.jsx)(r.h2,{id:"persistend-vs-semi-persistend-storages",children:"Persistend vs Semi-Persistend storages"}),"\n",(0,n.jsx)(r.p,{children:'The "normal" storages are always persistend. This means each RxDB write is directly written to disc and all queries run on the disc state. This means a good startup performance because nothing has to be done on startup.'}),"\n",(0,n.jsxs)(r.p,{children:["In contrast, semi-persistend storages like ",(0,n.jsx)(r.a,{href:"/rx-storage-memory-mapped.html",children:"memory mapped"})," store all data in memory on startup and only save to disc occasionally (or on exit). Therefore it has a very fast read/write performance, but loading all data into memory on the first page load can take longer for big amounts of documents. Also these storages can only be used when all data fits into the memory at least once. In general it is recommended to stay on the persistend storages and only use semi-persitend ones, when you know for sure that the dataset will stay small (less than 2k documents)."]}),"\n",(0,n.jsx)(r.h2,{id:"performance-comparison",children:"Performance comparison"}),"\n",(0,n.jsx)(r.p,{children:"In the following you can find some performance measurements and comparisons. Notice that these are only a small set of possible RxDB operations. If performance is really relevant for your use case, you should do your own measurements with usage-patterns that are equal to how you use RxDB in production."}),"\n",(0,n.jsx)(r.h3,{id:"measurements",children:"Measurements"}),"\n",(0,n.jsx)(r.p,{children:"Here the following metrics are measured:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["time-to-first-insert: Many storages run lazy, so it makes no sense to compare the time which is required to create a database with collections. Instead we measure the ",(0,n.jsx)(r.strong,{children:"time-to-first-insert"})," which is the whole timespan from database creation until the first single document write is done."]}),"\n",(0,n.jsx)(r.li,{children:"insert documents (bulk): Insert 500 documents with a single bulk-insert operation."}),"\n",(0,n.jsxs)(r.li,{children:["find documents by id (bulk): Here we fetch 100% of the stored documents with a single ",(0,n.jsx)(r.code,{children:"findByIds()"})," call."]}),"\n",(0,n.jsx)(r.li,{children:"insert documents (serial): Insert 50 documents, one after each other."}),"\n",(0,n.jsxs)(r.li,{children:["find documents by id (serial): Here we find 50 documents in serial with one ",(0,n.jsx)(r.code,{children:"findByIds()"})," call per document."]}),"\n",(0,n.jsxs)(r.li,{children:["find documents by query: Here we fetch 100% of the stored documents with a single ",(0,n.jsx)(r.code,{children:"find()"})," call."]}),"\n",(0,n.jsxs)(r.li,{children:["find documents by query: Here we fetch all of the stored documents with a 4 ",(0,n.jsx)(r.code,{children:"find()"})," calls that run in parallel. Each fetching 25% of the documents."]}),"\n",(0,n.jsxs)(r.li,{children:["count documents: Counts 100% of the stored documents with a single ",(0,n.jsx)(r.code,{children:"count()"})," call. Here we measure 4 runs at once to have a higher number that is easier to compare."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"browser-based-storages-performance-comparison",children:"Browser based Storages Performance Comparison"}),"\n",(0,n.jsxs)(r.p,{children:["The performance patterns of the browser based storages are very diverse. The ",(0,n.jsx)(r.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB storage"})," is recommended for mostly all use cases so you should start with that one. Later you can do performance testings and switch to another storage like ",(0,n.jsx)(r.a,{href:"/rx-storage-opfs.html",children:"OPFS"})," or ",(0,n.jsx)(r.a,{href:"/rx-storage-memory-mapped.html",children:"memory-mapped"}),". If you do not want to purchase ",(0,n.jsx)(r.a,{href:"/premium/",children:"RxDB Premium"}),", you could use the slower ",(0,n.jsx)(r.a,{href:"/rx-storage-dexie.html",children:"Dexie.js based RxStorage"})," instead."]}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"./files/rx-storage-performance-browser.png",alt:"RxStorage performance - browser",width:"700"})}),"\n",(0,n.jsx)(r.h2,{id:"nodenative-based-storages-performance-comparison",children:"Node/Native based Storages Performance Comparison"}),"\n",(0,n.jsxs)(r.p,{children:["For most client-side native applications (",(0,n.jsx)(r.a,{href:"/react-native-database.html",children:"react-native"}),", ",(0,n.jsx)(r.a,{href:"/electron-database.html",children:"electron"}),", ",(0,n.jsx)(r.a,{href:"/capacitor-database.html",children:"capacitor"}),"), using the ",(0,n.jsx)(r.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"})," is recommended. For non-client side applications like a server, use the ",(0,n.jsx)(r.a,{href:"/rx-storage-mongodb.html",children:"MongoDB storage"})," instead."]}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"./files/rx-storage-performance-node.png",alt:"RxStorage performance - Node.js",width:"700"})})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>i});var t=s(6540);const n={},o=t.createContext(n);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);