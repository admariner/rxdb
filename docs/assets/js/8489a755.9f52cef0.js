"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[7700],{9823:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"articles/jquery-database","title":"RxDB as a Database in a jQuery Application","description":"Level up your jQuery-based projects with RxDB. Build real-time, resilient, and responsive apps powered by a reactive NoSQL database right in the browser.","source":"@site/docs/articles/jquery-database.md","sourceDirName":"articles","slug":"/articles/jquery-database.html","permalink":"/articles/jquery-database.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RxDB as a Database in a jQuery Application","slug":"jquery-database.html","description":"Level up your jQuery-based projects with RxDB. Build real-time, resilient, and responsive apps powered by a reactive NoSQL database right in the browser."},"sidebar":"tutorialSidebar","previous":{"title":"RxDB as a Database in a Vue.js Application","permalink":"/articles/vue-database.html"},"next":{"title":"Contribute & Innovate with RxDB","permalink":"/contribution.html"}}');var t=i(4848),r=i(8453);const s={title:"RxDB as a Database in a jQuery Application",slug:"jquery-database.html",description:"Level up your jQuery-based projects with RxDB. Build real-time, resilient, and responsive apps powered by a reactive NoSQL database right in the browser."},o="RxDB as a Database in a jQuery Application",l={},d=[{value:"jQuery Web Applications",id:"jquery-web-applications",level:2},{value:"Importance of Databases in jQuery Applications",id:"importance-of-databases-in-jquery-applications",level:2},{value:"Introducing RxDB as a Database Solution",id:"introducing-rxdb-as-a-database-solution",level:2},{value:"Key Features",id:"key-features",level:3},{value:"Getting Started with RxDB",id:"getting-started-with-rxdb",level:2},{value:"What is RxDB?",id:"what-is-rxdb",level:3},{value:"Reactive Data Handling",id:"reactive-data-handling",level:3},{value:"Offline-First Approach",id:"offline-first-approach",level:3},{value:"Data Replication",id:"data-replication",level:3},{value:"Observable Queries",id:"observable-queries",level:3},{value:"Multi-Tab Support",id:"multi-tab-support",level:3},{value:"RxDB vs. Other jQuery Database Options",id:"rxdb-vs-other-jquery-database-options",level:3},{value:"Using RxDB in a jQuery Application",id:"using-rxdb-in-a-jquery-application",level:2},{value:"Installing RxDB",id:"installing-rxdb",level:3},{value:"Creating and Configuring a Database",id:"creating-and-configuring-a-database",level:2},{value:"Updating the DOM with jQuery",id:"updating-the-dom-with-jquery",level:2},{value:"Different RxStorage layers for RxDB",id:"different-rxstorage-layers-for-rxdb",level:2},{value:"Synchronizing Data with RxDB between Clients and Servers",id:"synchronizing-data-with-rxdb-between-clients-and-servers",level:2},{value:"Offline-First Approach",id:"offline-first-approach-1",level:3},{value:"Conflict Resolution",id:"conflict-resolution",level:3},{value:"Bidirectional Synchronization",id:"bidirectional-synchronization",level:3},{value:"Advanced RxDB Features and Techniques",id:"advanced-rxdb-features-and-techniques",level:2},{value:"Indexing and Performance Optimization",id:"indexing-and-performance-optimization",level:3},{value:"Encryption of Local Data",id:"encryption-of-local-data",level:3},{value:"Change Streams and Event Handling",id:"change-streams-and-event-handling",level:3},{value:"JSON Key Compression",id:"json-key-compression",level:3},{value:"Best Practices for Using RxDB in jQuery Applications",id:"best-practices-for-using-rxdb-in-jquery-applications",level:2},{value:"Follow Up",id:"follow-up",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"rxdb-as-a-database-in-a-jquery-application",children:"RxDB as a Database in a jQuery Application"})}),"\n",(0,t.jsxs)(n.p,{children:["In the early days of dynamic web development, ",(0,t.jsx)(n.strong,{children:"jQuery"})," emerged as a popular library that simplified DOM manipulation and AJAX requests. Despite the rise of modern frameworks, many developers still maintain or extend existing jQuery projects, or leverage jQuery in specific contexts. As jQuery applications grow in complexity, they often require efficient data handling, offline support, and synchronization capabilities. This is where ",(0,t.jsx)(n.a,{href:"https://rxdb.info/",children:"RxDB"}),", a reactive JavaScript database for the browser, node.js, and ",(0,t.jsx)(n.a,{href:"/articles/mobile-database.html",children:"mobile devices"}),", steps in."]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("a",{href:"https://rxdb.info/",children:(0,t.jsx)("img",{src:"../files/logo/rxdb_javascript_database.svg",alt:"JavaScript jQuery Database",width:"220"})})}),"\n",(0,t.jsx)(n.h2,{id:"jquery-web-applications",children:"jQuery Web Applications"}),"\n",(0,t.jsx)(n.p,{children:"jQuery provides a simple API for DOM manipulation, event handling, and AJAX calls. It has been widely adopted due to its ease of use and strong community support. Many projects continue to rely on jQuery for handling client-side functionality, UI interactions, and animations. As these applications evolve, the need for a robust database solution that can manage data locally (and offline) becomes increasingly important."}),"\n",(0,t.jsx)(n.h2,{id:"importance-of-databases-in-jquery-applications",children:"Importance of Databases in jQuery Applications"}),"\n",(0,t.jsx)(n.p,{children:"Modern, data-driven jQuery applications often need to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Store and retrieve data locally"})," for quick and responsive user experiences."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Synchronize data"})," between clients or with a ",(0,t.jsx)(n.a,{href:"/rx-server.html",children:"central server"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Handle offline scenarios"})," seamlessly."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Handle large or complex data structures"})," without repeatedly hitting the server."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Relying solely on server endpoints or basic browser storage (like ",(0,t.jsx)(n.code,{children:"localStorage"}),") can quickly become unwieldy for larger or more complex use cases. Enter RxDB, a dedicated solution that manages data on the client side while offering real-time synchronization and offline-first capabilities."]}),"\n",(0,t.jsx)(n.h2,{id:"introducing-rxdb-as-a-database-solution",children:"Introducing RxDB as a Database Solution"}),"\n",(0,t.jsxs)(n.p,{children:["RxDB (short for Reactive Database) is built on top of ",(0,t.jsx)(n.a,{href:"/articles/browser-database.html",children:"IndexedDB"})," and leverages ",(0,t.jsx)(n.a,{href:"https://rxjs.dev/",children:"RxJS"})," to provide a modern, reactive approach to handling data in the browser. With RxDB, you can store documents locally, query them in real-time, and synchronize changes with a remote server whenever an internet connection is available."]}),"\n",(0,t.jsx)(n.h3,{id:"key-features",children:"Key Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reactive Data Handling"}),": RxDB emits real-time updates whenever your data changes, allowing you to instantly reflect these changes in the DOM with jQuery."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Offline-First Approach"}),": Keep your application usable even when the user's network is unavailable. Data is automatically synchronized once connectivity is restored."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data Replication"}),": Enable multi-device or multi-tab synchronization with minimal effort."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Observable Queries"}),": Reduce code complexity by subscribing to queries instead of constantly polling for changes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Multi-Tab Support"}),": If a user opens your jQuery application in multiple tabs, RxDB keeps data in sync across all sessions."]}),"\n"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/qHWrooWyCYg",title:"RxDB jQuery Video",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,t.jsx)(n.h2,{id:"getting-started-with-rxdb",children:"Getting Started with RxDB"}),"\n",(0,t.jsx)(n.h3,{id:"what-is-rxdb",children:"What is RxDB?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://rxdb.info/",children:"RxDB"})," is a client-side NoSQL database that stores data in the browser (or ",(0,t.jsx)(n.a,{href:"/nodejs-database.html",children:"node.js"}),") and synchronizes changes with other instances or servers. Its design embraces reactive programming principles, making it well-suited for real-time applications, offline scenarios, and multi-tab use cases."]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"../files/animations/realtime.gif",alt:"real-time ui updates",width:"700"})}),"\n",(0,t.jsx)(n.h3,{id:"reactive-data-handling",children:"Reactive Data Handling"}),"\n",(0,t.jsx)(n.p,{children:"RxDB's use of observables enables an event-driven architecture where data mutations automatically trigger UI updates. In a jQuery application, you can subscribe to these changes and update DOM elements as soon as data changes occur - no need for manual refresh or complicated change detection logic."}),"\n",(0,t.jsx)(n.h3,{id:"offline-first-approach",children:"Offline-First Approach"}),"\n",(0,t.jsx)(n.p,{children:"One of RxDB's distinguishing traits is its emphasis on offline-first design. This means your jQuery application continues to function, display, and update data even when there's no network connection. When connectivity is restored, RxDB synchronizes updates with the server or other peers, ensuring consistency across all instances."}),"\n",(0,t.jsx)(n.h3,{id:"data-replication",children:"Data Replication"}),"\n",(0,t.jsxs)(n.p,{children:["RxDB supports real-time data replication with different backends. By enabling replication, you ensure that multiple clients - be they multiple ",(0,t.jsx)(n.a,{href:"/articles/browser-database.html",children:"browser"})," tabs or separate devices - stay in sync. RxDB's conflict resolution strategies help keep the data consistent even when multiple users make changes simultaneously."]}),"\n",(0,t.jsx)(n.h3,{id:"observable-queries",children:"Observable Queries"}),"\n",(0,t.jsx)(n.p,{children:"Instead of static queries, RxDB provides observable queries. Whenever data relevant to a query changes, RxDB re-emits the new result set. You can subscribe to these updates within your jQuery code and instantly reflect them in the UI."}),"\n",(0,t.jsx)(n.h3,{id:"multi-tab-support",children:"Multi-Tab Support"}),"\n",(0,t.jsx)(n.p,{children:"Running your jQuery app in multiple tabs? RxDB automatically synchronizes changes between those tabs. Users can freely switch windows without missing real-time updates."}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"../files/multiwindow.gif",alt:"multi tab support",width:"450"})}),"\n",(0,t.jsx)(n.h3,{id:"rxdb-vs-other-jquery-database-options",children:"RxDB vs. Other jQuery Database Options"}),"\n",(0,t.jsxs)(n.p,{children:["Historically, jQuery developers might use ",(0,t.jsx)(n.code,{children:"localStorage"})," or raw ",(0,t.jsx)(n.code,{children:"IndexedDB"})," for storing data. However, these solutions can require significant boilerplate, lack reactivity, and offer no built-in sync or conflict resolution. RxDB fills these gaps with an out-of-the-box solution, abstracting away low-level database complexities and providing an event-driven, offline-capable approach."]}),"\n",(0,t.jsx)(n.h2,{id:"using-rxdb-in-a-jquery-application",children:"Using RxDB in a jQuery Application"}),"\n",(0,t.jsx)(n.h3,{id:"installing-rxdb",children:"Installing RxDB"}),"\n",(0,t.jsxs)(n.p,{children:["Install RxDB (and ",(0,t.jsx)(n.code,{children:"rxjs"}),") via npm or yarn:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install rxdb rxjs\n"})}),"\n",(0,t.jsx)(n.p,{children:"If your project isn't set up with a build process, you can still use bundlers like Webpack or Rollup, or serve RxDB as a UMD bundle. Once included, you'll have access to RxDB globally or via import statements."}),"\n",(0,t.jsx)(n.h2,{id:"creating-and-configuring-a-database",children:"Creating and Configuring a Database"}),"\n",(0,t.jsxs)(n.p,{children:["Below is a minimal example of how to create an RxDB instance and collection. You can call this when your page initializes, then store the ",(0,t.jsx)(n.code,{children:"db"})," object for later use:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { createRxDatabase } from 'rxdb';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\nasync function initDatabase() {\n  const db = await createRxDatabase({\n    name: 'heroesdb',\n    storage: getRxStorageDexie(),   // Dexie-based IndexedDB\n    password: 'myPassword',         // optional encryption password\n    multiInstance: true,            // multi-tab support\n    eventReduce: true               // optimizes event handling\n  });\n\n  await db.addCollections({\n    hero: {\n      schema: {\n        title: 'hero schema',\n        version: 0,\n        primaryKey: 'id',\n        type: 'object',\n        properties: {\n          id: { type: 'string' },\n          name: { type: 'string' },\n          points: { type: 'number' }\n        }\n      }\n    }\n  });\n\n  return db;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"updating-the-dom-with-jquery",children:"Updating the DOM with jQuery"}),"\n",(0,t.jsx)(n.p,{children:"Once you have your RxDB instance, you can query data reactively and use jQuery to manipulate the DOM:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Example: Displaying heroes using jQuery\n$(document).ready(async function () {\n  const db = await initDatabase();\n\n  // Subscribing to all hero documents\n  db.hero\n    .find()\n    .$  // the observable\n    .subscribe((heroes) => {\n      // Clear the list\n      $('#heroList').empty();\n\n      // Append each hero to the DOM\n      heroes.forEach((hero) => {\n        $('#heroList').append(`\n          <li>\n            <strong>${hero.name}</strong> \u2013 Points: ${hero.points}\n          </li>\n        `);\n      });\n    });\n\n  // Example of adding a new hero\n  $('#addHeroBtn').on('click', async () => {\n    const heroName = $('#heroName').val();\n    const heroPoints = parseInt($('#heroPoints').val(), 10);\n    await db.hero.insert({\n      id: Date.now().toString(),\n      name: heroName,\n      points: heroPoints\n    });\n  });\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["With this approach, any time data in the ",(0,t.jsx)(n.code,{children:"hero"})," collection changes - like when a new hero is added - your jQuery code re-renders the list of heroes automatically."]}),"\n",(0,t.jsx)(n.h2,{id:"different-rxstorage-layers-for-rxdb",children:"Different RxStorage layers for RxDB"}),"\n",(0,t.jsx)(n.p,{children:"RxDB supports multiple storage backends (RxStorage layers). Some popular ones:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/rx-storage-dexie.html",children:"Dexie.js RxStorage"}),": A friendly wrapper around IndexedDB, commonly used for improved dev experience."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB RxStorage"}),": Direct IndexedDB usage, suitable for modern browsers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/rx-storage-opfs.html",children:"OPFS RxStorage"}),": Uses the File System Access API for better performance in supported browsers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/rx-storage-memory.html",children:"Memory RxStorage"}),": Stores data in memory, handy for tests or ephemeral data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"}),": Uses SQLite (potentially via WebAssembly). In typical browser-based scenarios, Dexie or IndexedDB storage is usually more straightforward."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"synchronizing-data-with-rxdb-between-clients-and-servers",children:"Synchronizing Data with RxDB between Clients and Servers"}),"\n",(0,t.jsx)(n.h3,{id:"offline-first-approach-1",children:"Offline-First Approach"}),"\n",(0,t.jsxs)(n.p,{children:["RxDB's ",(0,t.jsx)(n.a,{href:"/offline-first.html",children:"offline-first"})," approach allows your jQuery application to store and query data locally. Users can continue interacting, even offline. When connectivity returns, RxDB syncs to the server."]}),"\n",(0,t.jsx)(n.h3,{id:"conflict-resolution",children:"Conflict Resolution"}),"\n",(0,t.jsxs)(n.p,{children:["Should multiple clients update the same document, RxDB offers ",(0,t.jsx)(n.a,{href:"/transactions-conflicts-revisions.html",children:"conflict handling strategies"}),". You decide how to resolve conflicts - like keeping the latest edit or merging changes - ensuring data integrity across distributed systems."]}),"\n",(0,t.jsx)(n.h3,{id:"bidirectional-synchronization",children:"Bidirectional Synchronization"}),"\n",(0,t.jsx)(n.p,{children:"With RxDB, data changes flow both ways: from client to server and from server to client. This real-time synchronization ensures that all users or tabs see consistent, up-to-date data."}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"../files/database-replication.png",alt:"database replication",width:"200"})}),"\n",(0,t.jsx)(n.h2,{id:"advanced-rxdb-features-and-techniques",children:"Advanced RxDB Features and Techniques"}),"\n",(0,t.jsx)(n.h3,{id:"indexing-and-performance-optimization",children:"Indexing and Performance Optimization"}),"\n",(0,t.jsx)(n.p,{children:"Create indexes on frequently queried fields to speed up performance. For large data sets, indexing can drastically improve query times, keeping your jQuery UI snappy."}),"\n",(0,t.jsx)(n.h3,{id:"encryption-of-local-data",children:"Encryption of Local Data"}),"\n",(0,t.jsxs)(n.p,{children:["RxDB supports ",(0,t.jsx)(n.a,{href:"/encryption.html",children:"encryption to secure data stored in the browser"}),". This is crucial if your application handles sensitive user information."]}),"\n",(0,t.jsx)(n.h3,{id:"change-streams-and-event-handling",children:"Change Streams and Event Handling"}),"\n",(0,t.jsxs)(n.p,{children:["Use change streams to listen for data modifications at the database or collection level. This can trigger ",(0,t.jsx)(n.a,{href:"/articles/realtime-database.html",children:"real-time"})," ",(0,t.jsx)(n.a,{href:"/articles/optimistic-ui.html",children:"UI updates"}),", notifications, or custom logic whenever the data changes."]}),"\n",(0,t.jsx)(n.h3,{id:"json-key-compression",children:"JSON Key Compression"}),"\n",(0,t.jsxs)(n.p,{children:["If your data model has large or repetitive field names, ",(0,t.jsx)(n.a,{href:"/key-compression.html",children:"JSON key compression"})," can minimize stored document size and potentially boost performance."]}),"\n",(0,t.jsx)(n.h2,{id:"best-practices-for-using-rxdb-in-jquery-applications",children:"Best Practices for Using RxDB in jQuery Applications"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Centralize Your Database: Initialize and configure RxDB in one place. Expose the instance where needed or store it globally to avoid re-creating it on every script."}),"\n",(0,t.jsx)(n.li,{children:"Leverage Observables: Instead of polling or manually refreshing data, rely on RxDB's reactivity. Subscribe to queries and let RxDB inform you when data changes."}),"\n",(0,t.jsx)(n.li,{children:"Handle Subscriptions: If you create subscriptions in a single-page context, ensure you don't re-subscribe endlessly or create memory leaks. Clean them up if you're navigating away or removing DOM elements."}),"\n",(0,t.jsx)(n.li,{children:"Offline Testing: Thoroughly test how your jQuery app behaves without a network connection. Simulate offline states in your browser's dev tools or with flight mode to ensure the user experience remains smooth."}),"\n",(0,t.jsx)(n.li,{children:"Performance Profiling: For large data sets or frequent data updates, add indexes and carefully measure query performance. Optimize only where needed."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"follow-up",children:"Follow Up"}),"\n",(0,t.jsx)(n.p,{children:"To explore more about RxDB and leverage its capabilities for browser database development, check out the following resources:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/code/",children:"RxDB GitHub Repository"}),": Visit the official GitHub repository of RxDB to access the source code, documentation, and community support."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/quickstart.html",children:"RxDB Quickstart"}),": Get started quickly with RxDB by following the provided quickstart guide, which offers step-by-step instructions for setting up and using RxDB in your projects."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples",children:"RxDB Examples"}),": Browse official examples to see RxDB in action and learn best practices you can apply to your own project - even if jQuery isn't explicitly featured, the patterns are similar."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var a=i(6540);const t={},r=a.createContext(t);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);