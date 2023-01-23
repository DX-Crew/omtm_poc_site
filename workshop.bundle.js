/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/shared/bubble.js":
/*!******************************!*\
  !*** ./src/shared/bubble.js ***!
  \******************************/
/***/ (() => {

eval("var canvas = document.getElementById(\"canvas\");\r\nvar ctx = canvas.getContext(\"2d\");\r\n\r\n//make canvas the size of the window\r\nctx.canvas.width = window.innerWidth;\r\nctx.canvas.height = window.innerHeight;\r\n\r\nvar W = window.innerWidth;\r\nvar H = window.innerHeight;\r\n\r\nvar particles = [];\r\n\r\n// creats particle obects and pushes them to the particles array\r\nfor (var i = 0; i < 50; i++) {\r\n  particles.push(new createParticles());\r\n}\r\n\r\nfunction createParticles() {\r\n  // get random position\r\n  this.x = Math.random() * W;\r\n  this.y = Math.random() * H;\r\n\r\n  //set object velocity\r\n  this.vx = Math.random() * 1;\r\n  this.vy = Math.random() * 1;\r\n\r\n  //randomize colors\r\n  var r = (Math.random() * 105) >> 0;\r\n  var g = (Math.random() * 155) >> 0;\r\n  var b = (Math.random() * 135) >> 0;\r\n  this.color = \"rgba(\" + r + \", \" + g + \", \" + b + \", 1)\";\r\n\r\n  //randomize size\r\n  this.size = Math.floor(Math.random() * (100 - 10 + 1)) + 10;\r\n\r\n  // define radius\r\n  this.radius = Math.random() * 20 + 25;\r\n}\r\n\r\nvar x = 100;\r\nvar y = 100;\r\n\r\nfunction draw() {\r\n  ctx.globalCompositeOperation = \"source-over\";\r\n  ctx.fillStyle = \"#1b0029\";\r\n  ctx.fillRect(0, 0, W, H);\r\n\r\n  // use screen to blend bubble colors with background\r\n  ctx.globalCompositeOperation = \"screen\";\r\n  ctx.saturate = 0.25;\r\n\r\n  //loop through our particles array and draw each particle based on its properties\r\n  for (var t = 0; t < particles.length; t++) {\r\n    var p = particles[t];\r\n\r\n    // Draw a particle\r\n    ctx.beginPath();\r\n\r\n    // create gradient\r\n    //draw bubble\r\n    ctx.arc(p.x, p.y, p.size, Math.PI * 2, false);\r\n    ctx.fill();\r\n\r\n    //set velocity\r\n    p.x += p.vx;\r\n    p.y += p.vy;\r\n\r\n    //keep bubbles from escaping\r\n    if (p.x < -300) p.x = W;\r\n    if (p.y < -300) p.y = H;\r\n    if (p.x > W + 300) p.x = -300;\r\n    if (p.y > H + 300) p.y = -300;\r\n  }\r\n}\r\n\r\nsetInterval(draw, 63);\r\n\n\n//# sourceURL=webpack://omtm_app/./src/shared/bubble.js?");

/***/ }),

/***/ "./src/workshop/index.js":
/*!*******************************!*\
  !*** ./src/workshop/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_bubble_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/bubble.js */ \"./src/shared/bubble.js\");\n/* harmony import */ var _shared_bubble_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shared_bubble_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workshopExersice.js */ \"./src/workshop/workshopExersice.js\");\n//gafer dazzling\r\n\r\n\r\n//Model\r\n\r\n\r\n//Set up\r\nconst modes = [\"most\", \"secondMost\", \"thirdMost\"];\r\n\r\nvar currentPageIndex = 0;\r\n\r\n//Get ref to dynamic content\r\nconst guidanceOneElement = document.querySelector(\"#guidanceOneElement\");\r\nconst guidanceTwoElement = document.querySelector(\"#guidanceTwoElement\");\r\nconst guidanceThreeElement = document.querySelector(\"#guidanceThreeElement\");\r\nconst guidanceFourElement = document.querySelector(\"#guidanceFourElement\");\r\nconst variableGuidanceElement = document.querySelector(\r\n  \"#variableGuidanceElement\"\r\n);\r\nconst backButton = document.querySelector(\"#back-button\");\r\nconst nextButton = document.querySelector(\"#next-button\");\r\nconst tagLineElement = document.querySelector(\"#tagLineElement\");\r\n\r\nconst textAreaTheValue = document.querySelector(\"#textArea-theValue\");\r\nconst textAreaWhyImportant = document.querySelector(\"#textArea-whyImportant\");\r\nconst textAreaIdeaOne = document.querySelector(\"#textArea-ideaOne\");\r\nconst textAreaIdeaTwo = document.querySelector(\"#textArea-ideaTwo\");\r\nconst textAreaIdeaThree = document.querySelector(\"#textArea-ideaThree\");\r\n\r\n//Listen for events\r\nbackButton.addEventListener(\"click\", (e) => {\r\n  loadPage(currentPageIndex - 1);\r\n});\r\n\r\nnextButton.addEventListener(\"click\", (e) => {\r\n  loadPage(currentPageIndex + 1);\r\n});\r\n\r\n//List for textarea changes\r\ntextAreaTheValue.addEventListener(\"input\", function () {\r\n  _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][modes[currentPageIndex]][\"theValue\"][\"answer\"] = this.value;\r\n});\r\n\r\ntextAreaWhyImportant.addEventListener(\"input\", function () {\r\n  _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][modes[currentPageIndex]][\"whyImportant\"][\"answer\"] =\r\n    this.value;\r\n});\r\n\r\ntextAreaIdeaOne.addEventListener(\"input\", function () {\r\n  _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][modes[currentPageIndex]][\"threeIdeas\"][\"answer1\"] =\r\n    this.value;\r\n});\r\ntextAreaIdeaTwo.addEventListener(\"input\", function () {\r\n  _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][modes[currentPageIndex]][\"threeIdeas\"][\"answer2\"] =\r\n    this.value;\r\n});\r\ntextAreaIdeaThree.addEventListener(\"input\", function () {\r\n  _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][modes[currentPageIndex]][\"threeIdeas\"][\"answer3\"] =\r\n    this.value;\r\n});\r\n\r\n//On page load set the default content\r\nfunction initialisePage() {\r\n  guidanceOneElement.innerHTML = _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].instructions;\r\n  guidanceTwoElement.innerHTML = _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].most.instructions;\r\n  guidanceThreeElement.innerHTML = _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].most.theValue.question;\r\n  guidanceFourElement.innerHTML = _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].most.whyImportant.question;\r\n}\r\n\r\n//User has selected another page so change it!\r\nfunction loadPage(pageIndex) {\r\n  pageIndex =\r\n    pageIndex < 0\r\n      ? 0\r\n      : pageIndex >= modes.length\r\n      ? modes.length - 1\r\n      : pageIndex;\r\n\r\n  currentPageIndex = pageIndex;\r\n\r\n  //Set the required variable question\r\n\r\n  //Variable guidance\r\n  variableGuidanceElement.innerHTML =\r\n    _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][modes[pageIndex]][\"instructions\"];\r\n\r\n  //Tag line at bottom of page\r\n  tagLineElement.innerHTML = _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][modes[pageIndex]][\"tagLine\"];\r\n\r\n  //The Value\r\n  textAreaTheValue.value =\r\n    _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][modes[pageIndex]][\"theValue\"][\"answer\"];\r\n\r\n  //Why important\r\n  textAreaWhyImportant.value =\r\n    _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][modes[pageIndex]][\"whyImportant\"][\"answer\"];\r\n\r\n  //Three ideas\r\n  textAreaIdeaOne.value =\r\n    _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][modes[pageIndex]][\"threeIdeas\"][\"answer1\"];\r\n\r\n  textAreaIdeaTwo.value =\r\n    _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][modes[pageIndex]][\"threeIdeas\"][\"answer2\"];\r\n\r\n  textAreaIdeaThree.value =\r\n    _workshopExersice_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][modes[pageIndex]][\"threeIdeas\"][\"answer3\"];\r\n\r\n  //Sort buttons out.\r\n  if (pageIndex > 0) {\r\n    backButton.classList.remove(\"opacity-0\");\r\n  } else {\r\n    backButton.classList.add(\"opacity-0\");\r\n  }\r\n\r\n  if (pageIndex < modes.length - 1) {\r\n    nextButton.classList.remove(\"opacity-0\");\r\n  } else {\r\n    nextButton.classList.add(\"opacity-0\");\r\n  }\r\n}\r\n\r\ninitialisePage();\r\nloadPage(currentPageIndex);\r\n\n\n//# sourceURL=webpack://omtm_app/./src/workshop/index.js?");

/***/ }),

/***/ "./src/workshop/workshopExersice.js":
/*!******************************************!*\
  !*** ./src/workshop/workshopExersice.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst workShopExersice = {\r\n  instructions: `Team Exercises – thinking about your future brand comms campaign\r\n    please think about which 3 values are most important to focus on communicating.\r\n    Within this please think about the specific element(s) of the value that is most important (the three words on each value card)`,\r\n\r\n  most: {\r\n    instructions: \"Most Important Value To Communicate Through Brand Comms…\",\r\n    tagLine: \"your most important value\",\r\n    theValue: {\r\n      question:\r\n        \"The Value (and the focus within the value i.e. which element):\",\r\n      answer: \"\",\r\n    },\r\n    whyImportant: {\r\n      question:\r\n        \"Why this value is important to your customers or future customers:\",\r\n      answer: \"\",\r\n    },\r\n    threeIdeas: {\r\n      question: \"Three ideas on the messages that relate to this value:\",\r\n      answer1: \"\",\r\n      answer2: \"\",\r\n      answer3: \"\",\r\n    },\r\n  },\r\n\r\n  secondMost: {\r\n    tagLine: \"your 2nd most important value\",\r\n    instructions:\r\n      \"2nd Most Important Value To Communicate Through Brand Comms…\",\r\n    theValue: {\r\n      question:\r\n        \"The Value (and the focus within the value i.e. which element):\",\r\n      answer: \"\",\r\n    },\r\n    whyImportant: {\r\n      question:\r\n        \"Why this value is important to your customers or future customers:\",\r\n      answer: \"\",\r\n    },\r\n    threeIdeas: {\r\n      question: \"Three ideas on the messages that relate to this value:\",\r\n      answer1: \"\",\r\n      answer2: \"\",\r\n      answer3: \"\",\r\n    },\r\n  },\r\n  thirdMost: {\r\n    tagLine: \"your 3rd most important value\",\r\n    instructions:\r\n      \"3rd Most Important Value To Communicate Through Brand Comms…\",\r\n    theValue: {\r\n      question:\r\n        \"The Value (and the focus within the value i.e. which element):\",\r\n      answer: \"\",\r\n    },\r\n    whyImportant: {\r\n      question:\r\n        \"Why this value is important to your customers or future customers:\",\r\n      answer: \"\",\r\n    },\r\n    threeIdeas: {\r\n      question: \"Three ideas on the messages that relate to this value:\",\r\n      answer1: \"\",\r\n      answer2: \"\",\r\n      answer3: \"\",\r\n    },\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (workShopExersice);\r\n\n\n//# sourceURL=webpack://omtm_app/./src/workshop/workshopExersice.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/workshop/index.js");
/******/ 	
/******/ })()
;