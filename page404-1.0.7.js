!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=38)}([function(e,t,n){"use strict";function r(){}function o(e,t){var n,o,i,a,s=z;for(a=arguments.length;a-- >2;)L.push(arguments[a]);for(t&&null!=t.children&&(L.length||L.push(t.children),delete t.children);L.length;)if((o=L.pop())&&void 0!==o.pop)for(a=o.length;a--;)L.push(o[a]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(i=!1)),i&&n?s[s.length-1]+=o:s===z?s=[o]:s.push(o),n=i;var l=new r;return l.nodeName=e,l.children=s,l.attributes=null==t?void 0:t,l.key=null==t?void 0:t.key,void 0!==A.vnode&&A.vnode(l),l}function i(e,t){for(var n in t)e[n]=t[n];return e}function a(e,t){return o(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function s(e){!e._dirty&&(e._dirty=!0)&&1==W.push(e)&&(A.debounceRendering||I)(l)}function l(){var e,t=W;for(W=[];e=t.pop();)e._dirty&&O(e)}function c(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&u(e,t.nodeName):n||e._componentConstructor===t.nodeName}function u(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function f(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function d(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function m(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===H.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,h,a):e.removeEventListener(t,h,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)v(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var s=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function v(e,t,n){try{e[t]=n}catch(e){}}function h(e){return this._listeners[e.type](A.event&&A.event(e)||e)}function b(){for(var e;e=q.pop();)A.afterMount&&A.afterMount(e),e.componentDidMount&&e.componentDidMount()}function y(e,t,n,r,o,i){D++||(B=null!=o&&void 0!==o.ownerSVGElement,U=null!=e&&!("__preactattr_"in e));var a=g(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--D||(U=!1,i||b()),a}function g(e,t,n,r,o){var i=e,a=B;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),_(e,!0))),i.__preactattr_=!0,i;var s=t.nodeName;if("function"==typeof s)return E(e,t,n,r);if(B="svg"===s||"foreignObject"!==s&&B,s=String(s),(!e||!u(e,s))&&(i=d(s,B),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),_(e,!0)}var l=i.firstChild,c=i.__preactattr_,f=t.children;if(null==c){c=i.__preactattr_={};for(var p=i.attributes,m=p.length;m--;)c[p[m].name]=p[m].value}return!U&&f&&1===f.length&&"string"==typeof f[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=f[0]&&(l.nodeValue=f[0]):(f&&f.length||null!=l)&&w(i,f,n,r,U||null!=c.dangerouslySetInnerHTML),x(i,t.attributes,c),B=a,i}function w(e,t,n,r,o){var i,a,s,l,u,f=e.childNodes,d=[],m={},v=0,h=0,b=f.length,y=0,w=t?t.length:0;if(0!==b)for(var k=0;k<b;k++){var x=f[k],N=x.__preactattr_,S=w&&N?x._component?x._component.__key:N.key:null;null!=S?(v++,m[S]=x):(N||(void 0!==x.splitText?!o||x.nodeValue.trim():o))&&(d[y++]=x)}if(0!==w)for(var k=0;k<w;k++){l=t[k],u=null;var S=l.key;if(null!=S)v&&void 0!==m[S]&&(u=m[S],m[S]=void 0,v--);else if(!u&&h<y)for(i=h;i<y;i++)if(void 0!==d[i]&&c(a=d[i],l,o)){u=a,d[i]=void 0,i===y-1&&y--,i===h&&h++;break}u=g(u,l,n,r),s=f[k],u&&u!==e&&u!==s&&(null==s?e.appendChild(u):u===s.nextSibling?p(s):e.insertBefore(u,s))}if(v)for(var k in m)void 0!==m[k]&&_(m[k],!1);for(;h<=y;)void 0!==(u=d[y--])&&_(u,!1)}function _(e,t){var n=e._component;n?M(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||p(e),k(e))}function k(e){for(e=e.lastChild;e;){var t=e.previousSibling;_(e,!0),e=t}}function x(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||m(e,r,n[r],n[r]=void 0,B);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||m(e,r,n[r],n[r]=t[r],B)}function N(e){var t=e.constructor.name;(R[t]||(R[t]=[])).push(e)}function S(e,t,n){var r,o=R[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),T.call(r,t,n)):(r=new T(t,n),r.constructor=e,r.render=j),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function j(e,t,n){return this.constructor(e,n)}function C(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===A.syncComponentUpdates&&e.base?s(e):O(e,1,o)),e.__ref&&e.__ref(e))}function O(e,t,n,r){if(!e._disable){var o,a,s,l=e.props,c=e.state,u=e.context,d=e.prevProps||l,p=e.prevState||c,m=e.prevContext||u,v=e.base,h=e.nextBase,g=v||h,w=e._component,k=!1;if(v&&(e.props=d,e.state=p,e.context=m,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(l,c,u)?k=!0:e.componentWillUpdate&&e.componentWillUpdate(l,c,u),e.props=l,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!k){o=e.render(l,c,u),e.getChildContext&&(u=i(i({},u),e.getChildContext()));var x,N,j=o&&o.nodeName;if("function"==typeof j){var E=f(o);a=w,a&&a.constructor===j&&E.key==a.__key?C(a,E,1,u,!1):(x=a,e._component=a=S(j,E,u),a.nextBase=a.nextBase||h,a._parentComponent=e,C(a,E,0,u,!1),O(a,1,n,!0)),N=a.base}else s=g,x=w,x&&(s=e._component=null),(g||1===t)&&(s&&(s._component=null),N=y(s,o,u,n||!v,g&&g.parentNode,!0));if(g&&N!==g&&a!==w){var T=g.parentNode;T&&N!==T&&(T.replaceChild(N,g),x||(g._component=null,_(g,!1)))}if(x&&M(x),e.base=N,N&&!r){for(var P=e,L=e;L=L._parentComponent;)(P=L).base=N;N._component=P,N._componentConstructor=P.constructor}}if(!v||n?q.unshift(e):k||(e.componentDidUpdate&&e.componentDidUpdate(d,p,m),A.afterUpdate&&A.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);D||r||b()}}function E(e,t,n,r){for(var o=e&&e._component,i=o,a=e,s=o&&e._componentConstructor===t.nodeName,l=s,c=f(t);o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;return o&&l&&(!r||o._component)?(C(o,c,3,n,r),e=o.base):(i&&!s&&(M(i),e=a=null),o=S(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,a=null),C(o,c,1,n,r),e=o.base,a&&e!==a&&(a._component=null,_(a,!1))),e}function M(e){A.beforeUnmount&&A.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?M(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,p(t),N(e),k(t)),e.__ref&&e.__ref(null)}function T(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function P(e,t,n){return y(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"h",function(){return o}),n.d(t,"createElement",function(){return o}),n.d(t,"cloneElement",function(){return a}),n.d(t,"Component",function(){return T}),n.d(t,"render",function(){return P}),n.d(t,"rerender",function(){return l}),n.d(t,"options",function(){return A});var A={},L=[],z=[],I="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,H=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,W=[],q=[],D=0,B=!1,U=!1,R={};i(T.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),O(this,2)},render:function(){}});var $={h:o,createElement:o,cloneElement:a,Component:T,render:P,rerender:l,options:A};t.default=$},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){var t=e.style,n=e.upClass,o=e.downClass;return(0,r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"50",viewBox:"0 0 100 100",preserveAspectRatio:"none",className:"separator",style:t},n?(0,r.h)("path",{className:n,d:"M0 0 L0 100 L100 0 Z"}):"",o?(0,r.h)("path",{className:o,d:"M0 101 L100 100 L100 0 Z"}):"")};t.default=o},function(e,t){e.exports={name:"serverlesslab.com",version:"1.0.7",versionDate:"2017-09-16",description:"Source code for serverlesslab.com website",private:!0,scripts:{start:"webpack-dev-server --open",build:"webpack -p","test:lint":"node_modules/.bin/eslint src/ webpack.config.js",test:"npm run test:lint","release:tag":"git tag $npm_package_version && git push --tags",deploy:"gh-pages -d build"},repository:{type:"git",url:"git+https://github.com/lucpod/serverlesslab.com.git"},keywords:[],author:"",license:"ISC",bugs:{url:"https://github.com/lucpod/serverlesslab.com/issues"},homepage:"https://github.com/lucpod/serverlesslab.com#readme",devDependencies:{aos:"^2.2.0","babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-plugin-transform-react-jsx":"^6.24.1","babel-preset-es2015":"^6.24.1",bulma:"^0.5.1","clean-webpack-plugin":"^0.1.16","compression-webpack-plugin":"^1.0.0","copy-webpack-plugin":"^4.0.1","css-loader":"^0.28.7",eslint:"^4.6.1","eslint-config-standard":"^10.2.1","eslint-config-standard-react":"^5.0.0","eslint-plugin-import":"^2.7.0","eslint-plugin-node":"^5.1.1","eslint-plugin-promise":"^3.5.0","eslint-plugin-react":"^7.3.0","eslint-plugin-standard":"^3.0.1","extract-text-webpack-plugin":"^3.0.0","file-loader":"^0.11.2","gh-pages":"^1.0.0","json-loader":"^0.5.7","node-sass":"^4.5.3",preact:"^8.2.5","preact-render-to-string":"^3.6.3","sass-loader":"^6.0.6","static-site-generator-webpack-plugin":"^3.4.1","style-loader":"^0.18.2",webpack:"^3.5.6","webpack-dev-server":"^2.7.1"}}},function(e,t,n){e.exports=n.p+"bf96506f468d52bbfbccbdf424ed430f.svg"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){!function(){var e;if(e=window.driftt=window.drift=window.driftt||[],!e.init)e.invoked?window.console&&console.error&&console.error("Drift snippet included twice."):(e.invoked=!0,e.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],e.factory=function(t){return function(){var n;return n=Array.prototype.slice.call(arguments),n.unshift(t),e.push(n),e}},e.methods.forEach(function(t){e[t]=e.factory(t)}),e.load=function(e){var t,n,r,o;t=3e5,o=Math.ceil(new Date/t)*t,r=document.createElement("script"),r.type="text/javascript",r.async=!0,r.crossorigin="anonymous",r.src="https://js.driftt.com/include/"+o+"/"+e+".js",n=document.getElementsByTagName("script")[0],n.parentNode.insertBefore(r,n)})}(),window.drift.SNIPPET_VERSION="0.3.1",window.drift.load("ava57h5bw28g")};t.openChat=function(e){e&&e.preventDefault&&e.preventDefault(),window.drift.api.openChat()};t.default=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c={STYLESHEET:"STYLESHEET",SCRIPT:"SCRIPT"},u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"renderChildren",value:function(){return this.props.children?this.props.children:null}},{key:"renderLinks",value:function(){return this.props.links.map(function(e,t){return(0,l.h)("link",a({key:t},e))})}},{key:"renderFavicon",value:function(){var e=this.props.favicon;return e?(0,l.h)("link",{rel:"icon",href:e}):null}},{key:"renderMetatags",value:function(){return this.props.metatags.map(function(e,t){return(0,l.h)("meta",a({key:t},e))})}},{key:"renderInlineAsset",value:function(e,t){var n={__html:t};return e===c.STYLESHEET?(0,l.h)("style",{key:t,dangerouslySetInnerHTML:n}):(0,l.h)("script",{key:t,dangerouslySetInnerHTML:n})}},{key:"renderImportedAsset",value:function(e,t){return e===c.STYLESHEET?(0,l.h)("link",a({key:t.href,rel:"stylesheet"},t)):(0,l.h)("script",a({key:t.src},t))}},{key:"renderAsset",value:function(e,t){if(t.inline){var n=t.inline;return this.renderInlineAsset(e,n)}return this.renderImportedAsset(e,t)}},{key:"renderStylesheets",value:function(){var e=this;return this.props.stylesheets.map(function(t){var n="string"==typeof t?{href:t}:t;return e.renderAsset(c.STYLESHEET,n)})}},{key:"renderScripts",value:function(){var e=this;return this.props.scripts.map(function(t){var n="string"==typeof t?{src:t}:t;return e.renderAsset(c.SCRIPT,n)})}},{key:"renderUniversalStateScript",value:function(){if(!this.props.universalState)return null;var e=this.props.universalState,t=JSON.stringify(e),n={__html:t};return(0,l.h)("script",{id:"__HTMLDOCUMENT__UNIVERSAL_STATE",type:"application/json",dangerouslySetInnerHTML:n})}},{key:"render",value:function(){return(0,l.h)("html",this.props.htmlAttributes,(0,l.h)("head",null,(0,l.h)("title",null,this.props.title),this.renderLinks(),this.renderMetatags(),this.renderFavicon(),this.renderStylesheets()),(0,l.h)("body",null,this.renderChildren(),this.renderUniversalStateScript(),this.renderScripts()))}}]),t}(l.Component);u.defaultProps={childrenContainerId:"app",htmlAttributes:{},favicon:"",metatags:[],scripts:[],stylesheets:[],title:"",universalState:null},t.default=u},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=n(3),c=function(e){return e&&e.__esModule?e:{default:e}}(l),u=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={burgerActive:!1},n._burgerClick=n._burgerClick.bind(n),n}return i(t,e),a(t,[{key:"_burgerClick",value:function(){this.setState({burgerActive:!this.state.burgerActive})}},{key:"render",value:function(e){var t=e.base,n=void 0===t?"":t;return(0,s.h)("div",{id:"menu",className:"mainnav"},(0,s.h)("div",{className:"container"},(0,s.h)("nav",{className:"navbar"},(0,s.h)("div",{className:"navbar-brand"},(0,s.h)("a",{className:"navbar-item",href:"/"},(0,s.h)("img",{src:c.default,alt:"Serverless lab - Effective Serverless, AWS Lambda, and Node.js training",width:"112",height:"28"})),(0,s.h)("div",{onClick:this._burgerClick,className:"navbar-burger "+(this.state.burgerActive?"is-active":""),"data-target":"navMenu-main"},(0,s.h)("span",null," "),(0,s.h)("span",null," "),(0,s.h)("span",null," "))),(0,s.h)("div",{id:"navMenu-main",className:"navbar-menu "+(this.state.burgerActive?"is-active":"")},(0,s.h)("div",{className:"navbar-start"},(0,s.h)("a",{className:"navbar-item",href:n+"#value-proposition"},"Our offer"),(0,s.h)("a",{className:"navbar-item",href:n+"#why-serverless"},"Why Serverless?"),(0,s.h)("a",{className:"navbar-item",href:n+"#curricula"},"Curricula"),(0,s.h)("a",{className:"navbar-item",href:n+"#instructors"},"Instructors"),(0,s.h)("a",{className:"navbar-item",href:n+"#why-training"},"ROI"))))))}}]),t}(s.Component);t.default=u},function(e,t,n){e.exports=n.p+"2ccb0d7b9c1788ac1ceff2c502d16e16.jpg"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(12),a=r(i),s=n(3),l=r(s),c=function(){return(0,o.h)("section",{id:"footer",className:"section footer"},(0,o.h)("div",{className:"container"},(0,o.h)("div",{className:"columns"},(0,o.h)("div",{className:"column is-three-quarters"},(0,o.h)("div",{className:"content"},(0,o.h)("p",{className:"is-size-6"},"Copyright — © Serverlesslab 2017",(0,o.h)("br",null),(0,o.h)("span",{className:"is-size-7"},"All rights reserved")),(0,o.h)("p",{className:"is-size-7"},"Cover photo by Igor Ovsyannykov on ",(0,o.h)("a",{href:"https://unsplash.com/photos/vdWewqfr_V0",target:"_blank"},"Unsplash"),(0,o.h)("br",null),"Icons set (Science-icons) by ",(0,o.h)("a",{href:"https://www.swifticons.com/",target:"_blank"},"SwiftIcons"),(0,o.h)("br",null),"Adopting ",(0,o.h)("a",{href:"https://bulma.io",target:"_blank"},"Bulma")," CSS framework"))),(0,o.h)("div",{className:"column is-one-quarter"},(0,o.h)("div",{className:"content"},(0,o.h)("p",{className:"is-size-7 has-text-centered"},(0,o.h)("a",{href:"/",className:"image"},(0,o.h)("img",{style:{maxWidth:"300px"},src:l.default,alt:"Serverless lab - Effective Serverless, AWS Lambda, and Node.js training"}))),(0,o.h)("p",{className:"is-size-7 has-text-centered"},"Built with ",(0,o.h)("strong",null,"♥︎")," in ",(0,o.h)("strong",null,"Dublin"),(0,o.h)("br",null),"by a ",(0,o.h)("strong",null,"Corkonian")," and a ",(0,o.h)("strong",null,"Sicilian")),(0,o.h)("p",{className:"has-text-centered"},(0,o.h)(a.default,null)))))))};t.default=c},function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),a=(r(i),n(6)),s=r(a),l=n(7),c=r(l),u=n(8),f=r(u),d=n(9),p=r(d),m=n(10),v=r(m),h=n(11),b=r(h),y=n(14),g=r(y),w=[],_=!1,k=document.all&&!window.atob,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},N=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(_=!0),_)return w=(0,b.default)(w,x),(0,v.default)(w,x.once),w},S=function(){w=(0,g.default)(),N()},j=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},C=function(e){return!0===e||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&!0===e()},O=function(e){return x=o(x,e),w=(0,g.default)(),C(x.disable)||k?j():(document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?N(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){N(!0)}):document.addEventListener(x.startEvent,function(){N(!0)}),window.addEventListener("resize",(0,c.default)(N,50,!0)),window.addEventListener("orientationchange",(0,c.default)(N,50,!0)),window.addEventListener("scroll",(0,s.default)(function(){(0,v.default)(w,x.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,c.default)(S,50,!0)}),(0,f.default)("[data-aos]",S),w)};e.exports={init:O,refresh:N,refreshHard:S}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function r(t){var n=v,r=h;return v=h=void 0,_=t,y=e.apply(r,n)}function i(e){return _=e,g=setTimeout(u,t),S?r(e):y}function a(e){var n=e-w,r=e-_,o=t-n;return j?x(o,b-r):o}function l(e){var n=e-w,r=e-_;return void 0===w||n>=t||n<0||j&&r>=b}function u(){var e=N();return l(e)?f(e):void(g=setTimeout(u,a(e)))}function f(e){return g=void 0,C&&v?r(e):(v=h=void 0,y)}function d(){void 0!==g&&clearTimeout(g),_=0,v=w=h=g=void 0}function p(){return void 0===g?y:f(N())}function m(){var e=N(),n=l(e);if(v=arguments,h=this,w=e,n){if(void 0===g)return i(w);if(j)return g=setTimeout(u,t),r(w)}return void 0===g&&(g=setTimeout(u,t)),y}var v,h,b,y,g,w,_=0,S=!1,j=!1,C=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,o(n)&&(S=!!n.leading,j="maxWait"in n,b=j?k(s(n.maxWait)||0,t):b,C="trailing"in n?!!n.trailing:C),m.cancel=d,m.flush=p,m}function r(e,t,r){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return o(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),n(e,t,{leading:i,maxWait:t,trailing:a})}function o(e){var t=void 0===e?"undefined":l(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==(void 0===e?"undefined":l(e))}function a(e){return"symbol"==(void 0===e?"undefined":l(e))||i(e)&&_.call(e)==f}function s(e){if("number"==typeof e)return e;if(a(e))return u;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=m.test(e);return n||v.test(e)?h(e.slice(2),n?2:8):p.test(e)?u:+e}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",u=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,v=/^0o[0-7]+$/i,h=parseInt,b="object"==(void 0===t?"undefined":l(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":l(self))&&self&&self.Object===Object&&self,g=b||y||Function("return this")(),w=Object.prototype,_=w.toString,k=Math.max,x=Math.min,N=function(){return g.Date.now()};e.exports=r}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=v,r=h;return v=h=void 0,N=t,y=e.apply(r,n)}function i(e){return N=e,g=setTimeout(u,t),S?o(e):y}function s(e){var n=e-w,r=e-N,o=t-n;return j?k(o,b-r):o}function c(e){var n=e-w,r=e-N;return void 0===w||n>=t||n<0||j&&r>=b}function u(){var e=x();return c(e)?f(e):void(g=setTimeout(u,s(e)))}function f(e){return g=void 0,C&&v?o(e):(v=h=void 0,y)}function d(){void 0!==g&&clearTimeout(g),N=0,v=w=h=g=void 0}function p(){return void 0===g?y:f(x())}function m(){var e=x(),n=c(e);if(v=arguments,h=this,w=e,n){if(void 0===g)return i(w);if(j)return g=setTimeout(u,t),o(w)}return void 0===g&&(g=setTimeout(u,t)),y}var v,h,b,y,g,w,N=0,S=!1,j=!1,C=!0;if("function"!=typeof e)throw new TypeError(l);return t=a(t)||0,r(n)&&(S=!!n.leading,j="maxWait"in n,b=j?_(a(n.maxWait)||0,t):b,C="trailing"in n?!!n.trailing:C),m.cancel=d,m.flush=p,m}function r(e){var t=void 0===e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==(void 0===e?"undefined":s(e))}function i(e){return"symbol"==(void 0===e?"undefined":s(e))||o(e)&&w.call(e)==u}function a(e){if("number"==typeof e)return e;if(i(e))return c;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=p.test(e);return n||m.test(e)?v(e.slice(2),n?2:8):d.test(e)?c:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",c=NaN,u="[object Symbol]",f=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,v=parseInt,h="object"==(void 0===t?"undefined":s(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,y=h||b||Function("return this")(),g=Object.prototype,w=g.toString,_=Math.max,k=Math.min,x=function(){return y.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!s&&i&&(s=new i(r),s.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),r()}function r(){for(var e,t,n=0,r=a.length;n<r;n++){e=a[n],t=o.querySelectorAll(e.selector);for(var i,s=0,l=t.length;s<l;s++)i=t[s],i.ready||(i.ready=!0,e.fn.call(i,i))}}Object.defineProperty(t,"__esModule",{value:!0});var o=window.document,i=window.MutationObserver||window.WebKitMutationObserver,a=[],s=void 0;t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){n(this,e)}return o(e,[{key:"phone",value:function(){var e=r();return!(!i.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=r();return!(!s.test(e)&&!l.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var r=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==r&&("false"===r||!n&&"true"!==r)&&e.node.classList.remove("aos-animate")},r=function(e,t){var r=window.pageYOffset,o=window.innerHeight;e.forEach(function(e,i){n(e,o+r,t)})};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)}),e};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(13),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e,t){var n=0,r=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(r=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,o.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(r=t),n+r};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e})}),t};t.default=n}])})},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2),i=function(){return(0,r.h)("a",{href:"https://github.com/lucpod/serverlesslab.com",className:"versionBadge"},(0,r.h)("span",{className:"version"},"v",o.version),(0,r.h)("span",{className:"date"},o.versionDate))};t.default=i},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n(0),a=n(5),s=r(a);n(6);var l=n(7),c=r(l),u=n(39),f=r(u),d=n(9),p=r(d),m=n(4),v=r(m),h=n(10),b=r(h),y=function(){return(0,i.h)("div",null,(0,i.h)(c.default,{base:"/"}),(0,i.h)(f.default,null),(0,i.h)(p.default,null))},g=function(e){var t=e.assets;return(0,i.h)(s.default,{title:"Serverless Lab - Serverless workshops from serverless and AWS experts",metatags:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:"Serverless workshops from serverless and AWS experts"},{name:"theme-color",content:"#ffffff"}],links:[{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"},{rel:"manifest",href:"/manifest.json"},{rel:"mask-icon",color:"#00386d",href:"/safari-pinned-tab.svg"}],stylesheets:["style-"+o.version+".css"],scripts:[""+t.page404]},(0,i.h)("div",{id:"main"},(0,i.h)(y,null)))};window&&document&&(window.onload=function(){var e=document.getElementById("main");(0,i.render)((0,i.h)(y,{isClient:!0}),e,e.firstChild),-1===window.location.href.indexOf("localhost")&&(0,v.default)(),b.default&&b.default.init({duration:600})}),t.default=g},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(1),a=r(i),s=n(8),l=r(s),c=n(40),u=r(c),f=function(){return(0,o.h)("div",{style:{position:"relative"}},(0,o.h)(a.default,{upClass:"neutral",style:{position:"absolute",top:0,zIndex:100}}),(0,o.h)("section",{id:"hero",className:"notfound section is-medium is-primary is-bold",style:{backgroundImage:"url("+l.default+")"}},(0,o.h)("div",{className:"hero-body"},(0,o.h)("div",{className:"container"},(0,o.h)("p",{className:"has-text-centered","data-aos":"zoom-out","data-aos-delay":"400"},(0,o.h)("img",{className:"logo",src:u.default,alt:"Serverless lab",style:{maxWidth:"600px",width:"100%"}})),(0,o.h)("p",{className:"main-text notfound has-text-centered is-size-1","data-aos":"zoom-out","data-aos-delay":"600"},"Page Not Found"),(0,o.h)("p",{className:"has-text-centered is-size-3"},(0,o.h)("a",{href:"/"},"Go back to the Home Page"))))))};t.default=f},function(e,t,n){e.exports=n.p+"36d59c5b127948c0b9ae202147ecb028.svg"}])});
//# sourceMappingURL=page404-1.0.7.js.map