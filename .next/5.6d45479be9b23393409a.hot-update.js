webpackHotUpdate(5,{

/***/ "./components/WineList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
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
  display: "flex",
  flexDirection: "column"
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
  maxWidth: "50%"
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
        console.log(data);
        var query = "";

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
          lineNumber: 112
        }
      }, this.state.res ? this.state.res.Message ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        style: successStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        style: messageStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, this.state.res.Message)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        style: errorStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        style: messageStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, this.state.res.Error)) : null, this.props.wines.map(function (wine) {
        return _this3.state.edit ? _this3.state.data.tempName === wine.name ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          style: liStyle,
          key: wine.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, "Editing ", wine.tempName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, "Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "name",
          type: "text",
          value: _this3.state.data.name,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, "Price"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "price",
          type: "text",
          value: _this3.state.data.price,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, "Currency"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "currency",
          type: "text",
          value: _this3.state.data.currency,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, "Volume"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "volume",
          type: "text",
          value: _this3.state.data.volume,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, "Origin"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "origin",
          type: "text",
          value: _this3.state.data.origin,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, "Alcohol"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "alcoholPercentage",
          type: "text",
          value: _this3.state.data.alcoholPercentage,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, "Description"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          name: "description",
          type: "text",
          value: _this3.state.data.description,
          onChange: _this3.handleInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          onClick: function onClick() {
            _this3.editWine(_this3.state.data);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }, "Confirm"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          onClick: function onClick() {
            _this3.setState({
              edit: false,
              data: null
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, "Discard")) : null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          style: liStyle,
          key: wine.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: wineFragment,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: wine,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, wine.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }, wine.origin)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }, wine.price + wine.currency), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, wine.alcoholPercentage, " %, ", wine.volume))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: wineFragment,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          style: description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, wine.description)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
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
            lineNumber: 159
          }
        }, "Edit"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          className: "delete",
          onClick: function onClick() {
            _this3.deleteWine(wine.name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          }
        }, "Delete"));
      }));
    }
  }]);

  return WineList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (WineList);

/***/ })

})
//# sourceMappingURL=5.6d45479be9b23393409a.hot-update.js.map