"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/components/Popup/Popup.jsx":
/*!****************************************!*\
  !*** ./app/components/Popup/Popup.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Popup: function() { return /* binding */ Popup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Popup_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup.module.css */ \"(app-pages-browser)/./app/components/Popup/Popup.module.css\");\n/* harmony import */ var _Popup_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Popup_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Popup = (param)=>{\n    let { isOpened, closePopup, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_Popup_module_css__WEBPACK_IMPORTED_MODULE_1___default().popup), \" \").concat(isOpened && (_Popup_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"popup_is-opened\"])),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_Popup_module_css__WEBPACK_IMPORTED_MODULE_1___default().close),\n                onClick: closePopup,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/close.svg\",\n                    className: (_Popup_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"close-icon\"]),\n                    alt: \"Закрыть окно\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Popup\\\\Popup.jsx\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Popup\\\\Popup.jsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Popup_module_css__WEBPACK_IMPORTED_MODULE_1___default().content),\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Popup\\\\Popup.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Popup\\\\Popup.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Popup;\nvar _c;\n$RefreshReg$(_c, \"Popup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1BvcHVwL1BvcHVwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUVqQyxNQUFNQyxRQUFRO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtJQUN0RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVyxHQUFzQkosT0FBbkJGLGdFQUFlLEVBQUMsS0FBeUMsT0FBdENFLFlBQVlGLDZFQUF5Qjs7MEJBQ3pFLDhEQUFDTztnQkFBT0QsV0FBV04sZ0VBQWU7Z0JBQUVRLFNBQVNMOzBCQUMzQyw0RUFBQ007b0JBQUlDLEtBQUk7b0JBQW9CSixXQUFXTix3RUFBb0I7b0JBQUVXLEtBQUk7Ozs7Ozs7Ozs7OzBCQUVwRSw4REFBQ047Z0JBQUlDLFdBQVdOLGtFQUFjOzBCQUFHSTs7Ozs7Ozs7Ozs7O0FBR3ZDLEVBQUU7S0FUV0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUG9wdXAvUG9wdXAuanN4P2RkMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9Qb3B1cC5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBQb3B1cCA9ICh7IGlzT3BlbmVkLCBjbG9zZVBvcHVwLCBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake1N0eWxlc1tcInBvcHVwXCJdfSAke2lzT3BlbmVkICYmIFN0eWxlc1tcInBvcHVwX2lzLW9wZW5lZFwiXX1gfT5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZXNbXCJjbG9zZVwiXX0gb25DbGljaz17Y2xvc2VQb3B1cH0+XG4gICAgICAgIDxpbWcgc3JjPScvaW1hZ2VzL2Nsb3NlLnN2ZycgY2xhc3NOYW1lPXtTdHlsZXNbXCJjbG9zZS1pY29uXCJdfSBhbHQ9J9CX0LDQutGA0YvRgtGMINC+0LrQvdC+Jy8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY29udGVudH0+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJTdHlsZXMiLCJQb3B1cCIsImlzT3BlbmVkIiwiY2xvc2VQb3B1cCIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Popup/Popup.jsx\n"));

/***/ })

});