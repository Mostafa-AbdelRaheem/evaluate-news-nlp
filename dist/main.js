!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"checkUrl",(function(){return o})),n.d(t,"handleSubmit",(function(){return r}));function r(e){e.preventDefault();let t=document.getElementById("url").value;if(Client.checkUrl(t)){const e={clientEnteredUrl:t};console.log("clientEnteredUrl",e),(async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=(await n.json()).sentence_list[0];console.log("result",e),document.getElementById("text").innerHTML=e.text,document.getElementById("agreement").innerHTML=e.agreement,document.getElementById("subjectivity").innerHTML=e.subjectivity,document.getElementById("confidence").innerHTML=e.confidence,document.getElementById("irony").innerHTML=e.irony,document.getElementById("score_tag").innerHTML=e.score_tag,await n.json()}catch(e){console.log(e)}})("http://localhost:8081/addUrl",e)}else alert("please enter Valid URL")}function o(e){return null!==e.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)}n(0),n(1),n(2),n(3)}]);