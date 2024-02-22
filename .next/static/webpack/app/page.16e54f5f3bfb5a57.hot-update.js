"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Promo/Promo.jsx":
/*!****************************************!*\
  !*** ./app/components/Promo/Promo.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Promo: function() { return /* binding */ Promo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Promo_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Promo.module.css */ \"(app-pages-browser)/./app/components/Promo/Promo.module.css\");\n/* harmony import */ var _Promo_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Promo_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var use_clipboard_copy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-clipboard-copy */ \"(app-pages-browser)/./node_modules/use-clipboard-copy/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ Promo auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Promo = ()=>{\n    _s();\n    const [codeIsVisible, setCodeIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleButtonClick = ()=>{\n        setCodeIsVisible(true);\n        clipboard.copy();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let timeout;\n        if (codeIsVisible) {\n            timeout = setTimeout(()=>{\n                setCodeIsVisible(false);\n            }, 5000);\n        }\n        return ()=>{\n            clearTimeout(timeout);\n        };\n    }, [\n        codeIsVisible\n    ]);\n    const clipboard = (0,use_clipboard_copy__WEBPACK_IMPORTED_MODULE_2__.useClipboard)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_Promo_module_css__WEBPACK_IMPORTED_MODULE_3___default().promo),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Promo_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"promo__description-block\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_Promo_module_css__WEBPACK_IMPORTED_MODULE_3___default().promo__title),\n                        children: \"Твой промо-код\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Promo\\\\Promo.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_Promo_module_css__WEBPACK_IMPORTED_MODULE_3___default().promo__description),\n                        children: \"Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Promo\\\\Promo.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleButtonClick,\n                        className: \"button \".concat((_Promo_module_css__WEBPACK_IMPORTED_MODULE_3___default().promo__button)),\n                        children: codeIsVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            ref: clipboard.target,\n                            className: (_Promo_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"promo-code\"]),\n                            children: \"WEBTEENS10\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Promo\\\\Promo.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 23\n                        }, undefined) : \"Получить код\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Promo\\\\Promo.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Promo\\\\Promo.jsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"./images/promo-illustration.svg\",\n                alt: \"Собака\",\n                className: (_Promo_module_css__WEBPACK_IMPORTED_MODULE_3___default().promo__image)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Promo\\\\Promo.jsx\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iGamez\\\\Documents\\\\Projects\\\\pindie-js\\\\app\\\\components\\\\Promo\\\\Promo.jsx\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Promo, \"YplrjE7pcki8Nvh24eQUtX1/7zI=\", false, function() {\n    return [\n        use_clipboard_copy__WEBPACK_IMPORTED_MODULE_2__.useClipboard\n    ];\n});\n_c = Promo;\nvar _c;\n$RefreshReg$(_c, \"Promo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb21vL1Byb21vLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDSTtBQUNNO0FBRTNDLE1BQU1JLFFBQVE7O0lBQ3BCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdMLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1NLG9CQUFvQjtRQUN4QkQsaUJBQWlCO1FBQ2xCRSxVQUFVQyxJQUFJO0lBQ2Y7SUFFQVAsZ0RBQVNBLENBQUM7UUFDVCxJQUFJUTtRQUVKLElBQUlMLGVBQWM7WUFDakJLLFVBQVVDLFdBQVc7Z0JBQ3BCTCxpQkFBaUI7WUFDbEIsR0FBRztRQUNKO1FBRUEsT0FBTztZQUNOTSxhQUFhRjtRQUNkO0lBQ0QsR0FBRztRQUFDTDtLQUFjO0lBRWxCLE1BQU1HLFlBQVlMLGdFQUFZQTtJQUU5QixxQkFDQyw4REFBQ1U7UUFBUUMsV0FBV2QsZ0VBQWU7OzBCQUNsQyw4REFBQ2U7Z0JBQUlELFdBQVdkLHNGQUFrQzs7a0NBQ2pELDhEQUFDZ0I7d0JBQUdGLFdBQVdkLHVFQUFzQjtrQ0FBRTs7Ozs7O2tDQUN2Qyw4REFBQ2lCO3dCQUFFSCxXQUFXZCw2RUFBNEI7a0NBQUU7Ozs7OztrQ0FHNUMsOERBQUNrQjt3QkFBT0MsU0FBU1o7d0JBQW1CTyxXQUFXLFVBQWtDLE9BQXhCZCx3RUFBdUI7a0NBQzlFSyw4QkFBZ0IsOERBQUNlOzRCQUFLQyxLQUFLYixVQUFVYyxNQUFNOzRCQUFFUixXQUFXZCx3RUFBb0I7c0NBQUU7Ozs7O3dDQUFvQjs7Ozs7Ozs7Ozs7OzBCQUdyRyw4REFBQ3VCO2dCQUFJQyxLQUFJO2dCQUFrQ0MsS0FBSTtnQkFBU1gsV0FBV2QsdUVBQXNCOzs7Ozs7Ozs7Ozs7QUFHNUYsRUFBRTtHQXRDV0k7O1FBc0JNRCw0REFBWUE7OztLQXRCbEJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1Byb21vL1Byb21vLmpzeD9mNjRlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vUHJvbW8ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUNsaXBib2FyZCB9IGZyb20gJ3VzZS1jbGlwYm9hcmQtY29weSc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvbW8gPSAoKSA9PiB7XHJcblx0Y29uc3QgW2NvZGVJc1Zpc2libGUsIHNldENvZGVJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0XHJcblx0Y29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XHJcblx0ICBzZXRDb2RlSXNWaXNpYmxlKHRydWUpXHJcblx0XHRjbGlwYm9hcmQuY29weSgpXHJcblx0fVxyXG5cdFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsZXQgdGltZW91dFxyXG5cdFx0XHJcblx0XHRpZiAoY29kZUlzVmlzaWJsZSl7XHJcblx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRzZXRDb2RlSXNWaXNpYmxlKGZhbHNlKVxyXG5cdFx0XHR9LCA1MDAwKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0fTtcclxuXHR9LCBbY29kZUlzVmlzaWJsZV0pXHJcblx0XHJcblx0Y29uc3QgY2xpcGJvYXJkID0gdXNlQ2xpcGJvYXJkKCk7XHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17U3R5bGVzWydwcm9tbyddfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlc1sncHJvbW9fX2Rlc2NyaXB0aW9uLWJsb2NrJ119PlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9e1N0eWxlc1sncHJvbW9fX3RpdGxlJ119PtCi0LLQvtC5INC/0YDQvtC80L4t0LrQvtC0PC9oMj5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9e1N0eWxlc1sncHJvbW9fX2Rlc2NyaXB0aW9uJ119PlxyXG5cdFx0XHRcdFx00KHQutC40LTQutCwINC90LAg0LLRgdC1INC60YPRgNGB0Ysg0K/QvdC00LXQutGBINCf0YDQsNC60YLQuNC60YPQvNCwINC00LvRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSDQvdCw0YjQtdCz0L4g0YHQsNC50YLQsCFcclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30gY2xhc3NOYW1lPXtgYnV0dG9uICR7U3R5bGVzWydwcm9tb19fYnV0dG9uJ119YH0+XHJcblx0XHRcdFx0XHR7Y29kZUlzVmlzaWJsZSA/IDxzcGFuIHJlZj17Y2xpcGJvYXJkLnRhcmdldH0gY2xhc3NOYW1lPXtTdHlsZXNbJ3Byb21vLWNvZGUnXX0+V0VCVEVFTlMxMDwvc3Bhbj4gOiAn0J/QvtC70YPRh9C40YLRjCDQutC+0LQnfVxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGltZyBzcmM9Jy4vaW1hZ2VzL3Byb21vLWlsbHVzdHJhdGlvbi5zdmcnIGFsdD0n0KHQvtCx0LDQutCwJyBjbGFzc05hbWU9e1N0eWxlc1sncHJvbW9fX2ltYWdlJ119IC8+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0KTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2xpcGJvYXJkIiwiUHJvbW8iLCJjb2RlSXNWaXNpYmxlIiwic2V0Q29kZUlzVmlzaWJsZSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiY2xpcGJvYXJkIiwiY29weSIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwicmVmIiwidGFyZ2V0IiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Promo/Promo.jsx\n"));

/***/ })

});