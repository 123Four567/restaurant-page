(()=>{"use strict";var e={744:(e,t,n)=>{e.exports=n.p+"793a7b5b8e3a269e3b23.jpg"},404:(e,t,n)=>{e.exports=n.p+"4dbfc333d547fece84c8.jpg"}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{function e(e,t){const n=document.createElement("button");return n.textContent=e,n.classList.add(t),n}var t=n(404);const o=function(){const e=document.querySelector(".tab-content"),n=document.createElement("section");n.appendChild(function(){const e=document.createElement("div");return e.classList.add("page-content"),e.appendChild(function(e){const t=document.createElement("h2");return t.textContent="A quick summary about us",t}()),e.appendChild(function(e){const t=document.createElement("p");return t.textContent="Here at Macchiato's Coffee Shop we strive to make the best coffee for our clients, thats why we choose the purest coffee beans out there and combined with our passion and love for coffee, we believe that you'll love what we have here.",t}()),e.appendChild(function(){const e=document.createElement("img");return e.src=t,e}()),e}()),e.appendChild(n)};var c=n(744);function r(e,t,n,o){const c=document.createElement("section"),r=document.createElement("h3"),a=document.createElement("p"),d=document.createElement("img");return r.textContent=e,a.textContent=t,d.setAttribute("src",n),d.setAttribute("alt",o),c.appendChild(r),c.appendChild(a),c.appendChild(d),c}const a=document.createElement("h2"),d=document.createElement("p"),i=document.createElement("p");a.textContent="Contacts",d.textContent="Here are our numbers: 999-232-2323",i.textContent="This is our email: veryrealmail@notfake.com";(function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("header");return t.appendChild(function(e){const t=document.createElement("h1");return t.textContent="Macchiato's Coffee Shop",t}()),t.appendChild(function(){const t=document.createElement("nav");return t.classList.add("navbar"),t.appendChild(e("Home","home")),t.appendChild(e("Menu","menu")),t.appendChild(e("Contacts","contacts")),t}()),t}()),t.appendChild(function(){const e=document.createElement("main");return e.classList.add("tab-content"),e}()),t.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("div"),n=document.createElement("p");return n.textContent="Made with love for coffee lovers",t.appendChild(n),e.appendChild(t),e}())})(),o(),function(){const e=document.querySelector(".home"),t=document.querySelector(".menu"),n=document.querySelector(".contacts"),u=document.querySelector(".tab-content");e.addEventListener("click",(()=>{u.removeChild(u.firstChild),o()})),t.addEventListener("click",(()=>{u.removeChild(u.firstChild),function(){const e=document.querySelector(".tab-content"),t=document.createElement("section"),n=document.createElement("div");n.classList.add("page-content");const o=document.createElement("h2");o.textContent="Menu of the day";const a=[r("Affogato","Are you looking for something tasty, how about trying our new affogato",c,"Affogato")];n.appendChild(o),a.forEach((e=>{n.appendChild(e)})),t.appendChild(n),e.appendChild(t)}()})),n.addEventListener("click",(()=>{u.removeChild(u.firstChild),function(){const e=document.querySelector(".tab-content"),t=document.createElement("section"),n=document.createElement("div");n.classList.add("page-content"),n.appendChild(a),n.appendChild(d),n.appendChild(i),t.appendChild(n),e.appendChild(t)}()}))}()})()})();