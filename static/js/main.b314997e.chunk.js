(this["webpackJsonpit-incubator-todolist-ts-videos-2"]=this["webpackJsonpit-incubator-todolist-ts-videos-2"]||[]).push([[0],{121:function(t,e,n){},122:function(t,e,n){},150:function(t,e,n){"use strict";n.r(e);var a,i,c=n(0),o=n.n(c),s=n(13),r=n.n(s),l=(n(121),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,220)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))}),d=(n(122),n(208)),u=n(209),j=n(200),b=n(211),O=n(203),f=n(212),T=n(213),h=n(210),v=n(29),k=n(10),p=n(27),g=n(97),m=n.n(g).a.create(Object(k.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"b00b044a-fabf-40f0-8522-d4dd85a812f0"}})),S=function(){return m.get("todo-lists")},x=function(t){return m.post("todo-lists",{title:t})},C=function(t){return m.delete("todo-lists/".concat(t))},I=function(t,e){return m.put("todo-lists/".concat(t),{title:e})},E=function(t){return m.get("todo-lists/".concat(t,"/tasks"))},y=function(t,e){return m.delete("todo-lists/".concat(t,"/tasks/").concat(e))},D=function(t,e){return m.post("todo-lists/".concat(t,"/tasks"),{title:e})},A=function(t,e,n){return m.put("todo-lists/".concat(t,"/tasks/").concat(e),n)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var L={status:"idle",error:"Some erorr"},w=function(t){return{type:"APP/SET-ERROR",error:t}},F=function(t){return{type:"APP/SET-STATUS",status:t}},P=[],R=n(11),N={},K=function(t,e,n){return function(a,i){var c=i().tasks[n].find((function(e){return e.id===t}));if(c){var o=Object(k.a)({deadline:c.deadline,description:c.description,priority:c.priority,startDate:c.startDate,title:c.title,status:c.status},e);A(n,t,o).then((function(i){var c=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(c)}))}else console.warn("task not found in the state")}},H=n(204),M=n(151),U=n(20),G=n(214),V=n(201),B=n(2),J=o.a.memo((function(t){var e=t.disabled,n=void 0!==e&&e,a=t.addItem;console.log("AddItemForm called");var i=Object(c.useState)(""),o=Object(U.a)(i,2),s=o[0],r=o[1],l=Object(c.useState)(null),d=Object(U.a)(l,2),u=d[0],b=d[1],O=function(){""!==s.trim()?(a(s),r("")):b("Title is required")};return Object(B.jsxs)("div",{children:[Object(B.jsx)(G.a,{variant:"outlined",disabled:n,error:!!u,value:s,onChange:function(t){r(t.currentTarget.value)},onKeyPress:function(t){null!==u&&b(null),13===t.charCode&&O()},label:"Title",helperText:u}),Object(B.jsx)(j.a,{color:"primary",onClick:O,disabled:n,children:Object(B.jsx)(V.a,{})})]})})),Y=n(103),q=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(c.useState)(!1),n=Object(U.a)(e,2),a=n[0],i=n[1],o=Object(c.useState)(t.value),s=Object(U.a)(o,2),r=s[0],l=s[1];return a?Object(B.jsx)(G.a,{value:r,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(r)}}):Object(B.jsx)("span",{onDoubleClick:function(){i(!0),l(t.value)},children:t.value})})),z=n(202),Q=n(217),W=o.a.memo((function(t){var e=Object(c.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(c.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(c.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(B.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(B.jsx)(Q.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(B.jsx)(q,{value:t.task.title,onChange:i}),Object(B.jsx)(j.a,{onClick:e,children:Object(B.jsx)(z.a,{})})]},t.task.id)})),X=o.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,i=Object(Y.a)(t,["demo"]);console.log("Todolist called");var o=Object(v.b)();Object(c.useEffect)((function(){var t;n&&o((t=i.todolist.id,function(e){e(F("loading")),E(t).then((function(n){e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(n.data.items,t)),e(F("succeeded"))}))}))}),[]);var s=Object(c.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),r=Object(c.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),l=Object(c.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),d=Object(c.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(c.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.Completed}))),Object(B.jsxs)("div",{children:[Object(B.jsxs)("h3",{children:[Object(B.jsx)(q,{value:i.todolist.title,onChange:r}),Object(B.jsx)(j.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus,children:Object(B.jsx)(z.a,{})})]}),Object(B.jsx)(J,{addItem:s}),Object(B.jsx)("div",{children:b.map((function(t){return Object(B.jsx)(W,{task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus},t.id)}))}),Object(B.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(B.jsx)(O.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:l,color:"default",children:"All"}),Object(B.jsx)(O.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:d,color:"primary",children:"Active"}),Object(B.jsx)(O.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:u,color:"secondary",children:"Completed"})]})]})})),Z=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(v.c)((function(t){return t.todolists})),i=Object(v.c)((function(t){return t.tasks})),o=Object(v.b)();Object(c.useEffect)((function(){if(!n){var t=function(t){t(F("loading")),S().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(F("succeeded"))}))};o(t)}}),[]);var s=Object(c.useCallback)((function(t,e){var n=function(t,e){return function(n){y(e,t).then((function(a){var i=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(i)}))}}(t,e);o(n)}),[]),r=Object(c.useCallback)((function(t,e){var n=function(t,e){return function(n){n(F("loading")),D(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(F("succeeded"))}else t.data.messages.length?n(w(t.data.messages[0])):n(w("Some error occcured")),n(F("failed"))}))}}(t,e);o(n)}),[]),l=Object(c.useCallback)((function(t,e,n){var a=K(t,{status:e},n);o(a)}),[]),d=Object(c.useCallback)((function(t,e,n){var a=K(t,{title:e},n);o(a)}),[]),u=Object(c.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};o(n)}),[]),j=Object(c.useCallback)((function(t){var e,n=(e=t,function(t){C(e).then((function(n){t({type:"REMOVE-TODOLIST",id:e})}))});o(n)}),[]),b=Object(c.useCallback)((function(t,e){var n=function(t,e){return function(n){I(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);o(n)}),[]),O=Object(c.useCallback)((function(t){var e=function(t){return function(e){e(F("loading")),x(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(F("succeeded"))}))}}(t);o(e)}),[o]);return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(H.a,{container:!0,style:{padding:"20px"},children:Object(B.jsx)(J,{addItem:O})}),Object(B.jsx)(H.a,{container:!0,spacing:3,children:a.map((function(t){var e=i[t.id];return Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(M.a,{style:{padding:"10px"},children:Object(B.jsx)(X,{todolist:t,tasks:e,removeTask:s,changeFilter:u,addTask:r,changeTaskStatus:l,removeTodolist:j,changeTaskTitle:d,changeTodolistTitle:b,demo:n})})},t.id)}))})]})},$=n(216),_=n(215),tt=c.forwardRef((function(t,e){return Object(B.jsx)(_.a,Object(k.a)({elevation:6,ref:e,variant:"filled"},t))}));function et(){var t=Object(v.c)((function(t){return t.app.error})),e=Object(v.b)(),n=function(t,n){"clickaway"!==n&&e(w(null))},a=null!==t;return Object(B.jsx)($.a,{open:a,autoHideDuration:3e3,onClose:n,children:Object(B.jsx)(tt,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})}var nt=function(t){t.demo;var e=Object(v.c)((function(t){return t.app.status}));return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(et,{}),Object(B.jsxs)(d.a,{position:"static",children:[Object(B.jsxs)(u.a,{children:[Object(B.jsx)(j.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(B.jsx)(h.a,{})}),Object(B.jsx)(b.a,{variant:"h6",children:"News"}),Object(B.jsx)(O.a,{color:"inherit",children:"Login"})]}),"loading"===e&&Object(B.jsx)(f.a,{})]}),Object(B.jsx)(T.a,{fixed:!0,children:Object(B.jsx)(Z,{})})]})},at=n(75),it=n(102),ct=Object(at.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(k.a)(Object(k.a)({},t),{},Object(R.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(k.a)(Object(k.a)({},t),{},Object(R.a)({},e.task.todoListId,[e.task].concat(Object(p.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(k.a)(Object(k.a)({},t),{},Object(R.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(k.a)(Object(k.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(k.a)(Object(k.a)({},t),{},Object(R.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(k.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(k.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(k.a)(Object(k.a)({},t),{},Object(R.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(k.a)(Object(k.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(p.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(k.a)(Object(k.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(k.a)(Object(k.a)({},t),{},{filter:e.filter,entityStatus:"idle"}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(k.a)(Object(k.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(k.a)(Object(k.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(k.a)(Object(k.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(k.a)(Object(k.a)({},t),{},{error:e.error});default:return Object(k.a)({},t)}}}),ot=Object(at.c)(ct,Object(at.a)(it.a));window.store=ot,r.a.render(Object(B.jsx)(o.a.StrictMode,{children:Object(B.jsx)(v.a,{store:ot,children:Object(B.jsx)(nt,{})})}),document.getElementById("root")),l()}},[[150,1,2]]]);
//# sourceMappingURL=main.b314997e.chunk.js.map