"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[7277],{8436:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(4848),s=a(8453);const i={title:"Using IndexedDB in Angular - RxDB on Top of IndexedDB Simplifies Your Database Needs",slug:"angular-indexeddb.html",description:"Discover how to harness IndexedDB in Angular with RxDB for robust offline apps. Learn reactive queries, advanced features, and more."},t="Using IndexedDB in Angular: RxDB on Top of IndexedDB Simplifies Your Database Needs",l={id:"articles/angular-indexeddb",title:"Using IndexedDB in Angular - RxDB on Top of IndexedDB Simplifies Your Database Needs",description:"Discover how to harness IndexedDB in Angular with RxDB for robust offline apps. Learn reactive queries, advanced features, and more.",source:"@site/docs/articles/angular-indexeddb.md",sourceDirName:"articles",slug:"/articles/angular-indexeddb.html",permalink:"/articles/angular-indexeddb.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Using IndexedDB in Angular - RxDB on Top of IndexedDB Simplifies Your Database Needs",slug:"angular-indexeddb.html",description:"Discover how to harness IndexedDB in Angular with RxDB for robust offline apps. Learn reactive queries, advanced features, and more."},sidebar:"tutorialSidebar",previous:{title:"What is a realtime database?",permalink:"/articles/realtime-database.html"},next:{title:"Using IndexedDB in React - RxDB on Top of IndexedDB Simplifies Your Database",permalink:"/articles/react-indexeddb.html"}},o={},d=[{value:"What Is IndexedDB?",id:"what-is-indexeddb",level:2},{value:"Why Use IndexedDB in Angular",id:"why-use-indexeddb-in-angular",level:2},{value:"Why Using Plain IndexedDB is a Problem",id:"why-using-plain-indexeddb-is-a-problem",level:2},{value:"Set Up RxDB in Angular",id:"set-up-rxdb-in-angular",level:2},{value:"Installing RxDB",id:"installing-rxdb",level:3},{value:"Patch Change Detection with zone.js",id:"patch-change-detection-with-zonejs",level:3},{value:"Create a Database and Collections",id:"create-a-database-and-collections",level:3},{value:"CRUD Operations",id:"crud-operations",level:3},{value:"Reactive Queries and Live Updates",id:"reactive-queries-and-live-updates",level:2},{value:"With RxJS Observables and Async Pipes",id:"with-rxjs-observables-and-async-pipes",level:3},{value:"With Angular Signals",id:"with-angular-signals",level:3},{value:"Angular IndexedDB Example with RxDB",id:"angular-indexeddb-example-with-rxdb",level:2},{value:"Advanced RxDB Features",id:"advanced-rxdb-features",level:2},{value:"Limitations of IndexedDB",id:"limitations-of-indexeddb",level:2},{value:"Alternatives to IndexedDB",id:"alternatives-to-indexeddb",level:2},{value:"Performance comparison with other browser storages",id:"performance-comparison-with-other-browser-storages",level:2},{value:"Follow Up",id:"follow-up",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"using-indexeddb-in-angular-rxdb-on-top-of-indexeddb-simplifies-your-database-needs",children:"Using IndexedDB in Angular: RxDB on Top of IndexedDB Simplifies Your Database Needs"}),"\n",(0,r.jsxs)(n.p,{children:["In modern web applications, offline capabilities and fast interactions are crucial. IndexedDB, the ",(0,r.jsx)(n.a,{href:"/articles/browser-database.html",children:"browser"}),"'s built-in database, allows you to store data locally, making your Angular application more robust and responsive. However, IndexedDB can be cumbersome to work with directly. That's where RxDB (Reactive Database) shines. In this article, we'll walk you through how to utilize IndexedDB in your Angular project using ",(0,r.jsx)(n.a,{href:"https://rxdb.info/",children:"RxDB"})," as a convenient abstraction layer."]}),"\n",(0,r.jsx)(n.h2,{id:"what-is-indexeddb",children:"What Is IndexedDB?"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",children:"IndexedDB"})," is a low-level JavaScript API for client-side storage of large amounts of structured data. It allows you to create key-value or object store\u2013based data storage right in the user's browser. IndexedDB supports transactions and indexing but lacks a robust query API and can be complex to use due to its callback-based nature."]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"../files/icons/angular.svg",alt:"Angular IndexedDB",width:"120"})}),"\n",(0,r.jsx)(n.h2,{id:"why-use-indexeddb-in-angular",children:"Why Use IndexedDB in Angular"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/offline-first.html",children:"Offline-First / Local-First"}),": If your app needs to function with limited or no internet connectivity, IndexedDB provides a reliable local storage layer. Users can continue using the application offline, and data can sync when the connection is restored."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Performance"}),": Local data access comes with near-zero latency, removing the need for constant server requests and eliminating most loading spinners."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Easier to Implement"}),": By replicating all necessary data to the client once, you avoid implementing numerous backend endpoints for each user interaction."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Scalability"}),": Local data queries remove processing load from your servers and reduce bandwidth usage by handling queries on the client side."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"why-using-plain-indexeddb-is-a-problem",children:"Why Using Plain IndexedDB is a Problem"}),"\n",(0,r.jsx)(n.p,{children:"Despite the advantages, directly working with IndexedDB has several drawbacks:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Callback-Based"}),": IndexedDB was originally designed around a callback-based API, which can be unwieldy compared to modern Promise or RxJS-based flows."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Difficult to Implement"}),': IndexedDB is often described as a "low-level" API. It\'s more suitable for library authors rather than application developers who simply need a robust local store.']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Rudimentary Query API"}),": Complex or dynamic queries are cumbersome with IndexedDB's basic get/put approach and limited indexes."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TypeScript Support"}),": Maintaining strong TypeScript types for all document structures is not straightforward with IndexedDB's untyped object stores."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"No Observable API"}),": IndexedDB cannot directly emit live data changes. With RxDB, you can subscribe to changes on a collection or even a single document field."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Cross-Tab Synchronization"}),": Handling concurrent data changes across multiple browser tabs is difficult in IndexedDB. RxDB has built-in multi-tab support that keeps all tabs in sync."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Advanced Features Missing"}),": IndexedDB lacks built-in support for encryption, compression, or other advanced data management features."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Browser-Only"}),": IndexedDB works in the browser but not in environments like React Native or Electron. RxDB offers storage adapters to seamlessly reuse the same code on different platforms."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("a",{href:"https://rxdb.info/",children:(0,r.jsx)("img",{src:"../files/logo/rxdb_javascript_database.svg",alt:"JavaScript Database",width:"220"})})}),"\n",(0,r.jsx)(n.h2,{id:"set-up-rxdb-in-angular",children:"Set Up RxDB in Angular"}),"\n",(0,r.jsx)(n.h3,{id:"installing-rxdb",children:"Installing RxDB"}),"\n",(0,r.jsxs)(n.p,{children:["You can ",(0,r.jsx)(n.a,{href:"/install.html",children:"install RxDB"})," into your Angular application via npm:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install rxdb --save\n"})}),"\n",(0,r.jsx)(n.h3,{id:"patch-change-detection-with-zonejs",children:"Patch Change Detection with zone.js"}),"\n",(0,r.jsx)(n.p,{children:"RxDB creates RxJS observables outside of Angular's zone, meaning Angular won't automatically trigger change detection when new data arrives. You must patch RxJS with zone.js:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"//> app.component.ts\n/**\n * IMPORTANT: RxDB creates rxjs observables outside of Angular's zone\n * So you have to import the rxjs patch to ensure change detection works correctly.\n * @link https://www.bennadel.com/blog/3448-binding-rxjs-observable-sources-outside-of-the-ngzone-in-angular-6-0-2.htm\n */\nimport 'zone.js/plugins/zone-patch-rxjs';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-a-database-and-collections",children:"Create a Database and Collections"}),"\n",(0,r.jsxs)(n.p,{children:["RxDB supports multiple storage options. The free and simple approach is using the ",(0,r.jsx)(n.a,{href:"/rx-storage-dexie.html",children:"Dexie.js\u2013based"})," storage. For higher performance, there's a premium plain ",(0,r.jsx)(n.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB storage"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb/plugins/core';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\n// Define your schema\nconst heroSchema = {\n  title: 'hero schema',\n  version: 0,\n  description: 'Describes a hero in your app',\n  primaryKey: 'id',\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      maxLength: 100\n    },\n    name: {\n      type: 'string'\n    },\n    power: {\n      type: 'string'\n    }\n  },\n  required: ['id', 'name']\n};\n\nexport async function initDB() {\n  // Create a database\n  const db = await createRxDatabase({\n    name: 'heroesdb', // the name of the database\n    storage: getRxStorageDexie()\n  });\n\n  // Add collections\n  await db.addCollections({\n    heroes: {\n      schema: heroSchema\n    }\n  });\n\n  return db;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It's recommended to encapsulate database creation logic in an Angular service, such as in a DatabaseService. A full example is available in ",(0,r.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/blob/master/examples/angular/src/app/services/database.service.ts",children:"RxDB's Angular example"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"crud-operations",children:"CRUD Operations"}),"\n",(0,r.jsx)(n.p,{children:"Once your database is initialized, you can perform all CRUD operations:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// insert\nawait db.heroes.insert({ name: 'Iron Man', power: 'Genius-level intellect' });\n\n// bulk insert\nawait db.heroes.bulkInsert([\n  { name: 'Thor', power: 'God of Thunder' },\n  { name: 'Hulk', power: 'Superhuman Strength' }\n]);\n\n// find and findOne\nconst heroes = await db.heroes.find().exec();\nconst ironMan = await db.heroes.findOne({ selector: { name: 'Iron Man' } }).exec();\n\n// update\nconst doc = await db.heroes.findOne({ selector: { name: 'Hulk' } }).exec();\nawait doc.update({ $set: { power: 'Unlimited Strength' } });\n\n// delete\nconst doc = await db.heroes.findOne({ selector: { name: 'Thor' } }).exec();\nawait doc.remove();\n"})}),"\n",(0,r.jsx)(n.h2,{id:"reactive-queries-and-live-updates",children:"Reactive Queries and Live Updates"}),"\n",(0,r.jsxs)(n.p,{children:["A key benefit of RxDB is reactivity. You can subscribe to changes and have your UI automatically reflect updates in ",(0,r.jsx)(n.a,{href:"/articles/realtime-database.html",children:"real time"})," even across browser tabs."]}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"../files/animations/realtime.gif",alt:"realtime ui updates",width:"700"})}),"\n",(0,r.jsx)(n.h3,{id:"with-rxjs-observables-and-async-pipes",children:"With RxJS Observables and Async Pipes"}),"\n",(0,r.jsxs)(n.p,{children:["In Angular, you can display this data with the ",(0,r.jsx)(n.code,{children:"AsyncPipe"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"constructor(private dbService: DatabaseService) {\n  this.heroes$ = this.dbService.db.heroes.find({\n    selector: {},\n    sort: [{ name: 'asc' }]\n  }).$;\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<ul>\n  <li *ngFor="let hero of heroes$ | async">\n    {{ hero.name }}\n  </li>\n</ul>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"with-angular-signals",children:"With Angular Signals"}),"\n",(0,r.jsxs)(n.p,{children:["Angular Signals are a newer approach for reactivity. RxDB supports them via a ",(0,r.jsx)(n.a,{href:"/reactivity.html",children:"custom reactivity"})," factory. You can convert RxJS Observables to Signals using Angular's ",(0,r.jsx)(n.code,{children:"toSignal"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { RxReactivityFactory } from 'rxdb/plugins/core';\nimport { Signal, untracked, Injector } from '@angular/core';\nimport { toSignal } from '@angular/core/rxjs-interop';\n\nexport function createReactivityFactory(injector: Injector): RxReactivityFactory<Signal<any>> {\n  return {\n    fromObservable(observable$, initialValue) {\n      return untracked(() =>\n        toSignal(observable$, {\n          initialValue,\n          injector,\n          rejectErrors: true\n        })\n      );\n    }\n  };\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Pass this factory when creating your ",(0,r.jsx)(n.a,{href:"/rx-database.html",children:"RxDatabase"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb/plugins/core';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\nimport { inject, Injector } from '@angular/core';\n\nconst database = await createRxDatabase({\n    name: 'mydb',\n    storage: getRxStorageDexie(),\n    reactivity: createReactivityFactory(inject(Injector))\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Use the double-dollar sign (",(0,r.jsx)(n.code,{children:"$$"}),") to get a ",(0,r.jsx)(n.code,{children:"Signal"})," instead of an ",(0,r.jsx)(n.code,{children:"Observable"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const heroesSignal = database.heroes.find().$$;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<ul>\n  <li *ngFor="let hero of heroesSignal()">\n    {{ hero.name }}\n  </li>\n</ul>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"angular-indexeddb-example-with-rxdb",children:"Angular IndexedDB Example with RxDB"}),"\n",(0,r.jsxs)(n.p,{children:["A comprehensive example of RxDB in an Angular application is available in the ",(0,r.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples/angular",children:"RxDB GitHub repository"}),". It demonstrates ",(0,r.jsx)(n.a,{href:"/articles/angular-database.html",children:"database"})," creation, queries, and Angular integration using best practices."]}),"\n",(0,r.jsx)(n.h2,{id:"advanced-rxdb-features",children:"Advanced RxDB Features"}),"\n",(0,r.jsx)(n.p,{children:"Beyond simple CRUD and local data storage, RxDB supports:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Replication"}),": Sync your local data with a remote database. Learn more at ",(0,r.jsx)(n.a,{href:"https://rxdb.info/replication.html",children:"RxDB Replication"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Data Migration on Schema Changes"}),": RxDB supports automatic or manual schema migrations to manage backward-compatibility and evolve your data structure. See ",(0,r.jsx)(n.a,{href:"https://rxdb.info/migration-schema.html",children:"RxDB Migration"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Encryption"}),": Easily encrypt sensitive data at rest. See ",(0,r.jsx)(n.a,{href:"https://rxdb.info/encryption.html",children:"RxDB Encryption"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compression"}),": Reduce storage and bandwidth usage using key compression. Learn more at ",(0,r.jsx)(n.a,{href:"https://rxdb.info/key-compression.html",children:"RxDB Key Compression"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"limitations-of-indexeddb",children:"Limitations of IndexedDB"}),"\n",(0,r.jsx)(n.p,{children:"While IndexedDB works well for many use cases, it does have a few constraints:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Potentially Slow"}),": While adequate for most use cases, IndexedDB performance can degrade for very large datasets. More details at RxDB ",(0,r.jsx)(n.a,{href:"/slow-indexeddb.html",children:"Slow IndexedDB"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Storage Limits"}),": Browsers may cap the amount of data you can store in IndexedDB. For more info, see ",(0,r.jsx)(n.a,{href:"/articles/localstorage-indexeddb-cookies-opfs-sqlite-wasm.html#storage-size-limits",children:"Local Storage Limits"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"alternatives-to-indexeddb",children:"Alternatives to IndexedDB"}),"\n",(0,r.jsx)(n.p,{children:"Depending on your needs, you might explore:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Origin Private File System (OPFS)"}),": A newer browser storage mechanism that can offer better performance. RxDB supports ",(0,r.jsx)(n.a,{href:"/rx-storage-opfs.html",children:"OPFS storage"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SQLite"}),": When building a mobile or hybrid app (e.g., with ",(0,r.jsx)(n.a,{href:"/capacitor-database.html",children:"Capacitor"})," or ",(0,r.jsx)(n.a,{href:"/articles/ionic-database.html",children:"Ionic"}),"), you can use SQLite locally. See ",(0,r.jsx)(n.a,{href:"/rx-storage-sqlite.html",children:"RxDB with SQLite"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"performance-comparison-with-other-browser-storages",children:"Performance comparison with other browser storages"}),"\n",(0,r.jsxs)(n.p,{children:["Here is a ",(0,r.jsx)(n.a,{href:"/rx-storage-performance.html",children:"performance overview"})," of the various browser based storage implementation of RxDB:"]}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"../files/rx-storage-performance-browser.png",alt:"RxStorage performance - browser",width:"700"})}),"\n",(0,r.jsx)(n.h2,{id:"follow-up",children:"Follow Up"}),"\n",(0,r.jsx)(n.p,{children:"Continue your deep dive into RxDB with official quickstart guides and star the repository on GitHub to stay updated."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RxDB Quickstart"}),": Get started quickly with the ",(0,r.jsx)(n.a,{href:"/quickstart.html",children:"RxDB Quickstart"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RxDB GitHub"}),": Explore the source, open issues, and star \u2b50 the project at ",(0,r.jsx)(n.a,{href:"https://github.com/pubkey/rxdb",children:"RxDB GitHub Repo"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By combining IndexedDB's local storage with RxDB's powerful features, you can build performant, robust, and offline-capable Angular applications. RxDB takes care of the lower-level complexities, letting you focus on delivering a great user experience-online or off."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>l});var r=a(6540);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);