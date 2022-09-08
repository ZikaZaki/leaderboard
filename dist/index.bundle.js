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
___CSS_LOADER_EXPORT___.push([module.id, "/* Importing the \"normalize.css\" file which is for resetting all the default css values */\r\n\r\n/* Importing Fonts */\r\n\r\n/* ******Main & Secondary Colors****** */\r\n:root {\r\n  --bg_color: #fff;\r\n  --primary: #2c3e50;\r\n  --primary_light: #34495e;\r\n  --secondary: #ec5242;\r\n  --neutral: #d3d3d3;\r\n  --verdana: verdana, tahoma, sans-serif;\r\n  --Tahoma: tahoma, verdana, sans-serif;\r\n  --sans-serif: sans-serif, verdana, tahoma;\r\n  --open-sans: \"Open Sans\", sans-serif;\r\n}\r\n\r\n/* **********Global Classes********** */\r\n.container {\r\n  font-family: var(--open-sans);\r\n  font-style: normal;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.underline {\r\n  height: 2.5px;\r\n  background-color: var(--primary);\r\n}\r\n\r\n.title h1,\r\nh2,\r\nh3 {\r\n  margin: 0;\r\n}\r\n\r\n/* ======================================Header Start====================================== */\r\n.header {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: var(--primary);\r\n  width: 100%;\r\n  height: 5rem;\r\n  padding: 5px 45px;\r\n  margin: 0;\r\n}\r\n\r\n.header-logo img {\r\n  width: 180px;\r\n  height: 71px;\r\n}\r\n\r\n.desktop-menu nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  background-color: var(--primary_light);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);\r\n  width: 100%;\r\n  height: 50px;\r\n  position: relative;\r\n}\r\n\r\n.desktop-menu nav a {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  line-height: 50px;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: var(--neutral);\r\n  width: 100px;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\nnav .animation {\r\n  position: absolute;\r\n  background: #1abc9c;\r\n  border-radius: 8px;\r\n  top: 0;\r\n  height: 100%;\r\n  z-index: 0;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\nnav a:nth-child(1) {\r\n  width: 120px;\r\n}\r\n\r\nnav .start-home,\r\na:nth-child(1):hover ~ .animation {\r\n  width: 120px;\r\n  left: 0;\r\n}\r\n\r\nnav a:nth-child(2) {\r\n  width: 100px;\r\n}\r\n\r\nnav .start-contact,\r\na:nth-child(2):hover ~ .animation {\r\n  width: 100px;\r\n  left: 120px;\r\n}\r\n\r\nnav a:nth-child(3) {\r\n  width: 100px;\r\n}\r\n\r\nnav .start-about,\r\na:nth-child(3):hover ~ .animation {\r\n  width: 100px;\r\n  left: 220px;\r\n}\r\n\r\n/* =======================================Header End======================================= */\r\n\r\n/* ======================================Navigation Start==================================== */\r\n.navigation {\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: var(--primary);\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n/* =======================================Navigation End===================================== */\r\n\r\n/* =====================================Main-Wrapper Start=================================== */\r\n.main-wrapper {\r\n  padding-top: 6rem; /* change to 5rem */\r\n  min-height: 30rem;\r\n  width: 100%;\r\n}\r\n\r\n.main-date {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  color: var(--primary);\r\n  padding: 5px 45px;\r\n  width: 100%;\r\n}\r\n\r\n.main-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 35px;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 35px 65px;\r\n  margin: 0;\r\n}\r\n\r\n/* ======================================Main-Wrapper End==================================== */\r\n\r\n/* =============================Scores-Collection-Section Start============================= */\r\n.title-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.scores-collection {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: var(--bg_color);\r\n}\r\n\r\n.scores-collection .title {\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.scores-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 4px solid var(--primary);\r\n  width: 100%;\r\n}\r\n\r\n.score-item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-align: justify;\r\n  flex-wrap: wrap;\r\n  background-color: var(--bg_color);\r\n  width: 100%;\r\n  padding: 10px 15px;\r\n}\r\n\r\n.score-item:nth-child(odd) {\r\n  background-color: var(--neutral);\r\n}\r\n\r\n.score-info {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.score-info h2,\r\nh3 {\r\n  margin: 0;\r\n}\r\n\r\n/* ==============================Scores-Collection-Section End============================== */\r\n\r\n/* ================================Scores-Form-Section Start================================ */\r\n.scores-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  width: auto;\r\n  gap: 15px;\r\n  background-color: var(--bg_color);\r\n  height: auto;\r\n  margin: 0;\r\n}\r\n\r\n.scores-form .title {\r\n  font-size: 1.2em;\r\n  padding: 10px;\r\n}\r\n\r\n.form-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 2px solid var(--primary);\r\n  background-color: var(--neutral);\r\n  list-style: none;\r\n  gap: 25px;\r\n  border-radius: 16px;\r\n  width: 100%;\r\n  padding: 35px 15px;\r\n  margin: 0;\r\n}\r\n\r\n.form-list li input {\r\n  border: 2px solid var(--primary);\r\n  border-radius: 8px;\r\n  width: 100%;\r\n  height: 2rem;\r\n}\r\n\r\n.normal-btn {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  box-shadow: 3px 3px;\r\n  border-radius: 8px;\r\n  border: 2px solid var(--primary);\r\n  min-width: 45px;\r\n  min-height: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.normal-btn:hover {\r\n  background-color: var(--primary);\r\n  color: var(--bg_color);\r\n}\r\n\r\n/* =================================Scores-Form-Section End================================= */\r\n\r\n/* =================================Contact-Section Start================================= */\r\n.contact-us {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  background-color: var(--bg_color);\r\n  padding: 20px 65px;\r\n}\r\n\r\n.contact-us .title {\r\n  font-size: 1.3em;\r\n  text-align: center;\r\n  padding: 15px;\r\n}\r\n\r\n.contact-info {\r\n  font-weight: bold;\r\n  line-height: 1.5em;\r\n  text-align: justify;\r\n}\r\n\r\n.contact-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  gap: 15px;\r\n  width: 100%;\r\n}\r\n\r\n/* ==================================Contact-Section End================================== */\r\n\r\n/* ==================================Footer-Section Start================================== */\r\nfooter {\r\n  font-family: var(--open-sans);\r\n  font-weight: bold;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: var(--primary);\r\n  min-height: auto;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 35px 65px;\r\n}\r\n\r\nfooter .social-icons,\r\nfooter .menu {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 10px 0;\r\n  width: 100%;\r\n}\r\n\r\nfooter .social-icons li,\r\nfooter .menu li {\r\n  list-style: none;\r\n}\r\n\r\nfooter .social-icons li a {\r\n  display: inline-block;\r\n  font-size: 2em;\r\n  color: var(--neutral);\r\n  margin: 0 10px;\r\n  transition: 0.5s;\r\n  opacity: 0.75;\r\n}\r\n\r\nfooter .menu li a {\r\n  font-size: 1.2em;\r\n  color: var(--neutral);\r\n  margin: 0 10px;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  opacity: 0.75;\r\n}\r\n\r\nfooter .social-icons li a:hover {\r\n  transform: translateY(-10px);\r\n  opacity: 1;\r\n}\r\n\r\nfooter .menu li a:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.footer-logo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  color: var(--neutral);\r\n  gap: 5px;\r\n}\r\n\r\n.footer-logo img {\r\n  width: 180px;\r\n  height: 71px;\r\n}\r\n\r\n/* ===================================Footer-Section End=================================== */\r\n\r\n/* ====================================Media Query Start==================================== */\r\n\r\n/*******  First Breakpoint  *******/\r\n@media screen\r\n  and (min-width: 586px) {\r\n  .form-list li input {\r\n    min-width: 15rem;\r\n    width: 25rem;\r\n    height: 2.5rem;\r\n  }\r\n}\r\n\r\n/*******  Second Breakpoint  *******/\r\n@media screen\r\n  and (min-width: 768px) {\r\n  .main-content {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    flex-wrap: nowrap;\r\n    padding: 35px 65px;\r\n  }\r\n}\r\n\r\n/* =====================================Media Query End===================================== */\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Importing the \"normalize.css\" file which is for resetting all the default css values */\r\n@import url(\"./normalize.css\");\r\n\r\n/* Importing Fonts */\r\n@import url('https://fonts.googleapis.com/css?family=Open+Sans');\r\n\r\n/* ******Main & Secondary Colors****** */\r\n:root {\r\n  --bg_color: #fff;\r\n  --primary: #2c3e50;\r\n  --primary_light: #34495e;\r\n  --secondary: #ec5242;\r\n  --neutral: #d3d3d3;\r\n  --verdana: verdana, tahoma, sans-serif;\r\n  --Tahoma: tahoma, verdana, sans-serif;\r\n  --sans-serif: sans-serif, verdana, tahoma;\r\n  --open-sans: \"Open Sans\", sans-serif;\r\n}\r\n\r\n/* **********Global Classes********** */\r\n.container {\r\n  font-family: var(--open-sans);\r\n  font-style: normal;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.underline {\r\n  height: 2.5px;\r\n  background-color: var(--primary);\r\n}\r\n\r\n.title h1,\r\nh2,\r\nh3 {\r\n  margin: 0;\r\n}\r\n\r\n/* ======================================Header Start====================================== */\r\n.header {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: var(--primary);\r\n  width: 100%;\r\n  height: 5rem;\r\n  padding: 5px 45px;\r\n  margin: 0;\r\n}\r\n\r\n.header-logo img {\r\n  width: 180px;\r\n  height: 71px;\r\n}\r\n\r\n.desktop-menu nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  background-color: var(--primary_light);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);\r\n  width: 100%;\r\n  height: 50px;\r\n  position: relative;\r\n}\r\n\r\n.desktop-menu nav a {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  line-height: 50px;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: var(--neutral);\r\n  width: 100px;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\nnav .animation {\r\n  position: absolute;\r\n  background: #1abc9c;\r\n  border-radius: 8px;\r\n  top: 0;\r\n  height: 100%;\r\n  z-index: 0;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\nnav a:nth-child(1) {\r\n  width: 120px;\r\n}\r\n\r\nnav .start-home,\r\na:nth-child(1):hover ~ .animation {\r\n  width: 120px;\r\n  left: 0;\r\n}\r\n\r\nnav a:nth-child(2) {\r\n  width: 100px;\r\n}\r\n\r\nnav .start-contact,\r\na:nth-child(2):hover ~ .animation {\r\n  width: 100px;\r\n  left: 120px;\r\n}\r\n\r\nnav a:nth-child(3) {\r\n  width: 100px;\r\n}\r\n\r\nnav .start-about,\r\na:nth-child(3):hover ~ .animation {\r\n  width: 100px;\r\n  left: 220px;\r\n}\r\n\r\n/* =======================================Header End======================================= */\r\n\r\n/* ======================================Navigation Start==================================== */\r\n.navigation {\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: var(--primary);\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n/* =======================================Navigation End===================================== */\r\n\r\n/* =====================================Main-Wrapper Start=================================== */\r\n.main-wrapper {\r\n  padding-top: 6rem; /* change to 5rem */\r\n  min-height: 30rem;\r\n  width: 100%;\r\n}\r\n\r\n.main-date {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  color: var(--primary);\r\n  padding: 5px 45px;\r\n  width: 100%;\r\n}\r\n\r\n.main-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 35px;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 35px 65px;\r\n  margin: 0;\r\n}\r\n\r\n/* ======================================Main-Wrapper End==================================== */\r\n\r\n/* =============================Scores-Collection-Section Start============================= */\r\n.title-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.scores-collection {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: var(--bg_color);\r\n}\r\n\r\n.scores-collection .title {\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.scores-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 4px solid var(--primary);\r\n  width: 100%;\r\n}\r\n\r\n.score-item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-align: justify;\r\n  flex-wrap: wrap;\r\n  background-color: var(--bg_color);\r\n  width: 100%;\r\n  padding: 10px 15px;\r\n}\r\n\r\n.score-item:nth-child(odd) {\r\n  background-color: var(--neutral);\r\n}\r\n\r\n.score-info {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.score-info h2,\r\nh3 {\r\n  margin: 0;\r\n}\r\n\r\n/* ==============================Scores-Collection-Section End============================== */\r\n\r\n/* ================================Scores-Form-Section Start================================ */\r\n.scores-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  width: auto;\r\n  gap: 15px;\r\n  background-color: var(--bg_color);\r\n  height: auto;\r\n  margin: 0;\r\n}\r\n\r\n.scores-form .title {\r\n  font-size: 1.2em;\r\n  padding: 10px;\r\n}\r\n\r\n.form-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 2px solid var(--primary);\r\n  background-color: var(--neutral);\r\n  list-style: none;\r\n  gap: 25px;\r\n  border-radius: 16px;\r\n  width: 100%;\r\n  padding: 35px 15px;\r\n  margin: 0;\r\n}\r\n\r\n.form-list li input {\r\n  border: 2px solid var(--primary);\r\n  border-radius: 8px;\r\n  width: 100%;\r\n  height: 2rem;\r\n}\r\n\r\n.normal-btn {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  box-shadow: 3px 3px;\r\n  border-radius: 8px;\r\n  border: 2px solid var(--primary);\r\n  min-width: 45px;\r\n  min-height: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.normal-btn:hover {\r\n  background-color: var(--primary);\r\n  color: var(--bg_color);\r\n}\r\n\r\n/* =================================Scores-Form-Section End================================= */\r\n\r\n/* =================================Contact-Section Start================================= */\r\n.contact-us {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  background-color: var(--bg_color);\r\n  padding: 20px 65px;\r\n}\r\n\r\n.contact-us .title {\r\n  font-size: 1.3em;\r\n  text-align: center;\r\n  padding: 15px;\r\n}\r\n\r\n.contact-info {\r\n  font-weight: bold;\r\n  line-height: 1.5em;\r\n  text-align: justify;\r\n}\r\n\r\n.contact-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  gap: 15px;\r\n  width: 100%;\r\n}\r\n\r\n/* ==================================Contact-Section End================================== */\r\n\r\n/* ==================================Footer-Section Start================================== */\r\nfooter {\r\n  font-family: var(--open-sans);\r\n  font-weight: bold;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: var(--primary);\r\n  min-height: auto;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 35px 65px;\r\n}\r\n\r\nfooter .social-icons,\r\nfooter .menu {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 10px 0;\r\n  width: 100%;\r\n}\r\n\r\nfooter .social-icons li,\r\nfooter .menu li {\r\n  list-style: none;\r\n}\r\n\r\nfooter .social-icons li a {\r\n  display: inline-block;\r\n  font-size: 2em;\r\n  color: var(--neutral);\r\n  margin: 0 10px;\r\n  transition: 0.5s;\r\n  opacity: 0.75;\r\n}\r\n\r\nfooter .menu li a {\r\n  font-size: 1.2em;\r\n  color: var(--neutral);\r\n  margin: 0 10px;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  opacity: 0.75;\r\n}\r\n\r\nfooter .social-icons li a:hover {\r\n  transform: translateY(-10px);\r\n  opacity: 1;\r\n}\r\n\r\nfooter .menu li a:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.footer-logo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  color: var(--neutral);\r\n  gap: 5px;\r\n}\r\n\r\n.footer-logo img {\r\n  width: 180px;\r\n  height: 71px;\r\n}\r\n\r\n/* ===================================Footer-Section End=================================== */\r\n\r\n/* ====================================Media Query Start==================================== */\r\n\r\n/*******  First Breakpoint  *******/\r\n@media screen\r\n  and (min-width: 586px) {\r\n  .form-list li input {\r\n    min-width: 15rem;\r\n    width: 25rem;\r\n    height: 2.5rem;\r\n  }\r\n}\r\n\r\n/*******  Second Breakpoint  *******/\r\n@media screen\r\n  and (min-width: 768px) {\r\n  .main-content {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    flex-wrap: nowrap;\r\n    padding: 35px 65px;\r\n  }\r\n}\r\n\r\n/* =====================================Media Query End===================================== */\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_score_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/score.js */ "./src/modules/score.js");
// import _ from 'lodash';





//* *********Global Variables************//
let scoreList = [];
const addScoreBtn = document.querySelector('#add_score_btn');
const refreshBtn = document.querySelector('#refresh_btn');

function removeScore() {
  const scoreElement = this.parentNode.parentNode;
  scoreList = scoreList.filter((obj) => obj.id !== parseInt(scoreElement.getAttribute('value'), 10));
  scoreElement.remove();
  localStorage.setItem('Scores-List', JSON.stringify(scoreList));
}

function renderScore(obj) {
  const scoreElement = document.createElement('div');
  scoreElement.classList.add('score-item');
  scoreElement.setAttribute('value', obj.id);
  scoreElement.innerHTML = `
            <div class="score-info">
              <h3>${obj.name}: ${obj.score}</h3>
            </div>  
            <div class="remove-btn">
              <button id="remove_score_btn" class="normal-btn" type="button">Remove</button>
            </div>
        `;
  // Set the event listener for the remove button
  scoreElement.querySelector('#remove_score_btn').addEventListener('click', removeScore);
  document.querySelector('#scores_list').appendChild(scoreElement);
}

function addScore() {
  const name = document.querySelector('#name_field');
  const score = document.querySelector('#score_field');
  if (name.value === '' || score.value === '') {
    throw new Error('Please fill in all fields');
  } else {
    const scoreObj = new _modules_score_js__WEBPACK_IMPORTED_MODULE_3__["default"](scoreList.length, score.value, name.value);
    scoreList.push(scoreObj);
    renderScore(scoreObj);
    name.value = '';
    score.value = '';
  }
  localStorage.setItem('Scores-List', JSON.stringify(scoreList));
}

addScoreBtn.addEventListener('click', addScore);

function refreshScores() {
  const scoresListElement = document.querySelector('#scores_list');
  scoresListElement.innerHTML = '';
  scoreList.forEach((obj) => renderScore(obj));
}

refreshBtn.addEventListener('click', refreshScores);

window.onload = () => {
  // Setting Header & Footer logos
  document.querySelector('#header_logo').src = _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_1__;
  document.querySelector('#footer_logo').src = _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_1__;
  // Setting the date
  (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  // Getting the scores from local storage
  scoreList = JSON.parse(localStorage.getItem('Scores-List')) || [];
  refreshScores();
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
  constructor(id, name, score) {
    this.id = id;
    this.name = name;
    this.score = score;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Score);

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _luxon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./luxon.js */ "./src/modules/luxon.js");


const displayDate = () => {
  const mainDate = document.getElementById('main_date');
  mainDate.innerText = _luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toLocaleString(_luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.DATETIME_MED_WITH_SECONDS);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayDate);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw0QkFBNEIsdUNBQXVDLGdDQUFnQywwQkFBMEIsMkJBQTJCLE9BQU8sS0FBSyxrSEFBa0gsd0ZBQXdGLGNBQWMsYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sYUFBYSxhQUFhLE1BQU0sd0JBQXdCLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sYUFBYSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxhQUFhLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxhQUFhLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1B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SztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSSxPQUFPLG9CQUFvQjtBQUNoRCxJQUFJO0FBQ0osaUJBQWlCLE1BQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLHFEQUFxRCxNQUFNO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLEtBQUssRUFBRSxtQkFBbUIsR0FBRyxxQkFBcUI7QUFDbEU7QUFDQSxnQkFBZ0IsS0FBSyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsUUFBUSxPQUFPO0FBQ2hFO0FBQ0EsZ0JBQWdCLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUI7QUFDakU7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixNQUFNLHNCQUFzQixNQUFNLG9CQUFvQixNQUFNO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxlQUFlO0FBQzNEO0FBQ0EsNkNBQTZDLGVBQWU7QUFDNUQ7QUFDQSx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVUsRUFBRSxTQUFTLGFBQWEsVUFBVSxFQUFFLFFBQVE7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsVUFBVSx3QkFBd0IsUUFBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNEJBQTRCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixlQUFlO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZCQUE2QjtBQUN6QztBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxVQUFVLGNBQWMsVUFBVTtBQUNwRjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMENBQTBDLElBQUk7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDLHlCQUF5QixVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix3QkFBd0IsNkJBQTZCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdDQUFnQyxJQUFJO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRix3QkFBd0I7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixLQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QyxPQUFPO0FBQ1AsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQW1CLFVBQVUsaUJBQWlCO0FBQzVFLGlFQUFpRSxLQUFLO0FBQ3RFLCtCQUErQix3QkFBd0IsRUFBRSxnQkFBZ0I7QUFDekUsNENBQTRDLG9CQUFvQjtBQUNoRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUU7QUFDckMsMEJBQTBCLEVBQUU7QUFDNUIsNkJBQTZCLEVBQUUsT0FBTyxFQUFFO0FBQ3hDO0FBQ0E7QUFDQSx5QkFBeUIsRUFBRSxrQkFBa0I7QUFDN0M7QUFDQSxLQUFLLHlCQUF5QixNQUFNLG1CQUFtQixJQUFJLGlCQUFpQjtBQUM1RTtBQUNBLDRDQUE0QyxvQkFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsd0JBQXdCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxLQUFLLFFBQVEsS0FBSyxlQUFlLEtBQUssUUFBUSxLQUFLLGVBQWUsS0FBSyxRQUFRLEtBQUssZUFBZSxLQUFLLFFBQVEsS0FBSyxtQkFBbUIsS0FBSyxRQUFRLEtBQUssZUFBZSxLQUFLLFFBQVEsS0FBSyxlQUFlLEtBQUssY0FBYyxLQUFLO0FBQ3ZRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsSUFBSSwwREFBMEQsSUFBSTtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4R0FBOEcsRUFBRTtBQUNoSDtBQUNBLG9JQUFvSSxFQUFFO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0EsVUFBVSxJQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdCQUF3QjtBQUN0QyxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsSUFBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFVBQVU7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTyxXQUFXLGFBQWEsU0FBUyxLQUFLO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdDQUFnQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxVQUFVLGFBQWE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtQkFBbUI7QUFDN0I7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUIsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFVBQVU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1DQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsS0FBSyx1QkFBdUIsT0FBTztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpREFBaUQsa0JBQWtCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZ0RBQWdELGtCQUFrQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLG1EQUFtRCxrQkFBa0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxrREFBa0Qsa0JBQWtCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtB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K0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtCQUErQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtCQUErQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtCQUErQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtCQUErQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtCQUErQjtBQUN0QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQkFBK0I7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFlBQVksWUFBWSxtQkFBbUI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7OztBQ2ozTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7O0FDUmtCOztBQUV0QztBQUNBO0FBQ0EsdUJBQXVCLHFEQUFjLGtCQUFrQix5RUFBa0M7QUFDekY7O0FBRUEsaUVBQWUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9sdXhvbi5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL3Njb3JlLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxyXFxuXFxyXFxuLyogRG9jdW1lbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVzZXR0aW5nIGFsbCBlbGVtZW50cycgZGVmYXVsdCBDU1NcXHJcXG4gICAqL1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbiAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZWN0aW9uc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmJvZHksXFxyXFxuYm9keTo6YmVmb3JlLFxcclxcbmJvZHk6OmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG5cXHJcXG4gIC8qIEJlbG93IExpbmVzIEFkZGVkIEJ5IE1lICovXFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXHJcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxyXFxufVxcclxcblxcclxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcclxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcclxcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxyXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYWJiclt0aXRsZV0ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXHJcXG4gICAqIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgZm9udC1zaXplOiA3NSU7XFxyXFxuICBsaW5lLWhlaWdodDogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuc3ViIHtcXHJcXG4gIGJvdHRvbTogLTAuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG4gIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm1zXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXHJcXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQgeyAvKiAxICovXFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXHJcXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3QgeyAvKiAxICovXFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXHJcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXHJcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcclxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcclxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXHJcXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXHJcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcclxcbiAgICovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcclxcbiAgICovXFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxyXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxyXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEludGVyYWN0aXZlXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcclxcbiAgICovXFxyXFxuXFxyXFxudGVtcGxhdGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7SUFFSTs7QUFFSjs7O0VBR0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0FBQzVCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKOzs7RUFHRSxTQUFTOztFQUVULDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QiwwQkFBMEI7QUFDNUI7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztJQUdJOztBQUVKO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztJQUVJOztBQUVKOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0lBR0k7O0FBRUo7OztFQUdFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7SUFHSTs7QUFFSjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztJQUdJOztBQUVKO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0lBS0k7O0FBRUo7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztJQUVJOztBQUVKOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0lBR0k7O0FBRUo7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztJQUdJOztBQUVKO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztJQUVJOztBQUVKO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXHJcXG5cXHJcXG4vKiBEb2N1bWVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZXNldHRpbmcgYWxsIGVsZW1lbnRzJyBkZWZhdWx0IENTU1xcclxcbiAgICovXFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcclxcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFNlY3Rpb25zXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYm9keSxcXHJcXG5ib2R5OjpiZWZvcmUsXFxyXFxuYm9keTo6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgLyogQmVsb3cgTGluZXMgQWRkZWQgQnkgTWUgKi9cXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXHJcXG4gICAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcclxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR3JvdXBpbmcgY29udGVudFxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxyXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gICAqL1xcclxcblxcclxcbmhyIHtcXHJcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxyXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnByZSB7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlOyAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbmEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXHJcXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5hYmJyW3RpdGxlXSB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcclxcbiAgICogYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICBmb250LXNpemU6IDc1JTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5vcHRncm91cCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcclxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7IC8qIDEgKi9cXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcclxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7IC8qIDEgKi9cXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcclxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcclxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxyXFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxyXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxyXFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcclxcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXHJcXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcclxcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5wcm9ncmVzcyB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXHJcXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXHJcXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogSW50ZXJhY3RpdmVcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLypcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxufVxcclxcblxcclxcbi8qIE1pc2NcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG50ZW1wbGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSW1wb3J0aW5nIHRoZSBcXFwibm9ybWFsaXplLmNzc1xcXCIgZmlsZSB3aGljaCBpcyBmb3IgcmVzZXR0aW5nIGFsbCB0aGUgZGVmYXVsdCBjc3MgdmFsdWVzICovXFxyXFxuXFxyXFxuLyogSW1wb3J0aW5nIEZvbnRzICovXFxyXFxuXFxyXFxuLyogKioqKioqTWFpbiAmIFNlY29uZGFyeSBDb2xvcnMqKioqKiogKi9cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJnX2NvbG9yOiAjZmZmO1xcclxcbiAgLS1wcmltYXJ5OiAjMmMzZTUwO1xcclxcbiAgLS1wcmltYXJ5X2xpZ2h0OiAjMzQ0OTVlO1xcclxcbiAgLS1zZWNvbmRhcnk6ICNlYzUyNDI7XFxyXFxuICAtLW5ldXRyYWw6ICNkM2QzZDM7XFxyXFxuICAtLXZlcmRhbmE6IHZlcmRhbmEsIHRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tVGFob21hOiB0YWhvbWEsIHZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAtLXNhbnMtc2VyaWY6IHNhbnMtc2VyaWYsIHZlcmRhbmEsIHRhaG9tYTtcXHJcXG4gIC0tb3Blbi1zYW5zOiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogKioqKioqKioqKkdsb2JhbCBDbGFzc2VzKioqKioqKioqKiAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW4tc2Fucyk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi51bmRlcmxpbmUge1xcclxcbiAgaGVpZ2h0OiAyLjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDEsXFxyXFxuaDIsXFxyXFxuaDMge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUhlYWRlciBTdGFydD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgcGFkZGluZzogNXB4IDQ1cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbG9nbyBpbWcge1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgaGVpZ2h0OiA3MXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVza3RvcC1tZW51IG5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlfbGlnaHQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kZXNrdG9wLW1lbnUgbmF2IGEge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbCk7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLmFuaW1hdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMWFiYzljO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbm5hdiBhOm50aC1jaGlsZCgxKSB7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAuc3RhcnQtaG9tZSxcXHJcXG5hOm50aC1jaGlsZCgxKTpob3ZlciB+IC5hbmltYXRpb24ge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGE6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5zdGFydC1jb250YWN0LFxcclxcbmE6bnRoLWNoaWxkKDIpOmhvdmVyIH4gLmFuaW1hdGlvbiB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBsZWZ0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGE6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5zdGFydC1hYm91dCxcXHJcXG5hOm50aC1jaGlsZCgzKTpob3ZlciB+IC5hbmltYXRpb24ge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgbGVmdDogMjIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUhlYWRlciBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU5hdmlnYXRpb24gU3RhcnQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4ubmF2aWdhdGlvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TmF2aWdhdGlvbiBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1haW4tV3JhcHBlciBTdGFydD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLm1haW4td3JhcHBlciB7XFxyXFxuICBwYWRkaW5nLXRvcDogNnJlbTsgLyogY2hhbmdlIHRvIDVyZW0gKi9cXHJcXG4gIG1pbi1oZWlnaHQ6IDMwcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWRhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBwYWRkaW5nOiA1cHggNDVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMzVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzVweCA2NXB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1haW4tV3JhcHBlciBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNjb3Jlcy1Db2xsZWN0aW9uLVNlY3Rpb24gU3RhcnQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi50aXRsZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtY29sbGVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnX2NvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1jb2xsZWN0aW9uIC50aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdfY29sb3IpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zY29yZS1pdGVtOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtaW5mbyBoMixcXHJcXG5oMyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNjb3Jlcy1Db2xsZWN0aW9uLVNlY3Rpb24gRW5kPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1TY29yZXMtRm9ybS1TZWN0aW9uIFN0YXJ0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uc2NvcmVzLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdfY29sb3IpO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWZvcm0gLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsKTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDI1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzNXB4IDE1cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWxpc3QgbGkgaW5wdXQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbC1idG4ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBtaW4td2lkdGg6IDQ1cHg7XFxyXFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9ybWFsLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iZ19jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNjb3Jlcy1Gb3JtLVNlY3Rpb24gRW5kPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Q29udGFjdC1TZWN0aW9uIFN0YXJ0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLmNvbnRhY3QtdXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ19jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDY1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXVzIC50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaW5mbyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1Db250YWN0LVNlY3Rpb24gRW5kPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1Gb290ZXItU2VjdGlvbiBTdGFydD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5mb290ZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW4tc2Fucyk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBtaW4taGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAzNXB4IDY1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuc29jaWFsLWljb25zLFxcclxcbmZvb3RlciAubWVudSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5zb2NpYWwtaWNvbnMgbGksXFxyXFxuZm9vdGVyIC5tZW51IGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuc29jaWFsLWljb25zIGxpIGEge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbCk7XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICBvcGFjaXR5OiAwLjc1O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLm1lbnUgbGkgYSB7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwpO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAwLjc1O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLnNvY2lhbC1pY29ucyBsaSBhOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLm1lbnUgbGkgYTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbCk7XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1sb2dvIGltZyB7XFxyXFxuICB3aWR0aDogMTgwcHg7XFxyXFxuICBoZWlnaHQ6IDcxcHg7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Rm9vdGVyLVNlY3Rpb24gRW5kPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NZWRpYSBRdWVyeSBTdGFydD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKioqKioqICBGaXJzdCBCcmVha3BvaW50ICAqKioqKioqL1xcclxcbkBtZWRpYSBzY3JlZW5cXHJcXG4gIGFuZCAobWluLXdpZHRoOiA1ODZweCkge1xcclxcbiAgLmZvcm0tbGlzdCBsaSBpbnB1dCB7XFxyXFxuICAgIG1pbi13aWR0aDogMTVyZW07XFxyXFxuICAgIHdpZHRoOiAyNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqICBTZWNvbmQgQnJlYWtwb2ludCAgKioqKioqKi9cXHJcXG5AbWVkaWEgc2NyZWVuXFxyXFxuICBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tYWluLWNvbnRlbnQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgcGFkZGluZzogMzVweCA2NXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TWVkaWEgUXVlcnkgRW5kPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEseUZBQXlGOztBQUd6RixvQkFBb0I7O0FBR3BCLHdDQUF3QztBQUN4QztF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LDhGQUE4RlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBJbXBvcnRpbmcgdGhlIFxcXCJub3JtYWxpemUuY3NzXFxcIiBmaWxlIHdoaWNoIGlzIGZvciByZXNldHRpbmcgYWxsIHRoZSBkZWZhdWx0IGNzcyB2YWx1ZXMgKi9cXHJcXG5AaW1wb3J0IHVybChcXFwiLi9ub3JtYWxpemUuY3NzXFxcIik7XFxyXFxuXFxyXFxuLyogSW1wb3J0aW5nIEZvbnRzICovXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMnKTtcXHJcXG5cXHJcXG4vKiAqKioqKipNYWluICYgU2Vjb25kYXJ5IENvbG9ycyoqKioqKiAqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tYmdfY29sb3I6ICNmZmY7XFxyXFxuICAtLXByaW1hcnk6ICMyYzNlNTA7XFxyXFxuICAtLXByaW1hcnlfbGlnaHQ6ICMzNDQ5NWU7XFxyXFxuICAtLXNlY29uZGFyeTogI2VjNTI0MjtcXHJcXG4gIC0tbmV1dHJhbDogI2QzZDNkMztcXHJcXG4gIC0tdmVyZGFuYTogdmVyZGFuYSwgdGFob21hLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1UYWhvbWE6IHRhaG9tYSwgdmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tc2Fucy1zZXJpZjogc2Fucy1zZXJpZiwgdmVyZGFuYSwgdGFob21hO1xcclxcbiAgLS1vcGVuLXNhbnM6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAqKioqKioqKioqR2xvYmFsIENsYXNzZXMqKioqKioqKioqICovXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tb3Blbi1zYW5zKTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnVuZGVybGluZSB7XFxyXFxuICBoZWlnaHQ6IDIuNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBoMSxcXHJcXG5oMixcXHJcXG5oMyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09SGVhZGVyIFN0YXJ0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBwYWRkaW5nOiA1cHggNDVweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1sb2dvIGltZyB7XFxyXFxuICB3aWR0aDogMTgwcHg7XFxyXFxuICBoZWlnaHQ6IDcxcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNrdG9wLW1lbnUgbmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeV9saWdodCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2t0b3AtbWVudSBuYXYgYSB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsKTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbm5hdiAuYW5pbWF0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICMxYWJjOWM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGE6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5zdGFydC1ob21lLFxcclxcbmE6bnRoLWNoaWxkKDEpOmhvdmVyIH4gLmFuaW1hdGlvbiB7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYTpudGgtY2hpbGQoMikge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLnN0YXJ0LWNvbnRhY3QsXFxyXFxuYTpudGgtY2hpbGQoMik6aG92ZXIgfiAuYW5pbWF0aW9uIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGxlZnQ6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYTpudGgtY2hpbGQoMykge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLnN0YXJ0LWFib3V0LFxcclxcbmE6bnRoLWNoaWxkKDMpOmhvdmVyIH4gLmFuaW1hdGlvbiB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBsZWZ0OiAyMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09SGVhZGVyIEVuZD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TmF2aWdhdGlvbiBTdGFydD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi5uYXZpZ2F0aW9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1OYXZpZ2F0aW9uIEVuZD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TWFpbi1XcmFwcGVyIFN0YXJ0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4ubWFpbi13cmFwcGVyIHtcXHJcXG4gIHBhZGRpbmctdG9wOiA2cmVtOyAvKiBjaGFuZ2UgdG8gNXJlbSAqL1xcclxcbiAgbWluLWhlaWdodDogMzByZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tZGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIHBhZGRpbmc6IDVweCA0NXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAzNXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzNXB4IDY1cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TWFpbi1XcmFwcGVyIEVuZD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09U2NvcmVzLUNvbGxlY3Rpb24tU2VjdGlvbiBTdGFydD09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLnRpdGxlLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3Jlcy1jb2xsZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdfY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzLWNvbGxlY3Rpb24gLnRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zY29yZS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ19jb2xvcik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWl0ZW06bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV1dHJhbCk7XFxyXFxufVxcclxcblxcclxcbi5zY29yZS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zY29yZS1pbmZvIGgyLFxcclxcbmgzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09U2NvcmVzLUNvbGxlY3Rpb24tU2VjdGlvbiBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVNjb3Jlcy1Gb3JtLVNlY3Rpb24gU3RhcnQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi5zY29yZXMtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ19jb2xvcik7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMtZm9ybSAudGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwpO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDM1cHggMTVweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tbGlzdCBsaSBpbnB1dCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9ybWFsLWJ0biB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIG1pbi13aWR0aDogNDVweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub3JtYWwtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWJnX2NvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09U2NvcmVzLUZvcm0tU2VjdGlvbiBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1Db250YWN0LVNlY3Rpb24gU3RhcnQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4uY29udGFjdC11cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnX2NvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtdXMgLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbmZvIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUNvbnRhY3QtU2VjdGlvbiBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PUZvb3Rlci1TZWN0aW9uIFN0YXJ0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tb3Blbi1zYW5zKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIG1pbi1oZWlnaHQ6IGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDM1cHggNjVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5zb2NpYWwtaWNvbnMsXFxyXFxuZm9vdGVyIC5tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLnNvY2lhbC1pY29ucyBsaSxcXHJcXG5mb290ZXIgLm1lbnUgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5zb2NpYWwtaWNvbnMgbGkgYSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsKTtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gIG9wYWNpdHk6IDAuNzU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAubWVudSBsaSBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbCk7XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDAuNzU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuc29jaWFsLWljb25zIGxpIGE6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAubWVudSBsaSBhOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsKTtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxvZ28gaW1nIHtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG4gIGhlaWdodDogNzFweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1Gb290ZXItU2VjdGlvbiBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1lZGlhIFF1ZXJ5IFN0YXJ0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqKioqKiogIEZpcnN0IEJyZWFrcG9pbnQgICoqKioqKiovXFxyXFxuQG1lZGlhIHNjcmVlblxcclxcbiAgYW5kIChtaW4td2lkdGg6IDU4NnB4KSB7XFxyXFxuICAuZm9ybS1saXN0IGxpIGlucHV0IHtcXHJcXG4gICAgbWluLXdpZHRoOiAxNXJlbTtcXHJcXG4gICAgd2lkdGg6IDI1cmVtO1xcclxcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKiogIFNlY29uZCBCcmVha3BvaW50ICAqKioqKioqL1xcclxcbkBtZWRpYSBzY3JlZW5cXHJcXG4gIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1haW4tY29udGVudCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBwYWRkaW5nOiAzNXB4IDY1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1NZWRpYSBRdWVyeSBFbmQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2Fzc2V0cy9pbWcvbG9nby5wbmcnO1xuaW1wb3J0IGRpc3BsYXlEYXRlIGZyb20gJy4vbW9kdWxlcy91dGlscy5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9tb2R1bGVzL3Njb3JlLmpzJztcblxuLy8qICoqKioqKioqKkdsb2JhbCBWYXJpYWJsZXMqKioqKioqKioqKiovL1xubGV0IHNjb3JlTGlzdCA9IFtdO1xuY29uc3QgYWRkU2NvcmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkX3Njb3JlX2J0bicpO1xuY29uc3QgcmVmcmVzaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWZyZXNoX2J0bicpO1xuXG5mdW5jdGlvbiByZW1vdmVTY29yZSgpIHtcbiAgY29uc3Qgc2NvcmVFbGVtZW50ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIHNjb3JlTGlzdCA9IHNjb3JlTGlzdC5maWx0ZXIoKG9iaikgPT4gb2JqLmlkICE9PSBwYXJzZUludChzY29yZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpLCAxMCkpO1xuICBzY29yZUVsZW1lbnQucmVtb3ZlKCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTY29yZXMtTGlzdCcsIEpTT04uc3RyaW5naWZ5KHNjb3JlTGlzdCkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTY29yZShvYmopIHtcbiAgY29uc3Qgc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjb3JlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzY29yZS1pdGVtJyk7XG4gIHNjb3JlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb2JqLmlkKTtcbiAgc2NvcmVFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY29yZS1pbmZvXCI+XG4gICAgICAgICAgICAgIDxoMz4ke29iai5uYW1lfTogJHtvYmouc2NvcmV9PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVtb3ZlLWJ0blwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVtb3ZlX3Njb3JlX2J0blwiIGNsYXNzPVwibm9ybWFsLWJ0blwiIHR5cGU9XCJidXR0b25cIj5SZW1vdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAvLyBTZXQgdGhlIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgcmVtb3ZlIGJ1dHRvblxuICBzY29yZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZV9zY29yZV9idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVNjb3JlKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3Jlc19saXN0JykuYXBwZW5kQ2hpbGQoc2NvcmVFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gYWRkU2NvcmUoKSB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZV9maWVsZCcpO1xuICBjb25zdCBzY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZV9maWVsZCcpO1xuICBpZiAobmFtZS52YWx1ZSA9PT0gJycgfHwgc2NvcmUudmFsdWUgPT09ICcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzJyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2NvcmVPYmogPSBuZXcgU2NvcmUoc2NvcmVMaXN0Lmxlbmd0aCwgc2NvcmUudmFsdWUsIG5hbWUudmFsdWUpO1xuICAgIHNjb3JlTGlzdC5wdXNoKHNjb3JlT2JqKTtcbiAgICByZW5kZXJTY29yZShzY29yZU9iaik7XG4gICAgbmFtZS52YWx1ZSA9ICcnO1xuICAgIHNjb3JlLnZhbHVlID0gJyc7XG4gIH1cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Njb3Jlcy1MaXN0JywgSlNPTi5zdHJpbmdpZnkoc2NvcmVMaXN0KSk7XG59XG5cbmFkZFNjb3JlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkU2NvcmUpO1xuXG5mdW5jdGlvbiByZWZyZXNoU2NvcmVzKCkge1xuICBjb25zdCBzY29yZXNMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZXNfbGlzdCcpO1xuICBzY29yZXNMaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgc2NvcmVMaXN0LmZvckVhY2goKG9iaikgPT4gcmVuZGVyU2NvcmUob2JqKSk7XG59XG5cbnJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWZyZXNoU2NvcmVzKTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgLy8gU2V0dGluZyBIZWFkZXIgJiBGb290ZXIgbG9nb3NcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcl9sb2dvJykuc3JjID0gTG9nbztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvb3Rlcl9sb2dvJykuc3JjID0gTG9nbztcbiAgLy8gU2V0dGluZyB0aGUgZGF0ZVxuICBkaXNwbGF5RGF0ZSgpO1xuICAvLyBHZXR0aW5nIHRoZSBzY29yZXMgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIHNjb3JlTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Njb3Jlcy1MaXN0JykpIHx8IFtdO1xuICByZWZyZXNoU2NvcmVzKCk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlICovXHJcblxyXG4vLyB0aGVzZSBhcmVuJ3QgcmVhbGx5IHByaXZhdGUsIGJ1dCBub3IgYXJlIHRoZXkgcmVhbGx5IHVzZWZ1bCB0byBkb2N1bWVudFxyXG5cclxuLyoqXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5jbGFzcyBMdXhvbkVycm9yIGV4dGVuZHMgRXJyb3Ige31cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5jbGFzcyBJbnZhbGlkRGF0ZVRpbWVFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKHJlYXNvbikge1xyXG4gICAgc3VwZXIoYEludmFsaWQgRGF0ZVRpbWU6ICR7cmVhc29uLnRvTWVzc2FnZSgpfWApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcbmNsYXNzIEludmFsaWRJbnRlcnZhbEVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XHJcbiAgY29uc3RydWN0b3IocmVhc29uKSB7XHJcbiAgICBzdXBlcihgSW52YWxpZCBJbnRlcnZhbDogJHtyZWFzb24udG9NZXNzYWdlKCl9YCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuY2xhc3MgSW52YWxpZER1cmF0aW9uRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcclxuICBjb25zdHJ1Y3RvcihyZWFzb24pIHtcclxuICAgIHN1cGVyKGBJbnZhbGlkIER1cmF0aW9uOiAke3JlYXNvbi50b01lc3NhZ2UoKX1gKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5jbGFzcyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige31cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5jbGFzcyBJbnZhbGlkVW5pdEVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XHJcbiAgY29uc3RydWN0b3IodW5pdCkge1xyXG4gICAgc3VwZXIoYEludmFsaWQgdW5pdCAke3VuaXR9YCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuY2xhc3MgSW52YWxpZEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHt9XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuY2xhc3MgWm9uZUlzQWJzdHJhY3RFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ1pvbmUgaXMgYW4gYWJzdHJhY3QgY2xhc3MnKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5cclxuY29uc3QgbiA9ICdudW1lcmljJztcclxuY29uc3QgcyA9ICdzaG9ydCc7XHJcbmNvbnN0IGwgPSAnbG9uZyc7XHJcblxyXG5jb25zdCBEQVRFX1NIT1JUID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IG4sXHJcbiAgZGF5OiBuLFxyXG59O1xyXG5cclxuY29uc3QgREFURV9NRUQgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogcyxcclxuICBkYXk6IG4sXHJcbn07XHJcblxyXG5jb25zdCBEQVRFX01FRF9XSVRIX1dFRUtEQVkgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogcyxcclxuICBkYXk6IG4sXHJcbiAgd2Vla2RheTogcyxcclxufTtcclxuXHJcbmNvbnN0IERBVEVfRlVMTCA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBsLFxyXG4gIGRheTogbixcclxufTtcclxuXHJcbmNvbnN0IERBVEVfSFVHRSA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBsLFxyXG4gIGRheTogbixcclxuICB3ZWVrZGF5OiBsLFxyXG59O1xyXG5cclxuY29uc3QgVElNRV9TSU1QTEUgPSB7XHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbn07XHJcblxyXG5jb25zdCBUSU1FX1dJVEhfU0VDT05EUyA9IHtcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxuICBzZWNvbmQ6IG4sXHJcbn07XHJcblxyXG5jb25zdCBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG4gIHNlY29uZDogbixcclxuICB0aW1lWm9uZU5hbWU6IHMsXHJcbn07XHJcblxyXG5jb25zdCBUSU1FX1dJVEhfTE9OR19PRkZTRVQgPSB7XHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbiAgc2Vjb25kOiBuLFxyXG4gIHRpbWVab25lTmFtZTogbCxcclxufTtcclxuXHJcbmNvbnN0IFRJTUVfMjRfU0lNUExFID0ge1xyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG4gIGhvdXJDeWNsZTogJ2gyMycsXHJcbn07XHJcblxyXG5jb25zdCBUSU1FXzI0X1dJVEhfU0VDT05EUyA9IHtcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxuICBzZWNvbmQ6IG4sXHJcbiAgaG91ckN5Y2xlOiAnaDIzJyxcclxufTtcclxuXHJcbmNvbnN0IFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQgPSB7XHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbiAgc2Vjb25kOiBuLFxyXG4gIGhvdXJDeWNsZTogJ2gyMycsXHJcbiAgdGltZVpvbmVOYW1lOiBzLFxyXG59O1xyXG5cclxuY29uc3QgVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUID0ge1xyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG4gIHNlY29uZDogbixcclxuICBob3VyQ3ljbGU6ICdoMjMnLFxyXG4gIHRpbWVab25lTmFtZTogbCxcclxufTtcclxuXHJcbmNvbnN0IERBVEVUSU1FX1NIT1JUID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IG4sXHJcbiAgZGF5OiBuLFxyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG59O1xyXG5cclxuY29uc3QgREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IG4sXHJcbiAgZGF5OiBuLFxyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG4gIHNlY29uZDogbixcclxufTtcclxuXHJcbmNvbnN0IERBVEVUSU1FX01FRCA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBzLFxyXG4gIGRheTogbixcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxufTtcclxuXHJcbmNvbnN0IERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMgPSB7XHJcbiAgeWVhcjogbixcclxuICBtb250aDogcyxcclxuICBkYXk6IG4sXHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbiAgc2Vjb25kOiBuLFxyXG59O1xyXG5cclxuY29uc3QgREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWSA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBzLFxyXG4gIGRheTogbixcclxuICB3ZWVrZGF5OiBzLFxyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG59O1xyXG5cclxuY29uc3QgREFURVRJTUVfRlVMTCA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBsLFxyXG4gIGRheTogbixcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxuICB0aW1lWm9uZU5hbWU6IHMsXHJcbn07XHJcblxyXG5jb25zdCBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBsLFxyXG4gIGRheTogbixcclxuICBob3VyOiBuLFxyXG4gIG1pbnV0ZTogbixcclxuICBzZWNvbmQ6IG4sXHJcbiAgdGltZVpvbmVOYW1lOiBzLFxyXG59O1xyXG5cclxuY29uc3QgREFURVRJTUVfSFVHRSA9IHtcclxuICB5ZWFyOiBuLFxyXG4gIG1vbnRoOiBsLFxyXG4gIGRheTogbixcclxuICB3ZWVrZGF5OiBsLFxyXG4gIGhvdXI6IG4sXHJcbiAgbWludXRlOiBuLFxyXG4gIHRpbWVab25lTmFtZTogbCxcclxufTtcclxuXHJcbmNvbnN0IERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTID0ge1xyXG4gIHllYXI6IG4sXHJcbiAgbW9udGg6IGwsXHJcbiAgZGF5OiBuLFxyXG4gIHdlZWtkYXk6IGwsXHJcbiAgaG91cjogbixcclxuICBtaW51dGU6IG4sXHJcbiAgc2Vjb25kOiBuLFxyXG4gIHRpbWVab25lTmFtZTogbCxcclxufTtcclxuXHJcbi8qXHJcbiAgIFRoaXMgaXMganVzdCBhIGp1bmsgZHJhd2VyLCBjb250YWluaW5nIGFueXRoaW5nIHVzZWQgYWNyb3NzIG11bHRpcGxlIGNsYXNzZXMuXHJcbiAgIEJlY2F1c2UgTHV4b24gaXMgc21hbGwoaXNoKSwgdGhpcyBzaG91bGQgc3RheSBzbWFsbCBhbmQgd2Ugd29uJ3Qgd29ycnkgYWJvdXQgc3BsaXR0aW5nXHJcbiAgIGl0IHVwIGludG8sIHNheSwgcGFyc2luZ1V0aWwuanMgYW5kIGJhc2ljVXRpbC5qcyBhbmQgc28gb24uIEJ1dCB0aGV5IGFyZSBkaXZpZGVkIHVwIGJ5IGZlYXR1cmUgYXJlYS5cclxuICovXHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuXHJcbi8vIFRZUEVTXHJcblxyXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOdW1iZXIobykge1xyXG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ251bWJlcic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSW50ZWdlcihvKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnbnVtYmVyJyAmJiBvICUgMSA9PT0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTdHJpbmcobykge1xyXG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ3N0cmluZyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGF0ZShvKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xyXG59XHJcblxyXG4vLyBDQVBBQklMSVRJRVNcclxuXHJcbmZ1bmN0aW9uIGhhc1JlbGF0aXZlKCkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnICYmICEhSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQ7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gT0JKRUNUUyBBTkQgQVJSQVlTXHJcblxyXG5mdW5jdGlvbiBtYXliZUFycmF5KHRoaW5nKSB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpbmcpID8gdGhpbmcgOiBbdGhpbmddO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiZXN0QnkoYXJyLCBieSwgY29tcGFyZSkge1xyXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuICByZXR1cm4gYXJyLnJlZHVjZSgoYmVzdCwgbmV4dCkgPT4ge1xyXG4gICAgY29uc3QgcGFpciA9IFtieShuZXh0KSwgbmV4dF07XHJcbiAgICBpZiAoIWJlc3QpIHtcclxuICAgICAgcmV0dXJuIHBhaXI7XHJcbiAgICB9IGlmIChjb21wYXJlKGJlc3RbMF0sIHBhaXJbMF0pID09PSBiZXN0WzBdKSB7XHJcbiAgICAgIHJldHVybiBiZXN0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhaXI7XHJcbiAgfSwgbnVsbClbMV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBpY2sob2JqLCBrZXlzKSB7XHJcbiAgcmV0dXJuIGtleXMucmVkdWNlKChhLCBrKSA9PiB7XHJcbiAgICBhW2tdID0gb2JqW2tdO1xyXG4gICAgcmV0dXJuIGE7XHJcbiAgfSwge30pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XHJcbn1cclxuXHJcbi8vIE5VTUJFUlMgQU5EIFNUUklOR1NcclxuXHJcbmZ1bmN0aW9uIGludGVnZXJCZXR3ZWVuKHRoaW5nLCBib3R0b20sIHRvcCkge1xyXG4gIHJldHVybiBpc0ludGVnZXIodGhpbmcpICYmIHRoaW5nID49IGJvdHRvbSAmJiB0aGluZyA8PSB0b3A7XHJcbn1cclxuXHJcbi8vIHggJSBuIGJ1dCB0YWtlcyB0aGUgc2lnbiBvZiBuIGluc3RlYWQgb2YgeFxyXG5mdW5jdGlvbiBmbG9vck1vZCh4LCBuKSB7XHJcbiAgcmV0dXJuIHggLSBuICogTWF0aC5mbG9vcih4IC8gbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhZFN0YXJ0KGlucHV0LCBuID0gMikge1xyXG4gIGNvbnN0IGlzTmVnID0gaW5wdXQgPCAwO1xyXG4gIGxldCBwYWRkZWQ7XHJcbiAgaWYgKGlzTmVnKSB7XHJcbiAgICBwYWRkZWQgPSBgLSR7KGAkey1pbnB1dH1gKS5wYWRTdGFydChuLCAnMCcpfWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhZGRlZCA9IChgJHtpbnB1dH1gKS5wYWRTdGFydChuLCAnMCcpO1xyXG4gIH1cclxuICByZXR1cm4gcGFkZGVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUludGVnZXIoc3RyaW5nKSB7XHJcbiAgaWYgKGlzVW5kZWZpbmVkKHN0cmluZykgfHwgc3RyaW5nID09PSBudWxsIHx8IHN0cmluZyA9PT0gJycpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIHJldHVybiBwYXJzZUludChzdHJpbmcsIDEwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VGbG9hdGluZyhzdHJpbmcpIHtcclxuICBpZiAoaXNVbmRlZmluZWQoc3RyaW5nKSB8fCBzdHJpbmcgPT09IG51bGwgfHwgc3RyaW5nID09PSAnJykge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbiAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyaW5nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VNaWxsaXMoZnJhY3Rpb24pIHtcclxuICAvLyBSZXR1cm4gdW5kZWZpbmVkIChpbnN0ZWFkIG9mIDApIGluIHRoZXNlIGNhc2VzLCB3aGVyZSBmcmFjdGlvbiBpcyBub3Qgc2V0XHJcbiAgaWYgKGlzVW5kZWZpbmVkKGZyYWN0aW9uKSB8fCBmcmFjdGlvbiA9PT0gbnVsbCB8fCBmcmFjdGlvbiA9PT0gJycpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIGNvbnN0IGYgPSBwYXJzZUZsb2F0KGAwLiR7ZnJhY3Rpb259YCkgKiAxMDAwO1xyXG4gIHJldHVybiBNYXRoLmZsb29yKGYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb3VuZFRvKG51bWJlciwgZGlnaXRzLCB0b3dhcmRaZXJvID0gZmFsc2UpIHtcclxuICBjb25zdCBmYWN0b3IgPSAxMCAqKiBkaWdpdHM7XHJcbiAgY29uc3Qgcm91bmRlciA9IHRvd2FyZFplcm8gPyBNYXRoLnRydW5jIDogTWF0aC5yb3VuZDtcclxuICByZXR1cm4gcm91bmRlcihudW1iZXIgKiBmYWN0b3IpIC8gZmFjdG9yO1xyXG59XHJcblxyXG4vLyBEQVRFIEJBU0lDU1xyXG5cclxuZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XHJcbiAgcmV0dXJuIHllYXIgJSA0ID09PSAwICYmICh5ZWFyICUgMTAwICE9PSAwIHx8IHllYXIgJSA0MDAgPT09IDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXIpIHtcclxuICByZXR1cm4gaXNMZWFwWWVhcih5ZWFyKSA/IDM2NiA6IDM2NTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGF5c0luTW9udGgoeWVhciwgbW9udGgpIHtcclxuICBjb25zdCBtb2RNb250aCA9IGZsb29yTW9kKG1vbnRoIC0gMSwgMTIpICsgMTtcclxuICBjb25zdCBtb2RZZWFyID0geWVhciArIChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xyXG5cclxuICBpZiAobW9kTW9udGggPT09IDIpIHtcclxuICAgIHJldHVybiBpc0xlYXBZZWFyKG1vZFllYXIpID8gMjkgOiAyODtcclxuICB9XHJcbiAgcmV0dXJuIFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdW21vZE1vbnRoIC0gMV07XHJcbn1cclxuXHJcbi8vIGNvdmVydCBhIGNhbGVuZGFyIG9iamVjdCB0byBhIGxvY2FsIHRpbWVzdGFtcCAoZXBvY2gsIGJ1dCB3aXRoIHRoZSBvZmZzZXQgYmFrZWQgaW4pXHJcbmZ1bmN0aW9uIG9ialRvTG9jYWxUUyhvYmopIHtcclxuICBsZXQgZCA9IERhdGUuVVRDKFxyXG4gICAgb2JqLnllYXIsXHJcbiAgICBvYmoubW9udGggLSAxLFxyXG4gICAgb2JqLmRheSxcclxuICAgIG9iai5ob3VyLFxyXG4gICAgb2JqLm1pbnV0ZSxcclxuICAgIG9iai5zZWNvbmQsXHJcbiAgICBvYmoubWlsbGlzZWNvbmQsXHJcbiAgKTtcclxuXHJcbiAgLy8gZm9yIGxlZ2FjeSByZWFzb25zLCB5ZWFycyBiZXR3ZWVuIDAgYW5kIDk5IGFyZSBpbnRlcnByZXRlZCBhcyAxOVhYOyByZXZlcnQgdGhhdFxyXG4gIGlmIChvYmoueWVhciA8IDEwMCAmJiBvYmoueWVhciA+PSAwKSB7XHJcbiAgICBkID0gbmV3IERhdGUoZCk7XHJcbiAgICBkLnNldFVUQ0Z1bGxZZWFyKGQuZ2V0VVRDRnVsbFllYXIoKSAtIDE5MDApO1xyXG4gIH1cclxuICByZXR1cm4gK2Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdlZWtzSW5XZWVrWWVhcih3ZWVrWWVhcikge1xyXG4gIGNvbnN0IHAxID0gKHdlZWtZZWFyXHJcbiAgICAgICAgICsgTWF0aC5mbG9vcih3ZWVrWWVhciAvIDQpXHJcbiAgICAgICAgIC0gTWF0aC5mbG9vcih3ZWVrWWVhciAvIDEwMClcclxuICAgICAgICAgKyBNYXRoLmZsb29yKHdlZWtZZWFyIC8gNDAwKSlcclxuICAgICAgICUgNztcclxuICBjb25zdCBsYXN0ID0gd2Vla1llYXIgLSAxO1xyXG4gIGNvbnN0IHAyID0gKGxhc3QgKyBNYXRoLmZsb29yKGxhc3QgLyA0KSAtIE1hdGguZmxvb3IobGFzdCAvIDEwMCkgKyBNYXRoLmZsb29yKGxhc3QgLyA0MDApKSAlIDc7XHJcbiAgcmV0dXJuIHAxID09PSA0IHx8IHAyID09PSAzID8gNTMgOiA1MjtcclxufVxyXG5cclxuZnVuY3Rpb24gdW50cnVuY2F0ZVllYXIoeWVhcikge1xyXG4gIGlmICh5ZWFyID4gOTkpIHtcclxuICAgIHJldHVybiB5ZWFyO1xyXG4gIH0gcmV0dXJuIHllYXIgPiA2MCA/IDE5MDAgKyB5ZWFyIDogMjAwMCArIHllYXI7XHJcbn1cclxuXHJcbi8vIFBBUlNJTkdcclxuXHJcbmZ1bmN0aW9uIHBhcnNlWm9uZUluZm8odHMsIG9mZnNldEZvcm1hdCwgbG9jYWxlLCB0aW1lWm9uZSA9IG51bGwpIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUodHMpO1xyXG4gIGNvbnN0IGludGxPcHRzID0ge1xyXG4gICAgaG91ckN5Y2xlOiAnaDIzJyxcclxuICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgIG1vbnRoOiAnMi1kaWdpdCcsXHJcbiAgICBkYXk6ICcyLWRpZ2l0JyxcclxuICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gIH07XHJcblxyXG4gIGlmICh0aW1lWm9uZSkge1xyXG4gICAgaW50bE9wdHMudGltZVpvbmUgPSB0aW1lWm9uZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1vZGlmaWVkID0geyB0aW1lWm9uZU5hbWU6IG9mZnNldEZvcm1hdCwgLi4uaW50bE9wdHMgfTtcclxuXHJcbiAgY29uc3QgcGFyc2VkID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBtb2RpZmllZClcclxuICAgIC5mb3JtYXRUb1BhcnRzKGRhdGUpXHJcbiAgICAuZmluZCgobSkgPT4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICd0aW1lem9uZW5hbWUnKTtcclxuICByZXR1cm4gcGFyc2VkID8gcGFyc2VkLnZhbHVlIDogbnVsbDtcclxufVxyXG5cclxuLy8gc2lnbmVkT2Zmc2V0KCctNScsICczMCcpIC0+IC0zMzBcclxuZnVuY3Rpb24gc2lnbmVkT2Zmc2V0KG9mZkhvdXJTdHIsIG9mZk1pbnV0ZVN0cikge1xyXG4gIGxldCBvZmZIb3VyID0gcGFyc2VJbnQob2ZmSG91clN0ciwgMTApO1xyXG5cclxuICAvLyBkb24ndCB8fCB0aGlzIGJlY2F1c2Ugd2Ugd2FudCB0byBwcmVzZXJ2ZSAtMFxyXG4gIGlmIChOdW1iZXIuaXNOYU4ob2ZmSG91cikpIHtcclxuICAgIG9mZkhvdXIgPSAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb2ZmTWluID0gcGFyc2VJbnQob2ZmTWludXRlU3RyLCAxMCkgfHwgMDtcclxuICBjb25zdCBvZmZNaW5TaWduZWQgPSBvZmZIb3VyIDwgMCB8fCBPYmplY3QuaXMob2ZmSG91ciwgLTApID8gLW9mZk1pbiA6IG9mZk1pbjtcclxuICByZXR1cm4gb2ZmSG91ciAqIDYwICsgb2ZmTWluU2lnbmVkO1xyXG59XHJcblxyXG4vLyBDT0VSQ0lPTlxyXG5cclxuZnVuY3Rpb24gYXNOdW1iZXIodmFsdWUpIHtcclxuICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB2YWx1ZSA9PT0gJycgfHwgTnVtYmVyLmlzTmFOKG51bWVyaWNWYWx1ZSkpIHsgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKGBJbnZhbGlkIHVuaXQgdmFsdWUgJHt2YWx1ZX1gKTsgfVxyXG4gIHJldHVybiBudW1lcmljVmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZU9iamVjdChvYmosIG5vcm1hbGl6ZXIpIHtcclxuICBjb25zdCBub3JtYWxpemVkID0ge307XHJcbiAgZm9yIChjb25zdCB1IGluIG9iaikge1xyXG4gICAgaWYgKGhhc093blByb3BlcnR5KG9iaiwgdSkpIHtcclxuICAgICAgY29uc3QgdiA9IG9ialt1XTtcclxuICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsKSBjb250aW51ZTtcclxuICAgICAgbm9ybWFsaXplZFtub3JtYWxpemVyKHUpXSA9IGFzTnVtYmVyKHYpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbm9ybWFsaXplZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0T2Zmc2V0KG9mZnNldCwgZm9ybWF0KSB7XHJcbiAgY29uc3QgaG91cnMgPSBNYXRoLnRydW5jKE1hdGguYWJzKG9mZnNldCAvIDYwKSk7XHJcbiAgY29uc3QgbWludXRlcyA9IE1hdGgudHJ1bmMoTWF0aC5hYnMob2Zmc2V0ICUgNjApKTtcclxuICBjb25zdCBzaWduID0gb2Zmc2V0ID49IDAgPyAnKycgOiAnLSc7XHJcblxyXG4gIHN3aXRjaCAoZm9ybWF0KSB7XHJcbiAgICBjYXNlICdzaG9ydCc6XHJcbiAgICAgIHJldHVybiBgJHtzaWdufSR7cGFkU3RhcnQoaG91cnMsIDIpfToke3BhZFN0YXJ0KG1pbnV0ZXMsIDIpfWA7XHJcbiAgICBjYXNlICduYXJyb3cnOlxyXG4gICAgICByZXR1cm4gYCR7c2lnbn0ke2hvdXJzfSR7bWludXRlcyA+IDAgPyBgOiR7bWludXRlc31gIDogJyd9YDtcclxuICAgIGNhc2UgJ3RlY2hpZSc6XHJcbiAgICAgIHJldHVybiBgJHtzaWdufSR7cGFkU3RhcnQoaG91cnMsIDIpfSR7cGFkU3RhcnQobWludXRlcywgMil9YDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBWYWx1ZSBmb3JtYXQgJHtmb3JtYXR9IGlzIG91dCBvZiByYW5nZSBmb3IgcHJvcGVydHkgZm9ybWF0YCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0aW1lT2JqZWN0KG9iaikge1xyXG4gIHJldHVybiBwaWNrKG9iaiwgWydob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCAnbWlsbGlzZWNvbmQnXSk7XHJcbn1cclxuXHJcbmNvbnN0IGlhbmFSZWdleCA9IC9bQS1aYS16XystXXsxLDI1Nn0oPzo6P1xcL1tBLVphLXowLTlfKy1dezEsMjU2fSg/OlxcL1tBLVphLXowLTlfKy1dezEsMjU2fSk/KT8vO1xyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcblxyXG5jb25zdCBtb250aHNMb25nID0gW1xyXG4gICdKYW51YXJ5JyxcclxuICAnRmVicnVhcnknLFxyXG4gICdNYXJjaCcsXHJcbiAgJ0FwcmlsJyxcclxuICAnTWF5JyxcclxuICAnSnVuZScsXHJcbiAgJ0p1bHknLFxyXG4gICdBdWd1c3QnLFxyXG4gICdTZXB0ZW1iZXInLFxyXG4gICdPY3RvYmVyJyxcclxuICAnTm92ZW1iZXInLFxyXG4gICdEZWNlbWJlcicsXHJcbl07XHJcblxyXG5jb25zdCBtb250aHNTaG9ydCA9IFtcclxuICAnSmFuJyxcclxuICAnRmViJyxcclxuICAnTWFyJyxcclxuICAnQXByJyxcclxuICAnTWF5JyxcclxuICAnSnVuJyxcclxuICAnSnVsJyxcclxuICAnQXVnJyxcclxuICAnU2VwJyxcclxuICAnT2N0JyxcclxuICAnTm92JyxcclxuICAnRGVjJyxcclxuXTtcclxuXHJcbmNvbnN0IG1vbnRoc05hcnJvdyA9IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXTtcclxuXHJcbmZ1bmN0aW9uIG1vbnRocyhsZW5ndGgpIHtcclxuICBzd2l0Y2ggKGxlbmd0aCkge1xyXG4gICAgY2FzZSAnbmFycm93JzpcclxuICAgICAgcmV0dXJuIFsuLi5tb250aHNOYXJyb3ddO1xyXG4gICAgY2FzZSAnc2hvcnQnOlxyXG4gICAgICByZXR1cm4gWy4uLm1vbnRoc1Nob3J0XTtcclxuICAgIGNhc2UgJ2xvbmcnOlxyXG4gICAgICByZXR1cm4gWy4uLm1vbnRoc0xvbmddO1xyXG4gICAgY2FzZSAnbnVtZXJpYyc6XHJcbiAgICAgIHJldHVybiBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJ107XHJcbiAgICBjYXNlICcyLWRpZ2l0JzpcclxuICAgICAgcmV0dXJuIFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInXTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgd2Vla2RheXNMb25nID0gW1xyXG4gICdNb25kYXknLFxyXG4gICdUdWVzZGF5JyxcclxuICAnV2VkbmVzZGF5JyxcclxuICAnVGh1cnNkYXknLFxyXG4gICdGcmlkYXknLFxyXG4gICdTYXR1cmRheScsXHJcbiAgJ1N1bmRheScsXHJcbl07XHJcblxyXG5jb25zdCB3ZWVrZGF5c1Nob3J0ID0gWydNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCcsICdTdW4nXTtcclxuXHJcbmNvbnN0IHdlZWtkYXlzTmFycm93ID0gWydNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUycsICdTJ107XHJcblxyXG5mdW5jdGlvbiB3ZWVrZGF5cyhsZW5ndGgpIHtcclxuICBzd2l0Y2ggKGxlbmd0aCkge1xyXG4gICAgY2FzZSAnbmFycm93JzpcclxuICAgICAgcmV0dXJuIFsuLi53ZWVrZGF5c05hcnJvd107XHJcbiAgICBjYXNlICdzaG9ydCc6XHJcbiAgICAgIHJldHVybiBbLi4ud2Vla2RheXNTaG9ydF07XHJcbiAgICBjYXNlICdsb25nJzpcclxuICAgICAgcmV0dXJuIFsuLi53ZWVrZGF5c0xvbmddO1xyXG4gICAgY2FzZSAnbnVtZXJpYyc6XHJcbiAgICAgIHJldHVybiBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnXTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWVyaWRpZW1zID0gWydBTScsICdQTSddO1xyXG5cclxuY29uc3QgZXJhc0xvbmcgPSBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXTtcclxuXHJcbmNvbnN0IGVyYXNTaG9ydCA9IFsnQkMnLCAnQUQnXTtcclxuXHJcbmNvbnN0IGVyYXNOYXJyb3cgPSBbJ0InLCAnQSddO1xyXG5cclxuZnVuY3Rpb24gZXJhcyhsZW5ndGgpIHtcclxuICBzd2l0Y2ggKGxlbmd0aCkge1xyXG4gICAgY2FzZSAnbmFycm93JzpcclxuICAgICAgcmV0dXJuIFsuLi5lcmFzTmFycm93XTtcclxuICAgIGNhc2UgJ3Nob3J0JzpcclxuICAgICAgcmV0dXJuIFsuLi5lcmFzU2hvcnRdO1xyXG4gICAgY2FzZSAnbG9uZyc6XHJcbiAgICAgIHJldHVybiBbLi4uZXJhc0xvbmddO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJpZGllbUZvckRhdGVUaW1lKGR0KSB7XHJcbiAgcmV0dXJuIG1lcmlkaWVtc1tkdC5ob3VyIDwgMTIgPyAwIDogMV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XHJcbiAgcmV0dXJuIHdlZWtkYXlzKGxlbmd0aClbZHQud2Vla2RheSAtIDFdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb250aEZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcclxuICByZXR1cm4gbW9udGhzKGxlbmd0aClbZHQubW9udGggLSAxXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXJhRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xyXG4gIHJldHVybiBlcmFzKGxlbmd0aClbZHQueWVhciA8IDAgPyAwIDogMV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgbnVtZXJpYyA9ICdhbHdheXMnLCBuYXJyb3cgPSBmYWxzZSkge1xyXG4gIGNvbnN0IHVuaXRzID0ge1xyXG4gICAgeWVhcnM6IFsneWVhcicsICd5ci4nXSxcclxuICAgIHF1YXJ0ZXJzOiBbJ3F1YXJ0ZXInLCAncXRyLiddLFxyXG4gICAgbW9udGhzOiBbJ21vbnRoJywgJ21vLiddLFxyXG4gICAgd2Vla3M6IFsnd2VlaycsICd3ay4nXSxcclxuICAgIGRheXM6IFsnZGF5JywgJ2RheScsICdkYXlzJ10sXHJcbiAgICBob3VyczogWydob3VyJywgJ2hyLiddLFxyXG4gICAgbWludXRlczogWydtaW51dGUnLCAnbWluLiddLFxyXG4gICAgc2Vjb25kczogWydzZWNvbmQnLCAnc2VjLiddLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxhc3RhYmxlID0gWydob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnXS5pbmRleE9mKHVuaXQpID09PSAtMTtcclxuXHJcbiAgaWYgKG51bWVyaWMgPT09ICdhdXRvJyAmJiBsYXN0YWJsZSkge1xyXG4gICAgY29uc3QgaXNEYXkgPSB1bml0ID09PSAnZGF5cyc7XHJcbiAgICBzd2l0Y2ggKGNvdW50KSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gaXNEYXkgPyAndG9tb3Jyb3cnIDogYG5leHQgJHt1bml0c1t1bml0XVswXX1gO1xyXG4gICAgICBjYXNlIC0xOlxyXG4gICAgICAgIHJldHVybiBpc0RheSA/ICd5ZXN0ZXJkYXknIDogYGxhc3QgJHt1bml0c1t1bml0XVswXX1gO1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gJ3RvZGF5JyA6IGB0aGlzICR7dW5pdHNbdW5pdF1bMF19YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGlzSW5QYXN0ID0gT2JqZWN0LmlzKGNvdW50LCAtMCkgfHwgY291bnQgPCAwO1xyXG4gIGNvbnN0IGZtdFZhbHVlID0gTWF0aC5hYnMoY291bnQpO1xyXG4gIGNvbnN0IHNpbmd1bGFyID0gZm10VmFsdWUgPT09IDE7XHJcbiAgY29uc3QgbGlsVW5pdHMgPSB1bml0c1t1bml0XTtcclxuICBjb25zdCBmbXRVbml0ID0gbmFycm93XHJcbiAgICA/IHNpbmd1bGFyXHJcbiAgICAgID8gbGlsVW5pdHNbMV1cclxuICAgICAgOiBsaWxVbml0c1syXSB8fCBsaWxVbml0c1sxXVxyXG4gICAgOiBzaW5ndWxhclxyXG4gICAgICA/IHVuaXRzW3VuaXRdWzBdXHJcbiAgICAgIDogdW5pdDtcclxuICByZXR1cm4gaXNJblBhc3QgPyBgJHtmbXRWYWx1ZX0gJHtmbXRVbml0fSBhZ29gIDogYGluICR7Zm10VmFsdWV9ICR7Zm10VW5pdH1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdHJpbmdpZnlUb2tlbnMoc3BsaXRzLCB0b2tlblRvU3RyaW5nKSB7XHJcbiAgbGV0IHMgPSAnJztcclxuICBmb3IgKGNvbnN0IHRva2VuIG9mIHNwbGl0cykge1xyXG4gICAgaWYgKHRva2VuLmxpdGVyYWwpIHtcclxuICAgICAgcyArPSB0b2tlbi52YWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzICs9IHRva2VuVG9TdHJpbmcodG9rZW4udmFsKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHM7XHJcbn1cclxuXHJcbmNvbnN0IG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHMgPSB7XHJcbiAgRDogREFURV9TSE9SVCxcclxuICBERDogREFURV9NRUQsXHJcbiAgREREOiBEQVRFX0ZVTEwsXHJcbiAgRERERDogREFURV9IVUdFLFxyXG4gIHQ6IFRJTUVfU0lNUExFLFxyXG4gIHR0OiBUSU1FX1dJVEhfU0VDT05EUyxcclxuICB0dHQ6IFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQsXHJcbiAgdHR0dDogVElNRV9XSVRIX0xPTkdfT0ZGU0VULFxyXG4gIFQ6IFRJTUVfMjRfU0lNUExFLFxyXG4gIFRUOiBUSU1FXzI0X1dJVEhfU0VDT05EUyxcclxuICBUVFQ6IFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQsXHJcbiAgVFRUVDogVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VULFxyXG4gIGY6IERBVEVUSU1FX1NIT1JULFxyXG4gIGZmOiBEQVRFVElNRV9NRUQsXHJcbiAgZmZmOiBEQVRFVElNRV9GVUxMLFxyXG4gIGZmZmY6IERBVEVUSU1FX0hVR0UsXHJcbiAgRjogREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTLFxyXG4gIEZGOiBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTLFxyXG4gIEZGRjogREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMsXHJcbiAgRkZGRjogREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMsXHJcbn07XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuXHJcbmNsYXNzIEZvcm1hdHRlciB7XHJcbiAgc3RhdGljIGNyZWF0ZShsb2NhbGUsIG9wdHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIG5ldyBGb3JtYXR0ZXIobG9jYWxlLCBvcHRzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwYXJzZUZvcm1hdChmbXQpIHtcclxuICAgIGxldCBjdXJyZW50ID0gbnVsbDtcclxuICAgIGxldCBjdXJyZW50RnVsbCA9ICcnO1xyXG4gICAgbGV0IGJyYWNrZXRlZCA9IGZhbHNlO1xyXG4gICAgY29uc3Qgc3BsaXRzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZtdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjID0gZm10LmNoYXJBdChpKTtcclxuICAgICAgaWYgKGMgPT09IFwiJ1wiKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRGdWxsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHNwbGl0cy5wdXNoKHsgbGl0ZXJhbDogYnJhY2tldGVkLCB2YWw6IGN1cnJlbnRGdWxsIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50ID0gbnVsbDtcclxuICAgICAgICBjdXJyZW50RnVsbCA9ICcnO1xyXG4gICAgICAgIGJyYWNrZXRlZCA9ICFicmFja2V0ZWQ7XHJcbiAgICAgIH0gZWxzZSBpZiAoYnJhY2tldGVkKSB7XHJcbiAgICAgICAgY3VycmVudEZ1bGwgKz0gYztcclxuICAgICAgfSBlbHNlIGlmIChjID09PSBjdXJyZW50KSB7XHJcbiAgICAgICAgY3VycmVudEZ1bGwgKz0gYztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiBmYWxzZSwgdmFsOiBjdXJyZW50RnVsbCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudEZ1bGwgPSBjO1xyXG4gICAgICAgIGN1cnJlbnQgPSBjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnRGdWxsLmxlbmd0aCA+IDApIHtcclxuICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiBicmFja2V0ZWQsIHZhbDogY3VycmVudEZ1bGwgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNwbGl0cztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBtYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuKSB7XHJcbiAgICByZXR1cm4gbWFjcm9Ub2tlblRvRm9ybWF0T3B0c1t0b2tlbl07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihsb2NhbGUsIGZvcm1hdE9wdHMpIHtcclxuICAgIHRoaXMub3B0cyA9IGZvcm1hdE9wdHM7XHJcbiAgICB0aGlzLmxvYyA9IGxvY2FsZTtcclxuICAgIHRoaXMuc3lzdGVtTG9jID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBvcHRzKSB7XHJcbiAgICBpZiAodGhpcy5zeXN0ZW1Mb2MgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5zeXN0ZW1Mb2MgPSB0aGlzLmxvYy5yZWRlZmF1bHRUb1N5c3RlbSgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGYgPSB0aGlzLnN5c3RlbUxvYy5kdEZvcm1hdHRlcihkdCwgeyAuLi50aGlzLm9wdHMsIC4uLm9wdHMgfSk7XHJcbiAgICByZXR1cm4gZGYuZm9ybWF0KCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXREYXRlVGltZShkdCwgb3B0cyA9IHt9KSB7XHJcbiAgICBjb25zdCBkZiA9IHRoaXMubG9jLmR0Rm9ybWF0dGVyKGR0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcclxuICAgIHJldHVybiBkZi5mb3JtYXQoKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdERhdGVUaW1lUGFydHMoZHQsIG9wdHMgPSB7fSkge1xyXG4gICAgY29uc3QgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgeyAuLi50aGlzLm9wdHMsIC4uLm9wdHMgfSk7XHJcbiAgICByZXR1cm4gZGYuZm9ybWF0VG9QYXJ0cygpO1xyXG4gIH1cclxuXHJcbiAgcmVzb2x2ZWRPcHRpb25zKGR0LCBvcHRzID0ge30pIHtcclxuICAgIGNvbnN0IGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIHsgLi4udGhpcy5vcHRzLCAuLi5vcHRzIH0pO1xyXG4gICAgcmV0dXJuIGRmLnJlc29sdmVkT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgbnVtKG4sIHAgPSAwKSB7XHJcbiAgICAvLyB3ZSBnZXQgc29tZSBwZXJmIG91dCBvZiBkb2luZyB0aGlzIGhlcmUsIGFubm95aW5nbHlcclxuICAgIGlmICh0aGlzLm9wdHMuZm9yY2VTaW1wbGUpIHtcclxuICAgICAgcmV0dXJuIHBhZFN0YXJ0KG4sIHApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wdHMgPSB7IC4uLnRoaXMub3B0cyB9O1xyXG5cclxuICAgIGlmIChwID4gMCkge1xyXG4gICAgICBvcHRzLnBhZFRvID0gcDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5sb2MubnVtYmVyRm9ybWF0dGVyKG9wdHMpLmZvcm1hdChuKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyhkdCwgZm10KSB7XHJcbiAgICBjb25zdCBrbm93bkVuZ2xpc2ggPSB0aGlzLmxvYy5saXN0aW5nTW9kZSgpID09PSAnZW4nO1xyXG4gICAgY29uc3QgdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPSB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAmJiB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAhPT0gJ2dyZWdvcnknO1xyXG4gICAgY29uc3Qgc3RyaW5nID0gKG9wdHMsIGV4dHJhY3QpID0+IHRoaXMubG9jLmV4dHJhY3QoZHQsIG9wdHMsIGV4dHJhY3QpO1xyXG4gICAgY29uc3QgZm9ybWF0T2Zmc2V0ID0gKG9wdHMpID0+IHtcclxuICAgICAgaWYgKGR0LmlzT2Zmc2V0Rml4ZWQgJiYgZHQub2Zmc2V0ID09PSAwICYmIG9wdHMuYWxsb3daKSB7XHJcbiAgICAgICAgcmV0dXJuICdaJztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGR0LmlzVmFsaWQgPyBkdC56b25lLmZvcm1hdE9mZnNldChkdC50cywgb3B0cy5mb3JtYXQpIDogJyc7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbWVyaWRpZW0gPSAoKSA9PiAoa25vd25FbmdsaXNoXHJcbiAgICAgID8gbWVyaWRpZW1Gb3JEYXRlVGltZShkdClcclxuICAgICAgOiBzdHJpbmcoeyBob3VyOiAnbnVtZXJpYycsIGhvdXJDeWNsZTogJ2gxMicgfSwgJ2RheXBlcmlvZCcpKTtcclxuICAgIGNvbnN0IG1vbnRoID0gKGxlbmd0aCwgc3RhbmRhbG9uZSkgPT4gKGtub3duRW5nbGlzaFxyXG4gICAgICA/IG1vbnRoRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aClcclxuICAgICAgOiBzdHJpbmcoc3RhbmRhbG9uZSA/IHsgbW9udGg6IGxlbmd0aCB9IDogeyBtb250aDogbGVuZ3RoLCBkYXk6ICdudW1lcmljJyB9LCAnbW9udGgnKSk7XHJcbiAgICBjb25zdCB3ZWVrZGF5ID0gKGxlbmd0aCwgc3RhbmRhbG9uZSkgPT4gKGtub3duRW5nbGlzaFxyXG4gICAgICA/IHdlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKVxyXG4gICAgICA6IHN0cmluZyhcclxuICAgICAgICBzdGFuZGFsb25lID8geyB3ZWVrZGF5OiBsZW5ndGggfSA6IHsgd2Vla2RheTogbGVuZ3RoLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9LFxyXG4gICAgICAgICd3ZWVrZGF5JyxcclxuICAgICAgKSk7XHJcbiAgICBjb25zdCBtYXliZU1hY3JvID0gKHRva2VuKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZvcm1hdE9wdHMgPSBGb3JtYXR0ZXIubWFjcm9Ub2tlblRvRm9ybWF0T3B0cyh0b2tlbik7XHJcbiAgICAgIGlmIChmb3JtYXRPcHRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0V2l0aFN5c3RlbURlZmF1bHQoZHQsIGZvcm1hdE9wdHMpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH07XHJcbiAgICBjb25zdCBlcmEgPSAobGVuZ3RoKSA9PiAoa25vd25FbmdsaXNoID8gZXJhRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkgOiBzdHJpbmcoeyBlcmE6IGxlbmd0aCB9LCAnZXJhJykpO1xyXG4gICAgY29uc3QgdG9rZW5Ub1N0cmluZyA9ICh0b2tlbikgPT4ge1xyXG4gICAgICAvLyBXaGVyZSBwb3NzaWJsZTogaHR0cDovL2NsZHIudW5pY29kZS5vcmcvdHJhbnNsYXRpb24vZGF0ZS10aW1lLTEvZGF0ZS10aW1lI1RPQy1TdGFuZGFsb25lLXZzLi1Gb3JtYXQtU3R5bGVzXHJcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgICAvLyBtc1xyXG4gICAgICAgIGNhc2UgJ1MnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm1pbGxpc2Vjb25kKTtcclxuICAgICAgICBjYXNlICd1JzpcclxuICAgICAgICAgIC8vIGZhbGxzIHRocm91Z2hcclxuICAgICAgICBjYXNlICdTU1MnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm1pbGxpc2Vjb25kLCAzKTtcclxuICAgICAgICAgIC8vIHNlY29uZHNcclxuICAgICAgICBjYXNlICdzJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5zZWNvbmQpO1xyXG4gICAgICAgIGNhc2UgJ3NzJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5zZWNvbmQsIDIpO1xyXG4gICAgICAgICAgLy8gZnJhY3Rpb25hbCBzZWNvbmRzXHJcbiAgICAgICAgY2FzZSAndXUnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKE1hdGguZmxvb3IoZHQubWlsbGlzZWNvbmQgLyAxMCksIDIpO1xyXG4gICAgICAgIGNhc2UgJ3V1dSc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oTWF0aC5mbG9vcihkdC5taWxsaXNlY29uZCAvIDEwMCkpO1xyXG4gICAgICAgICAgLy8gbWludXRlc1xyXG4gICAgICAgIGNhc2UgJ20nOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm1pbnV0ZSk7XHJcbiAgICAgICAgY2FzZSAnbW0nOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm1pbnV0ZSwgMik7XHJcbiAgICAgICAgICAvLyBob3Vyc1xyXG4gICAgICAgIGNhc2UgJ2gnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIgJSAxMiA9PT0gMCA/IDEyIDogZHQuaG91ciAlIDEyKTtcclxuICAgICAgICBjYXNlICdoaCc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIsIDIpO1xyXG4gICAgICAgIGNhc2UgJ0gnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmhvdXIpO1xyXG4gICAgICAgIGNhc2UgJ0hIJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5ob3VyLCAyKTtcclxuICAgICAgICAgIC8vIG9mZnNldFxyXG4gICAgICAgIGNhc2UgJ1onOlxyXG4gICAgICAgICAgLy8gbGlrZSArNlxyXG4gICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7IGZvcm1hdDogJ25hcnJvdycsIGFsbG93WjogdGhpcy5vcHRzLmFsbG93WiB9KTtcclxuICAgICAgICBjYXNlICdaWic6XHJcbiAgICAgICAgICAvLyBsaWtlICswNjowMFxyXG4gICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7IGZvcm1hdDogJ3Nob3J0JywgYWxsb3daOiB0aGlzLm9wdHMuYWxsb3daIH0pO1xyXG4gICAgICAgIGNhc2UgJ1paWic6XHJcbiAgICAgICAgICAvLyBsaWtlICswNjAwXHJcbiAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiAndGVjaGllJywgYWxsb3daOiB0aGlzLm9wdHMuYWxsb3daIH0pO1xyXG4gICAgICAgIGNhc2UgJ1paWlonOlxyXG4gICAgICAgICAgLy8gbGlrZSBFU1RcclxuICAgICAgICAgIHJldHVybiBkdC56b25lLm9mZnNldE5hbWUoZHQudHMsIHsgZm9ybWF0OiAnc2hvcnQnLCBsb2NhbGU6IHRoaXMubG9jLmxvY2FsZSB9KTtcclxuICAgICAgICBjYXNlICdaWlpaWic6XHJcbiAgICAgICAgICAvLyBsaWtlIEVhc3Rlcm4gU3RhbmRhcmQgVGltZVxyXG4gICAgICAgICAgcmV0dXJuIGR0LnpvbmUub2Zmc2V0TmFtZShkdC50cywgeyBmb3JtYXQ6ICdsb25nJywgbG9jYWxlOiB0aGlzLmxvYy5sb2NhbGUgfSk7XHJcbiAgICAgICAgICAvLyB6b25lXHJcbiAgICAgICAgY2FzZSAneic6XHJcbiAgICAgICAgICAvLyBsaWtlIEFtZXJpY2EvTmV3X1lvcmtcclxuICAgICAgICAgIHJldHVybiBkdC56b25lTmFtZTtcclxuICAgICAgICAgIC8vIG1lcmlkaWVtc1xyXG4gICAgICAgIGNhc2UgJ2EnOlxyXG4gICAgICAgICAgcmV0dXJuIG1lcmlkaWVtKCk7XHJcbiAgICAgICAgICAvLyBkYXRlc1xyXG4gICAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHsgZGF5OiAnbnVtZXJpYycgfSwgJ2RheScpIDogdGhpcy5udW0oZHQuZGF5KTtcclxuICAgICAgICBjYXNlICdkZCc6XHJcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoeyBkYXk6ICcyLWRpZ2l0JyB9LCAnZGF5JykgOiB0aGlzLm51bShkdC5kYXksIDIpO1xyXG4gICAgICAgICAgLy8gd2Vla2RheXMgLSBzdGFuZGFsb25lXHJcbiAgICAgICAgY2FzZSAnYyc6XHJcbiAgICAgICAgICAvLyBsaWtlIDFcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrZGF5KTtcclxuICAgICAgICBjYXNlICdjY2MnOlxyXG4gICAgICAgICAgLy8gbGlrZSAnVHVlcydcclxuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KCdzaG9ydCcsIHRydWUpO1xyXG4gICAgICAgIGNhc2UgJ2NjY2MnOlxyXG4gICAgICAgICAgLy8gbGlrZSAnVHVlc2RheSdcclxuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KCdsb25nJywgdHJ1ZSk7XHJcbiAgICAgICAgY2FzZSAnY2NjY2MnOlxyXG4gICAgICAgICAgLy8gbGlrZSAnVCdcclxuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KCduYXJyb3cnLCB0cnVlKTtcclxuICAgICAgICAgIC8vIHdlZWtkYXlzIC0gZm9ybWF0XHJcbiAgICAgICAgY2FzZSAnRSc6XHJcbiAgICAgICAgICAvLyBsaWtlIDFcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrZGF5KTtcclxuICAgICAgICBjYXNlICdFRUUnOlxyXG4gICAgICAgICAgLy8gbGlrZSAnVHVlcydcclxuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KCdzaG9ydCcsIGZhbHNlKTtcclxuICAgICAgICBjYXNlICdFRUVFJzpcclxuICAgICAgICAgIC8vIGxpa2UgJ1R1ZXNkYXknXHJcbiAgICAgICAgICByZXR1cm4gd2Vla2RheSgnbG9uZycsIGZhbHNlKTtcclxuICAgICAgICBjYXNlICdFRUVFRSc6XHJcbiAgICAgICAgICAvLyBsaWtlICdUJ1xyXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoJ25hcnJvdycsIGZhbHNlKTtcclxuICAgICAgICAgIC8vIG1vbnRocyAtIHN0YW5kYWxvbmVcclxuICAgICAgICBjYXNlICdMJzpcclxuICAgICAgICAgIC8vIGxpa2UgMVxyXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXHJcbiAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6ICdudW1lcmljJywgZGF5OiAnbnVtZXJpYycgfSwgJ21vbnRoJylcclxuICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCk7XHJcbiAgICAgICAgY2FzZSAnTEwnOlxyXG4gICAgICAgICAgLy8gbGlrZSAwMSwgZG9lc24ndCBzZWVtIHRvIHdvcmtcclxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxyXG4gICAgICAgICAgICA/IHN0cmluZyh7IG1vbnRoOiAnMi1kaWdpdCcsIGRheTogJ251bWVyaWMnIH0sICdtb250aCcpXHJcbiAgICAgICAgICAgIDogdGhpcy5udW0oZHQubW9udGgsIDIpO1xyXG4gICAgICAgIGNhc2UgJ0xMTCc6XHJcbiAgICAgICAgICAvLyBsaWtlIEphblxyXG4gICAgICAgICAgcmV0dXJuIG1vbnRoKCdzaG9ydCcsIHRydWUpO1xyXG4gICAgICAgIGNhc2UgJ0xMTEwnOlxyXG4gICAgICAgICAgLy8gbGlrZSBKYW51YXJ5XHJcbiAgICAgICAgICByZXR1cm4gbW9udGgoJ2xvbmcnLCB0cnVlKTtcclxuICAgICAgICBjYXNlICdMTExMTCc6XHJcbiAgICAgICAgICAvLyBsaWtlIEpcclxuICAgICAgICAgIHJldHVybiBtb250aCgnbmFycm93JywgdHJ1ZSk7XHJcbiAgICAgICAgICAvLyBtb250aHMgLSBmb3JtYXRcclxuICAgICAgICBjYXNlICdNJzpcclxuICAgICAgICAgIC8vIGxpa2UgMVxyXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXHJcbiAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6ICdudW1lcmljJyB9LCAnbW9udGgnKVxyXG4gICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoKTtcclxuICAgICAgICBjYXNlICdNTSc6XHJcbiAgICAgICAgICAvLyBsaWtlIDAxXHJcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcclxuICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogJzItZGlnaXQnIH0sICdtb250aCcpXHJcbiAgICAgICAgICAgIDogdGhpcy5udW0oZHQubW9udGgsIDIpO1xyXG4gICAgICAgIGNhc2UgJ01NTSc6XHJcbiAgICAgICAgICAvLyBsaWtlIEphblxyXG4gICAgICAgICAgcmV0dXJuIG1vbnRoKCdzaG9ydCcsIGZhbHNlKTtcclxuICAgICAgICBjYXNlICdNTU1NJzpcclxuICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxyXG4gICAgICAgICAgcmV0dXJuIG1vbnRoKCdsb25nJywgZmFsc2UpO1xyXG4gICAgICAgIGNhc2UgJ01NTU1NJzpcclxuICAgICAgICAgIC8vIGxpa2UgSlxyXG4gICAgICAgICAgcmV0dXJuIG1vbnRoKCduYXJyb3cnLCBmYWxzZSk7XHJcbiAgICAgICAgICAvLyB5ZWFyc1xyXG4gICAgICAgIGNhc2UgJ3knOlxyXG4gICAgICAgICAgLy8gbGlrZSAyMDE0XHJcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoeyB5ZWFyOiAnbnVtZXJpYycgfSwgJ3llYXInKSA6IHRoaXMubnVtKGR0LnllYXIpO1xyXG4gICAgICAgIGNhc2UgJ3l5JzpcclxuICAgICAgICAgIC8vIGxpa2UgMTRcclxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxyXG4gICAgICAgICAgICA/IHN0cmluZyh7IHllYXI6ICcyLWRpZ2l0JyB9LCAneWVhcicpXHJcbiAgICAgICAgICAgIDogdGhpcy5udW0oZHQueWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XHJcbiAgICAgICAgY2FzZSAneXl5eSc6XHJcbiAgICAgICAgICAvLyBsaWtlIDAwMTJcclxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxyXG4gICAgICAgICAgICA/IHN0cmluZyh7IHllYXI6ICdudW1lcmljJyB9LCAneWVhcicpXHJcbiAgICAgICAgICAgIDogdGhpcy5udW0oZHQueWVhciwgNCk7XHJcbiAgICAgICAgY2FzZSAneXl5eXl5JzpcclxuICAgICAgICAgIC8vIGxpa2UgMDAwMDEyXHJcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcclxuICAgICAgICAgICAgPyBzdHJpbmcoeyB5ZWFyOiAnbnVtZXJpYycgfSwgJ3llYXInKVxyXG4gICAgICAgICAgICA6IHRoaXMubnVtKGR0LnllYXIsIDYpO1xyXG4gICAgICAgICAgLy8gZXJhc1xyXG4gICAgICAgIGNhc2UgJ0cnOlxyXG4gICAgICAgICAgLy8gbGlrZSBBRFxyXG4gICAgICAgICAgcmV0dXJuIGVyYSgnc2hvcnQnKTtcclxuICAgICAgICBjYXNlICdHRyc6XHJcbiAgICAgICAgICAvLyBsaWtlIEFubm8gRG9taW5pXHJcbiAgICAgICAgICByZXR1cm4gZXJhKCdsb25nJyk7XHJcbiAgICAgICAgY2FzZSAnR0dHR0cnOlxyXG4gICAgICAgICAgcmV0dXJuIGVyYSgnbmFycm93Jyk7XHJcbiAgICAgICAgY2FzZSAna2snOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtZZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpLCAyKTtcclxuICAgICAgICBjYXNlICdra2trJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC53ZWVrWWVhciwgNCk7XHJcbiAgICAgICAgY2FzZSAnVyc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQud2Vla051bWJlcik7XHJcbiAgICAgICAgY2FzZSAnV1cnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtOdW1iZXIsIDIpO1xyXG4gICAgICAgIGNhc2UgJ28nOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm9yZGluYWwpO1xyXG4gICAgICAgIGNhc2UgJ29vbyc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQub3JkaW5hbCwgMyk7XHJcbiAgICAgICAgY2FzZSAncSc6XHJcbiAgICAgICAgICAvLyBsaWtlIDFcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5xdWFydGVyKTtcclxuICAgICAgICBjYXNlICdxcSc6XHJcbiAgICAgICAgICAvLyBsaWtlIDAxXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQucXVhcnRlciwgMik7XHJcbiAgICAgICAgY2FzZSAnWCc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0oTWF0aC5mbG9vcihkdC50cyAvIDEwMDApKTtcclxuICAgICAgICBjYXNlICd4JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC50cyk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBtYXliZU1hY3JvKHRva2VuKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpLCB0b2tlblRvU3RyaW5nKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyhkdXIsIGZtdCkge1xyXG4gICAgY29uc3QgdG9rZW5Ub0ZpZWxkID0gKHRva2VuKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcclxuICAgICAgICBjYXNlICdTJzpcclxuICAgICAgICAgIHJldHVybiAnbWlsbGlzZWNvbmQnO1xyXG4gICAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgICAgcmV0dXJuICdzZWNvbmQnO1xyXG4gICAgICAgIGNhc2UgJ20nOlxyXG4gICAgICAgICAgcmV0dXJuICdtaW51dGUnO1xyXG4gICAgICAgIGNhc2UgJ2gnOlxyXG4gICAgICAgICAgcmV0dXJuICdob3VyJztcclxuICAgICAgICBjYXNlICdkJzpcclxuICAgICAgICAgIHJldHVybiAnZGF5JztcclxuICAgICAgICBjYXNlICd3JzpcclxuICAgICAgICAgIHJldHVybiAnd2Vlayc7XHJcbiAgICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgICByZXR1cm4gJ21vbnRoJztcclxuICAgICAgICBjYXNlICd5JzpcclxuICAgICAgICAgIHJldHVybiAneWVhcic7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdG9rZW5Ub1N0cmluZyA9IChsaWxkdXIpID0+ICh0b2tlbikgPT4ge1xyXG4gICAgICBjb25zdCBtYXBwZWQgPSB0b2tlblRvRmllbGQodG9rZW4pO1xyXG4gICAgICBpZiAobWFwcGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtKGxpbGR1ci5nZXQobWFwcGVkKSwgdG9rZW4ubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdG9rZW5zID0gRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZtdCk7XHJcbiAgICBjb25zdCByZWFsVG9rZW5zID0gdG9rZW5zLnJlZHVjZShcclxuICAgICAgKGZvdW5kLCB7IGxpdGVyYWwsIHZhbCB9KSA9PiAobGl0ZXJhbCA/IGZvdW5kIDogZm91bmQuY29uY2F0KHZhbCkpLFxyXG4gICAgICBbXSxcclxuICAgICk7XHJcbiAgICBjb25zdCBjb2xsYXBzZWQgPSBkdXIuc2hpZnRUbyguLi5yZWFsVG9rZW5zLm1hcCh0b2tlblRvRmllbGQpLmZpbHRlcigodCkgPT4gdCkpO1xyXG4gICAgcmV0dXJuIHN0cmluZ2lmeVRva2Vucyh0b2tlbnMsIHRva2VuVG9TdHJpbmcoY29sbGFwc2VkKSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBJbnZhbGlkIHtcclxuICBjb25zdHJ1Y3RvcihyZWFzb24sIGV4cGxhbmF0aW9uKSB7XHJcbiAgICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcclxuICAgIHRoaXMuZXhwbGFuYXRpb24gPSBleHBsYW5hdGlvbjtcclxuICB9XHJcblxyXG4gIHRvTWVzc2FnZSgpIHtcclxuICAgIGlmICh0aGlzLmV4cGxhbmF0aW9uKSB7XHJcbiAgICAgIHJldHVybiBgJHt0aGlzLnJlYXNvbn06ICR7dGhpcy5leHBsYW5hdGlvbn1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVhc29uO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgKiBAaW50ZXJmYWNlXHJcbiAgKi9cclxuY2xhc3MgWm9uZSB7XHJcbiAgLyoqXHJcbiAgICAqIFRoZSB0eXBlIG9mIHpvbmVcclxuICAgICogQGFic3RyYWN0XHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCB0eXBlKCkge1xyXG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBUaGUgbmFtZSBvZiB0aGlzIHpvbmUuXHJcbiAgICAqIEBhYnN0cmFjdFxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaWFuYU5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgd2hldGhlciB0aGUgb2Zmc2V0IGlzIGtub3duIHRvIGJlIGZpeGVkIGZvciB0aGUgd2hvbGUgeWVhci5cclxuICAgICogQGFic3RyYWN0XHJcbiAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgKi9cclxuICBnZXQgaXNVbml2ZXJzYWwoKSB7XHJcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIG9mZnNldCdzIGNvbW1vbiBuYW1lIChzdWNoIGFzIEVTVCkgYXQgdGhlIHNwZWNpZmllZCB0aW1lc3RhbXBcclxuICAgICogQGFic3RyYWN0XHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBuYW1lXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gT3B0aW9ucyB0byBhZmZlY3QgdGhlIGZvcm1hdFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5mb3JtYXQgLSBXaGF0IHN0eWxlIG9mIG9mZnNldCB0byByZXR1cm4uIEFjY2VwdHMgJ2xvbmcnIG9yICdzaG9ydCcuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmxvY2FsZSAtIFdoYXQgbG9jYWxlIHRvIHJldHVybiB0aGUgb2Zmc2V0IG5hbWUgaW4uXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgb2Zmc2V0TmFtZSh0cywgb3B0cykge1xyXG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBvZmZzZXQncyB2YWx1ZSBhcyBhIHN0cmluZ1xyXG4gICAgKiBAYWJzdHJhY3RcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG9mZnNldFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IC0gV2hhdCBzdHlsZSBvZiBvZmZzZXQgdG8gcmV0dXJuLlxyXG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0cyAnbmFycm93JywgJ3Nob3J0Jywgb3IgJ3RlY2hpZScuIFJldHVybmluZyAnKzYnLCAnKzA2OjAwJywgb3IgJyswNjAwJyByZXNwZWN0aXZlbHlcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xyXG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gdGhlIG9mZnNldCBpbiBtaW51dGVzIGZvciB0aGlzIHpvbmUgYXQgdGhlIHNwZWNpZmllZCB0aW1lc3RhbXAuXHJcbiAgICAqIEBhYnN0cmFjdFxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGNvbXB1dGUgdGhlIG9mZnNldFxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIG9mZnNldCh0cykge1xyXG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIFpvbmUgaXMgZXF1YWwgdG8gYW5vdGhlciB6b25lXHJcbiAgICAqIEBhYnN0cmFjdFxyXG4gICAgKiBAcGFyYW0ge1pvbmV9IG90aGVyWm9uZSAtIHRoZSB6b25lIHRvIGNvbXBhcmVcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgZXF1YWxzKG90aGVyWm9uZSkge1xyXG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIFpvbmUgaXMgdmFsaWQuXHJcbiAgICAqIEBhYnN0cmFjdFxyXG4gICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xyXG4gIH1cclxufVxyXG5cclxubGV0IHNpbmdsZXRvbiQxID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gICogUmVwcmVzZW50cyB0aGUgbG9jYWwgem9uZSBmb3IgdGhpcyBKYXZhU2NyaXB0IGVudmlyb25tZW50LlxyXG4gICogQGltcGxlbWVudHMge1pvbmV9XHJcbiAgKi9cclxuY2xhc3MgU3lzdGVtWm9uZSBleHRlbmRzIFpvbmUge1xyXG4gIC8qKlxyXG4gICAgKiBHZXQgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIGxvY2FsIHpvbmVcclxuICAgICogQHJldHVybiB7U3lzdGVtWm9uZX1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgIGlmIChzaW5nbGV0b24kMSA9PT0gbnVsbCkge1xyXG4gICAgICBzaW5nbGV0b24kMSA9IG5ldyBTeXN0ZW1ab25lKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2luZ2xldG9uJDE7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiAnc3lzdGVtJztcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmU7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgaXNVbml2ZXJzYWwoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBvZmZzZXROYW1lKHRzLCB7IGZvcm1hdCwgbG9jYWxlIH0pIHtcclxuICAgIHJldHVybiBwYXJzZVpvbmVJbmZvKHRzLCBmb3JtYXQsIGxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdE9mZnNldCh0aGlzLm9mZnNldCh0cyksIGZvcm1hdCk7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBvZmZzZXQodHMpIHtcclxuICAgIHJldHVybiAtbmV3IERhdGUodHMpLmdldFRpbWV6b25lT2Zmc2V0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBlcXVhbHMob3RoZXJab25lKSB7XHJcbiAgICByZXR1cm4gb3RoZXJab25lLnR5cGUgPT09ICdzeXN0ZW0nO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmxldCBkdGZDYWNoZSA9IHt9O1xyXG5mdW5jdGlvbiBtYWtlRFRGKHpvbmUpIHtcclxuICBpZiAoIWR0ZkNhY2hlW3pvbmVdKSB7XHJcbiAgICBkdGZDYWNoZVt6b25lXSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcclxuICAgICAgaG91cjEyOiBmYWxzZSxcclxuICAgICAgdGltZVpvbmU6IHpvbmUsXHJcbiAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcclxuICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgIHNlY29uZDogJzItZGlnaXQnLFxyXG4gICAgICBlcmE6ICdzaG9ydCcsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGR0ZkNhY2hlW3pvbmVdO1xyXG59XHJcblxyXG5jb25zdCB0eXBlVG9Qb3MgPSB7XHJcbiAgeWVhcjogMCxcclxuICBtb250aDogMSxcclxuICBkYXk6IDIsXHJcbiAgZXJhOiAzLFxyXG4gIGhvdXI6IDQsXHJcbiAgbWludXRlOiA1LFxyXG4gIHNlY29uZDogNixcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhhY2t5T2Zmc2V0KGR0ZiwgZGF0ZSkge1xyXG4gIGNvbnN0IGZvcm1hdHRlZCA9IGR0Zi5mb3JtYXQoZGF0ZSkucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XHJcbiAgY29uc3QgcGFyc2VkID0gLyhcXGQrKVxcLyhcXGQrKVxcLyhcXGQrKSAoQUR8QkMpLD8gKFxcZCspOihcXGQrKTooXFxkKykvLmV4ZWMoZm9ybWF0dGVkKTtcclxuICBjb25zdCBbLCBmTW9udGgsIGZEYXksIGZZZWFyLCBmYWRPckJjLCBmSG91ciwgZk1pbnV0ZSwgZlNlY29uZF0gPSBwYXJzZWQ7XHJcbiAgcmV0dXJuIFtmWWVhciwgZk1vbnRoLCBmRGF5LCBmYWRPckJjLCBmSG91ciwgZk1pbnV0ZSwgZlNlY29uZF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnRzT2Zmc2V0KGR0ZiwgZGF0ZSkge1xyXG4gIGNvbnN0IGZvcm1hdHRlZCA9IGR0Zi5mb3JtYXRUb1BhcnRzKGRhdGUpO1xyXG4gIGNvbnN0IGZpbGxlZCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybWF0dGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBmb3JtYXR0ZWRbaV07XHJcbiAgICBjb25zdCBwb3MgPSB0eXBlVG9Qb3NbdHlwZV07XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdlcmEnKSB7XHJcbiAgICAgIGZpbGxlZFtwb3NdID0gdmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKCFpc1VuZGVmaW5lZChwb3MpKSB7XHJcbiAgICAgIGZpbGxlZFtwb3NdID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZpbGxlZDtcclxufVxyXG5cclxubGV0IGlhbmFab25lQ2FjaGUgPSB7fTtcclxuLyoqXHJcbiAgKiBBIHpvbmUgaWRlbnRpZmllZCBieSBhbiBJQU5BIGlkZW50aWZpZXIsIGxpa2UgQW1lcmljYS9OZXdfWW9ya1xyXG4gICogQGltcGxlbWVudHMge1pvbmV9XHJcbiAgKi9cclxuY2xhc3MgSUFOQVpvbmUgZXh0ZW5kcyBab25lIHtcclxuICAvKipcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBab25lIG5hbWVcclxuICAgICogQHJldHVybiB7SUFOQVpvbmV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBjcmVhdGUobmFtZSkge1xyXG4gICAgaWYgKCFpYW5hWm9uZUNhY2hlW25hbWVdKSB7XHJcbiAgICAgIGlhbmFab25lQ2FjaGVbbmFtZV0gPSBuZXcgSUFOQVpvbmUobmFtZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaWFuYVpvbmVDYWNoZVtuYW1lXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXNldCBsb2NhbCBjYWNoZXMuIFNob3VsZCBvbmx5IGJlIG5lY2Vzc2FyeSBpbiB0ZXN0aW5nIHNjZW5hcmlvcy5cclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICovXHJcbiAgc3RhdGljIHJlc2V0Q2FjaGUoKSB7XHJcbiAgICBpYW5hWm9uZUNhY2hlID0ge307XHJcbiAgICBkdGZDYWNoZSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgc3RyaW5nIGlzIGEgdmFsaWQgc3BlY2lmaWVyLiBUaGlzIG9ubHkgY2hlY2tzIHRoZSBzdHJpbmcncyBmb3JtYXQsIG5vdCB0aGF0IHRoZSBzcGVjaWZpZXIgaWRlbnRpZmllcyBhIGtub3duIHpvbmU7IHNlZSBpc1ZhbGlkWm9uZSBmb3IgdGhhdC5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHMgLSBUaGUgc3RyaW5nIHRvIGNoZWNrIHZhbGlkaXR5IG9uXHJcbiAgICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJBbWVyaWNhL05ld19Zb3JrXCIpIC8vPT4gdHJ1ZVxyXG4gICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKFwiU3BvcnR+fmJsb3JwXCIpIC8vPT4gZmFsc2VcclxuICAgICogQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgcmV0dXJucyBmYWxzZSBmb3Igc29tZSB2YWxpZCBJQU5BIG5hbWVzLiBVc2UgaXNWYWxpZFpvbmUgaW5zdGVhZC5cclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgc3RhdGljIGlzVmFsaWRTcGVjaWZpZXIocykge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFpvbmUocyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBzdHJpbmcgaWRlbnRpZmllcyBhIHJlYWwgem9uZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gem9uZSAtIFRoZSBzdHJpbmcgdG8gY2hlY2tcclxuICAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJBbWVyaWNhL05ld19Zb3JrXCIpIC8vPT4gdHJ1ZVxyXG4gICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIkZhbnRhc2lhL0Nhc3RsZVwiKSAvLz0+IGZhbHNlXHJcbiAgICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiU3BvcnR+fmJsb3JwXCIpIC8vPT4gZmFsc2VcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgc3RhdGljIGlzVmFsaWRab25lKHpvbmUpIHtcclxuICAgIGlmICghem9uZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7IHRpbWVab25lOiB6b25lIH0pLmZvcm1hdCgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIC8qKiBAcHJpdmF0ZSAqICovXHJcbiAgICB0aGlzLnpvbmVOYW1lID0gbmFtZTtcclxuICAgIC8qKiBAcHJpdmF0ZSAqICovXHJcbiAgICB0aGlzLnZhbGlkID0gSUFOQVpvbmUuaXNWYWxpZFpvbmUobmFtZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgdHlwZSgpIHtcclxuICAgIHJldHVybiAnaWFuYSc7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgb2Zmc2V0TmFtZSh0cywgeyBmb3JtYXQsIGxvY2FsZSB9KSB7XHJcbiAgICByZXR1cm4gcGFyc2Vab25lSW5mbyh0cywgZm9ybWF0LCBsb2NhbGUsIHRoaXMubmFtZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xyXG4gICAgcmV0dXJuIGZvcm1hdE9mZnNldCh0aGlzLm9mZnNldCh0cyksIGZvcm1hdCk7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBvZmZzZXQodHMpIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0cyk7XHJcblxyXG4gICAgaWYgKGlzTmFOKGRhdGUpKSByZXR1cm4gTmFOO1xyXG5cclxuICAgIGNvbnN0IGR0ZiA9IG1ha2VEVEYodGhpcy5uYW1lKTtcclxuICAgIGxldCBbeWVhciwgbW9udGgsIGRheSwgYWRPckJjLCBob3VyLCBtaW51dGUsIHNlY29uZF0gPSBkdGYuZm9ybWF0VG9QYXJ0c1xyXG4gICAgICA/IHBhcnRzT2Zmc2V0KGR0ZiwgZGF0ZSlcclxuICAgICAgOiBoYWNreU9mZnNldChkdGYsIGRhdGUpO1xyXG5cclxuICAgIGlmIChhZE9yQmMgPT09ICdCQycpIHtcclxuICAgICAgeWVhciA9IC1NYXRoLmFicyh5ZWFyKSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmVjYXVzZSB3ZSdyZSB1c2luZyBob3VyMTIgYW5kIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEwMjU1NjQmY2FuPTImcT0lMjIyNCUzQTAwJTIyJTIwZGF0ZXRpbWVmb3JtYXRcclxuICAgIGNvbnN0IGFkanVzdGVkSG91ciA9IGhvdXIgPT09IDI0ID8gMCA6IGhvdXI7XHJcblxyXG4gICAgY29uc3QgYXNVVEMgPSBvYmpUb0xvY2FsVFMoe1xyXG4gICAgICB5ZWFyLFxyXG4gICAgICBtb250aCxcclxuICAgICAgZGF5LFxyXG4gICAgICBob3VyOiBhZGp1c3RlZEhvdXIsXHJcbiAgICAgIG1pbnV0ZSxcclxuICAgICAgc2Vjb25kLFxyXG4gICAgICBtaWxsaXNlY29uZDogMCxcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBhc1RTID0gK2RhdGU7XHJcbiAgICBjb25zdCBvdmVyID0gYXNUUyAlIDEwMDA7XHJcbiAgICBhc1RTIC09IG92ZXIgPj0gMCA/IG92ZXIgOiAxMDAwICsgb3ZlcjtcclxuICAgIHJldHVybiAoYXNVVEMgLSBhc1RTKSAvICg2MCAqIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZXF1YWxzKG90aGVyWm9uZSkge1xyXG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSAnaWFuYScgJiYgb3RoZXJab25lLm5hbWUgPT09IHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCBpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsaWQ7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgc2luZ2xldG9uID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gICogQSB6b25lIHdpdGggYSBmaXhlZCBvZmZzZXQgKG1lYW5pbmcgbm8gRFNUKVxyXG4gICogQGltcGxlbWVudHMge1pvbmV9XHJcbiAgKi9cclxuY2xhc3MgRml4ZWRPZmZzZXRab25lIGV4dGVuZHMgWm9uZSB7XHJcbiAgLyoqXHJcbiAgICAqIEdldCBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBVVENcclxuICAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IHV0Y0luc3RhbmNlKCkge1xyXG4gICAgaWYgKHNpbmdsZXRvbiA9PT0gbnVsbCkge1xyXG4gICAgICBzaW5nbGV0b24gPSBuZXcgRml4ZWRPZmZzZXRab25lKDApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNpbmdsZXRvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgYW4gaW5zdGFuY2Ugd2l0aCBhIHNwZWNpZmllZCBvZmZzZXRcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIFRoZSBvZmZzZXQgaW4gbWludXRlc1xyXG4gICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBpbnN0YW5jZShvZmZzZXQpIHtcclxuICAgIHJldHVybiBvZmZzZXQgPT09IDAgPyBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2UgOiBuZXcgRml4ZWRPZmZzZXRab25lKG9mZnNldCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IGFuIGluc3RhbmNlIG9mIEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIGEgVVRDIG9mZnNldCBzdHJpbmcsIGxpa2UgXCJVVEMrNlwiXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBzIC0gVGhlIG9mZnNldCBzdHJpbmcgdG8gcGFyc2VcclxuICAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDKzZcIilcclxuICAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDKzA2XCIpXHJcbiAgICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQy02OjAwXCIpXHJcbiAgICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cclxuICAgICovXHJcbiAgc3RhdGljIHBhcnNlU3BlY2lmaWVyKHMpIHtcclxuICAgIGlmIChzKSB7XHJcbiAgICAgIGNvbnN0IHIgPSBzLm1hdGNoKC9edXRjKD86KFsrLV1cXGR7MSwyfSkoPzo6KFxcZHsyfSkpPyk/JC9pKTtcclxuICAgICAgaWYgKHIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZpeGVkT2Zmc2V0Wm9uZShzaWduZWRPZmZzZXQoclsxXSwgclsyXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9mZnNldCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIC8qKiBAcHJpdmF0ZSAqICovXHJcbiAgICB0aGlzLmZpeGVkID0gb2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IHR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ2ZpeGVkJztcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZml4ZWQgPT09IDAgPyAnVVRDJyA6IGBVVEMke2Zvcm1hdE9mZnNldCh0aGlzLmZpeGVkLCAnbmFycm93Jyl9YDtcclxuICB9XHJcblxyXG4gIGdldCBpYW5hTmFtZSgpIHtcclxuICAgIGlmICh0aGlzLmZpeGVkID09PSAwKSB7XHJcbiAgICAgIHJldHVybiAnRXRjL1VUQyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYEV0Yy9HTVQke2Zvcm1hdE9mZnNldCgtdGhpcy5maXhlZCwgJ25hcnJvdycpfWA7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBvZmZzZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XHJcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsIGZvcm1hdCk7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgaXNVbml2ZXJzYWwoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIG9mZnNldCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZpeGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZXF1YWxzKG90aGVyWm9uZSkge1xyXG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSAnZml4ZWQnICYmIG90aGVyWm9uZS5maXhlZCA9PT0gdGhpcy5maXhlZDtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCBpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICAqIEEgem9uZSB0aGF0IGZhaWxlZCB0byBwYXJzZS4gWW91IHNob3VsZCBuZXZlciBuZWVkIHRvIGluc3RhbnRpYXRlIHRoaXMuXHJcbiAgKiBAaW1wbGVtZW50cyB7Wm9uZX1cclxuICAqL1xyXG5jbGFzcyBJbnZhbGlkWm9uZSBleHRlbmRzIFpvbmUge1xyXG4gIGNvbnN0cnVjdG9yKHpvbmVOYW1lKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgLyoqICBAcHJpdmF0ZSAqL1xyXG4gICAgdGhpcy56b25lTmFtZSA9IHpvbmVOYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IHR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ2ludmFsaWQnO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBvdmVycmlkZSAqICovXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy56b25lTmFtZTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIG9mZnNldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIGZvcm1hdE9mZnNldCgpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIC8qKiBAb3ZlcnJpZGUgKiAqL1xyXG4gIG9mZnNldCgpIHtcclxuICAgIHJldHVybiBOYU47XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBlcXVhbHMoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKiogQG92ZXJyaWRlICogKi9cclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplWm9uZShpbnB1dCwgZGVmYXVsdFpvbmUpIHtcclxuICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpIHx8IGlucHV0ID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdFpvbmU7XHJcbiAgfSBpZiAoaW5wdXQgaW5zdGFuY2VvZiBab25lKSB7XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfSBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICBjb25zdCBsb3dlcmVkID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcclxuICAgIGlmIChsb3dlcmVkID09PSAnZGVmYXVsdCcpIHJldHVybiBkZWZhdWx0Wm9uZTtcclxuICAgIGlmIChsb3dlcmVkID09PSAnbG9jYWwnIHx8IGxvd2VyZWQgPT09ICdzeXN0ZW0nKSByZXR1cm4gU3lzdGVtWm9uZS5pbnN0YW5jZTtcclxuICAgIGlmIChsb3dlcmVkID09PSAndXRjJyB8fCBsb3dlcmVkID09PSAnZ210JykgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZTtcclxuICAgIHJldHVybiBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIobG93ZXJlZCkgfHwgSUFOQVpvbmUuY3JlYXRlKGlucHV0KTtcclxuICB9IGlmIChpc051bWJlcihpbnB1dCkpIHtcclxuICAgIHJldHVybiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoaW5wdXQpO1xyXG4gIH0gaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcgJiYgaW5wdXQub2Zmc2V0ICYmIHR5cGVvZiBpbnB1dC5vZmZzZXQgPT09ICdudW1iZXInKSB7XHJcbiAgICAvLyBUaGlzIGlzIGR1bWIsIGJ1dCB0aGUgaW5zdGFuY2VvZiBjaGVjayBhYm92ZSBkb2Vzbid0IHNlZW0gdG8gcmVhbGx5IHdvcmtcclxuICAgIC8vIHNvIHdlJ3JlIGR1Y2sgY2hlY2tpbmcgaXRcclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcbiAgcmV0dXJuIG5ldyBJbnZhbGlkWm9uZShpbnB1dCk7XHJcbn1cclxuXHJcbmxldCBub3cgPSAoKSA9PiBEYXRlLm5vdygpO1xyXG5sZXQgZGVmYXVsdFpvbmUgPSAnc3lzdGVtJztcclxubGV0IGRlZmF1bHRMb2NhbGUgPSBudWxsO1xyXG5sZXQgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IG51bGw7XHJcbmxldCBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIgPSBudWxsO1xyXG5sZXQgdGhyb3dPbkludmFsaWQ7XHJcblxyXG4vKipcclxuICAqIFNldHRpbmdzIGNvbnRhaW5zIHN0YXRpYyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRoYXQgY29udHJvbCBMdXhvbidzIG92ZXJhbGwgYmVoYXZpb3IuIEx1eG9uIGlzIGEgc2ltcGxlIGxpYnJhcnkgd2l0aCBmZXcgb3B0aW9ucywgYnV0IHRoZSBvbmVzIGl0IGRvZXMgaGF2ZSBsaXZlIGhlcmUuXHJcbiAgKi9cclxuY2xhc3MgU2V0dGluZ3Mge1xyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGNhbGxiYWNrIGZvciByZXR1cm5pbmcgdGhlIGN1cnJlbnQgdGltZXN0YW1wLlxyXG4gICAgKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgbm93KCkge1xyXG4gICAgcmV0dXJuIG5vdztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBTZXQgdGhlIGNhbGxiYWNrIGZvciByZXR1cm5pbmcgdGhlIGN1cnJlbnQgdGltZXN0YW1wLlxyXG4gICAgKiBUaGUgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhIG51bWJlciwgd2hpY2ggd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBhbiBFcG9jaCBtaWxsaXNlY29uZCBjb3VudFxyXG4gICAgKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAgICAqIEBleGFtcGxlIFNldHRpbmdzLm5vdyA9ICgpID0+IERhdGUubm93KCkgKyAzMDAwIC8vIHByZXRlbmQgaXQgaXMgMyBzZWNvbmRzIGluIHRoZSBmdXR1cmVcclxuICAgICogQGV4YW1wbGUgU2V0dGluZ3Mubm93ID0gKCkgPT4gMCAvLyBhbHdheXMgcHJldGVuZCBpdCdzIEphbiAxLCAxOTcwIGF0IG1pZG5pZ2h0IGluIFVUQyB0aW1lXHJcbiAgICAqL1xyXG4gIHN0YXRpYyBzZXQgbm93KG4pIHtcclxuICAgIG5vdyA9IG47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSB0byBjcmVhdGUgRGF0ZVRpbWVzIGluLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxyXG4gICAgKiBVc2UgdGhlIHZhbHVlIFwic3lzdGVtXCIgdG8gcmVzZXQgdGhpcyB2YWx1ZSB0byB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBzdGF0aWMgc2V0IGRlZmF1bHRab25lKHpvbmUpIHtcclxuICAgIGRlZmF1bHRab25lID0gem9uZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGRlZmF1bHQgdGltZSB6b25lIG9iamVjdCBjdXJyZW50bHkgdXNlZCB0byBjcmVhdGUgRGF0ZVRpbWVzLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxyXG4gICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB0aGUgc3lzdGVtJ3MgdGltZSB6b25lICh0aGUgb25lIHNldCBvbiB0aGUgbWFjaGluZSB0aGF0IHJ1bnMgdGhpcyBjb2RlKS5cclxuICAgICogQHR5cGUge1pvbmV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgZGVmYXVsdFpvbmUoKSB7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplWm9uZShkZWZhdWx0Wm9uZSwgU3lzdGVtWm9uZS5pbnN0YW5jZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBkZWZhdWx0IGxvY2FsZSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgZGVmYXVsdExvY2FsZSgpIHtcclxuICAgIHJldHVybiBkZWZhdWx0TG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFNldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBzdGF0aWMgc2V0IGRlZmF1bHRMb2NhbGUobG9jYWxlKSB7XHJcbiAgICBkZWZhdWx0TG9jYWxlID0gbG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgZGVmYXVsdCBudW1iZXJpbmcgc3lzdGVtIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtKCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBzdGF0aWMgc2V0IGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0obnVtYmVyaW5nU3lzdGVtKSB7XHJcbiAgICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVtYmVyaW5nU3lzdGVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgZGVmYXVsdCBvdXRwdXQgY2FsZW5kYXIgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IGRlZmF1bHRPdXRwdXRDYWxlbmRhcigpIHtcclxuICAgIHJldHVybiBkZWZhdWx0T3V0cHV0Q2FsZW5kYXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU2V0IHRoZSBkZWZhdWx0IG91dHB1dCBjYWxlbmRhciB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBzZXQgZGVmYXVsdE91dHB1dENhbGVuZGFyKG91dHB1dENhbGVuZGFyKSB7XHJcbiAgICBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIgPSBvdXRwdXRDYWxlbmRhcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgd2hldGhlciBMdXhvbiB3aWxsIHRocm93IHdoZW4gaXQgZW5jb3VudGVycyBpbnZhbGlkIERhdGVUaW1lcywgRHVyYXRpb25zLCBvciBJbnRlcnZhbHNcclxuICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgdGhyb3dPbkludmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhyb3dPbkludmFsaWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU2V0IHdoZXRoZXIgTHV4b24gd2lsbCB0aHJvdyB3aGVuIGl0IGVuY291bnRlcnMgaW52YWxpZCBEYXRlVGltZXMsIER1cmF0aW9ucywgb3IgSW50ZXJ2YWxzXHJcbiAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgKi9cclxuICBzdGF0aWMgc2V0IHRocm93T25JbnZhbGlkKHQpIHtcclxuICAgIHRocm93T25JbnZhbGlkID0gdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXNldCBMdXhvbidzIGdsb2JhbCBjYWNoZXMuIFNob3VsZCBvbmx5IGJlIG5lY2Vzc2FyeSBpbiB0ZXN0aW5nIHNjZW5hcmlvcy5cclxuICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICovXHJcbiAgc3RhdGljIHJlc2V0Q2FjaGVzKCkge1xyXG4gICAgTG9jYWxlLnJlc2V0Q2FjaGUoKTtcclxuICAgIElBTkFab25lLnJlc2V0Q2FjaGUoKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRvZG8gLSByZW1hcCBjYWNoaW5nXHJcblxyXG5jb25zdCBpbnRsTEZDYWNoZSA9IHt9O1xyXG5mdW5jdGlvbiBnZXRDYWNoZWRMRihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xyXG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcclxuICBsZXQgZHRmID0gaW50bExGQ2FjaGVba2V5XTtcclxuICBpZiAoIWR0Zikge1xyXG4gICAgZHRmID0gbmV3IEludGwuTGlzdEZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xyXG4gICAgaW50bExGQ2FjaGVba2V5XSA9IGR0ZjtcclxuICB9XHJcbiAgcmV0dXJuIGR0ZjtcclxufVxyXG5cclxubGV0IGludGxEVENhY2hlID0ge307XHJcbmZ1bmN0aW9uIGdldENhY2hlZERURihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xyXG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcclxuICBsZXQgZHRmID0gaW50bERUQ2FjaGVba2V5XTtcclxuICBpZiAoIWR0Zikge1xyXG4gICAgZHRmID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcclxuICAgIGludGxEVENhY2hlW2tleV0gPSBkdGY7XHJcbiAgfVxyXG4gIHJldHVybiBkdGY7XHJcbn1cclxuXHJcbmxldCBpbnRsTnVtQ2FjaGUgPSB7fTtcclxuZnVuY3Rpb24gZ2V0Q2FjaGVkSU5GKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XHJcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xyXG4gIGxldCBpbmYgPSBpbnRsTnVtQ2FjaGVba2V5XTtcclxuICBpZiAoIWluZikge1xyXG4gICAgaW5mID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XHJcbiAgICBpbnRsTnVtQ2FjaGVba2V5XSA9IGluZjtcclxuICB9XHJcbiAgcmV0dXJuIGluZjtcclxufVxyXG5cclxubGV0IGludGxSZWxDYWNoZSA9IHt9O1xyXG5mdW5jdGlvbiBnZXRDYWNoZWRSVEYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcclxuICBjb25zdCB7IGJhc2UsIC4uLmNhY2hlS2V5T3B0cyB9ID0gb3B0czsgLy8gZXhjbHVkZSBgYmFzZWAgZnJvbSB0aGUgb3B0aW9uc1xyXG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIGNhY2hlS2V5T3B0c10pO1xyXG4gIGxldCBpbmYgPSBpbnRsUmVsQ2FjaGVba2V5XTtcclxuICBpZiAoIWluZikge1xyXG4gICAgaW5mID0gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XHJcbiAgICBpbnRsUmVsQ2FjaGVba2V5XSA9IGluZjtcclxuICB9XHJcbiAgcmV0dXJuIGluZjtcclxufVxyXG5cclxubGV0IHN5c0xvY2FsZUNhY2hlID0gbnVsbDtcclxuZnVuY3Rpb24gc3lzdGVtTG9jYWxlKCkge1xyXG4gIGlmIChzeXNMb2NhbGVDYWNoZSkge1xyXG4gICAgcmV0dXJuIHN5c0xvY2FsZUNhY2hlO1xyXG4gIH1cclxuICBzeXNMb2NhbGVDYWNoZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlO1xyXG4gIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlU3RyKSB7XHJcbiAgLy8gSSByZWFsbHkgd2FudCB0byBhdm9pZCB3cml0aW5nIGEgQkNQIDQ3IHBhcnNlclxyXG4gIC8vIHNlZSwgZS5nLiBodHRwczovL2dpdGh1Yi5jb20vd29vb3JtL2JjcC00N1xyXG4gIC8vIEluc3RlYWQsIHdlJ2xsIGRvIHRoaXM6XHJcblxyXG4gIC8vIGEpIGlmIHRoZSBzdHJpbmcgaGFzIG5vIC11IGV4dGVuc2lvbnMsIGp1c3QgbGVhdmUgaXQgYWxvbmVcclxuICAvLyBiKSBpZiBpdCBkb2VzLCB1c2UgSW50bCB0byByZXNvbHZlIGV2ZXJ5dGhpbmdcclxuICAvLyBjKSBpZiBJbnRsIGZhaWxzLCB0cnkgYWdhaW4gd2l0aG91dCB0aGUgLXVcclxuXHJcbiAgY29uc3QgdUluZGV4ID0gbG9jYWxlU3RyLmluZGV4T2YoJy11LScpO1xyXG4gIGlmICh1SW5kZXggPT09IC0xKSB7XHJcbiAgICByZXR1cm4gW2xvY2FsZVN0cl07XHJcbiAgfVxyXG4gIGxldCBvcHRpb25zO1xyXG4gIGNvbnN0IHNtYWxsZXIgPSBsb2NhbGVTdHIuc3Vic3RyaW5nKDAsIHVJbmRleCk7XHJcbiAgdHJ5IHtcclxuICAgIG9wdGlvbnMgPSBnZXRDYWNoZWREVEYobG9jYWxlU3RyKS5yZXNvbHZlZE9wdGlvbnMoKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBvcHRpb25zID0gZ2V0Q2FjaGVkRFRGKHNtYWxsZXIpLnJlc29sdmVkT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBudW1iZXJpbmdTeXN0ZW0sIGNhbGVuZGFyIH0gPSBvcHRpb25zO1xyXG4gIC8vIHJldHVybiB0aGUgc21hbGxlciBvbmUgc28gdGhhdCB3ZSBjYW4gYXBwZW5kIHRoZSBjYWxlbmRhciBhbmQgbnVtYmVyaW5nIG92ZXJyaWRlcyB0byBpdFxyXG4gIHJldHVybiBbc21hbGxlciwgbnVtYmVyaW5nU3lzdGVtLCBjYWxlbmRhcl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludGxDb25maWdTdHJpbmcobG9jYWxlU3RyLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSB7XHJcbiAgaWYgKG91dHB1dENhbGVuZGFyIHx8IG51bWJlcmluZ1N5c3RlbSkge1xyXG4gICAgbG9jYWxlU3RyICs9ICctdSc7XHJcblxyXG4gICAgaWYgKG91dHB1dENhbGVuZGFyKSB7XHJcbiAgICAgIGxvY2FsZVN0ciArPSBgLWNhLSR7b3V0cHV0Q2FsZW5kYXJ9YDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnVtYmVyaW5nU3lzdGVtKSB7XHJcbiAgICAgIGxvY2FsZVN0ciArPSBgLW51LSR7bnVtYmVyaW5nU3lzdGVtfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbG9jYWxlU3RyO1xyXG4gIH1cclxuICByZXR1cm4gbG9jYWxlU3RyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBNb250aHMoZikge1xyXG4gIGNvbnN0IG1zID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xyXG4gICAgY29uc3QgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgaSwgMSk7XHJcbiAgICBtcy5wdXNoKGYoZHQpKTtcclxuICB9XHJcbiAgcmV0dXJuIG1zO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBXZWVrZGF5cyhmKSB7XHJcbiAgY29uc3QgbXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcclxuICAgIGNvbnN0IGR0ID0gRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMyArIGkpO1xyXG4gICAgbXMucHVzaChmKGR0KSk7XHJcbiAgfVxyXG4gIHJldHVybiBtcztcclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFN0dWZmKGxvYywgbGVuZ3RoLCBkZWZhdWx0T0ssIGVuZ2xpc2hGbiwgaW50bEZuKSB7XHJcbiAgY29uc3QgbW9kZSA9IGxvYy5saXN0aW5nTW9kZShkZWZhdWx0T0spO1xyXG5cclxuICBpZiAobW9kZSA9PT0gJ2Vycm9yJykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSBpZiAobW9kZSA9PT0gJ2VuJykge1xyXG4gICAgcmV0dXJuIGVuZ2xpc2hGbihsZW5ndGgpO1xyXG4gIH1cclxuICByZXR1cm4gaW50bEZuKGxlbmd0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1cHBvcnRzRmFzdE51bWJlcnMobG9jKSB7XHJcbiAgaWYgKGxvYy5udW1iZXJpbmdTeXN0ZW0gJiYgbG9jLm51bWJlcmluZ1N5c3RlbSAhPT0gJ2xhdG4nKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICBsb2MubnVtYmVyaW5nU3lzdGVtID09PSAnbGF0bidcclxuICAgICAgIHx8ICFsb2MubG9jYWxlXHJcbiAgICAgICB8fCBsb2MubG9jYWxlLnN0YXJ0c1dpdGgoJ2VuJylcclxuICAgICAgIHx8IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvYy5pbnRsKS5yZXNvbHZlZE9wdGlvbnMoKS5udW1iZXJpbmdTeXN0ZW0gPT09ICdsYXRuJ1xyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5cclxuY2xhc3MgUG9seU51bWJlckZvcm1hdHRlciB7XHJcbiAgY29uc3RydWN0b3IoaW50bCwgZm9yY2VTaW1wbGUsIG9wdHMpIHtcclxuICAgIHRoaXMucGFkVG8gPSBvcHRzLnBhZFRvIHx8IDA7XHJcbiAgICB0aGlzLmZsb29yID0gb3B0cy5mbG9vciB8fCBmYWxzZTtcclxuXHJcbiAgICBjb25zdCB7IHBhZFRvLCBmbG9vciwgLi4ub3RoZXJPcHRzIH0gPSBvcHRzO1xyXG5cclxuICAgIGlmICghZm9yY2VTaW1wbGUgfHwgT2JqZWN0LmtleXMob3RoZXJPcHRzKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGludGxPcHRzID0geyB1c2VHcm91cGluZzogZmFsc2UsIC4uLm9wdHMgfTtcclxuICAgICAgaWYgKG9wdHMucGFkVG8gPiAwKSBpbnRsT3B0cy5taW5pbXVtSW50ZWdlckRpZ2l0cyA9IG9wdHMucGFkVG87XHJcbiAgICAgIHRoaXMuaW5mID0gZ2V0Q2FjaGVkSU5GKGludGwsIGludGxPcHRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1hdChpKSB7XHJcbiAgICBpZiAodGhpcy5pbmYpIHtcclxuICAgICAgY29uc3QgZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IGk7XHJcbiAgICAgIHJldHVybiB0aGlzLmluZi5mb3JtYXQoZml4ZWQpO1xyXG4gICAgfVxyXG4gICAgLy8gdG8gbWF0Y2ggdGhlIGJyb3dzZXIncyBudW1iZXJmb3JtYXR0ZXIgZGVmYXVsdHNcclxuICAgIGNvbnN0IGZpeGVkID0gdGhpcy5mbG9vciA/IE1hdGguZmxvb3IoaSkgOiByb3VuZFRvKGksIDMpO1xyXG4gICAgcmV0dXJuIHBhZFN0YXJ0KGZpeGVkLCB0aGlzLnBhZFRvKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5cclxuY2xhc3MgUG9seURhdGVGb3JtYXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGR0LCBpbnRsLCBvcHRzKSB7XHJcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xyXG5cclxuICAgIGxldCB6O1xyXG4gICAgaWYgKGR0LnpvbmUuaXNVbml2ZXJzYWwpIHtcclxuICAgICAgLy8gVVRDLTggb3IgRXRjL1VUQy04IGFyZSBub3QgcGFydCBvZiB0emRhdGEsIG9ubHkgRXRjL0dNVCs4IGFuZCB0aGUgbGlrZS5cclxuICAgICAgLy8gVGhhdCBpcyB3aHkgZml4ZWQtb2Zmc2V0IFRaIGlzIHNldCB0byB0aGF0IHVubGVzcyBpdCBpczpcclxuICAgICAgLy8gMS4gUmVwcmVzZW50aW5nIG9mZnNldCAwIHdoZW4gVVRDIGlzIHVzZWQgdG8gbWFpbnRhaW4gcHJldmlvdXMgYmVoYXZpb3IgYW5kIGRvZXMgbm90IGJlY29tZSBHTVQuXHJcbiAgICAgIC8vIDIuIFVuc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyOlxyXG4gICAgICAvLyAgICAtIHNvbWUgZG8gbm90IHN1cHBvcnQgRXRjL1xyXG4gICAgICAvLyAgICAtIDwgRXRjL0dNVC0xNCwgPiBFdGMvR01UKzEyLCBhbmQgMzAtbWludXRlIG9yIDQ1LW1pbnV0ZSBvZmZzZXRzIGFyZSBub3QgcGFydCBvZiB0emRhdGFcclxuICAgICAgY29uc3QgZ210T2Zmc2V0ID0gLTEgKiAoZHQub2Zmc2V0IC8gNjApO1xyXG4gICAgICBjb25zdCBvZmZzZXRaID0gZ210T2Zmc2V0ID49IDAgPyBgRXRjL0dNVCske2dtdE9mZnNldH1gIDogYEV0Yy9HTVQke2dtdE9mZnNldH1gO1xyXG4gICAgICBpZiAoZHQub2Zmc2V0ICE9PSAwICYmIElBTkFab25lLmNyZWF0ZShvZmZzZXRaKS52YWxpZCkge1xyXG4gICAgICAgIHogPSBvZmZzZXRaO1xyXG4gICAgICAgIHRoaXMuZHQgPSBkdDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBOb3QgYWxsIGZpeGVkLW9mZnNldCB6b25lcyBsaWtlIEV0Yy8rNDozMCBhcmUgcHJlc2VudCBpbiB0emRhdGEuXHJcbiAgICAgICAgLy8gU28gd2UgaGF2ZSB0byBtYWtlIGRvLiBUd28gY2FzZXM6XHJcbiAgICAgICAgLy8gMS4gVGhlIGZvcm1hdCBvcHRpb25zIHRlbGwgdXMgdG8gc2hvdyB0aGUgem9uZS4gV2UgY2FuJ3QgZG8gdGhhdCwgc28gdGhlIGJlc3RcclxuICAgICAgICAvLyB3ZSBjYW4gZG8gaXMgZm9ybWF0IHRoZSBkYXRlIGluIFVUQy5cclxuICAgICAgICAvLyAyLiBUaGUgZm9ybWF0IG9wdGlvbnMgZG9uJ3QgdGVsbCB1cyB0byBzaG93IHRoZSB6b25lLiBUaGVuIHdlIGNhbiBhZGp1c3QgdGhlbVxyXG4gICAgICAgIC8vIHRoZSB0aW1lIGFuZCB0ZWxsIHRoZSBmb3JtYXR0ZXIgdG8gc2hvdyBpdCB0byB1cyBpbiBVVEMsIHNvIHRoYXQgdGhlIHRpbWUgaXMgcmlnaHRcclxuICAgICAgICAvLyBhbmQgdGhlIGJhZCB6b25lIGRvZXNuJ3Qgc2hvdyB1cC5cclxuICAgICAgICB6ID0gJ1VUQyc7XHJcbiAgICAgICAgaWYgKG9wdHMudGltZVpvbmVOYW1lKSB7XHJcbiAgICAgICAgICB0aGlzLmR0ID0gZHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZHQgPSBkdC5vZmZzZXQgPT09IDAgPyBkdCA6IERhdGVUaW1lLmZyb21NaWxsaXMoZHQudHMgKyBkdC5vZmZzZXQgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkdC56b25lLnR5cGUgPT09ICdzeXN0ZW0nKSB7XHJcbiAgICAgIHRoaXMuZHQgPSBkdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZHQgPSBkdDtcclxuICAgICAgeiA9IGR0LnpvbmUubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnRsT3B0cyA9IHsgLi4udGhpcy5vcHRzIH07XHJcbiAgICBpZiAoeikge1xyXG4gICAgICBpbnRsT3B0cy50aW1lWm9uZSA9IHo7XHJcbiAgICB9XHJcbiAgICB0aGlzLmR0ZiA9IGdldENhY2hlZERURihpbnRsLCBpbnRsT3B0cyk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kdGYuZm9ybWF0KHRoaXMuZHQudG9KU0RhdGUoKSk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRUb1BhcnRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHRmLmZvcm1hdFRvUGFydHModGhpcy5kdC50b0pTRGF0ZSgpKTtcclxuICB9XHJcblxyXG4gIHJlc29sdmVkT3B0aW9ucygpIHtcclxuICAgIHJldHVybiB0aGlzLmR0Zi5yZXNvbHZlZE9wdGlvbnMoKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5jbGFzcyBQb2x5UmVsRm9ybWF0dGVyIHtcclxuICBjb25zdHJ1Y3RvcihpbnRsLCBpc0VuZ2xpc2gsIG9wdHMpIHtcclxuICAgIHRoaXMub3B0cyA9IHsgc3R5bGU6ICdsb25nJywgLi4ub3B0cyB9O1xyXG4gICAgaWYgKCFpc0VuZ2xpc2ggJiYgaGFzUmVsYXRpdmUoKSkge1xyXG4gICAgICB0aGlzLnJ0ZiA9IGdldENhY2hlZFJURihpbnRsLCBvcHRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1hdChjb3VudCwgdW5pdCkge1xyXG4gICAgaWYgKHRoaXMucnRmKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJ0Zi5mb3JtYXQoY291bnQsIHVuaXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgdGhpcy5vcHRzLm51bWVyaWMsIHRoaXMub3B0cy5zdHlsZSAhPT0gJ2xvbmcnKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdFRvUGFydHMoY291bnQsIHVuaXQpIHtcclxuICAgIGlmICh0aGlzLnJ0Zikge1xyXG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0VG9QYXJ0cyhjb3VudCwgdW5pdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuXHJcbmNsYXNzIExvY2FsZSB7XHJcbiAgc3RhdGljIGZyb21PcHRzKG9wdHMpIHtcclxuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKG9wdHMubG9jYWxlLCBvcHRzLm51bWJlcmluZ1N5c3RlbSwgb3B0cy5vdXRwdXRDYWxlbmRhciwgb3B0cy5kZWZhdWx0VG9FTik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciwgZGVmYXVsdFRvRU4gPSBmYWxzZSkge1xyXG4gICAgY29uc3Qgc3BlY2lmaWVkTG9jYWxlID0gbG9jYWxlIHx8IFNldHRpbmdzLmRlZmF1bHRMb2NhbGU7XHJcbiAgICAvLyB0aGUgc3lzdGVtIGxvY2FsZSBpcyB1c2VmdWwgZm9yIGh1bWFuIHJlYWRhYmxlIHN0cmluZ3MgYnV0IGFubm95aW5nIGZvciBwYXJzaW5nL2Zvcm1hdHRpbmcga25vd24gZm9ybWF0c1xyXG4gICAgY29uc3QgbG9jYWxlUiA9IHNwZWNpZmllZExvY2FsZSB8fCAoZGVmYXVsdFRvRU4gPyAnZW4tVVMnIDogc3lzdGVtTG9jYWxlKCkpO1xyXG4gICAgY29uc3QgbnVtYmVyaW5nU3lzdGVtUiA9IG51bWJlcmluZ1N5c3RlbSB8fCBTZXR0aW5ncy5kZWZhdWx0TnVtYmVyaW5nU3lzdGVtO1xyXG4gICAgY29uc3Qgb3V0cHV0Q2FsZW5kYXJSID0gb3V0cHV0Q2FsZW5kYXIgfHwgU2V0dGluZ3MuZGVmYXVsdE91dHB1dENhbGVuZGFyO1xyXG4gICAgcmV0dXJuIG5ldyBMb2NhbGUobG9jYWxlUiwgbnVtYmVyaW5nU3lzdGVtUiwgb3V0cHV0Q2FsZW5kYXJSLCBzcGVjaWZpZWRMb2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlc2V0Q2FjaGUoKSB7XHJcbiAgICBzeXNMb2NhbGVDYWNoZSA9IG51bGw7XHJcbiAgICBpbnRsRFRDYWNoZSA9IHt9O1xyXG4gICAgaW50bE51bUNhY2hlID0ge307XHJcbiAgICBpbnRsUmVsQ2FjaGUgPSB7fTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tT2JqZWN0KHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyIH0gPSB7fSkge1xyXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxvY2FsZSwgbnVtYmVyaW5nLCBvdXRwdXRDYWxlbmRhciwgc3BlY2lmaWVkTG9jYWxlKSB7XHJcbiAgICBjb25zdCBbcGFyc2VkTG9jYWxlLCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0sIHBhcnNlZE91dHB1dENhbGVuZGFyXSA9IHBhcnNlTG9jYWxlU3RyaW5nKGxvY2FsZSk7XHJcblxyXG4gICAgdGhpcy5sb2NhbGUgPSBwYXJzZWRMb2NhbGU7XHJcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZyB8fCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0gfHwgbnVsbDtcclxuICAgIHRoaXMub3V0cHV0Q2FsZW5kYXIgPSBvdXRwdXRDYWxlbmRhciB8fCBwYXJzZWRPdXRwdXRDYWxlbmRhciB8fCBudWxsO1xyXG4gICAgdGhpcy5pbnRsID0gaW50bENvbmZpZ1N0cmluZyh0aGlzLmxvY2FsZSwgdGhpcy5udW1iZXJpbmdTeXN0ZW0sIHRoaXMub3V0cHV0Q2FsZW5kYXIpO1xyXG5cclxuICAgIHRoaXMud2Vla2RheXNDYWNoZSA9IHsgZm9ybWF0OiB7fSwgc3RhbmRhbG9uZToge30gfTtcclxuICAgIHRoaXMubW9udGhzQ2FjaGUgPSB7IGZvcm1hdDoge30sIHN0YW5kYWxvbmU6IHt9IH07XHJcbiAgICB0aGlzLm1lcmlkaWVtQ2FjaGUgPSBudWxsO1xyXG4gICAgdGhpcy5lcmFDYWNoZSA9IHt9O1xyXG5cclxuICAgIHRoaXMuc3BlY2lmaWVkTG9jYWxlID0gc3BlY2lmaWVkTG9jYWxlO1xyXG4gICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgZmFzdE51bWJlcnMoKSB7XHJcbiAgICBpZiAodGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPSBzdXBwb3J0c0Zhc3ROdW1iZXJzKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkO1xyXG4gIH1cclxuXHJcbiAgbGlzdGluZ01vZGUoKSB7XHJcbiAgICBjb25zdCBpc0FjdHVhbGx5RW4gPSB0aGlzLmlzRW5nbGlzaCgpO1xyXG4gICAgY29uc3QgaGFzTm9XZWlyZG5lc3MgPSAodGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IG51bGwgfHwgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09ICdsYXRuJylcclxuICAgICAgICYmICh0aGlzLm91dHB1dENhbGVuZGFyID09PSBudWxsIHx8IHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09ICdncmVnb3J5Jyk7XHJcbiAgICByZXR1cm4gaXNBY3R1YWxseUVuICYmIGhhc05vV2VpcmRuZXNzID8gJ2VuJyA6ICdpbnRsJztcclxuICB9XHJcblxyXG4gIGNsb25lKGFsdHMpIHtcclxuICAgIGlmICghYWx0cyB8fCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhbHRzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShcclxuICAgICAgYWx0cy5sb2NhbGUgfHwgdGhpcy5zcGVjaWZpZWRMb2NhbGUsXHJcbiAgICAgIGFsdHMubnVtYmVyaW5nU3lzdGVtIHx8IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxyXG4gICAgICBhbHRzLm91dHB1dENhbGVuZGFyIHx8IHRoaXMub3V0cHV0Q2FsZW5kYXIsXHJcbiAgICAgIGFsdHMuZGVmYXVsdFRvRU4gfHwgZmFsc2UsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVkZWZhdWx0VG9FTihhbHRzID0ge30pIHtcclxuICAgIHJldHVybiB0aGlzLmNsb25lKHsgLi4uYWx0cywgZGVmYXVsdFRvRU46IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICByZWRlZmF1bHRUb1N5c3RlbShhbHRzID0ge30pIHtcclxuICAgIHJldHVybiB0aGlzLmNsb25lKHsgLi4uYWx0cywgZGVmYXVsdFRvRU46IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgbW9udGhzKGxlbmd0aCwgZm9ybWF0ID0gZmFsc2UsIGRlZmF1bHRPSyA9IHRydWUpIHtcclxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIG1vbnRocywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnRsID0gZm9ybWF0ID8geyBtb250aDogbGVuZ3RoLCBkYXk6ICdudW1lcmljJyB9IDogeyBtb250aDogbGVuZ3RoIH07XHJcbiAgICAgIGNvbnN0IGZvcm1hdFN0ciA9IGZvcm1hdCA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnO1xyXG4gICAgICBpZiAoIXRoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdKSB7XHJcbiAgICAgICAgdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBNb250aHMoKGR0KSA9PiB0aGlzLmV4dHJhY3QoZHQsIGludGwsICdtb250aCcpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHdlZWtkYXlzKGxlbmd0aCwgZm9ybWF0ID0gZmFsc2UsIGRlZmF1bHRPSyA9IHRydWUpIHtcclxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIHdlZWtkYXlzLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGludGwgPSBmb3JtYXRcclxuICAgICAgICA/IHtcclxuICAgICAgICAgIHdlZWtkYXk6IGxlbmd0aCwgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICB9XHJcbiAgICAgICAgOiB7IHdlZWtkYXk6IGxlbmd0aCB9O1xyXG4gICAgICBjb25zdCBmb3JtYXRTdHIgPSBmb3JtYXQgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJztcclxuICAgICAgaWYgKCF0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdKSB7XHJcbiAgICAgICAgdGhpcy53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSA9IG1hcFdlZWtkYXlzKChkdCkgPT4gdGhpcy5leHRyYWN0KGR0LCBpbnRsLCAnd2Vla2RheScpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbWVyaWRpZW1zKGRlZmF1bHRPSyA9IHRydWUpIHtcclxuICAgIHJldHVybiBsaXN0U3R1ZmYoXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgZGVmYXVsdE9LLFxyXG4gICAgICAoKSA9PiBtZXJpZGllbXMsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICAvLyBJbiB0aGVvcnkgdGhlcmUgY291bGQgYmUgYXJpYml0cmFyeSBkYXkgcGVyaW9kcy4gV2UncmUgZ29ubmEgYXNzdW1lIHRoZXJlIGFyZSBleGFjdGx5IHR3b1xyXG4gICAgICAgIC8vIGZvciBBTSBhbmQgUE0uIFRoaXMgaXMgcHJvYmFibHkgd3JvbmcsIGJ1dCBpdCdzIG1ha2VzIHBhcnNpbmcgd2F5IGVhc2llci5cclxuICAgICAgICBpZiAoIXRoaXMubWVyaWRpZW1DYWNoZSkge1xyXG4gICAgICAgICAgY29uc3QgaW50bCA9IHsgaG91cjogJ251bWVyaWMnLCBob3VyQ3ljbGU6ICdoMTInIH07XHJcbiAgICAgICAgICB0aGlzLm1lcmlkaWVtQ2FjaGUgPSBbRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMywgOSksIERhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMsIDE5KV0ubWFwKFxyXG4gICAgICAgICAgICAoZHQpID0+IHRoaXMuZXh0cmFjdChkdCwgaW50bCwgJ2RheXBlcmlvZCcpLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1lcmlkaWVtQ2FjaGU7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZXJhcyhsZW5ndGgsIGRlZmF1bHRPSyA9IHRydWUpIHtcclxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIGVyYXMsICgpID0+IHtcclxuICAgICAgY29uc3QgaW50bCA9IHsgZXJhOiBsZW5ndGggfTtcclxuXHJcbiAgICAgIC8vIFRoaXMgaXMgcHJvYmxlbWF0aWMuIERpZmZlcmVudCBjYWxlbmRhcnMgYXJlIGdvaW5nIHRvIGRlZmluZSBlcmFzIHRvdGFsbHkgZGlmZmVyZW50bHkuIFdoYXQgSSBuZWVkIGlzIHRoZSBtaW5pbXVtIHNldCBvZiBkYXRlc1xyXG4gICAgICAvLyB0byBkZWZpbml0ZWx5IGVudW1lcmF0ZSB0aGVtLlxyXG4gICAgICBpZiAoIXRoaXMuZXJhQ2FjaGVbbGVuZ3RoXSkge1xyXG4gICAgICAgIHRoaXMuZXJhQ2FjaGVbbGVuZ3RoXSA9IFtEYXRlVGltZS51dGMoLTQwLCAxLCAxKSwgRGF0ZVRpbWUudXRjKDIwMTcsIDEsIDEpXS5tYXAoKGR0KSA9PiB0aGlzLmV4dHJhY3QoZHQsIGludGwsICdlcmEnKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmVyYUNhY2hlW2xlbmd0aF07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV4dHJhY3QoZHQsIGludGxPcHRzLCBmaWVsZCkge1xyXG4gICAgY29uc3QgZGYgPSB0aGlzLmR0Rm9ybWF0dGVyKGR0LCBpbnRsT3B0cyk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gZGYuZm9ybWF0VG9QYXJ0cygpO1xyXG4gICAgY29uc3QgbWF0Y2hpbmcgPSByZXN1bHRzLmZpbmQoKG0pID0+IG0udHlwZS50b0xvd2VyQ2FzZSgpID09PSBmaWVsZCk7XHJcbiAgICByZXR1cm4gbWF0Y2hpbmcgPyBtYXRjaGluZy52YWx1ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBudW1iZXJGb3JtYXR0ZXIob3B0cyA9IHt9KSB7XHJcbiAgICAvLyB0aGlzIGZvcmNlc2ltcGxlIG9wdGlvbiBpcyBuZXZlciB1c2VkICh0aGUgb25seSBjYWxsZXIgc2hvcnQtY2lyY3VpdHMgb24gaXQsIGJ1dCBpdCBzZWVtcyBzYWZlciB0byBsZWF2ZSlcclxuICAgIC8vIChpbiBjb250cmFzdCwgdGhlIHJlc3Qgb2YgdGhlIGNvbmRpdGlvbiBpcyB1c2VkIGhlYXZpbHkpXHJcbiAgICByZXR1cm4gbmV3IFBvbHlOdW1iZXJGb3JtYXR0ZXIodGhpcy5pbnRsLCBvcHRzLmZvcmNlU2ltcGxlIHx8IHRoaXMuZmFzdE51bWJlcnMsIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgZHRGb3JtYXR0ZXIoZHQsIGludGxPcHRzID0ge30pIHtcclxuICAgIHJldHVybiBuZXcgUG9seURhdGVGb3JtYXR0ZXIoZHQsIHRoaXMuaW50bCwgaW50bE9wdHMpO1xyXG4gIH1cclxuXHJcbiAgcmVsRm9ybWF0dGVyKG9wdHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIG5ldyBQb2x5UmVsRm9ybWF0dGVyKHRoaXMuaW50bCwgdGhpcy5pc0VuZ2xpc2goKSwgb3B0cyk7XHJcbiAgfVxyXG5cclxuICBsaXN0Rm9ybWF0dGVyKG9wdHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIGdldENhY2hlZExGKHRoaXMuaW50bCwgb3B0cyk7XHJcbiAgfVxyXG5cclxuICBpc0VuZ2xpc2goKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmxvY2FsZSA9PT0gJ2VuJ1xyXG4gICAgICAgfHwgdGhpcy5sb2NhbGUudG9Mb3dlckNhc2UoKSA9PT0gJ2VuLXVzJ1xyXG4gICAgICAgfHwgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5pbnRsKS5yZXNvbHZlZE9wdGlvbnMoKS5sb2NhbGUuc3RhcnRzV2l0aCgnZW4tdXMnKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGVxdWFscyhvdGhlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5sb2NhbGUgPT09IG90aGVyLmxvY2FsZVxyXG4gICAgICAgJiYgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IG90aGVyLm51bWJlcmluZ1N5c3RlbVxyXG4gICAgICAgJiYgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gb3RoZXIub3V0cHV0Q2FsZW5kYXJcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gICogVGhpcyBmaWxlIGhhbmRsZXMgcGFyc2luZyBmb3Igd2VsbC1zcGVjaWZpZWQgZm9ybWF0cy4gSGVyZSdzIGhvdyBpdCB3b3JrczpcclxuICAqIFR3byB0aGluZ3MgZ28gaW50byBwYXJzaW5nOiBhIHJlZ2V4IHRvIG1hdGNoIHdpdGggYW5kIGFuIGV4dHJhY3RvciB0byB0YWtlIGFwYXJ0IHRoZSBncm91cHMgaW4gdGhlIG1hdGNoLlxyXG4gICogQW4gZXh0cmFjdG9yIGlzIGp1c3QgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcmVnZXggbWF0Y2ggYXJyYXkgYW5kIHJldHVybnMgYSB7IHllYXI6IC4uLiwgbW9udGg6IC4uLiB9IG9iamVjdFxyXG4gICogcGFyc2UoKSBkb2VzIHRoZSB3b3JrIG9mIGV4ZWN1dGluZyB0aGUgcmVnZXggYW5kIGFwcGx5aW5nIHRoZSBleHRyYWN0b3IuIEl0IHRha2VzIG11bHRpcGxlIHJlZ2V4L2V4dHJhY3RvciBwYWlycyB0byB0cnkgaW4gc2VxdWVuY2UuXHJcbiAgKiBFeHRyYWN0b3JzIGNhbiB0YWtlIGEgXCJjdXJzb3JcIiByZXByZXNlbnRpbmcgdGhlIG9mZnNldCBpbiB0aGUgbWF0Y2ggdG8gbG9vayBhdC4gVGhpcyBtYWtlcyBpdCBlYXN5IHRvIGNvbWJpbmUgZXh0cmFjdG9ycy5cclxuICAqIGNvbWJpbmVFeHRyYWN0b3JzKCkgZG9lcyB0aGUgd29yayBvZiBjb21iaW5pbmcgdGhlbSwga2VlcGluZyB0cmFjayBvZiB0aGUgY3Vyc29yIHRocm91Z2ggbXVsdGlwbGUgZXh0cmFjdGlvbnMuXHJcbiAgKiBTb21lIGV4dHJhY3Rpb25zIGFyZSBzdXBlciBkdW1iIGFuZCBzaW1wbGVQYXJzZSBhbmQgZnJvbVN0cmluZ3MgaGVscCBEUlkgdGhlbS5cclxuICAqL1xyXG5cclxuZnVuY3Rpb24gY29tYmluZVJlZ2V4ZXMoLi4ucmVnZXhlcykge1xyXG4gIGNvbnN0IGZ1bGwgPSByZWdleGVzLnJlZHVjZSgoZiwgcikgPT4gZiArIHIuc291cmNlLCAnJyk7XHJcbiAgcmV0dXJuIFJlZ0V4cChgXiR7ZnVsbH0kYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbWJpbmVFeHRyYWN0b3JzKC4uLmV4dHJhY3RvcnMpIHtcclxuICByZXR1cm4gKG0pID0+IGV4dHJhY3RvcnNcclxuICAgIC5yZWR1Y2UoXHJcbiAgICAgIChbbWVyZ2VkVmFscywgbWVyZ2VkWm9uZSwgY3Vyc29yXSwgZXgpID0+IHtcclxuICAgICAgICBjb25zdCBbdmFsLCB6b25lLCBuZXh0XSA9IGV4KG0sIGN1cnNvcik7XHJcbiAgICAgICAgcmV0dXJuIFt7IC4uLm1lcmdlZFZhbHMsIC4uLnZhbCB9LCB6b25lIHx8IG1lcmdlZFpvbmUsIG5leHRdO1xyXG4gICAgICB9LFxyXG4gICAgICBbe30sIG51bGwsIDFdLFxyXG4gICAgKVxyXG4gICAgLnNsaWNlKDAsIDIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZShzLCAuLi5wYXR0ZXJucykge1xyXG4gIGlmIChzID09IG51bGwpIHtcclxuICAgIHJldHVybiBbbnVsbCwgbnVsbF07XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IFtyZWdleCwgZXh0cmFjdG9yXSBvZiBwYXR0ZXJucykge1xyXG4gICAgY29uc3QgbSA9IHJlZ2V4LmV4ZWMocyk7XHJcbiAgICBpZiAobSkge1xyXG4gICAgICByZXR1cm4gZXh0cmFjdG9yKG0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gW251bGwsIG51bGxdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaW1wbGVQYXJzZSguLi5rZXlzKSB7XHJcbiAgcmV0dXJuIChtYXRjaCwgY3Vyc29yKSA9PiB7XHJcbiAgICBjb25zdCByZXQgPSB7fTtcclxuICAgIGxldCBpO1xyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJldFtrZXlzW2ldXSA9IHBhcnNlSW50ZWdlcihtYXRjaFtjdXJzb3IgKyBpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3JldCwgbnVsbCwgY3Vyc29yICsgaV07XHJcbiAgfTtcclxufVxyXG5cclxuLy8gSVNPIGFuZCBTUUwgcGFyc2luZ1xyXG5jb25zdCBvZmZzZXRSZWdleCA9IC8oPzooWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/KS87XHJcbmNvbnN0IGlzb0V4dGVuZGVkWm9uZSA9IGAoPzoke29mZnNldFJlZ2V4LnNvdXJjZX0/KD86XFxcXFsoJHtpYW5hUmVnZXguc291cmNlfSlcXFxcXSk/KT9gO1xyXG5jb25zdCBpc29UaW1lQmFzZVJlZ2V4ID0gLyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzpbLixdKFxcZHsxLDMwfSkpPyk/KT8vO1xyXG5jb25zdCBpc29UaW1lUmVnZXggPSBSZWdFeHAoYCR7aXNvVGltZUJhc2VSZWdleC5zb3VyY2V9JHtpc29FeHRlbmRlZFpvbmV9YCk7XHJcbmNvbnN0IGlzb1RpbWVFeHRlbnNpb25SZWdleCA9IFJlZ0V4cChgKD86VCR7aXNvVGltZVJlZ2V4LnNvdXJjZX0pP2ApO1xyXG5jb25zdCBpc29ZbWRSZWdleCA9IC8oWystXVxcZHs2fXxcXGR7NH0pKD86LT8oXFxkXFxkKSg/Oi0/KFxcZFxcZCkpPyk/LztcclxuY29uc3QgaXNvV2Vla1JlZ2V4ID0gLyhcXGR7NH0pLT9XKFxcZFxcZCkoPzotPyhcXGQpKT8vO1xyXG5jb25zdCBpc29PcmRpbmFsUmVnZXggPSAvKFxcZHs0fSktPyhcXGR7M30pLztcclxuY29uc3QgZXh0cmFjdElTT1dlZWtEYXRhID0gc2ltcGxlUGFyc2UoJ3dlZWtZZWFyJywgJ3dlZWtOdW1iZXInLCAnd2Vla0RheScpO1xyXG5jb25zdCBleHRyYWN0SVNPT3JkaW5hbERhdGEgPSBzaW1wbGVQYXJzZSgneWVhcicsICdvcmRpbmFsJyk7XHJcbmNvbnN0IHNxbFltZFJlZ2V4ID0gLyhcXGR7NH0pLShcXGRcXGQpLShcXGRcXGQpLzsgLy8gZHVtYmVkLWRvd24gdmVyc2lvbiBvZiB0aGUgSVNPIG9uZVxyXG5jb25zdCBzcWxUaW1lUmVnZXggPSBSZWdFeHAoXHJcbiAgYCR7aXNvVGltZUJhc2VSZWdleC5zb3VyY2V9ID8oPzoke29mZnNldFJlZ2V4LnNvdXJjZX18KCR7aWFuYVJlZ2V4LnNvdXJjZX0pKT9gLFxyXG4pO1xyXG5jb25zdCBzcWxUaW1lRXh0ZW5zaW9uUmVnZXggPSBSZWdFeHAoYCg/OiAke3NxbFRpbWVSZWdleC5zb3VyY2V9KT9gKTtcclxuXHJcbmZ1bmN0aW9uIGludChtYXRjaCwgcG9zLCBmYWxsYmFjaykge1xyXG4gIGNvbnN0IG0gPSBtYXRjaFtwb3NdO1xyXG4gIHJldHVybiBpc1VuZGVmaW5lZChtKSA/IGZhbGxiYWNrIDogcGFyc2VJbnRlZ2VyKG0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0SVNPWW1kKG1hdGNoLCBjdXJzb3IpIHtcclxuICBjb25zdCBpdGVtID0ge1xyXG4gICAgeWVhcjogaW50KG1hdGNoLCBjdXJzb3IpLFxyXG4gICAgbW9udGg6IGludChtYXRjaCwgY3Vyc29yICsgMSwgMSksXHJcbiAgICBkYXk6IGludChtYXRjaCwgY3Vyc29yICsgMiwgMSksXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIFtpdGVtLCBudWxsLCBjdXJzb3IgKyAzXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0cmFjdElTT1RpbWUobWF0Y2gsIGN1cnNvcikge1xyXG4gIGNvbnN0IGl0ZW0gPSB7XHJcbiAgICBob3VyczogaW50KG1hdGNoLCBjdXJzb3IsIDApLFxyXG4gICAgbWludXRlczogaW50KG1hdGNoLCBjdXJzb3IgKyAxLCAwKSxcclxuICAgIHNlY29uZHM6IGludChtYXRjaCwgY3Vyc29yICsgMiwgMCksXHJcbiAgICBtaWxsaXNlY29uZHM6IHBhcnNlTWlsbGlzKG1hdGNoW2N1cnNvciArIDNdKSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0SVNPT2Zmc2V0KG1hdGNoLCBjdXJzb3IpIHtcclxuICBjb25zdCBsb2NhbCA9ICFtYXRjaFtjdXJzb3JdICYmICFtYXRjaFtjdXJzb3IgKyAxXTtcclxuICBjb25zdCBmdWxsT2Zmc2V0ID0gc2lnbmVkT2Zmc2V0KG1hdGNoW2N1cnNvciArIDFdLCBtYXRjaFtjdXJzb3IgKyAyXSk7XHJcbiAgY29uc3Qgem9uZSA9IGxvY2FsID8gbnVsbCA6IEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShmdWxsT2Zmc2V0KTtcclxuICByZXR1cm4gW3t9LCB6b25lLCBjdXJzb3IgKyAzXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0cmFjdElBTkFab25lKG1hdGNoLCBjdXJzb3IpIHtcclxuICBjb25zdCB6b25lID0gbWF0Y2hbY3Vyc29yXSA/IElBTkFab25lLmNyZWF0ZShtYXRjaFtjdXJzb3JdKSA6IG51bGw7XHJcbiAgcmV0dXJuIFt7fSwgem9uZSwgY3Vyc29yICsgMV07XHJcbn1cclxuXHJcbi8vIElTTyB0aW1lIHBhcnNpbmdcclxuXHJcbmNvbnN0IGlzb1RpbWVPbmx5ID0gUmVnRXhwKGBeVD8ke2lzb1RpbWVCYXNlUmVnZXguc291cmNlfSRgKTtcclxuXHJcbi8vIElTTyBkdXJhdGlvbiBwYXJzaW5nXHJcblxyXG5jb25zdCBpc29EdXJhdGlvbiA9IC9eLT9QKD86KD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pWSk/KD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pTSk/KD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pVyk/KD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pRCk/KD86VCg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KUgpPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KU0pPyg/OigtP1xcZHsxLDIwfSkoPzpbLixdKC0/XFxkezEsMjB9KSk/Uyk/KT8pJC87XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0SVNPRHVyYXRpb24obWF0Y2gpIHtcclxuICBjb25zdCBbcywgeWVhclN0ciwgbW9udGhTdHIsIHdlZWtTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIsIG1pbGxpc2Vjb25kc1N0cl0gPSBtYXRjaDtcclxuXHJcbiAgY29uc3QgaGFzTmVnYXRpdmVQcmVmaXggPSBzWzBdID09PSAnLSc7XHJcbiAgY29uc3QgbmVnYXRpdmVTZWNvbmRzID0gc2Vjb25kU3RyICYmIHNlY29uZFN0clswXSA9PT0gJy0nO1xyXG5cclxuICBjb25zdCBtYXliZU5lZ2F0ZSA9IChudW0sIGZvcmNlID0gZmFsc2UpID0+IChudW0gIT09IHVuZGVmaW5lZCAmJiAoZm9yY2UgfHwgKG51bSAmJiBoYXNOZWdhdGl2ZVByZWZpeCkpID8gLW51bSA6IG51bSk7XHJcblxyXG4gIHJldHVybiBbXHJcbiAgICB7XHJcbiAgICAgIHllYXJzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKHllYXJTdHIpKSxcclxuICAgICAgbW9udGhzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKG1vbnRoU3RyKSksXHJcbiAgICAgIHdlZWtzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKHdlZWtTdHIpKSxcclxuICAgICAgZGF5czogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhkYXlTdHIpKSxcclxuICAgICAgaG91cnM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoaG91clN0cikpLFxyXG4gICAgICBtaW51dGVzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKG1pbnV0ZVN0cikpLFxyXG4gICAgICBzZWNvbmRzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKHNlY29uZFN0ciksIHNlY29uZFN0ciA9PT0gJy0wJyksXHJcbiAgICAgIG1pbGxpc2Vjb25kczogbWF5YmVOZWdhdGUocGFyc2VNaWxsaXMobWlsbGlzZWNvbmRzU3RyKSwgbmVnYXRpdmVTZWNvbmRzKSxcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG5cclxuLy8gVGhlc2UgYXJlIGEgbGl0dGxlIGJyYWluZGVhZC4gRURUICpzaG91bGQqIHRlbGwgdXMgdGhhdCB3ZSdyZSBpbiwgc2F5LCBBbWVyaWNhL05ld19Zb3JrXHJcbi8vIGFuZCBub3QganVzdCB0aGF0IHdlJ3JlIGluIC0yNDAgKnJpZ2h0IG5vdyouIEJ1dCBzaW5jZSBJIGRvbid0IHRoaW5rIHRoZXNlIGFyZSB1c2VkIHRoYXQgb2Z0ZW5cclxuLy8gSSdtIGp1c3QgZ29pbmcgdG8gaWdub3JlIHRoYXRcclxuY29uc3Qgb2JzT2Zmc2V0cyA9IHtcclxuICBHTVQ6IDAsXHJcbiAgRURUOiAtNCAqIDYwLFxyXG4gIEVTVDogLTUgKiA2MCxcclxuICBDRFQ6IC01ICogNjAsXHJcbiAgQ1NUOiAtNiAqIDYwLFxyXG4gIE1EVDogLTYgKiA2MCxcclxuICBNU1Q6IC03ICogNjAsXHJcbiAgUERUOiAtNyAqIDYwLFxyXG4gIFBTVDogLTggKiA2MCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgeWVhcjogeWVhclN0ci5sZW5ndGggPT09IDIgPyB1bnRydW5jYXRlWWVhcihwYXJzZUludGVnZXIoeWVhclN0cikpIDogcGFyc2VJbnRlZ2VyKHllYXJTdHIpLFxyXG4gICAgbW9udGg6IG1vbnRoc1Nob3J0LmluZGV4T2YobW9udGhTdHIpICsgMSxcclxuICAgIGRheTogcGFyc2VJbnRlZ2VyKGRheVN0ciksXHJcbiAgICBob3VyOiBwYXJzZUludGVnZXIoaG91clN0ciksXHJcbiAgICBtaW51dGU6IHBhcnNlSW50ZWdlcihtaW51dGVTdHIpLFxyXG4gIH07XHJcblxyXG4gIGlmIChzZWNvbmRTdHIpIHJlc3VsdC5zZWNvbmQgPSBwYXJzZUludGVnZXIoc2Vjb25kU3RyKTtcclxuICBpZiAod2Vla2RheVN0cikge1xyXG4gICAgcmVzdWx0LndlZWtkYXkgPSB3ZWVrZGF5U3RyLmxlbmd0aCA+IDNcclxuICAgICAgPyB3ZWVrZGF5c0xvbmcuaW5kZXhPZih3ZWVrZGF5U3RyKSArIDFcclxuICAgICAgOiB3ZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0cikgKyAxO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gUkZDIDI4MjIvNTMyMlxyXG5jb25zdCByZmMyODIyID0gL14oPzooTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSxcXHMpPyhcXGR7MSwyfSlcXHMoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpXFxzKFxcZHsyLDR9KVxccyhcXGRcXGQpOihcXGRcXGQpKD86OihcXGRcXGQpKT9cXHMoPzooVVR8R01UfFtFQ01QXVtTRF1UKXwoW1p6XSl8KD86KFsrLV1cXGRcXGQpKFxcZFxcZCkpKSQvO1xyXG5cclxuZnVuY3Rpb24gZXh0cmFjdFJGQzI4MjIobWF0Y2gpIHtcclxuICBjb25zdCBbXHJcbiAgICAsXHJcbiAgICB3ZWVrZGF5U3RyLFxyXG4gICAgZGF5U3RyLFxyXG4gICAgbW9udGhTdHIsXHJcbiAgICB5ZWFyU3RyLFxyXG4gICAgaG91clN0cixcclxuICAgIG1pbnV0ZVN0cixcclxuICAgIHNlY29uZFN0cixcclxuICAgIG9ic09mZnNldCxcclxuICAgIG1pbE9mZnNldCxcclxuICAgIG9mZkhvdXJTdHIsXHJcbiAgICBvZmZNaW51dGVTdHIsXHJcbiAgXSA9IG1hdGNoO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcclxuXHJcbiAgbGV0IG9mZnNldDtcclxuICBpZiAob2JzT2Zmc2V0KSB7XHJcbiAgICBvZmZzZXQgPSBvYnNPZmZzZXRzW29ic09mZnNldF07XHJcbiAgfSBlbHNlIGlmIChtaWxPZmZzZXQpIHtcclxuICAgIG9mZnNldCA9IDA7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9mZnNldCA9IHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFtyZXN1bHQsIG5ldyBGaXhlZE9mZnNldFpvbmUob2Zmc2V0KV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXByb2Nlc3NSRkMyODIyKHMpIHtcclxuICAvLyBSZW1vdmUgY29tbWVudHMgYW5kIGZvbGRpbmcgd2hpdGVzcGFjZSBhbmQgcmVwbGFjZSBtdWx0aXBsZS1zcGFjZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxyXG4gIHJldHVybiBzXHJcbiAgICAucmVwbGFjZSgvXFwoW14pXSpcXCl8W1xcblxcdF0vZywgJyAnKVxyXG4gICAgLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCAnICcpXHJcbiAgICAudHJpbSgpO1xyXG59XHJcblxyXG4vLyBodHRwIGRhdGVcclxuXHJcbmNvbnN0IHJmYzExMjMgPSAvXihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLCAoXFxkXFxkKSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpIChcXGR7NH0pIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIEdNVCQvO1xyXG5jb25zdCByZmM4NTAgPSAvXihNb25kYXl8VHVlc2RheXxXZWRuZXNkYXl8VGh1cnNkYXl8RnJpZGF5fFNhdHVyZGF5fFN1bmRheSksIChcXGRcXGQpLShKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYyktKFxcZFxcZCkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgR01UJC87XHJcbmNvbnN0IGFzY2lpID0gL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpICggXFxkfFxcZFxcZCkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgKFxcZHs0fSkkLztcclxuXHJcbmZ1bmN0aW9uIGV4dHJhY3RSRkMxMTIzT3I4NTAobWF0Y2gpIHtcclxuICBjb25zdCBbLCB3ZWVrZGF5U3RyLCBkYXlTdHIsIG1vbnRoU3RyLCB5ZWFyU3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cl0gPSBtYXRjaDtcclxuICBjb25zdCByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XHJcbiAgcmV0dXJuIFtyZXN1bHQsIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4dHJhY3RBU0NJSShtYXRjaCkge1xyXG4gIGNvbnN0IFssIHdlZWtkYXlTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyLCB5ZWFyU3RyXSA9IG1hdGNoO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcclxuICByZXR1cm4gW3Jlc3VsdCwgRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlXTtcclxufVxyXG5cclxuY29uc3QgaXNvWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1ltZFJlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xyXG5jb25zdCBpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1dlZWtSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcclxuY29uc3QgaXNvT3JkaW5hbFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29PcmRpbmFsUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XHJcbmNvbnN0IGlzb1RpbWVDb21iaW5lZFJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvVGltZVJlZ2V4KTtcclxuXHJcbmNvbnN0IGV4dHJhY3RJU09ZbWRUaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoXHJcbiAgZXh0cmFjdElTT1ltZCxcclxuICBleHRyYWN0SVNPVGltZSxcclxuICBleHRyYWN0SVNPT2Zmc2V0LFxyXG4gIGV4dHJhY3RJQU5BWm9uZSxcclxuKTtcclxuY29uc3QgZXh0cmFjdElTT1dlZWtUaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoXHJcbiAgZXh0cmFjdElTT1dlZWtEYXRhLFxyXG4gIGV4dHJhY3RJU09UaW1lLFxyXG4gIGV4dHJhY3RJU09PZmZzZXQsXHJcbiAgZXh0cmFjdElBTkFab25lLFxyXG4pO1xyXG5jb25zdCBleHRyYWN0SVNPT3JkaW5hbERhdGVBbmRUaW1lID0gY29tYmluZUV4dHJhY3RvcnMoXHJcbiAgZXh0cmFjdElTT09yZGluYWxEYXRhLFxyXG4gIGV4dHJhY3RJU09UaW1lLFxyXG4gIGV4dHJhY3RJU09PZmZzZXQsXHJcbiAgZXh0cmFjdElBTkFab25lLFxyXG4pO1xyXG5jb25zdCBleHRyYWN0SVNPVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKFxyXG4gIGV4dHJhY3RJU09UaW1lLFxyXG4gIGV4dHJhY3RJU09PZmZzZXQsXHJcbiAgZXh0cmFjdElBTkFab25lLFxyXG4pO1xyXG5cclxuLypcclxuICAqIEBwcml2YXRlXHJcbiAgKi9cclxuXHJcbmZ1bmN0aW9uIHBhcnNlSVNPRGF0ZShzKSB7XHJcbiAgcmV0dXJuIHBhcnNlKFxyXG4gICAgcyxcclxuICAgIFtpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldF0sXHJcbiAgICBbaXNvV2Vla1dpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09XZWVrVGltZUFuZE9mZnNldF0sXHJcbiAgICBbaXNvT3JkaW5hbFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09PcmRpbmFsRGF0ZUFuZFRpbWVdLFxyXG4gICAgW2lzb1RpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZUFuZE9mZnNldF0sXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VSRkMyODIyRGF0ZShzKSB7XHJcbiAgcmV0dXJuIHBhcnNlKHByZXByb2Nlc3NSRkMyODIyKHMpLCBbcmZjMjgyMiwgZXh0cmFjdFJGQzI4MjJdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VIVFRQRGF0ZShzKSB7XHJcbiAgcmV0dXJuIHBhcnNlKFxyXG4gICAgcyxcclxuICAgIFtyZmMxMTIzLCBleHRyYWN0UkZDMTEyM09yODUwXSxcclxuICAgIFtyZmM4NTAsIGV4dHJhY3RSRkMxMTIzT3I4NTBdLFxyXG4gICAgW2FzY2lpLCBleHRyYWN0QVNDSUldLFxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlSVNPRHVyYXRpb24ocykge1xyXG4gIHJldHVybiBwYXJzZShzLCBbaXNvRHVyYXRpb24sIGV4dHJhY3RJU09EdXJhdGlvbl0pO1xyXG59XHJcblxyXG5jb25zdCBleHRyYWN0SVNPVGltZU9ubHkgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPVGltZSk7XHJcblxyXG5mdW5jdGlvbiBwYXJzZUlTT1RpbWVPbmx5KHMpIHtcclxuICByZXR1cm4gcGFyc2UocywgW2lzb1RpbWVPbmx5LCBleHRyYWN0SVNPVGltZU9ubHldKTtcclxufVxyXG5cclxuY29uc3Qgc3FsWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKHNxbFltZFJlZ2V4LCBzcWxUaW1lRXh0ZW5zaW9uUmVnZXgpO1xyXG5jb25zdCBzcWxUaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKHNxbFRpbWVSZWdleCk7XHJcblxyXG5jb25zdCBleHRyYWN0SVNPVGltZU9mZnNldEFuZElBTkFab25lID0gY29tYmluZUV4dHJhY3RvcnMoXHJcbiAgZXh0cmFjdElTT1RpbWUsXHJcbiAgZXh0cmFjdElTT09mZnNldCxcclxuICBleHRyYWN0SUFOQVpvbmUsXHJcbik7XHJcblxyXG5mdW5jdGlvbiBwYXJzZVNRTChzKSB7XHJcbiAgcmV0dXJuIHBhcnNlKFxyXG4gICAgcyxcclxuICAgIFtzcWxZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldF0sXHJcbiAgICBbc3FsVGltZUNvbWJpbmVkUmVnZXgsIGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmVdLFxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IElOVkFMSUQkMiA9ICdJbnZhbGlkIER1cmF0aW9uJztcclxuXHJcbi8vIHVuaXQgY29udmVyc2lvbiBjb25zdGFudHNcclxuY29uc3QgbG93T3JkZXJNYXRyaXggPSB7XHJcbiAgd2Vla3M6IHtcclxuICAgIGRheXM6IDcsXHJcbiAgICBob3VyczogNyAqIDI0LFxyXG4gICAgbWludXRlczogNyAqIDI0ICogNjAsXHJcbiAgICBzZWNvbmRzOiA3ICogMjQgKiA2MCAqIDYwLFxyXG4gICAgbWlsbGlzZWNvbmRzOiA3ICogMjQgKiA2MCAqIDYwICogMTAwMCxcclxuICB9LFxyXG4gIGRheXM6IHtcclxuICAgIGhvdXJzOiAyNCxcclxuICAgIG1pbnV0ZXM6IDI0ICogNjAsXHJcbiAgICBzZWNvbmRzOiAyNCAqIDYwICogNjAsXHJcbiAgICBtaWxsaXNlY29uZHM6IDI0ICogNjAgKiA2MCAqIDEwMDAsXHJcbiAgfSxcclxuICBob3VyczogeyBtaW51dGVzOiA2MCwgc2Vjb25kczogNjAgKiA2MCwgbWlsbGlzZWNvbmRzOiA2MCAqIDYwICogMTAwMCB9LFxyXG4gIG1pbnV0ZXM6IHsgc2Vjb25kczogNjAsIG1pbGxpc2Vjb25kczogNjAgKiAxMDAwIH0sXHJcbiAgc2Vjb25kczogeyBtaWxsaXNlY29uZHM6IDEwMDAgfSxcclxufTtcclxuY29uc3QgY2FzdWFsTWF0cml4ID0ge1xyXG4gIHllYXJzOiB7XHJcbiAgICBxdWFydGVyczogNCxcclxuICAgIG1vbnRoczogMTIsXHJcbiAgICB3ZWVrczogNTIsXHJcbiAgICBkYXlzOiAzNjUsXHJcbiAgICBob3VyczogMzY1ICogMjQsXHJcbiAgICBtaW51dGVzOiAzNjUgKiAyNCAqIDYwLFxyXG4gICAgc2Vjb25kczogMzY1ICogMjQgKiA2MCAqIDYwLFxyXG4gICAgbWlsbGlzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxyXG4gIH0sXHJcbiAgcXVhcnRlcnM6IHtcclxuICAgIG1vbnRoczogMyxcclxuICAgIHdlZWtzOiAxMyxcclxuICAgIGRheXM6IDkxLFxyXG4gICAgaG91cnM6IDkxICogMjQsXHJcbiAgICBtaW51dGVzOiA5MSAqIDI0ICogNjAsXHJcbiAgICBzZWNvbmRzOiA5MSAqIDI0ICogNjAgKiA2MCxcclxuICAgIG1pbGxpc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxyXG4gIH0sXHJcbiAgbW9udGhzOiB7XHJcbiAgICB3ZWVrczogNCxcclxuICAgIGRheXM6IDMwLFxyXG4gICAgaG91cnM6IDMwICogMjQsXHJcbiAgICBtaW51dGVzOiAzMCAqIDI0ICogNjAsXHJcbiAgICBzZWNvbmRzOiAzMCAqIDI0ICogNjAgKiA2MCxcclxuICAgIG1pbGxpc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxyXG4gIH0sXHJcblxyXG4gIC4uLmxvd09yZGVyTWF0cml4LFxyXG59O1xyXG5jb25zdCBkYXlzSW5ZZWFyQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQwMDtcclxuY29uc3QgZGF5c0luTW9udGhBY2N1cmF0ZSA9IDE0NjA5Ny4wIC8gNDgwMDtcclxuY29uc3QgYWNjdXJhdGVNYXRyaXggPSB7XHJcbiAgeWVhcnM6IHtcclxuICAgIHF1YXJ0ZXJzOiA0LFxyXG4gICAgbW9udGhzOiAxMixcclxuICAgIHdlZWtzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyA3LFxyXG4gICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlLFxyXG4gICAgaG91cnM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0LFxyXG4gICAgbWludXRlczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCxcclxuICAgIHNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCxcclxuICAgIG1pbGxpc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMCxcclxuICB9LFxyXG4gIHF1YXJ0ZXJzOiB7XHJcbiAgICBtb250aHM6IDMsXHJcbiAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gMjgsXHJcbiAgICBkYXlzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyA0LFxyXG4gICAgaG91cnM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCkgLyA0LFxyXG4gICAgbWludXRlczogKGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjApIC8gNCxcclxuICAgIHNlY29uZHM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjApIC8gNCxcclxuICAgIG1pbGxpc2Vjb25kczogKGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDApIC8gNCxcclxuICB9LFxyXG4gIG1vbnRoczoge1xyXG4gICAgd2Vla3M6IGRheXNJbk1vbnRoQWNjdXJhdGUgLyA3LFxyXG4gICAgZGF5czogZGF5c0luTW9udGhBY2N1cmF0ZSxcclxuICAgIGhvdXJzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQsXHJcbiAgICBtaW51dGVzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCxcclxuICAgIHNlY29uZHM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwICogNjAsXHJcbiAgICBtaWxsaXNlY29uZHM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxyXG4gIH0sXHJcbiAgLi4ubG93T3JkZXJNYXRyaXgsXHJcbn07XHJcblxyXG4vLyB1bml0cyBvcmRlcmVkIGJ5IHNpemVcclxuY29uc3Qgb3JkZXJlZFVuaXRzJDEgPSBbXHJcbiAgJ3llYXJzJyxcclxuICAncXVhcnRlcnMnLFxyXG4gICdtb250aHMnLFxyXG4gICd3ZWVrcycsXHJcbiAgJ2RheXMnLFxyXG4gICdob3VycycsXHJcbiAgJ21pbnV0ZXMnLFxyXG4gICdzZWNvbmRzJyxcclxuICAnbWlsbGlzZWNvbmRzJyxcclxuXTtcclxuXHJcbmNvbnN0IHJldmVyc2VVbml0cyA9IG9yZGVyZWRVbml0cyQxLnNsaWNlKDApLnJldmVyc2UoKTtcclxuXHJcbi8vIGNsb25lIHJlYWxseSBtZWFucyBcImNyZWF0ZSBhbm90aGVyIGluc3RhbmNlIGp1c3QgbGlrZSB0aGlzIG9uZSwgYnV0IHdpdGggdGhlc2UgY2hhbmdlc1wiXHJcbmZ1bmN0aW9uIGNsb25lJDEoZHVyLCBhbHRzLCBjbGVhciA9IGZhbHNlKSB7XHJcbiAgLy8gZGVlcCBtZXJnZSBmb3IgdmFsc1xyXG4gIGNvbnN0IGNvbmYgPSB7XHJcbiAgICB2YWx1ZXM6IGNsZWFyID8gYWx0cy52YWx1ZXMgOiB7IC4uLmR1ci52YWx1ZXMsIC4uLihhbHRzLnZhbHVlcyB8fCB7fSkgfSxcclxuICAgIGxvYzogZHVyLmxvYy5jbG9uZShhbHRzLmxvYyksXHJcbiAgICBjb252ZXJzaW9uQWNjdXJhY3k6IGFsdHMuY29udmVyc2lvbkFjY3VyYWN5IHx8IGR1ci5jb252ZXJzaW9uQWNjdXJhY3ksXHJcbiAgfTtcclxuICByZXR1cm4gbmV3IER1cmF0aW9uKGNvbmYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbnRpVHJ1bmMobikge1xyXG4gIHJldHVybiBuIDwgMCA/IE1hdGguZmxvb3IobikgOiBNYXRoLmNlaWwobik7XHJcbn1cclxuXHJcbi8vIE5COiBtdXRhdGVzIHBhcmFtZXRlcnNcclxuZnVuY3Rpb24gY29udmVydChtYXRyaXgsIGZyb21NYXAsIGZyb21Vbml0LCB0b01hcCwgdG9Vbml0KSB7XHJcbiAgY29uc3QgY29udiA9IG1hdHJpeFt0b1VuaXRdW2Zyb21Vbml0XTtcclxuICBjb25zdCByYXcgPSBmcm9tTWFwW2Zyb21Vbml0XSAvIGNvbnY7XHJcbiAgY29uc3Qgc2FtZVNpZ24gPSBNYXRoLnNpZ24ocmF3KSA9PT0gTWF0aC5zaWduKHRvTWFwW3RvVW5pdF0pO1xyXG4gIC8vIG9rLCBzbyB0aGlzIGlzIHdpbGQsIGJ1dCBzZWUgdGhlIG1hdHJpeCBpbiB0aGUgdGVzdHNcclxuICBjb25zdCBhZGRlZCA9ICFzYW1lU2lnbiAmJiB0b01hcFt0b1VuaXRdICE9PSAwICYmIE1hdGguYWJzKHJhdykgPD0gMSA/IGFudGlUcnVuYyhyYXcpIDogTWF0aC50cnVuYyhyYXcpO1xyXG4gIHRvTWFwW3RvVW5pdF0gKz0gYWRkZWQ7XHJcbiAgZnJvbU1hcFtmcm9tVW5pdF0gLT0gYWRkZWQgKiBjb252O1xyXG59XHJcblxyXG4vLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlcyhtYXRyaXgsIHZhbHMpIHtcclxuICByZXZlcnNlVW5pdHMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT4ge1xyXG4gICAgaWYgKCFpc1VuZGVmaW5lZCh2YWxzW2N1cnJlbnRdKSkge1xyXG4gICAgICBpZiAocHJldmlvdXMpIHtcclxuICAgICAgICBjb252ZXJ0KG1hdHJpeCwgdmFscywgcHJldmlvdXMsIHZhbHMsIGN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjdXJyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZXZpb3VzO1xyXG4gIH0sIG51bGwpO1xyXG59XHJcblxyXG4vKipcclxuICAqIEEgRHVyYXRpb24gb2JqZWN0IHJlcHJlc2VudHMgYSBwZXJpb2Qgb2YgdGltZSwgbGlrZSBcIjIgbW9udGhzXCIgb3IgXCIxIGRheSwgMSBob3VyXCIuIENvbmNlcHR1YWxseSwgaXQncyBqdXN0IGEgbWFwIG9mIHVuaXRzIHRvIHRoZWlyIHF1YW50aXRpZXMsIGFjY29tcGFuaWVkIGJ5IHNvbWUgYWRkaXRpb25hbCBjb25maWd1cmF0aW9uIGFuZCBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLiBUaGV5IGNhbiBiZSB1c2VkIG9uIHRoZWlyIG93biBvciBpbiBjb25qdW5jdGlvbiB3aXRoIG90aGVyIEx1eG9uIHR5cGVzOyBmb3IgZXhhbXBsZSwgeW91IGNhbiB1c2Uge0BsaW5rIERhdGVUaW1lI3BsdXN9IHRvIGFkZCBhIER1cmF0aW9uIG9iamVjdCB0byBhIERhdGVUaW1lLCBwcm9kdWNpbmcgYW5vdGhlciBEYXRlVGltZS5cclxuICAqXHJcbiAgKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgY29tbW9ubHkgdXNlZCBtZXRob2RzIGFuZCBnZXR0ZXJzIGluIER1cmF0aW9uOlxyXG4gICpcclxuICAqICogKipDcmVhdGlvbioqIFRvIGNyZWF0ZSBhIER1cmF0aW9uLCB1c2Uge0BsaW5rIER1cmF0aW9uI2Zyb21NaWxsaXN9LCB7QGxpbmsgRHVyYXRpb24jZnJvbU9iamVjdH0sIG9yIHtAbGluayBEdXJhdGlvbiNmcm9tSVNPfS5cclxuICAqICogKipVbml0IHZhbHVlcyoqIFNlZSB0aGUge0BsaW5rIER1cmF0aW9uI3llYXJzfSwge0BsaW5rIER1cmF0aW9uI21vbnRoc30sIHtAbGluayBEdXJhdGlvbiN3ZWVrc30sIHtAbGluayBEdXJhdGlvbiNkYXlzfSwge0BsaW5rIER1cmF0aW9uI2hvdXJzfSwge0BsaW5rIER1cmF0aW9uI21pbnV0ZXN9LCB7QGxpbmsgRHVyYXRpb24jc2Vjb25kc30sIHtAbGluayBEdXJhdGlvbiNtaWxsaXNlY29uZHN9IGFjY2Vzc29ycy5cclxuICAqICogKipDb25maWd1cmF0aW9uKiogU2VlICB7QGxpbmsgRHVyYXRpb24jbG9jYWxlfSBhbmQge0BsaW5rIER1cmF0aW9uI251bWJlcmluZ1N5c3RlbX0gYWNjZXNzb3JzLlxyXG4gICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG5ldyBEdXJhdGlvbnMgb3V0IG9mIG9sZCBvbmVzIHVzZSB7QGxpbmsgRHVyYXRpb24jcGx1c30sIHtAbGluayBEdXJhdGlvbiNtaW51c30sIHtAbGluayBEdXJhdGlvbiNub3JtYWxpemV9LCB7QGxpbmsgRHVyYXRpb24jc2V0fSwge0BsaW5rIER1cmF0aW9uI3JlY29uZmlndXJlfSwge0BsaW5rIER1cmF0aW9uI3NoaWZ0VG99LCBhbmQge0BsaW5rIER1cmF0aW9uI25lZ2F0ZX0uXHJcbiAgKiAqICoqT3V0cHV0KiogVG8gY29udmVydCB0aGUgRHVyYXRpb24gaW50byBvdGhlciByZXByZXNlbnRhdGlvbnMsIHNlZSB7QGxpbmsgRHVyYXRpb24jYXN9LCB7QGxpbmsgRHVyYXRpb24jdG9JU099LCB7QGxpbmsgRHVyYXRpb24jdG9Gb3JtYXR9LCBhbmQge0BsaW5rIER1cmF0aW9uI3RvSlNPTn1cclxuICAqXHJcbiAgKiBUaGVyZSdzIGFyZSBtb3JlIG1ldGhvZHMgZG9jdW1lbnRlZCBiZWxvdy4gSW4gYWRkaXRpb24sIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHN1YnRsZXIgdG9waWNzIGxpa2UgaW50ZXJuYXRpb25hbGl6YXRpb24gYW5kIHZhbGlkaXR5LCBzZWUgdGhlIGV4dGVybmFsIGRvY3VtZW50YXRpb24uXHJcbiAgKi9cclxuY2xhc3MgRHVyYXRpb24ge1xyXG4gIC8qKlxyXG4gICAgKiBAcHJpdmF0ZVxyXG4gICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIGNvbnN0IGFjY3VyYXRlID0gY29uZmlnLmNvbnZlcnNpb25BY2N1cmFjeSA9PT0gJ2xvbmd0ZXJtJyB8fCBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy52YWx1ZXMgPSBjb25maWcudmFsdWVzO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLmxvYyA9IGNvbmZpZy5sb2MgfHwgTG9jYWxlLmNyZWF0ZSgpO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLmNvbnZlcnNpb25BY2N1cmFjeSA9IGFjY3VyYXRlID8gJ2xvbmd0ZXJtJyA6ICdjYXN1YWwnO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLmludmFsaWQgPSBjb25maWcuaW52YWxpZCB8fCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLm1hdHJpeCA9IGFjY3VyYXRlID8gYWNjdXJhdGVNYXRyaXggOiBjYXN1YWxNYXRyaXg7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMuaXNMdXhvbkR1cmF0aW9uID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgRHVyYXRpb24gZnJvbSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBvZiBtaWxsaXNlY29uZHNcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBwYXJzaW5nXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbU1pbGxpcyhjb3VudCwgb3B0cykge1xyXG4gICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaWxsaXNlY29uZHM6IGNvdW50IH0sIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcnMnIGFuZCAnaG91cnMnLlxyXG4gICAgKiBJZiB0aGlzIG9iamVjdCBpcyBlbXB0eSB0aGVuIGEgemVybyBtaWxsaXNlY29uZHMgZHVyYXRpb24gaXMgcmV0dXJuZWQuXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGNyZWF0ZSB0aGUgRGF0ZVRpbWUgZnJvbVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnllYXJzXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoucXVhcnRlcnNcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5tb250aHNcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrc1xyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmRheXNcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5ob3Vyc1xyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbnV0ZXNcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5zZWNvbmRzXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWlsbGlzZWNvbmRzXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz1bXV0gLSBvcHRpb25zIGZvciBjcmVhdGluZyB0aGlzIER1cmF0aW9uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbU9iamVjdChvYmosIG9wdHMgPSB7fSkge1xyXG4gICAgaWYgKG9iaiA9PSBudWxsIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcclxuICAgICAgICBgRHVyYXRpb24uZnJvbU9iamVjdDogYXJndW1lbnQgZXhwZWN0ZWQgdG8gYmUgYW4gb2JqZWN0LCBnb3QgJHtcclxuICAgICAgICAgIG9iaiA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBvYmpcclxuICAgICAgICB9YCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IER1cmF0aW9uKHtcclxuICAgICAgdmFsdWVzOiBub3JtYWxpemVPYmplY3Qob2JqLCBEdXJhdGlvbi5ub3JtYWxpemVVbml0KSxcclxuICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRzKSxcclxuICAgICAgY29udmVyc2lvbkFjY3VyYWN5OiBvcHRzLmNvbnZlcnNpb25BY2N1cmFjeSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gRHVyYXRpb25MaWtlLlxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0ge09iamVjdCB8IG51bWJlciB8IER1cmF0aW9ufSBkdXJhdGlvbkxpa2VcclxuICAgICogT25lIG9mOlxyXG4gICAgKiAtIG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcnMnIGFuZCAnaG91cnMnLlxyXG4gICAgKiAtIG51bWJlciByZXByZXNlbnRpbmcgbWlsbGlzZWNvbmRzXHJcbiAgICAqIC0gRHVyYXRpb24gaW5zdGFuY2VcclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uTGlrZSkge1xyXG4gICAgaWYgKGlzTnVtYmVyKGR1cmF0aW9uTGlrZSkpIHtcclxuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21NaWxsaXMoZHVyYXRpb25MaWtlKTtcclxuICAgIH0gaWYgKER1cmF0aW9uLmlzRHVyYXRpb24oZHVyYXRpb25MaWtlKSkge1xyXG4gICAgICByZXR1cm4gZHVyYXRpb25MaWtlO1xyXG4gICAgfSBpZiAodHlwZW9mIGR1cmF0aW9uTGlrZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QoZHVyYXRpb25MaWtlKTtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcclxuICAgICAgYFVua25vd24gZHVyYXRpb24gYXJndW1lbnQgJHtkdXJhdGlvbkxpa2V9IG9mIHR5cGUgJHt0eXBlb2YgZHVyYXRpb25MaWtlfWAsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYW4gSVNPIDg2MDEgZHVyYXRpb24gc3RyaW5nLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRleHQgdG8gcGFyc2VcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIGZvciBwYXJzaW5nXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1AzWTZNMVc0RFQxMkgzME01UycpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAzLCBtb250aHM6IDYsIHdlZWtzOiAxLCBkYXlzOiA0LCBob3VyczogMTIsIG1pbnV0ZXM6IDMwLCBzZWNvbmRzOiA1IH1cclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUFQyM0gnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjMgfVxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQNVkzTScpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiA1LCBtb250aHM6IDMgfVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21JU08odGV4dCwgb3B0cykge1xyXG4gICAgY29uc3QgW3BhcnNlZF0gPSBwYXJzZUlTT0R1cmF0aW9uKHRleHQpO1xyXG4gICAgaWYgKHBhcnNlZCkge1xyXG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChwYXJzZWQsIG9wdHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoJ3VucGFyc2FibGUnLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMWApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYW4gSVNPIDg2MDEgdGltZSBzdHJpbmcuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcclxuICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lc1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTE6MjI6MzMuNDQ0JykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAyMiwgc2Vjb25kczogMzMsIG1pbGxpc2Vjb25kczogNDQ0IH1cclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExOjAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJ1QxMTowMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMTAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJ1QxMTAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tSVNPVGltZSh0ZXh0LCBvcHRzKSB7XHJcbiAgICBjb25zdCBbcGFyc2VkXSA9IHBhcnNlSVNPVGltZU9ubHkodGV4dCk7XHJcbiAgICBpZiAocGFyc2VkKSB7XHJcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KHBhcnNlZCwgb3B0cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZCgndW5wYXJzYWJsZScsIGB0aGUgaW5wdXQgXCIke3RleHR9XCIgY2FuJ3QgYmUgcGFyc2VkIGFzIElTTyA4NjAxYCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGFuIGludmFsaWQgRHVyYXRpb24uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIGRhdGV0aW1lIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgc3RhdGljIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbiA9IG51bGwpIHtcclxuICAgIGlmICghcmVhc29uKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcignbmVlZCB0byBzcGVjaWZ5IGEgcmVhc29uIHRoZSBEdXJhdGlvbiBpcyBpbnZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcclxuXHJcbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWREdXJhdGlvbkVycm9yKGludmFsaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBEdXJhdGlvbih7IGludmFsaWQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQHByaXZhdGVcclxuICAgICovXHJcbiAgc3RhdGljIG5vcm1hbGl6ZVVuaXQodW5pdCkge1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHtcclxuICAgICAgeWVhcjogJ3llYXJzJyxcclxuICAgICAgeWVhcnM6ICd5ZWFycycsXHJcbiAgICAgIHF1YXJ0ZXI6ICdxdWFydGVycycsXHJcbiAgICAgIHF1YXJ0ZXJzOiAncXVhcnRlcnMnLFxyXG4gICAgICBtb250aDogJ21vbnRocycsXHJcbiAgICAgIG1vbnRoczogJ21vbnRocycsXHJcbiAgICAgIHdlZWs6ICd3ZWVrcycsXHJcbiAgICAgIHdlZWtzOiAnd2Vla3MnLFxyXG4gICAgICBkYXk6ICdkYXlzJyxcclxuICAgICAgZGF5czogJ2RheXMnLFxyXG4gICAgICBob3VyOiAnaG91cnMnLFxyXG4gICAgICBob3VyczogJ2hvdXJzJyxcclxuICAgICAgbWludXRlOiAnbWludXRlcycsXHJcbiAgICAgIG1pbnV0ZXM6ICdtaW51dGVzJyxcclxuICAgICAgc2Vjb25kOiAnc2Vjb25kcycsXHJcbiAgICAgIHNlY29uZHM6ICdzZWNvbmRzJyxcclxuICAgICAgbWlsbGlzZWNvbmQ6ICdtaWxsaXNlY29uZHMnLFxyXG4gICAgICBtaWxsaXNlY29uZHM6ICdtaWxsaXNlY29uZHMnLFxyXG4gICAgfVt1bml0ID8gdW5pdC50b0xvd2VyQ2FzZSgpIDogdW5pdF07XHJcblxyXG4gICAgaWYgKCFub3JtYWxpemVkKSB0aHJvdyBuZXcgSW52YWxpZFVuaXRFcnJvcih1bml0KTtcclxuXHJcbiAgICByZXR1cm4gbm9ybWFsaXplZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYSBEdXJhdGlvbi4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xyXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb1xyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBzdGF0aWMgaXNEdXJhdGlvbihvKSB7XHJcbiAgICByZXR1cm4gKG8gJiYgby5pc0x1eG9uRHVyYXRpb24pIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCAgdGhlIGxvY2FsZSBvZiBhIER1cmF0aW9uLCBzdWNoICdlbi1HQidcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IGxvY2FsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgbnVtYmVyaW5nIHN5c3RlbSBvZiBhIER1cmF0aW9uLCBzdWNoICdiZW5nJy4gVGhlIG51bWJlcmluZyBzeXN0ZW0gaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIER1cmF0aW9uXHJcbiAgICAqXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBudW1iZXJpbmdTeXN0ZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuIFlvdSBtYXkgdXNlIHRoZXNlIHRva2VuczpcclxuICAgICogKiBgU2AgZm9yIG1pbGxpc2Vjb25kc1xyXG4gICAgKiAqIGBzYCBmb3Igc2Vjb25kc1xyXG4gICAgKiAqIGBtYCBmb3IgbWludXRlc1xyXG4gICAgKiAqIGBoYCBmb3IgaG91cnNcclxuICAgICogKiBgZGAgZm9yIGRheXNcclxuICAgICogKiBgd2AgZm9yIHdlZWtzXHJcbiAgICAqICogYE1gIGZvciBtb250aHNcclxuICAgICogKiBgeWAgZm9yIHllYXJzXHJcbiAgICAqIE5vdGVzOlxyXG4gICAgKiAqIEFkZCBwYWRkaW5nIGJ5IHJlcGVhdGluZyB0aGUgdG9rZW4sIGUuZy4gXCJ5eVwiIHBhZHMgdGhlIHllYXJzIHRvIHR3byBkaWdpdHMsIFwiaGhoaFwiIHBhZHMgdGhlIGhvdXJzIG91dCB0byBmb3VyIGRpZ2l0c1xyXG4gICAgKiAqIFRva2VucyBjYW4gYmUgZXNjYXBlZCBieSB3cmFwcGluZyB3aXRoIHNpbmdsZSBxdW90ZXMuXHJcbiAgICAqICogVGhlIGR1cmF0aW9uIHdpbGwgYmUgY29udmVydGVkIHRvIHRoZSBzZXQgb2YgdW5pdHMgaW4gdGhlIGZvcm1hdCBzdHJpbmcgdXNpbmcge0BsaW5rIER1cmF0aW9uI3NoaWZ0VG99IGFuZCB0aGUgRHVyYXRpb25zJ3MgY29udmVyc2lvbiBhY2N1cmFjeSBzZXR0aW5nLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCBzdHJpbmdcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZmxvb3I9dHJ1ZV0gLSBmbG9vciBudW1lcmljYWwgdmFsdWVzXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcInkgZCBzXCIpIC8vPT4gXCIxIDYgMlwiXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcInl5IGRkIHNzc1wiKSAvLz0+IFwiMDEgMDYgMDAyXCJcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwiTSBTXCIpIC8vPT4gXCIxMiA1MTg0MDIwMDBcIlxyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvRm9ybWF0KGZtdCwgb3B0cyA9IHt9KSB7XHJcbiAgICAvLyByZXZlcnNlLWNvbXBhdCBzaW5jZSAxLjI7IHdlIGFsd2F5cyByb3VuZCBkb3duIG5vdywgbmV2ZXIgdXAsIGFuZCB3ZSBkbyBpdCBieSBkZWZhdWx0XHJcbiAgICBjb25zdCBmbXRPcHRzID0ge1xyXG4gICAgICAuLi5vcHRzLFxyXG4gICAgICBmbG9vcjogb3B0cy5yb3VuZCAhPT0gZmFsc2UgJiYgb3B0cy5mbG9vciAhPT0gZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxyXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MsIGZtdE9wdHMpLmZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyh0aGlzLCBmbXQpXHJcbiAgICAgIDogSU5WQUxJRCQyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBEdXJhdGlvbiB3aXRoIGFsbCB1bml0cyBpbmNsdWRlZC5cclxuICAgICogVG8gbW9kaWZ5IGl0cyBiZWhhdmlvciB1c2UgdGhlIGBsaXN0U3R5bGVgIGFuZCBhbnkgSW50bC5OdW1iZXJGb3JtYXQgb3B0aW9uLCB0aG91Z2ggYHVuaXREaXNwbGF5YCBpcyBlc3BlY2lhbGx5IHJlbGV2YW50LlxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0ludGwvTnVtYmVyRm9ybWF0XHJcbiAgICAqIEBwYXJhbSBvcHRzIC0gT24gb3B0aW9uIG9iamVjdCB0byBvdmVycmlkZSB0aGUgZm9ybWF0dGluZy4gQWNjZXB0cyB0aGUgc2FtZSBrZXlzIGFzIHRoZSBvcHRpb25zIHBhcmFtZXRlciBvZiB0aGUgbmF0aXZlIGBJbnQuTnVtYmVyRm9ybWF0YCBjb25zdHJ1Y3RvciwgYXMgd2VsbCBhcyBgbGlzdFN0eWxlYC5cclxuICAgICogQGV4YW1wbGVcclxuICAgICogYGBganNcclxuICAgICogdmFyIGR1ciA9IER1cmF0aW9uLmZyb21PYmplY3QoeyBkYXlzOiAxLCBob3VyczogNSwgbWludXRlczogNiB9KVxyXG4gICAgKiBkdXIudG9IdW1hbigpIC8vPT4gJzEgZGF5LCA1IGhvdXJzLCA2IG1pbnV0ZXMnXHJcbiAgICAqIGR1ci50b0h1bWFuKHsgbGlzdFN0eWxlOiBcImxvbmdcIiB9KSAvLz0+ICcxIGRheSwgNSBob3VycywgYW5kIDYgbWludXRlcydcclxuICAgICogZHVyLnRvSHVtYW4oeyB1bml0RGlzcGxheTogXCJzaG9ydFwiIH0pIC8vPT4gJzEgZGF5LCA1IGhyLCA2IG1pbidcclxuICAgICogYGBgXHJcbiAgICAqL1xyXG4gIHRvSHVtYW4ob3B0cyA9IHt9KSB7XHJcbiAgICBjb25zdCBsID0gb3JkZXJlZFVuaXRzJDFcclxuICAgICAgLm1hcCgodW5pdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMudmFsdWVzW3VuaXRdO1xyXG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCh2YWwpKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jXHJcbiAgICAgICAgICAubnVtYmVyRm9ybWF0dGVyKHtcclxuICAgICAgICAgICAgc3R5bGU6ICd1bml0JywgdW5pdERpc3BsYXk6ICdsb25nJywgLi4ub3B0cywgdW5pdDogdW5pdC5zbGljZSgwLCAtMSksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmZvcm1hdCh2YWwpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmlsdGVyKChuKSA9PiBuKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5sb2NcclxuICAgICAgLmxpc3RGb3JtYXR0ZXIoeyB0eXBlOiAnY29uanVuY3Rpb24nLCBzdHlsZTogb3B0cy5saXN0U3R5bGUgfHwgJ25hcnJvdycsIC4uLm9wdHMgfSlcclxuICAgICAgLmZvcm1hdChsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCB0aGlzIER1cmF0aW9uJ3MgdmFsdWVzLlxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfVxyXG4gICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHRvT2JqZWN0KCkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcclxuICAgIHJldHVybiB7IC4uLnRoaXMudmFsdWVzIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24uXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMywgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQM1lUNDVTJ1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA0LCBzZWNvbmRzOiA0NSB9KS50b0lTTygpIC8vPT4gJ1A0TVQ0NVMnXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtb250aHM6IDUgfSkudG9JU08oKSAvLz0+ICdQNU0nXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaW51dGVzOiA1IH0pLnRvSVNPKCkgLy89PiAnUFQ1TSdcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbGxpc2Vjb25kczogNiB9KS50b0lTTygpIC8vPT4gJ1BUMC4wMDZTJ1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvSVNPKCkge1xyXG4gICAgLy8gd2UgY291bGQgdXNlIHRoZSBmb3JtYXR0ZXIsIGJ1dCB0aGlzIGlzIGFuIGVhc2llciB3YXkgdG8gZ2V0IHRoZSBtaW5pbXVtIHN0cmluZ1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGxldCBzID0gJ1AnO1xyXG4gICAgaWYgKHRoaXMueWVhcnMgIT09IDApIHMgKz0gYCR7dGhpcy55ZWFyc31ZYDtcclxuICAgIGlmICh0aGlzLm1vbnRocyAhPT0gMCB8fCB0aGlzLnF1YXJ0ZXJzICE9PSAwKSBzICs9IGAke3RoaXMubW9udGhzICsgdGhpcy5xdWFydGVycyAqIDN9TWA7XHJcbiAgICBpZiAodGhpcy53ZWVrcyAhPT0gMCkgcyArPSBgJHt0aGlzLndlZWtzfVdgO1xyXG4gICAgaWYgKHRoaXMuZGF5cyAhPT0gMCkgcyArPSBgJHt0aGlzLmRheXN9RGA7XHJcbiAgICBpZiAodGhpcy5ob3VycyAhPT0gMCB8fCB0aGlzLm1pbnV0ZXMgIT09IDAgfHwgdGhpcy5zZWNvbmRzICE9PSAwIHx8IHRoaXMubWlsbGlzZWNvbmRzICE9PSAwKSB7IHMgKz0gJ1QnOyB9XHJcbiAgICBpZiAodGhpcy5ob3VycyAhPT0gMCkgcyArPSBgJHt0aGlzLmhvdXJzfUhgO1xyXG4gICAgaWYgKHRoaXMubWludXRlcyAhPT0gMCkgcyArPSBgJHt0aGlzLm1pbnV0ZXN9TWA7XHJcbiAgICBpZiAodGhpcy5zZWNvbmRzICE9PSAwIHx8IHRoaXMubWlsbGlzZWNvbmRzICE9PSAwKVxyXG4gICAgLy8gdGhpcyB3aWxsIGhhbmRsZSBcImZsb2F0aW5nIHBvaW50IG1hZG5lc3NcIiBieSByZW1vdmluZyBleHRyYSBkZWNpbWFsIHBsYWNlc1xyXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTg4MDA0L2lzLWZsb2F0aW5nLXBvaW50LW1hdGgtYnJva2VuXHJcbiAgICB7IHMgKz0gYCR7cm91bmRUbyh0aGlzLnNlY29uZHMgKyB0aGlzLm1pbGxpc2Vjb25kcyAvIDEwMDAsIDMpfVNgOyB9XHJcbiAgICBpZiAocyA9PT0gJ1AnKSBzICs9ICdUMFMnO1xyXG4gICAgcmV0dXJuIHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24sIGZvcm1hdHRlZCBhcyBhIHRpbWUgb2YgZGF5LlxyXG4gICAgKiBOb3RlIHRoYXQgdGhpcyB3aWxsIHJldHVybiBudWxsIGlmIHRoZSBkdXJhdGlvbiBpcyBpbnZhbGlkLCBuZWdhdGl2ZSwgb3IgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIDI0IGhvdXJzLlxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVzXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlUHJlZml4PWZhbHNlXSAtIGluY2x1ZGUgdGhlIGBUYCBwcmVmaXhcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKCkgLy89PiAnMTE6MDA6MDAuMDAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IHN1cHByZXNzTWlsbGlzZWNvbmRzOiB0cnVlIH0pIC8vPT4gJzExOjAwOjAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IHN1cHByZXNzU2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcxMTowMCdcclxuICAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBpbmNsdWRlUHJlZml4OiB0cnVlIH0pIC8vPT4gJ1QxMTowMDowMC4wMDAnXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzExMDAwMC4wMDAnXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9JU09UaW1lKG9wdHMgPSB7fSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IG1pbGxpcyA9IHRoaXMudG9NaWxsaXMoKTtcclxuICAgIGlmIChtaWxsaXMgPCAwIHx8IG1pbGxpcyA+PSA4NjQwMDAwMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgb3B0cyA9IHtcclxuICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHM6IGZhbHNlLFxyXG4gICAgICBzdXBwcmVzc1NlY29uZHM6IGZhbHNlLFxyXG4gICAgICBpbmNsdWRlUHJlZml4OiBmYWxzZSxcclxuICAgICAgZm9ybWF0OiAnZXh0ZW5kZWQnLFxyXG4gICAgICAuLi5vcHRzLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2hpZnRUbygnaG91cnMnLCAnbWludXRlcycsICdzZWNvbmRzJywgJ21pbGxpc2Vjb25kcycpO1xyXG5cclxuICAgIGxldCBmbXQgPSBvcHRzLmZvcm1hdCA9PT0gJ2Jhc2ljJyA/ICdoaG1tJyA6ICdoaDptbSc7XHJcblxyXG4gICAgaWYgKCFvcHRzLnN1cHByZXNzU2Vjb25kcyB8fCB2YWx1ZS5zZWNvbmRzICE9PSAwIHx8IHZhbHVlLm1pbGxpc2Vjb25kcyAhPT0gMCkge1xyXG4gICAgICBmbXQgKz0gb3B0cy5mb3JtYXQgPT09ICdiYXNpYycgPyAnc3MnIDogJzpzcyc7XHJcbiAgICAgIGlmICghb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcyB8fCB2YWx1ZS5taWxsaXNlY29uZHMgIT09IDApIHtcclxuICAgICAgICBmbXQgKz0gJy5TU1MnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHN0ciA9IHZhbHVlLnRvRm9ybWF0KGZtdCk7XHJcblxyXG4gICAgaWYgKG9wdHMuaW5jbHVkZVByZWZpeCkge1xyXG4gICAgICBzdHIgPSBgVCR7c3RyfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBKU09OLlxyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvSlNPTigpIHtcclxuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gZGVidWdnaW5nLlxyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIG1pbGxpc2Vjb25kcyB2YWx1ZSBvZiB0aGlzIER1cmF0aW9uLlxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIHRvTWlsbGlzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXMoJ21pbGxpc2Vjb25kcycpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gbWlsbGlzZWNvbmRzIHZhbHVlIG9mIHRoaXMgRHVyYXRpb24uIEFsaWFzIG9mIHtAbGluayB0b01pbGxpc31cclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICB2YWx1ZU9mKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9NaWxsaXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBNYWtlIHRoaXMgRHVyYXRpb24gbG9uZ2VyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cclxuICAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gYWRkLiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgcGx1cyhkdXJhdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge307XHJcblxyXG4gICAgZm9yIChjb25zdCBrIG9mIG9yZGVyZWRVbml0cyQxKSB7XHJcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShkdXIudmFsdWVzLCBrKSB8fCBoYXNPd25Qcm9wZXJ0eSh0aGlzLnZhbHVlcywgaykpIHtcclxuICAgICAgICByZXN1bHRba10gPSBkdXIuZ2V0KGspICsgdGhpcy5nZXQoayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7IHZhbHVlczogcmVzdWx0IH0sIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIE1ha2UgdGhpcyBEdXJhdGlvbiBzaG9ydGVyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cclxuICAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBtaW51cyhkdXJhdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xyXG4gICAgcmV0dXJuIHRoaXMucGx1cyhkdXIubmVnYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFNjYWxlIHRoaXMgRHVyYXRpb24gYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxyXG4gICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIHVuaXQuIEFyaXR5IGlzIDEgb3IgMjogdGhlIHZhbHVlIG9mIHRoZSB1bml0IGFuZCwgb3B0aW9uYWxseSwgdGhlIHVuaXQgbmFtZS4gTXVzdCByZXR1cm4gYSBudW1iZXIuXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgbWludXRlczogMzAgfSkubWFwVW5pdHMoeCA9PiB4ICogMikgLy89PiB7IGhvdXJzOiAyLCBtaW51dGVzOiA2MCB9XHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgbWludXRlczogMzAgfSkubWFwVW5pdHMoKHgsIHUpID0+IHUgPT09IFwiaG91clwiID8geCAqIDIgOiB4KSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDMwIH1cclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIG1hcFVuaXRzKGZuKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyh0aGlzLnZhbHVlcykpIHtcclxuICAgICAgcmVzdWx0W2tdID0gYXNOdW1iZXIoZm4odGhpcy52YWx1ZXNba10sIGspKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHsgdmFsdWVzOiByZXN1bHQgfSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSB2YWx1ZSBvZiB1bml0LlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGUnIG9yICdkYXknXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCd5ZWFycycpIC8vPT4gMlxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmdldCgnbW9udGhzJykgLy89PiAwXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCdkYXlzJykgLy89PiAzXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0KHVuaXQpIHtcclxuICAgIHJldHVybiB0aGlzW0R1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodW5pdCldO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFwiU2V0XCIgdGhlIHZhbHVlcyBvZiBzcGVjaWZpZWQgdW5pdHMuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIC0gYSBtYXBwaW5nIG9mIHVuaXRzIHRvIG51bWJlcnNcclxuICAgICogQGV4YW1wbGUgZHVyLnNldCh7IHllYXJzOiAyMDE3IH0pXHJcbiAgICAqIEBleGFtcGxlIGR1ci5zZXQoeyBob3VyczogOCwgbWludXRlczogMzAgfSlcclxuICAgICogQHJldHVybiB7RHVyYXRpb259XHJcbiAgICAqL1xyXG4gIHNldCh2YWx1ZXMpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICBjb25zdCBtaXhlZCA9IHsgLi4udGhpcy52YWx1ZXMsIC4uLm5vcm1hbGl6ZU9iamVjdCh2YWx1ZXMsIER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQpIH07XHJcbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7IHZhbHVlczogbWl4ZWQgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogXCJTZXRcIiB0aGUgbG9jYWxlIGFuZC9vciBudW1iZXJpbmdTeXN0ZW0uICBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXHJcbiAgICAqIEBleGFtcGxlIGR1ci5yZWNvbmZpZ3VyZSh7IGxvY2FsZTogJ2VuLUdCJyB9KVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgcmVjb25maWd1cmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgY29udmVyc2lvbkFjY3VyYWN5IH0gPSB7fSkge1xyXG4gICAgY29uc3QgbG9jID0gdGhpcy5sb2MuY2xvbmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSB9KTtcclxuICAgIGNvbnN0IG9wdHMgPSB7IGxvYyB9O1xyXG5cclxuICAgIGlmIChjb252ZXJzaW9uQWNjdXJhY3kpIHtcclxuICAgICAgb3B0cy5jb252ZXJzaW9uQWNjdXJhY3kgPSBjb252ZXJzaW9uQWNjdXJhY3k7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywgb3B0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGR1cmF0aW9uIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlcycgb3IgJ2RheXMnXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAxfSkuYXMoJ2RheXMnKSAvLz0+IDM2NVxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdtb250aHMnKSAvLz0+IDEyXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe2hvdXJzOiA2MH0pLmFzKCdkYXlzJykgLy89PiAyLjVcclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBhcyh1bml0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zaGlmdFRvKHVuaXQpLmdldCh1bml0KSA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZWR1Y2UgdGhpcyBEdXJhdGlvbiB0byBpdHMgY2Fub25pY2FsIHJlcHJlc2VudGF0aW9uIGluIGl0cyBjdXJyZW50IHVuaXRzLlxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDIsIGRheXM6IDUwMDAgfSkubm9ybWFsaXplKCkudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDE1LCBkYXlzOiAyNTUgfVxyXG4gICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEyLCBtaW51dGVzOiAtNDUgfSkubm9ybWFsaXplKCkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAxNSB9XHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBub3JtYWxpemUoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcbiAgICBjb25zdCB2YWxzID0gdGhpcy50b09iamVjdCgpO1xyXG4gICAgbm9ybWFsaXplVmFsdWVzKHRoaXMubWF0cml4LCB2YWxzKTtcclxuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHsgdmFsdWVzOiB2YWxzIH0sIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENvbnZlcnQgdGhpcyBEdXJhdGlvbiBpbnRvIGl0cyByZXByZXNlbnRhdGlvbiBpbiBhIGRpZmZlcmVudCBzZXQgb2YgdW5pdHMuXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgc2Vjb25kczogMzAgfSkuc2hpZnRUbygnbWludXRlcycsICdtaWxsaXNlY29uZHMnKS50b09iamVjdCgpIC8vPT4geyBtaW51dGVzOiA2MCwgbWlsbGlzZWNvbmRzOiAzMDAwMCB9XHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBzaGlmdFRvKC4uLnVuaXRzKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgaWYgKHVuaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1bml0cyA9IHVuaXRzLm1hcCgodSkgPT4gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1KSk7XHJcblxyXG4gICAgY29uc3QgYnVpbHQgPSB7fTtcclxuICAgIGNvbnN0IGFjY3VtdWxhdGVkID0ge307XHJcbiAgICBjb25zdCB2YWxzID0gdGhpcy50b09iamVjdCgpO1xyXG4gICAgbGV0IGxhc3RVbml0O1xyXG5cclxuICAgIGZvciAoY29uc3QgayBvZiBvcmRlcmVkVW5pdHMkMSkge1xyXG4gICAgICBpZiAodW5pdHMuaW5kZXhPZihrKSA+PSAwKSB7XHJcbiAgICAgICAgbGFzdFVuaXQgPSBrO1xyXG5cclxuICAgICAgICBsZXQgb3duID0gMDtcclxuXHJcbiAgICAgICAgLy8gYW55dGhpbmcgd2UgaGF2ZW4ndCBib2lsZWQgZG93biB5ZXQgc2hvdWxkIGdldCBib2lsZWQgdG8gdGhpcyB1bml0XHJcbiAgICAgICAgZm9yIChjb25zdCBhayBpbiBhY2N1bXVsYXRlZCkge1xyXG4gICAgICAgICAgb3duICs9IHRoaXMubWF0cml4W2FrXVtrXSAqIGFjY3VtdWxhdGVkW2FrXTtcclxuICAgICAgICAgIGFjY3VtdWxhdGVkW2FrXSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwbHVzIGFueXRoaW5nIHRoYXQncyBhbHJlYWR5IGluIHRoaXMgdW5pdFxyXG4gICAgICAgIGlmIChpc051bWJlcih2YWxzW2tdKSkge1xyXG4gICAgICAgICAgb3duICs9IHZhbHNba107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpID0gTWF0aC50cnVuYyhvd24pO1xyXG4gICAgICAgIGJ1aWx0W2tdID0gaTtcclxuICAgICAgICBhY2N1bXVsYXRlZFtrXSA9IChvd24gKiAxMDAwIC0gaSAqIDEwMDApIC8gMTAwMDtcclxuXHJcbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyBmdXJ0aGVyIGRvd24gdGhlIGNoYWluIHRoYXQgc2hvdWxkIGJlIHJvbGxlZCB1cCBpbiB0byB0aGlzXHJcbiAgICAgICAgZm9yIChjb25zdCBkb3duIGluIHZhbHMpIHtcclxuICAgICAgICAgIGlmIChvcmRlcmVkVW5pdHMkMS5pbmRleE9mKGRvd24pID4gb3JkZXJlZFVuaXRzJDEuaW5kZXhPZihrKSkge1xyXG4gICAgICAgICAgICBjb252ZXJ0KHRoaXMubWF0cml4LCB2YWxzLCBkb3duLCBidWlsdCwgayk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG90aGVyd2lzZSwga2VlcCBpdCBpbiB0aGUgd2luZ3MgdG8gYm9pbCBpdCBsYXRlclxyXG4gICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKHZhbHNba10pKSB7XHJcbiAgICAgICAgYWNjdW11bGF0ZWRba10gPSB2YWxzW2tdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYW55dGhpbmcgbGVmdG92ZXIgYmVjb21lcyB0aGUgZGVjaW1hbCBmb3IgdGhlIGxhc3QgdW5pdFxyXG4gICAgLy8gbGFzdFVuaXQgbXVzdCBiZSBkZWZpbmVkIHNpbmNlIHVuaXRzIGlzIG5vdCBlbXB0eVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWNjdW11bGF0ZWQpIHtcclxuICAgICAgaWYgKGFjY3VtdWxhdGVkW2tleV0gIT09IDApIHtcclxuICAgICAgICBidWlsdFtsYXN0VW5pdF1cclxuICAgICAgICAgICArPSBrZXkgPT09IGxhc3RVbml0ID8gYWNjdW11bGF0ZWRba2V5XSA6IGFjY3VtdWxhdGVkW2tleV0gLyB0aGlzLm1hdHJpeFtsYXN0VW5pdF1ba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHsgdmFsdWVzOiBidWlsdCB9LCB0cnVlKS5ub3JtYWxpemUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gdGhlIG5lZ2F0aXZlIG9mIHRoaXMgRHVyYXRpb24uXHJcbiAgICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgc2Vjb25kczogMzAgfSkubmVnYXRlKCkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IC0xLCBzZWNvbmRzOiAtMzAgfVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgbmVnYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG4gICAgY29uc3QgbmVnYXRlZCA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHRoaXMudmFsdWVzKSkge1xyXG4gICAgICBuZWdhdGVkW2tdID0gdGhpcy52YWx1ZXNba10gPT09IDAgPyAwIDogLXRoaXMudmFsdWVzW2tdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywgeyB2YWx1ZXM6IG5lZ2F0ZWQgfSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSB5ZWFycy5cclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IHllYXJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnllYXJzIHx8IDAgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBxdWFydGVycy5cclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IHF1YXJ0ZXJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnF1YXJ0ZXJzIHx8IDAgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBtb250aHMuXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBtb250aHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubW9udGhzIHx8IDAgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSB3ZWVrc1xyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgd2Vla3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMud2Vla3MgfHwgMCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGRheXMuXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBkYXlzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLmRheXMgfHwgMCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGhvdXJzLlxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgaG91cnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuaG91cnMgfHwgMCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIG1pbnV0ZXMuXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBtaW51dGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbnV0ZXMgfHwgMCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIHNlY29uZHMuXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IHNlY29uZHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuc2Vjb25kcyB8fCAwIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgbWlsbGlzZWNvbmRzLlxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBtaWxsaXNlY29uZHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubWlsbGlzZWNvbmRzIHx8IDAgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBEdXJhdGlvbiBpcyBpbnZhbGlkLiBJbnZhbGlkIGR1cmF0aW9ucyBhcmUgcmV0dXJuZWQgYnkgZGlmZiBvcGVyYXRpb25zXHJcbiAgICAqIG9uIGludmFsaWQgRGF0ZVRpbWVzIG9yIEludGVydmFscy5cclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIER1cmF0aW9uIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEdXJhdGlvbiBpcyB2YWxpZFxyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBpbnZhbGlkUmVhc29uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgRHVyYXRpb24gYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIER1cmF0aW9uIGlzIHZhbGlkXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBFcXVhbGl0eSBjaGVja1xyXG4gICAgKiBUd28gRHVyYXRpb25zIGFyZSBlcXVhbCBpZmYgdGhleSBoYXZlIHRoZSBzYW1lIHVuaXRzIGFuZCB0aGUgc2FtZSB2YWx1ZXMgZm9yIGVhY2ggdW5pdC5cclxuICAgICogQHBhcmFtIHtEdXJhdGlvbn0gb3RoZXJcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgZXF1YWxzKG90aGVyKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXIuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmxvYy5lcXVhbHMob3RoZXIubG9jKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXEodjEsIHYyKSB7XHJcbiAgICAgIC8vIENvbnNpZGVyIDAgYW5kIHVuZGVmaW5lZCBhcyBlcXVhbFxyXG4gICAgICBpZiAodjEgPT09IHVuZGVmaW5lZCB8fCB2MSA9PT0gMCkgcmV0dXJuIHYyID09PSB1bmRlZmluZWQgfHwgdjIgPT09IDA7XHJcbiAgICAgIHJldHVybiB2MSA9PT0gdjI7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCB1IG9mIG9yZGVyZWRVbml0cyQxKSB7XHJcbiAgICAgIGlmICghZXEodGhpcy52YWx1ZXNbdV0sIG90aGVyLnZhbHVlc1t1XSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgSU5WQUxJRCQxID0gJ0ludmFsaWQgSW50ZXJ2YWwnO1xyXG5cclxuLy8gY2hlY2tzIGlmIHRoZSBzdGFydCBpcyBlcXVhbCB0byBvciBiZWZvcmUgdGhlIGVuZFxyXG5mdW5jdGlvbiB2YWxpZGF0ZVN0YXJ0RW5kKHN0YXJ0LCBlbmQpIHtcclxuICBpZiAoIXN0YXJ0IHx8ICFzdGFydC5pc1ZhbGlkKSB7XHJcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZCgnbWlzc2luZyBvciBpbnZhbGlkIHN0YXJ0Jyk7XHJcbiAgfSBpZiAoIWVuZCB8fCAhZW5kLmlzVmFsaWQpIHtcclxuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKCdtaXNzaW5nIG9yIGludmFsaWQgZW5kJyk7XHJcbiAgfSBpZiAoZW5kIDwgc3RhcnQpIHtcclxuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFxyXG4gICAgICAnZW5kIGJlZm9yZSBzdGFydCcsXHJcbiAgICAgIGBUaGUgZW5kIG9mIGFuIGludGVydmFsIG11c3QgYmUgYWZ0ZXIgaXRzIHN0YXJ0LCBidXQgeW91IGhhZCBzdGFydD0ke3N0YXJ0LnRvSVNPKCl9IGFuZCBlbmQ9JHtlbmQudG9JU08oKX1gLFxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQW4gSW50ZXJ2YWwgb2JqZWN0IHJlcHJlc2VudHMgYSBoYWxmLW9wZW4gaW50ZXJ2YWwgb2YgdGltZSwgd2hlcmUgZWFjaCBlbmRwb2ludCBpcyBhIHtAbGluayBEYXRlVGltZX0uIENvbmNlcHR1YWxseSwgaXQncyBhIGNvbnRhaW5lciBmb3IgdGhvc2UgdHdvIGVuZHBvaW50cywgYWNjb21wYW5pZWQgYnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIGNvbXBhcmluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxyXG4gICpcclxuICAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gSW50ZXJ2YWw6XHJcbiAgKlxyXG4gICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGFuIEludGVydmFsLCB1c2Uge0BsaW5rIEludGVydmFsI2Zyb21EYXRlVGltZXN9LCB7QGxpbmsgSW50ZXJ2YWwjYWZ0ZXJ9LCB7QGxpbmsgSW50ZXJ2YWwjYmVmb3JlfSwgb3Ige0BsaW5rIEludGVydmFsI2Zyb21JU099LlxyXG4gICogKiAqKkFjY2Vzc29ycyoqIFVzZSB7QGxpbmsgSW50ZXJ2YWwjc3RhcnR9IGFuZCB7QGxpbmsgSW50ZXJ2YWwjZW5kfSB0byBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQuXHJcbiAgKiAqICoqSW50ZXJyb2dhdGlvbioqIFRvIGFuYWx5emUgdGhlIEludGVydmFsLCB1c2Uge0BsaW5rIEludGVydmFsI2NvdW50fSwge0BsaW5rIEludGVydmFsI2xlbmd0aH0sIHtAbGluayBJbnRlcnZhbCNoYXNTYW1lfSwge0BsaW5rIEludGVydmFsI2NvbnRhaW5zfSwge0BsaW5rIEludGVydmFsI2lzQWZ0ZXJ9LCBvciB7QGxpbmsgSW50ZXJ2YWwjaXNCZWZvcmV9LlxyXG4gICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG90aGVyIEludGVydmFscyBvdXQgb2YgdGhpcyBvbmUsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjc2V0fSwge0BsaW5rIEludGVydmFsI3NwbGl0QXR9LCB7QGxpbmsgSW50ZXJ2YWwjc3BsaXRCeX0sIHtAbGluayBJbnRlcnZhbCNkaXZpZGVFcXVhbGx5fSwge0BsaW5rIEludGVydmFsI21lcmdlfSwge0BsaW5rIEludGVydmFsI3hvcn0sIHtAbGluayBJbnRlcnZhbCN1bmlvbn0sIHtAbGluayBJbnRlcnZhbCNpbnRlcnNlY3Rpb259LCBvciB7QGxpbmsgSW50ZXJ2YWwjZGlmZmVyZW5jZX0uXHJcbiAgKiAqICoqQ29tcGFyaXNvbioqIFRvIGNvbXBhcmUgdGhpcyBJbnRlcnZhbCB0byBhbm90aGVyIG9uZSwgdXNlIHtAbGluayBJbnRlcnZhbCNlcXVhbHN9LCB7QGxpbmsgSW50ZXJ2YWwjb3ZlcmxhcHN9LCB7QGxpbmsgSW50ZXJ2YWwjYWJ1dHNTdGFydH0sIHtAbGluayBJbnRlcnZhbCNhYnV0c0VuZH0sIHtAbGluayBJbnRlcnZhbCNlbmd1bGZzfVxyXG4gICogKiAqKk91dHB1dCoqIFRvIGNvbnZlcnQgdGhlIEludGVydmFsIGludG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCBzZWUge0BsaW5rIEludGVydmFsI3RvU3RyaW5nfSwge0BsaW5rIEludGVydmFsI3RvSVNPfSwge0BsaW5rIEludGVydmFsI3RvSVNPRGF0ZX0sIHtAbGluayBJbnRlcnZhbCN0b0lTT1RpbWV9LCB7QGxpbmsgSW50ZXJ2YWwjdG9Gb3JtYXR9LCBhbmQge0BsaW5rIEludGVydmFsI3RvRHVyYXRpb259LlxyXG4gICovXHJcbmNsYXNzIEludGVydmFsIHtcclxuICAvKipcclxuICAgICogQHByaXZhdGVcclxuICAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMucyA9IGNvbmZpZy5zdGFydDtcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5lID0gY29uZmlnLmVuZDtcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5pc0x1eG9uSW50ZXJ2YWwgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhbiBpbnZhbGlkIEludGVydmFsLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBJbnRlcnZhbCBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cclxuICAgICogQHJldHVybiB7SW50ZXJ2YWx9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24gPSBudWxsKSB7XHJcbiAgICBpZiAoIXJlYXNvbikge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoJ25lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgSW50ZXJ2YWwgaXMgaW52YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XHJcblxyXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkSW50ZXJ2YWxFcnJvcihpbnZhbGlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgSW50ZXJ2YWwoeyBpbnZhbGlkIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGEgc3RhcnQgRGF0ZVRpbWUgYW5kIGFuIGVuZCBEYXRlVGltZS4gSW5jbHVzaXZlIG9mIHRoZSBzdGFydCBidXQgbm90IHRoZSBlbmQuXHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IHN0YXJ0XHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IGVuZFxyXG4gICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21EYXRlVGltZXMoc3RhcnQsIGVuZCkge1xyXG4gICAgY29uc3QgYnVpbHRTdGFydCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpO1xyXG4gICAgY29uc3QgYnVpbHRFbmQgPSBmcmllbmRseURhdGVUaW1lKGVuZCk7XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGVFcnJvciA9IHZhbGlkYXRlU3RhcnRFbmQoYnVpbHRTdGFydCwgYnVpbHRFbmQpO1xyXG5cclxuICAgIGlmICh2YWxpZGF0ZUVycm9yID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG5ldyBJbnRlcnZhbCh7XHJcbiAgICAgICAgc3RhcnQ6IGJ1aWx0U3RhcnQsXHJcbiAgICAgICAgZW5kOiBidWlsdEVuZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWRhdGVFcnJvcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhIER1cmF0aW9uIHRvIGV4dGVuZCB0by5cclxuICAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnRcclxuICAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsLlxyXG4gICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cclxuICAgICovXHJcbiAgc3RhdGljIGFmdGVyKHN0YXJ0LCBkdXJhdGlvbikge1xyXG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbik7XHJcbiAgICBjb25zdCBkdCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpO1xyXG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQsIGR0LnBsdXMoZHVyKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYW4gZW5kIERhdGVUaW1lIGFuZCBhIER1cmF0aW9uIHRvIGV4dGVuZCBiYWNrd2FyZHMgdG8uXHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IGVuZFxyXG4gICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwuXHJcbiAgICAqIEByZXR1cm4ge0ludGVydmFsfVxyXG4gICAgKi9cclxuICBzdGF0aWMgYmVmb3JlKGVuZCwgZHVyYXRpb24pIHtcclxuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xyXG4gICAgY29uc3QgZHQgPSBmcmllbmRseURhdGVUaW1lKGVuZCk7XHJcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdC5taW51cyhkdXIpLCBkdCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYW4gSVNPIDg2MDEgc3RyaW5nLlxyXG4gICAgKiBBY2NlcHRzIGA8c3RhcnQ+LzxlbmQ+YCwgYDxzdGFydD4vPGR1cmF0aW9uPmAsIGFuZCBgPGR1cmF0aW9uPi88ZW5kPmAgZm9ybWF0cy5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSVNPIHN0cmluZyB0byBwYXJzZVxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdIC0gb3B0aW9ucyB0byBwYXNzIHtAbGluayBEYXRlVGltZSNmcm9tSVNPfSBhbmQgb3B0aW9uYWxseSB7QGxpbmsgRHVyYXRpb24jZnJvbUlTT31cclxuICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xyXG4gICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21JU08odGV4dCwgb3B0cykge1xyXG4gICAgY29uc3QgW3MsIGVdID0gKHRleHQgfHwgJycpLnNwbGl0KCcvJywgMik7XHJcbiAgICBpZiAocyAmJiBlKSB7XHJcbiAgICAgIGxldCBzdGFydDsgbGV0XHJcbiAgICAgICAgc3RhcnRJc1ZhbGlkO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHN0YXJ0ID0gRGF0ZVRpbWUuZnJvbUlTTyhzLCBvcHRzKTtcclxuICAgICAgICBzdGFydElzVmFsaWQgPSBzdGFydC5pc1ZhbGlkO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgc3RhcnRJc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBlbmQ7IGxldFxyXG4gICAgICAgIGVuZElzVmFsaWQ7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZW5kID0gRGF0ZVRpbWUuZnJvbUlTTyhlLCBvcHRzKTtcclxuICAgICAgICBlbmRJc1ZhbGlkID0gZW5kLmlzVmFsaWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBlbmRJc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdGFydElzVmFsaWQgJiYgZW5kSXNWYWxpZCkge1xyXG4gICAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0LCBlbmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc3RhcnRJc1ZhbGlkKSB7XHJcbiAgICAgICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUlTTyhlLCBvcHRzKTtcclxuICAgICAgICBpZiAoZHVyLmlzVmFsaWQpIHtcclxuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5hZnRlcihzdGFydCwgZHVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoZW5kSXNWYWxpZCkge1xyXG4gICAgICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21JU08ocywgb3B0cyk7XHJcbiAgICAgICAgaWYgKGR1ci5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICByZXR1cm4gSW50ZXJ2YWwuYmVmb3JlKGVuZCwgZHVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKCd1bnBhcnNhYmxlJywgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYW4gSW50ZXJ2YWwuIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcclxuICAgICogQHBhcmFtIHtvYmplY3R9IG9cclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgc3RhdGljIGlzSW50ZXJ2YWwobykge1xyXG4gICAgcmV0dXJuIChvICYmIG8uaXNMdXhvbkludGVydmFsKSB8fCBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBzdGFydCBvZiB0aGUgSW50ZXJ2YWxcclxuICAgICogQHR5cGUge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBnZXQgc3RhcnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBlbmQgb2YgdGhlIEludGVydmFsXHJcbiAgICAqIEB0eXBlIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgZ2V0IGVuZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGF0IGxlYXN0IGl0cyBzdGFydCwgbWVhbmluZyB0aGF0IHRoZSBJbnRlcnZhbCBpc24ndCAnYmFja3dhcmRzJy5cclxuICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGdldCBpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZFJlYXNvbiA9PT0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIGVycm9yIGNvZGUgaWYgdGhpcyBJbnRlcnZhbCBpcyBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBJbnRlcnZhbCBpcyB2YWxpZFxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIEludGVydmFsIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBJbnRlcnZhbCBpcyB2YWxpZFxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgaW52YWxpZEV4cGxhbmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbCBpbiB0aGUgc3BlY2lmaWVkIHVuaXQuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIHJldHVybiB0aGUgbGVuZ3RoIGluLlxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGxlbmd0aCh1bml0ID0gJ21pbGxpc2Vjb25kcycpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRvRHVyYXRpb24oLi4uW3VuaXRdKS5nZXQodW5pdCkgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgY291bnQgb2YgbWludXRlcywgaG91cnMsIGRheXMsIG1vbnRocywgb3IgeWVhcnMgaW5jbHVkZWQgaW4gdGhlIEludGVydmFsLCBldmVuIGluIHBhcnQuXHJcbiAgICAqIFVubGlrZSB7QGxpbmsgSW50ZXJ2YWwjbGVuZ3RofSB0aGlzIGNvdW50cyBzZWN0aW9ucyBvZiB0aGUgY2FsZW5kYXIsIG5vdCBwZXJpb2RzIG9mIHRpbWUsIGUuZy4gc3BlY2lmeWluZyAnZGF5J1xyXG4gICAgKiBhc2tzICd3aGF0IGRhdGVzIGFyZSBpbmNsdWRlZCBpbiB0aGlzIGludGVydmFsPycsIG5vdCAnaG93IG1hbnkgZGF5cyBsb25nIGlzIHRoaXMgaW50ZXJ2YWw/J1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3VuaXQ9J21pbGxpc2Vjb25kcyddIC0gdGhlIHVuaXQgb2YgdGltZSB0byBjb3VudC5cclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBjb3VudCh1bml0ID0gJ21pbGxpc2Vjb25kcycpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gTmFOO1xyXG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLnN0YXJ0LnN0YXJ0T2YodW5pdCk7XHJcbiAgICBjb25zdCBlbmQgPSB0aGlzLmVuZC5zdGFydE9mKHVuaXQpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZW5kLmRpZmYoc3RhcnQsIHVuaXQpLmdldCh1bml0KSkgKyAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgYW5kIGVuZCBhcmUgYm90aCBpbiB0aGUgc2FtZSB1bml0IG9mIHRpbWVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNoZWNrIHNhbWVuZXNzIG9uXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGhhc1NhbWUodW5pdCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuaXNFbXB0eSgpIHx8IHRoaXMuZS5taW51cygxKS5oYXNTYW1lKHRoaXMucywgdW5pdCkgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGhhcyB0aGUgc2FtZSBzdGFydCBhbmQgZW5kIERhdGVUaW1lcy5cclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLnMudmFsdWVPZigpID09PSB0aGlzLmUudmFsdWVPZigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBzdGFydCBpcyBhZnRlciB0aGUgc3BlY2lmaWVkIERhdGVUaW1lLlxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBkYXRlVGltZVxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBpc0FmdGVyKGRhdGVUaW1lKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXMucyA+IGRhdGVUaW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYmVmb3JlIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGlzQmVmb3JlKGRhdGVUaW1lKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXMuZSA8PSBkYXRlVGltZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGNvbnRhaW5zKGRhdGVUaW1lKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXMucyA8PSBkYXRlVGltZSAmJiB0aGlzLmUgPiBkYXRlVGltZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBcIlNldHNcIiB0aGUgc3RhcnQgYW5kL29yIGVuZCBkYXRlcy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIEludGVydmFsLlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIC0gdGhlIHZhbHVlcyB0byBzZXRcclxuICAgICogQHBhcmFtIHtEYXRlVGltZX0gdmFsdWVzLnN0YXJ0IC0gdGhlIHN0YXJ0aW5nIERhdGVUaW1lXHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IHZhbHVlcy5lbmQgLSB0aGUgZW5kaW5nIERhdGVUaW1lXHJcbiAgICAqIEByZXR1cm4ge0ludGVydmFsfVxyXG4gICAgKi9cclxuICBzZXQoeyBzdGFydCwgZW5kIH0gPSB7fSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQgfHwgdGhpcy5zLCBlbmQgfHwgdGhpcy5lKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGF0IGVhY2ggb2YgdGhlIHNwZWNpZmllZCBEYXRlVGltZXNcclxuICAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIHVuaXQgb2YgdGltZSB0byBjb3VudC5cclxuICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAqL1xyXG4gIHNwbGl0QXQoLi4uZGF0ZVRpbWVzKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIFtdO1xyXG4gICAgY29uc3Qgc29ydGVkID0gZGF0ZVRpbWVzXHJcbiAgICAgIC5tYXAoZnJpZW5kbHlEYXRlVGltZSlcclxuICAgICAgLmZpbHRlcigoZCkgPT4gdGhpcy5jb250YWlucyhkKSlcclxuICAgICAgLnNvcnQoKTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgIGxldCB7IHMgfSA9IHRoaXM7XHJcbiAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgd2hpbGUgKHMgPCB0aGlzLmUpIHtcclxuICAgICAgY29uc3QgYWRkZWQgPSBzb3J0ZWRbaV0gfHwgdGhpcy5lO1xyXG4gICAgICBjb25zdCBuZXh0ID0gK2FkZGVkID4gK3RoaXMuZSA/IHRoaXMuZSA6IGFkZGVkO1xyXG4gICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBuZXh0KSk7XHJcbiAgICAgIHMgPSBuZXh0O1xyXG4gICAgICBpICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogU3BsaXQgdGhpcyBJbnRlcnZhbCBpbnRvIHNtYWxsZXIgSW50ZXJ2YWxzLCBlYWNoIG9mIHRoZSBzcGVjaWZpZWQgbGVuZ3RoLlxyXG4gICAgKiBMZWZ0IG92ZXIgdGltZSBpcyBncm91cGVkIGludG8gYSBzbWFsbGVyIGludGVydmFsXHJcbiAgICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgbGVuZ3RoIG9mIGVhY2ggcmVzdWx0aW5nIGludGVydmFsLlxyXG4gICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICovXHJcbiAgc3BsaXRCeShkdXJhdGlvbikge1xyXG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbik7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIWR1ci5pc1ZhbGlkIHx8IGR1ci5hcygnbWlsbGlzZWNvbmRzJykgPT09IDApIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB7IHMgfSA9IHRoaXM7XHJcbiAgICBsZXQgaWR4ID0gMTtcclxuICAgIGxldCBuZXh0O1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7XHJcbiAgICAgIGNvbnN0IGFkZGVkID0gdGhpcy5zdGFydC5wbHVzKGR1ci5tYXBVbml0cygoeCkgPT4geCAqIGlkeCkpO1xyXG4gICAgICBuZXh0ID0gK2FkZGVkID4gK3RoaXMuZSA/IHRoaXMuZSA6IGFkZGVkO1xyXG4gICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBuZXh0KSk7XHJcbiAgICAgIHMgPSBuZXh0O1xyXG4gICAgICBpZHggKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc21hbGxlciBpbnRlcnZhbHMuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlBhcnRzIC0gVGhlIG51bWJlciBvZiBJbnRlcnZhbHMgdG8gZGl2aWRlIHRoZSBJbnRlcnZhbCBpbnRvLlxyXG4gICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICovXHJcbiAgZGl2aWRlRXF1YWxseShudW1iZXJPZlBhcnRzKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIFtdO1xyXG4gICAgcmV0dXJuIHRoaXMuc3BsaXRCeSh0aGlzLmxlbmd0aCgpIC8gbnVtYmVyT2ZQYXJ0cykuc2xpY2UoMCwgbnVtYmVyT2ZQYXJ0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBvdmVybGFwcyB3aXRoIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxcclxuICAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgb3ZlcmxhcHMob3RoZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmUgPiBvdGhlci5zICYmIHRoaXMucyA8IG90aGVyLmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBhZGphY2VudCB0byB0aGUgc3BlY2lmaWVkIEludGVydmFsJ3Mgc3RhcnQuXHJcbiAgICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGFidXRzU3RhcnQob3RoZXIpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gK3RoaXMuZSA9PT0gK290aGVyLnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBlbmQuXHJcbiAgICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGFidXRzRW5kKG90aGVyKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuICtvdGhlci5lID09PSArdGhpcy5zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgZW5ndWxmcyB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxyXG4gICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBlbmd1bGZzKG90aGVyKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRoaXMucyA8PSBvdGhlci5zICYmIHRoaXMuZSA+PSBvdGhlci5lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgaGFzIHRoZSBzYW1lIHN0YXJ0IGFuZCBlbmQgYXMgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cclxuICAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcclxuICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgZXF1YWxzKG90aGVyKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXIuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucy5lcXVhbHMob3RoZXIucykgJiYgdGhpcy5lLmVxdWFscyhvdGhlci5lKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cclxuICAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWF4aW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWluaW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cclxuICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBpbnRlcnNlY3Rpb24gaXMgZW1wdHksIG1lYW5pbmcsIHRoZSBpbnRlcnZhbHMgZG9uJ3QgaW50ZXJzZWN0LlxyXG4gICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxyXG4gICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cclxuICAgICovXHJcbiAgaW50ZXJzZWN0aW9uKG90aGVyKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcbiAgICBjb25zdCBzID0gdGhpcy5zID4gb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnM7XHJcbiAgICBjb25zdCBlID0gdGhpcy5lIDwgb3RoZXIuZSA/IHRoaXMuZSA6IG90aGVyLmU7XHJcblxyXG4gICAgaWYgKHMgPj0gZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIHVuaW9uIG9mIHRoaXMgSW50ZXJ2YWwgYW5kIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXHJcbiAgICAqIFNwZWNpZmljYWxseSwgdGhlIHJlc3VsdGluZyBJbnRlcnZhbCBoYXMgdGhlIG1pbmltdW0gc3RhcnQgdGltZSBhbmQgdGhlIG1heGltdW0gZW5kIHRpbWUgb2YgdGhlIHR3byBJbnRlcnZhbHMuXHJcbiAgICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXHJcbiAgICAqIEByZXR1cm4ge0ludGVydmFsfVxyXG4gICAgKi9cclxuICB1bmlvbihvdGhlcikge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG4gICAgY29uc3QgcyA9IHRoaXMucyA8IG90aGVyLnMgPyB0aGlzLnMgOiBvdGhlci5zO1xyXG4gICAgY29uc3QgZSA9IHRoaXMuZSA+IG90aGVyLmUgPyB0aGlzLmUgOiBvdGhlci5lO1xyXG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMocywgZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogTWVyZ2UgYW4gYXJyYXkgb2YgSW50ZXJ2YWxzIGludG8gYSBlcXVpdmFsZW50IG1pbmltYWwgc2V0IG9mIEludGVydmFscy5cclxuICAgICogQ29tYmluZXMgb3ZlcmxhcHBpbmcgYW5kIGFkamFjZW50IEludGVydmFscy5cclxuICAgICogQHBhcmFtIHtBcnJheX0gaW50ZXJ2YWxzXHJcbiAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgKi9cclxuICBzdGF0aWMgbWVyZ2UoaW50ZXJ2YWxzKSB7XHJcbiAgICBjb25zdCBbZm91bmQsIGZpbmFsXSA9IGludGVydmFsc1xyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zIC0gYi5zKVxyXG4gICAgICAucmVkdWNlKFxyXG4gICAgICAgIChbc29mYXIsIGN1cnJlbnRdLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtzb2ZhciwgaXRlbV07XHJcbiAgICAgICAgICB9IGlmIChjdXJyZW50Lm92ZXJsYXBzKGl0ZW0pIHx8IGN1cnJlbnQuYWJ1dHNTdGFydChpdGVtKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW3NvZmFyLCBjdXJyZW50LnVuaW9uKGl0ZW0pXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBbc29mYXIuY29uY2F0KFtjdXJyZW50XSksIGl0ZW1dO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW1tdLCBudWxsXSxcclxuICAgICAgKTtcclxuICAgIGlmIChmaW5hbCkge1xyXG4gICAgICBmb3VuZC5wdXNoKGZpbmFsKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3VuZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgSW50ZXJ2YWxzIHJlcHJlc2VudGluZyB0aGUgc3BhbnMgb2YgdGltZSB0aGF0IG9ubHkgYXBwZWFyIGluIG9uZSBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFscy5cclxuICAgICogQHBhcmFtIHtBcnJheX0gaW50ZXJ2YWxzXHJcbiAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgKi9cclxuICBzdGF0aWMgeG9yKGludGVydmFscykge1xyXG4gICAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuICAgIGxldCBjdXJyZW50Q291bnQgPSAwO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gICAgY29uc3QgZW5kcyA9IGludGVydmFscy5tYXAoKGkpID0+IFtcclxuICAgICAgeyB0aW1lOiBpLnMsIHR5cGU6ICdzJyB9LFxyXG4gICAgICB7IHRpbWU6IGkuZSwgdHlwZTogJ2UnIH0sXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IGZsYXR0ZW5lZCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQoLi4uZW5kcyk7XHJcbiAgICBjb25zdCBhcnIgPSBmbGF0dGVuZWQuc29ydCgoYSwgYikgPT4gYS50aW1lIC0gYi50aW1lKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGkgb2YgYXJyKSB7XHJcbiAgICAgIGN1cnJlbnRDb3VudCArPSBpLnR5cGUgPT09ICdzJyA/IDEgOiAtMTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDEpIHtcclxuICAgICAgICBzdGFydCA9IGkudGltZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc3RhcnQgJiYgK3N0YXJ0ICE9PSAraS50aW1lKSB7XHJcbiAgICAgICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCwgaS50aW1lKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSW50ZXJ2YWwubWVyZ2UocmVzdWx0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgc3BhbiBvZiB0aW1lIGluIHRoaXMgSW50ZXJ2YWwgdGhhdCBkb2Vzbid0IG92ZXJsYXAgd2l0aCBhbnkgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbHMuXHJcbiAgICAqIEBwYXJhbSB7Li4uSW50ZXJ2YWx9IGludGVydmFsc1xyXG4gICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICovXHJcbiAgZGlmZmVyZW5jZSguLi5pbnRlcnZhbHMpIHtcclxuICAgIHJldHVybiBJbnRlcnZhbC54b3IoW3RoaXNdLmNvbmNhdChpbnRlcnZhbHMpKVxyXG4gICAgICAubWFwKChpKSA9PiB0aGlzLmludGVyc2VjdGlvbihpKSlcclxuICAgICAgLmZpbHRlcigoaSkgPT4gaSAmJiAhaS5pc0VtcHR5KCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBhcHByb3ByaWF0ZSBmb3IgZGVidWdnaW5nLlxyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEJDE7XHJcbiAgICByZXR1cm4gYFske3RoaXMucy50b0lTTygpfSDigJMgJHt0aGlzLmUudG9JU08oKX0pYDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbC5cclxuICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIERhdGVUaW1lI3RvSVNPfVxyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvSVNPKG9wdHMpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xyXG4gICAgcmV0dXJuIGAke3RoaXMucy50b0lTTyhvcHRzKX0vJHt0aGlzLmUudG9JU08ob3B0cyl9YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgZGF0ZSBvZiB0aGlzIEludGVydmFsLlxyXG4gICAgKiBUaGUgdGltZSBjb21wb25lbnRzIGFyZSBpZ25vcmVkLlxyXG4gICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9JU09EYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEJDE7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPRGF0ZSgpfS8ke3RoaXMuZS50b0lTT0RhdGUoKX1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aW1lIG9mIHRoaXMgSW50ZXJ2YWwuXHJcbiAgICAqIFRoZSBkYXRlIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZSN0b0lTT31cclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0lTT1RpbWUob3B0cykge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEJDE7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPVGltZShvcHRzKX0vJHt0aGlzLmUudG9JU09UaW1lKG9wdHMpfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZUZvcm1hdCAtIHRoZSBmb3JtYXQgc3RyaW5nLiBUaGlzIHN0cmluZyBmb3JtYXRzIHRoZSBzdGFydCBhbmQgZW5kIHRpbWUuIFNlZSB7QGxpbmsgRGF0ZVRpbWUjdG9Gb3JtYXR9IGZvciBkZXRhaWxzLlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLnNlcGFyYXRvciA9ICAnIOKAkyAnXSAtIGEgc2VwYXJhdG9yIHRvIHBsYWNlIGJldHdlZW4gdGhlIHN0YXJ0IGFuZCBlbmQgcmVwcmVzZW50YXRpb25zXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9Gb3JtYXQoZGF0ZUZvcm1hdCwgeyBzZXBhcmF0b3IgPSAnIOKAkyAnIH0gPSB7fSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEJDE7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvRm9ybWF0KGRhdGVGb3JtYXQpfSR7c2VwYXJhdG9yfSR7dGhpcy5lLnRvRm9ybWF0KGRhdGVGb3JtYXQpfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIGEgRHVyYXRpb24gcmVwcmVzZW50aW5nIHRoZSB0aW1lIHNwYW5uZWQgYnkgdGhpcyBpbnRlcnZhbC5cclxuICAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcclxuICAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbigpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogODg0ODkyNTcgfVxyXG4gICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCdkYXlzJykudG9PYmplY3QoKSAvLz0+IHsgZGF5czogMS4wMjQxODEyMTUyNzc3Nzc4IH1cclxuICAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbihbJ2hvdXJzJywgJ21pbnV0ZXMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNC44MjA5NSB9XHJcbiAgICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oWydob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNCwgc2Vjb25kczogNDkuMjU3IH1cclxuICAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbignc2Vjb25kcycpLnRvT2JqZWN0KCkgLy89PiB7IHNlY29uZHM6IDg4NDg5LjI1NyB9XHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICB0b0R1cmF0aW9uKHVuaXQsIG9wdHMpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKHRoaXMuaW52YWxpZFJlYXNvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5lLmRpZmYodGhpcy5zLCB1bml0LCBvcHRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSdW4gbWFwRm4gb24gdGhlIGludGVydmFsIHN0YXJ0IGFuZCBlbmQsIHJldHVybmluZyBhIG5ldyBJbnRlcnZhbCBmcm9tIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVzXHJcbiAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hcEZuXHJcbiAgICAqIEByZXR1cm4ge0ludGVydmFsfVxyXG4gICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS5tYXBFbmRwb2ludHMoZW5kcG9pbnQgPT4gZW5kcG9pbnQudG9VVEMoKSlcclxuICAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikubWFwRW5kcG9pbnRzKGVuZHBvaW50ID0+IGVuZHBvaW50LnBsdXMoeyBob3VyczogMiB9KSlcclxuICAgICovXHJcbiAgbWFwRW5kcG9pbnRzKG1hcEZuKSB7XHJcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhtYXBGbih0aGlzLnMpLCBtYXBGbih0aGlzLmUpKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gICogVGhlIEluZm8gY2xhc3MgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgZm9yIHJldHJpZXZpbmcgZ2VuZXJhbCB0aW1lIGFuZCBkYXRlIHJlbGF0ZWQgZGF0YS4gRm9yIGV4YW1wbGUsIGl0IGhhcyBtZXRob2RzIGZvciBmaW5kaW5nIG91dCBpZiBhIHRpbWUgem9uZSBoYXMgYSBEU1QsIGZvciBsaXN0aW5nIHRoZSBtb250aHMgaW4gYW55IHN1cHBvcnRlZCBsb2NhbGUsIGFuZCBmb3IgZGlzY292ZXJpbmcgd2hpY2ggb2YgTHV4b24gZmVhdHVyZXMgYXJlIGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cclxuICAqL1xyXG5jbGFzcyBJbmZvIHtcclxuICAvKipcclxuICAgICogUmV0dXJuIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB6b25lIGNvbnRhaW5zIGEgRFNULlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbem9uZT0nbG9jYWwnXSAtIFpvbmUgdG8gY2hlY2suIERlZmF1bHRzIHRvIHRoZSBlbnZpcm9ubWVudCdzIGxvY2FsIHpvbmUuXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBoYXNEU1Qoem9uZSA9IFNldHRpbmdzLmRlZmF1bHRab25lKSB7XHJcbiAgICBjb25zdCBwcm90byA9IERhdGVUaW1lLm5vdygpLnNldFpvbmUoem9uZSkuc2V0KHsgbW9udGg6IDEyIH0pO1xyXG5cclxuICAgIHJldHVybiAhem9uZS5pc1VuaXZlcnNhbCAmJiBwcm90by5vZmZzZXQgIT09IHByb3RvLnNldCh7IG1vbnRoOiA2IH0pLm9mZnNldDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgaXMgYSB2YWxpZCBJQU5BIHNwZWNpZmllci5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBab25lIHRvIGNoZWNrXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBpc1ZhbGlkSUFOQVpvbmUoem9uZSkge1xyXG4gICAgcmV0dXJuIElBTkFab25lLmlzVmFsaWRab25lKHpvbmUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENvbnZlcnRzIHRoZSBpbnB1dCBpbnRvIGEge0BsaW5rIFpvbmV9IGluc3RhbmNlLlxyXG4gICAgKlxyXG4gICAgKiAqIElmIGBpbnB1dGAgaXMgYWxyZWFkeSBhIFpvbmUgaW5zdGFuY2UsIGl0IGlzIHJldHVybmVkIHVuY2hhbmdlZC5cclxuICAgICogKiBJZiBgaW5wdXRgIGlzIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSB2YWxpZCB0aW1lIHpvbmUgbmFtZSwgYSBab25lIGluc3RhbmNlXHJcbiAgICAqICAgd2l0aCB0aGF0IG5hbWUgaXMgcmV0dXJuZWQuXHJcbiAgICAqICogSWYgYGlucHV0YCBpcyBhIHN0cmluZyB0aGF0IGRvZXNuJ3QgcmVmZXIgdG8gYSBrbm93biB0aW1lIHpvbmUsIGEgWm9uZVxyXG4gICAgKiAgIGluc3RhbmNlIHdpdGgge0BsaW5rIFpvbmUjaXNWYWxpZH0gPT0gZmFsc2UgaXMgcmV0dXJuZWQuXHJcbiAgICAqICogSWYgYGlucHV0IGlzIGEgbnVtYmVyLCBhIFpvbmUgaW5zdGFuY2Ugd2l0aCB0aGUgc3BlY2lmaWVkIGZpeGVkIG9mZnNldFxyXG4gICAgKiAgIGluIG1pbnV0ZXMgaXMgcmV0dXJuZWQuXHJcbiAgICAqICogSWYgYGlucHV0YCBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAsIHRoZSBkZWZhdWx0IHpvbmUgaXMgcmV0dXJuZWQuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV8bnVtYmVyfSBbaW5wdXRdIC0gdGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZFxyXG4gICAgKiBAcmV0dXJuIHtab25lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgbm9ybWFsaXplWm9uZShpbnB1dCkge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZVpvbmUoaW5wdXQsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSBtb250aCBuYW1lcy5cclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJudW1lcmljXCIsIFwiMi1kaWdpdFwiLCBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5vdXRwdXRDYWxlbmRhcj0nZ3JlZ29yeSddIC0gdGhlIGNhbGVuZGFyXHJcbiAgICAqIEBleGFtcGxlIEluZm8ubW9udGhzKClbMF0gLy89PiAnSmFudWFyeSdcclxuICAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ3Nob3J0JylbMF0gLy89PiAnSmFuJ1xyXG4gICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbnVtZXJpYycpWzBdIC8vPT4gJzEnXHJcbiAgICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdzaG9ydCcsIHsgbG9jYWxlOiAnZnItQ0EnIH0gKVswXSAvLz0+ICdqYW52LidcclxuICAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ251bWVyaWMnLCB7IGxvY2FsZTogJ2FyJyB9KVswXSAvLz0+ICfZoSdcclxuICAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ2xvbmcnLCB7IG91dHB1dENhbGVuZGFyOiAnaXNsYW1pYycgfSlbMF0gLy89PiAnUmFiacq7IEknXHJcbiAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgKi9cclxuICBzdGF0aWMgbW9udGhzKFxyXG4gICAgbGVuZ3RoID0gJ2xvbmcnLFxyXG4gICAge1xyXG4gICAgICBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsLCBvdXRwdXRDYWxlbmRhciA9ICdncmVnb3J5JyxcclxuICAgIH0gPSB7fSxcclxuICApIHtcclxuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSkubW9udGhzKGxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIGFuIGFycmF5IG9mIGZvcm1hdCBtb250aCBuYW1lcy5cclxuICAgICogRm9ybWF0IG1vbnRocyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIG1vbnRocyBpbiB0aGF0IHRoZXkncmUgbWVhbnQgdG8gYXBwZWFyIG5leHQgdG8gdGhlIGRheSBvZiB0aGUgbW9udGguIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0XHJcbiAgICAqIGNoYW5nZXMgdGhlIHN0cmluZy5cclxuICAgICogU2VlIHtAbGluayBJbmZvI21vbnRoc31cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibnVtZXJpY1wiLCBcIjItZGlnaXRcIiwgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXI9J2dyZWdvcnknXSAtIHRoZSBjYWxlbmRhclxyXG4gICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICovXHJcbiAgc3RhdGljIG1vbnRoc0Zvcm1hdChcclxuICAgIGxlbmd0aCA9ICdsb25nJyxcclxuICAgIHtcclxuICAgICAgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgbG9jT2JqID0gbnVsbCwgb3V0cHV0Q2FsZW5kYXIgPSAnZ3JlZ29yeScsXHJcbiAgICB9ID0ge30sXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikpLm1vbnRocyhsZW5ndGgsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiBhbiBhcnJheSBvZiBzdGFuZGFsb25lIHdlZWsgbmFtZXMuXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIHdlZWtkYXkgcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcclxuICAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygpWzBdIC8vPT4gJ01vbmRheSdcclxuICAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnKVswXSAvLz0+ICdNb24nXHJcbiAgICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NhbGU6ICdmci1DQScgfSlbMF0gLy89PiAnbHVuLidcclxuICAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnLCB7IGxvY2FsZTogJ2FyJyB9KVswXSAvLz0+ICfYp9mE2KfYq9mG2YrZhidcclxuICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyB3ZWVrZGF5cyhsZW5ndGggPSAnbG9uZycsIHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgbG9jT2JqID0gbnVsbCB9ID0ge30pIHtcclxuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG51bGwpKS53ZWVrZGF5cyhsZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiBhbiBhcnJheSBvZiBmb3JtYXQgd2VlayBuYW1lcy5cclxuICAgICogRm9ybWF0IHdlZWtkYXlzIGRpZmZlciBmcm9tIHN0YW5kYWxvbmUgd2Vla2RheXMgaW4gdGhhdCB0aGV5J3JlIG1lYW50IHRvIGFwcGVhciBuZXh0IHRvIG1vcmUgZGF0ZSBpbmZvcm1hdGlvbi4gSW4gc29tZSBsYW5ndWFnZXMsIHRoYXRcclxuICAgICogY2hhbmdlcyB0aGUgc3RyaW5nLlxyXG4gICAgKiBTZWUge0BsaW5rIEluZm8jd2Vla2RheXN9XHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiLlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT1udWxsXSAtIHRoZSBsb2NhbGUgY29kZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXHJcbiAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgKi9cclxuICBzdGF0aWMgd2Vla2RheXNGb3JtYXQoXHJcbiAgICBsZW5ndGggPSAnbG9uZycsXHJcbiAgICB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIGxvY09iaiA9IG51bGwgfSA9IHt9LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgbnVsbCkpLndlZWtkYXlzKGxlbmd0aCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIGFuIGFycmF5IG9mIG1lcmlkaWVtcy5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXHJcbiAgICAqIEBleGFtcGxlIEluZm8ubWVyaWRpZW1zKCkgLy89PiBbICdBTScsICdQTScgXVxyXG4gICAgKiBAZXhhbXBsZSBJbmZvLm1lcmlkaWVtcyh7IGxvY2FsZTogJ215JyB9KSAvLz0+IFsgJ+GAlOGAtuGAlOGAgOGAuicsICfhgIrhgJThgLEnIF1cclxuICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBtZXJpZGllbXMoeyBsb2NhbGUgPSBudWxsIH0gPSB7fSkge1xyXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlKS5tZXJpZGllbXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZXJhcywgc3VjaCBhcyBbJ0JDJywgJ0FEJ10uIFRoZSBsb2NhbGUgY2FuIGJlIHNwZWNpZmllZCwgYnV0IHRoZSBjYWxlbmRhciBzeXN0ZW0gaXMgYWx3YXlzIEdyZWdvcmlhbi5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J3Nob3J0J10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBlcmEgcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJzaG9ydFwiIG9yIFwibG9uZ1wiLlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcclxuICAgICogQGV4YW1wbGUgSW5mby5lcmFzKCkgLy89PiBbICdCQycsICdBRCcgXVxyXG4gICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoJ2xvbmcnKSAvLz0+IFsgJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknIF1cclxuICAgICogQGV4YW1wbGUgSW5mby5lcmFzKCdsb25nJywgeyBsb2NhbGU6ICdmcicgfSkgLy89PiBbICdhdmFudCBKw6lzdXMtQ2hyaXN0JywgJ2FwcsOocyBKw6lzdXMtQ2hyaXN0JyBdXHJcbiAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZXJhcyhsZW5ndGggPSAnc2hvcnQnLCB7IGxvY2FsZSA9IG51bGwgfSA9IHt9KSB7XHJcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bGwsICdncmVnb3J5JykuZXJhcyhsZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybiB0aGUgc2V0IG9mIGF2YWlsYWJsZSBmZWF0dXJlcyBpbiB0aGlzIGVudmlyb25tZW50LlxyXG4gICAgKiBTb21lIGZlYXR1cmVzIG9mIEx1eG9uIGFyZSBub3QgYXZhaWxhYmxlIGluIGFsbCBlbnZpcm9ubWVudHMuIEZvciBleGFtcGxlLCBvbiBvbGRlciBicm93c2VycywgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nIHN1cHBvcnQgaXMgbm90IGF2YWlsYWJsZS4gVXNlIHRoaXMgZnVuY3Rpb24gdG8gZmlndXJlIG91dCBpZiB0aGF0J3MgdGhlIGNhc2UuXHJcbiAgICAqIEtleXM6XHJcbiAgICAqICogYHJlbGF0aXZlYDogd2hldGhlciB0aGlzIGVudmlyb25tZW50IHN1cHBvcnRzIHJlbGF0aXZlIHRpbWUgZm9ybWF0dGluZ1xyXG4gICAgKiBAZXhhbXBsZSBJbmZvLmZlYXR1cmVzKCkgLy89PiB7IHJlbGF0aXZlOiBmYWxzZSB9XHJcbiAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGZlYXR1cmVzKCkge1xyXG4gICAgcmV0dXJuIHsgcmVsYXRpdmU6IGhhc1JlbGF0aXZlKCkgfTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRheURpZmYoZWFybGllciwgbGF0ZXIpIHtcclxuICBjb25zdCB1dGNEYXlTdGFydCA9IChkdCkgPT4gZHQudG9VVEMoMCwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcclxuICBjb25zdCBtcyA9IHV0Y0RheVN0YXJ0KGxhdGVyKSAtIHV0Y0RheVN0YXJ0KGVhcmxpZXIpO1xyXG4gIHJldHVybiBNYXRoLmZsb29yKER1cmF0aW9uLmZyb21NaWxsaXMobXMpLmFzKCdkYXlzJykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWdoT3JkZXJEaWZmcyhjdXJzb3IsIGxhdGVyLCB1bml0cykge1xyXG4gIGNvbnN0IGRpZmZlcnMgPSBbXHJcbiAgICBbJ3llYXJzJywgKGEsIGIpID0+IGIueWVhciAtIGEueWVhcl0sXHJcbiAgICBbJ3F1YXJ0ZXJzJywgKGEsIGIpID0+IGIucXVhcnRlciAtIGEucXVhcnRlcl0sXHJcbiAgICBbJ21vbnRocycsIChhLCBiKSA9PiBiLm1vbnRoIC0gYS5tb250aCArIChiLnllYXIgLSBhLnllYXIpICogMTJdLFxyXG4gICAgW1xyXG4gICAgICAnd2Vla3MnLFxyXG4gICAgICAoYSwgYikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRheXMgPSBkYXlEaWZmKGEsIGIpO1xyXG4gICAgICAgIHJldHVybiAoZGF5cyAtIChkYXlzICUgNykpIC8gNztcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbJ2RheXMnLCBkYXlEaWZmXSxcclxuICBdO1xyXG5cclxuICBjb25zdCByZXN1bHRzID0ge307XHJcbiAgbGV0IGxvd2VzdE9yZGVyOyBsZXRcclxuICAgIGhpZ2hXYXRlcjtcclxuXHJcbiAgZm9yIChjb25zdCBbdW5pdCwgZGlmZmVyXSBvZiBkaWZmZXJzKSB7XHJcbiAgICBpZiAodW5pdHMuaW5kZXhPZih1bml0KSA+PSAwKSB7XHJcbiAgICAgIGxvd2VzdE9yZGVyID0gdW5pdDtcclxuXHJcbiAgICAgIGxldCBkZWx0YSA9IGRpZmZlcihjdXJzb3IsIGxhdGVyKTtcclxuICAgICAgaGlnaFdhdGVyID0gY3Vyc29yLnBsdXMoeyBbdW5pdF06IGRlbHRhIH0pO1xyXG5cclxuICAgICAgaWYgKGhpZ2hXYXRlciA+IGxhdGVyKSB7XHJcbiAgICAgICAgY3Vyc29yID0gY3Vyc29yLnBsdXMoeyBbdW5pdF06IGRlbHRhIC0gMSB9KTtcclxuICAgICAgICBkZWx0YSAtPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnNvciA9IGhpZ2hXYXRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVzdWx0c1t1bml0XSA9IGRlbHRhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFtjdXJzb3IsIHJlc3VsdHMsIGhpZ2hXYXRlciwgbG93ZXN0T3JkZXJdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaWZmKGVhcmxpZXIsIGxhdGVyLCB1bml0cywgb3B0cykge1xyXG4gIGxldCBbY3Vyc29yLCByZXN1bHRzLCBoaWdoV2F0ZXIsIGxvd2VzdE9yZGVyXSA9IGhpZ2hPcmRlckRpZmZzKGVhcmxpZXIsIGxhdGVyLCB1bml0cyk7XHJcblxyXG4gIGNvbnN0IHJlbWFpbmluZ01pbGxpcyA9IGxhdGVyIC0gY3Vyc29yO1xyXG5cclxuICBjb25zdCBsb3dlck9yZGVyVW5pdHMgPSB1bml0cy5maWx0ZXIoXHJcbiAgICAodSkgPT4gWydob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnLCAnbWlsbGlzZWNvbmRzJ10uaW5kZXhPZih1KSA+PSAwLFxyXG4gICk7XHJcblxyXG4gIGlmIChsb3dlck9yZGVyVW5pdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBpZiAoaGlnaFdhdGVyIDwgbGF0ZXIpIHtcclxuICAgICAgaGlnaFdhdGVyID0gY3Vyc29yLnBsdXMoeyBbbG93ZXN0T3JkZXJdOiAxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoaWdoV2F0ZXIgIT09IGN1cnNvcikge1xyXG4gICAgICByZXN1bHRzW2xvd2VzdE9yZGVyXSA9IChyZXN1bHRzW2xvd2VzdE9yZGVyXSB8fCAwKSArIHJlbWFpbmluZ01pbGxpcyAvIChoaWdoV2F0ZXIgLSBjdXJzb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHVyYXRpb24gPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHJlc3VsdHMsIG9wdHMpO1xyXG5cclxuICBpZiAobG93ZXJPcmRlclVuaXRzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiBEdXJhdGlvbi5mcm9tTWlsbGlzKHJlbWFpbmluZ01pbGxpcywgb3B0cylcclxuICAgICAgLnNoaWZ0VG8oLi4ubG93ZXJPcmRlclVuaXRzKVxyXG4gICAgICAucGx1cyhkdXJhdGlvbik7XHJcbiAgfVxyXG4gIHJldHVybiBkdXJhdGlvbjtcclxufVxyXG5cclxuY29uc3QgbnVtYmVyaW5nU3lzdGVtcyA9IHtcclxuICBhcmFiOiAnW1xcdTA2NjAtXFx1MDY2OV0nLFxyXG4gIGFyYWJleHQ6ICdbXFx1MDZGMC1cXHUwNkY5XScsXHJcbiAgYmFsaTogJ1tcXHUxQjUwLVxcdTFCNTldJyxcclxuICBiZW5nOiAnW1xcdTA5RTYtXFx1MDlFRl0nLFxyXG4gIGRldmE6ICdbXFx1MDk2Ni1cXHUwOTZGXScsXHJcbiAgZnVsbHdpZGU6ICdbXFx1RkYxMC1cXHVGRjE5XScsXHJcbiAgZ3VqcjogJ1tcXHUwQUU2LVxcdTBBRUZdJyxcclxuICBoYW5pZGVjOiAnW+OAh3zkuIB85LqMfOS4iXzlm5t85LqUfOWFrXzkuIN85YWrfOS5nV0nLFxyXG4gIGtobXI6ICdbXFx1MTdFMC1cXHUxN0U5XScsXHJcbiAga25kYTogJ1tcXHUwQ0U2LVxcdTBDRUZdJyxcclxuICBsYW9vOiAnW1xcdTBFRDAtXFx1MEVEOV0nLFxyXG4gIGxpbWI6ICdbXFx1MTk0Ni1cXHUxOTRGXScsXHJcbiAgbWx5bTogJ1tcXHUwRDY2LVxcdTBENkZdJyxcclxuICBtb25nOiAnW1xcdTE4MTAtXFx1MTgxOV0nLFxyXG4gIG15bXI6ICdbXFx1MTA0MC1cXHUxMDQ5XScsXHJcbiAgb3J5YTogJ1tcXHUwQjY2LVxcdTBCNkZdJyxcclxuICB0YW1sZGVjOiAnW1xcdTBCRTYtXFx1MEJFRl0nLFxyXG4gIHRlbHU6ICdbXFx1MEM2Ni1cXHUwQzZGXScsXHJcbiAgdGhhaTogJ1tcXHUwRTUwLVxcdTBFNTldJyxcclxuICB0aWJ0OiAnW1xcdTBGMjAtXFx1MEYyOV0nLFxyXG4gIGxhdG46ICdcXFxcZCcsXHJcbn07XHJcblxyXG5jb25zdCBudW1iZXJpbmdTeXN0ZW1zVVRGMTYgPSB7XHJcbiAgYXJhYjogWzE2MzIsIDE2NDFdLFxyXG4gIGFyYWJleHQ6IFsxNzc2LCAxNzg1XSxcclxuICBiYWxpOiBbNjk5MiwgNzAwMV0sXHJcbiAgYmVuZzogWzI1MzQsIDI1NDNdLFxyXG4gIGRldmE6IFsyNDA2LCAyNDE1XSxcclxuICBmdWxsd2lkZTogWzY1Mjk2LCA2NTMwM10sXHJcbiAgZ3VqcjogWzI3OTAsIDI3OTldLFxyXG4gIGtobXI6IFs2MTEyLCA2MTIxXSxcclxuICBrbmRhOiBbMzMwMiwgMzMxMV0sXHJcbiAgbGFvbzogWzM3OTIsIDM4MDFdLFxyXG4gIGxpbWI6IFs2NDcwLCA2NDc5XSxcclxuICBtbHltOiBbMzQzMCwgMzQzOV0sXHJcbiAgbW9uZzogWzYxNjAsIDYxNjldLFxyXG4gIG15bXI6IFs0MTYwLCA0MTY5XSxcclxuICBvcnlhOiBbMjkxOCwgMjkyN10sXHJcbiAgdGFtbGRlYzogWzMwNDYsIDMwNTVdLFxyXG4gIHRlbHU6IFszMTc0LCAzMTgzXSxcclxuICB0aGFpOiBbMzY2NCwgMzY3M10sXHJcbiAgdGlidDogWzM4NzIsIDM4ODFdLFxyXG59O1xyXG5cclxuY29uc3QgaGFuaWRlY0NoYXJzID0gbnVtYmVyaW5nU3lzdGVtcy5oYW5pZGVjLnJlcGxhY2UoL1tcXFt8XFxdXS9nLCAnJykuc3BsaXQoJycpO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VEaWdpdHMoc3RyKSB7XHJcbiAgbGV0IHZhbHVlID0gcGFyc2VJbnQoc3RyLCAxMCk7XHJcbiAgaWYgKGlzTmFOKHZhbHVlKSkge1xyXG4gICAgdmFsdWUgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuXHJcbiAgICAgIGlmIChzdHJbaV0uc2VhcmNoKG51bWJlcmluZ1N5c3RlbXMuaGFuaWRlYykgIT09IC0xKSB7XHJcbiAgICAgICAgdmFsdWUgKz0gaGFuaWRlY0NoYXJzLmluZGV4T2Yoc3RyW2ldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBudW1iZXJpbmdTeXN0ZW1zVVRGMTYpIHtcclxuICAgICAgICAgIGNvbnN0IFttaW4sIG1heF0gPSBudW1iZXJpbmdTeXN0ZW1zVVRGMTZba2V5XTtcclxuICAgICAgICAgIGlmIChjb2RlID49IG1pbiAmJiBjb2RlIDw9IG1heCkge1xyXG4gICAgICAgICAgICB2YWx1ZSArPSBjb2RlIC0gbWluO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlnaXRSZWdleCh7IG51bWJlcmluZ1N5c3RlbSB9LCBhcHBlbmQgPSAnJykge1xyXG4gIHJldHVybiBuZXcgUmVnRXhwKGAke251bWJlcmluZ1N5c3RlbXNbbnVtYmVyaW5nU3lzdGVtIHx8ICdsYXRuJ119JHthcHBlbmR9YCk7XHJcbn1cclxuXHJcbmNvbnN0IE1JU1NJTkdfRlRQID0gJ21pc3NpbmcgSW50bC5EYXRlVGltZUZvcm1hdC5mb3JtYXRUb1BhcnRzIHN1cHBvcnQnO1xyXG5cclxuZnVuY3Rpb24gaW50VW5pdChyZWdleCwgcG9zdCA9IChpKSA9PiBpKSB7XHJcbiAgcmV0dXJuIHsgcmVnZXgsIGRlc2VyOiAoW3NdKSA9PiBwb3N0KHBhcnNlRGlnaXRzKHMpKSB9O1xyXG59XHJcblxyXG5jb25zdCBOQlNQID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxNjApO1xyXG5jb25zdCBzcGFjZU9yTkJTUCA9IGBbICR7TkJTUH1dYDtcclxuY29uc3Qgc3BhY2VPck5CU1BSZWdFeHAgPSBuZXcgUmVnRXhwKHNwYWNlT3JOQlNQLCAnZycpO1xyXG5cclxuZnVuY3Rpb24gZml4TGlzdFJlZ2V4KHMpIHtcclxuICAvLyBtYWtlIGRvdHMgb3B0aW9uYWwgYW5kIGFsc28gbWFrZSB0aGVtIGxpdGVyYWxcclxuICAvLyBtYWtlIHNwYWNlIGFuZCBub24gYnJlYWthYmxlIHNwYWNlIGNoYXJhY3RlcnMgaW50ZXJjaGFuZ2VhYmxlXHJcbiAgcmV0dXJuIHMucmVwbGFjZSgvXFwuL2csICdcXFxcLj8nKS5yZXBsYWNlKHNwYWNlT3JOQlNQUmVnRXhwLCBzcGFjZU9yTkJTUCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmlwSW5zZW5zaXRpdml0aWVzKHMpIHtcclxuICByZXR1cm4gc1xyXG4gICAgLnJlcGxhY2UoL1xcLi9nLCAnJykgLy8gaWdub3JlIGRvdHMgdGhhdCB3ZXJlIG1hZGUgb3B0aW9uYWxcclxuICAgIC5yZXBsYWNlKHNwYWNlT3JOQlNQUmVnRXhwLCAnICcpIC8vIGludGVyY2hhbmdlIHNwYWNlIGFuZCBuYnNwXHJcbiAgICAudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25lT2Yoc3RyaW5ncywgc3RhcnRJbmRleCkge1xyXG4gIGlmIChzdHJpbmdzID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlZ2V4OiBSZWdFeHAoc3RyaW5ncy5tYXAoZml4TGlzdFJlZ2V4KS5qb2luKCd8JykpLFxyXG4gICAgZGVzZXI6IChbc10pID0+IHN0cmluZ3MuZmluZEluZGV4KChpKSA9PiBzdHJpcEluc2Vuc2l0aXZpdGllcyhzKSA9PT0gc3RyaXBJbnNlbnNpdGl2aXRpZXMoaSkpICsgc3RhcnRJbmRleCxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBvZmZzZXQocmVnZXgsIGdyb3Vwcykge1xyXG4gIHJldHVybiB7IHJlZ2V4LCBkZXNlcjogKFssIGgsIG1dKSA9PiBzaWduZWRPZmZzZXQoaCwgbSksIGdyb3VwcyB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaW1wbGUocmVnZXgpIHtcclxuICByZXR1cm4geyByZWdleCwgZGVzZXI6IChbc10pID0+IHMgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXNjYXBlVG9rZW4odmFsdWUpIHtcclxuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5pdEZvclRva2VuKHRva2VuLCBsb2MpIHtcclxuICBjb25zdCBvbmUgPSBkaWdpdFJlZ2V4KGxvYyk7XHJcbiAgY29uc3QgdHdvID0gZGlnaXRSZWdleChsb2MsICd7Mn0nKTtcclxuICBjb25zdCB0aHJlZSA9IGRpZ2l0UmVnZXgobG9jLCAnezN9Jyk7XHJcbiAgY29uc3QgZm91ciA9IGRpZ2l0UmVnZXgobG9jLCAnezR9Jyk7XHJcbiAgY29uc3Qgc2l4ID0gZGlnaXRSZWdleChsb2MsICd7Nn0nKTtcclxuICBjb25zdCBvbmVPclR3byA9IGRpZ2l0UmVnZXgobG9jLCAnezEsMn0nKTtcclxuICBjb25zdCBvbmVUb1RocmVlID0gZGlnaXRSZWdleChsb2MsICd7MSwzfScpO1xyXG4gIGNvbnN0IG9uZVRvU2l4ID0gZGlnaXRSZWdleChsb2MsICd7MSw2fScpO1xyXG4gIGNvbnN0IG9uZVRvTmluZSA9IGRpZ2l0UmVnZXgobG9jLCAnezEsOX0nKTtcclxuICBjb25zdCB0d29Ub0ZvdXIgPSBkaWdpdFJlZ2V4KGxvYywgJ3syLDR9Jyk7XHJcbiAgY29uc3QgZm91clRvU2l4ID0gZGlnaXRSZWdleChsb2MsICd7NCw2fScpO1xyXG4gIGNvbnN0IGxpdGVyYWwgPSAodCkgPT4gKHsgcmVnZXg6IFJlZ0V4cChlc2NhcGVUb2tlbih0LnZhbCkpLCBkZXNlcjogKFtzXSkgPT4gcywgbGl0ZXJhbDogdHJ1ZSB9KTtcclxuICBjb25zdCB1bml0YXRlID0gKHQpID0+IHtcclxuICAgIGlmICh0b2tlbi5saXRlcmFsKSB7XHJcbiAgICAgIHJldHVybiBsaXRlcmFsKHQpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0LnZhbCkge1xyXG4gICAgICAvLyBlcmFcclxuICAgICAgY2FzZSAnRyc6XHJcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5lcmFzKCdzaG9ydCcsIGZhbHNlKSwgMCk7XHJcbiAgICAgIGNhc2UgJ0dHJzpcclxuICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoJ2xvbmcnLCBmYWxzZSksIDApO1xyXG4gICAgICAgIC8vIHllYXJzXHJcbiAgICAgIGNhc2UgJ3knOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZVRvU2l4KTtcclxuICAgICAgY2FzZSAneXknOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3b1RvRm91ciwgdW50cnVuY2F0ZVllYXIpO1xyXG4gICAgICBjYXNlICd5eXl5JzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcclxuICAgICAgY2FzZSAneXl5eXknOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KGZvdXJUb1NpeCk7XHJcbiAgICAgIGNhc2UgJ3l5eXl5eSc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQoc2l4KTtcclxuICAgICAgICAvLyBtb250aHNcclxuICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xyXG4gICAgICBjYXNlICdNTSc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcclxuICAgICAgY2FzZSAnTU1NJzpcclxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocygnc2hvcnQnLCB0cnVlLCBmYWxzZSksIDEpO1xyXG4gICAgICBjYXNlICdNTU1NJzpcclxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocygnbG9uZycsIHRydWUsIGZhbHNlKSwgMSk7XHJcbiAgICAgIGNhc2UgJ0wnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcclxuICAgICAgY2FzZSAnTEwnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XHJcbiAgICAgIGNhc2UgJ0xMTCc6XHJcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoJ3Nob3J0JywgZmFsc2UsIGZhbHNlKSwgMSk7XHJcbiAgICAgIGNhc2UgJ0xMTEwnOlxyXG4gICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKCdsb25nJywgZmFsc2UsIGZhbHNlKSwgMSk7XHJcbiAgICAgICAgLy8gZGF0ZXNcclxuICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xyXG4gICAgICBjYXNlICdkZCc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcclxuICAgICAgICAvLyBvcmRpbmFsc1xyXG4gICAgICBjYXNlICdvJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1RocmVlKTtcclxuICAgICAgY2FzZSAnb29vJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XHJcbiAgICAgICAgLy8gdGltZVxyXG4gICAgICBjYXNlICdISCc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcclxuICAgICAgY2FzZSAnSCc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xyXG4gICAgICBjYXNlICdoaCc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcclxuICAgICAgY2FzZSAnaCc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xyXG4gICAgICBjYXNlICdtbSc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcclxuICAgICAgY2FzZSAnbSc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xyXG4gICAgICBjYXNlICdxJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XHJcbiAgICAgIGNhc2UgJ3FxJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xyXG4gICAgICBjYXNlICdzJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XHJcbiAgICAgIGNhc2UgJ3NzJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xyXG4gICAgICBjYXNlICdTJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1RocmVlKTtcclxuICAgICAgY2FzZSAnU1NTJzpcclxuICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XHJcbiAgICAgIGNhc2UgJ3UnOlxyXG4gICAgICAgIHJldHVybiBzaW1wbGUob25lVG9OaW5lKTtcclxuICAgICAgY2FzZSAndXUnOlxyXG4gICAgICAgIHJldHVybiBzaW1wbGUob25lT3JUd28pO1xyXG4gICAgICBjYXNlICd1dXUnOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZSk7XHJcbiAgICAgICAgLy8gbWVyaWRpZW1cclxuICAgICAgY2FzZSAnYSc6XHJcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tZXJpZGllbXMoKSwgMCk7XHJcbiAgICAgICAgLy8gd2Vla1llYXIgKGspXHJcbiAgICAgIGNhc2UgJ2tra2snOlxyXG4gICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpO1xyXG4gICAgICBjYXNlICdrayc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvVG9Gb3VyLCB1bnRydW5jYXRlWWVhcik7XHJcbiAgICAgICAgLy8gd2Vla051bWJlciAoVylcclxuICAgICAgY2FzZSAnVyc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xyXG4gICAgICBjYXNlICdXVyc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcclxuICAgICAgICAvLyB3ZWVrZGF5c1xyXG4gICAgICBjYXNlICdFJzpcclxuICAgICAgY2FzZSAnYyc6XHJcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lKTtcclxuICAgICAgY2FzZSAnRUVFJzpcclxuICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKCdzaG9ydCcsIGZhbHNlLCBmYWxzZSksIDEpO1xyXG4gICAgICBjYXNlICdFRUVFJzpcclxuICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKCdsb25nJywgZmFsc2UsIGZhbHNlKSwgMSk7XHJcbiAgICAgIGNhc2UgJ2NjYyc6XHJcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cygnc2hvcnQnLCB0cnVlLCBmYWxzZSksIDEpO1xyXG4gICAgICBjYXNlICdjY2NjJzpcclxuICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKCdsb25nJywgdHJ1ZSwgZmFsc2UpLCAxKTtcclxuICAgICAgICAvLyBvZmZzZXQvem9uZVxyXG4gICAgICBjYXNlICdaJzpcclxuICAgICAgY2FzZSAnWlonOlxyXG4gICAgICAgIHJldHVybiBvZmZzZXQobmV3IFJlZ0V4cChgKFsrLV0ke29uZU9yVHdvLnNvdXJjZX0pKD86Oigke3R3by5zb3VyY2V9KSk/YCksIDIpO1xyXG4gICAgICBjYXNlICdaWlonOlxyXG4gICAgICAgIHJldHVybiBvZmZzZXQobmV3IFJlZ0V4cChgKFsrLV0ke29uZU9yVHdvLnNvdXJjZX0pKCR7dHdvLnNvdXJjZX0pP2ApLCAyKTtcclxuICAgICAgICAvLyB3ZSBkb24ndCBzdXBwb3J0IFpaWlogKFBTVCkgb3IgWlpaWlogKFBhY2lmaWMgU3RhbmRhcmQgVGltZSkgaW4gcGFyc2luZ1xyXG4gICAgICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhbnkgd2F5IHRvIGZpZ3VyZSBvdXQgd2hhdCB0aGV5IGFyZVxyXG4gICAgICBjYXNlICd6JzpcclxuICAgICAgICByZXR1cm4gc2ltcGxlKC9bYS16XystL117MSwyNTZ9Py9pKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbGl0ZXJhbCh0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB1bml0ID0gdW5pdGF0ZSh0b2tlbikgfHwge1xyXG4gICAgaW52YWxpZFJlYXNvbjogTUlTU0lOR19GVFAsXHJcbiAgfTtcclxuXHJcbiAgdW5pdC50b2tlbiA9IHRva2VuO1xyXG5cclxuICByZXR1cm4gdW5pdDtcclxufVxyXG5cclxuY29uc3QgcGFydFR5cGVTdHlsZVRvVG9rZW5WYWwgPSB7XHJcbiAgeWVhcjoge1xyXG4gICAgJzItZGlnaXQnOiAneXknLFxyXG4gICAgbnVtZXJpYzogJ3l5eXl5JyxcclxuICB9LFxyXG4gIG1vbnRoOiB7XHJcbiAgICBudW1lcmljOiAnTScsXHJcbiAgICAnMi1kaWdpdCc6ICdNTScsXHJcbiAgICBzaG9ydDogJ01NTScsXHJcbiAgICBsb25nOiAnTU1NTScsXHJcbiAgfSxcclxuICBkYXk6IHtcclxuICAgIG51bWVyaWM6ICdkJyxcclxuICAgICcyLWRpZ2l0JzogJ2RkJyxcclxuICB9LFxyXG4gIHdlZWtkYXk6IHtcclxuICAgIHNob3J0OiAnRUVFJyxcclxuICAgIGxvbmc6ICdFRUVFJyxcclxuICB9LFxyXG4gIGRheXBlcmlvZDogJ2EnLFxyXG4gIGRheVBlcmlvZDogJ2EnLFxyXG4gIGhvdXI6IHtcclxuICAgIG51bWVyaWM6ICdoJyxcclxuICAgICcyLWRpZ2l0JzogJ2hoJyxcclxuICB9LFxyXG4gIG1pbnV0ZToge1xyXG4gICAgbnVtZXJpYzogJ20nLFxyXG4gICAgJzItZGlnaXQnOiAnbW0nLFxyXG4gIH0sXHJcbiAgc2Vjb25kOiB7XHJcbiAgICBudW1lcmljOiAncycsXHJcbiAgICAnMi1kaWdpdCc6ICdzcycsXHJcbiAgfSxcclxuICB0aW1lWm9uZU5hbWU6IHtcclxuICAgIGxvbmc6ICdaWlpaWicsXHJcbiAgICBzaG9ydDogJ1paWicsXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHRva2VuRm9yUGFydChwYXJ0LCBsb2NhbGUsIGZvcm1hdE9wdHMpIHtcclxuICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBwYXJ0O1xyXG5cclxuICBpZiAodHlwZSA9PT0gJ2xpdGVyYWwnKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsaXRlcmFsOiB0cnVlLFxyXG4gICAgICB2YWw6IHZhbHVlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0eWxlID0gZm9ybWF0T3B0c1t0eXBlXTtcclxuXHJcbiAgbGV0IHZhbCA9IHBhcnRUeXBlU3R5bGVUb1Rva2VuVmFsW3R5cGVdO1xyXG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgdmFsID0gdmFsW3N0eWxlXTtcclxuICB9XHJcblxyXG4gIGlmICh2YWwpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpdGVyYWw6IGZhbHNlLFxyXG4gICAgICB2YWwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSZWdleCh1bml0cykge1xyXG4gIGNvbnN0IHJlID0gdW5pdHMubWFwKCh1KSA9PiB1LnJlZ2V4KS5yZWR1Y2UoKGYsIHIpID0+IGAke2Z9KCR7ci5zb3VyY2V9KWAsICcnKTtcclxuICByZXR1cm4gW2BeJHtyZX0kYCwgdW5pdHNdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXRjaChpbnB1dCwgcmVnZXgsIGhhbmRsZXJzKSB7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IGlucHV0Lm1hdGNoKHJlZ2V4KTtcclxuXHJcbiAgaWYgKG1hdGNoZXMpIHtcclxuICAgIGNvbnN0IGFsbCA9IHt9O1xyXG4gICAgbGV0IG1hdGNoSW5kZXggPSAxO1xyXG4gICAgZm9yIChjb25zdCBpIGluIGhhbmRsZXJzKSB7XHJcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShoYW5kbGVycywgaSkpIHtcclxuICAgICAgICBjb25zdCBoID0gaGFuZGxlcnNbaV07XHJcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gaC5ncm91cHMgPyBoLmdyb3VwcyArIDEgOiAxO1xyXG4gICAgICAgIGlmICghaC5saXRlcmFsICYmIGgudG9rZW4pIHtcclxuICAgICAgICAgIGFsbFtoLnRva2VuLnZhbFswXV0gPSBoLmRlc2VyKG1hdGNoZXMuc2xpY2UobWF0Y2hJbmRleCwgbWF0Y2hJbmRleCArIGdyb3VwcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXRjaEluZGV4ICs9IGdyb3VwcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFttYXRjaGVzLCBhbGxdO1xyXG4gIH1cclxuICByZXR1cm4gW21hdGNoZXMsIHt9XTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGF0ZVRpbWVGcm9tTWF0Y2hlcyhtYXRjaGVzKSB7XHJcbiAgY29uc3QgdG9GaWVsZCA9ICh0b2tlbikgPT4ge1xyXG4gICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICBjYXNlICdTJzpcclxuICAgICAgICByZXR1cm4gJ21pbGxpc2Vjb25kJztcclxuICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgcmV0dXJuICdzZWNvbmQnO1xyXG4gICAgICBjYXNlICdtJzpcclxuICAgICAgICByZXR1cm4gJ21pbnV0ZSc7XHJcbiAgICAgIGNhc2UgJ2gnOlxyXG4gICAgICBjYXNlICdIJzpcclxuICAgICAgICByZXR1cm4gJ2hvdXInO1xyXG4gICAgICBjYXNlICdkJzpcclxuICAgICAgICByZXR1cm4gJ2RheSc7XHJcbiAgICAgIGNhc2UgJ28nOlxyXG4gICAgICAgIHJldHVybiAnb3JkaW5hbCc7XHJcbiAgICAgIGNhc2UgJ0wnOlxyXG4gICAgICBjYXNlICdNJzpcclxuICAgICAgICByZXR1cm4gJ21vbnRoJztcclxuICAgICAgY2FzZSAneSc6XHJcbiAgICAgICAgcmV0dXJuICd5ZWFyJztcclxuICAgICAgY2FzZSAnRSc6XHJcbiAgICAgIGNhc2UgJ2MnOlxyXG4gICAgICAgIHJldHVybiAnd2Vla2RheSc7XHJcbiAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgIHJldHVybiAnd2Vla051bWJlcic7XHJcbiAgICAgIGNhc2UgJ2snOlxyXG4gICAgICAgIHJldHVybiAnd2Vla1llYXInO1xyXG4gICAgICBjYXNlICdxJzpcclxuICAgICAgICByZXR1cm4gJ3F1YXJ0ZXInO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCB6b25lID0gbnVsbDtcclxuICBsZXQgc3BlY2lmaWNPZmZzZXQ7XHJcbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnopKSB7XHJcbiAgICB6b25lID0gSUFOQVpvbmUuY3JlYXRlKG1hdGNoZXMueik7XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMuWikpIHtcclxuICAgIGlmICghem9uZSkge1xyXG4gICAgICB6b25lID0gbmV3IEZpeGVkT2Zmc2V0Wm9uZShtYXRjaGVzLlopO1xyXG4gICAgfVxyXG4gICAgc3BlY2lmaWNPZmZzZXQgPSBtYXRjaGVzLlo7XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMucSkpIHtcclxuICAgIG1hdGNoZXMuTSA9IChtYXRjaGVzLnEgLSAxKSAqIDMgKyAxO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLmgpKSB7XHJcbiAgICBpZiAobWF0Y2hlcy5oIDwgMTIgJiYgbWF0Y2hlcy5hID09PSAxKSB7XHJcbiAgICAgIG1hdGNoZXMuaCArPSAxMjtcclxuICAgIH0gZWxzZSBpZiAobWF0Y2hlcy5oID09PSAxMiAmJiBtYXRjaGVzLmEgPT09IDApIHtcclxuICAgICAgbWF0Y2hlcy5oID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChtYXRjaGVzLkcgPT09IDAgJiYgbWF0Y2hlcy55KSB7XHJcbiAgICBtYXRjaGVzLnkgPSAtbWF0Y2hlcy55O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnUpKSB7XHJcbiAgICBtYXRjaGVzLlMgPSBwYXJzZU1pbGxpcyhtYXRjaGVzLnUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFscyA9IE9iamVjdC5rZXlzKG1hdGNoZXMpLnJlZHVjZSgociwgaykgPT4ge1xyXG4gICAgY29uc3QgZiA9IHRvRmllbGQoayk7XHJcbiAgICBpZiAoZikge1xyXG4gICAgICByW2ZdID0gbWF0Y2hlc1trXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcjtcclxuICB9LCB7fSk7XHJcblxyXG4gIHJldHVybiBbdmFscywgem9uZSwgc3BlY2lmaWNPZmZzZXRdO1xyXG59XHJcblxyXG5sZXQgZHVtbXlEYXRlVGltZUNhY2hlID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIGdldER1bW15RGF0ZVRpbWUoKSB7XHJcbiAgaWYgKCFkdW1teURhdGVUaW1lQ2FjaGUpIHtcclxuICAgIGR1bW15RGF0ZVRpbWVDYWNoZSA9IERhdGVUaW1lLmZyb21NaWxsaXMoMTU1NTU1NTU1NTU1NSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZHVtbXlEYXRlVGltZUNhY2hlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXliZUV4cGFuZE1hY3JvVG9rZW4odG9rZW4sIGxvY2FsZSkge1xyXG4gIGlmICh0b2tlbi5saXRlcmFsKSB7XHJcbiAgICByZXR1cm4gdG9rZW47XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtYXRPcHRzID0gRm9ybWF0dGVyLm1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4udmFsKTtcclxuICBjb25zdCB0b2tlbnMgPSBmb3JtYXRPcHRzVG9Ub2tlbnMoZm9ybWF0T3B0cywgbG9jYWxlKTtcclxuXHJcbiAgaWYgKHRva2VucyA9PSBudWxsIHx8IHRva2Vucy5pbmNsdWRlcyh1bmRlZmluZWQpKSB7XHJcbiAgICByZXR1cm4gdG9rZW47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG9rZW5zO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHBhbmRNYWNyb1Rva2Vucyh0b2tlbnMsIGxvY2FsZSkge1xyXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0KC4uLnRva2Vucy5tYXAoKHQpID0+IG1heWJlRXhwYW5kTWFjcm9Ub2tlbih0LCBsb2NhbGUpKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQHByaXZhdGVcclxuICAqL1xyXG5cclxuZnVuY3Rpb24gZXhwbGFpbkZyb21Ub2tlbnMobG9jYWxlLCBpbnB1dCwgZm9ybWF0KSB7XHJcbiAgY29uc3QgdG9rZW5zID0gZXhwYW5kTWFjcm9Ub2tlbnMoRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZvcm1hdCksIGxvY2FsZSk7XHJcbiAgY29uc3QgdW5pdHMgPSB0b2tlbnMubWFwKCh0KSA9PiB1bml0Rm9yVG9rZW4odCwgbG9jYWxlKSk7XHJcbiAgY29uc3QgZGlzcXVhbGlmeWluZ1VuaXQgPSB1bml0cy5maW5kKCh0KSA9PiB0LmludmFsaWRSZWFzb24pO1xyXG5cclxuICBpZiAoZGlzcXVhbGlmeWluZ1VuaXQpIHtcclxuICAgIHJldHVybiB7IGlucHV0LCB0b2tlbnMsIGludmFsaWRSZWFzb246IGRpc3F1YWxpZnlpbmdVbml0LmludmFsaWRSZWFzb24gfTtcclxuICB9XHJcbiAgY29uc3QgW3JlZ2V4U3RyaW5nLCBoYW5kbGVyc10gPSBidWlsZFJlZ2V4KHVuaXRzKTtcclxuICBjb25zdCByZWdleCA9IFJlZ0V4cChyZWdleFN0cmluZywgJ2knKTtcclxuICBjb25zdCBbcmF3TWF0Y2hlcywgbWF0Y2hlc10gPSBtYXRjaChpbnB1dCwgcmVnZXgsIGhhbmRsZXJzKTtcclxuICBjb25zdCBbcmVzdWx0LCB6b25lLCBzcGVjaWZpY09mZnNldF0gPSBtYXRjaGVzXHJcbiAgICA/IGRhdGVUaW1lRnJvbU1hdGNoZXMobWF0Y2hlcylcclxuICAgIDogW251bGwsIG51bGwsIHVuZGVmaW5lZF07XHJcbiAgaWYgKGhhc093blByb3BlcnR5KG1hdGNoZXMsICdhJykgJiYgaGFzT3duUHJvcGVydHkobWF0Y2hlcywgJ0gnKSkge1xyXG4gICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFxyXG4gICAgICBcIkNhbid0IGluY2x1ZGUgbWVyaWRpZW0gd2hlbiBzcGVjaWZ5aW5nIDI0LWhvdXIgZm9ybWF0XCIsXHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgaW5wdXQsIHRva2VucywgcmVnZXgsIHJhd01hdGNoZXMsIG1hdGNoZXMsIHJlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VGcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCkge1xyXG4gIGNvbnN0IHtcclxuICAgIHJlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQsIGludmFsaWRSZWFzb24sXHJcbiAgfSA9IGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCk7XHJcbiAgcmV0dXJuIFtyZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0LCBpbnZhbGlkUmVhc29uXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0T3B0c1RvVG9rZW5zKGZvcm1hdE9wdHMsIGxvY2FsZSkge1xyXG4gIGlmICghZm9ybWF0T3B0cykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtYXR0ZXIgPSBGb3JtYXR0ZXIuY3JlYXRlKGxvY2FsZSwgZm9ybWF0T3B0cyk7XHJcbiAgY29uc3QgcGFydHMgPSBmb3JtYXR0ZXIuZm9ybWF0RGF0ZVRpbWVQYXJ0cyhnZXREdW1teURhdGVUaW1lKCkpO1xyXG4gIHJldHVybiBwYXJ0cy5tYXAoKHApID0+IHRva2VuRm9yUGFydChwLCBsb2NhbGUsIGZvcm1hdE9wdHMpKTtcclxufVxyXG5cclxuY29uc3Qgbm9uTGVhcExhZGRlciA9IFswLCAzMSwgNTksIDkwLCAxMjAsIDE1MSwgMTgxLCAyMTIsIDI0MywgMjczLCAzMDQsIDMzNF07XHJcbmNvbnN0IGxlYXBMYWRkZXIgPSBbMCwgMzEsIDYwLCA5MSwgMTIxLCAxNTIsIDE4MiwgMjEzLCAyNDQsIDI3NCwgMzA1LCAzMzVdO1xyXG5cclxuZnVuY3Rpb24gdW5pdE91dE9mUmFuZ2UodW5pdCwgdmFsdWUpIHtcclxuICByZXR1cm4gbmV3IEludmFsaWQoXHJcbiAgICAndW5pdCBvdXQgb2YgcmFuZ2UnLFxyXG4gICAgYHlvdSBzcGVjaWZpZWQgJHt2YWx1ZX0gKG9mIHR5cGUgJHt0eXBlb2YgdmFsdWV9KSBhcyBhICR7dW5pdH0sIHdoaWNoIGlzIGludmFsaWRgLFxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KSB7XHJcbiAgY29uc3QgZCA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoIC0gMSwgZGF5KSk7XHJcblxyXG4gIGlmICh5ZWFyIDwgMTAwICYmIHllYXIgPj0gMCkge1xyXG4gICAgZC5zZXRVVENGdWxsWWVhcihkLmdldFVUQ0Z1bGxZZWFyKCkgLSAxOTAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGpzID0gZC5nZXRVVENEYXkoKTtcclxuXHJcbiAgcmV0dXJuIGpzID09PSAwID8gNyA6IGpzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KSB7XHJcbiAgcmV0dXJuIGRheSArIChpc0xlYXBZZWFyKHllYXIpID8gbGVhcExhZGRlciA6IG5vbkxlYXBMYWRkZXIpW21vbnRoIC0gMV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCkge1xyXG4gIGNvbnN0IHRhYmxlID0gaXNMZWFwWWVhcih5ZWFyKSA/IGxlYXBMYWRkZXIgOiBub25MZWFwTGFkZGVyO1xyXG4gIGNvbnN0IG1vbnRoMCA9IHRhYmxlLmZpbmRJbmRleCgoaSkgPT4gaSA8IG9yZGluYWwpO1xyXG4gIGNvbnN0IGRheSA9IG9yZGluYWwgLSB0YWJsZVttb250aDBdO1xyXG4gIHJldHVybiB7IG1vbnRoOiBtb250aDAgKyAxLCBkYXkgfTtcclxufVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcblxyXG5mdW5jdGlvbiBncmVnb3JpYW5Ub1dlZWsoZ3JlZ09iaikge1xyXG4gIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSB9ID0gZ3JlZ09iajtcclxuICBjb25zdCBvcmRpbmFsID0gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSk7XHJcbiAgY29uc3Qgd2Vla2RheSA9IGRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KTtcclxuXHJcbiAgbGV0IHdlZWtOdW1iZXIgPSBNYXRoLmZsb29yKChvcmRpbmFsIC0gd2Vla2RheSArIDEwKSAvIDcpO1xyXG4gIGxldCB3ZWVrWWVhcjtcclxuXHJcbiAgaWYgKHdlZWtOdW1iZXIgPCAxKSB7XHJcbiAgICB3ZWVrWWVhciA9IHllYXIgLSAxO1xyXG4gICAgd2Vla051bWJlciA9IHdlZWtzSW5XZWVrWWVhcih3ZWVrWWVhcik7XHJcbiAgfSBlbHNlIGlmICh3ZWVrTnVtYmVyID4gd2Vla3NJbldlZWtZZWFyKHllYXIpKSB7XHJcbiAgICB3ZWVrWWVhciA9IHllYXIgKyAxO1xyXG4gICAgd2Vla051bWJlciA9IDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdlZWtZZWFyID0geWVhcjtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3ZWVrWWVhciwgd2Vla051bWJlciwgd2Vla2RheSwgLi4udGltZU9iamVjdChncmVnT2JqKSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB3ZWVrVG9HcmVnb3JpYW4od2Vla0RhdGEpIHtcclxuICBjb25zdCB7IHdlZWtZZWFyLCB3ZWVrTnVtYmVyLCB3ZWVrZGF5IH0gPSB3ZWVrRGF0YTtcclxuICBjb25zdCB3ZWVrZGF5T2ZKYW40ID0gZGF5T2ZXZWVrKHdlZWtZZWFyLCAxLCA0KTtcclxuICBjb25zdCB5ZWFySW5EYXlzID0gZGF5c0luWWVhcih3ZWVrWWVhcik7XHJcblxyXG4gIGxldCBvcmRpbmFsID0gd2Vla051bWJlciAqIDcgKyB3ZWVrZGF5IC0gd2Vla2RheU9mSmFuNCAtIDM7XHJcbiAgbGV0IHllYXI7XHJcblxyXG4gIGlmIChvcmRpbmFsIDwgMSkge1xyXG4gICAgeWVhciA9IHdlZWtZZWFyIC0gMTtcclxuICAgIG9yZGluYWwgKz0gZGF5c0luWWVhcih5ZWFyKTtcclxuICB9IGVsc2UgaWYgKG9yZGluYWwgPiB5ZWFySW5EYXlzKSB7XHJcbiAgICB5ZWFyID0gd2Vla1llYXIgKyAxO1xyXG4gICAgb3JkaW5hbCAtPSBkYXlzSW5ZZWFyKHdlZWtZZWFyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgeWVhciA9IHdlZWtZZWFyO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBtb250aCwgZGF5IH0gPSB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpO1xyXG4gIHJldHVybiB7XHJcbiAgICB5ZWFyLCBtb250aCwgZGF5LCAuLi50aW1lT2JqZWN0KHdlZWtEYXRhKSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBncmVnb3JpYW5Ub09yZGluYWwoZ3JlZ0RhdGEpIHtcclxuICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IGdyZWdEYXRhO1xyXG4gIGNvbnN0IG9yZGluYWwgPSBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KTtcclxuICByZXR1cm4geyB5ZWFyLCBvcmRpbmFsLCAuLi50aW1lT2JqZWN0KGdyZWdEYXRhKSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcmRpbmFsVG9HcmVnb3JpYW4ob3JkaW5hbERhdGEpIHtcclxuICBjb25zdCB7IHllYXIsIG9yZGluYWwgfSA9IG9yZGluYWxEYXRhO1xyXG4gIGNvbnN0IHsgbW9udGgsIGRheSB9ID0gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKTtcclxuICByZXR1cm4ge1xyXG4gICAgeWVhciwgbW9udGgsIGRheSwgLi4udGltZU9iamVjdChvcmRpbmFsRGF0YSksXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzSW52YWxpZFdlZWtEYXRhKG9iaikge1xyXG4gIGNvbnN0IHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoud2Vla1llYXIpO1xyXG4gIGNvbnN0IHZhbGlkV2VlayA9IGludGVnZXJCZXR3ZWVuKG9iai53ZWVrTnVtYmVyLCAxLCB3ZWVrc0luV2Vla1llYXIob2JqLndlZWtZZWFyKSk7XHJcbiAgY29uc3QgdmFsaWRXZWVrZGF5ID0gaW50ZWdlckJldHdlZW4ob2JqLndlZWtkYXksIDEsIDcpO1xyXG5cclxuICBpZiAoIXZhbGlkWWVhcikge1xyXG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKCd3ZWVrWWVhcicsIG9iai53ZWVrWWVhcik7XHJcbiAgfSBpZiAoIXZhbGlkV2Vlaykge1xyXG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKCd3ZWVrJywgb2JqLndlZWspO1xyXG4gIH0gaWYgKCF2YWxpZFdlZWtkYXkpIHtcclxuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgnd2Vla2RheScsIG9iai53ZWVrZGF5KTtcclxuICB9IHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzSW52YWxpZE9yZGluYWxEYXRhKG9iaikge1xyXG4gIGNvbnN0IHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoueWVhcik7XHJcbiAgY29uc3QgdmFsaWRPcmRpbmFsID0gaW50ZWdlckJldHdlZW4ob2JqLm9yZGluYWwsIDEsIGRheXNJblllYXIob2JqLnllYXIpKTtcclxuXHJcbiAgaWYgKCF2YWxpZFllYXIpIHtcclxuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgneWVhcicsIG9iai55ZWFyKTtcclxuICB9IGlmICghdmFsaWRPcmRpbmFsKSB7XHJcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoJ29yZGluYWwnLCBvYmoub3JkaW5hbCk7XHJcbiAgfSByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikge1xyXG4gIGNvbnN0IHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoueWVhcik7XHJcbiAgY29uc3QgdmFsaWRNb250aCA9IGludGVnZXJCZXR3ZWVuKG9iai5tb250aCwgMSwgMTIpO1xyXG4gIGNvbnN0IHZhbGlkRGF5ID0gaW50ZWdlckJldHdlZW4ob2JqLmRheSwgMSwgZGF5c0luTW9udGgob2JqLnllYXIsIG9iai5tb250aCkpO1xyXG5cclxuICBpZiAoIXZhbGlkWWVhcikge1xyXG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKCd5ZWFyJywgb2JqLnllYXIpO1xyXG4gIH0gaWYgKCF2YWxpZE1vbnRoKSB7XHJcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoJ21vbnRoJywgb2JqLm1vbnRoKTtcclxuICB9IGlmICghdmFsaWREYXkpIHtcclxuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgnZGF5Jywgb2JqLmRheSk7XHJcbiAgfSByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc0ludmFsaWRUaW1lRGF0YShvYmopIHtcclxuICBjb25zdCB7XHJcbiAgICBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQsXHJcbiAgfSA9IG9iajtcclxuICBjb25zdCB2YWxpZEhvdXIgPSBpbnRlZ2VyQmV0d2Vlbihob3VyLCAwLCAyMylcclxuICAgICAgIHx8IChob3VyID09PSAyNCAmJiBtaW51dGUgPT09IDAgJiYgc2Vjb25kID09PSAwICYmIG1pbGxpc2Vjb25kID09PSAwKTtcclxuICBjb25zdCB2YWxpZE1pbnV0ZSA9IGludGVnZXJCZXR3ZWVuKG1pbnV0ZSwgMCwgNTkpO1xyXG4gIGNvbnN0IHZhbGlkU2Vjb25kID0gaW50ZWdlckJldHdlZW4oc2Vjb25kLCAwLCA1OSk7XHJcbiAgY29uc3QgdmFsaWRNaWxsaXNlY29uZCA9IGludGVnZXJCZXR3ZWVuKG1pbGxpc2Vjb25kLCAwLCA5OTkpO1xyXG5cclxuICBpZiAoIXZhbGlkSG91cikge1xyXG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKCdob3VyJywgaG91cik7XHJcbiAgfSBpZiAoIXZhbGlkTWludXRlKSB7XHJcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoJ21pbnV0ZScsIG1pbnV0ZSk7XHJcbiAgfSBpZiAoIXZhbGlkU2Vjb25kKSB7XHJcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoJ3NlY29uZCcsIHNlY29uZCk7XHJcbiAgfSBpZiAoIXZhbGlkTWlsbGlzZWNvbmQpIHtcclxuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZSgnbWlsbGlzZWNvbmQnLCBtaWxsaXNlY29uZCk7XHJcbiAgfSByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmNvbnN0IElOVkFMSUQgPSAnSW52YWxpZCBEYXRlVGltZSc7XHJcbmNvbnN0IE1BWF9EQVRFID0gOC42NGUxNTtcclxuXHJcbmZ1bmN0aW9uIHVuc3VwcG9ydGVkWm9uZSh6b25lKSB7XHJcbiAgcmV0dXJuIG5ldyBJbnZhbGlkKCd1bnN1cHBvcnRlZCB6b25lJywgYHRoZSB6b25lIFwiJHt6b25lLm5hbWV9XCIgaXMgbm90IHN1cHBvcnRlZGApO1xyXG59XHJcblxyXG4vLyB3ZSBjYWNoZSB3ZWVrIGRhdGEgb24gdGhlIERUIG9iamVjdCBhbmQgdGhpcyBpbnRlcm1lZGlhdGVzIHRoZSBjYWNoZVxyXG5mdW5jdGlvbiBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKGR0KSB7XHJcbiAgaWYgKGR0LndlZWtEYXRhID09PSBudWxsKSB7XHJcbiAgICBkdC53ZWVrRGF0YSA9IGdyZWdvcmlhblRvV2VlayhkdC5jKTtcclxuICB9XHJcbiAgcmV0dXJuIGR0LndlZWtEYXRhO1xyXG59XHJcblxyXG4vLyBjbG9uZSByZWFsbHkgbWVhbnMsIFwibWFrZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGVzZSBtb2RpZmljYXRpb25zXCIuIGFsbCBcInNldHRlcnNcIiByZWFsbHkgdXNlIHRoaXNcclxuLy8gdG8gY3JlYXRlIGEgbmV3IG9iamVjdCB3aGlsZSBvbmx5IGNoYW5naW5nIHNvbWUgb2YgdGhlIHByb3BlcnRpZXNcclxuZnVuY3Rpb24gY2xvbmUoaW5zdCwgYWx0cykge1xyXG4gIGNvbnN0IGN1cnJlbnQgPSB7XHJcbiAgICB0czogaW5zdC50cyxcclxuICAgIHpvbmU6IGluc3Quem9uZSxcclxuICAgIGM6IGluc3QuYyxcclxuICAgIG86IGluc3QubyxcclxuICAgIGxvYzogaW5zdC5sb2MsXHJcbiAgICBpbnZhbGlkOiBpbnN0LmludmFsaWQsXHJcbiAgfTtcclxuICByZXR1cm4gbmV3IERhdGVUaW1lKHsgLi4uY3VycmVudCwgLi4uYWx0cywgb2xkOiBjdXJyZW50IH0pO1xyXG59XHJcblxyXG4vLyBmaW5kIHRoZSByaWdodCBvZmZzZXQgYSBnaXZlbiBsb2NhbCB0aW1lLiBUaGUgbyBpbnB1dCBpcyBvdXIgZ3Vlc3MsIHdoaWNoIGRldGVybWluZXMgd2hpY2hcclxuLy8gb2Zmc2V0IHdlJ2xsIHBpY2sgaW4gYW1iaWd1b3VzIGNhc2VzIChlLmcuIHRoZXJlIGFyZSB0d28gMyBBTXMgYi9jIEZhbGxiYWNrIERTVClcclxuZnVuY3Rpb24gZml4T2Zmc2V0KGxvY2FsVFMsIG8sIHR6KSB7XHJcbiAgLy8gT3VyIFVUQyB0aW1lIGlzIGp1c3QgYSBndWVzcyBiZWNhdXNlIG91ciBvZmZzZXQgaXMganVzdCBhIGd1ZXNzXHJcbiAgbGV0IHV0Y0d1ZXNzID0gbG9jYWxUUyAtIG8gKiA2MCAqIDEwMDA7XHJcblxyXG4gIC8vIFRlc3Qgd2hldGhlciB0aGUgem9uZSBtYXRjaGVzIHRoZSBvZmZzZXQgZm9yIHRoaXMgdHNcclxuICBjb25zdCBvMiA9IHR6Lm9mZnNldCh1dGNHdWVzcyk7XHJcblxyXG4gIC8vIElmIHNvLCBvZmZzZXQgZGlkbid0IGNoYW5nZSBhbmQgd2UncmUgZG9uZVxyXG4gIGlmIChvID09PSBvMikge1xyXG4gICAgcmV0dXJuIFt1dGNHdWVzcywgb107XHJcbiAgfVxyXG5cclxuICAvLyBJZiBub3QsIGNoYW5nZSB0aGUgdHMgYnkgdGhlIGRpZmZlcmVuY2UgaW4gdGhlIG9mZnNldFxyXG4gIHV0Y0d1ZXNzIC09IChvMiAtIG8pICogNjAgKiAxMDAwO1xyXG5cclxuICAvLyBJZiB0aGF0IGdpdmVzIHVzIHRoZSBsb2NhbCB0aW1lIHdlIHdhbnQsIHdlJ3JlIGRvbmVcclxuICBjb25zdCBvMyA9IHR6Lm9mZnNldCh1dGNHdWVzcyk7XHJcbiAgaWYgKG8yID09PSBvMykge1xyXG4gICAgcmV0dXJuIFt1dGNHdWVzcywgbzJdO1xyXG4gIH1cclxuXHJcbiAgLy8gSWYgaXQncyBkaWZmZXJlbnQsIHdlJ3JlIGluIGEgaG9sZSB0aW1lLiBUaGUgb2Zmc2V0IGhhcyBjaGFuZ2VkLCBidXQgdGhlIHdlIGRvbid0IGFkanVzdCB0aGUgdGltZVxyXG4gIHJldHVybiBbbG9jYWxUUyAtIE1hdGgubWluKG8yLCBvMykgKiA2MCAqIDEwMDAsIE1hdGgubWF4KG8yLCBvMyldO1xyXG59XHJcblxyXG4vLyBjb252ZXJ0IGFuIGVwb2NoIHRpbWVzdGFtcCBpbnRvIGEgY2FsZW5kYXIgb2JqZWN0IHdpdGggdGhlIGdpdmVuIG9mZnNldFxyXG5mdW5jdGlvbiB0c1RvT2JqKHRzLCBvZmZzZXQpIHtcclxuICB0cyArPSBvZmZzZXQgKiA2MCAqIDEwMDA7XHJcblxyXG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSh0cyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB5ZWFyOiBkLmdldFVUQ0Z1bGxZZWFyKCksXHJcbiAgICBtb250aDogZC5nZXRVVENNb250aCgpICsgMSxcclxuICAgIGRheTogZC5nZXRVVENEYXRlKCksXHJcbiAgICBob3VyOiBkLmdldFVUQ0hvdXJzKCksXHJcbiAgICBtaW51dGU6IGQuZ2V0VVRDTWludXRlcygpLFxyXG4gICAgc2Vjb25kOiBkLmdldFVUQ1NlY29uZHMoKSxcclxuICAgIG1pbGxpc2Vjb25kOiBkLmdldFVUQ01pbGxpc2Vjb25kcygpLFxyXG4gIH07XHJcbn1cclxuXHJcbi8vIGNvbnZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBlcG9jaCB0aW1lc3RhbXBcclxuZnVuY3Rpb24gb2JqVG9UUyhvYmosIG9mZnNldCwgem9uZSkge1xyXG4gIHJldHVybiBmaXhPZmZzZXQob2JqVG9Mb2NhbFRTKG9iaiksIG9mZnNldCwgem9uZSk7XHJcbn1cclxuXHJcbi8vIGNyZWF0ZSBhIG5ldyBEVCBpbnN0YW5jZSBieSBhZGRpbmcgYSBkdXJhdGlvbiwgYWRqdXN0aW5nIGZvciBEU1RzXHJcbmZ1bmN0aW9uIGFkanVzdFRpbWUoaW5zdCwgZHVyKSB7XHJcbiAgY29uc3Qgb1ByZSA9IGluc3QubztcclxuICBjb25zdCB5ZWFyID0gaW5zdC5jLnllYXIgKyBNYXRoLnRydW5jKGR1ci55ZWFycyk7XHJcbiAgY29uc3QgbW9udGggPSBpbnN0LmMubW9udGggKyBNYXRoLnRydW5jKGR1ci5tb250aHMpICsgTWF0aC50cnVuYyhkdXIucXVhcnRlcnMpICogMztcclxuICBjb25zdCBjID0ge1xyXG4gICAgLi4uaW5zdC5jLFxyXG4gICAgeWVhcixcclxuICAgIG1vbnRoLFxyXG4gICAgZGF5OlxyXG4gICAgICAgICBNYXRoLm1pbihpbnN0LmMuZGF5LCBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkpXHJcbiAgICAgICAgICsgTWF0aC50cnVuYyhkdXIuZGF5cylcclxuICAgICAgICAgKyBNYXRoLnRydW5jKGR1ci53ZWVrcykgKiA3LFxyXG4gIH07XHJcbiAgY29uc3QgbWlsbGlzVG9BZGQgPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHtcclxuICAgIHllYXJzOiBkdXIueWVhcnMgLSBNYXRoLnRydW5jKGR1ci55ZWFycyksXHJcbiAgICBxdWFydGVyczogZHVyLnF1YXJ0ZXJzIC0gTWF0aC50cnVuYyhkdXIucXVhcnRlcnMpLFxyXG4gICAgbW9udGhzOiBkdXIubW9udGhzIC0gTWF0aC50cnVuYyhkdXIubW9udGhzKSxcclxuICAgIHdlZWtzOiBkdXIud2Vla3MgLSBNYXRoLnRydW5jKGR1ci53ZWVrcyksXHJcbiAgICBkYXlzOiBkdXIuZGF5cyAtIE1hdGgudHJ1bmMoZHVyLmRheXMpLFxyXG4gICAgaG91cnM6IGR1ci5ob3VycyxcclxuICAgIG1pbnV0ZXM6IGR1ci5taW51dGVzLFxyXG4gICAgc2Vjb25kczogZHVyLnNlY29uZHMsXHJcbiAgICBtaWxsaXNlY29uZHM6IGR1ci5taWxsaXNlY29uZHMsXHJcbiAgfSkuYXMoJ21pbGxpc2Vjb25kcycpO1xyXG4gIGNvbnN0IGxvY2FsVFMgPSBvYmpUb0xvY2FsVFMoYyk7XHJcblxyXG4gIGxldCBbdHMsIG9dID0gZml4T2Zmc2V0KGxvY2FsVFMsIG9QcmUsIGluc3Quem9uZSk7XHJcblxyXG4gIGlmIChtaWxsaXNUb0FkZCAhPT0gMCkge1xyXG4gICAgdHMgKz0gbWlsbGlzVG9BZGQ7XHJcbiAgICAvLyB0aGF0IGNvdWxkIGhhdmUgY2hhbmdlZCB0aGUgb2Zmc2V0IGJ5IGdvaW5nIG92ZXIgYSBEU1QsIGJ1dCB3ZSB3YW50IHRvIGtlZXAgdGhlIHRzIHRoZSBzYW1lXHJcbiAgICBvID0gaW5zdC56b25lLm9mZnNldCh0cyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyB0cywgbyB9O1xyXG59XHJcblxyXG4vLyBoZWxwZXIgdXNlZnVsIGluIHR1cm5pbmcgdGhlIHJlc3VsdHMgb2YgcGFyc2luZyBpbnRvIHJlYWwgZGF0ZXNcclxuLy8gYnkgaGFuZGxpbmcgdGhlIHpvbmUgb3B0aW9uc1xyXG5mdW5jdGlvbiBwYXJzZURhdGFUb0RhdGVUaW1lKHBhcnNlZCwgcGFyc2VkWm9uZSwgb3B0cywgZm9ybWF0LCB0ZXh0LCBzcGVjaWZpY09mZnNldCkge1xyXG4gIGNvbnN0IHsgc2V0Wm9uZSwgem9uZSB9ID0gb3B0cztcclxuICBpZiAocGFyc2VkICYmIE9iamVjdC5rZXlzKHBhcnNlZCkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICBjb25zdCBpbnRlcnByZXRhdGlvblpvbmUgPSBwYXJzZWRab25lIHx8IHpvbmU7XHJcbiAgICBjb25zdCBpbnN0ID0gRGF0ZVRpbWUuZnJvbU9iamVjdChwYXJzZWQsIHtcclxuICAgICAgLi4ub3B0cyxcclxuICAgICAgem9uZTogaW50ZXJwcmV0YXRpb25ab25lLFxyXG4gICAgICBzcGVjaWZpY09mZnNldCxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNldFpvbmUgPyBpbnN0IDogaW5zdC5zZXRab25lKHpvbmUpO1xyXG4gIH1cclxuICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcclxuICAgIG5ldyBJbnZhbGlkKCd1bnBhcnNhYmxlJywgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgJHtmb3JtYXR9YCksXHJcbiAgKTtcclxufVxyXG5cclxuLy8gaWYgeW91IHdhbnQgdG8gb3V0cHV0IGEgdGVjaG5pY2FsIGZvcm1hdCAoZS5nLiBSRkMgMjgyMiksIHRoaXMgaGVscGVyXHJcbi8vIGhlbHBzIGhhbmRsZSB0aGUgZGV0YWlsc1xyXG5mdW5jdGlvbiB0b1RlY2hGb3JtYXQoZHQsIGZvcm1hdCwgYWxsb3daID0gdHJ1ZSkge1xyXG4gIHJldHVybiBkdC5pc1ZhbGlkXHJcbiAgICA/IEZvcm1hdHRlci5jcmVhdGUoTG9jYWxlLmNyZWF0ZSgnZW4tVVMnKSwge1xyXG4gICAgICBhbGxvd1osXHJcbiAgICAgIGZvcmNlU2ltcGxlOiB0cnVlLFxyXG4gICAgfSkuZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKGR0LCBmb3JtYXQpXHJcbiAgICA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvSVNPRGF0ZShvLCBleHRlbmRlZCkge1xyXG4gIGNvbnN0IGxvbmdGb3JtYXQgPSBvLmMueWVhciA+IDk5OTkgfHwgby5jLnllYXIgPCAwO1xyXG4gIGxldCBjID0gJyc7XHJcbiAgaWYgKGxvbmdGb3JtYXQgJiYgby5jLnllYXIgPj0gMCkgYyArPSAnKyc7XHJcbiAgYyArPSBwYWRTdGFydChvLmMueWVhciwgbG9uZ0Zvcm1hdCA/IDYgOiA0KTtcclxuXHJcbiAgaWYgKGV4dGVuZGVkKSB7XHJcbiAgICBjICs9ICctJztcclxuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1vbnRoKTtcclxuICAgIGMgKz0gJy0nO1xyXG4gICAgYyArPSBwYWRTdGFydChvLmMuZGF5KTtcclxuICB9IGVsc2Uge1xyXG4gICAgYyArPSBwYWRTdGFydChvLmMubW9udGgpO1xyXG4gICAgYyArPSBwYWRTdGFydChvLmMuZGF5KTtcclxuICB9XHJcbiAgcmV0dXJuIGM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvSVNPVGltZShcclxuICBvLFxyXG4gIGV4dGVuZGVkLFxyXG4gIHN1cHByZXNzU2Vjb25kcyxcclxuICBzdXBwcmVzc01pbGxpc2Vjb25kcyxcclxuICBpbmNsdWRlT2Zmc2V0LFxyXG4gIGV4dGVuZGVkWm9uZSxcclxuKSB7XHJcbiAgbGV0IGMgPSBwYWRTdGFydChvLmMuaG91cik7XHJcbiAgaWYgKGV4dGVuZGVkKSB7XHJcbiAgICBjICs9ICc6JztcclxuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbnV0ZSk7XHJcbiAgICBpZiAoby5jLnNlY29uZCAhPT0gMCB8fCAhc3VwcHJlc3NTZWNvbmRzKSB7XHJcbiAgICAgIGMgKz0gJzonO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5taW51dGUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG8uYy5zZWNvbmQgIT09IDAgfHwgIXN1cHByZXNzU2Vjb25kcykge1xyXG4gICAgYyArPSBwYWRTdGFydChvLmMuc2Vjb25kKTtcclxuXHJcbiAgICBpZiAoby5jLm1pbGxpc2Vjb25kICE9PSAwIHx8ICFzdXBwcmVzc01pbGxpc2Vjb25kcykge1xyXG4gICAgICBjICs9ICcuJztcclxuICAgICAgYyArPSBwYWRTdGFydChvLmMubWlsbGlzZWNvbmQsIDMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGluY2x1ZGVPZmZzZXQpIHtcclxuICAgIGlmIChvLmlzT2Zmc2V0Rml4ZWQgJiYgby5vZmZzZXQgPT09IDAgJiYgIWV4dGVuZGVkWm9uZSkge1xyXG4gICAgICBjICs9ICdaJztcclxuICAgIH0gZWxzZSBpZiAoby5vIDwgMCkge1xyXG4gICAgICBjICs9ICctJztcclxuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKC1vLm8gLyA2MCkpO1xyXG4gICAgICBjICs9ICc6JztcclxuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKC1vLm8gJSA2MCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYyArPSAnKyc7XHJcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYyhvLm8gLyA2MCkpO1xyXG4gICAgICBjICs9ICc6JztcclxuICAgICAgYyArPSBwYWRTdGFydChNYXRoLnRydW5jKG8ubyAlIDYwKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZXh0ZW5kZWRab25lKSB7XHJcbiAgICBjICs9IGBbJHtvLnpvbmUuaWFuYU5hbWV9XWA7XHJcbiAgfVxyXG4gIHJldHVybiBjO1xyXG59XHJcblxyXG4vLyBkZWZhdWx0cyBmb3IgdW5zcGVjaWZpZWQgdW5pdHMgaW4gdGhlIHN1cHBvcnRlZCBjYWxlbmRhcnNcclxuY29uc3QgZGVmYXVsdFVuaXRWYWx1ZXMgPSB7XHJcbiAgbW9udGg6IDEsXHJcbiAgZGF5OiAxLFxyXG4gIGhvdXI6IDAsXHJcbiAgbWludXRlOiAwLFxyXG4gIHNlY29uZDogMCxcclxuICBtaWxsaXNlY29uZDogMCxcclxufTtcclxuY29uc3QgZGVmYXVsdFdlZWtVbml0VmFsdWVzID0ge1xyXG4gIHdlZWtOdW1iZXI6IDEsXHJcbiAgd2Vla2RheTogMSxcclxuICBob3VyOiAwLFxyXG4gIG1pbnV0ZTogMCxcclxuICBzZWNvbmQ6IDAsXHJcbiAgbWlsbGlzZWNvbmQ6IDAsXHJcbn07XHJcbmNvbnN0IGRlZmF1bHRPcmRpbmFsVW5pdFZhbHVlcyA9IHtcclxuICBvcmRpbmFsOiAxLFxyXG4gIGhvdXI6IDAsXHJcbiAgbWludXRlOiAwLFxyXG4gIHNlY29uZDogMCxcclxuICBtaWxsaXNlY29uZDogMCxcclxufTtcclxuXHJcbi8vIFVuaXRzIGluIHRoZSBzdXBwb3J0ZWQgY2FsZW5kYXJzLCBzb3J0ZWQgYnkgYmlnbmVzc1xyXG5jb25zdCBvcmRlcmVkVW5pdHMgPSBbJ3llYXInLCAnbW9udGgnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsICdtaWxsaXNlY29uZCddO1xyXG5jb25zdCBvcmRlcmVkV2Vla1VuaXRzID0gW1xyXG4gICd3ZWVrWWVhcicsXHJcbiAgJ3dlZWtOdW1iZXInLFxyXG4gICd3ZWVrZGF5JyxcclxuICAnaG91cicsXHJcbiAgJ21pbnV0ZScsXHJcbiAgJ3NlY29uZCcsXHJcbiAgJ21pbGxpc2Vjb25kJyxcclxuXTtcclxuY29uc3Qgb3JkZXJlZE9yZGluYWxVbml0cyA9IFsneWVhcicsICdvcmRpbmFsJywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsICdtaWxsaXNlY29uZCddO1xyXG5cclxuLy8gc3RhbmRhcmRpemUgY2FzZSBhbmQgcGx1cmFsaXR5IGluIHVuaXRzXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXQodW5pdCkge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB7XHJcbiAgICB5ZWFyOiAneWVhcicsXHJcbiAgICB5ZWFyczogJ3llYXInLFxyXG4gICAgbW9udGg6ICdtb250aCcsXHJcbiAgICBtb250aHM6ICdtb250aCcsXHJcbiAgICBkYXk6ICdkYXknLFxyXG4gICAgZGF5czogJ2RheScsXHJcbiAgICBob3VyOiAnaG91cicsXHJcbiAgICBob3VyczogJ2hvdXInLFxyXG4gICAgbWludXRlOiAnbWludXRlJyxcclxuICAgIG1pbnV0ZXM6ICdtaW51dGUnLFxyXG4gICAgcXVhcnRlcjogJ3F1YXJ0ZXInLFxyXG4gICAgcXVhcnRlcnM6ICdxdWFydGVyJyxcclxuICAgIHNlY29uZDogJ3NlY29uZCcsXHJcbiAgICBzZWNvbmRzOiAnc2Vjb25kJyxcclxuICAgIG1pbGxpc2Vjb25kOiAnbWlsbGlzZWNvbmQnLFxyXG4gICAgbWlsbGlzZWNvbmRzOiAnbWlsbGlzZWNvbmQnLFxyXG4gICAgd2Vla2RheTogJ3dlZWtkYXknLFxyXG4gICAgd2Vla2RheXM6ICd3ZWVrZGF5JyxcclxuICAgIHdlZWtudW1iZXI6ICd3ZWVrTnVtYmVyJyxcclxuICAgIHdlZWtzbnVtYmVyOiAnd2Vla051bWJlcicsXHJcbiAgICB3ZWVrbnVtYmVyczogJ3dlZWtOdW1iZXInLFxyXG4gICAgd2Vla3llYXI6ICd3ZWVrWWVhcicsXHJcbiAgICB3ZWVreWVhcnM6ICd3ZWVrWWVhcicsXHJcbiAgICBvcmRpbmFsOiAnb3JkaW5hbCcsXHJcbiAgfVt1bml0LnRvTG93ZXJDYXNlKCldO1xyXG5cclxuICBpZiAoIW5vcm1hbGl6ZWQpIHRocm93IG5ldyBJbnZhbGlkVW5pdEVycm9yKHVuaXQpO1xyXG5cclxuICByZXR1cm4gbm9ybWFsaXplZDtcclxufVxyXG5cclxuLy8gdGhpcyBpcyBhIGR1bWJlZCBkb3duIHZlcnNpb24gb2YgZnJvbU9iamVjdCgpIHRoYXQgcnVucyBhYm91dCA2MCUgZmFzdGVyXHJcbi8vIGJ1dCBkb2Vzbid0IGRvIGFueSB2YWxpZGF0aW9uLCBtYWtlcyBhIGJ1bmNoIG9mIGFzc3VtcHRpb25zIGFib3V0IHdoYXQgdW5pdHNcclxuLy8gYXJlIHByZXNlbnQsIGFuZCBzbyBvbi5cclxuZnVuY3Rpb24gcXVpY2tEVChvYmosIG9wdHMpIHtcclxuICBjb25zdCB6b25lID0gbm9ybWFsaXplWm9uZShvcHRzLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcclxuICBjb25zdCBsb2MgPSBMb2NhbGUuZnJvbU9iamVjdChvcHRzKTtcclxuICBjb25zdCB0c05vdyA9IFNldHRpbmdzLm5vdygpO1xyXG5cclxuICBsZXQgdHM7IGxldFxyXG4gICAgbztcclxuXHJcbiAgLy8gYXNzdW1lIHdlIGhhdmUgdGhlIGhpZ2hlci1vcmRlciB1bml0c1xyXG4gIGlmICghaXNVbmRlZmluZWQob2JqLnllYXIpKSB7XHJcbiAgICBmb3IgKGNvbnN0IHUgb2Ygb3JkZXJlZFVuaXRzKSB7XHJcbiAgICAgIGlmIChpc1VuZGVmaW5lZChvYmpbdV0pKSB7XHJcbiAgICAgICAgb2JqW3VdID0gZGVmYXVsdFVuaXRWYWx1ZXNbdV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnZhbGlkID0gaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEob2JqKSB8fCBoYXNJbnZhbGlkVGltZURhdGEob2JqKTtcclxuICAgIGlmIChpbnZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9mZnNldFByb3ZpcyA9IHpvbmUub2Zmc2V0KHRzTm93KTtcclxuICAgIFt0cywgb10gPSBvYmpUb1RTKG9iaiwgb2Zmc2V0UHJvdmlzLCB6b25lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdHMgPSB0c05vdztcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xyXG4gICAgdHMsIHpvbmUsIGxvYywgbyxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlmZlJlbGF0aXZlKHN0YXJ0LCBlbmQsIG9wdHMpIHtcclxuICBjb25zdCByb3VuZCA9IGlzVW5kZWZpbmVkKG9wdHMucm91bmQpID8gdHJ1ZSA6IG9wdHMucm91bmQ7XHJcbiAgY29uc3QgZm9ybWF0ID0gKGMsIHVuaXQpID0+IHtcclxuICAgIGMgPSByb3VuZFRvKGMsIHJvdW5kIHx8IG9wdHMuY2FsZW5kYXJ5ID8gMCA6IDIsIHRydWUpO1xyXG4gICAgY29uc3QgZm9ybWF0dGVyID0gZW5kLmxvYy5jbG9uZShvcHRzKS5yZWxGb3JtYXR0ZXIob3B0cyk7XHJcbiAgICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChjLCB1bml0KTtcclxuICB9O1xyXG4gIGNvbnN0IGRpZmZlciA9ICh1bml0KSA9PiB7XHJcbiAgICBpZiAob3B0cy5jYWxlbmRhcnkpIHtcclxuICAgICAgaWYgKCFlbmQuaGFzU2FtZShzdGFydCwgdW5pdCkpIHtcclxuICAgICAgICByZXR1cm4gZW5kLnN0YXJ0T2YodW5pdCkuZGlmZihzdGFydC5zdGFydE9mKHVuaXQpLCB1bml0KS5nZXQodW5pdCk7XHJcbiAgICAgIH0gcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW5kLmRpZmYoc3RhcnQsIHVuaXQpLmdldCh1bml0KTtcclxuICB9O1xyXG5cclxuICBpZiAob3B0cy51bml0KSB7XHJcbiAgICByZXR1cm4gZm9ybWF0KGRpZmZlcihvcHRzLnVuaXQpLCBvcHRzLnVuaXQpO1xyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCB1bml0IG9mIG9wdHMudW5pdHMpIHtcclxuICAgIGNvbnN0IGNvdW50ID0gZGlmZmVyKHVuaXQpO1xyXG4gICAgaWYgKE1hdGguYWJzKGNvdW50KSA+PSAxKSB7XHJcbiAgICAgIHJldHVybiBmb3JtYXQoY291bnQsIHVuaXQpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZm9ybWF0KHN0YXJ0ID4gZW5kID8gLTAgOiAwLCBvcHRzLnVuaXRzW29wdHMudW5pdHMubGVuZ3RoIC0gMV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsYXN0T3B0cyhhcmdMaXN0KSB7XHJcbiAgbGV0IG9wdHMgPSB7fTtcclxuICBsZXQgYXJncztcclxuICBpZiAoYXJnTGlzdC5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdMaXN0W2FyZ0xpc3QubGVuZ3RoIC0gMV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICBvcHRzID0gYXJnTGlzdFthcmdMaXN0Lmxlbmd0aCAtIDFdO1xyXG4gICAgYXJncyA9IEFycmF5LmZyb20oYXJnTGlzdCkuc2xpY2UoMCwgYXJnTGlzdC5sZW5ndGggLSAxKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYXJncyA9IEFycmF5LmZyb20oYXJnTGlzdCk7XHJcbiAgfVxyXG4gIHJldHVybiBbb3B0cywgYXJnc107XHJcbn1cclxuXHJcbi8qKlxyXG4gICogQSBEYXRlVGltZSBpcyBhbiBpbW11dGFibGUgZGF0YSBzdHJ1Y3R1cmUgcmVwcmVzZW50aW5nIGEgc3BlY2lmaWMgZGF0ZSBhbmQgdGltZSBhbmQgYWNjb21wYW55aW5nIG1ldGhvZHMuIEl0IGNvbnRhaW5zIGNsYXNzIGFuZCBpbnN0YW5jZSBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxyXG4gICpcclxuICAqIEEgRGF0ZVRpbWUgY29tcHJpc2VzIG9mOlxyXG4gICogKiBBIHRpbWVzdGFtcC4gRWFjaCBEYXRlVGltZSBpbnN0YW5jZSByZWZlcnMgdG8gYSBzcGVjaWZpYyBtaWxsaXNlY29uZCBvZiB0aGUgVW5peCBlcG9jaC5cclxuICAqICogQSB0aW1lIHpvbmUuIEVhY2ggaW5zdGFuY2UgaXMgY29uc2lkZXJlZCBpbiB0aGUgY29udGV4dCBvZiBhIHNwZWNpZmljIHpvbmUgKGJ5IGRlZmF1bHQgdGhlIGxvY2FsIHN5c3RlbSdzIHpvbmUpLlxyXG4gICogKiBDb25maWd1cmF0aW9uIHByb3BlcnRpZXMgdGhhdCBlZmZlY3QgaG93IG91dHB1dCBzdHJpbmdzIGFyZSBmb3JtYXR0ZWQsIHN1Y2ggYXMgYGxvY2FsZWAsIGBudW1iZXJpbmdTeXN0ZW1gLCBhbmQgYG91dHB1dENhbGVuZGFyYC5cclxuICAqXHJcbiAgKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBmdW5jdGlvbmFsaXR5IGl0IHByb3ZpZGVzOlxyXG4gICpcclxuICAqICogKipDcmVhdGlvbioqOiBUbyBjcmVhdGUgYSBEYXRlVGltZSBmcm9tIGl0cyBjb21wb25lbnRzLCB1c2Ugb25lIG9mIGl0cyBmYWN0b3J5IGNsYXNzIG1ldGhvZHM6IHtAbGluayBEYXRlVGltZSNsb2NhbH0sIHtAbGluayBEYXRlVGltZSN1dGN9LCBhbmQgKG1vc3QgZmxleGlibHkpIHtAbGluayBEYXRlVGltZSNmcm9tT2JqZWN0fS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgc3RhbmRhcmQgc3RyaW5nIGZvcm1hdCwgdXNlIHtAbGluayBEYXRlVGltZSNmcm9tSVNPfSwge0BsaW5rIERhdGVUaW1lI2Zyb21IVFRQfSwgYW5kIHtAbGluayBEYXRlVGltZSNmcm9tUkZDMjgyMn0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIGN1c3RvbSBzdHJpbmcgZm9ybWF0LCB1c2Uge0BsaW5rIERhdGVUaW1lI2Zyb21Gb3JtYXR9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBuYXRpdmUgSlMgZGF0ZSwgdXNlIHtAbGluayBEYXRlVGltZSNmcm9tSlNEYXRlfS5cclxuICAqICogKipHcmVnb3JpYW4gY2FsZW5kYXIgYW5kIHRpbWUqKjogVG8gZXhhbWluZSB0aGUgR3JlZ29yaWFuIHByb3BlcnRpZXMgb2YgYSBEYXRlVGltZSBpbmRpdmlkdWFsbHkgKGkuZSBhcyBvcHBvc2VkIHRvIGNvbGxlY3RpdmVseSB0aHJvdWdoIHtAbGluayBEYXRlVGltZSN0b09iamVjdH0pLCB1c2UgdGhlIHtAbGluayBEYXRlVGltZSN5ZWFyfSwge0BsaW5rIERhdGVUaW1lI21vbnRofSxcclxuICAqIHtAbGluayBEYXRlVGltZSNkYXl9LCB7QGxpbmsgRGF0ZVRpbWUjaG91cn0sIHtAbGluayBEYXRlVGltZSNtaW51dGV9LCB7QGxpbmsgRGF0ZVRpbWUjc2Vjb25kfSwge0BsaW5rIERhdGVUaW1lI21pbGxpc2Vjb25kfSBhY2Nlc3NvcnMuXHJcbiAgKiAqICoqV2VlayBjYWxlbmRhcioqOiBGb3IgSVNPIHdlZWsgY2FsZW5kYXIgYXR0cmlidXRlcywgc2VlIHRoZSB7QGxpbmsgRGF0ZVRpbWUjd2Vla1llYXJ9LCB7QGxpbmsgRGF0ZVRpbWUjd2Vla051bWJlcn0sIGFuZCB7QGxpbmsgRGF0ZVRpbWUjd2Vla2RheX0gYWNjZXNzb3JzLlxyXG4gICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgdGhlIHtAbGluayBEYXRlVGltZSNsb2NhbGV9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjbnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuXHJcbiAgKiAqICoqVHJhbnNmb3JtYXRpb24qKjogVG8gdHJhbnNmb3JtIHRoZSBEYXRlVGltZSBpbnRvIG90aGVyIERhdGVUaW1lcywgdXNlIHtAbGluayBEYXRlVGltZSNzZXR9LCB7QGxpbmsgRGF0ZVRpbWUjcmVjb25maWd1cmV9LCB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0sIHtAbGluayBEYXRlVGltZSNzZXRMb2NhbGV9LCB7QGxpbmsgRGF0ZVRpbWUucGx1c30sIHtAbGluayBEYXRlVGltZSNtaW51c30sIHtAbGluayBEYXRlVGltZSNlbmRPZn0sIHtAbGluayBEYXRlVGltZSNzdGFydE9mfSwge0BsaW5rIERhdGVUaW1lI3RvVVRDfSwgYW5kIHtAbGluayBEYXRlVGltZSN0b0xvY2FsfS5cclxuICAqICogKipPdXRwdXQqKjogVG8gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCB1c2UgdGhlIHtAbGluayBEYXRlVGltZSN0b1JlbGF0aXZlfSwge0BsaW5rIERhdGVUaW1lI3RvUmVsYXRpdmVDYWxlbmRhcn0sIHtAbGluayBEYXRlVGltZSN0b0pTT059LCB7QGxpbmsgRGF0ZVRpbWUjdG9JU099LCB7QGxpbmsgRGF0ZVRpbWUjdG9IVFRQfSwge0BsaW5rIERhdGVUaW1lI3RvT2JqZWN0fSwge0BsaW5rIERhdGVUaW1lI3RvUkZDMjgyMn0sIHtAbGluayBEYXRlVGltZSN0b1N0cmluZ30sIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30sIHtAbGluayBEYXRlVGltZSN0b0Zvcm1hdH0sIHtAbGluayBEYXRlVGltZSN0b01pbGxpc30gYW5kIHtAbGluayBEYXRlVGltZSN0b0pTRGF0ZX0uXHJcbiAgKlxyXG4gICogVGhlcmUncyBwbGVudHkgb3RoZXJzIGRvY3VtZW50ZWQgYmVsb3cuIEluIGFkZGl0aW9uLCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBzdWJ0bGVyIHRvcGljcyBsaWtlIGludGVybmF0aW9uYWxpemF0aW9uLCB0aW1lIHpvbmVzLCBhbHRlcm5hdGl2ZSBjYWxlbmRhcnMsIHZhbGlkaXR5LCBhbmQgc28gb24sIHNlZSB0aGUgZXh0ZXJuYWwgZG9jdW1lbnRhdGlvbi5cclxuICAqL1xyXG5jbGFzcyBEYXRlVGltZSB7XHJcbiAgLyoqXHJcbiAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgIGNvbnN0IHpvbmUgPSBjb25maWcuem9uZSB8fCBTZXR0aW5ncy5kZWZhdWx0Wm9uZTtcclxuXHJcbiAgICBsZXQgaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkXHJcbiAgICAgICB8fCAoTnVtYmVyLmlzTmFOKGNvbmZpZy50cykgPyBuZXcgSW52YWxpZCgnaW52YWxpZCBpbnB1dCcpIDogbnVsbClcclxuICAgICAgIHx8ICghem9uZS5pc1ZhbGlkID8gdW5zdXBwb3J0ZWRab25lKHpvbmUpIDogbnVsbCk7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMudHMgPSBpc1VuZGVmaW5lZChjb25maWcudHMpID8gU2V0dGluZ3Mubm93KCkgOiBjb25maWcudHM7XHJcblxyXG4gICAgbGV0IGMgPSBudWxsO1xyXG4gICAgbGV0IG8gPSBudWxsO1xyXG4gICAgaWYgKCFpbnZhbGlkKSB7XHJcbiAgICAgIGNvbnN0IHVuY2hhbmdlZCA9IGNvbmZpZy5vbGQgJiYgY29uZmlnLm9sZC50cyA9PT0gdGhpcy50cyAmJiBjb25maWcub2xkLnpvbmUuZXF1YWxzKHpvbmUpO1xyXG5cclxuICAgICAgaWYgKHVuY2hhbmdlZCkge1xyXG4gICAgICAgIFtjLCBvXSA9IFtjb25maWcub2xkLmMsIGNvbmZpZy5vbGQub107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgb3QgPSB6b25lLm9mZnNldCh0aGlzLnRzKTtcclxuICAgICAgICBjID0gdHNUb09iaih0aGlzLnRzLCBvdCk7XHJcbiAgICAgICAgaW52YWxpZCA9IE51bWJlci5pc05hTihjLnllYXIpID8gbmV3IEludmFsaWQoJ2ludmFsaWQgaW5wdXQnKSA6IG51bGw7XHJcbiAgICAgICAgYyA9IGludmFsaWQgPyBudWxsIDogYztcclxuICAgICAgICBvID0gaW52YWxpZCA/IG51bGwgOiBvdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxyXG4gICAgICAqL1xyXG4gICAgdGhpcy5fem9uZSA9IHpvbmU7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMubG9jID0gY29uZmlnLmxvYyB8fCBMb2NhbGUuY3JlYXRlKCk7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMuaW52YWxpZCA9IGludmFsaWQ7XHJcbiAgICAvKipcclxuICAgICAgKiBAYWNjZXNzIHByaXZhdGVcclxuICAgICAgKi9cclxuICAgIHRoaXMud2Vla0RhdGEgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLmMgPSBjO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLm8gPSBvO1xyXG4gICAgLyoqXHJcbiAgICAgICogQGFjY2VzcyBwcml2YXRlXHJcbiAgICAgICovXHJcbiAgICB0aGlzLmlzTHV4b25EYXRlVGltZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyBDT05TVFJVQ1RcclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIERhdGVUaW1lIGZvciB0aGUgY3VycmVudCBpbnN0YW50LCBpbiB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxyXG4gICAgKlxyXG4gICAgKiBVc2UgU2V0dGluZ3MgdG8gb3ZlcnJpZGUgdGhlc2UgZGVmYXVsdCB2YWx1ZXMgaWYgbmVlZGVkLlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTygpIC8vfj4gbm93IGluIHRoZSBJU08gZm9ybWF0XHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgbm93KCkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7fSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgbG9jYWwgRGF0ZVRpbWVcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFt5ZWFyXSAtIFRoZSBjYWxlbmRhciB5ZWFyLiBJZiBvbWl0dGVkIChhcyBpbiwgY2FsbCBgbG9jYWwoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aCwgMS1pbmRleGVkXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaG91cj0wXSAtIFRoZSBob3VyIG9mIHRoZSBkYXksIGluIDI0LWhvdXIgdGltZVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW21pbnV0ZT0wXSAtIFRoZSBtaW51dGUgb2YgdGhlIGhvdXIsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3NlY29uZD0wXSAtIFRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmQ9MF0gLSBUaGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDk5OVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gbm93XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKHsgem9uZTogXCJBbWVyaWNhL05ld19Zb3JrXCIgfSkgICAgICAvL34+IG5vdywgaW4gVVMgZWFzdCBjb2FzdCB0aW1lXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAxLTAxVDAwOjAwOjAwXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMpICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTAxVDAwOjAwOjAwXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCB7IGxvY2FsZTogXCJmclwiIH0pICAgICAvL34+IDIwMTctMDMtMTJUMDA6MDA6MDAsIHdpdGggYSBGcmVuY2ggbG9jYWxlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1KSAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCB7IHpvbmU6IFwidXRjXCIgfSkgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDAsIGluIFVUQ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwKSAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUpICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMC43NjVcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBsb2NhbCgpIHtcclxuICAgIGNvbnN0IFtvcHRzLCBhcmdzXSA9IGxhc3RPcHRzKGFyZ3VtZW50cyk7XHJcbiAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kXSA9IGFyZ3M7XHJcbiAgICByZXR1cm4gcXVpY2tEVCh7XHJcbiAgICAgIHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCxcclxuICAgIH0sIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIERhdGVUaW1lIGluIFVUQ1xyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGB1dGMoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aFxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW2hvdXI9MF0gLSBUaGUgaG91ciBvZiB0aGUgZGF5LCBpbiAyNC1ob3VyIHRpbWVcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFttaW51dGU9MF0gLSBUaGUgbWludXRlIG9mIHRoZSBob3VyLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtzZWNvbmQ9MF0gLSBUaGUgc2Vjb25kIG9mIHRoZSBtaW51dGUsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kPTBdIC0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA5OTlcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5vdXRwdXRDYWxlbmRhcl0gLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW1dIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAxLTAxVDAwOjAwOjAwWlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBaXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMFpcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwWlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBaXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIHsgbG9jYWxlOiBcImZyXCIgfSkgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwWiB3aXRoIGEgRnJlbmNoIGxvY2FsZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCkgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTBaXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUsIHsgbG9jYWxlOiBcImZyXCIgfSkgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVogd2l0aCBhIEZyZW5jaCBsb2NhbGVcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyB1dGMoKSB7XHJcbiAgICBjb25zdCBbb3B0cywgYXJnc10gPSBsYXN0T3B0cyhhcmd1bWVudHMpO1xyXG4gICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF0gPSBhcmdzO1xyXG5cclxuICAgIG9wdHMuem9uZSA9IEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZTtcclxuICAgIHJldHVybiBxdWlja0RUKHtcclxuICAgICAgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kLFxyXG4gICAgfSwgb3B0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3QuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cclxuICAgICogQHBhcmFtIHtEYXRlfSBkYXRlIC0gYSBKYXZhU2NyaXB0IERhdGUgb2JqZWN0XHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcclxuICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbUpTRGF0ZShkYXRlLCBvcHRpb25zID0ge30pIHtcclxuICAgIGNvbnN0IHRzID0gaXNEYXRlKGRhdGUpID8gZGF0ZS52YWx1ZU9mKCkgOiBOYU47XHJcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHRzKSkge1xyXG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCgnaW52YWxpZCBpbnB1dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHpvbmVUb1VzZSA9IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XHJcbiAgICBpZiAoIXpvbmVUb1VzZS5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcclxuICAgICAgdHMsXHJcbiAgICAgIHpvbmU6IHpvbmVUb1VzZSxcclxuICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCAobWVhbmluZyBzaW5jZSAxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZHMgLSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgMTk3MCBVVENcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZV0gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tTWlsbGlzKG1pbGxpc2Vjb25kcywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBpZiAoIWlzTnVtYmVyKG1pbGxpc2Vjb25kcykpIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxyXG4gICAgICAgIGBmcm9tTWlsbGlzIHJlcXVpcmVzIGEgbnVtZXJpY2FsIGlucHV0LCBidXQgcmVjZWl2ZWQgYSAke3R5cGVvZiBtaWxsaXNlY29uZHN9IHdpdGggdmFsdWUgJHttaWxsaXNlY29uZHN9YCxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAobWlsbGlzZWNvbmRzIDwgLU1BWF9EQVRFIHx8IG1pbGxpc2Vjb25kcyA+IE1BWF9EQVRFKSB7XHJcbiAgICAgIC8vIHRoaXMgaXNuJ3QgcGVyZmVjdCBiZWNhdXNlIGJlY2F1c2Ugd2UgY2FuIHN0aWxsIGVuZCB1cCBvdXQgb2YgcmFuZ2UgYmVjYXVzZSBvZiBhZGRpdGlvbmFsIHNoaWZ0aW5nLCBidXQgaXQncyBhIHN0YXJ0XHJcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKCdUaW1lc3RhbXAgb3V0IG9mIHJhbmdlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcclxuICAgICAgICB0czogbWlsbGlzZWNvbmRzLFxyXG4gICAgICAgIHpvbmU6IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksXHJcbiAgICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCAobWVhbmluZyBzaW5jZSAxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIC0gYSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSAxOTcwIFVUQ1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21TZWNvbmRzKHNlY29uZHMsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgaWYgKCFpc051bWJlcihzZWNvbmRzKSkge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoJ2Zyb21TZWNvbmRzIHJlcXVpcmVzIGEgbnVtZXJpY2FsIGlucHV0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcclxuICAgICAgICB0czogc2Vjb25kcyAqIDEwMDAsXHJcbiAgICAgICAgem9uZTogbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcclxuICAgICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXInIGFuZCAnaG91cicgd2l0aCByZWFzb25hYmxlIGRlZmF1bHRzLlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBjcmVhdGUgdGhlIERhdGVUaW1lIGZyb21cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai55ZWFyIC0gYSB5ZWFyLCBzdWNoIGFzIDE5ODdcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5tb250aCAtIGEgbW9udGgsIDEtMTJcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5kYXkgLSBhIGRheSBvZiB0aGUgbW9udGgsIDEtMzEsIGRlcGVuZGluZyBvbiB0aGUgbW9udGhcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5vcmRpbmFsIC0gZGF5IG9mIHRoZSB5ZWFyLCAxLTM2NSBvciAzNjZcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrWWVhciAtIGFuIElTTyB3ZWVrIHllYXJcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrTnVtYmVyIC0gYW4gSVNPIHdlZWsgbnVtYmVyLCBiZXR3ZWVuIDEgYW5kIDUyIG9yIDUzLCBkZXBlbmRpbmcgb24gdGhlIHllYXJcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrZGF5IC0gYW4gSVNPIHdlZWtkYXksIDEtNywgd2hlcmUgMSBpcyBNb25kYXkgYW5kIDcgaXMgU3VuZGF5XHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91ciAtIGhvdXIgb2YgdGhlIGRheSwgMC0yM1xyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbnV0ZSAtIG1pbnV0ZSBvZiB0aGUgaG91ciwgMC01OVxyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnNlY29uZCAtIHNlY29uZCBvZiB0aGUgbWludXRlLCAwLTU5XHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWlsbGlzZWNvbmQgLSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCAwLTk5OVxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIGNyZWF0aW5nIHRoaXMgRGF0ZVRpbWVcclxuICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGludGVycHJldCB0aGUgbnVtYmVycyBpbiB0aGUgY29udGV4dCBvZiBhIHBhcnRpY3VsYXIgem9uZS4gQ2FuIHRha2UgYW55IHZhbHVlIHRha2VuIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBzZXRab25lKClcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHllYXI6IDE5ODIsIG1vbnRoOiA1LCBkYXk6IDI1fSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wNS0yNSdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHllYXI6IDE5ODIgfSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wMS0wMSdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSkgLy9+PiB0b2RheSBhdCAxMDoyNjowNlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9LCB7IHpvbmU6ICd1dGMnIH0pLFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9LCB7IHpvbmU6ICdsb2NhbCcgfSlcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSwgeyB6b25lOiAnQW1lcmljYS9OZXdfWW9yaycgfSlcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHdlZWtZZWFyOiAyMDE2LCB3ZWVrTnVtYmVyOiAyLCB3ZWVrZGF5OiAzIH0pLnRvSVNPRGF0ZSgpIC8vPT4gJzIwMTYtMDEtMTMnXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbU9iamVjdChvYmosIG9wdHMgPSB7fSkge1xyXG4gICAgb2JqID0gb2JqIHx8IHt9O1xyXG4gICAgY29uc3Qgem9uZVRvVXNlID0gbm9ybWFsaXplWm9uZShvcHRzLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcclxuICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmVUb1VzZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRzTm93ID0gU2V0dGluZ3Mubm93KCk7XHJcbiAgICBjb25zdCBvZmZzZXRQcm92aXMgPSAhaXNVbmRlZmluZWQob3B0cy5zcGVjaWZpY09mZnNldClcclxuICAgICAgPyBvcHRzLnNwZWNpZmljT2Zmc2V0XHJcbiAgICAgIDogem9uZVRvVXNlLm9mZnNldCh0c05vdyk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplVW5pdCk7XHJcbiAgICBjb25zdCBjb250YWluc09yZGluYWwgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKTtcclxuICAgIGNvbnN0IGNvbnRhaW5zR3JlZ29yWWVhciA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLnllYXIpO1xyXG4gICAgY29uc3QgY29udGFpbnNHcmVnb3JNRCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm1vbnRoKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpO1xyXG4gICAgY29uc3QgY29udGFpbnNHcmVnb3IgPSBjb250YWluc0dyZWdvclllYXIgfHwgY29udGFpbnNHcmVnb3JNRDtcclxuICAgIGNvbnN0IGRlZmluaXRlV2Vla0RlZiA9IG5vcm1hbGl6ZWQud2Vla1llYXIgfHwgbm9ybWFsaXplZC53ZWVrTnVtYmVyO1xyXG4gICAgY29uc3QgbG9jID0gTG9jYWxlLmZyb21PYmplY3Qob3B0cyk7XHJcblxyXG4gICAgLy8gY2FzZXM6XHJcbiAgICAvLyBqdXN0IGEgd2Vla2RheSAtPiB0aGlzIHdlZWsncyBpbnN0YW5jZSBvZiB0aGF0IHdlZWtkYXksIG5vIHdvcnJpZXNcclxuICAgIC8vIChncmVnb3JpYW4gZGF0YSBvciBvcmRpbmFsKSArICh3ZWVrWWVhciBvciB3ZWVrTnVtYmVyKSAtPiBlcnJvclxyXG4gICAgLy8gKGdyZWdvcmlhbiBtb250aCBvciBkYXkpICsgb3JkaW5hbCAtPiBlcnJvclxyXG4gICAgLy8gb3RoZXJ3aXNlIGp1c3QgdXNlIHdlZWtzIG9yIG9yZGluYWxzIG9yIGdyZWdvcmlhbiwgZGVwZW5kaW5nIG9uIHdoYXQncyBzcGVjaWZpZWRcclxuXHJcbiAgICBpZiAoKGNvbnRhaW5zR3JlZ29yIHx8IGNvbnRhaW5zT3JkaW5hbCkgJiYgZGVmaW5pdGVXZWVrRGVmKSB7XHJcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcclxuICAgICAgICBcIkNhbid0IG1peCB3ZWVrWWVhci93ZWVrTnVtYmVyIHVuaXRzIHdpdGggeWVhci9tb250aC9kYXkgb3Igb3JkaW5hbHNcIixcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udGFpbnNHcmVnb3JNRCAmJiBjb250YWluc09yZGluYWwpIHtcclxuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IG9yZGluYWwgZGF0ZXMgd2l0aCBtb250aC9kYXlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlV2Vla0RhdGEgPSBkZWZpbml0ZVdlZWtEZWYgfHwgKG5vcm1hbGl6ZWQud2Vla2RheSAmJiAhY29udGFpbnNHcmVnb3IpO1xyXG5cclxuICAgIC8vIGNvbmZpZ3VyZSBvdXJzZWx2ZXMgdG8gZGVhbCB3aXRoIGdyZWdvcmlhbiBkYXRlcyBvciB3ZWVrIHN0dWZmXHJcbiAgICBsZXQgdW5pdHM7XHJcbiAgICBsZXQgZGVmYXVsdFZhbHVlcztcclxuICAgIGxldCBvYmpOb3cgPSB0c1RvT2JqKHRzTm93LCBvZmZzZXRQcm92aXMpO1xyXG4gICAgaWYgKHVzZVdlZWtEYXRhKSB7XHJcbiAgICAgIHVuaXRzID0gb3JkZXJlZFdlZWtVbml0cztcclxuICAgICAgZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRXZWVrVW5pdFZhbHVlcztcclxuICAgICAgb2JqTm93ID0gZ3JlZ29yaWFuVG9XZWVrKG9iak5vdyk7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5zT3JkaW5hbCkge1xyXG4gICAgICB1bml0cyA9IG9yZGVyZWRPcmRpbmFsVW5pdHM7XHJcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXM7XHJcbiAgICAgIG9iak5vdyA9IGdyZWdvcmlhblRvT3JkaW5hbChvYmpOb3cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdW5pdHMgPSBvcmRlcmVkVW5pdHM7XHJcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0VW5pdFZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXMgZm9yIG1pc3Npbmcgc3R1ZmZcclxuICAgIGxldCBmb3VuZEZpcnN0ID0gZmFsc2U7XHJcbiAgICBmb3IgKGNvbnN0IHUgb2YgdW5pdHMpIHtcclxuICAgICAgY29uc3QgdiA9IG5vcm1hbGl6ZWRbdV07XHJcbiAgICAgIGlmICghaXNVbmRlZmluZWQodikpIHtcclxuICAgICAgICBmb3VuZEZpcnN0ID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChmb3VuZEZpcnN0KSB7XHJcbiAgICAgICAgbm9ybWFsaXplZFt1XSA9IGRlZmF1bHRWYWx1ZXNbdV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9ybWFsaXplZFt1XSA9IG9iak5vd1t1XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1ha2Ugc3VyZSB0aGUgdmFsdWVzIHdlIGhhdmUgYXJlIGluIHJhbmdlXHJcbiAgICBjb25zdCBoaWdoZXJPcmRlckludmFsaWQgPSB1c2VXZWVrRGF0YVxyXG4gICAgICA/IGhhc0ludmFsaWRXZWVrRGF0YShub3JtYWxpemVkKVxyXG4gICAgICA6IGNvbnRhaW5zT3JkaW5hbFxyXG4gICAgICAgID8gaGFzSW52YWxpZE9yZGluYWxEYXRhKG5vcm1hbGl6ZWQpXHJcbiAgICAgICAgOiBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShub3JtYWxpemVkKTtcclxuICAgIGNvbnN0IGludmFsaWQgPSBoaWdoZXJPcmRlckludmFsaWQgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG5vcm1hbGl6ZWQpO1xyXG5cclxuICAgIGlmIChpbnZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbXB1dGUgdGhlIGFjdHVhbCB0aW1lXHJcbiAgICBjb25zdCBncmVnb3JpYW4gPSB1c2VXZWVrRGF0YVxyXG4gICAgICA/IHdlZWtUb0dyZWdvcmlhbihub3JtYWxpemVkKVxyXG4gICAgICA6IGNvbnRhaW5zT3JkaW5hbFxyXG4gICAgICAgID8gb3JkaW5hbFRvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpXHJcbiAgICAgICAgOiBub3JtYWxpemVkO1xyXG4gICAgY29uc3QgW3RzRmluYWwsIG9mZnNldEZpbmFsXSA9IG9ialRvVFMoZ3JlZ29yaWFuLCBvZmZzZXRQcm92aXMsIHpvbmVUb1VzZSk7XHJcbiAgICBjb25zdCBpbnN0ID0gbmV3IERhdGVUaW1lKHtcclxuICAgICAgdHM6IHRzRmluYWwsXHJcbiAgICAgIHpvbmU6IHpvbmVUb1VzZSxcclxuICAgICAgbzogb2Zmc2V0RmluYWwsXHJcbiAgICAgIGxvYyxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGdyZWdvcmlhbiBkYXRhICsgd2Vla2RheSBzZXJ2ZXMgb25seSB0byB2YWxpZGF0ZVxyXG4gICAgaWYgKG5vcm1hbGl6ZWQud2Vla2RheSAmJiBjb250YWluc0dyZWdvciAmJiBvYmoud2Vla2RheSAhPT0gaW5zdC53ZWVrZGF5KSB7XHJcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFxyXG4gICAgICAgICdtaXNtYXRjaGVkIHdlZWtkYXknLFxyXG4gICAgICAgIGB5b3UgY2FuJ3Qgc3BlY2lmeSBib3RoIGEgd2Vla2RheSBvZiAke25vcm1hbGl6ZWQud2Vla2RheX0gYW5kIGEgZGF0ZSBvZiAke2luc3QudG9JU08oKX1gLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnN0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gSVNPIDg2MDEgc3RyaW5nXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIElTTyBzdHJpbmdcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cclxuICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyXSAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbV0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMycpXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzKzA2OjAwJylcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMrMDY6MDAnLCB7c2V0Wm9uZTogdHJ1ZX0pXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzJywge3pvbmU6ICd1dGMnfSlcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi1XMDUtNCcpXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbUlTTyh0ZXh0LCBvcHRzID0ge30pIHtcclxuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlSVNPRGF0ZSh0ZXh0KTtcclxuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsICdJU08gODYwMScsIHRleHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gUkZDIDI4MjIgc3RyaW5nXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIFJGQyAyODIyIHN0cmluZ1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmUuIFNpbmNlIHRoZSBvZmZzZXQgaXMgYWx3YXlzIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgdGhpcyBoYXMgbm8gZWZmZWN0IG9uIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzdHJpbmcsIG1lcmVseSB0aGUgem9uZSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGlzIGV4cHJlc3NlZCBpbi5cclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJzI1IE5vdiAyMDE2IDEzOjIzOjEyIEdNVCcpXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCdGcmksIDI1IE5vdiAyMDE2IDEzOjIzOjEyICswNjAwJylcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJzI1IE5vdiAyMDE2IDEzOjIzIFonKVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21SRkMyODIyKHRleHQsIG9wdHMgPSB7fSkge1xyXG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmVdID0gcGFyc2VSRkMyODIyRGF0ZSh0ZXh0KTtcclxuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsICdSRkMgMjgyMicsIHRleHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gSFRUUCBoZWFkZXIgZGF0ZVxyXG4gICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBIVFRQIGhlYWRlciBkYXRlXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZS4gU2luY2UgSFRUUCBkYXRlcyBhcmUgYWx3YXlzIGluIFVUQywgdGhpcyBoYXMgbm8gZWZmZWN0IG9uIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzdHJpbmcsIG1lcmVseSB0aGUgem9uZSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGlzIGV4cHJlc3NlZCBpbi5cclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggdGhlIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nLiBGb3IgSFRUUCBkYXRlcywgdGhpcyBpcyBhbHdheXMgVVRDLCBzbyB0aGlzIG9wdGlvbiBpcyBlcXVpdmFsZW50IHRvIHNldHRpbmcgdGhlIGB6b25lYCBvcHRpb24gdG8gJ3V0YycsIGJ1dCB0aGlzIG9wdGlvbiBpcyBpbmNsdWRlZCBmb3IgY29uc2lzdGVuY3kgd2l0aCBzaW1pbGFyIG1ldGhvZHMuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW4sIDA2IE5vdiAxOTk0IDA4OjQ5OjM3IEdNVCcpXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW5kYXksIDA2LU5vdi05NCAwODo0OTozNyBHTVQnKVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuIE5vdiAgNiAwODo0OTozNyAxOTk0JylcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tSFRUUCh0ZXh0LCBvcHRzID0ge30pIHtcclxuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlSFRUUERhdGUodGV4dCk7XHJcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCAnSFRUUCcsIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gaW5wdXQgc3RyaW5nIGFuZCBmb3JtYXQgc3RyaW5nLlxyXG4gICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuIEZvciBhIHRhYmxlIG9mIHRva2VucyBhbmQgdGhlaXIgaW50ZXJwcmV0YXRpb25zLCBzZWUgW2hlcmVdKGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi8jL3BhcnNpbmc/aWQ9dGFibGUtb2YtdG9rZW5zKS5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHRoZSBzdHJpbmcgaXMgZXhwZWN0ZWQgdG8gYmUgaW4gKHNlZSB0aGUgbGluayBiZWxvdyBmb3IgdGhlIGZvcm1hdHMpXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byB0aGlzIHpvbmVcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gYSBsb2NhbGUgc3RyaW5nIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIERhdGVUaW1lIHRvIHRoaXMgbG9jYWxlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIHJlc3VsdGluZyBEYXRlVGltZSB0byB0aGlzIG51bWJlcmluZyBzeXN0ZW1cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbUZvcm1hdCh0ZXh0LCBmbXQsIG9wdHMgPSB7fSkge1xyXG4gICAgaWYgKGlzVW5kZWZpbmVkKHRleHQpIHx8IGlzVW5kZWZpbmVkKGZtdCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCdmcm9tRm9ybWF0IHJlcXVpcmVzIGFuIGlucHV0IHN0cmluZyBhbmQgYSBmb3JtYXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwgfSA9IG9wdHM7XHJcbiAgICBjb25zdCBsb2NhbGVUb1VzZSA9IExvY2FsZS5mcm9tT3B0cyh7XHJcbiAgICAgIGxvY2FsZSxcclxuICAgICAgbnVtYmVyaW5nU3lzdGVtLFxyXG4gICAgICBkZWZhdWx0VG9FTjogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmUsIHNwZWNpZmljT2Zmc2V0LCBpbnZhbGlkXSA9IHBhcnNlRnJvbVRva2Vucyhsb2NhbGVUb1VzZSwgdGV4dCwgZm10KTtcclxuICAgIGlmIChpbnZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgYGZvcm1hdCAke2ZtdH1gLCB0ZXh0LCBzcGVjaWZpY09mZnNldCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQGRlcHJlY2F0ZWQgdXNlIGZyb21Gb3JtYXQgaW5zdGVhZFxyXG4gICAgKi9cclxuICBzdGF0aWMgZnJvbVN0cmluZyh0ZXh0LCBmbXQsIG9wdHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXQodGV4dCwgZm10LCBvcHRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgU1FMIGRhdGUsIHRpbWUsIG9yIGRhdGV0aW1lXHJcbiAgICAqIERlZmF1bHRzIHRvIGVuLVVTIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHN5c3RlbSdzIGxvY2FsZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cclxuICAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIHRoaXMgem9uZVxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSBhIGxvY2FsZSBzdHJpbmcgdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyBsb2NhbGVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIHRvIHRoaXMgbnVtYmVyaW5nIHN5c3RlbVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNScpXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQnKVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MicpXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyKzA2OjAwJylcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIgQW1lcmljYS9Mb3NfQW5nZWxlcycpXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyIEFtZXJpY2EvTG9zX0FuZ2VsZXMnLCB7IHNldFpvbmU6IHRydWUgfSlcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDInLCB7IHpvbmU6ICdBbWVyaWNhL0xvc19BbmdlbGVzJyB9KVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcwOToxMjozNC4zNDInKVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21TUUwodGV4dCwgb3B0cyA9IHt9KSB7XHJcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZVNRTCh0ZXh0KTtcclxuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsICdTUUwnLCB0ZXh0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBDcmVhdGUgYW4gaW52YWxpZCBEYXRlVGltZS5cclxuICAgICogQHBhcmFtIHtEYXRlVGltZX0gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24gPSBudWxsKSB7XHJcbiAgICBpZiAoIXJlYXNvbikge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoJ25lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRGF0ZVRpbWUgaXMgaW52YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XHJcblxyXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkRGF0ZVRpbWVFcnJvcihpbnZhbGlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoeyBpbnZhbGlkIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlVGltZS4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xyXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb1xyXG4gICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgKi9cclxuICBzdGF0aWMgaXNEYXRlVGltZShvKSB7XHJcbiAgICByZXR1cm4gKG8gJiYgby5pc0x1eG9uRGF0ZVRpbWUpIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFByb2R1Y2UgdGhlIGZvcm1hdCBzdHJpbmcgZm9yIGEgc2V0IG9mIG9wdGlvbnNcclxuICAgICogQHBhcmFtIGZvcm1hdE9wdHNcclxuICAgICogQHBhcmFtIGxvY2FsZU9wdHNcclxuICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICovXHJcbiAgc3RhdGljIHBhcnNlRm9ybWF0Rm9yT3B0cyhmb3JtYXRPcHRzLCBsb2NhbGVPcHRzID0ge30pIHtcclxuICAgIGNvbnN0IHRva2VuTGlzdCA9IGZvcm1hdE9wdHNUb1Rva2Vucyhmb3JtYXRPcHRzLCBMb2NhbGUuZnJvbU9iamVjdChsb2NhbGVPcHRzKSk7XHJcbiAgICByZXR1cm4gIXRva2VuTGlzdCA/IG51bGwgOiB0b2tlbkxpc3QubWFwKCh0KSA9PiAodCA/IHQudmFsIDogbnVsbCkpLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgLy8gSU5GT1xyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSB2YWx1ZSBvZiB1bml0LlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGUnIG9yICdkYXknXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDcsIDQpLmdldCgnbW9udGgnKTsgLy89PiA3XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDcsIDQpLmdldCgnZGF5Jyk7IC8vPT4gNFxyXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCh1bml0KSB7XHJcbiAgICByZXR1cm4gdGhpc1t1bml0XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIERhdGVUaW1lIGlzIHZhbGlkLiBJbnZhbGlkIERhdGVUaW1lcyBvY2N1ciB3aGVuOlxyXG4gICAgKiAqIFRoZSBEYXRlVGltZSB3YXMgY3JlYXRlZCBmcm9tIGludmFsaWQgY2FsZW5kYXIgaW5mb3JtYXRpb24sIHN1Y2ggYXMgdGhlIDEzdGggbW9udGggb3IgRmVicnVhcnkgMzBcclxuICAgICogKiBUaGUgRGF0ZVRpbWUgd2FzIGNyZWF0ZWQgYnkgYW4gb3BlcmF0aW9uIG9uIGFub3RoZXIgaW52YWxpZCBkYXRlXHJcbiAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgKi9cclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmludmFsaWQgPT09IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgRGF0ZVRpbWUgaXMgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRGF0ZVRpbWUgaXMgdmFsaWRcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IGludmFsaWRSZWFzb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBEYXRlVGltZSBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRGF0ZVRpbWUgaXMgdmFsaWRcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IGludmFsaWRFeHBsYW5hdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgbG9jYWxlIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2VuLUdCJy4gVGhlIGxvY2FsZSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcclxuICAgICpcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IGxvY2FsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgbnVtYmVyaW5nIHN5c3RlbSBvZiBhIERhdGVUaW1lLCBzdWNoICdiZW5nJy4gVGhlIG51bWJlcmluZyBzeXN0ZW0gaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXHJcbiAgICAqXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBudW1iZXJpbmdTeXN0ZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIG91dHB1dCBjYWxlbmRhciBvZiBhIERhdGVUaW1lLCBzdWNoICdpc2xhbWljJy4gVGhlIG91dHB1dCBjYWxlbmRhciBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcclxuICAgICpcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IG91dHB1dENhbGVuZGFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm91dHB1dENhbGVuZGFyIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIHRpbWUgem9uZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBEYXRlVGltZS5cclxuICAgICogQHR5cGUge1pvbmV9XHJcbiAgICAqL1xyXG4gIGdldCB6b25lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3pvbmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSB0aW1lIHpvbmUuXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCB6b25lTmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUubmFtZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSB5ZWFyXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS55ZWFyIC8vPT4gMjAxN1xyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgeWVhcigpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMueWVhciA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIHF1YXJ0ZXJcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnF1YXJ0ZXIgLy89PiAyXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBxdWFydGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IE1hdGguY2VpbCh0aGlzLmMubW9udGggLyAzKSA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIG1vbnRoICgxLTEyKS5cclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLm1vbnRoIC8vPT4gNVxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgbW9udGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1vbnRoIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCAoMS0zMGlzaCkuXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5kYXkgLy89PiAyNVxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgZGF5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5kYXkgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBob3VyIG9mIHRoZSBkYXkgKDAtMjMpLlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSkuaG91ciAvLz0+IDlcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IGhvdXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmhvdXIgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBtaW51dGUgb2YgdGhlIGhvdXIgKDAtNTkpLlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzApLm1pbnV0ZSAvLz0+IDMwXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBtaW51dGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1pbnV0ZSA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIHNlY29uZCBvZiB0aGUgbWludXRlICgwLTU5KS5cclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1Mikuc2Vjb25kIC8vPT4gNTJcclxuICAgICogQHR5cGUge251bWJlcn1cclxuICAgICovXHJcbiAgZ2V0IHNlY29uZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuc2Vjb25kIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCAoMC05OTkpLlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzAsIDUyLCA2NTQpLm1pbGxpc2Vjb25kIC8vPT4gNjU0XHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBtaWxsaXNlY29uZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubWlsbGlzZWNvbmQgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSB3ZWVrIHllYXJcclxuICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDEyLCAzMSkud2Vla1llYXIgLy89PiAyMDE1XHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCB3ZWVrWWVhcigpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtZZWFyIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgd2VlayBudW1iZXIgb2YgdGhlIHdlZWsgeWVhciAoMS01MmlzaCkuXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkud2Vla051bWJlciAvLz0+IDIxXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCB3ZWVrTnVtYmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla051bWJlciA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgd2Vlay5cclxuICAgICogMSBpcyBNb25kYXkgYW5kIDcgaXMgU3VuZGF5XHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMSwgMzEpLndlZWtkYXkgLy89PiA0XHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCB3ZWVrZGF5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla2RheSA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIG9yZGluYWwgKG1lYW5pbmcgdGhlIGRheSBvZiB0aGUgeWVhcilcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLm9yZGluYWwgLy89PiAxNDVcclxuICAgICogQHR5cGUge251bWJlcnxEYXRlVGltZX1cclxuICAgICovXHJcbiAgZ2V0IG9yZGluYWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYykub3JkaW5hbCA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdCcuXHJcbiAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLm1vbnRoU2hvcnQgLy89PiBPY3RcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IG1vbnRoU2hvcnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoJ3Nob3J0JywgeyBsb2NPYmo6IHRoaXMubG9jIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBsb25nIG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdG9iZXInLlxyXG4gICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS5tb250aExvbmcgLy89PiBPY3RvYmVyXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBtb250aExvbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoJ2xvbmcnLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IHdlZWtkYXksIHN1Y2ggYXMgJ01vbicuXHJcbiAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlTaG9ydCAvLz0+IE1vblxyXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgKi9cclxuICBnZXQgd2Vla2RheVNob3J0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NPYmo6IHRoaXMubG9jIH0pW3RoaXMud2Vla2RheSAtIDFdIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIGxvbmcgd2Vla2RheSwgc3VjaCBhcyAnTW9uZGF5Jy5cclxuICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkud2Vla2RheUxvbmcgLy89PiBNb25kYXlcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICovXHJcbiAgZ2V0IHdlZWtkYXlMb25nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoJ2xvbmcnLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB0aGUgVVRDIG9mZnNldCBvZiB0aGlzIERhdGVUaW1lIGluIG1pbnV0ZXNcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkub2Zmc2V0IC8vPT4gLTI0MFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5vZmZzZXQgLy89PiAwXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBvZmZzZXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gK3RoaXMubyA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgdGhlIHNob3J0IGh1bWFuIG5hbWUgZm9yIHRoZSB6b25lJ3MgY3VycmVudCBvZmZzZXQsIGZvciBleGFtcGxlIFwiRVNUXCIgb3IgXCJFRFRcIi5cclxuICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBvZmZzZXROYW1lU2hvcnQoKSB7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnpvbmUub2Zmc2V0TmFtZSh0aGlzLnRzLCB7XHJcbiAgICAgICAgZm9ybWF0OiAnc2hvcnQnLFxyXG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogR2V0IHRoZSBsb25nIGh1bWFuIG5hbWUgZm9yIHRoZSB6b25lJ3MgY3VycmVudCBvZmZzZXQsIGZvciBleGFtcGxlIFwiRWFzdGVybiBTdGFuZGFyZCBUaW1lXCIgb3IgXCJFYXN0ZXJuIERheWxpZ2h0IFRpbWVcIi5cclxuICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXHJcbiAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIGdldCBvZmZzZXROYW1lTG9uZygpIHtcclxuICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcclxuICAgICAgICBmb3JtYXQ6ICdsb25nJyxcclxuICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEdldCB3aGV0aGVyIHRoaXMgem9uZSdzIG9mZnNldCBldmVyIGNoYW5nZXMsIGFzIGluIGEgRFNULlxyXG4gICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICovXHJcbiAgZ2V0IGlzT2Zmc2V0Rml4ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy56b25lLmlzVW5pdmVyc2FsIDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBHZXQgd2hldGhlciB0aGUgRGF0ZVRpbWUgaXMgaW4gYSBEU1QuXHJcbiAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgKi9cclxuICBnZXQgaXNJbkRTVCgpIHtcclxuICAgIGlmICh0aGlzLmlzT2Zmc2V0Rml4ZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5vZmZzZXQgPiB0aGlzLnNldCh7IG1vbnRoOiAxLCBkYXk6IDEgfSkub2Zmc2V0XHJcbiAgICAgICAgIHx8IHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoeyBtb250aDogNSB9KS5vZmZzZXRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgRGF0ZVRpbWUgaXMgaW4gYSBsZWFwIHllYXIsIGZhbHNlIG90aGVyd2lzZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2KS5pc0luTGVhcFllYXIgLy89PiB0cnVlXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLmlzSW5MZWFwWWVhciAvLz0+IGZhbHNlXHJcbiAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgKi9cclxuICBnZXQgaXNJbkxlYXBZZWFyKCkge1xyXG4gICAgcmV0dXJuIGlzTGVhcFllYXIodGhpcy55ZWFyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGlzIERhdGVUaW1lJ3MgbW9udGhcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMikuZGF5c0luTW9udGggLy89PiAyOVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2LCAzKS5kYXlzSW5Nb250aCAvLz0+IDMxXHJcbiAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAqL1xyXG4gIGdldCBkYXlzSW5Nb250aCgpIHtcclxuICAgIHJldHVybiBkYXlzSW5Nb250aCh0aGlzLnllYXIsIHRoaXMubW9udGgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYpLmRheXNJblllYXIgLy89PiAzNjZcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykuZGF5c0luWWVhciAvLz0+IDM2NVxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgZGF5c0luWWVhcigpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBkYXlzSW5ZZWFyKHRoaXMueWVhcikgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHdlZWtzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDA0KS53ZWVrc0luV2Vla1llYXIgLy89PiA1M1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS53ZWVrc0luV2Vla1llYXIgLy89PiA1MlxyXG4gICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgKi9cclxuICBnZXQgd2Vla3NJbldlZWtZZWFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHdlZWtzSW5XZWVrWWVhcih0aGlzLndlZWtZZWFyKSA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSByZXNvbHZlZCBJbnRsIG9wdGlvbnMgZm9yIHRoaXMgRGF0ZVRpbWUuXHJcbiAgICAqIFRoaXMgaXMgdXNlZnVsIGluIHVuZGVyc3RhbmRpbmcgdGhlIGJlaGF2aW9yIG9mIGZvcm1hdHRpbmcgbWV0aG9kc1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIHRoZSBzYW1lIG9wdGlvbnMgYXMgdG9Mb2NhbGVTdHJpbmdcclxuICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgKi9cclxuICByZXNvbHZlZExvY2FsZU9wdGlvbnMob3B0cyA9IHt9KSB7XHJcbiAgICBjb25zdCB7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBjYWxlbmRhciB9ID0gRm9ybWF0dGVyLmNyZWF0ZShcclxuICAgICAgdGhpcy5sb2MuY2xvbmUob3B0cyksXHJcbiAgICAgIG9wdHMsXHJcbiAgICApLnJlc29sdmVkT3B0aW9ucyh0aGlzKTtcclxuICAgIHJldHVybiB7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcjogY2FsZW5kYXIgfTtcclxuICB9XHJcblxyXG4gIC8vIFRSQU5TRk9STVxyXG5cclxuICAvKipcclxuICAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIFVUQy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxyXG4gICAgKlxyXG4gICAgKiBFcXVpdmFsZW50IHRvIHtAbGluayBEYXRlVGltZSNzZXRab25lfSgndXRjJylcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXQ9MF0gLSBvcHRpb25hbGx5LCBhbiBvZmZzZXQgZnJvbSBVVEMgaW4gbWludXRlc1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dIC0gb3B0aW9ucyB0byBwYXNzIHRvIGBzZXRab25lKClgXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICB0b1VUQyhvZmZzZXQgPSAwLCBvcHRzID0ge30pIHtcclxuICAgIHJldHVybiB0aGlzLnNldFpvbmUoRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKG9mZnNldCksIG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byB0aGUgaG9zdCdzIGxvY2FsIHpvbmUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cclxuICAgICpcclxuICAgICogRXF1aXZhbGVudCB0byBgc2V0Wm9uZSgnbG9jYWwnKWBcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHRvTG9jYWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXRab25lKFNldHRpbmdzLmRlZmF1bHRab25lKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gc3BlY2lmaWVkIHpvbmUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cclxuICAgICpcclxuICAgICogQnkgZGVmYXVsdCwgdGhlIHNldHRlciBrZWVwcyB0aGUgdW5kZXJseWluZyB0aW1lIHRoZSBzYW1lIChhcyBpbiwgdGhlIHNhbWUgdGltZXN0YW1wKSwgYnV0IHRoZSBuZXcgaW5zdGFuY2Ugd2lsbCByZXBvcnQgZGlmZmVyZW50IGxvY2FsIHRpbWVzIGFuZCBjb25zaWRlciBEU1RzIHdoZW4gbWFraW5nIGNvbXB1dGF0aW9ucywgYXMgd2l0aCB7QGxpbmsgRGF0ZVRpbWUjcGx1c30uIFlvdSBtYXkgd2lzaCB0byB1c2Uge0BsaW5rIERhdGVUaW1lI3RvTG9jYWx9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9VVEN9IHdoaWNoIHByb3ZpZGUgc2ltcGxlIGNvbnZlbmllbmNlIHdyYXBwZXJzIGZvciBjb21tb25seSB1c2VkIHpvbmVzLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbem9uZT0nbG9jYWwnXSAtIGEgem9uZSBpZGVudGlmaWVyLiBBcyBhIHN0cmluZywgdGhhdCBjYW4gYmUgYW55IElBTkEgem9uZSBzdXBwb3J0ZWQgYnkgdGhlIGhvc3QgZW52aXJvbm1lbnQsIG9yIGEgZml4ZWQtb2Zmc2V0IG5hbWUgb2YgdGhlIGZvcm0gJ1VUQyszJywgb3IgdGhlIHN0cmluZ3MgJ2xvY2FsJyBvciAndXRjJy4gWW91IG1heSBhbHNvIHN1cHBseSBhbiBpbnN0YW5jZSBvZiBhIHtAbGluayBEYXRlVGltZSNab25lfSBjbGFzcy5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMua2VlcExvY2FsVGltZT1mYWxzZV0gLSBJZiB0cnVlLCBhZGp1c3QgdGhlIHVuZGVybHlpbmcgdGltZSBzbyB0aGF0IHRoZSBsb2NhbCB0aW1lIHN0YXlzIHRoZSBzYW1lLCBidXQgaW4gdGhlIHRhcmdldCB6b25lLiBZb3Ugc2hvdWxkIHJhcmVseSBuZWVkIHRoaXMuXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzZXRab25lKHpvbmUsIHsga2VlcExvY2FsVGltZSA9IGZhbHNlLCBrZWVwQ2FsZW5kYXJUaW1lID0gZmFsc2UgfSA9IHt9KSB7XHJcbiAgICB6b25lID0gbm9ybWFsaXplWm9uZSh6b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XHJcbiAgICBpZiAoem9uZS5lcXVhbHModGhpcy56b25lKSkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0gaWYgKCF6b25lLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmUpKTtcclxuICAgIH1cclxuICAgIGxldCBuZXdUUyA9IHRoaXMudHM7XHJcbiAgICBpZiAoa2VlcExvY2FsVGltZSB8fCBrZWVwQ2FsZW5kYXJUaW1lKSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldEd1ZXNzID0gem9uZS5vZmZzZXQodGhpcy50cyk7XHJcbiAgICAgIGNvbnN0IGFzT2JqID0gdGhpcy50b09iamVjdCgpO1xyXG4gICAgICBbbmV3VFNdID0gb2JqVG9UUyhhc09iaiwgb2Zmc2V0R3Vlc3MsIHpvbmUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdHM6IG5ld1RTLCB6b25lIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFwiU2V0XCIgdGhlIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvciBvdXRwdXRDYWxlbmRhci4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAtIHRoZSBwcm9wZXJ0aWVzIHRvIHNldFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkucmVjb25maWd1cmUoeyBsb2NhbGU6ICdlbi1HQicgfSlcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIHJlY29uZmlndXJlKHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyIH0gPSB7fSkge1xyXG4gICAgY29uc3QgbG9jID0gdGhpcy5sb2MuY2xvbmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIgfSk7XHJcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyBsb2MgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogXCJTZXRcIiB0aGUgbG9jYWxlLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXHJcbiAgICAqIEp1c3QgYSBjb252ZW5pZW50IGFsaWFzIGZvciByZWNvbmZpZ3VyZSh7IGxvY2FsZSB9KVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkuc2V0TG9jYWxlKCdlbi1HQicpXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzZXRMb2NhbGUobG9jYWxlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWNvbmZpZ3VyZSh7IGxvY2FsZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBcIlNldFwiIHRoZSB2YWx1ZXMgb2Ygc3BlY2lmaWVkIHVuaXRzLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXHJcbiAgICAqIFlvdSBjYW4gb25seSBzZXQgdW5pdHMgd2l0aCB0aGlzIG1ldGhvZDsgZm9yIFwic2V0dGluZ1wiIG1ldGFkYXRhLCBzZWUge0BsaW5rIERhdGVUaW1lI3JlY29uZmlndXJlfSBhbmQge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9LlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIC0gYSBtYXBwaW5nIG9mIHVuaXRzIHRvIG51bWJlcnNcclxuICAgICogQGV4YW1wbGUgZHQuc2V0KHsgeWVhcjogMjAxNyB9KVxyXG4gICAgKiBAZXhhbXBsZSBkdC5zZXQoeyBob3VyOiA4LCBtaW51dGU6IDMwIH0pXHJcbiAgICAqIEBleGFtcGxlIGR0LnNldCh7IHdlZWtkYXk6IDUgfSlcclxuICAgICogQGV4YW1wbGUgZHQuc2V0KHsgeWVhcjogMjAwNSwgb3JkaW5hbDogMjM0IH0pXHJcbiAgICAqIEByZXR1cm4ge0RhdGVUaW1lfVxyXG4gICAgKi9cclxuICBzZXQodmFsdWVzKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9iamVjdCh2YWx1ZXMsIG5vcm1hbGl6ZVVuaXQpO1xyXG4gICAgY29uc3Qgc2V0dGluZ1dlZWtTdHVmZiA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtZZWFyKVxyXG4gICAgICAgICB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrTnVtYmVyKVxyXG4gICAgICAgICB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrZGF5KTtcclxuICAgIGNvbnN0IGNvbnRhaW5zT3JkaW5hbCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpO1xyXG4gICAgY29uc3QgY29udGFpbnNHcmVnb3JZZWFyID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQueWVhcik7XHJcbiAgICBjb25zdCBjb250YWluc0dyZWdvck1EID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQubW9udGgpIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSk7XHJcbiAgICBjb25zdCBjb250YWluc0dyZWdvciA9IGNvbnRhaW5zR3JlZ29yWWVhciB8fCBjb250YWluc0dyZWdvck1EO1xyXG4gICAgY29uc3QgZGVmaW5pdGVXZWVrRGVmID0gbm9ybWFsaXplZC53ZWVrWWVhciB8fCBub3JtYWxpemVkLndlZWtOdW1iZXI7XHJcblxyXG4gICAgaWYgKChjb250YWluc0dyZWdvciB8fCBjb250YWluc09yZGluYWwpICYmIGRlZmluaXRlV2Vla0RlZikge1xyXG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXHJcbiAgICAgICAgXCJDYW4ndCBtaXggd2Vla1llYXIvd2Vla051bWJlciB1bml0cyB3aXRoIHllYXIvbW9udGgvZGF5IG9yIG9yZGluYWxzXCIsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRhaW5zR3JlZ29yTUQgJiYgY29udGFpbnNPcmRpbmFsKSB7XHJcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IG1peCBvcmRpbmFsIGRhdGVzIHdpdGggbW9udGgvZGF5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBtaXhlZDtcclxuICAgIGlmIChzZXR0aW5nV2Vla1N0dWZmKSB7XHJcbiAgICAgIG1peGVkID0gd2Vla1RvR3JlZ29yaWFuKHsgLi4uZ3JlZ29yaWFuVG9XZWVrKHRoaXMuYyksIC4uLm5vcm1hbGl6ZWQgfSk7XHJcbiAgICB9IGVsc2UgaWYgKCFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpKSB7XHJcbiAgICAgIG1peGVkID0gb3JkaW5hbFRvR3JlZ29yaWFuKHsgLi4uZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYyksIC4uLm5vcm1hbGl6ZWQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtaXhlZCA9IHsgLi4udGhpcy50b09iamVjdCgpLCAuLi5ub3JtYWxpemVkIH07XHJcblxyXG4gICAgICAvLyBpZiB3ZSBkaWRuJ3Qgc2V0IHRoZSBkYXkgYnV0IHdlIGVuZGVkIHVwIG9uIGFuIG92ZXJmbG93IGRhdGUsXHJcbiAgICAgIC8vIHVzZSB0aGUgbGFzdCBkYXkgb2YgdGhlIHJpZ2h0IG1vbnRoXHJcbiAgICAgIGlmIChpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSkpIHtcclxuICAgICAgICBtaXhlZC5kYXkgPSBNYXRoLm1pbihkYXlzSW5Nb250aChtaXhlZC55ZWFyLCBtaXhlZC5tb250aCksIG1peGVkLmRheSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbdHMsIG9dID0gb2JqVG9UUyhtaXhlZCwgdGhpcy5vLCB0aGlzLnpvbmUpO1xyXG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdHMsIG8gfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQWRkIGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcclxuICAgICpcclxuICAgICogQWRkaW5nIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBvciBtaWxsaXNlY29uZHMgaW5jcmVhc2VzIHRoZSB0aW1lc3RhbXAgYnkgdGhlIHJpZ2h0IG51bWJlciBvZiBtaWxsaXNlY29uZHMuIEFkZGluZyBkYXlzLCBtb250aHMsIG9yIHllYXJzIHNoaWZ0cyB0aGUgY2FsZW5kYXIsIGFjY291bnRpbmcgZm9yIERTVHMgYW5kIGxlYXAgeWVhcnMgYWxvbmcgdGhlIHdheS4gVGh1cywgYGR0LnBsdXMoeyBob3VyczogMjQgfSlgIG1heSByZXN1bHQgaW4gYSBkaWZmZXJlbnQgdGltZSB0aGFuIGBkdC5wbHVzKHsgZGF5czogMSB9KWAgaWYgdGhlcmUncyBhIERTVCBzaGlmdCBpbiBiZXR3ZWVuLlxyXG4gICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBhZGQuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoMTIzKSAvL34+IGluIDEyMyBtaWxsaXNlY29uZHNcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IG1pbnV0ZXM6IDE1IH0pIC8vfj4gaW4gMTUgbWludXRlc1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KSAvL34+IHRoaXMgdGltZSB0b21vcnJvd1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogLTEgfSkgLy9+PiB0aGlzIHRpbWUgeWVzdGVyZGF5XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBob3VyczogMywgbWludXRlczogMTMgfSkgLy9+PiBpbiAzIGhyLCAxMyBtaW5cclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyhEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pKSAvL34+IGluIDMgaHIsIDEzIG1pblxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgcGx1cyhkdXJhdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xyXG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbik7XHJcbiAgICByZXR1cm4gY2xvbmUodGhpcywgYWRqdXN0VGltZSh0aGlzLCBkdXIpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBTdWJ0cmFjdCBhIHBlcmlvZCBvZiB0aW1lIHRvIHRoaXMgRGF0ZVRpbWUgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lXHJcbiAgICAqIFNlZSB7QGxpbmsgRGF0ZVRpbWUjcGx1c31cclxuICAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXHJcbiAgICBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgbWludXMoZHVyYXRpb24pIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcclxuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pLm5lZ2F0ZSgpO1xyXG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIGFkanVzdFRpbWUodGhpcywgZHVyKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogXCJTZXRcIiB0aGlzIERhdGVUaW1lIHRvIHRoZSBiZWdpbm5pbmcgb2YgYSB1bml0IG9mIHRpbWUuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gVGhlIHVuaXQgdG8gZ28gdG8gdGhlIGJlZ2lubmluZyBvZi4gQ2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgb3IgJ21pbGxpc2Vjb25kJy5cclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZignbW9udGgnKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMy0wMSdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZigneWVhcicpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAxLTAxJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCd3ZWVrJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDMtMDMnLCB3ZWVrcyBhbHdheXMgc3RhcnQgb24gTW9uZGF5c1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignZGF5JykudG9JU09UaW1lKCk7IC8vPT4gJzAwOjAwLjAwMC0wNTowMCdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLnN0YXJ0T2YoJ2hvdXInKS50b0lTT1RpbWUoKTsgLy89PiAnMDU6MDA6MDAuMDAwLTA1OjAwJ1xyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cclxuICAgICovXHJcbiAgc3RhcnRPZih1bml0KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XHJcbiAgICBjb25zdCBvID0ge307XHJcbiAgICBjb25zdCBub3JtYWxpemVkVW5pdCA9IER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodW5pdCk7XHJcbiAgICBzd2l0Y2ggKG5vcm1hbGl6ZWRVbml0KSB7XHJcbiAgICAgIGNhc2UgJ3llYXJzJzpcclxuICAgICAgICBvLm1vbnRoID0gMTtcclxuICAgICAgICAvLyBmYWxscyB0aHJvdWdoXHJcbiAgICAgIGNhc2UgJ3F1YXJ0ZXJzJzpcclxuICAgICAgY2FzZSAnbW9udGhzJzpcclxuICAgICAgICBvLmRheSA9IDE7XHJcbiAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxyXG4gICAgICBjYXNlICd3ZWVrcyc6XHJcbiAgICAgIGNhc2UgJ2RheXMnOlxyXG4gICAgICAgIG8uaG91ciA9IDA7XHJcbiAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxyXG4gICAgICBjYXNlICdob3Vycyc6XHJcbiAgICAgICAgby5taW51dGUgPSAwO1xyXG4gICAgICAgIC8vIGZhbGxzIHRocm91Z2hcclxuICAgICAgY2FzZSAnbWludXRlcyc6XHJcbiAgICAgICAgby5zZWNvbmQgPSAwO1xyXG4gICAgICAgIC8vIGZhbGxzIHRocm91Z2hcclxuICAgICAgY2FzZSAnc2Vjb25kcyc6XHJcbiAgICAgICAgby5taWxsaXNlY29uZCA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAvLyBubyBkZWZhdWx0LCBpbnZhbGlkIHVuaXRzIHRocm93IGluIG5vcm1hbGl6ZVVuaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChub3JtYWxpemVkVW5pdCA9PT0gJ3dlZWtzJykge1xyXG4gICAgICBvLndlZWtkYXkgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChub3JtYWxpemVkVW5pdCA9PT0gJ3F1YXJ0ZXJzJykge1xyXG4gICAgICBjb25zdCBxID0gTWF0aC5jZWlsKHRoaXMubW9udGggLyAzKTtcclxuICAgICAgby5tb250aCA9IChxIC0gMSkgKiAzICsgMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5zZXQobyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogXCJTZXRcIiB0aGlzIERhdGVUaW1lIHRvIHRoZSBlbmQgKG1lYW5pbmcgdGhlIGxhc3QgbWlsbGlzZWNvbmQpIG9mIGEgdW5pdCBvZiB0aW1lXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gVGhlIHVuaXQgdG8gZ28gdG8gdGhlIGVuZCBvZi4gQ2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgb3IgJ21pbGxpc2Vjb25kJy5cclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ21vbnRoJykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0zMVQyMzo1OTo1OS45OTktMDU6MDAnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCd5ZWFyJykudG9JU08oKTsgLy89PiAnMjAxNC0xMi0zMVQyMzo1OTo1OS45OTktMDU6MDAnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCd3ZWVrJykudG9JU08oKTsgLy8gPT4gJzIwMTQtMDMtMDlUMjM6NTk6NTkuOTk5LTA1OjAwJywgd2Vla3Mgc3RhcnQgb24gTW9uZGF5c1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuZW5kT2YoJ2RheScpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMjM6NTk6NTkuOTk5LTA1OjAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuZW5kT2YoJ2hvdXInKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTAzVDA1OjU5OjU5Ljk5OS0wNTowMCdcclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9XHJcbiAgICAqL1xyXG4gIGVuZE9mKHVuaXQpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcclxuICAgICAgPyB0aGlzLnBsdXMoeyBbdW5pdF06IDEgfSlcclxuICAgICAgICAuc3RhcnRPZih1bml0KVxyXG4gICAgICAgIC5taW51cygxKVxyXG4gICAgICA6IHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBPVVRQVVRcclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy5cclxuICAgICogKipZb3UgbWF5IG5vdCB3YW50IHRoaXMuKiogU2VlIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9yIGEgbW9yZSBmbGV4aWJsZSBmb3JtYXR0aW5nIHRvb2wuIEZvciBhIHRhYmxlIG9mIHRva2VucyBhbmQgdGhlaXIgaW50ZXJwcmV0YXRpb25zLCBzZWUgW2hlcmVdKGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi8jL2Zvcm1hdHRpbmc/aWQ9dGFibGUtb2YtdG9rZW5zKS5cclxuICAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCBzdHJpbmdcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRzIHRvIG92ZXJyaWRlIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgb24gdGhpcyBEYXRlVGltZVxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnKSAvLz0+ICcyMDE3IEFwciAyMidcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKCdmcicpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgYXZyLiAyMidcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJywgeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+ICcyMDE3IGF2ci4gMjInXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KFwiSEggJ2hvdXJzIGFuZCcgbW0gJ21pbnV0ZXMnXCIpIC8vPT4gJzIwIGhvdXJzIGFuZCA1NSBtaW51dGVzJ1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvRm9ybWF0KGZtdCwgb3B0cyA9IHt9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXHJcbiAgICAgID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5yZWRlZmF1bHRUb0VOKG9wdHMpKS5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcodGhpcywgZm10KVxyXG4gICAgICA6IElOVkFMSUQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIGxvY2FsaXplZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoaXMgZGF0ZS4gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHRoZSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIGFuZCBhbnkgcHJlc2V0cyBkZWZpbmVkIGJ5IEx1eG9uLCBzdWNoIGFzIGBEYXRlVGltZS5EQVRFX0ZVTExgIG9yIGBEYXRlVGltZS5USU1FX1NJTVBMRWAuXHJcbiAgICAqIFRoZSBleGFjdCBiZWhhdmlvciBvZiB0aGlzIG1ldGhvZCBpcyBicm93c2VyLXNwZWNpZmljLCBidXQgaW4gZ2VuZXJhbCBpdCB3aWxsIHJldHVybiBhbiBhcHByb3ByaWF0ZSByZXByZXNlbnRhdGlvblxyXG4gICAgKiBvZiB0aGUgRGF0ZVRpbWUgaW4gdGhlIGFzc2lnbmVkIGxvY2FsZS5cclxuICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcclxuICAgICogQHBhcmFtIGZvcm1hdE9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMgYW5kIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvbiB0aGlzIERhdGVUaW1lXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gNC8yMC8yMDE3XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZSgnZW4tZ2InKS50b0xvY2FsZVN0cmluZygpOyAvLz0+ICcyMC8wNC8yMDE3J1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IGxvY2FsZTogJ2VuLWdiJyB9KTsgLy89PiAnMjAvMDQvMjAxNydcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURV9GVUxMKTsgLy89PiAnQXByaWwgMjAsIDIwMTcnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLlRJTUVfU0lNUExFKTsgLy89PiAnMTE6MzIgQU0nXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVUSU1FX1NIT1JUKTsgLy89PiAnNC8yMC8yMDE3LCAxMTozMiBBTSdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnbG9uZycsIG1vbnRoOiAnbG9uZycsIGRheTogJzItZGlnaXQnIH0pOyAvLz0+ICdUaHVyc2RheSwgQXByaWwgMjAnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgd2Vla2RheTogJ3Nob3J0JywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pOyAvLz0+ICdUaHUsIEFwciAyMCwgMTE6MjcgQU0nXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JywgaG91ckN5Y2xlOiAnaDIzJyB9KTsgLy89PiAnMTE6MzInXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9Mb2NhbGVTdHJpbmcoZm9ybWF0T3B0cyA9IERBVEVfU0hPUlQsIG9wdHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxyXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MuY2xvbmUob3B0cyksIGZvcm1hdE9wdHMpLmZvcm1hdERhdGVUaW1lKHRoaXMpXHJcbiAgICAgIDogSU5WQUxJRDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGZvcm1hdCBcInBhcnRzXCIsIG1lYW5pbmcgaW5kaXZpZHVhbCB0b2tlbnMgYWxvbmcgd2l0aCBtZXRhZGF0YS4gVGhpcyBpcyBhbGxvd3MgY2FsbGVycyB0byBwb3N0LXByb2Nlc3MgaW5kaXZpZHVhbCBzZWN0aW9ucyBvZiB0aGUgZm9ybWF0dGVkIG91dHB1dC5cclxuICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXQvZm9ybWF0VG9QYXJ0c1xyXG4gICAgKiBAcGFyYW0gb3B0cyB7T2JqZWN0fSAtIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3Igb3B0aW9ucywgc2FtZSBhcyBgdG9Mb2NhbGVTdHJpbmdgLlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVBhcnRzKCk7IC8vPT4gW1xyXG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2RheScsIHZhbHVlOiAnMjUnIH0sXHJcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcclxuICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdtb250aCcsIHZhbHVlOiAnMDUnIH0sXHJcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcclxuICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICd5ZWFyJywgdmFsdWU6ICcxOTgyJyB9XHJcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+IF1cclxuICAgICovXHJcbiAgdG9Mb2NhbGVQYXJ0cyhvcHRzID0ge30pIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcclxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBvcHRzKS5mb3JtYXREYXRlVGltZVBhcnRzKHRoaXMpXHJcbiAgICAgIDogW107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWVcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZXh0ZW5kZWRab25lPXRydWVdIC0gYWRkIHRoZSB0aW1lIHpvbmUgZm9ybWF0IGV4dGVuc2lvblxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODMsIDUsIDI1KS50b0lTTygpIC8vPT4gJzE5ODItMDUtMjVUMDA6MDA6MDAuMDAwWidcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oKSAvLz0+ICcyMDE3LTA0LTIyVDIwOjQ3OjA1LjMzNS0wNDowMCdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcyMDE3LTA0LTIyVDIwOjQ3OjA1LjMzNSdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMjAxNzA0MjJUMjA0NzA1LjMzNS0wNDAwJ1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvSVNPKHtcclxuICAgIGZvcm1hdCA9ICdleHRlbmRlZCcsXHJcbiAgICBzdXBwcmVzc1NlY29uZHMgPSBmYWxzZSxcclxuICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzID0gZmFsc2UsXHJcbiAgICBpbmNsdWRlT2Zmc2V0ID0gdHJ1ZSxcclxuICAgIGV4dGVuZGVkWm9uZSA9IGZhbHNlLFxyXG4gIH0gPSB7fSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXh0ID0gZm9ybWF0ID09PSAnZXh0ZW5kZWQnO1xyXG5cclxuICAgIGxldCBjID0gdG9JU09EYXRlKHRoaXMsIGV4dCk7XHJcbiAgICBjICs9ICdUJztcclxuICAgIGMgKz0gdG9JU09UaW1lKHRoaXMsIGV4dCwgc3VwcHJlc3NTZWNvbmRzLCBzdXBwcmVzc01pbGxpc2Vjb25kcywgaW5jbHVkZU9mZnNldCwgZXh0ZW5kZWRab25lKTtcclxuICAgIHJldHVybiBjO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgZGF0ZSBjb21wb25lbnRcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDUtMjUnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09EYXRlKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzE5ODIwNTI1J1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvSVNPRGF0ZSh7IGZvcm1hdCA9ICdleHRlbmRlZCcgfSA9IHt9KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9JU09EYXRlKHRoaXMsIGZvcm1hdCA9PT0gJ2V4dGVuZGVkJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyB3ZWVrIGRhdGVcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT1dlZWtEYXRlKCkgLy89PiAnMTk4Mi1XMjEtMidcclxuICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgKi9cclxuICB0b0lTT1dlZWtEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBcImtra2stJ1cnV1ctY1wiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIHRpbWUgY29tcG9uZW50XHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmV4dGVuZGVkWm9uZT10cnVlXSAtIGFkZCB0aGUgdGltZSB6b25lIGZvcm1hdCBleHRlbnNpb25cclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlUHJlZml4PWZhbHNlXSAtIGluY2x1ZGUgdGhlIGBUYCBwcmVmaXhcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQgfSkudG9JU09UaW1lKCkgLy89PiAnMDc6MzQ6MTkuMzYxWidcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCwgc2Vjb25kczogMCwgbWlsbGlzZWNvbmRzOiAwIH0pLnRvSVNPVGltZSh7IHN1cHByZXNzU2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcwNzozNFonXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQgfSkudG9JU09UaW1lKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzA3MzQxOS4zNjFaJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSh7IGluY2x1ZGVQcmVmaXg6IHRydWUgfSkgLy89PiAnVDA3OjM0OjE5LjM2MVonXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9JU09UaW1lKHtcclxuICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzID0gZmFsc2UsXHJcbiAgICBzdXBwcmVzc1NlY29uZHMgPSBmYWxzZSxcclxuICAgIGluY2x1ZGVPZmZzZXQgPSB0cnVlLFxyXG4gICAgaW5jbHVkZVByZWZpeCA9IGZhbHNlLFxyXG4gICAgZXh0ZW5kZWRab25lID0gZmFsc2UsXHJcbiAgICBmb3JtYXQgPSAnZXh0ZW5kZWQnLFxyXG4gIH0gPSB7fSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYyA9IGluY2x1ZGVQcmVmaXggPyAnVCcgOiAnJztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGNcclxuICAgICAgICsgdG9JU09UaW1lKFxyXG4gICAgICAgICB0aGlzLFxyXG4gICAgICAgICBmb3JtYXQgPT09ICdleHRlbmRlZCcsXHJcbiAgICAgICAgIHN1cHByZXNzU2Vjb25kcyxcclxuICAgICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHMsXHJcbiAgICAgICAgIGluY2x1ZGVPZmZzZXQsXHJcbiAgICAgICAgIGV4dGVuZGVkWm9uZSxcclxuICAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhbiBSRkMgMjgyMi1jb21wYXRpYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9SRkMyODIyKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCArMDAwMCdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgLTA0MDAnXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9SRkMyODIyKCkge1xyXG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCAnRUVFLCBkZCBMTEwgeXl5eSBISDptbTpzcyBaWlonLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSFRUUCBoZWFkZXJzLiBUaGUgb3V0cHV0IGlzIGFsd2F5cyBleHByZXNzZWQgaW4gR01ULlxyXG4gICAgKiBTcGVjaWZpY2FsbHksIHRoZSBzdHJpbmcgY29uZm9ybXMgdG8gUkZDIDExMjMuXHJcbiAgICAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMy5odG1sI3NlYzMuMy4xXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9IVFRQKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCBHTVQnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMywgMTkpLnRvSFRUUCgpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMTk6MDA6MDAgR01UJ1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvSFRUUCgpIHtcclxuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcy50b1VUQygpLCBcIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgJ0dNVCdcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTERhdGUoKSAvLz0+ICcyMDE0LTA3LTEzJ1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvU1FMRGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvSVNPRGF0ZSh0aGlzLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgVGltZVxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlWm9uZT1mYWxzZV0gLSBpbmNsdWRlIHRoZSB6b25lLCBzdWNoIGFzICdBbWVyaWNhL05ld19Zb3JrJy4gT3ZlcnJpZGVzIGluY2x1ZGVPZmZzZXQuXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0U3BhY2U9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSB0aW1lIGFuZCB0aGUgb2Zmc2V0LCBzdWNoIGFzICcwNToxNToxNi4zNDUgLTA0OjAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9TUUwoKSAvLz0+ICcwNToxNToxNi4zNDUgLTA0OjAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzA1OjE1OjE2LjM0NSdcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9TUUwoeyBpbmNsdWRlWm9uZTogZmFsc2UgfSkgLy89PiAnMDU6MTU6MTYuMzQ1IEFtZXJpY2EvTmV3X1lvcmsnXHJcbiAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICovXHJcbiAgdG9TUUxUaW1lKHsgaW5jbHVkZU9mZnNldCA9IHRydWUsIGluY2x1ZGVab25lID0gZmFsc2UsIGluY2x1ZGVPZmZzZXRTcGFjZSA9IHRydWUgfSA9IHt9KSB7XHJcbiAgICBsZXQgZm10ID0gJ0hIOm1tOnNzLlNTUyc7XHJcblxyXG4gICAgaWYgKGluY2x1ZGVab25lIHx8IGluY2x1ZGVPZmZzZXQpIHtcclxuICAgICAgaWYgKGluY2x1ZGVPZmZzZXRTcGFjZSkge1xyXG4gICAgICAgIGZtdCArPSAnICc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluY2x1ZGVab25lKSB7XHJcbiAgICAgICAgZm10ICs9ICd6JztcclxuICAgICAgfSBlbHNlIGlmIChpbmNsdWRlT2Zmc2V0KSB7XHJcbiAgICAgICAgZm10ICs9ICdaWic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIGZtdCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVUaW1lXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVab25lPWZhbHNlXSAtIGluY2x1ZGUgdGhlIHpvbmUsIHN1Y2ggYXMgJ0FtZXJpY2EvTmV3X1lvcmsnLiBPdmVycmlkZXMgaW5jbHVkZU9mZnNldC5cclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXRTcGFjZT10cnVlXSAtIGluY2x1ZGUgdGhlIHNwYWNlIGJldHdlZW4gdGhlIHRpbWUgYW5kIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9TUUwoKSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCBaJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoKSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCAtMDQ6MDAnXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwJ1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoeyBpbmNsdWRlWm9uZTogdHJ1ZSB9KSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCBBbWVyaWNhL05ld19Zb3JrJ1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvU1FMKG9wdHMgPSB7fSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke3RoaXMudG9TUUxEYXRlKCl9ICR7dGhpcy50b1NRTFRpbWUob3B0cyl9YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIGRlYnVnZ2luZ1xyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudG9JU08oKSA6IElOVkFMSUQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgZXBvY2ggbWlsbGlzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuIEFsaWFzIG9mIHtAbGluayBEYXRlVGltZSN0b01pbGxpc31cclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICB2YWx1ZU9mKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9NaWxsaXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBtaWxsaXNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS5cclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICB0b01pbGxpcygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIDogTmFOO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIGVwb2NoIHNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS5cclxuICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgKi9cclxuICB0b1NlY29uZHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyAvIDEwMDAgOiBOYU47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyB0aGUgZXBvY2ggc2Vjb25kcyAoYXMgYSB3aG9sZSBudW1iZXIpIG9mIHRoaXMgRGF0ZVRpbWUuXHJcbiAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICovXHJcbiAgdG9Vbml4SW50ZWdlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBNYXRoLmZsb29yKHRoaXMudHMgLyAxMDAwKSA6IE5hTjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBKU09OLlxyXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAqL1xyXG4gIHRvSlNPTigpIHtcclxuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJucyBhIEJTT04gc2VyaWFsaXphYmxlIGVxdWl2YWxlbnQgdG8gdGhpcyBEYXRlVGltZS5cclxuICAgICogQHJldHVybiB7RGF0ZX1cclxuICAgICovXHJcbiAgdG9CU09OKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9KU0RhdGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCB0aGlzIERhdGVUaW1lJ3MgeWVhciwgbW9udGgsIGRheSwgYW5kIHNvIG9uLlxyXG4gICAgKiBAcGFyYW0gb3B0cyAtIG9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgdGhlIG9iamVjdFxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVDb25maWc9ZmFsc2VdIC0gaW5jbHVkZSBjb25maWd1cmF0aW9uIGF0dHJpYnV0ZXMgaW4gdGhlIG91dHB1dFxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b09iamVjdCgpIC8vPT4geyB5ZWFyOiAyMDE3LCBtb250aDogNCwgZGF5OiAyMiwgaG91cjogMjAsIG1pbnV0ZTogNDksIHNlY29uZDogNDIsIG1pbGxpc2Vjb25kOiAyNjggfVxyXG4gICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHRvT2JqZWN0KG9wdHMgPSB7fSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcclxuXHJcbiAgICBjb25zdCBiYXNlID0geyAuLi50aGlzLmMgfTtcclxuXHJcbiAgICBpZiAob3B0cy5pbmNsdWRlQ29uZmlnKSB7XHJcbiAgICAgIGJhc2Uub3V0cHV0Q2FsZW5kYXIgPSB0aGlzLm91dHB1dENhbGVuZGFyO1xyXG4gICAgICBiYXNlLm51bWJlcmluZ1N5c3RlbSA9IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbTtcclxuICAgICAgYmFzZS5sb2NhbGUgPSB0aGlzLmxvYy5sb2NhbGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmFzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCBEYXRlIGVxdWl2YWxlbnQgdG8gdGhpcyBEYXRlVGltZS5cclxuICAgICogQHJldHVybiB7RGF0ZX1cclxuICAgICovXHJcbiAgdG9KU0RhdGUoKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5pc1ZhbGlkID8gdGhpcy50cyA6IE5hTik7XHJcbiAgfVxyXG5cclxuICAvLyBDT01QQVJFXHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gRGF0ZVRpbWVzIGFzIGEgRHVyYXRpb24uXHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgRGF0ZVRpbWUgdG8gY29tcGFyZSB0aGlzIG9uZSB0b1xyXG4gICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciBhcnJheSBvZiB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb24uXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxyXG4gICAgKiBAZXhhbXBsZVxyXG4gICAgKiB2YXIgaTEgPSBEYXRlVGltZS5mcm9tSVNPKCcxOTgyLTA1LTI1VDA5OjQ1JyksXHJcbiAgICAqICAgICBpMiA9IERhdGVUaW1lLmZyb21JU08oJzE5ODMtMTAtMTRUMTA6MzAnKTtcclxuICAgICogaTIuZGlmZihpMSkudG9PYmplY3QoKSAvLz0+IHsgbWlsbGlzZWNvbmRzOiA0MzgwNzUwMDAwMCB9XHJcbiAgICAqIGkyLmRpZmYoaTEsICdob3VycycpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMjE2OC43NSB9XHJcbiAgICAqIGkyLmRpZmYoaTEsIFsnbW9udGhzJywgJ2RheXMnXSkudG9PYmplY3QoKSAvLz0+IHsgbW9udGhzOiAxNiwgZGF5czogMTkuMDMxMjUgfVxyXG4gICAgKiBpMi5kaWZmKGkxLCBbJ21vbnRocycsICdkYXlzJywgJ2hvdXJzJ10pLnRvT2JqZWN0KCkgLy89PiB7IG1vbnRoczogMTYsIGRheXM6IDE5LCBob3VyczogMC43NSB9XHJcbiAgICAqIEByZXR1cm4ge0R1cmF0aW9ufVxyXG4gICAgKi9cclxuICBkaWZmKG90aGVyRGF0ZVRpbWUsIHVuaXQgPSAnbWlsbGlzZWNvbmRzJywgb3B0cyA9IHt9KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXJEYXRlVGltZS5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKCdjcmVhdGVkIGJ5IGRpZmZpbmcgYW4gaW52YWxpZCBEYXRlVGltZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGR1ck9wdHMgPSB7IGxvY2FsZTogdGhpcy5sb2NhbGUsIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sIC4uLm9wdHMgfTtcclxuXHJcbiAgICBjb25zdCB1bml0cyA9IG1heWJlQXJyYXkodW5pdCkubWFwKER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQpO1xyXG4gICAgY29uc3Qgb3RoZXJJc0xhdGVyID0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCkgPiB0aGlzLnZhbHVlT2YoKTtcclxuICAgIGNvbnN0IGVhcmxpZXIgPSBvdGhlcklzTGF0ZXIgPyB0aGlzIDogb3RoZXJEYXRlVGltZTtcclxuICAgIGNvbnN0IGxhdGVyID0gb3RoZXJJc0xhdGVyID8gb3RoZXJEYXRlVGltZSA6IHRoaXM7XHJcbiAgICBjb25zdCBkaWZmZWQgPSBkaWZmKGVhcmxpZXIsIGxhdGVyLCB1bml0cywgZHVyT3B0cyk7XHJcblxyXG4gICAgcmV0dXJuIG90aGVySXNMYXRlciA/IGRpZmZlZC5uZWdhdGUoKSA6IGRpZmZlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIERhdGVUaW1lIGFuZCByaWdodCBub3cuXHJcbiAgICAqIFNlZSB7QGxpbmsgRGF0ZVRpbWUjZGlmZn1cclxuICAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxyXG4gICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cclxuICAgICovXHJcbiAgZGlmZk5vdyh1bml0ID0gJ21pbGxpc2Vjb25kcycsIG9wdHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlmZihEYXRlVGltZS5ub3coKSwgdW5pdCwgb3B0cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIGFuIEludGVydmFsIHNwYW5uaW5nIGJldHdlZW4gdGhpcyBEYXRlVGltZSBhbmQgYW5vdGhlciBEYXRlVGltZVxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIG90aGVyIGVuZCBwb2ludCBvZiB0aGUgSW50ZXJ2YWxcclxuICAgICogQHJldHVybiB7SW50ZXJ2YWx9XHJcbiAgICAqL1xyXG4gIHVudGlsKG90aGVyRGF0ZVRpbWUpIHtcclxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHRoaXMsIG90aGVyRGF0ZVRpbWUpIDogdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIERhdGVUaW1lIGlzIGluIHRoZSBzYW1lIHVuaXQgb2YgdGltZSBhcyBhbm90aGVyIERhdGVUaW1lLlxyXG4gICAgKiBIaWdoZXItb3JkZXIgdW5pdHMgbXVzdCBhbHNvIGJlIGlkZW50aWNhbCBmb3IgdGhpcyBmdW5jdGlvbiB0byByZXR1cm4gYHRydWVgLlxyXG4gICAgKiBOb3RlIHRoYXQgdGltZSB6b25lcyBhcmUgKippZ25vcmVkKiogaW4gdGhpcyBjb21wYXJpc29uLCB3aGljaCBjb21wYXJlcyB0aGUgKipsb2NhbCoqIGNhbGVuZGFyIHRpbWUuIFVzZSB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0gdG8gY29udmVydCBvbmUgb2YgdGhlIGRhdGVzIGlmIG5lZWRlZC5cclxuICAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBEYXRlVGltZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY2hlY2sgc2FtZW5lc3Mgb25cclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuaGFzU2FtZShvdGhlckRULCAnZGF5Jyk7IC8vfj4gdHJ1ZSBpZiBvdGhlckRUIGlzIGluIHRoZSBzYW1lIGN1cnJlbnQgY2FsZW5kYXIgZGF5XHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGhhc1NhbWUob3RoZXJEYXRlVGltZSwgdW5pdCkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBpbnB1dE1zID0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCk7XHJcbiAgICBjb25zdCBhZGp1c3RlZFRvWm9uZSA9IHRoaXMuc2V0Wm9uZShvdGhlckRhdGVUaW1lLnpvbmUsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KTtcclxuICAgIHJldHVybiBhZGp1c3RlZFRvWm9uZS5zdGFydE9mKHVuaXQpIDw9IGlucHV0TXMgJiYgaW5wdXRNcyA8PSBhZGp1c3RlZFRvWm9uZS5lbmRPZih1bml0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBFcXVhbGl0eSBjaGVja1xyXG4gICAgKiBUd28gRGF0ZVRpbWVzIGFyZSBlcXVhbCBpZmYgdGhleSByZXByZXNlbnQgdGhlIHNhbWUgbWlsbGlzZWNvbmQsIGhhdmUgdGhlIHNhbWUgem9uZSBhbmQgbG9jYXRpb24sIGFuZCBhcmUgYm90aCB2YWxpZC5cclxuICAgICogVG8gY29tcGFyZSBqdXN0IHRoZSBtaWxsaXNlY29uZCB2YWx1ZXMsIHVzZSBgK2R0MSA9PT0gK2R0MmAuXHJcbiAgICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyIC0gdGhlIG90aGVyIERhdGVUaW1lXHJcbiAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAqL1xyXG4gIGVxdWFscyhvdGhlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5pc1ZhbGlkXHJcbiAgICAgICAmJiBvdGhlci5pc1ZhbGlkXHJcbiAgICAgICAmJiB0aGlzLnZhbHVlT2YoKSA9PT0gb3RoZXIudmFsdWVPZigpXHJcbiAgICAgICAmJiB0aGlzLnpvbmUuZXF1YWxzKG90aGVyLnpvbmUpXHJcbiAgICAgICAmJiB0aGlzLmxvYy5lcXVhbHMob3RoZXIubG9jKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdGhpcyB0aW1lIHJlbGF0aXZlIHRvIG5vdywgc3VjaCBhcyBcImluIHR3byBkYXlzXCIuIENhbiBvbmx5IGludGVybmF0aW9uYWxpemUgaWYgeW91clxyXG4gICAgKiBwbGF0Zm9ybSBzdXBwb3J0cyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdC4gUm91bmRzIGRvd24gYnkgZGVmYXVsdC5cclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBvdXRwdXRcclxuICAgICogQHBhcmFtIHtEYXRlVGltZX0gW29wdGlvbnMuYmFzZT1EYXRlVGltZS5ub3coKV0gLSB0aGUgRGF0ZVRpbWUgdG8gdXNlIGFzIHRoZSBiYXNpcyB0byB3aGljaCB0aGlzIHRpbWUgaXMgY29tcGFyZWQuIERlZmF1bHRzIHRvIG5vdy5cclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnN0eWxlPVwibG9uZ1wiXSAtIHRoZSBzdHlsZSBvZiB1bml0cywgbXVzdCBiZSBcImxvbmdcIiwgXCJzaG9ydFwiLCBvciBcIm5hcnJvd1wiXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBvcHRpb25zLnVuaXQgLSB1c2UgYSBzcGVjaWZpYyB1bml0IG9yIGFycmF5IG9mIHVuaXRzOyBpZiBvbWl0dGVkLCBvciBhbiBhcnJheSwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIGJlc3QgdW5pdC4gVXNlIGFuIGFycmF5IG9yIG9uZSBvZiBcInllYXJzXCIsIFwicXVhcnRlcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgb3IgXCJzZWNvbmRzXCJcclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yb3VuZD10cnVlXSAtIHdoZXRoZXIgdG8gcm91bmQgdGhlIG51bWJlcnMgaW4gdGhlIG91dHB1dC5cclxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnBhZGRpbmc9MF0gLSBwYWRkaW5nIGluIG1pbGxpc2Vjb25kcy4gVGhpcyBhbGxvd3MgeW91IHRvIHJvdW5kIHVwIHRoZSByZXN1bHQgaWYgaXQgZml0cyBpbnNpZGUgdGhlIHRocmVzaG9sZC4gRG9uJ3QgdXNlIGluIGNvbWJpbmF0aW9uIHdpdGgge3JvdW5kOiBmYWxzZX0gYmVjYXVzZSB0aGUgZGVjaW1hbCBvdXRwdXQgd2lsbCBpbmNsdWRlIHRoZSBwYWRkaW5nLlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpc1xyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiBcImluIDEgZGF5XCJcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKFwiZXNcIikudG9SZWxhdGl2ZSh7IGRheXM6IDEgfSkgLy89PiBcImRlbnRybyBkZSAxIGTDrWFcIlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKHsgbG9jYWxlOiBcImZyXCIgfSkgLy89PiBcImRhbnMgMjMgaGV1cmVzXCJcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiMiBkYXlzIGFnb1wiXHJcbiAgICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlKHsgdW5pdDogXCJob3Vyc1wiIH0pIC8vPT4gXCI0OCBob3VycyBhZ29cIlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGhvdXJzOiAzNiB9KS50b1JlbGF0aXZlKHsgcm91bmQ6IGZhbHNlIH0pIC8vPT4gXCIxLjUgZGF5cyBhZ29cIlxyXG4gICAgKi9cclxuICB0b1JlbGF0aXZlKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgYmFzZSA9IG9wdGlvbnMuYmFzZSB8fCBEYXRlVGltZS5mcm9tT2JqZWN0KHt9LCB7IHpvbmU6IHRoaXMuem9uZSB9KTtcclxuICAgIGNvbnN0IHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcgPyAodGhpcyA8IGJhc2UgPyAtb3B0aW9ucy5wYWRkaW5nIDogb3B0aW9ucy5wYWRkaW5nKSA6IDA7XHJcbiAgICBsZXQgdW5pdHMgPSBbJ3llYXJzJywgJ21vbnRocycsICdkYXlzJywgJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcyddO1xyXG4gICAgbGV0IHsgdW5pdCB9ID0gb3B0aW9ucztcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMudW5pdCkpIHtcclxuICAgICAgdW5pdHMgPSBvcHRpb25zLnVuaXQ7XHJcbiAgICAgIHVuaXQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlmZlJlbGF0aXZlKGJhc2UsIHRoaXMucGx1cyhwYWRkaW5nKSwge1xyXG4gICAgICAuLi5vcHRpb25zLFxyXG4gICAgICBudW1lcmljOiAnYWx3YXlzJyxcclxuICAgICAgdW5pdHMsXHJcbiAgICAgIHVuaXQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgZGF0ZSByZWxhdGl2ZSB0byB0b2RheSwgc3VjaCBhcyBcInllc3RlcmRheVwiIG9yIFwibmV4dCBtb250aFwiLlxyXG4gICAgKiBPbmx5IGludGVybmF0aW9uYWxpemVzIG9uIHBsYXRmb3JtcyB0aGF0IHN1cHBvcnRzIEludGwuUmVsYXRpdmVUaW1lRm9ybWF0LlxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIG91dHB1dFxyXG4gICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBbb3B0aW9ucy5iYXNlPURhdGVUaW1lLm5vdygpXSAtIHRoZSBEYXRlVGltZSB0byB1c2UgYXMgdGhlIGJhc2lzIHRvIHdoaWNoIHRoaXMgdGltZSBpcyBjb21wYXJlZC4gRGVmYXVsdHMgdG8gbm93LlxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudW5pdCAtIHVzZSBhIHNwZWNpZmljIHVuaXQ7IGlmIG9taXR0ZWQsIHRoZSBtZXRob2Qgd2lsbCBwaWNrIHRoZSB1bml0LiBVc2Ugb25lIG9mIFwieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIG9yIFwiZGF5c1wiXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIG92ZXJyaWRlIHRoZSBudW1iZXJpbmdTeXN0ZW0gb2YgdGhpcyBEYXRlVGltZS4gVGhlIEludGwgc3lzdGVtIG1heSBjaG9vc2Ugbm90IHRvIGhvbm9yIHRoaXNcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKCkgLy89PiBcInRvbW9ycm93XCJcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKFwiZXNcIikucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCJcIm1hw7FhbmFcIlxyXG4gICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+IFwiZGVtYWluXCJcclxuICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmVDYWxlbmRhcigpIC8vPT4gXCIyIGRheXMgYWdvXCJcclxuICAgICovXHJcbiAgdG9SZWxhdGl2ZUNhbGVuZGFyKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiBkaWZmUmVsYXRpdmUob3B0aW9ucy5iYXNlIHx8IERhdGVUaW1lLmZyb21PYmplY3Qoe30sIHsgem9uZTogdGhpcy56b25lIH0pLCB0aGlzLCB7XHJcbiAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIG51bWVyaWM6ICdhdXRvJyxcclxuICAgICAgdW5pdHM6IFsneWVhcnMnLCAnbW9udGhzJywgJ2RheXMnXSxcclxuICAgICAgY2FsZW5kYXJ5OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogUmV0dXJuIHRoZSBtaW4gb2Ygc2V2ZXJhbCBkYXRlIHRpbWVzXHJcbiAgICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSBEYXRlVGltZXMgZnJvbSB3aGljaCB0byBjaG9vc2UgdGhlIG1pbmltdW1cclxuICAgICogQHJldHVybiB7RGF0ZVRpbWV9IHRoZSBtaW4gRGF0ZVRpbWUsIG9yIHVuZGVmaW5lZCBpZiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudFxyXG4gICAgKi9cclxuICBzdGF0aWMgbWluKC4uLmRhdGVUaW1lcykge1xyXG4gICAgaWYgKCFkYXRlVGltZXMuZXZlcnkoRGF0ZVRpbWUuaXNEYXRlVGltZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCdtaW4gcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXMnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCAoaSkgPT4gaS52YWx1ZU9mKCksIE1hdGgubWluKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBSZXR1cm4gdGhlIG1heCBvZiBzZXZlcmFsIGRhdGUgdGltZXNcclxuICAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIERhdGVUaW1lcyBmcm9tIHdoaWNoIHRvIGNob29zZSB0aGUgbWF4aW11bVxyXG4gICAgKiBAcmV0dXJuIHtEYXRlVGltZX0gdGhlIG1heCBEYXRlVGltZSwgb3IgdW5kZWZpbmVkIGlmIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBtYXgoLi4uZGF0ZVRpbWVzKSB7XHJcbiAgICBpZiAoIWRhdGVUaW1lcy5ldmVyeShEYXRlVGltZS5pc0RhdGVUaW1lKSkge1xyXG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoJ21heCByZXF1aXJlcyBhbGwgYXJndW1lbnRzIGJlIERhdGVUaW1lcycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJlc3RCeShkYXRlVGltZXMsIChpKSA9PiBpLnZhbHVlT2YoKSwgTWF0aC5tYXgpO1xyXG4gIH1cclxuXHJcbiAgLy8gTUlTQ1xyXG5cclxuICAvKipcclxuICAgICogRXhwbGFpbiBob3cgYSBzdHJpbmcgd291bGQgYmUgcGFyc2VkIGJ5IGZyb21Gb3JtYXQoKVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgdGhlIHN0cmluZyBpcyBleHBlY3RlZCB0byBiZSBpbiAoc2VlIGRlc2NyaXB0aW9uKVxyXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGFrZW4gYnkgZnJvbUZvcm1hdCgpXHJcbiAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGZyb21Gb3JtYXRFeHBsYWluKHRleHQsIGZtdCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBjb25zdCB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwgfSA9IG9wdGlvbnM7XHJcbiAgICBjb25zdCBsb2NhbGVUb1VzZSA9IExvY2FsZS5mcm9tT3B0cyh7XHJcbiAgICAgIGxvY2FsZSxcclxuICAgICAgbnVtYmVyaW5nU3lzdGVtLFxyXG4gICAgICBkZWZhdWx0VG9FTjogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0RXhwbGFpbiBpbnN0ZWFkXHJcbiAgICAqL1xyXG4gIHN0YXRpYyBmcm9tU3RyaW5nRXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXRFeHBsYWluKHRleHQsIGZtdCwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvLyBGT1JNQVQgUFJFU0VUU1xyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAxMC8xNC8xOTgzXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURV9TSE9SVCgpIHtcclxuICAgIHJldHVybiBEQVRFX1NIT1JUO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MydcclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFX01FRCgpIHtcclxuICAgIHJldHVybiBEQVRFX01FRDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmksIE9jdCAxNCwgMTk4MydcclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFX01FRF9XSVRIX1dFRUtEQVkoKSB7XHJcbiAgICByZXR1cm4gREFURV9NRURfV0lUSF9XRUVLREFZO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMnXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURV9GVUxMKCkge1xyXG4gICAgcmV0dXJuIERBVEVfRlVMTDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdUdWVzZGF5LCBPY3RvYmVyIDE0LCAxOTgzJ1xyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVfSFVHRSgpIHtcclxuICAgIHJldHVybiBEQVRFX0hVR0U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBUSU1FX1NJTVBMRSgpIHtcclxuICAgIHJldHVybiBUSU1FX1NJTVBMRTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IFRJTUVfV0lUSF9TRUNPTkRTKCkge1xyXG4gICAgcmV0dXJuIFRJTUVfV0lUSF9TRUNPTkRTO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQoKSB7XHJcbiAgICByZXR1cm4gVElNRV9XSVRIX1NIT1JUX09GRlNFVDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBUSU1FX1dJVEhfTE9OR19PRkZTRVQoKSB7XHJcbiAgICByZXR1cm4gVElNRV9XSVRIX0xPTkdfT0ZGU0VUO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwJywgYWx3YXlzIDI0LWhvdXIuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9TSU1QTEUoKSB7XHJcbiAgICByZXR1cm4gVElNRV8yNF9TSU1QTEU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMnLCBhbHdheXMgMjQtaG91ci5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBUSU1FXzI0X1dJVEhfU0VDT05EUygpIHtcclxuICAgIHJldHVybiBUSU1FXzI0X1dJVEhfU0VDT05EUztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFRFQnLCBhbHdheXMgMjQtaG91ci5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUKCkge1xyXG4gICAgcmV0dXJuIFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgRWFzdGVybiBEYXlsaWdodCBUaW1lJywgYWx3YXlzIDI0LWhvdXIuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUKCkge1xyXG4gICAgcmV0dXJuIFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfU0hPUlQoKSB7XHJcbiAgICByZXR1cm4gREFURVRJTUVfU0hPUlQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUygpIHtcclxuICAgIHJldHVybiBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0IDE0LCAxOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXHJcbiAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAqL1xyXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfTUVEKCkge1xyXG4gICAgcmV0dXJuIERBVEVUSU1FX01FRDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTKCkge1xyXG4gICAgcmV0dXJuIERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpLCAxNCBPY3QgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkoKSB7XHJcbiAgICByZXR1cm4gREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzLCA5OjMwIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVUSU1FX0ZVTEwoKSB7XHJcbiAgICByZXR1cm4gREFURVRJTUVfRlVMTDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzLCA5OjMwOjMzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTKCkge1xyXG4gICAgcmV0dXJuIERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cclxuICAgICogQHR5cGUge09iamVjdH1cclxuICAgICovXHJcbiAgc3RhdGljIGdldCBEQVRFVElNRV9IVUdFKCkge1xyXG4gICAgcmV0dXJuIERBVEVUSU1FX0hVR0U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpZGF5LCBPY3RvYmVyIDE0LCAxOTgzLCA5OjMwOjMzIEFNIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxyXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgKi9cclxuICBzdGF0aWMgZ2V0IERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTKCkge1xyXG4gICAgcmV0dXJuIERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgKiBAcHJpdmF0ZVxyXG4gICovXHJcbmZ1bmN0aW9uIGZyaWVuZGx5RGF0ZVRpbWUoZGF0ZVRpbWVpc2gpIHtcclxuICBpZiAoRGF0ZVRpbWUuaXNEYXRlVGltZShkYXRlVGltZWlzaCkpIHtcclxuICAgIHJldHVybiBkYXRlVGltZWlzaDtcclxuICB9IGlmIChkYXRlVGltZWlzaCAmJiBkYXRlVGltZWlzaC52YWx1ZU9mICYmIGlzTnVtYmVyKGRhdGVUaW1laXNoLnZhbHVlT2YoKSkpIHtcclxuICAgIHJldHVybiBEYXRlVGltZS5mcm9tSlNEYXRlKGRhdGVUaW1laXNoKTtcclxuICB9IGlmIChkYXRlVGltZWlzaCAmJiB0eXBlb2YgZGF0ZVRpbWVpc2ggPT09ICdvYmplY3QnKSB7XHJcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbU9iamVjdChkYXRlVGltZWlzaCk7XHJcbiAgfVxyXG4gIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcclxuICAgIGBVbmtub3duIGRhdGV0aW1lIGFyZ3VtZW50OiAke2RhdGVUaW1laXNofSwgb2YgdHlwZSAke3R5cGVvZiBkYXRlVGltZWlzaH1gLFxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFZFUlNJT04gPSAnMy4wLjEnO1xyXG5cclxuZXhwb3J0IHtcclxuICBEYXRlVGltZSwgRHVyYXRpb24sIEZpeGVkT2Zmc2V0Wm9uZSwgSUFOQVpvbmUsIEluZm8sIEludGVydmFsLCBJbnZhbGlkWm9uZSwgU2V0dGluZ3MsIFN5c3RlbVpvbmUsIFZFUlNJT04sIFpvbmUsXHJcbn07XHJcbi8vICMgc291cmNlTWFwcGluZ1VSTD1sdXhvbi5qcy5tYXBcclxuIiwiY2xhc3MgU2NvcmUge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgc2NvcmUpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmU7IiwiaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICcuL2x1eG9uLmpzJztcblxuY29uc3QgZGlzcGxheURhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5fZGF0ZScpO1xuICBtYWluRGF0ZS5pbm5lclRleHQgPSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheURhdGU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9