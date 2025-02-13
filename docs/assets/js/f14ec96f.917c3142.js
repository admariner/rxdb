"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[7513],{4833:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"articles/offline-database","title":"RxDB \u2013 The Ultimate Offline Database with Sync and Encryption","description":"Discover how RxDB serves as a powerful offline database, offering real-time synchronization, secure encryption, and an offline-first approach for modern web and mobile apps.","source":"@site/docs/articles/offline-database.md","sourceDirName":"articles","slug":"/articles/offline-database.html","permalink":"/articles/offline-database.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RxDB \u2013 The Ultimate Offline Database with Sync and Encryption","slug":"offline-database.html","description":"Discover how RxDB serves as a powerful offline database, offering real-time synchronization, secure encryption, and an offline-first approach for modern web and mobile apps."},"sidebar":"tutorialSidebar","previous":{"title":"RxDB - Firebase Realtime Database Alternative to Sync With Your Own Backend","permalink":"/articles/firebase-realtime-database-alternative.html"},"next":{"title":"Zero Latency Local First Apps with RxDB \u2013 Sync, Encryption and Compression","permalink":"/articles/zero-latency-local-first.html"}}');var t=i(4848),s=i(8453);const a={title:"RxDB \u2013 The Ultimate Offline Database with Sync and Encryption",slug:"offline-database.html",description:"Discover how RxDB serves as a powerful offline database, offering real-time synchronization, secure encryption, and an offline-first approach for modern web and mobile apps."},o="RxDB \u2013 The Ultimate Offline Database with Sync and Encryption",l={},c=[{value:"Why Choose an Offline Database?",id:"why-choose-an-offline-database",level:2},{value:"1. Zero Loading Spinners",id:"1-zero-loading-spinners",level:3},{value:"2. Multi-Tab Consistency",id:"2-multi-tab-consistency",level:3},{value:"3. Real-Time Data Feeds",id:"3-real-time-data-feeds",level:3},{value:"4. Reduced Server Load",id:"4-reduced-server-load",level:3},{value:"5. Simpler Development: Fewer Endpoints, No Extra State Library",id:"5-simpler-development-fewer-endpoints-no-extra-state-library",level:3},{value:"Introducing RxDB \u2013 A Powerful Offline Database Solution",id:"introducing-rxdb--a-powerful-offline-database-solution",level:2},{value:"Quick Setup Example",id:"quick-setup-example",level:2},{value:"How Offline Sync Works in RxDB",id:"how-offline-sync-works-in-rxdb",level:2},{value:"Securing Your Offline Database with Encryption",id:"securing-your-offline-database-with-encryption",level:2},{value:"Encryption Example",id:"encryption-example",level:4},{value:"Follow Up",id:"follow-up",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"rxdb--the-ultimate-offline-database-with-sync-and-encryption",children:"RxDB \u2013 The Ultimate Offline Database with Sync and Encryption"})}),"\n",(0,t.jsxs)(n.p,{children:["When building modern applications, a reliable ",(0,t.jsx)(n.strong,{children:"offline database"})," can make all the difference. Users need fast, uninterrupted access to data, even without an internet connection, and they need that data to stay secure. ",(0,t.jsx)(n.strong,{children:"RxDB"})," meets these requirements by providing a ",(0,t.jsx)(n.strong,{children:"local-first"})," architecture, ",(0,t.jsx)(n.strong,{children:"real-time sync"})," to any backend, and optional ",(0,t.jsx)(n.strong,{children:"encryption"})," for sensitive fields."]}),"\n",(0,t.jsx)(n.p,{children:"In this article, we'll cover:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Why an ",(0,t.jsx)(n.strong,{children:"offline database"})," approach significantly improves user experience"]}),"\n",(0,t.jsxs)(n.li,{children:["How RxDB\u2019s ",(0,t.jsx)(n.strong,{children:"sync"})," and ",(0,t.jsx)(n.strong,{children:"encryption"})," features work"]}),"\n",(0,t.jsx)(n.li,{children:"Step-by-step guidance on getting started"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"why-choose-an-offline-database",children:"Why Choose an Offline Database?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/offline-first.html",children:"Offline-first"})," or ",(0,t.jsx)(n.strong,{children:"local-first"})," software stores data directly on the client device. This strategy isn\u2019t just about surviving network outages; it also makes your application faster, more user-friendly, and better at handling multiple usage scenarios."]}),"\n",(0,t.jsx)(n.h3,{id:"1-zero-loading-spinners",children:"1. Zero Loading Spinners"}),"\n",(0,t.jsx)(n.p,{children:"Applications that call remote servers for every request inevitably show loading spinners. With an offline database, read and write operations happen locally\u2014providing near-instant feedback. Users no longer stare at progress indicators or wait for server responses, resulting in a smoother and more fluid experience."}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"/files/loading-spinner-not-needed.gif",alt:"loading spinner not needed",width:"300"})}),"\n",(0,t.jsx)(n.h3,{id:"2-multi-tab-consistency",children:"2. Multi-Tab Consistency"}),"\n",(0,t.jsx)(n.p,{children:"Many websites mishandle data across multiple browser tabs. In an offline database, all tabs share the same local datastore. If the user updates data in one tab (like completing a to-do item), changes instantly reflect in every other tab. This removes complex multi-window synchronization problems."}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"/files/multiwindow.gif",alt:"RxDB multi tab",width:"450"})}),"\n",(0,t.jsx)(n.h3,{id:"3-real-time-data-feeds",children:"3. Real-Time Data Feeds"}),"\n",(0,t.jsx)(n.p,{children:"Apps that rely on a purely server-driven approach often show stale data unless they add a separate real-time push system (like websockets). Local-first solutions with built-in replication essentially get real-time updates \u201cfor free.\u201d Once the server sends any changes, your local offline database updates\u2014keeping your UI live and accurate."}),"\n",(0,t.jsx)(n.h3,{id:"4-reduced-server-load",children:"4. Reduced Server Load"}),"\n",(0,t.jsx)(n.p,{children:"In a traditional app, every interaction triggers a request to the server, scaling up resource usage quickly as traffic grows. Offline-first setups replicate data to the client once, and subsequent local reads or writes do not stress the backend. Your server usage grows with the amount of data\u2014rather than every user action\u2014leading to more efficient scaling."}),"\n",(0,t.jsx)(n.h3,{id:"5-simpler-development-fewer-endpoints-no-extra-state-library",children:"5. Simpler Development: Fewer Endpoints, No Extra State Library"}),"\n",(0,t.jsx)(n.p,{children:"Typical apps require numerous REST endpoints and possibly a client-side state manager (like Redux) to handle data flow. If you adopt an offline database, you can replicate nearly everything to the client. The local DB becomes your single source of truth, and you may skip advanced state libraries altogether."}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("a",{href:"https://rxdb.info/",children:(0,t.jsx)("img",{src:"/files/logo/rxdb_javascript_database.svg",alt:"RxDB",width:"220"})})}),"\n",(0,t.jsx)(n.h2,{id:"introducing-rxdb--a-powerful-offline-database-solution",children:"Introducing RxDB \u2013 A Powerful Offline Database Solution"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RxDB (Reactive Database)"})," is a ",(0,t.jsx)(n.strong,{children:"NoSQL"})," JavaScript database that lives entirely in your client environment. It\u2019s optimized for:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Offline-first usage"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reactive queries"})," (your UI updates in real time)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Flexible replication"})," with various backends"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Field-level encryption"})," to protect sensitive data"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can run RxDB in:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Browsers"})," (",(0,t.jsx)(n.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB"}),", ",(0,t.jsx)(n.a,{href:"/rx-storage-opfs.html",children:"OPFS"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mobile hybrid apps"})," (",(0,t.jsx)(n.a,{href:"/articles/ionic-database.html",children:"Ionic"}),", ",(0,t.jsx)(n.a,{href:"/capacitor-database.html",children:"Capacitor"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Native modules"})," (",(0,t.jsx)(n.a,{href:"/react-native-database.html",children:"React Native"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Desktop environments"})," (",(0,t.jsx)(n.a,{href:"/electron-database.html",children:"Electron"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Node.js"})," ",(0,t.jsx)(n.a,{href:"/rx-server.html",children:"Servers"})," or Scripts"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Wherever your JavaScript executes, RxDB can serve as a robust offline database."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"quick-setup-example",children:"Quick Setup Example"}),"\n",(0,t.jsxs)(n.p,{children:["Below is a short demo of how to create an RxDB ",(0,t.jsx)(n.a,{href:"/rx-database.html",children:"database"}),", add a ",(0,t.jsx)(n.a,{href:"/rx-collection.html",children:"collection"}),", and observe a ",(0,t.jsx)(n.a,{href:"/rx-query.html",children:"query"}),". You can expand upon this to enable encryption or full sync."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb/plugins/core';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\nasync function initDB() {\n  // Create a local offline database\n  const db = await createRxDatabase({\n    name: 'myOfflineDB',\n    storage: getRxStorageDexie()\n  });\n\n  // Add collections\n  await db.addCollections({\n    tasks: {\n      schema: {\n        title: 'tasks schema',\n        version: 0,\n        type: 'object',\n        primaryKey: 'id',\n        properties: {\n          id: { type: 'string' },\n          title: { type: 'string' },\n          done: { type: 'boolean' }\n        }\n      }\n    }\n  });\n\n  // Observe changes in real time\n  db.tasks\n    .find({ selector: { done: false } })\n    .$ // returns an observable that emits whenever the result set changes\n    .subscribe(undoneTasks => {\n      console.log('Currently undone tasks:', undoneTasks);\n    });\n\n  return db;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now the ",(0,t.jsx)(n.code,{children:"tasks"})," collection is ready to store data offline. You could also ",(0,t.jsx)(n.a,{href:"/replication.html",children:"replicate"})," it to a backend, encrypt certain fields, or utilize more advanced features like conflict resolution."]}),"\n",(0,t.jsx)(n.h2,{id:"how-offline-sync-works-in-rxdb",children:"How Offline Sync Works in RxDB"}),"\n",(0,t.jsxs)(n.p,{children:["RxDB uses a ",(0,t.jsx)(n.a,{href:"/replication.html",children:"replication protocol"})," that pushes local changes to the server and pulls remote updates back down. This ensures local data is always fresh and that the server has the latest offline edits once the device reconnects."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Multiple Plugins"})," exist to handle various backends or replication methods:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/replication-couchdb.html",children:"CouchDB"})," or ",(0,t.jsx)(n.strong,{children:"PouchDB"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/articles/firestore-alternative.html",children:"Google Firestore"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/replication-graphql.html",children:"GraphQL"})," endpoints"]}),"\n",(0,t.jsxs)(n.li,{children:["REST / ",(0,t.jsx)(n.a,{href:"/replication-http.html",children:"HTTP"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"WebSocket"})," or ",(0,t.jsx)(n.a,{href:"/replication-webrtc.html",children:"WebRTC"})," (for peer-to-peer sync)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You pick the plugin that fits your stack, and RxDB handles everything from conflict detection to event emission, allowing you to focus on building your user-facing features."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { replicateRxCollection } from 'rxdb/plugins/replication';\n\nreplicateRxCollection({\n  collection: db.tasks,\n  replicationIdentifier: 'tasks-sync',\n  pull: { /* fetch updates from server */ },\n  push: { /* send local writes to server */ },\n  live: true // keep them in sync constantly\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"securing-your-offline-database-with-encryption",children:"Securing Your Offline Database with Encryption"}),"\n",(0,t.jsxs)(n.p,{children:["Local data can be a risk if it\u2019s sensitive or personal. RxDB offers ",(0,t.jsx)(n.a,{href:"/encryption.html",children:"encryption plugins"})," to keep specific document fields secure at rest."]}),"\n",(0,t.jsx)(n.h4,{id:"encryption-example",children:"Encryption Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb/plugins/core';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\nimport { wrappedKeyEncryptionCryptoJsStorage } from 'rxdb/plugins/encryption-crypto-js';\n\nasync function initSecureDB() {\n  // Wrap the Dexie storage with crypto-js encryption\n  const encryptedStorage = wrappedKeyEncryptionCryptoJsStorage({\n    storage: getRxStorageDexie()\n  });\n\n  // Create database with a password\n  const db = await createRxDatabase({\n    name: 'secureOfflineDB',\n    storage: encryptedStorage,\n    password: 'myTopSecretPassword'\n  });\n\n  // Define an encrypted collection\n  await db.addCollections({\n    userSecrets: {\n      schema: {\n        title: 'encrypted user data',\n        version: 0,\n        type: 'object',\n        primaryKey: 'id',\n        properties: {\n          id: { type: 'string' },\n          secretData: { type: 'string' }\n        },\n        required: ['id'],\n        encrypted: ['secretData'] // field is encrypted at rest\n      }\n    }\n  });\n\n  return db;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When the device is off or the database file is extracted, ",(0,t.jsx)(n.code,{children:"secretData"})," remains unreadable without the specified password. This ensures only authorized parties can access sensitive fields, even in offline scenarios."]}),"\n",(0,t.jsx)(n.h2,{id:"follow-up",children:"Follow Up"}),"\n",(0,t.jsx)(n.p,{children:"Integrating an offline database approach into your app delivers near-instant interactions, true multi-tab data consistency, automatic real-time updates, and reduced server dependencies. By choosing RxDB, you gain:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Offline-first local storage"}),"\n",(0,t.jsx)(n.li,{children:"Flexible replication to various backends"}),"\n",(0,t.jsx)(n.li,{children:"Encryption of sensitive fields"}),"\n",(0,t.jsx)(n.li,{children:"Reactive queries for real-time UI updates"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"RxDB transforms how you build and scale apps\u2014no more loading spinners, no more stale data, no more complicated offline handling. Everything is local, synced, and secured."}),"\n",(0,t.jsx)(n.p,{children:"Continue your learning path:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Explore the RxDB Ecosystem"}),"\nDive into additional features like ",(0,t.jsx)(n.a,{href:"/key-compression.html",children:"Compression"})," or advanced ",(0,t.jsx)(n.a,{href:"/transactions-conflicts-revisions.html#custom-conflict-handler",children:"Conflict Handling"})," to optimize your offline database."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Learn More About Offline-First"}),"\nRead our ",(0,t.jsx)(n.a,{href:"/offline-first.html",children:"Offline First documentation"})," for a deeper understanding of why local-first architectures improve user experience and reduce server load."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Join the Community"}),"\nHave questions or feedback? Connect with us on the ",(0,t.jsx)(n.a,{href:"/chat/",children:"RxDB Chat"})," or open an issue on ",(0,t.jsx)(n.a,{href:"/code/",children:"GitHub"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Upgrade to Premium"}),"\nIf you need high-performance features\u2014like ",(0,t.jsx)(n.a,{href:"/rx-storage-sqlite.html",children:"SQLite storage"})," for mobile or the ",(0,t.jsx)(n.a,{href:"/premium/",children:"Web Crypto-based encryption plugin"}),"\u2014consider our premium offerings."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By adopting an offline database approach with RxDB, you unlock speed, reliability, and security for your applications\u2014leading to a truly seamless user experience."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(6540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);