"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[6584],{7226:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"rx-state","title":"Effortless Reactive State with RxDB\'s RxState","description":"Get real-time, persistent state without the hassle. RxState integrates easily with signals and hooks, ensuring smooth updates across tabs and devices.","source":"@site/docs/rx-state.md","sourceDirName":".","slug":"/rx-state.html","permalink":"/rx-state.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Effortless Reactive State with RxDB\'s RxState","slug":"rx-state.html","description":"Get real-time, persistent state without the hassle. RxState integrates easily with signals and hooks, ensuring smooth updates across tabs and devices."},"sidebar":"tutorialSidebar","previous":{"title":"Custom Reactivity","permalink":"/reactivity.html"},"next":{"title":"Local Documents","permalink":"/rx-local-document.html"}}');var s=a(4848),i=a(8453);const r={title:"Effortless Reactive State with RxDB's RxState",slug:"rx-state.html",description:"Get real-time, persistent state without the hassle. RxState integrates easily with signals and hooks, ensuring smooth updates across tabs and devices."},o="RxState",l={},c=[{value:"Creating a RxState",id:"creating-a-rxstate",level:2},{value:"Writing data and Persistence",id:"writing-data-and-persistence",level:2},{value:"Get State Data",id:"get-state-data",level:2},{value:"Observability",id:"observability",level:2},{value:"RxState with signals and hooks",id:"rxstate-with-signals-and-hooks",level:2},{value:"Cleanup RxState operations",id:"cleanup-rxstate-operations",level:2},{value:"Correctness over Performance",id:"correctness-over-performance",level:2},{value:"RxState Replication",id:"rxstate-replication",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"rxstate",children:"RxState"})}),"\n",(0,s.jsxs)(t.p,{children:["RxState is a flexible state library build on top of the ",(0,s.jsx)(t.a,{href:"https://rxdb.info/",children:"RxDB Database"}),". While RxDB stores similar documents inside of collections, RxState can store any complex JSON data without having a predefined schema."]}),"\n",(0,s.jsxs)(t.p,{children:["The state is automatically persisted through RxDB and states changes are propagated between browser tabs. Even setting up replication is simple by using the RxDB ",(0,s.jsx)(t.a,{href:"/replication.html",children:"Replication feature"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-rxstate",children:"Creating a RxState"}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.code,{children:"RxState"})," instance is created on top of a ",(0,s.jsx)(t.a,{href:"/rx-database.html",children:"RxDatabase"}),". The state will automatically be persisted with the ",(0,s.jsx)(t.a,{href:"/rx-storage.html",children:"storage"})," that was used when setting up the RxDatabase. To use it you first have to import the ",(0,s.jsx)(t.code,{children:"RxDBStatePlugin"})," and add it to RxDB with ",(0,s.jsx)(t.code,{children:"addRxPlugin()"}),".\nTo create a state call the ",(0,s.jsx)(t.code,{children:"addState()"})," method on the database instance. Calling ",(0,s.jsx)(t.code,{children:"addState"})," multiple times will automatically de-duplicated and only create a single RxState object."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { createRxDatabase, addRxPlugin } from 'rxdb';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\n// first add the RxState plugin to RxDB\nimport { RxDBStatePlugin } from 'rxdb/plugins/state';\naddRxPlugin(RxDBStatePlugin);\n\nconst database = await createRxDatabase({\n  name: 'heroesdb',\n  storage: getRxStorageDexie(),\n});\n\n// create a state instance\nconst myState = await database.addState();\n\n// you can also create states with a given namespace\nconst myChildState = await database.addState('myNamepsace');\n"})}),"\n",(0,s.jsx)(t.h2,{id:"writing-data-and-persistence",children:"Writing data and Persistence"}),"\n",(0,s.jsxs)(t.p,{children:["Writing data to the state happen by a so called ",(0,s.jsx)(t.code,{children:"modifier"}),". It is a simple JavaScript function that gets the current value as input and returns the new, modified value."]}),"\n",(0,s.jsxs)(t.p,{children:["For example to increase the value of ",(0,s.jsx)(t.code,{children:"myField"})," by one, you would use a modifier that increases the current value:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// initially set value to zero\nawait myState.set('myField', v => 0);\n\n// increase value by one\nawait myState.set('myField', v => v + 1);\n\n// update value to be 42\nawait myState.set('myField', v => 42);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The modifier is used instead of a direct assignment to ensure correct behavior when other JavaScript realms write to the state at the same time, like other browser tabs or webworkers. On conflicts, the modifier will just be run again to ensure deterministic and correct behavior. Therefore mutation is ",(0,s.jsx)(t.code,{children:"async"}),", you have to ",(0,s.jsx)(t.code,{children:"await"})," the call to the set function when you care about the moment when the change actually happened."]}),"\n",(0,s.jsx)(t.h2,{id:"get-state-data",children:"Get State Data"}),"\n",(0,s.jsxs)(t.p,{children:["The state stored inside of a RxState instance can be seen as a big single JSON object that contains all data.\nYou can fetch the whole object or partially get a single properties or nested ones.\nFetching data can either happen with the ",(0,s.jsx)(t.code,{children:".get()"})," method or by accessing the field directly like ",(0,s.jsx)(t.code,{children:"myRxState.myField"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// get root state data\nconst val = myState.get();\n\n// get single property\nconst val = myState.get('myField');\nconst val = myState.myField;\n\n// get nested property\nconst val = myState.get('myField.childfield');\nconst val = myState.myField.childfield;\n\n// get nested array property\nconst val = myState.get('myArrayField[0].foobar');\nconst val = myState.myArrayField[0].foobar;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"observability",children:"Observability"}),"\n",(0,s.jsxs)(t.p,{children:["Instead of fetching the state once, you can also observe the state with either rxjs observables or ",(0,s.jsx)(t.a,{href:"#rxstate-with-signals-and-hooks",children:"custom reactivity handlers"})," like signals or hooks."]}),"\n",(0,s.jsxs)(t.p,{children:["Rxjs observables can be created by either using the ",(0,s.jsx)(t.code,{children:".get$()"})," method or by accessing the top level property suffixed with a dollar sign like ",(0,s.jsx)(t.code,{children:"myState.myField$"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const observable = myState.get$('myField');\nconst observable = myState.myField$;\n\n// then you can subscribe to that observable\nobservable.subscribe(newValue => {\n    // update the UI\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"Subscription works across multiple JavaScript realms like browser tabs or Webworkers."}),"\n",(0,s.jsx)(t.h2,{id:"rxstate-with-signals-and-hooks",children:"RxState with signals and hooks"}),"\n",(0,s.jsxs)(t.p,{children:["With the double-dollar sign you can also access ",(0,s.jsx)(t.a,{href:"/reactivity.html",children:"custom reactivity"})," instances like signals or hooks. These are easier to use compared to rxjs, depending on which JavaScript framework you are using."]}),"\n",(0,s.jsx)(t.p,{children:"For example in angular to use signals, you would first add a reactivity factory to your database and then access the signals of the RxState:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { RxReactivityFactory, createRxDatabase } from 'rxdb/plugins/core';\nimport { toSignal } from '@angular/core/rxjs-interop';\nconst reactivityFactory: RxReactivityFactory<ReactivityType> = {\n    fromObservable(obs, initialValue) {\n        return toSignal(obs, { initialValue });\n    }\n};\nconst database = await createRxDatabase({\n    name: 'mydb',\n    storage: getRxStorageDexie(),\n    reactivity: reactivityFactory\n});\nconst myState = await database.addState();\n\nconst mySignal = myState.get$$('myField');\nconst mySignal = myState.myField$$;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"cleanup-rxstate-operations",children:"Cleanup RxState operations"}),"\n",(0,s.jsxs)(t.p,{children:["For faster writes, changes to the state are only written as list of operations to disc. After some time you might have too\nmany operations written which would delay the initial state creation. To automatically merge the state operations into a single operation and clear the old operations, you should add the ",(0,s.jsx)(t.a,{href:"/cleanup.html",children:"Cleanup Plugin"})," before creating the ",(0,s.jsx)(t.a,{href:"/rx-database.html",children:"RxDatabase"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { addRxPlugin } from 'rxdb';\nimport { RxDBCleanupPlugin } from 'rxdb/plugins/cleanup';\naddRxPlugin(RxDBCleanupPlugin);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"correctness-over-performance",children:"Correctness over Performance"}),"\n",(0,s.jsx)(t.p,{children:"RxState is optimized for correctness, not for performance. Compared to other state libraries, RxState directly persists data to storage and ensures write conflicts are handled properly. Other state libraries are handles mainly in-memory and lazily persist to disc without caring about conflicts or multiple browser tabs which can cause problems and hard to reproduce bugs."}),"\n",(0,s.jsxs)(t.p,{children:["RxState still uses RxDB which has a range of ",(0,s.jsx)(t.a,{href:"/rx-storage-performance.html",children:"great performing storages"})," so the write speed is more than sufficient. Also to further improve write performance you can use more RxState instances (with an different namespace) to split writes across multiple storage instances."]}),"\n",(0,s.jsx)(t.p,{children:"Reads happen directly in-memory which makes RxState read performance comparable to other state libraries."}),"\n",(0,s.jsx)(t.h2,{id:"rxstate-replication",children:"RxState Replication"}),"\n",(0,s.jsxs)(t.p,{children:["Because the state data is stored inside of an internal ",(0,s.jsx)(t.a,{href:"/rx-collection.html",children:"RxCollection"})," you can easily use the ",(0,s.jsx)(t.a,{href:"/replication.html",children:"RxDB Replication"})," to sync data between users or devices of the same user."]}),"\n",(0,s.jsxs)(t.p,{children:["For example with the ",(0,s.jsx)(t.a,{href:"/replication-webrtc.html",children:"P2P WebRTC replication"})," you can start the replication on the collection and automatically sync the RxState operations between users directly:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {\n    replicateWebRTC,\n    getConnectionHandlerSimplePeer\n} from 'rxdb/plugins/replication-webrtc';\n\nconst database = await createRxDatabase({\n  name: 'heroesdb',\n  storage: getRxStorageDexie(),\n});\n\nconst myState = await database.addState();\n\nconst replicationPool = await replicateWebRTC(\n    {\n        collection: myState.collection,\n        topic: 'my-state-replication-pool',\n        connectionHandlerCreator: getConnectionHandlerSimplePeer({}),\n        pull: {},\n        push: {}\n    }\n);\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var n=a(6540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);