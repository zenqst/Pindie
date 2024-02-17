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

/***/ "(app-pages-browser)/./app/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./app/components/Header/Header.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AuthForm_AuthForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/AuthForm/AuthForm */ \"(app-pages-browser)/./app/components/AuthForm/AuthForm.jsx\");\n/* harmony import */ var _components_Overlay_Overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Overlay/Overlay */ \"(app-pages-browser)/./app/components/Overlay/Overlay.jsx\");\n/* harmony import */ var _components_Popup_Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Popup/Popup */ \"(app-pages-browser)/./app/components/Popup/Popup.jsx\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header.module.css */ \"(app-pages-browser)/./app/components/Header/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _HeaderLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderLink */ \"(app-pages-browser)/./app/components/Header/HeaderLink.jsx\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data/data */ \"(app-pages-browser)/./app/data/data.js\");\n/* __next_internal_client_entry_do_not_use__ Header auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [popupIsOpened, setPopupIsOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const openPopup = ()=>{\n        setPopupIsOpened(true);\n    };\n    const closePopup = ()=>{\n        setPopupIsOpened(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo__image),\n                    src: \"./images/logo.svg\",\n                    alt: \"Логотип Pindie\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Header\\\\Header.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Header\\\\Header.jsx\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().menu),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().menu__list),\n                        children: _data_data__WEBPACK_IMPORTED_MODULE_6__.categories.map((item, index)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_HeaderLink__WEBPACK_IMPORTED_MODULE_5__.HeaderLink, {\n                                ...item,\n                                key: index,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 7\n                                },\n                                __self: undefined\n                            }))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().auth),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openPopup,\n                            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().auth__button),\n                            children: \"Войти\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Header\\\\Header.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Header\\\\Header.jsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Overlay_Overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay, {\n                isOpened: popupIsOpened\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Header\\\\Header.jsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Popup_Popup__WEBPACK_IMPORTED_MODULE_4__.Popup, {\n                isOpened: popupIsOpened,\n                closePopup: closePopup,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthForm_AuthForm__WEBPACK_IMPORTED_MODULE_2__.AuthForm, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Header\\\\Header.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Header\\\\Header.jsx\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Header\\\\Header.jsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Header, \"tnOVHdN0yDAgoIdnb4WEY31gl7U=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dEO0FBQ0g7QUFDTjtBQUNOO0FBQ0M7QUFDRjtBQUNQO0FBRTFCLE1BQU1PLFNBQVM7O0lBQ3JCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdILCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1JLFlBQVk7UUFDakJELGlCQUFpQjtJQUNsQjtJQUVBLE1BQU1FLGFBQWE7UUFDbEJGLGlCQUFpQjtJQUNsQjtJQUVBLHFCQUNDLDhEQUFDRztRQUFPQyxXQUFXVixrRUFBZ0I7OzBCQUNsQyw4REFBQ1c7Z0JBQUVDLE1BQUs7Z0JBQUlGLFdBQVdWLGdFQUFjOzBCQUNwQyw0RUFBQ2E7b0JBQUlILFdBQVdWLHVFQUFxQjtvQkFBRWMsS0FBSTtvQkFBb0JDLEtBQUk7Ozs7Ozs7Ozs7OzBCQUVwRSw4REFBQ0M7Z0JBQUlOLFdBQVdWLGdFQUFjOztrQ0FDN0IsOERBQUNpQjt3QkFBR1AsV0FBV1Ysc0VBQW9CO2tDQUNqQ0Usa0RBQVVBLENBQUNnQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3RCLHFEQUFDbkIsbURBQVVBO2dDQUFFLEdBQUdrQixJQUFJO2dDQUFFRSxLQUFLRDs7Ozs7Ozs7Ozs7OztrQ0FHN0IsOERBQUNFO3dCQUFJWixXQUFXVixnRUFBYztrQ0FDN0IsNEVBQUN1Qjs0QkFBT0MsU0FBU2pCOzRCQUFXRyxXQUFXVix3RUFBc0I7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdqRSw4REFBQ0YsZ0VBQU9BO2dCQUFDMkIsVUFBVXBCOzs7Ozs7MEJBQ25CLDhEQUFDTiwwREFBS0E7Z0JBQUMwQixVQUFVcEI7Z0JBQWVHLFlBQVlBOzBCQUMzQyw0RUFBQ1gsbUVBQVFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWIsRUFBRTtHQWhDV087S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3g/MDI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IEF1dGhGb3JtIH0gZnJvbSAnQGNvbXBvbmVudHMvQXV0aEZvcm0vQXV0aEZvcm0nXHJcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAY29tcG9uZW50cy9PdmVybGF5L092ZXJsYXknXHJcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnQGNvbXBvbmVudHMvUG9wdXAvUG9wdXAnXHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IEhlYWRlckxpbmsgfSBmcm9tICcuL0hlYWRlckxpbmsnO1xyXG5pbXBvcnQgeyBjYXRlZ29yaWVzIH0gZnJvbSBcIkBkYXRhL2RhdGFcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4gIHtcclxuXHRjb25zdCBbcG9wdXBJc09wZW5lZCwgc2V0UG9wdXBJc09wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRcclxuXHRjb25zdCBvcGVuUG9wdXAgPSAoKSA9PiB7XHJcblx0XHRzZXRQb3B1cElzT3BlbmVkKHRydWUpXHJcblx0fVxyXG5cdFxyXG5cdGNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiB7XHJcblx0XHRzZXRQb3B1cElzT3BlbmVkKGZhbHNlKVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9e1N0eWxlc1snaGVhZGVyJ119PlxyXG5cdFx0XHQ8YSBocmVmPScvJyBjbGFzc05hbWU9e1N0eWxlc1snbG9nbyddfT5cclxuXHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17U3R5bGVzWydsb2dvX19pbWFnZSddfSBzcmM9Jy4vaW1hZ2VzL2xvZ28uc3ZnJyBhbHQ9J9Cb0L7Qs9C+0YLQuNC/IFBpbmRpZScgLz5cclxuXHRcdFx0PC9hPlxyXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT17U3R5bGVzWydtZW51J119PlxyXG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9e1N0eWxlc1snbWVudV9fbGlzdCddfT5cclxuXHRcdFx0XHRcdHtjYXRlZ29yaWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0PEhlYWRlckxpbmsgey4uLml0ZW19IGtleT17aW5kZXh9IC8+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXNbJ2F1dGgnXX0+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e29wZW5Qb3B1cH0gY2xhc3NOYW1lPXtTdHlsZXNbJ2F1dGhfX2J1dHRvbiddfT7QktC+0LnRgtC4PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbmF2PlxyXG5cdFx0XHQ8T3ZlcmxheSBpc09wZW5lZD17cG9wdXBJc09wZW5lZH0vPlxyXG5cdFx0XHQ8UG9wdXAgaXNPcGVuZWQ9e3BvcHVwSXNPcGVuZWR9IGNsb3NlUG9wdXA9e2Nsb3NlUG9wdXB9PlxyXG5cdFx0XHRcdDxBdXRoRm9ybS8+XHJcblx0XHRcdDwvUG9wdXA+XHJcblx0XHQ8L2hlYWRlcj5cclxuXHQpO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiQXV0aEZvcm0iLCJPdmVybGF5IiwiUG9wdXAiLCJTdHlsZXMiLCJIZWFkZXJMaW5rIiwiY2F0ZWdvcmllcyIsInVzZVN0YXRlIiwiSGVhZGVyIiwicG9wdXBJc09wZW5lZCIsInNldFBvcHVwSXNPcGVuZWQiLCJvcGVuUG9wdXAiLCJjbG9zZVBvcHVwIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJuYXYiLCJ1bCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImtleSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpc09wZW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Header/Header.jsx\n"));

/***/ })

});