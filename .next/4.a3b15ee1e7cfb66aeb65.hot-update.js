webpackHotUpdate(4,{

/***/ "./components/WineList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "C:\\Users\\Erik\\Dropbox\\Frontend Utvecklare 2017\\Serverside\\Labb 1\\labb-ssr\\components\\WineList.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var ulStyle = {
  maxWidth: "90%",
  border: "1px solid red"
};
var wineLiStyle = {
  background: "red",
  listStyleType: "none"
};
var liStyle = {
  listStyleType: "none"
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
          console.log(res); // Refresh Wines List

          _this.props.updateWineList();
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "createWine", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(data) {
        var query;
        query += "name=" + data.name;
        query += "&price=" + data.price;
        query += "&currency=" + data.currency;
        query += "&volume=" + data.volume;
        query += "&origin=" + data.origin;
        query += "&alcoholPercentage=" + data.alcoholPercentage;
        query += "&description=" + data.description;
        fetch("http://localhost:3001/wines?" + query, {
          method: "POST"
        }).then(function (data) {
          return data.json();
        }).then(function (res) {
          console.log(res); // Refresh Wines List

          _this.props.updateWineList();
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "editWine", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(data) {
        var query;

        if (data.name) {
          query += "name=" + data.name;
          if (data.price) query += "&price=" + data.price;
          if (data.currency) query += "&currency=" + data.currency;
          if (data.volume) query += "&volume=" + data.volume;
          if (data.origin) query += "&origin=" + data.origin;
          if (data.alcoholPercentage) query += "&alcoholPercentage=" + data.alcoholPercentage;
          if (data.description) query += "&description=" + data.description;
        }

        fetch("http://localhost:3001/wines?" + query, {
          method: "PUT"
        }).then(function (data) {
          return data.json();
        }).then(function (res) {
          console.log(res); // Refresh Wines List

          _this.props.updateWineList();
        });
      }
    });
    _this.state = {
      edit: false
    };
    return _this;
  }

  _createClass(WineList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        style: ulStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        style: liStyle,
        key: "addWine",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.createWine,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Add Wine")), this.props.wines.map(function (wine) {
        return _this2.state.edit ? _this2.state.data.name === wine.name ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          style: liStyle,
          key: wine.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, "Editmode for ", wine.name, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          onClick: function onClick() {
            _this2.setState({
              edit: false,
              data: null
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, "Cancel Edit")) : null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          style: liStyle,
          key: wine.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          style: wineLiStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, wine.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          style: wineLiStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, wine.price + wine.currency), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          style: wineLiStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, wine.volume), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          style: wineLiStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, wine.origin), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          style: wineLiStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, wine.description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          style: wineLiStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          onClick: function onClick() {
            _this2.deleteWine(wine.name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, "Delete"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          onClick: function onClick() {
            _this2.setState({
              edit: true,
              data: wine
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, "Edit"))));
      }));
    }
  }]);

  return WineList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (WineList);

/***/ })

})
//# sourceMappingURL=4.a3b15ee1e7cfb66aeb65.hot-update.js.map