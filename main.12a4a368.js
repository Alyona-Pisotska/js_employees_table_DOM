parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,o){return r(e)||t(e,o)||l(e,o)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return t}}function r(e){if(Array.isArray(e))return e}function o(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=l(e))){var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw o}}}}function a(e){return u(e)||c(e)||l(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,n){if(e){if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}function c(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return s(e)}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var d=document.querySelector("table"),f=d.querySelector("tr").children,y=d.querySelector("tbody"),m=y.querySelectorAll("tr"),b=Array.from(f).map(function(e){return""});[].forEach.call(f,function(e,n){e.addEventListener("click",function(){p(n)})});var p=function(e){var n=Array.from(m),t=b[e]||"asc",r="asc"===t?1:-1;n.sort(function(n,t){var o=n.querySelectorAll("td")[e].innerHTML,a=t.querySelectorAll("td")[e].innerHTML;switch(!o.includes("$")&&isNaN(a)||(o=+o.replace(/[$,]/g,""),a=+a.replace(/[$,]/g,"")),!0){case o>a:return 1*r;case o<a:return-1*r;case o===a:return 0}}),b[e]="asc"===t?"desc":"asc",[].forEach.call(m,function(e){y.removeChild(e)}),n.forEach(function(e){y.appendChild(e)})};y.addEventListener("click",function(e){a(y.children).forEach(function(e){e.classList.remove("active")}),e.target.closest("tr").classList.toggle("active")}),d.insertAdjacentHTML("afterend",'\n  <form class="new-employee-form">\n    <label>Name: <input\n      name="name"\n      type="text"\n      data-qa="name"\n      required\n    >\n    </label>\n\n    <label>Position: <input\n      name="position"\n      type="text"\n      data-qa="position"\n      required\n    >\n    </label>\n\n    <label>Office:\n      <select\n        name="office"\n        type="text"\n        data-qa="office"\n        required\n      >\n        <option value="Tokyo" selected>Tokyo</option>\n        <option value="Singapore">Singapore</option>\n        <option value="London">London</option>\n        <option value="New York">New York</option>\n        <option value="Edinburgh">Edinburgh</option>\n        <option value="San Francisco">San Francisco</option>\n      </select>\n    </label>\n\n    <label>Age: <input\n      name="age"\n      type="number"\n      data-qa="age"\n      required\n    >\n    </label>\n\n    <label>Salary: <input\n      name="salary"\n      type="number"\n      data-qa="salary"\n      required\n    >\n    </label>\n\n    <button type="submit"">\n      Save to table\n    </button>\n  </form>\n');var v=document.querySelector(".new-employee-form");function h(e,n){v.insertAdjacentHTML("afterend",'\n    <div class="notification" data-qa="notification">\n      <h1 class="title"></h1>\n      <p></p>\n    </div>\n  ');var t=document.querySelector(".notification"),r=t.querySelector(".title"),o=t.querySelector("p");switch(e){case"error":t.classList.add("error"),r.innerHTML="ERROR";break;case"success":t.classList.add("success"),r.innerHTML="SUCCESS";break;default:return}o.innerHTML=n,setTimeout(function(){t.remove()},3e3)}function S(e,n){return"name"===e&&n.length<4?(h("error","Name length should be at least 4 letters"),!1):"age"!==e||!(Number(n)<18||Number(n)>90)||(h("error","Age should be from 18 to 90"),!1)}function g(e,n){return"salary"===e?"$".concat(Number(n).toLocaleString("en-US")):n}v.addEventListener("submit",function(n){n.preventDefault();var t,r=new FormData(v),a=document.createElement("tr"),i=o(r);try{for(i.s();!(t=i.n()).done;){var l=e(t.value,2),c=l[0],u=l[1];if(!S(c,u))return;a.insertAdjacentHTML("beforeend","\n      <td>".concat(g(c,u),"</td>\n    "))}}catch(s){i.e(s)}finally{i.f()}y.append(a),v.reset(),h("success","New information added to the table")}),y.addEventListener("dblclick",function(e){var n=e.target,t=n.cellIndex,r=n.innerText,o=r.replace(/[$,]/g,""),a=v.querySelectorAll("[name]")[t].cloneNode(!0);a.classList.add("cell-input"),a.value=o,n.firstChild.replaceWith(a),a.focus(),a.addEventListener("keypress",function(e){"Enter"===e.key&&a.blur()}),a.addEventListener("blur",function(e){S(a.name,a.value)&&a.value?n.innerText=g(a.name,a.value):n.innerText=r})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.12a4a368.js.map