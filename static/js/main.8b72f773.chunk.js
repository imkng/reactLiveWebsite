(this.webpackJsonpawsomeapp2=this.webpackJsonpawsomeapp2||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),s=n(0),i=function(){return Object(s.jsx)("h2",{children:"Expense Tracker"})},o=n(3),u=n(8),j=n(4),l=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(j.a)(Object(j.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(j.a)(Object(j.a)({},e),{},{transactions:[t.payload].concat(Object(u.a)(e.transactions))});default:return e}},d={transactions:[]},b=Object(c.createContext)(d),O=function(e){var t=e.children,n=Object(c.useReducer)(l,d),r=Object(o.a)(n,2),a=r[0],i=r[1];return Object(s.jsx)(b.Provider,{value:{transactions:a.transactions,deleteTransaction:function(e){i({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){i({type:"ADD_TRANSACTION",payload:e})}},children:t})};function x(e){var t=e.toFixed(2).split(".");return"$ "+t[0].split("").reverse().reduce((function(e,t,n,c){return"-"===t?e:t+(!n||n%3?"":",")+e}),"")+"."+t[1]}var h=function(){var e=Object(c.useContext)(b).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{children:"Your Balance"}),Object(s.jsx)("h1",{children:x(e)})]})};function p(e){var t=e.toFixed(2).split(".");return"$ "+t[0].split("").reverse().reduce((function(e,t,n,c){return"-"===t?e:t+(!n||n%3?"":",")+e}),"")+"."+t[1]}var f=function(){var e=Object(c.useContext)(b).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return Object(s.jsxs)("div",{className:"inc-exp-container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Income"}),Object(s.jsx)("p",{className:"money plus",children:p(t)})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Expense"}),Object(s.jsx)("p",{className:"money minus",children:p(n)})]})]})},m=function(e){var t=e.transaction,n=Object(c.useContext)(b).deleteTransaction,r=t.amount<0?"-":"+";return Object(s.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text," ",Object(s.jsxs)("span",{children:[r,"$",Math.abs(t.amount)]}),Object(s.jsx)("button",{onClick:function(){return n(t.id)},className:"delete-btn"})]})},v=function(){var e=Object(c.useContext)(b).transactions;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"History"}),Object(s.jsx)("ul",{className:"list",children:e.map((function(e){return Object(s.jsx)(m,{transaction:e},e.id)}))})]})},N=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),i=Object(o.a)(a,2),u=i[0],j=i[1],l=Object(c.useContext)(b).addTransaction;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Add New Transaction"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+u};l(t)},children:[Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{htmlFor:"text",children:"Text"}),Object(s.jsx)("input",{type:"text",value:n,onChange:function(e){r(e.target.value)},placeholder:"Enter text..."})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsxs)("label",{htmlFor:"amount",children:[" Amount ",Object(s.jsx)("br",{}),"(negative - expense, positive - expense)"]}),Object(s.jsx)("input",{type:"text",value:u,onChange:function(e){j(e.target.value)},placeholder:"Enter amount.."})]}),Object(s.jsx)("button",{className:"btn",children:"Add Transaction"})]})]})};n(14);var T=function(){return Object(s.jsxs)(O,{children:[Object(s.jsx)(i,{}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(h,{}),Object(s.jsx)(f,{}),Object(s.jsx)(v,{}),Object(s.jsx)(N,{})]})]})};a.a.render(Object(s.jsx)(T,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8b72f773.chunk.js.map