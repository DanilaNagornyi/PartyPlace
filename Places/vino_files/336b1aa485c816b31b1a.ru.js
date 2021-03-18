(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["indoor"],{1102:function(e,n,t){"use strict";var r=t(26);n.a=Object(r.a)(function(){return Promise.resolve().then(t.bind(null,2720))},{updateIndoor:!0})},112:function(e,n,t){"use strict";n.a=function(e){return e}},1177:function(e,n,t){"use strict";t.r(n);var r=t(6),o=t(10),a=t(4),i=t(12),u=t(2798),c=t(2809),l=t(2795),s=t(450),f=t(1209),v=t(447),p=t(1210),d=t(967);var b=t(2797),h=t(9),m=t(60),O=t(17),j=t(55),_=t(336),g=t(1102),I=t(350),w=t(351),L=t(30),C={updateIndoor:g.a.updateIndoor},E=Object(O.a)(h.b,Object(m.b)({shouldWait:!0}),i.b(function(e){return Object(o.a)(Object(o.a)({},e.indoor),{},{mapLocation:e.map.location,mapCamera:e.map.camera,searchResult:I.b(e),isIndoorLayerHidden:e.panoramas.isLayerEnabled||e.mrc.isLayerEnabled})},C)),y=.2,A=400,V=16.5,k=function(e){function n(){var n;return(n=e.apply(this,arguments)||this)._updatePlans=function(e){var t=n.props,r=n._getPlans();if(!r||0===r.length)return e&&e.plans&&e.plans.forEach(function(e){return e.setVisible(!1)}),void(null!==t.plans&&t.updateIndoor({plans:null,levelId:null}));if(!Object(u.a)(r,t.plans)){var o=t.levelId||r[0].getDefaultLevel().id,a=t.searchResult;if(a){var i=w.a(a),l=r.some(function(e){return Object(c.a)(e.getBounds(),a.coordinates)});i&&l&&!t.levelId&&(o=i)}if(e&&e.plans){var s=r.map(function(e){return e.getId()});e.plans.filter(function(e){return!s.includes(e.getId())}).forEach(function(e){return e.setVisible(!1)})}n.props.updateIndoor({plans:r,levelId:o})}},n._applyLevel=function(){var e=n.props,t=e.levelId;e.plans&&t&&e.plans.forEach(function(e){e.getLevels().map(function(e){return e.id}).includes(t)?(e.setVisible(!0),e.setActiveLevel(t)):e.setVisible(!1)})},n._onSearchResultChange=function(){var e=n.props,t=e.searchResult;if(t&&e.plans){var r=w.a(t),o=e.plans.some(function(e){return Object(c.a)(e.getBounds(),t.coordinates)});r&&o&&e.updateIndoor({levelId:r})}},n._shouldHover=function(e){return Boolean(n.props.onClick&&e.properties.uri)},n._getPlans=function(){var e=n.props.mapLocation,t=e.bounds,r=e.zoom,o=e.center,a=n.props.map.getIndoorPlans();if(!a)return null;var i=a.filter(function(e){var n=e.getBounds(),a=function(e,n,t){var r=Object(v.a)(e,t),o=Object(v.a)(n,t),a=(i=r,u=o,Object(d.a)(i,u)?[[Math.max(i[0][0],u[0][0]),Math.max(i[0][1],u[0][1])],[Math.min(i[1][0],u[1][0]),Math.min(i[1][1],u[1][1])]]:null);var i,u;if(!a)return!1;return M(a)/M(o)>y}(t,n,r),i=Object(c.a)(n,o);return a||i});if(0===i.length)return null;var u=i.sort(function(e,n){return P(n,o,r)-P(e,o,r)}),p=u[0].getBounds();return u.filter(function(e){return function(e,n,t){return Object(l.a)(Object(s.a)(Object(f.a)(Object(v.a)(e,t)),t),Object(s.a)(Object(f.a)(Object(v.a)(n,t)),t))}(p,e.getBounds(),r)<A})},n._renderLayer=function(){var e=n.props;return e.mapLocation.zoom<V||e.isIndoorLayerHidden?null:a.createElement(_.a,{layer:"indoor",onClick:e.onClick,shouldHover:n._shouldHover})},n}Object(r.a)(n,e);var t=n.prototype;return t.componentDidMount=function(){this._updatePlans()},t.componentDidUpdate=function(e){var n=this.props;e.mapLocation!==n.mapLocation&&this._updatePlans(e),!!n.searchResult&&(!e.searchResult||!L.b(n.searchResult,e.searchResult))&&this._onSearchResultChange(),e.plans===n.plans&&e.levelId===n.levelId||this._applyLevel()},t.render=function(){var e=this;return a.createElement(a.Fragment,null,this._renderLayer(),a.createElement(j.b,{onIndoorPlansChanged:function(){return e._updatePlans()}}))},n}(a.PureComponent);function M(e){return Object(p.a)(e).reduce(function(e,n){return e*n},1)}function P(e,n,t){return Math.abs(Object(b.a)(Object(f.a)(Object(v.a)(e.getBounds(),t)),n))}k.displayName="IndoorComponent";n.default=E(k)},1185:function(e,n,t){"use strict";t.r(n);var r=t(6),o=t(4),a=t(12),i=t(607),u=t(1102),c=(t(2515),t(7)),l=t(9),s=t(117),f=t(43),v=t(8),p=t(11),d=t(2800),b=t(2517),h=t.n(b),m=Object(c.a)("indoor-levels-control"),O=40,j=100,_=768,g=function(e){function n(n){var t;return(t=e.call(this,n)||this)._ref=o.createRef(),t._canClick=!0,t._getMaxVisibleFloors=function(){return window.innerHeight<_?5:7},t._onResize=function(){t.setState({maxVisibleFloors:t._getMaxVisibleFloors()})},t._onMouseMove=function(){t._canClick||(t._canClick=!0)},t._onScroll=function(){var e=t._ref.current.scrollTop,n=(t.props.levels.length-t.state.maxVisibleFloors)*O;n<=0||t.setState({isUpArrowVisible:e>O/2,isDownArrowVisible:e<n-O/2})},t._onArrowClick=function(e){var n=t._ref.current.scrollTop+O*("up"===e?-1:1);t._ref.current.scrollTop=n,0!==n&&n!==(t.props.levels.length-t.state.maxVisibleFloors)*O||(t._canClick=!1)},t._onLevelClick=function(e){t._canClick&&t.props.setActiveLevelId(e)},t._renderButton=function(e){var n=t.props.activeLevelId===e.id;return o.createElement(v.a,{key:e.id,name:"floor",nodeState:{value:e.name,active:n},logClick:!0},o.createElement("div",{className:m("level",{active:n}),onClick:function(){return t._onLevelClick(e.id)}},e.id))},t._renderArrow=function(e){return t.props.levels.length<=t.state.maxVisibleFloors||"up"===e&&!t.state.isUpArrowVisible||"down"===e&&!t.state.isDownArrowVisible?null:o.createElement(f.a,{text:"up"===e?"Выше":"Ниже",position:"left",key:e,isAir:!0},o.createElement(v.a,{name:"zoom_in",logClick:!0},o.createElement("div",{className:m("arrow",{direction:e}),onClick:function(){return t._onArrowClick(e)}},o.createElement(p.a,{className:m("arrow-icon"),url:h.a}))))},t.state={isUpArrowVisible:!1,isDownArrowVisible:!1,maxVisibleFloors:t._getMaxVisibleFloors()},t._onScrollThrottled=Object(d.a)(t._onScroll,j),t}Object(r.a)(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this,n=this.props.levels.findIndex(function(n){return n.id===e.props.activeLevelId}),t=this.state.maxVisibleFloors;this.props.levels.length>t&&n>Math.floor(t/2)&&this._ref.current.scrollTo({top:(n-Math.floor(t/2))*O,behavior:"smooth"}),this._onScroll()},t.componentWillUnmount=function(){this._onScrollThrottled.cancel()},t.render=function(){return o.createElement("div",{className:m(),onMouseMove:this._onMouseMove},this._renderArrow("up"),o.createElement("div",{className:m("wrapper"),onScroll:this._onScrollThrottled,ref:this._ref},this.props.levels.map(this._renderButton)),this._renderArrow("down"),o.createElement(s.a,{type:"resize",listener:this._onResize}))},n}(o.PureComponent),I=Object(l.b)(g),w={updateIndoor:u.a.updateIndoor},L=a.b(function(e){var n=e.indoor.plans||[],t=n.reduce(function(e,n){return[].concat(e,n.getLevels())},[]),r=Object(i.a)(t,"id");return r=n.length>1?r.sort(function(e,n){return Number(n.name)-Number(e.name)}):r.reverse(),{levelId:e.indoor.levelId,levels:r}},w),C=function(e){function n(){var n;return(n=e.apply(this,arguments)||this)._setActiveLevelId=function(e){n.props.updateIndoor({levelId:e})},n}return Object(r.a)(n,e),n.prototype.render=function(){var e=this.props;return e.levelId&&0!==e.levels.length?o.createElement(I,{levels:e.levels,activeLevelId:e.levelId,setActiveLevelId:this._setActiveLevelId}):null},n}(o.PureComponent);n.default=L(C)},120:function(e,n,t){"use strict";var r=t(251),o=t(126),a=1,i=2;var u=function(e,n,t,u){var c=t.length,l=c,s=!u;if(null==e)return!l;for(e=Object(e);c--;){var f=t[c];if(s&&f[2]?f[1]!==e[f[0]]:!(f[0]in e))return!1}for(;++c<l;){var v=(f=t[c])[0],p=e[v],d=f[1];if(s&&f[2]){if(void 0===p&&!(v in e))return!1}else{var b=new r.a;if(u)var h=u(p,d,v,e,n,b);if(!(void 0===h?Object(o.a)(d,p,a|i,u,b):h))return!1}}return!0},c=t(100);var l=function(e){return e==e&&!Object(c.a)(e)},s=t(217);var f=function(e){for(var n=Object(s.a)(e),t=n.length;t--;){var r=n[t],o=e[r];n[t]=[r,o,l(o)]}return n};var v=function(e,n){return function(t){return null!=t&&(t[e]===n&&(void 0!==n||e in Object(t)))}};var p=function(e){var n=f(e);return 1==n.length&&n[0][2]?v(n[0][0],n[0][1]):function(t){return t===e||u(t,e,n)}},d=t(89);var b=function(e,n,t){var r=null==e?void 0:Object(d.a)(e,n);return void 0===r?t:r},h=t(127),m=t(62),O=t(45),j=1,_=2;var g=function(e,n){return Object(m.a)(e)&&l(n)?v(Object(O.a)(e),n):function(t){var r=b(t,e);return void 0===r&&r===n?Object(h.a)(t,e):Object(o.a)(n,r,j|_)}},I=t(112),w=t(44),L=t(231);var C=function(e){return function(n){return Object(d.a)(n,e)}};var E=function(e){return Object(m.a)(e)?Object(L.a)(Object(O.a)(e)):C(e)};n.a=function(e){return"function"==typeof e?e:null==e?I.a:"object"==typeof e?Object(w.a)(e)?g(e[0],e[1]):p(e):E(e)}},127:function(e,n,t){"use strict";var r=function(e,n){return null!=e&&n in Object(e)},o=t(83),a=t(145),i=t(44),u=t(122),c=t(219),l=t(45);var s=function(e,n,t){for(var r=-1,s=(n=Object(o.a)(n,e)).length,f=!1;++r<s;){var v=Object(l.a)(n[r]);if(!(f=null!=e&&t(e,v)))break;e=e[v]}return f||++r!=s?f:!!(s=null==e?0:e.length)&&Object(c.a)(s)&&Object(u.a)(v,s)&&(Object(i.a)(e)||Object(a.a)(e))};n.a=function(e,n){return null!=e&&s(e,n,r)}},129:function(e,n,t){"use strict";var r=t(216),o="Expected a function";function a(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError(o);var t=function(){var r=arguments,o=n?n.apply(this,r):r[0],a=t.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return t.cache=a.set(o,i)||a,i};return t.cache=new(a.Cache||r.a),t}a.Cache=r.a,n.a=a},250:function(e,n,t){"use strict";var r=t(406);var o=function(e,n,t,r){for(var o=e.length,a=t+(r?1:-1);r?a--:++a<o;)if(n(e[a],a,e))return a;return-1};var a=function(e){return e!=e};var i=function(e,n,t){for(var r=t-1,o=e.length;++r<o;)if(e[r]===n)return r;return-1};var u=function(e,n,t){return n==n?i(e,n,t):o(e,a,t)};var c=function(e,n){return!!(null==e?0:e.length)&&u(e,n,0)>-1};var l=function(e,n,t){for(var r=-1,o=null==e?0:e.length;++r<o;)if(t(n,e[r]))return!0;return!1},s=t(349),f=t(348);var v=function(){},p=t(196),d=f.a&&1/Object(p.a)(new f.a([,-0]))[1]==1/0?function(e){return new f.a(e)}:v,b=200;n.a=function(e,n,t){var o=-1,a=c,i=e.length,u=!0,f=[],v=f;if(t)u=!1,a=l;else if(i>=b){var h=n?null:d(e);if(h)return Object(p.a)(h);u=!1,a=s.a,v=new r.a}else v=n?[]:f;e:for(;++o<i;){var m=e[o],O=n?n(m):m;if(m=t||0!==m?m:0,u&&O==O){for(var j=v.length;j--;)if(v[j]===O)continue e;n&&v.push(O),f.push(m)}else a(v,O,t)||(v!==f&&v.push(O),f.push(m))}return f}},2515:function(e,n,t){},2517:function(e,n,t){e.exports=t.p+"_/a5fb1dbfcdb9e65ed3eb2e8ca3d25b71.svg"},2720:function(e,n,t){"use strict";t.r(n);var r=t(10),o={updateIndoor:function(e){return function(n,t){var o=t();n({type:"EXTEND",payload:{indoor:Object(r.a)(Object(r.a)({},o.indoor),e)}})}}};n.default=o},351:function(e,n,t){"use strict";function r(e){return"businessProperties"in e&&e.businessProperties&&e.businessProperties.level||null}function o(e,n){var t;return n.isVectorEnabled&&"businessProperties"in e&&Boolean(null===(t=e.businessProperties)||void 0===t?void 0:t["indoor-plan-id"])}t.d(n,"a",function(){return r}),t.d(n,"b",function(){return o})},45:function(e,n,t){"use strict";var r=t(94),o=1/0;n.a=function(e){if("string"==typeof e||Object(r.a)(e))return e;var n=e+"";return"0"==n&&1/e==-o?"-0":n}},607:function(e,n,t){"use strict";var r=t(120),o=t(250);n.a=function(e,n){return e&&e.length?Object(o.a)(e,Object(r.a)(n,2)):[]}},62:function(e,n,t){"use strict";var r=t(44),o=t(94),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;n.a=function(e,n){if(Object(r.a)(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Object(o.a)(e))||(i.test(e)||!a.test(e)||null!=n&&e in Object(n))}},83:function(e,n,t){"use strict";var r=t(44),o=t(62),a=t(129),i=500;var u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,l=function(e){var n=Object(a.a)(e,function(e){return t.size===i&&t.clear(),e}),t=n.cache;return n}(function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(u,function(e,t,r,o){n.push(r?o.replace(c,"$1"):t||e)}),n}),s=t(181);n.a=function(e,n){return Object(r.a)(e)?e:Object(o.a)(e,n)?[e]:l(Object(s.a)(e))}},89:function(e,n,t){"use strict";var r=t(83),o=t(45);n.a=function(e,n){for(var t=0,a=(n=Object(r.a)(n,e)).length;null!=e&&t<a;)e=e[Object(o.a)(n[t++])];return t&&t==a?e:void 0}}}]);