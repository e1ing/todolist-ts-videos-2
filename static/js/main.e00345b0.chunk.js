(this["webpackJsonpit-incubator-todolist-ts-videos-2"]=this["webpackJsonpit-incubator-todolist-ts-videos-2"]||[]).push([[0],{65:function(t,e,i){},66:function(t,e,i){},73:function(t,e,i){"use strict";i.r(e);var n=i(0),c=i(9),a=i.n(c),r=(i(65),i(30)),l=i(20),o=i(23),d=i(16),s=(i(66),i(115)),j=i(106),u=i(107),b=i(6);function O(t){var e=Object(n.useState)(""),i=Object(d.a)(e,2),c=i[0],a=i[1],r=Object(n.useState)(null),l=Object(d.a)(r,2),o=l[0],O=l[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(s.a,{error:!!o,value:c,variant:"outlined",helperText:o,label:"type value",onChange:function(t){a(t.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&(""!==c.trim()?(t.addItem(c.trim()),a("")):O("Title is required"))}}),Object(b.jsx)(j.a,{color:"primary",onClick:function(){""!==c.trim()?(t.addItem(c.trim()),a("")):O("Title is required")},children:Object(b.jsx)(u.a,{})})]})}function f(t){var e=Object(n.useState)(!1),i=Object(d.a)(e,2),c=i[0],a=i[1],r=Object(n.useState)(""),l=Object(d.a)(r,2),o=l[0],j=l[1];return c?Object(b.jsx)(s.a,{value:o,onChange:function(t){return j(t.currentTarget.value)},onBlur:function(){a(!1),t.onChange(o)},autoFocus:!0}):Object(b.jsx)("span",{onDoubleClick:function(){a(!0),j(t.title)},children:t.title})}var h=i(117),x=i(109),v=i(108);function g(t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:[Object(b.jsx)(f,{title:t.title,onChange:function(e){t.changeTodolistTitle(t.id,e)}}),Object(b.jsx)(j.a,{onClick:function(){t.removeTodolist(t.id)},children:Object(b.jsx)(v.a,{})}),Object(b.jsx)(O,{addItem:function(e){t.addTask(e,t.id)}})]}),Object(b.jsx)("div",{children:t.tasks.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h.a,{checked:e.isDone,onChange:function(i){t.changeTaskStatus(e.id,i.currentTarget.checked,t.id)}}),Object(b.jsx)(f,{title:e.title,onChange:function(i){t.changeTaskTitle(e.id,i,t.id)}}),Object(b.jsx)(j.a,{onClick:function(){t.removeTask(e.id,t.id)},children:Object(b.jsx)(v.a,{})})]})}))}),Object(b.jsxs)("div",{children:[Object(b.jsx)(x.a,{variant:"all"===t.filter?"contained":"text",onClick:function(){return t.changeFilter("all",t.id)},children:"All"}),Object(b.jsx)(x.a,{color:"primary",variant:"active"===t.filter?"contained":"text",onClick:function(){return t.changeFilter("active",t.id)},children:"Active"}),Object(b.jsx)(x.a,{color:"secondary",variant:"completed"===t.filter?"contained":"text",onClick:function(){return t.changeFilter("completed",t.id)},children:"Completed"})]})]})}var m=i(116),T=i(110),p=i(111),k=i(118),C=i(112),D=i(113),S=i(114),y=i(74);var F=function(){var t,e=Object(m.a)(),i=Object(m.a)(),c=Object(n.useState)([{id:e,title:"What to learn",filter:"all"},{id:i,title:"What to buy",filter:"all"}]),a=Object(d.a)(c,2),s=a[0],u=a[1],f=Object(n.useState)((t={},Object(o.a)(t,e,[{id:Object(m.a)(),title:"CSS",isDone:!0},{id:Object(m.a)(),title:"HTML",isDone:!0},{id:Object(m.a)(),title:"React",isDone:!1},{id:Object(m.a)(),title:"Redux",isDone:!1}]),Object(o.a)(t,i,[{id:Object(m.a)(),title:"Milk",isDone:!0},{id:Object(m.a)(),title:"Orange",isDone:!1},{id:Object(m.a)(),title:"Cheese",isDone:!0}]),t)),h=Object(d.a)(f,2),v=h[0],F=h[1];function I(t,e){var i=v[e].filter((function(e){return e.id!==t}));v[e]=i,F(Object(l.a)({},v))}function L(t,e){var i={id:Object(m.a)(),title:t,isDone:!1},n=v[e],c=[i].concat(Object(r.a)(n));v[e]=c,F(Object(l.a)({},v))}function w(t,e,i){var n=v[i].find((function(e){return e.id===t}));n&&(n.isDone=e),F(Object(l.a)({},v))}function A(t,e){var i=s.find((function(t){return t.id===e}));i&&(i.filter=t,u(Object(r.a)(s)))}var B=function(t){var e=s.filter((function(e){return e.id!==t}));u(e),delete v[t],F(Object(l.a)({},v))};function P(t,e,i){var n=v[i].find((function(e){return e.id===t}));n&&(n.title=e),F(Object(l.a)({},v))}function q(t,e){var i=s.find((function(e){return e.id===t}));i&&(i.title=e,u(Object(r.a)(s)))}return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(T.a,{position:"static",children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(j.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(b.jsx)(k.a,{})}),Object(b.jsx)(C.a,{variant:"h6",children:"News"}),Object(b.jsx)(x.a,{color:"inherit",children:"Login"})]})}),Object(b.jsxs)(D.a,{fixed:!0,children:[Object(b.jsx)(S.a,{container:!0,style:{padding:"20px"},children:Object(b.jsx)(O,{addItem:function(t){var e=Object(m.a)();u([{id:e,title:t,filter:"all"}].concat(Object(r.a)(s))),F(Object(l.a)(Object(l.a)({},v),{},Object(o.a)({},e,[])))}})}),Object(b.jsx)(S.a,{container:!0,spacing:3,children:s.map((function(t){var e=v[t.id];return"completed"===t.filter&&(e=e.filter((function(t){return!0===t.isDone}))),"active"===t.filter&&(e=e.filter((function(t){return!1===t.isDone}))),Object(b.jsx)(S.a,{item:!0,children:Object(b.jsx)(y.a,{style:{padding:"10px"},children:Object(b.jsx)(g,{id:t.id,title:t.title,tasks:e,removeTask:I,changeFilter:A,addTask:L,changeTaskStatus:w,filter:t.filter,removeTodolist:B,changeTaskTitle:P,changeTodolistTitle:q},t.id)})})}))})]})]})},I=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,120)).then((function(e){var i=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;i(t),n(t),c(t),a(t),r(t)}))};a.a.render(Object(b.jsx)(F,{}),document.getElementById("root")),I()}},[[73,1,2]]]);
//# sourceMappingURL=main.e00345b0.chunk.js.map