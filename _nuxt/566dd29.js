(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{236:function(e,n,t){e.exports=function(){var e="undefined"!=typeof window,n="undefined"!=typeof navigator,t=e&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var n=e.event,t=e.handler;(0,e.middleware)(n)&&t(n)}function o(e,n){var o=function(e){var n="function"==typeof e;if(!n&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:n?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||t,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(n.value),r=o.handler,c=o.middleware,a=o.detectIframe;if(o.isActive){if(e["__v-click-outside"]=o.events.map((function(n){return{event:n,srcTarget:document.documentElement,handler:function(n){return function(e){var n=e.el,t=e.event,o=e.handler,r=e.middleware,c=t.path||t.composedPath&&t.composedPath();(c?c.indexOf(n)<0:!n.contains(t.target))&&i({event:t,handler:o,middleware:r})}({el:e,event:n,handler:r,middleware:c})}}})),a){var l={event:"blur",srcTarget:window,handler:function(n){return function(e){var n=e.el,t=e.event,o=e.handler,r=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!n.contains(e)&&i({event:t,handler:o,middleware:r})}),0)}({el:e,event:n,handler:r,middleware:c})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[l])}e["__v-click-outside"].forEach((function(n){var t=n.event,i=n.srcTarget,o=n.handler;return setTimeout((function(){e["__v-click-outside"]&&i.addEventListener(t,o,!1)}),0)}))}}function r(e){(e["__v-click-outside"]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)})),delete e["__v-click-outside"]}var c=e?{bind:o,update:function(e,n){var t=n.value,i=n.oldValue;JSON.stringify(t)!==JSON.stringify(i)&&(r(e),o(e,{value:t}))},unbind:r}:{};return{install:function(e){e.directive("click-outside",c)},directive:c}}()},237:function(e,n,t){e.exports=t.p+"img/One-Bernam-facade.3a9cfbb.jpg"},238:function(e,n,t){e.exports=t.p+"img/One-Bernam-hammock-1024x611.b94b8b4.jpg"},239:function(e,n,t){e.exports=t.p+"img/One-Bernam-pool-deck.12800f8.jpg"},240:function(e,n,t){e.exports=t.p+"img/One-Bernam-pool.b573a56.jpg"},241:function(e,n,t){e.exports=t.p+"img/One-bernam-commercial-square.ca168d2.jpg"},242:function(e,n,t){e.exports=t.p+"img/One-bernam-garden-deck.4c84f69.jpg"},243:function(e,n,t){e.exports=t.p+"img/One-bernam-living-room.f43c976.jpg"},244:function(e,n,t){e.exports=t.p+"img/one-bernam-function-room.ebf1056.jpg"},245:function(e,n,t){e.exports=t.p+"img/one-bernam-landscape.0b38531.jpg"},326:function(e,n,t){var map={"./One-Bernam-facade.jpg":237,"./One-Bernam-hammock-1024x611.jpg":238,"./One-Bernam-pool-deck.jpg":239,"./One-Bernam-pool.jpg":240,"./One-bernam-commercial-square.jpg":241,"./One-bernam-garden-deck.jpg":242,"./One-bernam-living-room.jpg":243,"./one-bernam-function-room.jpg":244,"./one-bernam-landscape.jpg":245};function o(e){var n=r(e);return t(n)}function r(e){if(!t.o(map,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=326},334:function(e,n,t){"use strict";t.r(n);var o=t(236),r={name:"LargeModal",directives:{clickOutside:t.n(o).a.directive},props:{imagesProp:{type:Array,default:function(){return[]}}},data:function(){return{showModal:!1,images:this.imagesProp,imageUrl:""}},computed:{},methods:{toggleModal:function(e){this.imageUrl=e,this.showModal=!this.showModal,this.Modal=!this.$emit("isModal",this.Modal)},externalClick:function(){this.showModal=!1},imageSource:function(e){return t(326)("./".concat(e))}}},c=t(13),component=Object(c.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-6"},[e._l(e.imagesProp,(function(image,n){return t("div",{key:n,staticClass:"space-y-1 cursor-pointer",on:{click:function(n){return e.toggleModal(image.url)}}},[t("img",{staticClass:"object-cover w-full h-full mx-auto rounded cursor-pointer",attrs:{src:e.imageSource(image.url),alt:""}})])})),e._v(" "),e.showModal?t("div",{staticClass:"\n      fixed\n      inset-0\n      z-50\n      outline-none\n      focus:outline-none\n      justify-center\n      items-center\n      flex\n      overscroll-y-contain\n      overflow-auto\n    "},[t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.externalClick,expression:"externalClick"}],staticClass:"relative w-auto my-auto mx-auto max-w-6xl"},[t("div",{staticClass:"\n          border-0\n          rounded-lg\n          shadow-lg\n          relative\n          flex flex-col\n          w-full\n          bg-white\n          outline-none\n          focus:outline-none\n        "},[t("div",{staticClass:"relative p-6 flex-auto"},[t("img",{staticClass:"mx-auto rounded",attrs:{src:e.imageSource(e.imageUrl),alt:""}})])])])]):e._e(),e._v(" "),e.showModal?t("div",{staticClass:"opacity-25 fixed inset-0 z-40 bg-black"}):e._e()],2)}),[],!1,null,null,null);n.default=component.exports}}]);