(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["stop-preview"],{1179:function(e,t,n){"use strict";n.r(t);var r=n(10),i=n(6),a=(n(2532),n(4)),o=n(7),s=n(9),c=n(18),u=n(124),l=(n(2534),n(36)),f=n(11),d=Object(o.a)("masstransit-stop-preview-transports-view"),p=176,v=70,m=4,h=4,g=10,b=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.transports[0].type,n=O(e.transports);n=e.transports.length!==n.length?O(n,28):n;var r=l.d({type:"masstransit",name:t,size:"normal"},e.config);return a.createElement("div",{className:d({type:t})},r?a.createElement(f.a,{className:d("icon"),url:r}):null,n.map(function(t,r){var i=t.name;return a.createElement("div",{key:r,className:d("transport",{fully:e.transports.length===n.length&&r===n.length-1})},i)}),e.transports.length!==n.length?a.createElement("div",{className:d("remaining-transport")},"+",e.transports.length-n.length):null)},t}(a.Component);function O(e,t){return void 0===t&&(t=0),e.filter(function(e){return(t+=function(e){var t=e.name.length*g+2*m;return t>v?v:t}(e)+h)<p})}var j=Object(s.b)(b),S=n(198),w=n(8),y=n(58),E=Object(o.a)("masstransit-stop-preview-view"),B={main:4,side:4},I=function(e){function t(t){var n;return(n=e.call(this,t)||this)._timerId=0,n._renderStopPreviewInfo=function(e){var t=e.transports.reduce(function(e,t){var n;return Object(r.a)(Object(r.a)({},e),{},((n={})[t.type]=[].concat(e[t.type]||[],[t]),n))},{});return a.createElement("div",{className:E()},a.createElement("div",{className:E("title")},e.name),a.createElement("div",{className:E("transports-by-types")},Object.entries(t).sort(function(e,t){return e[0]<t[0]?-1:1}).map(function(e,t){var n=e[1];return a.createElement(j,{key:t,transports:Object(y.q)(n)})})))},n.state={stopPreviewInfo:null},n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=this.props;this._timerId=window.setTimeout(function(){e._loadAction=c.a.create(S.a.getPreviewStopInfo({uri:t.uri},t.config),{success:function(t){e.setState({stopPreviewInfo:t})}})},200)},n.componentWillUnmount=function(){c.a.cancel(this._loadAction),window.clearTimeout(this._timerId)},n.render=function(){return this.state.stopPreviewInfo&&0!==this.state.stopPreviewInfo.transports.length?a.createElement(w.a,{name:"masstransit_preview"},a.createElement(u.a,{coordinates:this.state.stopPreviewInfo.coordinates,position:["left-top","left-bottom","right-top","right-bottom","left","right","top","bottom"],offset:B,showArrow:!1,isShown:!0},this._renderStopPreviewInfo(this.state.stopPreviewInfo))):null},t}(a.Component);t.default=Object(s.b)(I)},180:function(e,t,n){"use strict";var r=n(321),i=n(229),a=n(145),o=n(44),s=i.a?i.a.isConcatSpreadable:void 0;var c=function(e){return Object(o.a)(e)||Object(a.a)(e)||!!(s&&e&&e[s])};t.a=function e(t,n,i,a,o){var s=-1,u=t.length;for(i||(i=c),o||(o=[]);++s<u;){var l=t[s];n>0&&i(l)?n>1?e(l,n-1,i,a,o):Object(r.a)(o,l):a||(o[o.length]=l)}return o}},198:function(e,t,n){"use strict";var r,i=n(10),a=n(323),o=n(25),s=6e4,c={loadLayerRegions:function(e){return r||(r=Object(o.a)("masstransit/getLayerRegions",{},e).catch(function(){return[]}))},getStopInfo:function(e,t){return Object(o.a)("masstransit/getStopInfo",{query:{id:e.id,uri:e.uri,locale:t.locale,lang:t.lang,mode:"prognosis"}},t).then(function(e){if(!e)throw new Error("Stop no data");return e})},getPreviewStopInfo:function(e,t){return Object(o.a)("masstransit/getPreviewStopInfo",{query:{uri:e.uri,locale:t.locale,lang:t.lang,mode:"prognosis"}},t)},getStopTimetable:function(e,t){return Object(o.a)("masstransit/getStopTimetable",{query:{id:e.id,timestamp:e.timestamp,locale:t.locale,lang:t.lang}},t).then(function(e){if(!e)return null;var t=function(e){return{id:e.id,name:e.name,type:e.type,currentTime:e.currentTime,region:e.region,tzOffset:e.tzOffset,transports:Object(a.a)(e.transports.map(function(e){return Object(a.a)(e.threads.map(function(t){var n=[];return t.BriefSchedule&&t.BriefSchedule.Frequencies.length>0&&n.push.apply(n,t.BriefSchedule.Frequencies.map(function(n){var r;return Object(i.a)(Object(i.a)({},e),{},{threads:[Object(i.a)(Object(i.a)({},t),{},{BriefSchedule:{Frequencies:[n],Events:[],departureTime:null===(r=t.BriefSchedule)||void 0===r?void 0:r.departureTime}})]})})),t.BriefSchedule&&t.BriefSchedule.Events.length>0&&n.push.apply(n,t.BriefSchedule.Events.map(function(n){var r;return Object(i.a)(Object(i.a)({},e),{},{threads:[Object(i.a)(Object(i.a)({},t),{},{BriefSchedule:{Frequencies:[],Events:[n],departureTime:null===(r=t.BriefSchedule)||void 0===r?void 0:r.departureTime}})]})})),0===n.length&&n.push(Object(i.a)(Object(i.a)({},e),{},{threads:[Object(i.a)({},t)]})),n}))}))}}(e);return t.transports=t.transports.filter(function(e){return u(e,t.currentTime)>0}).sort(function(e,n){return u(e,t.currentTime)-u(n,t.currentTime)}),t})},getVehiclesInfo:function(e,t){return Object(o.a)("masstransit/getVehiclesInfoWithRegion",{query:Object(i.a)({locale:t.locale,lang:t.lang},e)},t)},getVehiclePredictionInfo:function(e,t){return Object(o.a)("masstransit/getVehiclePredictionInfo",{query:Object(i.a)({},e)},t)},getLine:function(e,t){return Object(o.a)("masstransit/getLine",{query:Object(i.a)({locale:t.locale,lang:t.lang},e)},t)},getDistance:function(e,t){return Object(o.a)("masstransit/distance",{query:{startPoint:e.coordinates.join(","),destinationPoints:e.stops.map(function(e){return e.coordinates.join(",")}),locale:t.locale}},t)}};function u(e,t){var n,r,i,a,o=e.threads[0];if((null==o?void 0:null===(n=o.BriefSchedule)||void 0===n?void 0:n.Events)&&(null===(r=o.BriefSchedule)||void 0===r?void 0:r.Events.length)>0){var c,u,l=(null===(c=o.BriefSchedule.Events[0].Estimated)||void 0===c?void 0:c.value)||(null===(u=o.BriefSchedule.Events[0].Scheduled)||void 0===u?void 0:u.value);if(l){var f=1e3*Number(l);return f-t<s?f-t:f}}if((null==o?void 0:null===(i=o.BriefSchedule)||void 0===i?void 0:i.Frequencies)&&(null==o?void 0:null===(a=o.BriefSchedule)||void 0===a?void 0:a.Frequencies.length)>0){var d=1e3*o.BriefSchedule.Frequencies[0].value,p=o.BriefSchedule.Frequencies[0].begin?1e3*Number(o.BriefSchedule.Frequencies[0].begin.value):void 0,v=o.BriefSchedule.Frequencies[0].end?1e3*Number(o.BriefSchedule.Frequencies[0].end.value):void 0;return v&&v<t?-1/0:!p||p<t?d:p}return-1/0}t.a=c},2532:function(e,t,n){},2534:function(e,t,n){},323:function(e,t,n){"use strict";var r=n(180);t.a=function(e){return(null==e?0:e.length)?Object(r.a)(e,1):[]}}}]);