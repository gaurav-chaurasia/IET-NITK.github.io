(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{UPWR:function(e,t,a){"use strict";var n=a("KQm4"),l=a("q1tI"),i=a.n(l),s=a("97+O");function r(){0!==document.body.scrollTop?document.body.scrollTop=0:document.documentElement.scrollTop=0}t.a=function(e){var t=e.max,a=e.list,c=e.item,o=e.noneMessage,m=e.filterBy,u=e.filterLabel,p=Object(l.useState)({pno:1,list_state:a,filterType:null,filterCategories:Object(n.a)(new Set(a.map((function(e){return e[m]}))))}),g=p[0],b=p[1];return g.list_state&&0===g.list_state.length?i.a.createElement("div",{className:"text-center"},o):i.a.createElement(i.a.Fragment,null,m&&g.list_state?i.a.createElement(s.a,null,i.a.createElement(s.a.Toggle,{className:"mr-4",variant:"outline-primary",id:"dropdown-"+m,size:"sm"},g.filterType?g.filterType:u),i.a.createElement(s.a.Menu,null,g.filterCategories&&g.filterCategories.map((function(e,t){return i.a.createElement(s.a.Item,{name:e,key:t,onClick:function(e){return b(Object.assign({},g,{list_state:a.filter((function(t){return t[m]===e.target.name})),filterType:e.target.name}))}},e)})),g.filterType?i.a.createElement(s.a.Item,{onClick:function(e){b(Object.assign({},g,{list_state:a,filterType:null}))}},"Clear Filters"):null),g.list_state.length," Items",i.a.createElement("hr",null)):null,1!==g.pno?i.a.createElement(i.a.Fragment,null,i.a.createElement("h6",{className:"text-primary"},"Page ",g.pno),i.a.createElement("hr",null),i.a.createElement("br",null)):null,g.list_state&&g.list_state.slice((g.pno-1)*t,(g.pno-1)*t+t).map(c),i.a.createElement("nav",{"aria-label":"Page navigation example"},i.a.createElement("ul",{className:"pagination justify-content-center"},i.a.createElement("li",{className:"page-item "+(1===g.pno?"disabled":"")},i.a.createElement("button",{className:"page-link",onClick:function(){r(),b(Object.assign({},g,{pno:g.pno-1}))}},"Previous")),g.list_state&&Object(n.a)(Array(Math.ceil(g.list_state.length/t))).map((function(e,t){return i.a.createElement("li",{className:"page-item "+(g.pno===t+1?"active":""),key:t},i.a.createElement("button",{className:"page-link","data-toggle":"tooltip",title:"Page "+(t+1),onClick:function(){r(),b(Object.assign({},g,{pno:t+1}))}},t+1))})),i.a.createElement("li",{className:"page-item "+(g.list_state&&g.pno===Math.ceil(g.list_state.length/t)?"disabled":"")},i.a.createElement("button",{className:"page-link",onClick:function(){r(),b(Object.assign({},g,{pno:g.pno+1}))}},"Next")))))}},oBRg:function(e,t,a){"use strict";a.r(t);var n=a("Wbzz"),l=a("q1tI"),i=a.n(l),s=a("oxxs"),r=a("Bl7J"),c=a("UPWR"),o=a("vrFN");t.default=function(e){var t=e.data,a=e.location;return Object(l.useEffect)((function(){!0!==t.site_data.siteMetadata.expo.allow&&Object(n.d)("/")})),i.a.createElement(r.a,{location:a.pathname,title:"Main"},i.a.createElement(o.a,{title:"Expo 2021"}),i.a.createElement("main",{className:"page blog-post-list"},i.a.createElement("section",{className:"clean-block clean-blog-list dark"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"block-heading"},i.a.createElement("h2",{className:"text-primary"},"IET NITK @ Expo 2021"),i.a.createElement("p",null,"Expo '21 is a club-wide project showcase showing the best of the products made by NITK. Here's some of ours.")),i.a.createElement("div",{className:"block-content"},i.a.createElement(c.a,{max:10,list:t.projects.nodes,filterBy:"sig",filterLabel:"Filter by SIG",item:function(e,t){return i.a.createElement("div",{key:t,className:"clean-blog-post"},i.a.createElement("h3",{className:"text-capitalize"},e.title),i.a.createElement("div",{className:"info"},i.a.createElement("span",{className:"text-muted"},i.a.createElement(n.a,{to:"/sigs/"+e.sig.toLowerCase()},e.sig))),e.description||"",e.builtBy?i.a.createElement("p",null,"Built by",Object(s.a)(e.builtBy||[],"")):null,e.url?i.a.createElement(n.a,{to:"/projects/"+e.title.toLowerCase().split(" ").join(""),className:"btn btn-outline-primary btn-sm",type:"button"},"Read More"):null)}}))))))}},oxxs:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return r}));var n=a("Wbzz"),l=a("q1tI"),i=a.n(l),s=function(e){var t={};return e&&e.forEach((function(e){t[e.name]=e.childImageSharp.fixed.srcWebp})),t},r=function(e,t){return e.map((function(t,a){return i.a.createElement(i.a.Fragment,null," ",i.a.createElement(n.a,{key:"x"+a,to:"/members/"+t.toLowerCase().split(" ").join("")},t),a+2===e.length?" and":a+1!==e.length?",":"")}))}}}]);
//# sourceMappingURL=component---src-pages-expo-js-318ea86785c1b4bb022d.js.map