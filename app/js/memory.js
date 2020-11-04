/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cards.ts":
/*!**********************!*\
  !*** ./src/cards.ts ***!
  \**********************/
/*! namespace exports */
/*! export Cards [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cards\": () => /* binding */ Cards\n/* harmony export */ });\nclass Cards {\n    constructor(str) {\n        this._template = document.querySelector('template.card');\n        this._img = str;\n        this._uuid = this.uuidv4();\n        this._state = 'down';\n        this._matched = false;\n    }\n    get img() {\n        return this._img;\n    }\n    get uuid() {\n        return this._uuid;\n    }\n    get state() {\n        return this._state;\n    }\n    render() {\n        if (this._template) {\n            let cloned = this._template.content.cloneNode(true);\n            let card = cloned.querySelector('.card');\n            if (card) {\n                card.setAttribute('data-uuid', this._uuid);\n            }\n            return cloned;\n        }\n        else {\n            throw new Error('Invalid template');\n        }\n    }\n    match() {\n        this._matched = true;\n    }\n    canBeFlipped() {\n        return this._matched === false && this._state === 'down';\n    }\n    flipp(target) {\n        let sel = target.querySelector(\"img\");\n        if (sel) {\n            switch (this._state) {\n                case 'up':\n                    this._state = 'down';\n                    sel.src = \"/app/img/back.png\";\n                    break;\n                case 'down':\n                    this._state = 'up';\n                    sel.src = `/app/img/${this._img}`;\n                    break;\n            }\n        }\n        else {\n            throw new Error('Invalid element selected');\n        }\n    }\n    uuidv4() {\n        let dt = new Date().getTime();\n        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n            const r = (dt + Math.random() * 16) % 16 | 0;\n            dt = Math.floor(dt / 16);\n            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);\n        });\n        return uuid;\n    }\n}\n\n\n\n//# sourceURL=webpack://memory/./src/cards.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! namespace exports */
/*! export Game [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => /* binding */ Game\n/* harmony export */ });\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./src/cards.ts\");\n;\nclass Game {\n    constructor(container) {\n        this._list = ['10_tiger.png', '11_penguin.png', '12_racoon.png', '1_pig.png', '2_squirrel.png', '3_rabbit.png', '4_frog.png', '5_fox.png', '6_bear.png', '7_monkey.png', '8_panda.png', '9_chick.png', '10_tiger.png', '11_penguin.png', '12_racoon.png', '1_pig.png', '2_squirrel.png', '3_rabbit.png', '4_frog.png', '5_fox.png', '6_bear.png', '7_monkey.png', '8_panda.png', '9_chick.png'];\n        this.numberOfPairs = 0;\n        this._container = container;\n        this._cards = [];\n        this._openCards = [];\n    }\n    run() {\n        this._list.forEach((e) => {\n            this._cards.push(new _cards__WEBPACK_IMPORTED_MODULE_0__.Cards(e));\n        });\n        this.render();\n    }\n    render() {\n        this.shuffle(this._cards).forEach((e) => {\n            const element = e.render();\n            const card = element.querySelector('div');\n            if (card) {\n                card.addEventListener('click', (e) => {\n                    this.pressed(e);\n                });\n                this._container.append(card);\n            }\n        });\n    }\n    shuffle(array) {\n        for (let i = array.length - 1; i > 0; i--) {\n            const j = Math.floor(Math.random() * i);\n            const temp = array[i];\n            array[i] = array[j];\n            array[j] = temp;\n        }\n        console.log(array);\n        return array;\n    }\n    canBeFlipped(card) {\n        if (this._openCards.length === 2) {\n            this._openCards.forEach((e) => {\n                const temp = document.querySelector(`[data-uuid=\"${e.uuid}\"`);\n                console.log(temp);\n                if (temp) {\n                    e.flipp(temp);\n                }\n            });\n            this._openCards = [];\n        }\n        if (this._openCards.length < 2) {\n            if (card.canBeFlipped()) {\n                return true;\n            }\n            return false;\n        }\n        return false;\n    }\n    match(card) {\n        if (this._openCards.length === 0) {\n        }\n        else {\n            if (this._openCards[0].img === card.img && this._openCards[0] != card) {\n                this._openCards[0].match();\n                card.match();\n                this._openCards = [];\n                console.log(\"pair\");\n            }\n        }\n    }\n    pressed(e) {\n        const target = e.currentTarget;\n        const card = this._cards.find((element) => element.uuid == target.getAttribute('data-uuid'));\n        console.log(card);\n        if (card) {\n            if (this.canBeFlipped(card)) {\n                card.flipp(target);\n                this._openCards.push(card);\n                this.match(card);\n            }\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://memory/./src/game.ts?");

/***/ }),

/***/ "./src/memory.ts":
/*!***********************!*\
  !*** ./src/memory.ts ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.ts\");\n;\nconst container = document.querySelector(\"div.playgrid\");\nif (container) {\n    new _game__WEBPACK_IMPORTED_MODULE_0__.Game(container).run();\n}\n\n\n//# sourceURL=webpack://memory/./src/memory.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/memory.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;