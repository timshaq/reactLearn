webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItemsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar menuitemslist_css_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.css */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css\"));\r\nvar icons_1 = __webpack_require__(/*! ../../../../icons */ \"./src/shared/icons/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar handleClick = function (id) {\r\n    console.log('postId = ', id);\r\n};\r\nfunction MenuItemsList(_a) {\r\n    var postId = _a.postId;\r\n    var sizes = {\r\n        size: 12,\r\n        mSize: 12,\r\n        tSize: 12,\r\n        dSize: 12,\r\n    };\r\n    var list = [\r\n        { text: \"Комментарии\", Icon: 'CommentIcon', mobile: false },\r\n        { text: \"Поделиться\", Icon: 'ShareIcon', mobile: false },\r\n        { text: \"Скрыть\", Icon: 'BlockIcon', mobile: true },\r\n        { text: \"Сохранить\", Icon: 'SaveIcon', mobile: false },\r\n        { text: \"Пожаловаться\", Icon: 'WarningIcon', mobile: false },\r\n    ];\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_css_1.default.menuItemsList },\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, onClick: function () { return handleClick(postId); } },\r\n            react_1.default.createElement(icons_1.BlockIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.gray99 }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, onClick: function () { return handleClick(postId); } },\r\n            react_1.default.createElement(icons_1.WarningIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.gray99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))));\r\n}\r\nexports.MenuItemsList = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts?");

/***/ })

})