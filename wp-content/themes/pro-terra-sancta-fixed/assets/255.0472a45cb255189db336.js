"use strict";(self.webpackChunkpro_terra_sancta_fixed=self.webpackChunkpro_terra_sancta_fixed||[]).push([[255],{3255:function(e,t,n){n.r(t);var a=n(7294),r=n(4665),l=n.n(r);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);c=!0);}catch(e){o=!0,r=e}finally{try{c||null==n.return||n.return()}finally{if(o)throw r}}return l}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m=function(e){return e.term&&e.term[0]&&e.term[0].name?e.term[0].name:""},u=function(e,t,n,a,r,l,c,i){l(!0);var s=1===e?7:6;(function(e,t,n,a){var r=n&&"-1"!==n?"&categories=".concat(n):"",l=a&&"-1"!==a?"&post_type=".concat(a):"";return fetch("/wp-json/proterrasancta-api/v1/posts?per_page=".concat(t,"&offset=").concat(e).concat(l).concat(r,"&lang=").concat(window.language)).then((function(e){return e.json()}),(function(e){throw new TypeError(e)})).then((function(e){return e})).catch((function(e){return console.log("error: ".concat(e)),[]}))})(1===e?0:7+6*(e-2),s,n,c).then((function(n){if(n.length>0){var c=o(a);c.push.apply(c,o(n)),r(c),t(e+1),l(!1)}n.length<s&&i(!1)}))};t.default=function(e){var t=e.cardColor,n=e.cat,r=e.postType,o=c((0,a.useState)([]),2),i=o[0],s=o[1],d=c((0,a.useState)(1),2),p=d[0],f=d[1],y=c((0,a.useState)(!1),2),g=y[0],h=y[1],v=c((0,a.useState)(!0),2),E=v[0],b=v[1];return(0,a.useEffect)((function(){u(p,f,n,i,s,h,r,b)}),[]),a.createElement(a.Fragment,null,i&&i.length>0?a.createElement(a.Fragment,null,a.createElement("div",{className:"background-div",style:{backgroundImage:"url(".concat(i[0]["image-full"],")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"}},a.createElement("div",{className:"container h-100 pt-0"},a.createElement("div",{className:"row align-items-center h-100"},a.createElement("div",{className:"d-none col-4 d-md-flex",style:{minHeight:"360px"}}),a.createElement("div",{className:"col-12 col-md-8 d-flex",style:{minHeight:"360px"}},a.createElement("a",{href:i[0].link,className:"cover-text-block"},a.createElement(l(),{in:!0,duration:1500,appear:!0,onEntering:{translateY:[25,0],opacity:[0,1],duration:2e3,easing:"easeOutElastic(2, 1)"}},a.createElement("div",{className:"news-teaser-date"},i[0].date,a.createElement("span",{className:"news-teaser-tag pl-1"},m(i[0])))),a.createElement(l(),{in:!0,duration:1500,appear:!0,onEntering:{translateY:[25,0],opacity:[0,1],duration:2e3,delay:500,easing:"easeOutElastic(2, 1)"}},a.createElement("div",{className:"news-teaser-title",dangerouslySetInnerHTML:{__html:"".concat(i[0].title)}})),a.createElement("div",{className:"cover-section-text",dangerouslySetInnerHTML:{__html:"".concat(i[0].excerpt.slice(0,1e3)," (...)")}})))))),a.createElement("div",{className:"container mt-5"},a.createElement("div",{className:"row",style:{position:"relative"}},i.map((function(e,n){return 0===n?a.createElement(a.Fragment,{key:e.id}):a.createElement(l(),{key:e.id,in:!0,duration:1500,appear:!0,onEntering:{translateY:[100,0],opacity:[0,1],delay:n%6*100,easing:"easeOutElastic(2, .5)"}},a.createElement("div",{key:e.id,className:"col-12 col-sm-6 col-lg-4 news-column",style:{opacity:0}},a.createElement("div",{style:{backgroundColor:t,height:"445px"}},a.createElement("a",{href:e.link},a.createElement("img",{height:"225",width:"410",src:e["image-thumb"],alt:e["image-thumb"],loading:"lazy",style:{height:"225px",width:"100%",objectFit:"cover"}}),a.createElement("div",{className:"news-teaser-date pt-4 px-4"},e.date,a.createElement("span",{className:"news-teaser-tag ps-1"},m(e))),a.createElement("div",{className:"news-teaser-title px-4 pb-4",dangerouslySetInnerHTML:{__html:"".concat(e.title)}})))))})),E&&a.createElement("div",{className:"col-12 pt-4 pb-4 mb-2 d-flex"},a.createElement("button",{className:"btn btn-primary m-auto",style:{display:g?"none":"block"},onClick:function(){return u(p,f,n,i,s,h,r,b)}},"Mostra altri articoli")),a.createElement("div",{className:"col-12 py-4",style:{display:g?"flex":"none"}},a.createElement("div",{className:"spinner-border text-primary m-auto",role:"status"},a.createElement("span",{className:"sr-only"},"Loading...")))))):a.createElement("div",{className:"loading"}))}}}]);