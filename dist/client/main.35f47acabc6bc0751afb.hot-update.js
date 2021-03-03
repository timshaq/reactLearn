webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar MenuItemsList_1 = __webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts\");\r\nvar BUTTON = react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\r\n    react_1.default.createElement(icons_1.MenuIcon, null));\r\nfunction Menu() {\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(Dropdown_1.Dropdown, { isOpen: false, onOpen: function () { return console.log('list is open'); }, onClose: function () { return console.log('list is close'); }, button: BUTTON },\r\n                react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown },\r\n                    react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: generateRandomIndex_1.generateRandomString() }),\r\n                    react_1.default.createElement(\"button\", { className: menu_css_1.default.closeButton },\r\n                        react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: Text_1.EColor.gray66 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItemsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar menuitemslist_css_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.css */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar handleClick = function (id) {\r\n    console.log('postId = ', id);\r\n};\r\nvar list = [\r\n    { text: \"Комментарии\", Icon: 'CommentIcon', mobile: false },\r\n    { text: \"Поделиться\", Icon: 'ShareIcon', mobile: false },\r\n    { text: \"Скрыть\", Icon: 'BlockIcon', mobile: true },\r\n    { text: \"Сохранить\", Icon: 'SaveIcon', mobile: false },\r\n    { text: \"Пожаловаться\", Icon: 'WarningIcon', mobile: true },\r\n];\r\nfunction MenuItemsList(_a) {\r\n    var postId = _a.postId;\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_css_1.default.menuItemsList }, list.map(function (_a) {\r\n        var text = _a.text, Icon = _a.Icon, mobile = _a.mobile;\r\n        return (react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem, onClick: function () { return handleClick(postId); } },\r\n            react_1.default.createElement(Icon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, mobileSize: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColor.gray99 }, text)));\r\n    })));\r\n}\r\nexports.MenuItemsList = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/icons/CommentIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icons/CommentIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction CommentIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n}\r\nexports.CommentIcon = CommentIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/CommentIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction SaveIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.SaveIcon = SaveIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction ShareIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.ShareIcon = ShareIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/icons/BlockIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/icons/WarningIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentIcon */ \"./src/shared/icons/CommentIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/icons/ShareIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/icons/SaveIcon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/index.ts?");

/***/ })

})