"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons_play_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/play.svg */ \"./assets/icons/play.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar PhraseBox = function(param) {\n    var index = param.index, setActiveSlide = param.setActiveSlide;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), textarea = ref[0], setTextarea = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), imgData = ref1[0], setImgData = ref1[1];\n    var playAudio = function() {\n        console.log(textarea);\n        var utterance = new SpeechSynthesisUtterance(textarea);\n        speechSynthesis.speak(utterance);\n        setActiveSlide(imgData);\n    };\n    var handleChange = function(event) {\n        setTextarea(event.target.value);\n    };\n    var onChangePicture = function(e) {\n        if (e.target.files[0]) {\n            var reader = new FileReader();\n            reader.addEventListener(\"load\", function() {\n                setImgData(reader.result);\n            });\n            reader.readAsDataURL(e.target.files[0]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-4 text-gray-500\",\n                children: index\n            }, void 0, false, {\n                fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-white mb-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-16 h-16 flex justify-center text-gray-500 bg-gray-100 rounded m-4\",\n                                onClick: playAudio,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_play_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    className: \"fill-current w-4 h-4 lg:w-8 mt-6 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-full p-4\",\n                                value: textarea,\n                                onChange: handleChange,\n                                placeholder: \"Add text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-48\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"h-16 bg-gray-500\",\n                                    src: imgData\n                                }, void 0, false, {\n                                    fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"profilePic\",\n                                        type: \"file\",\n                                        onChange: onChangePicture\n                                    }, void 0, false, {\n                                        fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(PhraseBox, \"EHxUbY2bdw44g8Wtp3V57pGv8Bk=\");\n_c = PhraseBox;\nvar defaultPrompts = [\n    {\n        text: \"\",\n        imgSrc: \"\"\n    },\n    {\n        text: \"\",\n        imgSrc: \"\"\n    }, \n];\nfunction Home() {\n    var _this1 = this;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), activeSlide = ref[0], setActiveSlide = ref[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultPrompts), list = ref2[0], setList = ref2[1];\n    var PhrasesList = list.map(function(dataObj, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PhraseBox, {\n            setActiveSlide: setActiveSlide,\n            index: index\n        }, index + dataObj.text, false, {\n            fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n            lineNumber: 75,\n            columnNumber: 5\n        }, _this1);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex py-20 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: PhrasesList\n            }, void 0, false, {\n                fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 text-center text-sm\",\n                        children: \"Shared screen\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 px-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: activeSlide,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n};\n_s1(Home, \"oAuTA/smsahw0birBR7l45jsP8w=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"PhraseBox\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVU7a0NBQ3ZCLDRFQUFDSyxLQUFHOzRCQUFDQyxHQUFHLEVBQUVRLFdBQVc7NEJBQUVNLEdBQUcsRUFBQyxFQUFFOzs7OztnQ0FBRzs7Ozs7NEJBQzVCOzs7Ozs7b0JBQ0Y7Ozs7OztZQUNGLENBQ047Q0FDSDtJQXZCdUJQLElBQUk7QUFBSkEsTUFBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5SWNvIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvcGxheS5zdmdcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQaHJhc2VCb3ggPSAoeyBpbmRleCwgc2V0QWN0aXZlU2xpZGUgfSkgPT4ge1xuICBjb25zdCBbdGV4dGFyZWEsIHNldFRleHRhcmVhXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IFtpbWdEYXRhLCBzZXRJbWdEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHBsYXlBdWRpbyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0ZXh0YXJlYSk7XG4gICAgbGV0IHV0dGVyYW5jZSA9IG5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UodGV4dGFyZWEpO1xuICAgIHNwZWVjaFN5bnRoZXNpcy5zcGVhayh1dHRlcmFuY2UpO1xuICAgIHNldEFjdGl2ZVNsaWRlKGltZ0RhdGEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFRleHRhcmVhKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VQaWN0dXJlID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgICBzZXRJbWdEYXRhKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfSk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTQgdGV4dC1ncmF5LTUwMFwiPntpbmRleH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIG1iLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTUwMCBiZy1ncmF5LTEwMCByb3VuZGVkIG0tNFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3BsYXlBdWRpb31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBsYXlJY28gY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHctNCBoLTQgbGc6dy04IG10LTYgXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtNFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0ZXh0YXJlYX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgdGV4dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQ4XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMTYgYmctZ3JheS01MDBcIiBzcmM9e2ltZ0RhdGF9IC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwcm9maWxlUGljXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17b25DaGFuZ2VQaWN0dXJlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBkZWZhdWx0UHJvbXB0cyA9IFtcbiAgeyB0ZXh0OiBcIlwiLCBpbWdTcmM6IFwiXCIgfSxcbiAgeyB0ZXh0OiBcIlwiLCBpbWdTcmM6IFwiXCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthY3RpdmVTbGlkZSwgc2V0QWN0aXZlU2xpZGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKGRlZmF1bHRQcm9tcHRzKTtcblxuICBjb25zdCBQaHJhc2VzTGlzdCA9IGxpc3QubWFwKChkYXRhT2JqLCBpbmRleCkgPT4gKFxuICAgIDxQaHJhc2VCb3hcbiAgICAgIHNldEFjdGl2ZVNsaWRlPXtzZXRBY3RpdmVTbGlkZX1cbiAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgIGtleT17aW5kZXggKyBkYXRhT2JqLnRleHR9XG4gICAgLz5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHktMjAgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yXCI+e1BocmFzZXNMaXN0fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiB0ZXh0LWNlbnRlciB0ZXh0LXNtXCI+U2hhcmVkIHNjcmVlbjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBweC04XCI+XG4gICAgICAgICAgPGltZyBzcmM9e2FjdGl2ZVNsaWRlfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlBsYXlJY28iLCJSZWFjdCIsInVzZVN0YXRlIiwiUGhyYXNlQm94IiwiaW5kZXgiLCJzZXRBY3RpdmVTbGlkZSIsInRleHRhcmVhIiwic2V0VGV4dGFyZWEiLCJpbWdEYXRhIiwic2V0SW1nRGF0YSIsInBsYXlBdWRpbyIsImNvbnNvbGUiLCJsb2ciLCJ1dHRlcmFuY2UiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJzcGVlY2hTeW50aGVzaXMiLCJzcGVhayIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVBpY3R1cmUiLCJlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImltZyIsInNyYyIsImlucHV0IiwiaWQiLCJ0eXBlIiwiZGVmYXVsdFByb21wdHMiLCJ0ZXh0IiwiaW1nU3JjIiwiSG9tZSIsImFjdGl2ZVNsaWRlIiwibGlzdCIsInNldExpc3QiLCJQaHJhc2VzTGlzdCIsIm1hcCIsImRhdGFPYmoiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});