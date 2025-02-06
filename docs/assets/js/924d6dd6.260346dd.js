"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[5122],{5956:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"electron","title":"Seamless Electron Storage with RxDB","description":"Use the RxDB Electron Plugin to share data between main and renderer processes. Enjoy quick queries, real-time sync, and robust offline support.","source":"@site/docs/electron.md","sourceDirName":".","slug":"/electron.html","permalink":"/electron.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Seamless Electron Storage with RxDB","slug":"electron.html","description":"Use the RxDB Electron Plugin to share data between main and renderer processes. Enjoy quick queries, real-time sync, and robust offline support."},"sidebar":"tutorialSidebar","previous":{"title":"Localstorage Meta Optimizer","permalink":"/rx-storage-localstorage-meta-optimizer.html"},"next":{"title":"\u2699\ufe0f Replication Protocol","permalink":"/replication.html"}}');var o=n(4848),a=n(8453);const s={title:"Seamless Electron Storage with RxDB",slug:"electron.html",description:"Use the RxDB Electron Plugin to share data between main and renderer processes. Enjoy quick queries, real-time sync, and robust offline support."},i="Electron Plugin",c={},l=[{value:"RxStorage Electron IpcRenderer &amp; IpcMain",id:"rxstorage-electron-ipcrenderer--ipcmain",level:2},{value:"Related",id:"related",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"electron-plugin",children:"Electron Plugin"})}),"\n",(0,o.jsx)(r.h2,{id:"rxstorage-electron-ipcrenderer--ipcmain",children:"RxStorage Electron IpcRenderer & IpcMain"}),"\n",(0,o.jsxs)(r.p,{children:["To use RxDB in ",(0,o.jsx)(r.a,{href:"/electron-database.html",children:"electron"}),", it is recommended to run the RxStorage in the main process and the RxDatabase in the renderer processes. With the rxdb electron plugin you can create a remote RxStorage and consume it from the renderer process."]}),"\n",(0,o.jsxs)(r.p,{children:["To do this in a convenient way, the RxDB electron plugin provides the helper functions ",(0,o.jsx)(r.code,{children:"exposeIpcMainRxStorage"})," and ",(0,o.jsx)(r.code,{children:"getRxStorageIpcRenderer"}),".\nSimilar to the ",(0,o.jsx)(r.a,{href:"/rx-storage-worker.html",children:"Worker RxStorage"}),", these wrap any other ",(0,o.jsx)(r.a,{href:"/rx-storage.html",children:"RxStorage"})," once in the main process and once in each renderer process. In the renderer you can then use the storage to create a ",(0,o.jsx)(r.a,{href:"/rx-database.html",children:"RxDatabase"})," which communicates with the storage of the main process to store and query data."]}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"nodeIntegration"})," must be enabled in ",(0,o.jsx)(r.a,{href:"https://www.electronjs.org/docs/latest/api/browser-window#new-browserwindowoptions",children:"Electron"}),"."]})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"//  main.js\nconst { exposeIpcMainRxStorage } = require('rxdb/plugins/electron');\nconst { getRxStorageMemory } = require('rxdb/plugins/storage-memory');\napp.on('ready', async function () {\n    exposeIpcMainRxStorage({\n        key: 'main-storage',\n        storage: getRxStorageMemory(),\n        ipcMain: electron.ipcMain\n    });\n});\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"//  renderer.js\nconst { getRxStorageIpcRenderer } = require('rxdb/plugins/electron');\nconst { getRxStorageMemory } = require('rxdb/plugins/storage-memory');\n\nconst db = await createRxDatabase({\n    name,\n    storage: getRxStorageIpcRenderer({\n        key: 'main-storage',\n        ipcRenderer: electron.ipcRenderer\n    })\n});\n/* ... */\n"})}),"\n",(0,o.jsx)(r.h2,{id:"related",children:"Related"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/electron-database.html",children:"Comparison of Electron Databases"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(6540);const o={},a=t.createContext(o);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);