(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Nb6o:function(e,a,t){"use strict";t.r(a),t.d(a,"Author",(function(){return d}));var l=t("q1tI"),n=t.n(l),r=t("Bl7J"),c=t("vrFN"),m=t("Wbzz"),s=t("oxxs"),o=function(e){e.articles;var a=e.element,t=e.index;return n.a.createElement("div",{key:t,className:"clean-blog-post",style:{paddingBottom:"35px"}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("h3",null,n.a.createElement(m.a,{className:"btn-link",to:"/blog/"+a.childMarkdownRemark.frontmatter.title.toLowerCase().split(" ").join("")},a.childMarkdownRemark.frontmatter.title)),n.a.createElement("div",{className:"info"},n.a.createElement("span",{className:"text-muted"},"By",Object(s.a)(a.childMarkdownRemark.frontmatter.authors,""),n.a.createElement("br",null),a.birthTime)),n.a.createElement("p",null," ",a.childMarkdownRemark.excerpt," "))))},i=function(e){var a=e.title,t=(e.SIG,e.description),l=e.builtBy,r=(e.ongoing,e.year),c=e.label,o=e.sig,i=e.url;return n.a.createElement("div",{className:"clean-blog-post",style:{paddingBottom:"35px"}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("h3",null,i?n.a.createElement(m.a,{to:"/projects/"+a.toLowerCase().split(" ").join("")},a," ",r?"("+r+")":null):n.a.createElement(n.a.Fragment,null,a," ",r?"("+r+")":null)),c?n.a.createElement("div",{className:"badge badge-primary mr-2"},c):null,o?n.a.createElement(m.a,{to:"/sigs/"+o.toLowerCase(),className:"badge badge-info text-uppercase"},o):null,n.a.createElement("div",{className:"info"},n.a.createElement("span",{className:"text-muted"},"By",Object(s.a)(l,""))),n.a.createElement("p",null," ",t," "))))},d=function(e){var a=e.data,t=e.location,l=a.member_details,m=a.member_projects,s=a.member_articles,d=a.member_reports;return n.a.createElement(r.a,{location:t.pathname},n.a.createElement(c.a,{title:"About "+l.name}),n.a.createElement("main",{className:"page blog-post-list"},n.a.createElement("section",{className:"clean-block clean-blog-list dark"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"block-content"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-12"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"text-center mt-4"},n.a.createElement("h5",{className:"text-primary"},l.name),n.a.createElement("h6",null,l.position),n.a.createElement("p",null,l.social&&l.social.email?n.a.createElement("a",{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"mailto:"+l.social.email}," ",n.a.createElement("i",{className:"fa fa-envelope"})):null,l.social&&l.social.facebook?n.a.createElement("a",{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"www.facebook.com/"+l.social.facebook}," ",n.a.createElement("i",{className:"fa fa-facebook"})):null,l.social&&l.social.linkedin?n.a.createElement("a",{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"www.linkedin.com/in/"+l.social.linkedin}," ",n.a.createElement("i",{className:"fa fa-linkedin"})):null,l.social&&l.social.github?n.a.createElement("a",{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"www.github.com/"+l.social.github}," ",n.a.createElement("i",{className:"fa fa-github"})):null))))),n.a.createElement("div",{className:"col-lg-9 col-md-9 col-sm-12"},n.a.createElement("div",{className:"card clean-blog-post mb-3",style:{paddingBottom:"10px"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"card-title"},n.a.createElement("h4",null,"Projects")),m.nodes.map((function(e,a){return n.a.createElement(i,e)})))),n.a.createElement("div",{className:"card clean-blog-post mb-3",style:{paddingBottom:"10px"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"card-title"},n.a.createElement("h4",null,"Blog Articles")),s.nodes.map((function(e,a){return n.a.createElement(o,{element:e,index:a})})))),n.a.createElement("div",{className:"card clean-blog-post mb-3",style:{paddingBottom:"10px"}},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"card-title"},n.a.createElement("h4",null,"Project Reports")),d.nodes.map((function(e,a){return n.a.createElement(o,{element:e,index:a})})))))))))))};a.default=d},oxxs:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return m}));var l=t("Wbzz"),n=t("q1tI"),r=t.n(n),c=function(e){var a={};return e&&e.forEach((function(e){a[e.name]=e.childImageSharp.fixed.srcWebp})),a},m=function(e,a){return e.map((function(a,t){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(l.a,{key:"x"+t,to:"/members/"+a.toLowerCase().split(" ").join("")},a),t+2===e.length?" and":t+1!==e.length?",":"")}))}}}]);
//# sourceMappingURL=component---src-templates-author-page-js-ec2ebdc8f80327360e12.js.map