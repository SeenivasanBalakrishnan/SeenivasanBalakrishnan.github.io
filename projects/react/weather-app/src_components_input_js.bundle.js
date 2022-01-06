"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcss_corp_batch_2"] = self["webpackChunkcss_corp_batch_2"] || []).push([["src_components_input_js"],{

/***/ "./src/components/input.js":
/*!*********************************!*\
  !*** ./src/components/input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay */ \"./src/components/overlay.js\");\n\n\n\nvar Input = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {\n  var searchCities = _ref.searchCities,\n      apiStatus = _ref.apiStatus;\n  var isLoading = (apiStatus === null || apiStatus === void 0 ? void 0 : apiStatus.status) === 'REQUEST';\n  var isFailed = (apiStatus === null || apiStatus === void 0 ? void 0 : apiStatus.status) === 'FAILED';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"relative min-h-[52px]\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"sub-title\"\n  }, \"Location\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    ref: ref,\n    onChange: searchCities,\n    className: \"text-box\",\n    placeholder: \"Enter the location\",\n    required: true\n  }), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_overlay__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"is-loading\"\n  }), isFailed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_overlay__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"error-panel\"\n  }));\n});\nInput.propTypes = {\n  searchCities: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),\n  apiStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({\n    type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    status: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['REQUEST', 'FAILED']),\n    payload: prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf(Error)\n  })\n};\nInput.defaultProps = {\n  apiStatus: null\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Input));\n\n//# sourceURL=webpack://css-corp-batch-2/./src/components/input.js?");

/***/ })

}]);