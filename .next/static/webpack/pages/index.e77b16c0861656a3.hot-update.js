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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConnectWithSelect\": function() { return /* binding */ ConnectWithSelect; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_instanceof.mjs */ \"./node_modules/@swc/helpers/src/_instanceof.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/network */ \"./node_modules/@web3-react/network/dist/index.js\");\n/* harmony import */ var _web3_react_network__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_network__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/walletconnect */ \"./node_modules/@web3-react/walletconnect/dist/index.js\");\n/* harmony import */ var _web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chains */ \"./chains.ts\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ConnectWithSelect(param) {\n    var connector = param.connector, chainId = param.chainId, isActivating = param.isActivating, isActive = param.isActive, error = param.error, setError = param.setError;\n    _s();\n    var isNetwork = (0,_swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(connector, _web3_react_network__WEBPACK_IMPORTED_MODULE_1__.Network);\n    var displayDefault = !isNetwork;\n    var chainIds = (isNetwork ? Object.keys(_chains__WEBPACK_IMPORTED_MODULE_4__.URLS) : Object.keys(_chains__WEBPACK_IMPORTED_MODULE_4__.CHAINS)).map(function(chainId) {\n        return Number(chainId);\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(isNetwork ? 1 : -1), desiredChainId = ref[0], setDesiredChainId = ref[1];\n    var onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function() {\n        setError(undefined);\n        if (connector) {\n            connector.activate().then(function() {\n                return setError(undefined);\n            }).catch(setError);\n        } else if ((0,_swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(connector, _web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_2__.WalletConnect) || (0,_swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(connector, _web3_react_network__WEBPACK_IMPORTED_MODULE_1__.Network)) {\n            connector.activate(desiredChainId === -1 ? undefined : desiredChainId).then(function() {\n                return setError(undefined);\n            }).catch(setError);\n        } else {\n            connector.activate(desiredChainId === -1 ? undefined : (0,_chains__WEBPACK_IMPORTED_MODULE_4__.getAddChainParameters)(desiredChainId)).then(function() {\n                return setError(undefined);\n            }).catch(setError);\n        }\n    }, [\n        connector,\n        desiredChainId,\n        setError\n    ]);\n    if (isActive) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                flexDirection: \"column\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    if (connector === null || connector === void 0 ? void 0 : connector.deactivate) {\n                        void connector.deactivate();\n                    } else {\n                        void connector.resetState();\n                    }\n                },\n                children: \"Disconnect\"\n            }, void 0, false, {\n                fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                flexDirection: \"column\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: isActivating ? undefined : function() {\n                    return connector ? void connector.activate().then(function() {\n                        return setError(undefined);\n                    }).catch(setError) : (0,_swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(connector, _web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_2__.WalletConnect) || (0,_swc_helpers_src_instanceof_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(connector, _web3_react_network__WEBPACK_IMPORTED_MODULE_1__.Network) ? connector.activate(desiredChainId === -1 ? undefined : desiredChainId).then(function() {\n                        return setError(undefined);\n                    }).catch(setError) : connector.activate(desiredChainId === -1 ? undefined : (0,_chains__WEBPACK_IMPORTED_MODULE_4__.getAddChainParameters)(desiredChainId)).then(function() {\n                        return setError(undefined);\n                    }).catch(setError);\n                },\n                disabled: isActivating,\n                children: \"Connect\"\n            }, void 0, false, {\n                fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/tiger/Documents/example-next/web3react-v8-example/components/ConnectWithSelect.tsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(ConnectWithSelect, \"jE1jGGb3P9rS7hOaCE+EFXDH+kw=\");\n_c = ConnectWithSelect;\nvar _c;\n$RefreshReg$(_c, \"ConnectWithSelect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvbm5lY3RXaXRoU2VsZWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUc2QztBQUNZO0FBQ1o7QUFDa0I7O0FBSXhELFNBQVNPLGlCQUFpQixDQUFDLEtBY2pDLEVBQUU7UUFiREMsU0FBUyxHQUR1QixLQWNqQyxDQWJDQSxTQUFTLEVBQ1RDLE9BQU8sR0FGeUIsS0FjakMsQ0FaQ0EsT0FBTyxFQUNQQyxZQUFZLEdBSG9CLEtBY2pDLENBWENBLFlBQVksRUFDWkMsUUFBUSxHQUp3QixLQWNqQyxDQVZDQSxRQUFRLEVBQ1JDLEtBQUssR0FMMkIsS0FjakMsQ0FUQ0EsS0FBSyxFQUNMQyxRQUFRLEdBTndCLEtBY2pDLENBUkNBLFFBQVE7O0lBU1IsSUFBTUMsU0FBUyxHQUFHTiwyRUFBcUJSLENBQXJCUSxTQUFTLEVBQVlSLHdEQUFPO0lBQzlDLElBQU1lLGNBQWMsR0FBRyxDQUFDRCxTQUFTO0lBQ2pDLElBQU1FLFFBQVEsR0FBRyxDQUFDRixTQUFTLEdBQUdHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDWix5Q0FBSSxDQUFDLEdBQUdXLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDZCwyQ0FBTSxDQUFDLENBQUMsQ0FBQ2UsR0FBRyxDQUFDLFNBQUNWLE9BQU87ZUFBS1csTUFBTSxDQUFDWCxPQUFPLENBQUM7S0FBQSxDQUFDO0lBRXhHLElBQTRDTixHQUFvQyxHQUFwQ0EsK0NBQVEsQ0FBU1csU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUF6RU8sY0FBYyxHQUF1QmxCLEdBQW9DLEdBQTNELEVBQUVtQixpQkFBaUIsR0FBSW5CLEdBQW9DLEdBQXhDO0lBRXhDLElBQU1vQixPQUFPLEdBQUdyQixrREFBVyxDQUFDLFdBQVk7UUFDdENXLFFBQVEsQ0FBQ1csU0FBUyxDQUFDO1FBQ25CLElBQUloQixTQUFTLEVBQUU7WUFDYkEsU0FBUyxDQUNOaUIsUUFBUSxFQUFFLENBQ1ZDLElBQUksQ0FBQzt1QkFB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ZWN0LnRzeD8zODYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29pbmJhc2VXYWxsZXQgfSBmcm9tICdAd2ViMy1yZWFjdC9jb2luYmFzZS13YWxsZXQnXG5pbXBvcnQgdHlwZSB7IFdlYjNSZWFjdEhvb2tzIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcbmltcG9ydCB7IE1ldGFNYXNrIH0gZnJvbSAnQHdlYjMtcmVhY3QvbWV0YW1hc2snXG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQHdlYjMtcmVhY3QvbmV0d29yaydcbmltcG9ydCB7IFdhbGxldENvbm5lY3QgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0J1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDSEFJTlMsIGdldEFkZENoYWluUGFyYW1ldGVycywgVVJMUyB9IGZyb20gJy4uL2NoYWlucydcbmltcG9ydCB7IG1ldGFNYXNrIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9tZXRhTWFzaydcblxuXG5leHBvcnQgZnVuY3Rpb24gQ29ubmVjdFdpdGhTZWxlY3Qoe1xuICBjb25uZWN0b3IsXG4gIGNoYWluSWQsXG4gIGlzQWN0aXZhdGluZyxcbiAgaXNBY3RpdmUsXG4gIGVycm9yLFxuICBzZXRFcnJvcixcbn06IHtcbiAgY29ubmVjdG9yOiBNZXRhTWFzayB8IFdhbGxldENvbm5lY3QgfCBDb2luYmFzZVdhbGxldCB8IE5ldHdvcmtcbiAgY2hhaW5JZDogUmV0dXJuVHlwZTxXZWIzUmVhY3RIb29rc1sndXNlQ2hhaW5JZCddPlxuICBpc0FjdGl2YXRpbmc6IFJldHVyblR5cGU8V2ViM1JlYWN0SG9va3NbJ3VzZUlzQWN0aXZhdGluZyddPlxuICBpc0FjdGl2ZTogUmV0dXJuVHlwZTxXZWIzUmVhY3RIb29rc1sndXNlSXNBY3RpdmUnXT5cbiAgZXJyb3I6IEVycm9yIHwgdW5kZWZpbmVkXG4gIHNldEVycm9yOiAoZXJyb3I6IEVycm9yIHwgdW5kZWZpbmVkKSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IGlzTmV0d29yayA9IGNvbm5lY3RvciBpbnN0YW5jZW9mIE5ldHdvcmtcbiAgY29uc3QgZGlzcGxheURlZmF1bHQgPSAhaXNOZXR3b3JrXG4gIGNvbnN0IGNoYWluSWRzID0gKGlzTmV0d29yayA/IE9iamVjdC5rZXlzKFVSTFMpIDogT2JqZWN0LmtleXMoQ0hBSU5TKSkubWFwKChjaGFpbklkKSA9PiBOdW1iZXIoY2hhaW5JZCkpXG5cbiAgY29uc3QgW2Rlc2lyZWRDaGFpbklkLCBzZXREZXNpcmVkQ2hhaW5JZF0gPSB1c2VTdGF0ZTxudW1iZXI+KGlzTmV0d29yayA/IDEgOiAtMSlcblxuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soKCk6IHZvaWQgPT4ge1xuICAgIHNldEVycm9yKHVuZGVmaW5lZClcbiAgICBpZiAoY29ubmVjdG9yKSB7XG4gICAgICBjb25uZWN0b3JcbiAgICAgICAgLmFjdGl2YXRlKClcbiAgICAgICAgLnRoZW4oKCkgPT4gc2V0RXJyb3IodW5kZWZpbmVkKSlcbiAgICAgICAgLmNhdGNoKHNldEVycm9yKVxuICAgIH0gZWxzZSBpZiAoY29ubmVjdG9yIGluc3RhbmNlb2YgV2FsbGV0Q29ubmVjdCB8fCBjb25uZWN0b3IgaW5zdGFuY2VvZiBOZXR3b3JrKSB7XG4gICAgICBjb25uZWN0b3JcbiAgICAgICAgLmFjdGl2YXRlKGRlc2lyZWRDaGFpbklkID09PSAtMSA/IHVuZGVmaW5lZCA6IGRlc2lyZWRDaGFpbklkKVxuICAgICAgICAudGhlbigoKSA9PiBzZXRFcnJvcih1bmRlZmluZWQpKVxuICAgICAgICAuY2F0Y2goc2V0RXJyb3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbm5lY3RvclxuICAgICAgICAuYWN0aXZhdGUoZGVzaXJlZENoYWluSWQgPT09IC0xID8gdW5kZWZpbmVkIDogZ2V0QWRkQ2hhaW5QYXJhbWV0ZXJzKGRlc2lyZWRDaGFpbklkKSlcbiAgICAgICAgLnRoZW4oKCkgPT4gc2V0RXJyb3IodW5kZWZpbmVkKSlcbiAgICAgICAgLmNhdGNoKHNldEVycm9yKVxuICAgIH1cbiAgfSwgW2Nvbm5lY3RvciwgZGVzaXJlZENoYWluSWQsIHNldEVycm9yXSlcblxuICBpZiAoaXNBY3RpdmUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29ubmVjdG9yPy5kZWFjdGl2YXRlKSB7XG4gICAgICAgICAgICAgIHZvaWQgY29ubmVjdG9yLmRlYWN0aXZhdGUoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdm9pZCBjb25uZWN0b3IucmVzZXRTdGF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIERpc2Nvbm5lY3RcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgaXNBY3RpdmF0aW5nXG4gICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgIDogKCkgPT5cbiAgICAgICAgICAgICAgICAgIGNvbm5lY3RvclxuICAgICAgICAgICAgICAgICAgICA/IHZvaWQgY29ubmVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWN0aXZhdGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2V0RXJyb3IodW5kZWZpbmVkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChzZXRFcnJvcilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25uZWN0b3IgaW5zdGFuY2VvZiBXYWxsZXRDb25uZWN0IHx8IGNvbm5lY3RvciBpbnN0YW5jZW9mIE5ldHdvcmtcbiAgICAgICAgICAgICAgICAgICAgPyBjb25uZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hY3RpdmF0ZShkZXNpcmVkQ2hhaW5JZCA9PT0gLTEgPyB1bmRlZmluZWQgOiBkZXNpcmVkQ2hhaW5JZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHNldEVycm9yKHVuZGVmaW5lZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goc2V0RXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIDogY29ubmVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWN0aXZhdGUoZGVzaXJlZENoYWluSWQgPT09IC0xID8gdW5kZWZpbmVkIDogZ2V0QWRkQ2hhaW5QYXJhbWV0ZXJzKGRlc2lyZWRDaGFpbklkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHNldEVycm9yKHVuZGVmaW5lZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goc2V0RXJyb3IpXG4gICAgICAgICAgfVxuICAgICAgICAgIGRpc2FibGVkPXtpc0FjdGl2YXRpbmd9XG4gICAgICAgID5cbiAgICAgICAgICBDb25uZWN0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV0d29yayIsIldhbGxldENvbm5lY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiQ0hBSU5TIiwiZ2V0QWRkQ2hhaW5QYXJhbWV0ZXJzIiwiVVJMUyIsIkNvbm5lY3RXaXRoU2VsZWN0IiwiY29ubmVjdG9yIiwiY2hhaW5JZCIsImlzQWN0aXZhdGluZyIsImlzQWN0aXZlIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzTmV0d29yayIsImRpc3BsYXlEZWZhdWx0IiwiY2hhaW5JZHMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiTnVtYmVyIiwiZGVzaXJlZENoYWluSWQiLCJzZXREZXNpcmVkQ2hhaW5JZCIsIm9uQ2xpY2siLCJ1bmRlZmluZWQiLCJhY3RpdmF0ZSIsInRoZW4iLCJjYXRjaCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJidXR0b24iLCJkZWFjdGl2YXRlIiwicmVzZXRTdGF0ZSIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ConnectWithSelect.tsx\n"));

/***/ })

});