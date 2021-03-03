webpackHotUpdate("main",{

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcon = void 0;\r\nvar icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\r\nvar EIcon;\r\n(function (EIcon) {\r\n    EIcon[\"comment\"] = \"commentIcon\";\r\n    EIcon[\"share\"] = \"shareIcon\";\r\n    EIcon[\"block\"] = \"blockIcon\";\r\n    EIcon[\"save\"] = \"saveIcon\";\r\n    EIcon[\"warning\"] = \"<path d=\\\"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\\\" fill=\\\"#999999\\\"/>\";\r\n})(EIcon = exports.EIcon || (exports.EIcon = {}));\r\nvar iconsList = {\r\n    blockIcon: icons_1.BlockIcon,\r\n};\r\nfunction Icon(_a) {\r\n    var name = _a.name, size = _a.size;\r\n    var As = iconsList[name];\r\n}\r\nexports.Icon = Icon;\r\nreturn (react_1.default.createElement(\"div\", null, \"asd\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ })

})