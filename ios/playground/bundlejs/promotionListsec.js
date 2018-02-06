// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\secoo\\secoo-distribute\\secoo-distribute-weex\\src\\promotionList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-699573d2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "dist-btn": {
    "position": "relative",
    "display": "block",
    "boxSizing": "border-box",
    "textAlign": "center",
    "textDecoration": "none",
    "overflow": "hidden",
    "backgroundColor": "#F56E2D",
    "fontSize": "13",
    "borderRadius": "5",
    "lineHeight": 2.46153846,
    "paddingLeft": "28",
    "paddingRight": "28",
    "paddingTop": "19",
    "paddingBottom": "19",
    "content:after": "\" \"",
    "position:after": "absolute",
    "top:after": 0,
    "left:after": 0,
    "transform:after": "scale(0.5)",
    "transformOrigin:after": "0 0",
    "boxSizing:after": "border-box",
    "borderRadius:after": "10"
  },
  "list": {
    "backgroundColor": "#EDEDED"
  },
  "item": {
    "backgroundColor": "#FFFFFF",
    "marginRight": "0",
    "marginBottom": "20",
    "paddingTop": "48",
    "paddingRight": "30",
    "paddingBottom": "48",
    "paddingLeft": "30",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "20",
    "borderBottomColor": "#EDEDED",
    "display": "flex",
    "flexDirection": "row"
  },
  "product-img": {
    "width": "240",
    "height": "240"
  },
  "product-tag-img": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "width": "116",
    "height": "40"
  },
  "prod-info": {
    "marginTop": "0",
    "marginRight": "0",
    "marginBottom": "0",
    "marginLeft": "15",
    "width": "420",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  "product-name": {
    "color": "#545454",
    "fontSize": "28",
    "marginTop": "0",
    "marginRight": "0",
    "marginBottom": "30",
    "marginLeft": "0",
    "textOverflow": "ellipsis",
    "display": "-webkit-box",
    "WebkitBoxOrient": "vertical",
    "WebkitLineClamp": 2,
    "overflow": "hidden"
  },
  "price": {
    "color": "#545454",
    "fontSize": "24"
  },
  "earnings-dist": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "flex-end"
  },
  "earnings": {
    "flexDirection": "row",
    "alignItems": "flex-end",
    "marginBottom": "12"
  },
  "earnings-name": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30"
  },
  "earnings-price": {
    "display": "inline-block",
    "color": "#EB0A0A",
    "fontSize": "40",
    "lineHeight": "40"
  },
  "dist-btn-text": {
    "color": "#FFFFFF",
    "fontSize": "26"
  },
  "loading": {
    "width": "750",
    "display": "flex",
    "alignItems": "center"
  }
}

/***/ }),
/* 6 */
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

var modal = weex.requireModule('modal');
exports.default = {
  data: function data() {
    return {
      productList: [],
      currentPage: 1,
      pageSize: 5,
      userId: '',
      refreshing: false,
      loading: false,
      loadingText: '上拉加载'
    };
  },
  created: function created() {
    this.refreshData();
  },

  methods: {
    refreshData: function refreshData() {
      var that = this;
      that.currentPage = 1;
      that.refreshing = true;
      this.loadData(function () {
        var modal = weex.requireModule('modal');
        modal.toast({
          message: 're',
          duration: 0.3
        });
        that.refreshing = false;
      });
    },
    loadNext: function loadNext() {
      var that = this;
      that.loading = true;
      this.loading(function (data) {
        that.loading = false;
        if (data.retData.product.length == 0) {
          that.loadingText = '没有更多数据';
        } else {
          that.currentPage++;
        }
      });
    },
    loadData: function loadData(callback) {
      var that = this;
      var stream = weex.requireModule('stream');
      var currentPage = that.currentPage + 1;
      stream.fetch({
        method: 'POST',
        url: 'https://cas.secoo.com/api/distribute/product/promotion_product',
        body: 'pageSize=' + that.pageSize + '&status=3&currentPage=' + currentPage,
        type: 'json'
      }, function (res) {
        if (!res.ok) {
          modal.toast({
            message: '网络异常，请求失败',
            duration: 0.3
          });
        } else {
          var data = res.data;

          if (callback && typeof callback === 'function') {
            callback();
          }
          if (data.retCode == 0) {
            for (var i = 0; i < data.retData.product.length; i++) {
              var product = data.retData.product[i];
              product.productImage = '//pic12.secooimg.com/product/200/200/' + product.productImage;
              that.productList.push(product);
            }
          }
        }
      });
    },

    LinKPro: function LinKPro(productId) {
      // nativeBridge.openWebViewPage({'url':'https://distribute.secoo.com/proDetail.html?pageSource=0&userId='+commonJs.getUrlParam("userId")+'&requestSource=0&productId='+productId})
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"],
    attrs: {
      "loadmoreoffset": "10"
    },
    on: {
      "loadmore": _vm.loadData
    }
  }, [_c('refresh', {
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.loadData
    }
  }, [_c('text', [_vm._v("下拉刷新")]), _c('loading-indicator', {
    staticClass: ["indicator"]
  })]), _vm._l((_vm.productList), function(item) {
    return _c('cell', {
      staticClass: ["item"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      },
      on: {
        "click": function($event) {
          _vm.LinKPro(item.productId)
        }
      }
    }, [_c('div', {
      staticClass: ["prod-img-info"]
    }, [_c('image', {
      staticClass: ["product-img"],
      attrs: {
        "src": item.productImage
      }
    }), _c('image', {
      staticClass: ["product-tag-img"],
      attrs: {
        "src": "https://distribute.secoo.com/weex/img/highReturn.png"
      }
    })]), _c('div', {
      staticClass: ["prod-info"]
    }, [_c('div', {
      staticClass: ["product-top"]
    }, [_c('text', {
      staticClass: ["product-name"]
    }, [_vm._v(_vm._s(item.productName))]), _c('text', {
      staticClass: ["price"]
    }, [_vm._v("建议售价：￥" + _vm._s(item.promotionPrice))])]), _c('div', {
      staticClass: ["earnings-dist"]
    }, [_c('div', {
      staticClass: ["earnings"]
    }, [_c('text', {
      staticClass: ["earnings-name"]
    }, [_vm._v("收益：")]), _c('text', {
      staticClass: ["earnings-price"]
    }, [_vm._v("￥" + _vm._s(item.earningsPrice))])]), _c('a', {
      staticClass: ["dist-btn"],
      attrs: {
        "href": "javascript:;"
      },
      on: {
        "click": function($event) {
          _vm.dist(item.productId, item.promotionPrice, $event)
        }
      }
    }, [_c('text', {
      staticClass: ["dist-btn-text"]
    }, [_vm._v("我要分销")])])])])])
  }), _c('loading', {
    staticClass: ["loading"],
    attrs: {
      "display": _vm.loading ? 'show' : 'hide'
    },
    on: {
      "loading": _vm.loadData
    }
  }, [_c('text', [_vm._v(_vm._s(_vm.loadingText))]), _c('loading-indicator', {
    staticClass: ["indicator"]
  })])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
