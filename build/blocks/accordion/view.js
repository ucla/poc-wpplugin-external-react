/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/accordion/Accordion.function.js":
/*!****************************************************!*\
  !*** ./src/blocks/accordion/Accordion.function.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * 
 * @param {Component} [props.children] - Required - Inner content of accordion. Content can be HTML.
 * @param {Boolean} [props.interactive] - Turns off interactivity. See note below.
 * @param {string or component} [props.title] - Required - Link text.
 * @param {string} [props.className] Class name to add to outer wrapper for customization.
 * 
 * Ability to turn off interactivity is required by the WordPress save process.
 * Hooks break the serialization process (React 321 error). Alternative option is to use React
 * Component class however using function classes and hooks is considered the modern standard and uses
 * much leaner syntax. Interactivity is reloaded on the front-end through the viewScript.
 * Hooks must also be called with React. syntax, e.g., React.useState, rather thank stand-alone.
 * - ESat
 */

const Accordion = props => {
  const {
    className = false,
    title = '',
    children,
    interactive = true,
    valuesAreHtml = false
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, interactive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AccordionInteractive, {
    className: className,
    title: title,
    content: children,
    valuesAreHtml: valuesAreHtml
  }), !interactive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AccordionStatic, {
    className: className,
    title: title,
    content: children,
    valuesAreHtml: valuesAreHtml
  }));
};
const AccordionInteractive = props => {
  const {
    className = false,
    title = '',
    content = '',
    valuesAreHtml = false
  } = props;
  const [showBody, setShowBody] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const toggleContentDisplay = () => {
    setShowBody(!showBody);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AccordionMarkup, {
    className: className,
    title: title,
    content: content,
    valuesAreHtml: valuesAreHtml,
    showBody: showBody,
    toggleContentDisplay: toggleContentDisplay
  });
};
const AccordionStatic = props => {
  const {
    className = false,
    title = '',
    content = '',
    valuesAreHtml = false
  } = props;
  let toggleContentDisplay,
    showBody = false;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AccordionMarkup, {
    className: className,
    title: title,
    content: content,
    valuesAreHtml: valuesAreHtml,
    showBody: showBody,
    toggleContentDisplay: toggleContentDisplay
  });
};
const AccordionMarkup = props => {
  const {
    className = false,
    title = '',
    content = '',
    toggleContentDisplay = false,
    showBody = false,
    valuesAreHtml = false
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: `accordion${className ? ' ' + className : ''}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dl", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onMouseDown: toggleContentDisplay,
    className: "accordion__title",
    "aria-expanded": "false"
  }, valuesAreHtml && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dt", {
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), !valuesAreHtml && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dt", null, title)), valuesAreHtml && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dd", {
    className: "accordion__content",
    style: {
      display: `${showBody ? 'block' : 'none'}`
    },
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), !valuesAreHtml && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dd", {
    className: "accordion__content",
    style: {
      display: `${showBody ? 'block' : 'none'}`
    }
  }, content)));
};
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************************!*\
  !*** ./src/blocks/accordion/view.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Accordion_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accordion.function */ "./src/blocks/accordion/Accordion.function.js");

/**
 * !! IMPORTANT !!
 * viewScript is being used to reload block React elements on the front-end because save.js stripes
 * the component hooks and standard state values thereby nullifying interactivity based on state. - ESat
 * 
 */



document.querySelectorAll('[data-accordionroot').forEach(acc => {
  const className = acc.children[0].classList; /* okay if accordion class on twice */
  const title = acc.querySelector('.accordion__title dt :first-child');
  const content = acc.querySelector('.accordion__content :first-child');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Accordion_function__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: className,
    title: title.outerHTML,
    valuesAreHtml: true
  }, content.outerHTML), acc);
});
}();
/******/ })()
;
//# sourceMappingURL=view.js.map