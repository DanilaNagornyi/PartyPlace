(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["tooltip"],{271:function(t,o,n){"use strict";n.r(o);var i,e,r=n(6),l=n(4),s=n(5),a=n(9),u=n(10),c=n(84),p=n(2765),d=n(0),f=Math.floor(1e4*Math.random()),h=[],v=2,_=1;function C(t,o){var n,i,e,r=null===(n=o.bunker.tooltipConfigs)||void 0===n?void 0:n[t];return{maxCount:null!==(i=null==r?void 0:r.maxCount)&&void 0!==i?i:v,priority:null!==(e=null==r?void 0:r.priority)&&void 0!==e?e:_,oncePerSession:Boolean(null==r?void 0:r.oncePerSession),showConstantly:Boolean(null==r?void 0:r.showConstantly)}}function m(t){var o;return(d.a.get("notifications")||((o={})[t]=0,o))[t]||0}function S(t,o){var n;d.a.set("notifications",Object(u.a)(Object(u.a)({},d.a.get("notifications")),{},((n={})[t]=o,n)))}function w(t){var o=function(t){if(t.mocks&&!t.query["with-tooltip"])return null;var o=h.filter(function(o){var n=C(o.tooltipId,t).maxCount,e=m(o.tooltipId);return o.oncePerSession||i!==o.tooltipId?e<n:e<=n});if(0===o.length)return null;var n=o.map(function(t){return t.priority}).reduce(function(t,o){return Math.max(t,o)},-1),e=o.filter(function(t){return t.priority===n});return e[f%e.length].tooltipId}(t);i&&e.has(i)&&C(i,t).oncePerSession&&(i=null),e=new Set,void 0!==i&&i!==o&&(o=null),h.forEach(function(n){var e=n.tooltipId===o;n.update(e);var r=i!==n.tooltipId;if(e&&r){i=n.tooltipId;var l=m(n.tooltipId);l<C(n.tooltipId,t).maxCount&&S(n.tooltipId,l+1)}})}var g=Object(p.a)(w,1e3);function k(t,o,n){var i=C(t,n),r=c.v4(),l={tooltipId:t,update:o,id:r,priority:i.priority,oncePerSession:i.oncePerSession};return i.priority>0&&h.push(l),g(n),function(){return function(t,o){var n=h.find(function(o){return t===o.id});if(!n)return;e.add(n.tooltipId),h=h.filter(function(t){return t!==n}),g(o)}(r,n)}}var y=n(8),O=n(993),T=n(22),I=n(595),E=n(87),P=a.b,L=function(t){function o(o){var n;return(n=t.call(this,o)||this)._ref=l.createRef(),n._updateShown=function(t){n.setState({isShown:t})},n._setRef=function(t){var o=s.findDOMNode(t);n._ref.current=o instanceof HTMLElement?o:null},n._onTargetClick=function(){var t=n.props.hideForeverOnTargetClick,o=void 0===t||t;n._hideTooltip(o)},n._hideTooltip=function(t){var o,i,e,r,l,s;n.setState({isShown:!1}),t&&(e=n.props.id,r=n.props.config,l=C(e,r),s=l.maxCount,S(e,(l.showConstantly?m(e):s)+1),w(r)),null===(o=(i=n.props).onClose)||void 0===o||o.call(i)},n._onPopupClose=function(t){("click-outside"!==t.reason||n.props.closeOnOutsideClick)&&n.setState({isShown:!1})},n._onContentClick=function(t){t.stopPropagation(),n.props.closeOnContentClick&&n._hideTooltip(!0)},n._onContentClose=function(t){t.stopPropagation(),n._hideTooltip(!0)},n._renderPopup=function(){var t,o,i=n.props,e=null!==(t=i.zIndex)&&void 0!==t?t:E.a.tooltip;return l.createElement(T.a,{isShown:n.state.isShown,getTarget:i.getTarget||function(){return n._ref.current},type:"tooltip",zIndex:e,position:i.position,onClose:n._onPopupClose,onScroll:i.onScroll?i.onScroll:"reposition",checkTargetVisibility:void 0===i.checkTargetVisibility||i.checkTargetVisibility,offset:i.offset,arrowOffset:i.arrowOffset,showArrow:i.showArrow,ninjaMode:!0},l.createElement(y.a,{name:"tooltip",logClick:!0,nodeState:{id:i.id}},l.createElement(I.a,{title:i.title,text:i.text,controls:null===(o=i.renderControls)||void 0===o?void 0:o.call(i,n._hideTooltip),onClick:n._onContentClick,onClose:n._onContentClose})))},n.state={isShown:!1},n}Object(r.a)(o,t);var n=o.prototype;return n.componentDidMount=function(){var t;this._removeFromList=k(this.props.id,this._updateShown,this.props.config),null===(t=this._ref.current)||void 0===t||t.addEventListener("click",this._onTargetClick)},n.componentDidUpdate=function(t,o){var n;o.isShown&&!this.state.isShown&&(null===(n=this._removeFromList)||void 0===n||n.call(this))},n.componentWillUnmount=function(){var t,o;(null===(t=this._ref.current)||void 0===t||t.removeEventListener("click",this._onTargetClick),this.state.isShown)&&(null===(o=this._removeFromList)||void 0===o||o.call(this))},n.render=function(){var t=this.props;return l.createElement(l.Fragment,null,l.createElement(O.a,{ref:this._setRef},t.children),this._renderPopup())},o}(l.PureComponent);o.default=P(L)}}]);