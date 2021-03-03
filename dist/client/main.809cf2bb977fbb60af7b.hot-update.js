webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar merge_1 = __webpack_require__(/*! ../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar handleItemClick = function (id) { return console.log('click to ', id); };\r\nvar LIST = [\r\n    { text: 'Скрыть' },\r\n    { text: 'Пожаловаться' },\r\n    { text: 'Закрыть' },\r\n].map(generateRandomIndex_1.generateId)\r\n    .map(merge_1.merge({\r\n    className: menu_css_1.default.menuItem,\r\n}));\r\nvar BUTTON = react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\r\n    react_1.default.createElement(icons_1.MenuIcon, null));\r\nfunction Menu() {\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(Dropdown_1.Dropdown, { isOpen: false, onOpen: function () { return console.log('list is open'); }, onClose: function () { return console.log('list is close'); }, button: BUTTON },\r\n                react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown },\r\n                    \"MenuItems\",\r\n                    react_1.default.createElement(\"button\", null,\r\n                        react_1.default.createElement(Text_1.Text, null, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ })

})