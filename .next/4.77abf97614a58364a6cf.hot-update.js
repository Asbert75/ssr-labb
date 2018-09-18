webpackHotUpdate(4,{

/***/ "./components/WineList.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\components\\WineList.js: Unexpected token, expected \";\" (89:43)\n\n  87 |                                 { Object.keys(this.state.data).map( item => {\n  88 |                                     console.log(item)\n> 89 |                                     <input type=\"text\" value={ this.state.data[item] } onChange={ () => { this.handleInput(item) } } />\n     |                                            ^\n  90 |                                 }) }\n  91 |                                 <button onClick={ () => { this.setState({ edit: false, data: null }) } } >Discard Changes</button>\n  92 |                             </li>\n    at _class.raise (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:778:15)\n    at _class.unexpected (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:2063:16)\n    at _class.semicolon (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:2047:40)\n    at _class.parseExpressionStatement (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:4439:10)\n    at _class.parseStatementContent (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:4045:19)\n    at _class.parseStatement (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:4470:23)\n    at _class.parseBlockBody (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:4457:10)\n    at _class.parseBlock (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:4446:10)\n    at _class.parseFunctionBody (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:3722:24)\n    at _class.parseArrowExpression (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:3674:10)\n    at _class.parseExprAtom (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:3028:18)\n    at _class.parseExprAtom (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:8086:52)\n    at _class.parseExprAtom (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:8086:52)\n    at _class.parseExprAtom (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:8086:52)\n    at _class.parseExprSubscripts (C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\node_modules\\babylon\\lib\\index.js:2725:21)");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header_js__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_WineList_js__ = __webpack_require__("./components/WineList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_WineList_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_WineList_js__);
var _jsxFileName = "C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "fetchWines", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          loaded: false
        });

        fetch("http://localhost:3001/wines", {
          method: "GET"
        }).then(function (data) {
          return data.json();
        }).then(function (res) {
          return _this.displayWines(res);
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "displayWines", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(list) {
        var wines = [];
        Object.keys(list).forEach(function (item) {
          wines.push({
            name: item,
            price: list[item].price,
            currency: list[item].currency,
            volume: list[item].volume,
            origin: list[item].origin,
            alcoholPercentage: list[item].alcoholPercentage,
            description: list[item].description
          });
        });

        _this.setState({
          wines: wines,
          loaded: true
        });
      }
    });
    _this.state = {
      wines: []
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchWines();
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), this.state.loaded ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_WineList_js__["default"], {
        wines: this.state.wines,
        updateWineList: this.fetchWines,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Loading..."));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.77abf97614a58364a6cf.hot-update.js.map