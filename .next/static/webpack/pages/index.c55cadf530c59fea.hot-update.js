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

/***/ "./components/ConnectWithSelect.tsx":
/*!******************************************!*\
  !*** ./components/ConnectWithSelect.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConnectWithSelect\": function() { return /* binding */ ConnectWithSelect; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_instanceof.mjs */ \"./node_modules/@swc/helpers/src/_instanceof.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/network */ \"./node_modules/@web3-react/network/dist/index.js\");\n/* harmony import */ var _web3_react_network__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_network__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/walletconnect */ \"./node_modules/@web3-react/walletconnect/dist/index.js\");\n/* harmony import */ var _web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chains */ \"./chains.ts\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChainSelect(param) {\n    var chainId = param.chainId, switchChain = param.switchChain, displayDefault = param.displayDefault, chainIds = param.chainIds;\n    var _this = this;\n    var ref;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        value: chainId,\n        onChange: function(event) {\n            switchChain === null || switchChain === void 0 ? void 0 : switchChain(Number(event.target.value));\n        },\n        disabled: switchChain === undefined,\n        children: [\n            displayDefault ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                value: -1,\n                children: \"Default Chain\"\n            }, void 0, false, {\n                fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n                lineNumber: 28,\n                columnNumber: 25\n            }, this) : null,\n            chainIds.map(function(chainId) {\n                var ref1;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                    value: chainId,\n                    children: (ref = (ref1 = _chains__WEBPACK_IMPORTED_MODULE_4__.CHAINS[chainId]) === null || ref1 === void 0 ? void 0 : ref1.name) !== null && ref !== void 0 ? ref : chainId\n                }, chainId, false, {\n                    fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = ChainSelect;\nfunction ConnectWithSelect(param) {\n    var connector = param.connector, chainId = param.chainId, isActivating = param.isActivating, isActive = param.isActive, error = param.error, setError = param.setError;\n    _s();\n    var isNetwork = (0,_swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(connector, _web3_react_network__WEBPACK_IMPORTED_MODULE_1__.Network);\n    var displayDefault = !isNetwork;\n    var chainIds = (isNetwork ? Object.keys(_chains__WEBPACK_IMPORTED_MODULE_4__.URLS) : Object.keys(_chains__WEBPACK_IMPORTED_MODULE_4__.CHAINS)).map(function(chainId) {\n        return Number(chainId);\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(isNetwork ? 1 : -1), desiredChainId = ref[0], setDesiredChainId = ref[1];\n    var switchChain = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(desiredChainId) {\n        setDesiredChainId(desiredChainId);\n        // if we're already connected to the desired chain, return\n        if (desiredChainId === chainId) {\n            setError(undefined);\n            return;\n        }\n        // if they want to connect to the default chain and we're already connected, return\n        if (desiredChainId === -1 && chainId !== undefined) {\n            setError(undefined);\n            return;\n        }\n        if ((0,_swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(connector, _web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_2__.WalletConnect) || (0,_swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(connector, _web3_react_network__WEBPACK_IMPORTED_MODULE_1__.Network)) {\n            connector.activate(desiredChainId === -1 ? undefined : desiredChainId).then(function() {\n                return setError(undefined);\n            }).catch(setError);\n        } else {\n            connector.activate(desiredChainId === -1 ? undefined : (0,_chains__WEBPACK_IMPORTED_MODULE_4__.getAddChainParameters)(desiredChainId)).then(function() {\n                return setError(undefined);\n            }).catch(setError);\n        }\n    }, [\n        connector,\n        chainId,\n        setError\n    ]);\n    var onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function() {\n        setError(undefined);\n        if (connector) {\n            connector.activate().then(function() {\n                return setError(undefined);\n            }).catch(setError);\n        } else if ((0,_swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(connector, _web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_2__.WalletConnect) || (0,_swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(connector, _web3_react_network__WEBPACK_IMPORTED_MODULE_1__.Network)) {\n            connector.activate(desiredChainId === -1 ? undefined : desiredChainId).then(function() {\n                return setError(undefined);\n            }).catch(setError);\n        } else {\n            connector.activate(desiredChainId === -1 ? undefined : (0,_chains__WEBPACK_IMPORTED_MODULE_4__.getAddChainParameters)(desiredChainId)).then(function() {\n                return setError(undefined);\n            }).catch(setError);\n        }\n    }, [\n        connector,\n        desiredChainId,\n        setError\n    ]);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                flexDirection: \"column\"\n            },\n            children: [\n                !connector && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSelect, {\n                    chainId: desiredChainId,\n                    switchChain: switchChain,\n                    displayDefault: displayDefault,\n                    chainIds: chainIds\n                }, void 0, false, {\n                    fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        marginBottom: \"1rem\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onClick,\n                    children: \"Try Again?\"\n                }, void 0, false, {\n                    fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, this);\n    } else if (isActive) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                flexDirection: \"column\"\n            },\n            children: [\n                !connector && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSelect, {\n                    chainId: desiredChainId === -1 ? -1 : chainId,\n                    switchChain: switchChain,\n                    displayDefault: displayDefault,\n                    chainIds: chainIds\n                }, void 0, false, {\n                    fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        marginBottom: \"1rem\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        if (connector === null || connector === void 0 ? void 0 : connector.deactivate) {\n                            void connector.deactivate();\n                        } else {\n                            void connector.resetState();\n                        }\n                    },\n                    children: \"Disconnect\"\n                }, void 0, false, {\n                    fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n            lineNumber: 126,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                flexDirection: \"column\"\n            },\n            children: [\n                !connector && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSelect, {\n                    chainId: desiredChainId,\n                    switchChain: isActivating ? undefined : switchChain,\n                    displayDefault: displayDefault,\n                    chainIds: chainIds\n                }, void 0, false, {\n                    fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n                    lineNumber: 153,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        marginBottom: \"1rem\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n                    lineNumber: 160,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: isActivating ? undefined : function() {\n                        return (0,_swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(connector, GnosisSafe) ? void connector.activate().then(function() {\n                            return setError(undefined);\n                        }).catch(setError) : (0,_swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(connector, _web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_2__.WalletConnect) || (0,_swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(connector, _web3_react_network__WEBPACK_IMPORTED_MODULE_1__.Network) ? connector.activate(desiredChainId === -1 ? undefined : desiredChainId).then(function() {\n                            return setError(undefined);\n                        }).catch(setError) : connector.activate(desiredChainId === -1 ? undefined : (0,_chains__WEBPACK_IMPORTED_MODULE_4__.getAddChainParameters)(desiredChainId)).then(function() {\n                            return setError(undefined);\n                        }).catch(setError);\n                    },\n                    disabled: isActivating,\n                    children: \"Connect\"\n                }, void 0, false, {\n                    fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n                    lineNumber: 161,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n            lineNumber: 151,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(ConnectWithSelect, \"FfInH5IoVOQMeTy9y17NkxXZNYw=\");\n_c1 = ConnectWithSelect;\nvar _c, _c1;\n$RefreshReg$(_c, \"ChainSelect\");\n$RefreshReg$(_c1, \"ConnectWithSelect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLFFBQU07b0JBQ0xOLE9BQU8sRUFDTFosWUFBWSxHQUNSTixTQUFTLEdBQ1Q7K0JBQ0VLLDJFQUFxQnNCLENBQXJCdEIsU0FBUyxFQUFZc0IsVUFBVSxJQUMzQixLQUFLdEIsU0FBUyxDQUNYVSxRQUFRLEVBQUUsQ0FDVkMsSUFBSSxDQUFDO21DQUFNUCxRQUFRLENBQUNULFNBQVMsQ0FBQzt5QkFBQSxDQUFDLENBQy9CaUIsS0FBSyxDQUFDUixRQUFRLENBQUMsR0FDbEJKLDJFQUFxQnZCLENBQXJCdUIsU0FBUyxFQUFZdkIsb0VBQWEsS0FBSXVCLDJFQUFxQnhCLENBQXJCd0IsU0FBUyxFQUFZeEIsd0RBQU8sSUFDbEV3QixTQUFTLENBQ05VLFFBQVEsQ0FBQ0YsY0FBYyxLQUFLLENBQUMsQ0FBQyxHQUFHYixTQUFTLEdBQUdhLGNBQWMsQ0FBQyxDQUM1REcsSUFBSSxDQUFDO21DQUFNUCxRQUFRLENBQUNULFNBQVMsQ0FBQzt5QkFBQSxDQUFDLENBQy9CaUIsS0FBSyxDQUFDUixRQUFRLENBQUMsR0FDbEJKLFNBQVMsQ0FDTlUsUUFBUSxDQUFDRixjQUFjLEtBQUssQ0FBQyxDQUFDLEdBQUdiLFNBQVMsR0FBR2QsOERBQXFCLENBQUMyQixjQUFjLENBQUMsQ0FBQyxDQUNuRkcsSUFBSSxDQUFDO21DQUFNUCxRQUFRLENBQUNULFNBQVMsQ0FBQzt5QkFBQSxDQUFDLENBQy9CaUIsS0FBSyxDQUFDUixRQUFRLENBQUM7cUJBQUE7b0JBRTlCVixRQUFRLEVBQUVPLFlBQVk7OEJBQ3ZCLFNBRUQ7Ozs7O3dCQUFTOzs7Ozs7Z0JBQ0wsQ0FDUDtLQUNGO0NBQ0Y7R0F0SmVGLGlCQUFpQjtBQUFqQkEsTUFBQUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29ubmVjdFdpdGhTZWxlY3QudHN4PzM4NjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDb2luYmFzZVdhbGxldCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvaW5iYXNlLXdhbGxldCdcbmltcG9ydCB0eXBlIHsgV2ViM1JlYWN0SG9va3MgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuaW1wb3J0IHR5cGUgeyBNZXRhTWFzayB9IGZyb20gJ0B3ZWIzLXJlYWN0L21ldGFtYXNrJ1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0B3ZWIzLXJlYWN0L25ldHdvcmsnXG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0IH0gZnJvbSAnQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdCdcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ0hBSU5TLCBnZXRBZGRDaGFpblBhcmFtZXRlcnMsIFVSTFMgfSBmcm9tICcuLi9jaGFpbnMnXG5cbmZ1bmN0aW9uIENoYWluU2VsZWN0KHtcbiAgY2hhaW5JZCxcbiAgc3dpdGNoQ2hhaW4sXG4gIGRpc3BsYXlEZWZhdWx0LFxuICBjaGFpbklkcyxcbn06IHtcbiAgY2hhaW5JZDogbnVtYmVyXG4gIHN3aXRjaENoYWluOiAoY2hhaW5JZDogbnVtYmVyKSA9PiB2b2lkIHwgdW5kZWZpbmVkXG4gIGRpc3BsYXlEZWZhdWx0OiBib29sZWFuXG4gIGNoYWluSWRzOiBudW1iZXJbXVxufSkge1xuICByZXR1cm4gKFxuICAgIDxzZWxlY3RcbiAgICAgIHZhbHVlPXtjaGFpbklkfVxuICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2hDaGFpbj8uKE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKVxuICAgICAgfX1cbiAgICAgIGRpc2FibGVkPXtzd2l0Y2hDaGFpbiA9PT0gdW5kZWZpbmVkfVxuICAgID5cbiAgICAgIHtkaXNwbGF5RGVmYXVsdCA/IDxvcHRpb24gdmFsdWU9ey0xfT5EZWZhdWx0IENoYWluPC9vcHRpb24+IDogbnVsbH1cbiAgICAgIHtjaGFpbklkcy5tYXAoKGNoYWluSWQpID0+IChcbiAgICAgICAgPG9wdGlvbiBrZXk9e2NoYWluSWR9IHZhbHVlPXtjaGFpbklkfT5cbiAgICAgICAgICB7Q0hBSU5TW2NoYWluSWRdPy5uYW1lID8/IGNoYWluSWR9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKSl9XG4gICAgPC9zZWxlY3Q+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbm5lY3RXaXRoU2VsZWN0KHtcbiAgY29ubmVjdG9yLFxuICBjaGFpbklkLFxuICBpc0FjdGl2YXRpbmcsXG4gIGlzQWN0aXZlLFxuICBlcnJvcixcbiAgc2V0RXJyb3IsXG59OiB7XG4gIGNvbm5lY3RvcjogTWV0YU1hc2sgfCBXYWxsZXRDb25uZWN0IHwgQ29pbmJhc2VXYWxsZXQgfCBOZXR3b3JrXG4gIGNoYWluSWQ6IFJldHVyblR5cGU8V2ViM1JlYWN0SG9va3NbJ3VzZUNoYWluSWQnXT5cbiAgaXNBY3RpdmF0aW5nOiBSZXR1cm5UeXBlPFdlYjNSZWFjdEhvb2tzWyd1c2VJc0FjdGl2YXRpbmcnXT5cbiAgaXNBY3RpdmU6IFJldHVyblR5cGU8V2ViM1JlYWN0SG9va3NbJ3VzZUlzQWN0aXZlJ10+XG4gIGVycm9yOiBFcnJvciB8IHVuZGVmaW5lZFxuICBzZXRFcnJvcjogKGVycm9yOiBFcnJvciB8IHVuZGVmaW5lZCkgPT4gdm9pZFxufSkge1xuICBjb25zdCBpc05ldHdvcmsgPSBjb25uZWN0b3IgaW5zdGFuY2VvZiBOZXR3b3JrXG4gIGNvbnN0IGRpc3BsYXlEZWZhdWx0ID0gIWlzTmV0d29ya1xuICBjb25zdCBjaGFpbklkcyA9IChpc05ldHdvcmsgPyBPYmplY3Qua2V5cyhVUkxTKSA6IE9iamVjdC5rZXlzKENIQUlOUykpLm1hcCgoY2hhaW5JZCkgPT4gTnVtYmVyKGNoYWluSWQpKVxuXG4gIGNvbnN0IFtkZXNpcmVkQ2hhaW5JZCwgc2V0RGVzaXJlZENoYWluSWRdID0gdXNlU3RhdGU8bnVtYmVyPihpc05ldHdvcmsgPyAxIDogLTEpXG5cbiAgY29uc3Qgc3dpdGNoQ2hhaW4gPSB1c2VDYWxsYmFjayhcbiAgICAoZGVzaXJlZENoYWluSWQ6IG51bWJlcikgPT4ge1xuICAgICAgc2V0RGVzaXJlZENoYWluSWQoZGVzaXJlZENoYWluSWQpXG4gICAgICAvLyBpZiB3ZSdyZSBhbHJlYWR5IGNvbm5lY3RlZCB0byB0aGUgZGVzaXJlZCBjaGFpbiwgcmV0dXJuXG4gICAgICBpZiAoZGVzaXJlZENoYWluSWQgPT09IGNoYWluSWQpIHtcbiAgICAgICAgc2V0RXJyb3IodW5kZWZpbmVkKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gaWYgdGhleSB3YW50IHRvIGNvbm5lY3QgdG8gdGhlIGRlZmF1bHQgY2hhaW4gYW5kIHdlJ3JlIGFscmVhZHkgY29ubmVjdGVkLCByZXR1cm5cbiAgICAgIGlmIChkZXNpcmVkQ2hhaW5JZCA9PT0gLTEgJiYgY2hhaW5JZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNldEVycm9yKHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25uZWN0b3IgaW5zdGFuY2VvZiBXYWxsZXRDb25uZWN0IHx8IGNvbm5lY3RvciBpbnN0YW5jZW9mIE5ldHdvcmspIHtcbiAgICAgICAgY29ubmVjdG9yXG4gICAgICAgICAgLmFjdGl2YXRlKGRlc2lyZWRDaGFpbklkID09PSAtMSA/IHVuZGVmaW5lZCA6IGRlc2lyZWRDaGFpbklkKVxuICAgICAgICAgIC50aGVuKCgpID0+IHNldEVycm9yKHVuZGVmaW5lZCkpXG4gICAgICAgICAgLmNhdGNoKHNldEVycm9yKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29ubmVjdG9yXG4gICAgICAgICAgLmFjdGl2YXRlKGRlc2lyZWRDaGFpbklkID09PSAtMSA/IHVuZGVmaW5lZCA6IGdldEFkZENoYWluUGFyYW1ldGVycyhkZXNpcmVkQ2hhaW5JZCkpXG4gICAgICAgICAgLnRoZW4oKCkgPT4gc2V0RXJyb3IodW5kZWZpbmVkKSlcbiAgICAgICAgICAuY2F0Y2goc2V0RXJyb3IpXG4gICAgICB9XG4gICAgfSxcbiAgICBbY29ubmVjdG9yLCBjaGFpbklkLCBzZXRFcnJvcl1cbiAgKVxuXG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKTogdm9pZCA9PiB7XG4gICAgc2V0RXJyb3IodW5kZWZpbmVkKVxuICAgIGlmIChjb25uZWN0b3IpIHtcbiAgICAgIGNvbm5lY3RvclxuICAgICAgICAuYWN0aXZhdGUoKVxuICAgICAgICAudGhlbigoKSA9PiBzZXRFcnJvcih1bmRlZmluZWQpKVxuICAgICAgICAuY2F0Y2goc2V0RXJyb3IpXG4gICAgfSBlbHNlIGlmIChjb25uZWN0b3IgaW5zdGFuY2VvZiBXYWxsZXRDb25uZWN0IHx8IGNvbm5lY3RvciBpbnN0YW5jZW9mIE5ldHdvcmspIHtcbiAgICAgIGNvbm5lY3RvclxuICAgICAgICAuYWN0aXZhdGUoZGVzaXJlZENoYWluSWQgPT09IC0xID8gdW5kZWZpbmVkIDogZGVzaXJlZENoYWluSWQpXG4gICAgICAgIC50aGVuKCgpID0+IHNldEVycm9yKHVuZGVmaW5lZCkpXG4gICAgICAgIC5jYXRjaChzZXRFcnJvcilcbiAgICB9IGVsc2Uge1xuICAgICAgY29ubmVjdG9yXG4gICAgICAgIC5hY3RpdmF0ZShkZXNpcmVkQ2hhaW5JZCA9PT0gLTEgPyB1bmRlZmluZWQgOiBnZXRBZGRDaGFpblBhcmFtZXRlcnMoZGVzaXJlZENoYWluSWQpKVxuICAgICAgICAudGhlbigoKSA9PiBzZXRFcnJvcih1bmRlZmluZWQpKVxuICAgICAgICAuY2F0Y2goc2V0RXJyb3IpXG4gICAgfVxuICB9LCBbY29ubmVjdG9yLCBkZXNpcmVkQ2hhaW5JZCwgc2V0RXJyb3JdKVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG4gICAgICAgIHshKGNvbm5lY3RvcikgJiYgKFxuICAgICAgICAgIDxDaGFpblNlbGVjdFxuICAgICAgICAgICAgY2hhaW5JZD17ZGVzaXJlZENoYWluSWR9XG4gICAgICAgICAgICBzd2l0Y2hDaGFpbj17c3dpdGNoQ2hhaW59XG4gICAgICAgICAgICBkaXNwbGF5RGVmYXVsdD17ZGlzcGxheURlZmF1bHR9XG4gICAgICAgICAgICBjaGFpbklkcz17Y2hhaW5JZHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxcmVtJyB9fSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PlRyeSBBZ2Fpbj88L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSBlbHNlIGlmIChpc0FjdGl2ZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG4gICAgICAgIHshKGNvbm5lY3RvcikgJiYgKFxuICAgICAgICAgIDxDaGFpblNlbGVjdFxuICAgICAgICAgICAgY2hhaW5JZD17ZGVzaXJlZENoYWluSWQgPT09IC0xID8gLTEgOiBjaGFpbklkfVxuICAgICAgICAgICAgc3dpdGNoQ2hhaW49e3N3aXRjaENoYWlufVxuICAgICAgICAgICAgZGlzcGxheURlZmF1bHQ9e2Rpc3BsYXlEZWZhdWx0fVxuICAgICAgICAgICAgY2hhaW5JZHM9e2NoYWluSWRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMXJlbScgfX0gLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChjb25uZWN0b3I/LmRlYWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgdm9pZCBjb25uZWN0b3IuZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2b2lkIGNvbm5lY3Rvci5yZXNldFN0YXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgRGlzY29ubmVjdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuICAgICAgICB7IShjb25uZWN0b3IpICYmIChcbiAgICAgICAgICA8Q2hhaW5TZWxlY3RcbiAgICAgICAgICAgIGNoYWluSWQ9e2Rlc2lyZWRDaGFpbklkfVxuICAgICAgICAgICAgc3dpdGNoQ2hhaW49e2lzQWN0aXZhdGluZyA/IHVuZGVmaW5lZCA6IHN3aXRjaENoYWlufVxuICAgICAgICAgICAgZGlzcGxheURlZmF1bHQ9e2Rpc3BsYXlEZWZhdWx0fVxuICAgICAgICAgICAgY2hhaW5JZHM9e2NoYWluSWRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMXJlbScgfX0gLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgaXNBY3RpdmF0aW5nXG4gICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgIDogKCkgPT5cbiAgICAgICAgICAgICAgICAgIGNvbm5lY3RvciBpbnN0YW5jZW9mIEdub3Npc1NhZmVcbiAgICAgICAgICAgICAgICAgICAgPyB2b2lkIGNvbm5lY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGl2YXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHNldEVycm9yKHVuZGVmaW5lZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goc2V0RXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIDogY29ubmVjdG9yIGluc3RhbmNlb2YgV2FsbGV0Q29ubmVjdCB8fCBjb25uZWN0b3IgaW5zdGFuY2VvZiBOZXR3b3JrXG4gICAgICAgICAgICAgICAgICAgID8gY29ubmVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWN0aXZhdGUoZGVzaXJlZENoYWluSWQgPT09IC0xID8gdW5kZWZpbmVkIDogZGVzaXJlZENoYWluSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBzZXRFcnJvcih1bmRlZmluZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHNldEVycm9yKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbm5lY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGl2YXRlKGRlc2lyZWRDaGFpbklkID09PSAtMSA/IHVuZGVmaW5lZCA6IGdldEFkZENoYWluUGFyYW1ldGVycyhkZXNpcmVkQ2hhaW5JZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBzZXRFcnJvcih1bmRlZmluZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHNldEVycm9yKVxuICAgICAgICAgIH1cbiAgICAgICAgICBkaXNhYmxlZD17aXNBY3RpdmF0aW5nfVxuICAgICAgICA+XG4gICAgICAgICAgQ29ubmVjdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5ldHdvcmsiLCJXYWxsZXRDb25uZWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsIkNIQUlOUyIsImdldEFkZENoYWluUGFyYW1ldGVycyIsIlVSTFMiLCJDaGFpblNlbGVjdCIsImNoYWluSWQiLCJzd2l0Y2hDaGFpbiIsImRpc3BsYXlEZWZhdWx0IiwiY2hhaW5JZHMiLCJzZWxlY3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsInVuZGVmaW5lZCIsIm9wdGlvbiIsIm1hcCIsIm5hbWUiLCJDb25uZWN0V2l0aFNlbGVjdCIsImNvbm5lY3RvciIsImlzQWN0aXZhdGluZyIsImlzQWN0aXZlIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzTmV0d29yayIsIk9iamVjdCIsImtleXMiLCJkZXNpcmVkQ2hhaW5JZCIsInNldERlc2lyZWRDaGFpbklkIiwiYWN0aXZhdGUiLCJ0aGVuIiwiY2F0Y2giLCJvbkNsaWNrIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkJvdHRvbSIsImJ1dHRvbiIsImRlYWN0aXZhdGUiLCJyZXNldFN0YXRlIiwiR25vc2lzU2FmZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ConnectWithSelect.tsx\n"));

/***/ })

});