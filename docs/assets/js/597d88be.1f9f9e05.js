"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[8715],{9024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"articles/firebase-realtime-database-alternative","title":"RxDB - The Firebase Realtime Database Alternative That Can Sync With Your Own Backend","description":"Looking for a Firebase Realtime Database alternative? RxDB offers a fully offline, vendor-agnostic NoSQL solution with advanced conflict resolution and multi-platform support.","source":"@site/docs/articles/firebase-realtime-database-alternative.md","sourceDirName":"articles","slug":"/articles/firebase-realtime-database-alternative.html","permalink":"/articles/firebase-realtime-database-alternative.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RxDB - The Firebase Realtime Database Alternative That Can Sync With Your Own Backend","slug":"firebase-realtime-database-alternative.html","description":"Looking for a Firebase Realtime Database alternative? RxDB offers a fully offline, vendor-agnostic NoSQL solution with advanced conflict resolution and multi-platform support."},"sidebar":"tutorialSidebar","previous":{"title":"RxDB - The Firestore Alternative That Can Sync with Your Own Backend","permalink":"/articles/firestore-alternative.html"},"next":{"title":"Contribute & Innovate with RxDB","permalink":"/contribution.html"}}');var i=t(4848),r=t(8453);const s={title:"RxDB - The Firebase Realtime Database Alternative That Can Sync With Your Own Backend",slug:"firebase-realtime-database-alternative.html",description:"Looking for a Firebase Realtime Database alternative? RxDB offers a fully offline, vendor-agnostic NoSQL solution with advanced conflict resolution and multi-platform support."},o="RxDB - The Firebase Realtime Database Alternative That Can Sync With Your Own Backend",l={},c=[{value:"Why RxDB Is an Excellent Firebase Realtime Database Alternative",id:"why-rxdb-is-an-excellent-firebase-realtime-database-alternative",level:2},{value:"1. Complete Offline-First Experience",id:"1-complete-offline-first-experience",level:3},{value:"2. Freedom to Use Any Server or Cloud",id:"2-freedom-to-use-any-server-or-cloud",level:3},{value:"3. Advanced Conflict Handling",id:"3-advanced-conflict-handling",level:3},{value:"4. Lower Cloud Costs for Read-Heavy Apps",id:"4-lower-cloud-costs-for-read-heavy-apps",level:3},{value:"5. Powerful Local Queries",id:"5-powerful-local-queries",level:3},{value:"6. True Offline Initialization",id:"6-true-offline-initialization",level:3},{value:"7. Works Everywhere JavaScript Runs",id:"7-works-everywhere-javascript-runs",level:3},{value:"How RxDB&#39;s Syncing Mechanism Operates",id:"how-rxdbs-syncing-mechanism-operates",level:2},{value:"Sample Code: Sync RxDB With a Custom Endpoint",id:"sample-code-sync-rxdb-with-a-custom-endpoint",level:2},{value:"Setting Up P2P Replication Over WebRTC",id:"setting-up-p2p-replication-over-webrtc",level:3},{value:"Quick Steps to Get Started",id:"quick-steps-to-get-started",level:2},{value:"Is RxDB the Right Solution for You?",id:"is-rxdb-the-right-solution-for-you",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"rxdb---the-firebase-realtime-database-alternative-that-can-sync-with-your-own-backend",children:"RxDB - The Firebase Realtime Database Alternative That Can Sync With Your Own Backend"})}),"\n",(0,i.jsxs)(n.p,{children:["Are you on the lookout for a ",(0,i.jsx)(n.strong,{children:"Firebase Realtime Database alternative"})," that gives you greater freedom, deeper offline capabilities, and allows you to seamlessly integrate with any backend? ",(0,i.jsx)(n.strong,{children:"RxDB"})," (Reactive Database) might be the perfect choice. This local-first, NoSQL data store runs entirely on the client while supporting real-time updates and robust syncing with any server environment\u2014making it a strong contender against Firebase Realtime Database's limitations and potential vendor lock-in."]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("a",{href:"https://rxdb.info/",children:(0,i.jsx)("img",{src:"/files/logo/rxdb_javascript_database.svg",alt:"JavaScript Database",width:"220"})})}),"\n",(0,i.jsx)(n.h2,{id:"why-rxdb-is-an-excellent-firebase-realtime-database-alternative",children:"Why RxDB Is an Excellent Firebase Realtime Database Alternative"}),"\n",(0,i.jsx)(n.h3,{id:"1-complete-offline-first-experience",children:"1. Complete Offline-First Experience"}),"\n",(0,i.jsxs)(n.p,{children:["Unlike Firebase Realtime Database, which relies on central infrastructure to process data, RxDB is fully embedded within your client application (including ",(0,i.jsx)(n.a,{href:"/articles/browser-database.html",children:"browsers"}),", ",(0,i.jsx)(n.a,{href:"/nodejs-database.html",children:"Node.js"}),", ",(0,i.jsx)(n.a,{href:"/electron-database.html",children:"Electron"}),", and ",(0,i.jsx)(n.a,{href:"/react-native-database.html",children:"React Native"}),"). This design means your app stays completely functional offline, since all data reads and writes happen locally. When connectivity is restored, RxDB's syncing framework automatically reconciles local changes with your remote backend."]}),"\n",(0,i.jsx)(n.h3,{id:"2-freedom-to-use-any-server-or-cloud",children:"2. Freedom to Use Any Server or Cloud"}),"\n",(0,i.jsx)(n.p,{children:"While Firebase Realtime Database ties you into Google's ecosystem, RxDB allows you to choose any hosting environment. You can:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Host your data on your own servers or private cloud."}),"\n",(0,i.jsxs)(n.li,{children:["Integrate with relational databases like ",(0,i.jsx)(n.a,{href:"/replication-http.html",children:"PostgreSQL"})," or other NoSQL options such as ",(0,i.jsx)(n.a,{href:"/replication-couchdb.html",children:"CouchDB"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Build custom endpoints using ",(0,i.jsx)(n.a,{href:"/replication-http.html",children:"REST"}),", ",(0,i.jsx)(n.a,{href:"/replication-graphql.html",children:"GraphQL"}),", or any other protocol."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This flexibility ensures you're not locked into a single vendor and can adapt your backend strategy as your project evolves."}),"\n",(0,i.jsx)(n.h3,{id:"3-advanced-conflict-handling",children:"3. Advanced Conflict Handling"}),"\n",(0,i.jsxs)(n.p,{children:["Firebase Realtime Database typically updates data with a simple last-in-wins approach. RxDB, on the other hand, lets you implement more sophisticated conflict resolution logic. Using ",(0,i.jsx)(n.a,{href:"/transactions-conflicts-revisions.html#custom-conflict-handler",children:"revisions and conflict handlers"}),", RxDB can merge concurrent edits or preserve multiple versions\u2014ensuring your application remains consistent even when multiple clients modify the same data at the same time."]}),"\n",(0,i.jsx)(n.h3,{id:"4-lower-cloud-costs-for-read-heavy-apps",children:"4. Lower Cloud Costs for Read-Heavy Apps"}),"\n",(0,i.jsxs)(n.p,{children:["When you rely on Firebase Realtime Database, each query or listener can translate into ongoing reads, potentially running up your monthly bill. With RxDB, all queries are performed ",(0,i.jsx)(n.a,{href:"/offline-first.html",children:"locally"}),". Your app only communicates with the backend to sync document changes, significantly reducing bandwidth and hosting expenses for applications that frequently read data."]}),"\n",(0,i.jsx)(n.h3,{id:"5-powerful-local-queries",children:"5. Powerful Local Queries"}),"\n",(0,i.jsx)(n.p,{children:"If you've hit Firebase Realtime Database's querying limits, RxDB offers a far more robust approach to data retrieval. You can:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Define custom indexes for faster local lookups."}),"\n",(0,i.jsx)(n.li,{children:"Perform sophisticated filters, joins, or full-text searches right on the client."}),"\n",(0,i.jsxs)(n.li,{children:["Subscribe to real-time data updates through RxDB's ",(0,i.jsx)(n.a,{href:"/reactivity.html",children:"reactive query engine"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Because these operations happen locally, your ",(0,i.jsx)(n.a,{href:"/articles/optimistic-ui.html",children:"UI updates"})," instantly, providing a snappy user experience."]}),"\n",(0,i.jsx)(n.h3,{id:"6-true-offline-initialization",children:"6. True Offline Initialization"}),"\n",(0,i.jsxs)(n.p,{children:["While Firebase offers some offline caching, it often requires an initial connection for authentication or to seed local data. RxDB, however, is built to handle an ",(0,i.jsx)(n.strong,{children:"offline-start"})," scenario. Users can begin working with the application immediately, regardless of connectivity, and any modifications they make will sync once the network is available again."]}),"\n",(0,i.jsx)(n.h3,{id:"7-works-everywhere-javascript-runs",children:"7. Works Everywhere JavaScript Runs"}),"\n",(0,i.jsxs)(n.p,{children:["One of RxDB's core strengths is its ability to run in ",(0,i.jsx)(n.strong,{children:"any JavaScript environment"}),". Whether you're building a web app that uses IndexedDB in the browser, an ",(0,i.jsx)(n.a,{href:"/electron-database.html",children:"Electron"})," desktop program, or a ",(0,i.jsx)(n.a,{href:"/react-native-database.html",children:"React Native"})," mobile application, RxDB's ",(0,i.jsx)(n.strong,{children:"swappable storage"})," adapts to your runtime of choice. This consistency makes code-sharing and cross-platform development far simpler than being tied to a single backend system."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"how-rxdbs-syncing-mechanism-operates",children:"How RxDB's Syncing Mechanism Operates"}),"\n",(0,i.jsxs)(n.p,{children:["RxDB employs its own ",(0,i.jsx)(n.a,{href:"/replication.html",children:"Replication Protocol"})," to manage data flow between your client and remote ",(0,i.jsx)(n.a,{href:"/rx-server.html",children:"servers"}),". Replication revolves around:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pull"}),": Retrieving updated or newly created documents from the server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Push"}),": Sending local changes to the backend for persistence."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Live Updates"}),": Continuously streaming changes to and from the backend for real-time synchronization."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sample-code-sync-rxdb-with-a-custom-endpoint",children:"Sample Code: Sync RxDB With a Custom Endpoint"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb/plugins/core';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\nimport { replicateRxCollection } from 'rxdb/plugins/replication';\n\nasync function initDB() {\n  const db = await createRxDatabase({\n    name: 'localdb',\n    storage: getRxStorageDexie(),\n    multiInstance: true,\n    eventReduce: true\n  });\n\n  await db.addCollections({\n    tasks: {\n      schema: {\n        title: 'task schema',\n        version: 0,\n        type: 'object',\n        primaryKey: 'id',\n        properties: {\n          id: { type: 'string', maxLength: 100 },\n          title: { type: 'string' },\n          complete: { type: 'boolean' }\n        }\n      }\n    }\n  });\n\n  // Start a custom replication\n  replicateRxCollection({\n    collection: db.tasks,\n    replicationIdentifier: 'custom-tasks-api',\n    push: {\n      handler: async (docs) => {\n        // post local changes to your server\n        const resp = await fetch('https://yourapi.com/tasks/push', {\n          method: 'POST',\n          body: JSON.stringify({ changes: docs })\n        });\n        return await resp.json(); // return conflicting documents if any\n      }\n    },\n    pull: {\n      handler: async (lastCheckpoint, batchSize) => {\n        // fetch new/updated items from your server\n        const response = await fetch(\n          `https://yourapi.com/tasks/pull?checkpoint=${JSON.stringify(\n            lastCheckpoint\n          )}&limit=${batchSize}`\n        );\n        return await response.json();\n      }\n    },\n    live: true\n  });\n\n  return db;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"setting-up-p2p-replication-over-webrtc",children:"Setting Up P2P Replication Over WebRTC"}),"\n",(0,i.jsx)(n.p,{children:"In addition to using a centralized backend, RxDB supports peer-to-peer synchronization through WebRTC, enabling devices to share data directly."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import {\n  replicateWebRTC,\n  getConnectionHandlerSimplePeer\n} from 'rxdb/plugins/replication-webrtc';\n\nconst webrtcPool = await replicateWebRTC({\n  collection: db.tasks,\n  topic: 'p2p-topic-123',\n  connectionHandlerCreator: getConnectionHandlerSimplePeer({\n    signalingServerUrl: 'wss://signaling.rxdb.info/',\n    wrtc: require('node-datachannel/polyfill'),\n    webSocketConstructor: require('ws').WebSocket\n  })\n});\n\nwebrtcPool.error$.subscribe((error) => {\n  console.error('P2P error:', error);\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here, any client that joins the same topic communicates changes to other peers, all without requiring a traditional client-server model."}),"\n",(0,i.jsx)(n.h2,{id:"quick-steps-to-get-started",children:"Quick Steps to Get Started"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install RxDB"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install rxdb rxjs\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Create a Local Database"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb/plugins/core';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\nconst db = await createRxDatabase({\n  name: 'myLocalDB',\n  storage: getRxStorageDexie()\n});\nAdd a Collection\nts\nKopieren\nawait db.addCollections({\n  notes: {\n    schema: {\n      title: 'notes schema',\n      version: 0,\n      primaryKey: 'id',\n      type: 'object',\n      properties: {\n        id: { type: 'string', maxLenght: 100 },\n        content: { type: 'string' }\n      }\n    }\n  }\n});\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Synchronize"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Use one of the ",(0,i.jsx)(n.a,{href:"/replication.html",children:"Replication Plugins"})," to connect with your preferred backend."]}),"\n",(0,i.jsx)(n.h3,{id:"is-rxdb-the-right-solution-for-you",children:"Is RxDB the Right Solution for You?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Long Offline Use"}),": If your users need to work without an internet connection, RxDB's built-in offline-first design stands out compared to Firebase Realtime Database's partial offline approach."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Custom or Complex Queries"}),": RxDB lets you perform your ",(0,i.jsx)(n.a,{href:"/rx-query.html",children:"queries"})," locally, define ",(0,i.jsx)(n.a,{href:"/rx-schema.html#indexes",children:"indexing"}),", and handle even complex ",(0,i.jsx)(n.a,{href:"/rx-pipeline.html",children:"transformations"})," locally - no extra call to an external API."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Avoid Vendor Lock-In"}),": If you anticipate needing to move or adapt your backend later, you can do so without rewriting how your client manages its data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Peer-to-Peer Collaboration"}),": Whether you need quick demos or real production use, ",(0,i.jsx)(n.a,{href:"/replication-webrtc.html",children:"WebRTC replication"})," can link your users directly without central coordination of data storage."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(6540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);