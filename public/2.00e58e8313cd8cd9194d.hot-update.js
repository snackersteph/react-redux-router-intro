webpackHotUpdate(2,{

/***/ "./js/Details.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(\"./node_modules/react-redux/es/index.js\");\nthrow new Error(\"Cannot find module \\\"./asyncActions\\\"\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(\"./js/Header.jsx\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Spinner__ = __webpack_require__(\"./js/Spinner.jsx\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\nvar Details = function (_Component) {\n  _inherits(Details, _Component);\n\n  function Details() {\n    _classCallCheck(this, Details);\n\n    return _possibleConstructorReturn(this, _Component.apply(this, arguments));\n  }\n\n  Details.prototype.componentDidMount = function componentDidMount() {\n    if (!this.props.rating) {\n      this.props.getAPIData();\n    }\n  };\n\n  Details.prototype.render = function render() {\n    var _props$show = this.props.show,\n        title = _props$show.title,\n        description = _props$show.description,\n        year = _props$show.year,\n        poster = _props$show.poster,\n        trailer = _props$show.trailer;\n\n    var ratingComponent = void 0;\n    if (this.props.rating) {\n      ratingComponent = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'h3',\n        null,\n        this.props.rating\n      );\n    } else {\n      ratingComponent = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Spinner__[\"a\" /* default */], null);\n    }\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'div',\n      { className: 'details' },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__[\"a\" /* default */], null),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'section',\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          'h1',\n          null,\n          title\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          'h2',\n          null,\n          '(',\n          year,\n          ')'\n        ),\n        ratingComponent,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/public/img/posters/' + poster, alt: 'Poster for ' + title }),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          'p',\n          null,\n          description\n        )\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'div',\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe', {\n          src: 'https://www.youtube-nocookie.com/embed/' + trailer + '?rel=0&amp;controls=0&amp;showinfo=0',\n          frameBorder: '0',\n          allowFullScreen: true,\n          title: 'Trailer for ' + title\n        })\n      )\n    );\n  };\n\n  return Details;\n}(__WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  var apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};\n  return {\n    rating: apiData.rating\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n  return {\n    getAPIData: function getAPIData() {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__asyncActions__[\"getAPIDetails\"])(ownProps.show.imdbID));\n    }\n  };\n};\n\nvar _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"b\" /* connect */])(mapStateToProps, mapDispatchToProps)(Details);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(Details, 'Details', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/Details.jsx');\n\n  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/Details.jsx');\n\n  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/Details.jsx');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/Details.jsx');\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9EZXRhaWxzLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL0RldGFpbHMuanN4Pzk4NDQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldEFQSURldGFpbHMgfSBmcm9tICcuL2FzeW5jQWN0aW9ucyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5cbnZhciBEZXRhaWxzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERldGFpbHMsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERldGFpbHMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERldGFpbHMpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBEZXRhaWxzLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5yYXRpbmcpIHtcbiAgICAgIHRoaXMucHJvcHMuZ2V0QVBJRGF0YSgpO1xuICAgIH1cbiAgfTtcblxuICBEZXRhaWxzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyRzaG93ID0gdGhpcy5wcm9wcy5zaG93LFxuICAgICAgICB0aXRsZSA9IF9wcm9wcyRzaG93LnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IF9wcm9wcyRzaG93LmRlc2NyaXB0aW9uLFxuICAgICAgICB5ZWFyID0gX3Byb3BzJHNob3cueWVhcixcbiAgICAgICAgcG9zdGVyID0gX3Byb3BzJHNob3cucG9zdGVyLFxuICAgICAgICB0cmFpbGVyID0gX3Byb3BzJHNob3cudHJhaWxlcjtcblxuICAgIHZhciByYXRpbmdDb21wb25lbnQgPSB2b2lkIDA7XG4gICAgaWYgKHRoaXMucHJvcHMucmF0aW5nKSB7XG4gICAgICByYXRpbmdDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnaDMnLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLnByb3BzLnJhdGluZ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmF0aW5nQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnZGV0YWlscycgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzZWN0aW9uJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnaDEnLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnaDInLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgJygnLFxuICAgICAgICAgIHllYXIsXG4gICAgICAgICAgJyknXG4gICAgICAgICksXG4gICAgICAgIHJhdGluZ0NvbXBvbmVudCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6ICcvcHVibGljL2ltZy9wb3N0ZXJzLycgKyBwb3N0ZXIsIGFsdDogJ1Bvc3RlciBmb3IgJyArIHRpdGxlIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdwJyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaWZyYW1lJywge1xuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkLycgKyB0cmFpbGVyICsgJz9yZWw9MCZhbXA7Y29udHJvbHM9MCZhbXA7c2hvd2luZm89MCcsXG4gICAgICAgICAgZnJhbWVCb3JkZXI6ICcwJyxcbiAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW46IHRydWUsXG4gICAgICAgICAgdGl0bGU6ICdUcmFpbGVyIGZvciAnICsgdGl0bGVcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBEZXRhaWxzO1xufShDb21wb25lbnQpO1xuXG52YXIgbWFwU3RhdGVUb1Byb3BzID0gZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICB2YXIgYXBpRGF0YSA9IHN0YXRlLmFwaURhdGFbb3duUHJvcHMuc2hvdy5pbWRiSURdID8gc3RhdGUuYXBpRGF0YVtvd25Qcm9wcy5zaG93LmltZGJJRF0gOiB7fTtcbiAgcmV0dXJuIHtcbiAgICByYXRpbmc6IGFwaURhdGEucmF0aW5nXG4gIH07XG59O1xuXG52YXIgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIGdldEFQSURhdGE6IGZ1bmN0aW9uIGdldEFQSURhdGEoKSB7XG4gICAgICBkaXNwYXRjaChnZXRBUElEZXRhaWxzKG93blByb3BzLnNob3cuaW1kYklEKSk7XG4gICAgfVxuICB9O1xufTtcblxudmFyIF9kZWZhdWx0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGV0YWlscyk7XG5cbmV4cG9ydCBkZWZhdWx0IF9kZWZhdWx0O1xuO1xuXG52YXIgX3RlbXAgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgX19SRUFDVF9IT1RfTE9BREVSX18gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoRGV0YWlscywgJ0RldGFpbHMnLCAnL1VzZXJzL3N0ZXBoYW5pZXdvbmcvRG9jdW1lbnRzL1JlcG9zL3R1dG9yaWFscy9jb21wbGV0ZS1pbnRyby10by1yZWFjdC9qcy9EZXRhaWxzLmpzeCcpO1xuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKG1hcFN0YXRlVG9Qcm9wcywgJ21hcFN0YXRlVG9Qcm9wcycsICcvVXNlcnMvc3RlcGhhbmlld29uZy9Eb2N1bWVudHMvUmVwb3MvdHV0b3JpYWxzL2NvbXBsZXRlLWludHJvLXRvLXJlYWN0L2pzL0RldGFpbHMuanN4Jyk7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJywgJy9Vc2Vycy9zdGVwaGFuaWV3b25nL0RvY3VtZW50cy9SZXBvcy90dXRvcmlhbHMvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvRGV0YWlscy5qc3gnKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihfZGVmYXVsdCwgJ2RlZmF1bHQnLCAnL1VzZXJzL3N0ZXBoYW5pZXdvbmcvRG9jdW1lbnRzL1JlcG9zL3R1dG9yaWFscy9jb21wbGV0ZS1pbnRyby10by1yZWFjdC9qcy9EZXRhaWxzLmpzeCcpO1xufSgpO1xuXG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9EZXRhaWxzLmpzeFxuLy8gbW9kdWxlIGlkID0gLi9qcy9EZXRhaWxzLmpzeFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ "./js/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(\"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(\"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators__ = __webpack_require__(\"./js/actionCreators.js\");\n\n\n\n\n\nvar Header = function Header(props) {\n  var utilSpace = void 0;\n  if (props.showSearch) {\n    utilSpace = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { onChange: props.handleSearchTermChange, value: props.searchTerm, type: 'text', placeholder: 'Search' });\n  } else {\n    utilSpace = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'h2',\n      null,\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__[\"d\" /* Link */],\n        { to: '/search' },\n        'Back'\n      )\n    );\n  }\n  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n    'header',\n    null,\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'h1',\n      null,\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__[\"d\" /* Link */],\n        { to: '/' },\n        'svideo'\n      )\n    ),\n    utilSpace\n  );\n};\n\nHeader.defaultProps = {\n  showSearch: false\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return { searchTerm: state.searchTerm };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    handleSearchTermChange: function handleSearchTermChange(event) {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actionCreators__[\"a\" /* setSearchTerm */])(event.target.value));\n    }\n  };\n};\n\nvar _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"b\" /* connect */])(mapStateToProps, mapDispatchToProps)(Header);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(Header, 'Header', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/Header.jsx');\n\n  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/Header.jsx');\n\n  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/Header.jsx');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/Header.jsx');\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9IZWFkZXIuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvSGVhZGVyLmpzeD9lNjY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgc2V0U2VhcmNoVGVybSB9IGZyb20gJy4vYWN0aW9uQ3JlYXRvcnMnO1xuXG52YXIgSGVhZGVyID0gZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIHZhciB1dGlsU3BhY2UgPSB2b2lkIDA7XG4gIGlmIChwcm9wcy5zaG93U2VhcmNoKSB7XG4gICAgdXRpbFNwYWNlID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IG9uQ2hhbmdlOiBwcm9wcy5oYW5kbGVTZWFyY2hUZXJtQ2hhbmdlLCB2YWx1ZTogcHJvcHMuc2VhcmNoVGVybSwgdHlwZTogJ3RleHQnLCBwbGFjZWhvbGRlcjogJ1NlYXJjaCcgfSk7XG4gIH0gZWxzZSB7XG4gICAgdXRpbFNwYWNlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdoMicsXG4gICAgICBudWxsLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTGluayxcbiAgICAgICAgeyB0bzogJy9zZWFyY2gnIH0sXG4gICAgICAgICdCYWNrJ1xuICAgICAgKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2hlYWRlcicsXG4gICAgbnVsbCxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2gxJyxcbiAgICAgIG51bGwsXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBMaW5rLFxuICAgICAgICB7IHRvOiAnLycgfSxcbiAgICAgICAgJ3N2aWRlbydcbiAgICAgIClcbiAgICApLFxuICAgIHV0aWxTcGFjZVxuICApO1xufTtcblxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvd1NlYXJjaDogZmFsc2Vcbn07XG5cbnZhciBtYXBTdGF0ZVRvUHJvcHMgPSBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHsgc2VhcmNoVGVybTogc3RhdGUuc2VhcmNoVGVybSB9O1xufTtcbnZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVTZWFyY2hUZXJtQ2hhbmdlOiBmdW5jdGlvbiBoYW5kbGVTZWFyY2hUZXJtQ2hhbmdlKGV2ZW50KSB7XG4gICAgICBkaXNwYXRjaChzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhlYWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IF9kZWZhdWx0O1xuO1xuXG52YXIgX3RlbXAgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgX19SRUFDVF9IT1RfTE9BREVSX18gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoSGVhZGVyLCAnSGVhZGVyJywgJy9Vc2Vycy9zdGVwaGFuaWV3b25nL0RvY3VtZW50cy9SZXBvcy90dXRvcmlhbHMvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvSGVhZGVyLmpzeCcpO1xuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKG1hcFN0YXRlVG9Qcm9wcywgJ21hcFN0YXRlVG9Qcm9wcycsICcvVXNlcnMvc3RlcGhhbmlld29uZy9Eb2N1bWVudHMvUmVwb3MvdHV0b3JpYWxzL2NvbXBsZXRlLWludHJvLXRvLXJlYWN0L2pzL0hlYWRlci5qc3gnKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihtYXBEaXNwYXRjaFRvUHJvcHMsICdtYXBEaXNwYXRjaFRvUHJvcHMnLCAnL1VzZXJzL3N0ZXBoYW5pZXdvbmcvRG9jdW1lbnRzL1JlcG9zL3R1dG9yaWFscy9jb21wbGV0ZS1pbnRyby10by1yZWFjdC9qcy9IZWFkZXIuanN4Jyk7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoX2RlZmF1bHQsICdkZWZhdWx0JywgJy9Vc2Vycy9zdGVwaGFuaWV3b25nL0RvY3VtZW50cy9SZXBvcy90dXRvcmlhbHMvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvSGVhZGVyLmpzeCcpO1xufSgpO1xuXG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9IZWFkZXIuanN4XG4vLyBtb2R1bGUgaWQgPSAuL2pzL0hlYWRlci5qc3hcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ "./js/actionCreators.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = setSearchTerm;\n/* unused harmony export addAPIData */\n/* unused harmony export getAPIDetails */\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(\"./node_modules/axios/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(\"./js/actions.js\");\n\n\n\nfunction setSearchTerm(searchTerm) {\n  return { type: __WEBPACK_IMPORTED_MODULE_1__actions__[\"a\" /* SET_SEARCH_TERM */], payload: searchTerm };\n}\n\n// a thunk is essentially a function that returns a value that is determined at runtime\n// a way to handle async functions\n\nfunction addAPIData(apiData) {\n  return { type: __WEBPACK_IMPORTED_MODULE_1__actions__[\"b\" /* ADD_API_DATA */], payload: apiData };\n}\n\nfunction getAPIDetails(imdbID) {\n  return function (dispatch) {\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://localhost:3000/' + imdbID).then(function (response) {\n      dispatch(addAPIData(response.data));\n    }).catch(function (error) {\n      console.log('axios error', error); // eslint-disable-line no-console\n    });\n  };\n}\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(setSearchTerm, 'setSearchTerm', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/actionCreators.js');\n\n  __REACT_HOT_LOADER__.register(addAPIData, 'addAPIData', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/actionCreators.js');\n\n  __REACT_HOT_LOADER__.register(getAPIDetails, 'getAPIDetails', '/Users/stephaniewong/Documents/Repos/tutorials/complete-intro-to-react/js/actionCreators.js');\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hY3Rpb25DcmVhdG9ycy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FjdGlvbkNyZWF0b3JzLmpzPzJiYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFNFVF9TRUFSQ0hfVEVSTSwgQUREX0FQSV9EQVRBIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlYXJjaFRlcm0oc2VhcmNoVGVybSkge1xuICByZXR1cm4geyB0eXBlOiBTRVRfU0VBUkNIX1RFUk0sIHBheWxvYWQ6IHNlYXJjaFRlcm0gfTtcbn1cblxuLy8gYSB0aHVuayBpcyBlc3NlbnRpYWxseSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHZhbHVlIHRoYXQgaXMgZGV0ZXJtaW5lZCBhdCBydW50aW1lXG4vLyBhIHdheSB0byBoYW5kbGUgYXN5bmMgZnVuY3Rpb25zXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBUElEYXRhKGFwaURhdGEpIHtcbiAgcmV0dXJuIHsgdHlwZTogQUREX0FQSV9EQVRBLCBwYXlsb2FkOiBhcGlEYXRhIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBUElEZXRhaWxzKGltZGJJRCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyArIGltZGJJRCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGRpc3BhdGNoKGFkZEFQSURhdGEocmVzcG9uc2UuZGF0YSkpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ2F4aW9zIGVycm9yJywgZXJyb3IpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9KTtcbiAgfTtcbn1cbjtcblxudmFyIF90ZW1wID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIF9fUkVBQ1RfSE9UX0xPQURFUl9fID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKHNldFNlYXJjaFRlcm0sICdzZXRTZWFyY2hUZXJtJywgJy9Vc2Vycy9zdGVwaGFuaWV3b25nL0RvY3VtZW50cy9SZXBvcy90dXRvcmlhbHMvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvYWN0aW9uQ3JlYXRvcnMuanMnKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihhZGRBUElEYXRhLCAnYWRkQVBJRGF0YScsICcvVXNlcnMvc3RlcGhhbmlld29uZy9Eb2N1bWVudHMvUmVwb3MvdHV0b3JpYWxzL2NvbXBsZXRlLWludHJvLXRvLXJlYWN0L2pzL2FjdGlvbkNyZWF0b3JzLmpzJyk7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoZ2V0QVBJRGV0YWlscywgJ2dldEFQSURldGFpbHMnLCAnL1VzZXJzL3N0ZXBoYW5pZXdvbmcvRG9jdW1lbnRzL1JlcG9zL3R1dG9yaWFscy9jb21wbGV0ZS1pbnRyby10by1yZWFjdC9qcy9hY3Rpb25DcmVhdG9ycy5qcycpO1xufSgpO1xuXG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hY3Rpb25DcmVhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gLi9qcy9hY3Rpb25DcmVhdG9ycy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})