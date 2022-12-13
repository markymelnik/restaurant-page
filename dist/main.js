(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>g});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(150),t.b),l=new URL(t(821),t.b),u=new URL(t(166),t.b),p=i()(o()),m=s()(d),f=s()(l),h=s()(u);p.push([n.id,":root {\n  --theme-color: rgb(8, 16, 36);\n  --background-color: rgb(108, 172, 255);\n}\n\n@font-face {\n font-family: 'BlackBerryJam'; \n src: url("+m+");\n}  \n\n@font-face {\n  font-family: 'Brisket';\n  src: url("+f+");\n}\n\n@font-face {\n  font-family: 'Sansation';\n  src: url("+h+");\n}\n  \n* {\n  box-sizing: border-box;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  font-family: Sansation;\n  width: 100%;\n  height: 100vh;\n}\n\n.header {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  height: 150px;\n  width: inherit;\n  background-color: var(--theme-color);\n  border-bottom: 1px solid white;\n  opacity: 90%;\n  z-index: 1;\n}\n\n.header-logo-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  height: 100%;\n  margin-left: 40px;\n  transform: rotate(-10deg);\n}\n\n.header-logo {\n  font-family: BlackBerryJam;\n  font-size: 70px;\n  text-align: left;\n  line-height: 50px;\n}\n\n.header-logo:hover {\n  transform: rotate(10deg);\n}\n\n.line-1 {\n  color: rgb(0, 91, 187);\n}\n\n.line-2 {\n  color: rgb(255, 213, 0);\n}\n\n.header-navigation-container {\n  height: 90%;\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.header-navigation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 25px;\n  color: white;\n  padding: 20px;\n  margin-left: 50px;\n}\n\n.nav-home, .nav-menu, .nav-about {\n  margin-right: 50px;\n  text-decoration: underline 0.05em rgba(255, 255, 255, 0);\n  text-underline-offset: 6px;\n  transition: text-decoration-color 400ms;\n  cursor: pointer;\n}\n\n.nav-home:hover, .nav-menu:hover, .nav-about:hover {\n  text-decoration: underline 0.05em rgb(255, 213, 0);\n  color: rgb(255, 213, 0);\n}\n\n.header-img-container {\n  width: 100px;\n  height: 100%;\n  margin-right: 50px;\n}\n\n.header-img {\n  width: inherit;\n  height: inherit;\n}\n\n.header-img:hover {\n  transform: rotate(-10deg);\n}\n\n.takeout-btn-container {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  margin-right: 40px;\n}\n\n.takeout-btn {\n  color: white;\n  background-color: rgb(0, 91, 187);\n  height: 50px;\n  width: 100px;\n  font-size: 12px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n}\n\n.takeout-btn:hover {\n  background-color: rgb(49, 115, 186);\n  transform: rotate(5deg);\n}\n\n.main {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: inherit;\n}\n\n.main-background {\n  width: inherit;\n  height: 100vh;\n  background-color: #fff6C7;\n  background-blend-mode: multiply;\n}\n\n.background-img-container {\n  width: inherit;\n  height: inherit;\n}\n\n.background-img {\n  width: inherit;\n  height: inherit;\n  object-fit: cover;\n  opacity: 80%;\n}\n\n.welcome-text-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.welcome-text {\n  font-family: Brisket;\n  font-size: 80px;\n  letter-spacing: 2px;\n  color: rgb(8, 16, 36);\n}\n\n.welcome-text:hover {\n  font-size: 90px;\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: inherit;\n  height: 8vh;\n  color: rgb(217, 229, 255);\n  background-color: var(--theme-color);\n  border-top: 1px solid white;\n  padding: 10px;\n  opacity: 90%;\n}\n\n.footer-text {\n  font-size: 20px;\n  text-align: center;\n  padding: 10px;\n}",""]);const g=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},150:(n,e,t)=>{n.exports=t.p+"8c11d68cb98b8e6be482.ttf"},821:(n,e,t)=>{n.exports=t.p+"a5af48e5db3ec296dbb7.otf"},166:(n,e,t)=>{n.exports=t.p+"4b0e0e7199c58c7cc1d3.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"f558bd35e5ba5da995ee.jpeg",g=t.p+"6a74458a2e7da3963b83.png";document.querySelector(".container").append(function(){const n=document.createElement("div");n.classList.add("header");const e=document.createElement("div");e.classList.add("header-logo-container");const t=document.createElement("div");t.classList.add("header-logo");const r=document.createElement("div");r.classList.add("line-1"),r.textContent="Taste of";const o=document.createElement("div");o.classList.add("line-2"),o.textContent="Ukraine",t.append(r,o),e.append(t);const a=document.createElement("div");a.classList.add("header-navigation-container");const i=document.createElement("div");i.classList.add("header-navigation");const c=document.createElement("div");c.classList.add("nav-home"),c.textContent="Home";const s=document.createElement("div");s.classList.add("nav-menu"),s.textContent="Menu";const d=document.createElement("div");d.classList.add("nav-about"),d.textContent="About",i.append(c,s,d),a.append(i);const l=document.createElement("div");l.classList.add("header-img-container");const u=document.createElement("img");u.classList.add("header-img"),u.src=g,u.alt="Blue and yellow heart at top right header",l.append(u);const p=document.createElement("div");p.classList.add("takeout-btn-container");const m=document.createElement("button");return m.classList.add("takeout-btn"),m.type="button",m.textContent="Takeout!",p.append(m),n.append(e,a,l,p),n}(),function(){const n=document.createElement("div");n.classList.add("main");const e=document.createElement("div");e.classList.add("main-background");const t=document.createElement("div");t.classList.add("background-img-container");const r=document.createElement("img");r.src=h,r.alt="Background photo of restaurant setting",r.classList.add("background-img"),t.append(r),e.append(t);const o=document.createElement("div");o.classList.add("welcome-text-container");const a=document.createElement("div");return a.classList.add("welcome-text"),a.textContent="Welcome!",o.append(a),n.append(e,o),n}(),function(){const n=document.createElement("div");n.classList.add("footer");const e=document.createElement("div");return e.classList.add("footer-text"),e.textContent="Created by Mark Melnik",n.append(e),n}())})()})();