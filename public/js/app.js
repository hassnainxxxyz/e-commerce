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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/Header */ "./resources/js/components/layouts/Header.vue");
/* harmony import */ var _layouts_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Slider */ "./resources/js/components/layouts/Slider.vue");
/* harmony import */ var _layouts_FeaturedProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/FeaturedProducts */ "./resources/js/components/layouts/FeaturedProducts.vue");
/* harmony import */ var _layouts_LatestProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/LatestProducts */ "./resources/js/components/layouts/LatestProducts.vue");
/* harmony import */ var _layouts_TopSellingProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/TopSellingProducts */ "./resources/js/components/layouts/TopSellingProducts.vue");
/* harmony import */ var _layouts_TopFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/TopFooter */ "./resources/js/components/layouts/TopFooter.vue");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/Footer */ "./resources/js/components/layouts/Footer.vue");
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
  components: {
    headerCom: _layouts_Header__WEBPACK_IMPORTED_MODULE_0__["default"],
    sliderCom: _layouts_Slider__WEBPACK_IMPORTED_MODULE_1__["default"],
    featuredProducts: _layouts_FeaturedProducts__WEBPACK_IMPORTED_MODULE_2__["default"],
    latestProducts: _layouts_LatestProducts__WEBPACK_IMPORTED_MODULE_3__["default"],
    topSellingProducts: _layouts_TopSellingProducts__WEBPACK_IMPORTED_MODULE_4__["default"],
    topFooter: _layouts_TopFooter__WEBPACK_IMPORTED_MODULE_5__["default"],
    footerCom: _layouts_Footer__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  beforeCreate: function beforeCreate() {
    if (sessionStorage.getItem('redirectURL')) sessionStorage.removeItem('redirectURL');
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Test.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Test.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      posts: []
    };
  },
  mounted: function mounted() {
    this.posts = this.$store.getters.getPosts;
  },
  methods: {
    load: function load() {
      this.$store.dispatch('callApi');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Cart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Cart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./resources/js/components/layouts/Header.vue");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./resources/js/components/layouts/Footer.vue");
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
  components: {
    headerCom: _Header__WEBPACK_IMPORTED_MODULE_0__["default"],
    footerCom: _Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Categories.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Categories.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./resources/js/components/layouts/Header.vue");
/* harmony import */ var _CategoriesComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoriesComponent */ "./resources/js/components/layouts/CategoriesComponent.vue");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./resources/js/components/layouts/Footer.vue");
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
  components: {
    headerCom: _Header__WEBPACK_IMPORTED_MODULE_0__["default"],
    footerCom: _Footer__WEBPACK_IMPORTED_MODULE_2__["default"],
    categories: _CategoriesComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Checkout.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Checkout.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./resources/js/components/layouts/Header.vue");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./resources/js/components/layouts/Footer.vue");
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
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    headerCom: _Header__WEBPACK_IMPORTED_MODULE_0__["default"],
    footerCom: _Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/FeaturedProducts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/FeaturedProducts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      products: [],
      limit: 4
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios({
      method: 'get',
      url: APIURL + "/api/featured-products/get/".concat(this.limit)
    }).then(function (res) {
      if (res.data.data) {
        _this.products = res.data.data;
      }
    })["catch"](function (err) {
      console.log(err);
    });
  },
  methods: {
    viewProduct: function viewProduct(p) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Header.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Header.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {};
  },
  computed: {
    token: function token() {
      return localStorage.getItem('token'); // return this.$store.getters.getToken;
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./resources/js/components/layouts/Header.vue");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./resources/js/components/layouts/Footer.vue");
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
  components: {
    headerCom: _Header__WEBPACK_IMPORTED_MODULE_0__["default"],
    footerCom: _Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    callApi: function callApi() {// axios.get('http://fresh.com/api/login')
      //     .then((res) => {
      //         console.log(res);
      //     });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Logout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Logout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  beforeCreate: function beforeCreate() {
    this.$store.dispatch('deleteTokenAndUser');
    sessionStorage.removeItem('redirectURL');
    this.$router.push({
      name: 'home'
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./resources/js/components/layouts/Header.vue");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./resources/js/components/layouts/Footer.vue");
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
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        agreement: ''
      },
      errors: {},
      user: null
    };
  },
  mounted: function mounted() {},
  components: {
    headerCom: _Header__WEBPACK_IMPORTED_MODULE_0__["default"],
    footerCom: _Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    removeErrorMsg: function removeErrorMsg(ev) {
      this.errors[ev.target.id] = null;
    },
    removeError: function removeError(obj) {
      this.errors[obj.target.id] = null;
    },
    apiCall: function apiCall() {
      var _this = this;

      axios({
        method: 'post',
        url: 'http://fresh.com/api/register',
        data: this.form
      }).then(function (res) {
        if (res.data.errors) {
          _this.errors = res.data.errors;
        } else if (res.data.data) {
          var data = res.data.data;

          _this.$store.dispatch('setUser', data.user);

          _this.$store.dispatch('setToken', data.token);

          localStorage.setItem('token', data.token);
          _this.user = _this.$store.getters.getUser;

          if (sessionStorage.getItem('redirectURL')) {
            var redirectURL = sessionStorage.getItem('redirectURL');
            sessionStorage.removeItem('redirectURL');

            _this.$router.push(redirectURL);
          } else {
            _this.$router.push({
              name: 'home'
            });
          }
        }
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/ShowProduct.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/ShowProduct.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./resources/js/components/layouts/Header.vue");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./resources/js/components/layouts/Footer.vue");
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
  components: {
    headerCom: _Header__WEBPACK_IMPORTED_MODULE_0__["default"],
    footerCom: _Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  beforeCreate: function beforeCreate() {
    scroll(0, 0);
  },
  data: function data() {
    return {
      product: null
    };
  },
  computed: {
    images: function images() {},
    the_product: function the_product() {
      return this.product;
    }
  },
  mounted: function mounted() {
    var _this = this;

    axios({
      method: 'get',
      url: APIURL + "/api/featured-products/".concat(this.$route.params.slug)
    }).then(function (res) {
      _this.product = res.data.data;
    })["catch"](function (err) {
      console.log(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/ShowProduct.vue?vue&type=style&index=0&id=2c4426de&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/ShowProduct.vue?vue&type=style&index=0&id=2c4426de&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-2c4426de] {\n    max-width: 100%;\n}\n.preview[data-v-2c4426de] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n@media screen and (max-width: 996px) {\n.preview[data-v-2c4426de] {\n        margin-bottom: 20px;\n}\n}\n.preview-pic[data-v-2c4426de] {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n}\n.preview-thumbnail.nav-tabs[data-v-2c4426de] {\n    border: none;\n    margin-top: 15px;\n}\n.preview-thumbnail.nav-tabs li[data-v-2c4426de] {\n    width: 18%;\n    margin-right: 2.5%;\n}\n.preview-thumbnail.nav-tabs li img[data-v-2c4426de] {\n    max-width: 100%;\n    display: block;\n}\n.preview-thumbnail.nav-tabs li a[data-v-2c4426de] {\n    padding: 0;\n    margin: 0;\n}\n.preview-thumbnail.nav-tabs li[data-v-2c4426de]:last-of-type {\n    margin-right: 0;\n}\n.tab-content[data-v-2c4426de] {\n    overflow: hidden;\n}\n.tab-content img[data-v-2c4426de] {\n    width: 100%;\n    -webkit-animation-name: opacity-data-v-2c4426de;\n    animation-name: opacity-data-v-2c4426de;\n    -webkit-animation-duration: .3s;\n    animation-duration: .3s;\n}\n.card[data-v-2c4426de] {\n    margin-top: 50px;\n    background: #eee;\n    padding: 3em;\n    line-height: 1.5em;\n}\n@media screen and (min-width: 997px) {\n.wrapper[data-v-2c4426de] {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n}\n}\n.details[data-v-2c4426de] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n.colors[data-v-2c4426de] {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n}\n.product-title[data-v-2c4426de], .price[data-v-2c4426de], .sizes[data-v-2c4426de], .colors[data-v-2c4426de] {\n    text-transform: UPPERCASE;\n    font-weight: bold;\n}\n.checked[data-v-2c4426de], .price span[data-v-2c4426de] {\n    color: #ff9f1a;\n}\n.product-title[data-v-2c4426de], .rating[data-v-2c4426de], .product-description[data-v-2c4426de], .price[data-v-2c4426de], .vote[data-v-2c4426de], .sizes[data-v-2c4426de] {\n    margin-bottom: 15px;\n}\n.product-title[data-v-2c4426de] {\n    margin-top: 0;\n}\n.size[data-v-2c4426de] {\n    margin-right: 10px;\n}\n.size[data-v-2c4426de]:first-of-type {\n    margin-left: 40px;\n}\n.color[data-v-2c4426de] {\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n    height: 2em;\n    width: 2em;\n    border-radius: 2px;\n}\n.color[data-v-2c4426de]:first-of-type {\n    margin-left: 20px;\n}\n.add-to-cart[data-v-2c4426de], .like[data-v-2c4426de] {\n    background: #ff9f1a;\n    padding: 1.2em 1.5em;\n    border: none;\n    text-transform: UPPERCASE;\n    font-weight: bold;\n    color: #fff;\n    -webkit-transition: background .3s ease;\n    transition: background .3s ease;\n}\n.add-to-cart[data-v-2c4426de]:hover, .like[data-v-2c4426de]:hover {\n    background: #b36800;\n    color: #fff;\n}\n.not-available[data-v-2c4426de] {\n    text-align: center;\n    line-height: 2em;\n}\n.not-available[data-v-2c4426de]:before {\n    font-family: fontawesome;\n    content: \"\\F00D\";\n    color: #fff;\n}\n.orange[data-v-2c4426de] {\n    background: #ff9f1a;\n}\n.green[data-v-2c4426de] {\n    background: #85ad00;\n}\n.blue[data-v-2c4426de] {\n    background: #0076ad;\n}\n.tooltip-inner[data-v-2c4426de] {\n    padding: 1.3em;\n}\n@-webkit-keyframes opacity-data-v-2c4426de {\n0% {\n        opacity: 0;\n        -webkit-transform: scale(3);\n        transform: scale(3);\n}\n100% {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        transform: scale(1);\n}\n}\n@keyframes opacity-data-v-2c4426de {\n0% {\n        opacity: 0;\n        -webkit-transform: scale(3);\n        transform: scale(3);\n}\n100% {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        transform: scale(1);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/ShowProduct.vue?vue&type=style&index=0&id=2c4426de&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/ShowProduct.vue?vue&type=style&index=0&id=2c4426de&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowProduct.vue?vue&type=style&index=0&id=2c4426de&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/ShowProduct.vue?vue&type=style&index=0&id=2c4426de&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container-fluid" }, [
      _c(
        "div",
        { staticClass: "row min-vh-100" },
        [
          _c("header-com"),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c(
              "main",
              { staticClass: "row" },
              [
                _c("slider-com"),
                _vm._v(" "),
                _c("featured-products"),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c("latest-products"),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("top-selling-products"),
                _vm._v(" "),
                _c("top-footer")
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("footer-com")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [_c("hr")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [_c("hr")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Test.vue?vue&type=template&id=5f45227d&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Test.vue?vue&type=template&id=5f45227d& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "ul",
      { staticClass: "list-group" },
      _vm._l(_vm.posts, function(post) {
        return _c("li", [_vm._v(" " + _vm._s(post))])
      }),
      0
    ),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("button", { staticClass: "btn btn-warning", on: { click: _vm.load } }, [
      _vm._v("Update List")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/404.vue?vue&type=template&id=342abeb7&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/404.vue?vue&type=template&id=342abeb7& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "error-template" }, [
          _c("h1", [_vm._v("\n                    Oops!")]),
          _vm._v(" "),
          _c("h2", [_vm._v("\n                    404 Not Found")]),
          _vm._v(" "),
          _c("div", { staticClass: "error-details" }, [
            _vm._v(
              "\n                    Sorry, an error has occured, Requested page not found!\n                "
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "error-actions" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-primary btn-lg",
                  attrs: { to: { name: "home" } }
                },
                [
                  _c("span", { staticClass: "glyphicon glyphicon-home" }),
                  _vm._v("\n                        Take Me Home ")
                ]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Cart.vue?vue&type=template&id=1613805e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Cart.vue?vue&type=template&id=1613805e& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container-fluid" }, [
      _c(
        "div",
        { staticClass: "row min-vh-100" },
        [
          _c("header-com"),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("main", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 bg-white py-3 mb-3" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-lg-6 col-md-8 col-sm-10 mx-auto table-responsive"
                    },
                    [
                      _c("form", { staticClass: "row" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 text-right" },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-secondary mr-3",
                                attrs: { type: "submit" }
                              },
                              [_vm._v("Update")]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-outline-success",
                                attrs: { to: { name: "checkout" } }
                              },
                              [_vm._v("Checkout")]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("footer-com")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 mt-3 text-center text-uppercase" }, [
        _c("h2", [_vm._v("Shopping Cart")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("table", { staticClass: "table table-striped table-hover table-sm" }, [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("Product")]),
            _vm._v(" "),
            _c("th", [_vm._v("Price")]),
            _vm._v(" "),
            _c("th", [_vm._v("Qty")]),
            _vm._v(" "),
            _c("th", [_vm._v("Amount")]),
            _vm._v(" "),
            _c("th")
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [
              _c("img", {
                staticClass: "img-fluid",
                attrs: { src: "/temp/images/image-2.jpg" }
              }),
              _vm._v(
                "\n                                                    Optoma 4K HDR Projector\n                                                "
              )
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                                    $1,500\n                                                "
              )
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", { attrs: { type: "number", min: "1", value: "1" } })
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                                    $1,500\n                                                "
              )
            ]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-link text-danger" }, [
                _c("i", { staticClass: "fas fa-times" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("img", {
                staticClass: "img-fluid",
                attrs: { src: "/temp/images/image-3.jpg" }
              }),
              _vm._v(
                "\n                                                    HP Envy Specter 360\n                                                "
              )
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                                    $2,500\n                                                "
              )
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", { attrs: { type: "number", min: "1", value: "1" } })
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                                                    $2,500\n                                                "
              )
            ]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-link text-danger" }, [
                _c("i", { staticClass: "fas fa-times" })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("tfoot", [
          _c("tr", [
            _c("th", { staticClass: "text-right", attrs: { colspan: "3" } }, [
              _vm._v("Total")
            ]),
            _vm._v(" "),
            _c("th", [_vm._v("$4,000")]),
            _vm._v(" "),
            _c("th")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Categories.vue?vue&type=template&id=8f9913e6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Categories.vue?vue&type=template&id=8f9913e6& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container-fluid" }, [
      _c(
        "div",
        { staticClass: "row min-vh-100" },
        [
          _c("header-com"),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c("main", { staticClass: "row" }, [_c("categories")], 1)
          ]),
          _vm._v(" "),
          _c("footer-com")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/CategoriesComponent.vue?vue&type=template&id=5938edc0&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/CategoriesComponent.vue?vue&type=template&id=5938edc0& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 py-3" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 text-center text-uppercase" }, [
              _c("h2", [_vm._v("Computers")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-1.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Sony Alpha DSLR Camera")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-2.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Optoma 4K HDR Projector")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $1,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-3.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("HP Envy Specter 360")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("div", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                    $2,800\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $2,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-4.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Dell Alienware Area 51")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $4,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-1.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Sony Alpha DSLR Camera")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-2.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Optoma 4K HDR Projector")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $1,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-3.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("HP Envy Specter 360")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("div", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                    $2,800\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $2,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-4.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Dell Alienware Area 51")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $4,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-1.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Sony Alpha DSLR Camera")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-2.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Optoma 4K HDR Projector")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $1,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-3.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("HP Envy Specter 360")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("div", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                    $2,800\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $2,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-4.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Dell Alienware Area 51")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $4,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-1.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Sony Alpha DSLR Camera")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-2.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Optoma 4K HDR Projector")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $1,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-3.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("HP Envy Specter 360")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("div", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                    $2,800\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $2,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-4.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Dell Alienware Area 51")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $4,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-3.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("HP Envy Specter 360")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("div", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                    $2,800\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $2,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-4.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Dell Alienware Area 51")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $4,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-1.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Sony Alpha DSLR Camera")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-2.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Optoma 4K HDR Projector")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $1,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-3.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("HP Envy Specter 360")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("div", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                    $2,800\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $2,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-4.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Dell Alienware Area 51")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $4,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-3.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("HP Envy Specter 360")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("div", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                    $2,800\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $2,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-2 col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-4.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "product.html" }
                        },
                        [_vm._v("Dell Alienware Area 51")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $4,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Checkout.vue?vue&type=template&id=2e80da77&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Checkout.vue?vue&type=template&id=2e80da77& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container-fluid" }, [
      _c(
        "div",
        { staticClass: "row min-vh-100" },
        [
          _c("header-com"),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c("footer-com")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 mt-3 text-center text-uppercase" }, [
          _c("h2", [_vm._v("Checkout")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-center" }, [
          _c(
            "div",
            { staticClass: "col-xl-7 ftco-animate fadeInUp ftco-animated" },
            [
              _c(
                "form",
                { staticClass: "billing-form", attrs: { action: "#" } },
                [
                  _c("h3", { staticClass: "mb-4 billing-heading" }, [
                    _vm._v("Billing Details")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row align-items-end" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "firstname" } }, [
                          _vm._v("Firt Name")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "lastname" } }, [
                          _vm._v("Last Name")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-100" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "country" } }, [
                          _vm._v("State / Country")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "select-wrap" }, [
                          _c("div", { staticClass: "icon" }, [
                            _c("span", { staticClass: "ion-ios-arrow-down" })
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              staticClass: "form-control",
                              attrs: { name: "", id: "" }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("France")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Italy")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Philippines")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("South Korea")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Hongkong")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Japan")
                              ])
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-100" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "streetaddress" } }, [
                          _vm._v("Street Address")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "House number and street name"
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder:
                              "Appartment, suite, unit etc: (optional)"
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-100" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "towncity" } }, [
                          _vm._v("Town / City")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "postcodezip" } }, [
                          _vm._v("Postcode / ZIP *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-100" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "phone" } }, [
                          _vm._v("Phone")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "emailaddress" } }, [
                          _vm._v("Email Address")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-100" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group mt-4" }, [
                        _c("div", { staticClass: "radio" }, [
                          _c("label", { staticClass: "mr-3" }, [
                            _c("input", {
                              attrs: { type: "radio", name: "optradio" }
                            }),
                            _vm._v(" Create an Account? ")
                          ]),
                          _vm._v(" "),
                          _c("label", [
                            _c("input", {
                              attrs: { type: "radio", name: "optradio" }
                            }),
                            _vm._v(" Ship to different address")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-5" }, [
            _c("div", { staticClass: "row mt-5 pt-3" }, [
              _c("div", { staticClass: "col-md-12 d-flex mb-5" }, [
                _c(
                  "div",
                  { staticClass: "cart-detail cart-total p-3 p-md-4" },
                  [
                    _c("h3", { staticClass: "billing-heading mb-4" }, [
                      _vm._v("Cart Total")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "d-flex" }, [
                      _c("span", [_vm._v("Subtotal")]),
                      _vm._v(" "),
                      _c("span", [_vm._v("$20.60")])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "d-flex" }, [
                      _c("span", [_vm._v("Delivery")]),
                      _vm._v(" "),
                      _c("span", [_vm._v("$0.00")])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "d-flex" }, [
                      _c("span", [_vm._v("Discount")]),
                      _vm._v(" "),
                      _c("span", [_vm._v("$3.00")])
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("p", { staticClass: "d-flex total-price" }, [
                      _c("span", [_vm._v("Total")]),
                      _vm._v(" "),
                      _c("span", [_vm._v("$17.60")])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "cart-detail p-3 p-md-4" }, [
                  _c("h3", { staticClass: "billing-heading mb-4" }, [
                    _vm._v("Payment Method")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "radio" }, [
                        _c("label", [
                          _c("input", {
                            staticClass: "mr-2",
                            attrs: { type: "radio", name: "optradio" }
                          }),
                          _vm._v(" Direct Bank Tranfer")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "radio" }, [
                        _c("label", [
                          _c("input", {
                            staticClass: "mr-2",
                            attrs: { type: "radio", name: "optradio" }
                          }),
                          _vm._v(" Check Payment")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "radio" }, [
                        _c("label", [
                          _c("input", {
                            staticClass: "mr-2",
                            attrs: { type: "radio", name: "optradio" }
                          }),
                          _vm._v(" Paypal")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "checkbox" }, [
                        _c("label", [
                          _c("input", {
                            staticClass: "mr-2",
                            attrs: { type: "checkbox", value: "" }
                          }),
                          _vm._v(
                            " I have read and accept the terms and conditions"
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-outline-dark py-3 px-4",
                        attrs: { href: "#" }
                      },
                      [_vm._v("Place an order")]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/FeaturedProducts.vue?vue&type=template&id=6e4cd9e3&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/FeaturedProducts.vue?vue&type=template&id=6e4cd9e3& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-12" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 py-3" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 text-center text-uppercase" }, [
            _c(
              "h2",
              [
                _c(
                  "router-link",
                  {
                    staticStyle: { color: "#212529 !important" },
                    attrs: { to: { name: "featured.products.all" } }
                  },
                  [_vm._v(" Featured Products  ")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.products, function(product) {
            return _c(
              "div",
              { key: product.id, staticClass: "col-lg-3 col-sm-6 my-3" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-12 bg-white text-center h-100 product-item"
                  },
                  [
                    _c("div", { staticClass: "row h-100" }, [
                      _c(
                        "div",
                        { staticClass: "col-12 p-0 mb-3" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "product-name",
                              attrs: { to: "/products/" + product.slug }
                            },
                            [
                              _c("img", {
                                staticClass: "img-fluid",
                                attrs: { src: "/images/" + product.images.main }
                              })
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 mb-3" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "product-name",
                              attrs: { to: "/products/" + product.slug }
                            },
                            [_vm._v(_vm._s(product.name))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mb-3" }, [
                        _c("span", { staticClass: "product-price-old" }, [
                          _vm._v(
                            "\n                                                    $" +
                              _vm._s(
                                product.price + Math.round(product.price / 4)
                              ) +
                              "\n                                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", { staticClass: "product-price" }, [
                          _vm._v(
                            "\n                                                    $" +
                              _vm._s(product.price) +
                              "\n                                                "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(0, true)
                    ])
                  ]
                )
              ]
            )
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-dark", attrs: { type: "button" } },
        [
          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
          _vm._v("Add to cart")
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 align-self-end" }, [
      _c("footer", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 bg-dark text-white pb-3 pt-5" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass:
                  "col-lg-2 col-sm-4 text-center text-sm-left mb-sm-0 mb-3"
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "footer-logo" }, [
                      _c("a", { attrs: { href: "/temp/index.html" } }, [
                        _vm._v("E-Commerce")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("address", [
                      _vm._v(
                        "\n                                221B Baker Street"
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                                London, England\n                            "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "a",
                      {
                        staticClass: "social-icon",
                        attrs: { href: "/temp/#" }
                      },
                      [_c("i", { staticClass: "fab fa-facebook-f" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "social-icon",
                        attrs: { href: "/temp/#" }
                      },
                      [_c("i", { staticClass: "fab fa-twitter" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "social-icon",
                        attrs: { href: "/temp/#" }
                      },
                      [_c("i", { staticClass: "fab fa-pinterest-p" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "social-icon",
                        attrs: { href: "/temp/#" }
                      },
                      [_c("i", { staticClass: "fab fa-instagram" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "social-icon",
                        attrs: { href: "/temp/#" }
                      },
                      [_c("i", { staticClass: "fab fa-youtube" })]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-lg-3 col-sm-8 text-center text-sm-left mb-sm-0 mb-3"
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 text-uppercase" }, [
                    _c("h4", [_vm._v("Who are we?")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 text-justify" }, [
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet vel ligula vel sodales. Aenean vel ullamcorper purus, ac pharetra arcu. Nam enim velit, ultricies eu orci nec, aliquam efficitur sem. Quisque in sapien a sem vestibulum volutpat at eu nibh. Suspendisse eget est metus. Maecenas mollis quis nisl ac malesuada. Donec gravida tortor massa, vitae semper leo sagittis a. Donec augue turpis, rutrum vitae augue ut, venenatis auctor nulla. Sed posuere at erat in consequat. Nunc congue justo ut ante sodales, bibendum blandit augue finibus."
                      )
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-lg-2 col-sm-3 col-5 ml-lg-auto ml-sm-0 ml-auto mb-sm-0 mb-3"
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 text-uppercase" }, [
                    _c("h4", [_vm._v("Quick Links")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("ul", { staticClass: "footer-nav" }, [
                      _c("li", [
                        _c("a", { attrs: { href: "/temp/#" } }, [
                          _vm._v("Home")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "/temp/#" } }, [
                          _vm._v("Contact Us")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "/temp/#" } }, [
                          _vm._v("About Us")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "/temp/#" } }, [
                          _vm._v("Privacy Policy")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("Terms & Conditions")
                        ])
                      ])
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-1 col-sm-2 col-4 mr-auto mb-sm-0 mb-3" },
              [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-12 text-uppercase text-underline" },
                    [_c("h4", [_vm._v("Help")])]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("ul", { staticClass: "footer-nav" }, [
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("FAQs")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("Shipping")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("Returns")])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("Track Order")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _vm._v("Report Fraud")
                        ])
                      ])
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-3 col-sm-6 text-center text-sm-left" },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 text-uppercase" }, [
                    _c("h4", [_vm._v("Newsletter")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("form", { attrs: { action: "#" } }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Enter your email...",
                            required: ""
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-light text-uppercase"
                          },
                          [_vm._v("Subscribe")]
                        )
                      ])
                    ])
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Header.vue?vue&type=template&id=5fddf304&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Header.vue?vue&type=template&id=5fddf304& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-12" }, [
    _c("header", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 bg-dark py-2 d-md-block d-none" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-auto" }, [
            _c("ul", { staticClass: "top-nav" }, [
              !_vm.token
                ? _c(
                    "li",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "register" } } },
                        [
                          _c("i", { staticClass: "fas fa-user-edit mr-2" }),
                          _vm._v("Register")
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.token
                ? _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: { name: "login" } } }, [
                        _c("i", { staticClass: "fas fa-sign-in-alt mr-2" }),
                        _vm._v("Login")
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.token
                ? _c(
                    "li",
                    [
                      _c("router-link", { attrs: { to: { name: "logout" } } }, [
                        _c("i", { staticClass: "fas fa-sign-out-alt mr-2" }),
                        _vm._v("Logout")
                      ])
                    ],
                    1
                  )
                : _vm._e()
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 bg-white pt-4" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-auto" }, [
            _c(
              "div",
              { staticClass: "site-logo text-center text-lg-left" },
              [
                _c("router-link", { attrs: { to: { name: "home" } } }, [
                  _vm._v("E-Commerce")
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "col-lg-auto text-center text-lg-left header-item-holder"
            },
            [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "router-link",
                { staticClass: "header-item", attrs: { to: { name: "cart" } } },
                [
                  _c("i", { staticClass: "fas fa-shopping-bag mr-2" }),
                  _c(
                    "span",
                    { staticClass: "mr-3", attrs: { id: "header-qty" } },
                    [_vm._v("2")]
                  ),
                  _vm._v(" "),
                  _c("i", { staticClass: "fas fa-money-bill-wave mr-2" }),
                  _c("span", { attrs: { id: "header-price" } }, [
                    _vm._v("$4,000")
                  ])
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _vm._m(3)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto mr-auto" }, [
      _c("ul", { staticClass: "top-nav" }, [
        _c("li", [
          _c("a", { attrs: { href: "/temp/tel:+123-456-7890" } }, [
            _c("i", { staticClass: "fa fa-phone-square mr-2" }),
            _vm._v("+123-456-7890")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "/temp/mailto:mail@ecom.com" } }, [
            _c("i", { staticClass: "fa fa-envelope mr-2" }),
            _vm._v("mail@ecom.com")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-5 mx-auto mt-4 mt-lg-0" }, [
      _c("form", { attrs: { action: "#" } }, [
        _c("div", { staticClass: "form-group" }, [
          _c("div", { staticClass: "input-group" }, [
            _c("input", {
              staticClass: "form-control border-dark",
              attrs: { type: "search", placeholder: "Search...", required: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "input-group-append" }, [
              _c("button", { staticClass: "btn btn-outline-dark" }, [
                _c("i", { staticClass: "fas fa-search" })
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "header-item", attrs: { href: "/temp/#" } }, [
      _c("i", { staticClass: "fas fa-heart mr-2" }),
      _c("span", { attrs: { id: "header-favorite" } }, [_vm._v("0")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c(
        "nav",
        { staticClass: "navbar navbar-expand-lg navbar-light bg-white col-12" },
        [
          _c(
            "button",
            {
              staticClass: "navbar-toggler d-lg-none border-0",
              attrs: {
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#mainNav"
              }
            },
            [_c("span", { staticClass: "navbar-toggler-icon" })]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "mainNav" }
            },
            [
              _c("ul", { staticClass: "navbar-nav mx-auto mt-2 mt-lg-0" }, [
                _c("li", { staticClass: "nav-item active" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: { href: "/temp/index.html" }
                    },
                    [
                      _vm._v("Home "),
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("(current)")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item dropdown" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link dropdown-toggle",
                      attrs: {
                        href: "/temp/#",
                        id: "electronics",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      }
                    },
                    [_vm._v("Electronics")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown-menu",
                      attrs: { "aria-labelledby": "electronics" }
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Computers")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Mobile Phones")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Television Sets")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("DSLR Cameras")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Projectors")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item dropdown" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link dropdown-toggle",
                      attrs: {
                        href: "/temp/#",
                        id: "fashion",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      }
                    },
                    [_vm._v("Fashion")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown-menu",
                      attrs: { "aria-labelledby": "fashion" }
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Men's")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Women's")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Children's")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Accessories")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Footwear")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item dropdown" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link dropdown-toggle",
                      attrs: {
                        href: "/temp/#",
                        id: "books",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      }
                    },
                    [_vm._v("Books")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown-menu",
                      attrs: { "aria-labelledby": "books" }
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Adventure")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Horror")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Romantic")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Children's")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/temp/category.html" }
                        },
                        [_vm._v("Non-Fiction")]
                      )
                    ]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/LatestProducts.vue?vue&type=template&id=012799fc&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/LatestProducts.vue?vue&type=template&id=012799fc& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 py-3" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 text-center text-uppercase" }, [
              _c("h2", [_vm._v("Latest Products")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("span", { staticClass: "new" }, [_vm._v("New")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "/temp/product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-1.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "/temp/product.html" }
                        },
                        [_vm._v("Sony Alpha DSLR Camera")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("span", { staticClass: "new" }, [_vm._v("New")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "/temp/product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-2.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "/temp/product.html" }
                        },
                        [_vm._v("Optoma 4K HDR Projector")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $1,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("span", { staticClass: "new" }, [_vm._v("New")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "/temp/product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-3.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "/temp/product.html" }
                        },
                        [_vm._v("HP Envy Specter 360")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("div", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                    $2,800\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $2,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("span", { staticClass: "new" }, [_vm._v("New")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "/temp/product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-4.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "/temp/product.html" }
                        },
                        [_vm._v("Dell Alienware Area 51")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $4,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Login.vue?vue&type=template&id=39456688&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Login.vue?vue&type=template&id=39456688& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container-fluid" }, [
      _c(
        "div",
        { staticClass: "row min-vh-100" },
        [
          _c("header-com"),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c("main", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("main", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-lg-4 col-md-6 col-sm-8 mx-auto bg-white py-3 mb-4"
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("form", [
                            _vm._m(1),
                            _vm._v(" "),
                            _vm._m(2),
                            _vm._v(" "),
                            _vm._m(3),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-dark",
                                  attrs: { type: "submit" },
                                  on: { click: _vm.callApi }
                                },
                                [_vm._v("Login")]
                              )
                            ])
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("footer-com")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 mt-3 text-center text-uppercase" }, [
        _c("h2", [_vm._v("Login")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "email", id: "email", required: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "password" } }, [_vm._v("Password")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "password", id: "password", required: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "form-check" }, [
        _c("input", {
          staticClass: "form-check-input",
          attrs: { type: "checkbox", id: "remember" }
        }),
        _vm._v(" "),
        _c(
          "label",
          { staticClass: "form-check-label ml-2", attrs: { for: "remember" } },
          [_vm._v("Remember Me")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Logout.vue?vue&type=template&id=3c7872fb&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Logout.vue?vue&type=template&id=3c7872fb& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h1", [_vm._v("The logout component.")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Register.vue?vue&type=template&id=7187c554&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Register.vue?vue&type=template&id=7187c554& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container-fluid" }, [
      _c(
        "div",
        { staticClass: "row min-vh-100" },
        [
          _c("header-com"),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c("main", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("main", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-lg-4 col-md-6 col-sm-8 mx-auto bg-white py-3 mb-4"
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c(
                            "form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.apiCall($event)
                                },
                                keydown: function($event) {
                                  return _vm.removeError($event)
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "name" } }, [
                                  _vm._v("Name")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.name,
                                      expression: "form.name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: { "is-invalid": _vm.errors.name },
                                  attrs: { type: "text", id: "name" },
                                  domProps: { value: _vm.form.name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "invalid-feedback" },
                                  [
                                    _vm._v(
                                      "\n                                                    " +
                                        _vm._s(_vm.errors.name) +
                                        ".\n                                                "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "email" } }, [
                                  _vm._v("Email")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.email,
                                      expression: "form.email"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: { "is-invalid": _vm.errors.email },
                                  attrs: { id: "email" },
                                  domProps: { value: _vm.form.email },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "email",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "invalid-feedback" },
                                  [
                                    _vm._v(
                                      "\n                                                    " +
                                        _vm._s(_vm.errors.email) +
                                        ".\n                                                "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "password" } }, [
                                  _vm._v("Password")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.password,
                                      expression: "form.password"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: { "is-invalid": _vm.errors.password },
                                  attrs: { type: "password", id: "password" },
                                  domProps: { value: _vm.form.password },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "password",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "invalid-feedback" },
                                  [
                                    _vm._v(
                                      "\n                                                    " +
                                        _vm._s(_vm.errors.password) +
                                        ".\n                                                "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { attrs: { for: "passwordConfirmation" } },
                                  [_vm._v("Confirm Password")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.passwordConfirmation,
                                      expression: "form.passwordConfirmation"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.errors.passwordConfirmation
                                  },
                                  attrs: {
                                    type: "password",
                                    id: "passwordConfirmation"
                                  },
                                  domProps: {
                                    value: _vm.form.passwordConfirmation
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "passwordConfirmation",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "invalid-feedback" },
                                  [
                                    _vm._v(
                                      "\n                                                    " +
                                        _vm._s(
                                          _vm.errors.passwordConfirmation
                                        ) +
                                        ".\n                                                "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c("div", { staticClass: "form-check" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.agreement,
                                        expression: "form.agreement"
                                      }
                                    ],
                                    staticClass: "form-check-input",
                                    class: {
                                      "is-invalid": _vm.errors.agreement
                                    },
                                    attrs: {
                                      type: "checkbox",
                                      id: "agreement"
                                    },
                                    domProps: {
                                      checked: Array.isArray(_vm.form.agreement)
                                        ? _vm._i(_vm.form.agreement, null) > -1
                                        : _vm.form.agreement
                                    },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$a = _vm.form.agreement,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.form,
                                                  "agreement",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.form,
                                                  "agreement",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(_vm.form, "agreement", $$c)
                                          }
                                        },
                                        function($event) {
                                          return _vm.removeErrorMsg($event)
                                        }
                                      ]
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "form-check-label ml-2",
                                      attrs: { for: "agreement" }
                                    },
                                    [_vm._v("I agree to Terms and Conditions")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "small",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        "\n                                                        " +
                                          _vm._s(_vm.errors.agreement) +
                                          ".\n                                                    "
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._m(1)
                            ]
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("footer-com")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 mt-3 text-center text-uppercase" }, [
        _c("h2", [_vm._v("Register")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-dark", attrs: { type: "submit" } },
        [_vm._v("Register")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/ShowProduct.vue?vue&type=template&id=2c4426de&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/ShowProduct.vue?vue&type=template&id=2c4426de&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container-fluid" }, [
      _c(
        "div",
        { staticClass: "row min-vh-100" },
        [
          _c("header-com"),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "container-fliud" }, [
                  _c("div", { staticClass: "wrapper row" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "details col-md-6" }, [
                      _vm.the_product
                        ? _c("span", [
                            _c("h3", { staticClass: "product-title" }, [
                              _vm._v(_vm._s(_vm.the_product.description))
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _c("p", { staticClass: "product-description" }, [
                        _vm._v(
                          "Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere."
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _vm._m(5),
                      _vm._v(" "),
                      _vm._m(6)
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("footer-com")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "preview col-md-6" }, [
      _c("div", { staticClass: "preview-pic tab-content" }, [
        _c("div", { staticClass: "tab-pane active", attrs: { id: "pic-1" } }, [
          _c("img", { attrs: { src: "/images/main.jpg" } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "tab-pane", attrs: { id: "pic-2" } }, [
          _c("img", { attrs: { src: "/images/product.png" } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "tab-pane", attrs: { id: "pic-3" } }, [
          _c("img", { attrs: { src: "/images/product.png" } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "tab-pane", attrs: { id: "pic-4" } }, [
          _c("img", { attrs: { src: "/images/product.png" } })
        ])
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "preview-thumbnail nav nav-tabs" }, [
        _c("li", { staticClass: "active" }, [
          _c(
            "a",
            { attrs: { "data-target": "#pic-1", "data-toggle": "tab" } },
            [_c("img", { attrs: { src: "/images/main.jpg" } })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            { attrs: { "data-target": "#pic-2", "data-toggle": "tab" } },
            [_c("img", { attrs: { src: "/images/product.png" } })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            { attrs: { "data-target": "#pic-3", "data-toggle": "tab" } },
            [_c("img", { attrs: { src: "/images/product.png" } })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            { attrs: { "data-target": "#pic-4", "data-toggle": "tab" } },
            [_c("img", { attrs: { src: "/images/product.png" } })]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rating" }, [
      _c("div", { staticClass: "stars" }, [
        _c("span", { staticClass: "fa fa-star checked" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa fa-star checked" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa fa-star checked" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa fa-star" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa fa-star" })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "review-no" }, [_vm._v("41 reviews")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "price" }, [
      _vm._v("current price: "),
      _c("span", [_vm._v("$180")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "vote" }, [
      _c("strong", [_vm._v("91%")]),
      _vm._v(" of buyers enjoyed this product! "),
      _c("strong", [_vm._v("(87 votes)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "sizes" }, [
      _vm._v("sizes:\n                                        "),
      _c(
        "span",
        {
          staticClass: "size",
          attrs: { "data-toggle": "tooltip", title: "small" }
        },
        [_vm._v("s")]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "size",
          attrs: { "data-toggle": "tooltip", title: "medium" }
        },
        [_vm._v("m")]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "size",
          attrs: { "data-toggle": "tooltip", title: "large" }
        },
        [_vm._v("l")]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "size",
          attrs: { "data-toggle": "tooltip", title: "xtra large" }
        },
        [_vm._v("xl")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "colors" }, [
      _vm._v("colors:\n                                        "),
      _c("span", {
        staticClass: "color orange not-available",
        attrs: { "data-toggle": "tooltip", title: "Not In store" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "color green" }),
      _vm._v(" "),
      _c("span", { staticClass: "color blue" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "action" }, [
      _c(
        "button",
        {
          staticClass: "add-to-cart btn btn-default",
          attrs: { type: "button" }
        },
        [_vm._v("add to cart")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "like btn btn-default", attrs: { type: "button" } },
        [_c("span", { staticClass: "fa fa-heart" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Slider.vue?vue&type=template&id=c7bd5a5c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Slider.vue?vue&type=template&id=c7bd5a5c& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 px-0" }, [
      _c(
        "div",
        {
          staticClass: "carousel slide w-100",
          attrs: { id: "slider", "data-ride": "carousel" }
        },
        [
          _c("ol", { staticClass: "carousel-indicators" }, [
            _c("li", {
              staticClass: "active",
              attrs: { "data-target": "#slider", "data-slide-to": "0" }
            }),
            _vm._v(" "),
            _c("li", {
              attrs: { "data-target": "#slider", "data-slide-to": "1" }
            }),
            _vm._v(" "),
            _c("li", {
              attrs: { "data-target": "#slider", "data-slide-to": "2" }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "carousel-inner", attrs: { role: "listbox" } },
            [
              _c("div", { staticClass: "carousel-item active" }, [
                _c("img", {
                  staticClass: "slider-img",
                  attrs: { src: "/temp/images/slider-1.jpg" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "carousel-item" }, [
                _c("img", {
                  staticClass: "slider-img",
                  attrs: { src: "/temp/images/slider-2.jpg" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "carousel-item" }, [
                _c("img", {
                  staticClass: "slider-img",
                  attrs: { src: "/temp/images/slider-3.jpg" }
                })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "carousel-control-prev",
              attrs: {
                href: "/temp/#slider",
                role: "button",
                "data-slide": "prev"
              }
            },
            [
              _c("span", {
                staticClass: "carousel-control-prev-icon",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "carousel-control-next",
              attrs: {
                href: "/temp/#slider",
                role: "button",
                "data-slide": "next"
              }
            },
            [
              _c("span", {
                staticClass: "carousel-control-next-icon",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/TopFooter.vue?vue&type=template&id=6ddb9f6f&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/TopFooter.vue?vue&type=template&id=6ddb9f6f& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-12 py-3 bg-light d-sm-block d-none" },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-3 col ml-auto large-holder" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-auto ml-auto large-icon" }, [
                _c("i", { staticClass: "fas fa-money-bill" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-auto mr-auto large-text" }, [
                _vm._v("\n                    Best Price\n                ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-3 col large-holder" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-auto ml-auto large-icon" }, [
                _c("i", { staticClass: "fas fa-truck-moving" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-auto mr-auto large-text" }, [
                _vm._v("\n                    Fast Delivery\n                ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-3 col mr-auto large-holder" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-auto ml-auto large-icon" }, [
                _c("i", { staticClass: "fas fa-check" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-auto mr-auto large-text" }, [
                _vm._v(
                  "\n                    Genuine Products\n                "
                )
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/TopSellingProducts.vue?vue&type=template&id=dff257a0&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/TopSellingProducts.vue?vue&type=template&id=dff257a0& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 py-3" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 text-center text-uppercase" }, [
              _c("h2", [_vm._v("Top Selling Products")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "/temp/product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-1.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "/temp/product.html" }
                        },
                        [_vm._v("Sony Alpha DSLR Camera")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "/temp/product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-2.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "/temp/product.html" }
                        },
                        [_vm._v("Optoma 4K HDR Projector")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $1,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "/temp/product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-3.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "/temp/product.html" }
                        },
                        [_vm._v("HP Envy Specter 360")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("div", { staticClass: "product-price-old" }, [
                        _vm._v(
                          "\n                                    $2,800\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $2,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-3 col-sm-6 my-3" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 bg-white text-center h-100 product-item"
                },
                [
                  _c("div", { staticClass: "row h-100" }, [
                    _c("div", { staticClass: "col-12 p-0 mb-3" }, [
                      _c("a", { attrs: { href: "/temp/product.html" } }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/temp/images/image-4.jpg" }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c(
                        "a",
                        {
                          staticClass: "product-name",
                          attrs: { href: "/temp/product.html" }
                        },
                        [_vm._v("Dell Alienware Area 51")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(
                          "\n                                                    $4,500\n                                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3 align-self-end" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-dark",
                          attrs: { type: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cart-plus mr-2" }),
                          _vm._v("Add to cart")
                        ]
                      )
                    ])
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/FeaturedProductsAll.vue?vue&type=template&id=b23ad02e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/FeaturedProductsAll.vue?vue&type=template&id=b23ad02e& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h1", [_vm._v("\n        Featured Products All.\n    ")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./resources/js/router.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./resources/js/store/index.js");


var vue = new Vue({
  el: '#root',
  router: _router__WEBPACK_IMPORTED_MODULE_0__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Test.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Test.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Test_vue_vue_type_template_id_5f45227d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Test.vue?vue&type=template&id=5f45227d& */ "./resources/js/components/Test.vue?vue&type=template&id=5f45227d&");
/* harmony import */ var _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Test.vue?vue&type=script&lang=js& */ "./resources/js/components/Test.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Test_vue_vue_type_template_id_5f45227d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Test_vue_vue_type_template_id_5f45227d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Test.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Test.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Test.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Test.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Test.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Test.vue?vue&type=template&id=5f45227d&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Test.vue?vue&type=template&id=5f45227d& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_5f45227d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Test.vue?vue&type=template&id=5f45227d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Test.vue?vue&type=template&id=5f45227d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_5f45227d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_5f45227d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/404.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/layouts/404.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _404_vue_vue_type_template_id_342abeb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.vue?vue&type=template&id=342abeb7& */ "./resources/js/components/layouts/404.vue?vue&type=template&id=342abeb7&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _404_vue_vue_type_template_id_342abeb7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _404_vue_vue_type_template_id_342abeb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/404.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/404.vue?vue&type=template&id=342abeb7&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/layouts/404.vue?vue&type=template&id=342abeb7& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_342abeb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./404.vue?vue&type=template&id=342abeb7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/404.vue?vue&type=template&id=342abeb7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_342abeb7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_342abeb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/Cart.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/layouts/Cart.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cart_vue_vue_type_template_id_1613805e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart.vue?vue&type=template&id=1613805e& */ "./resources/js/components/layouts/Cart.vue?vue&type=template&id=1613805e&");
/* harmony import */ var _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cart_vue_vue_type_template_id_1613805e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cart_vue_vue_type_template_id_1613805e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Cart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Cart.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/layouts/Cart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Cart.vue?vue&type=template&id=1613805e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/layouts/Cart.vue?vue&type=template&id=1613805e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_1613805e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cart.vue?vue&type=template&id=1613805e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Cart.vue?vue&type=template&id=1613805e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_1613805e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_1613805e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/Categories.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/layouts/Categories.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_8f9913e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=8f9913e6& */ "./resources/js/components/layouts/Categories.vue?vue&type=template&id=8f9913e6&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_8f9913e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_8f9913e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Categories.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/layouts/Categories.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Categories.vue?vue&type=template&id=8f9913e6&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/layouts/Categories.vue?vue&type=template&id=8f9913e6& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_8f9913e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=8f9913e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Categories.vue?vue&type=template&id=8f9913e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_8f9913e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_8f9913e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/CategoriesComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/layouts/CategoriesComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoriesComponent_vue_vue_type_template_id_5938edc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriesComponent.vue?vue&type=template&id=5938edc0& */ "./resources/js/components/layouts/CategoriesComponent.vue?vue&type=template&id=5938edc0&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _CategoriesComponent_vue_vue_type_template_id_5938edc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoriesComponent_vue_vue_type_template_id_5938edc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/CategoriesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/CategoriesComponent.vue?vue&type=template&id=5938edc0&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/layouts/CategoriesComponent.vue?vue&type=template&id=5938edc0& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesComponent_vue_vue_type_template_id_5938edc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriesComponent.vue?vue&type=template&id=5938edc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/CategoriesComponent.vue?vue&type=template&id=5938edc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesComponent_vue_vue_type_template_id_5938edc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesComponent_vue_vue_type_template_id_5938edc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/Checkout.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/layouts/Checkout.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout_vue_vue_type_template_id_2e80da77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=2e80da77& */ "./resources/js/components/layouts/Checkout.vue?vue&type=template&id=2e80da77&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkout_vue_vue_type_template_id_2e80da77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkout_vue_vue_type_template_id_2e80da77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Checkout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/layouts/Checkout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Checkout.vue?vue&type=template&id=2e80da77&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/layouts/Checkout.vue?vue&type=template&id=2e80da77& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_2e80da77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkout.vue?vue&type=template&id=2e80da77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Checkout.vue?vue&type=template&id=2e80da77&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_2e80da77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_2e80da77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/FeaturedProducts.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/layouts/FeaturedProducts.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeaturedProducts_vue_vue_type_template_id_6e4cd9e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeaturedProducts.vue?vue&type=template&id=6e4cd9e3& */ "./resources/js/components/layouts/FeaturedProducts.vue?vue&type=template&id=6e4cd9e3&");
/* harmony import */ var _FeaturedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeaturedProducts.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/FeaturedProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeaturedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeaturedProducts_vue_vue_type_template_id_6e4cd9e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FeaturedProducts_vue_vue_type_template_id_6e4cd9e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/FeaturedProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/FeaturedProducts.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/layouts/FeaturedProducts.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeaturedProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/FeaturedProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/FeaturedProducts.vue?vue&type=template&id=6e4cd9e3&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/layouts/FeaturedProducts.vue?vue&type=template&id=6e4cd9e3& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedProducts_vue_vue_type_template_id_6e4cd9e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeaturedProducts.vue?vue&type=template&id=6e4cd9e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/FeaturedProducts.vue?vue&type=template&id=6e4cd9e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedProducts_vue_vue_type_template_id_6e4cd9e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedProducts_vue_vue_type_template_id_6e4cd9e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/Footer.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/layouts/Footer.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=a242bae8& */ "./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=a242bae8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/Header.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/layouts/Header.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_5fddf304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=5fddf304& */ "./resources/js/components/layouts/Header.vue?vue&type=template&id=5fddf304&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_5fddf304___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_5fddf304___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Header.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/layouts/Header.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Header.vue?vue&type=template&id=5fddf304&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/layouts/Header.vue?vue&type=template&id=5fddf304& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5fddf304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=5fddf304& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Header.vue?vue&type=template&id=5fddf304&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5fddf304___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5fddf304___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/LatestProducts.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/layouts/LatestProducts.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LatestProducts_vue_vue_type_template_id_012799fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LatestProducts.vue?vue&type=template&id=012799fc& */ "./resources/js/components/layouts/LatestProducts.vue?vue&type=template&id=012799fc&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _LatestProducts_vue_vue_type_template_id_012799fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LatestProducts_vue_vue_type_template_id_012799fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/LatestProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/LatestProducts.vue?vue&type=template&id=012799fc&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/layouts/LatestProducts.vue?vue&type=template&id=012799fc& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestProducts_vue_vue_type_template_id_012799fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LatestProducts.vue?vue&type=template&id=012799fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/LatestProducts.vue?vue&type=template&id=012799fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestProducts_vue_vue_type_template_id_012799fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestProducts_vue_vue_type_template_id_012799fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/Login.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/layouts/Login.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_39456688___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=39456688& */ "./resources/js/components/layouts/Login.vue?vue&type=template&id=39456688&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_39456688___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_39456688___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/layouts/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Login.vue?vue&type=template&id=39456688&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/layouts/Login.vue?vue&type=template&id=39456688& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_39456688___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=39456688& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Login.vue?vue&type=template&id=39456688&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_39456688___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_39456688___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/Logout.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/layouts/Logout.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logout_vue_vue_type_template_id_3c7872fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logout.vue?vue&type=template&id=3c7872fb& */ "./resources/js/components/layouts/Logout.vue?vue&type=template&id=3c7872fb&");
/* harmony import */ var _Logout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logout.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Logout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Logout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Logout_vue_vue_type_template_id_3c7872fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logout_vue_vue_type_template_id_3c7872fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Logout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Logout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/layouts/Logout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Logout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Logout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Logout.vue?vue&type=template&id=3c7872fb&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/layouts/Logout.vue?vue&type=template&id=3c7872fb& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logout_vue_vue_type_template_id_3c7872fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Logout.vue?vue&type=template&id=3c7872fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Logout.vue?vue&type=template&id=3c7872fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logout_vue_vue_type_template_id_3c7872fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logout_vue_vue_type_template_id_3c7872fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/Register.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/layouts/Register.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_7187c554___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=7187c554& */ "./resources/js/components/layouts/Register.vue?vue&type=template&id=7187c554&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_7187c554___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_7187c554___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/layouts/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Register.vue?vue&type=template&id=7187c554&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/layouts/Register.vue?vue&type=template&id=7187c554& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_7187c554___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=7187c554& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Register.vue?vue&type=template&id=7187c554&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_7187c554___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_7187c554___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/ShowProduct.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/layouts/ShowProduct.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowProduct_vue_vue_type_template_id_2c4426de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowProduct.vue?vue&type=template&id=2c4426de&scoped=true& */ "./resources/js/components/layouts/ShowProduct.vue?vue&type=template&id=2c4426de&scoped=true&");
/* harmony import */ var _ShowProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/ShowProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShowProduct_vue_vue_type_style_index_0_id_2c4426de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowProduct.vue?vue&type=style&index=0&id=2c4426de&scoped=true&lang=css& */ "./resources/js/components/layouts/ShowProduct.vue?vue&type=style&index=0&id=2c4426de&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShowProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowProduct_vue_vue_type_template_id_2c4426de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowProduct_vue_vue_type_template_id_2c4426de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2c4426de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/ShowProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/ShowProduct.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/layouts/ShowProduct.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/ShowProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/ShowProduct.vue?vue&type=style&index=0&id=2c4426de&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/layouts/ShowProduct.vue?vue&type=style&index=0&id=2c4426de&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_style_index_0_id_2c4426de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowProduct.vue?vue&type=style&index=0&id=2c4426de&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/ShowProduct.vue?vue&type=style&index=0&id=2c4426de&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_style_index_0_id_2c4426de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_style_index_0_id_2c4426de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_style_index_0_id_2c4426de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_style_index_0_id_2c4426de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/layouts/ShowProduct.vue?vue&type=template&id=2c4426de&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/layouts/ShowProduct.vue?vue&type=template&id=2c4426de&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_template_id_2c4426de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowProduct.vue?vue&type=template&id=2c4426de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/ShowProduct.vue?vue&type=template&id=2c4426de&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_template_id_2c4426de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowProduct_vue_vue_type_template_id_2c4426de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/Slider.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/layouts/Slider.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider_vue_vue_type_template_id_c7bd5a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider.vue?vue&type=template&id=c7bd5a5c& */ "./resources/js/components/layouts/Slider.vue?vue&type=template&id=c7bd5a5c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Slider_vue_vue_type_template_id_c7bd5a5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Slider_vue_vue_type_template_id_c7bd5a5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Slider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Slider.vue?vue&type=template&id=c7bd5a5c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/layouts/Slider.vue?vue&type=template&id=c7bd5a5c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_c7bd5a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=template&id=c7bd5a5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Slider.vue?vue&type=template&id=c7bd5a5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_c7bd5a5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_c7bd5a5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/TopFooter.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/layouts/TopFooter.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopFooter_vue_vue_type_template_id_6ddb9f6f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopFooter.vue?vue&type=template&id=6ddb9f6f& */ "./resources/js/components/layouts/TopFooter.vue?vue&type=template&id=6ddb9f6f&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _TopFooter_vue_vue_type_template_id_6ddb9f6f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopFooter_vue_vue_type_template_id_6ddb9f6f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/TopFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/TopFooter.vue?vue&type=template&id=6ddb9f6f&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/layouts/TopFooter.vue?vue&type=template&id=6ddb9f6f& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopFooter_vue_vue_type_template_id_6ddb9f6f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopFooter.vue?vue&type=template&id=6ddb9f6f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/TopFooter.vue?vue&type=template&id=6ddb9f6f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopFooter_vue_vue_type_template_id_6ddb9f6f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopFooter_vue_vue_type_template_id_6ddb9f6f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/TopSellingProducts.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/layouts/TopSellingProducts.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopSellingProducts_vue_vue_type_template_id_dff257a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopSellingProducts.vue?vue&type=template&id=dff257a0& */ "./resources/js/components/layouts/TopSellingProducts.vue?vue&type=template&id=dff257a0&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _TopSellingProducts_vue_vue_type_template_id_dff257a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopSellingProducts_vue_vue_type_template_id_dff257a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/TopSellingProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/TopSellingProducts.vue?vue&type=template&id=dff257a0&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/layouts/TopSellingProducts.vue?vue&type=template&id=dff257a0& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_template_id_dff257a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopSellingProducts.vue?vue&type=template&id=dff257a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/TopSellingProducts.vue?vue&type=template&id=dff257a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_template_id_dff257a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopSellingProducts_vue_vue_type_template_id_dff257a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/FeaturedProductsAll.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pages/FeaturedProductsAll.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeaturedProductsAll_vue_vue_type_template_id_b23ad02e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeaturedProductsAll.vue?vue&type=template&id=b23ad02e& */ "./resources/js/components/pages/FeaturedProductsAll.vue?vue&type=template&id=b23ad02e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _FeaturedProductsAll_vue_vue_type_template_id_b23ad02e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FeaturedProductsAll_vue_vue_type_template_id_b23ad02e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/FeaturedProductsAll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/FeaturedProductsAll.vue?vue&type=template&id=b23ad02e&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/FeaturedProductsAll.vue?vue&type=template&id=b23ad02e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedProductsAll_vue_vue_type_template_id_b23ad02e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeaturedProductsAll.vue?vue&type=template&id=b23ad02e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/FeaturedProductsAll.vue?vue&type=template&id=b23ad02e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedProductsAll_vue_vue_type_template_id_b23ad02e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedProductsAll_vue_vue_type_template_id_b23ad02e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/router.js":
/*!********************************!*\
  !*** ./resources/js/router.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");

Vue.use(VueRouter);
var vueRouter = new VueRouter({
  mode: 'history',
  routes: _routes__WEBPACK_IMPORTED_MODULE_0__["default"]
}); // vueRouter.beforeEach((to, from, next) => {
//       if(to.path !== '/cart' && from.path !== '/register') {
//           sessionStorage.removeItem('redirectURL');
//       }
// next();
// });

vueRouter.beforeResolve(function (to, from, next) {
  if (to.path) NProgress.start();
  next();
});
vueRouter.afterEach(function (to, from, next) {
  // if(sessionStorage.getItem('redirectURL')) {
  //     if(to.path !== '/register' || to.path !== sessionStorage.getItem('redirectURL')) {
  //         sessionStorage.removeItem('redirectURL');
  //         alert(to.path);
  //     }
  //
  //
  //
  //
  // }
  NProgress.done();
});
/* harmony default export */ __webpack_exports__["default"] = (vueRouter);

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Home */ "./resources/js/components/Home.vue");
/* harmony import */ var _components_Test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Test */ "./resources/js/components/Test.vue");
/* harmony import */ var _components_layouts_404__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layouts/404 */ "./resources/js/components/layouts/404.vue");
/* harmony import */ var _components_layouts_Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layouts/Categories */ "./resources/js/components/layouts/Categories.vue");
/* harmony import */ var _components_layouts_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layouts/Login */ "./resources/js/components/layouts/Login.vue");
/* harmony import */ var _components_layouts_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layouts/Register */ "./resources/js/components/layouts/Register.vue");
/* harmony import */ var _components_layouts_Logout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layouts/Logout */ "./resources/js/components/layouts/Logout.vue");
/* harmony import */ var _components_layouts_Cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layouts/Cart */ "./resources/js/components/layouts/Cart.vue");
/* harmony import */ var _components_layouts_Checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layouts/Checkout */ "./resources/js/components/layouts/Checkout.vue");
/* harmony import */ var _components_layouts_ShowProduct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layouts/ShowProduct */ "./resources/js/components/layouts/ShowProduct.vue");
/* harmony import */ var _components_pages_FeaturedProductsAll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/FeaturedProductsAll */ "./resources/js/components/pages/FeaturedProductsAll.vue");











var routes = [{
  path: '/',
  component: _components_Home__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: 'home'
}, {
  path: '/test',
  component: _components_Test__WEBPACK_IMPORTED_MODULE_1__["default"],
  name: 'test'
}, {
  path: '/categories',
  component: _components_layouts_Categories__WEBPACK_IMPORTED_MODULE_3__["default"],
  name: 'categories'
}, {
  path: '/register',
  component: _components_layouts_Register__WEBPACK_IMPORTED_MODULE_5__["default"],
  name: 'register',
  beforeEnter: function beforeEnter(to, from, next) {
    if (localStorage.getItem('token') === null) {
      next();
    } else next({
      name: 'home'
    });
  }
}, {
  path: '/login',
  component: _components_layouts_Login__WEBPACK_IMPORTED_MODULE_4__["default"],
  name: 'login',
  beforeEnter: function beforeEnter(to, from, next) {
    if (localStorage.getItem('token') === null) next();else next({
      name: 'home'
    });
  }
}, {
  path: '/logout',
  component: _components_layouts_Logout__WEBPACK_IMPORTED_MODULE_6__["default"],
  name: 'logout',
  beforeEnter: function beforeEnter(to, from, next) {
    if (localStorage.getItem('token') !== null) next();else next({
      name: 'home'
    });
  }
}, {
  path: '/cart',
  component: _components_layouts_Cart__WEBPACK_IMPORTED_MODULE_7__["default"],
  name: 'cart',
  beforeEnter: function beforeEnter(to, from, next) {
    if (localStorage.getItem('token') === null) {
      sessionStorage.setItem('redirectURL', '/cart');
      next({
        name: 'register'
      });
    } else next();
  }
}, {
  path: '/checkout',
  component: _components_layouts_Checkout__WEBPACK_IMPORTED_MODULE_8__["default"],
  name: 'checkout'
}, {
  path: '/featured-products',
  component: _components_pages_FeaturedProductsAll__WEBPACK_IMPORTED_MODULE_10__["default"],
  name: 'featured.products.all'
}, {
  path: '/products/:slug',
  component: _components_layouts_ShowProduct__WEBPACK_IMPORTED_MODULE_9__["default"],
  name: 'show.product',
  props: true
}, {
  path: '*',
  component: _components_layouts_404__WEBPACK_IMPORTED_MODULE_2__["default"],
  name: '404'
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./resources/js/store/index.js":
/*!*************************************!*\
  !*** ./resources/js/store/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./resources/js/store/user.js");

Vue.use(Vuex);
/* harmony default export */ __webpack_exports__["default"] = (new Vuex.Store({
  modules: {
    User: _user__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
}));

/***/ }),

/***/ "./resources/js/store/user.js":
/*!************************************!*\
  !*** ./resources/js/store/user.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var state = {
  user: null,
  token: null
};
var getters = {
  getUser: function getUser(state) {
    return state.user;
  },
  getToken: function getToken(state) {
    return state.token;
  }
};
var mutations = {
  insertUser: function insertUser(state, user) {
    state.user = user;
  },
  insertToken: function insertToken(state, token) {
    state.token = token;
  },
  destoryToken: function destoryToken(state) {
    state.token = null;
  },
  destoryUser: function destoryUser(state) {
    state.user = null;
  }
};
var actions = {
  setToken: function setToken(context, token) {
    context.commit('insertToken', token);
  },
  deleteTokenAndUser: function deleteTokenAndUser(context) {
    //
    // axios({
    //     method: 'post',
    //     url: APIURL+"/api/logout",
    //
    // })
    //     .then(res => {
    //         console.log(res.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    localStorage.removeItem('token');
    context.commit('destoryToken');
    context.commit('destoryUser');
  },
  setUser: function setUser(context, user) {
    context.commit('insertUser', user);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./resources/js/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\fresh\resources\js\app.js */"./resources/js/app.js");


/***/ })

/******/ });