(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{318:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foo",function(){return n(5653)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var u,a=(u=n(7294))&&u.__esModule?u:{default:u},i=n(6273),l=n(387),c=n(7190);var f={};function s(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),u=a.default.useMemo((function(){var t=o(i.resolveHref(r,e.href,!0),2),n=t[0],u=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):u||n}}),[r,e.href,e.as]),d=u.href,p=u.as,v=e.children,y=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),E=w[0],j=w[1],x=a.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);a.default.useEffect((function(){var e=j&&n&&i.isLocalURL(d),t="undefined"!==typeof b?b:r&&r.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(r,d,p,{locale:t})}),[p,d,j,b,n,r]);var C={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:u,locale:l,scroll:a}))}(e,r,d,p,y,h,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&s(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof b?b:r&&r.locale,k=r&&r.isLocaleDomain&&i.getDomainLocale(p,_,r&&r.locales,r&&r.domainLocales);C.href=k||i.addBasePath(i.addLocale(p,_,r&&r.defaultLocale))}return a.default.cloneElement(t,C)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,c=u.useRef(),f=o(u.useState(!1),2),s=f[0],d=f[1],p=o(u.useState(t?t.current:null),2),v=p[0],y=p[1],h=u.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||s||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){a.delete(e),u.unobserve(e),0===a.size&&(u.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:n}))}),[r,v,n,s]);return u.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),u.useEffect((function(){t&&y(t.current)}),[t]),[h,s]};var u=n(7294),a=n(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},5653:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294),u=n(1664);t.default=function(){var e=(0,o.useState)(),t=e[0],n=e[1],a=(0,o.useState)("Connecting"),i=a[0],l=a[1];return(0,o.useEffect)((function(){n(new WebSocket("ws://127.0.0.1:8080/ws"))}),[]),(0,o.useEffect)((function(){if(null!=t){var e,n=document.querySelector("input");t.onopen=function(t){l("Connected to server"),e=Date.now()},t.onclose=function(e){},t.onmessage=function(t){if("complete"==t.data){var r=(Date.now()-e)/1e3;l("Completed! Time: "+r+" seconds\nWPM: "+(540/r).toFixed(2)),null!=n&&(n.value="")}else"true"==t.data&&null!=n&&(n.value=n.value.split(" ").slice(1).join(" "))},t.onerror=function(e){console.log(e),l("Communication error")};document.addEventListener("keydown",(function(e){null==n||32!=e.keyCode&&11!=e.keyCode||t.send(n.value)}))}}),[t]),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Foo"}),(0,r.jsxs)("p",{children:["This is ",(0,r.jsx)("code",{children:"pages/foo/index.tsx"}),"."]}),(0,r.jsx)("p",{children:"This is the text I need you to type."}),(0,r.jsx)("input",{type:"text"}),(0,r.jsx)("p",{id:"status",children:i}),(0,r.jsxs)("p",{children:["Check out ",(0,r.jsx)(u.default,{href:"/foo/bar",children:"bar"}),"."]})]})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=318,e(e.s=t);var t}));var t=e.O();_N_E=t}]);