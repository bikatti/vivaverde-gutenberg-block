(window.webpackJsonp_vivaverde_block=window.webpackJsonp_vivaverde_block||[]).push([[1],{5:function(e,t,r){}}]),function(e){function t(t){for(var n,a,i=t[0],u=t[1],l=t[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={0:0},c=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp_vivaverde_block=window.webpackJsonp_vivaverde_block||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;c.push([7,1]),r()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blocks},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(1),c=r(4),a=r(2);r(5),r(3),r(6),Object(c.registerBlockType)("gutenberg/glosasrio-block",{title:Object(o.__)("glosario"),icon:"universal-access-alt",category:"common",keywords:[Object(o.__)("vivaverde"),Object(o.__)("glosario"),Object(o.__)("CGB")],attributes:{recordId:{type:"number"},titulo:{type:"array",source:"children",selector:".heading-body"},content:{type:"array",source:"children",selector:".content-body"}},supports:{anchor:!0},apiVersion:2,edit:function(e){var t=e.attributes,r=t.titulo,c=t.content,i=e.setAttributes,u=Object(a.useBlockProps)();return Object(n.createElement)("div",u,Object(n.createElement)(a.RichText,{tagName:"h3",onChange:function(e){return i({titulo:e})},placeholder:Object(o.__)("Título"),value:r}),Object(n.createElement)(a.RichText,{tagName:"div",multiline:"p",onChange:function(e){return i({content:e})},placeholder:Object(o.__)("Contenido de la palabra..."),value:c}))},save:function(e){var t=e.attributes,r=t.titulo,o=t.content,c=a.useBlockProps.save();return Object(n.createElement)("div",c,Object(n.createElement)("h3",{className:"heading-body"},r),Object(n.createElement)("div",{className:"content-body"},o))}})}]);