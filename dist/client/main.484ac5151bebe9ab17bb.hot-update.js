webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/MetaData/MetaData.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/MetaData/MetaData.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MetaData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar unixToTimeAgo_1 = __webpack_require__(/*! ../../../../utils/js/unixToTimeAgo */ \"./src/utils/js/unixToTimeAgo.ts\");\r\nvar metadata_css_1 = __importDefault(__webpack_require__(/*! ./metadata.css */ \"./src/shared/CardsList/Card/MetaData/metadata.css\"));\r\nfunction MetaData(_a) {\r\n    var username = _a.username, created = _a.created;\r\n    return (react_1.default.createElement(\"div\", { className: metadata_css_1.default.metaData },\r\n        react_1.default.createElement(\"div\", { className: metadata_css_1.default.userLink },\r\n            react_1.default.createElement(\"img\", { className: metadata_css_1.default.avatar, src: \"http\", alt: \"avatar\" }),\r\n            react_1.default.createElement(\"a\", { href: \"#user-url\", className: metadata_css_1.default.userName }, username)),\r\n        react_1.default.createElement(\"span\", { className: metadata_css_1.default.createdAt },\r\n            react_1.default.createElement(\"span\", { className: metadata_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\\u00A0\"),\r\n            unixToTimeAgo_1.unixToTimeAgo(created))));\r\n}\r\nexports.MetaData = MetaData;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/MetaData/MetaData.tsx?");

/***/ }),

/***/ "./src/utils/js/unixToTimeAgo.ts":
/*!***************************************!*\
  !*** ./src/utils/js/unixToTimeAgo.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.unixToTimeAgo = void 0;\r\nfunction unixToTimeAgo(unix) {\r\n    var date = new Date(unix * 1000);\r\n    return date.toUTCString();\r\n}\r\nexports.unixToTimeAgo = unixToTimeAgo;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/unixToTimeAgo.ts?");

/***/ })

})