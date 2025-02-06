"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[4889],{5472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"rx-storage-memory-mapped","title":"Blazing-Fast Memory Mapped RxStorage","description":"Boost your app\'s performance with Memory Mapped RxStorage. Query and write in-memory while seamlessly persisting data to your chosen storage.","source":"@site/docs/rx-storage-memory-mapped.md","sourceDirName":".","slug":"/rx-storage-memory-mapped.html","permalink":"/rx-storage-memory-mapped.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Blazing-Fast Memory Mapped RxStorage","slug":"rx-storage-memory-mapped.html","description":"Boost your app\'s performance with Memory Mapped RxStorage. Query and write in-memory while seamlessly persisting data to your chosen storage."},"sidebar":"tutorialSidebar","previous":{"title":"SharedWorker RxStorage","permalink":"/rx-storage-shared-worker.html"},"next":{"title":"Sharding","permalink":"/rx-storage-sharding.html"}}');var n=r(4848),o=r(8453);const s={title:"Blazing-Fast Memory Mapped RxStorage",slug:"rx-storage-memory-mapped.html",description:"Boost your app's performance with Memory Mapped RxStorage. Query and write in-memory while seamlessly persisting data to your chosen storage."},i="Memory Mapped RxStorage",d={},p=[{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2},{value:"Using the Memory-Mapped RxStorage",id:"using-the-memory-mapped-rxstorage",level:2},{value:"Multi-Tab Support",id:"multi-tab-support",level:2},{value:"Encryption of the persistend data",id:"encryption-of-the-persistend-data",level:2},{value:"Await Write Persistence",id:"await-write-persistence",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"memory-mapped-rxstorage",children:"Memory Mapped RxStorage"})}),"\n",(0,n.jsxs)(t.p,{children:["The memory mapped ",(0,n.jsx)(t.a,{href:"/rx-storage.html",children:"RxStorage"})," is a wrapper around any other RxStorage. The wrapper creates an in-memory storage that is used for query and write operations. This memory instance is kept persistent with a given underlying storage."]}),"\n",(0,n.jsx)(t.h2,{id:"pros",children:"Pros"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Improves read/write performance because these operations run against the in-memory storage."}),"\n",(0,n.jsx)(t.li,{children:"Decreases initial page load because it load all data in a single bulk request. It even detects if the database is used for the first time and then it does not have to await the creation of the persistent storage."}),"\n",(0,n.jsx)(t.li,{children:"Can store encrypted data on disc while still being able to run queries on the non-encrypted in-memory state."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"cons",children:"Cons"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"It does not support attachments because storing big attachments data in-memory should not be done."}),"\n",(0,n.jsxs)(t.li,{children:["When the JavaScript process is killed ungracefully like when the browser crashes or the power of the PC is terminated, it might happen that some memory writes are not persisted to the parent storage. This can be prevented with the ",(0,n.jsx)(t.code,{children:"awaitWritePersistence"})," flag."]}),"\n",(0,n.jsx)(t.li,{children:"The memory-mapped storage can only be used if all data fits into the memory of the JavaScript process. This is normally not a problem because a browser has much memory these days and plain JSON document data is not that big."}),"\n",(0,n.jsxs)(t.li,{children:["Because it has to await an initial data loading from the parent storage into the memory, initial page load time can increase when much data is already stored. This is likely not a problem when you store less than ",(0,n.jsx)(t.code,{children:"10k"})," documents."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"memory-mapped"})," storage is part of ",(0,n.jsx)(t.a,{href:"/premium/",children:"RxDB Premium \ud83d\udc51"}),". It is not part of the default RxDB core module."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"using-the-memory-mapped-rxstorage",children:"Using the Memory-Mapped RxStorage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"\nimport {\n    getRxStorageIndexedDB\n} from 'rxdb-premium/plugins/storage-indexeddb';\nimport {\n    getMemoryMappedRxStorage\n} from 'rxdb-premium/plugins/storage-memory-mapped';\n\n/**\n * Here we use the IndexedDB RxStorage as persistence storage.\n * Any other RxStorage can also be used.\n */\nconst parentStorage = getRxStorageIndexedDB();\n\n// wrap the persistent storage with the memory-mapped storage.\nconst storage = getMemoryMappedRxStorage({\n    storage: parentStorage\n});\n\n// create the RxDatabase like you would do with any other RxStorage\nconst db = await createRxDatabase({\n    name: 'myDatabase,\n    storage,\n});\n/** ... **/\n"})}),"\n",(0,n.jsx)(t.h2,{id:"multi-tab-support",children:"Multi-Tab Support"}),"\n",(0,n.jsxs)(t.p,{children:["By how the memory-mapped storage works, it is not possible to have the same storage open in multiple JavaScript processes. So when you use this in a browser application, you can not open multiple databases when the app is used in multiple browser tabs.\nTo solve this, use the ",(0,n.jsx)(t.a,{href:"/rx-storage-shared-worker.html",children:"SharedWorker Plugin"})," so that the memory-mapped storage runs inside of a SharedWorker exactly once and is then reused for all browser tabs."]}),"\n",(0,n.jsx)(t.p,{children:"If you have a single JavaScript process, like in a React Native app, you do not have to care about this and can just use the memory-mapped storage in the main process."}),"\n",(0,n.jsx)(t.h2,{id:"encryption-of-the-persistend-data",children:"Encryption of the persistend data"}),"\n",(0,n.jsxs)(t.p,{children:["Normally RxDB is not capable of running queries on encrypted fields. But when you use the memory-mapped RxStorage, you can store the document data encrypted on disc, while being able to run queries on the not encrypted in-memory state. Make sure you use the encryption storage wrapper around the persistend storage, ",(0,n.jsx)(t.strong,{children:"NOT"})," around the memory-mapped storage as a whole."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"\nimport {\n    getRxStorageIndexedDB\n} from 'rxdb-premium/plugins/storage-indexeddb';\nimport {\n    getMemoryMappedRxStorage\n} from 'rxdb-premium/plugins/storage-memory-mapped';\nimport { wrappedKeyEncryptionWebCryptoStorage } from 'rxdb-premium/plugins/encryption-web-crypto';\n\nconst storage = getMemoryMappedRxStorage({\n    storage: wrappedKeyEncryptionWebCryptoStorage({\n        storage: getRxStorageIndexedDB()\n    })\n});\n\nconst db = await createRxDatabase({\n    name: 'myDatabase,\n    storage,\n});\n/** ... **/\n"})}),"\n",(0,n.jsx)(t.h2,{id:"await-write-persistence",children:"Await Write Persistence"}),"\n",(0,n.jsxs)(t.p,{children:["Running operations on the memory-mapped storage by default returns directly when the operation has run on the in-memory state and then persist changes in the background.\nSometimes you might want to ensure write operations is persisted, you can do this by setting ",(0,n.jsx)(t.code,{children:"awaitWritePersistence: true"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const storage = getMemoryMappedRxStorage({\n    awaitWritePersistence: true,\n    storage: getRxStorageIndexedDB()\n});\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var a=r(6540);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);