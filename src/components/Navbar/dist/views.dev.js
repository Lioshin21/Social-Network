"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkElem = exports.LinkWrapper = exports.Nav = void 0;

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    text-decoration: none;\n    color: white;\n\n    &.active {\n        color: gold;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: 24px;\n    height: 20px;\n    margin: 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 200px;\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background: blueviolet;\n    margin: 0px;\n    height: 800px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents["default"].nav(_templateObject());

exports.Nav = Nav;

var LinkWrapper = _styledComponents["default"].div(_templateObject2());

exports.LinkWrapper = LinkWrapper;
var LinkElem = (0, _styledComponents["default"])(_reactRouterDom.NavLink)(_templateObject3());
exports.LinkElem = LinkElem;