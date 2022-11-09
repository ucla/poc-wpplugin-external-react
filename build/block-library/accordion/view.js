/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./wcl-react-poc/src/components/Accordion/index.js":
/*!*********************************************************!*\
  !*** ./wcl-react-poc/src/components/Accordion/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionMarkup": function() { return /* binding */ AccordionMarkup; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * 
 * @param {Component} [props.children] - Required - Inner content of accordion. Content can be HTML.
 * @param {string or component} [props.title] - Required - Link text.
 * @param {string} [props.className] Class name to add to outer wrapper for customization.
 * 
 * As of 11/22 WordPress does not allow hook calls during the save block mode therefore separate out the
 * markup from the interactive portion of the function so that Save can load markup only. 
 * 
 * Component classes work without creating separation between parent with state management and child markup only comp
 * however using function classes and hooks is considered the modern standard and uses
 * much leaner syntax. Interactivity is reloaded on the front-end through the viewScript. 
 * - ESat
 */

const Accordion = props => {
  const {
    className = false,
    title = '',
    children,
    valuesAreHtml = false
  } = props;
  const [showBody, setShowBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const toggleContentDisplay = () => {
    setShowBody(!showBody);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AccordionMarkup, {
    className: className,
    title: title,
    valuesAreHtml: valuesAreHtml,
    showBody: showBody,
    toggleContentDisplay: toggleContentDisplay
  }, children);
};
const AccordionMarkup = props => {
  const {
    className = false,
    title = '',
    children = '',
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
      __html: children
    }
  }), !valuesAreHtml && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("dd", {
    className: "accordion__content",
    style: {
      display: `${showBody ? 'block' : 'none'}`
    }
  }, children)));
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
/*!*********************************************!*\
  !*** ./src/block-library/accordion/view.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wcl_react_poc_src_components_Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../wcl-react-poc/src/components/Accordion */ "./wcl-react-poc/src/components/Accordion/index.js");

/**
 * !! IMPORTANT !!
 * viewScript is being used to reload block React elements on the front-end because save.js stripes
 * the component hooks and standard state values thereby nullifying interactivity based on state. - ESat
 * 
 * An alternative to loading the React component is to use the JavaScript that comes with the HTML
 * WCL here. That would mean that the WP plug-in would use React on the back-end and static HTML on the
 * front-end as is done now. While using the WCL React library is still better than embedding the HTML
 * directly in WordPress blocks using static JS on the front-end is not ideal. - ESat
 * 
 * 
 * IMPORTANT SEO Note: Replacing the static markup with a React component after page load does not negatively impact SEO.
 */



document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-accordionroot').forEach(acc => {
    const className = acc.children[0].classList; /* okay if accordion class on twice */
    const title = acc.querySelector('.accordion__title dt :first-child');
    const content = acc.querySelector('.accordion__content :first-child');
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wcl_react_poc_src_components_Accordion__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: className,
      title: title.outerHTML,
      valuesAreHtml: true
    }, content.outerHTML), acc);
  });
}, false);
}();
/******/ })()
;
//# sourceMappingURL=view.js.map