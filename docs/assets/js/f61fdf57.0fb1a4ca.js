"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[5448],{2488:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"articles/optimistic-ui","title":"Building an Optimistic UI with RxDB","description":"Learn how to build an Optimistic UI with RxDB for instant and reliable UI updates on user interactions","source":"@site/docs/articles/optimistic-ui.md","sourceDirName":"articles","slug":"/articles/optimistic-ui.html","permalink":"/articles/optimistic-ui.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Building an Optimistic UI with RxDB","slug":"optimistic-ui.html","description":"Learn how to build an Optimistic UI with RxDB for instant and reliable UI updates on user interactions"},"sidebar":"tutorialSidebar","previous":{"title":"Electron Database - Storage adapters for SQLite, Filesystem and In-Memory","permalink":"/electron-database.html"},"next":{"title":"What is a Local Database and Why RxDB is the Best Local Database for JavaScript Applications","permalink":"/articles/local-database.html"}}');var s=n(4848),r=n(8453);const a={title:"Building an Optimistic UI with RxDB",slug:"optimistic-ui.html",description:"Learn how to build an Optimistic UI with RxDB for instant and reliable UI updates on user interactions"},l="Building an Optimistic UI with RxDB",o={},c=[{value:"Benefits of an Optimistic UI",id:"benefits-of-an-optimistic-ui",level:2},{value:"Better User Experience with Optimistic UI",id:"better-user-experience-with-optimistic-ui",level:3},{value:"Better Scaling and Easier to Implement",id:"better-scaling-and-easier-to-implement",level:3},{value:"Building Optimistic UI Apps with RxDB",id:"building-optimistic-ui-apps-with-rxdb",level:2},{value:"Local Database: The Backbone of an Optimistic UI",id:"local-database-the-backbone-of-an-optimistic-ui",level:3},{value:"Real-Time UI Changes on Updates",id:"real-time-ui-changes-on-updates",level:3},{value:"Replication with a Server",id:"replication-with-a-server",level:3},{value:"Handling Offline Changes and Conflicts",id:"handling-offline-changes-and-conflicts",level:4},{value:"WebSockets, SSE, or Beyond",id:"websockets-sse-or-beyond",level:4},{value:"Optimistic UI in Various Frameworks",id:"optimistic-ui-in-various-frameworks",level:2},{value:"Angular Example",id:"angular-example",level:3},{value:"React Example",id:"react-example",level:3},{value:"Downsides of Optimistic UI Apps",id:"downsides-of-optimistic-ui-apps",level:2},{value:"Conflict Resolution Strategies",id:"conflict-resolution-strategies",level:2},{value:"When (and When Not) to Use Optimistic UI",id:"when-and-when-not-to-use-optimistic-ui",level:2},{value:"Follow Up",id:"follow-up",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"building-an-optimistic-ui-with-rxdb",children:"Building an Optimistic UI with RxDB"})}),"\n",(0,s.jsxs)(i.p,{children:["An ",(0,s.jsx)(i.strong,{children:"Optimistic User Interface (UI)"})," is a design pattern that provides instant feedback to the user by ",(0,s.jsx)(i.strong,{children:"assuming"})," that an operation or server call will succeed. Instead of showing loading spinners or waiting for server confirmations, the UI immediately reflects the user's intended action and later reconciles the displayed data with the actual server response. This approach drastically improves perceived performance and user satisfaction."]}),"\n",(0,s.jsx)(i.h2,{id:"benefits-of-an-optimistic-ui",children:"Benefits of an Optimistic UI"}),"\n",(0,s.jsx)(i.p,{children:"Optimistic UIs offer a host of advantages, from improving the user experience to streamlining the underlying infrastructure. Below are some key reasons why an optimistic approach can revolutionize your application's performance and scalability."}),"\n",(0,s.jsx)(i.h3,{id:"better-user-experience-with-optimistic-ui",children:"Better User Experience with Optimistic UI"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"No loading spinners, near-zero latency"}),": Users perceive their actions as instant. Any actual network delays or slow server operations can be handled behind the scenes."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Offline capability"}),": Optimistic UI pairs perfectly with offline-first apps. Users can continue to interact with the application even when offline, and changes will be synced automatically once the network is available again."]}),"\n"]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/files/loading-spinner-not-needed.gif",alt:"loading spinner not needed",width:"300"})}),"\n",(0,s.jsx)(i.h3,{id:"better-scaling-and-easier-to-implement",children:"Better Scaling and Easier to Implement"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Fewer server endpoints"}),": Instead of sending a separate HTTP request for every single user interaction, you can batch updates and sync them in bulk."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Less server load"}),": By handling changes locally and syncing in batches, you reduce the volume of server round-trips."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Automated error handling"}),": If a request fails or a document is in conflict, RxDB's ",(0,s.jsx)(i.a,{href:"/replication.html",children:"replication"})," mechanism can seamlessly retry and resolve conflicts in the background, without requiring a separate endpoint or manual user intervention."]}),"\n"]}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("a",{href:"https://rxdb.info/",children:(0,s.jsx)("img",{src:"../files/logo/rxdb_javascript_database.svg",alt:"RxDB Database",width:"220"})})}),"\n",(0,s.jsx)(i.h2,{id:"building-optimistic-ui-apps-with-rxdb",children:"Building Optimistic UI Apps with RxDB"}),"\n",(0,s.jsx)(i.p,{children:"Now that we know what an optimistic UI is, lets build one with RxDB."}),"\n",(0,s.jsx)(i.h3,{id:"local-database-the-backbone-of-an-optimistic-ui",children:"Local Database: The Backbone of an Optimistic UI"}),"\n",(0,s.jsxs)(i.p,{children:["A local database is the heart of an Optimistic UI. With RxDB, ",(0,s.jsx)(i.strong,{children:"all application state"})," is stored locally, ensuring seamless and instant updates. You can choose from multiple storage backends based on your runtime - check out ",(0,s.jsx)(i.a,{href:"/rx-storage.html",children:"RxDB Storage Options"})," to see which engines (IndexedDB, SQLite, or custom) suit your environment best."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Instant Writes"}),": When users perform an action (like clicking a button or submitting a form), the changes are written directly to the local RxDB database. This immediate local write makes the UI feel snappy and removes the dependency on instantaneous server responses."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/offline-first.html",children:"Offline-First"}),": Because data is managed locally, your app continues to operate smoothly even without an internet connection. Users can view, create, and update data at any time, assured that changes will sync automatically once they're back online."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"real-time-ui-changes-on-updates",children:"Real-Time UI Changes on Updates"}),"\n",(0,s.jsx)(i.p,{children:"RxDB's core is built around observables that react to any state changes - whether from local writes or incoming replication from the server."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Automatic UI refresh"}),": Any query or document subscription in RxDB automatically notifies your UI layer when data changes. There's no need to manually poll or refetch."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Cross-tab updates"}),": If you have the same RxDB database open in multiple ",(0,s.jsx)(i.a,{href:"/articles/browser-database.html",children:"browser"})," tabs, changes in one tab instantly propagate to the others."]}),"\n"]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/files/multiwindow.gif",alt:"RxDB multi tab",width:"450"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Event-Reduce Algorithm"}),": Under the hood, RxDB uses the ",(0,s.jsx)(i.a,{href:"https://github.com/pubkey/event-reduce",children:"event-reduce algorithm"})," to minimize overhead. Instead of re-running expensive queries, RxDB calculates the smallest possible updates needed to keep query results accurate - further boosting real-time performance."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"replication-with-a-server",children:"Replication with a Server"}),"\n",(0,s.jsxs)(i.p,{children:["While local storage is key to an Optimistic UI, most applications ultimately need to sync with a remote back end. RxDB offers a ",(0,s.jsx)(i.a,{href:"/replication.html",children:"powerful replication system"})," that can sync your local data with virtually any server/database in the background:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Incremental and real-time"}),": RxDB continuously pushes local changes to the server when a network is available and fetches server updates as they happen."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Conflict resolution"}),": If changes happen offline or multiple clients update the same data, RxDB detects conflicts and makes it straightforward to resolve them."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Flexible transport"}),": Beyond simple HTTP polling, you can incorporate WebSockets, Server-Sent Events (SSE), or other protocols for instant, server-confirmed changes broadcast to all connected clients. See ",(0,s.jsx)(i.a,{href:"/articles/websockets-sse-polling-webrtc-webtransport.html",children:"this guide"})," to learn more."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"By combining local-first data handling with real-time synchronization, RxDB delivers most of what an Optimistic UI needs - right out of the box. The result is a seamless user experience where interactions never feel blocked by slow networks, and any conflicts or final validations are quietly handled in the background."}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/files/animations/realtime.gif",alt:"realtime ui updates",width:"700"})}),"\n",(0,s.jsx)(i.h4,{id:"handling-offline-changes-and-conflicts",children:"Handling Offline Changes and Conflicts"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Offline-first approach"}),": All writes are initially stored in the local database. When connectivity returns, RxDB's replication automatically pushes changes to the server."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Conflict resolution"}),": If multiple clients edit the same documents while offline, conflicts are automatically detected and can be resolved gracefully (more on conflicts below)."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"websockets-sse-or-beyond",children:"WebSockets, SSE, or Beyond"}),"\n",(0,s.jsx)(i.p,{children:"For truly real-time communication - where server-confirmed changes instantly reach all clients - you can go beyond simple HTTP polling. Use WebSockets, Server-Sent Events (SSE), or other streaming protocols to broadcast updates the moment they occur. This pattern excels in scenarios like chats, collaborative editors, or dynamic dashboards."}),"\n",(0,s.jsxs)(i.p,{children:["To learn more about these protocols and their integration with RxDB, check out ",(0,s.jsx)(i.a,{href:"/articles/websockets-sse-polling-webrtc-webtransport.html",children:"this guide"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"optimistic-ui-in-various-frameworks",children:"Optimistic UI in Various Frameworks"}),"\n",(0,s.jsx)(i.h3,{id:"angular-example",children:"Angular Example"}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("img",{src:"../files/icons/angular.svg",alt:"Angular",width:"80"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/articles/angular-database.html",children:"Angular"}),"'s ",(0,s.jsx)(i.code,{children:"async"})," pipe works smoothly with RxDB's observables. Suppose you have a ",(0,s.jsx)(i.code,{children:"myCollection"})," of documents, you can directly subscribe in the template:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-html",children:'<ul *ngIf="(myCollection.find().$ | async) as docs">\n  <li *ngFor="let doc of docs">\n    {{ doc.name }}\n  </li>\n</ul>\n'})}),"\n",(0,s.jsx)(i.p,{children:"This snippet:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Subscribes to ",(0,s.jsx)(i.code,{children:"myCollection.find().$"}),", which emits live updates whenever ",(0,s.jsx)(i.a,{href:"/rx-document.html",children:"documents"})," in the ",(0,s.jsx)(i.a,{href:"/rx-collection.html",children:"collection"})," change."]}),"\n",(0,s.jsx)(i.li,{children:"Passes the emitted array of documents into docs."}),"\n",(0,s.jsx)(i.li,{children:"Renders each document in a list item, instantly reflecting any changes."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"react-example",children:"React Example"}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("img",{src:"../files/icons/react.svg",alt:"React",width:"80"})}),"\n",(0,s.jsxs)(i.p,{children:["In ",(0,s.jsx)(i.a,{href:"/articles/react-database.html",children:"React"}),", you can utilize signals or other state management tools. For instance, if we have an ",(0,s.jsx)(i.a,{href:"/reactivity.html",children:"RxDB extension"})," that exposes a ",(0,s.jsx)(i.strong,{children:"signal"}),":"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-tsx",children:"import React from 'react';\n\nfunction MyComponent({ myCollection }) {\n  // .find().$$ provides a signal that updates whenever data changes\n  const docsSignal = myCollection.find().$$;\n\n  return (\n    <ul>\n      {docs.map((doc) => (\n        <li key={doc.id}>{doc.name}</li>\n      ))}\n    </ul>\n  );\n}\n\nexport default MyComponent;\n"})}),"\n",(0,s.jsxs)(i.p,{children:["When you call ",(0,s.jsx)(i.code,{children:"docsSignal.value"})," or use a hook like useSignal, it pulls the latest value from the ",(0,s.jsx)(i.a,{href:"/rx-query.html",children:"RxDB query"}),". Whenever the collection updates, the signal emits the new data, and React re-renders the component instantly."]}),"\n",(0,s.jsx)(i.h2,{id:"downsides-of-optimistic-ui-apps",children:"Downsides of Optimistic UI Apps"}),"\n",(0,s.jsx)(i.p,{children:"While Optimistic UIs feel snappy, there are some caveats:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Conflict Resolution"}),":\nWith an optimistic approach, multiple offline devices might edit the same data. When syncing back, conflicts occur that must be merged. RxDB uses ",(0,s.jsx)(i.a,{href:"/transactions-conflicts-revisions.html",children:"revisions"})," to detect and handle these conflicts."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"User Confusion"}),":\nUsers may see changes that haven't yet been confirmed by the server. If a subsequent server validation fails, the UI must revert to a previous state. Clear visual feedback or user notifications help reduce confusion."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Server Compatibility"}),":\nThe server must be capable of storing and returning revision metadata (for instance, a timestamp or versioning system). Check out RxDB's ",(0,s.jsx)(i.a,{href:"/replication.html",children:"replication docs"})," for details on how to structure your back end."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Storage Limits"}),":\nStoring data in the client has practical size limits. ",(0,s.jsx)(i.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB"})," or other client-side storages have constraints (though usually quite large). See ",(0,s.jsx)(i.a,{href:"/articles/localstorage-indexeddb-cookies-opfs-sqlite-wasm.html",children:"storage comparisons"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"conflict-resolution-strategies",children:"Conflict Resolution Strategies"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Last Write to Server Wins"}),':\nA simplest-possible method: whatever update reaches the server last overrides previous data. Good for non-critical data like \u201clike" counts or ephemeral states.']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Revision-Based Merges"}),":\nUse revision numbers or timestamps to track concurrent edits. Merge them intelligently by combining fields or choosing the latest sub-document changes. This is ideal for collaborative apps where you don't want to overwrite entire records."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"User Prompts"}),":\nIn certain workflows (e.g., shipping forms, e-commerce checkout), you may need to notify the user about conflicts and let them choose which version to keep."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"First Write to Server Wins (RxDB Default)"}),":\nRxDB's default approach is to let the first successful push define the latest version. Any incoming push with an outdated revision triggers a conflict that must be resolved on the client side. Learn more at ",(0,s.jsx)(i.a,{href:"/transactions-conflicts-revisions.html",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"when-and-when-not-to-use-optimistic-ui",children:"When (and When Not) to Use Optimistic UI"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"When to Use"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/articles/realtime-database.html",children:"Real-time interactions"})," like chat apps, social feeds, or \u201cLikes.\"\nSituations where high success rates of operations are expected (most writes don't fail)."]}),"\n",(0,s.jsxs)(i.li,{children:["Apps that need an ",(0,s.jsx)(i.a,{href:"/offline-first.html",children:"offline-first approach"})," or handle intermittent connectivity gracefully."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"When Not to Use"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Large, complex transactions with high failure rates."}),"\n",(0,s.jsx)(i.li,{children:"Scenarios requiring heavy server validations or approvals (for example, financial transactions with complex rules)."}),"\n",(0,s.jsx)(i.li,{children:"Workflows where immediate feedback could mislead users about an operation's success probability."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Assessing Risk"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Consider the likelihood that a user's action might fail. If it's very low, optimistic UI is often best."}),"\n",(0,s.jsx)(i.li,{children:"If frequent failures or complex validations occur, consider a hybrid approach: partial optimistic updates for some actions, while more critical operations rely on immediate server confirmation."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"follow-up",children:"Follow Up"}),"\n",(0,s.jsx)(i.p,{children:"Ready to start building your own Optimistic UI with RxDB? Here are some next steps:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsxs)(i.strong,{children:["Do the ",(0,s.jsx)(i.a,{href:"https://rxdb.info/quickstart.html",children:"RxDB Quickstart"})]}),"\nIf you're brand new to RxDB, the quickstart guide will walk you through installation and setting up your first project."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Check Out the Demo App"}),"\nA live ",(0,s.jsx)(i.a,{href:"https://pubkey.github.io/rxdb-quickstart/",children:"RxDB Quickstart Demo"})," showcases optimistic updates and real-time syncing. Explore the code to see how it works."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Star the GitHub Repo"}),"\nShow your support for RxDB by starring the ",(0,s.jsx)(i.a,{href:"https://github.com/pubkey/rxdb",children:"RxDB GitHub Repository"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"By combining RxDB's powerful offline-first capabilities with the principles of an Optimistic UI, you can deliver snappy, near-instant user interactions that keep your users engaged - no matter the network conditions. Get started today and give your users the experience they deserve!"})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>l});var t=n(6540);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);