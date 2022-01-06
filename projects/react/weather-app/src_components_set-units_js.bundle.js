"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcss_corp_batch_2"] = self["webpackChunkcss_corp_batch_2"] || []).push([["src_components_set-units_js"],{

/***/ "./src/components/set-units.js":
/*!*************************************!*\
  !*** ./src/components/set-units.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay */ \"./src/components/overlay.js\");\n\n\n\n\nvar SetUnits = function SetUnits(_ref) {\n  var setUnits = _ref.setUnits,\n      apiStatus = _ref.apiStatus;\n  var isLoading = (apiStatus === null || apiStatus === void 0 ? void 0 : apiStatus.status) === 'REQUEST';\n  var isFailed = (apiStatus === null || apiStatus === void 0 ? void 0 : apiStatus.status) === 'FAILED';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"sub-title\"\n  }, \"Units\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n    onChange: function onChange(e) {\n      return setUnits(e.target.value);\n    },\n    className: \"w-full focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 p-0 border-transparent bg-transparent text-sm font-semibold text-black rounded-md\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n    value: \"celsius\"\n  }, \"Celsius\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n    value: \"fahrenheit\"\n  }, \"Farenheit\")), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_overlay__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"is-loading\"\n  }), isFailed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_overlay__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: \"error-panel\"\n  }));\n};\n\nSetUnits.propTypes = {\n  setUnits: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),\n  apiStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({\n    type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    status: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['REQUEST', 'FAILED']),\n    payload: prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf(Error)\n  })\n};\nSetUnits.defautlProps = {\n  apiStatus: null\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SetUnits));\n\n//# sourceURL=webpack://css-corp-batch-2/./src/components/set-units.js?");

/***/ })

}]);