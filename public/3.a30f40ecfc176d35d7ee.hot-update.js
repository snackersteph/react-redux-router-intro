webpackHotUpdate(3,{

/***/ "./js/actionCreators.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = setSearchTerm;\n/* unused harmony export addAPIData */\n/* unused harmony export getAPIDetails */\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(\"./js/actions.js\");\n\n\nfunction setSearchTerm(searchTerm) {\n  return { type: __WEBPACK_IMPORTED_MODULE_0__actions__[\"a\" /* SET_SEARCH_TERM */], payload: searchTerm };\n}\n\n// a thunk is essentially a function that returns a value that is determined at runtime\n// a way to handle async functions\n\nfunction addAPIData(apiData) {\n  return { type: __WEBPACK_IMPORTED_MODULE_0__actions__[\"b\" /* ADD_API_DATA */], payload: apiData };\n}\n\nfunction getAPIDetails(imdbID) {\n  return function (dispatch) {\n    axios.get('http://localhost:3000/' + imdbID).then(function (response) {\n      dispatch(addAPIData(response.data));\n    }).catch(function (error) {\n      console.log('axios error', error); // eslint-disable-line no-console\n    });\n  };\n}\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(setSearchTerm, 'setSearchTerm', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/actionCreators.js');\n\n  __REACT_HOT_LOADER__.register(addAPIData, 'addAPIData', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/actionCreators.js');\n\n  __REACT_HOT_LOADER__.register(getAPIDetails, 'getAPIDetails', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/actionCreators.js');\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hY3Rpb25DcmVhdG9ycy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FjdGlvbkNyZWF0b3JzLmpzPzJiYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VUX1NFQVJDSF9URVJNLCBBRERfQVBJX0RBVEEgfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VhcmNoVGVybShzZWFyY2hUZXJtKSB7XG4gIHJldHVybiB7IHR5cGU6IFNFVF9TRUFSQ0hfVEVSTSwgcGF5bG9hZDogc2VhcmNoVGVybSB9O1xufVxuXG4vLyBhIHRodW5rIGlzIGVzc2VudGlhbGx5IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgdmFsdWUgdGhhdCBpcyBkZXRlcm1pbmVkIGF0IHJ1bnRpbWVcbi8vIGEgd2F5IHRvIGhhbmRsZSBhc3luYyBmdW5jdGlvbnNcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFQSURhdGEoYXBpRGF0YSkge1xuICByZXR1cm4geyB0eXBlOiBBRERfQVBJX0RBVEEsIHBheWxvYWQ6IGFwaURhdGEgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFQSURldGFpbHMoaW1kYklEKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nICsgaW1kYklEKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgZGlzcGF0Y2goYWRkQVBJRGF0YShyZXNwb25zZS5kYXRhKSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnYXhpb3MgZXJyb3InLCBlcnJvcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH0pO1xuICB9O1xufVxuO1xuXG52YXIgX3RlbXAgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgX19SRUFDVF9IT1RfTE9BREVSX18gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoc2V0U2VhcmNoVGVybSwgJ3NldFNlYXJjaFRlcm0nLCAnL1VzZXJzL3N0ZXBoYW5pZXdvbmcvRG9jdW1lbnRzL1JlcG9zL3R1dG9yaWFscy9jb21wbGV0ZS1pbnRyby10by1yZWFjdC9qcy9hY3Rpb25DcmVhdG9ycy5qcycpO1xuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKGFkZEFQSURhdGEsICdhZGRBUElEYXRhJywgJy9Vc2Vycy9zdGVwaGFuaWV3b25nL0RvY3VtZW50cy9SZXBvcy90dXRvcmlhbHMvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvYWN0aW9uQ3JlYXRvcnMuanMnKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihnZXRBUElEZXRhaWxzLCAnZ2V0QVBJRGV0YWlscycsICcvVXNlcnMvc3RlcGhhbmlld29uZy9Eb2N1bWVudHMvUmVwb3MvdHV0b3JpYWxzL2NvbXBsZXRlLWludHJvLXRvLXJlYWN0L2pzL2FjdGlvbkNyZWF0b3JzLmpzJyk7XG59KCk7XG5cbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FjdGlvbkNyZWF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL2pzL2FjdGlvbkNyZWF0b3JzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/btoa.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
false

})