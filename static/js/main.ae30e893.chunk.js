(this["webpackJsonplesson-one"]=this["webpackJsonplesson-one"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(4),l=n.n(a),j=(n(9),n(2)),r=(n(10),n(0)),i=function(e){var t=Object(s.useState)(0),n=Object(j.a)(t,2),c=n[0],a=n[1],l=Object(s.useState)(0),i=Object(j.a)(l,2),b=i[0],u=i[1],o=Object(s.useState)(0),d=Object(j.a)(o,2),O=d[0],x=d[1],h=Object(s.useState)(0),p=Object(j.a)(h,2),m=p[0],v=p[1],f=Object(s.useState)(0),_=Object(j.a)(f,2),g=_[0],w=_[1];return Object(r.jsx)("div",{className:"new-expense",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=parseFloat(c),n=parseFloat(b),s=parseFloat(O),a=parseFloat(m),l=parseFloat((t+n+s+a)/4);w(l),console.log(l)},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Marks in first Subject"}),Object(r.jsx)("input",{type:"number",value:c,min:"0",step:"0.01",onChange:function(e){a(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Marks in second subject"}),Object(r.jsx)("input",{type:"number",value:b,min:"0",step:"0.01",onChange:function(e){u(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Marks in third subject"}),Object(r.jsx)("input",{type:"number",value:O,min:"0",step:"0.01",onChange:function(e){x(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Marks in fourth subject"}),Object(r.jsx)("input",{type:"number",value:m,min:"0",step:"0.01",onChange:function(e){v(e.target.value)}})]})]}),Object(r.jsx)("h3",{children:" The student's average marks are"}),Object(r.jsxs)("h1",{className:"new-expense__number",children:[" ",g," "]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{onClick:function(){a(0),u(0),x(0),v(0)},children:"Reset"}),Object(r.jsx)("button",{type:"submit",children:"Calculate Average"})]})]})})},b=(n(12),function(e){var t=Object(s.useState)(0),n=Object(j.a)(t,2),c=n[0],a=n[1],l=Object(s.useState)(0),i=Object(j.a)(l,2),b=i[0],u=i[1],o=Object(s.useState)(0),d=Object(j.a)(o,2),O=d[0],x=d[1],h=Object(s.useState)(0),p=Object(j.a)(h,2),m=p[0],v=p[1],f=Object(r.jsx)("h3",{children:"Enter marks and press 'Scale Marks' button"});return b>0&&O>0&&(f=b>O?Object(r.jsx)("h3",{children:"The student's scaled down marks are"}):Object(r.jsx)("h3",{children:"The student's scaled up marks are"})),Object(r.jsx)("div",{className:"new-expense",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=parseInt(c),n=parseInt(b),s=parseInt(O),a=parseFloat(t/n*s).toFixed(2);v(a),console.log(a)},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Achieved Marks"}),Object(r.jsx)("input",{type:"number",value:c,min:"0",step:"1",onChange:function(e){a(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Out of"}),Object(r.jsx)("input",{type:"number",value:b,min:"0",step:"1",onChange:function(e){u(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Scale To"}),Object(r.jsx)("input",{type:"number",value:O,min:"0",step:"1",onChange:function(e){x(e.target.value)}})]})]}),f,Object(r.jsxs)("h1",{className:"new-expense__number",children:[" ",m," "]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{onClick:function(){a(0),u(0),x(0)},children:"Reset"}),Object(r.jsx)("button",{type:"submit",children:"Scale Marks"})]})]})})}),u=(n(13),function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(i,{}),Object(r.jsx)(b,{}),Object(r.jsx)("p",{className:"creation-text",children:"Made with \u2764\ufe0f by Abhishek Kaushik"})]})});l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.ae30e893.chunk.js.map