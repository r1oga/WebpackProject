(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1276:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(l(0)),r=l(12),a=l(88),i=o(l(139));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function o(e){if(e&&e.__esModule)return e;var t=u();if(t&&t.has(e))return t.get(e);var l={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=n?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(l,r,a):l[r]=e[r]}}return l.default=e,t&&t.set(e,l),l}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,m(t).apply(this,arguments))}var l,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),l=t,(r=[{key:"componentWillMount",value:function(){this.props.findArtist(this.props.params.id)}},{key:"componentWillReceiveProps",value:function(e){e.params.id!==this.props.params.id&&this.props.findArtist(e.params.id)}},{key:"componentWillUnmount",value:function(){this.props.resetArtist()}},{key:"onDeleteClick",value:function(){this.props.deleteArtist(this.props.params.id)}},{key:"renderAlbums",value:function(){var e=this.props.artist.albums;if(e&&e.map)return e.map((function(e){return n.default.createElement("div",{className:"card album",key:e.title},n.default.createElement("div",{className:"card-image"},n.default.createElement("img",{src:e.image}),n.default.createElement("span",{className:"card-title"},n.default.createElement("h4",null,e.title))),n.default.createElement("div",{className:"card-content"},n.default.createElement("div",null,n.default.createElement("h5",null,e.copiesSold),n.default.createElement("i",null,"copies sold")),n.default.createElement("div",null,n.default.createElement("h5",null,e.numberTracks),n.default.createElement("i",null,"tracks"))))}))}},{key:"render",value:function(){if(!this.props.artist)return n.default.createElement("div",null,'Todo: implement "FindArtist" query');var e=this.props.artist,t=e.name,l=e.age,r=e.genre,i=e.image,u=e.yearsActive,o=e.netWorth,c=e.labelName,s=e._id;return n.default.createElement("div",null,n.default.createElement("div",{className:"spacer"},n.default.createElement(a.Link,{to:"/"},"Back"),n.default.createElement(a.Link,{to:"/artists/".concat(s,"/edit")},"Edit"),n.default.createElement("a",{onClick:this.onDeleteClick.bind(this)},"Delete")),n.default.createElement("ul",{className:"collection artist-detail"},n.default.createElement("li",{className:"collection-item header"},n.default.createElement("div",null,n.default.createElement("h3",null,t),n.default.createElement("h5",null,"Master of ",r)),n.default.createElement("image",{src:i,className:"right"})),n.default.createElement("li",{className:"collection-item"},n.default.createElement("h5",null,u),n.default.createElement("p",null,n.default.createElement("i",null,"Years Active"))),n.default.createElement("li",{className:"collection-item"},n.default.createElement("h5",null,l),n.default.createElement("p",null,n.default.createElement("i",null,"Years Old"))),n.default.createElement("li",{className:"collection-item"},n.default.createElement("h5",null,"$",o),n.default.createElement("p",null,n.default.createElement("i",null,"Net Worth"))),n.default.createElement("li",{className:"collection-item"},n.default.createElement("h5",null,c),n.default.createElement("p",null,n.default.createElement("i",null,"Label"))),n.default.createElement("li",{className:"flex wrap"},this.renderAlbums())))}}])&&s(l.prototype,r),i&&s(l,i),t}(n.Component),E=(0,r.connect)((function(e){return{artist:e.artists.artist}}),i)(p);t.default=E}}]);