(this["webpackJsonpreact-typescript-nasa-api"]=this["webpackJsonpreact-typescript-nasa-api"]||[]).push([[0],{31:function(n,t,e){},43:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),a=e.n(i),c=e(22),o=e.n(c),s=(e(31),e(9)),u=e(4),d=e(2),l=e(3);function j(){var n=Object(d.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return j=function(){return n},n}function b(){var n=Object(d.a)(["\n  display: flex;\n  font-size: large;\n  font-weight: 400;\n  align-items: center;\n  justify-content: flex-end;\n"]);return b=function(){return n},n}function f(){var n=Object(d.a)(["\n  font-size: x-large;\n  font-variant: all-small-caps;\n  font-weight: 500;\n  color: #303846;\n\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return f=function(){return n},n}function p(){var n=Object(d.a)(["\n  height: 48px;\n  margin: 1%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n  align-items: center;\n  border: #303846 2px solid;\n  border-radius: 4px;\n  padding: 0.4%;\n  color: #303846;\n"]);return p=function(){return n},n}var h=l.a.div(p()),x=Object(l.a)(s.b)(f()),O=l.a.div(b()),g=Object(l.a)(s.b)(j()),m=function(){return Object(r.jsxs)(h,{children:[Object(r.jsx)(x,{to:"/",children:"Nasa API"}),Object(r.jsxs)(O,{children:[Object(r.jsx)(g,{to:"/apod",children:"APOD"}),Object(r.jsx)(g,{to:"/hubble",children:"Hubble Space Telescope"})]})]})};function v(){var n=Object(d.a)(["\n  margin: 1%;\n"]);return v=function(){return n},n}var y=l.a.div(v()),w=function(n){var t=n.children;return Object(r.jsx)(y,{children:t})};function k(){var n=Object(d.a)(["\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n"]);return k=function(){return n},n}function _(){var n=Object(d.a)(["\n  border: none;\n  height: 440px;\n  padding-left: inherit;\n"]);return _=function(){return n},n}function z(){var n=Object(d.a)(["\n  padding-left: inherit;\n  width: 700px;\n  height: 440px;\n"]);return z=function(){return n},n}function S(){var n=Object(d.a)(["\n  padding-right: inherit;\n  padding-left: inherit;\n  display: flex;\n"]);return S=function(){return n},n}function E(){var n=Object(d.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1140px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: 100%;\n"]);return E=function(){return n},n}var F=l.a.div(E()),A=l.a.div(S()),P=l.a.img(z()),T=l.a.iframe(_()),I=l.a.div(k()),L=function(n){var t=n.data,e=t.copyright,i=t.date,a=t.explanation,c=t.url,o=t.hdurl,s=t.media_type,u=t.title;return Object(r.jsxs)(F,{children:[Object(r.jsx)("h1",{children:u}),Object(r.jsx)("p",{children:i}),Object(r.jsx)("h4",{children:"Explanation : "}),Object(r.jsxs)(A,{children:[Object(r.jsx)("p",{children:a}),"video"===s?Object(r.jsx)(T,{src:"".concat(c),title:"video",allowFullScreen:!0}):Object(r.jsx)(P,{alt:"img",src:"".concat(o)})]}),Object(r.jsx)(I,{children:e})]})};function N(){var n=Object(d.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return N=function(){return n},n}function B(){var n=Object(d.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return B=function(){return n},n}var C=l.a.div(B()),D=l.a.div(N()),J=function(){return Object(r.jsx)(C,{children:Object(r.jsx)(D,{})})},Z=e(10),q=e.n(Z),H=e(13),M=e(11),Q=function(){var n=function(){var n=Object(i.useState)({copyright:"",date:"",explanation:"",url:"",hdurl:"",media_type:"",title:""}),t=Object(M.a)(n,2),e=t[0],r=t[1],a=Object(i.useState)(!0),c=Object(M.a)(a,2),o=c[0],s=c[1];return Object(i.useEffect)((function(){!function(){var n=Object(H.a)(q.a.mark((function n(){var t,e,i,a,c,o,u,d,l;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=2m7fwrtUFQiYaZEy2hldxm29bBlAIswXrEjZ2k6E&hd=true");case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,i=e.copyright,a=e.date,c=e.explanation,o=e.url,u=e.hdurl,d=e.media_type,l=e.title,r({copyright:i,date:a,explanation:c,url:o,hdurl:u,media_type:d,title:l}),s(!1);case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[]),{data:e,isLoading:o}}(),t=n.data,e=n.isLoading;return Object(r.jsx)(w,{children:e?Object(r.jsx)(J,{}):Object(r.jsx)(L,{data:t})})};function U(){var n=Object(d.a)(["\n  cursor: pointer;\n  margin-left: 50%;\n  text-align: center;\n  background-color: white;\n  width: 8%;\n  border: 2px solid #303846;\n  border-radius: 4px;\n  padding: 2px;\n  transition: color 0.4s cubic-bezier(0.08, 0.52, 0.52, 1),\n    background 0.4s cubic-bezier(0.08, 0.52, 0.52, 1),\n    border-color 0.4s cubic-bezier(0.08, 0.52, 0.52, 1);\n\n  &:hover {\n    background-color: #303846;\n    color: white;\n  }\n"]);return U=function(){return n},n}var X=l.a.div(U()),Y=function(){return Object(r.jsx)(X,{onClick:function(){return window.scroll(0,0)},children:"Back To Top"})};function G(){var n=Object(d.a)(["\n  width: 100%;\n\n  &:hover {\n    opacity: 0.7;\n    cursor: pointer;\n  }\n"]);return G=function(){return n},n}function K(){var n=Object(d.a)(["\n  .grid {\n    display: inline-block;\n    margin-bottom: 4px;\n    position: relative;\n  }\n"]);return K=function(){return n},n}function R(){var n=Object(d.a)(["\n  columns: 5;\n  column-gap: 4px;\n  @media (max-width: 1200px) {\n    columns: 4;\n  }\n  @media (max-width: 992px) {\n    columns: 3;\n  }\n  @media (max-width: 768px) {\n    columns: 2;\n  }\n"]);return R=function(){return n},n}var V=l.a.div(R()),W=l.a.div(K()),$=l.a.img(G()),nn=function(n){var t=n.data;return Object(r.jsx)(V,{children:t.collection.items.map((function(n){return n.links.map((function(t){return Object(r.jsx)(W,{children:Object(r.jsx)(s.b,{to:{pathname:"/exp",state:{data:n.data,links:n.href}},children:Object(r.jsx)($,{src:"".concat(t.href),alt:"img"})})},n.href)}))}))})},tn=function(){var n=function(){var n=Object(i.useState)({collection:{items:[{href:"",data:[{media_type:"",keywords:[""],date_created:"",description:"",nasa_id:"",center:"",title:"",description_508:"",secondary_creator:""}],links:[{href:"",render:"",rel:""}]}]}}),t=Object(M.a)(n,2),e=t[0],r=t[1],a=Object(i.useState)(!0),c=Object(M.a)(a,2),o=c[0],s=c[1];return Object(i.useEffect)((function(){!function(){var n=Object(H.a)(q.a.mark((function n(){var t,e;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://images-api.nasa.gov/search?q=hubble&page=1&media_type=image&year_start=1920&year_end=2020");case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,r(e),s(!1);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[]),{data:e,isLoading:o}}(),t=n.data,e=n.isLoading;return Object(r.jsx)(w,{children:e?Object(r.jsx)(J,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(nn,{data:t}),Object(r.jsx)(Y,{})]})})};function en(){var n=Object(d.a)(["\n  background-color: transparent;\n  border: 1px solid #09d3ac;\n  border-radius: 0.4rem;\n  cursor: pointer;\n  font-weight: 700;\n  color: #09d3ac;\n  line-height: 1.5;\n  padding: 0.375rem 1.5rem;\n  text-align: center;\n  transition: color 0.4s cubic-bezier(0.08, 0.52, 0.52, 1),\n    background 0.4s cubic-bezier(0.08, 0.52, 0.52, 1),\n    border-color 0.4s cubic-bezier(0.08, 0.52, 0.52, 1);\n\n  &:hover {\n    background-color: #09d3ac;\n    color: #fff;\n  }\n"]);return en=function(){return n},n}function rn(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return rn=function(){return n},n}function an(){var n=Object(d.a)(["\n  font-size: 1rem;\n"]);return an=function(){return n},n}function cn(){var n=Object(d.a)(["\n  font-size: 1.5rem;\n"]);return cn=function(){return n},n}function on(){var n=Object(d.a)(["\n  font-size: 3rem;\n"]);return on=function(){return n},n}function sn(){var n=Object(d.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1140px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: 100%;\n"]);return sn=function(){return n},n}function un(){var n=Object(d.a)(["\n  padding: 2.5rem 0;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n  background-color: #303846;\n  color: #fff;\n  border-radius: 4px;\n"]);return un=function(){return n},n}var dn=l.a.div(un()),ln=l.a.div(sn()),jn=l.a.h1(on()),bn=l.a.div(cn()),fn=l.a.p(an()),pn=l.a.div(rn()),hn=Object(l.a)(s.b)(en()),xn=function(){return Object(r.jsx)(w,{children:Object(r.jsx)(dn,{children:Object(r.jsxs)(ln,{children:[Object(r.jsx)(jn,{children:"Nasa API"}),Object(r.jsxs)(bn,{children:["Nasa API",Object(r.jsx)(fn,{children:"To learn and see the astronomy photo of the day ..."})]}),Object(r.jsx)(pn,{children:Object(r.jsx)(hn,{className:"link",to:"/apod",children:"Astronomy Photo Of The Day"})})]})})})},On=function(){var n=Object(u.f)(),t=n.state.data[0],e=Object(i.useState)(),a=Object(M.a)(e,2),c=a[0],o=a[1],s=n.state.links;return Object(i.useEffect)((function(){(function(){var n=Object(H.a)(q.a.mark((function n(){var t,e;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(s);case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,o(e[0]);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[s]),Object(r.jsx)(w,{children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:t.title}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:t.description}),Object(r.jsx)("img",{src:c,alt:"img"})]})]})})},gn=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(m,{}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/",component:xn}),Object(r.jsx)(u.a,{path:"/apod",component:Q}),Object(r.jsx)(u.a,{path:"/hubble",component:tn}),Object(r.jsx)(u.a,{path:"/exp",component:On})]})]})},mn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,44)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;e(n),r(n),i(n),a(n),c(n)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)(gn,{})})}),document.getElementById("root")),mn()}},[[43,1,2]]]);
//# sourceMappingURL=main.6726d124.chunk.js.map