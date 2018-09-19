module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\components\\Header.js";


var ulStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1em"
};
var headerStyle = {
  display: "inline-block",
  marginRight: "2em",
  fontFamily: "Arial"
};
var linkStyle = {
  display: "inline-block",
  marginRight: "1em",
  fontFamily: "Arial"
};
var liStyle = {
  display: "inline-block",
  marginRight: "1em"
};

var Header = function Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    style: ulStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    style: headerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "THE CELLAR")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    style: liStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "View Wines")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/addWine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "Add New Wine")))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Meta.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\components\\Meta.js";




var Meta = function Meta() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-828598222"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-828598222"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-828598222"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:400,500,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-828598222"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Passion+One",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-828598222"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "828598222",
    css: "*{margin:0;padding:0;font-family:\"Roboto\";color:#333;}body{background:#ededed;}a{-webkit-text-decoration:none;text-decoration:none;color:#722f37;}a:hover{color:#a5434f;}.head{font-family:'Passion One';font-size:2em;}.price{font-family:'Passion One';font-size:2em;}.placeholder{width:86px;height:86px;}button{font-weight:500;text-transform:uppercase;padding:0.6em 0.8em;border:0;background:none;opacity:0.8;}button:hover{cursor:pointer;opacity:1;}button.delete{color:#ef5858;margin-left:1em;}input[type=text]{padding:0.5em;border:1px solid rgba(0,0,0,0.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE1ldGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3VCLEFBR3NCLEFBT1UsQUFJRSxBQUtQLEFBSVksQUFLQSxBQUtmLEFBU0ssQUFTRCxBQUtELEFBS0EsU0F6REosRUE4QkUsR0FkaEIsQUFxQ29CLEFBS29CLENBVjFCLENBVGUsR0F0Q0osQUFNekIsSUF3QkEsRUFrQkEsQ0E3QmtCLEFBS0EsSUE2QmxCLFVBcERlLEFBbUJmLEFBS0EsQ0Fjd0IsTUFtQnhCLEdBaERrQixDQVJsQixVQXNDYSxHQTdCYixNQThCb0IsZ0JBQ0osWUFDaEIiLCJmaWxlIjoiY29tcG9uZW50c1xcTWV0YS5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEVyaWtcXERyb3Bib3hcXEZyb250ZW5kIFV0dmVja2xhcmUgMjAxN1xcU2VydmVyc2lkZVxcTGFiYiAxXFxsYWJiLXNzciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IE1ldGEgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDcwMFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGFzc2lvbitPbmVcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuXHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvZHkgeyBcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICM3MjJmMzc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNhNTQzNGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5oZWFkIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQYXNzaW9uIE9uZSc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQYXNzaW9uIE9uZSc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDg2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vdXRsaW5lIHtcclxuICAgICAgICAgICAgLy9vdXRsaW5lOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjZlbSAwLjhlbTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24uZGVsZXRlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlZjU4NTg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldGEgIl19 */\n/*@ sourceURL=components\\Meta.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Meta);

/***/ }),

/***/ "./components/WineList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\components\\WineList.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var ulStyle = {
  border: "0px solid red"
};
var liStyle = {
  listStyleType: "none",
  padding: "2em",
  paddingBottom: "0.5em",
  display: "flex",
  flexDirection: "column",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
};
var successStyle = {
  background: "#bceda6",
  display: "inline-block",
  listStyleType: "none",
  width: "100%",
  paddingTop: "0.5em",
  paddingBottom: "0.5em"
};
var errorStyle = {
  background: "#eaa4a4",
  display: "inline-block",
  listStyleType: "none",
  width: "100%",
  paddingTop: "0.5em",
  paddingBottom: "0.5em"
};
var messageStyle = {
  marginLeft: "1em",
  fontWeight: "600",
  color: "#333"
};
var wineFragment = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "1em"
};
var description = {
  maxWidth: "75%",
  paddingBottom: "2em",
  opacity: "0.8"
};
var wineButtons = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end"
};
var editButtons = {
  display: "flex",
  justifyContent: "flex-start",
  marginTop: "1em"
};
var wineImage = {};
var wineHead = {
  display: "flex",
  flexDirection: "row"
};

var WineList =
/*#__PURE__*/
function (_Component) {
  _inherits(WineList, _Component);

  function WineList(props) {
    var _this;

    _classCallCheck(this, WineList);

    _this = _possibleConstructorReturn(this, (WineList.__proto__ || Object.getPrototypeOf(WineList)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "deleteWine", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(wine) {
        fetch("http://localhost:3001/wines/" + wine, {
          method: "DELETE"
        }).then(function (data) {
          return data.json();
        }).then(function (res) {
          // Refresh Wines List
          _this.props.updateWineList();

          _this.displayInformation(res);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "editWine", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(data) {
        var query = "";

        if (data.name) {
          query += "name=" + data.name;
          if (data.price) query += "&price=" + data.price;
          if (data.volume) query += "&volume=" + data.volume;
          if (data.origin) query += "&origin=" + data.origin;
          if (data.alcohol) query += "&alcohol=" + data.alcohol;
          if (data.description) query += "&description=" + data.description;
          if (data.year) query += "&year=" + data.year;
        }

        fetch("http://localhost:3001/wines?" + query, {
          method: "PUT"
        }).then(function (data) {
          return data.json();
        }).then(function (res) {
          // Refresh wine list and remove edit data
          _this.props.updateWineList();

          _this.setState({
            edit: false,
            data: null
          }, function () {
            _this.displayInformation(res);
          });
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleInput", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var changedKey = event.target.name;

        var data = _objectSpread({}, _this.state.data);

        data[changedKey] = event.target.value;

        _this.setState({
          data: data
        });
      }
    });
    _this.state = {
      edit: false,
      recentlyEdited: false
    };
    return _this;
  }

  _createClass(WineList, [{
    key: "displayInformation",
    value: function displayInformation(res) {
      var _this2 = this;

      this.setState({
        res: res
      }, function () {
        setTimeout(function () {
          _this2.setState({
            res: null
          });
        }, 2000);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        style: ulStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, this.state.res ? this.state.res.Message ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        style: successStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        style: messageStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, this.state.res.Message)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        style: errorStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        style: messageStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, this.state.res.Error)) : null, this.props.wines.map(function (wine) {
        return _this3.state.edit ? _this3.state.data.tempName === wine.name ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          style: liStyle,
          key: wine.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }, "Editing ", _this3.state.data.tempName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }, "Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "name",
          type: "text",
          value: _this3.state.data.name,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        }, "Price"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "price",
          type: "text",
          value: _this3.state.data.price,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }, "Volume"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "volume",
          type: "text",
          value: _this3.state.data.volume,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, "Origin"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "origin",
          type: "text",
          value: _this3.state.data.origin,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }, "Year"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "year",
          type: "text",
          value: _this3.state.data.year,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        }, "Percentage"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "alcohol",
          type: "text",
          value: _this3.state.data.alcohol,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          }
        }, "Description"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "description",
          type: "text",
          value: _this3.state.data.description,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: editButtons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          onClick: function onClick() {
            _this3.editWine(_this3.state.data);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          }
        }, "Confirm"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          className: "delete",
          onClick: function onClick() {
            _this3.setState({
              edit: false,
              data: null
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          }
        }, "Discard"))) : null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          style: liStyle,
          key: wine.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: wineFragment,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: wineHead,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "outline",
          style: wineImage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          className: "placeholder",
          src: "https://i.imgur.com/ifP1DzO.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "outline",
          style: wine,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          }
        }, wine.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        }, wine.origin, ", ", wine.year))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "outline",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          className: "price",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          }
        }, wine.price, ":-"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          }
        }, wine.alcohol, "%, ", wine.volume))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: wineFragment,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          style: description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        }, wine.description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: wineButtons,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          className: "edit",
          onClick: function onClick() {
            var data = _objectSpread({}, wine, {
              tempName: wine.name
            });

            _this3.setState({
              edit: true,
              data: data
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          }
        }, "Edit"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          className: "delete",
          onClick: function onClick() {
            _this3.deleteWine(wine.name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          }
        }, "Remove"))));
      }));
    }
  }]);

  return WineList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (WineList);

/***/ }),

/***/ "./pages/addWine.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header_js__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_WineList_js__ = __webpack_require__("./components/WineList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Meta_js__ = __webpack_require__("./components/Meta.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
var _jsxFileName = "C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\pages\\addWine.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var bodyStyle = {
  width: "800px",
  margin: "0 auto",
  background: "white",
  padding: "1em"
};
var containerStyle = {
  listStyleType: "none",
  padding: "2em",
  paddingBottom: "0.5em",
  display: "flex",
  flexDirection: "column",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
};

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "createWine", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var data = _this.state.data;

        if (data.name && data.price && data.volume && data.origin && data.alcohol && data.description && data.year) {
          var query = "";
          query += "name=" + data.name;
          query += "&price=" + data.price;
          query += "&volume=" + data.volume;
          query += "&origin=" + data.origin;
          query += "&alcohol=" + data.alcohol;
          query += "&description=" + data.description;
          query += "&year=" + data.year;
          fetch("http://localhost:3001/wines?" + query, {
            method: "POST"
          }).then(function (data) {
            return data.json();
          }).then(function (res) {
            console.log(res);
            __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push("/");
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleInput", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var changedKey = event.target.name;

        var data = _objectSpread({}, _this.state.data);

        data[changedKey] = event.target.value;

        _this.setState({
          data: data
        });
      }
    });
    _this.state = {
      data: {
        name: "",
        price: "",
        volume: "",
        origin: "",
        alcohol: "",
        description: "",
        year: ""
      }
    };
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: bodyStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Meta_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: containerStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Add New Wine"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "name",
        type: "text",
        value: this.state.data.name,
        onChange: this.handleInput,
        placeholder: "Pinot Noir",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Price"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "price",
        type: "text",
        value: this.state.data.price,
        onChange: this.handleInput,
        placeholder: "199",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Volume"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "volume",
        type: "text",
        value: this.state.data.volume,
        onChange: this.handleInput,
        placeholder: "250ml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Origin"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "origin",
        type: "text",
        value: this.state.data.origin,
        onChange: this.handleInput,
        placeholder: "France",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Year"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "year",
        type: "text",
        value: this.state.data.year,
        onChange: this.handleInput,
        placeholder: "1995",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Alcoholic Percentage"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "alcohol",
        type: "text",
        value: this.state.data.alcohol,
        onChange: this.handleInput,
        placeholder: "15.0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Description"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "description",
        type: "text",
        value: this.state.data.description,
        onChange: this.handleInput,
        placeholder: "A fresh taste of grape",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.createWine,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Add Wine"))));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/addWine.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=addWine.js.map