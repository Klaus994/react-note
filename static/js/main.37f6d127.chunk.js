(this["webpackJsonpreact-note"]=this["webpackJsonpreact-note"]||[]).push([[0],{30:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),o=n(6),r=n.n(o),l=n(17),u=n(3);var i=function(e){var t=Object(a.useState)({backgroundColor:""}),n=Object(u.a)(t,2),o=n[0],r=n[1];function l(e){var t=e.target.value;return"black"===t?r({backgroundColor:" #212121"}):"yellow"===t?r({backgroundColor:"#ffd369"}):"pink"===t?r({backgroundColor:"#e7d9ea"}):void 0}return e.colorChange(o),Object(c.jsxs)("header",{style:o,children:[Object(c.jsx)("h1",{children:"React Note"}),Object(c.jsx)("button",{onClick:l,className:"black",value:"black"}),Object(c.jsx)("button",{onClick:l,className:"yellow",value:"yellow"}),Object(c.jsx)("button",{onClick:l,className:"pink",value:"pink"})]})};var j=function(){var e=(new Date).getFullYear();return Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{children:[" Copyright \xa9 Ion Daniel-Claudiu ",e]})})},s=n(8),b=n(10),d=n(14),O=n.n(d);var f=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(u.a)(t,2),o=n[0],r=n[1];function l(e){var t=e.target,n=t.name,c=t.value;r((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(s.a)({},n,c))}))}return Object(c.jsxs)("form",{className:"create-note",children:[Object(c.jsx)("input",{name:"title",value:o.title,onChange:l,type:"text",autoComplete:"off",placeholder:"Title"}),Object(c.jsx)("textarea",{name:"content",value:o.content,onChange:l,placeholder:"Take a note...",rows:"3"}),Object(c.jsx)("button",{style:e.fundal,onClick:function(t){e.onAdd(o),r({title:"",content:""}),t.preventDefault()},children:Object(c.jsx)(O.a,{})})]})},x=n(16),h=n.n(x);var v=function(e){return Object(c.jsxs)("div",{className:"note",children:[Object(c.jsx)("h3",{children:e.title}),Object(c.jsx)("p",{children:e.content}),Object(c.jsx)("button",{style:e.fundal,onClick:function(){e.onDelete(e.id)},children:Object(c.jsx)(h.a,{})})]})};var k=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(),s=Object(u.a)(r,2),b=s[0],d=s[1];function O(e){o((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(c.jsxs)("div",{children:[Object(c.jsx)(i,{colorChange:function(e){d(e)}}),Object(c.jsx)(f,{onAdd:function(e){o((function(t){return[].concat(Object(l.a)(t),[e])}))},fundal:b}),n.map((function(e,t){return Object(c.jsx)(v,{fundal:b,id:t,title:e.title,content:e.content,onDelete:O},t)})),Object(c.jsx)(j,{})]})};r.a.render(Object(c.jsx)(k,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.37f6d127.chunk.js.map