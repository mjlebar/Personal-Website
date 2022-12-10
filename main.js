/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeHead\": () => (/* binding */ homeHead),\n/* harmony export */   \"homeInfo1\": () => (/* binding */ homeInfo1),\n/* harmony export */   \"homeInfo2\": () => (/* binding */ homeInfo2),\n/* harmony export */   \"setUpHome\": () => (/* binding */ setUpHome)\n/* harmony export */ });\nconst homeInfo1 = document.createElement(\"p\");\nconst homeInfo2 = document.createElement(\"p\");\nconst homeHead = document.createElement(\"h1\");\n\nfunction setUpHome() {\n  const main = document.querySelector(\"main\");\n\n  main.appendChild(homeHead);\n  main.appendChild(homeInfo1);\n  main.appendChild(homeInfo2);\n  homeHead.textContent = \"Welcome to my website!\";\n  homeInfo1.textContent =\n    \"Hi! My name is Matthew LeBar, and I am a former math major and math educator looking to use my skills to begin a career as a software developer. I've been working the past few months to learn JavaScript, Java,  SQL,  CSS, and  HTML. In that process, I've found that the skills I trained in math - rapidly developing deep conceptual understanding, creative problem-solving, and precisely articulating technical concepts - have been invaluable. My background in math gives me the tools I need to feel confident understanding code, and to use that understanding to solve problems. I've learned a lot already but I'm excited to continue to deepen my knowledge - I would love to bring my passion for learning to your company!\";\n  homeInfo2.textContent =\n    \"To see some of the projects I've been working on to learn JavaScript, HTML, and CSS, check out the projects tab! Projects in Java and using SQL are forthcoming. For more information about my educational background and what I've been doing to learn software development, check out the about me tab.\";\n}\n\n\n\n\n//# sourceURL=webpack://personal-website/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _Matthew_LeBar_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matthew_LeBar.jpg */ \"./src/Matthew_LeBar.jpg\");\nconst home = document.querySelector(\"li.home\");\nconst proj = document.querySelector(\"li.proj\");\nconst abt = document.querySelector(\"li.abt\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.setUpHome)();\n\n\n\nconst sidebar = document.querySelector(\".sidebar\");\n\nconst main = document.querySelector(\"main\");\n\nconst cards = document.querySelectorAll(\".card\"); //add event listeners to set up card structure with projects\n\nconst projInfo = document.createElement(\"p\");\nconst projHead = document.createElement(\"h3\");\nsidebar.appendChild(projHead);\nsidebar.appendChild(projInfo);\nprojHead.textContent = \"Check out my coding projects!\";\nprojInfo.textContent =\n  \"These are just a small handful of my favorite projects completed for The Odin Project, an open-source web development education resource. The Odin Project has been a great way for me to learn web development in depth in a hands-on way. I'll be continuing to add projects as I learn new skills like React, MongoDB, and Node. I also hope to return to some of these projects to sharpen their design and add new features as I continue to learn web development skills. (You may need to scroll to see all the projects).\";\n\nconst aboutInfo1 = document.createElement(\"p\");\nconst aboutImg = document.createElement(\"img\");\naboutImg.classList.add(\"prof-pic\");\nconst aboutInfo2 = document.createElement(\"p\");\nconst aboutItems = [aboutInfo1, aboutImg, aboutInfo2];\nfor (let item of aboutItems) {\n  main.appendChild(item);\n  item.classList.add(\"hidden\");\n}\n\naboutInfo1.textContent =\n  \"I graduated Davidson College in May, 2019 with a degree in math and philosophy. I took and enjoyed a couple coding classes (including a Data Structures class using Java), but just didn't have the time to pursue coding further in college. Still, my favorite topics in math were the ones closest to computer science - discrete math, mathematical logic, and theory of computing. After graduating, I spent three years working in math education. I thoroughly enjoyed teaching math, and I will take the practice of clearly and quickly communicating technical concepts with me, I felt it was time to further develop my knowledge and problem-solving skills by entering the coding world.\";\naboutInfo1.classList.add(\"abt-info-1\");\naboutImg.src = _Matthew_LeBar_jpg__WEBPACK_IMPORTED_MODULE_1__;\naboutImg.alt = \"A picture of me smiling\";\n\naboutInfo2.innerHTML = `My focus has been on learning Java and SQL for back-end development, and JavaScript, CSS, and HTML for front-end development. I have completed a<a href=\"https://www.udemy.com/course/master-practical-java-development/\">Java Certification Course</a>to refresh the fundamentals of Java, as well as reviewing material on data structures. I've also complete an<a href=\"https://verify.w3schools.com/1N5K1DMUGK\">SQL certification</a>and have read up on the relational database management system. For front-end development, I have been working through<a href=\"https://www.theodinproject.com/\">The Odin Project,</a>where I have practiced not just JavaScript, HTML, and CSS, but tools like Jest, Webpack, git and gitHub, and NPM. As I continue to work through the course, I will learn React, MongoDB, and Node.js. I've also been working on my Java, JavaScript, and SQL with practice questions on websites like LeetCode and HackerRank.`;\naboutInfo2.classList.add(\"abt-info-2\");\n\nproj.addEventListener(\"click\", () => {\n  sidebar.classList.remove(\"hidden\");\n  for (let card of cards) {\n    card.classList.remove(\"hidden\");\n  }\n  _home__WEBPACK_IMPORTED_MODULE_0__.homeInfo1.classList.add(\"hidden\");\n  _home__WEBPACK_IMPORTED_MODULE_0__.homeInfo2.classList.add(\"hidden\");\n  _home__WEBPACK_IMPORTED_MODULE_0__.homeHead.classList.add(\"hidden\");\n  main.classList.add(\"proj\");\n  main.classList.remove(\"home\");\n  main.classList.remove(\"abt\");\n  for (let item of aboutItems) {\n    item.classList.add(\"hidden\");\n  }\n});\n\nhome.addEventListener(\"click\", () => {\n  sidebar.classList.add(\"hidden\");\n  for (let card of cards) {\n    card.classList.add(\"hidden\");\n  }\n  _home__WEBPACK_IMPORTED_MODULE_0__.homeInfo1.classList.remove(\"hidden\");\n  _home__WEBPACK_IMPORTED_MODULE_0__.homeInfo2.classList.remove(\"hidden\");\n  _home__WEBPACK_IMPORTED_MODULE_0__.homeHead.classList.remove(\"hidden\");\n  main.classList.add(\"home\");\n  main.classList.remove(\"proj\");\n  main.classList.remove(\"abt\");\n  for (let item of aboutItems) {\n    item.classList.add(\"hidden\");\n  }\n});\n\nabt.addEventListener(\"click\", () => {\n  sidebar.classList.add(\"hidden\");\n  for (let card of cards) {\n    card.classList.add(\"hidden\");\n  }\n  _home__WEBPACK_IMPORTED_MODULE_0__.homeInfo1.classList.add(\"hidden\");\n  _home__WEBPACK_IMPORTED_MODULE_0__.homeInfo2.classList.add(\"hidden\");\n  _home__WEBPACK_IMPORTED_MODULE_0__.homeHead.classList.add(\"hidden\");\n\n  main.classList.add(\"abt\");\n  main.classList.remove(\"proj\");\n  main.classList.remove(\"home\");\n\n  for (let item of aboutItems) {\n    item.classList.remove(\"hidden\");\n  }\n});\n\n\n//# sourceURL=webpack://personal-website/./src/index.js?");

/***/ }),

/***/ "./src/Matthew_LeBar.jpg":
/*!*******************************!*\
  !*** ./src/Matthew_LeBar.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c3c62a548aea7ccc3329.jpg\";\n\n//# sourceURL=webpack://personal-website/./src/Matthew_LeBar.jpg?");

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;