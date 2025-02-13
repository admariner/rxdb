"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[4142],{6078:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"articles/react-indexeddb","title":"IndexedDB Database in React Apps - The Power of RxDB","description":"Discover how RxDB simplifies IndexedDB in React, offering reactive queries, offline-first capability, encryption, compression, and effortless integration.","source":"@site/docs/articles/react-indexeddb.md","sourceDirName":"articles","slug":"/articles/react-indexeddb.html","permalink":"/articles/react-indexeddb.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"IndexedDB Database in React Apps - The Power of RxDB","slug":"react-indexeddb.html","description":"Discover how RxDB simplifies IndexedDB in React, offering reactive queries, offline-first capability, encryption, compression, and effortless integration."},"sidebar":"tutorialSidebar","previous":{"title":"Build Smarter Offline-First Angular Apps - How RxDB Beats IndexedDB Alone","permalink":"/articles/angular-indexeddb.html"},"next":{"title":"Capacitor Database Guide - SQLite, RxDB & More","permalink":"/capacitor-database.html"}}');var s=i(4848),r=i(8453);const t={title:"IndexedDB Database in React Apps - The Power of RxDB",slug:"react-indexeddb.html",description:"Discover how RxDB simplifies IndexedDB in React, offering reactive queries, offline-first capability, encryption, compression, and effortless integration."},o="IndexedDB Database in React Apps - The Power of RxDB",l={},d=[{value:"What is IndexedDB?",id:"what-is-indexeddb",level:2},{value:"Why Use IndexedDB in React",id:"why-use-indexeddb-in-react",level:2},{value:"Why To Not Use Plain IndexedDB",id:"why-to-not-use-plain-indexeddb",level:2},{value:"Set up RxDB in React",id:"set-up-rxdb-in-react",level:2},{value:"Installing RxDB",id:"installing-rxdb",level:3},{value:"Create a Database and Collections",id:"create-a-database-and-collections",level:3},{value:"CRUD Operations",id:"crud-operations",level:3},{value:"Reactive Queries and Live Updates",id:"reactive-queries-and-live-updates",level:2},{value:"With RxJS Observables and React Hooks",id:"with-rxjs-observables-and-react-hooks",level:3},{value:"With Preact Signals",id:"with-preact-signals",level:3},{value:"React IndexedDB Example with RxDB",id:"react-indexeddb-example-with-rxdb",level:2},{value:"Advanced RxDB Features",id:"advanced-rxdb-features",level:2},{value:"Limitations of IndexedDB",id:"limitations-of-indexeddb",level:2},{value:"Alternatives to IndexedDB",id:"alternatives-to-indexeddb",level:2},{value:"Performance comparison with other browser storages",id:"performance-comparison-with-other-browser-storages",level:2},{value:"Follow Up",id:"follow-up",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"indexeddb-database-in-react-apps---the-power-of-rxdb",children:"IndexedDB Database in React Apps - The Power of RxDB"})}),"\n",(0,s.jsxs)(n.p,{children:["Building robust, ",(0,s.jsx)(n.a,{href:"/offline-first.html",children:"offline-capable"})," React applications often involves leveraging browser storage solutions to manage data. IndexedDB is one such powerful tool, but its raw API can be challenging to work with directly. RxDB abstracts away much of IndexedDB's complexity, providing a more developer-friendly experience. In this article, we'll explore what IndexedDB is, why it's beneficial in React applications, the challenges of using plain IndexedDB, and how ",(0,s.jsx)(n.a,{href:"https://rxdb.info/",children:"RxDB"})," can simplify your development process while adding advanced features."]}),"\n",(0,s.jsx)(n.h2,{id:"what-is-indexeddb",children:"What is IndexedDB?"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",children:"IndexedDB"})," is a low-level API for storing significant amounts of structured data in the browser. It provides a transactional database system that can store key-value pairs, complex objects, and more. This storage engine is asynchronous and supports advanced data types, making it suitable for offline storage and complex web applications."]}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("img",{src:"../files/icons/react.svg",alt:"React IndexedDB",width:"120"})}),"\n",(0,s.jsx)(n.h2,{id:"why-use-indexeddb-in-react",children:"Why Use IndexedDB in React"}),"\n",(0,s.jsx)(n.p,{children:"When building React applications, IndexedDB can play a crucial role in enhancing both performance and user experience. Here are some reasons to consider using IndexedDB:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Offline-First / Local-First"}),": By storing data locally, your application remains functional even without an internet connection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Performance"}),": Using local data means ",(0,s.jsx)(n.a,{href:"/articles/zero-latency-local-first.html",children:"zero latency"})," and no loading spinners, as data doesn't need to be fetched over a network."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Easier Implementation"}),": Replicating all data to the client once is often simpler than implementing multiple endpoints for each user interaction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scalability"}),": Local data reduces server load because queries run on the client side, decreasing server bandwidth and processing requirements."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"why-to-not-use-plain-indexeddb",children:"Why To Not Use Plain IndexedDB"}),"\n",(0,s.jsx)(n.p,{children:"While IndexedDB itself is powerful, its native API comes with several drawbacks for everyday application developers:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Callback-Based API"}),": IndexedDB was designed with callbacks rather than modern Promises, making asynchronous code more cumbersome."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Complexity"}),": IndexedDB is low-level, intended for library developers rather than for app developers who simply want to store data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Basic Query API"}),": Its rudimentary query capabilities limit how you can efficiently perform complex queries, whereas libraries like RxDB offer more advanced query features."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TypeScript Support"}),": Ensuring good TypeScript support with IndexedDB is challenging, especially when trying to enforce document type consistency."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Lack of Observable API"}),": IndexedDB doesn't provide an observable API out of the box. RxDB solves this by enabling you to observe query results or specific document fields."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cross-Tab Communication"}),": Managing cross-tab updates in plain IndexedDB is difficult. RxDB handles this seamlessly-changes in one tab automatically affect observed data in others."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Missing Advanced Features"}),": Features like encryption or compression aren't built into IndexedDB, but they are available via RxDB."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Limited Platform Support"}),": IndexedDB exists only in the browser. In contrast, RxDB offers swappable storages to use the same code in React Native, Capacitor, or Electron."]}),"\n"]}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("a",{href:"https://rxdb.info/",children:(0,s.jsx)("img",{src:"../files/logo/rxdb_javascript_database.svg",alt:"JavaScript Database",width:"220"})})}),"\n",(0,s.jsx)(n.h2,{id:"set-up-rxdb-in-react",children:"Set up RxDB in React"}),"\n",(0,s.jsx)(n.p,{children:"Setting up RxDB with React is straightforward. It abstracts IndexedDB complexities and adds a layer of powerful features over it."}),"\n",(0,s.jsx)(n.h3,{id:"installing-rxdb",children:"Installing RxDB"}),"\n",(0,s.jsx)(n.p,{children:"First, install RxDB and RxJS from npm:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install rxdb rxjs --save```\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-a-database-and-collections",children:"Create a Database and Collections"}),"\n",(0,s.jsx)(n.p,{children:"RxDB provides two main storage options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The free ",(0,s.jsx)(n.a,{href:"/rx-storage-dexie.html",children:"Dexie.js-based storage"})]}),"\n",(0,s.jsxs)(n.li,{children:["The premium plain ",(0,s.jsx)(n.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB-based storage"}),", offering faster performance\nBelow is an example of setting up a simple RxDB ",(0,s.jsx)(n.a,{href:"/articles/react-database.html",children:"database"})," using the Dexie.js-based storage in a React app:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb/plugins/core';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\n// create a database\nconst db = await createRxDatabase({\n    name: 'heroesdb', // the name of the database\n    storage: getRxStorageDexie()\n});\n\n// Define your schema\nconst heroSchema = {\n  title: 'hero schema',\n  version: 0,\n  description: 'Describes a hero in your app',\n  primaryKey: 'id',\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      maxLength: 100\n    },\n    name: {\n      type: 'string'\n    },\n    power: {\n      type: 'string'\n    }\n  },\n  required: ['id', 'name']\n};\n\n// add collections\nawait db.addCollections({\n  heroes: {\n    schema: heroSchema\n  }\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"crud-operations",children:"CRUD Operations"}),"\n",(0,s.jsx)(n.p,{children:"Once your database is initialized, you can perform all CRUD operations:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// insert\nawait db.heroes.insert({ name: 'Iron Man', power: 'Genius-level intellect' });\n\n// bulk insert\nawait db.heroes.bulkInsert([\n  { name: 'Thor', power: 'God of Thunder' },\n  { name: 'Hulk', power: 'Superhuman Strength' }\n]);\n\n// find and findOne\nconst heroes = await db.heroes.find().exec();\nconst ironMan = await db.heroes.findOne({ selector: { name: 'Iron Man' } }).exec();\n\n// update\nconst doc = await db.heroes.findOne({ selector: { name: 'Hulk' } }).exec();\nawait doc.update({ $set: { power: 'Unlimited Strength' } });\n\n// delete\nconst doc = await db.heroes.findOne({ selector: { name: 'Thor' } }).exec();\nawait doc.remove();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"reactive-queries-and-live-updates",children:"Reactive Queries and Live Updates"}),"\n",(0,s.jsxs)(n.p,{children:["RxDB excels in providing reactive data capabilities, ideal for ",(0,s.jsx)(n.a,{href:"/articles/realtime-database.html",children:"real-time applications"}),". There are two main approaches to achieving live queries with RxDB: using RxJS Observables with React Hooks or utilizing Preact Signals."]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"../files/animations/realtime.gif",alt:"realtime ui updates",width:"700"})}),"\n",(0,s.jsx)(n.h3,{id:"with-rxjs-observables-and-react-hooks",children:"With RxJS Observables and React Hooks"}),"\n",(0,s.jsx)(n.p,{children:"RxDB integrates seamlessly with RxJS Observables, allowing you to build reactive components. Here's an example of a React component that subscribes to live data updates:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { useState, useEffect } from 'react';\n\nfunction HeroList({ collection }) {\n  const [heroes, setHeroes] = useState([]);\n\n  useEffect(() => {\n    // create an observable query\n    const query = collection.find();\n    const subscription = query.$.subscribe(newHeroes => {\n      setHeroes(newHeroes);\n    });\n    return () => subscription.unsubscribe();\n  }, [collection]);\n\n  return (\n    <div>\n      <h2>Hero List</h2>\n      <ul>\n        {heroes.map(hero => (\n          <li key={hero.id}>\n            <strong>{hero.name}</strong> - {hero.power}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This component subscribes to the collection's changes, updating the UI automatically whenever the underlying data changes, even across browser tabs."}),"\n",(0,s.jsx)(n.h3,{id:"with-preact-signals",children:"With Preact Signals"}),"\n",(0,s.jsxs)(n.p,{children:["RxDB also supports Preact Signals for reactivity, which can be integrated into React applications via a ",(0,s.jsx)(n.a,{href:"/premium/",children:"premium plugin"}),". Preact Signals offer a modern, fine-grained reactivity model."]}),"\n",(0,s.jsx)(n.p,{children:"First, install the necessary package:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @preact/signals-core --save\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set up RxDB with Preact Signals reactivity:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { PreactSignalsRxReactivityFactory } from 'rxdb-premium/plugins/reactivity-preact-signals';\nimport { createRxDatabase } from 'rxdb/plugins/core';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\nconst database = await createRxDatabase({\n    name: 'mydb',\n    storage: getRxStorageDexie(),\n    reactivity: PreactSignalsRxReactivityFactory\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, you can obtain signals directly from RxDB queries using the double-dollar sign (",(0,s.jsx)(n.code,{children:"$$"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function HeroList({ collection }) {\n  const heroes = collection.find().$$;\n  return (\n    <ul>\n      {heroes.map(hero => (\n        <li key={hero.id}>{hero.name}</li>\n      ))}\n    </ul>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This approach provides automatic updates whenever the data changes, without needing to manage subscriptions manually."}),"\n",(0,s.jsx)(n.h2,{id:"react-indexeddb-example-with-rxdb",children:"React IndexedDB Example with RxDB"}),"\n",(0,s.jsxs)(n.p,{children:["A comprehensive example of using RxDB within a React application can be found in the ",(0,s.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples/react",children:"RxDB GitHub repository"}),". This repository contains sample applications, showcasing best practices and demonstrating how to integrate RxDB for various use cases."]}),"\n",(0,s.jsx)(n.h2,{id:"advanced-rxdb-features",children:"Advanced RxDB Features"}),"\n",(0,s.jsx)(n.p,{children:"RxDB offers many advanced features that extend beyond basic data storage:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"RxDB Replication"}),": Synchronize local data with remote databases seamlessly. Learn more: ",(0,s.jsx)(n.a,{href:"https://rxdb.info/replication.html",children:"RxDB Replication"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Migration"}),": Handle schema changes gracefully with automatic data migrations. See: ",(0,s.jsx)(n.a,{href:"https://rxdb.info/migration-schema.html",children:"Data migration"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Encryption"}),": Secure your data with built-in encryption capabilities. Explore: ",(0,s.jsx)(n.a,{href:"https://rxdb.info/encryption.html",children:"Encryption"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Compression"}),": Optimize storage using key compression. Details: ",(0,s.jsx)(n.a,{href:"https://rxdb.info/key-compression.html",children:"Compression"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"limitations-of-indexeddb",children:"Limitations of IndexedDB"}),"\n",(0,s.jsx)(n.p,{children:"While IndexedDB is powerful, it has some inherent limitations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Performance"}),": IndexedDB can be slow under certain conditions. Read more: ",(0,s.jsx)(n.a,{href:"https://rxdb.info/slow-indexeddb.html",children:"Slow IndexedDB"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Storage Limits"}),": Browsers impose limits on how much data can be stored. See: ",(0,s.jsx)(n.a,{href:"https://rxdb.info/articles/localstorage-indexeddb-cookies-opfs-sqlite-wasm.html",children:"Browser storage limits"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"alternatives-to-indexeddb",children:"Alternatives to IndexedDB"}),"\n",(0,s.jsxs)(n.p,{children:["Depending on your application's requirements, there are ",(0,s.jsx)(n.a,{href:"/articles/localstorage-indexeddb-cookies-opfs-sqlite-wasm.html",children:"alternative storage solutions"})," to consider:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Origin Private File System (OPFS)"}),": A newer API that can offer better performance. RxDB supports OPFS as well. More info: ",(0,s.jsx)(n.a,{href:"/rx-storage-opfs.html",children:"RxDB OPFS Storage"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SQLite"}),": Ideal for React applications on Capacitor or ",(0,s.jsx)(n.a,{href:"/articles/ionic-storage.html",children:"Ionic"}),", offering native performance. Explore: ",(0,s.jsx)(n.a,{href:"/rx-storage-sqlite.html",children:"RxDB SQLite Storage"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"performance-comparison-with-other-browser-storages",children:"Performance comparison with other browser storages"}),"\n",(0,s.jsxs)(n.p,{children:["Here is a ",(0,s.jsx)(n.a,{href:"/rx-storage-performance.html",children:"performance overview"})," of the various browser based storage implementation of RxDB:"]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"../files/rx-storage-performance-browser.png",alt:"RxStorage performance - browser",width:"700"})}),"\n",(0,s.jsx)(n.h2,{id:"follow-up",children:"Follow Up"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Learn how to use RxDB with the ",(0,s.jsx)(n.a,{href:"/quickstart.html",children:"RxDB Quickstart"})," for a guided introduction."]}),"\n",(0,s.jsxs)(n.li,{children:["Check out the ",(0,s.jsx)(n.a,{href:"https://github.com/pubkey/rxdb",children:"RxDB GitHub repository"})," and leave a star \u2b50 if you find it useful."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By leveraging RxDB on top of IndexedDB, you can create highly responsive, offline-capable React applications without dealing with the low-level complexities of IndexedDB directly. With reactive queries, seamless cross-tab communication, and powerful advanced features, RxDB becomes an invaluable tool in modern web development."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var a=i(6540);const s={},r=a.createContext(s);function t(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);