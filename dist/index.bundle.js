"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/normalize.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n   * Resetting all elements' default CSS\r\n   */\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  -ms-box-sizing: border-box;\r\n}\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the margin in all browsers.\r\n   */\r\n\r\nbody,\r\nbody::before,\r\nbody::after {\r\n  margin: 0;\r\n\r\n  /* Below Lines Added By Me */\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  -ms-box-sizing: border-box;\r\n}\r\n\r\n/**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\npre {\r\n  font-family: monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n   * Correct the padding in Firefox.\r\n   */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n     ========================================================================== */\r\n\r\n/*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n   * Add the correct display in all browsers.\r\n   */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n   * Add the correct display in IE 10.\r\n   */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/normalize.css"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n   * Resetting all elements' default CSS\r\n   */\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  -ms-box-sizing: border-box;\r\n}\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the margin in all browsers.\r\n   */\r\n\r\nbody,\r\nbody::before,\r\nbody::after {\r\n  margin: 0;\r\n\r\n  /* Below Lines Added By Me */\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  -ms-box-sizing: border-box;\r\n}\r\n\r\n/**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\npre {\r\n  font-family: monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n   * Correct the padding in Firefox.\r\n   */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n     ========================================================================== */\r\n\r\n/*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n   * Add the correct display in all browsers.\r\n   */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n   * Add the correct display in IE 10.\r\n   */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Importing the \"normalize.css\" file which is for resetting all the default css values */\r\n\r\n/* Importing Fonts */\r\n\r\n/* ******Main & Secondary Colors****** */\r\n:root {\r\n  --bg_color: #fff;\r\n  --primary: #2c3e50;\r\n  --primary_light: #34495e;\r\n  --secondary: #ec5242;\r\n  --neutral: #d3d3d3;\r\n  --verdana: verdana, tahoma, sans-serif;\r\n  --Tahoma: tahoma, verdana, sans-serif;\r\n  --sans-serif: sans-serif, verdana, tahoma;\r\n  --open-sans: \"Open Sans\", sans-serif;\r\n}\r\n\r\n/* **********Global Classes********** */\r\n.container {\r\n  font-family: var(--open-sans);\r\n  font-style: normal;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.underline {\r\n  height: 2.5px;\r\n  background-color: var(--primary);\r\n}\r\n\r\n.title h1,\r\nh2,\r\nh3 {\r\n  margin: 0;\r\n}\r\n\r\n/* ======================================Header Start====================================== */\r\n.header {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: var(--primary);\r\n  width: 100%;\r\n  height: 5rem;\r\n  padding: 5px 45px;\r\n  margin: 0;\r\n}\r\n\r\n.header-logo img {\r\n  width: 180px;\r\n  height: 71px;\r\n}\r\n\r\n.desktop-menu nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  background-color: var(--primary_light);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);\r\n  width: 100%;\r\n  height: 50px;\r\n  position: relative;\r\n}\r\n\r\n.desktop-menu nav a {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  line-height: 50px;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: var(--neutral);\r\n  width: 100px;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\nnav .animation {\r\n  position: absolute;\r\n  background: #1abc9c;\r\n  border-radius: 8px;\r\n  top: 0;\r\n  height: 100%;\r\n  z-index: 0;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\nnav a:nth-child(1) {\r\n  width: 120px;\r\n}\r\n\r\nnav .start-home,\r\na:nth-child(1):hover ~ .animation {\r\n  width: 120px;\r\n  left: 0;\r\n}\r\n\r\nnav a:nth-child(2) {\r\n  width: 100px;\r\n}\r\n\r\nnav .start-contact,\r\na:nth-child(2):hover ~ .animation {\r\n  width: 100px;\r\n  left: 120px;\r\n}\r\n\r\nnav a:nth-child(3) {\r\n  width: 100px;\r\n}\r\n\r\nnav .start-about,\r\na:nth-child(3):hover ~ .animation {\r\n  width: 100px;\r\n  left: 220px;\r\n}\r\n\r\n/* =======================================Header End======================================= */\r\n\r\n/* ======================================Navigation Start==================================== */\r\n.navigation {\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: var(--primary);\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n/* =======================================Navigation End===================================== */\r\n\r\n/* =====================================Main-Wrapper Start=================================== */\r\n.main-wrapper {\r\n  padding-top: 6rem; /* change to 5rem */\r\n  min-height: 30rem;\r\n  width: 100%;\r\n}\r\n\r\n.main-date {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  color: var(--primary);\r\n  padding: 5px 45px;\r\n  width: 100%;\r\n}\r\n\r\n.main-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 35px;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 35px 65px;\r\n  margin: 0;\r\n}\r\n\r\n/* ======================================Main-Wrapper End==================================== */\r\n\r\n/* =============================Scores-Collection-Section Start============================= */\r\n.title-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.scores-collection {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: var(--bg_color);\r\n}\r\n\r\n.scores-collection .title {\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.scores-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 4px solid var(--primary);\r\n  width: 100%;\r\n}\r\n\r\n.score-item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-align: justify;\r\n  flex-wrap: wrap;\r\n  background-color: var(--bg_color);\r\n  width: 100%;\r\n  padding: 10px 15px;\r\n}\r\n\r\n.score-item:nth-child(odd) {\r\n  background-color: var(--neutral);\r\n}\r\n\r\n.score-info {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.score-info h2,\r\nh3 {\r\n  margin: 0;\r\n}\r\n\r\n/* ==============================Scores-Collection-Section End============================== */\r\n\r\n/* ================================Scores-Form-Section Start================================ */\r\n.scores-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  width: auto;\r\n  gap: 15px;\r\n  background-color: var(--bg_color);\r\n  height: auto;\r\n  margin: 0;\r\n}\r\n\r\n.scores-form .title {\r\n  font-size: 1.2em;\r\n  padding: 10px;\r\n}\r\n\r\n.form-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 2px solid var(--primary);\r\n  background-color: var(--neutral);\r\n  list-style: none;\r\n  gap: 25px;\r\n  border-radius: 16px;\r\n  width: 100%;\r\n  padding: 35px 15px;\r\n  margin: 0;\r\n}\r\n\r\n.form-list li input {\r\n  border: 2px solid var(--primary);\r\n  border-radius: 8px;\r\n  width: 25rem;\r\n  height: 2rem;\r\n}\r\n\r\n.normal-btn {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  box-shadow: 3px 3px;\r\n  border-radius: 8px;\r\n  border: 2px solid var(--primary);\r\n  min-width: 45px;\r\n  min-height: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.normal-btn:hover {\r\n  background-color: var(--primary);\r\n  color: var(--bg_color);\r\n}\r\n\r\n/* =================================Scores-Form-Section End================================= */\r\n\r\n/* =================================Contact-Section Start================================= */\r\n.contact-us {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  background-color: var(--bg_color);\r\n  padding: 20px 65px;\r\n}\r\n\r\n.contact-us .title {\r\n  font-size: 1.3em;\r\n  text-align: center;\r\n  padding: 15px;\r\n}\r\n\r\n.contact-info {\r\n  font-weight: bold;\r\n  line-height: 1.5em;\r\n  text-align: justify;\r\n}\r\n\r\n.contact-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  gap: 15px;\r\n  width: 100%;\r\n}\r\n\r\n/* ==================================Contact-Section End================================== */\r\n\r\n/* ==================================Footer-Section Start================================== */\r\nfooter {\r\n  font-family: var(--open-sans);\r\n  font-weight: bold;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: var(--primary);\r\n  min-height: auto;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 35px 65px;\r\n}\r\n\r\nfooter .social-icons,\r\nfooter .menu {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 10px 0;\r\n  width: 100%;\r\n}\r\n\r\nfooter .social-icons li,\r\nfooter .menu li {\r\n  list-style: none;\r\n}\r\n\r\nfooter .social-icons li a {\r\n  display: inline-block;\r\n  font-size: 2em;\r\n  color: var(--neutral);\r\n  margin: 0 10px;\r\n  transition: 0.5s;\r\n  opacity: 0.75;\r\n}\r\n\r\nfooter .menu li a {\r\n  font-size: 1.2em;\r\n  color: var(--neutral);\r\n  margin: 0 10px;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  opacity: 0.75;\r\n}\r\n\r\nfooter .social-icons li a:hover {\r\n  transform: translateY(-10px);\r\n  opacity: 1;\r\n}\r\n\r\nfooter .menu li a:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.footer-logo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  color: var(--neutral);\r\n  gap: 5px;\r\n}\r\n\r\n.footer-logo img {\r\n  width: 180px;\r\n  height: 71px;\r\n}\r\n\r\n/* ===================================Footer-Section End=================================== */\r\n\r\n/* ====================================Media Query Start==================================== */\r\n\r\n/*******  Second Breakpoint  *******/\r\n@media screen\r\n  and (min-width: 768px) {\r\n  .main-content {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    flex-wrap: nowrap;\r\n    padding: 35px 65px;\r\n  }\r\n\r\n  .form-list li input {\r\n    min-width: 15rem;\r\n    width: 20rem;\r\n    height: 2.5rem;\r\n  }\r\n}\r\n\r\n/* =====================================Media Query End===================================== */\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Importing the \"normalize.css\" file which is for resetting all the default css values */\r\n@import url(\"./normalize.css\");\r\n\r\n/* Importing Fonts */\r\n@import url('https://fonts.googleapis.com/css?family=Open+Sans');\r\n\r\n/* ******Main & Secondary Colors****** */\r\n:root {\r\n  --bg_color: #fff;\r\n  --primary: #2c3e50;\r\n  --primary_light: #34495e;\r\n  --secondary: #ec5242;\r\n  --neutral: #d3d3d3;\r\n  --verdana: verdana, tahoma, sans-serif;\r\n  --Tahoma: tahoma, verdana, sans-serif;\r\n  --sans-serif: sans-serif, verdana, tahoma;\r\n  --open-sans: \"Open Sans\", sans-serif;\r\n}\r\n\r\n/* **********Global Classes********** */\r\n.container {\r\n  font-family: var(--open-sans);\r\n  font-style: normal;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.underline {\r\n  height: 2.5px;\r\n  background-color: var(--primary);\r\n}\r\n\r\n.title h1,\r\nh2,\r\nh3 {\r\n  margin: 0;\r\n}\r\n\r\n/* ======================================Header Start====================================== */\r\n.header {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: var(--primary);\r\n  width: 100%;\r\n  height: 5rem;\r\n  padding: 5px 45px;\r\n  margin: 0;\r\n}\r\n\r\n.header-logo img {\r\n  width: 180px;\r\n  height: 71px;\r\n}\r\n\r\n.desktop-menu nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  background-color: var(--primary_light);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);\r\n  width: 100%;\r\n  height: 50px;\r\n  position: relative;\r\n}\r\n\r\n.desktop-menu nav a {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  line-height: 50px;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: var(--neutral);\r\n  width: 100px;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\nnav .animation {\r\n  position: absolute;\r\n  background: #1abc9c;\r\n  border-radius: 8px;\r\n  top: 0;\r\n  height: 100%;\r\n  z-index: 0;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\nnav a:nth-child(1) {\r\n  width: 120px;\r\n}\r\n\r\nnav .start-home,\r\na:nth-child(1):hover ~ .animation {\r\n  width: 120px;\r\n  left: 0;\r\n}\r\n\r\nnav a:nth-child(2) {\r\n  width: 100px;\r\n}\r\n\r\nnav .start-contact,\r\na:nth-child(2):hover ~ .animation {\r\n  width: 100px;\r\n  left: 120px;\r\n}\r\n\r\nnav a:nth-child(3) {\r\n  width: 100px;\r\n}\r\n\r\nnav .start-about,\r\na:nth-child(3):hover ~ .animation {\r\n  width: 100px;\r\n  left: 220px;\r\n}\r\n\r\n/* =======================================Header End======================================= */\r\n\r\n/* ======================================Navigation Start==================================== */\r\n.navigation {\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: var(--primary);\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n/* =======================================Navigation End===================================== */\r\n\r\n/* =====================================Main-Wrapper Start=================================== */\r\n.main-wrapper {\r\n  padding-top: 6rem; /* change to 5rem */\r\n  min-height: 30rem;\r\n  width: 100%;\r\n}\r\n\r\n.main-date {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  color: var(--primary);\r\n  padding: 5px 45px;\r\n  width: 100%;\r\n}\r\n\r\n.main-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 35px;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 35px 65px;\r\n  margin: 0;\r\n}\r\n\r\n/* ======================================Main-Wrapper End==================================== */\r\n\r\n/* =============================Scores-Collection-Section Start============================= */\r\n.title-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.scores-collection {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: var(--bg_color);\r\n}\r\n\r\n.scores-collection .title {\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.scores-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 4px solid var(--primary);\r\n  width: 100%;\r\n}\r\n\r\n.score-item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-align: justify;\r\n  flex-wrap: wrap;\r\n  background-color: var(--bg_color);\r\n  width: 100%;\r\n  padding: 10px 15px;\r\n}\r\n\r\n.score-item:nth-child(odd) {\r\n  background-color: var(--neutral);\r\n}\r\n\r\n.score-info {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.score-info h2,\r\nh3 {\r\n  margin: 0;\r\n}\r\n\r\n/* ==============================Scores-Collection-Section End============================== */\r\n\r\n/* ================================Scores-Form-Section Start================================ */\r\n.scores-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  width: auto;\r\n  gap: 15px;\r\n  background-color: var(--bg_color);\r\n  height: auto;\r\n  margin: 0;\r\n}\r\n\r\n.scores-form .title {\r\n  font-size: 1.2em;\r\n  padding: 10px;\r\n}\r\n\r\n.form-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 2px solid var(--primary);\r\n  background-color: var(--neutral);\r\n  list-style: none;\r\n  gap: 25px;\r\n  border-radius: 16px;\r\n  width: 100%;\r\n  padding: 35px 15px;\r\n  margin: 0;\r\n}\r\n\r\n.form-list li input {\r\n  border: 2px solid var(--primary);\r\n  border-radius: 8px;\r\n  width: 25rem;\r\n  height: 2rem;\r\n}\r\n\r\n.normal-btn {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  box-shadow: 3px 3px;\r\n  border-radius: 8px;\r\n  border: 2px solid var(--primary);\r\n  min-width: 45px;\r\n  min-height: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.normal-btn:hover {\r\n  background-color: var(--primary);\r\n  color: var(--bg_color);\r\n}\r\n\r\n/* =================================Scores-Form-Section End================================= */\r\n\r\n/* =================================Contact-Section Start================================= */\r\n.contact-us {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  background-color: var(--bg_color);\r\n  padding: 20px 65px;\r\n}\r\n\r\n.contact-us .title {\r\n  font-size: 1.3em;\r\n  text-align: center;\r\n  padding: 15px;\r\n}\r\n\r\n.contact-info {\r\n  font-weight: bold;\r\n  line-height: 1.5em;\r\n  text-align: justify;\r\n}\r\n\r\n.contact-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  gap: 15px;\r\n  width: 100%;\r\n}\r\n\r\n/* ==================================Contact-Section End================================== */\r\n\r\n/* ==================================Footer-Section Start================================== */\r\nfooter {\r\n  font-family: var(--open-sans);\r\n  font-weight: bold;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: var(--primary);\r\n  min-height: auto;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 35px 65px;\r\n}\r\n\r\nfooter .social-icons,\r\nfooter .menu {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 10px 0;\r\n  width: 100%;\r\n}\r\n\r\nfooter .social-icons li,\r\nfooter .menu li {\r\n  list-style: none;\r\n}\r\n\r\nfooter .social-icons li a {\r\n  display: inline-block;\r\n  font-size: 2em;\r\n  color: var(--neutral);\r\n  margin: 0 10px;\r\n  transition: 0.5s;\r\n  opacity: 0.75;\r\n}\r\n\r\nfooter .menu li a {\r\n  font-size: 1.2em;\r\n  color: var(--neutral);\r\n  margin: 0 10px;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  opacity: 0.75;\r\n}\r\n\r\nfooter .social-icons li a:hover {\r\n  transform: translateY(-10px);\r\n  opacity: 1;\r\n}\r\n\r\nfooter .menu li a:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.footer-logo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  color: var(--neutral);\r\n  gap: 5px;\r\n}\r\n\r\n.footer-logo img {\r\n  width: 180px;\r\n  height: 71px;\r\n}\r\n\r\n/* ===================================Footer-Section End=================================== */\r\n\r\n/* ====================================Media Query Start==================================== */\r\n\r\n/*******  Second Breakpoint  *******/\r\n@media screen\r\n  and (min-width: 768px) {\r\n  .main-content {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    flex-wrap: nowrap;\r\n    padding: 35px 65px;\r\n  }\r\n\r\n  .form-list li input {\r\n    min-width: 15rem;\r\n    width: 20rem;\r\n    height: 2.5rem;\r\n  }\r\n}\r\n\r\n/* =====================================Media Query End===================================== */\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/logo.png */ "./src/assets/img/logo.png");
/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/utils.js */ "./src/modules/utils.js");
// import _ from 'lodash';




//* *********Setting Add&Refresh Click Listeners************//
const addScoreBtn = document.querySelector('#add_score_btn');
addScoreBtn.addEventListener('click', _modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.addScore);
const refreshBtn = document.querySelector('#refresh_btn');
refreshBtn.addEventListener('click', _modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.refreshScores);

window.onload = () => {
  // Setting Header & Footer logos
  document.querySelector('#header_logo').src = _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_1__;
  document.querySelector('#footer_logo').src = _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_1__;
  // Setting the date
  (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.displayDate)();
  // Fetching scores from the api
  (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.refreshScores)();
};

/***/ }),

/***/ "./src/modules/luxon.js":
/*!******************************!*\
  !*** ./src/modules/luxon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTime": () => (/* binding */ DateTime),
/* harmony export */   "Duration": () => (/* binding */ Duration),
/* harmony export */   "FixedOffsetZone": () => (/* binding */ FixedOffsetZone),
/* harmony export */   "IANAZone": () => (/* binding */ IANAZone),
/* harmony export */   "Info": () => (/* binding */ Info),
/* harmony export */   "Interval": () => (/* binding */ Interval),
/* harmony export */   "InvalidZone": () => (/* binding */ InvalidZone),
/* harmony export */   "Settings": () => (/* binding */ Settings),
/* harmony export */   "SystemZone": () => (/* binding */ SystemZone),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "Zone": () => (/* binding */ Zone)
/* harmony export */ });
/* eslint-disable */

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
class LuxonError extends Error {}

/**
  * @private
  */
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}

/**
  * @private
  */
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}

/**
  * @private
  */
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}

/**
  * @private
  */
class ConflictingSpecificationError extends LuxonError {}

/**
  * @private
  */
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}

/**
  * @private
  */
class InvalidArgumentError extends LuxonError {}

/**
  * @private
  */
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super('Zone is an abstract class');
  }
}

/**
  * @private
  */

const n = 'numeric';
const s = 'short';
const l = 'long';

const DATE_SHORT = {
  year: n,
  month: n,
  day: n,
};

const DATE_MED = {
  year: n,
  month: s,
  day: n,
};

const DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
};

const DATE_FULL = {
  year: n,
  month: l,
  day: n,
};

const DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
};

const TIME_SIMPLE = {
  hour: n,
  minute: n,
};

const TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
};

const TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};

const TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: 'h23',
};

const TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: 'h23',
};

const TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: 'h23',
  timeZoneName: s,
};

const TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: 'h23',
  timeZoneName: l,
};

const DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
};

const DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n,
};

const DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n,
};

const DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s,
};

const DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

const DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l,
};

const DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
};

/*
   This is just a junk drawer, containing anything used across multiple classes.
   Because Luxon is small(ish), this should stay small and we won't worry about splitting
   it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
 */

/**
  * @private
  */

// TYPES

function isUndefined(o) {
  return typeof o === 'undefined';
}

function isNumber(o) {
  return typeof o === 'number';
}

function isInteger(o) {
  return typeof o === 'number' && o % 1 === 0;
}

function isString(o) {
  return typeof o === 'string';
}

function isDate(o) {
  return Object.prototype.toString.call(o) === '[object Date]';
}

// CAPABILITIES

function hasRelative() {
  try {
    return typeof Intl !== 'undefined' && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}

// OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}

function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } if (compare(best[0], pair[0]) === best[0]) {
      return best;
    }
    return pair;
  }, null)[1];
}

function pick(obj, keys) {
  return keys.reduce((a, k) => {
    a[k] = obj[k];
    return a;
  }, {});
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}

// x % n but takes the sign of n instead of x
function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}

function padStart(input, n = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = `-${(`${-input}`).padStart(n, '0')}`;
  } else {
    padded = (`${input}`).padStart(n, '0');
  }
  return padded;
}

function parseInteger(string) {
  if (isUndefined(string) || string === null || string === '') {
    return undefined;
  }
  return parseInt(string, 10);
}

function parseFloating(string) {
  if (isUndefined(string) || string === null || string === '') {
    return undefined;
  }
  return parseFloat(string);
}

function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === '') {
    return undefined;
  }
  const f = parseFloat(`0.${fraction}`) * 1000;
  return Math.floor(f);
}

function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits;
  const rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}

// DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1;
  const modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  }
  return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
}

// covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
  let d = Date.UTC(
    obj.year,
    obj.month - 1,
    obj.day,
    obj.hour,
    obj.minute,
    obj.second,
    obj.millisecond,
  );

  // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  return +d;
}

function weeksInWeekYear(weekYear) {
  const p1 = (weekYear
         + Math.floor(weekYear / 4)
         - Math.floor(weekYear / 100)
         + Math.floor(weekYear / 400))
       % 7;
  const last = weekYear - 1;
  const p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}

function untruncateYear(year) {
  if (year > 99) {
    return year;
  } return year > 60 ? 1900 + year : 2000 + year;
}

// PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts);
  const intlOpts = {
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  const modified = { timeZoneName: offsetFormat, ...intlOpts };

  const parsed = new Intl.DateTimeFormat(locale, modified)
    .formatToParts(date)
    .find((m) => m.type.toLowerCase() === 'timezonename');
  return parsed ? parsed.value : null;
}

// signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);

  // don't || this because we want to preserve -0
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  const offMin = parseInt(offMinuteStr, 10) || 0;
  const offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}

// COERCION

function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === 'boolean' || value === '' || Number.isNaN(numericValue)) { throw new InvalidArgumentError(`Invalid unit value ${value}`); }
  return numericValue;
}

function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u in obj) {
    if (hasOwnProperty(obj, u)) {
      const v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}

function formatOffset(offset, format) {
  const hours = Math.trunc(Math.abs(offset / 60));
  const minutes = Math.trunc(Math.abs(offset % 60));
  const sign = offset >= 0 ? '+' : '-';

  switch (format) {
    case 'short':
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case 'narrow':
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ''}`;
    case 'techie':
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}

function timeObject(obj) {
  return pick(obj, ['hour', 'minute', 'second', 'millisecond']);
}

const ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

/**
  * @private
  */

const monthsLong = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const monthsShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const monthsNarrow = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

function months(length) {
  switch (length) {
    case 'narrow':
      return [...monthsNarrow];
    case 'short':
      return [...monthsShort];
    case 'long':
      return [...monthsLong];
    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    case '2-digit':
      return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    default:
      return null;
  }
}

const weekdaysLong = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const weekdaysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const weekdaysNarrow = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function weekdays(length) {
  switch (length) {
    case 'narrow':
      return [...weekdaysNarrow];
    case 'short':
      return [...weekdaysShort];
    case 'long':
      return [...weekdaysLong];
    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7'];
    default:
      return null;
  }
}

const meridiems = ['AM', 'PM'];

const erasLong = ['Before Christ', 'Anno Domini'];

const erasShort = ['BC', 'AD'];

const erasNarrow = ['B', 'A'];

function eras(length) {
  switch (length) {
    case 'narrow':
      return [...erasNarrow];
    case 'short':
      return [...erasShort];
    case 'long':
      return [...erasLong];
    default:
      return null;
  }
}

function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}

function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}

function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}

function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}

function formatRelativeTime(unit, count, numeric = 'always', narrow = false) {
  const units = {
    years: ['year', 'yr.'],
    quarters: ['quarter', 'qtr.'],
    months: ['month', 'mo.'],
    weeks: ['week', 'wk.'],
    days: ['day', 'day', 'days'],
    hours: ['hour', 'hr.'],
    minutes: ['minute', 'min.'],
    seconds: ['second', 'sec.'],
  };

  const lastable = ['hours', 'minutes', 'seconds'].indexOf(unit) === -1;

  if (numeric === 'auto' && lastable) {
    const isDay = unit === 'days';
    switch (count) {
      case 1:
        return isDay ? 'tomorrow' : `next ${units[unit][0]}`;
      case -1:
        return isDay ? 'yesterday' : `last ${units[unit][0]}`;
      case 0:
        return isDay ? 'today' : `this ${units[unit][0]}`;
    }
  }

  const isInPast = Object.is(count, -0) || count < 0;
  const fmtValue = Math.abs(count);
  const singular = fmtValue === 1;
  const lilUnits = units[unit];
  const fmtUnit = narrow
    ? singular
      ? lilUnits[1]
      : lilUnits[2] || lilUnits[1]
    : singular
      ? units[unit][0]
      : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}

function stringifyTokens(splits, tokenToString) {
  let s = '';
  for (const token of splits) {
    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }
  return s;
}

const macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS,
};

/**
  * @private
  */

class Formatter {
  static create(locale, opts = {}) {
    return new Formatter(locale, opts);
  }

  static parseFormat(fmt) {
    let current = null;
    let currentFull = '';
    let bracketed = false;
    const splits = [];
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = '';
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({ literal: bracketed, val: currentFull });
    }

    return splits;
  }

  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }

  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }

  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.formatToParts();
  }

  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.resolvedOptions();
  }

  num(n, p = 0) {
    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    const opts = { ...this.opts };

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  }

  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === 'en';
    const useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== 'gregory';
    const string = (opts, extract) => this.loc.extract(dt, opts, extract);
    const formatOffset = (opts) => {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return 'Z';
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : '';
    };
    const meridiem = () => (knownEnglish
      ? meridiemForDateTime(dt)
      : string({ hour: 'numeric', hourCycle: 'h12' }, 'dayperiod'));
    const month = (length, standalone) => (knownEnglish
      ? monthForDateTime(dt, length)
      : string(standalone ? { month: length } : { month: length, day: 'numeric' }, 'month'));
    const weekday = (length, standalone) => (knownEnglish
      ? weekdayForDateTime(dt, length)
      : string(
        standalone ? { weekday: length } : { weekday: length, month: 'long', day: 'numeric' },
        'weekday',
      ));
    const maybeMacro = (token) => {
      const formatOpts = Formatter.macroTokenToFormatOpts(token);
      if (formatOpts) {
        return this.formatWithSystemDefault(dt, formatOpts);
      }
      return token;
    };
    const era = (length) => (knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, 'era'));
    const tokenToString = (token) => {
      // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
      switch (token) {
        // ms
        case 'S':
          return this.num(dt.millisecond);
        case 'u':
          // falls through
        case 'SSS':
          return this.num(dt.millisecond, 3);
          // seconds
        case 's':
          return this.num(dt.second);
        case 'ss':
          return this.num(dt.second, 2);
          // fractional seconds
        case 'uu':
          return this.num(Math.floor(dt.millisecond / 10), 2);
        case 'uuu':
          return this.num(Math.floor(dt.millisecond / 100));
          // minutes
        case 'm':
          return this.num(dt.minute);
        case 'mm':
          return this.num(dt.minute, 2);
          // hours
        case 'h':
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
        case 'hh':
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
        case 'H':
          return this.num(dt.hour);
        case 'HH':
          return this.num(dt.hour, 2);
          // offset
        case 'Z':
          // like +6
          return formatOffset({ format: 'narrow', allowZ: this.opts.allowZ });
        case 'ZZ':
          // like +06:00
          return formatOffset({ format: 'short', allowZ: this.opts.allowZ });
        case 'ZZZ':
          // like +0600
          return formatOffset({ format: 'techie', allowZ: this.opts.allowZ });
        case 'ZZZZ':
          // like EST
          return dt.zone.offsetName(dt.ts, { format: 'short', locale: this.loc.locale });
        case 'ZZZZZ':
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, { format: 'long', locale: this.loc.locale });
          // zone
        case 'z':
          // like America/New_York
          return dt.zoneName;
          // meridiems
        case 'a':
          return meridiem();
          // dates
        case 'd':
          return useDateTimeFormatter ? string({ day: 'numeric' }, 'day') : this.num(dt.day);
        case 'dd':
          return useDateTimeFormatter ? string({ day: '2-digit' }, 'day') : this.num(dt.day, 2);
          // weekdays - standalone
        case 'c':
          // like 1
          return this.num(dt.weekday);
        case 'ccc':
          // like 'Tues'
          return weekday('short', true);
        case 'cccc':
          // like 'Tuesday'
          return weekday('long', true);
        case 'ccccc':
          // like 'T'
          return weekday('narrow', true);
          // weekdays - format
        case 'E':
          // like 1
          return this.num(dt.weekday);
        case 'EEE':
          // like 'Tues'
          return weekday('short', false);
        case 'EEEE':
          // like 'Tuesday'
          return weekday('long', false);
        case 'EEEEE':
          // like 'T'
          return weekday('narrow', false);
          // months - standalone
        case 'L':
          // like 1
          return useDateTimeFormatter
            ? string({ month: 'numeric', day: 'numeric' }, 'month')
            : this.num(dt.month);
        case 'LL':
          // like 01, doesn't seem to work
          return useDateTimeFormatter
            ? string({ month: '2-digit', day: 'numeric' }, 'month')
            : this.num(dt.month, 2);
        case 'LLL':
          // like Jan
          return month('short', true);
        case 'LLLL':
          // like January
          return month('long', true);
        case 'LLLLL':
          // like J
          return month('narrow', true);
          // months - format
        case 'M':
          // like 1
          return useDateTimeFormatter
            ? string({ month: 'numeric' }, 'month')
            : this.num(dt.month);
        case 'MM':
          // like 01
          return useDateTimeFormatter
            ? string({ month: '2-digit' }, 'month')
            : this.num(dt.month, 2);
        case 'MMM':
          // like Jan
          return month('short', false);
        case 'MMMM':
          // like January
          return month('long', false);
        case 'MMMMM':
          // like J
          return month('narrow', false);
          // years
        case 'y':
          // like 2014
          return useDateTimeFormatter ? string({ year: 'numeric' }, 'year') : this.num(dt.year);
        case 'yy':
          // like 14
          return useDateTimeFormatter
            ? string({ year: '2-digit' }, 'year')
            : this.num(dt.year.toString().slice(-2), 2);
        case 'yyyy':
          // like 0012
          return useDateTimeFormatter
            ? string({ year: 'numeric' }, 'year')
            : this.num(dt.year, 4);
        case 'yyyyyy':
          // like 000012
          return useDateTimeFormatter
            ? string({ year: 'numeric' }, 'year')
            : this.num(dt.year, 6);
          // eras
        case 'G':
          // like AD
          return era('short');
        case 'GG':
          // like Anno Domini
          return era('long');
        case 'GGGGG':
          return era('narrow');
        case 'kk':
          return this.num(dt.weekYear.toString().slice(-2), 2);
        case 'kkkk':
          return this.num(dt.weekYear, 4);
        case 'W':
          return this.num(dt.weekNumber);
        case 'WW':
          return this.num(dt.weekNumber, 2);
        case 'o':
          return this.num(dt.ordinal);
        case 'ooo':
          return this.num(dt.ordinal, 3);
        case 'q':
          // like 1
          return this.num(dt.quarter);
        case 'qq':
          // like 01
          return this.num(dt.quarter, 2);
        case 'X':
          return this.num(Math.floor(dt.ts / 1000));
        case 'x':
          return this.num(dt.ts);
        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }

  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
      switch (token[0]) {
        case 'S':
          return 'millisecond';
        case 's':
          return 'second';
        case 'm':
          return 'minute';
        case 'h':
          return 'hour';
        case 'd':
          return 'day';
        case 'w':
          return 'week';
        case 'M':
          return 'month';
        case 'y':
          return 'year';
        default:
          return null;
      }
    };
    const tokenToString = (lildur) => (token) => {
      const mapped = tokenToField(token);
      if (mapped) {
        return this.num(lildur.get(mapped), token.length);
      }
      return token;
    };
    const tokens = Formatter.parseFormat(fmt);
    const realTokens = tokens.reduce(
      (found, { literal, val }) => (literal ? found : found.concat(val)),
      [],
    );
    const collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
}

class Invalid {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    }
    return this.reason;
  }
}

/**
  * @interface
  */
class Zone {
  /**
    * The type of zone
    * @abstract
    * @type {string}
    */
  get type() {
    throw new ZoneIsAbstractError();
  }

  /**
    * The name of this zone.
    * @abstract
    * @type {string}
    */
  get name() {
    throw new ZoneIsAbstractError();
  }

  get ianaName() {
    return this.name;
  }

  /**
    * Returns whether the offset is known to be fixed for the whole year.
    * @abstract
    * @type {boolean}
    */
  get isUniversal() {
    throw new ZoneIsAbstractError();
  }

  /**
    * Returns the offset's common name (such as EST) at the specified timestamp
    * @abstract
    * @param {number} ts - Epoch milliseconds for which to get the name
    * @param {Object} opts - Options to affect the format
    * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
    * @param {string} opts.locale - What locale to return the offset name in.
    * @return {string}
    */
  offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }

  /**
    * Returns the offset's value as a string
    * @abstract
    * @param {number} ts - Epoch milliseconds for which to get the offset
    * @param {string} format - What style of offset to return.
    *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
    * @return {string}
    */
  formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }

  /**
    * Return the offset in minutes for this zone at the specified timestamp.
    * @abstract
    * @param {number} ts - Epoch milliseconds for which to compute the offset
    * @return {number}
    */
  offset(ts) {
    throw new ZoneIsAbstractError();
  }

  /**
    * Return whether this Zone is equal to another zone
    * @abstract
    * @param {Zone} otherZone - the zone to compare
    * @return {boolean}
    */
  equals(otherZone) {
    throw new ZoneIsAbstractError();
  }

  /**
    * Return whether this Zone is valid.
    * @abstract
    * @type {boolean}
    */
  get isValid() {
    throw new ZoneIsAbstractError();
  }
}

let singleton$1 = null;

/**
  * Represents the local zone for this JavaScript environment.
  * @implements {Zone}
  */
class SystemZone extends Zone {
  /**
    * Get a singleton instance of the local zone
    * @return {SystemZone}
    */
  static get instance() {
    if (singleton$1 === null) {
      singleton$1 = new SystemZone();
    }
    return singleton$1;
  }

  /** @override * */
  get type() {
    return 'system';
  }

  /** @override * */
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /** @override * */
  get isUniversal() {
    return false;
  }

  /** @override * */
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale);
  }

  /** @override * */
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }

  /** @override * */
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }

  /** @override * */
  equals(otherZone) {
    return otherZone.type === 'system';
  }

  /** @override * */
  get isValid() {
    return true;
  }
}

let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: zone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      era: 'short',
    });
  }
  return dtfCache[zone];
}

const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6,
};

function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, '');
  const parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted);
  const [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date);
  const filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i];
    const pos = typeToPos[type];

    if (type === 'era') {
      filled[pos] = value;
    } else if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}

let ianaZoneCache = {};
/**
  * A zone identified by an IANA identifier, like America/New_York
  * @implements {Zone}
  */
class IANAZone extends Zone {
  /**
    * @param {string} name - Zone name
    * @return {IANAZone}
    */
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }

  /**
    * Reset local caches. Should only be necessary in testing scenarios.
    * @return {void}
    */
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }

  /**
    * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
    * @param {string} s - The string to check validity on
    * @example IANAZone.isValidSpecifier("America/New_York") //=> true
    * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
    * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
    * @return {boolean}
    */
  static isValidSpecifier(s) {
    return this.isValidZone(s);
  }

  /**
    * Returns whether the provided string identifies a real zone
    * @param {string} zone - The string to check
    * @example IANAZone.isValidZone("America/New_York") //=> true
    * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
    * @example IANAZone.isValidZone("Sport~~blorp") //=> false
    * @return {boolean}
    */
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat('en-US', { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }

  constructor(name) {
    super();
    /** @private * */
    this.zoneName = name;
    /** @private * */
    this.valid = IANAZone.isValidZone(name);
  }

  /** @override * */
  get type() {
    return 'iana';
  }

  /** @override * */
  get name() {
    return this.zoneName;
  }

  /** @override * */
  get isUniversal() {
    return false;
  }

  /** @override * */
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale, this.name);
  }

  /** @override * */
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }

  /** @override * */
  offset(ts) {
    const date = new Date(ts);

    if (isNaN(date)) return NaN;

    const dtf = makeDTF(this.name);
    let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts
      ? partsOffset(dtf, date)
      : hackyOffset(dtf, date);

    if (adOrBc === 'BC') {
      year = -Math.abs(year) + 1;
    }

    // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
    const adjustedHour = hour === 24 ? 0 : hour;

    const asUTC = objToLocalTS({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0,
    });

    let asTS = +date;
    const over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }

  /** @override * */
  equals(otherZone) {
    return otherZone.type === 'iana' && otherZone.name === this.name;
  }

  /** @override * */
  get isValid() {
    return this.valid;
  }
}

let singleton = null;

/**
  * A zone with a fixed offset (meaning no DST)
  * @implements {Zone}
  */
class FixedOffsetZone extends Zone {
  /**
    * Get a singleton instance of UTC
    * @return {FixedOffsetZone}
    */
  static get utcInstance() {
    if (singleton === null) {
      singleton = new FixedOffsetZone(0);
    }
    return singleton;
  }

  /**
    * Get an instance with a specified offset
    * @param {number} offset - The offset in minutes
    * @return {FixedOffsetZone}
    */
  static instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }

  /**
    * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
    * @param {string} s - The offset string to parse
    * @example FixedOffsetZone.parseSpecifier("UTC+6")
    * @example FixedOffsetZone.parseSpecifier("UTC+06")
    * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
    * @return {FixedOffsetZone}
    */
  static parseSpecifier(s) {
    if (s) {
      const r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }
    return null;
  }

  constructor(offset) {
    super();
    /** @private * */
    this.fixed = offset;
  }

  /** @override * */
  get type() {
    return 'fixed';
  }

  /** @override * */
  get name() {
    return this.fixed === 0 ? 'UTC' : `UTC${formatOffset(this.fixed, 'narrow')}`;
  }

  get ianaName() {
    if (this.fixed === 0) {
      return 'Etc/UTC';
    }
    return `Etc/GMT${formatOffset(-this.fixed, 'narrow')}`;
  }

  /** @override * */
  offsetName() {
    return this.name;
  }

  /** @override * */
  formatOffset(ts, format) {
    return formatOffset(this.fixed, format);
  }

  /** @override * */
  get isUniversal() {
    return true;
  }

  /** @override * */
  offset() {
    return this.fixed;
  }

  /** @override * */
  equals(otherZone) {
    return otherZone.type === 'fixed' && otherZone.fixed === this.fixed;
  }

  /** @override * */
  get isValid() {
    return true;
  }
}

/**
  * A zone that failed to parse. You should never need to instantiate this.
  * @implements {Zone}
  */
class InvalidZone extends Zone {
  constructor(zoneName) {
    super();
    /**  @private */
    this.zoneName = zoneName;
  }

  /** @override * */
  get type() {
    return 'invalid';
  }

  /** @override * */
  get name() {
    return this.zoneName;
  }

  /** @override * */
  get isUniversal() {
    return false;
  }

  /** @override * */
  offsetName() {
    return null;
  }

  /** @override * */
  formatOffset() {
    return '';
  }

  /** @override * */
  offset() {
    return NaN;
  }

  /** @override * */
  equals() {
    return false;
  }

  /** @override * */
  get isValid() {
    return false;
  }
}

/**
  * @private
  */

function normalizeZone(input, defaultZone) {
  if (isUndefined(input) || input === null) {
    return defaultZone;
  } if (input instanceof Zone) {
    return input;
  } if (isString(input)) {
    const lowered = input.toLowerCase();
    if (lowered === 'default') return defaultZone;
    if (lowered === 'local' || lowered === 'system') return SystemZone.instance;
    if (lowered === 'utc' || lowered === 'gmt') return FixedOffsetZone.utcInstance;
    return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
  } if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } if (typeof input === 'object' && input.offset && typeof input.offset === 'number') {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  }
  return new InvalidZone(input);
}

let now = () => Date.now();
let defaultZone = 'system';
let defaultLocale = null;
let defaultNumberingSystem = null;
let defaultOutputCalendar = null;
let throwOnInvalid;

/**
  * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
  */
class Settings {
  /**
    * Get the callback for returning the current timestamp.
    * @type {function}
    */
  static get now() {
    return now;
  }

  /**
    * Set the callback for returning the current timestamp.
    * The function should return a number, which will be interpreted as an Epoch millisecond count
    * @type {function}
    * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
    * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
    */
  static set now(n) {
    now = n;
  }

  /**
    * Set the default time zone to create DateTimes in. Does not affect existing instances.
    * Use the value "system" to reset this value to the system's time zone.
    * @type {string}
    */
  static set defaultZone(zone) {
    defaultZone = zone;
  }

  /**
    * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
    * The default value is the system's time zone (the one set on the machine that runs this code).
    * @type {Zone}
    */
  static get defaultZone() {
    return normalizeZone(defaultZone, SystemZone.instance);
  }

  /**
    * Get the default locale to create DateTimes with. Does not affect existing instances.
    * @type {string}
    */
  static get defaultLocale() {
    return defaultLocale;
  }

  /**
    * Set the default locale to create DateTimes with. Does not affect existing instances.
    * @type {string}
    */
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }

  /**
    * Get the default numbering system to create DateTimes with. Does not affect existing instances.
    * @type {string}
    */
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }

  /**
    * Set the default numbering system to create DateTimes with. Does not affect existing instances.
    * @type {string}
    */
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }

  /**
    * Get the default output calendar to create DateTimes with. Does not affect existing instances.
    * @type {string}
    */
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }

  /**
    * Set the default output calendar to create DateTimes with. Does not affect existing instances.
    * @type {string}
    */
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }

  /**
    * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
    * @type {boolean}
    */
  static get throwOnInvalid() {
    return throwOnInvalid;
  }

  /**
    * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
    * @type {boolean}
    */
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }

  /**
    * Reset Luxon's global caches. Should only be necessary in testing scenarios.
    * @return {void}
    */
  static resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  }
}

// todo - remap caching

const intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}

let intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}

let intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}

let intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const { base, ...cacheKeyOpts } = opts; // exclude `base` from the options
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}

let sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  }
  sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
  return sysLocaleCache;
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:

  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u

  const uIndex = localeStr.indexOf('-u-');
  if (uIndex === -1) {
    return [localeStr];
  }
  let options;
  const smaller = localeStr.substring(0, uIndex);
  try {
    options = getCachedDTF(localeStr).resolvedOptions();
  } catch (e) {
    options = getCachedDTF(smaller).resolvedOptions();
  }

  const { numberingSystem, calendar } = options;
  // return the smaller one so that we can append the calendar and numbering overrides to it
  return [smaller, numberingSystem, calendar];
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += '-u';

    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }

    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  }
  return localeStr;
}

function mapMonths(f) {
  const ms = [];
  for (let i = 1; i <= 12; i++) {
    const dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}

function mapWeekdays(f) {
  const ms = [];
  for (let i = 1; i <= 7; i++) {
    const dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);

  if (mode === 'error') {
    return null;
  } if (mode === 'en') {
    return englishFn(length);
  }
  return intlFn(length);
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== 'latn') {
    return false;
  }
  return (
    loc.numberingSystem === 'latn'
       || !loc.locale
       || loc.locale.startsWith('en')
       || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === 'latn'
  );
}

/**
  * @private
  */

class PolyNumberFormatter {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    const { padTo, floor, ...otherOpts } = opts;

    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = { useGrouping: false, ...opts };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  format(i) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    }
    // to match the browser's numberformatter defaults
    const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
    return padStart(fixed, this.padTo);
  }
}

/**
  * @private
  */

class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;

    let z;
    if (dt.zone.isUniversal) {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
      // 2. Unsupported by the browser:
      //    - some do not support Etc/
      //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
        // So we have to make do. Two cases:
        // 1. The format options tell us to show the zone. We can't do that, so the best
        // we can do is format the date in UTC.
        // 2. The format options don't tell us to show the zone. Then we can adjust them
        // the time and tell the formatter to show it to us in UTC, so that the time is right
        // and the bad zone doesn't show up.
        z = 'UTC';
        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
        }
      }
    } else if (dt.zone.type === 'system') {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    const intlOpts = { ...this.opts };
    if (z) {
      intlOpts.timeZone = z;
    }
    this.dtf = getCachedDTF(intl, intlOpts);
  }

  format() {
    return this.dtf.format(this.dt.toJSDate());
  }

  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }

  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}

/**
  * @private
  */
class PolyRelFormatter {
  constructor(intl, isEnglish, opts) {
    this.opts = { style: 'long', ...opts };
    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    }
    return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== 'long');
  }

  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    }
    return [];
  }
}

/**
  * @private
  */

class Locale {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }

  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || Settings.defaultLocale;
    // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    const localeR = specifiedLocale || (defaultToEN ? 'en-US' : systemLocale());
    const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }

  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }

  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale, numberingSystem, outputCalendar);
  }

  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);

    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};

    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }

    return this.fastNumbersCached;
  }

  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === 'latn')
       && (this.outputCalendar === null || this.outputCalendar === 'gregory');
    return isActuallyEn && hasNoWeirdness ? 'en' : 'intl';
  }

  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    }
    return Locale.create(
      alts.locale || this.specifiedLocale,
      alts.numberingSystem || this.numberingSystem,
      alts.outputCalendar || this.outputCalendar,
      alts.defaultToEN || false,
    );
  }

  redefaultToEN(alts = {}) {
    return this.clone({ ...alts, defaultToEN: true });
  }

  redefaultToSystem(alts = {}) {
    return this.clone({ ...alts, defaultToEN: false });
  }

  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, months, () => {
      const intl = format ? { month: length, day: 'numeric' } : { month: length };
      const formatStr = format ? 'format' : 'standalone';
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, 'month'));
      }
      return this.monthsCache[formatStr][length];
    });
  }

  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, weekdays, () => {
      const intl = format
        ? {
          weekday: length, year: 'numeric', month: 'long', day: 'numeric',
        }
        : { weekday: length };
      const formatStr = format ? 'format' : 'standalone';
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays((dt) => this.extract(dt, intl, 'weekday'));
      }
      return this.weekdaysCache[formatStr][length];
    });
  }

  meridiems(defaultOK = true) {
    return listStuff(
      this,
      undefined,
      defaultOK,
      () => meridiems,
      () => {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!this.meridiemCache) {
          const intl = { hour: 'numeric', hourCycle: 'h12' };
          this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(
            (dt) => this.extract(dt, intl, 'dayperiod'),
          );
        }

        return this.meridiemCache;
      },
    );
  }

  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, eras, () => {
      const intl = { era: length };

      // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.
      if (!this.eraCache[length]) {
        this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map((dt) => this.extract(dt, intl, 'era'));
      }

      return this.eraCache[length];
    });
  }

  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts);
    const results = df.formatToParts();
    const matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }

  numberFormatter(opts = {}) {
    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }

  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }

  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }

  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }

  isEnglish() {
    return (
      this.locale === 'en'
       || this.locale.toLowerCase() === 'en-us'
       || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith('en-us')
    );
  }

  equals(other) {
    return (
      this.locale === other.locale
       && this.numberingSystem === other.numberingSystem
       && this.outputCalendar === other.outputCalendar
    );
  }
}

/*
  * This file handles parsing for well-specified formats. Here's how it works:
  * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
  * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
  * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
  * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
  * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
  * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
  */

function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, '');
  return RegExp(`^${full}$`);
}

function combineExtractors(...extractors) {
  return (m) => extractors
    .reduce(
      ([mergedVals, mergedZone, cursor], ex) => {
        const [val, zone, next] = ex(m, cursor);
        return [{ ...mergedVals, ...val }, zone || mergedZone, next];
      },
      [{}, null, 1],
    )
    .slice(0, 2);
}

function parse(s, ...patterns) {
  if (s == null) {
    return [null, null];
  }

  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}

function simpleParse(...keys) {
  return (match, cursor) => {
    const ret = {};
    let i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}

// ISO and SQL parsing
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
const isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
const isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
const isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
const isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
const isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
const isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
const isoOrdinalRegex = /(\d{4})-?(\d{3})/;
const extractISOWeekData = simpleParse('weekYear', 'weekNumber', 'weekDay');
const extractISOOrdinalData = simpleParse('year', 'ordinal');
const sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
const sqlTimeRegex = RegExp(
  `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`,
);
const sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);

function int(match, pos, fallback) {
  const m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  const item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1),
  };

  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  const item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: parseMillis(match[cursor + 3]),
  };

  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  const local = !match[cursor] && !match[cursor + 1];
  const fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]);
  const zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  const zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
}

// ISO time parsing

const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);

// ISO duration parsing

const isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;

function extractISODuration(match) {
  const [s, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match;

  const hasNegativePrefix = s[0] === '-';
  const negativeSeconds = secondStr && secondStr[0] === '-';

  const maybeNegate = (num, force = false) => (num !== undefined && (force || (num && hasNegativePrefix)) ? -num : num);

  return [
    {
      years: maybeNegate(parseFloating(yearStr)),
      months: maybeNegate(parseFloating(monthStr)),
      weeks: maybeNegate(parseFloating(weekStr)),
      days: maybeNegate(parseFloating(dayStr)),
      hours: maybeNegate(parseFloating(hourStr)),
      minutes: maybeNegate(parseFloating(minuteStr)),
      seconds: maybeNegate(parseFloating(secondStr), secondStr === '-0'),
      milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds),
    },
  ];
}

// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
const obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60,
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr),
  };

  if (secondStr) result.second = parseInteger(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3
      ? weekdaysLong.indexOf(weekdayStr) + 1
      : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
}

// RFC 2822/5322
const rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  const [
    ,
    weekdayStr,
    dayStr,
    monthStr,
    yearStr,
    hourStr,
    minuteStr,
    secondStr,
    obsOffset,
    milOffset,
    offHourStr,
    offMinuteStr,
  ] = match;
  const result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  let offset;
  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s
    .replace(/\([^)]*\)|[\n\t]/g, ' ')
    .replace(/(\s\s+)/g, ' ')
    .trim();
}

// http date

const rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
const rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
const ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match;
  const result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match;
  const result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);

const extractISOYmdTimeAndOffset = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset,
  extractIANAZone,
);
const extractISOWeekTimeAndOffset = combineExtractors(
  extractISOWeekData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone,
);
const extractISOOrdinalDateAndTime = combineExtractors(
  extractISOOrdinalData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone,
);
const extractISOTimeAndOffset = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone,
);

/*
  * @private
  */

function parseISODate(s) {
  return parse(
    s,
    [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
    [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
    [isoTimeCombinedRegex, extractISOTimeAndOffset],
  );
}

function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}

function parseHTTPDate(s) {
  return parse(
    s,
    [rfc1123, extractRFC1123Or850],
    [rfc850, extractRFC1123Or850],
    [ascii, extractASCII],
  );
}

function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}

const extractISOTimeOnly = combineExtractors(extractISOTime);

function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}

const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);

const extractISOTimeOffsetAndIANAZone = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone,
);

function parseSQL(s) {
  return parse(
    s,
    [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone],
  );
}

const INVALID$2 = 'Invalid Duration';

// unit conversion constants
const lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000,
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000,
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1000 },
  minutes: { seconds: 60, milliseconds: 60 * 1000 },
  seconds: { milliseconds: 1000 },
};
const casualMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000,
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000,
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000,
  },

  ...lowOrderMatrix,
};
const daysInYearAccurate = 146097.0 / 400;
const daysInMonthAccurate = 146097.0 / 4800;
const accurateMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000,
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: (daysInYearAccurate * 24) / 4,
    minutes: (daysInYearAccurate * 24 * 60) / 4,
    seconds: (daysInYearAccurate * 24 * 60 * 60) / 4,
    milliseconds: (daysInYearAccurate * 24 * 60 * 60 * 1000) / 4,
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000,
  },
  ...lowOrderMatrix,
};

// units ordered by size
const orderedUnits$1 = [
  'years',
  'quarters',
  'months',
  'weeks',
  'days',
  'hours',
  'minutes',
  'seconds',
  'milliseconds',
];

const reverseUnits = orderedUnits$1.slice(0).reverse();

// clone really means "create another instance just like this one, but with these changes"
function clone$1(dur, alts, clear = false) {
  // deep merge for vals
  const conf = {
    values: clear ? alts.values : { ...dur.values, ...(alts.values || {}) },
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
}

// NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix[toUnit][fromUnit];
  const raw = fromMap[fromUnit] / conv;
  const sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]);
  // ok, so this is wild, but see the matrix in the tests
  const added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}

// NB: mutates parameters
function normalizeValues(matrix, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    }
    return previous;
  }, null);
}

/**
  * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
  *
  * Here is a brief overview of commonly used methods and getters in Duration:
  *
  * * **Creation** To create a Duration, use {@link Duration#fromMillis}, {@link Duration#fromObject}, or {@link Duration#fromISO}.
  * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
  * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
  * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
  * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
  *
  * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
  */
class Duration {
  /**
    * @private
    */
  constructor(config) {
    const accurate = config.conversionAccuracy === 'longterm' || false;
    /**
      * @access private
      */
    this.values = config.values;
    /**
      * @access private
      */
    this.loc = config.loc || Locale.create();
    /**
      * @access private
      */
    this.conversionAccuracy = accurate ? 'longterm' : 'casual';
    /**
      * @access private
      */
    this.invalid = config.invalid || null;
    /**
      * @access private
      */
    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
      * @access private
      */
    this.isLuxonDuration = true;
  }

  /**
    * Create Duration from a number of milliseconds.
    * @param {number} count of milliseconds
    * @param {Object} opts - options for parsing
    * @param {string} [opts.locale='en-US'] - the locale to use
    * @param {string} opts.numberingSystem - the numbering system to use
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @return {Duration}
    */
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }

  /**
    * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
    * If this object is empty then a zero milliseconds duration is returned.
    * @param {Object} obj - the object to create the DateTime from
    * @param {number} obj.years
    * @param {number} obj.quarters
    * @param {number} obj.months
    * @param {number} obj.weeks
    * @param {number} obj.days
    * @param {number} obj.hours
    * @param {number} obj.minutes
    * @param {number} obj.seconds
    * @param {number} obj.milliseconds
    * @param {Object} [opts=[]] - options for creating this Duration
    * @param {string} [opts.locale='en-US'] - the locale to use
    * @param {string} opts.numberingSystem - the numbering system to use
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @return {Duration}
    */
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== 'object') {
      throw new InvalidArgumentError(
        `Duration.fromObject: argument expected to be an object, got ${
          obj === null ? 'null' : typeof obj
        }`,
      );
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
    });
  }

  /**
    * Create a Duration from DurationLike.
    *
    * @param {Object | number | Duration} durationLike
    * One of:
    * - object with keys like 'years' and 'hours'.
    * - number representing milliseconds
    * - Duration instance
    * @return {Duration}
    */
  static fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return Duration.fromMillis(durationLike);
    } if (Duration.isDuration(durationLike)) {
      return durationLike;
    } if (typeof durationLike === 'object') {
      return Duration.fromObject(durationLike);
    }
    throw new InvalidArgumentError(
      `Unknown duration argument ${durationLike} of type ${typeof durationLike}`,
    );
  }

  /**
    * Create a Duration from an ISO 8601 duration string.
    * @param {string} text - text to parse
    * @param {Object} opts - options for parsing
    * @param {string} [opts.locale='en-US'] - the locale to use
    * @param {string} opts.numberingSystem - the numbering system to use
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
    * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
    * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
    * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
    * @return {Duration}
    */
  static fromISO(text, opts) {
    const [parsed] = parseISODuration(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    }
    return Duration.invalid('unparsable', `the input "${text}" can't be parsed as ISO 8601`);
  }

  /**
    * Create a Duration from an ISO 8601 time string.
    * @param {string} text - text to parse
    * @param {Object} opts - options for parsing
    * @param {string} [opts.locale='en-US'] - the locale to use
    * @param {string} opts.numberingSystem - the numbering system to use
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @see https://en.wikipedia.org/wiki/ISO_8601#Times
    * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
    * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
    * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
    * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
    * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
    * @return {Duration}
    */
  static fromISOTime(text, opts) {
    const [parsed] = parseISOTimeOnly(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    }
    return Duration.invalid('unparsable', `the input "${text}" can't be parsed as ISO 8601`);
  }

  /**
    * Create an invalid Duration.
    * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
    * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
    * @return {Duration}
    */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError('need to specify a reason the Duration is invalid');
    }

    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }

  /**
    * @private
    */
  static normalizeUnit(unit) {
    const normalized = {
      year: 'years',
      years: 'years',
      quarter: 'quarters',
      quarters: 'quarters',
      month: 'months',
      months: 'months',
      week: 'weeks',
      weeks: 'weeks',
      day: 'days',
      days: 'days',
      hour: 'hours',
      hours: 'hours',
      minute: 'minutes',
      minutes: 'minutes',
      second: 'seconds',
      seconds: 'seconds',
      millisecond: 'milliseconds',
      milliseconds: 'milliseconds',
    }[unit ? unit.toLowerCase() : unit];

    if (!normalized) throw new InvalidUnitError(unit);

    return normalized;
  }

  /**
    * Check if an object is a Duration. Works across context boundaries
    * @param {object} o
    * @return {boolean}
    */
  static isDuration(o) {
    return (o && o.isLuxonDuration) || false;
  }

  /**
    * Get  the locale of a Duration, such 'en-GB'
    * @type {string}
    */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
    * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
    *
    * @type {string}
    */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
    * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
    * * `S` for milliseconds
    * * `s` for seconds
    * * `m` for minutes
    * * `h` for hours
    * * `d` for days
    * * `w` for weeks
    * * `M` for months
    * * `y` for years
    * Notes:
    * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
    * * Tokens can be escaped by wrapping with single quotes.
    * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
    * @param {string} fmt - the format string
    * @param {Object} opts - options
    * @param {boolean} [opts.floor=true] - floor numerical values
    * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
    * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
    * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
    * @return {string}
    */
  toFormat(fmt, opts = {}) {
    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    const fmtOpts = {
      ...opts,
      floor: opts.round !== false && opts.floor !== false,
    };
    return this.isValid
      ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt)
      : INVALID$2;
  }

  /**
    * Returns a string representation of a Duration with all units included.
    * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
    * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
    * @example
    * ```js
    * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
    * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
    * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
    * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
    * ```
    */
  toHuman(opts = {}) {
    const l = orderedUnits$1
      .map((unit) => {
        const val = this.values[unit];
        if (isUndefined(val)) {
          return null;
        }
        return this.loc
          .numberFormatter({
            style: 'unit', unitDisplay: 'long', ...opts, unit: unit.slice(0, -1),
          })
          .format(val);
      })
      .filter((n) => n);

    return this.loc
      .listFormatter({ type: 'conjunction', style: opts.listStyle || 'narrow', ...opts })
      .format(l);
  }

  /**
    * Returns a JavaScript object with this Duration's values.
    * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
    * @return {Object}
    */
  toObject() {
    if (!this.isValid) return {};
    return { ...this.values };
  }

  /**
    * Returns an ISO 8601-compliant string representation of this Duration.
    * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
    * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
    * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
    * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
    * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
    * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
    * @return {string}
    */
  toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;

    let s = 'P';
    if (this.years !== 0) s += `${this.years}Y`;
    if (this.months !== 0 || this.quarters !== 0) s += `${this.months + this.quarters * 3}M`;
    if (this.weeks !== 0) s += `${this.weeks}W`;
    if (this.days !== 0) s += `${this.days}D`;
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) { s += 'T'; }
    if (this.hours !== 0) s += `${this.hours}H`;
    if (this.minutes !== 0) s += `${this.minutes}M`;
    if (this.seconds !== 0 || this.milliseconds !== 0)
    // this will handle "floating point madness" by removing extra decimal places
    // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
    { s += `${roundTo(this.seconds + this.milliseconds / 1000, 3)}S`; }
    if (s === 'P') s += 'T0S';
    return s;
  }

  /**
    * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
    * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
    * @see https://en.wikipedia.org/wiki/ISO_8601#Times
    * @param {Object} opts - options
    * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
    * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
    * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
    * @param {string} [opts.format='extended'] - choose between the basic and extended format
    * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
    * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
    * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
    * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
    * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
    * @return {string}
    */
  toISOTime(opts = {}) {
    if (!this.isValid) return null;

    const millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;

    opts = {
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: 'extended',
      ...opts,
    };

    const value = this.shiftTo('hours', 'minutes', 'seconds', 'milliseconds');

    let fmt = opts.format === 'basic' ? 'hhmm' : 'hh:mm';

    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === 'basic' ? 'ss' : ':ss';
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += '.SSS';
      }
    }

    let str = value.toFormat(fmt);

    if (opts.includePrefix) {
      str = `T${str}`;
    }

    return str;
  }

  /**
    * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
    * @return {string}
    */
  toJSON() {
    return this.toISO();
  }

  /**
    * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
    * @return {string}
    */
  toString() {
    return this.toISO();
  }

  /**
    * Returns an milliseconds value of this Duration.
    * @return {number}
    */
  toMillis() {
    return this.as('milliseconds');
  }

  /**
    * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
    * @return {number}
    */
  valueOf() {
    return this.toMillis();
  }

  /**
    * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
    * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
    * @return {Duration}
    */
  plus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration);
    const result = {};

    for (const k of orderedUnits$1) {
      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone$1(this, { values: result }, true);
  }

  /**
    * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
    * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
    * @return {Duration}
    */
  minus(duration) {
    if (!this.isValid) return this;

    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }

  /**
    * Scale this Duration by the specified amount. Return a newly-constructed Duration.
    * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
    * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
    * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
    * @return {Duration}
    */
  mapUnits(fn) {
    if (!this.isValid) return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = asNumber(fn(this.values[k], k));
    }
    return clone$1(this, { values: result }, true);
  }

  /**
    * Get the value of unit.
    * @param {string} unit - a unit such as 'minute' or 'day'
    * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
    * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
    * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
    * @return {number}
    */
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }

  /**
    * "Set" the values of specified units. Return a newly-constructed Duration.
    * @param {Object} values - a mapping of units to numbers
    * @example dur.set({ years: 2017 })
    * @example dur.set({ hours: 8, minutes: 30 })
    * @return {Duration}
    */
  set(values) {
    if (!this.isValid) return this;

    const mixed = { ...this.values, ...normalizeObject(values, Duration.normalizeUnit) };
    return clone$1(this, { values: mixed });
  }

  /**
    * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
    * @example dur.reconfigure({ locale: 'en-GB' })
    * @return {Duration}
    */
  reconfigure({ locale, numberingSystem, conversionAccuracy } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem });
    const opts = { loc };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone$1(this, opts);
  }

  /**
    * Return the length of the duration in the specified unit.
    * @param {string} unit - a unit such as 'minutes' or 'days'
    * @example Duration.fromObject({years: 1}).as('days') //=> 365
    * @example Duration.fromObject({years: 1}).as('months') //=> 12
    * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
    * @return {number}
    */
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }

  /**
    * Reduce this Duration to its canonical representation in its current units.
    * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
    * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
    * @return {Duration}
    */
  normalize() {
    if (!this.isValid) return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone$1(this, { values: vals }, true);
  }

  /**
    * Convert this Duration into its representation in a different set of units.
    * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
    * @return {Duration}
    */
  shiftTo(...units) {
    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map((u) => Duration.normalizeUnit(u));

    const built = {};
    const accumulated = {};
    const vals = this.toObject();
    let lastUnit;

    for (const k of orderedUnits$1) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;

        let own = 0;

        // anything we haven't boiled down yet should get boiled to this unit
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }

        // plus anything that's already in this unit
        if (isNumber(vals[k])) {
          own += vals[k];
        }

        const i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1000 - i * 1000) / 1000;

        // plus anything further down the chain that should be rolled up in to this
        for (const down in vals) {
          if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
        // otherwise, keep it in the wings to boil it later
      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    }

    // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit]
           += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone$1(this, { values: built }, true).normalize();
  }

  /**
    * Return the negative of this Duration.
    * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
    * @return {Duration}
    */
  negate() {
    if (!this.isValid) return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }
    return clone$1(this, { values: negated }, true);
  }

  /**
    * Get the years.
    * @type {number}
    */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }

  /**
    * Get the quarters.
    * @type {number}
    */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }

  /**
    * Get the months.
    * @type {number}
    */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }

  /**
    * Get the weeks
    * @type {number}
    */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }

  /**
    * Get the days.
    * @type {number}
    */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }

  /**
    * Get the hours.
    * @type {number}
    */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }

  /**
    * Get the minutes.
    * @type {number}
    */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }

  /**
    * Get the seconds.
    * @return {number}
    */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }

  /**
    * Get the milliseconds.
    * @return {number}
    */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }

  /**
    * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
    * on invalid DateTimes or Intervals.
    * @return {boolean}
    */
  get isValid() {
    return this.invalid === null;
  }

  /**
    * Returns an error code if this Duration became invalid, or null if the Duration is valid
    * @return {string}
    */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
    * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
    * @type {string}
    */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
    * Equality check
    * Two Durations are equal iff they have the same units and the same values for each unit.
    * @param {Duration} other
    * @return {boolean}
    */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (const u of orderedUnits$1) {
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  }
}

const INVALID$1 = 'Invalid Interval';

// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid('missing or invalid start');
  } if (!end || !end.isValid) {
    return Interval.invalid('missing or invalid end');
  } if (end < start) {
    return Interval.invalid(
      'end before start',
      `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`,
    );
  }
  return null;
}

/**
  * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
  *
  * Here is a brief overview of the most commonly used methods and getters in Interval:
  *
  * * **Creation** To create an Interval, use {@link Interval#fromDateTimes}, {@link Interval#after}, {@link Interval#before}, or {@link Interval#fromISO}.
  * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
  * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
  * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval#merge}, {@link Interval#xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
  * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
  * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
  */
class Interval {
  /**
    * @private
    */
  constructor(config) {
    /**
      * @access private
      */
    this.s = config.start;
    /**
      * @access private
      */
    this.e = config.end;
    /**
      * @access private
      */
    this.invalid = config.invalid || null;
    /**
      * @access private
      */
    this.isLuxonInterval = true;
  }

  /**
    * Create an invalid Interval.
    * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
    * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
    * @return {Interval}
    */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError('need to specify a reason the Interval is invalid');
    }

    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }

  /**
    * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
    * @param {DateTime|Date|Object} start
    * @param {DateTime|Date|Object} end
    * @return {Interval}
    */
  static fromDateTimes(start, end) {
    const builtStart = friendlyDateTime(start);
    const builtEnd = friendlyDateTime(end);

    const validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd,
      });
    }
    return validateError;
  }

  /**
    * Create an Interval from a start DateTime and a Duration to extend to.
    * @param {DateTime|Date|Object} start
    * @param {Duration|Object|number} duration - the length of the Interval.
    * @return {Interval}
    */
  static after(start, duration) {
    const dur = Duration.fromDurationLike(duration);
    const dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }

  /**
    * Create an Interval from an end DateTime and a Duration to extend backwards to.
    * @param {DateTime|Date|Object} end
    * @param {Duration|Object|number} duration - the length of the Interval.
    * @return {Interval}
    */
  static before(end, duration) {
    const dur = Duration.fromDurationLike(duration);
    const dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }

  /**
    * Create an Interval from an ISO 8601 string.
    * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
    * @param {string} text - the ISO string to parse
    * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
    * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
    * @return {Interval}
    */
  static fromISO(text, opts) {
    const [s, e] = (text || '').split('/', 2);
    if (s && e) {
      let start; let
        startIsValid;
      try {
        start = DateTime.fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      let end; let
        endIsValid;
      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        const dur = Duration.fromISO(e, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = Duration.fromISO(s, opts);
        if (dur.isValid) {
          return Interval.before(end, dur);
        }
      }
    }
    return Interval.invalid('unparsable', `the input "${text}" can't be parsed as ISO 8601`);
  }

  /**
    * Check if an object is an Interval. Works across context boundaries
    * @param {object} o
    * @return {boolean}
    */
  static isInterval(o) {
    return (o && o.isLuxonInterval) || false;
  }

  /**
    * Returns the start of the Interval
    * @type {DateTime}
    */
  get start() {
    return this.isValid ? this.s : null;
  }

  /**
    * Returns the end of the Interval
    * @type {DateTime}
    */
  get end() {
    return this.isValid ? this.e : null;
  }

  /**
    * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
    * @type {boolean}
    */
  get isValid() {
    return this.invalidReason === null;
  }

  /**
    * Returns an error code if this Interval is invalid, or null if the Interval is valid
    * @type {string}
    */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
    * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
    * @type {string}
    */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
    * Returns the length of the Interval in the specified unit.
    * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
    * @return {number}
    */
  length(unit = 'milliseconds') {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }

  /**
    * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
    * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
    * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
    * @param {string} [unit='milliseconds'] - the unit of time to count.
    * @return {number}
    */
  count(unit = 'milliseconds') {
    if (!this.isValid) return NaN;
    const start = this.start.startOf(unit);
    const end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }

  /**
    * Returns whether this Interval's start and end are both in the same unit of time
    * @param {string} unit - the unit of time to check sameness on
    * @return {boolean}
    */
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }

  /**
    * Return whether this Interval has the same start and end DateTimes.
    * @return {boolean}
    */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }

  /**
    * Return whether this Interval's start is after the specified DateTime.
    * @param {DateTime} dateTime
    * @return {boolean}
    */
  isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }

  /**
    * Return whether this Interval's end is before the specified DateTime.
    * @param {DateTime} dateTime
    * @return {boolean}
    */
  isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }

  /**
    * Return whether this Interval contains the specified DateTime.
    * @param {DateTime} dateTime
    * @return {boolean}
    */
  contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }

  /**
    * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
    * @param {Object} values - the values to set
    * @param {DateTime} values.start - the starting DateTime
    * @param {DateTime} values.end - the ending DateTime
    * @return {Interval}
    */
  set({ start, end } = {}) {
    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }

  /**
    * Split this Interval at each of the specified DateTimes
    * @param {...DateTime} dateTimes - the unit of time to count.
    * @return {Array}
    */
  splitAt(...dateTimes) {
    if (!this.isValid) return [];
    const sorted = dateTimes
      .map(friendlyDateTime)
      .filter((d) => this.contains(d))
      .sort();
    const results = [];
    let { s } = this;
    let i = 0;

    while (s < this.e) {
      const added = sorted[i] || this.e;
      const next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }

  /**
    * Split this Interval into smaller Intervals, each of the specified length.
    * Left over time is grouped into a smaller interval
    * @param {Duration|Object|number} duration - The length of each resulting interval.
    * @return {Array}
    */
  splitBy(duration) {
    const dur = Duration.fromDurationLike(duration);

    if (!this.isValid || !dur.isValid || dur.as('milliseconds') === 0) {
      return [];
    }

    let { s } = this;
    let idx = 1;
    let next;

    const results = [];
    while (s < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      idx += 1;
    }

    return results;
  }

  /**
    * Split this Interval into the specified number of smaller intervals.
    * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
    * @return {Array}
    */
  divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }

  /**
    * Return whether this Interval overlaps with the specified Interval
    * @param {Interval} other
    * @return {boolean}
    */
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }

  /**
    * Return whether this Interval's end is adjacent to the specified Interval's start.
    * @param {Interval} other
    * @return {boolean}
    */
  abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }

  /**
    * Return whether this Interval's start is adjacent to the specified Interval's end.
    * @param {Interval} other
    * @return {boolean}
    */
  abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }

  /**
    * Return whether this Interval engulfs the start and end of the specified Interval.
    * @param {Interval} other
    * @return {boolean}
    */
  engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }

  /**
    * Return whether this Interval has the same start and end as the specified Interval.
    * @param {Interval} other
    * @return {boolean}
    */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }

  /**
    * Return an Interval representing the intersection of this Interval and the specified Interval.
    * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
    * Returns null if the intersection is empty, meaning, the intervals don't intersect.
    * @param {Interval} other
    * @return {Interval}
    */
  intersection(other) {
    if (!this.isValid) return this;
    const s = this.s > other.s ? this.s : other.s;
    const e = this.e < other.e ? this.e : other.e;

    if (s >= e) {
      return null;
    }
    return Interval.fromDateTimes(s, e);
  }

  /**
    * Return an Interval representing the union of this Interval and the specified Interval.
    * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
    * @param {Interval} other
    * @return {Interval}
    */
  union(other) {
    if (!this.isValid) return this;
    const s = this.s < other.s ? this.s : other.s;
    const e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }

  /**
    * Merge an array of Intervals into a equivalent minimal set of Intervals.
    * Combines overlapping and adjacent Intervals.
    * @param {Array} intervals
    * @return {Array}
    */
  static merge(intervals) {
    const [found, final] = intervals
      .sort((a, b) => a.s - b.s)
      .reduce(
        ([sofar, current], item) => {
          if (!current) {
            return [sofar, item];
          } if (current.overlaps(item) || current.abutsStart(item)) {
            return [sofar, current.union(item)];
          }
          return [sofar.concat([current]), item];
        },
        [[], null],
      );
    if (final) {
      found.push(final);
    }
    return found;
  }

  /**
    * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
    * @param {Array} intervals
    * @return {Array}
    */
  static xor(intervals) {
    let start = null;
    let currentCount = 0;
    const results = [];
    const ends = intervals.map((i) => [
      { time: i.s, type: 's' },
      { time: i.e, type: 'e' },
    ]);
    const flattened = Array.prototype.concat(...ends);
    const arr = flattened.sort((a, b) => a.time - b.time);

    for (const i of arr) {
      currentCount += i.type === 's' ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }

  /**
    * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
    * @param {...Interval} intervals
    * @return {Array}
    */
  difference(...intervals) {
    return Interval.xor([this].concat(intervals))
      .map((i) => this.intersection(i))
      .filter((i) => i && !i.isEmpty());
  }

  /**
    * Returns a string representation of this Interval appropriate for debugging.
    * @return {string}
    */
  toString() {
    if (!this.isValid) return INVALID$1;
    return `[${this.s.toISO()} – ${this.e.toISO()})`;
  }

  /**
    * Returns an ISO 8601-compliant string representation of this Interval.
    * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
    * @param {Object} opts - The same options as {@link DateTime#toISO}
    * @return {string}
    */
  toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }

  /**
    * Returns an ISO 8601-compliant string representation of date of this Interval.
    * The time components are ignored.
    * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
    * @return {string}
    */
  toISODate() {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }

  /**
    * Returns an ISO 8601-compliant string representation of time of this Interval.
    * The date components are ignored.
    * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
    * @param {Object} opts - The same options as {@link DateTime#toISO}
    * @return {string}
    */
  toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }

  /**
    * Returns a string representation of this Interval formatted according to the specified format string.
    * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime#toFormat} for details.
    * @param {Object} opts - options
    * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
    * @return {string}
    */
  toFormat(dateFormat, { separator = ' – ' } = {}) {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }

  /**
    * Return a Duration representing the time spanned by this interval.
    * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
    * @param {Object} opts - options that affect the creation of the Duration
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
    * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
    * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
    * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
    * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
    * @return {Duration}
    */
  toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }

  /**
    * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
    * @param {function} mapFn
    * @return {Interval}
    * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
    * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
    */
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
}

/**
  * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
  */
class Info {
  /**
    * Return whether the specified zone contains a DST.
    * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
    * @return {boolean}
    */
  static hasDST(zone = Settings.defaultZone) {
    const proto = DateTime.now().setZone(zone).set({ month: 12 });

    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }

  /**
    * Return whether the specified zone is a valid IANA specifier.
    * @param {string} zone - Zone to check
    * @return {boolean}
    */
  static isValidIANAZone(zone) {
    return IANAZone.isValidZone(zone);
  }

  /**
    * Converts the input into a {@link Zone} instance.
    *
    * * If `input` is already a Zone instance, it is returned unchanged.
    * * If `input` is a string containing a valid time zone name, a Zone instance
    *   with that name is returned.
    * * If `input` is a string that doesn't refer to a known time zone, a Zone
    *   instance with {@link Zone#isValid} == false is returned.
    * * If `input is a number, a Zone instance with the specified fixed offset
    *   in minutes is returned.
    * * If `input` is `null` or `undefined`, the default zone is returned.
    * @param {string|Zone|number} [input] - the value to be converted
    * @return {Zone}
    */
  static normalizeZone(input) {
    return normalizeZone(input, Settings.defaultZone);
  }

  /**
    * Return an array of standalone month names.
    * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
    * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
    * @param {Object} opts - options
    * @param {string} [opts.locale] - the locale code
    * @param {string} [opts.numberingSystem=null] - the numbering system
    * @param {string} [opts.locObj=null] - an existing locale object to use
    * @param {string} [opts.outputCalendar='gregory'] - the calendar
    * @example Info.months()[0] //=> 'January'
    * @example Info.months('short')[0] //=> 'Jan'
    * @example Info.months('numeric')[0] //=> '1'
    * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
    * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
    * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
    * @return {Array}
    */
  static months(
    length = 'long',
    {
      locale = null, numberingSystem = null, locObj = null, outputCalendar = 'gregory',
    } = {},
  ) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }

  /**
    * Return an array of format month names.
    * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
    * changes the string.
    * See {@link Info#months}
    * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
    * @param {Object} opts - options
    * @param {string} [opts.locale] - the locale code
    * @param {string} [opts.numberingSystem=null] - the numbering system
    * @param {string} [opts.locObj=null] - an existing locale object to use
    * @param {string} [opts.outputCalendar='gregory'] - the calendar
    * @return {Array}
    */
  static monthsFormat(
    length = 'long',
    {
      locale = null, numberingSystem = null, locObj = null, outputCalendar = 'gregory',
    } = {},
  ) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }

  /**
    * Return an array of standalone week names.
    * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
    * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
    * @param {Object} opts - options
    * @param {string} [opts.locale] - the locale code
    * @param {string} [opts.numberingSystem=null] - the numbering system
    * @param {string} [opts.locObj=null] - an existing locale object to use
    * @example Info.weekdays()[0] //=> 'Monday'
    * @example Info.weekdays('short')[0] //=> 'Mon'
    * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
    * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
    * @return {Array}
    */
  static weekdays(length = 'long', { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }

  /**
    * Return an array of format week names.
    * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
    * changes the string.
    * See {@link Info#weekdays}
    * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
    * @param {Object} opts - options
    * @param {string} [opts.locale=null] - the locale code
    * @param {string} [opts.numberingSystem=null] - the numbering system
    * @param {string} [opts.locObj=null] - an existing locale object to use
    * @return {Array}
    */
  static weekdaysFormat(
    length = 'long',
    { locale = null, numberingSystem = null, locObj = null } = {},
  ) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }

  /**
    * Return an array of meridiems.
    * @param {Object} opts - options
    * @param {string} [opts.locale] - the locale code
    * @example Info.meridiems() //=> [ 'AM', 'PM' ]
    * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
    * @return {Array}
    */
  static meridiems({ locale = null } = {}) {
    return Locale.create(locale).meridiems();
  }

  /**
    * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
    * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
    * @param {Object} opts - options
    * @param {string} [opts.locale] - the locale code
    * @example Info.eras() //=> [ 'BC', 'AD' ]
    * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
    * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
    * @return {Array}
    */
  static eras(length = 'short', { locale = null } = {}) {
    return Locale.create(locale, null, 'gregory').eras(length);
  }

  /**
    * Return the set of available features in this environment.
    * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
    * Keys:
    * * `relative`: whether this environment supports relative time formatting
    * @example Info.features() //=> { relative: false }
    * @return {Object}
    */
  static features() {
    return { relative: hasRelative() };
  }
}

function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf('day').valueOf();
  const ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(Duration.fromMillis(ms).as('days'));
}

function highOrderDiffs(cursor, later, units) {
  const differs = [
    ['years', (a, b) => b.year - a.year],
    ['quarters', (a, b) => b.quarter - a.quarter],
    ['months', (a, b) => b.month - a.month + (b.year - a.year) * 12],
    [
      'weeks',
      (a, b) => {
        const days = dayDiff(a, b);
        return (days - (days % 7)) / 7;
      },
    ],
    ['days', dayDiff],
  ];

  const results = {};
  let lowestOrder; let
    highWater;

  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;

      let delta = differ(cursor, later);
      highWater = cursor.plus({ [unit]: delta });

      if (highWater > later) {
        cursor = cursor.plus({ [unit]: delta - 1 });
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function diff(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);

  const remainingMillis = later - cursor;

  const lowerOrderUnits = units.filter(
    (u) => ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(u) >= 0,
  );

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  const duration = Duration.fromObject(results, opts);

  if (lowerOrderUnits.length > 0) {
    return Duration.fromMillis(remainingMillis, opts)
      .shiftTo(...lowerOrderUnits)
      .plus(duration);
  }
  return duration;
}

const numberingSystems = {
  arab: '[\u0660-\u0669]',
  arabext: '[\u06F0-\u06F9]',
  bali: '[\u1B50-\u1B59]',
  beng: '[\u09E6-\u09EF]',
  deva: '[\u0966-\u096F]',
  fullwide: '[\uFF10-\uFF19]',
  gujr: '[\u0AE6-\u0AEF]',
  hanidec: '[〇|一|二|三|四|五|六|七|八|九]',
  khmr: '[\u17E0-\u17E9]',
  knda: '[\u0CE6-\u0CEF]',
  laoo: '[\u0ED0-\u0ED9]',
  limb: '[\u1946-\u194F]',
  mlym: '[\u0D66-\u0D6F]',
  mong: '[\u1810-\u1819]',
  mymr: '[\u1040-\u1049]',
  orya: '[\u0B66-\u0B6F]',
  tamldec: '[\u0BE6-\u0BEF]',
  telu: '[\u0C66-\u0C6F]',
  thai: '[\u0E50-\u0E59]',
  tibt: '[\u0F20-\u0F29]',
  latn: '\\d',
};

const numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881],
};

const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, '').split('');

function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = '';
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  }
  return value;
}

function digitRegex({ numberingSystem }, append = '') {
  return new RegExp(`${numberingSystems[numberingSystem || 'latn']}${append}`);
}

const MISSING_FTP = 'missing Intl.DateTimeFormat.formatToParts support';

function intUnit(regex, post = (i) => i) {
  return { regex, deser: ([s]) => post(parseDigits(s)) };
}

const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `[ ${NBSP}]`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, 'g');

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, '\\.?').replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s
    .replace(/\./g, '') // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, ' ') // interchange space and nbsp
    .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  }
  return {
    regex: RegExp(strings.map(fixListRegex).join('|')),
    deser: ([s]) => strings.findIndex((i) => stripInsensitivities(s) === stripInsensitivities(i)) + startIndex,
  };
}

function offset(regex, groups) {
  return { regex, deser: ([, h, m]) => signedOffset(h, m), groups };
}

function simple(regex) {
  return { regex, deser: ([s]) => s };
}

function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}

function unitForToken(token, loc) {
  const one = digitRegex(loc);
  const two = digitRegex(loc, '{2}');
  const three = digitRegex(loc, '{3}');
  const four = digitRegex(loc, '{4}');
  const six = digitRegex(loc, '{6}');
  const oneOrTwo = digitRegex(loc, '{1,2}');
  const oneToThree = digitRegex(loc, '{1,3}');
  const oneToSix = digitRegex(loc, '{1,6}');
  const oneToNine = digitRegex(loc, '{1,9}');
  const twoToFour = digitRegex(loc, '{2,4}');
  const fourToSix = digitRegex(loc, '{4,6}');
  const literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s]) => s, literal: true });
  const unitate = (t) => {
    if (token.literal) {
      return literal(t);
    }
    switch (t.val) {
      // era
      case 'G':
        return oneOf(loc.eras('short', false), 0);
      case 'GG':
        return oneOf(loc.eras('long', false), 0);
        // years
      case 'y':
        return intUnit(oneToSix);
      case 'yy':
        return intUnit(twoToFour, untruncateYear);
      case 'yyyy':
        return intUnit(four);
      case 'yyyyy':
        return intUnit(fourToSix);
      case 'yyyyyy':
        return intUnit(six);
        // months
      case 'M':
        return intUnit(oneOrTwo);
      case 'MM':
        return intUnit(two);
      case 'MMM':
        return oneOf(loc.months('short', true, false), 1);
      case 'MMMM':
        return oneOf(loc.months('long', true, false), 1);
      case 'L':
        return intUnit(oneOrTwo);
      case 'LL':
        return intUnit(two);
      case 'LLL':
        return oneOf(loc.months('short', false, false), 1);
      case 'LLLL':
        return oneOf(loc.months('long', false, false), 1);
        // dates
      case 'd':
        return intUnit(oneOrTwo);
      case 'dd':
        return intUnit(two);
        // ordinals
      case 'o':
        return intUnit(oneToThree);
      case 'ooo':
        return intUnit(three);
        // time
      case 'HH':
        return intUnit(two);
      case 'H':
        return intUnit(oneOrTwo);
      case 'hh':
        return intUnit(two);
      case 'h':
        return intUnit(oneOrTwo);
      case 'mm':
        return intUnit(two);
      case 'm':
        return intUnit(oneOrTwo);
      case 'q':
        return intUnit(oneOrTwo);
      case 'qq':
        return intUnit(two);
      case 's':
        return intUnit(oneOrTwo);
      case 'ss':
        return intUnit(two);
      case 'S':
        return intUnit(oneToThree);
      case 'SSS':
        return intUnit(three);
      case 'u':
        return simple(oneToNine);
      case 'uu':
        return simple(oneOrTwo);
      case 'uuu':
        return intUnit(one);
        // meridiem
      case 'a':
        return oneOf(loc.meridiems(), 0);
        // weekYear (k)
      case 'kkkk':
        return intUnit(four);
      case 'kk':
        return intUnit(twoToFour, untruncateYear);
        // weekNumber (W)
      case 'W':
        return intUnit(oneOrTwo);
      case 'WW':
        return intUnit(two);
        // weekdays
      case 'E':
      case 'c':
        return intUnit(one);
      case 'EEE':
        return oneOf(loc.weekdays('short', false, false), 1);
      case 'EEEE':
        return oneOf(loc.weekdays('long', false, false), 1);
      case 'ccc':
        return oneOf(loc.weekdays('short', true, false), 1);
      case 'cccc':
        return oneOf(loc.weekdays('long', true, false), 1);
        // offset/zone
      case 'Z':
      case 'ZZ':
        return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
      case 'ZZZ':
        return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are
      case 'z':
        return simple(/[a-z_+-/]{1,256}?/i);
      default:
        return literal(t);
    }
  };

  const unit = unitate(token) || {
    invalidReason: MISSING_FTP,
  };

  unit.token = token;

  return unit;
}

const partTypeStyleToTokenVal = {
  year: {
    '2-digit': 'yy',
    numeric: 'yyyyy',
  },
  month: {
    numeric: 'M',
    '2-digit': 'MM',
    short: 'MMM',
    long: 'MMMM',
  },
  day: {
    numeric: 'd',
    '2-digit': 'dd',
  },
  weekday: {
    short: 'EEE',
    long: 'EEEE',
  },
  dayperiod: 'a',
  dayPeriod: 'a',
  hour: {
    numeric: 'h',
    '2-digit': 'hh',
  },
  minute: {
    numeric: 'm',
    '2-digit': 'mm',
  },
  second: {
    numeric: 's',
    '2-digit': 'ss',
  },
  timeZoneName: {
    long: 'ZZZZZ',
    short: 'ZZZ',
  },
};

function tokenForPart(part, locale, formatOpts) {
  const { type, value } = part;

  if (type === 'literal') {
    return {
      literal: true,
      val: value,
    };
  }

  const style = formatOpts[type];

  let val = partTypeStyleToTokenVal[type];
  if (typeof val === 'object') {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val,
    };
  }

  return undefined;
}

function buildRegex(units) {
  const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, '');
  return [`^${re}$`, units];
}

function match(input, regex, handlers) {
  const matches = input.match(regex);

  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        const h = handlers[i];
        const groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  }
  return [matches, {}];
}

function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case 'S':
        return 'millisecond';
      case 's':
        return 'second';
      case 'm':
        return 'minute';
      case 'h':
      case 'H':
        return 'hour';
      case 'd':
        return 'day';
      case 'o':
        return 'ordinal';
      case 'L':
      case 'M':
        return 'month';
      case 'y':
        return 'year';
      case 'E':
      case 'c':
        return 'weekday';
      case 'W':
        return 'weekNumber';
      case 'k':
        return 'weekYear';
      case 'q':
        return 'quarter';
      default:
        return null;
    }
  };

  let zone = null;
  let specificOffset;
  if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  }

  if (!isUndefined(matches.Z)) {
    if (!zone) {
      zone = new FixedOffsetZone(matches.Z);
    }
    specificOffset = matches.Z;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  const vals = Object.keys(matches).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});

  return [vals, zone, specificOffset];
}

let dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
  const tokens = formatOptsToTokens(formatOpts, locale);

  if (tokens == null || tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
}

/**
  * @private
  */

function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(Formatter.parseFormat(format), locale);
  const units = tokens.map((t) => unitForToken(t, locale));
  const disqualifyingUnit = units.find((t) => t.invalidReason);

  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  }
  const [regexString, handlers] = buildRegex(units);
  const regex = RegExp(regexString, 'i');
  const [rawMatches, matches] = match(input, regex, handlers);
  const [result, zone, specificOffset] = matches
    ? dateTimeFromMatches(matches)
    : [null, null, undefined];
  if (hasOwnProperty(matches, 'a') && hasOwnProperty(matches, 'H')) {
    throw new ConflictingSpecificationError(
      "Can't include meridiem when specifying 24-hour format",
    );
  }
  return {
    input, tokens, regex, rawMatches, matches, result, zone, specificOffset,
  };
}

function parseFromTokens(locale, input, format) {
  const {
    result, zone, specificOffset, invalidReason,
  } = explainFromTokens(locale, input, format);
  return [result, zone, specificOffset, invalidReason];
}

function formatOptsToTokens(formatOpts, locale) {
  if (!formatOpts) {
    return null;
  }

  const formatter = Formatter.create(locale, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());
  return parts.map((p) => tokenForPart(p, locale, formatOpts));
}

const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
const leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid(
    'unit out of range',
    `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`,
  );
}

function dayOfWeek(year, month, day) {
  const d = new Date(Date.UTC(year, month - 1, day));

  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  const js = d.getUTCDay();

  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  const table = isLeapYear(year) ? leapLadder : nonLeapLadder;
  const month0 = table.findIndex((i) => i < ordinal);
  const day = ordinal - table[month0];
  return { month: month0 + 1, day };
}

/**
  * @private
  */

function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj;
  const ordinal = computeOrdinal(year, month, day);
  const weekday = dayOfWeek(year, month, day);

  let weekNumber = Math.floor((ordinal - weekday + 10) / 7);
  let weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return {
    weekYear, weekNumber, weekday, ...timeObject(gregObj),
  };
}

function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData;
  const weekdayOfJan4 = dayOfWeek(weekYear, 1, 4);
  const yearInDays = daysInYear(weekYear);

  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3;
  let year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  const { month, day } = uncomputeOrdinal(year, ordinal);
  return {
    year, month, day, ...timeObject(weekData),
  };
}

function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return { year, ordinal, ...timeObject(gregData) };
}

function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return {
    year, month, day, ...timeObject(ordinalData),
  };
}

function hasInvalidWeekData(obj) {
  const validYear = isInteger(obj.weekYear);
  const validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear));
  const validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange('weekYear', obj.weekYear);
  } if (!validWeek) {
    return unitOutOfRange('week', obj.week);
  } if (!validWeekday) {
    return unitOutOfRange('weekday', obj.weekday);
  } return false;
}

function hasInvalidOrdinalData(obj) {
  const validYear = isInteger(obj.year);
  const validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange('year', obj.year);
  } if (!validOrdinal) {
    return unitOutOfRange('ordinal', obj.ordinal);
  } return false;
}

function hasInvalidGregorianData(obj) {
  const validYear = isInteger(obj.year);
  const validMonth = integerBetween(obj.month, 1, 12);
  const validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange('year', obj.year);
  } if (!validMonth) {
    return unitOutOfRange('month', obj.month);
  } if (!validDay) {
    return unitOutOfRange('day', obj.day);
  } return false;
}

function hasInvalidTimeData(obj) {
  const {
    hour, minute, second, millisecond,
  } = obj;
  const validHour = integerBetween(hour, 0, 23)
       || (hour === 24 && minute === 0 && second === 0 && millisecond === 0);
  const validMinute = integerBetween(minute, 0, 59);
  const validSecond = integerBetween(second, 0, 59);
  const validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange('hour', hour);
  } if (!validMinute) {
    return unitOutOfRange('minute', minute);
  } if (!validSecond) {
    return unitOutOfRange('second', second);
  } if (!validMillisecond) {
    return unitOutOfRange('millisecond', millisecond);
  } return false;
}

const INVALID = 'Invalid DateTime';
const MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid('unsupported zone', `the zone "${zone.name}" is not supported`);
}

// we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}

// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid,
  };
  return new DateTime({ ...current, ...alts, old: current });
}

// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  let utcGuess = localTS - o * 60 * 1000;

  // Test whether the zone matches the offset for this ts
  const o2 = tz.offset(utcGuess);

  // If so, offset didn't change and we're done
  if (o === o2) {
    return [utcGuess, o];
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o) * 60 * 1000;

  // If that gives us the local time we want, we're done
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
}

// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;

  const d = new Date(ts);

  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds(),
  };
}

// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
}

// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
  const oPre = inst.o;
  const year = inst.c.year + Math.trunc(dur.years);
  const month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3;
  const c = {
    ...inst.c,
    year,
    month,
    day:
         Math.min(inst.c.day, daysInMonth(year, month))
         + Math.trunc(dur.days)
         + Math.trunc(dur.weeks) * 7,
  };
  const millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds,
  }).as('milliseconds');
  const localTS = objToLocalTS(c);

  let [ts, o] = fixOffset(localTS, oPre, inst.zone);

  if (millisToAdd !== 0) {
    ts += millisToAdd;
    // that could have changed the offset by going over a DST, but we want to keep the ts the same
    o = inst.zone.offset(ts);
  }

  return { ts, o };
}

// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if (parsed && Object.keys(parsed).length !== 0) {
    const interpretationZone = parsedZone || zone;
    const inst = DateTime.fromObject(parsed, {
      ...opts,
      zone: interpretationZone,
      specificOffset,
    });
    return setZone ? inst : inst.setZone(zone);
  }
  return DateTime.invalid(
    new Invalid('unparsable', `the input "${text}" can't be parsed as ${format}`),
  );
}

// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid
    ? Formatter.create(Locale.create('en-US'), {
      allowZ,
      forceSimple: true,
    }).formatDateTimeFromString(dt, format)
    : null;
}

function toISODate(o, extended) {
  const longFormat = o.c.year > 9999 || o.c.year < 0;
  let c = '';
  if (longFormat && o.c.year >= 0) c += '+';
  c += padStart(o.c.year, longFormat ? 6 : 4);

  if (extended) {
    c += '-';
    c += padStart(o.c.month);
    c += '-';
    c += padStart(o.c.day);
  } else {
    c += padStart(o.c.month);
    c += padStart(o.c.day);
  }
  return c;
}

function toISOTime(
  o,
  extended,
  suppressSeconds,
  suppressMilliseconds,
  includeOffset,
  extendedZone,
) {
  let c = padStart(o.c.hour);
  if (extended) {
    c += ':';
    c += padStart(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c += ':';
    }
  } else {
    c += padStart(o.c.minute);
  }

  if (o.c.second !== 0 || !suppressSeconds) {
    c += padStart(o.c.second);

    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += '.';
      c += padStart(o.c.millisecond, 3);
    }
  }

  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
      c += 'Z';
    } else if (o.o < 0) {
      c += '-';
      c += padStart(Math.trunc(-o.o / 60));
      c += ':';
      c += padStart(Math.trunc(-o.o % 60));
    } else {
      c += '+';
      c += padStart(Math.trunc(o.o / 60));
      c += ':';
      c += padStart(Math.trunc(o.o % 60));
    }
  }

  if (extendedZone) {
    c += `[${o.zone.ianaName}]`;
  }
  return c;
}

// defaults for unspecified units in the supported calendars
const defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
};
const defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
};
const defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
};

// Units in the supported calendars, sorted by bigness
const orderedUnits = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'];
const orderedWeekUnits = [
  'weekYear',
  'weekNumber',
  'weekday',
  'hour',
  'minute',
  'second',
  'millisecond',
];
const orderedOrdinalUnits = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond'];

// standardize case and plurality in units
function normalizeUnit(unit) {
  const normalized = {
    year: 'year',
    years: 'year',
    month: 'month',
    months: 'month',
    day: 'day',
    days: 'day',
    hour: 'hour',
    hours: 'hour',
    minute: 'minute',
    minutes: 'minute',
    quarter: 'quarter',
    quarters: 'quarter',
    second: 'second',
    seconds: 'second',
    millisecond: 'millisecond',
    milliseconds: 'millisecond',
    weekday: 'weekday',
    weekdays: 'weekday',
    weeknumber: 'weekNumber',
    weeksnumber: 'weekNumber',
    weeknumbers: 'weekNumber',
    weekyear: 'weekYear',
    weekyears: 'weekYear',
    ordinal: 'ordinal',
  }[unit.toLowerCase()];

  if (!normalized) throw new InvalidUnitError(unit);

  return normalized;
}

// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
  const zone = normalizeZone(opts.zone, Settings.defaultZone);
  const loc = Locale.fromObject(opts);
  const tsNow = Settings.now();

  let ts; let
    o;

  // assume we have the higher-order units
  if (!isUndefined(obj.year)) {
    for (const u of orderedUnits) {
      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }

    const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }

    const offsetProvis = zone.offset(tsNow);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }

  return new DateTime({
    ts, zone, loc, o,
  });
}

function diffRelative(start, end, opts) {
  const round = isUndefined(opts.round) ? true : opts.round;
  const format = (c, unit) => {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    const formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  };
  const differ = (unit) => {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } return 0;
    }
    return end.diff(start, unit).get(unit);
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}

function lastOpts(argList) {
  let opts = {};
  let args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === 'object') {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}

/**
  * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
  *
  * A DateTime comprises of:
  * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
  * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
  * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
  *
  * Here is a brief overview of the most commonly used functionality it provides:
  *
  * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime#local}, {@link DateTime#utc}, and (most flexibly) {@link DateTime#fromObject}. To create one from a standard string format, use {@link DateTime#fromISO}, {@link DateTime#fromHTTP}, and {@link DateTime#fromRFC2822}. To create one from a custom string format, use {@link DateTime#fromFormat}. To create one from a native JS date, use {@link DateTime#fromJSDate}.
  * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
  * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
  * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
  * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
  * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
  * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
  *
  * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
  */
class DateTime {
  /**
    * @access private
    */
  constructor(config) {
    const zone = config.zone || Settings.defaultZone;

    let invalid = config.invalid
       || (Number.isNaN(config.ts) ? new Invalid('invalid input') : null)
       || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
      * @access private
      */
    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;

    let c = null;
    let o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        [c, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid('invalid input') : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }

    /**
      * @access private
      */
    this._zone = zone;
    /**
      * @access private
      */
    this.loc = config.loc || Locale.create();
    /**
      * @access private
      */
    this.invalid = invalid;
    /**
      * @access private
      */
    this.weekData = null;
    /**
      * @access private
      */
    this.c = c;
    /**
      * @access private
      */
    this.o = o;
    /**
      * @access private
      */
    this.isLuxonDateTime = true;
  }

  // CONSTRUCT

  /**
    * Create a DateTime for the current instant, in the system's time zone.
    *
    * Use Settings to override these default values if needed.
    * @example DateTime.now().toISO() //~> now in the ISO format
    * @return {DateTime}
    */
  static now() {
    return new DateTime({});
  }

  /**
    * Create a local DateTime
    * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
    * @param {number} [month=1] - The month, 1-indexed
    * @param {number} [day=1] - The day of the month, 1-indexed
    * @param {number} [hour=0] - The hour of the day, in 24-hour time
    * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
    * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
    * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
    * @example DateTime.local()                                  //~> now
    * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
    * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
    * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
    * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
    * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
    * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
    * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
    * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
    * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
    * @return {DateTime}
    */
  static local() {
    const [opts, args] = lastOpts(arguments);
    const [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({
      year, month, day, hour, minute, second, millisecond,
    }, opts);
  }

  /**
    * Create a DateTime in UTC
    * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
    * @param {number} [month=1] - The month, 1-indexed
    * @param {number} [day=1] - The day of the month
    * @param {number} [hour=0] - The hour of the day, in 24-hour time
    * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
    * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
    * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
    * @param {Object} options - configuration options for the DateTime
    * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
    * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
    * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
    * @example DateTime.utc()                                              //~> now
    * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
    * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
    * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
    * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
    * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
    * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
    * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
    * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
    * @return {DateTime}
    */
  static utc() {
    const [opts, args] = lastOpts(arguments);
    const [year, month, day, hour, minute, second, millisecond] = args;

    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({
      year, month, day, hour, minute, second, millisecond,
    }, opts);
  }

  /**
    * Create a DateTime from a JavaScript Date object. Uses the default zone.
    * @param {Date} date - a JavaScript Date object
    * @param {Object} options - configuration options for the DateTime
    * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
    * @return {DateTime}
    */
  static fromJSDate(date, options = {}) {
    const ts = isDate(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid('invalid input');
    }

    const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options),
    });
  }

  /**
    * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
    * @param {number} milliseconds - a number of milliseconds since 1970 UTC
    * @param {Object} options - configuration options for the DateTime
    * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
    * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
    * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
    * @return {DateTime}
    */
  static fromMillis(milliseconds, options = {}) {
    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError(
        `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`,
      );
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid('Timestamp out of range');
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options),
      });
    }
  }

  /**
    * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
    * @param {number} seconds - a number of seconds since 1970 UTC
    * @param {Object} options - configuration options for the DateTime
    * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
    * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
    * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
    * @return {DateTime}
    */
  static fromSeconds(seconds, options = {}) {
    if (!isNumber(seconds)) {
      throw new InvalidArgumentError('fromSeconds requires a numerical input');
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options),
      });
    }
  }

  /**
    * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
    * @param {Object} obj - the object to create the DateTime from
    * @param {number} obj.year - a year, such as 1987
    * @param {number} obj.month - a month, 1-12
    * @param {number} obj.day - a day of the month, 1-31, depending on the month
    * @param {number} obj.ordinal - day of the year, 1-365 or 366
    * @param {number} obj.weekYear - an ISO week year
    * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
    * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
    * @param {number} obj.hour - hour of the day, 0-23
    * @param {number} obj.minute - minute of the hour, 0-59
    * @param {number} obj.second - second of the minute, 0-59
    * @param {number} obj.millisecond - millisecond of the second, 0-999
    * @param {Object} opts - options for creating this DateTime
    * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
    * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
    * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
    * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
    * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
    * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
    * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
    * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
    * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
    * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
    * @return {DateTime}
    */
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    const tsNow = Settings.now();
    const offsetProvis = !isUndefined(opts.specificOffset)
      ? opts.specificOffset
      : zoneToUse.offset(tsNow);
    const normalized = normalizeObject(obj, normalizeUnit);
    const containsOrdinal = !isUndefined(normalized.ordinal);
    const containsGregorYear = !isUndefined(normalized.year);
    const containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day);
    const containsGregor = containsGregorYear || containsGregorMD;
    const definiteWeekDef = normalized.weekYear || normalized.weekNumber;
    const loc = Locale.fromObject(opts);

    // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    const useWeekData = definiteWeekDef || (normalized.weekday && !containsGregor);

    // configure ourselves to deal with gregorian dates or week stuff
    let units;
    let defaultValues;
    let objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }

    // set default values for missing stuff
    let foundFirst = false;
    for (const u of units) {
      const v = normalized[u];
      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }

    // make sure the values we have are in range
    const higherOrderInvalid = useWeekData
      ? hasInvalidWeekData(normalized)
      : containsOrdinal
        ? hasInvalidOrdinalData(normalized)
        : hasInvalidGregorianData(normalized);
    const invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    }

    // compute the actual time
    const gregorian = useWeekData
      ? weekToGregorian(normalized)
      : containsOrdinal
        ? ordinalToGregorian(normalized)
        : normalized;
    const [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse);
    const inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc,
    });

    // gregorian data + weekday serves only to validate
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid(
        'mismatched weekday',
        `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`,
      );
    }

    return inst;
  }

  /**
    * Create a DateTime from an ISO 8601 string
    * @param {string} text - the ISO string
    * @param {Object} opts - options to affect the creation
    * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
    * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
    * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
    * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
    * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
    * @example DateTime.fromISO('2016-05-25T09:08:34.123')
    * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
    * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
    * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
    * @example DateTime.fromISO('2016-W05-4')
    * @return {DateTime}
    */
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = parseISODate(text);
    return parseDataToDateTime(vals, parsedZone, opts, 'ISO 8601', text);
  }

  /**
    * Create a DateTime from an RFC 2822 string
    * @param {string} text - the RFC 2822 string
    * @param {Object} opts - options to affect the creation
    * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
    * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
    * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
    * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
    * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
    * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
    * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
    * @return {DateTime}
    */
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = parseRFC2822Date(text);
    return parseDataToDateTime(vals, parsedZone, opts, 'RFC 2822', text);
  }

  /**
    * Create a DateTime from an HTTP header date
    * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
    * @param {string} text - the HTTP header date
    * @param {Object} opts - options to affect the creation
    * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
    * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
    * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
    * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
    * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
    * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
    * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
    * @return {DateTime}
    */
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = parseHTTPDate(text);
    return parseDataToDateTime(vals, parsedZone, opts, 'HTTP', opts);
  }

  /**
    * Create a DateTime from an input string and format string.
    * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
    * @param {string} text - the string to parse
    * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
    * @param {Object} opts - options to affect the creation
    * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
    * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
    * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
    * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
    * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @return {DateTime}
    */
  static fromFormat(text, fmt, opts = {}) {
    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError('fromFormat requires an input string and a format');
    }

    const { locale = null, numberingSystem = null } = opts;
    const localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true,
    });
    const [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
  }

  /**
    * @deprecated use fromFormat instead
    */
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }

  /**
    * Create a DateTime from a SQL date, time, or datetime
    * Defaults to en-US if no locale has been specified, regardless of the system's locale
    * @param {string} text - the string to parse
    * @param {Object} opts - options to affect the creation
    * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
    * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
    * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
    * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
    * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
    * @example DateTime.fromSQL('2017-05-15')
    * @example DateTime.fromSQL('2017-05-15 09:12:34')
    * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
    * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
    * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
    * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
    * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
    * @example DateTime.fromSQL('09:12:34.342')
    * @return {DateTime}
    */
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = parseSQL(text);
    return parseDataToDateTime(vals, parsedZone, opts, 'SQL', text);
  }

  /**
    * Create an invalid DateTime.
    * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
    * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
    * @return {DateTime}
    */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError('need to specify a reason the DateTime is invalid');
    }

    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }

  /**
    * Check if an object is an instance of DateTime. Works across context boundaries
    * @param {object} o
    * @return {boolean}
    */
  static isDateTime(o) {
    return (o && o.isLuxonDateTime) || false;
  }

  /**
    * Produce the format string for a set of options
    * @param formatOpts
    * @param localeOpts
    * @returns {string}
    */
  static parseFormatForOpts(formatOpts, localeOpts = {}) {
    const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
    return !tokenList ? null : tokenList.map((t) => (t ? t.val : null)).join('');
  }

  // INFO

  /**
    * Get the value of unit.
    * @param {string} unit - a unit such as 'minute' or 'day'
    * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
    * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
    * @return {number}
    */
  get(unit) {
    return this[unit];
  }

  /**
    * Returns whether the DateTime is valid. Invalid DateTimes occur when:
    * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
    * * The DateTime was created by an operation on another invalid date
    * @type {boolean}
    */
  get isValid() {
    return this.invalid === null;
  }

  /**
    * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
    * @type {string}
    */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  /**
    * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
    * @type {string}
    */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  /**
    * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
    *
    * @type {string}
    */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  /**
    * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
    *
    * @type {string}
    */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  /**
    * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
    *
    * @type {string}
    */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }

  /**
    * Get the time zone associated with this DateTime.
    * @type {Zone}
    */
  get zone() {
    return this._zone;
  }

  /**
    * Get the name of the time zone.
    * @type {string}
    */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }

  /**
    * Get the year
    * @example DateTime.local(2017, 5, 25).year //=> 2017
    * @type {number}
    */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }

  /**
    * Get the quarter
    * @example DateTime.local(2017, 5, 25).quarter //=> 2
    * @type {number}
    */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }

  /**
    * Get the month (1-12).
    * @example DateTime.local(2017, 5, 25).month //=> 5
    * @type {number}
    */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }

  /**
    * Get the day of the month (1-30ish).
    * @example DateTime.local(2017, 5, 25).day //=> 25
    * @type {number}
    */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }

  /**
    * Get the hour of the day (0-23).
    * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
    * @type {number}
    */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }

  /**
    * Get the minute of the hour (0-59).
    * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
    * @type {number}
    */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }

  /**
    * Get the second of the minute (0-59).
    * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
    * @type {number}
    */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }

  /**
    * Get the millisecond of the second (0-999).
    * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
    * @type {number}
    */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }

  /**
    * Get the week year
    * @see https://en.wikipedia.org/wiki/ISO_week_date
    * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
    * @type {number}
    */
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }

  /**
    * Get the week number of the week year (1-52ish).
    * @see https://en.wikipedia.org/wiki/ISO_week_date
    * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
    * @type {number}
    */
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }

  /**
    * Get the day of the week.
    * 1 is Monday and 7 is Sunday
    * @see https://en.wikipedia.org/wiki/ISO_week_date
    * @example DateTime.local(2014, 11, 31).weekday //=> 4
    * @type {number}
    */
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }

  /**
    * Get the ordinal (meaning the day of the year)
    * @example DateTime.local(2017, 5, 25).ordinal //=> 145
    * @type {number|DateTime}
    */
  get ordinal() {
    return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
  }

  /**
    * Get the human readable short month name, such as 'Oct'.
    * Defaults to the system's locale if no locale has been specified
    * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
    * @type {string}
    */
  get monthShort() {
    return this.isValid ? Info.months('short', { locObj: this.loc })[this.month - 1] : null;
  }

  /**
    * Get the human readable long month name, such as 'October'.
    * Defaults to the system's locale if no locale has been specified
    * @example DateTime.local(2017, 10, 30).monthLong //=> October
    * @type {string}
    */
  get monthLong() {
    return this.isValid ? Info.months('long', { locObj: this.loc })[this.month - 1] : null;
  }

  /**
    * Get the human readable short weekday, such as 'Mon'.
    * Defaults to the system's locale if no locale has been specified
    * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
    * @type {string}
    */
  get weekdayShort() {
    return this.isValid ? Info.weekdays('short', { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
    * Get the human readable long weekday, such as 'Monday'.
    * Defaults to the system's locale if no locale has been specified
    * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
    * @type {string}
    */
  get weekdayLong() {
    return this.isValid ? Info.weekdays('long', { locObj: this.loc })[this.weekday - 1] : null;
  }

  /**
    * Get the UTC offset of this DateTime in minutes
    * @example DateTime.now().offset //=> -240
    * @example DateTime.utc().offset //=> 0
    * @type {number}
    */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }

  /**
    * Get the short human name for the zone's current offset, for example "EST" or "EDT".
    * Defaults to the system's locale if no locale has been specified
    * @type {string}
    */
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: 'short',
        locale: this.locale,
      });
    }
    return null;
  }

  /**
    * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
    * Defaults to the system's locale if no locale has been specified
    * @type {string}
    */
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: 'long',
        locale: this.locale,
      });
    }
    return null;
  }

  /**
    * Get whether this zone's offset ever changes, as in a DST.
    * @type {boolean}
    */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }

  /**
    * Get whether the DateTime is in a DST.
    * @type {boolean}
    */
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    }
    return (
      this.offset > this.set({ month: 1, day: 1 }).offset
         || this.offset > this.set({ month: 5 }).offset
    );
  }

  /**
    * Returns true if this DateTime is in a leap year, false otherwise
    * @example DateTime.local(2016).isInLeapYear //=> true
    * @example DateTime.local(2013).isInLeapYear //=> false
    * @type {boolean}
    */
  get isInLeapYear() {
    return isLeapYear(this.year);
  }

  /**
    * Returns the number of days in this DateTime's month
    * @example DateTime.local(2016, 2).daysInMonth //=> 29
    * @example DateTime.local(2016, 3).daysInMonth //=> 31
    * @type {number}
    */
  get daysInMonth() {
    return daysInMonth(this.year, this.month);
  }

  /**
    * Returns the number of days in this DateTime's year
    * @example DateTime.local(2016).daysInYear //=> 366
    * @example DateTime.local(2013).daysInYear //=> 365
    * @type {number}
    */
  get daysInYear() {
    return this.isValid ? daysInYear(this.year) : NaN;
  }

  /**
    * Returns the number of weeks in this DateTime's year
    * @see https://en.wikipedia.org/wiki/ISO_week_date
    * @example DateTime.local(2004).weeksInWeekYear //=> 53
    * @example DateTime.local(2013).weeksInWeekYear //=> 52
    * @type {number}
    */
  get weeksInWeekYear() {
    return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
  }

  /**
    * Returns the resolved Intl options for this DateTime.
    * This is useful in understanding the behavior of formatting methods
    * @param {Object} opts - the same options as toLocaleString
    * @return {Object}
    */
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = Formatter.create(
      this.loc.clone(opts),
      opts,
    ).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }

  // TRANSFORM

  /**
    * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
    *
    * Equivalent to {@link DateTime#setZone}('utc')
    * @param {number} [offset=0] - optionally, an offset from UTC in minutes
    * @param {Object} [opts={}] - options to pass to `setZone()`
    * @return {DateTime}
    */
  toUTC(offset = 0, opts = {}) {
    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }

  /**
    * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
    *
    * Equivalent to `setZone('local')`
    * @return {DateTime}
    */
  toLocal() {
    return this.setZone(Settings.defaultZone);
  }

  /**
    * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
    *
    * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
    * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
    * @param {Object} opts - options
    * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
    * @return {DateTime}
    */
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = normalizeZone(zone, Settings.defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    }
    let newTS = this.ts;
    if (keepLocalTime || keepCalendarTime) {
      const offsetGuess = zone.offset(this.ts);
      const asObj = this.toObject();
      [newTS] = objToTS(asObj, offsetGuess, zone);
    }
    return clone(this, { ts: newTS, zone });
  }

  /**
    * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
    * @param {Object} properties - the properties to set
    * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
    * @return {DateTime}
    */
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }

  /**
    * "Set" the locale. Returns a newly-constructed DateTime.
    * Just a convenient alias for reconfigure({ locale })
    * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
    * @return {DateTime}
    */
  setLocale(locale) {
    return this.reconfigure({ locale });
  }

  /**
    * "Set" the values of specified units. Returns a newly-constructed DateTime.
    * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
    * @param {Object} values - a mapping of units to numbers
    * @example dt.set({ year: 2017 })
    * @example dt.set({ hour: 8, minute: 30 })
    * @example dt.set({ weekday: 5 })
    * @example dt.set({ year: 2005, ordinal: 234 })
    * @return {DateTime}
    */
  set(values) {
    if (!this.isValid) return this;

    const normalized = normalizeObject(values, normalizeUnit);
    const settingWeekStuff = !isUndefined(normalized.weekYear)
         || !isUndefined(normalized.weekNumber)
         || !isUndefined(normalized.weekday);
    const containsOrdinal = !isUndefined(normalized.ordinal);
    const containsGregorYear = !isUndefined(normalized.year);
    const containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day);
    const containsGregor = containsGregorYear || containsGregorMD;
    const definiteWeekDef = normalized.weekYear || normalized.weekNumber;

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
      );
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    let mixed;
    if (settingWeekStuff) {
      mixed = weekToGregorian({ ...gregorianToWeek(this.c), ...normalized });
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian({ ...gregorianToOrdinal(this.c), ...normalized });
    } else {
      mixed = { ...this.toObject(), ...normalized };

      // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month
      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o });
  }

  /**
    * Add a period of time to this DateTime and return the resulting DateTime
    *
    * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
    * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
    * @example DateTime.now().plus(123) //~> in 123 milliseconds
    * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
    * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
    * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
    * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
    * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
    * @return {DateTime}
    */
  plus(duration) {
    if (!this.isValid) return this;
    const dur = Duration.fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }

  /**
    * Subtract a period of time to this DateTime and return the resulting DateTime
    * See {@link DateTime#plus}
    * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
    @return {DateTime}
    */
  minus(duration) {
    if (!this.isValid) return this;
    const dur = Duration.fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }

  /**
    * "Set" this DateTime to the beginning of a unit of time.
    * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
    * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
    * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
    * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
    * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
    * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
    * @return {DateTime}
    */
  startOf(unit) {
    if (!this.isValid) return this;
    const o = {};
    const normalizedUnit = Duration.normalizeUnit(unit);
    switch (normalizedUnit) {
      case 'years':
        o.month = 1;
        // falls through
      case 'quarters':
      case 'months':
        o.day = 1;
        // falls through
      case 'weeks':
      case 'days':
        o.hour = 0;
        // falls through
      case 'hours':
        o.minute = 0;
        // falls through
      case 'minutes':
        o.second = 0;
        // falls through
      case 'seconds':
        o.millisecond = 0;
        break;
       // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === 'weeks') {
      o.weekday = 1;
    }

    if (normalizedUnit === 'quarters') {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }

  /**
    * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
    * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
    * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
    * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
    * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
    * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
    * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
    * @return {DateTime}
    */
  endOf(unit) {
    return this.isValid
      ? this.plus({ [unit]: 1 })
        .startOf(unit)
        .minus(1)
      : this;
  }

  // OUTPUT

  /**
    * Returns a string representation of this DateTime formatted according to the specified format string.
    * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
    * Defaults to en-US if no locale has been specified, regardless of the system's locale.
    * @param {string} fmt - the format string
    * @param {Object} opts - opts to override the configuration options on this DateTime
    * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
    * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
    * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
    * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
    * @return {string}
    */
  toFormat(fmt, opts = {}) {
    return this.isValid
      ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt)
      : INVALID;
  }

  /**
    * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
    * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
    * of the DateTime in the assigned locale.
    * Defaults to the system's locale if no locale has been specified
    * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
    * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
    * @param {Object} opts - opts to override the configuration options on this DateTime
    * @example DateTime.now().toLocaleString(); //=> 4/20/2017
    * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
    * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
    * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
    * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
    * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
    * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
    * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
    * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
    * @return {string}
    */
  toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
    return this.isValid
      ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this)
      : INVALID;
  }

  /**
    * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
    * Defaults to the system's locale if no locale has been specified
    * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
    * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
    * @example DateTime.now().toLocaleParts(); //=> [
    *                                   //=>   { type: 'day', value: '25' },
    *                                   //=>   { type: 'literal', value: '/' },
    *                                   //=>   { type: 'month', value: '05' },
    *                                   //=>   { type: 'literal', value: '/' },
    *                                   //=>   { type: 'year', value: '1982' }
    *                                   //=> ]
    */
  toLocaleParts(opts = {}) {
    return this.isValid
      ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this)
      : [];
  }

  /**
    * Returns an ISO 8601-compliant string representation of this DateTime
    * @param {Object} opts - options
    * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
    * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
    * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
    * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
    * @param {string} [opts.format='extended'] - choose between the basic and extended format
    * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
    * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
    * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
    * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
    * @return {string}
    */
  toISO({
    format = 'extended',
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true,
    extendedZone = false,
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    const ext = format === 'extended';

    let c = toISODate(this, ext);
    c += 'T';
    c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    return c;
  }

  /**
    * Returns an ISO 8601-compliant string representation of this DateTime's date component
    * @param {Object} opts - options
    * @param {string} [opts.format='extended'] - choose between the basic and extended format
    * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
    * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
    * @return {string}
    */
  toISODate({ format = 'extended' } = {}) {
    if (!this.isValid) {
      return null;
    }

    return toISODate(this, format === 'extended');
  }

  /**
    * Returns an ISO 8601-compliant string representation of this DateTime's week date
    * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
    * @return {string}
    */
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }

  /**
    * Returns an ISO 8601-compliant string representation of this DateTime's time component
    * @param {Object} opts - options
    * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
    * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
    * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
    * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
    * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
    * @param {string} [opts.format='extended'] - choose between the basic and extended format
    * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
    * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
    * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
    * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
    * @return {string}
    */
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    extendedZone = false,
    format = 'extended',
  } = {}) {
    if (!this.isValid) {
      return null;
    }

    const c = includePrefix ? 'T' : '';
    return (
      c
       + toISOTime(
         this,
         format === 'extended',
         suppressSeconds,
         suppressMilliseconds,
         includeOffset,
         extendedZone,
       )
    );
  }

  /**
    * Returns an RFC 2822-compatible string representation of this DateTime
    * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
    * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
    * @return {string}
    */
  toRFC2822() {
    return toTechFormat(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', false);
  }

  /**
    * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
    * Specifically, the string conforms to RFC 1123.
    * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
    * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
    * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
    * @return {string}
    */
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }

  /**
    * Returns a string representation of this DateTime appropriate for use in SQL Date
    * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
    * @return {string}
    */
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }

  /**
    * Returns a string representation of this DateTime appropriate for use in SQL Time
    * @param {Object} opts - options
    * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
    * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
    * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
    * @example DateTime.utc().toSQL() //=> '05:15:16.345'
    * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
    * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
    * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
    * @return {string}
    */
  toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
    let fmt = 'HH:mm:ss.SSS';

    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += ' ';
      }
      if (includeZone) {
        fmt += 'z';
      } else if (includeOffset) {
        fmt += 'ZZ';
      }
    }

    return toTechFormat(this, fmt, true);
  }

  /**
    * Returns a string representation of this DateTime appropriate for use in SQL DateTime
    * @param {Object} opts - options
    * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
    * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
    * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
    * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
    * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
    * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
    * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
    * @return {string}
    */
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }

    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }

  /**
    * Returns a string representation of this DateTime appropriate for debugging
    * @return {string}
    */
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }

  /**
    * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
    * @return {number}
    */
  valueOf() {
    return this.toMillis();
  }

  /**
    * Returns the epoch milliseconds of this DateTime.
    * @return {number}
    */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }

  /**
    * Returns the epoch seconds of this DateTime.
    * @return {number}
    */
  toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }

  /**
    * Returns the epoch seconds (as a whole number) of this DateTime.
    * @return {number}
    */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1000) : NaN;
  }

  /**
    * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
    * @return {string}
    */
  toJSON() {
    return this.toISO();
  }

  /**
    * Returns a BSON serializable equivalent to this DateTime.
    * @return {Date}
    */
  toBSON() {
    return this.toJSDate();
  }

  /**
    * Returns a JavaScript object with this DateTime's year, month, day, and so on.
    * @param opts - options for generating the object
    * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
    * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
    * @return {Object}
    */
  toObject(opts = {}) {
    if (!this.isValid) return {};

    const base = { ...this.c };

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }

  /**
    * Returns a JavaScript Date equivalent to this DateTime.
    * @return {Date}
    */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }

  // COMPARE

  /**
    * Return the difference between two DateTimes as a Duration.
    * @param {DateTime} otherDateTime - the DateTime to compare this one to
    * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
    * @param {Object} opts - options that affect the creation of the Duration
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @example
    * var i1 = DateTime.fromISO('1982-05-25T09:45'),
    *     i2 = DateTime.fromISO('1983-10-14T10:30');
    * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
    * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
    * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
    * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
    * @return {Duration}
    */
  diff(otherDateTime, unit = 'milliseconds', opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid('created by diffing an invalid DateTime');
    }

    const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };

    const units = maybeArray(unit).map(Duration.normalizeUnit);
    const otherIsLater = otherDateTime.valueOf() > this.valueOf();
    const earlier = otherIsLater ? this : otherDateTime;
    const later = otherIsLater ? otherDateTime : this;
    const diffed = diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }

  /**
    * Return the difference between this DateTime and right now.
    * See {@link DateTime#diff}
    * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
    * @param {Object} opts - options that affect the creation of the Duration
    * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
    * @return {Duration}
    */
  diffNow(unit = 'milliseconds', opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }

  /**
    * Return an Interval spanning between this DateTime and another DateTime
    * @param {DateTime} otherDateTime - the other end point of the Interval
    * @return {Interval}
    */
  until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }

  /**
    * Return whether this DateTime is in the same unit of time as another DateTime.
    * Higher-order units must also be identical for this function to return `true`.
    * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
    * @param {DateTime} otherDateTime - the other DateTime
    * @param {string} unit - the unit of time to check sameness on
    * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
    * @return {boolean}
    */
  hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }

  /**
    * Equality check
    * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
    * To compare just the millisecond values, use `+dt1 === +dt2`.
    * @param {DateTime} other - the other DateTime
    * @return {boolean}
    */
  equals(other) {
    return (
      this.isValid
       && other.isValid
       && this.valueOf() === other.valueOf()
       && this.zone.equals(other.zone)
       && this.loc.equals(other.loc)
    );
  }

  /**
    * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
    * platform supports Intl.RelativeTimeFormat. Rounds down by default.
    * @param {Object} options - options that affect the output
    * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
    * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
    * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
    * @param {boolean} [options.round=true] - whether to round the numbers in the output.
    * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
    * @param {string} options.locale - override the locale of this DateTime
    * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
    * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
    * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
    * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
    * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
    * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
    * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
    */
  toRelative(options = {}) {
    if (!this.isValid) return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone });
    const padding = options.padding ? (this < base ? -options.padding : options.padding) : 0;
    let units = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
    let { unit } = options;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = undefined;
    }
    return diffRelative(base, this.plus(padding), {
      ...options,
      numeric: 'always',
      units,
      unit,
    });
  }

  /**
    * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
    * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
    * @param {Object} options - options that affect the output
    * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
    * @param {string} options.locale - override the locale of this DateTime
    * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
    * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
    * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
    * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
    * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
    * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
    */
  toRelativeCalendar(options = {}) {
    if (!this.isValid) return null;

    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, {
      ...options,
      numeric: 'auto',
      units: ['years', 'months', 'days'],
      calendary: true,
    });
  }

  /**
    * Return the min of several date times
    * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
    * @return {DateTime} the min DateTime, or undefined if called with no argument
    */
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError('min requires all arguments be DateTimes');
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.min);
  }

  /**
    * Return the max of several date times
    * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
    * @return {DateTime} the max DateTime, or undefined if called with no argument
    */
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError('max requires all arguments be DateTimes');
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.max);
  }

  // MISC

  /**
    * Explain how a string would be parsed by fromFormat()
    * @param {string} text - the string to parse
    * @param {string} fmt - the format the string is expected to be in (see description)
    * @param {Object} options - options taken by fromFormat()
    * @return {Object}
    */
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options;
    const localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true,
    });
    return explainFromTokens(localeToUse, text, fmt);
  }

  /**
    * @deprecated use fromFormatExplain instead
    */
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }

  // FORMAT PRESETS

  /**
    * {@link DateTime#toLocaleString} format like 10/14/1983
    * @type {Object}
    */
  static get DATE_SHORT() {
    return DATE_SHORT;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
    * @type {Object}
    */
  static get DATE_MED() {
    return DATE_MED;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
    * @type {Object}
    */
  static get DATE_MED_WITH_WEEKDAY() {
    return DATE_MED_WITH_WEEKDAY;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'October 14, 1983'
    * @type {Object}
    */
  static get DATE_FULL() {
    return DATE_FULL;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
    * @type {Object}
    */
  static get DATE_HUGE() {
    return DATE_HUGE;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get TIME_SIMPLE() {
    return TIME_SIMPLE;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get TIME_WITH_SECONDS() {
    return TIME_WITH_SECONDS;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get TIME_WITH_SHORT_OFFSET() {
    return TIME_WITH_SHORT_OFFSET;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get TIME_WITH_LONG_OFFSET() {
    return TIME_WITH_LONG_OFFSET;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
    * @type {Object}
    */
  static get TIME_24_SIMPLE() {
    return TIME_24_SIMPLE;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
    * @type {Object}
    */
  static get TIME_24_WITH_SECONDS() {
    return TIME_24_WITH_SECONDS;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
    * @type {Object}
    */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return TIME_24_WITH_SHORT_OFFSET;
  }

  /**
    * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
    * @type {Object}
    */
  static get TIME_24_WITH_LONG_OFFSET() {
    return TIME_24_WITH_LONG_OFFSET;
  }

  /**
    * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_SHORT() {
    return DATETIME_SHORT;
  }

  /**
    * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return DATETIME_SHORT_WITH_SECONDS;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_MED() {
    return DATETIME_MED;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_MED_WITH_SECONDS() {
    return DATETIME_MED_WITH_SECONDS;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return DATETIME_MED_WITH_WEEKDAY;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_FULL() {
    return DATETIME_FULL;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_FULL_WITH_SECONDS() {
    return DATETIME_FULL_WITH_SECONDS;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_HUGE() {
    return DATETIME_HUGE;
  }

  /**
    * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
    * @type {Object}
    */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return DATETIME_HUGE_WITH_SECONDS;
  }
}

/**
  * @private
  */
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } if (dateTimeish && typeof dateTimeish === 'object') {
    return DateTime.fromObject(dateTimeish);
  }
  throw new InvalidArgumentError(
    `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`,
  );
}

const VERSION = '3.0.1';


// # sourceMappingURL=luxon.js.map


/***/ }),

/***/ "./src/modules/score.js":
/*!******************************!*\
  !*** ./src/modules/score.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Score {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Score);

/***/ }),

/***/ "./src/modules/scorelist.js":
/*!**********************************!*\
  !*** ./src/modules/scorelist.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ScoreList {
  constructor() {
    this.list = [];
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScoreList);

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScore": () => (/* binding */ addScore),
/* harmony export */   "displayDate": () => (/* binding */ displayDate),
/* harmony export */   "refreshScores": () => (/* binding */ refreshScores)
/* harmony export */ });
/* harmony import */ var _luxon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./luxon.js */ "./src/modules/luxon.js");
/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score.js */ "./src/modules/score.js");
/* harmony import */ var _scorelist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scorelist.js */ "./src/modules/scorelist.js");




// **********GLOBAL VARIABLES**********//
const scoreList = new _scorelist_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

// **********Date Display Function**********//
const displayDate = () => {
  const mainDate = document.getElementById('main_date');
  mainDate.innerText = _luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toLocaleString(_luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.DATETIME_MED_WITH_SECONDS);
};

// **********Scores API-Fetch Function**********//
const fetchScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GVdkzz5NAIgs0GI1WwJw/scores/');
  const json = await response.json();
  // json.result => a list of scores
  return json.result;
};

// **********Score Render Function**********//
const renderScore = async (obj) => {
  const scoreElement = document.createElement('div');
  scoreElement.classList.add('score-item');
  scoreElement.innerHTML = `
            <div class="score-info">
              <h3>${obj.user}: ${obj.score}</h3>
            </div>  
        `;
  document.querySelector('#scores_list').appendChild(scoreElement);
};

// **********Scores Refresh Function**********//
const refreshScores = async () => {
  scoreList.list = await fetchScores();
  const scoresListElement = document.querySelector('#scores_list');
  scoresListElement.innerHTML = '';
  scoreList.list.forEach((obj) => renderScore(obj));
};

// **********Score AddFunction**********//
const addScore = async () => {
  const user = document.querySelector('#name_field').value;
  const score = document.querySelector('#score_field').value;
  if (user === '' || score === '') {
    throw new Error('Please fill in all fields');
  } else {
    // Resetting the input fields
    document.querySelector('#name_field').value = '';
    document.querySelector('#score_field').value = '';
    // Creating a new score object & adding it to the list of scores
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GVdkzz5NAIgs0GI1WwJw/scores/', {
      method: 'POST',
      body: JSON.stringify(new _score_js__WEBPACK_IMPORTED_MODULE_1__["default"](user, score)),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    // Refreshing scores list in the DOM
    refreshScores();
    const message = await response.json();
    return message;
  }
};



/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ce96cefcb596177ffce.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QStCLHlCQUF5QixxQkFBcUIsdUJBQXVCLE9BQU8sS0FBSyxrSEFBa0gsd0ZBQXdGLGNBQWMsYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0sd0JBQXdCLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sYUFBYSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxhQUFhLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxhQUFhLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFL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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQSxxQkFBcUIsb0NBQW9DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLFVBQVUsd0JBQXdCLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxVQUFVLDRCQUE0QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZUFBZTtBQUN6QztB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QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxVQUFVLGNBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxFQUFFLEdBQUcsU0FBUztBQUN6RSxjQUFjLEdBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU8sV0FBVyxhQUFhLFNBQVMsS0FBSztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtQkFBbUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQ0FBZ0M7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUJBQW1CO0FBQzdCO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCO0FBQzFCLFVBQVUsYUFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxVQUFVO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQ0FBbUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLEtBQUssdUJBQXVCLE9BQU87QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLHdEQUF3RDtBQUN4RCxzREFBc0Q7QUFDdEQsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05jO0FBQ1A7QUFDUTtBQUN2QztBQUNBO0FBQ0Esc0JBQXNCLHFEQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFEQUFjLGtCQUFrQix5RUFBa0M7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUyxJQUFJLFVBQVU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlEQUFLO0FBQ3BDO0FBQ0EsMkNBQTJDO0FBQzNDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvbHV4b24uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9zY29yZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3Njb3JlbGlzdC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcclxcblxcclxcbi8qIERvY3VtZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlc2V0dGluZyBhbGwgZWxlbWVudHMnIGRlZmF1bHQgQ1NTXFxyXFxuICAgKi9cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU2VjdGlvbnNcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmJvZHk6OmJlZm9yZSxcXHJcXG5ib2R5OjphZnRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuXFxyXFxuICAvKiBCZWxvdyBMaW5lcyBBZGRlZCBCeSBNZSAqL1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcclxcbiAgICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxyXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHcm91cGluZyBjb250ZW50XFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXHJcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxucHJlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcclxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYixcXHJcXG5zdHJvbmcge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCB7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlOyAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc21hbGwge1xcclxcbiAgZm9udC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxyXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG4gIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICB0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW1iZWRkZWQgY29udGVudFxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3Jtc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxyXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcclxcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxyXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHsgLyogMSAqL1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxyXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHsgLyogMSAqL1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxyXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxyXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXHJcXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXHJcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxyXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxyXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxyXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXHJcXG4gICAqL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXHJcXG4gICAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcclxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcclxcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnRlcmFjdGl2ZVxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmRldGFpbHMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zdW1tYXJ5IHtcXHJcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWlzY1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXHJcXG4gICAqL1xcclxcblxcclxcbnRlbXBsYXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7O0lBRUk7O0FBRUo7OztFQUdFLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1Qjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjs7O0VBR0UsU0FBUzs7RUFFVCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0FBQzVCOztBQUVBOztJQUVJOztBQUVKO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0lBR0k7O0FBRUo7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO2lGQUNpRjs7QUFFakY7OztJQUdJOztBQUVKO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0lBR0k7O0FBRUo7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7SUFFSTs7QUFFSjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztJQUdJOztBQUVKOzs7RUFHRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztJQUVJOztBQUVKO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO2lGQUNpRjs7QUFFakY7OztJQUdJOztBQUVKOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0lBR0k7O0FBRUo7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7SUFHSTs7QUFFSjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztJQUVJOztBQUVKOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztJQUVJOztBQUVKO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztJQUtJOztBQUVKO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztJQUVJOztBQUVKO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztJQUVJOztBQUVKO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7SUFFSTs7QUFFSjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztJQUdJOztBQUVKO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztJQUVJOztBQUVKO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxyXFxuXFxyXFxuLyogRG9jdW1lbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVzZXR0aW5nIGFsbCBlbGVtZW50cycgZGVmYXVsdCBDU1NcXHJcXG4gICAqL1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbiAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZWN0aW9uc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmJvZHksXFxyXFxuYm9keTo6YmVmb3JlLFxcclxcbmJvZHk6OmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG5cXHJcXG4gIC8qIEJlbG93IExpbmVzIEFkZGVkIEJ5IE1lICovXFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXHJcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxyXFxufVxcclxcblxcclxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcclxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcclxcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxyXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYWJiclt0aXRsZV0ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXHJcXG4gICAqIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgZm9udC1zaXplOiA3NSU7XFxyXFxuICBsaW5lLWhlaWdodDogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuc3ViIHtcXHJcXG4gIGJvdHRvbTogLTAuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG4gIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm1zXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXHJcXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQgeyAvKiAxICovXFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXHJcXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3QgeyAvKiAxICovXFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXHJcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXHJcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcclxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcclxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXHJcXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXHJcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcclxcbiAgICovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcclxcbiAgICovXFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxyXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxyXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEludGVyYWN0aXZlXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcclxcbiAgICovXFxyXFxuXFxyXFxudGVtcGxhdGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fucyk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEltcG9ydGluZyB0aGUgXFxcIm5vcm1hbGl6ZS5jc3NcXFwiIGZpbGUgd2hpY2ggaXMgZm9yIHJlc2V0dGluZyBhbGwgdGhlIGRlZmF1bHQgY3NzIHZhbHVlcyAqL1xcclxcblxcclxcbi8qIEltcG9ydGluZyBGb250cyAqL1xcclxcblxcclxcbi8qICoqKioqKk1haW4gJiBTZWNvbmRhcnkgQ29sb3JzKioqKioqICovXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1iZ19jb2xvcjogI2ZmZjtcXHJcXG4gIC0tcHJpbWFyeTogIzJjM2U1MDtcXHJcXG4gIC0tcHJpbWFyeV9saWdodDogIzM0NDk1ZTtcXHJcXG4gIC0tc2Vjb25kYXJ5OiAjZWM1MjQyO1xcclxcbiAgLS1uZXV0cmFsOiAjZDNkM2QzO1xcclxcbiAgLS12ZXJkYW5hOiB2ZXJkYW5hLCB0YWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICAtLVRhaG9tYTogdGFob21hLCB2ZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1zYW5zLXNlcmlmOiBzYW5zLXNlcmlmLCB2ZXJkYW5hLCB0YWhvbWE7XFxyXFxuICAtLW9wZW4tc2FuczogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qICoqKioqKioqKipHbG9iYWwgQ2xhc3NlcyoqKioqKioqKiogKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1vcGVuLXNhbnMpO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udW5kZXJsaW5lIHtcXHJcXG4gIGhlaWdodDogMi41cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIGgxLFxcclxcbmgyLFxcclxcbmgzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1IZWFkZXIgU3RhcnQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDVweCA0NXB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxvZ28gaW1nIHtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG4gIGhlaWdodDogNzFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2t0b3AtbWVudSBuYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5X2xpZ2h0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVza3RvcC1tZW51IG5hdiBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwpO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5hbmltYXRpb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZDogIzFhYmM5YztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYTpudGgtY2hpbGQoMSkge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLnN0YXJ0LWhvbWUsXFxyXFxuYTpudGgtY2hpbGQoMSk6aG92ZXIgfiAuYW5pbWF0aW9uIHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbm5hdiBhOm50aC1jaGlsZCgyKSB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAuc3RhcnQtY29udGFjdCxcXHJcXG5hOm50aC1jaGlsZCgyKTpob3ZlciB+IC5hbmltYXRpb24ge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgbGVmdDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiBhOm50aC1jaGlsZCgzKSB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAuc3RhcnQtYWJvdXQsXFxyXFxuYTpudGgtY2hpbGQoMyk6aG92ZXIgfiAuYW5pbWF0aW9uIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGxlZnQ6IDIyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1IZWFkZXIgRW5kPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1OYXZpZ2F0aW9uIFN0YXJ0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLm5hdmlnYXRpb24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU5hdmlnYXRpb24gRW5kPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NYWluLVdyYXBwZXIgU3RhcnQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi5tYWluLXdyYXBwZXIge1xcclxcbiAgcGFkZGluZy10b3A6IDZyZW07IC8qIGNoYW5nZSB0byA1cmVtICovXFxyXFxuICBtaW4taGVpZ2h0OiAzMHJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1kYXRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgcGFkZGluZzogNXB4IDQ1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDM1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDM1cHggNjVweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NYWluLVdyYXBwZXIgRW5kPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1TY29yZXMtQ29sbGVjdGlvbi1TZWN0aW9uIFN0YXJ0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4udGl0bGUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWNvbGxlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ19jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtY29sbGVjdGlvbiAudGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnX2NvbG9yKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtaXRlbTpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWluZm8gaDIsXFxyXFxuaDMge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1TY29yZXMtQ29sbGVjdGlvbi1TZWN0aW9uIEVuZD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09U2NvcmVzLUZvcm0tU2VjdGlvbiBTdGFydD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLnNjb3Jlcy1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnX2NvbG9yKTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1mb3JtIC50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV1dHJhbCk7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAyNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzVweCAxNXB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1saXN0IGxpIGlucHV0IHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgd2lkdGg6IDI1cmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9ybWFsLWJ0biB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIG1pbi13aWR0aDogNDVweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub3JtYWwtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWJnX2NvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09U2NvcmVzLUZvcm0tU2VjdGlvbiBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1Db250YWN0LVNlY3Rpb24gU3RhcnQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uY29udGFjdC11cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnX2NvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtdXMgLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbmZvIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUNvbnRhY3QtU2VjdGlvbiBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUZvb3Rlci1TZWN0aW9uIFN0YXJ0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tb3Blbi1zYW5zKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIG1pbi1oZWlnaHQ6IGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDM1cHggNjVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5zb2NpYWwtaWNvbnMsXFxyXFxuZm9vdGVyIC5tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLnNvY2lhbC1pY29ucyBsaSxcXHJcXG5mb290ZXIgLm1lbnUgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5zb2NpYWwtaWNvbnMgbGkgYSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsKTtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gIG9wYWNpdHk6IDAuNzU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAubWVudSBsaSBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbCk7XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDAuNzU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuc29jaWFsLWljb25zIGxpIGE6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAubWVudSBsaSBhOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsKTtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxvZ28gaW1nIHtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG4gIGhlaWdodDogNzFweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1Gb290ZXItU2VjdGlvbiBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1lZGlhIFF1ZXJ5IFN0YXJ0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqKioqKiogIFNlY29uZCBCcmVha3BvaW50ICAqKioqKioqL1xcclxcbkBtZWRpYSBzY3JlZW5cXHJcXG4gIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1haW4tY29udGVudCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBwYWRkaW5nOiAzNXB4IDY1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1saXN0IGxpIGlucHV0IHtcXHJcXG4gICAgbWluLXdpZHRoOiAxNXJlbTtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1lZGlhIFF1ZXJ5IEVuZD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNv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QXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7RUFDaEI7QUFDRjs7QUFFQSw4RkFBOEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogSW1wb3J0aW5nIHRoZSBcXFwibm9ybWFsaXplLmNzc1xcXCIgZmlsZSB3aGljaCBpcyBmb3IgcmVzZXR0aW5nIGFsbCB0aGUgZGVmYXVsdCBjc3MgdmFsdWVzICovXFxyXFxuQGltcG9ydCB1cmwoXFxcIi4vbm9ybWFsaXplLmNzc1xcXCIpO1xcclxcblxcclxcbi8qIEltcG9ydGluZyBGb250cyAqL1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJyk7XFxyXFxuXFxyXFxuLyogKioqKioqTWFpbiAmIFNlY29uZGFyeSBDb2xvcnMqKioqKiogKi9cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJnX2NvbG9yOiAjZmZmO1xcclxcbiAgLS1wcmltYXJ5OiAjMmMzZTUwO1xcclxcbiAgLS1wcmltYXJ5X2xpZ2h0OiAjMzQ0OTVlO1xcclxcbiAgLS1zZWNvbmRhcnk6ICNlYzUyNDI7XFxyXFxuICAtLW5ldXRyYWw6ICNkM2QzZDM7XFxyXFxuICAtLXZlcmRhbmE6IHZlcmRhbmEsIHRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tVGFob21hOiB0YWhvbWEsIHZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAtLXNhbnMtc2VyaWY6IHNhbnMtc2VyaWYsIHZlcmRhbmEsIHRhaG9tYTtcXHJcXG4gIC0tb3Blbi1zYW5zOiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogKioqKioqKioqKkdsb2JhbCBDbGFzc2VzKioqKioqKioqKiAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW4tc2Fucyk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi51bmRlcmxpbmUge1xcclxcbiAgaGVpZ2h0OiAyLjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDEsXFxyXFxuaDIsXFxyXFxuaDMge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUhlYWRlciBTdGFydD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgcGFkZGluZzogNXB4IDQ1cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbG9nbyBpbWcge1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgaGVpZ2h0OiA3MXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVza3RvcC1tZW51IG5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlfbGlnaHQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kZXNrdG9wLW1lbnUgbmF2IGEge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbCk7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLmFuaW1hdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMWFiYzljO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbm5hdiBhOm50aC1jaGlsZCgxKSB7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAuc3RhcnQtaG9tZSxcXHJcXG5hOm50aC1jaGlsZCgxKTpob3ZlciB+IC5hbmltYXRpb24ge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGE6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5zdGFydC1jb250YWN0LFxcclxcbmE6bnRoLWNoaWxkKDIpOmhvdmVyIH4gLmFuaW1hdGlvbiB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBsZWZ0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGE6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5zdGFydC1hYm91dCxcXHJcXG5hOm50aC1jaGlsZCgzKTpob3ZlciB+IC5hbmltYXRpb24ge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgbGVmdDogMjIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUhlYWRlciBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU5hdmlnYXRpb24gU3RhcnQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4ubmF2aWdhdGlvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TmF2aWdhdGlvbiBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1haW4tV3JhcHBlciBTdGFydD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLm1haW4td3JhcHBlciB7XFxyXFxuICBwYWRkaW5nLXRvcDogNnJlbTsgLyogY2hhbmdlIHRvIDVyZW0gKi9cXHJcXG4gIG1pbi1oZWlnaHQ6IDMwcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWRhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBwYWRkaW5nOiA1cHggNDVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMzVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzVweCA2NXB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1haW4tV3JhcHBlciBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNjb3Jlcy1Db2xsZWN0aW9uLVNlY3Rpb24gU3RhcnQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi50aXRsZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtY29sbGVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnX2NvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1jb2xsZWN0aW9uIC50aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdfY29sb3IpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zY29yZS1pdGVtOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtaW5mbyBoMixcXHJcXG5oMyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNjb3Jlcy1Db2xsZWN0aW9uLVNlY3Rpb24gRW5kPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1TY29yZXMtRm9ybS1TZWN0aW9uIFN0YXJ0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uc2NvcmVzLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdfY29sb3IpO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWZvcm0gLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsKTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDI1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzNXB4IDE1cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWxpc3QgbGkgaW5wdXQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICB3aWR0aDogMjVyZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5ub3JtYWwtYnRuIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcclxcbiAgbWluLXdpZHRoOiA0NXB4O1xcclxcbiAgbWluLWhlaWdodDogMzBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tYmdfY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1TY29yZXMtRm9ybS1TZWN0aW9uIEVuZD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUNvbnRhY3QtU2VjdGlvbiBTdGFydD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi5jb250YWN0LXVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdfY29sb3IpO1xcclxcbiAgcGFkZGluZzogMjBweCA2NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC11cyAudGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWluZm8ge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Q29udGFjdC1TZWN0aW9uIEVuZD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Rm9vdGVyLVNlY3Rpb24gU3RhcnQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1vcGVuLXNhbnMpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgbWluLWhlaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMzVweCA2NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLnNvY2lhbC1pY29ucyxcXHJcXG5mb290ZXIgLm1lbnUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuc29jaWFsLWljb25zIGxpLFxcclxcbmZvb3RlciAubWVudSBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLnNvY2lhbC1pY29ucyBsaSBhIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwpO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgb3BhY2l0eTogMC43NTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5tZW51IGxpIGEge1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsKTtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgb3BhY2l0eTogMC43NTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5zb2NpYWwtaWNvbnMgbGkgYTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5tZW51IGxpIGE6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwpO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbG9nbyBpbWcge1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgaGVpZ2h0OiA3MXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUZvb3Rlci1TZWN0aW9uIEVuZD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TWVkaWEgUXVlcnkgU3RhcnQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKioqKioqKiAgU2Vjb25kIEJyZWFrcG9pbnQgICoqKioqKiovXFxyXFxuQG1lZGlhIHNjcmVlblxcclxcbiAgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWFpbi1jb250ZW50IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIHBhZGRpbmc6IDM1cHggNjVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWxpc3QgbGkgaW5wdXQge1xcclxcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGhlaWdodDogMi41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TWVkaWEgUXVlcnkgRW5kPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4vYXNzZXRzL2ltZy9sb2dvLnBuZyc7XHJcbmltcG9ydCB7IGRpc3BsYXlEYXRlLCBhZGRTY29yZSwgcmVmcmVzaFNjb3JlcyB9IGZyb20gJy4vbW9kdWxlcy91dGlscy5qcyc7XHJcblxyXG4vLyogKioqKioqKioqU2V0dGluZyBBZGQmUmVmcmVzaCBDbGljayBMaXN0ZW5lcnMqKioqKioqKioqKiovL1xyXG5jb25zdCBhZGRTY29yZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRfc2NvcmVfYnRuJyk7XHJcbmFkZFNjb3JlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkU2NvcmUpO1xyXG5jb25zdCByZWZyZXNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZnJlc2hfYnRuJyk7XHJcbnJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWZyZXNoU2NvcmVzKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgLy8gU2V0dGluZyBIZWFkZXIgJiBGb290ZXIgbG9nb3NcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyX2xvZ28nKS5zcmMgPSBMb2dvO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXJfbG9nbycpLnNyYyA9IExvZ287XHJcbiAgLy8gU2V0dGluZyB0aGUgZGF0ZVxyXG4gIGRpc3BsYXlEYXRlKCk7XHJcbiAgLy8gRmV0Y2hpbmcgc2NvcmVzIGZyb20gdGhlIGFwaVxyXG4gIHJlZnJlc2hTY29yZXMoKTtcclxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5cclxuLy8gdGhlc2UgYXJlbid0IHJlYWxseSBwcml2YXRlLCBidXQgbm9yIGFyZSB0aGV5IHJlYWxseSB1c2VmdWwgdG8gZG9jdW1lbnRcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuY2xhc3MgTHV4b25FcnJvciBleHRlbmRzIEVycm9yIHt9XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuY2xhc3MgSW52YWxpZERhdGVUaW1lRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcclxuICBjb25zdHJ1Y3RvcihyZWFzb24pIHtcclxuICAgIHN1cGVyKGBJbnZhbGlkIERhdGVUaW1lOiAke3JlYXNvbi50b01lc3NhZ2UoKX1gKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5jbGFzcyBJbnZhbGlkSW50ZXJ2YWxFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKHJlYXNvbikge1xyXG4gICAgc3VwZXIoYEludmFsaWQgSW50ZXJ2YWw6ICR7cmVhc29uLnRvTWVzc2FnZSgpfWApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcbmNsYXNzIEludmFsaWREdXJhdGlvbkVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XHJcbiAgY29uc3RydWN0b3IocmVhc29uKSB7XHJcbiAgICBzdXBlcihgSW52YWxpZCBEdXJhdGlvbjogJHtyZWFzb24udG9NZXNzYWdlKCl9YCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuY2xhc3MgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHt9XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuY2xhc3MgSW52YWxpZFVuaXRFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKHVuaXQpIHtcclxuICAgIHN1cGVyKGBJbnZhbGlkIHVuaXQgJHt1bml0fWApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcbmNsYXNzIEludmFsaWRBcmd1bWVudEVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7fVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcbmNsYXNzIFpvbmVJc0Fic3RyYWN0RXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdab25lIGlzIGFuIGFic3RyYWN0IGNsYXNzJyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuXHJcbmNvbnN0IG4gPSAnbnVtZXJpYyc7XHJcbmNvbnN0IHMgPSAnc2hvcnQnO1xyXG5jb25zdCBsID0gJ2xvbmcnO1xyXG5cclxuY29uc3QgREFURV9TSE9SVCA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBuLFxyXG4gIGRheTogbixcclxufTtcclxuXHJcbmNvbnN0IERBVEVfTUVEID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IHMsXHJcbiAgZGF5OiBuLFxyXG59O1xyXG5cclxuY29uc3QgREFURV9NRURfV0lUSF9XRUVLREFZID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IHMsXHJcbiAgZGF5OiBuLFxyXG4gIHdlZWtkYXk6IHMsXHJcbn07XHJcblxyXG5jb25zdCBEQVRFX0ZVTEwgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogbCxcclxuICBkYXk6IG4sXHJcbn07XHJcblxyXG5jb25zdCBEQVRFX0hVR0UgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogbCxcclxuICBkYXk6IG4sXHJcbiAgd2Vla2RheTogbCxcclxufTtcclxuXHJcbmNvbnN0IFRJTUVfU0lNUExFID0ge1xyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG59O1xyXG5cclxuY29uc3QgVElNRV9XSVRIX1NFQ09ORFMgPSB7XHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbiAgc2Vjb25kOiBuLFxyXG59O1xyXG5cclxuY29uc3QgVElNRV9XSVRIX1NIT1JUX09GRlNFVCA9IHtcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxuICBzZWNvbmQ6IG4sXHJcbiAgdGltZVpvbmVOYW1lOiBzLFxyXG59O1xyXG5cclxuY29uc3QgVElNRV9XSVRIX0xPTkdfT0ZGU0VUID0ge1xyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG4gIHNlY29uZDogbixcclxuICB0aW1lWm9uZU5hbWU6IGwsXHJcbn07XHJcblxyXG5jb25zdCBUSU1FXzI0X1NJTVBMRSA9IHtcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxuICBob3VyQ3ljbGU6ICdoMjMnLFxyXG59O1xyXG5cclxuY29uc3QgVElNRV8yNF9XSVRIX1NFQ09ORFMgPSB7XHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbiAgc2Vjb25kOiBuLFxyXG4gIGhvdXJDeWNsZTogJ2gyMycsXHJcbn07XHJcblxyXG5jb25zdCBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG4gIHNlY29uZDogbixcclxuICBob3VyQ3ljbGU6ICdoMjMnLFxyXG4gIHRpbWVab25lTmFtZTogcyxcclxufTtcclxuXHJcbmNvbnN0IFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCA9IHtcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxuICBzZWNvbmQ6IG4sXHJcbiAgaG91ckN5Y2xlOiAnaDIzJyxcclxuICB0aW1lWm9uZU5hbWU6IGwsXHJcbn07XHJcblxyXG5jb25zdCBEQVRFVElNRV9TSE9SVCA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBuLFxyXG4gIGRheTogbixcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxufTtcclxuXHJcbmNvbnN0IERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBuLFxyXG4gIGRheTogbixcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxuICBzZWNvbmQ6IG4sXHJcbn07XHJcblxyXG5jb25zdCBEQVRFVElNRV9NRUQgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogcyxcclxuICBkYXk6IG4sXHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbn07XHJcblxyXG5jb25zdCBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IHMsXHJcbiAgZGF5OiBuLFxyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG4gIHNlY29uZDogbixcclxufTtcclxuXHJcbmNvbnN0IERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogcyxcclxuICBkYXk6IG4sXHJcbiAgd2Vla2RheTogcyxcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxufTtcclxuXHJcbmNvbnN0IERBVEVUSU1FX0ZVTEwgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogbCxcclxuICBkYXk6IG4sXHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbiAgdGltZVpvbmVOYW1lOiBzLFxyXG59O1xyXG5cclxuY29uc3QgREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogbCxcclxuICBkYXk6IG4sXHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbiAgc2Vjb25kOiBuLFxyXG4gIHRpbWVab25lTmFtZTogcyxcclxufTtcclxuXHJcbmNvbnN0IERBVEVUSU1FX0hVR0UgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogbCxcclxuICBkYXk6IG4sXHJcbiAgd2Vla2RheTogbCxcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxuICB0aW1lWm9uZU5hbWU6IGwsXHJcbn07XHJcblxyXG5jb25zdCBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBsLFxyXG4gIGRheTogbixcclxuICB3ZWVrZGF5OiBsLFxyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG4gIHNlY29uZDogbixcclxuICB0aW1lWm9uZU5hbWU6IGwsXHJcbn07XHJcblxyXG4vKlxyXG4gICBUaGlzIGlzIGp1c3QgYSBqdW5rIGRyYXdlciwgY29udGFpbmluZyBhbnl0aGluZyB1c2VkIGFjcm9zcyBtdWx0aXBsZSBjbGFzc2VzLlxyXG4gICBCZWNhdXNlIEx1eG9uIGlzIHNtYWxsKGlzaCksIHRoaXMgc2hvdWxkIHN0YXkgc21hbGwgYW5kIHdlIHdvbid0IHdvcnJ5IGFib3V0IHNwbGl0dGluZ1xyXG4gICBpdCB1cCBpbnRvLCBzYXksIHBhcnNpbmdVdGlsLmpzIGFuZCBiYXNpY1V0aWwuanMgYW5kIHNvIG9uLiBCdXQgdGhleSBhcmUgZGl2aWRlZCB1cCBieSBmZWF0dXJlIGFyZWEuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcblxyXG4vLyBUWVBFU1xyXG5cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQobykge1xyXG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyKG8pIHtcclxuICByZXR1cm4gdHlwZW9mIG8gPT09ICdudW1iZXInO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0ludGVnZXIobykge1xyXG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ251bWJlcicgJiYgbyAlIDEgPT09IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyaW5nKG8pIHtcclxuICByZXR1cm4gdHlwZW9mIG8gPT09ICdzdHJpbmcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RhdGUobykge1xyXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IERhdGVdJztcclxufVxyXG5cclxuLy8gQ0FQQUJJTElUSUVTXHJcblxyXG5mdW5jdGlvbiBoYXNSZWxhdGl2ZSgpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBJbnRsICE9PSAndW5kZWZpbmVkJyAmJiAhIUludGwuUmVsYXRpdmVUaW1lRm9ybWF0O1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE9CSkVDVFMgQU5EIEFSUkFZU1xyXG5cclxuZnVuY3Rpb24gbWF5YmVBcnJheSh0aGluZykge1xyXG4gIHJldHVybiBBcnJheS5pc0FycmF5KHRoaW5nKSA/IHRoaW5nIDogW3RoaW5nXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmVzdEJ5KGFyciwgYnksIGNvbXBhcmUpIHtcclxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbiAgcmV0dXJuIGFyci5yZWR1Y2UoKGJlc3QsIG5leHQpID0+IHtcclxuICAgIGNvbnN0IHBhaXIgPSBbYnkobmV4dCksIG5leHRdO1xyXG4gICAgaWYgKCFiZXN0KSB7XHJcbiAgICAgIHJldHVybiBwYWlyO1xyXG4gICAgfSBpZiAoY29tcGFyZShiZXN0WzBdLCBwYWlyWzBdKSA9PT0gYmVzdFswXSkge1xyXG4gICAgICByZXR1cm4gYmVzdDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWlyO1xyXG4gIH0sIG51bGwpWzFdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwaWNrKG9iaiwga2V5cykge1xyXG4gIHJldHVybiBrZXlzLnJlZHVjZSgoYSwgaykgPT4ge1xyXG4gICAgYVtrXSA9IG9ialtrXTtcclxuICAgIHJldHVybiBhO1xyXG4gIH0sIHt9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xyXG59XHJcblxyXG4vLyBOVU1CRVJTIEFORCBTVFJJTkdTXHJcblxyXG5mdW5jdGlvbiBpbnRlZ2VyQmV0d2Vlbih0aGluZywgYm90dG9tLCB0b3ApIHtcclxuICByZXR1cm4gaXNJbnRlZ2VyKHRoaW5nKSAmJiB0aGluZyA+PSBib3R0b20gJiYgdGhpbmcgPD0gdG9wO1xyXG59XHJcblxyXG4vLyB4ICUgbiBidXQgdGFrZXMgdGhlIHNpZ24gb2YgbiBpbnN0ZWFkIG9mIHhcclxuZnVuY3Rpb24gZmxvb3JNb2QoeCwgbikge1xyXG4gIHJldHVybiB4IC0gbiAqIE1hdGguZmxvb3IoeCAvIG4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYWRTdGFydChpbnB1dCwgbiA9IDIpIHtcclxuICBjb25zdCBpc05lZyA9IGlucHV0IDwgMDtcclxuICBsZXQgcGFkZGVkO1xyXG4gIGlmIChpc05lZykge1xyXG4gICAgcGFkZGVkID0gYC0keyhgJHstaW5wdXR9YCkucGFkU3RhcnQobiwgJzAnKX1gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYWRkZWQgPSAoYCR7aW5wdXR9YCkucGFkU3RhcnQobiwgJzAnKTtcclxuICB9XHJcbiAgcmV0dXJuIHBhZGRlZDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VJbnRlZ2VyKHN0cmluZykge1xyXG4gIGlmIChpc1VuZGVmaW5lZChzdHJpbmcpIHx8IHN0cmluZyA9PT0gbnVsbCB8fCBzdHJpbmcgPT09ICcnKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuICByZXR1cm4gcGFyc2VJbnQoc3RyaW5nLCAxMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlRmxvYXRpbmcoc3RyaW5nKSB7XHJcbiAgaWYgKGlzVW5kZWZpbmVkKHN0cmluZykgfHwgc3RyaW5nID09PSBudWxsIHx8IHN0cmluZyA9PT0gJycpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIHJldHVybiBwYXJzZUZsb2F0KHN0cmluZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlTWlsbGlzKGZyYWN0aW9uKSB7XHJcbiAgLy8gUmV0dXJuIHVuZGVmaW5lZCAoaW5zdGVhZCBvZiAwKSBpbiB0aGVzZSBjYXNlcywgd2hlcmUgZnJhY3Rpb24gaXMgbm90IHNldFxyXG4gIGlmIChpc1VuZGVmaW5lZChmcmFjdGlvbikgfHwgZnJhY3Rpb24gPT09IG51bGwgfHwgZnJhY3Rpb24gPT09ICcnKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBjb25zdCBmID0gcGFyc2VGbG9hdChgMC4ke2ZyYWN0aW9ufWApICogMTAwMDtcclxuICByZXR1cm4gTWF0aC5mbG9vcihmKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcm91bmRUbyhudW1iZXIsIGRpZ2l0cywgdG93YXJkWmVybyA9IGZhbHNlKSB7XHJcbiAgY29uc3QgZmFjdG9yID0gMTAgKiogZGlnaXRzO1xyXG4gIGNvbnN0IHJvdW5kZXIgPSB0b3dhcmRaZXJvID8gTWF0aC50cnVuYyA6IE1hdGgucm91bmQ7XHJcbiAgcmV0dXJuIHJvdW5kZXIobnVtYmVyICogZmFjdG9yKSAvIGZhY3RvcjtcclxufVxyXG5cclxuLy8gREFURSBCQVNJQ1NcclxuXHJcbmZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xyXG4gIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiAoeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGF5c0luWWVhcih5ZWFyKSB7XHJcbiAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7XHJcbiAgY29uc3QgbW9kTW9udGggPSBmbG9vck1vZChtb250aCAtIDEsIDEyKSArIDE7XHJcbiAgY29uc3QgbW9kWWVhciA9IHllYXIgKyAobW9udGggLSBtb2RNb250aCkgLyAxMjtcclxuXHJcbiAgaWYgKG1vZE1vbnRoID09PSAyKSB7XHJcbiAgICByZXR1cm4gaXNMZWFwWWVhcihtb2RZZWFyKSA/IDI5IDogMjg7XHJcbiAgfVxyXG4gIHJldHVybiBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXVttb2RNb250aCAtIDFdO1xyXG59XHJcblxyXG4vLyBjb3ZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBsb2NhbCB0aW1lc3RhbXAgKGVwb2NoLCBidXQgd2l0aCB0aGUgb2Zmc2V0IGJha2VkIGluKVxyXG5mdW5jdGlvbiBvYmpUb0xvY2FsVFMob2JqKSB7XHJcbiAgbGV0IGQgPSBEYXRlLlVUQyhcclxuICAgIG9iai55ZWFyLFxyXG4gICAgb2JqLm1vbnRoIC0gMSxcclxuICAgIG9iai5kYXksXHJcbiAgICBvYmouaG91cixcclxuICAgIG9iai5taW51dGUsXHJcbiAgICBvYmouc2Vjb25kLFxyXG4gICAgb2JqLm1pbGxpc2Vjb25kLFxyXG4gICk7XHJcblxyXG4gIC8vIGZvciBsZWdhY3kgcmVhc29ucywgeWVhcnMgYmV0d2VlbiAwIGFuZCA5OSBhcmUgaW50ZXJwcmV0ZWQgYXMgMTlYWDsgcmV2ZXJ0IHRoYXRcclxuICBpZiAob2JqLnllYXIgPCAxMDAgJiYgb2JqLnllYXIgPj0gMCkge1xyXG4gICAgZCA9IG5ldyBEYXRlKGQpO1xyXG4gICAgZC5zZXRVVENGdWxsWWVhcihkLmdldFVUQ0Z1bGxZZWFyKCkgLSAxOTAwKTtcclxuICB9XHJcbiAgcmV0dXJuICtkO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3ZWVrc0luV2Vla1llYXIod2Vla1llYXIpIHtcclxuICBjb25zdCBwMSA9ICh3ZWVrWWVhclxyXG4gICAgICAgICArIE1hdGguZmxvb3Iod2Vla1llYXIgLyA0KVxyXG4gICAgICAgICAtIE1hdGguZmxvb3Iod2Vla1llYXIgLyAxMDApXHJcbiAgICAgICAgICsgTWF0aC5mbG9vcih3ZWVrWWVhciAvIDQwMCkpXHJcbiAgICAgICAlIDc7XHJcbiAgY29uc3QgbGFzdCA9IHdlZWtZZWFyIC0gMTtcclxuICBjb25zdCBwMiA9IChsYXN0ICsgTWF0aC5mbG9vcihsYXN0IC8gNCkgLSBNYXRoLmZsb29yKGxhc3QgLyAxMDApICsgTWF0aC5mbG9vcihsYXN0IC8gNDAwKSkgJSA3O1xyXG4gIHJldHVybiBwMSA9PT0gNCB8fCBwMiA9PT0gMyA/IDUzIDogNTI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVudHJ1bmNhdGVZZWFyKHllYXIpIHtcclxuICBpZiAoeWVhciA+IDk5KSB7XHJcbiAgICByZXR1cm4geWVhcjtcclxuICB9IHJldHVybiB5ZWFyID4gNjAgPyAxOTAwICsgeWVhciA6IDIwMDAgKyB5ZWFyO1xyXG59XHJcblxyXG4vLyBQQVJTSU5HXHJcblxyXG5mdW5jdGlvbiBwYXJzZVpvbmVJbmZvKHRzLCBvZmZzZXRGb3JtYXQsIGxvY2FsZSwgdGltZVpvbmUgPSBudWxsKSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRzKTtcclxuICBjb25zdCBpbnRsT3B0cyA9IHtcclxuICAgIGhvdXJDeWNsZTogJ2gyMycsXHJcbiAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICBtb250aDogJzItZGlnaXQnLFxyXG4gICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICB9O1xyXG5cclxuICBpZiAodGltZVpvbmUpIHtcclxuICAgIGludGxPcHRzLnRpbWVab25lID0gdGltZVpvbmU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb2RpZmllZCA9IHsgdGltZVpvbmVOYW1lOiBvZmZzZXRGb3JtYXQsIC4uLmludGxPcHRzIH07XHJcblxyXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgbW9kaWZpZWQpXHJcbiAgICAuZm9ybWF0VG9QYXJ0cyhkYXRlKVxyXG4gICAgLmZpbmQoKG0pID0+IG0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAndGltZXpvbmVuYW1lJyk7XHJcbiAgcmV0dXJuIHBhcnNlZCA/IHBhcnNlZC52YWx1ZSA6IG51bGw7XHJcbn1cclxuXHJcbi8vIHNpZ25lZE9mZnNldCgnLTUnLCAnMzAnKSAtPiAtMzMwXHJcbmZ1bmN0aW9uIHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpIHtcclxuICBsZXQgb2ZmSG91ciA9IHBhcnNlSW50KG9mZkhvdXJTdHIsIDEwKTtcclxuXHJcbiAgLy8gZG9uJ3QgfHwgdGhpcyBiZWNhdXNlIHdlIHdhbnQgdG8gcHJlc2VydmUgLTBcclxuICBpZiAoTnVtYmVyLmlzTmFOKG9mZkhvdXIpKSB7XHJcbiAgICBvZmZIb3VyID0gMDtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9mZk1pbiA9IHBhcnNlSW50KG9mZk1pbnV0ZVN0ciwgMTApIHx8IDA7XHJcbiAgY29uc3Qgb2ZmTWluU2lnbmVkID0gb2ZmSG91ciA8IDAgfHwgT2JqZWN0LmlzKG9mZkhvdXIsIC0wKSA/IC1vZmZNaW4gOiBvZmZNaW47XHJcbiAgcmV0dXJuIG9mZkhvdXIgKiA2MCArIG9mZk1pblNpZ25lZDtcclxufVxyXG5cclxuLy8gQ09FUkNJT05cclxuXHJcbmZ1bmN0aW9uIGFzTnVtYmVyKHZhbHVlKSB7XHJcbiAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdmFsdWUgPT09ICcnIHx8IE51bWJlci5pc05hTihudW1lcmljVmFsdWUpKSB7IHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihgSW52YWxpZCB1bml0IHZhbHVlICR7dmFsdWV9YCk7IH1cclxuICByZXR1cm4gbnVtZXJpY1ZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVPYmplY3Qob2JqLCBub3JtYWxpemVyKSB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHt9O1xyXG4gIGZvciAoY29uc3QgdSBpbiBvYmopIHtcclxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eShvYmosIHUpKSB7XHJcbiAgICAgIGNvbnN0IHYgPSBvYmpbdV07XHJcbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkgY29udGludWU7XHJcbiAgICAgIG5vcm1hbGl6ZWRbbm9ybWFsaXplcih1KV0gPSBhc051bWJlcih2KTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE9mZnNldChvZmZzZXQsIGZvcm1hdCkge1xyXG4gIGNvbnN0IGhvdXJzID0gTWF0aC50cnVuYyhNYXRoLmFicyhvZmZzZXQgLyA2MCkpO1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLnRydW5jKE1hdGguYWJzKG9mZnNldCAlIDYwKSk7XHJcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+PSAwID8gJysnIDogJy0nO1xyXG5cclxuICBzd2l0Y2ggKGZvcm1hdCkge1xyXG4gICAgY2FzZSAnc2hvcnQnOlxyXG4gICAgICByZXR1cm4gYCR7c2lnbn0ke3BhZFN0YXJ0KGhvdXJzLCAyKX06JHtwYWRTdGFydChtaW51dGVzLCAyKX1gO1xyXG4gICAgY2FzZSAnbmFycm93JzpcclxuICAgICAgcmV0dXJuIGAke3NpZ259JHtob3Vyc30ke21pbnV0ZXMgPiAwID8gYDoke21pbnV0ZXN9YCA6ICcnfWA7XHJcbiAgICBjYXNlICd0ZWNoaWUnOlxyXG4gICAgICByZXR1cm4gYCR7c2lnbn0ke3BhZFN0YXJ0KGhvdXJzLCAyKX0ke3BhZFN0YXJ0KG1pbnV0ZXMsIDIpfWA7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVmFsdWUgZm9ybWF0ICR7Zm9ybWF0fSBpcyBvdXQgb2YgcmFuZ2UgZm9yIHByb3BlcnR5IGZvcm1hdGApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdGltZU9iamVjdChvYmopIHtcclxuICByZXR1cm4gcGljayhvYmosIFsnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgJ21pbGxpc2Vjb25kJ10pO1xyXG59XHJcblxyXG5jb25zdCBpYW5hUmVnZXggPSAvW0EtWmEtel8rLV17MSwyNTZ9KD86Oj9cXC9bQS1aYS16MC05XystXXsxLDI1Nn0oPzpcXC9bQS1aYS16MC05XystXXsxLDI1Nn0pPyk/LztcclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5cclxuY29uc3QgbW9udGhzTG9uZyA9IFtcclxuICAnSmFudWFyeScsXHJcbiAgJ0ZlYnJ1YXJ5JyxcclxuICAnTWFyY2gnLFxyXG4gICdBcHJpbCcsXHJcbiAgJ01heScsXHJcbiAgJ0p1bmUnLFxyXG4gICdKdWx5JyxcclxuICAnQXVndXN0JyxcclxuICAnU2VwdGVtYmVyJyxcclxuICAnT2N0b2JlcicsXHJcbiAgJ05vdmVtYmVyJyxcclxuICAnRGVjZW1iZXInLFxyXG5dO1xyXG5cclxuY29uc3QgbW9udGhzU2hvcnQgPSBbXHJcbiAgJ0phbicsXHJcbiAgJ0ZlYicsXHJcbiAgJ01hcicsXHJcbiAgJ0FwcicsXHJcbiAgJ01heScsXHJcbiAgJ0p1bicsXHJcbiAgJ0p1bCcsXHJcbiAgJ0F1ZycsXHJcbiAgJ1NlcCcsXHJcbiAgJ09jdCcsXHJcbiAgJ05vdicsXHJcbiAgJ0RlYycsXHJcbl07XHJcblxyXG5jb25zdCBtb250aHNOYXJyb3cgPSBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ107XHJcblxyXG5mdW5jdGlvbiBtb250aHMobGVuZ3RoKSB7XHJcbiAgc3dpdGNoIChsZW5ndGgpIHtcclxuICAgIGNhc2UgJ25hcnJvdyc6XHJcbiAgICAgIHJldHVybiBbLi4ubW9udGhzTmFycm93XTtcclxuICAgIGNhc2UgJ3Nob3J0JzpcclxuICAgICAgcmV0dXJuIFsuLi5tb250aHNTaG9ydF07XHJcbiAgICBjYXNlICdsb25nJzpcclxuICAgICAgcmV0dXJuIFsuLi5tb250aHNMb25nXTtcclxuICAgIGNhc2UgJ251bWVyaWMnOlxyXG4gICAgICByZXR1cm4gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMiddO1xyXG4gICAgY2FzZSAnMi1kaWdpdCc6XHJcbiAgICAgIHJldHVybiBbJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJ107XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHdlZWtkYXlzTG9uZyA9IFtcclxuICAnTW9uZGF5JyxcclxuICAnVHVlc2RheScsXHJcbiAgJ1dlZG5lc2RheScsXHJcbiAgJ1RodXJzZGF5JyxcclxuICAnRnJpZGF5JyxcclxuICAnU2F0dXJkYXknLFxyXG4gICdTdW5kYXknLFxyXG5dO1xyXG5cclxuY29uc3Qgd2Vla2RheXNTaG9ydCA9IFsnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnLCAnU3VuJ107XHJcblxyXG5jb25zdCB3ZWVrZGF5c05hcnJvdyA9IFsnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnLCAnUyddO1xyXG5cclxuZnVuY3Rpb24gd2Vla2RheXMobGVuZ3RoKSB7XHJcbiAgc3dpdGNoIChsZW5ndGgpIHtcclxuICAgIGNhc2UgJ25hcnJvdyc6XHJcbiAgICAgIHJldHVybiBbLi4ud2Vla2RheXNOYXJyb3ddO1xyXG4gICAgY2FzZSAnc2hvcnQnOlxyXG4gICAgICByZXR1cm4gWy4uLndlZWtkYXlzU2hvcnRdO1xyXG4gICAgY2FzZSAnbG9uZyc6XHJcbiAgICAgIHJldHVybiBbLi4ud2Vla2RheXNMb25nXTtcclxuICAgIGNhc2UgJ251bWVyaWMnOlxyXG4gICAgICByZXR1cm4gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3J107XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1lcmlkaWVtcyA9IFsnQU0nLCAnUE0nXTtcclxuXHJcbmNvbnN0IGVyYXNMb25nID0gWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ107XHJcblxyXG5jb25zdCBlcmFzU2hvcnQgPSBbJ0JDJywgJ0FEJ107XHJcblxyXG5jb25zdCBlcmFzTmFycm93ID0gWydCJywgJ0EnXTtcclxuXHJcbmZ1bmN0aW9uIGVyYXMobGVuZ3RoKSB7XHJcbiAgc3dpdGNoIChsZW5ndGgpIHtcclxuICAgIGNhc2UgJ25hcnJvdyc6XHJcbiAgICAgIHJldHVybiBbLi4uZXJhc05hcnJvd107XHJcbiAgICBjYXNlICdzaG9ydCc6XHJcbiAgICAgIHJldHVybiBbLi4uZXJhc1Nob3J0XTtcclxuICAgIGNhc2UgJ2xvbmcnOlxyXG4gICAgICByZXR1cm4gWy4uLmVyYXNMb25nXTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWVyaWRpZW1Gb3JEYXRlVGltZShkdCkge1xyXG4gIHJldHVybiBtZXJpZGllbXNbZHQuaG91ciA8IDEyID8gMCA6IDFdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3ZWVrZGF5Rm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xyXG4gIHJldHVybiB3ZWVrZGF5cyhsZW5ndGgpW2R0LndlZWtkYXkgLSAxXTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XHJcbiAgcmV0dXJuIG1vbnRocyhsZW5ndGgpW2R0Lm1vbnRoIC0gMV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVyYUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcclxuICByZXR1cm4gZXJhcyhsZW5ndGgpW2R0LnllYXIgPCAwID8gMCA6IDFdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZVRpbWUodW5pdCwgY291bnQsIG51bWVyaWMgPSAnYWx3YXlzJywgbmFycm93ID0gZmFsc2UpIHtcclxuICBjb25zdCB1bml0cyA9IHtcclxuICAgIHllYXJzOiBbJ3llYXInLCAneXIuJ10sXHJcbiAgICBxdWFydGVyczogWydxdWFydGVyJywgJ3F0ci4nXSxcclxuICAgIG1vbnRoczogWydtb250aCcsICdtby4nXSxcclxuICAgIHdlZWtzOiBbJ3dlZWsnLCAnd2suJ10sXHJcbiAgICBkYXlzOiBbJ2RheScsICdkYXknLCAnZGF5cyddLFxyXG4gICAgaG91cnM6IFsnaG91cicsICdoci4nXSxcclxuICAgIG1pbnV0ZXM6IFsnbWludXRlJywgJ21pbi4nXSxcclxuICAgIHNlY29uZHM6IFsnc2Vjb25kJywgJ3NlYy4nXSxcclxuICB9O1xyXG5cclxuICBjb25zdCBsYXN0YWJsZSA9IFsnaG91cnMnLCAnbWludXRlcycsICdzZWNvbmRzJ10uaW5kZXhPZih1bml0KSA9PT0gLTE7XHJcblxyXG4gIGlmIChudW1lcmljID09PSAnYXV0bycgJiYgbGFzdGFibGUpIHtcclxuICAgIGNvbnN0IGlzRGF5ID0gdW5pdCA9PT0gJ2RheXMnO1xyXG4gICAgc3dpdGNoIChjb3VudCkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gJ3RvbW9ycm93JyA6IGBuZXh0ICR7dW5pdHNbdW5pdF1bMF19YDtcclxuICAgICAgY2FzZSAtMTpcclxuICAgICAgICByZXR1cm4gaXNEYXkgPyAneWVzdGVyZGF5JyA6IGBsYXN0ICR7dW5pdHNbdW5pdF1bMF19YDtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHJldHVybiBpc0RheSA/ICd0b2RheScgOiBgdGhpcyAke3VuaXRzW3VuaXRdWzBdfWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpc0luUGFzdCA9IE9iamVjdC5pcyhjb3VudCwgLTApIHx8IGNvdW50IDwgMDtcclxuICBjb25zdCBmbXRWYWx1ZSA9IE1hdGguYWJzKGNvdW50KTtcclxuICBjb25zdCBzaW5ndWxhciA9IGZtdFZhbHVlID09PSAxO1xyXG4gIGNvbnN0IGxpbFVuaXRzID0gdW5pdHNbdW5pdF07XHJcbiAgY29uc3QgZm10VW5pdCA9IG5hcnJvd1xyXG4gICAgPyBzaW5ndWxhclxyXG4gICAgICA/IGxpbFVuaXRzWzFdXHJcbiAgICAgIDogbGlsVW5pdHNbMl0gfHwgbGlsVW5pdHNbMV1cclxuICAgIDogc2luZ3VsYXJcclxuICAgICAgPyB1bml0c1t1bml0XVswXVxyXG4gICAgICA6IHVuaXQ7XHJcbiAgcmV0dXJuIGlzSW5QYXN0ID8gYCR7Zm10VmFsdWV9ICR7Zm10VW5pdH0gYWdvYCA6IGBpbiAke2ZtdFZhbHVlfSAke2ZtdFVuaXR9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaW5naWZ5VG9rZW5zKHNwbGl0cywgdG9rZW5Ub1N0cmluZykge1xyXG4gIGxldCBzID0gJyc7XHJcbiAgZm9yIChjb25zdCB0b2tlbiBvZiBzcGxpdHMpIHtcclxuICAgIGlmICh0b2tlbi5saXRlcmFsKSB7XHJcbiAgICAgIHMgKz0gdG9rZW4udmFsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcyArPSB0b2tlblRvU3RyaW5nKHRva2VuLnZhbCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzO1xyXG59XHJcblxyXG5jb25zdCBtYWNyb1Rva2VuVG9Gb3JtYXRPcHRzID0ge1xyXG4gIEQ6IERBVEVfU0hPUlQsXHJcbiAgREQ6IERBVEVfTUVELFxyXG4gIERERDogREFURV9GVUxMLFxyXG4gIEREREQ6IERBVEVfSFVHRSxcclxuICB0OiBUSU1FX1NJTVBMRSxcclxuICB0dDogVElNRV9XSVRIX1NFQ09ORFMsXHJcbiAgdHR0OiBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VULFxyXG4gIHR0dHQ6IFRJTUVfV0lUSF9MT05HX09GRlNFVCxcclxuICBUOiBUSU1FXzI0X1NJTVBMRSxcclxuICBUVDogVElNRV8yNF9XSVRIX1NFQ09ORFMsXHJcbiAgVFRUOiBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VULFxyXG4gIFRUVFQ6IFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCxcclxuICBmOiBEQVRFVElNRV9TSE9SVCxcclxuICBmZjogREFURVRJTUVfTUVELFxyXG4gIGZmZjogREFURVRJTUVfRlVMTCxcclxuICBmZmZmOiBEQVRFVElNRV9IVUdFLFxyXG4gIEY6IERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyxcclxuICBGRjogREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyxcclxuICBGRkY6IERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTLFxyXG4gIEZGRkY6IERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTLFxyXG59O1xyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcblxyXG5jbGFzcyBGb3JtYXR0ZXIge1xyXG4gIHN0YXRpYyBjcmVhdGUobG9jYWxlLCBvcHRzID0ge30pIHtcclxuICAgIHJldHVybiBuZXcgRm9ybWF0dGVyKGxvY2FsZSwgb3B0cyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFyc2VGb3JtYXQoZm10KSB7XHJcbiAgICBsZXQgY3VycmVudCA9IG51bGw7XHJcbiAgICBsZXQgY3VycmVudEZ1bGwgPSAnJztcclxuICAgIGxldCBicmFja2V0ZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IHNwbGl0cyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgYyA9IGZtdC5jaGFyQXQoaSk7XHJcbiAgICAgIGlmIChjID09PSBcIidcIikge1xyXG4gICAgICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBzcGxpdHMucHVzaCh7IGxpdGVyYWw6IGJyYWNrZXRlZCwgdmFsOiBjdXJyZW50RnVsbCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgY3VycmVudEZ1bGwgPSAnJztcclxuICAgICAgICBicmFja2V0ZWQgPSAhYnJhY2tldGVkO1xyXG4gICAgICB9IGVsc2UgaWYgKGJyYWNrZXRlZCkge1xyXG4gICAgICAgIGN1cnJlbnRGdWxsICs9IGM7XHJcbiAgICAgIH0gZWxzZSBpZiAoYyA9PT0gY3VycmVudCkge1xyXG4gICAgICAgIGN1cnJlbnRGdWxsICs9IGM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRGdWxsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHNwbGl0cy5wdXNoKHsgbGl0ZXJhbDogZmFsc2UsIHZhbDogY3VycmVudEZ1bGwgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRGdWxsID0gYztcclxuICAgICAgICBjdXJyZW50ID0gYztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNwbGl0cy5wdXNoKHsgbGl0ZXJhbDogYnJhY2tldGVkLCB2YWw6IGN1cnJlbnRGdWxsIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzcGxpdHM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbWFjcm9Ub2tlblRvRm9ybWF0T3B0cyh0b2tlbikge1xyXG4gICAgcmV0dXJuIG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHNbdG9rZW5dO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IobG9jYWxlLCBmb3JtYXRPcHRzKSB7XHJcbiAgICB0aGlzLm9wdHMgPSBmb3JtYXRPcHRzO1xyXG4gICAgdGhpcy5sb2MgPSBsb2NhbGU7XHJcbiAgICB0aGlzLnN5c3RlbUxvYyA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRXaXRoU3lzdGVtRGVmYXVsdChkdCwgb3B0cykge1xyXG4gICAgaWYgKHRoaXMuc3lzdGVtTG9jID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc3lzdGVtTG9jID0gdGhpcy5sb2MucmVkZWZhdWx0VG9TeXN0ZW0oKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRmID0gdGhpcy5zeXN0ZW1Mb2MuZHRGb3JtYXR0ZXIoZHQsIHsgLi4udGhpcy5vcHRzLCAuLi5vcHRzIH0pO1xyXG4gICAgcmV0dXJuIGRmLmZvcm1hdCgpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0RGF0ZVRpbWUoZHQsIG9wdHMgPSB7fSkge1xyXG4gICAgY29uc3QgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgeyAuLi50aGlzLm9wdHMsIC4uLm9wdHMgfSk7XHJcbiAgICByZXR1cm4gZGYuZm9ybWF0KCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXREYXRlVGltZVBhcnRzKGR0LCBvcHRzID0ge30pIHtcclxuICAgIGNvbnN0IGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIHsgLi4udGhpcy5vcHRzLCAuLi5vcHRzIH0pO1xyXG4gICAgcmV0dXJuIGRmLmZvcm1hdFRvUGFydHMoKTtcclxuICB9XHJcblxyXG4gIHJlc29sdmVkT3B0aW9ucyhkdCwgb3B0cyA9IHt9KSB7XHJcbiAgICBjb25zdCBkZiA9IHRoaXMubG9jLmR0Rm9ybWF0dGVyKGR0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcclxuICAgIHJldHVybiBkZi5yZXNvbHZlZE9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIG51bShuLCBwID0gMCkge1xyXG4gICAgLy8gd2UgZ2V0IHNvbWUgcGVyZiBvdXQgb2YgZG9pbmcgdGhpcyBoZXJlLCBhbm5veWluZ2x5XHJcbiAgICBpZiAodGhpcy5vcHRzLmZvcmNlU2ltcGxlKSB7XHJcbiAgICAgIHJldHVybiBwYWRTdGFydChuLCBwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcHRzID0geyAuLi50aGlzLm9wdHMgfTtcclxuXHJcbiAgICBpZiAocCA+IDApIHtcclxuICAgICAgb3B0cy5wYWRUbyA9IHA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubG9jLm51bWJlckZvcm1hdHRlcihvcHRzKS5mb3JtYXQobik7XHJcbiAgfVxyXG5cclxuICBmb3JtYXREYXRlVGltZUZyb21TdHJpbmcoZHQsIGZtdCkge1xyXG4gICAgY29uc3Qga25vd25FbmdsaXNoID0gdGhpcy5sb2MubGlzdGluZ01vZGUoKSA9PT0gJ2VuJztcclxuICAgIGNvbnN0IHVzZURhdGVUaW1lRm9ybWF0dGVyID0gdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgJiYgdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgIT09ICdncmVnb3J5JztcclxuICAgIGNvbnN0IHN0cmluZyA9IChvcHRzLCBleHRyYWN0KSA9PiB0aGlzLmxvYy5leHRyYWN0KGR0LCBvcHRzLCBleHRyYWN0KTtcclxuICAgIGNvbnN0IGZvcm1hdE9mZnNldCA9IChvcHRzKSA9PiB7XHJcbiAgICAgIGlmIChkdC5pc09mZnNldEZpeGVkICYmIGR0Lm9mZnNldCA9PT0gMCAmJiBvcHRzLmFsbG93Wikge1xyXG4gICAgICAgIHJldHVybiAnWic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBkdC5pc1ZhbGlkID8gZHQuem9uZS5mb3JtYXRPZmZzZXQoZHQudHMsIG9wdHMuZm9ybWF0KSA6ICcnO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG1lcmlkaWVtID0gKCkgPT4gKGtub3duRW5nbGlzaFxyXG4gICAgICA/IG1lcmlkaWVtRm9yRGF0ZVRpbWUoZHQpXHJcbiAgICAgIDogc3RyaW5nKHsgaG91cjogJ251bWVyaWMnLCBob3VyQ3ljbGU6ICdoMTInIH0sICdkYXlwZXJpb2QnKSk7XHJcbiAgICBjb25zdCBtb250aCA9IChsZW5ndGgsIHN0YW5kYWxvbmUpID0+IChrbm93bkVuZ2xpc2hcclxuICAgICAgPyBtb250aEZvckRhdGVUaW1lKGR0LCBsZW5ndGgpXHJcbiAgICAgIDogc3RyaW5nKHN0YW5kYWxvbmUgPyB7IG1vbnRoOiBsZW5ndGggfSA6IHsgbW9udGg6IGxlbmd0aCwgZGF5OiAnbnVtZXJpYycgfSwgJ21vbnRoJykpO1xyXG4gICAgY29uc3Qgd2Vla2RheSA9IChsZW5ndGgsIHN0YW5kYWxvbmUpID0+IChrbm93bkVuZ2xpc2hcclxuICAgICAgPyB3ZWVrZGF5Rm9yRGF0ZVRpbWUoZHQsIGxlbmd0aClcclxuICAgICAgOiBzdHJpbmcoXHJcbiAgICAgICAgc3RhbmRhbG9uZSA/IHsgd2Vla2RheTogbGVuZ3RoIH0gOiB7IHdlZWtkYXk6IGxlbmd0aCwgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSxcclxuICAgICAgICAnd2Vla2RheScsXHJcbiAgICAgICkpO1xyXG4gICAgY29uc3QgbWF5YmVNYWNybyA9ICh0b2tlbikgPT4ge1xyXG4gICAgICBjb25zdCBmb3JtYXRPcHRzID0gRm9ybWF0dGVyLm1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4pO1xyXG4gICAgICBpZiAoZm9ybWF0T3B0cykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBmb3JtYXRPcHRzKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZXJhID0gKGxlbmd0aCkgPT4gKGtub3duRW5nbGlzaCA/IGVyYUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIDogc3RyaW5nKHsgZXJhOiBsZW5ndGggfSwgJ2VyYScpKTtcclxuICAgIGNvbnN0IHRva2VuVG9TdHJpbmcgPSAodG9rZW4pID0+IHtcclxuICAgICAgLy8gV2hlcmUgcG9zc2libGU6IGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL3RyYW5zbGF0aW9uL2RhdGUtdGltZS0xL2RhdGUtdGltZSNUT0MtU3RhbmRhbG9uZS12cy4tRm9ybWF0LVN0eWxlc1xyXG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XHJcbiAgICAgICAgLy8gbXNcclxuICAgICAgICBjYXNlICdTJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taWxsaXNlY29uZCk7XHJcbiAgICAgICAgY2FzZSAndSc6XHJcbiAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXHJcbiAgICAgICAgY2FzZSAnU1NTJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taWxsaXNlY29uZCwgMyk7XHJcbiAgICAgICAgICAvLyBzZWNvbmRzXHJcbiAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuc2Vjb25kKTtcclxuICAgICAgICBjYXNlICdzcyc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuc2Vjb25kLCAyKTtcclxuICAgICAgICAgIC8vIGZyYWN0aW9uYWwgc2Vjb25kc1xyXG4gICAgICAgIGNhc2UgJ3V1JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShNYXRoLmZsb29yKGR0Lm1pbGxpc2Vjb25kIC8gMTApLCAyKTtcclxuICAgICAgICBjYXNlICd1dXUnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKE1hdGguZmxvb3IoZHQubWlsbGlzZWNvbmQgLyAxMDApKTtcclxuICAgICAgICAgIC8vIG1pbnV0ZXNcclxuICAgICAgICBjYXNlICdtJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taW51dGUpO1xyXG4gICAgICAgIGNhc2UgJ21tJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taW51dGUsIDIpO1xyXG4gICAgICAgICAgLy8gaG91cnNcclxuICAgICAgICBjYXNlICdoJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5ob3VyICUgMTIgPT09IDAgPyAxMiA6IGR0LmhvdXIgJSAxMik7XHJcbiAgICAgICAgY2FzZSAnaGgnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIgJSAxMiA9PT0gMCA/IDEyIDogZHQuaG91ciAlIDEyLCAyKTtcclxuICAgICAgICBjYXNlICdIJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5ob3VyKTtcclxuICAgICAgICBjYXNlICdISCc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciwgMik7XHJcbiAgICAgICAgICAvLyBvZmZzZXRcclxuICAgICAgICBjYXNlICdaJzpcclxuICAgICAgICAgIC8vIGxpa2UgKzZcclxuICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoeyBmb3JtYXQ6ICduYXJyb3cnLCBhbGxvd1o6IHRoaXMub3B0cy5hbGxvd1ogfSk7XHJcbiAgICAgICAgY2FzZSAnWlonOlxyXG4gICAgICAgICAgLy8gbGlrZSArMDY6MDBcclxuICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoeyBmb3JtYXQ6ICdzaG9ydCcsIGFsbG93WjogdGhpcy5vcHRzLmFsbG93WiB9KTtcclxuICAgICAgICBjYXNlICdaWlonOlxyXG4gICAgICAgICAgLy8gbGlrZSArMDYwMFxyXG4gICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7IGZvcm1hdDogJ3RlY2hpZScsIGFsbG93WjogdGhpcy5vcHRzLmFsbG93WiB9KTtcclxuICAgICAgICBjYXNlICdaWlpaJzpcclxuICAgICAgICAgIC8vIGxpa2UgRVNUXHJcbiAgICAgICAgICByZXR1cm4gZHQuem9uZS5vZmZzZXROYW1lKGR0LnRzLCB7IGZvcm1hdDogJ3Nob3J0JywgbG9jYWxlOiB0aGlzLmxvYy5sb2NhbGUgfSk7XHJcbiAgICAgICAgY2FzZSAnWlpaWlonOlxyXG4gICAgICAgICAgLy8gbGlrZSBFYXN0ZXJuIFN0YW5kYXJkIFRpbWVcclxuICAgICAgICAgIHJldHVybiBkdC56b25lLm9mZnNldE5hbWUoZHQudHMsIHsgZm9ybWF0OiAnbG9uZycsIGxvY2FsZTogdGhpcy5sb2MubG9jYWxlIH0pO1xyXG4gICAgICAgICAgLy8gem9uZVxyXG4gICAgICAgIGNhc2UgJ3onOlxyXG4gICAgICAgICAgLy8gbGlrZSBBbWVyaWNhL05ld19Zb3JrXHJcbiAgICAgICAgICByZXR1cm4gZHQuem9uZU5hbWU7XHJcbiAgICAgICAgICAvLyBtZXJpZGllbXNcclxuICAgICAgICBjYXNlICdhJzpcclxuICAgICAgICAgIHJldHVybiBtZXJpZGllbSgpO1xyXG4gICAgICAgICAgLy8gZGF0ZXNcclxuICAgICAgICBjYXNlICdkJzpcclxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IGRheTogJ251bWVyaWMnIH0sICdkYXknKSA6IHRoaXMubnVtKGR0LmRheSk7XHJcbiAgICAgICAgY2FzZSAnZGQnOlxyXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHsgZGF5OiAnMi1kaWdpdCcgfSwgJ2RheScpIDogdGhpcy5udW0oZHQuZGF5LCAyKTtcclxuICAgICAgICAgIC8vIHdlZWtkYXlzIC0gc3RhbmRhbG9uZVxyXG4gICAgICAgIGNhc2UgJ2MnOlxyXG4gICAgICAgICAgLy8gbGlrZSAxXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQud2Vla2RheSk7XHJcbiAgICAgICAgY2FzZSAnY2NjJzpcclxuICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXHJcbiAgICAgICAgICByZXR1cm4gd2Vla2RheSgnc2hvcnQnLCB0cnVlKTtcclxuICAgICAgICBjYXNlICdjY2NjJzpcclxuICAgICAgICAgIC8vIGxpa2UgJ1R1ZXNkYXknXHJcbiAgICAgICAgICByZXR1cm4gd2Vla2RheSgnbG9uZycsIHRydWUpO1xyXG4gICAgICAgIGNhc2UgJ2NjY2NjJzpcclxuICAgICAgICAgIC8vIGxpa2UgJ1QnXHJcbiAgICAgICAgICByZXR1cm4gd2Vla2RheSgnbmFycm93JywgdHJ1ZSk7XHJcbiAgICAgICAgICAvLyB3ZWVrZGF5cyAtIGZvcm1hdFxyXG4gICAgICAgIGNhc2UgJ0UnOlxyXG4gICAgICAgICAgLy8gbGlrZSAxXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQud2Vla2RheSk7XHJcbiAgICAgICAgY2FzZSAnRUVFJzpcclxuICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXHJcbiAgICAgICAgICByZXR1cm4gd2Vla2RheSgnc2hvcnQnLCBmYWxzZSk7XHJcbiAgICAgICAgY2FzZSAnRUVFRSc6XHJcbiAgICAgICAgICAvLyBsaWtlICdUdWVzZGF5J1xyXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoJ2xvbmcnLCBmYWxzZSk7XHJcbiAgICAgICAgY2FzZSAnRUVFRUUnOlxyXG4gICAgICAgICAgLy8gbGlrZSAnVCdcclxuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KCduYXJyb3cnLCBmYWxzZSk7XHJcbiAgICAgICAgICAvLyBtb250aHMgLSBzdGFuZGFsb25lXHJcbiAgICAgICAgY2FzZSAnTCc6XHJcbiAgICAgICAgICAvLyBsaWtlIDFcclxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxyXG4gICAgICAgICAgICA/IHN0cmluZyh7IG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnIH0sICdtb250aCcpXHJcbiAgICAgICAgICAgIDogdGhpcy5udW0oZHQubW9udGgpO1xyXG4gICAgICAgIGNhc2UgJ0xMJzpcclxuICAgICAgICAgIC8vIGxpa2UgMDEsIGRvZXNuJ3Qgc2VlbSB0byB3b3JrXHJcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcclxuICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogJzItZGlnaXQnLCBkYXk6ICdudW1lcmljJyB9LCAnbW9udGgnKVxyXG4gICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoLCAyKTtcclxuICAgICAgICBjYXNlICdMTEwnOlxyXG4gICAgICAgICAgLy8gbGlrZSBKYW5cclxuICAgICAgICAgIHJldHVybiBtb250aCgnc2hvcnQnLCB0cnVlKTtcclxuICAgICAgICBjYXNlICdMTExMJzpcclxuICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxyXG4gICAgICAgICAgcmV0dXJuIG1vbnRoKCdsb25nJywgdHJ1ZSk7XHJcbiAgICAgICAgY2FzZSAnTExMTEwnOlxyXG4gICAgICAgICAgLy8gbGlrZSBKXHJcbiAgICAgICAgICByZXR1cm4gbW9udGgoJ25hcnJvdycsIHRydWUpO1xyXG4gICAgICAgICAgLy8gbW9udGhzIC0gZm9ybWF0XHJcbiAgICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgICAvLyBsaWtlIDFcclxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxyXG4gICAgICAgICAgICA/IHN0cmluZyh7IG1vbnRoOiAnbnVtZXJpYycgfSwgJ21vbnRoJylcclxuICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCk7XHJcbiAgICAgICAgY2FzZSAnTU0nOlxyXG4gICAgICAgICAgLy8gbGlrZSAwMVxyXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXHJcbiAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6ICcyLWRpZ2l0JyB9LCAnbW9udGgnKVxyXG4gICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoLCAyKTtcclxuICAgICAgICBjYXNlICdNTU0nOlxyXG4gICAgICAgICAgLy8gbGlrZSBKYW5cclxuICAgICAgICAgIHJldHVybiBtb250aCgnc2hvcnQnLCBmYWxzZSk7XHJcbiAgICAgICAgY2FzZSAnTU1NTSc6XHJcbiAgICAgICAgICAvLyBsaWtlIEphbnVhcnlcclxuICAgICAgICAgIHJldHVybiBtb250aCgnbG9uZycsIGZhbHNlKTtcclxuICAgICAgICBjYXNlICdNTU1NTSc6XHJcbiAgICAgICAgICAvLyBsaWtlIEpcclxuICAgICAgICAgIHJldHVybiBtb250aCgnbmFycm93JywgZmFsc2UpO1xyXG4gICAgICAgICAgLy8geWVhcnNcclxuICAgICAgICBjYXNlICd5JzpcclxuICAgICAgICAgIC8vIGxpa2UgMjAxNFxyXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHsgeWVhcjogJ251bWVyaWMnIH0sICd5ZWFyJykgOiB0aGlzLm51bShkdC55ZWFyKTtcclxuICAgICAgICBjYXNlICd5eSc6XHJcbiAgICAgICAgICAvLyBsaWtlIDE0XHJcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcclxuICAgICAgICAgICAgPyBzdHJpbmcoeyB5ZWFyOiAnMi1kaWdpdCcgfSwgJ3llYXInKVxyXG4gICAgICAgICAgICA6IHRoaXMubnVtKGR0LnllYXIudG9TdHJpbmcoKS5zbGljZSgtMiksIDIpO1xyXG4gICAgICAgIGNhc2UgJ3l5eXknOlxyXG4gICAgICAgICAgLy8gbGlrZSAwMDEyXHJcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcclxuICAgICAgICAgICAgPyBzdHJpbmcoeyB5ZWFyOiAnbnVtZXJpYycgfSwgJ3llYXInKVxyXG4gICAgICAgICAgICA6IHRoaXMubnVtKGR0LnllYXIsIDQpO1xyXG4gICAgICAgIGNhc2UgJ3l5eXl5eSc6XHJcbiAgICAgICAgICAvLyBsaWtlIDAwMDAxMlxyXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXHJcbiAgICAgICAgICAgID8gc3RyaW5nKHsgeWVhcjogJ251bWVyaWMnIH0sICd5ZWFyJylcclxuICAgICAgICAgICAgOiB0aGlzLm51bShkdC55ZWFyLCA2KTtcclxuICAgICAgICAgIC8vIGVyYXNcclxuICAgICAgICBjYXNlICdHJzpcclxuICAgICAgICAgIC8vIGxpa2UgQURcclxuICAgICAgICAgIHJldHVybiBlcmEoJ3Nob3J0Jyk7XHJcbiAgICAgICAgY2FzZSAnR0cnOlxyXG4gICAgICAgICAgLy8gbGlrZSBBbm5vIERvbWluaVxyXG4gICAgICAgICAgcmV0dXJuIGVyYSgnbG9uZycpO1xyXG4gICAgICAgIGNhc2UgJ0dHR0dHJzpcclxuICAgICAgICAgIHJldHVybiBlcmEoJ25hcnJvdycpO1xyXG4gICAgICAgIGNhc2UgJ2trJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrWWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XHJcbiAgICAgICAgY2FzZSAna2trayc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQud2Vla1llYXIsIDQpO1xyXG4gICAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtOdW1iZXIpO1xyXG4gICAgICAgIGNhc2UgJ1dXJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrTnVtYmVyLCAyKTtcclxuICAgICAgICBjYXNlICdvJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5vcmRpbmFsKTtcclxuICAgICAgICBjYXNlICdvb28nOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm9yZGluYWwsIDMpO1xyXG4gICAgICAgIGNhc2UgJ3EnOlxyXG4gICAgICAgICAgLy8gbGlrZSAxXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQucXVhcnRlcik7XHJcbiAgICAgICAgY2FzZSAncXEnOlxyXG4gICAgICAgICAgLy8gbGlrZSAwMVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnF1YXJ0ZXIsIDIpO1xyXG4gICAgICAgIGNhc2UgJ1gnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKE1hdGguZmxvb3IoZHQudHMgLyAxMDAwKSk7XHJcbiAgICAgICAgY2FzZSAneCc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQudHMpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gbWF5YmVNYWNybyh0b2tlbik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHN0cmluZ2lmeVRva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSwgdG9rZW5Ub1N0cmluZyk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXREdXJhdGlvbkZyb21TdHJpbmcoZHVyLCBmbXQpIHtcclxuICAgIGNvbnN0IHRva2VuVG9GaWVsZCA9ICh0b2tlbikgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHRva2VuWzBdKSB7XHJcbiAgICAgICAgY2FzZSAnUyc6XHJcbiAgICAgICAgICByZXR1cm4gJ21pbGxpc2Vjb25kJztcclxuICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgIHJldHVybiAnc2Vjb25kJztcclxuICAgICAgICBjYXNlICdtJzpcclxuICAgICAgICAgIHJldHVybiAnbWludXRlJztcclxuICAgICAgICBjYXNlICdoJzpcclxuICAgICAgICAgIHJldHVybiAnaG91cic7XHJcbiAgICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgICByZXR1cm4gJ2RheSc7XHJcbiAgICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgICByZXR1cm4gJ3dlZWsnO1xyXG4gICAgICAgIGNhc2UgJ00nOlxyXG4gICAgICAgICAgcmV0dXJuICdtb250aCc7XHJcbiAgICAgICAgY2FzZSAneSc6XHJcbiAgICAgICAgICByZXR1cm4gJ3llYXInO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRva2VuVG9TdHJpbmcgPSAobGlsZHVyKSA9PiAodG9rZW4pID0+IHtcclxuICAgICAgY29uc3QgbWFwcGVkID0gdG9rZW5Ub0ZpZWxkKHRva2VuKTtcclxuICAgICAgaWYgKG1hcHBlZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bShsaWxkdXIuZ2V0KG1hcHBlZCksIHRva2VuLmxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHRva2VucyA9IEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpO1xyXG4gICAgY29uc3QgcmVhbFRva2VucyA9IHRva2Vucy5yZWR1Y2UoXHJcbiAgICAgIChmb3VuZCwgeyBsaXRlcmFsLCB2YWwgfSkgPT4gKGxpdGVyYWwgPyBmb3VuZCA6IGZvdW5kLmNvbmNhdCh2YWwpKSxcclxuICAgICAgW10sXHJcbiAgICApO1xyXG4gICAgY29uc3QgY29sbGFwc2VkID0gZHVyLnNoaWZ0VG8oLi4ucmVhbFRva2Vucy5tYXAodG9rZW5Ub0ZpZWxkKS5maWx0ZXIoKHQpID0+IHQpKTtcclxuICAgIHJldHVybiBzdHJpbmdpZnlUb2tlbnModG9rZW5zLCB0b2tlblRvU3RyaW5nKGNvbGxhcHNlZCkpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgSW52YWxpZCB7XHJcbiAgY29uc3RydWN0b3IocmVhc29uLCBleHBsYW5hdGlvbikge1xyXG4gICAgdGhpcy5yZWFzb24gPSByZWFzb247XHJcbiAgICB0aGlzLmV4cGxhbmF0aW9uID0gZXhwbGFuYXRpb247XHJcbiAgfVxyXG5cclxuICB0b01lc3NhZ2UoKSB7XHJcbiAgICBpZiAodGhpcy5leHBsYW5hdGlvbikge1xyXG4gICAgICByZXR1cm4gYCR7dGhpcy5yZWFzb259OiAke3RoaXMuZXhwbGFuYXRpb259YDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlYXNvbjtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQGludGVyZmFjZVxyXG4gICovXHJcbmNsYXNzIFpvbmUge1xyXG4gIC8qKlxyXG4gICAgKiBUaGUgdHlwZSBvZiB6b25lXHJcbiAgICAqIEBhYnN0cmFjdFxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogVGhlIG5hbWUgb2YgdGhpcyB6b25lLlxyXG4gICAgKiBAYWJzdHJhY3RcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlhbmFOYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG9mZnNldCBpcyBrbm93biB0byBiZSBmaXhlZCBmb3IgdGhlIHdob2xlIHllYXIuXHJcbiAgICAqIEBhYnN0cmFjdFxyXG4gICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xyXG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBvZmZzZXQncyBjb21tb24gbmFtZSAoc3VjaCBhcyBFU1QpIGF0IHRoZSBzcGVjaWZpZWQgdGltZXN0YW1wXHJcbiAgICAqIEBhYnN0cmFjdFxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGdldCB0aGUgbmFtZVxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIE9wdGlvbnMgdG8gYWZmZWN0IHRoZSBmb3JtYXRcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMuZm9ybWF0IC0gV2hhdCBzdHlsZSBvZiBvZmZzZXQgdG8gcmV0dXJuLiBBY2NlcHRzICdsb25nJyBvciAnc2hvcnQnLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5sb2NhbGUgLSBXaGF0IGxvY2FsZSB0byByZXR1cm4gdGhlIG9mZnNldCBuYW1lIGluLlxyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIG9mZnNldE5hbWUodHMsIG9wdHMpIHtcclxuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgdmFsdWUgYXMgYSBzdHJpbmdcclxuICAgICogQGFic3RyYWN0XHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBvZmZzZXRcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi5cclxuICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdHMgJ25hcnJvdycsICdzaG9ydCcsIG9yICd0ZWNoaWUnLiBSZXR1cm5pbmcgJys2JywgJyswNjowMCcsIG9yICcrMDYwMCcgcmVzcGVjdGl2ZWx5XHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcclxuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHRoZSBvZmZzZXQgaW4gbWludXRlcyBmb3IgdGhpcyB6b25lIGF0IHRoZSBzcGVjaWZpZWQgdGltZXN0YW1wLlxyXG4gICAgKiBAYWJzdHJhY3RcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBjb21wdXRlIHRoZSBvZmZzZXRcclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBvZmZzZXQodHMpIHtcclxuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBab25lIGlzIGVxdWFsIHRvIGFub3RoZXIgem9uZVxyXG4gICAgKiBAYWJzdHJhY3RcclxuICAgICogQHBhcmFtIHtab25lfSBvdGhlclpvbmUgLSB0aGUgem9uZSB0byBjb21wYXJlXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcclxuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBab25lIGlzIHZhbGlkLlxyXG4gICAgKiBAYWJzdHJhY3RcclxuICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGdldCBpc1ZhbGlkKCkge1xyXG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcclxuICB9XHJcbn1cclxuXHJcbmxldCBzaW5nbGV0b24kMSA9IG51bGw7XHJcblxyXG4vKipcclxuICAqIFJlcHJlc2VudHMgdGhlIGxvY2FsIHpvbmUgZm9yIHRoaXMgSmF2YVNjcmlwdCBlbnZpcm9ubWVudC5cclxuICAqIEBpbXBsZW1lbnRzIHtab25lfVxyXG4gICovXHJcbmNsYXNzIFN5c3RlbVpvbmUgZXh0ZW5kcyBab25lIHtcclxuICAvKipcclxuICAgICogR2V0IGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBsb2NhbCB6b25lXHJcbiAgICAqIEByZXR1cm4ge1N5c3RlbVpvbmV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoc2luZ2xldG9uJDEgPT09IG51bGwpIHtcclxuICAgICAgc2luZ2xldG9uJDEgPSBuZXcgU3lzdGVtWm9uZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNpbmdsZXRvbiQxO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IHR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ3N5c3RlbSc7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgb2Zmc2V0TmFtZSh0cywgeyBmb3JtYXQsIGxvY2FsZSB9KSB7XHJcbiAgICByZXR1cm4gcGFyc2Vab25lSW5mbyh0cywgZm9ybWF0LCBsb2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcclxuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5vZmZzZXQodHMpLCBmb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgb2Zmc2V0KHRzKSB7XHJcbiAgICByZXR1cm4gLW5ldyBEYXRlKHRzKS5nZXRUaW1lem9uZU9mZnNldCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZXF1YWxzKG90aGVyWm9uZSkge1xyXG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSAnc3lzdGVtJztcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCBpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgZHRmQ2FjaGUgPSB7fTtcclxuZnVuY3Rpb24gbWFrZURURih6b25lKSB7XHJcbiAgaWYgKCFkdGZDYWNoZVt6b25lXSkge1xyXG4gICAgZHRmQ2FjaGVbem9uZV0gPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XHJcbiAgICAgIGhvdXIxMjogZmFsc2UsXHJcbiAgICAgIHRpbWVab25lOiB6b25lLFxyXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXHJcbiAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICBzZWNvbmQ6ICcyLWRpZ2l0JyxcclxuICAgICAgZXJhOiAnc2hvcnQnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBkdGZDYWNoZVt6b25lXTtcclxufVxyXG5cclxuY29uc3QgdHlwZVRvUG9zID0ge1xyXG4gIHllYXI6IDAsXHJcbiAgbW9udGg6IDEsXHJcbiAgZGF5OiAyLFxyXG4gIGVyYTogMyxcclxuICBob3VyOiA0LFxyXG4gIG1pbnV0ZTogNSxcclxuICBzZWNvbmQ6IDYsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBoYWNreU9mZnNldChkdGYsIGRhdGUpIHtcclxuICBjb25zdCBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0KGRhdGUpLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xyXG4gIGNvbnN0IHBhcnNlZCA9IC8oXFxkKylcXC8oXFxkKylcXC8oXFxkKykgKEFEfEJDKSw/IChcXGQrKTooXFxkKyk6KFxcZCspLy5leGVjKGZvcm1hdHRlZCk7XHJcbiAgY29uc3QgWywgZk1vbnRoLCBmRGF5LCBmWWVhciwgZmFkT3JCYywgZkhvdXIsIGZNaW51dGUsIGZTZWNvbmRdID0gcGFyc2VkO1xyXG4gIHJldHVybiBbZlllYXIsIGZNb250aCwgZkRheSwgZmFkT3JCYywgZkhvdXIsIGZNaW51dGUsIGZTZWNvbmRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJ0c09mZnNldChkdGYsIGRhdGUpIHtcclxuICBjb25zdCBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0VG9QYXJ0cyhkYXRlKTtcclxuICBjb25zdCBmaWxsZWQgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1hdHRlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgeyB0eXBlLCB2YWx1ZSB9ID0gZm9ybWF0dGVkW2ldO1xyXG4gICAgY29uc3QgcG9zID0gdHlwZVRvUG9zW3R5cGVdO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAnZXJhJykge1xyXG4gICAgICBmaWxsZWRbcG9zXSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIGlmICghaXNVbmRlZmluZWQocG9zKSkge1xyXG4gICAgICBmaWxsZWRbcG9zXSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmaWxsZWQ7XHJcbn1cclxuXHJcbmxldCBpYW5hWm9uZUNhY2hlID0ge307XHJcbi8qKlxyXG4gICogQSB6b25lIGlkZW50aWZpZWQgYnkgYW4gSUFOQSBpZGVudGlmaWVyLCBsaWtlIEFtZXJpY2EvTmV3X1lvcmtcclxuICAqIEBpbXBsZW1lbnRzIHtab25lfVxyXG4gICovXHJcbmNsYXNzIElBTkFab25lIGV4dGVuZHMgWm9uZSB7XHJcbiAgLyoqXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gWm9uZSBuYW1lXHJcbiAgICAqIEByZXR1cm4ge0lBTkFab25lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgY3JlYXRlKG5hbWUpIHtcclxuICAgIGlmICghaWFuYVpvbmVDYWNoZVtuYW1lXSkge1xyXG4gICAgICBpYW5hWm9uZUNhY2hlW25hbWVdID0gbmV3IElBTkFab25lKG5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlhbmFab25lQ2FjaGVbbmFtZV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmVzZXQgbG9jYWwgY2FjaGVzLiBTaG91bGQgb25seSBiZSBuZWNlc3NhcnkgaW4gdGVzdGluZyBzY2VuYXJpb3MuXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyByZXNldENhY2hlKCkge1xyXG4gICAgaWFuYVpvbmVDYWNoZSA9IHt9O1xyXG4gICAgZHRmQ2FjaGUgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHN0cmluZyBpcyBhIHZhbGlkIHNwZWNpZmllci4gVGhpcyBvbmx5IGNoZWNrcyB0aGUgc3RyaW5nJ3MgZm9ybWF0LCBub3QgdGhhdCB0aGUgc3BlY2lmaWVyIGlkZW50aWZpZXMgYSBrbm93biB6b25lOyBzZWUgaXNWYWxpZFpvbmUgZm9yIHRoYXQuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBzIC0gVGhlIHN0cmluZyB0byBjaGVjayB2YWxpZGl0eSBvblxyXG4gICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKFwiQW1lcmljYS9OZXdfWW9ya1wiKSAvLz0+IHRydWVcclxuICAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihcIlNwb3J0fn5ibG9ycFwiKSAvLz0+IGZhbHNlXHJcbiAgICAqIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIHJldHVybnMgZmFsc2UgZm9yIHNvbWUgdmFsaWQgSUFOQSBuYW1lcy4gVXNlIGlzVmFsaWRab25lIGluc3RlYWQuXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBpc1ZhbGlkU3BlY2lmaWVyKHMpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWRab25lKHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgc3RyaW5nIGlkZW50aWZpZXMgYSByZWFsIHpvbmVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBUaGUgc3RyaW5nIHRvIGNoZWNrXHJcbiAgICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiQW1lcmljYS9OZXdfWW9ya1wiKSAvLz0+IHRydWVcclxuICAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJGYW50YXNpYS9DYXN0bGVcIikgLy89PiBmYWxzZVxyXG4gICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIlNwb3J0fn5ibG9ycFwiKSAvLz0+IGZhbHNlXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBpc1ZhbGlkWm9uZSh6b25lKSB7XHJcbiAgICBpZiAoIXpvbmUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywgeyB0aW1lWm9uZTogem9uZSB9KS5mb3JtYXQoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICAvKiogQHByaXZhdGUgKiAqL1xyXG4gICAgdGhpcy56b25lTmFtZSA9IG5hbWU7XHJcbiAgICAvKiogQHByaXZhdGUgKiAqL1xyXG4gICAgdGhpcy52YWxpZCA9IElBTkFab25lLmlzVmFsaWRab25lKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IHR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ2lhbmEnO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy56b25lTmFtZTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIG9mZnNldE5hbWUodHMsIHsgZm9ybWF0LCBsb2NhbGUgfSkge1xyXG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlLCB0aGlzLm5hbWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcclxuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5vZmZzZXQodHMpLCBmb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgb2Zmc2V0KHRzKSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodHMpO1xyXG5cclxuICAgIGlmIChpc05hTihkYXRlKSkgcmV0dXJuIE5hTjtcclxuXHJcbiAgICBjb25zdCBkdGYgPSBtYWtlRFRGKHRoaXMubmFtZSk7XHJcbiAgICBsZXQgW3llYXIsIG1vbnRoLCBkYXksIGFkT3JCYywgaG91ciwgbWludXRlLCBzZWNvbmRdID0gZHRmLmZvcm1hdFRvUGFydHNcclxuICAgICAgPyBwYXJ0c09mZnNldChkdGYsIGRhdGUpXHJcbiAgICAgIDogaGFja3lPZmZzZXQoZHRmLCBkYXRlKTtcclxuXHJcbiAgICBpZiAoYWRPckJjID09PSAnQkMnKSB7XHJcbiAgICAgIHllYXIgPSAtTWF0aC5hYnMoeWVhcikgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJlY2F1c2Ugd2UncmUgdXNpbmcgaG91cjEyIGFuZCBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDI1NTY0JmNhbj0yJnE9JTIyMjQlM0EwMCUyMiUyMGRhdGV0aW1lZm9ybWF0XHJcbiAgICBjb25zdCBhZGp1c3RlZEhvdXIgPSBob3VyID09PSAyNCA/IDAgOiBob3VyO1xyXG5cclxuICAgIGNvbnN0IGFzVVRDID0gb2JqVG9Mb2NhbFRTKHtcclxuICAgICAgeWVhcixcclxuICAgICAgbW9udGgsXHJcbiAgICAgIGRheSxcclxuICAgICAgaG91cjogYWRqdXN0ZWRIb3VyLFxyXG4gICAgICBtaW51dGUsXHJcbiAgICAgIHNlY29uZCxcclxuICAgICAgbWlsbGlzZWNvbmQ6IDAsXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgYXNUUyA9ICtkYXRlO1xyXG4gICAgY29uc3Qgb3ZlciA9IGFzVFMgJSAxMDAwO1xyXG4gICAgYXNUUyAtPSBvdmVyID49IDAgPyBvdmVyIDogMTAwMCArIG92ZXI7XHJcbiAgICByZXR1cm4gKGFzVVRDIC0gYXNUUykgLyAoNjAgKiAxMDAwKTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcclxuICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gJ2lhbmEnICYmIG90aGVyWm9uZS5uYW1lID09PSB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbGlkO1xyXG4gIH1cclxufVxyXG5cclxubGV0IHNpbmdsZXRvbiA9IG51bGw7XHJcblxyXG4vKipcclxuICAqIEEgem9uZSB3aXRoIGEgZml4ZWQgb2Zmc2V0IChtZWFuaW5nIG5vIERTVClcclxuICAqIEBpbXBsZW1lbnRzIHtab25lfVxyXG4gICovXHJcbmNsYXNzIEZpeGVkT2Zmc2V0Wm9uZSBleHRlbmRzIFpvbmUge1xyXG4gIC8qKlxyXG4gICAgKiBHZXQgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgVVRDXHJcbiAgICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCB1dGNJbnN0YW5jZSgpIHtcclxuICAgIGlmIChzaW5nbGV0b24gPT09IG51bGwpIHtcclxuICAgICAgc2luZ2xldG9uID0gbmV3IEZpeGVkT2Zmc2V0Wm9uZSgwKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaW5nbGV0b247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IGFuIGluc3RhbmNlIHdpdGggYSBzcGVjaWZpZWQgb2Zmc2V0XHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgLSBUaGUgb2Zmc2V0IGluIG1pbnV0ZXNcclxuICAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgaW5zdGFuY2Uob2Zmc2V0KSB7XHJcbiAgICByZXR1cm4gb2Zmc2V0ID09PSAwID8gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlIDogbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCBhbiBpbnN0YW5jZSBvZiBGaXhlZE9mZnNldFpvbmUgZnJvbSBhIFVUQyBvZmZzZXQgc3RyaW5nLCBsaWtlIFwiVVRDKzZcIlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcyAtIFRoZSBvZmZzZXQgc3RyaW5nIHRvIHBhcnNlXHJcbiAgICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQys2XCIpXHJcbiAgICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQyswNlwiKVxyXG4gICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMtNjowMFwiKVxyXG4gICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBwYXJzZVNwZWNpZmllcihzKSB7XHJcbiAgICBpZiAocykge1xyXG4gICAgICBjb25zdCByID0gcy5tYXRjaCgvXnV0Yyg/OihbKy1dXFxkezEsMn0pKD86OihcXGR7Mn0pKT8pPyQvaSk7XHJcbiAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGaXhlZE9mZnNldFpvbmUoc2lnbmVkT2Zmc2V0KHJbMV0sIHJbMl0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihvZmZzZXQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICAvKiogQHByaXZhdGUgKiAqL1xyXG4gICAgdGhpcy5maXhlZCA9IG9mZnNldDtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgcmV0dXJuICdmaXhlZCc7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZpeGVkID09PSAwID8gJ1VUQycgOiBgVVRDJHtmb3JtYXRPZmZzZXQodGhpcy5maXhlZCwgJ25hcnJvdycpfWA7XHJcbiAgfVxyXG5cclxuICBnZXQgaWFuYU5hbWUoKSB7XHJcbiAgICBpZiAodGhpcy5maXhlZCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gJ0V0Yy9VVEMnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBFdGMvR01UJHtmb3JtYXRPZmZzZXQoLXRoaXMuZml4ZWQsICduYXJyb3cnKX1gO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgb2Zmc2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdE9mZnNldCh0aGlzLmZpeGVkLCBmb3JtYXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBvZmZzZXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maXhlZDtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcclxuICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gJ2ZpeGVkJyAmJiBvdGhlclpvbmUuZml4ZWQgPT09IHRoaXMuZml4ZWQ7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgKiBBIHpvbmUgdGhhdCBmYWlsZWQgdG8gcGFyc2UuIFlvdSBzaG91bGQgbmV2ZXIgbmVlZCB0byBpbnN0YW50aWF0ZSB0aGlzLlxyXG4gICogQGltcGxlbWVudHMge1pvbmV9XHJcbiAgKi9cclxuY2xhc3MgSW52YWxpZFpvbmUgZXh0ZW5kcyBab25lIHtcclxuICBjb25zdHJ1Y3Rvcih6b25lTmFtZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIC8qKiAgQHByaXZhdGUgKi9cclxuICAgIHRoaXMuem9uZU5hbWUgPSB6b25lTmFtZTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgcmV0dXJuICdpbnZhbGlkJztcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuem9uZU5hbWU7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgaXNVbml2ZXJzYWwoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBvZmZzZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBmb3JtYXRPZmZzZXQoKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBvZmZzZXQoKSB7XHJcbiAgICByZXR1cm4gTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZXF1YWxzKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVpvbmUoaW5wdXQsIGRlZmF1bHRab25lKSB7XHJcbiAgaWYgKGlzVW5kZWZpbmVkKGlucHV0KSB8fCBpbnB1dCA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHRab25lO1xyXG4gIH0gaWYgKGlucHV0IGluc3RhbmNlb2YgWm9uZSkge1xyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH0gaWYgKGlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgY29uc3QgbG93ZXJlZCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBpZiAobG93ZXJlZCA9PT0gJ2RlZmF1bHQnKSByZXR1cm4gZGVmYXVsdFpvbmU7XHJcbiAgICBpZiAobG93ZXJlZCA9PT0gJ2xvY2FsJyB8fCBsb3dlcmVkID09PSAnc3lzdGVtJykgcmV0dXJuIFN5c3RlbVpvbmUuaW5zdGFuY2U7XHJcbiAgICBpZiAobG93ZXJlZCA9PT0gJ3V0YycgfHwgbG93ZXJlZCA9PT0gJ2dtdCcpIHJldHVybiBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2U7XHJcbiAgICByZXR1cm4gRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKGxvd2VyZWQpIHx8IElBTkFab25lLmNyZWF0ZShpbnB1dCk7XHJcbiAgfSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XHJcbiAgICByZXR1cm4gRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKGlucHV0KTtcclxuICB9IGlmICh0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnICYmIGlucHV0Lm9mZnNldCAmJiB0eXBlb2YgaW5wdXQub2Zmc2V0ID09PSAnbnVtYmVyJykge1xyXG4gICAgLy8gVGhpcyBpcyBkdW1iLCBidXQgdGhlIGluc3RhbmNlb2YgY2hlY2sgYWJvdmUgZG9lc24ndCBzZWVtIHRvIHJlYWxseSB3b3JrXHJcbiAgICAvLyBzbyB3ZSdyZSBkdWNrIGNoZWNraW5nIGl0XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG4gIHJldHVybiBuZXcgSW52YWxpZFpvbmUoaW5wdXQpO1xyXG59XHJcblxyXG5sZXQgbm93ID0gKCkgPT4gRGF0ZS5ub3coKTtcclxubGV0IGRlZmF1bHRab25lID0gJ3N5c3RlbSc7XHJcbmxldCBkZWZhdWx0TG9jYWxlID0gbnVsbDtcclxubGV0IGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gPSBudWxsO1xyXG5sZXQgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gbnVsbDtcclxubGV0IHRocm93T25JbnZhbGlkO1xyXG5cclxuLyoqXHJcbiAgKiBTZXR0aW5ncyBjb250YWlucyBzdGF0aWMgZ2V0dGVycyBhbmQgc2V0dGVycyB0aGF0IGNvbnRyb2wgTHV4b24ncyBvdmVyYWxsIGJlaGF2aW9yLiBMdXhvbiBpcyBhIHNpbXBsZSBsaWJyYXJ5IHdpdGggZmV3IG9wdGlvbnMsIGJ1dCB0aGUgb25lcyBpdCBkb2VzIGhhdmUgbGl2ZSBoZXJlLlxyXG4gICovXHJcbmNsYXNzIFNldHRpbmdzIHtcclxuICAvKipcclxuICAgICogR2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cclxuICAgICogQHR5cGUge2Z1bmN0aW9ufVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IG5vdygpIHtcclxuICAgIHJldHVybiBub3c7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cclxuICAgICogVGhlIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBudW1iZXIsIHdoaWNoIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgYW4gRXBvY2ggbWlsbGlzZWNvbmQgY291bnRcclxuICAgICogQHR5cGUge2Z1bmN0aW9ufVxyXG4gICAgKiBAZXhhbXBsZSBTZXR0aW5ncy5ub3cgPSAoKSA9PiBEYXRlLm5vdygpICsgMzAwMCAvLyBwcmV0ZW5kIGl0IGlzIDMgc2Vjb25kcyBpbiB0aGUgZnV0dXJlXHJcbiAgICAqIEBleGFtcGxlIFNldHRpbmdzLm5vdyA9ICgpID0+IDAgLy8gYWx3YXlzIHByZXRlbmQgaXQncyBKYW4gMSwgMTk3MCBhdCBtaWRuaWdodCBpbiBVVEMgdGltZVxyXG4gICAgKi9cclxuICBzdGF0aWMgc2V0IG5vdyhuKSB7XHJcbiAgICBub3cgPSBuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFNldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgdG8gY3JlYXRlIERhdGVUaW1lcyBpbi4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cclxuICAgICogVXNlIHRoZSB2YWx1ZSBcInN5c3RlbVwiIHRvIHJlc2V0IHRoaXMgdmFsdWUgdG8gdGhlIHN5c3RlbSdzIHRpbWUgem9uZS5cclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgc3RhdGljIHNldCBkZWZhdWx0Wm9uZSh6b25lKSB7XHJcbiAgICBkZWZhdWx0Wm9uZSA9IHpvbmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSBvYmplY3QgY3VycmVudGx5IHVzZWQgdG8gY3JlYXRlIERhdGVUaW1lcy4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cclxuICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgdGhlIHN5c3RlbSdzIHRpbWUgem9uZSAodGhlIG9uZSBzZXQgb24gdGhlIG1hY2hpbmUgdGhhdCBydW5zIHRoaXMgY29kZSkuXHJcbiAgICAqIEB0eXBlIHtab25lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IGRlZmF1bHRab25lKCkge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZVpvbmUoZGVmYXVsdFpvbmUsIFN5c3RlbVpvbmUuaW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IGRlZmF1bHRMb2NhbGUoKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdExvY2FsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBTZXQgdGhlIGRlZmF1bHQgbG9jYWxlIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgc3RhdGljIHNldCBkZWZhdWx0TG9jYWxlKGxvY2FsZSkge1xyXG4gICAgZGVmYXVsdExvY2FsZSA9IGxvY2FsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGRlZmF1bHQgbnVtYmVyaW5nIHN5c3RlbSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSgpIHtcclxuICAgIHJldHVybiBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFNldCB0aGUgZGVmYXVsdCBudW1iZXJpbmcgc3lzdGVtIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgc3RhdGljIHNldCBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtKG51bWJlcmluZ1N5c3RlbSkge1xyXG4gICAgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZ1N5c3RlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIoKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdE91dHB1dENhbGVuZGFyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFNldCB0aGUgZGVmYXVsdCBvdXRwdXQgY2FsZW5kYXIgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBzdGF0aWMgc2V0IGRlZmF1bHRPdXRwdXRDYWxlbmRhcihvdXRwdXRDYWxlbmRhcikge1xyXG4gICAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHdoZXRoZXIgTHV4b24gd2lsbCB0aHJvdyB3aGVuIGl0IGVuY291bnRlcnMgaW52YWxpZCBEYXRlVGltZXMsIER1cmF0aW9ucywgb3IgSW50ZXJ2YWxzXHJcbiAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IHRocm93T25JbnZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRocm93T25JbnZhbGlkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFNldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xyXG4gICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgc3RhdGljIHNldCB0aHJvd09uSW52YWxpZCh0KSB7XHJcbiAgICB0aHJvd09uSW52YWxpZCA9IHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmVzZXQgTHV4b24ncyBnbG9iYWwgY2FjaGVzLiBTaG91bGQgb25seSBiZSBuZWNlc3NhcnkgaW4gdGVzdGluZyBzY2VuYXJpb3MuXHJcbiAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyByZXNldENhY2hlcygpIHtcclxuICAgIExvY2FsZS5yZXNldENhY2hlKCk7XHJcbiAgICBJQU5BWm9uZS5yZXNldENhY2hlKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyB0b2RvIC0gcmVtYXAgY2FjaGluZ1xyXG5cclxuY29uc3QgaW50bExGQ2FjaGUgPSB7fTtcclxuZnVuY3Rpb24gZ2V0Q2FjaGVkTEYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcclxuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XHJcbiAgbGV0IGR0ZiA9IGludGxMRkNhY2hlW2tleV07XHJcbiAgaWYgKCFkdGYpIHtcclxuICAgIGR0ZiA9IG5ldyBJbnRsLkxpc3RGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcclxuICAgIGludGxMRkNhY2hlW2tleV0gPSBkdGY7XHJcbiAgfVxyXG4gIHJldHVybiBkdGY7XHJcbn1cclxuXHJcbmxldCBpbnRsRFRDYWNoZSA9IHt9O1xyXG5mdW5jdGlvbiBnZXRDYWNoZWREVEYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcclxuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XHJcbiAgbGV0IGR0ZiA9IGludGxEVENhY2hlW2tleV07XHJcbiAgaWYgKCFkdGYpIHtcclxuICAgIGR0ZiA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XHJcbiAgICBpbnRsRFRDYWNoZVtrZXldID0gZHRmO1xyXG4gIH1cclxuICByZXR1cm4gZHRmO1xyXG59XHJcblxyXG5sZXQgaW50bE51bUNhY2hlID0ge307XHJcbmZ1bmN0aW9uIGdldENhY2hlZElORihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xyXG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcclxuICBsZXQgaW5mID0gaW50bE51bUNhY2hlW2tleV07XHJcbiAgaWYgKCFpbmYpIHtcclxuICAgIGluZiA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xyXG4gICAgaW50bE51bUNhY2hlW2tleV0gPSBpbmY7XHJcbiAgfVxyXG4gIHJldHVybiBpbmY7XHJcbn1cclxuXHJcbmxldCBpbnRsUmVsQ2FjaGUgPSB7fTtcclxuZnVuY3Rpb24gZ2V0Q2FjaGVkUlRGKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XHJcbiAgY29uc3QgeyBiYXNlLCAuLi5jYWNoZUtleU9wdHMgfSA9IG9wdHM7IC8vIGV4Y2x1ZGUgYGJhc2VgIGZyb20gdGhlIG9wdGlvbnNcclxuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBjYWNoZUtleU9wdHNdKTtcclxuICBsZXQgaW5mID0gaW50bFJlbENhY2hlW2tleV07XHJcbiAgaWYgKCFpbmYpIHtcclxuICAgIGluZiA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xyXG4gICAgaW50bFJlbENhY2hlW2tleV0gPSBpbmY7XHJcbiAgfVxyXG4gIHJldHVybiBpbmY7XHJcbn1cclxuXHJcbmxldCBzeXNMb2NhbGVDYWNoZSA9IG51bGw7XHJcbmZ1bmN0aW9uIHN5c3RlbUxvY2FsZSgpIHtcclxuICBpZiAoc3lzTG9jYWxlQ2FjaGUpIHtcclxuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcclxuICB9XHJcbiAgc3lzTG9jYWxlQ2FjaGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZTtcclxuICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlTG9jYWxlU3RyaW5nKGxvY2FsZVN0cikge1xyXG4gIC8vIEkgcmVhbGx5IHdhbnQgdG8gYXZvaWQgd3JpdGluZyBhIEJDUCA0NyBwYXJzZXJcclxuICAvLyBzZWUsIGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL3dvb29ybS9iY3AtNDdcclxuICAvLyBJbnN0ZWFkLCB3ZSdsbCBkbyB0aGlzOlxyXG5cclxuICAvLyBhKSBpZiB0aGUgc3RyaW5nIGhhcyBubyAtdSBleHRlbnNpb25zLCBqdXN0IGxlYXZlIGl0IGFsb25lXHJcbiAgLy8gYikgaWYgaXQgZG9lcywgdXNlIEludGwgdG8gcmVzb2x2ZSBldmVyeXRoaW5nXHJcbiAgLy8gYykgaWYgSW50bCBmYWlscywgdHJ5IGFnYWluIHdpdGhvdXQgdGhlIC11XHJcblxyXG4gIGNvbnN0IHVJbmRleCA9IGxvY2FsZVN0ci5pbmRleE9mKCctdS0nKTtcclxuICBpZiAodUluZGV4ID09PSAtMSkge1xyXG4gICAgcmV0dXJuIFtsb2NhbGVTdHJdO1xyXG4gIH1cclxuICBsZXQgb3B0aW9ucztcclxuICBjb25zdCBzbWFsbGVyID0gbG9jYWxlU3RyLnN1YnN0cmluZygwLCB1SW5kZXgpO1xyXG4gIHRyeSB7XHJcbiAgICBvcHRpb25zID0gZ2V0Q2FjaGVkRFRGKGxvY2FsZVN0cikucmVzb2x2ZWRPcHRpb25zKCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgb3B0aW9ucyA9IGdldENhY2hlZERURihzbWFsbGVyKS5yZXNvbHZlZE9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgbnVtYmVyaW5nU3lzdGVtLCBjYWxlbmRhciB9ID0gb3B0aW9ucztcclxuICAvLyByZXR1cm4gdGhlIHNtYWxsZXIgb25lIHNvIHRoYXQgd2UgY2FuIGFwcGVuZCB0aGUgY2FsZW5kYXIgYW5kIG51bWJlcmluZyBvdmVycmlkZXMgdG8gaXRcclxuICByZXR1cm4gW3NtYWxsZXIsIG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXJdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRsQ29uZmlnU3RyaW5nKGxvY2FsZVN0ciwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikge1xyXG4gIGlmIChvdXRwdXRDYWxlbmRhciB8fCBudW1iZXJpbmdTeXN0ZW0pIHtcclxuICAgIGxvY2FsZVN0ciArPSAnLXUnO1xyXG5cclxuICAgIGlmIChvdXRwdXRDYWxlbmRhcikge1xyXG4gICAgICBsb2NhbGVTdHIgKz0gYC1jYS0ke291dHB1dENhbGVuZGFyfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG51bWJlcmluZ1N5c3RlbSkge1xyXG4gICAgICBsb2NhbGVTdHIgKz0gYC1udS0ke251bWJlcmluZ1N5c3RlbX1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvY2FsZVN0cjtcclxuICB9XHJcbiAgcmV0dXJuIGxvY2FsZVN0cjtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwTW9udGhzKGYpIHtcclxuICBjb25zdCBtcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcclxuICAgIGNvbnN0IGR0ID0gRGF0ZVRpbWUudXRjKDIwMTYsIGksIDEpO1xyXG4gICAgbXMucHVzaChmKGR0KSk7XHJcbiAgfVxyXG4gIHJldHVybiBtcztcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwV2Vla2RheXMoZikge1xyXG4gIGNvbnN0IG1zID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XHJcbiAgICBjb25zdCBkdCA9IERhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMgKyBpKTtcclxuICAgIG1zLnB1c2goZihkdCkpO1xyXG4gIH1cclxuICByZXR1cm4gbXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RTdHVmZihsb2MsIGxlbmd0aCwgZGVmYXVsdE9LLCBlbmdsaXNoRm4sIGludGxGbikge1xyXG4gIGNvbnN0IG1vZGUgPSBsb2MubGlzdGluZ01vZGUoZGVmYXVsdE9LKTtcclxuXHJcbiAgaWYgKG1vZGUgPT09ICdlcnJvcicpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0gaWYgKG1vZGUgPT09ICdlbicpIHtcclxuICAgIHJldHVybiBlbmdsaXNoRm4obGVuZ3RoKTtcclxuICB9XHJcbiAgcmV0dXJuIGludGxGbihsZW5ndGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdXBwb3J0c0Zhc3ROdW1iZXJzKGxvYykge1xyXG4gIGlmIChsb2MubnVtYmVyaW5nU3lzdGVtICYmIGxvYy5udW1iZXJpbmdTeXN0ZW0gIT09ICdsYXRuJykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgbG9jLm51bWJlcmluZ1N5c3RlbSA9PT0gJ2xhdG4nXHJcbiAgICAgICB8fCAhbG9jLmxvY2FsZVxyXG4gICAgICAgfHwgbG9jLmxvY2FsZS5zdGFydHNXaXRoKCdlbicpXHJcbiAgICAgICB8fCBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2MuaW50bCkucmVzb2x2ZWRPcHRpb25zKCkubnVtYmVyaW5nU3lzdGVtID09PSAnbGF0bidcclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuXHJcbmNsYXNzIFBvbHlOdW1iZXJGb3JtYXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGludGwsIGZvcmNlU2ltcGxlLCBvcHRzKSB7XHJcbiAgICB0aGlzLnBhZFRvID0gb3B0cy5wYWRUbyB8fCAwO1xyXG4gICAgdGhpcy5mbG9vciA9IG9wdHMuZmxvb3IgfHwgZmFsc2U7XHJcblxyXG4gICAgY29uc3QgeyBwYWRUbywgZmxvb3IsIC4uLm90aGVyT3B0cyB9ID0gb3B0cztcclxuXHJcbiAgICBpZiAoIWZvcmNlU2ltcGxlIHx8IE9iamVjdC5rZXlzKG90aGVyT3B0cykubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBpbnRsT3B0cyA9IHsgdXNlR3JvdXBpbmc6IGZhbHNlLCAuLi5vcHRzIH07XHJcbiAgICAgIGlmIChvcHRzLnBhZFRvID4gMCkgaW50bE9wdHMubWluaW11bUludGVnZXJEaWdpdHMgPSBvcHRzLnBhZFRvO1xyXG4gICAgICB0aGlzLmluZiA9IGdldENhY2hlZElORihpbnRsLCBpbnRsT3B0cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtYXQoaSkge1xyXG4gICAgaWYgKHRoaXMuaW5mKSB7XHJcbiAgICAgIGNvbnN0IGZpeGVkID0gdGhpcy5mbG9vciA/IE1hdGguZmxvb3IoaSkgOiBpO1xyXG4gICAgICByZXR1cm4gdGhpcy5pbmYuZm9ybWF0KGZpeGVkKTtcclxuICAgIH1cclxuICAgIC8vIHRvIG1hdGNoIHRoZSBicm93c2VyJ3MgbnVtYmVyZm9ybWF0dGVyIGRlZmF1bHRzXHJcbiAgICBjb25zdCBmaXhlZCA9IHRoaXMuZmxvb3IgPyBNYXRoLmZsb29yKGkpIDogcm91bmRUbyhpLCAzKTtcclxuICAgIHJldHVybiBwYWRTdGFydChmaXhlZCwgdGhpcy5wYWRUbyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuXHJcbmNsYXNzIFBvbHlEYXRlRm9ybWF0dGVyIHtcclxuICBjb25zdHJ1Y3RvcihkdCwgaW50bCwgb3B0cykge1xyXG4gICAgdGhpcy5vcHRzID0gb3B0cztcclxuXHJcbiAgICBsZXQgejtcclxuICAgIGlmIChkdC56b25lLmlzVW5pdmVyc2FsKSB7XHJcbiAgICAgIC8vIFVUQy04IG9yIEV0Yy9VVEMtOCBhcmUgbm90IHBhcnQgb2YgdHpkYXRhLCBvbmx5IEV0Yy9HTVQrOCBhbmQgdGhlIGxpa2UuXHJcbiAgICAgIC8vIFRoYXQgaXMgd2h5IGZpeGVkLW9mZnNldCBUWiBpcyBzZXQgdG8gdGhhdCB1bmxlc3MgaXQgaXM6XHJcbiAgICAgIC8vIDEuIFJlcHJlc2VudGluZyBvZmZzZXQgMCB3aGVuIFVUQyBpcyB1c2VkIHRvIG1haW50YWluIHByZXZpb3VzIGJlaGF2aW9yIGFuZCBkb2VzIG5vdCBiZWNvbWUgR01ULlxyXG4gICAgICAvLyAyLiBVbnN1cHBvcnRlZCBieSB0aGUgYnJvd3NlcjpcclxuICAgICAgLy8gICAgLSBzb21lIGRvIG5vdCBzdXBwb3J0IEV0Yy9cclxuICAgICAgLy8gICAgLSA8IEV0Yy9HTVQtMTQsID4gRXRjL0dNVCsxMiwgYW5kIDMwLW1pbnV0ZSBvciA0NS1taW51dGUgb2Zmc2V0cyBhcmUgbm90IHBhcnQgb2YgdHpkYXRhXHJcbiAgICAgIGNvbnN0IGdtdE9mZnNldCA9IC0xICogKGR0Lm9mZnNldCAvIDYwKTtcclxuICAgICAgY29uc3Qgb2Zmc2V0WiA9IGdtdE9mZnNldCA+PSAwID8gYEV0Yy9HTVQrJHtnbXRPZmZzZXR9YCA6IGBFdGMvR01UJHtnbXRPZmZzZXR9YDtcclxuICAgICAgaWYgKGR0Lm9mZnNldCAhPT0gMCAmJiBJQU5BWm9uZS5jcmVhdGUob2Zmc2V0WikudmFsaWQpIHtcclxuICAgICAgICB6ID0gb2Zmc2V0WjtcclxuICAgICAgICB0aGlzLmR0ID0gZHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gTm90IGFsbCBmaXhlZC1vZmZzZXQgem9uZXMgbGlrZSBFdGMvKzQ6MzAgYXJlIHByZXNlbnQgaW4gdHpkYXRhLlxyXG4gICAgICAgIC8vIFNvIHdlIGhhdmUgdG8gbWFrZSBkby4gVHdvIGNhc2VzOlxyXG4gICAgICAgIC8vIDEuIFRoZSBmb3JtYXQgb3B0aW9ucyB0ZWxsIHVzIHRvIHNob3cgdGhlIHpvbmUuIFdlIGNhbid0IGRvIHRoYXQsIHNvIHRoZSBiZXN0XHJcbiAgICAgICAgLy8gd2UgY2FuIGRvIGlzIGZvcm1hdCB0aGUgZGF0ZSBpbiBVVEMuXHJcbiAgICAgICAgLy8gMi4gVGhlIGZvcm1hdCBvcHRpb25zIGRvbid0IHRlbGwgdXMgdG8gc2hvdyB0aGUgem9uZS4gVGhlbiB3ZSBjYW4gYWRqdXN0IHRoZW1cclxuICAgICAgICAvLyB0aGUgdGltZSBhbmQgdGVsbCB0aGUgZm9ybWF0dGVyIHRvIHNob3cgaXQgdG8gdXMgaW4gVVRDLCBzbyB0aGF0IHRoZSB0aW1lIGlzIHJpZ2h0XHJcbiAgICAgICAgLy8gYW5kIHRoZSBiYWQgem9uZSBkb2Vzbid0IHNob3cgdXAuXHJcbiAgICAgICAgeiA9ICdVVEMnO1xyXG4gICAgICAgIGlmIChvcHRzLnRpbWVab25lTmFtZSkge1xyXG4gICAgICAgICAgdGhpcy5kdCA9IGR0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmR0ID0gZHQub2Zmc2V0ID09PSAwID8gZHQgOiBEYXRlVGltZS5mcm9tTWlsbGlzKGR0LnRzICsgZHQub2Zmc2V0ICogNjAgKiAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZHQuem9uZS50eXBlID09PSAnc3lzdGVtJykge1xyXG4gICAgICB0aGlzLmR0ID0gZHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmR0ID0gZHQ7XHJcbiAgICAgIHogPSBkdC56b25lLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW50bE9wdHMgPSB7IC4uLnRoaXMub3B0cyB9O1xyXG4gICAgaWYgKHopIHtcclxuICAgICAgaW50bE9wdHMudGltZVpvbmUgPSB6O1xyXG4gICAgfVxyXG4gICAgdGhpcy5kdGYgPSBnZXRDYWNoZWREVEYoaW50bCwgaW50bE9wdHMpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHRmLmZvcm1hdCh0aGlzLmR0LnRvSlNEYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0VG9QYXJ0cygpIHtcclxuICAgIHJldHVybiB0aGlzLmR0Zi5mb3JtYXRUb1BhcnRzKHRoaXMuZHQudG9KU0RhdGUoKSk7XHJcbiAgfVxyXG5cclxuICByZXNvbHZlZE9wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kdGYucmVzb2x2ZWRPcHRpb25zKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuY2xhc3MgUG9seVJlbEZvcm1hdHRlciB7XHJcbiAgY29uc3RydWN0b3IoaW50bCwgaXNFbmdsaXNoLCBvcHRzKSB7XHJcbiAgICB0aGlzLm9wdHMgPSB7IHN0eWxlOiAnbG9uZycsIC4uLm9wdHMgfTtcclxuICAgIGlmICghaXNFbmdsaXNoICYmIGhhc1JlbGF0aXZlKCkpIHtcclxuICAgICAgdGhpcy5ydGYgPSBnZXRDYWNoZWRSVEYoaW50bCwgb3B0cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtYXQoY291bnQsIHVuaXQpIHtcclxuICAgIGlmICh0aGlzLnJ0Zikge1xyXG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0KGNvdW50LCB1bml0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtYXRSZWxhdGl2ZVRpbWUodW5pdCwgY291bnQsIHRoaXMub3B0cy5udW1lcmljLCB0aGlzLm9wdHMuc3R5bGUgIT09ICdsb25nJyk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRUb1BhcnRzKGNvdW50LCB1bml0KSB7XHJcbiAgICBpZiAodGhpcy5ydGYpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucnRmLmZvcm1hdFRvUGFydHMoY291bnQsIHVuaXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcblxyXG5jbGFzcyBMb2NhbGUge1xyXG4gIHN0YXRpYyBmcm9tT3B0cyhvcHRzKSB7XHJcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShvcHRzLmxvY2FsZSwgb3B0cy5udW1iZXJpbmdTeXN0ZW0sIG9wdHMub3V0cHV0Q2FsZW5kYXIsIG9wdHMuZGVmYXVsdFRvRU4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIsIGRlZmF1bHRUb0VOID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHNwZWNpZmllZExvY2FsZSA9IGxvY2FsZSB8fCBTZXR0aW5ncy5kZWZhdWx0TG9jYWxlO1xyXG4gICAgLy8gdGhlIHN5c3RlbSBsb2NhbGUgaXMgdXNlZnVsIGZvciBodW1hbiByZWFkYWJsZSBzdHJpbmdzIGJ1dCBhbm5veWluZyBmb3IgcGFyc2luZy9mb3JtYXR0aW5nIGtub3duIGZvcm1hdHNcclxuICAgIGNvbnN0IGxvY2FsZVIgPSBzcGVjaWZpZWRMb2NhbGUgfHwgKGRlZmF1bHRUb0VOID8gJ2VuLVVTJyA6IHN5c3RlbUxvY2FsZSgpKTtcclxuICAgIGNvbnN0IG51bWJlcmluZ1N5c3RlbVIgPSBudW1iZXJpbmdTeXN0ZW0gfHwgU2V0dGluZ3MuZGVmYXVsdE51bWJlcmluZ1N5c3RlbTtcclxuICAgIGNvbnN0IG91dHB1dENhbGVuZGFyUiA9IG91dHB1dENhbGVuZGFyIHx8IFNldHRpbmdzLmRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcclxuICAgIHJldHVybiBuZXcgTG9jYWxlKGxvY2FsZVIsIG51bWJlcmluZ1N5c3RlbVIsIG91dHB1dENhbGVuZGFyUiwgc3BlY2lmaWVkTG9jYWxlKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXNldENhY2hlKCkge1xyXG4gICAgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xyXG4gICAgaW50bERUQ2FjaGUgPSB7fTtcclxuICAgIGludGxOdW1DYWNoZSA9IHt9O1xyXG4gICAgaW50bFJlbENhY2hlID0ge307XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU9iamVjdCh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciB9ID0ge30pIHtcclxuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcik7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihsb2NhbGUsIG51bWJlcmluZywgb3V0cHV0Q2FsZW5kYXIsIHNwZWNpZmllZExvY2FsZSkge1xyXG4gICAgY29uc3QgW3BhcnNlZExvY2FsZSwgcGFyc2VkTnVtYmVyaW5nU3lzdGVtLCBwYXJzZWRPdXRwdXRDYWxlbmRhcl0gPSBwYXJzZUxvY2FsZVN0cmluZyhsb2NhbGUpO1xyXG5cclxuICAgIHRoaXMubG9jYWxlID0gcGFyc2VkTG9jYWxlO1xyXG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSBudW1iZXJpbmcgfHwgcGFyc2VkTnVtYmVyaW5nU3lzdGVtIHx8IG51bGw7XHJcbiAgICB0aGlzLm91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXIgfHwgcGFyc2VkT3V0cHV0Q2FsZW5kYXIgfHwgbnVsbDtcclxuICAgIHRoaXMuaW50bCA9IGludGxDb25maWdTdHJpbmcodGhpcy5sb2NhbGUsIHRoaXMubnVtYmVyaW5nU3lzdGVtLCB0aGlzLm91dHB1dENhbGVuZGFyKTtcclxuXHJcbiAgICB0aGlzLndlZWtkYXlzQ2FjaGUgPSB7IGZvcm1hdDoge30sIHN0YW5kYWxvbmU6IHt9IH07XHJcbiAgICB0aGlzLm1vbnRoc0NhY2hlID0geyBmb3JtYXQ6IHt9LCBzdGFuZGFsb25lOiB7fSB9O1xyXG4gICAgdGhpcy5tZXJpZGllbUNhY2hlID0gbnVsbDtcclxuICAgIHRoaXMuZXJhQ2FjaGUgPSB7fTtcclxuXHJcbiAgICB0aGlzLnNwZWNpZmllZExvY2FsZSA9IHNwZWNpZmllZExvY2FsZTtcclxuICAgIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZhc3ROdW1iZXJzKCkge1xyXG4gICAgaWYgKHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID0gc3VwcG9ydHNGYXN0TnVtYmVycyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5mYXN0TnVtYmVyc0NhY2hlZDtcclxuICB9XHJcblxyXG4gIGxpc3RpbmdNb2RlKCkge1xyXG4gICAgY29uc3QgaXNBY3R1YWxseUVuID0gdGhpcy5pc0VuZ2xpc2goKTtcclxuICAgIGNvbnN0IGhhc05vV2VpcmRuZXNzID0gKHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBudWxsIHx8IHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSAnbGF0bicpXHJcbiAgICAgICAmJiAodGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gbnVsbCB8fCB0aGlzLm91dHB1dENhbGVuZGFyID09PSAnZ3JlZ29yeScpO1xyXG4gICAgcmV0dXJuIGlzQWN0dWFsbHlFbiAmJiBoYXNOb1dlaXJkbmVzcyA/ICdlbicgOiAnaW50bCc7XHJcbiAgfVxyXG5cclxuICBjbG9uZShhbHRzKSB7XHJcbiAgICBpZiAoIWFsdHMgfHwgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYWx0cykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUoXHJcbiAgICAgIGFsdHMubG9jYWxlIHx8IHRoaXMuc3BlY2lmaWVkTG9jYWxlLFxyXG4gICAgICBhbHRzLm51bWJlcmluZ1N5c3RlbSB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSxcclxuICAgICAgYWx0cy5vdXRwdXRDYWxlbmRhciB8fCB0aGlzLm91dHB1dENhbGVuZGFyLFxyXG4gICAgICBhbHRzLmRlZmF1bHRUb0VOIHx8IGZhbHNlLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlZGVmYXVsdFRvRU4oYWx0cyA9IHt9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbG9uZSh7IC4uLmFsdHMsIGRlZmF1bHRUb0VOOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVkZWZhdWx0VG9TeXN0ZW0oYWx0cyA9IHt9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbG9uZSh7IC4uLmFsdHMsIGRlZmF1bHRUb0VOOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIG1vbnRocyhsZW5ndGgsIGZvcm1hdCA9IGZhbHNlLCBkZWZhdWx0T0sgPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCBtb250aHMsICgpID0+IHtcclxuICAgICAgY29uc3QgaW50bCA9IGZvcm1hdCA/IHsgbW9udGg6IGxlbmd0aCwgZGF5OiAnbnVtZXJpYycgfSA6IHsgbW9udGg6IGxlbmd0aCB9O1xyXG4gICAgICBjb25zdCBmb3JtYXRTdHIgPSBmb3JtYXQgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJztcclxuICAgICAgaWYgKCF0aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xyXG4gICAgICAgIHRoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdID0gbWFwTW9udGhzKChkdCkgPT4gdGhpcy5leHRyYWN0KGR0LCBpbnRsLCAnbW9udGgnKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB3ZWVrZGF5cyhsZW5ndGgsIGZvcm1hdCA9IGZhbHNlLCBkZWZhdWx0T0sgPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCB3ZWVrZGF5cywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnRsID0gZm9ybWF0XHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICB3ZWVrZGF5OiBsZW5ndGgsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDogeyB3ZWVrZGF5OiBsZW5ndGggfTtcclxuICAgICAgY29uc3QgZm9ybWF0U3RyID0gZm9ybWF0ID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSc7XHJcbiAgICAgIGlmICghdGhpcy53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xyXG4gICAgICAgIHRoaXMud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBXZWVrZGF5cygoZHQpID0+IHRoaXMuZXh0cmFjdChkdCwgaW50bCwgJ3dlZWtkYXknKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG1lcmlkaWVtcyhkZWZhdWx0T0sgPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gbGlzdFN0dWZmKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICB1bmRlZmluZWQsXHJcbiAgICAgIGRlZmF1bHRPSyxcclxuICAgICAgKCkgPT4gbWVyaWRpZW1zLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgLy8gSW4gdGhlb3J5IHRoZXJlIGNvdWxkIGJlIGFyaWJpdHJhcnkgZGF5IHBlcmlvZHMuIFdlJ3JlIGdvbm5hIGFzc3VtZSB0aGVyZSBhcmUgZXhhY3RseSB0d29cclxuICAgICAgICAvLyBmb3IgQU0gYW5kIFBNLiBUaGlzIGlzIHByb2JhYmx5IHdyb25nLCBidXQgaXQncyBtYWtlcyBwYXJzaW5nIHdheSBlYXNpZXIuXHJcbiAgICAgICAgaWYgKCF0aGlzLm1lcmlkaWVtQ2FjaGUpIHtcclxuICAgICAgICAgIGNvbnN0IGludGwgPSB7IGhvdXI6ICdudW1lcmljJywgaG91ckN5Y2xlOiAnaDEyJyB9O1xyXG4gICAgICAgICAgdGhpcy5tZXJpZGllbUNhY2hlID0gW0RhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMsIDkpLCBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzLCAxOSldLm1hcChcclxuICAgICAgICAgICAgKGR0KSA9PiB0aGlzLmV4dHJhY3QoZHQsIGludGwsICdkYXlwZXJpb2QnKSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tZXJpZGllbUNhY2hlO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGVyYXMobGVuZ3RoLCBkZWZhdWx0T0sgPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCBlcmFzLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGludGwgPSB7IGVyYTogbGVuZ3RoIH07XHJcblxyXG4gICAgICAvLyBUaGlzIGlzIHByb2JsZW1hdGljLiBEaWZmZXJlbnQgY2FsZW5kYXJzIGFyZSBnb2luZyB0byBkZWZpbmUgZXJhcyB0b3RhbGx5IGRpZmZlcmVudGx5LiBXaGF0IEkgbmVlZCBpcyB0aGUgbWluaW11bSBzZXQgb2YgZGF0ZXNcclxuICAgICAgLy8gdG8gZGVmaW5pdGVseSBlbnVtZXJhdGUgdGhlbS5cclxuICAgICAgaWYgKCF0aGlzLmVyYUNhY2hlW2xlbmd0aF0pIHtcclxuICAgICAgICB0aGlzLmVyYUNhY2hlW2xlbmd0aF0gPSBbRGF0ZVRpbWUudXRjKC00MCwgMSwgMSksIERhdGVUaW1lLnV0YygyMDE3LCAxLCAxKV0ubWFwKChkdCkgPT4gdGhpcy5leHRyYWN0KGR0LCBpbnRsLCAnZXJhJykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5lcmFDYWNoZVtsZW5ndGhdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBleHRyYWN0KGR0LCBpbnRsT3B0cywgZmllbGQpIHtcclxuICAgIGNvbnN0IGRmID0gdGhpcy5kdEZvcm1hdHRlcihkdCwgaW50bE9wdHMpO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGRmLmZvcm1hdFRvUGFydHMoKTtcclxuICAgIGNvbnN0IG1hdGNoaW5nID0gcmVzdWx0cy5maW5kKChtKSA9PiBtLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gZmllbGQpO1xyXG4gICAgcmV0dXJuIG1hdGNoaW5nID8gbWF0Y2hpbmcudmFsdWUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgbnVtYmVyRm9ybWF0dGVyKG9wdHMgPSB7fSkge1xyXG4gICAgLy8gdGhpcyBmb3JjZXNpbXBsZSBvcHRpb24gaXMgbmV2ZXIgdXNlZCAodGhlIG9ubHkgY2FsbGVyIHNob3J0LWNpcmN1aXRzIG9uIGl0LCBidXQgaXQgc2VlbXMgc2FmZXIgdG8gbGVhdmUpXHJcbiAgICAvLyAoaW4gY29udHJhc3QsIHRoZSByZXN0IG9mIHRoZSBjb25kaXRpb24gaXMgdXNlZCBoZWF2aWx5KVxyXG4gICAgcmV0dXJuIG5ldyBQb2x5TnVtYmVyRm9ybWF0dGVyKHRoaXMuaW50bCwgb3B0cy5mb3JjZVNpbXBsZSB8fCB0aGlzLmZhc3ROdW1iZXJzLCBvcHRzKTtcclxuICB9XHJcblxyXG4gIGR0Rm9ybWF0dGVyKGR0LCBpbnRsT3B0cyA9IHt9KSB7XHJcbiAgICByZXR1cm4gbmV3IFBvbHlEYXRlRm9ybWF0dGVyKGR0LCB0aGlzLmludGwsIGludGxPcHRzKTtcclxuICB9XHJcblxyXG4gIHJlbEZvcm1hdHRlcihvcHRzID0ge30pIHtcclxuICAgIHJldHVybiBuZXcgUG9seVJlbEZvcm1hdHRlcih0aGlzLmludGwsIHRoaXMuaXNFbmdsaXNoKCksIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgbGlzdEZvcm1hdHRlcihvcHRzID0ge30pIHtcclxuICAgIHJldHVybiBnZXRDYWNoZWRMRih0aGlzLmludGwsIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgaXNFbmdsaXNoKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5sb2NhbGUgPT09ICdlbidcclxuICAgICAgIHx8IHRoaXMubG9jYWxlLnRvTG93ZXJDYXNlKCkgPT09ICdlbi11cydcclxuICAgICAgIHx8IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMuaW50bCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlLnN0YXJ0c1dpdGgoJ2VuLXVzJylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBlcXVhbHMob3RoZXIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMubG9jYWxlID09PSBvdGhlci5sb2NhbGVcclxuICAgICAgICYmIHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBvdGhlci5udW1iZXJpbmdTeXN0ZW1cclxuICAgICAgICYmIHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG90aGVyLm91dHB1dENhbGVuZGFyXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuICAqIFRoaXMgZmlsZSBoYW5kbGVzIHBhcnNpbmcgZm9yIHdlbGwtc3BlY2lmaWVkIGZvcm1hdHMuIEhlcmUncyBob3cgaXQgd29ya3M6XHJcbiAgKiBUd28gdGhpbmdzIGdvIGludG8gcGFyc2luZzogYSByZWdleCB0byBtYXRjaCB3aXRoIGFuZCBhbiBleHRyYWN0b3IgdG8gdGFrZSBhcGFydCB0aGUgZ3JvdXBzIGluIHRoZSBtYXRjaC5cclxuICAqIEFuIGV4dHJhY3RvciBpcyBqdXN0IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHJlZ2V4IG1hdGNoIGFycmF5IGFuZCByZXR1cm5zIGEgeyB5ZWFyOiAuLi4sIG1vbnRoOiAuLi4gfSBvYmplY3RcclxuICAqIHBhcnNlKCkgZG9lcyB0aGUgd29yayBvZiBleGVjdXRpbmcgdGhlIHJlZ2V4IGFuZCBhcHBseWluZyB0aGUgZXh0cmFjdG9yLiBJdCB0YWtlcyBtdWx0aXBsZSByZWdleC9leHRyYWN0b3IgcGFpcnMgdG8gdHJ5IGluIHNlcXVlbmNlLlxyXG4gICogRXh0cmFjdG9ycyBjYW4gdGFrZSBhIFwiY3Vyc29yXCIgcmVwcmVzZW50aW5nIHRoZSBvZmZzZXQgaW4gdGhlIG1hdGNoIHRvIGxvb2sgYXQuIFRoaXMgbWFrZXMgaXQgZWFzeSB0byBjb21iaW5lIGV4dHJhY3RvcnMuXHJcbiAgKiBjb21iaW5lRXh0cmFjdG9ycygpIGRvZXMgdGhlIHdvcmsgb2YgY29tYmluaW5nIHRoZW0sIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGN1cnNvciB0aHJvdWdoIG11bHRpcGxlIGV4dHJhY3Rpb25zLlxyXG4gICogU29tZSBleHRyYWN0aW9ucyBhcmUgc3VwZXIgZHVtYiBhbmQgc2ltcGxlUGFyc2UgYW5kIGZyb21TdHJpbmdzIGhlbHAgRFJZIHRoZW0uXHJcbiAgKi9cclxuXHJcbmZ1bmN0aW9uIGNvbWJpbmVSZWdleGVzKC4uLnJlZ2V4ZXMpIHtcclxuICBjb25zdCBmdWxsID0gcmVnZXhlcy5yZWR1Y2UoKGYsIHIpID0+IGYgKyByLnNvdXJjZSwgJycpO1xyXG4gIHJldHVybiBSZWdFeHAoYF4ke2Z1bGx9JGApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21iaW5lRXh0cmFjdG9ycyguLi5leHRyYWN0b3JzKSB7XHJcbiAgcmV0dXJuIChtKSA9PiBleHRyYWN0b3JzXHJcbiAgICAucmVkdWNlKFxyXG4gICAgICAoW21lcmdlZFZhbHMsIG1lcmdlZFpvbmUsIGN1cnNvcl0sIGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3ZhbCwgem9uZSwgbmV4dF0gPSBleChtLCBjdXJzb3IpO1xyXG4gICAgICAgIHJldHVybiBbeyAuLi5tZXJnZWRWYWxzLCAuLi52YWwgfSwgem9uZSB8fCBtZXJnZWRab25lLCBuZXh0XTtcclxuICAgICAgfSxcclxuICAgICAgW3t9LCBudWxsLCAxXSxcclxuICAgIClcclxuICAgIC5zbGljZSgwLCAyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2UocywgLi4ucGF0dGVybnMpIHtcclxuICBpZiAocyA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gW251bGwsIG51bGxdO1xyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBbcmVnZXgsIGV4dHJhY3Rvcl0gb2YgcGF0dGVybnMpIHtcclxuICAgIGNvbnN0IG0gPSByZWdleC5leGVjKHMpO1xyXG4gICAgaWYgKG0pIHtcclxuICAgICAgcmV0dXJuIGV4dHJhY3RvcihtKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIFtudWxsLCBudWxsXTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2ltcGxlUGFyc2UoLi4ua2V5cykge1xyXG4gIHJldHVybiAobWF0Y2gsIGN1cnNvcikgPT4ge1xyXG4gICAgY29uc3QgcmV0ID0ge307XHJcbiAgICBsZXQgaTtcclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXRba2V5c1tpXV0gPSBwYXJzZUludGVnZXIobWF0Y2hbY3Vyc29yICsgaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtyZXQsIG51bGwsIGN1cnNvciArIGldO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIElTTyBhbmQgU1FMIHBhcnNpbmdcclxuY29uc3Qgb2Zmc2V0UmVnZXggPSAvKD86KFopfChbKy1dXFxkXFxkKSg/Ojo/KFxcZFxcZCkpPykvO1xyXG5jb25zdCBpc29FeHRlbmRlZFpvbmUgPSBgKD86JHtvZmZzZXRSZWdleC5zb3VyY2V9Pyg/OlxcXFxbKCR7aWFuYVJlZ2V4LnNvdXJjZX0pXFxcXF0pPyk/YDtcclxuY29uc3QgaXNvVGltZUJhc2VSZWdleCA9IC8oXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Wy4sXShcXGR7MSwzMH0pKT8pPyk/LztcclxuY29uc3QgaXNvVGltZVJlZ2V4ID0gUmVnRXhwKGAke2lzb1RpbWVCYXNlUmVnZXguc291cmNlfSR7aXNvRXh0ZW5kZWRab25lfWApO1xyXG5jb25zdCBpc29UaW1lRXh0ZW5zaW9uUmVnZXggPSBSZWdFeHAoYCg/OlQke2lzb1RpbWVSZWdleC5zb3VyY2V9KT9gKTtcclxuY29uc3QgaXNvWW1kUmVnZXggPSAvKFsrLV1cXGR7Nn18XFxkezR9KSg/Oi0/KFxcZFxcZCkoPzotPyhcXGRcXGQpKT8pPy87XHJcbmNvbnN0IGlzb1dlZWtSZWdleCA9IC8oXFxkezR9KS0/VyhcXGRcXGQpKD86LT8oXFxkKSk/LztcclxuY29uc3QgaXNvT3JkaW5hbFJlZ2V4ID0gLyhcXGR7NH0pLT8oXFxkezN9KS87XHJcbmNvbnN0IGV4dHJhY3RJU09XZWVrRGF0YSA9IHNpbXBsZVBhcnNlKCd3ZWVrWWVhcicsICd3ZWVrTnVtYmVyJywgJ3dlZWtEYXknKTtcclxuY29uc3QgZXh0cmFjdElTT09yZGluYWxEYXRhID0gc2ltcGxlUGFyc2UoJ3llYXInLCAnb3JkaW5hbCcpO1xyXG5jb25zdCBzcWxZbWRSZWdleCA9IC8oXFxkezR9KS0oXFxkXFxkKS0oXFxkXFxkKS87IC8vIGR1bWJlZC1kb3duIHZlcnNpb24gb2YgdGhlIElTTyBvbmVcclxuY29uc3Qgc3FsVGltZVJlZ2V4ID0gUmVnRXhwKFxyXG4gIGAke2lzb1RpbWVCYXNlUmVnZXguc291cmNlfSA/KD86JHtvZmZzZXRSZWdleC5zb3VyY2V9fCgke2lhbmFSZWdleC5zb3VyY2V9KSk/YCxcclxuKTtcclxuY29uc3Qgc3FsVGltZUV4dGVuc2lvblJlZ2V4ID0gUmVnRXhwKGAoPzogJHtzcWxUaW1lUmVnZXguc291cmNlfSk/YCk7XHJcblxyXG5mdW5jdGlvbiBpbnQobWF0Y2gsIHBvcywgZmFsbGJhY2spIHtcclxuICBjb25zdCBtID0gbWF0Y2hbcG9zXTtcclxuICByZXR1cm4gaXNVbmRlZmluZWQobSkgPyBmYWxsYmFjayA6IHBhcnNlSW50ZWdlcihtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0cmFjdElTT1ltZChtYXRjaCwgY3Vyc29yKSB7XHJcbiAgY29uc3QgaXRlbSA9IHtcclxuICAgIHllYXI6IGludChtYXRjaCwgY3Vyc29yKSxcclxuICAgIG1vbnRoOiBpbnQobWF0Y2gsIGN1cnNvciArIDEsIDEpLFxyXG4gICAgZGF5OiBpbnQobWF0Y2gsIGN1cnNvciArIDIsIDEpLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBbaXRlbSwgbnVsbCwgY3Vyc29yICsgM107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4dHJhY3RJU09UaW1lKG1hdGNoLCBjdXJzb3IpIHtcclxuICBjb25zdCBpdGVtID0ge1xyXG4gICAgaG91cnM6IGludChtYXRjaCwgY3Vyc29yLCAwKSxcclxuICAgIG1pbnV0ZXM6IGludChtYXRjaCwgY3Vyc29yICsgMSwgMCksXHJcbiAgICBzZWNvbmRzOiBpbnQobWF0Y2gsIGN1cnNvciArIDIsIDApLFxyXG4gICAgbWlsbGlzZWNvbmRzOiBwYXJzZU1pbGxpcyhtYXRjaFtjdXJzb3IgKyAzXSksXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIFtpdGVtLCBudWxsLCBjdXJzb3IgKyA0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0cmFjdElTT09mZnNldChtYXRjaCwgY3Vyc29yKSB7XHJcbiAgY29uc3QgbG9jYWwgPSAhbWF0Y2hbY3Vyc29yXSAmJiAhbWF0Y2hbY3Vyc29yICsgMV07XHJcbiAgY29uc3QgZnVsbE9mZnNldCA9IHNpZ25lZE9mZnNldChtYXRjaFtjdXJzb3IgKyAxXSwgbWF0Y2hbY3Vyc29yICsgMl0pO1xyXG4gIGNvbnN0IHpvbmUgPSBsb2NhbCA/IG51bGwgOiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoZnVsbE9mZnNldCk7XHJcbiAgcmV0dXJuIFt7fSwgem9uZSwgY3Vyc29yICsgM107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4dHJhY3RJQU5BWm9uZShtYXRjaCwgY3Vyc29yKSB7XHJcbiAgY29uc3Qgem9uZSA9IG1hdGNoW2N1cnNvcl0gPyBJQU5BWm9uZS5jcmVhdGUobWF0Y2hbY3Vyc29yXSkgOiBudWxsO1xyXG4gIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDFdO1xyXG59XHJcblxyXG4vLyBJU08gdGltZSBwYXJzaW5nXHJcblxyXG5jb25zdCBpc29UaW1lT25seSA9IFJlZ0V4cChgXlQ/JHtpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZX0kYCk7XHJcblxyXG4vLyBJU08gZHVyYXRpb24gcGFyc2luZ1xyXG5cclxuY29uc3QgaXNvRHVyYXRpb24gPSAvXi0/UCg/Oig/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KVkpPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KU0pPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KVcpPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KUQpPyg/OlQoPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylIKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylNKT8oPzooLT9cXGR7MSwyMH0pKD86Wy4sXSgtP1xcZHsxLDIwfSkpP1MpPyk/KSQvO1xyXG5cclxuZnVuY3Rpb24gZXh0cmFjdElTT0R1cmF0aW9uKG1hdGNoKSB7XHJcbiAgY29uc3QgW3MsIHllYXJTdHIsIG1vbnRoU3RyLCB3ZWVrU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyLCBtaWxsaXNlY29uZHNTdHJdID0gbWF0Y2g7XHJcblxyXG4gIGNvbnN0IGhhc05lZ2F0aXZlUHJlZml4ID0gc1swXSA9PT0gJy0nO1xyXG4gIGNvbnN0IG5lZ2F0aXZlU2Vjb25kcyA9IHNlY29uZFN0ciAmJiBzZWNvbmRTdHJbMF0gPT09ICctJztcclxuXHJcbiAgY29uc3QgbWF5YmVOZWdhdGUgPSAobnVtLCBmb3JjZSA9IGZhbHNlKSA9PiAobnVtICE9PSB1bmRlZmluZWQgJiYgKGZvcmNlIHx8IChudW0gJiYgaGFzTmVnYXRpdmVQcmVmaXgpKSA/IC1udW0gOiBudW0pO1xyXG5cclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICB5ZWFyczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyh5ZWFyU3RyKSksXHJcbiAgICAgIG1vbnRoczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhtb250aFN0cikpLFxyXG4gICAgICB3ZWVrczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyh3ZWVrU3RyKSksXHJcbiAgICAgIGRheXM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoZGF5U3RyKSksXHJcbiAgICAgIGhvdXJzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKGhvdXJTdHIpKSxcclxuICAgICAgbWludXRlczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhtaW51dGVTdHIpKSxcclxuICAgICAgc2Vjb25kczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhzZWNvbmRTdHIpLCBzZWNvbmRTdHIgPT09ICctMCcpLFxyXG4gICAgICBtaWxsaXNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlTWlsbGlzKG1pbGxpc2Vjb25kc1N0ciksIG5lZ2F0aXZlU2Vjb25kcyksXHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuXHJcbi8vIFRoZXNlIGFyZSBhIGxpdHRsZSBicmFpbmRlYWQuIEVEVCAqc2hvdWxkKiB0ZWxsIHVzIHRoYXQgd2UncmUgaW4sIHNheSwgQW1lcmljYS9OZXdfWW9ya1xyXG4vLyBhbmQgbm90IGp1c3QgdGhhdCB3ZSdyZSBpbiAtMjQwICpyaWdodCBub3cqLiBCdXQgc2luY2UgSSBkb24ndCB0aGluayB0aGVzZSBhcmUgdXNlZCB0aGF0IG9mdGVuXHJcbi8vIEknbSBqdXN0IGdvaW5nIHRvIGlnbm9yZSB0aGF0XHJcbmNvbnN0IG9ic09mZnNldHMgPSB7XHJcbiAgR01UOiAwLFxyXG4gIEVEVDogLTQgKiA2MCxcclxuICBFU1Q6IC01ICogNjAsXHJcbiAgQ0RUOiAtNSAqIDYwLFxyXG4gIENTVDogLTYgKiA2MCxcclxuICBNRFQ6IC02ICogNjAsXHJcbiAgTVNUOiAtNyAqIDYwLFxyXG4gIFBEVDogLTcgKiA2MCxcclxuICBQU1Q6IC04ICogNjAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cikge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgIHllYXI6IHllYXJTdHIubGVuZ3RoID09PSAyID8gdW50cnVuY2F0ZVllYXIocGFyc2VJbnRlZ2VyKHllYXJTdHIpKSA6IHBhcnNlSW50ZWdlcih5ZWFyU3RyKSxcclxuICAgIG1vbnRoOiBtb250aHNTaG9ydC5pbmRleE9mKG1vbnRoU3RyKSArIDEsXHJcbiAgICBkYXk6IHBhcnNlSW50ZWdlcihkYXlTdHIpLFxyXG4gICAgaG91cjogcGFyc2VJbnRlZ2VyKGhvdXJTdHIpLFxyXG4gICAgbWludXRlOiBwYXJzZUludGVnZXIobWludXRlU3RyKSxcclxuICB9O1xyXG5cclxuICBpZiAoc2Vjb25kU3RyKSByZXN1bHQuc2Vjb25kID0gcGFyc2VJbnRlZ2VyKHNlY29uZFN0cik7XHJcbiAgaWYgKHdlZWtkYXlTdHIpIHtcclxuICAgIHJlc3VsdC53ZWVrZGF5ID0gd2Vla2RheVN0ci5sZW5ndGggPiAzXHJcbiAgICAgID8gd2Vla2RheXNMb25nLmluZGV4T2Yod2Vla2RheVN0cikgKyAxXHJcbiAgICAgIDogd2Vla2RheXNTaG9ydC5pbmRleE9mKHdlZWtkYXlTdHIpICsgMTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIFJGQyAyODIyLzUzMjJcclxuY29uc3QgcmZjMjgyMiA9IC9eKD86KE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksXFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfCg/OihbKy1dXFxkXFxkKShcXGRcXGQpKSkkLztcclxuXHJcbmZ1bmN0aW9uIGV4dHJhY3RSRkMyODIyKG1hdGNoKSB7XHJcbiAgY29uc3QgW1xyXG4gICAgLFxyXG4gICAgd2Vla2RheVN0cixcclxuICAgIGRheVN0cixcclxuICAgIG1vbnRoU3RyLFxyXG4gICAgeWVhclN0cixcclxuICAgIGhvdXJTdHIsXHJcbiAgICBtaW51dGVTdHIsXHJcbiAgICBzZWNvbmRTdHIsXHJcbiAgICBvYnNPZmZzZXQsXHJcbiAgICBtaWxPZmZzZXQsXHJcbiAgICBvZmZIb3VyU3RyLFxyXG4gICAgb2ZmTWludXRlU3RyLFxyXG4gIF0gPSBtYXRjaDtcclxuICBjb25zdCByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XHJcblxyXG4gIGxldCBvZmZzZXQ7XHJcbiAgaWYgKG9ic09mZnNldCkge1xyXG4gICAgb2Zmc2V0ID0gb2JzT2Zmc2V0c1tvYnNPZmZzZXRdO1xyXG4gIH0gZWxzZSBpZiAobWlsT2Zmc2V0KSB7XHJcbiAgICBvZmZzZXQgPSAwO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvZmZzZXQgPSBzaWduZWRPZmZzZXQob2ZmSG91clN0ciwgb2ZmTWludXRlU3RyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBbcmVzdWx0LCBuZXcgRml4ZWRPZmZzZXRab25lKG9mZnNldCldO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzKSB7XHJcbiAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcclxuICByZXR1cm4gc1xyXG4gICAgLnJlcGxhY2UoL1xcKFteKV0qXFwpfFtcXG5cXHRdL2csICcgJylcclxuICAgIC5yZXBsYWNlKC8oXFxzXFxzKykvZywgJyAnKVxyXG4gICAgLnRyaW0oKTtcclxufVxyXG5cclxuLy8gaHR0cCBkYXRlXHJcblxyXG5jb25zdCByZmMxMTIzID0gL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSwgKFxcZFxcZCkgKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKSAoXFxkezR9KSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSBHTVQkLztcclxuY29uc3QgcmZjODUwID0gL14oTW9uZGF5fFR1ZXNkYXl8V2VkbmVzZGF5fFRodXJzZGF5fEZyaWRheXxTYXR1cmRheXxTdW5kYXkpLCAoXFxkXFxkKS0oSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpLShcXGRcXGQpIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIEdNVCQvO1xyXG5jb25zdCBhc2NpaSA9IC9eKE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1bikgKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKSAoIFxcZHxcXGRcXGQpIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIChcXGR7NH0pJC87XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0UkZDMTEyM09yODUwKG1hdGNoKSB7XHJcbiAgY29uc3QgWywgd2Vla2RheVN0ciwgZGF5U3RyLCBtb250aFN0ciwgeWVhclN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHJdID0gbWF0Y2g7XHJcbiAgY29uc3QgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xyXG4gIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0QVNDSUkobWF0Y2gpIHtcclxuICBjb25zdCBbLCB3ZWVrZGF5U3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0ciwgeWVhclN0cl0gPSBtYXRjaDtcclxuICBjb25zdCByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XHJcbiAgcmV0dXJuIFtyZXN1bHQsIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZV07XHJcbn1cclxuXHJcbmNvbnN0IGlzb1ltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29ZbWRSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcclxuY29uc3QgaXNvV2Vla1dpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29XZWVrUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XHJcbmNvbnN0IGlzb09yZGluYWxXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvT3JkaW5hbFJlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xyXG5jb25zdCBpc29UaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1RpbWVSZWdleCk7XHJcblxyXG5jb25zdCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKFxyXG4gIGV4dHJhY3RJU09ZbWQsXHJcbiAgZXh0cmFjdElTT1RpbWUsXHJcbiAgZXh0cmFjdElTT09mZnNldCxcclxuICBleHRyYWN0SUFOQVpvbmUsXHJcbik7XHJcbmNvbnN0IGV4dHJhY3RJU09XZWVrVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKFxyXG4gIGV4dHJhY3RJU09XZWVrRGF0YSxcclxuICBleHRyYWN0SVNPVGltZSxcclxuICBleHRyYWN0SVNPT2Zmc2V0LFxyXG4gIGV4dHJhY3RJQU5BWm9uZSxcclxuKTtcclxuY29uc3QgZXh0cmFjdElTT09yZGluYWxEYXRlQW5kVGltZSA9IGNvbWJpbmVFeHRyYWN0b3JzKFxyXG4gIGV4dHJhY3RJU09PcmRpbmFsRGF0YSxcclxuICBleHRyYWN0SVNPVGltZSxcclxuICBleHRyYWN0SVNPT2Zmc2V0LFxyXG4gIGV4dHJhY3RJQU5BWm9uZSxcclxuKTtcclxuY29uc3QgZXh0cmFjdElTT1RpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhcclxuICBleHRyYWN0SVNPVGltZSxcclxuICBleHRyYWN0SVNPT2Zmc2V0LFxyXG4gIGV4dHJhY3RJQU5BWm9uZSxcclxuKTtcclxuXHJcbi8qXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcblxyXG5mdW5jdGlvbiBwYXJzZUlTT0RhdGUocykge1xyXG4gIHJldHVybiBwYXJzZShcclxuICAgIHMsXHJcbiAgICBbaXNvWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXRdLFxyXG4gICAgW2lzb1dlZWtXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPV2Vla1RpbWVBbmRPZmZzZXRdLFxyXG4gICAgW2lzb09yZGluYWxXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPT3JkaW5hbERhdGVBbmRUaW1lXSxcclxuICAgIFtpc29UaW1lQ29tYmluZWRSZWdleCwgZXh0cmFjdElTT1RpbWVBbmRPZmZzZXRdLFxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlUkZDMjgyMkRhdGUocykge1xyXG4gIHJldHVybiBwYXJzZShwcmVwcm9jZXNzUkZDMjgyMihzKSwgW3JmYzI4MjIsIGV4dHJhY3RSRkMyODIyXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlSFRUUERhdGUocykge1xyXG4gIHJldHVybiBwYXJzZShcclxuICAgIHMsXHJcbiAgICBbcmZjMTEyMywgZXh0cmFjdFJGQzExMjNPcjg1MF0sXHJcbiAgICBbcmZjODUwLCBleHRyYWN0UkZDMTEyM09yODUwXSxcclxuICAgIFthc2NpaSwgZXh0cmFjdEFTQ0lJXSxcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUlTT0R1cmF0aW9uKHMpIHtcclxuICByZXR1cm4gcGFyc2UocywgW2lzb0R1cmF0aW9uLCBleHRyYWN0SVNPRHVyYXRpb25dKTtcclxufVxyXG5cclxuY29uc3QgZXh0cmFjdElTT1RpbWVPbmx5ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1RpbWUpO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VJU09UaW1lT25seShzKSB7XHJcbiAgcmV0dXJuIHBhcnNlKHMsIFtpc29UaW1lT25seSwgZXh0cmFjdElTT1RpbWVPbmx5XSk7XHJcbn1cclxuXHJcbmNvbnN0IHNxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhzcWxZbWRSZWdleCwgc3FsVGltZUV4dGVuc2lvblJlZ2V4KTtcclxuY29uc3Qgc3FsVGltZUNvbWJpbmVkUmVnZXggPSBjb21iaW5lUmVnZXhlcyhzcWxUaW1lUmVnZXgpO1xyXG5cclxuY29uc3QgZXh0cmFjdElTT1RpbWVPZmZzZXRBbmRJQU5BWm9uZSA9IGNvbWJpbmVFeHRyYWN0b3JzKFxyXG4gIGV4dHJhY3RJU09UaW1lLFxyXG4gIGV4dHJhY3RJU09PZmZzZXQsXHJcbiAgZXh0cmFjdElBTkFab25lLFxyXG4pO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VTUUwocykge1xyXG4gIHJldHVybiBwYXJzZShcclxuICAgIHMsXHJcbiAgICBbc3FsWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXRdLFxyXG4gICAgW3NxbFRpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZU9mZnNldEFuZElBTkFab25lXSxcclxuICApO1xyXG59XHJcblxyXG5jb25zdCBJTlZBTElEJDIgPSAnSW52YWxpZCBEdXJhdGlvbic7XHJcblxyXG4vLyB1bml0IGNvbnZlcnNpb24gY29uc3RhbnRzXHJcbmNvbnN0IGxvd09yZGVyTWF0cml4ID0ge1xyXG4gIHdlZWtzOiB7XHJcbiAgICBkYXlzOiA3LFxyXG4gICAgaG91cnM6IDcgKiAyNCxcclxuICAgIG1pbnV0ZXM6IDcgKiAyNCAqIDYwLFxyXG4gICAgc2Vjb25kczogNyAqIDI0ICogNjAgKiA2MCxcclxuICAgIG1pbGxpc2Vjb25kczogNyAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXHJcbiAgfSxcclxuICBkYXlzOiB7XHJcbiAgICBob3VyczogMjQsXHJcbiAgICBtaW51dGVzOiAyNCAqIDYwLFxyXG4gICAgc2Vjb25kczogMjQgKiA2MCAqIDYwLFxyXG4gICAgbWlsbGlzZWNvbmRzOiAyNCAqIDYwICogNjAgKiAxMDAwLFxyXG4gIH0sXHJcbiAgaG91cnM6IHsgbWludXRlczogNjAsIHNlY29uZHM6IDYwICogNjAsIG1pbGxpc2Vjb25kczogNjAgKiA2MCAqIDEwMDAgfSxcclxuICBtaW51dGVzOiB7IHNlY29uZHM6IDYwLCBtaWxsaXNlY29uZHM6IDYwICogMTAwMCB9LFxyXG4gIHNlY29uZHM6IHsgbWlsbGlzZWNvbmRzOiAxMDAwIH0sXHJcbn07XHJcbmNvbnN0IGNhc3VhbE1hdHJpeCA9IHtcclxuICB5ZWFyczoge1xyXG4gICAgcXVhcnRlcnM6IDQsXHJcbiAgICBtb250aHM6IDEyLFxyXG4gICAgd2Vla3M6IDUyLFxyXG4gICAgZGF5czogMzY1LFxyXG4gICAgaG91cnM6IDM2NSAqIDI0LFxyXG4gICAgbWludXRlczogMzY1ICogMjQgKiA2MCxcclxuICAgIHNlY29uZHM6IDM2NSAqIDI0ICogNjAgKiA2MCxcclxuICAgIG1pbGxpc2Vjb25kczogMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCxcclxuICB9LFxyXG4gIHF1YXJ0ZXJzOiB7XHJcbiAgICBtb250aHM6IDMsXHJcbiAgICB3ZWVrczogMTMsXHJcbiAgICBkYXlzOiA5MSxcclxuICAgIGhvdXJzOiA5MSAqIDI0LFxyXG4gICAgbWludXRlczogOTEgKiAyNCAqIDYwLFxyXG4gICAgc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAsXHJcbiAgICBtaWxsaXNlY29uZHM6IDkxICogMjQgKiA2MCAqIDYwICogMTAwMCxcclxuICB9LFxyXG4gIG1vbnRoczoge1xyXG4gICAgd2Vla3M6IDQsXHJcbiAgICBkYXlzOiAzMCxcclxuICAgIGhvdXJzOiAzMCAqIDI0LFxyXG4gICAgbWludXRlczogMzAgKiAyNCAqIDYwLFxyXG4gICAgc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAsXHJcbiAgICBtaWxsaXNlY29uZHM6IDMwICogMjQgKiA2MCAqIDYwICogMTAwMCxcclxuICB9LFxyXG5cclxuICAuLi5sb3dPcmRlck1hdHJpeCxcclxufTtcclxuY29uc3QgZGF5c0luWWVhckFjY3VyYXRlID0gMTQ2MDk3LjAgLyA0MDA7XHJcbmNvbnN0IGRheXNJbk1vbnRoQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQ4MDA7XHJcbmNvbnN0IGFjY3VyYXRlTWF0cml4ID0ge1xyXG4gIHllYXJzOiB7XHJcbiAgICBxdWFydGVyczogNCxcclxuICAgIG1vbnRoczogMTIsXHJcbiAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gNyxcclxuICAgIGRheXM6IGRheXNJblllYXJBY2N1cmF0ZSxcclxuICAgIGhvdXJzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCxcclxuICAgIG1pbnV0ZXM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAsXHJcbiAgICBzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAsXHJcbiAgICBtaWxsaXNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXHJcbiAgfSxcclxuICBxdWFydGVyczoge1xyXG4gICAgbW9udGhzOiAzLFxyXG4gICAgd2Vla3M6IGRheXNJblllYXJBY2N1cmF0ZSAvIDI4LFxyXG4gICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlIC8gNCxcclxuICAgIGhvdXJzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQpIC8gNCxcclxuICAgIG1pbnV0ZXM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwKSAvIDQsXHJcbiAgICBzZWNvbmRzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwKSAvIDQsXHJcbiAgICBtaWxsaXNlY29uZHM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwKSAvIDQsXHJcbiAgfSxcclxuICBtb250aHM6IHtcclxuICAgIHdlZWtzOiBkYXlzSW5Nb250aEFjY3VyYXRlIC8gNyxcclxuICAgIGRheXM6IGRheXNJbk1vbnRoQWNjdXJhdGUsXHJcbiAgICBob3VyczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0LFxyXG4gICAgbWludXRlczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0ICogNjAsXHJcbiAgICBzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxyXG4gICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMCxcclxuICB9LFxyXG4gIC4uLmxvd09yZGVyTWF0cml4LFxyXG59O1xyXG5cclxuLy8gdW5pdHMgb3JkZXJlZCBieSBzaXplXHJcbmNvbnN0IG9yZGVyZWRVbml0cyQxID0gW1xyXG4gICd5ZWFycycsXHJcbiAgJ3F1YXJ0ZXJzJyxcclxuICAnbW9udGhzJyxcclxuICAnd2Vla3MnLFxyXG4gICdkYXlzJyxcclxuICAnaG91cnMnLFxyXG4gICdtaW51dGVzJyxcclxuICAnc2Vjb25kcycsXHJcbiAgJ21pbGxpc2Vjb25kcycsXHJcbl07XHJcblxyXG5jb25zdCByZXZlcnNlVW5pdHMgPSBvcmRlcmVkVW5pdHMkMS5zbGljZSgwKS5yZXZlcnNlKCk7XHJcblxyXG4vLyBjbG9uZSByZWFsbHkgbWVhbnMgXCJjcmVhdGUgYW5vdGhlciBpbnN0YW5jZSBqdXN0IGxpa2UgdGhpcyBvbmUsIGJ1dCB3aXRoIHRoZXNlIGNoYW5nZXNcIlxyXG5mdW5jdGlvbiBjbG9uZSQxKGR1ciwgYWx0cywgY2xlYXIgPSBmYWxzZSkge1xyXG4gIC8vIGRlZXAgbWVyZ2UgZm9yIHZhbHNcclxuICBjb25zdCBjb25mID0ge1xyXG4gICAgdmFsdWVzOiBjbGVhciA/IGFsdHMudmFsdWVzIDogeyAuLi5kdXIudmFsdWVzLCAuLi4oYWx0cy52YWx1ZXMgfHwge30pIH0sXHJcbiAgICBsb2M6IGR1ci5sb2MuY2xvbmUoYWx0cy5sb2MpLFxyXG4gICAgY29udmVyc2lvbkFjY3VyYWN5OiBhbHRzLmNvbnZlcnNpb25BY2N1cmFjeSB8fCBkdXIuY29udmVyc2lvbkFjY3VyYWN5LFxyXG4gIH07XHJcbiAgcmV0dXJuIG5ldyBEdXJhdGlvbihjb25mKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYW50aVRydW5jKG4pIHtcclxuICByZXR1cm4gbiA8IDAgPyBNYXRoLmZsb29yKG4pIDogTWF0aC5jZWlsKG4pO1xyXG59XHJcblxyXG4vLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXHJcbmZ1bmN0aW9uIGNvbnZlcnQobWF0cml4LCBmcm9tTWFwLCBmcm9tVW5pdCwgdG9NYXAsIHRvVW5pdCkge1xyXG4gIGNvbnN0IGNvbnYgPSBtYXRyaXhbdG9Vbml0XVtmcm9tVW5pdF07XHJcbiAgY29uc3QgcmF3ID0gZnJvbU1hcFtmcm9tVW5pdF0gLyBjb252O1xyXG4gIGNvbnN0IHNhbWVTaWduID0gTWF0aC5zaWduKHJhdykgPT09IE1hdGguc2lnbih0b01hcFt0b1VuaXRdKTtcclxuICAvLyBvaywgc28gdGhpcyBpcyB3aWxkLCBidXQgc2VlIHRoZSBtYXRyaXggaW4gdGhlIHRlc3RzXHJcbiAgY29uc3QgYWRkZWQgPSAhc2FtZVNpZ24gJiYgdG9NYXBbdG9Vbml0XSAhPT0gMCAmJiBNYXRoLmFicyhyYXcpIDw9IDEgPyBhbnRpVHJ1bmMocmF3KSA6IE1hdGgudHJ1bmMocmF3KTtcclxuICB0b01hcFt0b1VuaXRdICs9IGFkZGVkO1xyXG4gIGZyb21NYXBbZnJvbVVuaXRdIC09IGFkZGVkICogY29udjtcclxufVxyXG5cclxuLy8gTkI6IG11dGF0ZXMgcGFyYW1ldGVyc1xyXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZXMobWF0cml4LCB2YWxzKSB7XHJcbiAgcmV2ZXJzZVVuaXRzLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcclxuICAgIGlmICghaXNVbmRlZmluZWQodmFsc1tjdXJyZW50XSkpIHtcclxuICAgICAgaWYgKHByZXZpb3VzKSB7XHJcbiAgICAgICAgY29udmVydChtYXRyaXgsIHZhbHMsIHByZXZpb3VzLCB2YWxzLCBjdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY3VycmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBwcmV2aW91cztcclxuICB9LCBudWxsKTtcclxufVxyXG5cclxuLyoqXHJcbiAgKiBBIER1cmF0aW9uIG9iamVjdCByZXByZXNlbnRzIGEgcGVyaW9kIG9mIHRpbWUsIGxpa2UgXCIyIG1vbnRoc1wiIG9yIFwiMSBkYXksIDEgaG91clwiLiBDb25jZXB0dWFsbHksIGl0J3MganVzdCBhIG1hcCBvZiB1bml0cyB0byB0aGVpciBxdWFudGl0aWVzLCBhY2NvbXBhbmllZCBieSBzb21lIGFkZGl0aW9uYWwgY29uZmlndXJhdGlvbiBhbmQgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS4gVGhleSBjYW4gYmUgdXNlZCBvbiB0aGVpciBvd24gb3IgaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBMdXhvbiB0eXBlczsgZm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlIHtAbGluayBEYXRlVGltZSNwbHVzfSB0byBhZGQgYSBEdXJhdGlvbiBvYmplY3QgdG8gYSBEYXRlVGltZSwgcHJvZHVjaW5nIGFub3RoZXIgRGF0ZVRpbWUuXHJcbiAgKlxyXG4gICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIGNvbW1vbmx5IHVzZWQgbWV0aG9kcyBhbmQgZ2V0dGVycyBpbiBEdXJhdGlvbjpcclxuICAqXHJcbiAgKiAqICoqQ3JlYXRpb24qKiBUbyBjcmVhdGUgYSBEdXJhdGlvbiwgdXNlIHtAbGluayBEdXJhdGlvbiNmcm9tTWlsbGlzfSwge0BsaW5rIER1cmF0aW9uI2Zyb21PYmplY3R9LCBvciB7QGxpbmsgRHVyYXRpb24jZnJvbUlTT30uXHJcbiAgKiAqICoqVW5pdCB2YWx1ZXMqKiBTZWUgdGhlIHtAbGluayBEdXJhdGlvbiN5ZWFyc30sIHtAbGluayBEdXJhdGlvbiNtb250aHN9LCB7QGxpbmsgRHVyYXRpb24jd2Vla3N9LCB7QGxpbmsgRHVyYXRpb24jZGF5c30sIHtAbGluayBEdXJhdGlvbiNob3Vyc30sIHtAbGluayBEdXJhdGlvbiNtaW51dGVzfSwge0BsaW5rIER1cmF0aW9uI3NlY29uZHN9LCB7QGxpbmsgRHVyYXRpb24jbWlsbGlzZWNvbmRzfSBhY2Nlc3NvcnMuXHJcbiAgKiAqICoqQ29uZmlndXJhdGlvbioqIFNlZSAge0BsaW5rIER1cmF0aW9uI2xvY2FsZX0gYW5kIHtAbGluayBEdXJhdGlvbiNudW1iZXJpbmdTeXN0ZW19IGFjY2Vzc29ycy5cclxuICAqICogKipUcmFuc2Zvcm1hdGlvbioqIFRvIGNyZWF0ZSBuZXcgRHVyYXRpb25zIG91dCBvZiBvbGQgb25lcyB1c2Uge0BsaW5rIER1cmF0aW9uI3BsdXN9LCB7QGxpbmsgRHVyYXRpb24jbWludXN9LCB7QGxpbmsgRHVyYXRpb24jbm9ybWFsaXplfSwge0BsaW5rIER1cmF0aW9uI3NldH0sIHtAbGluayBEdXJhdGlvbiNyZWNvbmZpZ3VyZX0sIHtAbGluayBEdXJhdGlvbiNzaGlmdFRvfSwgYW5kIHtAbGluayBEdXJhdGlvbiNuZWdhdGV9LlxyXG4gICogKiAqKk91dHB1dCoqIFRvIGNvbnZlcnQgdGhlIER1cmF0aW9uIGludG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCBzZWUge0BsaW5rIER1cmF0aW9uI2FzfSwge0BsaW5rIER1cmF0aW9uI3RvSVNPfSwge0BsaW5rIER1cmF0aW9uI3RvRm9ybWF0fSwgYW5kIHtAbGluayBEdXJhdGlvbiN0b0pTT059XHJcbiAgKlxyXG4gICogVGhlcmUncyBhcmUgbW9yZSBtZXRob2RzIGRvY3VtZW50ZWQgYmVsb3cuIEluIGFkZGl0aW9uLCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBzdWJ0bGVyIHRvcGljcyBsaWtlIGludGVybmF0aW9uYWxpemF0aW9uIGFuZCB2YWxpZGl0eSwgc2VlIHRoZSBleHRlcm5hbCBkb2N1bWVudGF0aW9uLlxyXG4gICovXHJcbmNsYXNzIER1cmF0aW9uIHtcclxuICAvKipcclxuICAgICogQHByaXZhdGVcclxuICAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBjb25zdCBhY2N1cmF0ZSA9IGNvbmZpZy5jb252ZXJzaW9uQWNjdXJhY3kgPT09ICdsb25ndGVybScgfHwgZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMudmFsdWVzID0gY29uZmlnLnZhbHVlcztcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5sb2MgPSBjb25maWcubG9jIHx8IExvY2FsZS5jcmVhdGUoKTtcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5jb252ZXJzaW9uQWNjdXJhY3kgPSBhY2N1cmF0ZSA/ICdsb25ndGVybScgOiAnY2FzdWFsJztcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5tYXRyaXggPSBhY2N1cmF0ZSA/IGFjY3VyYXRlTWF0cml4IDogY2FzdWFsTWF0cml4O1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLmlzTHV4b25EdXJhdGlvbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIER1cmF0aW9uIGZyb20gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQgb2YgbWlsbGlzZWNvbmRzXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21NaWxsaXMoY291bnQsIG9wdHMpIHtcclxuICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWlsbGlzZWNvbmRzOiBjb3VudCB9LCBvcHRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXJzJyBhbmQgJ2hvdXJzJy5cclxuICAgICogSWYgdGhpcyBvYmplY3QgaXMgZW1wdHkgdGhlbiBhIHplcm8gbWlsbGlzZWNvbmRzIGR1cmF0aW9uIGlzIHJldHVybmVkLlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBjcmVhdGUgdGhlIERhdGVUaW1lIGZyb21cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai55ZWFyc1xyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnF1YXJ0ZXJzXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubW9udGhzXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla3NcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5kYXlzXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91cnNcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taW51dGVzXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouc2Vjb25kc1xyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbGxpc2Vjb25kc1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9W11dIC0gb3B0aW9ucyBmb3IgY3JlYXRpbmcgdGhpcyBEdXJhdGlvblxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21PYmplY3Qob2JqLCBvcHRzID0ge30pIHtcclxuICAgIGlmIChvYmogPT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXHJcbiAgICAgICAgYER1cmF0aW9uLmZyb21PYmplY3Q6IGFyZ3VtZW50IGV4cGVjdGVkIHRvIGJlIGFuIG9iamVjdCwgZ290ICR7XHJcbiAgICAgICAgICBvYmogPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2Ygb2JqXHJcbiAgICAgICAgfWAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBEdXJhdGlvbih7XHJcbiAgICAgIHZhbHVlczogbm9ybWFsaXplT2JqZWN0KG9iaiwgRHVyYXRpb24ubm9ybWFsaXplVW5pdCksXHJcbiAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0cyksXHJcbiAgICAgIGNvbnZlcnNpb25BY2N1cmFjeTogb3B0cy5jb252ZXJzaW9uQWNjdXJhY3ksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIER1cmF0aW9uTGlrZS5cclxuICAgICpcclxuICAgICogQHBhcmFtIHtPYmplY3QgfCBudW1iZXIgfCBEdXJhdGlvbn0gZHVyYXRpb25MaWtlXHJcbiAgICAqIE9uZSBvZjpcclxuICAgICogLSBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXJzJyBhbmQgJ2hvdXJzJy5cclxuICAgICogLSBudW1iZXIgcmVwcmVzZW50aW5nIG1pbGxpc2Vjb25kc1xyXG4gICAgKiAtIER1cmF0aW9uIGluc3RhbmNlXHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbkxpa2UpIHtcclxuICAgIGlmIChpc051bWJlcihkdXJhdGlvbkxpa2UpKSB7XHJcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tTWlsbGlzKGR1cmF0aW9uTGlrZSk7XHJcbiAgICB9IGlmIChEdXJhdGlvbi5pc0R1cmF0aW9uKGR1cmF0aW9uTGlrZSkpIHtcclxuICAgICAgcmV0dXJuIGR1cmF0aW9uTGlrZTtcclxuICAgIH0gaWYgKHR5cGVvZiBkdXJhdGlvbkxpa2UgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KGR1cmF0aW9uTGlrZSk7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXHJcbiAgICAgIGBVbmtub3duIGR1cmF0aW9uIGFyZ3VtZW50ICR7ZHVyYXRpb25MaWtlfSBvZiB0eXBlICR7dHlwZW9mIGR1cmF0aW9uTGlrZX1gLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGFuIElTTyA4NjAxIGR1cmF0aW9uIHN0cmluZy5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0ZXh0IHRvIHBhcnNlXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9uc1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQM1k2TTFXNERUMTJIMzBNNVMnKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMywgbW9udGhzOiA2LCB3ZWVrczogMSwgZGF5czogNCwgaG91cnM6IDEyLCBtaW51dGVzOiAzMCwgc2Vjb25kczogNSB9XHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1BUMjNIJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDIzIH1cclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDVZM00nKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogNSwgbW9udGhzOiAzIH1cclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tSVNPKHRleHQsIG9wdHMpIHtcclxuICAgIGNvbnN0IFtwYXJzZWRdID0gcGFyc2VJU09EdXJhdGlvbih0ZXh0KTtcclxuICAgIGlmIChwYXJzZWQpIHtcclxuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QocGFyc2VkLCBvcHRzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKCd1bnBhcnNhYmxlJywgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGFuIElTTyA4NjAxIHRpbWUgc3RyaW5nLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRleHQgdG8gcGFyc2VcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBwYXJzaW5nXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZXNcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExOjIyOjMzLjQ0NCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMjIsIHNlY29uZHM6IDMzLCBtaWxsaXNlY29uZHM6IDQ0NCB9XHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMTowMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCdUMTE6MDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTEwMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCdUMTEwMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbUlTT1RpbWUodGV4dCwgb3B0cykge1xyXG4gICAgY29uc3QgW3BhcnNlZF0gPSBwYXJzZUlTT1RpbWVPbmx5KHRleHQpO1xyXG4gICAgaWYgKHBhcnNlZCkge1xyXG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChwYXJzZWQsIG9wdHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoJ3VucGFyc2FibGUnLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMWApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhbiBpbnZhbGlkIER1cmF0aW9uLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBkYXRldGltZSBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24gPSBudWxsKSB7XHJcbiAgICBpZiAoIXJlYXNvbikge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoJ25lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRHVyYXRpb24gaXMgaW52YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XHJcblxyXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkRHVyYXRpb25FcnJvcihpbnZhbGlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgRHVyYXRpb24oeyBpbnZhbGlkIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqL1xyXG4gIHN0YXRpYyBub3JtYWxpemVVbml0KHVuaXQpIHtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB7XHJcbiAgICAgIHllYXI6ICd5ZWFycycsXHJcbiAgICAgIHllYXJzOiAneWVhcnMnLFxyXG4gICAgICBxdWFydGVyOiAncXVhcnRlcnMnLFxyXG4gICAgICBxdWFydGVyczogJ3F1YXJ0ZXJzJyxcclxuICAgICAgbW9udGg6ICdtb250aHMnLFxyXG4gICAgICBtb250aHM6ICdtb250aHMnLFxyXG4gICAgICB3ZWVrOiAnd2Vla3MnLFxyXG4gICAgICB3ZWVrczogJ3dlZWtzJyxcclxuICAgICAgZGF5OiAnZGF5cycsXHJcbiAgICAgIGRheXM6ICdkYXlzJyxcclxuICAgICAgaG91cjogJ2hvdXJzJyxcclxuICAgICAgaG91cnM6ICdob3VycycsXHJcbiAgICAgIG1pbnV0ZTogJ21pbnV0ZXMnLFxyXG4gICAgICBtaW51dGVzOiAnbWludXRlcycsXHJcbiAgICAgIHNlY29uZDogJ3NlY29uZHMnLFxyXG4gICAgICBzZWNvbmRzOiAnc2Vjb25kcycsXHJcbiAgICAgIG1pbGxpc2Vjb25kOiAnbWlsbGlzZWNvbmRzJyxcclxuICAgICAgbWlsbGlzZWNvbmRzOiAnbWlsbGlzZWNvbmRzJyxcclxuICAgIH1bdW5pdCA/IHVuaXQudG9Mb3dlckNhc2UoKSA6IHVuaXRdO1xyXG5cclxuICAgIGlmICghbm9ybWFsaXplZCkgdGhyb3cgbmV3IEludmFsaWRVbml0RXJyb3IodW5pdCk7XHJcblxyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGEgRHVyYXRpb24uIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcclxuICAgICogQHBhcmFtIHtvYmplY3R9IG9cclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgc3RhdGljIGlzRHVyYXRpb24obykge1xyXG4gICAgcmV0dXJuIChvICYmIG8uaXNMdXhvbkR1cmF0aW9uKSB8fCBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgIHRoZSBsb2NhbGUgb2YgYSBEdXJhdGlvbiwgc3VjaCAnZW4tR0InXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBsb2NhbGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubG9jYWxlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIG51bWJlcmluZyBzeXN0ZW0gb2YgYSBEdXJhdGlvbiwgc3VjaCAnYmVuZycuIFRoZSBudW1iZXJpbmcgc3lzdGVtIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEdXJhdGlvblxyXG4gICAgKlxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgbnVtYmVyaW5nU3lzdGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLiBZb3UgbWF5IHVzZSB0aGVzZSB0b2tlbnM6XHJcbiAgICAqICogYFNgIGZvciBtaWxsaXNlY29uZHNcclxuICAgICogKiBgc2AgZm9yIHNlY29uZHNcclxuICAgICogKiBgbWAgZm9yIG1pbnV0ZXNcclxuICAgICogKiBgaGAgZm9yIGhvdXJzXHJcbiAgICAqICogYGRgIGZvciBkYXlzXHJcbiAgICAqICogYHdgIGZvciB3ZWVrc1xyXG4gICAgKiAqIGBNYCBmb3IgbW9udGhzXHJcbiAgICAqICogYHlgIGZvciB5ZWFyc1xyXG4gICAgKiBOb3RlczpcclxuICAgICogKiBBZGQgcGFkZGluZyBieSByZXBlYXRpbmcgdGhlIHRva2VuLCBlLmcuIFwieXlcIiBwYWRzIHRoZSB5ZWFycyB0byB0d28gZGlnaXRzLCBcImhoaGhcIiBwYWRzIHRoZSBob3VycyBvdXQgdG8gZm91ciBkaWdpdHNcclxuICAgICogKiBUb2tlbnMgY2FuIGJlIGVzY2FwZWQgYnkgd3JhcHBpbmcgd2l0aCBzaW5nbGUgcXVvdGVzLlxyXG4gICAgKiAqIFRoZSBkdXJhdGlvbiB3aWxsIGJlIGNvbnZlcnRlZCB0byB0aGUgc2V0IG9mIHVuaXRzIGluIHRoZSBmb3JtYXQgc3RyaW5nIHVzaW5nIHtAbGluayBEdXJhdGlvbiNzaGlmdFRvfSBhbmQgdGhlIER1cmF0aW9ucydzIGNvbnZlcnNpb24gYWNjdXJhY3kgc2V0dGluZy5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgc3RyaW5nXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmZsb29yPXRydWVdIC0gZmxvb3IgbnVtZXJpY2FsIHZhbHVlc1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJ5IGQgc1wiKSAvLz0+IFwiMSA2IDJcIlxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJ5eSBkZCBzc3NcIikgLy89PiBcIjAxIDA2IDAwMlwiXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcIk0gU1wiKSAvLz0+IFwiMTIgNTE4NDAyMDAwXCJcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0Zvcm1hdChmbXQsIG9wdHMgPSB7fSkge1xyXG4gICAgLy8gcmV2ZXJzZS1jb21wYXQgc2luY2UgMS4yOyB3ZSBhbHdheXMgcm91bmQgZG93biBub3csIG5ldmVyIHVwLCBhbmQgd2UgZG8gaXQgYnkgZGVmYXVsdFxyXG4gICAgY29uc3QgZm10T3B0cyA9IHtcclxuICAgICAgLi4ub3B0cyxcclxuICAgICAgZmxvb3I6IG9wdHMucm91bmQgIT09IGZhbHNlICYmIG9wdHMuZmxvb3IgIT09IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcclxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLCBmbXRPcHRzKS5mb3JtYXREdXJhdGlvbkZyb21TdHJpbmcodGhpcywgZm10KVxyXG4gICAgICA6IElOVkFMSUQkMjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgRHVyYXRpb24gd2l0aCBhbGwgdW5pdHMgaW5jbHVkZWQuXHJcbiAgICAqIFRvIG1vZGlmeSBpdHMgYmVoYXZpb3IgdXNlIHRoZSBgbGlzdFN0eWxlYCBhbmQgYW55IEludGwuTnVtYmVyRm9ybWF0IG9wdGlvbiwgdGhvdWdoIGB1bml0RGlzcGxheWAgaXMgZXNwZWNpYWxseSByZWxldmFudC5cclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsL051bWJlckZvcm1hdFxyXG4gICAgKiBAcGFyYW0gb3B0cyAtIE9uIG9wdGlvbiBvYmplY3QgdG8gb3ZlcnJpZGUgdGhlIGZvcm1hdHRpbmcuIEFjY2VwdHMgdGhlIHNhbWUga2V5cyBhcyB0aGUgb3B0aW9ucyBwYXJhbWV0ZXIgb2YgdGhlIG5hdGl2ZSBgSW50Lk51bWJlckZvcm1hdGAgY29uc3RydWN0b3IsIGFzIHdlbGwgYXMgYGxpc3RTdHlsZWAuXHJcbiAgICAqIEBleGFtcGxlXHJcbiAgICAqIGBgYGpzXHJcbiAgICAqIHZhciBkdXIgPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgZGF5czogMSwgaG91cnM6IDUsIG1pbnV0ZXM6IDYgfSlcclxuICAgICogZHVyLnRvSHVtYW4oKSAvLz0+ICcxIGRheSwgNSBob3VycywgNiBtaW51dGVzJ1xyXG4gICAgKiBkdXIudG9IdW1hbih7IGxpc3RTdHlsZTogXCJsb25nXCIgfSkgLy89PiAnMSBkYXksIDUgaG91cnMsIGFuZCA2IG1pbnV0ZXMnXHJcbiAgICAqIGR1ci50b0h1bWFuKHsgdW5pdERpc3BsYXk6IFwic2hvcnRcIiB9KSAvLz0+ICcxIGRheSwgNSBociwgNiBtaW4nXHJcbiAgICAqIGBgYFxyXG4gICAgKi9cclxuICB0b0h1bWFuKG9wdHMgPSB7fSkge1xyXG4gICAgY29uc3QgbCA9IG9yZGVyZWRVbml0cyQxXHJcbiAgICAgIC5tYXAoKHVuaXQpID0+IHtcclxuICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnZhbHVlc1t1bml0XTtcclxuICAgICAgICBpZiAoaXNVbmRlZmluZWQodmFsKSkge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY1xyXG4gICAgICAgICAgLm51bWJlckZvcm1hdHRlcih7XHJcbiAgICAgICAgICAgIHN0eWxlOiAndW5pdCcsIHVuaXREaXNwbGF5OiAnbG9uZycsIC4uLm9wdHMsIHVuaXQ6IHVuaXQuc2xpY2UoMCwgLTEpLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5mb3JtYXQodmFsKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbHRlcigobikgPT4gbik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubG9jXHJcbiAgICAgIC5saXN0Rm9ybWF0dGVyKHsgdHlwZTogJ2Nvbmp1bmN0aW9uJywgc3R5bGU6IG9wdHMubGlzdFN0eWxlIHx8ICduYXJyb3cnLCAuLi5vcHRzIH0pXHJcbiAgICAgIC5mb3JtYXQobCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEdXJhdGlvbidzIHZhbHVlcy5cclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH1cclxuICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgKi9cclxuICB0b09iamVjdCgpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4ge307XHJcbiAgICByZXR1cm4geyAuLi50aGlzLnZhbHVlcyB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLlxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9uc1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDMsIHNlY29uZHM6IDQ1IH0pLnRvSVNPKCkgLy89PiAnUDNZVDQ1UydcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogNCwgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQNE1UNDVTJ1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA1IH0pLnRvSVNPKCkgLy89PiAnUDVNJ1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWludXRlczogNSB9KS50b0lTTygpIC8vPT4gJ1BUNU0nXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaWxsaXNlY29uZHM6IDYgfSkudG9JU08oKSAvLz0+ICdQVDAuMDA2UydcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0lTTygpIHtcclxuICAgIC8vIHdlIGNvdWxkIHVzZSB0aGUgZm9ybWF0dGVyLCBidXQgdGhpcyBpcyBhbiBlYXNpZXIgd2F5IHRvIGdldCB0aGUgbWluaW11bSBzdHJpbmdcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBsZXQgcyA9ICdQJztcclxuICAgIGlmICh0aGlzLnllYXJzICE9PSAwKSBzICs9IGAke3RoaXMueWVhcnN9WWA7XHJcbiAgICBpZiAodGhpcy5tb250aHMgIT09IDAgfHwgdGhpcy5xdWFydGVycyAhPT0gMCkgcyArPSBgJHt0aGlzLm1vbnRocyArIHRoaXMucXVhcnRlcnMgKiAzfU1gO1xyXG4gICAgaWYgKHRoaXMud2Vla3MgIT09IDApIHMgKz0gYCR7dGhpcy53ZWVrc31XYDtcclxuICAgIGlmICh0aGlzLmRheXMgIT09IDApIHMgKz0gYCR7dGhpcy5kYXlzfURgO1xyXG4gICAgaWYgKHRoaXMuaG91cnMgIT09IDAgfHwgdGhpcy5taW51dGVzICE9PSAwIHx8IHRoaXMuc2Vjb25kcyAhPT0gMCB8fCB0aGlzLm1pbGxpc2Vjb25kcyAhPT0gMCkgeyBzICs9ICdUJzsgfVxyXG4gICAgaWYgKHRoaXMuaG91cnMgIT09IDApIHMgKz0gYCR7dGhpcy5ob3Vyc31IYDtcclxuICAgIGlmICh0aGlzLm1pbnV0ZXMgIT09IDApIHMgKz0gYCR7dGhpcy5taW51dGVzfU1gO1xyXG4gICAgaWYgKHRoaXMuc2Vjb25kcyAhPT0gMCB8fCB0aGlzLm1pbGxpc2Vjb25kcyAhPT0gMClcclxuICAgIC8vIHRoaXMgd2lsbCBoYW5kbGUgXCJmbG9hdGluZyBwb2ludCBtYWRuZXNzXCIgYnkgcmVtb3ZpbmcgZXh0cmEgZGVjaW1hbCBwbGFjZXNcclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU4ODAwNC9pcy1mbG9hdGluZy1wb2ludC1tYXRoLWJyb2tlblxyXG4gICAgeyBzICs9IGAke3JvdW5kVG8odGhpcy5zZWNvbmRzICsgdGhpcy5taWxsaXNlY29uZHMgLyAxMDAwLCAzKX1TYDsgfVxyXG4gICAgaWYgKHMgPT09ICdQJykgcyArPSAnVDBTJztcclxuICAgIHJldHVybiBzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLCBmb3JtYXR0ZWQgYXMgYSB0aW1lIG9mIGRheS5cclxuICAgICogTm90ZSB0aGF0IHRoaXMgd2lsbCByZXR1cm4gbnVsbCBpZiB0aGUgZHVyYXRpb24gaXMgaW52YWxpZCwgbmVnYXRpdmUsIG9yIGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiAyNCBob3Vycy5cclxuICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lc1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4XHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSgpIC8vPT4gJzExOjAwOjAwLjAwMCdcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc01pbGxpc2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcxMTowMDowMCdcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMTE6MDAnXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgaW5jbHVkZVByZWZpeDogdHJ1ZSB9KSAvLz0+ICdUMTE6MDA6MDAuMDAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcxMTAwMDAuMDAwJ1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvSVNPVGltZShvcHRzID0ge30pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBtaWxsaXMgPSB0aGlzLnRvTWlsbGlzKCk7XHJcbiAgICBpZiAobWlsbGlzIDwgMCB8fCBtaWxsaXMgPj0gODY0MDAwMDApIHJldHVybiBudWxsO1xyXG5cclxuICAgIG9wdHMgPSB7XHJcbiAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzOiBmYWxzZSxcclxuICAgICAgc3VwcHJlc3NTZWNvbmRzOiBmYWxzZSxcclxuICAgICAgaW5jbHVkZVByZWZpeDogZmFsc2UsXHJcbiAgICAgIGZvcm1hdDogJ2V4dGVuZGVkJyxcclxuICAgICAgLi4ub3B0cyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnNoaWZ0VG8oJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcycsICdtaWxsaXNlY29uZHMnKTtcclxuXHJcbiAgICBsZXQgZm10ID0gb3B0cy5mb3JtYXQgPT09ICdiYXNpYycgPyAnaGhtbScgOiAnaGg6bW0nO1xyXG5cclxuICAgIGlmICghb3B0cy5zdXBwcmVzc1NlY29uZHMgfHwgdmFsdWUuc2Vjb25kcyAhPT0gMCB8fCB2YWx1ZS5taWxsaXNlY29uZHMgIT09IDApIHtcclxuICAgICAgZm10ICs9IG9wdHMuZm9ybWF0ID09PSAnYmFzaWMnID8gJ3NzJyA6ICc6c3MnO1xyXG4gICAgICBpZiAoIW9wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHMgfHwgdmFsdWUubWlsbGlzZWNvbmRzICE9PSAwKSB7XHJcbiAgICAgICAgZm10ICs9ICcuU1NTJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzdHIgPSB2YWx1ZS50b0Zvcm1hdChmbXQpO1xyXG5cclxuICAgIGlmIChvcHRzLmluY2x1ZGVQcmVmaXgpIHtcclxuICAgICAgc3RyID0gYFQke3N0cn1gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSlNPTi5cclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0pTT04oKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIGRlYnVnZ2luZy5cclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBtaWxsaXNlY29uZHMgdmFsdWUgb2YgdGhpcyBEdXJhdGlvbi5cclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICB0b01pbGxpcygpIHtcclxuICAgIHJldHVybiB0aGlzLmFzKCdtaWxsaXNlY29uZHMnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIG1pbGxpc2Vjb25kcyB2YWx1ZSBvZiB0aGlzIER1cmF0aW9uLiBBbGlhcyBvZiB7QGxpbmsgdG9NaWxsaXN9XHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgdmFsdWVPZigpIHtcclxuICAgIHJldHVybiB0aGlzLnRvTWlsbGlzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogTWFrZSB0aGlzIER1cmF0aW9uIGxvbmdlciBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXHJcbiAgICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIHBsdXMoZHVyYXRpb24pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cclxuICAgIGZvciAoY29uc3QgayBvZiBvcmRlcmVkVW5pdHMkMSkge1xyXG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkoZHVyLnZhbHVlcywgaykgfHwgaGFzT3duUHJvcGVydHkodGhpcy52YWx1ZXMsIGspKSB7XHJcbiAgICAgICAgcmVzdWx0W2tdID0gZHVyLmdldChrKSArIHRoaXMuZ2V0KGspO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywgeyB2YWx1ZXM6IHJlc3VsdCB9LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBNYWtlIHRoaXMgRHVyYXRpb24gc2hvcnRlciBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXHJcbiAgICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIHN1YnRyYWN0LiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgbWludXMoZHVyYXRpb24pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcclxuICAgIHJldHVybiB0aGlzLnBsdXMoZHVyLm5lZ2F0ZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBTY2FsZSB0aGlzIER1cmF0aW9uIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cclxuICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCB1bml0LiBBcml0eSBpcyAxIG9yIDI6IHRoZSB2YWx1ZSBvZiB0aGUgdW5pdCBhbmQsIG9wdGlvbmFsbHksIHRoZSB1bml0IG5hbWUuIE11c3QgcmV0dXJuIGEgbnVtYmVyLlxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIG1pbnV0ZXM6IDMwIH0pLm1hcFVuaXRzKHggPT4geCAqIDIpIC8vPT4geyBob3VyczogMiwgbWludXRlczogNjAgfVxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIG1pbnV0ZXM6IDMwIH0pLm1hcFVuaXRzKCh4LCB1KSA9PiB1ID09PSBcImhvdXJcIiA/IHggKiAyIDogeCkgLy89PiB7IGhvdXJzOiAyLCBtaW51dGVzOiAzMCB9XHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBtYXBVbml0cyhmbikge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModGhpcy52YWx1ZXMpKSB7XHJcbiAgICAgIHJlc3VsdFtrXSA9IGFzTnVtYmVyKGZuKHRoaXMudmFsdWVzW2tdLCBrKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7IHZhbHVlczogcmVzdWx0IH0sIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgdmFsdWUgb2YgdW5pdC5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlJyBvciAnZGF5J1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmdldCgneWVhcnMnKSAvLz0+IDJcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ21vbnRocycpIC8vPT4gMFxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmdldCgnZGF5cycpIC8vPT4gM1xyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCh1bml0KSB7XHJcbiAgICByZXR1cm4gdGhpc1tEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBcIlNldFwiIHRoZSB2YWx1ZXMgb2Ygc3BlY2lmaWVkIHVuaXRzLiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXHJcbiAgICAqIEBleGFtcGxlIGR1ci5zZXQoeyB5ZWFyczogMjAxNyB9KVxyXG4gICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgaG91cnM6IDgsIG1pbnV0ZXM6IDMwIH0pXHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBzZXQodmFsdWVzKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgY29uc3QgbWl4ZWQgPSB7IC4uLnRoaXMudmFsdWVzLCAuLi5ub3JtYWxpemVPYmplY3QodmFsdWVzLCBEdXJhdGlvbi5ub3JtYWxpemVVbml0KSB9O1xyXG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywgeyB2YWx1ZXM6IG1peGVkIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFwiU2V0XCIgdGhlIGxvY2FsZSBhbmQvb3IgbnVtYmVyaW5nU3lzdGVtLiAgUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxyXG4gICAgKiBAZXhhbXBsZSBkdXIucmVjb25maWd1cmUoeyBsb2NhbGU6ICdlbi1HQicgfSlcclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIHJlY29uZmlndXJlKHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIGNvbnZlcnNpb25BY2N1cmFjeSB9ID0ge30pIHtcclxuICAgIGNvbnN0IGxvYyA9IHRoaXMubG9jLmNsb25lKHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSk7XHJcbiAgICBjb25zdCBvcHRzID0geyBsb2MgfTtcclxuXHJcbiAgICBpZiAoY29udmVyc2lvbkFjY3VyYWN5KSB7XHJcbiAgICAgIG9wdHMuY29udmVyc2lvbkFjY3VyYWN5ID0gY29udmVyc2lvbkFjY3VyYWN5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBkdXJhdGlvbiBpbiB0aGUgc3BlY2lmaWVkIHVuaXQuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZXMnIG9yICdkYXlzJ1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdkYXlzJykgLy89PiAzNjVcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDF9KS5hcygnbW9udGhzJykgLy89PiAxMlxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHtob3VyczogNjB9KS5hcygnZGF5cycpIC8vPT4gMi41XHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgYXModW5pdCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuc2hpZnRUbyh1bml0KS5nZXQodW5pdCkgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmVkdWNlIHRoaXMgRHVyYXRpb24gdG8gaXRzIGNhbm9uaWNhbCByZXByZXNlbnRhdGlvbiBpbiBpdHMgY3VycmVudCB1bml0cy5cclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAyLCBkYXlzOiA1MDAwIH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxNSwgZGF5czogMjU1IH1cclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMiwgbWludXRlczogLTQ1IH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMTUgfVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgbm9ybWFsaXplKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG4gICAgY29uc3QgdmFscyA9IHRoaXMudG9PYmplY3QoKTtcclxuICAgIG5vcm1hbGl6ZVZhbHVlcyh0aGlzLm1hdHJpeCwgdmFscyk7XHJcbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7IHZhbHVlczogdmFscyB9LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDb252ZXJ0IHRoaXMgRHVyYXRpb24gaW50byBpdHMgcmVwcmVzZW50YXRpb24gaW4gYSBkaWZmZXJlbnQgc2V0IG9mIHVuaXRzLlxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIHNlY29uZHM6IDMwIH0pLnNoaWZ0VG8oJ21pbnV0ZXMnLCAnbWlsbGlzZWNvbmRzJykudG9PYmplY3QoKSAvLz0+IHsgbWludXRlczogNjAsIG1pbGxpc2Vjb25kczogMzAwMDAgfVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgc2hpZnRUbyguLi51bml0cykge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGlmICh1bml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdW5pdHMgPSB1bml0cy5tYXAoKHUpID0+IER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodSkpO1xyXG5cclxuICAgIGNvbnN0IGJ1aWx0ID0ge307XHJcbiAgICBjb25zdCBhY2N1bXVsYXRlZCA9IHt9O1xyXG4gICAgY29uc3QgdmFscyA9IHRoaXMudG9PYmplY3QoKTtcclxuICAgIGxldCBsYXN0VW5pdDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGsgb2Ygb3JkZXJlZFVuaXRzJDEpIHtcclxuICAgICAgaWYgKHVuaXRzLmluZGV4T2YoaykgPj0gMCkge1xyXG4gICAgICAgIGxhc3RVbml0ID0gaztcclxuXHJcbiAgICAgICAgbGV0IG93biA9IDA7XHJcblxyXG4gICAgICAgIC8vIGFueXRoaW5nIHdlIGhhdmVuJ3QgYm9pbGVkIGRvd24geWV0IHNob3VsZCBnZXQgYm9pbGVkIHRvIHRoaXMgdW5pdFxyXG4gICAgICAgIGZvciAoY29uc3QgYWsgaW4gYWNjdW11bGF0ZWQpIHtcclxuICAgICAgICAgIG93biArPSB0aGlzLm1hdHJpeFtha11ba10gKiBhY2N1bXVsYXRlZFtha107XHJcbiAgICAgICAgICBhY2N1bXVsYXRlZFtha10gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyB0aGF0J3MgYWxyZWFkeSBpbiB0aGlzIHVuaXRcclxuICAgICAgICBpZiAoaXNOdW1iZXIodmFsc1trXSkpIHtcclxuICAgICAgICAgIG93biArPSB2YWxzW2tdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaSA9IE1hdGgudHJ1bmMob3duKTtcclxuICAgICAgICBidWlsdFtrXSA9IGk7XHJcbiAgICAgICAgYWNjdW11bGF0ZWRba10gPSAob3duICogMTAwMCAtIGkgKiAxMDAwKSAvIDEwMDA7XHJcblxyXG4gICAgICAgIC8vIHBsdXMgYW55dGhpbmcgZnVydGhlciBkb3duIHRoZSBjaGFpbiB0aGF0IHNob3VsZCBiZSByb2xsZWQgdXAgaW4gdG8gdGhpc1xyXG4gICAgICAgIGZvciAoY29uc3QgZG93biBpbiB2YWxzKSB7XHJcbiAgICAgICAgICBpZiAob3JkZXJlZFVuaXRzJDEuaW5kZXhPZihkb3duKSA+IG9yZGVyZWRVbml0cyQxLmluZGV4T2YoaykpIHtcclxuICAgICAgICAgICAgY29udmVydCh0aGlzLm1hdHJpeCwgdmFscywgZG93biwgYnVpbHQsIGspO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBvdGhlcndpc2UsIGtlZXAgaXQgaW4gdGhlIHdpbmdzIHRvIGJvaWwgaXQgbGF0ZXJcclxuICAgICAgfSBlbHNlIGlmIChpc051bWJlcih2YWxzW2tdKSkge1xyXG4gICAgICAgIGFjY3VtdWxhdGVkW2tdID0gdmFsc1trXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFueXRoaW5nIGxlZnRvdmVyIGJlY29tZXMgdGhlIGRlY2ltYWwgZm9yIHRoZSBsYXN0IHVuaXRcclxuICAgIC8vIGxhc3RVbml0IG11c3QgYmUgZGVmaW5lZCBzaW5jZSB1bml0cyBpcyBub3QgZW1wdHlcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGFjY3VtdWxhdGVkKSB7XHJcbiAgICAgIGlmIChhY2N1bXVsYXRlZFtrZXldICE9PSAwKSB7XHJcbiAgICAgICAgYnVpbHRbbGFzdFVuaXRdXHJcbiAgICAgICAgICAgKz0ga2V5ID09PSBsYXN0VW5pdCA/IGFjY3VtdWxhdGVkW2tleV0gOiBhY2N1bXVsYXRlZFtrZXldIC8gdGhpcy5tYXRyaXhbbGFzdFVuaXRdW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7IHZhbHVlczogYnVpbHQgfSwgdHJ1ZSkubm9ybWFsaXplKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHRoZSBuZWdhdGl2ZSBvZiB0aGlzIER1cmF0aW9uLlxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIHNlY29uZHM6IDMwIH0pLm5lZ2F0ZSgpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAtMSwgc2Vjb25kczogLTMwIH1cclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIG5lZ2F0ZSgpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuICAgIGNvbnN0IG5lZ2F0ZWQgPSB7fTtcclxuICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyh0aGlzLnZhbHVlcykpIHtcclxuICAgICAgbmVnYXRlZFtrXSA9IHRoaXMudmFsdWVzW2tdID09PSAwID8gMCA6IC10aGlzLnZhbHVlc1trXTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHsgdmFsdWVzOiBuZWdhdGVkIH0sIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgeWVhcnMuXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCB5ZWFycygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy55ZWFycyB8fCAwIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgcXVhcnRlcnMuXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBxdWFydGVycygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5xdWFydGVycyB8fCAwIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgbW9udGhzLlxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgbW9udGhzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1vbnRocyB8fCAwIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgd2Vla3NcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IHdlZWtzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLndlZWtzIHx8IDAgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBkYXlzLlxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgZGF5cygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5kYXlzIHx8IDAgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBob3Vycy5cclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IGhvdXJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLmhvdXJzIHx8IDAgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBtaW51dGVzLlxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgbWludXRlcygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5taW51dGVzIHx8IDAgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBzZWNvbmRzLlxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBzZWNvbmRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnNlY29uZHMgfHwgMCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIG1pbGxpc2Vjb25kcy5cclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgbWlsbGlzZWNvbmRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbGxpc2Vjb25kcyB8fCAwIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgd2hldGhlciB0aGUgRHVyYXRpb24gaXMgaW52YWxpZC4gSW52YWxpZCBkdXJhdGlvbnMgYXJlIHJldHVybmVkIGJ5IGRpZmYgb3BlcmF0aW9uc1xyXG4gICAgKiBvbiBpbnZhbGlkIERhdGVUaW1lcyBvciBJbnRlcnZhbHMuXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGdldCBpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA9PT0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIGVycm9yIGNvZGUgaWYgdGhpcyBEdXJhdGlvbiBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRHVyYXRpb24gaXMgdmFsaWRcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIER1cmF0aW9uIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEdXJhdGlvbiBpcyB2YWxpZFxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgaW52YWxpZEV4cGxhbmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogRXF1YWxpdHkgY2hlY2tcclxuICAgICogVHdvIER1cmF0aW9ucyBhcmUgZXF1YWwgaWZmIHRoZXkgaGF2ZSB0aGUgc2FtZSB1bml0cyBhbmQgdGhlIHNhbWUgdmFsdWVzIGZvciBlYWNoIHVuaXQuXHJcbiAgICAqIEBwYXJhbSB7RHVyYXRpb259IG90aGVyXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGVxdWFscyhvdGhlcikge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5sb2MuZXF1YWxzKG90aGVyLmxvYykpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVxKHYxLCB2Mikge1xyXG4gICAgICAvLyBDb25zaWRlciAwIGFuZCB1bmRlZmluZWQgYXMgZXF1YWxcclxuICAgICAgaWYgKHYxID09PSB1bmRlZmluZWQgfHwgdjEgPT09IDApIHJldHVybiB2MiA9PT0gdW5kZWZpbmVkIHx8IHYyID09PSAwO1xyXG4gICAgICByZXR1cm4gdjEgPT09IHYyO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgdSBvZiBvcmRlcmVkVW5pdHMkMSkge1xyXG4gICAgICBpZiAoIWVxKHRoaXMudmFsdWVzW3VdLCBvdGhlci52YWx1ZXNbdV0pKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IElOVkFMSUQkMSA9ICdJbnZhbGlkIEludGVydmFsJztcclxuXHJcbi8vIGNoZWNrcyBpZiB0aGUgc3RhcnQgaXMgZXF1YWwgdG8gb3IgYmVmb3JlIHRoZSBlbmRcclxuZnVuY3Rpb24gdmFsaWRhdGVTdGFydEVuZChzdGFydCwgZW5kKSB7XHJcbiAgaWYgKCFzdGFydCB8fCAhc3RhcnQuaXNWYWxpZCkge1xyXG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoJ21pc3Npbmcgb3IgaW52YWxpZCBzdGFydCcpO1xyXG4gIH0gaWYgKCFlbmQgfHwgIWVuZC5pc1ZhbGlkKSB7XHJcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZCgnbWlzc2luZyBvciBpbnZhbGlkIGVuZCcpO1xyXG4gIH0gaWYgKGVuZCA8IHN0YXJ0KSB7XHJcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcclxuICAgICAgJ2VuZCBiZWZvcmUgc3RhcnQnLFxyXG4gICAgICBgVGhlIGVuZCBvZiBhbiBpbnRlcnZhbCBtdXN0IGJlIGFmdGVyIGl0cyBzdGFydCwgYnV0IHlvdSBoYWQgc3RhcnQ9JHtzdGFydC50b0lTTygpfSBhbmQgZW5kPSR7ZW5kLnRvSVNPKCl9YCxcclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICAqIEFuIEludGVydmFsIG9iamVjdCByZXByZXNlbnRzIGEgaGFsZi1vcGVuIGludGVydmFsIG9mIHRpbWUsIHdoZXJlIGVhY2ggZW5kcG9pbnQgaXMgYSB7QGxpbmsgRGF0ZVRpbWV9LiBDb25jZXB0dWFsbHksIGl0J3MgYSBjb250YWluZXIgZm9yIHRob3NlIHR3byBlbmRwb2ludHMsIGFjY29tcGFuaWVkIGJ5IG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCBjb21wYXJpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS5cclxuICAqXHJcbiAgKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBtZXRob2RzIGFuZCBnZXR0ZXJzIGluIEludGVydmFsOlxyXG4gICpcclxuICAqICogKipDcmVhdGlvbioqIFRvIGNyZWF0ZSBhbiBJbnRlcnZhbCwgdXNlIHtAbGluayBJbnRlcnZhbCNmcm9tRGF0ZVRpbWVzfSwge0BsaW5rIEludGVydmFsI2FmdGVyfSwge0BsaW5rIEludGVydmFsI2JlZm9yZX0sIG9yIHtAbGluayBJbnRlcnZhbCNmcm9tSVNPfS5cclxuICAqICogKipBY2Nlc3NvcnMqKiBVc2Uge0BsaW5rIEludGVydmFsI3N0YXJ0fSBhbmQge0BsaW5rIEludGVydmFsI2VuZH0gdG8gZ2V0IHRoZSBzdGFydCBhbmQgZW5kLlxyXG4gICogKiAqKkludGVycm9nYXRpb24qKiBUbyBhbmFseXplIHRoZSBJbnRlcnZhbCwgdXNlIHtAbGluayBJbnRlcnZhbCNjb3VudH0sIHtAbGluayBJbnRlcnZhbCNsZW5ndGh9LCB7QGxpbmsgSW50ZXJ2YWwjaGFzU2FtZX0sIHtAbGluayBJbnRlcnZhbCNjb250YWluc30sIHtAbGluayBJbnRlcnZhbCNpc0FmdGVyfSwgb3Ige0BsaW5rIEludGVydmFsI2lzQmVmb3JlfS5cclxuICAqICogKipUcmFuc2Zvcm1hdGlvbioqIFRvIGNyZWF0ZSBvdGhlciBJbnRlcnZhbHMgb3V0IG9mIHRoaXMgb25lLCB1c2Uge0BsaW5rIEludGVydmFsI3NldH0sIHtAbGluayBJbnRlcnZhbCNzcGxpdEF0fSwge0BsaW5rIEludGVydmFsI3NwbGl0Qnl9LCB7QGxpbmsgSW50ZXJ2YWwjZGl2aWRlRXF1YWxseX0sIHtAbGluayBJbnRlcnZhbCNtZXJnZX0sIHtAbGluayBJbnRlcnZhbCN4b3J9LCB7QGxpbmsgSW50ZXJ2YWwjdW5pb259LCB7QGxpbmsgSW50ZXJ2YWwjaW50ZXJzZWN0aW9ufSwgb3Ige0BsaW5rIEludGVydmFsI2RpZmZlcmVuY2V9LlxyXG4gICogKiAqKkNvbXBhcmlzb24qKiBUbyBjb21wYXJlIHRoaXMgSW50ZXJ2YWwgdG8gYW5vdGhlciBvbmUsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjZXF1YWxzfSwge0BsaW5rIEludGVydmFsI292ZXJsYXBzfSwge0BsaW5rIEludGVydmFsI2FidXRzU3RhcnR9LCB7QGxpbmsgSW50ZXJ2YWwjYWJ1dHNFbmR9LCB7QGxpbmsgSW50ZXJ2YWwjZW5ndWxmc31cclxuICAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBJbnRlcnZhbCBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayBJbnRlcnZhbCN0b1N0cmluZ30sIHtAbGluayBJbnRlcnZhbCN0b0lTT30sIHtAbGluayBJbnRlcnZhbCN0b0lTT0RhdGV9LCB7QGxpbmsgSW50ZXJ2YWwjdG9JU09UaW1lfSwge0BsaW5rIEludGVydmFsI3RvRm9ybWF0fSwgYW5kIHtAbGluayBJbnRlcnZhbCN0b0R1cmF0aW9ufS5cclxuICAqL1xyXG5jbGFzcyBJbnRlcnZhbCB7XHJcbiAgLyoqXHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLnMgPSBjb25maWcuc3RhcnQ7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMuZSA9IGNvbmZpZy5lbmQ7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMuaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkIHx8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMuaXNMdXhvbkludGVydmFsID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYW4gaW52YWxpZCBJbnRlcnZhbC5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgSW50ZXJ2YWwgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uXHJcbiAgICAqIEByZXR1cm4ge0ludGVydmFsfVxyXG4gICAgKi9cclxuICBzdGF0aWMgaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uID0gbnVsbCkge1xyXG4gICAgaWYgKCFyZWFzb24pIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCduZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIEludGVydmFsIGlzIGludmFsaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xyXG5cclxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEludGVydmFsRXJyb3IoaW52YWxpZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHsgaW52YWxpZCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhbiBlbmQgRGF0ZVRpbWUuIEluY2x1c2l2ZSBvZiB0aGUgc3RhcnQgYnV0IG5vdCB0aGUgZW5kLlxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBzdGFydFxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBlbmRcclxuICAgICogQHJldHVybiB7SW50ZXJ2YWx9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tRGF0ZVRpbWVzKHN0YXJ0LCBlbmQpIHtcclxuICAgIGNvbnN0IGJ1aWx0U3RhcnQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KTtcclxuICAgIGNvbnN0IGJ1aWx0RW5kID0gZnJpZW5kbHlEYXRlVGltZShlbmQpO1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlRXJyb3IgPSB2YWxpZGF0ZVN0YXJ0RW5kKGJ1aWx0U3RhcnQsIGJ1aWx0RW5kKTtcclxuXHJcbiAgICBpZiAodmFsaWRhdGVFcnJvciA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBuZXcgSW50ZXJ2YWwoe1xyXG4gICAgICAgIHN0YXJ0OiBidWlsdFN0YXJ0LFxyXG4gICAgICAgIGVuZDogYnVpbHRFbmQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbGlkYXRlRXJyb3I7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYSBzdGFydCBEYXRlVGltZSBhbmQgYSBEdXJhdGlvbiB0byBleHRlbmQgdG8uXHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IHN0YXJ0XHJcbiAgICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbC5cclxuICAgICogQHJldHVybiB7SW50ZXJ2YWx9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBhZnRlcihzdGFydCwgZHVyYXRpb24pIHtcclxuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xyXG4gICAgY29uc3QgZHQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KTtcclxuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0LCBkdC5wbHVzKGR1cikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGFuIGVuZCBEYXRlVGltZSBhbmQgYSBEdXJhdGlvbiB0byBleHRlbmQgYmFja3dhcmRzIHRvLlxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBlbmRcclxuICAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsLlxyXG4gICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cclxuICAgICovXHJcbiAgc3RhdGljIGJlZm9yZShlbmQsIGR1cmF0aW9uKSB7XHJcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcclxuICAgIGNvbnN0IGR0ID0gZnJpZW5kbHlEYXRlVGltZShlbmQpO1xyXG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQubWludXMoZHVyKSwgZHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGFuIElTTyA4NjAxIHN0cmluZy5cclxuICAgICogQWNjZXB0cyBgPHN0YXJ0Pi88ZW5kPmAsIGA8c3RhcnQ+LzxkdXJhdGlvbj5gLCBhbmQgYDxkdXJhdGlvbj4vPGVuZD5gIGZvcm1hdHMuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIElTTyBzdHJpbmcgdG8gcGFyc2VcclxuICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXSAtIG9wdGlvbnMgdG8gcGFzcyB7QGxpbmsgRGF0ZVRpbWUjZnJvbUlTT30gYW5kIG9wdGlvbmFsbHkge0BsaW5rIER1cmF0aW9uI2Zyb21JU099XHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcclxuICAgICogQHJldHVybiB7SW50ZXJ2YWx9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tSVNPKHRleHQsIG9wdHMpIHtcclxuICAgIGNvbnN0IFtzLCBlXSA9ICh0ZXh0IHx8ICcnKS5zcGxpdCgnLycsIDIpO1xyXG4gICAgaWYgKHMgJiYgZSkge1xyXG4gICAgICBsZXQgc3RhcnQ7IGxldFxyXG4gICAgICAgIHN0YXJ0SXNWYWxpZDtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzdGFydCA9IERhdGVUaW1lLmZyb21JU08ocywgb3B0cyk7XHJcbiAgICAgICAgc3RhcnRJc1ZhbGlkID0gc3RhcnQuaXNWYWxpZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHN0YXJ0SXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZW5kOyBsZXRcclxuICAgICAgICBlbmRJc1ZhbGlkO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGVuZCA9IERhdGVUaW1lLmZyb21JU08oZSwgb3B0cyk7XHJcbiAgICAgICAgZW5kSXNWYWxpZCA9IGVuZC5pc1ZhbGlkO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZW5kSXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc3RhcnRJc1ZhbGlkICYmIGVuZElzVmFsaWQpIHtcclxuICAgICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN0YXJ0SXNWYWxpZCkge1xyXG4gICAgICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21JU08oZSwgb3B0cyk7XHJcbiAgICAgICAgaWYgKGR1ci5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gSW50ZXJ2YWwuYWZ0ZXIoc3RhcnQsIGR1cik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGVuZElzVmFsaWQpIHtcclxuICAgICAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tSVNPKHMsIG9wdHMpO1xyXG4gICAgICAgIGlmIChkdXIuaXNWYWxpZCkge1xyXG4gICAgICAgICAgcmV0dXJuIEludGVydmFsLmJlZm9yZShlbmQsIGR1cik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZCgndW5wYXJzYWJsZScsIGB0aGUgaW5wdXQgXCIke3RleHR9XCIgY2FuJ3QgYmUgcGFyc2VkIGFzIElTTyA4NjAxYCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGFuIEludGVydmFsLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXHJcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBpc0ludGVydmFsKG8pIHtcclxuICAgIHJldHVybiAobyAmJiBvLmlzTHV4b25JbnRlcnZhbCkgfHwgZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgc3RhcnQgb2YgdGhlIEludGVydmFsXHJcbiAgICAqIEB0eXBlIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgZ2V0IHN0YXJ0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMucyA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgZW5kIG9mIHRoZSBJbnRlcnZhbFxyXG4gICAgKiBAdHlwZSB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIGdldCBlbmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5lIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBhdCBsZWFzdCBpdHMgc3RhcnQsIG1lYW5pbmcgdGhhdCB0aGUgSW50ZXJ2YWwgaXNuJ3QgJ2JhY2t3YXJkcycuXHJcbiAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgKi9cclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmludmFsaWRSZWFzb24gPT09IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgSW50ZXJ2YWwgaXMgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IGludmFsaWRSZWFzb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBJbnRlcnZhbCBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IGludmFsaWRFeHBsYW5hdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwgaW4gdGhlIHNwZWNpZmllZCB1bml0LlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byByZXR1cm4gdGhlIGxlbmd0aCBpbi5cclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBsZW5ndGgodW5pdCA9ICdtaWxsaXNlY29uZHMnKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50b0R1cmF0aW9uKC4uLlt1bml0XSkuZ2V0KHVuaXQpIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGNvdW50IG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCBtb250aHMsIG9yIHllYXJzIGluY2x1ZGVkIGluIHRoZSBJbnRlcnZhbCwgZXZlbiBpbiBwYXJ0LlxyXG4gICAgKiBVbmxpa2Uge0BsaW5rIEludGVydmFsI2xlbmd0aH0gdGhpcyBjb3VudHMgc2VjdGlvbnMgb2YgdGhlIGNhbGVuZGFyLCBub3QgcGVyaW9kcyBvZiB0aW1lLCBlLmcuIHNwZWNpZnlpbmcgJ2RheSdcclxuICAgICogYXNrcyAnd2hhdCBkYXRlcyBhcmUgaW5jbHVkZWQgaW4gdGhpcyBpbnRlcnZhbD8nLCBub3QgJ2hvdyBtYW55IGRheXMgbG9uZyBpcyB0aGlzIGludGVydmFsPydcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFt1bml0PSdtaWxsaXNlY29uZHMnXSAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgY291bnQodW5pdCA9ICdtaWxsaXNlY29uZHMnKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIE5hTjtcclxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5zdGFydC5zdGFydE9mKHVuaXQpO1xyXG4gICAgY29uc3QgZW5kID0gdGhpcy5lbmQuc3RhcnRPZih1bml0KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCkpICsgMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGFuZCBlbmQgYXJlIGJvdGggaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBoYXNTYW1lKHVuaXQpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmlzRW1wdHkoKSB8fCB0aGlzLmUubWludXMoMSkuaGFzU2FtZSh0aGlzLnMsIHVuaXQpIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBoYXMgdGhlIHNhbWUgc3RhcnQgYW5kIGVuZCBEYXRlVGltZXMuXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGlzRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zLnZhbHVlT2YoKSA9PT0gdGhpcy5lLnZhbHVlT2YoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWZ0ZXIgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cclxuICAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgaXNBZnRlcihkYXRlVGltZSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzLnMgPiBkYXRlVGltZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGJlZm9yZSB0aGUgc3BlY2lmaWVkIERhdGVUaW1lLlxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBkYXRlVGltZVxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBpc0JlZm9yZShkYXRlVGltZSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzLmUgPD0gZGF0ZVRpbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBjb250YWlucyB0aGUgc3BlY2lmaWVkIERhdGVUaW1lLlxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBkYXRlVGltZVxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBjb250YWlucyhkYXRlVGltZSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzLnMgPD0gZGF0ZVRpbWUgJiYgdGhpcy5lID4gZGF0ZVRpbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogXCJTZXRzXCIgdGhlIHN0YXJ0IGFuZC9vciBlbmQgZGF0ZXMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBJbnRlcnZhbC5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIHRoZSB2YWx1ZXMgdG8gc2V0XHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IHZhbHVlcy5zdGFydCAtIHRoZSBzdGFydGluZyBEYXRlVGltZVxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuZW5kIC0gdGhlIGVuZGluZyBEYXRlVGltZVxyXG4gICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cclxuICAgICovXHJcbiAgc2V0KHsgc3RhcnQsIGVuZCB9ID0ge30pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0IHx8IHRoaXMucywgZW5kIHx8IHRoaXMuZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU3BsaXQgdGhpcyBJbnRlcnZhbCBhdCBlYWNoIG9mIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWVzXHJcbiAgICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXHJcbiAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgKi9cclxuICBzcGxpdEF0KC4uLmRhdGVUaW1lcykge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTtcclxuICAgIGNvbnN0IHNvcnRlZCA9IGRhdGVUaW1lc1xyXG4gICAgICAubWFwKGZyaWVuZGx5RGF0ZVRpbWUpXHJcbiAgICAgIC5maWx0ZXIoKGQpID0+IHRoaXMuY29udGFpbnMoZCkpXHJcbiAgICAgIC5zb3J0KCk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gW107XHJcbiAgICBsZXQgeyBzIH0gPSB0aGlzO1xyXG4gICAgbGV0IGkgPSAwO1xyXG5cclxuICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7XHJcbiAgICAgIGNvbnN0IGFkZGVkID0gc29ydGVkW2ldIHx8IHRoaXMuZTtcclxuICAgICAgY29uc3QgbmV4dCA9ICthZGRlZCA+ICt0aGlzLmUgPyB0aGlzLmUgOiBhZGRlZDtcclxuICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMocywgbmV4dCkpO1xyXG4gICAgICBzID0gbmV4dDtcclxuICAgICAgaSArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgaW50byBzbWFsbGVyIEludGVydmFscywgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIGxlbmd0aC5cclxuICAgICogTGVmdCBvdmVyIHRpbWUgaXMgZ3JvdXBlZCBpbnRvIGEgc21hbGxlciBpbnRlcnZhbFxyXG4gICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGxlbmd0aCBvZiBlYWNoIHJlc3VsdGluZyBpbnRlcnZhbC5cclxuICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAqL1xyXG4gIHNwbGl0QnkoZHVyYXRpb24pIHtcclxuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xyXG5cclxuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFkdXIuaXNWYWxpZCB8fCBkdXIuYXMoJ21pbGxpc2Vjb25kcycpID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgeyBzIH0gPSB0aGlzO1xyXG4gICAgbGV0IGlkeCA9IDE7XHJcbiAgICBsZXQgbmV4dDtcclxuXHJcbiAgICBjb25zdCByZXN1bHRzID0gW107XHJcbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xyXG4gICAgICBjb25zdCBhZGRlZCA9IHRoaXMuc3RhcnQucGx1cyhkdXIubWFwVW5pdHMoKHgpID0+IHggKiBpZHgpKTtcclxuICAgICAgbmV4dCA9ICthZGRlZCA+ICt0aGlzLmUgPyB0aGlzLmUgOiBhZGRlZDtcclxuICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMocywgbmV4dCkpO1xyXG4gICAgICBzID0gbmV4dDtcclxuICAgICAgaWR4ICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU3BsaXQgdGhpcyBJbnRlcnZhbCBpbnRvIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHNtYWxsZXIgaW50ZXJ2YWxzLlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZQYXJ0cyAtIFRoZSBudW1iZXIgb2YgSW50ZXJ2YWxzIHRvIGRpdmlkZSB0aGUgSW50ZXJ2YWwgaW50by5cclxuICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAqL1xyXG4gIGRpdmlkZUVxdWFsbHkobnVtYmVyT2ZQYXJ0cykge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTtcclxuICAgIHJldHVybiB0aGlzLnNwbGl0QnkodGhpcy5sZW5ndGgoKSAvIG51bWJlck9mUGFydHMpLnNsaWNlKDAsIG51bWJlck9mUGFydHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgb3ZlcmxhcHMgd2l0aCB0aGUgc3BlY2lmaWVkIEludGVydmFsXHJcbiAgICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIG92ZXJsYXBzKG90aGVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lID4gb3RoZXIucyAmJiB0aGlzLnMgPCBvdGhlci5lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYWRqYWNlbnQgdG8gdGhlIHNwZWNpZmllZCBJbnRlcnZhbCdzIHN0YXJ0LlxyXG4gICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBhYnV0c1N0YXJ0KG90aGVyKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuICt0aGlzLmUgPT09ICtvdGhlci5zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBzdGFydCBpcyBhZGphY2VudCB0byB0aGUgc3BlY2lmaWVkIEludGVydmFsJ3MgZW5kLlxyXG4gICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBhYnV0c0VuZChvdGhlcikge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiArb3RoZXIuZSA9PT0gK3RoaXMucztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGVuZ3VsZnMgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cclxuICAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgZW5ndWxmcyhvdGhlcikge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzLnMgPD0gb3RoZXIucyAmJiB0aGlzLmUgPj0gb3RoZXIuZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGhhcyB0aGUgc2FtZSBzdGFydCBhbmQgZW5kIGFzIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXHJcbiAgICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGVxdWFscyhvdGhlcikge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnMuZXF1YWxzKG90aGVyLnMpICYmIHRoaXMuZS5lcXVhbHMob3RoZXIuZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgaW50ZXJzZWN0aW9uIG9mIHRoaXMgSW50ZXJ2YWwgYW5kIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXHJcbiAgICAqIFNwZWNpZmljYWxseSwgdGhlIHJlc3VsdGluZyBJbnRlcnZhbCBoYXMgdGhlIG1heGltdW0gc3RhcnQgdGltZSBhbmQgdGhlIG1pbmltdW0gZW5kIHRpbWUgb2YgdGhlIHR3byBJbnRlcnZhbHMuXHJcbiAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgaW50ZXJzZWN0aW9uIGlzIGVtcHR5LCBtZWFuaW5nLCB0aGUgaW50ZXJ2YWxzIGRvbid0IGludGVyc2VjdC5cclxuICAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcclxuICAgICogQHJldHVybiB7SW50ZXJ2YWx9XHJcbiAgICAqL1xyXG4gIGludGVyc2VjdGlvbihvdGhlcikge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG4gICAgY29uc3QgcyA9IHRoaXMucyA+IG90aGVyLnMgPyB0aGlzLnMgOiBvdGhlci5zO1xyXG4gICAgY29uc3QgZSA9IHRoaXMuZSA8IG90aGVyLmUgPyB0aGlzLmUgOiBvdGhlci5lO1xyXG5cclxuICAgIGlmIChzID49IGUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSB1bmlvbiBvZiB0aGlzIEludGVydmFsIGFuZCB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxyXG4gICAgKiBTcGVjaWZpY2FsbHksIHRoZSByZXN1bHRpbmcgSW50ZXJ2YWwgaGFzIHRoZSBtaW5pbXVtIHN0YXJ0IHRpbWUgYW5kIHRoZSBtYXhpbXVtIGVuZCB0aW1lIG9mIHRoZSB0d28gSW50ZXJ2YWxzLlxyXG4gICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxyXG4gICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cclxuICAgICovXHJcbiAgdW5pb24ob3RoZXIpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuICAgIGNvbnN0IHMgPSB0aGlzLnMgPCBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucztcclxuICAgIGNvbnN0IGUgPSB0aGlzLmUgPiBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcclxuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIE1lcmdlIGFuIGFycmF5IG9mIEludGVydmFscyBpbnRvIGEgZXF1aXZhbGVudCBtaW5pbWFsIHNldCBvZiBJbnRlcnZhbHMuXHJcbiAgICAqIENvbWJpbmVzIG92ZXJsYXBwaW5nIGFuZCBhZGphY2VudCBJbnRlcnZhbHMuXHJcbiAgICAqIEBwYXJhbSB7QXJyYXl9IGludGVydmFsc1xyXG4gICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICovXHJcbiAgc3RhdGljIG1lcmdlKGludGVydmFscykge1xyXG4gICAgY29uc3QgW2ZvdW5kLCBmaW5hbF0gPSBpbnRlcnZhbHNcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEucyAtIGIucylcclxuICAgICAgLnJlZHVjZShcclxuICAgICAgICAoW3NvZmFyLCBjdXJyZW50XSwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFjdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGl0ZW1dO1xyXG4gICAgICAgICAgfSBpZiAoY3VycmVudC5vdmVybGFwcyhpdGVtKSB8fCBjdXJyZW50LmFidXRzU3RhcnQoaXRlbSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtzb2ZhciwgY3VycmVudC51bmlvbihpdGVtKV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gW3NvZmFyLmNvbmNhdChbY3VycmVudF0pLCBpdGVtXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtbXSwgbnVsbF0sXHJcbiAgICAgICk7XHJcbiAgICBpZiAoZmluYWwpIHtcclxuICAgICAgZm91bmQucHVzaChmaW5hbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm91bmQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIGFuIGFycmF5IG9mIEludGVydmFscyByZXByZXNlbnRpbmcgdGhlIHNwYW5zIG9mIHRpbWUgdGhhdCBvbmx5IGFwcGVhciBpbiBvbmUgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbHMuXHJcbiAgICAqIEBwYXJhbSB7QXJyYXl9IGludGVydmFsc1xyXG4gICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICovXHJcbiAgc3RhdGljIHhvcihpbnRlcnZhbHMpIHtcclxuICAgIGxldCBzdGFydCA9IG51bGw7XHJcbiAgICBsZXQgY3VycmVudENvdW50ID0gMDtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgIGNvbnN0IGVuZHMgPSBpbnRlcnZhbHMubWFwKChpKSA9PiBbXHJcbiAgICAgIHsgdGltZTogaS5zLCB0eXBlOiAncycgfSxcclxuICAgICAgeyB0aW1lOiBpLmUsIHR5cGU6ICdlJyB9LFxyXG4gICAgXSk7XHJcbiAgICBjb25zdCBmbGF0dGVuZWQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0KC4uLmVuZHMpO1xyXG4gICAgY29uc3QgYXJyID0gZmxhdHRlbmVkLnNvcnQoKGEsIGIpID0+IGEudGltZSAtIGIudGltZSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBpIG9mIGFycikge1xyXG4gICAgICBjdXJyZW50Q291bnQgKz0gaS50eXBlID09PSAncycgPyAxIDogLTE7XHJcblxyXG4gICAgICBpZiAoY3VycmVudENvdW50ID09PSAxKSB7XHJcbiAgICAgICAgc3RhcnQgPSBpLnRpbWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ICYmICtzdGFydCAhPT0gK2kudGltZSkge1xyXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGkudGltZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEludGVydmFsLm1lcmdlKHJlc3VsdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIHNwYW4gb2YgdGltZSBpbiB0aGlzIEludGVydmFsIHRoYXQgZG9lc24ndCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxzLlxyXG4gICAgKiBAcGFyYW0gey4uLkludGVydmFsfSBpbnRlcnZhbHNcclxuICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAqL1xyXG4gIGRpZmZlcmVuY2UoLi4uaW50ZXJ2YWxzKSB7XHJcbiAgICByZXR1cm4gSW50ZXJ2YWwueG9yKFt0aGlzXS5jb25jYXQoaW50ZXJ2YWxzKSlcclxuICAgICAgLm1hcCgoaSkgPT4gdGhpcy5pbnRlcnNlY3Rpb24oaSkpXHJcbiAgICAgIC5maWx0ZXIoKGkpID0+IGkgJiYgIWkuaXNFbXB0eSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwgYXBwcm9wcmlhdGUgZm9yIGRlYnVnZ2luZy5cclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b1N0cmluZygpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xyXG4gICAgcmV0dXJuIGBbJHt0aGlzLnMudG9JU08oKX0g4oCTICR7dGhpcy5lLnRvSVNPKCl9KWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwuXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZSN0b0lTT31cclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0lTTyhvcHRzKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcclxuICAgIHJldHVybiBgJHt0aGlzLnMudG9JU08ob3B0cyl9LyR7dGhpcy5lLnRvSVNPKG9wdHMpfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGRhdGUgb2YgdGhpcyBJbnRlcnZhbC5cclxuICAgICogVGhlIHRpbWUgY29tcG9uZW50cyBhcmUgaWdub3JlZC5cclxuICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvSVNPRGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xyXG4gICAgcmV0dXJuIGAke3RoaXMucy50b0lTT0RhdGUoKX0vJHt0aGlzLmUudG9JU09EYXRlKCl9YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGltZSBvZiB0aGlzIEludGVydmFsLlxyXG4gICAgKiBUaGUgZGF0ZSBjb21wb25lbnRzIGFyZSBpZ25vcmVkLlxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gVGhlIHNhbWUgb3B0aW9ucyBhcyB7QGxpbmsgRGF0ZVRpbWUjdG9JU099XHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9JU09UaW1lKG9wdHMpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xyXG4gICAgcmV0dXJuIGAke3RoaXMucy50b0lTT1RpbWUob3B0cyl9LyR7dGhpcy5lLnRvSVNPVGltZShvcHRzKX1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGVGb3JtYXQgLSB0aGUgZm9ybWF0IHN0cmluZy4gVGhpcyBzdHJpbmcgZm9ybWF0cyB0aGUgc3RhcnQgYW5kIGVuZCB0aW1lLiBTZWUge0BsaW5rIERhdGVUaW1lI3RvRm9ybWF0fSBmb3IgZGV0YWlscy5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5zZXBhcmF0b3IgPSAgJyDigJMgJ10gLSBhIHNlcGFyYXRvciB0byBwbGFjZSBiZXR3ZWVuIHRoZSBzdGFydCBhbmQgZW5kIHJlcHJlc2VudGF0aW9uc1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvRm9ybWF0KGRhdGVGb3JtYXQsIHsgc2VwYXJhdG9yID0gJyDigJMgJyB9ID0ge30pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xyXG4gICAgcmV0dXJuIGAke3RoaXMucy50b0Zvcm1hdChkYXRlRm9ybWF0KX0ke3NlcGFyYXRvcn0ke3RoaXMuZS50b0Zvcm1hdChkYXRlRm9ybWF0KX1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiBhIER1cmF0aW9uIHJlcHJlc2VudGluZyB0aGUgdGltZSBzcGFubmVkIGJ5IHRoaXMgaW50ZXJ2YWwuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvbi5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXHJcbiAgICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oKS50b09iamVjdCgpIC8vPT4geyBtaWxsaXNlY29uZHM6IDg4NDg5MjU3IH1cclxuICAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbignZGF5cycpLnRvT2JqZWN0KCkgLy89PiB7IGRheXM6IDEuMDI0MTgxMjE1Mjc3Nzc3OCB9XHJcbiAgICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oWydob3VycycsICdtaW51dGVzJ10pLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyNCwgbWludXRlczogMzQuODIwOTUgfVxyXG4gICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKFsnaG91cnMnLCAnbWludXRlcycsICdzZWNvbmRzJ10pLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyNCwgbWludXRlczogMzQsIHNlY29uZHM6IDQ5LjI1NyB9XHJcbiAgICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oJ3NlY29uZHMnKS50b09iamVjdCgpIC8vPT4geyBzZWNvbmRzOiA4ODQ4OS4yNTcgfVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgdG9EdXJhdGlvbih1bml0LCBvcHRzKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZCh0aGlzLmludmFsaWRSZWFzb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZS5kaWZmKHRoaXMucywgdW5pdCwgb3B0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUnVuIG1hcEZuIG9uIHRoZSBpbnRlcnZhbCBzdGFydCBhbmQgZW5kLCByZXR1cm5pbmcgYSBuZXcgSW50ZXJ2YWwgZnJvbSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lc1xyXG4gICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtYXBGblxyXG4gICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cclxuICAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikubWFwRW5kcG9pbnRzKGVuZHBvaW50ID0+IGVuZHBvaW50LnRvVVRDKCkpXHJcbiAgICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLm1hcEVuZHBvaW50cyhlbmRwb2ludCA9PiBlbmRwb2ludC5wbHVzKHsgaG91cnM6IDIgfSkpXHJcbiAgICAqL1xyXG4gIG1hcEVuZHBvaW50cyhtYXBGbikge1xyXG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMobWFwRm4odGhpcy5zKSwgbWFwRm4odGhpcy5lKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICAqIFRoZSBJbmZvIGNsYXNzIGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIGZvciByZXRyaWV2aW5nIGdlbmVyYWwgdGltZSBhbmQgZGF0ZSByZWxhdGVkIGRhdGEuIEZvciBleGFtcGxlLCBpdCBoYXMgbWV0aG9kcyBmb3IgZmluZGluZyBvdXQgaWYgYSB0aW1lIHpvbmUgaGFzIGEgRFNULCBmb3IgbGlzdGluZyB0aGUgbW9udGhzIGluIGFueSBzdXBwb3J0ZWQgbG9jYWxlLCBhbmQgZm9yIGRpc2NvdmVyaW5nIHdoaWNoIG9mIEx1eG9uIGZlYXR1cmVzIGFyZSBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAgKi9cclxuY2xhc3MgSW5mbyB7XHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgem9uZSBjb250YWlucyBhIERTVC5cclxuICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW3pvbmU9J2xvY2FsJ10gLSBab25lIHRvIGNoZWNrLiBEZWZhdWx0cyB0byB0aGUgZW52aXJvbm1lbnQncyBsb2NhbCB6b25lLlxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBzdGF0aWMgaGFzRFNUKHpvbmUgPSBTZXR0aW5ncy5kZWZhdWx0Wm9uZSkge1xyXG4gICAgY29uc3QgcHJvdG8gPSBEYXRlVGltZS5ub3coKS5zZXRab25lKHpvbmUpLnNldCh7IG1vbnRoOiAxMiB9KTtcclxuXHJcbiAgICByZXR1cm4gIXpvbmUuaXNVbml2ZXJzYWwgJiYgcHJvdG8ub2Zmc2V0ICE9PSBwcm90by5zZXQoeyBtb250aDogNiB9KS5vZmZzZXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB6b25lIGlzIGEgdmFsaWQgSUFOQSBzcGVjaWZpZXIuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gWm9uZSB0byBjaGVja1xyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBzdGF0aWMgaXNWYWxpZElBTkFab25lKHpvbmUpIHtcclxuICAgIHJldHVybiBJQU5BWm9uZS5pc1ZhbGlkWm9uZSh6b25lKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDb252ZXJ0cyB0aGUgaW5wdXQgaW50byBhIHtAbGluayBab25lfSBpbnN0YW5jZS5cclxuICAgICpcclxuICAgICogKiBJZiBgaW5wdXRgIGlzIGFscmVhZHkgYSBab25lIGluc3RhbmNlLCBpdCBpcyByZXR1cm5lZCB1bmNoYW5nZWQuXHJcbiAgICAqICogSWYgYGlucHV0YCBpcyBhIHN0cmluZyBjb250YWluaW5nIGEgdmFsaWQgdGltZSB6b25lIG5hbWUsIGEgWm9uZSBpbnN0YW5jZVxyXG4gICAgKiAgIHdpdGggdGhhdCBuYW1lIGlzIHJldHVybmVkLlxyXG4gICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgdGhhdCBkb2Vzbid0IHJlZmVyIHRvIGEga25vd24gdGltZSB6b25lLCBhIFpvbmVcclxuICAgICogICBpbnN0YW5jZSB3aXRoIHtAbGluayBab25lI2lzVmFsaWR9ID09IGZhbHNlIGlzIHJldHVybmVkLlxyXG4gICAgKiAqIElmIGBpbnB1dCBpcyBhIG51bWJlciwgYSBab25lIGluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCBmaXhlZCBvZmZzZXRcclxuICAgICogICBpbiBtaW51dGVzIGlzIHJldHVybmVkLlxyXG4gICAgKiAqIElmIGBpbnB1dGAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCB0aGUgZGVmYXVsdCB6b25lIGlzIHJldHVybmVkLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfG51bWJlcn0gW2lucHV0XSAtIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWRcclxuICAgICogQHJldHVybiB7Wm9uZX1cclxuICAgICovXHJcbiAgc3RhdGljIG5vcm1hbGl6ZVpvbmUoaW5wdXQpIHtcclxuICAgIHJldHVybiBub3JtYWxpemVab25lKGlucHV0LCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIGFuIGFycmF5IG9mIHN0YW5kYWxvbmUgbW9udGggbmFtZXMuXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibnVtZXJpY1wiLCBcIjItZGlnaXRcIiwgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXI9J2dyZWdvcnknXSAtIHRoZSBjYWxlbmRhclxyXG4gICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygpWzBdIC8vPT4gJ0phbnVhcnknXHJcbiAgICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdzaG9ydCcpWzBdIC8vPT4gJ0phbidcclxuICAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ251bWVyaWMnKVswXSAvLz0+ICcxJ1xyXG4gICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnc2hvcnQnLCB7IGxvY2FsZTogJ2ZyLUNBJyB9IClbMF0gLy89PiAnamFudi4nXHJcbiAgICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdudW1lcmljJywgeyBsb2NhbGU6ICdhcicgfSlbMF0gLy89PiAn2aEnXHJcbiAgICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdsb25nJywgeyBvdXRwdXRDYWxlbmRhcjogJ2lzbGFtaWMnIH0pWzBdIC8vPT4gJ1JhYmnKuyBJJ1xyXG4gICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICovXHJcbiAgc3RhdGljIG1vbnRocyhcclxuICAgIGxlbmd0aCA9ICdsb25nJyxcclxuICAgIHtcclxuICAgICAgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgbG9jT2JqID0gbnVsbCwgb3V0cHV0Q2FsZW5kYXIgPSAnZ3JlZ29yeScsXHJcbiAgICB9ID0ge30sXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikpLm1vbnRocyhsZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiBhbiBhcnJheSBvZiBmb3JtYXQgbW9udGggbmFtZXMuXHJcbiAgICAqIEZvcm1hdCBtb250aHMgZGlmZmVyIGZyb20gc3RhbmRhbG9uZSBtb250aHMgaW4gdGhhdCB0aGV5J3JlIG1lYW50IHRvIGFwcGVhciBuZXh0IHRvIHRoZSBkYXkgb2YgdGhlIG1vbnRoLiBJbiBzb21lIGxhbmd1YWdlcywgdGhhdFxyXG4gICAgKiBjaGFuZ2VzIHRoZSBzdHJpbmcuXHJcbiAgICAqIFNlZSB7QGxpbmsgSW5mbyNtb250aHN9XHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm51bWVyaWNcIiwgXCIyLWRpZ2l0XCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcclxuICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBtb250aHNGb3JtYXQoXHJcbiAgICBsZW5ndGggPSAnbG9uZycsXHJcbiAgICB7XHJcbiAgICAgIGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIGxvY09iaiA9IG51bGwsIG91dHB1dENhbGVuZGFyID0gJ2dyZWdvcnknLFxyXG4gICAgfSA9IHt9LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpKS5tb250aHMobGVuZ3RoLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSB3ZWVrIG5hbWVzLlxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSB3ZWVrZGF5IHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCIuXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXHJcbiAgICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoKVswXSAvLz0+ICdNb25kYXknXHJcbiAgICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JylbMF0gLy89PiAnTW9uJ1xyXG4gICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jYWxlOiAnZnItQ0EnIH0pWzBdIC8vPT4gJ2x1bi4nXHJcbiAgICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NhbGU6ICdhcicgfSlbMF0gLy89PiAn2KfZhNin2KvZhtmK2YYnXHJcbiAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgKi9cclxuICBzdGF0aWMgd2Vla2RheXMobGVuZ3RoID0gJ2xvbmcnLCB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIGxvY09iaiA9IG51bGwgfSA9IHt9KSB7XHJcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBudWxsKSkud2Vla2RheXMobGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZm9ybWF0IHdlZWsgbmFtZXMuXHJcbiAgICAqIEZvcm1hdCB3ZWVrZGF5cyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIHdlZWtkYXlzIGluIHRoYXQgdGhleSdyZSBtZWFudCB0byBhcHBlYXIgbmV4dCB0byBtb3JlIGRhdGUgaW5mb3JtYXRpb24uIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0XHJcbiAgICAqIGNoYW5nZXMgdGhlIHN0cmluZy5cclxuICAgICogU2VlIHtAbGluayBJbmZvI3dlZWtkYXlzfVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9bnVsbF0gLSB0aGUgbG9jYWxlIGNvZGVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxyXG4gICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICovXHJcbiAgc3RhdGljIHdlZWtkYXlzRm9ybWF0KFxyXG4gICAgbGVuZ3RoID0gJ2xvbmcnLFxyXG4gICAgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsIH0gPSB7fSxcclxuICApIHtcclxuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG51bGwpKS53ZWVrZGF5cyhsZW5ndGgsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiBhbiBhcnJheSBvZiBtZXJpZGllbXMuXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxyXG4gICAgKiBAZXhhbXBsZSBJbmZvLm1lcmlkaWVtcygpIC8vPT4gWyAnQU0nLCAnUE0nIF1cclxuICAgICogQGV4YW1wbGUgSW5mby5tZXJpZGllbXMoeyBsb2NhbGU6ICdteScgfSkgLy89PiBbICfhgJThgLbhgJThgIDhgLonLCAn4YCK4YCU4YCxJyBdXHJcbiAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgKi9cclxuICBzdGF0aWMgbWVyaWRpZW1zKHsgbG9jYWxlID0gbnVsbCB9ID0ge30pIHtcclxuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSkubWVyaWRpZW1zKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIGFuIGFycmF5IG9mIGVyYXMsIHN1Y2ggYXMgWydCQycsICdBRCddLiBUaGUgbG9jYWxlIGNhbiBiZSBzcGVjaWZpZWQsIGJ1dCB0aGUgY2FsZW5kYXIgc3lzdGVtIGlzIGFsd2F5cyBHcmVnb3JpYW4uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdzaG9ydCddIC0gdGhlIGxlbmd0aCBvZiB0aGUgZXJhIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwic2hvcnRcIiBvciBcImxvbmdcIi5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXHJcbiAgICAqIEBleGFtcGxlIEluZm8uZXJhcygpIC8vPT4gWyAnQkMnLCAnQUQnIF1cclxuICAgICogQGV4YW1wbGUgSW5mby5lcmFzKCdsb25nJykgLy89PiBbICdCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJyBdXHJcbiAgICAqIEBleGFtcGxlIEluZm8uZXJhcygnbG9uZycsIHsgbG9jYWxlOiAnZnInIH0pIC8vPT4gWyAnYXZhbnQgSsOpc3VzLUNocmlzdCcsICdhcHLDqHMgSsOpc3VzLUNocmlzdCcgXVxyXG4gICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICovXHJcbiAgc3RhdGljIGVyYXMobGVuZ3RoID0gJ3Nob3J0JywgeyBsb2NhbGUgPSBudWxsIH0gPSB7fSkge1xyXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudWxsLCAnZ3JlZ29yeScpLmVyYXMobGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gdGhlIHNldCBvZiBhdmFpbGFibGUgZmVhdHVyZXMgaW4gdGhpcyBlbnZpcm9ubWVudC5cclxuICAgICogU29tZSBmZWF0dXJlcyBvZiBMdXhvbiBhcmUgbm90IGF2YWlsYWJsZSBpbiBhbGwgZW52aXJvbm1lbnRzLiBGb3IgZXhhbXBsZSwgb24gb2xkZXIgYnJvd3NlcnMsIHJlbGF0aXZlIHRpbWUgZm9ybWF0dGluZyBzdXBwb3J0IGlzIG5vdCBhdmFpbGFibGUuIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgaWYgdGhhdCdzIHRoZSBjYXNlLlxyXG4gICAgKiBLZXlzOlxyXG4gICAgKiAqIGByZWxhdGl2ZWA6IHdoZXRoZXIgdGhpcyBlbnZpcm9ubWVudCBzdXBwb3J0cyByZWxhdGl2ZSB0aW1lIGZvcm1hdHRpbmdcclxuICAgICogQGV4YW1wbGUgSW5mby5mZWF0dXJlcygpIC8vPT4geyByZWxhdGl2ZTogZmFsc2UgfVxyXG4gICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmZWF0dXJlcygpIHtcclxuICAgIHJldHVybiB7IHJlbGF0aXZlOiBoYXNSZWxhdGl2ZSgpIH07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkYXlEaWZmKGVhcmxpZXIsIGxhdGVyKSB7XHJcbiAgY29uc3QgdXRjRGF5U3RhcnQgPSAoZHQpID0+IGR0LnRvVVRDKDAsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XHJcbiAgY29uc3QgbXMgPSB1dGNEYXlTdGFydChsYXRlcikgLSB1dGNEYXlTdGFydChlYXJsaWVyKTtcclxuICByZXR1cm4gTWF0aC5mbG9vcihEdXJhdGlvbi5mcm9tTWlsbGlzKG1zKS5hcygnZGF5cycpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlnaE9yZGVyRGlmZnMoY3Vyc29yLCBsYXRlciwgdW5pdHMpIHtcclxuICBjb25zdCBkaWZmZXJzID0gW1xyXG4gICAgWyd5ZWFycycsIChhLCBiKSA9PiBiLnllYXIgLSBhLnllYXJdLFxyXG4gICAgWydxdWFydGVycycsIChhLCBiKSA9PiBiLnF1YXJ0ZXIgLSBhLnF1YXJ0ZXJdLFxyXG4gICAgWydtb250aHMnLCAoYSwgYikgPT4gYi5tb250aCAtIGEubW9udGggKyAoYi55ZWFyIC0gYS55ZWFyKSAqIDEyXSxcclxuICAgIFtcclxuICAgICAgJ3dlZWtzJyxcclxuICAgICAgKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBkYXlzID0gZGF5RGlmZihhLCBiKTtcclxuICAgICAgICByZXR1cm4gKGRheXMgLSAoZGF5cyAlIDcpKSAvIDc7XHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgWydkYXlzJywgZGF5RGlmZl0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmVzdWx0cyA9IHt9O1xyXG4gIGxldCBsb3dlc3RPcmRlcjsgbGV0XHJcbiAgICBoaWdoV2F0ZXI7XHJcblxyXG4gIGZvciAoY29uc3QgW3VuaXQsIGRpZmZlcl0gb2YgZGlmZmVycykge1xyXG4gICAgaWYgKHVuaXRzLmluZGV4T2YodW5pdCkgPj0gMCkge1xyXG4gICAgICBsb3dlc3RPcmRlciA9IHVuaXQ7XHJcblxyXG4gICAgICBsZXQgZGVsdGEgPSBkaWZmZXIoY3Vyc29yLCBsYXRlcik7XHJcbiAgICAgIGhpZ2hXYXRlciA9IGN1cnNvci5wbHVzKHsgW3VuaXRdOiBkZWx0YSB9KTtcclxuXHJcbiAgICAgIGlmIChoaWdoV2F0ZXIgPiBsYXRlcikge1xyXG4gICAgICAgIGN1cnNvciA9IGN1cnNvci5wbHVzKHsgW3VuaXRdOiBkZWx0YSAtIDEgfSk7XHJcbiAgICAgICAgZGVsdGEgLT0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJzb3IgPSBoaWdoV2F0ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdHNbdW5pdF0gPSBkZWx0YTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBbY3Vyc29yLCByZXN1bHRzLCBoaWdoV2F0ZXIsIGxvd2VzdE9yZGVyXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlmZihlYXJsaWVyLCBsYXRlciwgdW5pdHMsIG9wdHMpIHtcclxuICBsZXQgW2N1cnNvciwgcmVzdWx0cywgaGlnaFdhdGVyLCBsb3dlc3RPcmRlcl0gPSBoaWdoT3JkZXJEaWZmcyhlYXJsaWVyLCBsYXRlciwgdW5pdHMpO1xyXG5cclxuICBjb25zdCByZW1haW5pbmdNaWxsaXMgPSBsYXRlciAtIGN1cnNvcjtcclxuXHJcbiAgY29uc3QgbG93ZXJPcmRlclVuaXRzID0gdW5pdHMuZmlsdGVyKFxyXG4gICAgKHUpID0+IFsnaG91cnMnLCAnbWludXRlcycsICdzZWNvbmRzJywgJ21pbGxpc2Vjb25kcyddLmluZGV4T2YodSkgPj0gMCxcclxuICApO1xyXG5cclxuICBpZiAobG93ZXJPcmRlclVuaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgaWYgKGhpZ2hXYXRlciA8IGxhdGVyKSB7XHJcbiAgICAgIGhpZ2hXYXRlciA9IGN1cnNvci5wbHVzKHsgW2xvd2VzdE9yZGVyXTogMSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGlnaFdhdGVyICE9PSBjdXJzb3IpIHtcclxuICAgICAgcmVzdWx0c1tsb3dlc3RPcmRlcl0gPSAocmVzdWx0c1tsb3dlc3RPcmRlcl0gfHwgMCkgKyByZW1haW5pbmdNaWxsaXMgLyAoaGlnaFdhdGVyIC0gY3Vyc29yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGR1cmF0aW9uID0gRHVyYXRpb24uZnJvbU9iamVjdChyZXN1bHRzLCBvcHRzKTtcclxuXHJcbiAgaWYgKGxvd2VyT3JkZXJVbml0cy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gRHVyYXRpb24uZnJvbU1pbGxpcyhyZW1haW5pbmdNaWxsaXMsIG9wdHMpXHJcbiAgICAgIC5zaGlmdFRvKC4uLmxvd2VyT3JkZXJVbml0cylcclxuICAgICAgLnBsdXMoZHVyYXRpb24pO1xyXG4gIH1cclxuICByZXR1cm4gZHVyYXRpb247XHJcbn1cclxuXHJcbmNvbnN0IG51bWJlcmluZ1N5c3RlbXMgPSB7XHJcbiAgYXJhYjogJ1tcXHUwNjYwLVxcdTA2NjldJyxcclxuICBhcmFiZXh0OiAnW1xcdTA2RjAtXFx1MDZGOV0nLFxyXG4gIGJhbGk6ICdbXFx1MUI1MC1cXHUxQjU5XScsXHJcbiAgYmVuZzogJ1tcXHUwOUU2LVxcdTA5RUZdJyxcclxuICBkZXZhOiAnW1xcdTA5NjYtXFx1MDk2Rl0nLFxyXG4gIGZ1bGx3aWRlOiAnW1xcdUZGMTAtXFx1RkYxOV0nLFxyXG4gIGd1anI6ICdbXFx1MEFFNi1cXHUwQUVGXScsXHJcbiAgaGFuaWRlYzogJ1vjgId85LiAfOS6jHzkuIl85ZubfOS6lHzlha185LiDfOWFq3zkuZ1dJyxcclxuICBraG1yOiAnW1xcdTE3RTAtXFx1MTdFOV0nLFxyXG4gIGtuZGE6ICdbXFx1MENFNi1cXHUwQ0VGXScsXHJcbiAgbGFvbzogJ1tcXHUwRUQwLVxcdTBFRDldJyxcclxuICBsaW1iOiAnW1xcdTE5NDYtXFx1MTk0Rl0nLFxyXG4gIG1seW06ICdbXFx1MEQ2Ni1cXHUwRDZGXScsXHJcbiAgbW9uZzogJ1tcXHUxODEwLVxcdTE4MTldJyxcclxuICBteW1yOiAnW1xcdTEwNDAtXFx1MTA0OV0nLFxyXG4gIG9yeWE6ICdbXFx1MEI2Ni1cXHUwQjZGXScsXHJcbiAgdGFtbGRlYzogJ1tcXHUwQkU2LVxcdTBCRUZdJyxcclxuICB0ZWx1OiAnW1xcdTBDNjYtXFx1MEM2Rl0nLFxyXG4gIHRoYWk6ICdbXFx1MEU1MC1cXHUwRTU5XScsXHJcbiAgdGlidDogJ1tcXHUwRjIwLVxcdTBGMjldJyxcclxuICBsYXRuOiAnXFxcXGQnLFxyXG59O1xyXG5cclxuY29uc3QgbnVtYmVyaW5nU3lzdGVtc1VURjE2ID0ge1xyXG4gIGFyYWI6IFsxNjMyLCAxNjQxXSxcclxuICBhcmFiZXh0OiBbMTc3NiwgMTc4NV0sXHJcbiAgYmFsaTogWzY5OTIsIDcwMDFdLFxyXG4gIGJlbmc6IFsyNTM0LCAyNTQzXSxcclxuICBkZXZhOiBbMjQwNiwgMjQxNV0sXHJcbiAgZnVsbHdpZGU6IFs2NTI5NiwgNjUzMDNdLFxyXG4gIGd1anI6IFsyNzkwLCAyNzk5XSxcclxuICBraG1yOiBbNjExMiwgNjEyMV0sXHJcbiAga25kYTogWzMzMDIsIDMzMTFdLFxyXG4gIGxhb286IFszNzkyLCAzODAxXSxcclxuICBsaW1iOiBbNjQ3MCwgNjQ3OV0sXHJcbiAgbWx5bTogWzM0MzAsIDM0MzldLFxyXG4gIG1vbmc6IFs2MTYwLCA2MTY5XSxcclxuICBteW1yOiBbNDE2MCwgNDE2OV0sXHJcbiAgb3J5YTogWzI5MTgsIDI5MjddLFxyXG4gIHRhbWxkZWM6IFszMDQ2LCAzMDU1XSxcclxuICB0ZWx1OiBbMzE3NCwgMzE4M10sXHJcbiAgdGhhaTogWzM2NjQsIDM2NzNdLFxyXG4gIHRpYnQ6IFszODcyLCAzODgxXSxcclxufTtcclxuXHJcbmNvbnN0IGhhbmlkZWNDaGFycyA9IG51bWJlcmluZ1N5c3RlbXMuaGFuaWRlYy5yZXBsYWNlKC9bXFxbfFxcXV0vZywgJycpLnNwbGl0KCcnKTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlRGlnaXRzKHN0cikge1xyXG4gIGxldCB2YWx1ZSA9IHBhcnNlSW50KHN0ciwgMTApO1xyXG4gIGlmIChpc05hTih2YWx1ZSkpIHtcclxuICAgIHZhbHVlID0gJyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcblxyXG4gICAgICBpZiAoc3RyW2ldLnNlYXJjaChudW1iZXJpbmdTeXN0ZW1zLmhhbmlkZWMpICE9PSAtMSkge1xyXG4gICAgICAgIHZhbHVlICs9IGhhbmlkZWNDaGFycy5pbmRleE9mKHN0cltpXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbnVtYmVyaW5nU3lzdGVtc1VURjE2KSB7XHJcbiAgICAgICAgICBjb25zdCBbbWluLCBtYXhdID0gbnVtYmVyaW5nU3lzdGVtc1VURjE2W2tleV07XHJcbiAgICAgICAgICBpZiAoY29kZSA+PSBtaW4gJiYgY29kZSA8PSBtYXgpIHtcclxuICAgICAgICAgICAgdmFsdWUgKz0gY29kZSAtIG1pbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xyXG4gIH1cclxuICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpZ2l0UmVnZXgoeyBudW1iZXJpbmdTeXN0ZW0gfSwgYXBwZW5kID0gJycpIHtcclxuICByZXR1cm4gbmV3IFJlZ0V4cChgJHtudW1iZXJpbmdTeXN0ZW1zW251bWJlcmluZ1N5c3RlbSB8fCAnbGF0biddfSR7YXBwZW5kfWApO1xyXG59XHJcblxyXG5jb25zdCBNSVNTSU5HX0ZUUCA9ICdtaXNzaW5nIEludGwuRGF0ZVRpbWVGb3JtYXQuZm9ybWF0VG9QYXJ0cyBzdXBwb3J0JztcclxuXHJcbmZ1bmN0aW9uIGludFVuaXQocmVnZXgsIHBvc3QgPSAoaSkgPT4gaSkge1xyXG4gIHJldHVybiB7IHJlZ2V4LCBkZXNlcjogKFtzXSkgPT4gcG9zdChwYXJzZURpZ2l0cyhzKSkgfTtcclxufVxyXG5cclxuY29uc3QgTkJTUCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTYwKTtcclxuY29uc3Qgc3BhY2VPck5CU1AgPSBgWyAke05CU1B9XWA7XHJcbmNvbnN0IHNwYWNlT3JOQlNQUmVnRXhwID0gbmV3IFJlZ0V4cChzcGFjZU9yTkJTUCwgJ2cnKTtcclxuXHJcbmZ1bmN0aW9uIGZpeExpc3RSZWdleChzKSB7XHJcbiAgLy8gbWFrZSBkb3RzIG9wdGlvbmFsIGFuZCBhbHNvIG1ha2UgdGhlbSBsaXRlcmFsXHJcbiAgLy8gbWFrZSBzcGFjZSBhbmQgbm9uIGJyZWFrYWJsZSBzcGFjZSBjaGFyYWN0ZXJzIGludGVyY2hhbmdlYWJsZVxyXG4gIHJldHVybiBzLnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4/JykucmVwbGFjZShzcGFjZU9yTkJTUFJlZ0V4cCwgc3BhY2VPck5CU1ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdHJpcEluc2Vuc2l0aXZpdGllcyhzKSB7XHJcbiAgcmV0dXJuIHNcclxuICAgIC5yZXBsYWNlKC9cXC4vZywgJycpIC8vIGlnbm9yZSBkb3RzIHRoYXQgd2VyZSBtYWRlIG9wdGlvbmFsXHJcbiAgICAucmVwbGFjZShzcGFjZU9yTkJTUFJlZ0V4cCwgJyAnKSAvLyBpbnRlcmNoYW5nZSBzcGFjZSBhbmQgbmJzcFxyXG4gICAgLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uZU9mKHN0cmluZ3MsIHN0YXJ0SW5kZXgpIHtcclxuICBpZiAoc3RyaW5ncyA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICByZWdleDogUmVnRXhwKHN0cmluZ3MubWFwKGZpeExpc3RSZWdleCkuam9pbignfCcpKSxcclxuICAgIGRlc2VyOiAoW3NdKSA9PiBzdHJpbmdzLmZpbmRJbmRleCgoaSkgPT4gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykgPT09IHN0cmlwSW5zZW5zaXRpdml0aWVzKGkpKSArIHN0YXJ0SW5kZXgsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gb2Zmc2V0KHJlZ2V4LCBncm91cHMpIHtcclxuICByZXR1cm4geyByZWdleCwgZGVzZXI6IChbLCBoLCBtXSkgPT4gc2lnbmVkT2Zmc2V0KGgsIG0pLCBncm91cHMgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2ltcGxlKHJlZ2V4KSB7XHJcbiAgcmV0dXJuIHsgcmVnZXgsIGRlc2VyOiAoW3NdKSA9PiBzIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVzY2FwZVRva2VuKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1tcXC1cXFtcXF17fSgpKis/LixcXFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaXRGb3JUb2tlbih0b2tlbiwgbG9jKSB7XHJcbiAgY29uc3Qgb25lID0gZGlnaXRSZWdleChsb2MpO1xyXG4gIGNvbnN0IHR3byA9IGRpZ2l0UmVnZXgobG9jLCAnezJ9Jyk7XHJcbiAgY29uc3QgdGhyZWUgPSBkaWdpdFJlZ2V4KGxvYywgJ3szfScpO1xyXG4gIGNvbnN0IGZvdXIgPSBkaWdpdFJlZ2V4KGxvYywgJ3s0fScpO1xyXG4gIGNvbnN0IHNpeCA9IGRpZ2l0UmVnZXgobG9jLCAnezZ9Jyk7XHJcbiAgY29uc3Qgb25lT3JUd28gPSBkaWdpdFJlZ2V4KGxvYywgJ3sxLDJ9Jyk7XHJcbiAgY29uc3Qgb25lVG9UaHJlZSA9IGRpZ2l0UmVnZXgobG9jLCAnezEsM30nKTtcclxuICBjb25zdCBvbmVUb1NpeCA9IGRpZ2l0UmVnZXgobG9jLCAnezEsNn0nKTtcclxuICBjb25zdCBvbmVUb05pbmUgPSBkaWdpdFJlZ2V4KGxvYywgJ3sxLDl9Jyk7XHJcbiAgY29uc3QgdHdvVG9Gb3VyID0gZGlnaXRSZWdleChsb2MsICd7Miw0fScpO1xyXG4gIGNvbnN0IGZvdXJUb1NpeCA9IGRpZ2l0UmVnZXgobG9jLCAnezQsNn0nKTtcclxuICBjb25zdCBsaXRlcmFsID0gKHQpID0+ICh7IHJlZ2V4OiBSZWdFeHAoZXNjYXBlVG9rZW4odC52YWwpKSwgZGVzZXI6IChbc10pID0+IHMsIGxpdGVyYWw6IHRydWUgfSk7XHJcbiAgY29uc3QgdW5pdGF0ZSA9ICh0KSA9PiB7XHJcbiAgICBpZiAodG9rZW4ubGl0ZXJhbCkge1xyXG4gICAgICByZXR1cm4gbGl0ZXJhbCh0KTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodC52YWwpIHtcclxuICAgICAgLy8gZXJhXHJcbiAgICAgIGNhc2UgJ0cnOlxyXG4gICAgICAgIHJldHVybiBvbmVPZihsb2MuZXJhcygnc2hvcnQnLCBmYWxzZSksIDApO1xyXG4gICAgICBjYXNlICdHRyc6XHJcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5lcmFzKCdsb25nJywgZmFsc2UpLCAwKTtcclxuICAgICAgICAvLyB5ZWFyc1xyXG4gICAgICBjYXNlICd5JzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1NpeCk7XHJcbiAgICAgIGNhc2UgJ3l5JzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d29Ub0ZvdXIsIHVudHJ1bmNhdGVZZWFyKTtcclxuICAgICAgY2FzZSAneXl5eSc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQoZm91cik7XHJcbiAgICAgIGNhc2UgJ3l5eXl5JzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyVG9TaXgpO1xyXG4gICAgICBjYXNlICd5eXl5eXknOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHNpeCk7XHJcbiAgICAgICAgLy8gbW9udGhzXHJcbiAgICAgIGNhc2UgJ00nOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcclxuICAgICAgY2FzZSAnTU0nOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XHJcbiAgICAgIGNhc2UgJ01NTSc6XHJcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoJ3Nob3J0JywgdHJ1ZSwgZmFsc2UpLCAxKTtcclxuICAgICAgY2FzZSAnTU1NTSc6XHJcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoJ2xvbmcnLCB0cnVlLCBmYWxzZSksIDEpO1xyXG4gICAgICBjYXNlICdMJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XHJcbiAgICAgIGNhc2UgJ0xMJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xyXG4gICAgICBjYXNlICdMTEwnOlxyXG4gICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKCdzaG9ydCcsIGZhbHNlLCBmYWxzZSksIDEpO1xyXG4gICAgICBjYXNlICdMTExMJzpcclxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocygnbG9uZycsIGZhbHNlLCBmYWxzZSksIDEpO1xyXG4gICAgICAgIC8vIGRhdGVzXHJcbiAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcclxuICAgICAgY2FzZSAnZGQnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XHJcbiAgICAgICAgLy8gb3JkaW5hbHNcclxuICAgICAgY2FzZSAnbyc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XHJcbiAgICAgIGNhc2UgJ29vbyc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQodGhyZWUpO1xyXG4gICAgICAgIC8vIHRpbWVcclxuICAgICAgY2FzZSAnSEgnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XHJcbiAgICAgIGNhc2UgJ0gnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcclxuICAgICAgY2FzZSAnaGgnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XHJcbiAgICAgIGNhc2UgJ2gnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcclxuICAgICAgY2FzZSAnbW0nOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XHJcbiAgICAgIGNhc2UgJ20nOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcclxuICAgICAgY2FzZSAncSc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xyXG4gICAgICBjYXNlICdxcSc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcclxuICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xyXG4gICAgICBjYXNlICdzcyc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcclxuICAgICAgY2FzZSAnUyc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XHJcbiAgICAgIGNhc2UgJ1NTUyc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQodGhyZWUpO1xyXG4gICAgICBjYXNlICd1JzpcclxuICAgICAgICByZXR1cm4gc2ltcGxlKG9uZVRvTmluZSk7XHJcbiAgICAgIGNhc2UgJ3V1JzpcclxuICAgICAgICByZXR1cm4gc2ltcGxlKG9uZU9yVHdvKTtcclxuICAgICAgY2FzZSAndXV1JzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmUpO1xyXG4gICAgICAgIC8vIG1lcmlkaWVtXHJcbiAgICAgIGNhc2UgJ2EnOlxyXG4gICAgICAgIHJldHVybiBvbmVPZihsb2MubWVyaWRpZW1zKCksIDApO1xyXG4gICAgICAgIC8vIHdlZWtZZWFyIChrKVxyXG4gICAgICBjYXNlICdra2trJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcclxuICAgICAgY2FzZSAna2snOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3b1RvRm91ciwgdW50cnVuY2F0ZVllYXIpO1xyXG4gICAgICAgIC8vIHdlZWtOdW1iZXIgKFcpXHJcbiAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcclxuICAgICAgY2FzZSAnV1cnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XHJcbiAgICAgICAgLy8gd2Vla2RheXNcclxuICAgICAgY2FzZSAnRSc6XHJcbiAgICAgIGNhc2UgJ2MnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZSk7XHJcbiAgICAgIGNhc2UgJ0VFRSc6XHJcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cygnc2hvcnQnLCBmYWxzZSwgZmFsc2UpLCAxKTtcclxuICAgICAgY2FzZSAnRUVFRSc6XHJcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cygnbG9uZycsIGZhbHNlLCBmYWxzZSksIDEpO1xyXG4gICAgICBjYXNlICdjY2MnOlxyXG4gICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoJ3Nob3J0JywgdHJ1ZSwgZmFsc2UpLCAxKTtcclxuICAgICAgY2FzZSAnY2NjYyc6XHJcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cygnbG9uZycsIHRydWUsIGZhbHNlKSwgMSk7XHJcbiAgICAgICAgLy8gb2Zmc2V0L3pvbmVcclxuICAgICAgY2FzZSAnWic6XHJcbiAgICAgIGNhc2UgJ1paJzpcclxuICAgICAgICByZXR1cm4gb2Zmc2V0KG5ldyBSZWdFeHAoYChbKy1dJHtvbmVPclR3by5zb3VyY2V9KSg/OjooJHt0d28uc291cmNlfSkpP2ApLCAyKTtcclxuICAgICAgY2FzZSAnWlpaJzpcclxuICAgICAgICByZXR1cm4gb2Zmc2V0KG5ldyBSZWdFeHAoYChbKy1dJHtvbmVPclR3by5zb3VyY2V9KSgke3R3by5zb3VyY2V9KT9gKSwgMik7XHJcbiAgICAgICAgLy8gd2UgZG9uJ3Qgc3VwcG9ydCBaWlpaIChQU1QpIG9yIFpaWlpaIChQYWNpZmljIFN0YW5kYXJkIFRpbWUpIGluIHBhcnNpbmdcclxuICAgICAgICAvLyBiZWNhdXNlIHdlIGRvbid0IGhhdmUgYW55IHdheSB0byBmaWd1cmUgb3V0IHdoYXQgdGhleSBhcmVcclxuICAgICAgY2FzZSAneic6XHJcbiAgICAgICAgcmV0dXJuIHNpbXBsZSgvW2Etel8rLS9dezEsMjU2fT8vaSk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdW5pdCA9IHVuaXRhdGUodG9rZW4pIHx8IHtcclxuICAgIGludmFsaWRSZWFzb246IE1JU1NJTkdfRlRQLFxyXG4gIH07XHJcblxyXG4gIHVuaXQudG9rZW4gPSB0b2tlbjtcclxuXHJcbiAgcmV0dXJuIHVuaXQ7XHJcbn1cclxuXHJcbmNvbnN0IHBhcnRUeXBlU3R5bGVUb1Rva2VuVmFsID0ge1xyXG4gIHllYXI6IHtcclxuICAgICcyLWRpZ2l0JzogJ3l5JyxcclxuICAgIG51bWVyaWM6ICd5eXl5eScsXHJcbiAgfSxcclxuICBtb250aDoge1xyXG4gICAgbnVtZXJpYzogJ00nLFxyXG4gICAgJzItZGlnaXQnOiAnTU0nLFxyXG4gICAgc2hvcnQ6ICdNTU0nLFxyXG4gICAgbG9uZzogJ01NTU0nLFxyXG4gIH0sXHJcbiAgZGF5OiB7XHJcbiAgICBudW1lcmljOiAnZCcsXHJcbiAgICAnMi1kaWdpdCc6ICdkZCcsXHJcbiAgfSxcclxuICB3ZWVrZGF5OiB7XHJcbiAgICBzaG9ydDogJ0VFRScsXHJcbiAgICBsb25nOiAnRUVFRScsXHJcbiAgfSxcclxuICBkYXlwZXJpb2Q6ICdhJyxcclxuICBkYXlQZXJpb2Q6ICdhJyxcclxuICBob3VyOiB7XHJcbiAgICBudW1lcmljOiAnaCcsXHJcbiAgICAnMi1kaWdpdCc6ICdoaCcsXHJcbiAgfSxcclxuICBtaW51dGU6IHtcclxuICAgIG51bWVyaWM6ICdtJyxcclxuICAgICcyLWRpZ2l0JzogJ21tJyxcclxuICB9LFxyXG4gIHNlY29uZDoge1xyXG4gICAgbnVtZXJpYzogJ3MnLFxyXG4gICAgJzItZGlnaXQnOiAnc3MnLFxyXG4gIH0sXHJcbiAgdGltZVpvbmVOYW1lOiB7XHJcbiAgICBsb25nOiAnWlpaWlonLFxyXG4gICAgc2hvcnQ6ICdaWlonLFxyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiB0b2tlbkZvclBhcnQocGFydCwgbG9jYWxlLCBmb3JtYXRPcHRzKSB7XHJcbiAgY29uc3QgeyB0eXBlLCB2YWx1ZSB9ID0gcGFydDtcclxuXHJcbiAgaWYgKHR5cGUgPT09ICdsaXRlcmFsJykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGl0ZXJhbDogdHJ1ZSxcclxuICAgICAgdmFsOiB2YWx1ZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdHlsZSA9IGZvcm1hdE9wdHNbdHlwZV07XHJcblxyXG4gIGxldCB2YWwgPSBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbFt0eXBlXTtcclxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgIHZhbCA9IHZhbFtzdHlsZV07XHJcbiAgfVxyXG5cclxuICBpZiAodmFsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsaXRlcmFsOiBmYWxzZSxcclxuICAgICAgdmFsLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUmVnZXgodW5pdHMpIHtcclxuICBjb25zdCByZSA9IHVuaXRzLm1hcCgodSkgPT4gdS5yZWdleCkucmVkdWNlKChmLCByKSA9PiBgJHtmfSgke3Iuc291cmNlfSlgLCAnJyk7XHJcbiAgcmV0dXJuIFtgXiR7cmV9JGAsIHVuaXRzXTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycykge1xyXG4gIGNvbnN0IG1hdGNoZXMgPSBpbnB1dC5tYXRjaChyZWdleCk7XHJcblxyXG4gIGlmIChtYXRjaGVzKSB7XHJcbiAgICBjb25zdCBhbGwgPSB7fTtcclxuICAgIGxldCBtYXRjaEluZGV4ID0gMTtcclxuICAgIGZvciAoY29uc3QgaSBpbiBoYW5kbGVycykge1xyXG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkoaGFuZGxlcnMsIGkpKSB7XHJcbiAgICAgICAgY29uc3QgaCA9IGhhbmRsZXJzW2ldO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IGguZ3JvdXBzID8gaC5ncm91cHMgKyAxIDogMTtcclxuICAgICAgICBpZiAoIWgubGl0ZXJhbCAmJiBoLnRva2VuKSB7XHJcbiAgICAgICAgICBhbGxbaC50b2tlbi52YWxbMF1dID0gaC5kZXNlcihtYXRjaGVzLnNsaWNlKG1hdGNoSW5kZXgsIG1hdGNoSW5kZXggKyBncm91cHMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0Y2hJbmRleCArPSBncm91cHM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbbWF0Y2hlcywgYWxsXTtcclxuICB9XHJcbiAgcmV0dXJuIFttYXRjaGVzLCB7fV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRhdGVUaW1lRnJvbU1hdGNoZXMobWF0Y2hlcykge1xyXG4gIGNvbnN0IHRvRmllbGQgPSAodG9rZW4pID0+IHtcclxuICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgY2FzZSAnUyc6XHJcbiAgICAgICAgcmV0dXJuICdtaWxsaXNlY29uZCc7XHJcbiAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgIHJldHVybiAnc2Vjb25kJztcclxuICAgICAgY2FzZSAnbSc6XHJcbiAgICAgICAgcmV0dXJuICdtaW51dGUnO1xyXG4gICAgICBjYXNlICdoJzpcclxuICAgICAgY2FzZSAnSCc6XHJcbiAgICAgICAgcmV0dXJuICdob3VyJztcclxuICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgcmV0dXJuICdkYXknO1xyXG4gICAgICBjYXNlICdvJzpcclxuICAgICAgICByZXR1cm4gJ29yZGluYWwnO1xyXG4gICAgICBjYXNlICdMJzpcclxuICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgcmV0dXJuICdtb250aCc7XHJcbiAgICAgIGNhc2UgJ3knOlxyXG4gICAgICAgIHJldHVybiAneWVhcic7XHJcbiAgICAgIGNhc2UgJ0UnOlxyXG4gICAgICBjYXNlICdjJzpcclxuICAgICAgICByZXR1cm4gJ3dlZWtkYXknO1xyXG4gICAgICBjYXNlICdXJzpcclxuICAgICAgICByZXR1cm4gJ3dlZWtOdW1iZXInO1xyXG4gICAgICBjYXNlICdrJzpcclxuICAgICAgICByZXR1cm4gJ3dlZWtZZWFyJztcclxuICAgICAgY2FzZSAncSc6XHJcbiAgICAgICAgcmV0dXJuICdxdWFydGVyJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgem9uZSA9IG51bGw7XHJcbiAgbGV0IHNwZWNpZmljT2Zmc2V0O1xyXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy56KSkge1xyXG4gICAgem9uZSA9IElBTkFab25lLmNyZWF0ZShtYXRjaGVzLnopO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLlopKSB7XHJcbiAgICBpZiAoIXpvbmUpIHtcclxuICAgICAgem9uZSA9IG5ldyBGaXhlZE9mZnNldFpvbmUobWF0Y2hlcy5aKTtcclxuICAgIH1cclxuICAgIHNwZWNpZmljT2Zmc2V0ID0gbWF0Y2hlcy5aO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnEpKSB7XHJcbiAgICBtYXRjaGVzLk0gPSAobWF0Y2hlcy5xIC0gMSkgKiAzICsgMTtcclxuICB9XHJcblxyXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5oKSkge1xyXG4gICAgaWYgKG1hdGNoZXMuaCA8IDEyICYmIG1hdGNoZXMuYSA9PT0gMSkge1xyXG4gICAgICBtYXRjaGVzLmggKz0gMTI7XHJcbiAgICB9IGVsc2UgaWYgKG1hdGNoZXMuaCA9PT0gMTIgJiYgbWF0Y2hlcy5hID09PSAwKSB7XHJcbiAgICAgIG1hdGNoZXMuaCA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAobWF0Y2hlcy5HID09PSAwICYmIG1hdGNoZXMueSkge1xyXG4gICAgbWF0Y2hlcy55ID0gLW1hdGNoZXMueTtcclxuICB9XHJcblxyXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy51KSkge1xyXG4gICAgbWF0Y2hlcy5TID0gcGFyc2VNaWxsaXMobWF0Y2hlcy51KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHZhbHMgPSBPYmplY3Qua2V5cyhtYXRjaGVzKS5yZWR1Y2UoKHIsIGspID0+IHtcclxuICAgIGNvbnN0IGYgPSB0b0ZpZWxkKGspO1xyXG4gICAgaWYgKGYpIHtcclxuICAgICAgcltmXSA9IG1hdGNoZXNba107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHI7XHJcbiAgfSwge30pO1xyXG5cclxuICByZXR1cm4gW3ZhbHMsIHpvbmUsIHNwZWNpZmljT2Zmc2V0XTtcclxufVxyXG5cclxubGV0IGR1bW15RGF0ZVRpbWVDYWNoZSA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiBnZXREdW1teURhdGVUaW1lKCkge1xyXG4gIGlmICghZHVtbXlEYXRlVGltZUNhY2hlKSB7XHJcbiAgICBkdW1teURhdGVUaW1lQ2FjaGUgPSBEYXRlVGltZS5mcm9tTWlsbGlzKDE1NTU1NTU1NTU1NTUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGR1bW15RGF0ZVRpbWVDYWNoZTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWF5YmVFeHBhbmRNYWNyb1Rva2VuKHRva2VuLCBsb2NhbGUpIHtcclxuICBpZiAodG9rZW4ubGl0ZXJhbCkge1xyXG4gICAgcmV0dXJuIHRva2VuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuLnZhbCk7XHJcbiAgY29uc3QgdG9rZW5zID0gZm9ybWF0T3B0c1RvVG9rZW5zKGZvcm1hdE9wdHMsIGxvY2FsZSk7XHJcblxyXG4gIGlmICh0b2tlbnMgPT0gbnVsbCB8fCB0b2tlbnMuaW5jbHVkZXModW5kZWZpbmVkKSkge1xyXG4gICAgcmV0dXJuIHRva2VuO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRva2VucztcclxufVxyXG5cclxuZnVuY3Rpb24gZXhwYW5kTWFjcm9Ub2tlbnModG9rZW5zLCBsb2NhbGUpIHtcclxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi50b2tlbnMubWFwKCh0KSA9PiBtYXliZUV4cGFuZE1hY3JvVG9rZW4odCwgbG9jYWxlKSkpO1xyXG59XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuXHJcbmZ1bmN0aW9uIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCkge1xyXG4gIGNvbnN0IHRva2VucyA9IGV4cGFuZE1hY3JvVG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmb3JtYXQpLCBsb2NhbGUpO1xyXG4gIGNvbnN0IHVuaXRzID0gdG9rZW5zLm1hcCgodCkgPT4gdW5pdEZvclRva2VuKHQsIGxvY2FsZSkpO1xyXG4gIGNvbnN0IGRpc3F1YWxpZnlpbmdVbml0ID0gdW5pdHMuZmluZCgodCkgPT4gdC5pbnZhbGlkUmVhc29uKTtcclxuXHJcbiAgaWYgKGRpc3F1YWxpZnlpbmdVbml0KSB7XHJcbiAgICByZXR1cm4geyBpbnB1dCwgdG9rZW5zLCBpbnZhbGlkUmVhc29uOiBkaXNxdWFsaWZ5aW5nVW5pdC5pbnZhbGlkUmVhc29uIH07XHJcbiAgfVxyXG4gIGNvbnN0IFtyZWdleFN0cmluZywgaGFuZGxlcnNdID0gYnVpbGRSZWdleCh1bml0cyk7XHJcbiAgY29uc3QgcmVnZXggPSBSZWdFeHAocmVnZXhTdHJpbmcsICdpJyk7XHJcbiAgY29uc3QgW3Jhd01hdGNoZXMsIG1hdGNoZXNdID0gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycyk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXRdID0gbWF0Y2hlc1xyXG4gICAgPyBkYXRlVGltZUZyb21NYXRjaGVzKG1hdGNoZXMpXHJcbiAgICA6IFtudWxsLCBudWxsLCB1bmRlZmluZWRdO1xyXG4gIGlmIChoYXNPd25Qcm9wZXJ0eShtYXRjaGVzLCAnYScpICYmIGhhc093blByb3BlcnR5KG1hdGNoZXMsICdIJykpIHtcclxuICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcclxuICAgICAgXCJDYW4ndCBpbmNsdWRlIG1lcmlkaWVtIHdoZW4gc3BlY2lmeWluZyAyNC1ob3VyIGZvcm1hdFwiLFxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGlucHV0LCB0b2tlbnMsIHJlZ2V4LCByYXdNYXRjaGVzLCBtYXRjaGVzLCByZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHtcclxuICBjb25zdCB7XHJcbiAgICByZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0LCBpbnZhbGlkUmVhc29uLFxyXG4gIH0gPSBleHBsYWluRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpO1xyXG4gIHJldHVybiBbcmVzdWx0LCB6b25lLCBzcGVjaWZpY09mZnNldCwgaW52YWxpZFJlYXNvbl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE9wdHNUb1Rva2Vucyhmb3JtYXRPcHRzLCBsb2NhbGUpIHtcclxuICBpZiAoIWZvcm1hdE9wdHMpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZm9ybWF0dGVyID0gRm9ybWF0dGVyLmNyZWF0ZShsb2NhbGUsIGZvcm1hdE9wdHMpO1xyXG4gIGNvbnN0IHBhcnRzID0gZm9ybWF0dGVyLmZvcm1hdERhdGVUaW1lUGFydHMoZ2V0RHVtbXlEYXRlVGltZSgpKTtcclxuICByZXR1cm4gcGFydHMubWFwKChwKSA9PiB0b2tlbkZvclBhcnQocCwgbG9jYWxlLCBmb3JtYXRPcHRzKSk7XHJcbn1cclxuXHJcbmNvbnN0IG5vbkxlYXBMYWRkZXIgPSBbMCwgMzEsIDU5LCA5MCwgMTIwLCAxNTEsIDE4MSwgMjEyLCAyNDMsIDI3MywgMzA0LCAzMzRdO1xyXG5jb25zdCBsZWFwTGFkZGVyID0gWzAsIDMxLCA2MCwgOTEsIDEyMSwgMTUyLCAxODIsIDIxMywgMjQ0LCAyNzQsIDMwNSwgMzM1XTtcclxuXHJcbmZ1bmN0aW9uIHVuaXRPdXRPZlJhbmdlKHVuaXQsIHZhbHVlKSB7XHJcbiAgcmV0dXJuIG5ldyBJbnZhbGlkKFxyXG4gICAgJ3VuaXQgb3V0IG9mIHJhbmdlJyxcclxuICAgIGB5b3Ugc3BlY2lmaWVkICR7dmFsdWV9IChvZiB0eXBlICR7dHlwZW9mIHZhbHVlfSkgYXMgYSAke3VuaXR9LCB3aGljaCBpcyBpbnZhbGlkYCxcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXlPZldlZWsoeWVhciwgbW9udGgsIGRheSkge1xyXG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCAtIDEsIGRheSkpO1xyXG5cclxuICBpZiAoeWVhciA8IDEwMCAmJiB5ZWFyID49IDApIHtcclxuICAgIGQuc2V0VVRDRnVsbFllYXIoZC5nZXRVVENGdWxsWWVhcigpIC0gMTkwMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBqcyA9IGQuZ2V0VVRDRGF5KCk7XHJcblxyXG4gIHJldHVybiBqcyA9PT0gMCA/IDcgOiBqcztcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSkge1xyXG4gIHJldHVybiBkYXkgKyAoaXNMZWFwWWVhcih5ZWFyKSA/IGxlYXBMYWRkZXIgOiBub25MZWFwTGFkZGVyKVttb250aCAtIDFdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpIHtcclxuICBjb25zdCB0YWJsZSA9IGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcjtcclxuICBjb25zdCBtb250aDAgPSB0YWJsZS5maW5kSW5kZXgoKGkpID0+IGkgPCBvcmRpbmFsKTtcclxuICBjb25zdCBkYXkgPSBvcmRpbmFsIC0gdGFibGVbbW9udGgwXTtcclxuICByZXR1cm4geyBtb250aDogbW9udGgwICsgMSwgZGF5IH07XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5cclxuZnVuY3Rpb24gZ3JlZ29yaWFuVG9XZWVrKGdyZWdPYmopIHtcclxuICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IGdyZWdPYmo7XHJcbiAgY29uc3Qgb3JkaW5hbCA9IGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpO1xyXG4gIGNvbnN0IHdlZWtkYXkgPSBkYXlPZldlZWsoeWVhciwgbW9udGgsIGRheSk7XHJcblxyXG4gIGxldCB3ZWVrTnVtYmVyID0gTWF0aC5mbG9vcigob3JkaW5hbCAtIHdlZWtkYXkgKyAxMCkgLyA3KTtcclxuICBsZXQgd2Vla1llYXI7XHJcblxyXG4gIGlmICh3ZWVrTnVtYmVyIDwgMSkge1xyXG4gICAgd2Vla1llYXIgPSB5ZWFyIC0gMTtcclxuICAgIHdlZWtOdW1iZXIgPSB3ZWVrc0luV2Vla1llYXIod2Vla1llYXIpO1xyXG4gIH0gZWxzZSBpZiAod2Vla051bWJlciA+IHdlZWtzSW5XZWVrWWVhcih5ZWFyKSkge1xyXG4gICAgd2Vla1llYXIgPSB5ZWFyICsgMTtcclxuICAgIHdlZWtOdW1iZXIgPSAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3ZWVrWWVhciA9IHllYXI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgd2Vla1llYXIsIHdlZWtOdW1iZXIsIHdlZWtkYXksIC4uLnRpbWVPYmplY3QoZ3JlZ09iaiksXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2Vla1RvR3JlZ29yaWFuKHdlZWtEYXRhKSB7XHJcbiAgY29uc3QgeyB3ZWVrWWVhciwgd2Vla051bWJlciwgd2Vla2RheSB9ID0gd2Vla0RhdGE7XHJcbiAgY29uc3Qgd2Vla2RheU9mSmFuNCA9IGRheU9mV2Vlayh3ZWVrWWVhciwgMSwgNCk7XHJcbiAgY29uc3QgeWVhckluRGF5cyA9IGRheXNJblllYXIod2Vla1llYXIpO1xyXG5cclxuICBsZXQgb3JkaW5hbCA9IHdlZWtOdW1iZXIgKiA3ICsgd2Vla2RheSAtIHdlZWtkYXlPZkphbjQgLSAzO1xyXG4gIGxldCB5ZWFyO1xyXG5cclxuICBpZiAob3JkaW5hbCA8IDEpIHtcclxuICAgIHllYXIgPSB3ZWVrWWVhciAtIDE7XHJcbiAgICBvcmRpbmFsICs9IGRheXNJblllYXIoeWVhcik7XHJcbiAgfSBlbHNlIGlmIChvcmRpbmFsID4geWVhckluRGF5cykge1xyXG4gICAgeWVhciA9IHdlZWtZZWFyICsgMTtcclxuICAgIG9yZGluYWwgLT0gZGF5c0luWWVhcih3ZWVrWWVhcik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHllYXIgPSB3ZWVrWWVhcjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgbW9udGgsIGRheSB9ID0gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKTtcclxuICByZXR1cm4ge1xyXG4gICAgeWVhciwgbW9udGgsIGRheSwgLi4udGltZU9iamVjdCh3ZWVrRGF0YSksXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ3JlZ29yaWFuVG9PcmRpbmFsKGdyZWdEYXRhKSB7XHJcbiAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSBncmVnRGF0YTtcclxuICBjb25zdCBvcmRpbmFsID0gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSk7XHJcbiAgcmV0dXJuIHsgeWVhciwgb3JkaW5hbCwgLi4udGltZU9iamVjdChncmVnRGF0YSkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3JkaW5hbFRvR3JlZ29yaWFuKG9yZGluYWxEYXRhKSB7XHJcbiAgY29uc3QgeyB5ZWFyLCBvcmRpbmFsIH0gPSBvcmRpbmFsRGF0YTtcclxuICBjb25zdCB7IG1vbnRoLCBkYXkgfSA9IHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHllYXIsIG1vbnRoLCBkYXksIC4uLnRpbWVPYmplY3Qob3JkaW5hbERhdGEpLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc0ludmFsaWRXZWVrRGF0YShvYmopIHtcclxuICBjb25zdCB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLndlZWtZZWFyKTtcclxuICBjb25zdCB2YWxpZFdlZWsgPSBpbnRlZ2VyQmV0d2VlbihvYmoud2Vla051bWJlciwgMSwgd2Vla3NJbldlZWtZZWFyKG9iai53ZWVrWWVhcikpO1xyXG4gIGNvbnN0IHZhbGlkV2Vla2RheSA9IGludGVnZXJCZXR3ZWVuKG9iai53ZWVrZGF5LCAxLCA3KTtcclxuXHJcbiAgaWYgKCF2YWxpZFllYXIpIHtcclxuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgnd2Vla1llYXInLCBvYmoud2Vla1llYXIpO1xyXG4gIH0gaWYgKCF2YWxpZFdlZWspIHtcclxuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgnd2VlaycsIG9iai53ZWVrKTtcclxuICB9IGlmICghdmFsaWRXZWVrZGF5KSB7XHJcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoJ3dlZWtkYXknLCBvYmoud2Vla2RheSk7XHJcbiAgfSByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc0ludmFsaWRPcmRpbmFsRGF0YShvYmopIHtcclxuICBjb25zdCB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLnllYXIpO1xyXG4gIGNvbnN0IHZhbGlkT3JkaW5hbCA9IGludGVnZXJCZXR3ZWVuKG9iai5vcmRpbmFsLCAxLCBkYXlzSW5ZZWFyKG9iai55ZWFyKSk7XHJcblxyXG4gIGlmICghdmFsaWRZZWFyKSB7XHJcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoJ3llYXInLCBvYmoueWVhcik7XHJcbiAgfSBpZiAoIXZhbGlkT3JkaW5hbCkge1xyXG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKCdvcmRpbmFsJywgb2JqLm9yZGluYWwpO1xyXG4gIH0gcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShvYmopIHtcclxuICBjb25zdCB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLnllYXIpO1xyXG4gIGNvbnN0IHZhbGlkTW9udGggPSBpbnRlZ2VyQmV0d2VlbihvYmoubW9udGgsIDEsIDEyKTtcclxuICBjb25zdCB2YWxpZERheSA9IGludGVnZXJCZXR3ZWVuKG9iai5kYXksIDEsIGRheXNJbk1vbnRoKG9iai55ZWFyLCBvYmoubW9udGgpKTtcclxuXHJcbiAgaWYgKCF2YWxpZFllYXIpIHtcclxuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgneWVhcicsIG9iai55ZWFyKTtcclxuICB9IGlmICghdmFsaWRNb250aCkge1xyXG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKCdtb250aCcsIG9iai5tb250aCk7XHJcbiAgfSBpZiAoIXZhbGlkRGF5KSB7XHJcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoJ2RheScsIG9iai5kYXkpO1xyXG4gIH0gcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNJbnZhbGlkVGltZURhdGEob2JqKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kLFxyXG4gIH0gPSBvYmo7XHJcbiAgY29uc3QgdmFsaWRIb3VyID0gaW50ZWdlckJldHdlZW4oaG91ciwgMCwgMjMpXHJcbiAgICAgICB8fCAoaG91ciA9PT0gMjQgJiYgbWludXRlID09PSAwICYmIHNlY29uZCA9PT0gMCAmJiBtaWxsaXNlY29uZCA9PT0gMCk7XHJcbiAgY29uc3QgdmFsaWRNaW51dGUgPSBpbnRlZ2VyQmV0d2VlbihtaW51dGUsIDAsIDU5KTtcclxuICBjb25zdCB2YWxpZFNlY29uZCA9IGludGVnZXJCZXR3ZWVuKHNlY29uZCwgMCwgNTkpO1xyXG4gIGNvbnN0IHZhbGlkTWlsbGlzZWNvbmQgPSBpbnRlZ2VyQmV0d2VlbihtaWxsaXNlY29uZCwgMCwgOTk5KTtcclxuXHJcbiAgaWYgKCF2YWxpZEhvdXIpIHtcclxuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgnaG91cicsIGhvdXIpO1xyXG4gIH0gaWYgKCF2YWxpZE1pbnV0ZSkge1xyXG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKCdtaW51dGUnLCBtaW51dGUpO1xyXG4gIH0gaWYgKCF2YWxpZFNlY29uZCkge1xyXG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKCdzZWNvbmQnLCBzZWNvbmQpO1xyXG4gIH0gaWYgKCF2YWxpZE1pbGxpc2Vjb25kKSB7XHJcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoJ21pbGxpc2Vjb25kJywgbWlsbGlzZWNvbmQpO1xyXG4gIH0gcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5jb25zdCBJTlZBTElEID0gJ0ludmFsaWQgRGF0ZVRpbWUnO1xyXG5jb25zdCBNQVhfREFURSA9IDguNjRlMTU7XHJcblxyXG5mdW5jdGlvbiB1bnN1cHBvcnRlZFpvbmUoem9uZSkge1xyXG4gIHJldHVybiBuZXcgSW52YWxpZCgndW5zdXBwb3J0ZWQgem9uZScsIGB0aGUgem9uZSBcIiR7em9uZS5uYW1lfVwiIGlzIG5vdCBzdXBwb3J0ZWRgKTtcclxufVxyXG5cclxuLy8gd2UgY2FjaGUgd2VlayBkYXRhIG9uIHRoZSBEVCBvYmplY3QgYW5kIHRoaXMgaW50ZXJtZWRpYXRlcyB0aGUgY2FjaGVcclxuZnVuY3Rpb24gcG9zc2libHlDYWNoZWRXZWVrRGF0YShkdCkge1xyXG4gIGlmIChkdC53ZWVrRGF0YSA9PT0gbnVsbCkge1xyXG4gICAgZHQud2Vla0RhdGEgPSBncmVnb3JpYW5Ub1dlZWsoZHQuYyk7XHJcbiAgfVxyXG4gIHJldHVybiBkdC53ZWVrRGF0YTtcclxufVxyXG5cclxuLy8gY2xvbmUgcmVhbGx5IG1lYW5zLCBcIm1ha2UgYSBuZXcgb2JqZWN0IHdpdGggdGhlc2UgbW9kaWZpY2F0aW9uc1wiLiBhbGwgXCJzZXR0ZXJzXCIgcmVhbGx5IHVzZSB0aGlzXHJcbi8vIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2hpbGUgb25seSBjaGFuZ2luZyBzb21lIG9mIHRoZSBwcm9wZXJ0aWVzXHJcbmZ1bmN0aW9uIGNsb25lKGluc3QsIGFsdHMpIHtcclxuICBjb25zdCBjdXJyZW50ID0ge1xyXG4gICAgdHM6IGluc3QudHMsXHJcbiAgICB6b25lOiBpbnN0LnpvbmUsXHJcbiAgICBjOiBpbnN0LmMsXHJcbiAgICBvOiBpbnN0Lm8sXHJcbiAgICBsb2M6IGluc3QubG9jLFxyXG4gICAgaW52YWxpZDogaW5zdC5pbnZhbGlkLFxyXG4gIH07XHJcbiAgcmV0dXJuIG5ldyBEYXRlVGltZSh7IC4uLmN1cnJlbnQsIC4uLmFsdHMsIG9sZDogY3VycmVudCB9KTtcclxufVxyXG5cclxuLy8gZmluZCB0aGUgcmlnaHQgb2Zmc2V0IGEgZ2l2ZW4gbG9jYWwgdGltZS4gVGhlIG8gaW5wdXQgaXMgb3VyIGd1ZXNzLCB3aGljaCBkZXRlcm1pbmVzIHdoaWNoXHJcbi8vIG9mZnNldCB3ZSdsbCBwaWNrIGluIGFtYmlndW91cyBjYXNlcyAoZS5nLiB0aGVyZSBhcmUgdHdvIDMgQU1zIGIvYyBGYWxsYmFjayBEU1QpXHJcbmZ1bmN0aW9uIGZpeE9mZnNldChsb2NhbFRTLCBvLCB0eikge1xyXG4gIC8vIE91ciBVVEMgdGltZSBpcyBqdXN0IGEgZ3Vlc3MgYmVjYXVzZSBvdXIgb2Zmc2V0IGlzIGp1c3QgYSBndWVzc1xyXG4gIGxldCB1dGNHdWVzcyA9IGxvY2FsVFMgLSBvICogNjAgKiAxMDAwO1xyXG5cclxuICAvLyBUZXN0IHdoZXRoZXIgdGhlIHpvbmUgbWF0Y2hlcyB0aGUgb2Zmc2V0IGZvciB0aGlzIHRzXHJcbiAgY29uc3QgbzIgPSB0ei5vZmZzZXQodXRjR3Vlc3MpO1xyXG5cclxuICAvLyBJZiBzbywgb2Zmc2V0IGRpZG4ndCBjaGFuZ2UgYW5kIHdlJ3JlIGRvbmVcclxuICBpZiAobyA9PT0gbzIpIHtcclxuICAgIHJldHVybiBbdXRjR3Vlc3MsIG9dO1xyXG4gIH1cclxuXHJcbiAgLy8gSWYgbm90LCBjaGFuZ2UgdGhlIHRzIGJ5IHRoZSBkaWZmZXJlbmNlIGluIHRoZSBvZmZzZXRcclxuICB1dGNHdWVzcyAtPSAobzIgLSBvKSAqIDYwICogMTAwMDtcclxuXHJcbiAgLy8gSWYgdGhhdCBnaXZlcyB1cyB0aGUgbG9jYWwgdGltZSB3ZSB3YW50LCB3ZSdyZSBkb25lXHJcbiAgY29uc3QgbzMgPSB0ei5vZmZzZXQodXRjR3Vlc3MpO1xyXG4gIGlmIChvMiA9PT0gbzMpIHtcclxuICAgIHJldHVybiBbdXRjR3Vlc3MsIG8yXTtcclxuICB9XHJcblxyXG4gIC8vIElmIGl0J3MgZGlmZmVyZW50LCB3ZSdyZSBpbiBhIGhvbGUgdGltZS4gVGhlIG9mZnNldCBoYXMgY2hhbmdlZCwgYnV0IHRoZSB3ZSBkb24ndCBhZGp1c3QgdGhlIHRpbWVcclxuICByZXR1cm4gW2xvY2FsVFMgLSBNYXRoLm1pbihvMiwgbzMpICogNjAgKiAxMDAwLCBNYXRoLm1heChvMiwgbzMpXTtcclxufVxyXG5cclxuLy8gY29udmVydCBhbiBlcG9jaCB0aW1lc3RhbXAgaW50byBhIGNhbGVuZGFyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBvZmZzZXRcclxuZnVuY3Rpb24gdHNUb09iaih0cywgb2Zmc2V0KSB7XHJcbiAgdHMgKz0gb2Zmc2V0ICogNjAgKiAxMDAwO1xyXG5cclxuICBjb25zdCBkID0gbmV3IERhdGUodHMpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgeWVhcjogZC5nZXRVVENGdWxsWWVhcigpLFxyXG4gICAgbW9udGg6IGQuZ2V0VVRDTW9udGgoKSArIDEsXHJcbiAgICBkYXk6IGQuZ2V0VVRDRGF0ZSgpLFxyXG4gICAgaG91cjogZC5nZXRVVENIb3VycygpLFxyXG4gICAgbWludXRlOiBkLmdldFVUQ01pbnV0ZXMoKSxcclxuICAgIHNlY29uZDogZC5nZXRVVENTZWNvbmRzKCksXHJcbiAgICBtaWxsaXNlY29uZDogZC5nZXRVVENNaWxsaXNlY29uZHMoKSxcclxuICB9O1xyXG59XHJcblxyXG4vLyBjb252ZXJ0IGEgY2FsZW5kYXIgb2JqZWN0IHRvIGEgZXBvY2ggdGltZXN0YW1wXHJcbmZ1bmN0aW9uIG9ialRvVFMob2JqLCBvZmZzZXQsIHpvbmUpIHtcclxuICByZXR1cm4gZml4T2Zmc2V0KG9ialRvTG9jYWxUUyhvYmopLCBvZmZzZXQsIHpvbmUpO1xyXG59XHJcblxyXG4vLyBjcmVhdGUgYSBuZXcgRFQgaW5zdGFuY2UgYnkgYWRkaW5nIGEgZHVyYXRpb24sIGFkanVzdGluZyBmb3IgRFNUc1xyXG5mdW5jdGlvbiBhZGp1c3RUaW1lKGluc3QsIGR1cikge1xyXG4gIGNvbnN0IG9QcmUgPSBpbnN0Lm87XHJcbiAgY29uc3QgeWVhciA9IGluc3QuYy55ZWFyICsgTWF0aC50cnVuYyhkdXIueWVhcnMpO1xyXG4gIGNvbnN0IG1vbnRoID0gaW5zdC5jLm1vbnRoICsgTWF0aC50cnVuYyhkdXIubW9udGhzKSArIE1hdGgudHJ1bmMoZHVyLnF1YXJ0ZXJzKSAqIDM7XHJcbiAgY29uc3QgYyA9IHtcclxuICAgIC4uLmluc3QuYyxcclxuICAgIHllYXIsXHJcbiAgICBtb250aCxcclxuICAgIGRheTpcclxuICAgICAgICAgTWF0aC5taW4oaW5zdC5jLmRheSwgZGF5c0luTW9udGgoeWVhciwgbW9udGgpKVxyXG4gICAgICAgICArIE1hdGgudHJ1bmMoZHVyLmRheXMpXHJcbiAgICAgICAgICsgTWF0aC50cnVuYyhkdXIud2Vla3MpICogNyxcclxuICB9O1xyXG4gIGNvbnN0IG1pbGxpc1RvQWRkID0gRHVyYXRpb24uZnJvbU9iamVjdCh7XHJcbiAgICB5ZWFyczogZHVyLnllYXJzIC0gTWF0aC50cnVuYyhkdXIueWVhcnMpLFxyXG4gICAgcXVhcnRlcnM6IGR1ci5xdWFydGVycyAtIE1hdGgudHJ1bmMoZHVyLnF1YXJ0ZXJzKSxcclxuICAgIG1vbnRoczogZHVyLm1vbnRocyAtIE1hdGgudHJ1bmMoZHVyLm1vbnRocyksXHJcbiAgICB3ZWVrczogZHVyLndlZWtzIC0gTWF0aC50cnVuYyhkdXIud2Vla3MpLFxyXG4gICAgZGF5czogZHVyLmRheXMgLSBNYXRoLnRydW5jKGR1ci5kYXlzKSxcclxuICAgIGhvdXJzOiBkdXIuaG91cnMsXHJcbiAgICBtaW51dGVzOiBkdXIubWludXRlcyxcclxuICAgIHNlY29uZHM6IGR1ci5zZWNvbmRzLFxyXG4gICAgbWlsbGlzZWNvbmRzOiBkdXIubWlsbGlzZWNvbmRzLFxyXG4gIH0pLmFzKCdtaWxsaXNlY29uZHMnKTtcclxuICBjb25zdCBsb2NhbFRTID0gb2JqVG9Mb2NhbFRTKGMpO1xyXG5cclxuICBsZXQgW3RzLCBvXSA9IGZpeE9mZnNldChsb2NhbFRTLCBvUHJlLCBpbnN0LnpvbmUpO1xyXG5cclxuICBpZiAobWlsbGlzVG9BZGQgIT09IDApIHtcclxuICAgIHRzICs9IG1pbGxpc1RvQWRkO1xyXG4gICAgLy8gdGhhdCBjb3VsZCBoYXZlIGNoYW5nZWQgdGhlIG9mZnNldCBieSBnb2luZyBvdmVyIGEgRFNULCBidXQgd2Ugd2FudCB0byBrZWVwIHRoZSB0cyB0aGUgc2FtZVxyXG4gICAgbyA9IGluc3Quem9uZS5vZmZzZXQodHMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgdHMsIG8gfTtcclxufVxyXG5cclxuLy8gaGVscGVyIHVzZWZ1bCBpbiB0dXJuaW5nIHRoZSByZXN1bHRzIG9mIHBhcnNpbmcgaW50byByZWFsIGRhdGVzXHJcbi8vIGJ5IGhhbmRsaW5nIHRoZSB6b25lIG9wdGlvbnNcclxuZnVuY3Rpb24gcGFyc2VEYXRhVG9EYXRlVGltZShwYXJzZWQsIHBhcnNlZFpvbmUsIG9wdHMsIGZvcm1hdCwgdGV4dCwgc3BlY2lmaWNPZmZzZXQpIHtcclxuICBjb25zdCB7IHNldFpvbmUsIHpvbmUgfSA9IG9wdHM7XHJcbiAgaWYgKHBhcnNlZCAmJiBPYmplY3Qua2V5cyhwYXJzZWQpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgY29uc3QgaW50ZXJwcmV0YXRpb25ab25lID0gcGFyc2VkWm9uZSB8fCB6b25lO1xyXG4gICAgY29uc3QgaW5zdCA9IERhdGVUaW1lLmZyb21PYmplY3QocGFyc2VkLCB7XHJcbiAgICAgIC4uLm9wdHMsXHJcbiAgICAgIHpvbmU6IGludGVycHJldGF0aW9uWm9uZSxcclxuICAgICAgc3BlY2lmaWNPZmZzZXQsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzZXRab25lID8gaW5zdCA6IGluc3Quc2V0Wm9uZSh6b25lKTtcclxuICB9XHJcbiAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXHJcbiAgICBuZXcgSW52YWxpZCgndW5wYXJzYWJsZScsIGB0aGUgaW5wdXQgXCIke3RleHR9XCIgY2FuJ3QgYmUgcGFyc2VkIGFzICR7Zm9ybWF0fWApLFxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGlmIHlvdSB3YW50IHRvIG91dHB1dCBhIHRlY2huaWNhbCBmb3JtYXQgKGUuZy4gUkZDIDI4MjIpLCB0aGlzIGhlbHBlclxyXG4vLyBoZWxwcyBoYW5kbGUgdGhlIGRldGFpbHNcclxuZnVuY3Rpb24gdG9UZWNoRm9ybWF0KGR0LCBmb3JtYXQsIGFsbG93WiA9IHRydWUpIHtcclxuICByZXR1cm4gZHQuaXNWYWxpZFxyXG4gICAgPyBGb3JtYXR0ZXIuY3JlYXRlKExvY2FsZS5jcmVhdGUoJ2VuLVVTJyksIHtcclxuICAgICAgYWxsb3daLFxyXG4gICAgICBmb3JjZVNpbXBsZTogdHJ1ZSxcclxuICAgIH0pLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyhkdCwgZm9ybWF0KVxyXG4gICAgOiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0lTT0RhdGUobywgZXh0ZW5kZWQpIHtcclxuICBjb25zdCBsb25nRm9ybWF0ID0gby5jLnllYXIgPiA5OTk5IHx8IG8uYy55ZWFyIDwgMDtcclxuICBsZXQgYyA9ICcnO1xyXG4gIGlmIChsb25nRm9ybWF0ICYmIG8uYy55ZWFyID49IDApIGMgKz0gJysnO1xyXG4gIGMgKz0gcGFkU3RhcnQoby5jLnllYXIsIGxvbmdGb3JtYXQgPyA2IDogNCk7XHJcblxyXG4gIGlmIChleHRlbmRlZCkge1xyXG4gICAgYyArPSAnLSc7XHJcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5tb250aCk7XHJcbiAgICBjICs9ICctJztcclxuICAgIGMgKz0gcGFkU3RhcnQoby5jLmRheSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1vbnRoKTtcclxuICAgIGMgKz0gcGFkU3RhcnQoby5jLmRheSk7XHJcbiAgfVxyXG4gIHJldHVybiBjO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0lTT1RpbWUoXHJcbiAgbyxcclxuICBleHRlbmRlZCxcclxuICBzdXBwcmVzc1NlY29uZHMsXHJcbiAgc3VwcHJlc3NNaWxsaXNlY29uZHMsXHJcbiAgaW5jbHVkZU9mZnNldCxcclxuICBleHRlbmRlZFpvbmUsXHJcbikge1xyXG4gIGxldCBjID0gcGFkU3RhcnQoby5jLmhvdXIpO1xyXG4gIGlmIChleHRlbmRlZCkge1xyXG4gICAgYyArPSAnOic7XHJcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5taW51dGUpO1xyXG4gICAgaWYgKG8uYy5zZWNvbmQgIT09IDAgfHwgIXN1cHByZXNzU2Vjb25kcykge1xyXG4gICAgICBjICs9ICc6JztcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgYyArPSBwYWRTdGFydChvLmMubWludXRlKTtcclxuICB9XHJcblxyXG4gIGlmIChvLmMuc2Vjb25kICE9PSAwIHx8ICFzdXBwcmVzc1NlY29uZHMpIHtcclxuICAgIGMgKz0gcGFkU3RhcnQoby5jLnNlY29uZCk7XHJcblxyXG4gICAgaWYgKG8uYy5taWxsaXNlY29uZCAhPT0gMCB8fCAhc3VwcHJlc3NNaWxsaXNlY29uZHMpIHtcclxuICAgICAgYyArPSAnLic7XHJcbiAgICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbGxpc2Vjb25kLCAzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChpbmNsdWRlT2Zmc2V0KSB7XHJcbiAgICBpZiAoby5pc09mZnNldEZpeGVkICYmIG8ub2Zmc2V0ID09PSAwICYmICFleHRlbmRlZFpvbmUpIHtcclxuICAgICAgYyArPSAnWic7XHJcbiAgICB9IGVsc2UgaWYgKG8ubyA8IDApIHtcclxuICAgICAgYyArPSAnLSc7XHJcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYygtby5vIC8gNjApKTtcclxuICAgICAgYyArPSAnOic7XHJcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYygtby5vICUgNjApKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGMgKz0gJysnO1xyXG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoby5vIC8gNjApKTtcclxuICAgICAgYyArPSAnOic7XHJcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYyhvLm8gJSA2MCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGV4dGVuZGVkWm9uZSkge1xyXG4gICAgYyArPSBgWyR7by56b25lLmlhbmFOYW1lfV1gO1xyXG4gIH1cclxuICByZXR1cm4gYztcclxufVxyXG5cclxuLy8gZGVmYXVsdHMgZm9yIHVuc3BlY2lmaWVkIHVuaXRzIGluIHRoZSBzdXBwb3J0ZWQgY2FsZW5kYXJzXHJcbmNvbnN0IGRlZmF1bHRVbml0VmFsdWVzID0ge1xyXG4gIG1vbnRoOiAxLFxyXG4gIGRheTogMSxcclxuICBob3VyOiAwLFxyXG4gIG1pbnV0ZTogMCxcclxuICBzZWNvbmQ6IDAsXHJcbiAgbWlsbGlzZWNvbmQ6IDAsXHJcbn07XHJcbmNvbnN0IGRlZmF1bHRXZWVrVW5pdFZhbHVlcyA9IHtcclxuICB3ZWVrTnVtYmVyOiAxLFxyXG4gIHdlZWtkYXk6IDEsXHJcbiAgaG91cjogMCxcclxuICBtaW51dGU6IDAsXHJcbiAgc2Vjb25kOiAwLFxyXG4gIG1pbGxpc2Vjb25kOiAwLFxyXG59O1xyXG5jb25zdCBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXMgPSB7XHJcbiAgb3JkaW5hbDogMSxcclxuICBob3VyOiAwLFxyXG4gIG1pbnV0ZTogMCxcclxuICBzZWNvbmQ6IDAsXHJcbiAgbWlsbGlzZWNvbmQ6IDAsXHJcbn07XHJcblxyXG4vLyBVbml0cyBpbiB0aGUgc3VwcG9ydGVkIGNhbGVuZGFycywgc29ydGVkIGJ5IGJpZ25lc3NcclxuY29uc3Qgb3JkZXJlZFVuaXRzID0gWyd5ZWFyJywgJ21vbnRoJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCAnbWlsbGlzZWNvbmQnXTtcclxuY29uc3Qgb3JkZXJlZFdlZWtVbml0cyA9IFtcclxuICAnd2Vla1llYXInLFxyXG4gICd3ZWVrTnVtYmVyJyxcclxuICAnd2Vla2RheScsXHJcbiAgJ2hvdXInLFxyXG4gICdtaW51dGUnLFxyXG4gICdzZWNvbmQnLFxyXG4gICdtaWxsaXNlY29uZCcsXHJcbl07XHJcbmNvbnN0IG9yZGVyZWRPcmRpbmFsVW5pdHMgPSBbJ3llYXInLCAnb3JkaW5hbCcsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCAnbWlsbGlzZWNvbmQnXTtcclxuXHJcbi8vIHN0YW5kYXJkaXplIGNhc2UgYW5kIHBsdXJhbGl0eSBpbiB1bml0c1xyXG5mdW5jdGlvbiBub3JtYWxpemVVbml0KHVuaXQpIHtcclxuICBjb25zdCBub3JtYWxpemVkID0ge1xyXG4gICAgeWVhcjogJ3llYXInLFxyXG4gICAgeWVhcnM6ICd5ZWFyJyxcclxuICAgIG1vbnRoOiAnbW9udGgnLFxyXG4gICAgbW9udGhzOiAnbW9udGgnLFxyXG4gICAgZGF5OiAnZGF5JyxcclxuICAgIGRheXM6ICdkYXknLFxyXG4gICAgaG91cjogJ2hvdXInLFxyXG4gICAgaG91cnM6ICdob3VyJyxcclxuICAgIG1pbnV0ZTogJ21pbnV0ZScsXHJcbiAgICBtaW51dGVzOiAnbWludXRlJyxcclxuICAgIHF1YXJ0ZXI6ICdxdWFydGVyJyxcclxuICAgIHF1YXJ0ZXJzOiAncXVhcnRlcicsXHJcbiAgICBzZWNvbmQ6ICdzZWNvbmQnLFxyXG4gICAgc2Vjb25kczogJ3NlY29uZCcsXHJcbiAgICBtaWxsaXNlY29uZDogJ21pbGxpc2Vjb25kJyxcclxuICAgIG1pbGxpc2Vjb25kczogJ21pbGxpc2Vjb25kJyxcclxuICAgIHdlZWtkYXk6ICd3ZWVrZGF5JyxcclxuICAgIHdlZWtkYXlzOiAnd2Vla2RheScsXHJcbiAgICB3ZWVrbnVtYmVyOiAnd2Vla051bWJlcicsXHJcbiAgICB3ZWVrc251bWJlcjogJ3dlZWtOdW1iZXInLFxyXG4gICAgd2Vla251bWJlcnM6ICd3ZWVrTnVtYmVyJyxcclxuICAgIHdlZWt5ZWFyOiAnd2Vla1llYXInLFxyXG4gICAgd2Vla3llYXJzOiAnd2Vla1llYXInLFxyXG4gICAgb3JkaW5hbDogJ29yZGluYWwnLFxyXG4gIH1bdW5pdC50b0xvd2VyQ2FzZSgpXTtcclxuXHJcbiAgaWYgKCFub3JtYWxpemVkKSB0aHJvdyBuZXcgSW52YWxpZFVuaXRFcnJvcih1bml0KTtcclxuXHJcbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XHJcbn1cclxuXHJcbi8vIHRoaXMgaXMgYSBkdW1iZWQgZG93biB2ZXJzaW9uIG9mIGZyb21PYmplY3QoKSB0aGF0IHJ1bnMgYWJvdXQgNjAlIGZhc3RlclxyXG4vLyBidXQgZG9lc24ndCBkbyBhbnkgdmFsaWRhdGlvbiwgbWFrZXMgYSBidW5jaCBvZiBhc3N1bXB0aW9ucyBhYm91dCB3aGF0IHVuaXRzXHJcbi8vIGFyZSBwcmVzZW50LCBhbmQgc28gb24uXHJcbmZ1bmN0aW9uIHF1aWNrRFQob2JqLCBvcHRzKSB7XHJcbiAgY29uc3Qgem9uZSA9IG5vcm1hbGl6ZVpvbmUob3B0cy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XHJcbiAgY29uc3QgbG9jID0gTG9jYWxlLmZyb21PYmplY3Qob3B0cyk7XHJcbiAgY29uc3QgdHNOb3cgPSBTZXR0aW5ncy5ub3coKTtcclxuXHJcbiAgbGV0IHRzOyBsZXRcclxuICAgIG87XHJcblxyXG4gIC8vIGFzc3VtZSB3ZSBoYXZlIHRoZSBoaWdoZXItb3JkZXIgdW5pdHNcclxuICBpZiAoIWlzVW5kZWZpbmVkKG9iai55ZWFyKSkge1xyXG4gICAgZm9yIChjb25zdCB1IG9mIG9yZGVyZWRVbml0cykge1xyXG4gICAgICBpZiAoaXNVbmRlZmluZWQob2JqW3VdKSkge1xyXG4gICAgICAgIG9ialt1XSA9IGRlZmF1bHRVbml0VmFsdWVzW3VdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW52YWxpZCA9IGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG9iaik7XHJcbiAgICBpZiAoaW52YWxpZCkge1xyXG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvZmZzZXRQcm92aXMgPSB6b25lLm9mZnNldCh0c05vdyk7XHJcbiAgICBbdHMsIG9dID0gb2JqVG9UUyhvYmosIG9mZnNldFByb3Zpcywgem9uZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRzID0gdHNOb3c7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IERhdGVUaW1lKHtcclxuICAgIHRzLCB6b25lLCBsb2MsIG8sXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpZmZSZWxhdGl2ZShzdGFydCwgZW5kLCBvcHRzKSB7XHJcbiAgY29uc3Qgcm91bmQgPSBpc1VuZGVmaW5lZChvcHRzLnJvdW5kKSA/IHRydWUgOiBvcHRzLnJvdW5kO1xyXG4gIGNvbnN0IGZvcm1hdCA9IChjLCB1bml0KSA9PiB7XHJcbiAgICBjID0gcm91bmRUbyhjLCByb3VuZCB8fCBvcHRzLmNhbGVuZGFyeSA/IDAgOiAyLCB0cnVlKTtcclxuICAgIGNvbnN0IGZvcm1hdHRlciA9IGVuZC5sb2MuY2xvbmUob3B0cykucmVsRm9ybWF0dGVyKG9wdHMpO1xyXG4gICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoYywgdW5pdCk7XHJcbiAgfTtcclxuICBjb25zdCBkaWZmZXIgPSAodW5pdCkgPT4ge1xyXG4gICAgaWYgKG9wdHMuY2FsZW5kYXJ5KSB7XHJcbiAgICAgIGlmICghZW5kLmhhc1NhbWUoc3RhcnQsIHVuaXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVuZC5zdGFydE9mKHVuaXQpLmRpZmYoc3RhcnQuc3RhcnRPZih1bml0KSwgdW5pdCkuZ2V0KHVuaXQpO1xyXG4gICAgICB9IHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKG9wdHMudW5pdCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdChkaWZmZXIob3B0cy51bml0KSwgb3B0cy51bml0KTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgdW5pdCBvZiBvcHRzLnVuaXRzKSB7XHJcbiAgICBjb25zdCBjb3VudCA9IGRpZmZlcih1bml0KTtcclxuICAgIGlmIChNYXRoLmFicyhjb3VudCkgPj0gMSkge1xyXG4gICAgICByZXR1cm4gZm9ybWF0KGNvdW50LCB1bml0KTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZvcm1hdChzdGFydCA+IGVuZCA/IC0wIDogMCwgb3B0cy51bml0c1tvcHRzLnVuaXRzLmxlbmd0aCAtIDFdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbGFzdE9wdHMoYXJnTGlzdCkge1xyXG4gIGxldCBvcHRzID0ge307XHJcbiAgbGV0IGFyZ3M7XHJcbiAgaWYgKGFyZ0xpc3QubGVuZ3RoID4gMCAmJiB0eXBlb2YgYXJnTGlzdFthcmdMaXN0Lmxlbmd0aCAtIDFdID09PSAnb2JqZWN0Jykge1xyXG4gICAgb3B0cyA9IGFyZ0xpc3RbYXJnTGlzdC5sZW5ndGggLSAxXTtcclxuICAgIGFyZ3MgPSBBcnJheS5mcm9tKGFyZ0xpc3QpLnNsaWNlKDAsIGFyZ0xpc3QubGVuZ3RoIC0gMSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFyZ3MgPSBBcnJheS5mcm9tKGFyZ0xpc3QpO1xyXG4gIH1cclxuICByZXR1cm4gW29wdHMsIGFyZ3NdO1xyXG59XHJcblxyXG4vKipcclxuICAqIEEgRGF0ZVRpbWUgaXMgYW4gaW1tdXRhYmxlIGRhdGEgc3RydWN0dXJlIHJlcHJlc2VudGluZyBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgYW5kIGFjY29tcGFueWluZyBtZXRob2RzLiBJdCBjb250YWlucyBjbGFzcyBhbmQgaW5zdGFuY2UgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS5cclxuICAqXHJcbiAgKiBBIERhdGVUaW1lIGNvbXByaXNlcyBvZjpcclxuICAqICogQSB0aW1lc3RhbXAuIEVhY2ggRGF0ZVRpbWUgaW5zdGFuY2UgcmVmZXJzIHRvIGEgc3BlY2lmaWMgbWlsbGlzZWNvbmQgb2YgdGhlIFVuaXggZXBvY2guXHJcbiAgKiAqIEEgdGltZSB6b25lLiBFYWNoIGluc3RhbmNlIGlzIGNvbnNpZGVyZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBzcGVjaWZpYyB6b25lIChieSBkZWZhdWx0IHRoZSBsb2NhbCBzeXN0ZW0ncyB6b25lKS5cclxuICAqICogQ29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIHRoYXQgZWZmZWN0IGhvdyBvdXRwdXQgc3RyaW5ncyBhcmUgZm9ybWF0dGVkLCBzdWNoIGFzIGBsb2NhbGVgLCBgbnVtYmVyaW5nU3lzdGVtYCwgYW5kIGBvdXRwdXRDYWxlbmRhcmAuXHJcbiAgKlxyXG4gICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIHRoZSBtb3N0IGNvbW1vbmx5IHVzZWQgZnVuY3Rpb25hbGl0eSBpdCBwcm92aWRlczpcclxuICAqXHJcbiAgKiAqICoqQ3JlYXRpb24qKjogVG8gY3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBpdHMgY29tcG9uZW50cywgdXNlIG9uZSBvZiBpdHMgZmFjdG9yeSBjbGFzcyBtZXRob2RzOiB7QGxpbmsgRGF0ZVRpbWUjbG9jYWx9LCB7QGxpbmsgRGF0ZVRpbWUjdXRjfSwgYW5kIChtb3N0IGZsZXhpYmx5KSB7QGxpbmsgRGF0ZVRpbWUjZnJvbU9iamVjdH0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIHN0YW5kYXJkIHN0cmluZyBmb3JtYXQsIHVzZSB7QGxpbmsgRGF0ZVRpbWUjZnJvbUlTT30sIHtAbGluayBEYXRlVGltZSNmcm9tSFRUUH0sIGFuZCB7QGxpbmsgRGF0ZVRpbWUjZnJvbVJGQzI4MjJ9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBjdXN0b20gc3RyaW5nIGZvcm1hdCwgdXNlIHtAbGluayBEYXRlVGltZSNmcm9tRm9ybWF0fS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgbmF0aXZlIEpTIGRhdGUsIHVzZSB7QGxpbmsgRGF0ZVRpbWUjZnJvbUpTRGF0ZX0uXHJcbiAgKiAqICoqR3JlZ29yaWFuIGNhbGVuZGFyIGFuZCB0aW1lKio6IFRvIGV4YW1pbmUgdGhlIEdyZWdvcmlhbiBwcm9wZXJ0aWVzIG9mIGEgRGF0ZVRpbWUgaW5kaXZpZHVhbGx5IChpLmUgYXMgb3Bwb3NlZCB0byBjb2xsZWN0aXZlbHkgdGhyb3VnaCB7QGxpbmsgRGF0ZVRpbWUjdG9PYmplY3R9KSwgdXNlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjeWVhcn0sIHtAbGluayBEYXRlVGltZSNtb250aH0sXHJcbiAgKiB7QGxpbmsgRGF0ZVRpbWUjZGF5fSwge0BsaW5rIERhdGVUaW1lI2hvdXJ9LCB7QGxpbmsgRGF0ZVRpbWUjbWludXRlfSwge0BsaW5rIERhdGVUaW1lI3NlY29uZH0sIHtAbGluayBEYXRlVGltZSNtaWxsaXNlY29uZH0gYWNjZXNzb3JzLlxyXG4gICogKiAqKldlZWsgY2FsZW5kYXIqKjogRm9yIElTTyB3ZWVrIGNhbGVuZGFyIGF0dHJpYnV0ZXMsIHNlZSB0aGUge0BsaW5rIERhdGVUaW1lI3dlZWtZZWFyfSwge0BsaW5rIERhdGVUaW1lI3dlZWtOdW1iZXJ9LCBhbmQge0BsaW5rIERhdGVUaW1lI3dlZWtkYXl9IGFjY2Vzc29ycy5cclxuICAqICogKipDb25maWd1cmF0aW9uKiogU2VlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjbG9jYWxlfSBhbmQge0BsaW5rIERhdGVUaW1lI251bWJlcmluZ1N5c3RlbX0gYWNjZXNzb3JzLlxyXG4gICogKiAqKlRyYW5zZm9ybWF0aW9uKio6IFRvIHRyYW5zZm9ybSB0aGUgRGF0ZVRpbWUgaW50byBvdGhlciBEYXRlVGltZXMsIHVzZSB7QGxpbmsgRGF0ZVRpbWUjc2V0fSwge0BsaW5rIERhdGVUaW1lI3JlY29uZmlndXJlfSwge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9LCB7QGxpbmsgRGF0ZVRpbWUjc2V0TG9jYWxlfSwge0BsaW5rIERhdGVUaW1lLnBsdXN9LCB7QGxpbmsgRGF0ZVRpbWUjbWludXN9LCB7QGxpbmsgRGF0ZVRpbWUjZW5kT2Z9LCB7QGxpbmsgRGF0ZVRpbWUjc3RhcnRPZn0sIHtAbGluayBEYXRlVGltZSN0b1VUQ30sIGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbH0uXHJcbiAgKiAqICoqT3V0cHV0Kio6IFRvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgdXNlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjdG9SZWxhdGl2ZX0sIHtAbGluayBEYXRlVGltZSN0b1JlbGF0aXZlQ2FsZW5kYXJ9LCB7QGxpbmsgRGF0ZVRpbWUjdG9KU09OfSwge0BsaW5rIERhdGVUaW1lI3RvSVNPfSwge0BsaW5rIERhdGVUaW1lI3RvSFRUUH0sIHtAbGluayBEYXRlVGltZSN0b09iamVjdH0sIHtAbGluayBEYXRlVGltZSN0b1JGQzI4MjJ9LCB7QGxpbmsgRGF0ZVRpbWUjdG9TdHJpbmd9LCB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9LCB7QGxpbmsgRGF0ZVRpbWUjdG9Gb3JtYXR9LCB7QGxpbmsgRGF0ZVRpbWUjdG9NaWxsaXN9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9KU0RhdGV9LlxyXG4gICpcclxuICAqIFRoZXJlJ3MgcGxlbnR5IG90aGVycyBkb2N1bWVudGVkIGJlbG93LiBJbiBhZGRpdGlvbiwgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gc3VidGxlciB0b3BpY3MgbGlrZSBpbnRlcm5hdGlvbmFsaXphdGlvbiwgdGltZSB6b25lcywgYWx0ZXJuYXRpdmUgY2FsZW5kYXJzLCB2YWxpZGl0eSwgYW5kIHNvIG9uLCBzZWUgdGhlIGV4dGVybmFsIGRvY3VtZW50YXRpb24uXHJcbiAgKi9cclxuY2xhc3MgRGF0ZVRpbWUge1xyXG4gIC8qKlxyXG4gICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICBjb25zdCB6b25lID0gY29uZmlnLnpvbmUgfHwgU2V0dGluZ3MuZGVmYXVsdFpvbmU7XHJcblxyXG4gICAgbGV0IGludmFsaWQgPSBjb25maWcuaW52YWxpZFxyXG4gICAgICAgfHwgKE51bWJlci5pc05hTihjb25maWcudHMpID8gbmV3IEludmFsaWQoJ2ludmFsaWQgaW5wdXQnKSA6IG51bGwpXHJcbiAgICAgICB8fCAoIXpvbmUuaXNWYWxpZCA/IHVuc3VwcG9ydGVkWm9uZSh6b25lKSA6IG51bGwpO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLnRzID0gaXNVbmRlZmluZWQoY29uZmlnLnRzKSA/IFNldHRpbmdzLm5vdygpIDogY29uZmlnLnRzO1xyXG5cclxuICAgIGxldCBjID0gbnVsbDtcclxuICAgIGxldCBvID0gbnVsbDtcclxuICAgIGlmICghaW52YWxpZCkge1xyXG4gICAgICBjb25zdCB1bmNoYW5nZWQgPSBjb25maWcub2xkICYmIGNvbmZpZy5vbGQudHMgPT09IHRoaXMudHMgJiYgY29uZmlnLm9sZC56b25lLmVxdWFscyh6b25lKTtcclxuXHJcbiAgICAgIGlmICh1bmNoYW5nZWQpIHtcclxuICAgICAgICBbYywgb10gPSBbY29uZmlnLm9sZC5jLCBjb25maWcub2xkLm9dO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG90ID0gem9uZS5vZmZzZXQodGhpcy50cyk7XHJcbiAgICAgICAgYyA9IHRzVG9PYmoodGhpcy50cywgb3QpO1xyXG4gICAgICAgIGludmFsaWQgPSBOdW1iZXIuaXNOYU4oYy55ZWFyKSA/IG5ldyBJbnZhbGlkKCdpbnZhbGlkIGlucHV0JykgOiBudWxsO1xyXG4gICAgICAgIGMgPSBpbnZhbGlkID8gbnVsbCA6IGM7XHJcbiAgICAgICAgbyA9IGludmFsaWQgPyBudWxsIDogb3Q7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMuX3pvbmUgPSB6b25lO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLmxvYyA9IGNvbmZpZy5sb2MgfHwgTG9jYWxlLmNyZWF0ZSgpO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLmludmFsaWQgPSBpbnZhbGlkO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLndlZWtEYXRhID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5jID0gYztcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5vID0gbztcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5pc0x1eG9uRGF0ZVRpbWUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8gQ09OU1RSVUNUXHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmb3IgdGhlIGN1cnJlbnQgaW5zdGFudCwgaW4gdGhlIHN5c3RlbSdzIHRpbWUgem9uZS5cclxuICAgICpcclxuICAgICogVXNlIFNldHRpbmdzIHRvIG92ZXJyaWRlIHRoZXNlIGRlZmF1bHQgdmFsdWVzIGlmIG5lZWRlZC5cclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oKSAvL34+IG5vdyBpbiB0aGUgSVNPIGZvcm1hdFxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhdGljIG5vdygpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe30pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIGxvY2FsIERhdGVUaW1lXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeWVhcl0gLSBUaGUgY2FsZW5kYXIgeWVhci4gSWYgb21pdHRlZCAoYXMgaW4sIGNhbGwgYGxvY2FsKClgIHdpdGggbm8gYXJndW1lbnRzKSwgdGhlIGN1cnJlbnQgdGltZSB3aWxsIGJlIHVzZWRcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFttb250aD0xXSAtIFRoZSBtb250aCwgMS1pbmRleGVkXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGF5PTFdIC0gVGhlIGRheSBvZiB0aGUgbW9udGgsIDEtaW5kZXhlZFxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW2hvdXI9MF0gLSBUaGUgaG91ciBvZiB0aGUgZGF5LCBpbiAyNC1ob3VyIHRpbWVcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFttaW51dGU9MF0gLSBUaGUgbWludXRlIG9mIHRoZSBob3VyLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtzZWNvbmQ9MF0gLSBUaGUgc2Vjb25kIG9mIHRoZSBtaW51dGUsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kPTBdIC0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA5OTlcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IG5vd1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCh7IHpvbmU6IFwiQW1lcmljYS9OZXdfWW9ya1wiIH0pICAgICAgLy9+PiBub3csIGluIFVTIGVhc3QgY29hc3QgdGltZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMS0wMVQwMDowMDowMFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzKSAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0wMVQwMDowMDowMFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgeyBsb2NhbGU6IFwiZnJcIiB9KSAgICAgLy9+PiAyMDE3LTAzLTEyVDAwOjAwOjAwLCB3aXRoIGEgRnJlbmNoIGxvY2FsZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSkgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgeyB6b25lOiBcInV0Y1wiIH0pICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwLCBpbiBVVENcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIDQ1KSAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCkgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTBcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCwgNzY1KSAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTAuNzY1XHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgbG9jYWwoKSB7XHJcbiAgICBjb25zdCBbb3B0cywgYXJnc10gPSBsYXN0T3B0cyhhcmd1bWVudHMpO1xyXG4gICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF0gPSBhcmdzO1xyXG4gICAgcmV0dXJuIHF1aWNrRFQoe1xyXG4gICAgICB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQsXHJcbiAgICB9LCBvcHRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEYXRlVGltZSBpbiBVVENcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5ZWFyXSAtIFRoZSBjYWxlbmRhciB5ZWFyLiBJZiBvbWl0dGVkIChhcyBpbiwgY2FsbCBgdXRjKClgIHdpdGggbm8gYXJndW1lbnRzKSwgdGhlIGN1cnJlbnQgdGltZSB3aWxsIGJlIHVzZWRcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFttb250aD0xXSAtIFRoZSBtb250aCwgMS1pbmRleGVkXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGF5PTFdIC0gVGhlIGRheSBvZiB0aGUgbW9udGhcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtob3VyPTBdIC0gVGhlIGhvdXIgb2YgdGhlIGRheSwgaW4gMjQtaG91ciB0aW1lXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWludXRlPTBdIC0gVGhlIG1pbnV0ZSBvZiB0aGUgaG91ciwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2Vjb25kPTBdIC0gVGhlIHNlY29uZCBvZiB0aGUgbWludXRlLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZD0wXSAtIFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgOTk5XHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZV0gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMub3V0cHV0Q2FsZW5kYXJdIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubnVtYmVyaW5nU3lzdGVtXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gbm93XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMS0wMVQwMDowMDowMFpcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTAxVDAwOjAwOjAwWlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDA6MDA6MDBaXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMFpcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwWlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCB7IGxvY2FsZTogXCJmclwiIH0pICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFogd2l0aCBhIEZyZW5jaCBsb2NhbGVcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTApICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwWlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCwgNzY1LCB7IGxvY2FsZTogXCJmclwiIH0pIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMC43NjVaIHdpdGggYSBGcmVuY2ggbG9jYWxlXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgdXRjKCkge1xyXG4gICAgY29uc3QgW29wdHMsIGFyZ3NdID0gbGFzdE9wdHMoYXJndW1lbnRzKTtcclxuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdID0gYXJncztcclxuXHJcbiAgICBvcHRzLnpvbmUgPSBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2U7XHJcbiAgICByZXR1cm4gcXVpY2tEVCh7XHJcbiAgICAgIHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCxcclxuICAgIH0sIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhU2NyaXB0IERhdGUgb2JqZWN0LiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXHJcbiAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSAtIGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdFxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21KU0RhdGUoZGF0ZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBjb25zdCB0cyA9IGlzRGF0ZShkYXRlKSA/IGRhdGUudmFsdWVPZigpIDogTmFOO1xyXG4gICAgaWYgKE51bWJlci5pc05hTih0cykpIHtcclxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoJ2ludmFsaWQgaW5wdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xyXG4gICAgaWYgKCF6b25lVG9Vc2UuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZVRvVXNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XHJcbiAgICAgIHRzLFxyXG4gICAgICB6b25lOiB6b25lVG9Vc2UsXHJcbiAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucyksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2ggKG1lYW5pbmcgc2luY2UgMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIC0gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDE5NzAgVVRDXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcclxuICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbU1pbGxpcyhtaWxsaXNlY29uZHMsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgaWYgKCFpc051bWJlcihtaWxsaXNlY29uZHMpKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcclxuICAgICAgICBgZnJvbU1pbGxpcyByZXF1aXJlcyBhIG51bWVyaWNhbCBpbnB1dCwgYnV0IHJlY2VpdmVkIGEgJHt0eXBlb2YgbWlsbGlzZWNvbmRzfSB3aXRoIHZhbHVlICR7bWlsbGlzZWNvbmRzfWAsXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKG1pbGxpc2Vjb25kcyA8IC1NQVhfREFURSB8fCBtaWxsaXNlY29uZHMgPiBNQVhfREFURSkge1xyXG4gICAgICAvLyB0aGlzIGlzbid0IHBlcmZlY3QgYmVjYXVzZSBiZWNhdXNlIHdlIGNhbiBzdGlsbCBlbmQgdXAgb3V0IG9mIHJhbmdlIGJlY2F1c2Ugb2YgYWRkaXRpb25hbCBzaGlmdGluZywgYnV0IGl0J3MgYSBzdGFydFxyXG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCgnVGltZXN0YW1wIG91dCBvZiByYW5nZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XHJcbiAgICAgICAgdHM6IG1pbGxpc2Vjb25kcyxcclxuICAgICAgICB6b25lOiBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxyXG4gICAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucyksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2ggKG1lYW5pbmcgc2luY2UgMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kcyAtIGEgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgMTk3MCBVVENcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZV0gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tU2Vjb25kcyhzZWNvbmRzLCBvcHRpb25zID0ge30pIHtcclxuICAgIGlmICghaXNOdW1iZXIoc2Vjb25kcykpIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCdmcm9tU2Vjb25kcyByZXF1aXJlcyBhIG51bWVyaWNhbCBpbnB1dCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XHJcbiAgICAgICAgdHM6IHNlY29uZHMgKiAxMDAwLFxyXG4gICAgICAgIHpvbmU6IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksXHJcbiAgICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFyJyBhbmQgJ2hvdXInIHdpdGggcmVhc29uYWJsZSBkZWZhdWx0cy5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gY3JlYXRlIHRoZSBEYXRlVGltZSBmcm9tXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoueWVhciAtIGEgeWVhciwgc3VjaCBhcyAxOTg3XHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubW9udGggLSBhIG1vbnRoLCAxLTEyXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouZGF5IC0gYSBkYXkgb2YgdGhlIG1vbnRoLCAxLTMxLCBkZXBlbmRpbmcgb24gdGhlIG1vbnRoXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoub3JkaW5hbCAtIGRheSBvZiB0aGUgeWVhciwgMS0zNjUgb3IgMzY2XHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla1llYXIgLSBhbiBJU08gd2VlayB5ZWFyXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla051bWJlciAtIGFuIElTTyB3ZWVrIG51bWJlciwgYmV0d2VlbiAxIGFuZCA1MiBvciA1MywgZGVwZW5kaW5nIG9uIHRoZSB5ZWFyXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla2RheSAtIGFuIElTTyB3ZWVrZGF5LCAxLTcsIHdoZXJlIDEgaXMgTW9uZGF5IGFuZCA3IGlzIFN1bmRheVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmhvdXIgLSBob3VyIG9mIHRoZSBkYXksIDAtMjNcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taW51dGUgLSBtaW51dGUgb2YgdGhlIGhvdXIsIDAtNTlcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5zZWNvbmQgLSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgMC01OVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbGxpc2Vjb25kIC0gbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgMC05OTlcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBjcmVhdGluZyB0aGlzIERhdGVUaW1lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBpbnRlcnByZXQgdGhlIG51bWJlcnMgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJ0aWN1bGFyIHpvbmUuIENhbiB0YWtlIGFueSB2YWx1ZSB0YWtlbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gc2V0Wm9uZSgpXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB5ZWFyOiAxOTgyLCBtb250aDogNSwgZGF5OiAyNX0pLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDUtMjUnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB5ZWFyOiAxOTgyIH0pLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDEtMDEnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0pIC8vfj4gdG9kYXkgYXQgMTA6MjY6MDZcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSwgeyB6b25lOiAndXRjJyB9KSxcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSwgeyB6b25lOiAnbG9jYWwnIH0pXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ0FtZXJpY2EvTmV3X1lvcmsnIH0pXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB3ZWVrWWVhcjogMjAxNiwgd2Vla051bWJlcjogMiwgd2Vla2RheTogMyB9KS50b0lTT0RhdGUoKSAvLz0+ICcyMDE2LTAxLTEzJ1xyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21PYmplY3Qob2JqLCBvcHRzID0ge30pIHtcclxuICAgIG9iaiA9IG9iaiB8fCB7fTtcclxuICAgIGNvbnN0IHpvbmVUb1VzZSA9IG5vcm1hbGl6ZVpvbmUob3B0cy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XHJcbiAgICBpZiAoIXpvbmVUb1VzZS5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0c05vdyA9IFNldHRpbmdzLm5vdygpO1xyXG4gICAgY29uc3Qgb2Zmc2V0UHJvdmlzID0gIWlzVW5kZWZpbmVkKG9wdHMuc3BlY2lmaWNPZmZzZXQpXHJcbiAgICAgID8gb3B0cy5zcGVjaWZpY09mZnNldFxyXG4gICAgICA6IHpvbmVUb1VzZS5vZmZzZXQodHNOb3cpO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9iamVjdChvYmosIG5vcm1hbGl6ZVVuaXQpO1xyXG4gICAgY29uc3QgY29udGFpbnNPcmRpbmFsID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCk7XHJcbiAgICBjb25zdCBjb250YWluc0dyZWdvclllYXIgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC55ZWFyKTtcclxuICAgIGNvbnN0IGNvbnRhaW5zR3JlZ29yTUQgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5tb250aCkgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KTtcclxuICAgIGNvbnN0IGNvbnRhaW5zR3JlZ29yID0gY29udGFpbnNHcmVnb3JZZWFyIHx8IGNvbnRhaW5zR3JlZ29yTUQ7XHJcbiAgICBjb25zdCBkZWZpbml0ZVdlZWtEZWYgPSBub3JtYWxpemVkLndlZWtZZWFyIHx8IG5vcm1hbGl6ZWQud2Vla051bWJlcjtcclxuICAgIGNvbnN0IGxvYyA9IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpO1xyXG5cclxuICAgIC8vIGNhc2VzOlxyXG4gICAgLy8ganVzdCBhIHdlZWtkYXkgLT4gdGhpcyB3ZWVrJ3MgaW5zdGFuY2Ugb2YgdGhhdCB3ZWVrZGF5LCBubyB3b3JyaWVzXHJcbiAgICAvLyAoZ3JlZ29yaWFuIGRhdGEgb3Igb3JkaW5hbCkgKyAod2Vla1llYXIgb3Igd2Vla051bWJlcikgLT4gZXJyb3JcclxuICAgIC8vIChncmVnb3JpYW4gbW9udGggb3IgZGF5KSArIG9yZGluYWwgLT4gZXJyb3JcclxuICAgIC8vIG90aGVyd2lzZSBqdXN0IHVzZSB3ZWVrcyBvciBvcmRpbmFscyBvciBncmVnb3JpYW4sIGRlcGVuZGluZyBvbiB3aGF0J3Mgc3BlY2lmaWVkXHJcblxyXG4gICAgaWYgKChjb250YWluc0dyZWdvciB8fCBjb250YWluc09yZGluYWwpICYmIGRlZmluaXRlV2Vla0RlZikge1xyXG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXHJcbiAgICAgICAgXCJDYW4ndCBtaXggd2Vla1llYXIvd2Vla051bWJlciB1bml0cyB3aXRoIHllYXIvbW9udGgvZGF5IG9yIG9yZGluYWxzXCIsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRhaW5zR3JlZ29yTUQgJiYgY29udGFpbnNPcmRpbmFsKSB7XHJcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IG1peCBvcmRpbmFsIGRhdGVzIHdpdGggbW9udGgvZGF5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVzZVdlZWtEYXRhID0gZGVmaW5pdGVXZWVrRGVmIHx8IChub3JtYWxpemVkLndlZWtkYXkgJiYgIWNvbnRhaW5zR3JlZ29yKTtcclxuXHJcbiAgICAvLyBjb25maWd1cmUgb3Vyc2VsdmVzIHRvIGRlYWwgd2l0aCBncmVnb3JpYW4gZGF0ZXMgb3Igd2VlayBzdHVmZlxyXG4gICAgbGV0IHVuaXRzO1xyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZXM7XHJcbiAgICBsZXQgb2JqTm93ID0gdHNUb09iaih0c05vdywgb2Zmc2V0UHJvdmlzKTtcclxuICAgIGlmICh1c2VXZWVrRGF0YSkge1xyXG4gICAgICB1bml0cyA9IG9yZGVyZWRXZWVrVW5pdHM7XHJcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0V2Vla1VuaXRWYWx1ZXM7XHJcbiAgICAgIG9iak5vdyA9IGdyZWdvcmlhblRvV2VlayhvYmpOb3cpO1xyXG4gICAgfSBlbHNlIGlmIChjb250YWluc09yZGluYWwpIHtcclxuICAgICAgdW5pdHMgPSBvcmRlcmVkT3JkaW5hbFVuaXRzO1xyXG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdE9yZGluYWxVbml0VmFsdWVzO1xyXG4gICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub09yZGluYWwob2JqTm93KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVuaXRzID0gb3JkZXJlZFVuaXRzO1xyXG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFVuaXRWYWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0IGRlZmF1bHQgdmFsdWVzIGZvciBtaXNzaW5nIHN0dWZmXHJcbiAgICBsZXQgZm91bmRGaXJzdCA9IGZhbHNlO1xyXG4gICAgZm9yIChjb25zdCB1IG9mIHVuaXRzKSB7XHJcbiAgICAgIGNvbnN0IHYgPSBub3JtYWxpemVkW3VdO1xyXG4gICAgICBpZiAoIWlzVW5kZWZpbmVkKHYpKSB7XHJcbiAgICAgICAgZm91bmRGaXJzdCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoZm91bmRGaXJzdCkge1xyXG4gICAgICAgIG5vcm1hbGl6ZWRbdV0gPSBkZWZhdWx0VmFsdWVzW3VdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vcm1hbGl6ZWRbdV0gPSBvYmpOb3dbdV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBtYWtlIHN1cmUgdGhlIHZhbHVlcyB3ZSBoYXZlIGFyZSBpbiByYW5nZVxyXG4gICAgY29uc3QgaGlnaGVyT3JkZXJJbnZhbGlkID0gdXNlV2Vla0RhdGFcclxuICAgICAgPyBoYXNJbnZhbGlkV2Vla0RhdGEobm9ybWFsaXplZClcclxuICAgICAgOiBjb250YWluc09yZGluYWxcclxuICAgICAgICA/IGhhc0ludmFsaWRPcmRpbmFsRGF0YShub3JtYWxpemVkKVxyXG4gICAgICAgIDogaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEobm9ybWFsaXplZCk7XHJcbiAgICBjb25zdCBpbnZhbGlkID0gaGlnaGVyT3JkZXJJbnZhbGlkIHx8IGhhc0ludmFsaWRUaW1lRGF0YShub3JtYWxpemVkKTtcclxuXHJcbiAgICBpZiAoaW52YWxpZCkge1xyXG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb21wdXRlIHRoZSBhY3R1YWwgdGltZVxyXG4gICAgY29uc3QgZ3JlZ29yaWFuID0gdXNlV2Vla0RhdGFcclxuICAgICAgPyB3ZWVrVG9HcmVnb3JpYW4obm9ybWFsaXplZClcclxuICAgICAgOiBjb250YWluc09yZGluYWxcclxuICAgICAgICA/IG9yZGluYWxUb0dyZWdvcmlhbihub3JtYWxpemVkKVxyXG4gICAgICAgIDogbm9ybWFsaXplZDtcclxuICAgIGNvbnN0IFt0c0ZpbmFsLCBvZmZzZXRGaW5hbF0gPSBvYmpUb1RTKGdyZWdvcmlhbiwgb2Zmc2V0UHJvdmlzLCB6b25lVG9Vc2UpO1xyXG4gICAgY29uc3QgaW5zdCA9IG5ldyBEYXRlVGltZSh7XHJcbiAgICAgIHRzOiB0c0ZpbmFsLFxyXG4gICAgICB6b25lOiB6b25lVG9Vc2UsXHJcbiAgICAgIG86IG9mZnNldEZpbmFsLFxyXG4gICAgICBsb2MsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBncmVnb3JpYW4gZGF0YSArIHdlZWtkYXkgc2VydmVzIG9ubHkgdG8gdmFsaWRhdGVcclxuICAgIGlmIChub3JtYWxpemVkLndlZWtkYXkgJiYgY29udGFpbnNHcmVnb3IgJiYgb2JqLndlZWtkYXkgIT09IGluc3Qud2Vla2RheSkge1xyXG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcclxuICAgICAgICAnbWlzbWF0Y2hlZCB3ZWVrZGF5JyxcclxuICAgICAgICBgeW91IGNhbid0IHNwZWNpZnkgYm90aCBhIHdlZWtkYXkgb2YgJHtub3JtYWxpemVkLndlZWtkYXl9IGFuZCBhIGRhdGUgb2YgJHtpbnN0LnRvSVNPKCl9YCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5zdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIElTTyA4NjAxIHN0cmluZ1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBJU08gc3RyaW5nXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZVxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5vdXRwdXRDYWxlbmRhcl0gLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW1dIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMnKVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMyswNjowMCcpXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzKzA2OjAwJywge3NldFpvbmU6IHRydWV9KVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMycsIHt6b25lOiAndXRjJ30pXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtVzA1LTQnKVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21JU08odGV4dCwgb3B0cyA9IHt9KSB7XHJcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZUlTT0RhdGUodGV4dCk7XHJcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCAnSVNPIDg2MDEnLCB0ZXh0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIFJGQyAyODIyIHN0cmluZ1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBSRkMgMjgyMiBzdHJpbmdcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cclxuICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lLiBTaW5jZSB0aGUgb2Zmc2V0IGlzIGFsd2F5cyBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIHRoaXMgaGFzIG5vIGVmZmVjdCBvbiB0aGUgaW50ZXJwcmV0YXRpb24gb2Ygc3RyaW5nLCBtZXJlbHkgdGhlIHpvbmUgdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpcyBleHByZXNzZWQgaW4uXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCcyNSBOb3YgMjAxNiAxMzoyMzoxMiBHTVQnKVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignRnJpLCAyNSBOb3YgMjAxNiAxMzoyMzoxMiArMDYwMCcpXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCcyNSBOb3YgMjAxNiAxMzoyMyBaJylcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tUkZDMjgyMih0ZXh0LCBvcHRzID0ge30pIHtcclxuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlUkZDMjgyMkRhdGUodGV4dCk7XHJcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCAnUkZDIDI4MjInLCB0ZXh0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIEhUVFAgaGVhZGVyIGRhdGVcclxuICAgICogQHNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMzLmh0bWwjc2VjMy4zLjFcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSFRUUCBoZWFkZXIgZGF0ZVxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmUuIFNpbmNlIEhUVFAgZGF0ZXMgYXJlIGFsd2F5cyBpbiBVVEMsIHRoaXMgaGFzIG5vIGVmZmVjdCBvbiB0aGUgaW50ZXJwcmV0YXRpb24gb2Ygc3RyaW5nLCBtZXJlbHkgdGhlIHpvbmUgdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpcyBleHByZXNzZWQgaW4uXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIHRoZSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZy4gRm9yIEhUVFAgZGF0ZXMsIHRoaXMgaXMgYWx3YXlzIFVUQywgc28gdGhpcyBvcHRpb24gaXMgZXF1aXZhbGVudCB0byBzZXR0aW5nIHRoZSBgem9uZWAgb3B0aW9uIHRvICd1dGMnLCBidXQgdGhpcyBvcHRpb24gaXMgaW5jbHVkZWQgZm9yIGNvbnNpc3RlbmN5IHdpdGggc2ltaWxhciBtZXRob2RzLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuLCAwNiBOb3YgMTk5NCAwODo0OTozNyBHTVQnKVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuZGF5LCAwNi1Ob3YtOTQgMDg6NDk6MzcgR01UJylcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1biBOb3YgIDYgMDg6NDk6MzcgMTk5NCcpXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbUhUVFAodGV4dCwgb3B0cyA9IHt9KSB7XHJcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZUhUVFBEYXRlKHRleHQpO1xyXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgJ0hUVFAnLCBvcHRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIGlucHV0IHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZy5cclxuICAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlLiBGb3IgYSB0YWJsZSBvZiB0b2tlbnMgYW5kIHRoZWlyIGludGVycHJldGF0aW9ucywgc2VlIFtoZXJlXShodHRwczovL21vbWVudC5naXRodWIuaW8vbHV4b24vIy9wYXJzaW5nP2lkPXRhYmxlLW9mLXRva2VucykuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgdGhlIGxpbmsgYmVsb3cgZm9yIHRoZSBmb3JtYXRzKVxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyB6b25lXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHN0cmluZyB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSBEYXRlVGltZSB0byB0aGlzIGxvY2FsZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgdG8gdGhpcyBudW1iZXJpbmcgc3lzdGVtXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21Gb3JtYXQodGV4dCwgZm10LCBvcHRzID0ge30pIHtcclxuICAgIGlmIChpc1VuZGVmaW5lZCh0ZXh0KSB8fCBpc1VuZGVmaW5lZChmbXQpKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcignZnJvbUZvcm1hdCByZXF1aXJlcyBhbiBpbnB1dCBzdHJpbmcgYW5kIGEgZm9ybWF0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsIH0gPSBvcHRzO1xyXG4gICAgY29uc3QgbG9jYWxlVG9Vc2UgPSBMb2NhbGUuZnJvbU9wdHMoe1xyXG4gICAgICBsb2NhbGUsXHJcbiAgICAgIG51bWJlcmluZ1N5c3RlbSxcclxuICAgICAgZGVmYXVsdFRvRU46IHRydWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lLCBzcGVjaWZpY09mZnNldCwgaW52YWxpZF0gPSBwYXJzZUZyb21Ub2tlbnMobG9jYWxlVG9Vc2UsIHRleHQsIGZtdCk7XHJcbiAgICBpZiAoaW52YWxpZCkge1xyXG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIGBmb3JtYXQgJHtmbXR9YCwgdGV4dCwgc3BlY2lmaWNPZmZzZXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0IGluc3RlYWRcclxuICAgICovXHJcbiAgc3RhdGljIGZyb21TdHJpbmcodGV4dCwgZm10LCBvcHRzID0ge30pIHtcclxuICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0KHRleHQsIGZtdCwgb3B0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIFNRTCBkYXRlLCB0aW1lLCBvciBkYXRldGltZVxyXG4gICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byB0aGlzIHpvbmVcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gYSBsb2NhbGUgc3RyaW5nIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIERhdGVUaW1lIHRvIHRoaXMgbG9jYWxlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIHJlc3VsdGluZyBEYXRlVGltZSB0byB0aGlzIG51bWJlcmluZyBzeXN0ZW1cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUnKVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0JylcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDInKVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiswNjowMCcpXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyIEFtZXJpY2EvTG9zX0FuZ2VsZXMnKVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiBBbWVyaWNhL0xvc19BbmdlbGVzJywgeyBzZXRab25lOiB0cnVlIH0pXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyJywgeyB6b25lOiAnQW1lcmljYS9Mb3NfQW5nZWxlcycgfSlcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMDk6MTI6MzQuMzQyJylcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tU1FMKHRleHQsIG9wdHMgPSB7fSkge1xyXG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmVdID0gcGFyc2VTUUwodGV4dCk7XHJcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCAnU1FMJywgdGV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGFuIGludmFsaWQgRGF0ZVRpbWUuXHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgRGF0ZVRpbWUgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uID0gbnVsbCkge1xyXG4gICAgaWYgKCFyZWFzb24pIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCduZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIERhdGVUaW1lIGlzIGludmFsaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xyXG5cclxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZERhdGVUaW1lRXJyb3IoaW52YWxpZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHsgaW52YWxpZCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZVRpbWUuIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcclxuICAgICogQHBhcmFtIHtvYmplY3R9IG9cclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgc3RhdGljIGlzRGF0ZVRpbWUobykge1xyXG4gICAgcmV0dXJuIChvICYmIG8uaXNMdXhvbkRhdGVUaW1lKSB8fCBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBQcm9kdWNlIHRoZSBmb3JtYXQgc3RyaW5nIGZvciBhIHNldCBvZiBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSBmb3JtYXRPcHRzXHJcbiAgICAqIEBwYXJhbSBsb2NhbGVPcHRzXHJcbiAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBwYXJzZUZvcm1hdEZvck9wdHMoZm9ybWF0T3B0cywgbG9jYWxlT3B0cyA9IHt9KSB7XHJcbiAgICBjb25zdCB0b2tlbkxpc3QgPSBmb3JtYXRPcHRzVG9Ub2tlbnMoZm9ybWF0T3B0cywgTG9jYWxlLmZyb21PYmplY3QobG9jYWxlT3B0cykpO1xyXG4gICAgcmV0dXJuICF0b2tlbkxpc3QgPyBudWxsIDogdG9rZW5MaXN0Lm1hcCgodCkgPT4gKHQgPyB0LnZhbCA6IG51bGwpKS5qb2luKCcnKTtcclxuICB9XHJcblxyXG4gIC8vIElORk9cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgdmFsdWUgb2YgdW5pdC5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlJyBvciAnZGF5J1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ21vbnRoJyk7IC8vPT4gN1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ2RheScpOyAvLz0+IDRcclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQodW5pdCkge1xyXG4gICAgcmV0dXJuIHRoaXNbdW5pdF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBEYXRlVGltZSBpcyB2YWxpZC4gSW52YWxpZCBEYXRlVGltZXMgb2NjdXIgd2hlbjpcclxuICAgICogKiBUaGUgRGF0ZVRpbWUgd2FzIGNyZWF0ZWQgZnJvbSBpbnZhbGlkIGNhbGVuZGFyIGluZm9ybWF0aW9uLCBzdWNoIGFzIHRoZSAxM3RoIG1vbnRoIG9yIEZlYnJ1YXJ5IDMwXHJcbiAgICAqICogVGhlIERhdGVUaW1lIHdhcyBjcmVhdGVkIGJ5IGFuIG9wZXJhdGlvbiBvbiBhbm90aGVyIGludmFsaWQgZGF0ZVxyXG4gICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIERhdGVUaW1lIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIERhdGVUaW1lIGlzIHZhbGlkXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBpbnZhbGlkUmVhc29uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgRGF0ZVRpbWUgYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIERhdGVUaW1lIGlzIHZhbGlkXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGxvY2FsZSBvZiBhIERhdGVUaW1lLCBzdWNoICdlbi1HQicuIFRoZSBsb2NhbGUgaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXHJcbiAgICAqXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBsb2NhbGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubG9jYWxlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIG51bWJlcmluZyBzeXN0ZW0gb2YgYSBEYXRlVGltZSwgc3VjaCAnYmVuZycuIFRoZSBudW1iZXJpbmcgc3lzdGVtIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxyXG4gICAgKlxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgbnVtYmVyaW5nU3lzdGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBvdXRwdXQgY2FsZW5kYXIgb2YgYSBEYXRlVGltZSwgc3VjaCAnaXNsYW1pYycuIFRoZSBvdXRwdXQgY2FsZW5kYXIgaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXHJcbiAgICAqXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBvdXRwdXRDYWxlbmRhcigpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSB0aW1lIHpvbmUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgRGF0ZVRpbWUuXHJcbiAgICAqIEB0eXBlIHtab25lfVxyXG4gICAgKi9cclxuICBnZXQgem9uZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl96b25lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgdGltZSB6b25lLlxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgem9uZU5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy56b25lLm5hbWUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgeWVhclxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkueWVhciAvLz0+IDIwMTdcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IHllYXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnllYXIgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBxdWFydGVyXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5xdWFydGVyIC8vPT4gMlxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgcXVhcnRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBNYXRoLmNlaWwodGhpcy5jLm1vbnRoIC8gMykgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBtb250aCAoMS0xMikuXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5tb250aCAvLz0+IDVcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IG1vbnRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5tb250aCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggKDEtMzBpc2gpLlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkuZGF5IC8vPT4gMjVcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IGRheSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuZGF5IDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgaG91ciBvZiB0aGUgZGF5ICgwLTIzKS5cclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDkpLmhvdXIgLy89PiA5XHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBob3VyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5ob3VyIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgbWludXRlIG9mIHRoZSBob3VyICgwLTU5KS5cclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwKS5taW51dGUgLy89PiAzMFxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgbWludXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taW51dGUgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSAoMC01OSkuXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCwgNTIpLnNlY29uZCAvLz0+IDUyXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBzZWNvbmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnNlY29uZCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQgKDAtOTk5KS5cclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1MiwgNjU0KS5taWxsaXNlY29uZCAvLz0+IDY1NFxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgbWlsbGlzZWNvbmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1pbGxpc2Vjb25kIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgd2VlayB5ZWFyXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMiwgMzEpLndlZWtZZWFyIC8vPT4gMjAxNVxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgd2Vla1llYXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrWWVhciA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIHdlZWsgbnVtYmVyIG9mIHRoZSB3ZWVrIHllYXIgKDEtNTJpc2gpLlxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLndlZWtOdW1iZXIgLy89PiAyMVxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgd2Vla051bWJlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtOdW1iZXIgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICAqIDEgaXMgTW9uZGF5IGFuZCA3IGlzIFN1bmRheVxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMTEsIDMxKS53ZWVrZGF5IC8vPT4gNFxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgd2Vla2RheSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtkYXkgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBvcmRpbmFsIChtZWFuaW5nIHRoZSBkYXkgb2YgdGhlIHllYXIpXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5vcmRpbmFsIC8vPT4gMTQ1XHJcbiAgICAqIEB0eXBlIHtudW1iZXJ8RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIGdldCBvcmRpbmFsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IGdyZWdvcmlhblRvT3JkaW5hbCh0aGlzLmMpLm9yZGluYWwgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBzaG9ydCBtb250aCBuYW1lLCBzdWNoIGFzICdPY3QnLlxyXG4gICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS5tb250aFNob3J0IC8vPT4gT2N0XHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBtb250aFNob3J0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ubW9udGhzKCdzaG9ydCcsIHsgbG9jT2JqOiB0aGlzLmxvYyB9KVt0aGlzLm1vbnRoIC0gMV0gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgbG9uZyBtb250aCBuYW1lLCBzdWNoIGFzICdPY3RvYmVyJy5cclxuICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkubW9udGhMb25nIC8vPT4gT2N0b2JlclxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgbW9udGhMb25nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ubW9udGhzKCdsb25nJywgeyBsb2NPYmo6IHRoaXMubG9jIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBzaG9ydCB3ZWVrZGF5LCBzdWNoIGFzICdNb24nLlxyXG4gICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS53ZWVrZGF5U2hvcnQgLy89PiBNb25cclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IHdlZWtkYXlTaG9ydCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jT2JqOiB0aGlzLmxvYyB9KVt0aGlzLndlZWtkYXkgLSAxXSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBsb25nIHdlZWtkYXksIHN1Y2ggYXMgJ01vbmRheScuXHJcbiAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlMb25nIC8vPT4gTW9uZGF5XHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCB3ZWVrZGF5TG9uZygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLndlZWtkYXlzKCdsb25nJywgeyBsb2NPYmo6IHRoaXMubG9jIH0pW3RoaXMud2Vla2RheSAtIDFdIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIFVUQyBvZmZzZXQgb2YgdGhpcyBEYXRlVGltZSBpbiBtaW51dGVzXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm9mZnNldCAvLz0+IC0yNDBcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkub2Zmc2V0IC8vPT4gMFxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgb2Zmc2V0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/ICt0aGlzLm8gOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBzaG9ydCBodW1hbiBuYW1lIGZvciB0aGUgem9uZSdzIGN1cnJlbnQgb2Zmc2V0LCBmb3IgZXhhbXBsZSBcIkVTVFwiIG9yIFwiRURUXCIuXHJcbiAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgb2Zmc2V0TmFtZVNob3J0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy56b25lLm9mZnNldE5hbWUodGhpcy50cywge1xyXG4gICAgICAgIGZvcm1hdDogJ3Nob3J0JyxcclxuICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgbG9uZyBodW1hbiBuYW1lIGZvciB0aGUgem9uZSdzIGN1cnJlbnQgb2Zmc2V0LCBmb3IgZXhhbXBsZSBcIkVhc3Rlcm4gU3RhbmRhcmQgVGltZVwiIG9yIFwiRWFzdGVybiBEYXlsaWdodCBUaW1lXCIuXHJcbiAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgb2Zmc2V0TmFtZUxvbmcoKSB7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnpvbmUub2Zmc2V0TmFtZSh0aGlzLnRzLCB7XHJcbiAgICAgICAgZm9ybWF0OiAnbG9uZycsXHJcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgd2hldGhlciB0aGlzIHpvbmUncyBvZmZzZXQgZXZlciBjaGFuZ2VzLCBhcyBpbiBhIERTVC5cclxuICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGdldCBpc09mZnNldEZpeGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuem9uZS5pc1VuaXZlcnNhbCA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHdoZXRoZXIgdGhlIERhdGVUaW1lIGlzIGluIGEgRFNULlxyXG4gICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgZ2V0IGlzSW5EU1QoKSB7XHJcbiAgICBpZiAodGhpcy5pc09mZnNldEZpeGVkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoeyBtb250aDogMSwgZGF5OiAxIH0pLm9mZnNldFxyXG4gICAgICAgICB8fCB0aGlzLm9mZnNldCA+IHRoaXMuc2V0KHsgbW9udGg6IDUgfSkub2Zmc2V0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIERhdGVUaW1lIGlzIGluIGEgbGVhcCB5ZWFyLCBmYWxzZSBvdGhlcndpc2VcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuaXNJbkxlYXBZZWFyIC8vPT4gdHJ1ZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5pc0luTGVhcFllYXIgLy89PiBmYWxzZVxyXG4gICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgZ2V0IGlzSW5MZWFwWWVhcigpIHtcclxuICAgIHJldHVybiBpc0xlYXBZZWFyKHRoaXMueWVhcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBEYXRlVGltZSdzIG1vbnRoXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYsIDIpLmRheXNJbk1vbnRoIC8vPT4gMjlcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMykuZGF5c0luTW9udGggLy89PiAzMVxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgZGF5c0luTW9udGgoKSB7XHJcbiAgICByZXR1cm4gZGF5c0luTW9udGgodGhpcy55ZWFyLCB0aGlzLm1vbnRoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGlzIERhdGVUaW1lJ3MgeWVhclxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2KS5kYXlzSW5ZZWFyIC8vPT4gMzY2XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLmRheXNJblllYXIgLy89PiAzNjVcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IGRheXNJblllYXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gZGF5c0luWWVhcih0aGlzLnllYXIpIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB3ZWVrcyBpbiB0aGlzIERhdGVUaW1lJ3MgeWVhclxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAwNCkud2Vla3NJbldlZWtZZWFyIC8vPT4gNTNcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykud2Vla3NJbldlZWtZZWFyIC8vPT4gNTJcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IHdlZWtzSW5XZWVrWWVhcigpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB3ZWVrc0luV2Vla1llYXIodGhpcy53ZWVrWWVhcikgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgcmVzb2x2ZWQgSW50bCBvcHRpb25zIGZvciB0aGlzIERhdGVUaW1lLlxyXG4gICAgKiBUaGlzIGlzIHVzZWZ1bCBpbiB1bmRlcnN0YW5kaW5nIHRoZSBiZWhhdmlvciBvZiBmb3JtYXR0aW5nIG1ldGhvZHNcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSB0aGUgc2FtZSBvcHRpb25zIGFzIHRvTG9jYWxlU3RyaW5nXHJcbiAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICovXHJcbiAgcmVzb2x2ZWRMb2NhbGVPcHRpb25zKG9wdHMgPSB7fSkge1xyXG4gICAgY29uc3QgeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXIgfSA9IEZvcm1hdHRlci5jcmVhdGUoXHJcbiAgICAgIHRoaXMubG9jLmNsb25lKG9wdHMpLFxyXG4gICAgICBvcHRzLFxyXG4gICAgKS5yZXNvbHZlZE9wdGlvbnModGhpcyk7XHJcbiAgICByZXR1cm4geyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXI6IGNhbGVuZGFyIH07XHJcbiAgfVxyXG5cclxuICAvLyBUUkFOU0ZPUk1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byBVVEMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cclxuICAgICpcclxuICAgICogRXF1aXZhbGVudCB0byB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0oJ3V0YycpXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0PTBdIC0gb3B0aW9uYWxseSwgYW4gb2Zmc2V0IGZyb20gVVRDIGluIG1pbnV0ZXNcclxuICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XSAtIG9wdGlvbnMgdG8gcGFzcyB0byBgc2V0Wm9uZSgpYFxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgdG9VVEMob2Zmc2V0ID0gMCwgb3B0cyA9IHt9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXRab25lKEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShvZmZzZXQpLCBvcHRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gdGhlIGhvc3QncyBsb2NhbCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXHJcbiAgICAqXHJcbiAgICAqIEVxdWl2YWxlbnQgdG8gYHNldFpvbmUoJ2xvY2FsJylgXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICB0b0xvY2FsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0Wm9uZShTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIHNwZWNpZmllZCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXHJcbiAgICAqXHJcbiAgICAqIEJ5IGRlZmF1bHQsIHRoZSBzZXR0ZXIga2VlcHMgdGhlIHVuZGVybHlpbmcgdGltZSB0aGUgc2FtZSAoYXMgaW4sIHRoZSBzYW1lIHRpbWVzdGFtcCksIGJ1dCB0aGUgbmV3IGluc3RhbmNlIHdpbGwgcmVwb3J0IGRpZmZlcmVudCBsb2NhbCB0aW1lcyBhbmQgY29uc2lkZXIgRFNUcyB3aGVuIG1ha2luZyBjb21wdXRhdGlvbnMsIGFzIHdpdGgge0BsaW5rIERhdGVUaW1lI3BsdXN9LiBZb3UgbWF5IHdpc2ggdG8gdXNlIHtAbGluayBEYXRlVGltZSN0b0xvY2FsfSBhbmQge0BsaW5rIERhdGVUaW1lI3RvVVRDfSB3aGljaCBwcm92aWRlIHNpbXBsZSBjb252ZW5pZW5jZSB3cmFwcGVycyBmb3IgY29tbW9ubHkgdXNlZCB6b25lcy5cclxuICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW3pvbmU9J2xvY2FsJ10gLSBhIHpvbmUgaWRlbnRpZmllci4gQXMgYSBzdHJpbmcsIHRoYXQgY2FuIGJlIGFueSBJQU5BIHpvbmUgc3VwcG9ydGVkIGJ5IHRoZSBob3N0IGVudmlyb25tZW50LCBvciBhIGZpeGVkLW9mZnNldCBuYW1lIG9mIHRoZSBmb3JtICdVVEMrMycsIG9yIHRoZSBzdHJpbmdzICdsb2NhbCcgb3IgJ3V0YycuIFlvdSBtYXkgYWxzbyBzdXBwbHkgYW4gaW5zdGFuY2Ugb2YgYSB7QGxpbmsgRGF0ZVRpbWUjWm9uZX0gY2xhc3MuXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmtlZXBMb2NhbFRpbWU9ZmFsc2VdIC0gSWYgdHJ1ZSwgYWRqdXN0IHRoZSB1bmRlcmx5aW5nIHRpbWUgc28gdGhhdCB0aGUgbG9jYWwgdGltZSBzdGF5cyB0aGUgc2FtZSwgYnV0IGluIHRoZSB0YXJnZXQgem9uZS4gWW91IHNob3VsZCByYXJlbHkgbmVlZCB0aGlzLlxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc2V0Wm9uZSh6b25lLCB7IGtlZXBMb2NhbFRpbWUgPSBmYWxzZSwga2VlcENhbGVuZGFyVGltZSA9IGZhbHNlIH0gPSB7fSkge1xyXG4gICAgem9uZSA9IG5vcm1hbGl6ZVpvbmUoem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xyXG4gICAgaWYgKHpvbmUuZXF1YWxzKHRoaXMuem9uZSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9IGlmICghem9uZS5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lKSk7XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3VFMgPSB0aGlzLnRzO1xyXG4gICAgaWYgKGtlZXBMb2NhbFRpbWUgfHwga2VlcENhbGVuZGFyVGltZSkge1xyXG4gICAgICBjb25zdCBvZmZzZXRHdWVzcyA9IHpvbmUub2Zmc2V0KHRoaXMudHMpO1xyXG4gICAgICBjb25zdCBhc09iaiA9IHRoaXMudG9PYmplY3QoKTtcclxuICAgICAgW25ld1RTXSA9IG9ialRvVFMoYXNPYmosIG9mZnNldEd1ZXNzLCB6b25lKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHRzOiBuZXdUUywgem9uZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBcIlNldFwiIHRoZSBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3Igb3V0cHV0Q2FsZW5kYXIuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgLSB0aGUgcHJvcGVydGllcyB0byBzZXRcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnJlY29uZmlndXJlKHsgbG9jYWxlOiAnZW4tR0InIH0pXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICByZWNvbmZpZ3VyZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciB9ID0ge30pIHtcclxuICAgIGNvbnN0IGxvYyA9IHRoaXMubG9jLmNsb25lKHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyIH0pO1xyXG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgbG9jIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFwiU2V0XCIgdGhlIGxvY2FsZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxyXG4gICAgKiBKdXN0IGEgY29udmVuaWVudCBhbGlhcyBmb3IgcmVjb25maWd1cmUoeyBsb2NhbGUgfSlcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnNldExvY2FsZSgnZW4tR0InKVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc2V0TG9jYWxlKGxvY2FsZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVjb25maWd1cmUoeyBsb2NhbGUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxyXG4gICAgKiBZb3UgY2FuIG9ubHkgc2V0IHVuaXRzIHdpdGggdGhpcyBtZXRob2Q7IGZvciBcInNldHRpbmdcIiBtZXRhZGF0YSwgc2VlIHtAbGluayBEYXRlVGltZSNyZWNvbmZpZ3VyZX0gYW5kIHtAbGluayBEYXRlVGltZSNzZXRab25lfS5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXHJcbiAgICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMTcgfSlcclxuICAgICogQGV4YW1wbGUgZHQuc2V0KHsgaG91cjogOCwgbWludXRlOiAzMCB9KVxyXG4gICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB3ZWVrZGF5OiA1IH0pXHJcbiAgICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMDUsIG9yZGluYWw6IDIzNCB9KVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc2V0KHZhbHVlcykge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVPYmplY3QodmFsdWVzLCBub3JtYWxpemVVbml0KTtcclxuICAgIGNvbnN0IHNldHRpbmdXZWVrU3R1ZmYgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrWWVhcilcclxuICAgICAgICAgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla051bWJlcilcclxuICAgICAgICAgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla2RheSk7XHJcbiAgICBjb25zdCBjb250YWluc09yZGluYWwgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKTtcclxuICAgIGNvbnN0IGNvbnRhaW5zR3JlZ29yWWVhciA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLnllYXIpO1xyXG4gICAgY29uc3QgY29udGFpbnNHcmVnb3JNRCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm1vbnRoKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpO1xyXG4gICAgY29uc3QgY29udGFpbnNHcmVnb3IgPSBjb250YWluc0dyZWdvclllYXIgfHwgY29udGFpbnNHcmVnb3JNRDtcclxuICAgIGNvbnN0IGRlZmluaXRlV2Vla0RlZiA9IG5vcm1hbGl6ZWQud2Vla1llYXIgfHwgbm9ybWFsaXplZC53ZWVrTnVtYmVyO1xyXG5cclxuICAgIGlmICgoY29udGFpbnNHcmVnb3IgfHwgY29udGFpbnNPcmRpbmFsKSAmJiBkZWZpbml0ZVdlZWtEZWYpIHtcclxuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFxyXG4gICAgICAgIFwiQ2FuJ3QgbWl4IHdlZWtZZWFyL3dlZWtOdW1iZXIgdW5pdHMgd2l0aCB5ZWFyL21vbnRoL2RheSBvciBvcmRpbmFsc1wiLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250YWluc0dyZWdvck1EICYmIGNvbnRhaW5zT3JkaW5hbCkge1xyXG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBtaXggb3JkaW5hbCBkYXRlcyB3aXRoIG1vbnRoL2RheVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWl4ZWQ7XHJcbiAgICBpZiAoc2V0dGluZ1dlZWtTdHVmZikge1xyXG4gICAgICBtaXhlZCA9IHdlZWtUb0dyZWdvcmlhbih7IC4uLmdyZWdvcmlhblRvV2Vlayh0aGlzLmMpLCAuLi5ub3JtYWxpemVkIH0pO1xyXG4gICAgfSBlbHNlIGlmICghaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSkge1xyXG4gICAgICBtaXhlZCA9IG9yZGluYWxUb0dyZWdvcmlhbih7IC4uLmdyZWdvcmlhblRvT3JkaW5hbCh0aGlzLmMpLCAuLi5ub3JtYWxpemVkIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWl4ZWQgPSB7IC4uLnRoaXMudG9PYmplY3QoKSwgLi4ubm9ybWFsaXplZCB9O1xyXG5cclxuICAgICAgLy8gaWYgd2UgZGlkbid0IHNldCB0aGUgZGF5IGJ1dCB3ZSBlbmRlZCB1cCBvbiBhbiBvdmVyZmxvdyBkYXRlLFxyXG4gICAgICAvLyB1c2UgdGhlIGxhc3QgZGF5IG9mIHRoZSByaWdodCBtb250aFxyXG4gICAgICBpZiAoaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpKSB7XHJcbiAgICAgICAgbWl4ZWQuZGF5ID0gTWF0aC5taW4oZGF5c0luTW9udGgobWl4ZWQueWVhciwgbWl4ZWQubW9udGgpLCBtaXhlZC5kYXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3RzLCBvXSA9IG9ialRvVFMobWl4ZWQsIHRoaXMubywgdGhpcy56b25lKTtcclxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHRzLCBvIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEFkZCBhIHBlcmlvZCBvZiB0aW1lIHRvIHRoaXMgRGF0ZVRpbWUgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lXHJcbiAgICAqXHJcbiAgICAqIEFkZGluZyBob3VycywgbWludXRlcywgc2Vjb25kcywgb3IgbWlsbGlzZWNvbmRzIGluY3JlYXNlcyB0aGUgdGltZXN0YW1wIGJ5IHRoZSByaWdodCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLiBBZGRpbmcgZGF5cywgbW9udGhzLCBvciB5ZWFycyBzaGlmdHMgdGhlIGNhbGVuZGFyLCBhY2NvdW50aW5nIGZvciBEU1RzIGFuZCBsZWFwIHllYXJzIGFsb25nIHRoZSB3YXkuIFRodXMsIGBkdC5wbHVzKHsgaG91cnM6IDI0IH0pYCBtYXkgcmVzdWx0IGluIGEgZGlmZmVyZW50IHRpbWUgdGhhbiBgZHQucGx1cyh7IGRheXM6IDEgfSlgIGlmIHRoZXJlJ3MgYSBEU1Qgc2hpZnQgaW4gYmV0d2Vlbi5cclxuICAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gYWRkLiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKDEyMykgLy9+PiBpbiAxMjMgbWlsbGlzZWNvbmRzXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBtaW51dGVzOiAxNSB9KSAvL34+IGluIDE1IG1pbnV0ZXNcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkgLy9+PiB0aGlzIHRpbWUgdG9tb3Jyb3dcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IC0xIH0pIC8vfj4gdGhpcyB0aW1lIHllc3RlcmRheVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pIC8vfj4gaW4gMyBociwgMTMgbWluXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAzLCBtaW51dGVzOiAxMyB9KSkgLy9+PiBpbiAzIGhyLCAxMyBtaW5cclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHBsdXMoZHVyYXRpb24pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xyXG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIGFkanVzdFRpbWUodGhpcywgZHVyKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU3VidHJhY3QgYSBwZXJpb2Qgb2YgdGltZSB0byB0aGlzIERhdGVUaW1lIGFuZCByZXR1cm4gdGhlIHJlc3VsdGluZyBEYXRlVGltZVxyXG4gICAgKiBTZWUge0BsaW5rIERhdGVUaW1lI3BsdXN9XHJcbiAgICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIHN1YnRyYWN0LiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxyXG4gICAgQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIG1pbnVzKGR1cmF0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKS5uZWdhdGUoKTtcclxuICAgIHJldHVybiBjbG9uZSh0aGlzLCBhZGp1c3RUaW1lKHRoaXMsIGR1cikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFwiU2V0XCIgdGhpcyBEYXRlVGltZSB0byB0aGUgYmVnaW5uaW5nIG9mIGEgdW5pdCBvZiB0aW1lLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIFRoZSB1bml0IHRvIGdvIHRvIHRoZSBiZWdpbm5pbmcgb2YuIENhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsIG9yICdtaWxsaXNlY29uZCcuXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLnN0YXJ0T2YoJ21vbnRoJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDMtMDEnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLnN0YXJ0T2YoJ3llYXInKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMS0wMSdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZignd2VlaycpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAzLTAzJywgd2Vla3MgYWx3YXlzIHN0YXJ0IG9uIE1vbmRheXNcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLnN0YXJ0T2YoJ2RheScpLnRvSVNPVGltZSgpOyAvLz0+ICcwMDowMC4wMDAtMDU6MDAnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5zdGFydE9mKCdob3VyJykudG9JU09UaW1lKCk7IC8vPT4gJzA1OjAwOjAwLjAwMC0wNTowMCdcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXJ0T2YodW5pdCkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG4gICAgY29uc3QgbyA9IHt9O1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZFVuaXQgPSBEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpO1xyXG4gICAgc3dpdGNoIChub3JtYWxpemVkVW5pdCkge1xyXG4gICAgICBjYXNlICd5ZWFycyc6XHJcbiAgICAgICAgby5tb250aCA9IDE7XHJcbiAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxyXG4gICAgICBjYXNlICdxdWFydGVycyc6XHJcbiAgICAgIGNhc2UgJ21vbnRocyc6XHJcbiAgICAgICAgby5kYXkgPSAxO1xyXG4gICAgICAgIC8vIGZhbGxzIHRocm91Z2hcclxuICAgICAgY2FzZSAnd2Vla3MnOlxyXG4gICAgICBjYXNlICdkYXlzJzpcclxuICAgICAgICBvLmhvdXIgPSAwO1xyXG4gICAgICAgIC8vIGZhbGxzIHRocm91Z2hcclxuICAgICAgY2FzZSAnaG91cnMnOlxyXG4gICAgICAgIG8ubWludXRlID0gMDtcclxuICAgICAgICAvLyBmYWxscyB0aHJvdWdoXHJcbiAgICAgIGNhc2UgJ21pbnV0ZXMnOlxyXG4gICAgICAgIG8uc2Vjb25kID0gMDtcclxuICAgICAgICAvLyBmYWxscyB0aHJvdWdoXHJcbiAgICAgIGNhc2UgJ3NlY29uZHMnOlxyXG4gICAgICAgIG8ubWlsbGlzZWNvbmQgPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgLy8gbm8gZGVmYXVsdCwgaW52YWxpZCB1bml0cyB0aHJvdyBpbiBub3JtYWxpemVVbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09ICd3ZWVrcycpIHtcclxuICAgICAgby53ZWVrZGF5ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09ICdxdWFydGVycycpIHtcclxuICAgICAgY29uc3QgcSA9IE1hdGguY2VpbCh0aGlzLm1vbnRoIC8gMyk7XHJcbiAgICAgIG8ubW9udGggPSAocSAtIDEpICogMyArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2V0KG8pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFwiU2V0XCIgdGhpcyBEYXRlVGltZSB0byB0aGUgZW5kIChtZWFuaW5nIHRoZSBsYXN0IG1pbGxpc2Vjb25kKSBvZiBhIHVuaXQgb2YgdGltZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIFRoZSB1bml0IHRvIGdvIHRvIHRoZSBlbmQgb2YuIENhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsIG9yICdtaWxsaXNlY29uZCcuXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCdtb250aCcpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMzFUMjM6NTk6NTkuOTk5LTA1OjAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZigneWVhcicpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMTItMzFUMjM6NTk6NTkuOTk5LTA1OjAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZignd2VlaycpLnRvSVNPKCk7IC8vID0+ICcyMDE0LTAzLTA5VDIzOjU5OjU5Ljk5OS0wNTowMCcsIHdlZWtzIHN0YXJ0IG9uIE1vbmRheXNcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLmVuZE9mKCdkYXknKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTAzVDIzOjU5OjU5Ljk5OS0wNTowMCdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLmVuZE9mKCdob3VyJykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0wM1QwNTo1OTo1OS45OTktMDU6MDAnXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBlbmRPZih1bml0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXHJcbiAgICAgID8gdGhpcy5wbHVzKHsgW3VuaXRdOiAxIH0pXHJcbiAgICAgICAgLnN0YXJ0T2YodW5pdClcclxuICAgICAgICAubWludXMoMSlcclxuICAgICAgOiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gT1VUUFVUXHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuXHJcbiAgICAqICoqWW91IG1heSBub3Qgd2FudCB0aGlzLioqIFNlZSB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvciBhIG1vcmUgZmxleGlibGUgZm9ybWF0dGluZyB0b29sLiBGb3IgYSB0YWJsZSBvZiB0b2tlbnMgYW5kIHRoZWlyIGludGVycHJldGF0aW9ucywgc2VlIFtoZXJlXShodHRwczovL21vbWVudC5naXRodWIuaW8vbHV4b24vIy9mb3JtYXR0aW5nP2lkPXRhYmxlLW9mLXRva2VucykuXHJcbiAgICAqIERlZmF1bHRzIHRvIGVuLVVTIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHN5c3RlbSdzIGxvY2FsZS5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgc3RyaW5nXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0cyB0byBvdmVycmlkZSB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIG9uIHRoaXMgRGF0ZVRpbWVcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJykgLy89PiAnMjAxNyBBcHIgMjInXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZSgnZnInKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnKSAvLz0+ICcyMDE3IGF2ci4gMjInXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcsIHsgbG9jYWxlOiBcImZyXCIgfSkgLy89PiAnMjAxNyBhdnIuIDIyJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0Zvcm1hdChcIkhIICdob3VycyBhbmQnIG1tICdtaW51dGVzJ1wiKSAvLz0+ICcyMCBob3VycyBhbmQgNTUgbWludXRlcydcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0Zvcm1hdChmbXQsIG9wdHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxyXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MucmVkZWZhdWx0VG9FTihvcHRzKSkuZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKHRoaXMsIGZtdClcclxuICAgICAgOiBJTlZBTElEO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBsb2NhbGl6ZWQgc3RyaW5nIHJlcHJlc2VudGluZyB0aGlzIGRhdGUuIEFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyB0aGUgSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBhbmQgYW55IHByZXNldHMgZGVmaW5lZCBieSBMdXhvbiwgc3VjaCBhcyBgRGF0ZVRpbWUuREFURV9GVUxMYCBvciBgRGF0ZVRpbWUuVElNRV9TSU1QTEVgLlxyXG4gICAgKiBUaGUgZXhhY3QgYmVoYXZpb3Igb2YgdGhpcyBtZXRob2QgaXMgYnJvd3Nlci1zcGVjaWZpYywgYnV0IGluIGdlbmVyYWwgaXQgd2lsbCByZXR1cm4gYW4gYXBwcm9wcmlhdGUgcmVwcmVzZW50YXRpb25cclxuICAgICogb2YgdGhlIERhdGVUaW1lIGluIHRoZSBhc3NpZ25lZCBsb2NhbGUuXHJcbiAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XHJcbiAgICAqIEBwYXJhbSBmb3JtYXRPcHRzIHtPYmplY3R9IC0gSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zIGFuZCBjb25maWd1cmF0aW9uIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRzIHRvIG92ZXJyaWRlIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgb24gdGhpcyBEYXRlVGltZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZygpOyAvLz0+IDQvMjAvMjAxN1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoJ2VuLWdiJykudG9Mb2NhbGVTdHJpbmcoKTsgLy89PiAnMjAvMDQvMjAxNydcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyBsb2NhbGU6ICdlbi1nYicgfSk7IC8vPT4gJzIwLzA0LzIwMTcnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfRlVMTCk7IC8vPT4gJ0FwcmlsIDIwLCAyMDE3J1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5USU1FX1NJTVBMRSk7IC8vPT4gJzExOjMyIEFNJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFVElNRV9TSE9SVCk7IC8vPT4gJzQvMjAvMjAxNywgMTE6MzIgQU0nXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgd2Vla2RheTogJ2xvbmcnLCBtb250aDogJ2xvbmcnLCBkYXk6ICcyLWRpZ2l0JyB9KTsgLy89PiAnVGh1cnNkYXksIEFwcmlsIDIwJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IHdlZWtkYXk6ICdzaG9ydCcsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JywgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTsgLy89PiAnVGh1LCBBcHIgMjAsIDExOjI3IEFNJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcsIGhvdXJDeWNsZTogJ2gyMycgfSk7IC8vPT4gJzExOjMyJ1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvTG9jYWxlU3RyaW5nKGZvcm1hdE9wdHMgPSBEQVRFX1NIT1JULCBvcHRzID0ge30pIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcclxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBmb3JtYXRPcHRzKS5mb3JtYXREYXRlVGltZSh0aGlzKVxyXG4gICAgICA6IElOVkFMSUQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBmb3JtYXQgXCJwYXJ0c1wiLCBtZWFuaW5nIGluZGl2aWR1YWwgdG9rZW5zIGFsb25nIHdpdGggbWV0YWRhdGEuIFRoaXMgaXMgYWxsb3dzIGNhbGxlcnMgdG8gcG9zdC1wcm9jZXNzIGluZGl2aWR1YWwgc2VjdGlvbnMgb2YgdGhlIGZvcm1hdHRlZCBvdXRwdXQuXHJcbiAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0L2Zvcm1hdFRvUGFydHNcclxuICAgICogQHBhcmFtIG9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMsIHNhbWUgYXMgYHRvTG9jYWxlU3RyaW5nYC5cclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVQYXJ0cygpOyAvLz0+IFtcclxuICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdkYXknLCB2YWx1ZTogJzI1JyB9LFxyXG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2xpdGVyYWwnLCB2YWx1ZTogJy8nIH0sXHJcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbW9udGgnLCB2YWx1ZTogJzA1JyB9LFxyXG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2xpdGVyYWwnLCB2YWx1ZTogJy8nIH0sXHJcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAneWVhcicsIHZhbHVlOiAnMTk4MicgfVxyXG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiBdXHJcbiAgICAqL1xyXG4gIHRvTG9jYWxlUGFydHMob3B0cyA9IHt9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXHJcbiAgICAgID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5jbG9uZShvcHRzKSwgb3B0cykuZm9ybWF0RGF0ZVRpbWVQYXJ0cyh0aGlzKVxyXG4gICAgICA6IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmV4dGVuZGVkWm9uZT10cnVlXSAtIGFkZCB0aGUgdGltZSB6b25lIGZvcm1hdCBleHRlbnNpb25cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgzLCA1LCAyNSkudG9JU08oKSAvLz0+ICcxOTgyLTA1LTI1VDAwOjAwOjAwLjAwMFonXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKCkgLy89PiAnMjAxNy0wNC0yMlQyMDo0NzowNS4zMzUtMDQ6MDAnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMjAxNy0wNC0yMlQyMDo0NzowNS4zMzUnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzIwMTcwNDIyVDIwNDcwNS4zMzUtMDQwMCdcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0lTTyh7XHJcbiAgICBmb3JtYXQgPSAnZXh0ZW5kZWQnLFxyXG4gICAgc3VwcHJlc3NTZWNvbmRzID0gZmFsc2UsXHJcbiAgICBzdXBwcmVzc01pbGxpc2Vjb25kcyA9IGZhbHNlLFxyXG4gICAgaW5jbHVkZU9mZnNldCA9IHRydWUsXHJcbiAgICBleHRlbmRlZFpvbmUgPSBmYWxzZSxcclxuICB9ID0ge30pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4dCA9IGZvcm1hdCA9PT0gJ2V4dGVuZGVkJztcclxuXHJcbiAgICBsZXQgYyA9IHRvSVNPRGF0ZSh0aGlzLCBleHQpO1xyXG4gICAgYyArPSAnVCc7XHJcbiAgICBjICs9IHRvSVNPVGltZSh0aGlzLCBleHQsIHN1cHByZXNzU2Vjb25kcywgc3VwcHJlc3NNaWxsaXNlY29uZHMsIGluY2x1ZGVPZmZzZXQsIGV4dGVuZGVkWm9uZSk7XHJcbiAgICByZXR1cm4gYztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIGRhdGUgY29tcG9uZW50XHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTA1LTI1J1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPRGF0ZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcxOTgyMDUyNSdcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0lTT0RhdGUoeyBmb3JtYXQgPSAnZXh0ZW5kZWQnIH0gPSB7fSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvSVNPRGF0ZSh0aGlzLCBmb3JtYXQgPT09ICdleHRlbmRlZCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3Mgd2VlayBkYXRlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09XZWVrRGF0ZSgpIC8vPT4gJzE5ODItVzIxLTInXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9JU09XZWVrRGF0ZSgpIHtcclxuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgXCJra2trLSdXJ1dXLWNcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyB0aW1lIGNvbXBvbmVudFxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5leHRlbmRlZFpvbmU9dHJ1ZV0gLSBhZGQgdGhlIHRpbWUgem9uZSBmb3JtYXQgZXh0ZW5zaW9uXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4XHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSgpIC8vPT4gJzA3OjM0OjE5LjM2MVonXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQsIHNlY29uZHM6IDAsIG1pbGxpc2Vjb25kczogMCB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMDc6MzRaJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcwNzM0MTkuMzYxWidcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoeyBpbmNsdWRlUHJlZml4OiB0cnVlIH0pIC8vPT4gJ1QwNzozNDoxOS4zNjFaJ1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvSVNPVGltZSh7XHJcbiAgICBzdXBwcmVzc01pbGxpc2Vjb25kcyA9IGZhbHNlLFxyXG4gICAgc3VwcHJlc3NTZWNvbmRzID0gZmFsc2UsXHJcbiAgICBpbmNsdWRlT2Zmc2V0ID0gdHJ1ZSxcclxuICAgIGluY2x1ZGVQcmVmaXggPSBmYWxzZSxcclxuICAgIGV4dGVuZGVkWm9uZSA9IGZhbHNlLFxyXG4gICAgZm9ybWF0ID0gJ2V4dGVuZGVkJyxcclxuICB9ID0ge30pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGMgPSBpbmNsdWRlUHJlZml4ID8gJ1QnIDogJyc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBjXHJcbiAgICAgICArIHRvSVNPVGltZShcclxuICAgICAgICAgdGhpcyxcclxuICAgICAgICAgZm9ybWF0ID09PSAnZXh0ZW5kZWQnLFxyXG4gICAgICAgICBzdXBwcmVzc1NlY29uZHMsXHJcbiAgICAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzLFxyXG4gICAgICAgICBpbmNsdWRlT2Zmc2V0LFxyXG4gICAgICAgICBleHRlbmRlZFpvbmUsXHJcbiAgICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gUkZDIDI4MjItY29tcGF0aWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgKzAwMDAnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1JGQzI4MjIoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwIC0wNDAwJ1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvUkZDMjgyMigpIHtcclxuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgJ0VFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgWlpaJywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEhUVFAgaGVhZGVycy4gVGhlIG91dHB1dCBpcyBhbHdheXMgZXhwcmVzc2VkIGluIEdNVC5cclxuICAgICogU3BlY2lmaWNhbGx5LCB0aGUgc3RyaW5nIGNvbmZvcm1zIHRvIFJGQyAxMTIzLlxyXG4gICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvSFRUUCgpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgR01UJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMsIDE5KS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDE5OjAwOjAwIEdNVCdcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0hUVFAoKSB7XHJcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMudG9VVEMoKSwgXCJFRUUsIGRkIExMTCB5eXl5IEhIOm1tOnNzICdHTVQnXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBEYXRlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9TUUxEYXRlKCkgLy89PiAnMjAxNC0wNy0xMydcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b1NRTERhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiB0b0lTT0RhdGUodGhpcywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIFRpbWVcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LlxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldFNwYWNlPXRydWVdIC0gaW5jbHVkZSB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgdGltZSBhbmQgdGhlIG9mZnNldCwgc3VjaCBhcyAnMDU6MTU6MTYuMzQ1IC0wNDowMCdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkudG9TUUwoKSAvLz0+ICcwNToxNToxNi4zNDUnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1IC0wNDowMCdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9TUUwoeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvU1FMKHsgaW5jbHVkZVpvbmU6IGZhbHNlIH0pIC8vPT4gJzA1OjE1OjE2LjM0NSBBbWVyaWNhL05ld19Zb3JrJ1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvU1FMVGltZSh7IGluY2x1ZGVPZmZzZXQgPSB0cnVlLCBpbmNsdWRlWm9uZSA9IGZhbHNlLCBpbmNsdWRlT2Zmc2V0U3BhY2UgPSB0cnVlIH0gPSB7fSkge1xyXG4gICAgbGV0IGZtdCA9ICdISDptbTpzcy5TU1MnO1xyXG5cclxuICAgIGlmIChpbmNsdWRlWm9uZSB8fCBpbmNsdWRlT2Zmc2V0KSB7XHJcbiAgICAgIGlmIChpbmNsdWRlT2Zmc2V0U3BhY2UpIHtcclxuICAgICAgICBmbXQgKz0gJyAnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmNsdWRlWm9uZSkge1xyXG4gICAgICAgIGZtdCArPSAneic7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5jbHVkZU9mZnNldCkge1xyXG4gICAgICAgIGZtdCArPSAnWlonO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBmbXQsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBEYXRlVGltZVxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlWm9uZT1mYWxzZV0gLSBpbmNsdWRlIHRoZSB6b25lLCBzdWNoIGFzICdBbWVyaWNhL05ld19Zb3JrJy4gT3ZlcnJpZGVzIGluY2x1ZGVPZmZzZXQuXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0U3BhY2U9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSB0aW1lIGFuZCB0aGUgb2Zmc2V0LCBzdWNoIGFzICcwNToxNToxNi4zNDUgLTA0OjAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgWidcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgLTA0OjAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKHsgaW5jbHVkZVpvbmU6IHRydWUgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgQW1lcmljYS9OZXdfWW9yaydcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b1NRTChvcHRzID0ge30pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHt0aGlzLnRvU1FMRGF0ZSgpfSAke3RoaXMudG9TUUxUaW1lKG9wdHMpfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmdcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRvSVNPKCkgOiBJTlZBTElEO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLiBBbGlhcyBvZiB7QGxpbmsgRGF0ZVRpbWUjdG9NaWxsaXN9XHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgdmFsdWVPZigpIHtcclxuICAgIHJldHVybiB0aGlzLnRvTWlsbGlzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgZXBvY2ggbWlsbGlzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgdG9NaWxsaXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgdG9TZWNvbmRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgLyAxMDAwIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGVwb2NoIHNlY29uZHMgKGFzIGEgd2hvbGUgbnVtYmVyKSBvZiB0aGlzIERhdGVUaW1lLlxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIHRvVW5peEludGVnZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gTWF0aC5mbG9vcih0aGlzLnRzIC8gMTAwMCkgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSlNPTi5cclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0pTT04oKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBCU09OIHNlcmlhbGl6YWJsZSBlcXVpdmFsZW50IHRvIHRoaXMgRGF0ZVRpbWUuXHJcbiAgICAqIEByZXR1cm4ge0RhdGV9XHJcbiAgICAqL1xyXG4gIHRvQlNPTigpIHtcclxuICAgIHJldHVybiB0aGlzLnRvSlNEYXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEYXRlVGltZSdzIHllYXIsIG1vbnRoLCBkYXksIGFuZCBzbyBvbi5cclxuICAgICogQHBhcmFtIG9wdHMgLSBvcHRpb25zIGZvciBnZW5lcmF0aW5nIHRoZSBvYmplY3RcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlQ29uZmlnPWZhbHNlXSAtIGluY2x1ZGUgY29uZmlndXJhdGlvbiBhdHRyaWJ1dGVzIGluIHRoZSBvdXRwdXRcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9PYmplY3QoKSAvLz0+IHsgeWVhcjogMjAxNywgbW9udGg6IDQsIGRheTogMjIsIGhvdXI6IDIwLCBtaW51dGU6IDQ5LCBzZWNvbmQ6IDQyLCBtaWxsaXNlY29uZDogMjY4IH1cclxuICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgKi9cclxuICB0b09iamVjdChvcHRzID0ge30pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4ge307XHJcblxyXG4gICAgY29uc3QgYmFzZSA9IHsgLi4udGhpcy5jIH07XHJcblxyXG4gICAgaWYgKG9wdHMuaW5jbHVkZUNvbmZpZykge1xyXG4gICAgICBiYXNlLm91dHB1dENhbGVuZGFyID0gdGhpcy5vdXRwdXRDYWxlbmRhcjtcclxuICAgICAgYmFzZS5udW1iZXJpbmdTeXN0ZW0gPSB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW07XHJcbiAgICAgIGJhc2UubG9jYWxlID0gdGhpcy5sb2MubG9jYWxlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJhc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgRGF0ZSBlcXVpdmFsZW50IHRvIHRoaXMgRGF0ZVRpbWUuXHJcbiAgICAqIEByZXR1cm4ge0RhdGV9XHJcbiAgICAqL1xyXG4gIHRvSlNEYXRlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgOiBOYU4pO1xyXG4gIH1cclxuXHJcbiAgLy8gQ09NUEFSRVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIERhdGVUaW1lcyBhcyBhIER1cmF0aW9uLlxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIERhdGVUaW1lIHRvIGNvbXBhcmUgdGhpcyBvbmUgdG9cclxuICAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgYXJyYXkgb2YgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcclxuICAgICogQGV4YW1wbGVcclxuICAgICogdmFyIGkxID0gRGF0ZVRpbWUuZnJvbUlTTygnMTk4Mi0wNS0yNVQwOTo0NScpLFxyXG4gICAgKiAgICAgaTIgPSBEYXRlVGltZS5mcm9tSVNPKCcxOTgzLTEwLTE0VDEwOjMwJyk7XHJcbiAgICAqIGkyLmRpZmYoaTEpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogNDM4MDc1MDAwMDAgfVxyXG4gICAgKiBpMi5kaWZmKGkxLCAnaG91cnMnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTIxNjguNzUgfVxyXG4gICAgKiBpMi5kaWZmKGkxLCBbJ21vbnRocycsICdkYXlzJ10pLnRvT2JqZWN0KCkgLy89PiB7IG1vbnRoczogMTYsIGRheXM6IDE5LjAzMTI1IH1cclxuICAgICogaTIuZGlmZihpMSwgWydtb250aHMnLCAnZGF5cycsICdob3VycyddKS50b09iamVjdCgpIC8vPT4geyBtb250aHM6IDE2LCBkYXlzOiAxOSwgaG91cnM6IDAuNzUgfVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgZGlmZihvdGhlckRhdGVUaW1lLCB1bml0ID0gJ21pbGxpc2Vjb25kcycsIG9wdHMgPSB7fSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyRGF0ZVRpbWUuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZCgnY3JlYXRlZCBieSBkaWZmaW5nIGFuIGludmFsaWQgRGF0ZVRpbWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkdXJPcHRzID0geyBsb2NhbGU6IHRoaXMubG9jYWxlLCBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLCAuLi5vcHRzIH07XHJcblxyXG4gICAgY29uc3QgdW5pdHMgPSBtYXliZUFycmF5KHVuaXQpLm1hcChEdXJhdGlvbi5ub3JtYWxpemVVbml0KTtcclxuICAgIGNvbnN0IG90aGVySXNMYXRlciA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpID4gdGhpcy52YWx1ZU9mKCk7XHJcbiAgICBjb25zdCBlYXJsaWVyID0gb3RoZXJJc0xhdGVyID8gdGhpcyA6IG90aGVyRGF0ZVRpbWU7XHJcbiAgICBjb25zdCBsYXRlciA9IG90aGVySXNMYXRlciA/IG90aGVyRGF0ZVRpbWUgOiB0aGlzO1xyXG4gICAgY29uc3QgZGlmZmVkID0gZGlmZihlYXJsaWVyLCBsYXRlciwgdW5pdHMsIGR1ck9wdHMpO1xyXG5cclxuICAgIHJldHVybiBvdGhlcklzTGF0ZXIgPyBkaWZmZWQubmVnYXRlKCkgOiBkaWZmZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhpcyBEYXRlVGltZSBhbmQgcmlnaHQgbm93LlxyXG4gICAgKiBTZWUge0BsaW5rIERhdGVUaW1lI2RpZmZ9XHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIHVuaXRzIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvblxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIGRpZmZOb3codW5pdCA9ICdtaWxsaXNlY29uZHMnLCBvcHRzID0ge30pIHtcclxuICAgIHJldHVybiB0aGlzLmRpZmYoRGF0ZVRpbWUubm93KCksIHVuaXQsIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiBhbiBJbnRlcnZhbCBzcGFubmluZyBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIGFub3RoZXIgRGF0ZVRpbWVcclxuICAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBlbmQgcG9pbnQgb2YgdGhlIEludGVydmFsXHJcbiAgICAqIEByZXR1cm4ge0ludGVydmFsfVxyXG4gICAgKi9cclxuICB1bnRpbChvdGhlckRhdGVUaW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyh0aGlzLCBvdGhlckRhdGVUaW1lKSA6IHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBEYXRlVGltZSBpcyBpbiB0aGUgc2FtZSB1bml0IG9mIHRpbWUgYXMgYW5vdGhlciBEYXRlVGltZS5cclxuICAgICogSGlnaGVyLW9yZGVyIHVuaXRzIG11c3QgYWxzbyBiZSBpZGVudGljYWwgZm9yIHRoaXMgZnVuY3Rpb24gdG8gcmV0dXJuIGB0cnVlYC5cclxuICAgICogTm90ZSB0aGF0IHRpbWUgem9uZXMgYXJlICoqaWdub3JlZCoqIGluIHRoaXMgY29tcGFyaXNvbiwgd2hpY2ggY29tcGFyZXMgdGhlICoqbG9jYWwqKiBjYWxlbmRhciB0aW1lLiBVc2Uge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9IHRvIGNvbnZlcnQgb25lIG9mIHRoZSBkYXRlcyBpZiBuZWVkZWQuXHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgb3RoZXIgRGF0ZVRpbWVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNoZWNrIHNhbWVuZXNzIG9uXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLmhhc1NhbWUob3RoZXJEVCwgJ2RheScpOyAvL34+IHRydWUgaWYgb3RoZXJEVCBpcyBpbiB0aGUgc2FtZSBjdXJyZW50IGNhbGVuZGFyIGRheVxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBoYXNTYW1lKG90aGVyRGF0ZVRpbWUsIHVuaXQpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgaW5wdXRNcyA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpO1xyXG4gICAgY29uc3QgYWRqdXN0ZWRUb1pvbmUgPSB0aGlzLnNldFpvbmUob3RoZXJEYXRlVGltZS56b25lLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSk7XHJcbiAgICByZXR1cm4gYWRqdXN0ZWRUb1pvbmUuc3RhcnRPZih1bml0KSA8PSBpbnB1dE1zICYmIGlucHV0TXMgPD0gYWRqdXN0ZWRUb1pvbmUuZW5kT2YodW5pdCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogRXF1YWxpdHkgY2hlY2tcclxuICAgICogVHdvIERhdGVUaW1lcyBhcmUgZXF1YWwgaWZmIHRoZXkgcmVwcmVzZW50IHRoZSBzYW1lIG1pbGxpc2Vjb25kLCBoYXZlIHRoZSBzYW1lIHpvbmUgYW5kIGxvY2F0aW9uLCBhbmQgYXJlIGJvdGggdmFsaWQuXHJcbiAgICAqIFRvIGNvbXBhcmUganVzdCB0aGUgbWlsbGlzZWNvbmQgdmFsdWVzLCB1c2UgYCtkdDEgPT09ICtkdDJgLlxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlciAtIHRoZSBvdGhlciBEYXRlVGltZVxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBlcXVhbHMob3RoZXIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNWYWxpZFxyXG4gICAgICAgJiYgb3RoZXIuaXNWYWxpZFxyXG4gICAgICAgJiYgdGhpcy52YWx1ZU9mKCkgPT09IG90aGVyLnZhbHVlT2YoKVxyXG4gICAgICAgJiYgdGhpcy56b25lLmVxdWFscyhvdGhlci56b25lKVxyXG4gICAgICAgJiYgdGhpcy5sb2MuZXF1YWxzKG90aGVyLmxvYylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHRoaXMgdGltZSByZWxhdGl2ZSB0byBub3csIHN1Y2ggYXMgXCJpbiB0d28gZGF5c1wiLiBDYW4gb25seSBpbnRlcm5hdGlvbmFsaXplIGlmIHlvdXJcclxuICAgICogcGxhdGZvcm0gc3VwcG9ydHMgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQuIFJvdW5kcyBkb3duIGJ5IGRlZmF1bHQuXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgb3V0cHV0XHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IFtvcHRpb25zLmJhc2U9RGF0ZVRpbWUubm93KCldIC0gdGhlIERhdGVUaW1lIHRvIHVzZSBhcyB0aGUgYmFzaXMgdG8gd2hpY2ggdGhpcyB0aW1lIGlzIGNvbXBhcmVkLiBEZWZhdWx0cyB0byBub3cuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zdHlsZT1cImxvbmdcIl0gLSB0aGUgc3R5bGUgb2YgdW5pdHMsIG11c3QgYmUgXCJsb25nXCIsIFwic2hvcnRcIiwgb3IgXCJuYXJyb3dcIlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gb3B0aW9ucy51bml0IC0gdXNlIGEgc3BlY2lmaWMgdW5pdCBvciBhcnJheSBvZiB1bml0czsgaWYgb21pdHRlZCwgb3IgYW4gYXJyYXksIHRoZSBtZXRob2Qgd2lsbCBwaWNrIHRoZSBiZXN0IHVuaXQuIFVzZSBhbiBhcnJheSBvciBvbmUgb2YgXCJ5ZWFyc1wiLCBcInF1YXJ0ZXJzXCIsIFwibW9udGhzXCIsIFwid2Vla3NcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIG9yIFwic2Vjb25kc1wiXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucm91bmQ9dHJ1ZV0gLSB3aGV0aGVyIHRvIHJvdW5kIHRoZSBudW1iZXJzIGluIHRoZSBvdXRwdXQuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5wYWRkaW5nPTBdIC0gcGFkZGluZyBpbiBtaWxsaXNlY29uZHMuIFRoaXMgYWxsb3dzIHlvdSB0byByb3VuZCB1cCB0aGUgcmVzdWx0IGlmIGl0IGZpdHMgaW5zaWRlIHRoZSB0aHJlc2hvbGQuIERvbid0IHVzZSBpbiBjb21iaW5hdGlvbiB3aXRoIHtyb3VuZDogZmFsc2V9IGJlY2F1c2UgdGhlIGRlY2ltYWwgb3V0cHV0IHdpbGwgaW5jbHVkZSB0aGUgcGFkZGluZy5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubG9jYWxlIC0gb3ZlcnJpZGUgdGhlIGxvY2FsZSBvZiB0aGlzIERhdGVUaW1lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIG92ZXJyaWRlIHRoZSBudW1iZXJpbmdTeXN0ZW0gb2YgdGhpcyBEYXRlVGltZS4gVGhlIEludGwgc3lzdGVtIG1heSBjaG9vc2Ugbm90IHRvIGhvbm9yIHRoaXNcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCJpbiAxIGRheVwiXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZShcImVzXCIpLnRvUmVsYXRpdmUoeyBkYXlzOiAxIH0pIC8vPT4gXCJkZW50cm8gZGUgMSBkw61hXCJcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSh7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gXCJkYW5zIDIzIGhldXJlc1wiXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlKCkgLy89PiBcIjIgZGF5cyBhZ29cIlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZSh7IHVuaXQ6IFwiaG91cnNcIiB9KSAvLz0+IFwiNDggaG91cnMgYWdvXCJcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBob3VyczogMzYgfSkudG9SZWxhdGl2ZSh7IHJvdW5kOiBmYWxzZSB9KSAvLz0+IFwiMS41IGRheXMgYWdvXCJcclxuICAgICovXHJcbiAgdG9SZWxhdGl2ZShvcHRpb25zID0ge30pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IGJhc2UgPSBvcHRpb25zLmJhc2UgfHwgRGF0ZVRpbWUuZnJvbU9iamVjdCh7fSwgeyB6b25lOiB0aGlzLnpvbmUgfSk7XHJcbiAgICBjb25zdCBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nID8gKHRoaXMgPCBiYXNlID8gLW9wdGlvbnMucGFkZGluZyA6IG9wdGlvbnMucGFkZGluZykgOiAwO1xyXG4gICAgbGV0IHVuaXRzID0gWyd5ZWFycycsICdtb250aHMnLCAnZGF5cycsICdob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnXTtcclxuICAgIGxldCB7IHVuaXQgfSA9IG9wdGlvbnM7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnVuaXQpKSB7XHJcbiAgICAgIHVuaXRzID0gb3B0aW9ucy51bml0O1xyXG4gICAgICB1bml0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpZmZSZWxhdGl2ZShiYXNlLCB0aGlzLnBsdXMocGFkZGluZyksIHtcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgbnVtZXJpYzogJ2Fsd2F5cycsXHJcbiAgICAgIHVuaXRzLFxyXG4gICAgICB1bml0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIGRhdGUgcmVsYXRpdmUgdG8gdG9kYXksIHN1Y2ggYXMgXCJ5ZXN0ZXJkYXlcIiBvciBcIm5leHQgbW9udGhcIi5cclxuICAgICogT25seSBpbnRlcm5hdGlvbmFsaXplcyBvbiBwbGF0Zm9ybXMgdGhhdCBzdXBwb3J0cyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdC5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBvdXRwdXRcclxuICAgICogQHBhcmFtIHtEYXRlVGltZX0gW29wdGlvbnMuYmFzZT1EYXRlVGltZS5ub3coKV0gLSB0aGUgRGF0ZVRpbWUgdG8gdXNlIGFzIHRoZSBiYXNpcyB0byB3aGljaCB0aGlzIHRpbWUgaXMgY29tcGFyZWQuIERlZmF1bHRzIHRvIG5vdy5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubG9jYWxlIC0gb3ZlcnJpZGUgdGhlIGxvY2FsZSBvZiB0aGlzIERhdGVUaW1lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnVuaXQgLSB1c2UgYSBzcGVjaWZpYyB1bml0OyBpZiBvbWl0dGVkLCB0aGUgbWV0aG9kIHdpbGwgcGljayB0aGUgdW5pdC4gVXNlIG9uZSBvZiBcInllYXJzXCIsIFwicXVhcnRlcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBvciBcImRheXNcIlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSBvdmVycmlkZSB0aGUgbnVtYmVyaW5nU3lzdGVtIG9mIHRoaXMgRGF0ZVRpbWUuIFRoZSBJbnRsIHN5c3RlbSBtYXkgY2hvb3NlIG5vdCB0byBob25vciB0aGlzXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmVDYWxlbmRhcigpIC8vPT4gXCJ0b21vcnJvd1wiXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZShcImVzXCIpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiXCJtYcOxYW5hXCJcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKHsgbG9jYWxlOiBcImZyXCIgfSkgLy89PiBcImRlbWFpblwiXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoKSAvLz0+IFwiMiBkYXlzIGFnb1wiXHJcbiAgICAqL1xyXG4gIHRvUmVsYXRpdmVDYWxlbmRhcihvcHRpb25zID0ge30pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gZGlmZlJlbGF0aXZlKG9wdGlvbnMuYmFzZSB8fCBEYXRlVGltZS5mcm9tT2JqZWN0KHt9LCB7IHpvbmU6IHRoaXMuem9uZSB9KSwgdGhpcywge1xyXG4gICAgICAuLi5vcHRpb25zLFxyXG4gICAgICBudW1lcmljOiAnYXV0bycsXHJcbiAgICAgIHVuaXRzOiBbJ3llYXJzJywgJ21vbnRocycsICdkYXlzJ10sXHJcbiAgICAgIGNhbGVuZGFyeTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB0aGUgbWluIG9mIHNldmVyYWwgZGF0ZSB0aW1lc1xyXG4gICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgRGF0ZVRpbWVzIGZyb20gd2hpY2ggdG8gY2hvb3NlIHRoZSBtaW5pbXVtXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfSB0aGUgbWluIERhdGVUaW1lLCBvciB1bmRlZmluZWQgaWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnRcclxuICAgICovXHJcbiAgc3RhdGljIG1pbiguLi5kYXRlVGltZXMpIHtcclxuICAgIGlmICghZGF0ZVRpbWVzLmV2ZXJ5KERhdGVUaW1lLmlzRGF0ZVRpbWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcignbWluIHJlcXVpcmVzIGFsbCBhcmd1bWVudHMgYmUgRGF0ZVRpbWVzJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmVzdEJ5KGRhdGVUaW1lcywgKGkpID0+IGkudmFsdWVPZigpLCBNYXRoLm1pbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHRoZSBtYXggb2Ygc2V2ZXJhbCBkYXRlIHRpbWVzXHJcbiAgICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSBEYXRlVGltZXMgZnJvbSB3aGljaCB0byBjaG9vc2UgdGhlIG1heGltdW1cclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9IHRoZSBtYXggRGF0ZVRpbWUsIG9yIHVuZGVmaW5lZCBpZiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudFxyXG4gICAgKi9cclxuICBzdGF0aWMgbWF4KC4uLmRhdGVUaW1lcykge1xyXG4gICAgaWYgKCFkYXRlVGltZXMuZXZlcnkoRGF0ZVRpbWUuaXNEYXRlVGltZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCdtYXggcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXMnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCAoaSkgPT4gaS52YWx1ZU9mKCksIE1hdGgubWF4KTtcclxuICB9XHJcblxyXG4gIC8vIE1JU0NcclxuXHJcbiAgLyoqXHJcbiAgICAqIEV4cGxhaW4gaG93IGEgc3RyaW5nIHdvdWxkIGJlIHBhcnNlZCBieSBmcm9tRm9ybWF0KClcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHRoZSBzdHJpbmcgaXMgZXhwZWN0ZWQgdG8gYmUgaW4gKHNlZSBkZXNjcmlwdGlvbilcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRha2VuIGJ5IGZyb21Gb3JtYXQoKVxyXG4gICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgY29uc3QgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsIH0gPSBvcHRpb25zO1xyXG4gICAgY29uc3QgbG9jYWxlVG9Vc2UgPSBMb2NhbGUuZnJvbU9wdHMoe1xyXG4gICAgICBsb2NhbGUsXHJcbiAgICAgIG51bWJlcmluZ1N5c3RlbSxcclxuICAgICAgZGVmYXVsdFRvRU46IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBleHBsYWluRnJvbVRva2Vucyhsb2NhbGVUb1VzZSwgdGV4dCwgZm10KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdEV4cGxhaW4gaW5zdGVhZFxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbVN0cmluZ0V4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zID0ge30pIHtcclxuICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLy8gRk9STUFUIFBSRVNFVFNcclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgMTAvMTQvMTk4M1xyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVfU0hPUlQoKSB7XHJcbiAgICByZXR1cm4gREFURV9TSE9SVDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMnXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURV9NRUQoKSB7XHJcbiAgICByZXR1cm4gREFURV9NRUQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpLCBPY3QgMTQsIDE5ODMnXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURV9NRURfV0lUSF9XRUVLREFZKCkge1xyXG4gICAgcmV0dXJuIERBVEVfTUVEX1dJVEhfV0VFS0RBWTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzJ1xyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVfRlVMTCgpIHtcclxuICAgIHJldHVybiBEQVRFX0ZVTEw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnVHVlc2RheSwgT2N0b2JlciAxNCwgMTk4MydcclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFX0hVR0UoKSB7XHJcbiAgICByZXR1cm4gREFURV9IVUdFO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgVElNRV9TSU1QTEUoKSB7XHJcbiAgICByZXR1cm4gVElNRV9TSU1QTEU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBUSU1FX1dJVEhfU0VDT05EUygpIHtcclxuICAgIHJldHVybiBUSU1FX1dJVEhfU0VDT05EUztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUKCkge1xyXG4gICAgcmV0dXJuIFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgVElNRV9XSVRIX0xPTkdfT0ZGU0VUKCkge1xyXG4gICAgcmV0dXJuIFRJTUVfV0lUSF9MT05HX09GRlNFVDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMCcsIGFsd2F5cyAyNC1ob3VyLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IFRJTUVfMjRfU0lNUExFKCkge1xyXG4gICAgcmV0dXJuIFRJTUVfMjRfU0lNUExFO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzJywgYWx3YXlzIDI0LWhvdXIuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9XSVRIX1NFQ09ORFMoKSB7XHJcbiAgICByZXR1cm4gVElNRV8yNF9XSVRIX1NFQ09ORFM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgRURUJywgYWx3YXlzIDI0LWhvdXIuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCgpIHtcclxuICAgIHJldHVybiBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScsIGFsd2F5cyAyNC1ob3VyLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCgpIHtcclxuICAgIHJldHVybiBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVUSU1FX1NIT1JUKCkge1xyXG4gICAgcmV0dXJuIERBVEVUSU1FX1NIT1JUO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMoKSB7XHJcbiAgICByZXR1cm4gREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVUSU1FX01FRCgpIHtcclxuICAgIHJldHVybiBEQVRFVElNRV9NRUQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0IDE0LCAxOTgzLCA5OjMwOjMzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUygpIHtcclxuICAgIHJldHVybiBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaSwgMTQgT2N0IDE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZKCkge1xyXG4gICAgcmV0dXJuIERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFVElNRV9GVUxMKCkge1xyXG4gICAgcmV0dXJuIERBVEVUSU1FX0ZVTEw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MywgOTozMDozMyBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUygpIHtcclxuICAgIHJldHVybiBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmlkYXksIE9jdG9iZXIgMTQsIDE5ODMsIDk6MzAgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfSFVHRSgpIHtcclxuICAgIHJldHVybiBEQVRFVElNRV9IVUdFO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMDozMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUygpIHtcclxuICAgIHJldHVybiBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5mdW5jdGlvbiBmcmllbmRseURhdGVUaW1lKGRhdGVUaW1laXNoKSB7XHJcbiAgaWYgKERhdGVUaW1lLmlzRGF0ZVRpbWUoZGF0ZVRpbWVpc2gpKSB7XHJcbiAgICByZXR1cm4gZGF0ZVRpbWVpc2g7XHJcbiAgfSBpZiAoZGF0ZVRpbWVpc2ggJiYgZGF0ZVRpbWVpc2gudmFsdWVPZiAmJiBpc051bWJlcihkYXRlVGltZWlzaC52YWx1ZU9mKCkpKSB7XHJcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUpTRGF0ZShkYXRlVGltZWlzaCk7XHJcbiAgfSBpZiAoZGF0ZVRpbWVpc2ggJiYgdHlwZW9mIGRhdGVUaW1laXNoID09PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21PYmplY3QoZGF0ZVRpbWVpc2gpO1xyXG4gIH1cclxuICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXHJcbiAgICBgVW5rbm93biBkYXRldGltZSBhcmd1bWVudDogJHtkYXRlVGltZWlzaH0sIG9mIHR5cGUgJHt0eXBlb2YgZGF0ZVRpbWVpc2h9YCxcclxuICApO1xyXG59XHJcblxyXG5jb25zdCBWRVJTSU9OID0gJzMuMC4xJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgRGF0ZVRpbWUsIER1cmF0aW9uLCBGaXhlZE9mZnNldFpvbmUsIElBTkFab25lLCBJbmZvLCBJbnRlcnZhbCwgSW52YWxpZFpvbmUsIFNldHRpbmdzLCBTeXN0ZW1ab25lLCBWRVJTSU9OLCBab25lLFxyXG59O1xyXG4vLyAjIHNvdXJjZU1hcHBpbmdVUkw9bHV4b24uanMubWFwXHJcbiIsImNsYXNzIFNjb3JlIHtcclxuICBjb25zdHJ1Y3Rvcih1c2VyLCBzY29yZSkge1xyXG4gICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjb3JlOyIsImNsYXNzIFNjb3JlTGlzdCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmxpc3QgPSBbXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjb3JlTGlzdDsiLCJpbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJy4vbHV4b24uanMnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9zY29yZS5qcyc7XHJcbmltcG9ydCBTY29yZUxpc3QgZnJvbSAnLi9zY29yZWxpc3QuanMnO1xyXG5cclxuLy8gKioqKioqKioqKkdMT0JBTCBWQVJJQUJMRVMqKioqKioqKioqLy9cclxuY29uc3Qgc2NvcmVMaXN0ID0gbmV3IFNjb3JlTGlzdCgpO1xyXG5cclxuLy8gKioqKioqKioqKkRhdGUgRGlzcGxheSBGdW5jdGlvbioqKioqKioqKiovL1xyXG5jb25zdCBkaXNwbGF5RGF0ZSA9ICgpID0+IHtcclxuICBjb25zdCBtYWluRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluX2RhdGUnKTtcclxuICBtYWluRGF0ZS5pbm5lclRleHQgPSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMpO1xyXG59O1xyXG5cclxuLy8gKioqKioqKioqKlNjb3JlcyBBUEktRmV0Y2ggRnVuY3Rpb24qKioqKioqKioqLy9cclxuY29uc3QgZmV0Y2hTY29yZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvR1Zka3p6NU5BSWdzMEdJMVd3Sncvc2NvcmVzLycpO1xyXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8ganNvbi5yZXN1bHQgPT4gYSBsaXN0IG9mIHNjb3Jlc1xyXG4gIHJldHVybiBqc29uLnJlc3VsdDtcclxufTtcclxuXHJcbi8vICoqKioqKioqKipTY29yZSBSZW5kZXIgRnVuY3Rpb24qKioqKioqKioqLy9cclxuY29uc3QgcmVuZGVyU2NvcmUgPSBhc3luYyAob2JqKSA9PiB7XHJcbiAgY29uc3Qgc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2NvcmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Njb3JlLWl0ZW0nKTtcclxuICBzY29yZUVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NvcmUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxoMz4ke29iai51c2VyfTogJHtvYmouc2NvcmV9PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICBgO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZXNfbGlzdCcpLmFwcGVuZENoaWxkKHNjb3JlRWxlbWVudCk7XHJcbn07XHJcblxyXG4vLyAqKioqKioqKioqU2NvcmVzIFJlZnJlc2ggRnVuY3Rpb24qKioqKioqKioqLy9cclxuY29uc3QgcmVmcmVzaFNjb3JlcyA9IGFzeW5jICgpID0+IHtcclxuICBzY29yZUxpc3QubGlzdCA9IGF3YWl0IGZldGNoU2NvcmVzKCk7XHJcbiAgY29uc3Qgc2NvcmVzTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmVzX2xpc3QnKTtcclxuICBzY29yZXNMaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICBzY29yZUxpc3QubGlzdC5mb3JFYWNoKChvYmopID0+IHJlbmRlclNjb3JlKG9iaikpO1xyXG59O1xyXG5cclxuLy8gKioqKioqKioqKlNjb3JlIEFkZEZ1bmN0aW9uKioqKioqKioqKi8vXHJcbmNvbnN0IGFkZFNjb3JlID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZV9maWVsZCcpLnZhbHVlO1xyXG4gIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlX2ZpZWxkJykudmFsdWU7XHJcbiAgaWYgKHVzZXIgPT09ICcnIHx8IHNjb3JlID09PSAnJykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFJlc2V0dGluZyB0aGUgaW5wdXQgZmllbGRzXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZV9maWVsZCcpLnZhbHVlID0gJyc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmVfZmllbGQnKS52YWx1ZSA9ICcnO1xyXG4gICAgLy8gQ3JlYXRpbmcgYSBuZXcgc2NvcmUgb2JqZWN0ICYgYWRkaW5nIGl0IHRvIHRoZSBsaXN0IG9mIHNjb3Jlc1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvR1Zka3p6NU5BSWdzMEdJMVd3Sncvc2NvcmVzLycsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ldyBTY29yZSh1c2VyLCBzY29yZSkpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gUmVmcmVzaGluZyBzY29yZXMgbGlzdCBpbiB0aGUgRE9NXHJcbiAgICByZWZyZXNoU2NvcmVzKCk7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBkaXNwbGF5RGF0ZSwgYWRkU2NvcmUsIHJlZnJlc2hTY29yZXMsXHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9