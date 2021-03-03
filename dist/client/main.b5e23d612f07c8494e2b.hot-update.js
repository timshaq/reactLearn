webpackHotUpdate("main",{

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar EIcon;\r\n(function (EIcon) {\r\n    EIcon[\"comment\"] = \"commentIcon\";\r\n    EIcon[\"share\"] = \"shareIcon\";\r\n    EIcon[\"block\"] = \"blockIcon\";\r\n    EIcon[\"save\"] = \"saveIcon\";\r\n    EIcon[\"warning\"] = \"warningIcon\";\r\n})(EIcon = exports.EIcon || (exports.EIcon = {}));\r\nvar blockIcon = react_1.default.createElement(\"svg\", { width: \"12\", height: \"12\", viewBox: \"0 0 12 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n    react_1.default.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"#999999\" }));\r\nvar iconsList = {\r\n    block: blockIcon,\r\n};\r\nfunction Icon(_a) {\r\n    var name = _a.name, size = _a.size;\r\n    return (iconsList[name]);\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

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