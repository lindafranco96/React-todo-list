(this.webpackJsonptodo_list_app=this.webpackJsonptodo_list_app||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),o=n(18),r=n.n(o),i=(n(28),n(3)),l=(n(29),function(e){var t=e.setStatus;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{className:"header__title",children:"To-Do List"}),Object(c.jsx)("div",{className:"header__select",children:Object(c.jsxs)("select",{onChange:function(e){t(e.target.value)},name:"todos",id:"",className:"header__select-options",children:[Object(c.jsx)("option",{value:"all",className:"header__select-option",children:"All"}),Object(c.jsx)("option",{value:"completed",className:"header__select-option",children:"Completed"}),Object(c.jsx)("option",{value:"uncompleted",className:"header__select-option",children:"Uncompleted"})]})})]})}),u=n(22),d=n(4),j=n(39),b=n(7),m=n(6),f=n(5);function p(){var e=Object(d.a)(["\n    display:none;\n    &:checked + label{\n        border: 4px solid rgba(219, 57, 57, 0.25);\n    }\n"]);return p=function(){return e},e}function O(){var e=Object(d.a)(["\n    display:inline-block;\n    width:40px;\n    height:40px;\n    margin-top:.5rem;\n    background-color: ",";\n    border-radius: 5px;\n"]);return O=function(){return e},e}var h=f.a.label(O(),(function(e){return e.color})),k=f.a.input(p()),x=function(e){var t=e.color,n=e.handleChangeColor,a=e.isChecked;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{defaultChecked:a,id:t,type:"radio",name:"color",onChange:function(){return n(t)}}),Object(c.jsx)(h,{htmlFor:t,color:t})]})},_={colors:["#C4C4C4","#FC6C6C","#CD8DE3","#9BADEA"]};function g(){var e=Object(d.a)(["\n        width: 200px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: 0 auto .5rem;\n"]);return g=function(){return e},e}var v=f.a.div(g()),N=function(e){var t=e.tasks,n=e.changeTasks,s=e.colorSelected,o=e.setColorSelected,r=Object(a.useState)(""),l=Object(i.a)(r,2),d=l[0],f=l[1],p=function(e){o(e)};return Object(c.jsxs)("form",{action:"",className:"taskform",onSubmit:function(e){e.preventDefault(),""!==d&&(n([].concat(Object(u.a)(t),[{id:Object(j.a)(),text:d,completed:!1,color:s}])),f(""))},children:[Object(c.jsx)("input",{type:"text",className:"taskform__input",placeholder:"Enter Task",value:d,onChange:function(e){return function(e){f(e.target.value)}(e)}}),Object(c.jsx)(v,{children:_.colors.map((function(e){return Object(c.jsx)(x,{handleChangeColor:p,color:e,isChecked:s===e},Object(j.a)())}))}),Object(c.jsx)("div",{className:"taskform__submit",children:Object(c.jsx)("button",{type:"submit",className:"taskform__submit-button",children:Object(c.jsx)(b.a,{icon:m.d,className:"taskform__submit-button-icon"})})})]})},C=n(10);function S(){var e=Object(d.a)(["\n    padding: 20px;\n    margin: 0 20px 10px 20px;\n    font-size: 20px;\n    color: #4B4B4B;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    background-color: ",";\n    border-radius: 5px;\n"]);return S=function(){return e},e}var y=f.a.div(S(),(function(e){return e.color})),T=function(e){var t=e.task,n=e.toggleCompleted,s=e.editTask,o=e.deleteTask,r=e.color,l=Object(a.useState)(!1),u=Object(i.a)(l,2),d=u[0],j=u[1],f=Object(a.useState)(t.text),p=Object(i.a)(f,2),O=p[0],h=p[1];return Object(c.jsxs)(y,{color:r,className:"tasklist__task",children:[Object(c.jsx)(b.a,{icon:t.completed?m.a:m.b,className:"tasklist__icon tasklist__icon-check",onClick:function(){return n(t.id)}}),Object(c.jsx)("div",{className:"tasklist__text",children:d?Object(c.jsxs)("form",{action:"",className:"form-edit-task",onSubmit:function(e){e.preventDefault(),s(t.id,O),j(!1)},children:[Object(c.jsx)("input",{type:"text",className:"form-edit-task__input",value:O,onChange:function(e){return h(e.target.value)}}),Object(c.jsx)("button",{type:"submit",className:"form-edit-task__btn",children:"Update"})]}):t.text}),Object(c.jsxs)("div",{className:"tasklist__container-buttons",children:[Object(c.jsx)(b.a,{icon:m.c,className:"tasklist__icon tasklist__icon-action",onClick:function(){return j(!d)}}),Object(c.jsx)(b.a,{icon:m.e,className:"tasklist__icon tasklist__icon-action",onClick:function(){return o(t.id)}})]})]})},E=function(e){var t=e.tasks,n=e.changeTasks,a=e.filteredTodos,s=function(e){n(t.map((function(t){return t.id===e?Object(C.a)(Object(C.a)({},t),{},{completed:!t.completed}):t})))},o=function(e,c){n(t.map((function(t){return t.id===e?Object(C.a)(Object(C.a)({},t),{},{text:c}):t})))},r=function(e){n(t.filter((function(t){if(t.id!==e)return t})))};return Object(c.jsx)("ul",{className:"tasklist",children:a.length>0?a.map((function(e){return Object(c.jsx)(T,{task:e,toggleCompleted:s,editTask:o,deleteTask:r,color:e.color},e.id)})):Object(c.jsx)("div",{className:"tasklist__message",children:"~ No Tasks Added ~"})})};var w=function(){var e=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[],t=Object(a.useState)(e),n=Object(i.a)(t,2),s=n[0],o=n[1],r=Object(a.useState)("all"),u=Object(i.a)(r,2),d=u[0],j=u[1],b=Object(a.useState)([]),m=Object(i.a)(b,2),f=m[0],p=m[1],O=Object(a.useState)(_.colors[0]),h=Object(i.a)(O,2),k=h[0],x=h[1];return Object(a.useEffect)((function(){!function(){switch(d){case"completed":p(s.filter((function(e){return!0===e.completed})));break;case"uncompleted":p(s.filter((function(e){return!1===e.completed})));break;default:p(s)}}()}),[s,d]),Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(s))}),[s,d]),Object(a.useEffect)((function(){localStorage.setItem("completed",JSON.stringify(f))}),[f]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(l,{setStatus:j}),Object(c.jsx)(N,{tasks:s,changeTasks:o,colorSelected:k,setColorSelected:x}),Object(c.jsx)(E,{tasks:s,changeTasks:o,filteredTodos:f})]})};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.2e122794.chunk.js.map