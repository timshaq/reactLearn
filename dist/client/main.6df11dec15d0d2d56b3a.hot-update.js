webpackHotUpdate("main",{

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar ReactDom = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar App_1 = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.tsx\");\r\nwindow.addEventListener('load', function () {\r\n    ReactDom.hydrate(React.createElement(App_1.App, null), document.getElementById('react_root'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/shared/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __webpack_require__(/*! ./Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ./Icon */ \"./src/shared/Icon/index.ts\");\r\nfunction AppComponent() {\r\n    return (React.createElement(Layout_1.Layout, null,\r\n        React.createElement(Header_1.Header, null),\r\n        React.createElement(Content_1.Content, null,\r\n            React.createElement(\"br\", null),\r\n            \"test Icon component: name={EIcon.save} size={30}\",\r\n            React.createElement(\"br\", null),\r\n            \"result: \",\r\n            React.createElement(Icon_1.Icon, { name: Icon_1.EIcon.save, size: 30 }),\r\n            React.createElement(\"br\", null),\r\n            React.createElement(CardsList_1.CardsList, null))));\r\n}\r\nexports.App = root_1.hot(AppComponent);\r\n\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ })

})