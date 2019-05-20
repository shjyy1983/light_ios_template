webpackJsonp([3],{

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(66)
}
var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(69),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-81a40216",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("496a07bc", content, true, {});

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".page.page-current[data-v-81a40216]{-webkit-animation-duration:.3s;animation-duration:.3s}.bar-nav[data-v-81a40216]{background-image:-webkit-linear-gradient(313deg,#4277eb,#4e72e2 52%,#6f6fe9);background-image:-webkit-linear-gradient(47deg,#4277eb,#4e72e2 52%,#6f6fe9);background-image:linear-gradient(43deg,#4277eb,#4e72e2 52%,#6f6fe9)}.bar-nav[data-v-81a40216]:after{display:none}.bar-nav .title[data-v-81a40216]{font-size:.9rem;font-weight:400;color:#fff}.bar-nav .pull-left[data-v-81a40216]{font-size:.85rem;color:#fff}.bar-nav .pull-left[data-v-81a40216]:active{color:#fff}#main.ios .bar-nav[data-v-81a40216]{height:64px;padding-top:20px}#main.ios .bar-nav~.content[data-v-81a40216]{top:20px}#main.ios .title[data-v-81a40216]{line-height:44px}#main.ios .pull-left[data-v-81a40216]{height:44px;line-height:44px}", ""]);

// exports


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    data: function data() {
        return {};
    },

    methods: {
        back: function back() {
            history.back();
        }
    }
};

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "enter-active-class": "animated slideInRight",
      "leave-active-class": "animated slideOutRight"
    }
  }, [_c('div', {
    staticClass: "page page-current"
  }, [_c('header', {
    staticClass: "bar bar-nav"
  }, [_c('button', {
    staticClass: "button button-link button-nav pull-left",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.back($event)
      }
    }
  }, [_c('span', {
    staticClass: "icon icon-left"
  }), _vm._v(" "), _c('span', {
    staticClass: "vm"
  }, [_vm._v("返回")])]), _vm._v(" "), _c('h1', {
    staticClass: "title"
  }, [_vm._v("审批详情")])]), _vm._v(" "), _c('sub-view')], 1)])
},staticRenderFns: []}

/***/ })

});