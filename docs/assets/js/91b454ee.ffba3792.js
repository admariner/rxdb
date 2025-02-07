"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[4202],{5241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"rx-storage-sharding","title":"Sharding RxStorage \ud83d\udc51","description":"With the sharding plugin, you can improve the write and query times of some RxStorage implementations.","source":"@site/docs/rx-storage-sharding.md","sourceDirName":".","slug":"/rx-storage-sharding.html","permalink":"/rx-storage-sharding.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Sharding RxStorage \ud83d\udc51","slug":"rx-storage-sharding.html"},"sidebar":"tutorialSidebar","previous":{"title":"Memory Mapped RxStorage \ud83d\udc51","permalink":"/rx-storage-memory-mapped.html"},"next":{"title":"Localstorage Meta Optimizer \ud83d\udc51","permalink":"/rx-storage-localstorage-meta-optimizer.html"}}');var r=t(4848),o=t(8453);const s={title:"Sharding RxStorage \ud83d\udc51",slug:"rx-storage-sharding.html"},i="Sharding RxStorage",d={},l=[{value:"Using the sharding plugin",id:"using-the-sharding-plugin",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"sharding-rxstorage",children:"Sharding RxStorage"})}),"\n",(0,r.jsxs)(n.p,{children:["With the sharding plugin, you can improve the write and query times of ",(0,r.jsx)(n.strong,{children:"some"})," ",(0,r.jsx)(n.code,{children:"RxStorage"})," implementations.\nFor example on ",(0,r.jsx)(n.a,{href:"/slow-indexeddb.html",children:"slow IndexedDB"}),", a performance gain of ",(0,r.jsx)(n.strong,{children:"30-50% on reads"}),", and ",(0,r.jsx)(n.strong,{children:"25% on writes"})," can be achieved by using multiple IndexedDB Stores instead of putting all documents into the same store."]}),"\n",(0,r.jsxs)(n.p,{children:["The sharding plugin works as a wrapper around any other ",(0,r.jsx)(n.code,{children:"RxStorage"}),". The sharding plugin will automatically create multiple shards per storage instance and it will merge and split read and write calls to it."]}),"\n",(0,r.jsx)(n.admonition,{title:"Premium",type:"note",children:(0,r.jsxs)(n.p,{children:["The sharding plugin is part of ",(0,r.jsx)(n.a,{href:"/premium/",children:"RxDB Premium \ud83d\udc51"}),". It is not part of the default RxDB module."]})}),"\n",(0,r.jsx)(n.h2,{id:"using-the-sharding-plugin",children:"Using the sharding plugin"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import {\n    getRxStorageSharding\n} from 'rxdb-premium/plugins/storage-sharding';\n\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\n\n/**\n * First wrap the original RxStorage with the sharding RxStorage.\n */\nconst shardedRxStorage = getRxStorageSharding({\n\n    /**\n     * Here we use the dexie.js RxStorage,\n     * it is also possible to use any other RxStorage instead.\n     */\n    storage: getRxStorageDexie()\n});\n\n\n/**\n * Add the sharding options to your schema.\n * Changing these options will require a data migration.\n */\nconst mySchema = {\n    /* ... */\n    sharding: {\n        /**\n         * Amount of shards per RxStorage instance.\n         * Depending on your data size and query patterns, the optimal shard amount may differ.\n         * Do a performance test to optimize that value.\n         * 10 Shards is a good value to start with.\n         * \n         * IMPORTANT: Changing the value of shards is not possible on a already existing database state,\n         * you will loose access to  your data.\n         */\n        shards: 10,\n        /**\n         * Sharding mode,\n         * you can either shard by collection or by database.\n         * For most cases you should use 'collection' which will shard on the collection level.\n         * For example with the IndexedDB RxStorage, it will then create multiple stores per IndexedDB database\n         * and not multiple IndexedDB databases, which would be slower.\n         */\n        mode: 'collection'\n    }\n    /* ... */\n}\n\n\n/**\n * Create the RxDatabase with the wrapped RxStorage. \n */\nconst database = await createRxDatabase({\n    name: 'mydatabase',\n    storage: shardedRxStorage\n});\n\n"})})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(6540);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);