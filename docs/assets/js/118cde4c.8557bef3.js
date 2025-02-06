"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[5272],{9065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"replication-couchdb","title":"RxDB\'s CouchDB Replication Plugin","description":"Replicate your RxDB collections with CouchDB the fast way. Enjoy faster sync, easier conflict handling, and flexible storage using this modern plugin.","source":"@site/docs/replication-couchdb.md","sourceDirName":".","slug":"/replication-couchdb.html","permalink":"/replication-couchdb.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RxDB\'s CouchDB Replication Plugin","slug":"replication-couchdb.html","description":"Replicate your RxDB collections with CouchDB the fast way. Enjoy faster sync, easier conflict handling, and flexible storage using this modern plugin."},"sidebar":"tutorialSidebar","previous":{"title":"WebSocket Replication","permalink":"/replication-websocket.html"},"next":{"title":"WebRTC Replication","permalink":"/replication-webrtc.html"}}');var i=t(4848),a=t(8453);const c={title:"RxDB's CouchDB Replication Plugin",slug:"replication-couchdb.html",description:"Replicate your RxDB collections with CouchDB the fast way. Enjoy faster sync, easier conflict handling, and flexible storage using this modern plugin."},s="Replication with CouchDB",r={},l=[{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2},{value:"Usage",id:"usage",level:2},{value:"Conflict handling",id:"conflict-handling",level:2},{value:"Auth example",id:"auth-example",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Known problems",id:"known-problems",level:2},{value:"Database missing",id:"database-missing",level:3},{value:"React Native",id:"react-native",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"replication-with-couchdb",children:"Replication with CouchDB"})}),"\n",(0,i.jsx)(n.p,{children:"A plugin to replicate between a RxCollection and a CouchDB server."}),"\n",(0,i.jsxs)(n.p,{children:["This plugins uses the RxDB ",(0,i.jsx)(n.a,{href:"/replication.html",children:"replication protocol"})," to replicate with a CouchDB endpoint. This plugin ",(0,i.jsx)(n.strong,{children:"does NOT"})," use the official ",(0,i.jsx)(n.a,{href:"https://docs.couchdb.org/en/stable/replication/protocol.html",children:"CouchDB replication protocol"})," because the CouchDB protocol was optimized for server-to-server replication and is not suitable for fast client side applications, mostly because it has to run many HTTP-requests (at least one per document) and also it has to store the whole revision tree of the documents at the client. This makes initial replication and querying very slow."]}),"\n",(0,i.jsx)(n.p,{children:"Because the way how RxDB handles revisions and documents is very similar to CouchDB, using the RxDB replication with a CouchDB endpoint is pretty straightforward."}),"\n",(0,i.jsx)(n.h2,{id:"pros",children:"Pros"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Faster initial replication."}),"\n",(0,i.jsxs)(n.li,{children:["Works with any ",(0,i.jsx)(n.a,{href:"/rx-storage.html",children:"RxStorage"}),", not just PouchDB."]}),"\n",(0,i.jsx)(n.li,{children:"Easier conflict handling because conflicts are handled during replication and not afterwards."}),"\n",(0,i.jsx)(n.li,{children:"Does not have to store all document revisions on the client, only stores the newest version."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cons",children:"Cons"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Does not support the replication of ",(0,i.jsx)(n.a,{href:"/rx-attachment.html",children:"attachments"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Like all CouchDB replication plugins, this one is also limited to replicating 6 collections in parallel. ",(0,i.jsx)(n.a,{href:"/replication-couchdb.html#limitations",children:"Read this for workarounds"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["Start the replication via ",(0,i.jsx)(n.code,{children:"replicateCouchDB()"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { replicateCouchDB } from 'rxdb/plugins/replication-couchdb';\n\nconst replicationState = replicateCouchDB(\n    {\n        replicationIdentifier: 'my-couchdb-replication',\n        collection: myRxCollection,\n        // url to the CouchDB endpoint (required)\n        url: 'http://example.com/db/humans',\n        /**\n         * true for live replication,\n        * false for a one-time replication.\n        * [default=true]\n        */\n        live: true,\n        /**\n         * A custom fetch() method can be provided\n         * to add authentication or credentials.\n         * Can be swapped out dynamically\n         * by running 'replicationState.fetch = newFetchMethod;'.\n         * (optional)\n         */\n        fetch: myCustomFetchMethod,\n        pull: {\n            /**\n             * Amount of documents to be fetched in one HTTP request\n             * (optional)\n             */\n            batchSize: 60,\n            /**\n             * Custom modifier to mutate pulled documents\n             * before storing them in RxDB.\n             * (optional)\n             */\n            modifier: docData => {/* ... */}, \n            /**\n             * Heartbeat time in milliseconds\n             * for the long polling of the changestream.\n             * @link https://docs.couchdb.org/en/3.2.2-docs/api/database/changes.html\n             * (optional, default=60000)\n             */\n            heartbeat: 60000\n        },\n        push: {\n            /**\n             * How many local changes to process at once.\n             * (optional)\n             */\n            batchSize: 60,\n            /**\n             * Custom modifier to mutate documents\n             * before sending them to the CouchDB endpoint.\n             * (optional)\n             */\n            modifier: docData => {/* ... */} \n        }\n    }\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When you call ",(0,i.jsx)(n.code,{children:"replicateCouchDB()"})," it returns a ",(0,i.jsx)(n.code,{children:"RxCouchDBReplicationState"})," which can be used to subscribe to events, for debugging or other functions. It extends the ",(0,i.jsx)(n.a,{href:"/replication.html",children:"RxReplicationState"})," so any other method that can be used there can also be used on the CouchDB replication state."]}),"\n",(0,i.jsx)(n.h2,{id:"conflict-handling",children:"Conflict handling"}),"\n",(0,i.jsxs)(n.p,{children:["When conflicts appear during replication, the ",(0,i.jsx)(n.code,{children:"conflictHandler"})," of the ",(0,i.jsx)(n.code,{children:"RxCollection"})," is used, equal to the other replication plugins. Read more about conflict handling ",(0,i.jsx)(n.a,{href:"/replication.html#conflict-handling",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"auth-example",children:"Auth example"}),"\n",(0,i.jsxs)(n.p,{children:["Lets say for authentication you need to add a ",(0,i.jsx)(n.a,{href:"https://swagger.io/docs/specification/authentication/bearer-authentication/",children:"bearer token"})," as HTTP header to each request. You can achieve that by crafting a custom ",(0,i.jsx)(n.code,{children:"fetch()"})," method that add the header field."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"\nconst myCustomFetch = (url, options) => {\n\n    // flat clone the given options to not mutate the input\n    const optionsWithAuth = Object.assign({}, options);\n    // ensure the headers property exists\n    if(!optionsWithAuth.headers) {\n        optionsWithAuth.headers = {};\n    }\n    // add bearer token to headers\n    optionsWithAuth.headers['Authorization'] ='Basic S0VLU0UhIExFQ0...';\n\n    // call the original fetch function with our custom options.\n    return fetch(\n        url,\n        optionsWithAuth\n    );\n};\n\nconst replicationState = replicateCouchDB(\n    {\n        replicationIdentifier: 'my-couchdb-replication',\n        collection: myRxCollection,\n        url: 'http://example.com/db/humans',\n        /**\n         * Add the custom fetch function here.\n         */\n        fetch: myCustomFetch,\n        pull: {},\n        push: {}\n    }\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Also when your bearer token changes over time, you can set a new custom ",(0,i.jsx)(n.code,{children:"fetch"})," method while the replication is running:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"replicationState.fetch = newCustomFetchMethod;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Also there is a helper method ",(0,i.jsx)(n.code,{children:"getFetchWithCouchDBAuthorization()"})," to create a fetch handler with authorization:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"\nimport { \n    replicateCouchDB,\n    getFetchWithCouchDBAuthorization\n} from 'rxdb/plugins/replication-couchdb';\n\nconst replicationState = replicateCouchDB(\n    {\n        replicationIdentifier: 'my-couchdb-replication',\n        collection: myRxCollection,\n        url: 'http://example.com/db/humans',\n        /**\n         * Add the custom fetch function here.\n         */\n        fetch: getFetchWithCouchDBAuthorization('myUsername', 'myPassword'),\n        pull: {},\n        push: {}\n    }\n);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(n.p,{children:["Since CouchDB only allows synchronization through HTTP1.1 long polling requests there is a limitation of 6 active synchronization connections before the browser prevents sending any further request. This limitation is at the level of browser per tab per domain (some browser, especially older ones, might have a different limit, ",(0,i.jsx)(n.a,{href:"https://docs.pushtechnology.com/cloud/latest/manual/html/designguide/solution/support/connection_limitations.html",children:"see here"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["Since this limitation is at the ",(0,i.jsx)(n.strong,{children:"browser"})," level there are several solutions:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Use only a single database for all entities and set a "type" field for each of the documents'}),"\n",(0,i.jsx)(n.li,{children:"Create multiple subdomains for CouchDB and use a max of 6 active synchronizations (or less) for each"}),"\n",(0,i.jsx)(n.li,{children:"Use a proxy (ex: HAProxy) between the browser and CouchDB and configure it to use HTTP2.0, since HTTP2.0"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you use nginx in front of your CouchDB, you can use these settings to enable http2-proxying to prevent the connection limit problem:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'server {\n    http2 on;\n    location /db {\n        rewrite /db/(.*) /$1 break;\n        proxy_pass http://172.0.0.1:5984;\n        proxy_redirect off;\n        proxy_buffering off;\n        proxy_set_header Host            $host;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded\n        proxy_set_header Connection "keep_alive"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"known-problems",children:"Known problems"}),"\n",(0,i.jsx)(n.h3,{id:"database-missing",children:"Database missing"}),"\n",(0,i.jsxs)(n.p,{children:["In contrast to PouchDB, this plugin ",(0,i.jsx)(n.strong,{children:"does NOT"})," automatically create missing CouchDB databases.\nIf your CouchDB server does not have a database yet, you have to create it by yourself by running a ",(0,i.jsx)(n.code,{children:"PUT"})," request to the database ",(0,i.jsx)(n.code,{children:"name"})," url:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// create a 'humans' CouchDB database on the server\nconst remoteDatabaseName = 'humans';\nawait fetch(\n    'http://example.com/db/' + remoteDatabaseName,\n    {\n        method: 'PUT'\n    }\n);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"react-native",children:"React Native"}),"\n",(0,i.jsxs)(n.p,{children:["React Native does not have a global ",(0,i.jsx)(n.code,{children:"fetch"})," method. You have to import fetch method with the ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/cross-fetch",children:"cross-fetch"})," package:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import crossFetch from 'cross-fetch';\nconst replicationState = replicateCouchDB(\n    {\n        replicationIdentifier: 'my-couchdb-replication',\n        collection: myRxCollection,\n        url: 'http://example.com/db/humans',\n        fetch: crossFetch,\n        pull: {},\n        push: {}\n    }\n);\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var o=t(6540);const i={},a=o.createContext(i);function c(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);