webpackHotUpdate(4,{

/***/ "./pages/addWine.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header_js__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_WineList_js__ = __webpack_require__("./components/WineList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Meta_js__ = __webpack_require__("./components/Meta.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
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
        placeholder: "A fresh taste of grape",
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
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/addWine")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.cea05718eee907492df0.hot-update.js.map