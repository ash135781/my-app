(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),l=a(5),s=a.n(l),o=(a(10),a(2)),r=(a.p,a(4)),i=a.n(r),d=a(0);function b(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:e.text}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-a active","aria-current":"page",href:"#",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-a",href:"#",children:e.set})}),Object(d.jsxs)("li",{className:"nav-item dropdown",children:[Object(d.jsx)("a",{className:"nav-a dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Dropdown"}),Object(d.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"})}),Object(d.jsx)("li",{children:Object(d.jsx)("hr",{className:"dropdown-divider"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})})]})]}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-a disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})})]}),Object(d.jsxs)("div",{class:"form-check form-switch",children:[Object(d.jsx)("input",{onClick:e.toggleMode,class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault"}),Object(d.jsx)("label",{style:{color:"Enable light Mode"===e.change?"white":"black"},class:"form-check-label text-",htmlFor:"flexSwitchCheckDefault",children:e.change}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{onClick:e.toggleMode1,class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault"}),Object(d.jsx)("label",{style:{color:"Enable light Mode"===e.change1?"white":"green"},class:"form-check-label text-",htmlFor:"flexSwitchCheckDefault",children:e.change1})]}),Object(d.jsx)("input",{onClick:e.toggleMode2,class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault"}),Object(d.jsx)("label",{style:{color:"Enable light Mode"===e.change2?"white":"#4c5eb5"},class:"form-check-label text-",htmlFor:"flexSwitchCheckDefault",children:e.change2})]})]})]})})})}function h(e){var t=Object(c.useState)("enter text here"),a=Object(o.a)(t,2),n=a[0],l=a[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{style:{backgroundColor:"light"===e.mode?"white":"grey"},children:[Object(d.jsx)("h3",{style:{backgroundColor:"light"===e.mode?"grey":"white"},children:e.heading}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("textarea",{onChange:function(e){console.log("OnChange"),l(e.target.value)},style:{backgroundColor:"dark"===e.mode?"white":"grey",color:"dark"===e.mode?"grey":"white"},className:"form-control",id:"mybox",rows:"8",placeholder:n})}),Object(d.jsx)("button",{onClick:function(){var t=n.toUpperCase();l(t),e.showalert("converted to upper case","success")},className:"btn btn-primary ",children:"convert to uppercase"}),Object(d.jsx)("button",{onClick:function(){var t=n.toLowerCase();l(t),e.showalert("converted to lower case","success")},className:"btn btn-primary mx-4",children:"convert to lowercase"})]}),Object(d.jsxs)("div",{style:{backgroundColor:"light"===e.mode?"white":"grey",color:"dark"===e.mode?"white":"grey"},className:"container my-3",children:[Object(d.jsx)("h1",{children:"Your Summary"}),Object(d.jsxs)("p",{children:[n.trimEnd().split(/[ ]+/).length," words,",n.length," characters"]}),Object(d.jsxs)("p",{children:[.008*n.split(" ").length.toFixed(3)," minutes read"]}),Object(d.jsx)("h2",{children:"preview"}),Object(d.jsx)("p",{children:n.length>0?n:"kuch daal bhai"})]})]})}function j(e){return e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(d.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})}function g(){var e=Object(c.useState)("dark"),t=Object(o.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)("Enable Light Mode"),s=Object(o.a)(l,2),r=(s[0],s[1],Object(c.useState)("Enable Light Mode")),i=Object(o.a)(r,2),g=(i[0],i[1]),u=Object(c.useState)("Enable Light Mode"),m=Object(o.a)(u,2),x=(m[0],m[1]),p=Object(c.useState)(null),O=Object(o.a)(p,2),f=O[0],v=O[1],y=function(e,t){x({command:e,type:t})},k=function(e,t){x({command:e,type:t})},w=function(e,t){v({msg:e,type:t}),setTimeout((function(){v(null)}),3e3)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{change1:function(e,t){g({command:e,type:t})},change2:y,change:k,mode:a,toggleMode:function(){"light"===a?(n("dark"),k("Enable light Mode",document.body.style.backgroundColor="grey"),document.title="textUtils-DarkMode",w("dark mode has enabled","success")):(k("Enable green Mode",document.body.style.backgroundColor="white"),n("light"),document.title="textUtils-LightMode",w("light mode has enabled","success"))},toggleMode2:function(){"light"===a?(n("dark"),k("Enable light Mode",document.body.style.backgroundColor="grey"),w("dark mode has enabled","success")):(y("Enable green Mode",document.body.style.backgroundColor="#3c523c"),n("light"),w("green mode has enabled","success"))},toggleMode1:function(){"light"===a?(n("dark"),y("Enable light Mode",document.body.style.backgroundColor="grey"),w("dark mode has enabled","success")):(y("Enable Dark Mode",document.body.style.backgroundColor="#4c5eb5"),n("light"),w("blue mode has enabled","success"))}}),Object(d.jsx)(j,{alert:f}),Object(d.jsx)("div",{className:"container my-3",children:Object(d.jsx)(h,{showalert:w,mode:a})})]})}b.prototype={text:i.a.string.isRequired,set:i.a.string.isRequired},b.defaultProps={text:"Textutils",set:"About"};var u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),l(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),u()}},[[14,1,2]]]);
//# sourceMappingURL=main.13308896.chunk.js.map