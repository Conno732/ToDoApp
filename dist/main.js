/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*#362417, #92817a, #f1dabf, #fffbff, #04030f*/\\r\\nhtml {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Arial Narrow Bold\\\", sans-serif;\\r\\n  height: 100%;\\r\\n  margin: 0;\\r\\n  background-color: #f1dabf;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  flex: 0 0 auto;\\r\\n  height: 110px;\\r\\n  background-color: #362417;\\r\\n  color: #fffbff;\\r\\n  font-size: 64px;\\r\\n  align-items: center;\\r\\n  padding-left: 16px;\\r\\n  border-bottom: black solid 8px;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  display: flex;\\r\\n  flex-grow: 1;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 250px;\\r\\n  background-color: #92817a;\\r\\n  padding: 24px;\\r\\n  border-right: black solid 8px;\\r\\n}\\r\\n\\r\\n.button-group {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 16px;\\r\\n  margin-bottom: 32px;\\r\\n}\\r\\n\\r\\n.nav-btn {\\r\\n  font-family: \\\"Arial Narrow Bold\\\", sans-serif;\\r\\n  text-align: start;\\r\\n  font-size: larger;\\r\\n  height: 32px;\\r\\n  border: none;\\r\\n  border-radius: 8px;\\r\\n  border-bottom: solid #362417 1px;\\r\\n  background-color: #92817a;\\r\\n}\\r\\n\\r\\n.nav-btn.project-btn {\\r\\n  border-bottom: none;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.nav-btn:hover {\\r\\n  transition: 0.05s;\\r\\n  background-color: #796b66;\\r\\n  border-bottom: solid #362417 5px;\\r\\n}\\r\\n\\r\\n.nav-btn:active {\\r\\n  background-color: #5d5350;\\r\\n}\\r\\n\\r\\n.project-group {\\r\\n  display: flex;\\r\\n  flex-grow: 1;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.Title {\\r\\n  font-size: 24px;\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n.project-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 16px;\\r\\n  margin-top: 16px;\\r\\n  margin-bottom: 16px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.project-view {\\r\\n  display: flex;\\r\\n  flex: 1;\\r\\n  padding: 64px;\\r\\n}\\r\\n\\r\\n.project-base {\\r\\n  font-family: \\\"Arial Narrow Bold\\\", sans-serif;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: #92817a;\\r\\n  flex: 1;\\r\\n  padding: 8px 42px;\\r\\n  border-radius: 32px;\\r\\n  border: black solid 1px;\\r\\n  justify-content: flex-start;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.add-container {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  width: 100%;\\r\\n  height: 100px;\\r\\n}\\r\\n\\r\\n.taskList {\\r\\n  margin-left: 64px;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  display: flex;\\r\\n  flex: 0 0 auto;\\r\\n  font-size: 20px;\\r\\n  background-color: #362417;\\r\\n  height: 40px;\\r\\n  color: #fffbff;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  border-top: 8px black solid;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todoapp/./src/styles/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todoapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todoapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todoapp/./src/styles/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todoapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todoapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todoapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todoapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todoapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todoapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/NavBarHandler.js":
/*!*****************************************!*\
  !*** ./src/components/NavBarHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBarHandler\": () => (/* binding */ NavBarHandler)\n/* harmony export */ });\n//UI makes a request to this module to display or update content\r\n// this module contact ProjectDataHandler to aquire the data from local storage and/or submit data.\r\n\r\nconst NavBarHandler = (() => {\r\n  function startup() {}\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://todoapp/./src/components/NavBarHandler.js?");

/***/ }),

/***/ "./src/components/ProjectDataHandler.js":
/*!**********************************************!*\
  !*** ./src/components/ProjectDataHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectDataHandler\": () => (/* binding */ ProjectDataHandler)\n/* harmony export */ });\n//ProjectDataHandler handles data from localStorage to Object form, and vis versa\r\n//  requires startup to do initial retrieval of the object containing all data\r\n//  either removes data by an ID, or adds data given by an object\r\n// ALSO handles requests to edit the data of the objects\r\n\r\n// the handled data works as follows allprojects -> project -> task -> taskproperties\r\n\r\nconst AllProjectsID = \"SuperCoolStuffs\";\r\n\r\nconst ProjectDataHandler = (() => {\r\n  const ProjectsList = {};\r\n  function startup() {\r\n    ProjectsList.projects = JSON.parse(localStorage.getItem(AllProjectsID));\r\n    initStockProjects();\r\n  }\r\n\r\n  //returns nothing, creates new project with given title\r\n  function addProject(title) {\r\n    let newProject = { title, taskList: {} };\r\n    ProjectsList.projects[title] = newProject;\r\n    updateLocalStorage();\r\n  }\r\n\r\n  //returns nothing, takes an id of object\r\n  function removeProject(title) {\r\n    delete ProjectsList.projects[title];\r\n    updateLocalStorage();\r\n  }\r\n\r\n  //adds task to project data ASSUME that DATA is valid\r\n  function addTask(title, data) {\r\n    ProjectsList.projects[title].taskList[data[\"title\"]] = data;\r\n    updateLocalStorage();\r\n  }\r\n\r\n  //remove task\r\n  function removeTask(title, task) {\r\n    delete ProjectsList.projects[title].taskList[task];\r\n    updateLocalStorage();\r\n  }\r\n\r\n  //cure-all for modifying task data\r\n  function modifyTaskData(title, task, data) {}\r\n\r\n  //for the sake of ensuring no duplicate tasks are entered\r\n  function getTaskList(title) {\r\n    return ProjectsList[title].taskList;\r\n  }\r\n\r\n  //check if inbox, week, today exist, otherwise add them\r\n  //potentially have func to initialize each proj\r\n  function initStockProjects() {\r\n    if (!(\"Inbox\" in ProjectsList.projects)) {\r\n      ProjectsList.projects.Inbox = { title: \"Inbox\", taskList: {} };\r\n    }\r\n    if (!(\"Today\" in ProjectsList.projects)) {\r\n      ProjectsList.projects.Today = { title: \"Today\", taskList: {} };\r\n    }\r\n    if (!(\"Week\" in ProjectsList.projects)) {\r\n      ProjectsList.projects.Week = { title: \"Week\", taskList: {} };\r\n    }\r\n    updateLocalStorage();\r\n  }\r\n\r\n  //Return the project data\r\n  function getProjectData(id) {\r\n    return ProjectsList.projects[id];\r\n  }\r\n\r\n  //whenever The object is modified, update the local Storage\r\n  function updateLocalStorage() {\r\n    localStorage.setItem(AllProjectsID, JSON.stringify(ProjectsList.projects));\r\n  }\r\n\r\n  return {\r\n    startup,\r\n    getProjectData,\r\n    addTask,\r\n    getTaskList,\r\n    removeProject,\r\n    addProject,\r\n    removeTask,\r\n  };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://todoapp/./src/components/ProjectDataHandler.js?");

/***/ }),

/***/ "./src/components/ProjectDisplayHandler.js":
/*!*************************************************!*\
  !*** ./src/components/ProjectDisplayHandler.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectHandler\": () => (/* binding */ ProjectHandler)\n/* harmony export */ });\n/* harmony import */ var _ProjectDataHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectDataHandler */ \"./src/components/ProjectDataHandler.js\");\n\r\n\r\n//UI makes a request to this module to display or update content\r\n// this module contact ProjectDataHandler to aquire the data from local storage and/or submit data.\r\n\r\nconst ProjectHandler = (() => {\r\n  const projectView = document.getElementById(\"project-view\");\r\n  function displayProject(id) {\r\n    loadProjectData(id);\r\n  }\r\n\r\n  function loadProjectData(id) {\r\n    const inbox = _ProjectDataHandler__WEBPACK_IMPORTED_MODULE_0__.ProjectDataHandler.getProjectData(id);\r\n    console.log(inbox);\r\n  }\r\n\r\n  function testing() {}\r\n\r\n  return { displayProject, testing };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://todoapp/./src/components/ProjectDisplayHandler.js?");

/***/ }),

/***/ "./src/components/UI.js":
/*!******************************!*\
  !*** ./src/components/UI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startup\": () => (/* binding */ startup)\n/* harmony export */ });\n/* harmony import */ var _ProjectDataHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectDataHandler */ \"./src/components/ProjectDataHandler.js\");\n/* harmony import */ var _ProjectDisplayHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDisplayHandler */ \"./src/components/ProjectDisplayHandler.js\");\n/* harmony import */ var _NavBarHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBarHandler */ \"./src/components/NavBarHandler.js\");\n\r\n\r\n\r\n\r\n//This handles the top level of the project\r\n//  Mainly the UI will handle events and call the appropriate function\r\n//  starts ProjectDataHandler\r\n\r\n//Starts the show, oh yeah...\r\n//automatically loads 'inbox'\r\n//will need to load in all custom projects into navbar\r\nfunction startup() {\r\n  addAllListeners();\r\n  _ProjectDataHandler__WEBPACK_IMPORTED_MODULE_0__.ProjectDataHandler.startup();\r\n  _ProjectDisplayHandler__WEBPACK_IMPORTED_MODULE_1__.ProjectHandler.displayProject(\"Inbox\");\r\n  //NavBarHandler.loadContent();\r\n}\r\n\r\n//This function will take in the id of the element triggered\r\n//  and call the appropriate function\r\nfunction onClickHandler(e) {\r\n  //close, date,\r\n  console.log(e.id);\r\n}\r\n\r\n//Purely EventListeners below\r\n\r\nfunction addAllListeners() {\r\n  addNavBtnListeners();\r\n}\r\n\r\nfunction addNavBtnListeners() {\r\n  const buttons = document.querySelectorAll(\".nav-btn\");\r\n  buttons.forEach((e) => {\r\n    e.addEventListener(\"click\", () => {\r\n      onClickHandler(e);\r\n    });\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todoapp/./src/components/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _components_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/UI */ \"./src/components/UI.js\");\n\r\n\r\n\r\n//title, description, dueDate and priority\r\n\r\n(0,_components_UI__WEBPACK_IMPORTED_MODULE_1__.startup)();\r\n\n\n//# sourceURL=webpack://todoapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;