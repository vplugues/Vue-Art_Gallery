webpackJsonp([56],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(964)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(466),
  /* template */
  __webpack_require__(847),
  /* scopeId */
  "data-v-47ee97a8",
  /* cssModules */
  null
)
Component.options.__file = "/Users/vanessap/Documents/Projects/vue-dashboard2/src/components/vue_slider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vue_slider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47ee97a8", Component.options)
  } else {
    hotAPI.reload("data-v-47ee97a8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_slider_component__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_slider_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_slider_component__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "vue_slider",
    components: {
        vueSlider: __WEBPACK_IMPORTED_MODULE_0_vue_slider_component___default.a
    },
    data: function data() {
        return {
            value: 15,
            value1: 35,
            value2: [20, 50],
            value3: "jul"
        };
    },

    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.centeralign[data-v-47ee97a8] {\r\n    text-align: -webkit-center;\n}\r\n", ""]);

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('h4', [_vm._v("The value of slider is " + _vm._s(_vm.value))]), _vm._v(" "), _c('vue-slider', {
    staticClass: "m-t-25",
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  }), _vm._v(" "), _c('vue-slider', {
    staticClass: "m-t-25 centeralign",
    attrs: {
      "direction": "vertical",
      "reverse": true,
      "height": "300px",
      "width": "5"
    },
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "panel"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('ul', [_c('li', [_vm._v("min : 20")]), _vm._v(" "), _c('li', [_vm._v("max : 90")]), _vm._v(" "), _c('li', [_vm._v("reverse : true")]), _vm._v(" "), _c('li', [_vm._v("tooltip-dir : left")]), _vm._v(" "), _c('li', [_vm._v("interval : 5")]), _vm._v(" "), _c('li', [_vm._v("piecewise : true")]), _vm._v(" "), _c('li', [_vm._v("value : " + _vm._s(_vm.value1))])]), _vm._v(" "), _c('vue-slider', {
    staticClass: "m-t-25",
    attrs: {
      "tooltip-dir": "left",
      "reverse": true,
      "min": 20,
      "max": 90,
      "interval": 5,
      "piecewise": true
    },
    model: {
      value: (_vm.value1),
      callback: function($$v) {
        _vm.value1 = $$v
      },
      expression: "value1"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "panel"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('h4', [_vm._v("The value of slider is " + _vm._s(_vm.value2))]), _vm._v(" "), _c('vue-slider', {
    staticClass: "m-t-25",
    attrs: {
      "range": true
    },
    model: {
      value: (_vm.value2),
      callback: function($$v) {
        _vm.value2 = $$v
      },
      expression: "value2"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "panel"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('h4', [_vm._v("The value of slider is " + _vm._s(_vm.value3))]), _vm._v(" "), _c('vue-slider', {
    staticClass: "m-t-25",
    attrs: {
      "data": ['jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
      "piecewise": true,
      "piecewiseStyle": {
        "backgroundColor": "#000"
      }
    },
    model: {
      value: (_vm.value3),
      callback: function($$v) {
        _vm.value3 = $$v
      },
      expression: "value3"
    }
  })], 1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-map"
  }), _vm._v(" Basic\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-map"
  }), _vm._v(" Options\n\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-map"
  }), _vm._v(" Range\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-map"
  }), _vm._v(" Custom Data\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47ee97a8", module.exports)
  }
}

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("vue-slider-component",[],e):"object"==typeof exports?exports["vue-slider-component"]=e():t["vue-slider-component"]=e()}(this,function(){return function(t){function e(s){if(i[s])return i[s].exports;var r=i[s]={exports:{},id:s,loaded:!1};return t[s].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(1),o=s(r);e.default=o.default},function(t,e,i){var s,r,o={};i(2),s=i(6),r=i(7),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;r&&(n.template=r),n.computed||(n.computed={}),Object.keys(o).forEach(function(t){var e=o[t];n.computed[t]=function(){return e}})},function(t,e,i){var s=i(3);"string"==typeof s&&(s=[[t.id,s,""]]);i(5)(s,{});s.locals&&(t.exports=s.locals)},function(t,e,i){e=t.exports=i(4)(),e.push([t.id,".vue-slider-wrap[_v-5902a9d9]{position:relative;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-slider-wrap.vue-slider-disabled[_v-5902a9d9]{opacity:.5;cursor:not-allowed}.vue-slider-wrap.vue-slider-disabled .vue-slider-dot[_v-5902a9d9]{cursor:not-allowed}.vue-slider-wrap .vue-slider[_v-5902a9d9]{position:relative;display:block;border-radius:15px;background-color:#ccc}.vue-slider-wrap .vue-slider[_v-5902a9d9]:after{content:'';position:absolute;left:0;top:0;width:100%;height:100%;z-index:2}.vue-slider-process[_v-5902a9d9]{position:absolute;border-radius:15px;background-color:#3498db;-webkit-transition:all 0s;transition:all 0s;z-index:1}.vue-slider-horizontal .vue-slider-process[_v-5902a9d9]{width:0;height:100%;top:0;left:0}.vue-slider-vertical .vue-slider-process[_v-5902a9d9]{width:100%;height:0;bottom:0;left:0}.vue-slider-horizontal-reverse .vue-slider-process[_v-5902a9d9]{width:0;height:100%;top:0;right:0}.vue-slider-vertical-reverse .vue-slider-process[_v-5902a9d9]{width:100%;height:0;top:0;left:0}.vue-slider-dot[_v-5902a9d9]{position:absolute;border-radius:50%;background-color:#fff;box-shadow:.5px .5px 2px 1px rgba(0,0,0,.32);-webkit-transition:all 0s;transition:all 0s;will-change:transform;cursor:pointer;z-index:3}.vue-slider-horizontal .vue-slider-dot[_v-5902a9d9]{left:0}.vue-slider-vertical .vue-slider-dot[_v-5902a9d9]{bottom:0}.vue-slider-horizontal-reverse .vue-slider-dot[_v-5902a9d9]{right:0}.vue-slider-vertical-reverse .vue-slider-dot[_v-5902a9d9]{top:0}.vue-slider-tooltip[_v-5902a9d9]{display:none;font-size:14px;white-space:nowrap;position:absolute;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;border:1px solid #3498db;background-color:#3498db;z-index:9}.vue-slider-tooltip.vue-slider-tooltip-top[_v-5902a9d9]{top:-9px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-tooltip.vue-slider-tooltip-bottom[_v-5902a9d9]{bottom:-9px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-tooltip.vue-slider-tooltip-left[_v-5902a9d9]{top:50%;left:-9px;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-tooltip.vue-slider-tooltip-right[_v-5902a9d9]{top:50%;right:-9px;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.vue-slider-tooltip.vue-slider-tooltip-top[_v-5902a9d9]:before{content:'';position:absolute;bottom:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-top-color:inherit;-webkit-transform:translate(-50%);transform:translate(-50%)}.vue-slider-tooltip.vue-slider-tooltip-bottom[_v-5902a9d9]:before{content:'';position:absolute;top:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-bottom-color:inherit;-webkit-transform:translate(-50%);transform:translate(-50%)}.vue-slider-tooltip.vue-slider-tooltip-left[_v-5902a9d9]:before{content:'';position:absolute;top:50%;right:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-left-color:inherit;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-tooltip.vue-slider-tooltip-right[_v-5902a9d9]:before{content:'';position:absolute;top:50%;left:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-right-color:inherit;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip[_v-5902a9d9]{display:block}.vue-slider-dot.vue-slider-always .vue-slider-tooltip[_v-5902a9d9]{display:block!important}.vue-slider-piecewise[_v-5902a9d9]{position:absolute;width:100%;padding:0;margin:0;left:0;top:0;height:100%;list-style:none}.vue-slider-piecewise li[_v-5902a9d9]{position:absolute;background-color:rgba(0,0,0,.16);border-radius:50%;z-index:2}.vue-slider-horizontal .vue-slider-piecewise li[_v-5902a9d9]{top:0}.vue-slider-vertical .vue-slider-piecewise li[_v-5902a9d9]{left:0}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(s[o]=!0)}for(r=0;r<e.length;r++){var n=e[r];"number"==typeof n[0]&&s[n[0]]||(i&&!n[2]?n[2]=i:i&&(n[2]="("+n[2]+") and ("+i+")"),t.push(n))}},t}},function(t,e,i){function s(t,e){for(var i=0;i<t.length;i++){var s=t[i],r=u[s.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](s.parts[o]);for(;o<s.parts.length;o++)r.parts.push(a(s.parts[o],e))}else{for(var n=[],o=0;o<s.parts.length;o++)n.push(a(s.parts[o],e));u[s.id]={id:s.id,refs:1,parts:n}}}}function r(t){for(var e=[],i={},s=0;s<t.length;s++){var r=t[s],o=r[0],n=r[1],l=r[2],a=r[3],h={css:n,media:l,sourceMap:a};i[o]?i[o].parts.push(h):e.push(i[o]={id:o,parts:[h]})}return e}function o(t,e){var i=v(),s=g[g.length-1];if("top"===t.insertAt)s?s.nextSibling?i.insertBefore(e,s.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function n(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function l(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function a(t,e){var i,s,r;if(e.singleton){var o=m++;i=f||(f=l(e)),s=h.bind(null,i,o,!1),r=h.bind(null,i,o,!0)}else i=l(e),s=d.bind(null,i),r=function(){n(i)};return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else r()}}function h(t,e,i,s){var r=i?"":s.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var o=document.createTextNode(r),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(o,n[e]):t.appendChild(o)}}function d(t,e){var i=e.css,s=e.media,r=e.sourceMap;if(s&&t.setAttribute("media",s),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var u={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},c=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=p(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,m=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=c()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=r(t);return s(i,e),function(t){for(var o=[],n=0;n<i.length;n++){var l=i[n],a=u[l.id];a.refs--,o.push(a)}if(t){var h=r(t);s(h,e)}for(var n=0;n<o.length;n++){var a=o[n];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete u[a.id]}}}};var y=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{flag:!1,size:0,currentValue:0,currentSlider:0}},props:{width:{type:[Number,String],default:"auto"},height:{type:[Number,String],default:6},data:{type:Array,default:null},dotSize:{type:Number,default:16},min:{type:Number,default:0},max:{type:Number,default:100},interval:{type:Number,default:1},show:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},piecewise:{type:Boolean,default:!1},tooltip:{type:[String,Boolean],default:"always"},eventType:{type:String,default:"auto"},direction:{type:String,default:"horizontal"},reverse:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},clickable:{type:Boolean,default:!0},speed:{type:Number,default:.5},realTime:{type:Boolean,default:!1},value:{type:[String,Number,Array],default:0},sliderStyle:[Array,Object],tooltipDir:[Array,String],formatter:[String,Function],piecewiseStyle:Object,processStyle:Object,bgStyle:Object,tooltipStyle:[Array,Object]},computed:{flowDirection:function(){return"vue-slider-"+(this.direction+(this.reverse?"-reverse":""))},tooltipDirection:function(){var t=this.tooltipDir||("vertical"===this.direction?"left":"top");return Array.isArray(t)?this.isRange?t:t[1]:this.isRange?[t,t]:t},tooltipStatus:function(){return"hover"===this.tooltip&&this.flag?"vue-slider-always":this.tooltip?"vue-slider-"+this.tooltip:""},tooltipClass:function(){return["vue-slider-tooltip-"+this.tooltipDirection,"vue-slider-tooltip"]},isMoblie:function(){return"touch"===this.eventType||"mouse"!==this.eventType&&/(iPhone|iPad|iPod|iOS|Android|SymbianOS|Windows Phone|Mobile)/i.test(navigator.userAgent)},isDisabled:function(){return"none"===this.eventType||this.disabled},disabledClass:function(){return this.disabled?"vue-slider-disabled":""},isRange:function(){return Array.isArray(this.value)},slider:function(){return this.isRange?[this.$refs.dot0,this.$refs.dot1]:this.$refs.dot},minimum:function(){return this.data?0:this.min},val:{get:function(){return this.data?this.isRange?[this.data[this.currentValue[0]],this.data[this.currentValue[1]]]:this.data[this.currentValue]:this.currentValue},set:function(t){if(this.data)if(this.isRange){var e=this.data.indexOf(t[0]),i=this.data.indexOf(t[1]);e>-1&&i>-1&&(this.currentValue=[e,i])}else{var s=this.data.indexOf(t);s>-1&&(this.currentValue=s)}else this.currentValue=t}},maximum:function(){return this.data?this.data.length-1:this.max},multiple:function(){var t=(""+this.interval).split(".")[1];return t?Math.pow(10,t.length):1},spacing:function(){return this.data?1:this.interval},total:function(){return this.data?this.data.length-1:(~~((this.maximum-this.minimum)*this.multiple)%(this.interval*this.multiple)!==0&&console.error("[Vue-slider warn]: Prop[interval] is illegal, Please make sure that the interval can be divisible"),(this.maximum-this.minimum)/this.interval)},gap:function(){return this.size/this.total},position:function(){return this.isRange?[(this.currentValue[0]-this.minimum)/this.spacing*this.gap,(this.currentValue[1]-this.minimum)/this.spacing*this.gap]:(this.currentValue-this.minimum)/this.spacing*this.gap},limit:function(){return this.isRange?[[0,this.position[1]],[this.position[0],this.size]]:[0,this.size]},valueLimit:function(){return this.isRange?[[this.minimum,this.currentValue[1]],[this.currentValue[0],this.maximum]]:[this.minimum,this.maximum]},wrapStyles:function(){return"vertical"===this.direction?{height:"number"==typeof this.height?this.height+"px":this.height,padding:this.dotSize/2+"px"}:{width:"number"==typeof this.width?this.width+"px":this.width,padding:this.dotSize/2+"px"}},sliderStyles:function(){return Array.isArray(this.sliderStyle)?this.isRange?this.sliderStyle:this.sliderStyle[1]:this.isRange?[this.sliderStyle,this.sliderStyle]:this.sliderStyle},tooltipStyles:function(){return Array.isArray(this.tooltipStyle)?this.isRange?this.tooltipStyle:this.tooltipStyle[1]:this.isRange?[this.tooltipStyle,this.tooltipStyle]:this.tooltipStyle},elemStyles:function(){return"vertical"===this.direction?{width:this.width+"px",height:"100%"}:{height:this.height+"px"}},dotStyles:function(){return"vertical"===this.direction?{width:this.dotSize+"px",height:this.dotSize+"px",left:-(this.dotSize-this.width)/2+"px"}:{width:this.dotSize+"px",height:this.dotSize+"px",top:-(this.dotSize-this.height)/2+"px"}},piecewiseStyles:function(){return"vertical"===this.direction?{width:this.width+"px",height:this.width+"px"}:{width:this.height+"px",height:this.height+"px"}},piecewiseDotPos:function(){for(var t=[],e=1;e<this.total;e++)t.push("vertical"===this.direction?{bottom:this.gap*e-this.width/2+"px",left:"0"}:{left:this.gap*e-this.height/2+"px",top:"0"});return t}},watch:{value:function(t){this.flag||this.setValue(t)},show:function(t){var e=this;t&&!this.size&&this.$nextTick(function(){e.refresh()})}},methods:{bindEvents:function(){this.isMoblie?(this.$refs.wrap.addEventListener("touchmove",this.moving),this.$refs.wrap.addEventListener("touchend",this.moveEnd)):(document.addEventListener("mousemove",this.moving),document.addEventListener("mouseup",this.moveEnd),document.addEventListener("mouseleave",this.moveEnd))},unbindEvents:function(){window.removeEventListener("resize",this.refresh),this.isMoblie?(this.$refs.wrap.removeEventListener("touchmove",this.moving),this.$refs.wrap.removeEventListener("touchend",this.moveEnd)):(document.removeEventListener("mousemove",this.moving),document.removeEventListener("mouseup",this.moveEnd),document.removeEventListener("mouseleave",this.moveEnd))},formatting:function(t){return"string"==typeof this.formatter?this.formatter.replace(/\{value\}/,t):this.formatter(t)},getPos:function(t){return this.realTime&&this.getStaticData(),"vertical"===this.direction?this.reverse?t.pageY-this.offset:this.size-(t.pageY-this.offset):this.reverse?this.size-(t.clientX-this.offset):t.clientX-this.offset},wrapClick:function(t){if(this.isDisabled||!this.clickable)return!1;var e=this.getPos(t);this.isRange&&(this.currentSlider=e>(this.position[1]-this.position[0])/2+this.position[0]?1:0),this.setValueOnPos(e)},moveStart:function(t){return!this.isDisabled&&(this.isRange&&(this.currentSlider=t),this.flag=!0,void this.$emit("drag-start",this))},moving:function(t){return!!this.flag&&(t.preventDefault(),this.isMoblie&&(t=t.targetTouches[0]),void this.setValueOnPos(this.getPos(t),!0))},moveEnd:function(t){return!!this.flag&&(this.$emit("drag-end",this),this.lazy&&this.isDiff(this.val,this.value)&&(this.$emit("callback",this.val),this.$emit("input",this.isRange?this.val.slice():this.val)),this.flag=!1,void this.setPosition())},setValueOnPos:function(t,e){var i=this.isRange?this.limit[this.currentSlider]:this.limit,s=this.isRange?this.valueLimit[this.currentSlider]:this.valueLimit;if(t>=i[0]&&t<=i[1]){this.setTransform(t);var r=(Math.round(t/this.gap)*(this.spacing*this.multiple)+this.minimum*this.multiple)/this.multiple;this.setCurrentValue(r,e)}else t<i[0]?(this.setTransform(i[0]),this.setCurrentValue(s[0]),1===this.currentSlider&&(this.currentSlider=0)):(this.setTransform(i[1]),this.setCurrentValue(s[1]),0===this.currentSlider&&(this.currentSlider=1))},isDiff:function(t,e){return Object.prototype.toString.call(t)!==Object.prototype.toString.call(e)||(Array.isArray(t)&&t.length===e.length?t.some(function(t,i){return t!==e[i]}):t!==e)},setCurrentValue:function(t,e){return!(t<this.minimum||t>this.maximum)&&(this.isRange?this.isDiff(this.currentValue[this.currentSlider],t)&&(this.currentValue.splice(this.currentSlider,1,t),this.lazy&&this.flag||(this.$emit("callback",this.val),this.$emit("input",this.isRange?this.val.slice():this.val))):this.isDiff(this.currentValue,t)&&(this.currentValue=t,this.lazy&&this.flag||(this.$emit("callback",this.val),this.$emit("input",this.isRange?this.val.slice():this.val))),void(e||this.setPosition()))},setIndex:function(t){if(Array.isArray(t)&&this.isRange){var e=void 0;e=this.data?[this.data[t[0]],this.data[t[1]]]:[this.spacing*t[0]+this.minimum,this.spacing*t[1]+this.minimum],this.setValue(e)}else t=this.spacing*t+this.minimum,this.isRange&&(this.currentSlider=t>(this.currentValue[1]-this.currentValue[0])/2+this.currentValue[0]?1:0),this.setCurrentValue(t)},setValue:function(t,e){var i=this;this.isDiff(this.val,t)&&(this.val=t,this.$emit("callback",this.val),this.$emit("input",this.isRange?this.val.slice():this.val)),this.$nextTick(function(){i.setPosition(e)})},setPosition:function(t){this.flag||this.setTransitionTime(void 0===t?this.speed:t),this.isRange?(this.currentSlider=0,this.setTransform(this.position[this.currentSlider]),this.currentSlider=1,this.setTransform(this.position[this.currentSlider])):this.setTransform(this.position),this.flag||this.setTransitionTime(0)},setTransform:function(t){var e=("vertical"===this.direction?this.dotSize/2-t:t-this.dotSize/2)*(this.reverse?-1:1),i="vertical"===this.direction?"translateY("+e+"px)":"translateX("+e+"px)",s=(0===this.currentSlider?this.position[1]-t:t-this.position[0])+"px",r=(0===this.currentSlider?t:this.position[0])+"px";this.isRange?(this.slider[this.currentSlider].style.transform=i,this.slider[this.currentSlider].style.WebkitTransform=i,this.slider[this.currentSlider].style.msTransform=i,"vertical"===this.direction?(this.$refs.process.style.height=s,this.$refs.process.style[this.reverse?"top":"bottom"]=r):(this.$refs.process.style.width=s,this.$refs.process.style[this.reverse?"right":"left"]=r)):(this.slider.style.transform=i,this.slider.style.WebkitTransform=i,this.slider.style.msTransform=i,"vertical"===this.direction?(this.$refs.process.style.height=t+"px",this.$refs.process.style[this.reverse?"top":"bottom"]=0):(this.$refs.process.style.width=t+"px",this.$refs.process.style[this.reverse?"right":"left"]=0))},setTransitionTime:function(t){if(t||this.$refs.process.offsetWidth,this.isRange){for(var e=0;e<this.slider.length;e++)this.slider[e].style.transitionDuration=t+"s",this.slider[e].style.WebkitTransitionDuration=t+"s";this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"}else this.slider.style.transitionDuration=t+"s",this.slider.style.WebkitTransitionDuration=t+"s",this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"},getValue:function(){return this.val},getIndex:function(){return Array.isArray(this.currentValue)?this.data?this.currentValue:[(this.currentValue[0]-this.minimum)/this.spacing,(this.currentValue[1]-this.minimum)/this.spacing]:(this.currentValue-this.minimum)/this.spacing},getStaticData:function(){this.$refs.elem&&(this.size="vertical"===this.direction?this.$refs.elem.offsetHeight:this.$refs.elem.offsetWidth,this.offset="vertical"===this.direction?this.$refs.elem.getBoundingClientRect().top+window.pageYOffset||document.documentElement.scrollTop:this.$refs.elem.getBoundingClientRect().left)},refresh:function(){this.$refs.elem&&(this.getStaticData(),this.setPosition())}},created:function(){window.addEventListener("resize",this.refresh)},mounted:function(){var t=this;this.$nextTick(function(){t.getStaticData(),t.setValue(t.value,0),t.bindEvents()})},beforeDestroy:function(){this.unbindEvents()}}},function(t,e){t.exports=' <div ref=wrap :class="[\'vue-slider-wrap\', flowDirection, disabledClass]" v-show=show :style=wrapStyles @click=wrapClick _v-5902a9d9=""> <div ref=elem class=vue-slider :style="[elemStyles, bgStyle]" _v-5902a9d9=""> <template v-if=isMoblie> <template v-if=isRange> <div ref=dot0 :class="[tooltipStatus, \'vue-slider-dot\']" :style="[sliderStyles[0], dotStyles]" @touchstart=moveStart(0) _v-5902a9d9=""> <span :class="[\'vue-slider-tooltip-\' + tooltipDirection[0], \'vue-slider-tooltip\']" :style=tooltipStyles[0] _v-5902a9d9="">{{ formatter ? formatting(val[0]) : val[0] }}</span> </div> <div ref=dot1 :class="[tooltipStatus, \'vue-slider-dot\']" :style="[sliderStyles[1], dotStyles]" @touchstart=moveStart(1) _v-5902a9d9=""> <span :class="[\'vue-slider-tooltip-\' + tooltipDirection[1], \'vue-slider-tooltip\']" :style=tooltipStyles[1] _v-5902a9d9="">{{ formatter ? formatting(val[1]) : val[1] }}</span> </div> </template> <template v-else=""> <div ref=dot :class="[tooltipStatus, \'vue-slider-dot\']" :style="[sliderStyles, dotStyles]" @touchstart=moveStart _v-5902a9d9=""> <span :class="[\'vue-slider-tooltip-\' + tooltipDirection, \'vue-slider-tooltip\']" :style=tooltipStyles _v-5902a9d9="">{{ formatter ? formatting(val) : val}}</span> </div> </template> </template> <template v-else=""> <template v-if=isRange> <div ref=dot0 :class="[tooltipStatus, \'vue-slider-dot\']" :style="[sliderStyles[0], dotStyles]" @mousedown=moveStart(0) _v-5902a9d9=""> <span :class="[\'vue-slider-tooltip-\' + tooltipDirection[0], \'vue-slider-tooltip\']" :style=tooltipStyles[0] _v-5902a9d9="">{{ formatter ? formatting(val[0]) : val[0] }}</span> </div> <div ref=dot1 :class="[tooltipStatus, \'vue-slider-dot\']" :style="[sliderStyles[1], dotStyles]" @mousedown=moveStart(1) _v-5902a9d9=""> <span :class="[\'vue-slider-tooltip-\' + tooltipDirection[1], \'vue-slider-tooltip\']" :style=tooltipStyles[1] _v-5902a9d9="">{{ formatter ? formatting(val[1]) : val[1] }}</span> </div> </template> <template v-else=""> <div ref=dot :class="[tooltipStatus, \'vue-slider-dot\']" :style="[sliderStyles, dotStyles]" @mousedown=moveStart _v-5902a9d9=""> <span :class="[\'vue-slider-tooltip-\' + tooltipDirection, \'vue-slider-tooltip\']" :style=tooltipStyles _v-5902a9d9="">{{ formatter ? formatting(val) : val}}</span> </div> </template> </template> <template v-if=piecewise> <ul class=vue-slider-piecewise _v-5902a9d9=""> <li v-for="position in piecewiseDotPos" :style="[piecewiseStyles, piecewiseStyle, position]" _v-5902a9d9=""></li> </ul> </template> <div ref=process class=vue-slider-process :style=processStyle _v-5902a9d9=""></div> </div> </div> '}])});

/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(629);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("19aa5e3c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-47ee97a8&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vue_slider.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-47ee97a8&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vue_slider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});