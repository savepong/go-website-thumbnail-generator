(function(t){function e(e){for(var n,i,u=e[0],l=e[1],s=e[2],p=0,f=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var l=r[u];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var c=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 py-5"},[r("h1",[t._v("Generate a thumbnail of a website")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.makeWebsiteThumbnail(e)}}},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.websiteUrl,expression:"websiteUrl"}],staticClass:"form-control",attrs:{type:"text",id:"website-input",placeholder:"Enter a website"},domProps:{value:t.websiteUrl},on:{input:function(e){e.target.composing||(t.websiteUrl=e.target.value)}}})]),t._m(0)]),r("img",{attrs:{src:t.thumbnailUrl}})])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary"},[t._v("Generate!")])])}],i=r("7338"),u=r.n(i),l={name:"App",data:function(){return{websiteUrl:"",thumbnailUrl:""}},methods:{makeWebsiteThumbnail:function(){var t=this;u.a.post("http://localhost:3000/api/thumbnail",{url:this.websiteUrl}).then((function(e){t.thumbnailUrl=e.data.screenshot})).catch((function(t){window.alert("The API returned an error: ".concat(t))}))}}},s=l,c=r("2877"),p=Object(c["a"])(s,o,a,!1,null,null,null),f=p.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(f)}}).$mount("#app")}});
//# sourceMappingURL=app.938844d0.js.map