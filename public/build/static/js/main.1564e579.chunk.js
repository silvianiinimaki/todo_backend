(this.webpackJsonptodo_projekti=this.webpackJsonptodo_projekti||[]).push([[0],{193:function(e,t,c){},194:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c(0),s=c.n(a),i=c(18),r=c.n(i),l=c(14),o=c(79),j=c(80),d=c(34),u=c(89),h=c(88),b=(a.Component,c(210)),O=c(37),f=c.n(O),x=c(81),p=c.n(x),m=(c(109),function(e){var t=s.a.useState(""),c=Object(l.a)(t,2),a=c[0],i=c[1],r=s.a.useState(""),o=Object(l.a)(r,2),j=o[0],d=o[1],u=s.a.useState(new Date),h=Object(l.a)(u,2),O=h[0],x=h[1],m=s.a.useState(""),v=Object(l.a)(m,2),k=v[0],g=v[1],C=function(){var t={title:a,description:j,deadline:O,rating:k};""!==a&&""!==O&&""!==k?(e.handleChange(t),e.newTask(!1)):alert("Jotkin kent\xe4t ovat t\xe4ytt\xe4m\xe4tt\xe4!")},N=function(e){e.preventDefault()},y=function(){e.newTask(!1)};return Object(n.jsxs)("div",{className:"newTask",children:[Object(n.jsx)("h1",{children:"Luo uusi teht\xe4v\xe4"}),Object(n.jsxs)("form",{className:"ui form",style:{marginTop:"1%"},onSubmit:N,children:[Object(n.jsx)("div",{className:"field",children:Object(n.jsx)("input",{style:{width:"20%"},type:"text",name:"title",placeholder:"Otsikko",onChange:function(e){return i(e.target.value)}})}),Object(n.jsx)("div",{className:"field",children:Object(n.jsx)("input",{style:{width:"20%"},type:"text",name:"description",placeholder:"Kuvaus",onChange:function(e){return d(e.target.value)}})}),Object(n.jsx)("div",{children:Object(n.jsx)(p.a,{placeholderText:"Select deadline",selected:O,isClearable:!0,onChange:function(e){return x(e)},showTimeSelect:!0,closeOnScroll:function(e){return e.target===document},dateFormat:"yyyy-MM-dd"})}),Object(n.jsx)("div",{className:"field",children:Object(n.jsx)(f.a,{count:5,size:24,edit:!0,isHalf:!1,emptyIcon:Object(n.jsx)("i",{className:"far fa-star"}),fullIcon:Object(n.jsx)("i",{className:"fa fa-star"}),activeColor:"#ffd700",onChange:function(e){return g(e)}})}),Object(n.jsxs)("div",{className:"field",children:[Object(n.jsx)(b.a,{onClick:C,children:"Lis\xe4\xe4 listaan"}),Object(n.jsx)(b.a,{onClick:y,children:"Peruuta"})]})]})]})}),v=c(85),k=c.n(v),g=c(174),C=function(){var e=s.a.useState(""),t=Object(l.a)(e,2),c=t[0],i=t[1],r=s.a.useState(!1),o=Object(l.a)(r,2),j=o[0],d=o[1],u=s.a.useState([]),h=Object(l.a)(u,2),O=h[0],x=h[1];Object(a.useEffect)((function(){g.get("https://tamk-4a00ez62-3002-group20.herokuapp.com/api").then((function(e){x(e.data)})).catch((function(e){return console.log(e)}))}),[]);var p=function(e){return k()(e).format("DD/MM/YYYY")};var v=function(){d(!0)};return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{classname:"header",children:Object(n.jsx)("h1",{children:"ToDo-App"})}),Object(n.jsx)("div",{style:{textAlign:"center",marginTop:"5%"},children:j?Object(n.jsx)(m,{value:c,newTask:function(e){d(e)},handleChange:function(e){i(e),g.post("https://tamk-4a00ez62-3002-group20.herokuapp.com/user/1",{value:c}).then((function(e){return console.log(e)})),x(O.concat(e))}}):Object(n.jsx)(b.a,{class:"button",onClick:v,children:"Luo uusi teht\xe4v\xe4"})}),Object(n.jsx)("div",{className:"uiItems",children:Object.values(O).map((function(e){return Object(n.jsx)("div",{className:"item",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("div",{className:"header",children:e.title}),Object(n.jsx)("div",{className:"checked",children:Object(n.jsx)("label",{children:Object(n.jsx)("input",{type:"checkbox",checked:e.checked,onChange:function(e){return e.checked=!e.checked}})})}),Object(n.jsxs)("div",{className:"extra",children:["Deadline: ",p(e.deadline_date),Object(n.jsx)("br",{}),"T\xe4rkeys:"," ",Object(n.jsx)(f.a,{count:5,value:e.rating,size:24,edit:!1,isHalf:!1,emptyIcon:Object(n.jsx)("i",{className:"far fa-star"}),fullIcon:Object(n.jsx)("i",{className:"fa fa-star"}),activeColor:"#ffd700"})]}),Object(n.jsx)("div",{className:"description",children:Object(n.jsx)("p",{children:e.description})})]})})}))})]})},N=c(86),y=c(10);c(78);var T=function(){return Object(n.jsx)(N.a,{children:Object(n.jsxs)(y.c,{children:[Object(n.jsx)(y.a,{path:"/",children:Object(n.jsx)(C,{})}),Object(n.jsx)(y.a,{path:"/addTask",children:Object(n.jsx)(m,{})}),Object(n.jsx)(y.a,{path:"/editTask"})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,211)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};c(193);r.a.render(Object(n.jsx)(T,{}),document.getElementById("root")),S()}},[[194,1,2]]]);
//# sourceMappingURL=main.1564e579.chunk.js.map