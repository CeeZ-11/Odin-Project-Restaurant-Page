/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   About: () => (/* binding */ About)\n/* harmony export */ });\nclass About {\r\n  constructor() {}\r\n\r\n  createContent() {\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\";\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"About Us\";\r\n\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent =\r\n      \"Learn more about Le Kalan An Di Re Sa Negros and our story...\";\r\n\r\n    content.appendChild(heading);\r\n    content.appendChild(paragraph);\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LmpzPzU4YmUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFib3V0IHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGNyZWF0ZUNvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiO1xyXG5cclxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID1cclxuICAgICAgXCJMZWFybiBtb3JlIGFib3V0IExlIEthbGFuIEFuIERpIFJlIFNhIE5lZ3JvcyBhbmQgb3VyIHN0b3J5Li4uXCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/about.js\n");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _img_restau_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/restau.jpg */ \"./src/img/restau.jpg\");\n\r\n\r\nclass Home {\r\n  constructor() {}\r\n\r\n  createContent() {\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\";\r\n\r\n    // Create heading element\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent =\r\n      \"Experience Culinary Bliss at Le Kalan An Di Re Sa Negros – Where Every Bite Tells a Story\";\r\n\r\n    // Create paragraph element\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent =\r\n      \"  Step into a world of exquisite flavors and exceptional dining at Le Kalan An Di Re Sa Negros. Nestled in the heart of Bacolod City, ourrestaurant is a haven for food lovers who crave the perfect blend ofgourmet cuisine, vibrant ambiance, and impeccable service. From thefreshest ingredients to expertly crafted dishes, each plate is acelebration of taste and creativity. Whether you're enjoying a romanticdinner for two or gathering with friends, Le Kalan An Di Re Sa Negrospromises an unforgettable dining experience that will leave you comingback for more. Come for the food, stay for the memories!\";\r\n\r\n    // Create image\r\n    const image = document.createElement(\"img\");\r\n    image.src = _img_restau_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    image.alt = \"Restaurant\";\r\n    image.style.width = \"100%\";\r\n    image.style.height = \"auto\";\r\n\r\n    if (content) {\r\n      content.appendChild(heading);\r\n      content.appendChild(paragraph);\r\n      content.appendChild(image);\r\n    }\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBQzVDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNENBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lLmpzP2QxZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlc3RhdUltYWdlIGZyb20gXCIuLi9pbWcvcmVzdGF1LmpwZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWUge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgY3JlYXRlQ29udGVudCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGhlYWRpbmcgZWxlbWVudFxyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPVxyXG4gICAgICBcIkV4cGVyaWVuY2UgQ3VsaW5hcnkgQmxpc3MgYXQgTGUgS2FsYW4gQW4gRGkgUmUgU2EgTmVncm9zIOKAkyBXaGVyZSBFdmVyeSBCaXRlIFRlbGxzIGEgU3RvcnlcIjtcclxuXHJcbiAgICAvLyBDcmVhdGUgcGFyYWdyYXBoIGVsZW1lbnRcclxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID1cclxuICAgICAgXCIgIFN0ZXAgaW50byBhIHdvcmxkIG9mIGV4cXVpc2l0ZSBmbGF2b3JzIGFuZCBleGNlcHRpb25hbCBkaW5pbmcgYXQgTGUgS2FsYW4gQW4gRGkgUmUgU2EgTmVncm9zLiBOZXN0bGVkIGluIHRoZSBoZWFydCBvZiBCYWNvbG9kIENpdHksIG91cnJlc3RhdXJhbnQgaXMgYSBoYXZlbiBmb3IgZm9vZCBsb3ZlcnMgd2hvIGNyYXZlIHRoZSBwZXJmZWN0IGJsZW5kIG9mZ291cm1ldCBjdWlzaW5lLCB2aWJyYW50IGFtYmlhbmNlLCBhbmQgaW1wZWNjYWJsZSBzZXJ2aWNlLiBGcm9tIHRoZWZyZXNoZXN0IGluZ3JlZGllbnRzIHRvIGV4cGVydGx5IGNyYWZ0ZWQgZGlzaGVzLCBlYWNoIHBsYXRlIGlzIGFjZWxlYnJhdGlvbiBvZiB0YXN0ZSBhbmQgY3JlYXRpdml0eS4gV2hldGhlciB5b3UncmUgZW5qb3lpbmcgYSByb21hbnRpY2Rpbm5lciBmb3IgdHdvIG9yIGdhdGhlcmluZyB3aXRoIGZyaWVuZHMsIExlIEthbGFuIEFuIERpIFJlIFNhIE5lZ3Jvc3Byb21pc2VzIGFuIHVuZm9yZ2V0dGFibGUgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCB3aWxsIGxlYXZlIHlvdSBjb21pbmdiYWNrIGZvciBtb3JlLiBDb21lIGZvciB0aGUgZm9vZCwgc3RheSBmb3IgdGhlIG1lbW9yaWVzIVwiO1xyXG5cclxuICAgIC8vIENyZWF0ZSBpbWFnZVxyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1hZ2Uuc3JjID0gcmVzdGF1SW1hZ2U7XHJcbiAgICBpbWFnZS5hbHQgPSBcIlJlc3RhdXJhbnRcIjtcclxuICAgIGltYWdlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcclxuXHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home.js\n");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\nclass Menu {\r\n  constructor() {}\r\n\r\n  createContent() {\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\";\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Our Menu\";\r\n\r\n    const menuItems = [\"Item 1\", \"Item 2\", \"Item 3\"];\r\n    const list = document.createElement(\"ul\");\r\n    menuItems.forEach((item) => {\r\n      const listItem = document.createElement(\"li\");\r\n      listItem.textContent = item;\r\n      list.appendChild(listItem);\r\n    });\r\n\r\n    content.appendChild(heading);\r\n    content.appendChild(list);\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnUuanM/OGQ4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWVudSB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBjcmVhdGVDb250ZW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbXMgPSBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl07XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gaXRlbTtcclxuICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/menu.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home.js */ \"./src/components/home.js\");\n/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu.js */ \"./src/components/menu.js\");\n/* harmony import */ var _components_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about.js */ \"./src/components/about.js\");\n\r\n\r\n\r\n\r\nfunction createNavButtons() {\r\n  const homebutton = document.createElement(\"button\");\r\n  homebutton.textContent = \"Home\";\r\n  homebutton.addEventListener(\"click\", () => {\r\n    const home = new _components_home_js__WEBPACK_IMPORTED_MODULE_0__.Home();\r\n    home.createContent();\r\n  });\r\n\r\n  const menubutton = document.createElement(\"button\");\r\n  menubutton.textContent = \"Menu\";\r\n  menubutton.addEventListener(\"click\", () => {\r\n    const menu = new _components_menu_js__WEBPACK_IMPORTED_MODULE_1__.Menu();\r\n    menu.createContent();\r\n  });\r\n\r\n  const aboutubutton = document.createElement(\"button\");\r\n  aboutubutton.textContent = \"About\";\r\n  aboutubutton.addEventListener(\"click\", () => {\r\n    const about = new _components_about_js__WEBPACK_IMPORTED_MODULE_2__.About();\r\n    about.createContent();\r\n  });\r\n\r\n  const nav = document.querySelector(\"nav\");\r\n  if (nav) {\r\n    nav.appendChild(homebutton);\r\n    nav.appendChild(menubutton);\r\n    nav.appendChild(aboutubutton);\r\n  }\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  createNavButtons();\r\n  const home = new _components_home_js__WEBPACK_IMPORTED_MODULE_0__.Home();\r\n  home.createContent();\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE0QztBQUNBO0FBQ0U7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxREFBSTtBQUN6QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxREFBSTtBQUN6QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1REFBSztBQUMzQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFJO0FBQ3ZCO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lIH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lLmpzXCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUuanNcIjtcclxuaW1wb3J0IHsgQWJvdXQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Fib3V0LmpzXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXZCdXR0b25zKCkge1xyXG4gIGNvbnN0IGhvbWVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGhvbWVidXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICBob21lYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBob21lID0gbmV3IEhvbWUoKTtcclxuICAgIGhvbWUuY3JlYXRlQ29udGVudCgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtZW51YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBtZW51YnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgbWVudWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgbWVudSA9IG5ldyBNZW51KCk7XHJcbiAgICBtZW51LmNyZWF0ZUNvbnRlbnQoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYWJvdXR1YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhYm91dHVidXR0b24udGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XHJcbiAgYWJvdXR1YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBhYm91dCA9IG5ldyBBYm91dCgpO1xyXG4gICAgYWJvdXQuY3JlYXRlQ29udGVudCgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG4gIGlmIChuYXYpIHtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lYnV0dG9uKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51YnV0dG9uKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChhYm91dHVidXR0b24pO1xyXG4gIH1cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNyZWF0ZU5hdkJ1dHRvbnMoKTtcclxuICBjb25zdCBob21lID0gbmV3IEhvbWUoKTtcclxuICBob21lLmNyZWF0ZUNvbnRlbnQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/img/restau.jpg":
/*!****************************!*\
  !*** ./src/img/restau.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c05fd0eb251624b9151.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;