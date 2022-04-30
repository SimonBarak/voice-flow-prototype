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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons_play_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/play.svg */ \"./assets/icons/play.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar PhraseBox = function(param) {\n    var dataObj = param.dataObj, index = param.index, setActiveSlide = param.setActiveSlide;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(dataObj.text), textarea = ref[0], setTextarea = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), imgData = ref1[0], setImgData = ref1[1];\n    var playAudio = function() {\n        console.log(textarea);\n        var utterance = new SpeechSynthesisUtterance(textarea);\n        speechSynthesis.speak(utterance);\n        setActiveSlide(imgData);\n    };\n    var handleChange = function(event) {\n        setTextarea(event.target.value);\n    };\n    var onChangePicture = function(e) {\n        if (e.target.files[0]) {\n            var reader = new FileReader();\n            reader.addEventListener(\"load\", function() {\n                setImgData(reader.result);\n            });\n            reader.readAsDataURL(e.target.files[0]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-4 text-gray-500\",\n                children: index\n            }, void 0, false, {\n                fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-white mb-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-16 h-16 flex justify-center text-gray-500 bg-gray-100 rounded m-4\",\n                                onClick: playAudio,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_play_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    className: \"fill-current w-4 h-4 lg:w-8 mt-6 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-full p-4\",\n                                value: textarea,\n                                onChange: handleChange,\n                                placeholder: \"Add text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-48\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"h-16 bg-gray-500\",\n                                    src: imgData\n                                }, void 0, false, {\n                                    fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"profilePic\",\n                                        type: \"file\",\n                                        onChange: onChangePicture\n                                    }, void 0, false, {\n                                        fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(PhraseBox, \"Gh1HD0aJQ0mcESNoQshNNAaotMI=\");\n_c = PhraseBox;\nvar defaultPrompts = [\n    {\n        text: \"\",\n        imgSrc: \"\"\n    },\n    {\n        text: \"\",\n        imgSrc: \"\"\n    }, \n];\nfunction Home() {\n    var _this1 = this;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), activeSlide = ref[0], setActiveSlide = ref[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultPrompts), list = ref2[0], setList = ref2[1];\n    var PhrasesList = list.map(function(dataObj, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PhraseBox, {\n            dataObj: dataObj,\n            setActiveSlide: setActiveSlide,\n            index: index\n        }, index + dataObj.text, false, {\n            fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n            lineNumber: 75,\n            columnNumber: 5\n        }, _this1);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex py-20 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: PhrasesList\n            }, void 0, false, {\n                fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 text-center text-sm\",\n                        children: \"Shared screen\"\n                    }, void 0, false, {\n                        fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2 px-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: activeSlide,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simonbarak/Dev/speech-vizz/pages/index.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n};\n_s1(Home, \"oAuTA/smsahw0birBR7l45jsP8w=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"PhraseBox\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx5QkFBeUI7a0NBQUMsZUFBYTs7Ozs7NEJBQU07a0NBQzVELDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsVUFBVTtrQ0FDdkIsNEVBQUNLLEtBQUc7NEJBQUNDLEdBQUcsRUFBRU8sV0FBVzs0QkFBRUssR0FBRyxFQUFDLEVBQUU7Ozs7O2dDQUFHOzs7Ozs0QkFDNUI7Ozs7OztvQkFDRjs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0lBeEJ1Qk4sSUFBSTtBQUFKQSxNQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXlJY28gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9wbGF5LnN2Z1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFBocmFzZUJveCA9ICh7IGRhdGFPYmosIGluZGV4LCBzZXRBY3RpdmVTbGlkZSB9KSA9PiB7XG4gIGNvbnN0IFt0ZXh0YXJlYSwgc2V0VGV4dGFyZWFdID0gdXNlU3RhdGUoZGF0YU9iai50ZXh0KTtcblxuICBjb25zdCBbaW1nRGF0YSwgc2V0SW1nRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBwbGF5QXVkaW8gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codGV4dGFyZWEpO1xuICAgIGxldCB1dHRlcmFuY2UgPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKHRleHRhcmVhKTtcbiAgICBzcGVlY2hTeW50aGVzaXMuc3BlYWsodXR0ZXJhbmNlKTtcbiAgICBzZXRBY3RpdmVTbGlkZShpbWdEYXRhKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRUZXh0YXJlYShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlUGljdHVyZSA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgICAgc2V0SW1nRGF0YShyZWFkZXIucmVzdWx0KTtcbiAgICAgIH0pO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS00IHRleHQtZ3JheS01MDBcIj57aW5kZXh9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBtYi0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTYgaC0xNiBmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS01MDAgYmctZ3JheS0xMDAgcm91bmRlZCBtLTRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtwbGF5QXVkaW99XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQbGF5SWNvIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB3LTQgaC00IGxnOnctOCBtdC02IFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGV4dGFyZWF9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHRleHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00OFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTE2IGJnLWdyYXktNTAwXCIgc3JjPXtpbWdEYXRhfSAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwicHJvZmlsZVBpY1wiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e29uQ2hhbmdlUGljdHVyZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZGVmYXVsdFByb21wdHMgPSBbXG4gIHsgdGV4dDogXCJcIiwgaW1nU3JjOiBcIlwiIH0sXG4gIHsgdGV4dDogXCJcIiwgaW1nU3JjOiBcIlwiIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYWN0aXZlU2xpZGUsIHNldEFjdGl2ZVNsaWRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShkZWZhdWx0UHJvbXB0cyk7XG5cbiAgY29uc3QgUGhyYXNlc0xpc3QgPSBsaXN0Lm1hcCgoZGF0YU9iaiwgaW5kZXgpID0+IChcbiAgICA8UGhyYXNlQm94XG4gICAgICBkYXRhT2JqPXtkYXRhT2JqfVxuICAgICAgc2V0QWN0aXZlU2xpZGU9e3NldEFjdGl2ZVNsaWRlfVxuICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAga2V5PXtpbmRleCArIGRhdGFPYmoudGV4dH1cbiAgICAvPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweS0yMCBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj57UGhyYXNlc0xpc3R9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyIHRleHQtc21cIj5TaGFyZWQgc2NyZWVuPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHB4LThcIj5cbiAgICAgICAgICA8aW1nIHNyYz17YWN0aXZlU2xpZGV9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUGxheUljbyIsIlJlYWN0IiwidXNlU3RhdGUiLCJQaHJhc2VCb3giLCJkYXRhT2JqIiwiaW5kZXgiLCJzZXRBY3RpdmVTbGlkZSIsInRleHQiLCJ0ZXh0YXJlYSIsInNldFRleHRhcmVhIiwiaW1nRGF0YSIsInNldEltZ0RhdGEiLCJwbGF5QXVkaW8iLCJjb25zb2xlIiwibG9nIiwidXR0ZXJhbmNlIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwic3BlZWNoU3ludGhlc2lzIiwic3BlYWsiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQaWN0dXJlIiwiZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJpbWciLCJzcmMiLCJpbnB1dCIsImlkIiwidHlwZSIsImRlZmF1bHRQcm9tcHRzIiwiaW1nU3JjIiwiSG9tZSIsImFjdGl2ZVNsaWRlIiwibGlzdCIsInNldExpc3QiLCJQaHJhc2VzTGlzdCIsIm1hcCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});