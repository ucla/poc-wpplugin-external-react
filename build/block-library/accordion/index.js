/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-up-down.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-up-down.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronUpDown = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m12 20-4.5-3.6-.9 1.2L12 22l5.5-4.4-.9-1.2L12 20zm0-16 4.5 3.6.9-1.2L12 2 6.5 6.4l.9 1.2L12 4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronUpDown);
//# sourceMappingURL=chevron-up-down.js.map

/***/ }),

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

/***/ "./src/block-library/accordion/edit.js":
/*!*********************************************!*\
  !*** ./src/block-library/accordion/edit.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wcl_react_poc_src_components_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../wcl-react-poc/src/components/Accordion */ "./wcl-react-poc/src/components/Accordion/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/block-library/accordion/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * Can include React file without parsing during build because React is available in 
 * the browser. https://www.cssigniter.com/how-to-use-external-react-components-in-your-gutenberg-blocks/
 */

/** El Note Node Modules are excluded in orig webpack config. Added include of wcl components poc found in node-modules
 * so that repo could be included as a dependency using NPM as is currently done except for React
 * components instead of global css. Each component should have it's own CSS or import from global into component.
 * 
 * NOTE: The WCL React components would ordinarily be located under /node_modules and added
 * through the repository referenced in the package.json just like the current WCL repo is currently included in the existing plugin. To make it easier for the POC I
 * moved the package to the root of the project folder so that I could save it to the POC repo.
 * 
*/



// used for easier testing
//import Accordion from './Accordion.function';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @param {Object} [props]           Properties passed from the editor.
 * @param {Object} [props.attributes]
 * @param {string} [props.setAttributes]
 * @param {string} [props.className] Class name generated for the block.
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  const {
    title = '',
    blockId,
    className = false
  } = attributes;
  React.useEffect(() => {
    if (!blockId) {
      setAttributes({
        blockId: clientId
      });
    }
  }, []);
  const onChangeTitle = value => {
    setAttributes({
      title: value
    });
  };
  const richTextElement = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    value: title,
    onChange: onChangeTitle,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter title here...", 'ucla-wcl-wpblocks')
  });

  /** #Example of 3rd-party React component being used. - El */
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-accordionroot": clientId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wcl_react_poc_src_components_Accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: className,
    blockId: blockId,
    title: richTextElement
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, null)));
}
;

/***/ }),

/***/ "./src/block-library/accordion/save.js":
/*!*********************************************!*\
  !*** ./src/block-library/accordion/save.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wcl_react_poc_src_components_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../wcl-react-poc/src/components/Accordion */ "./wcl-react-poc/src/components/Accordion/index.js");

/* eslint-disable no-unused-vars */


/** Node Modules is excluded in orig webpack config. Added include of wcl components poc found in node-modules
 * so that repo could be included as a dependency using NPM as is currently done except for React
 * components instead of global css. Each component should have it's own CSS or import from global into component.
 */

/** 
 * Example of 3rd-party React component being used.
 * IMPORTANT!! Load markup only version durring save. (no interactivity aka no hooks otherwise React 321 error)
 *  - El */


// used for easier testing during dev.
//import { AccordionMarkup } from './Accordion.function';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized  by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 * @param {Object} [props]           Properties passed from the editor.
 * @param {Object} props.attributes
 * @param {string} props.attributes.title
 * @param {string} props.attributes.className
 * @return {WPElement} Element to render.
 */

/**
 * Would be great if WordPress would ignore interactivity (hooks) during save and load React components on the front end
 * by default or through a switch value in block.json. Until then have to use viewScript to reload React component.
 * 
 */

const save = _ref => {
  let {
    attributes: {
      title,
      blockId,
      className
    }
  } = _ref;
  const richTextElement = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span",
    value: title
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-accordionroot": blockId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wcl_react_poc_src_components_Accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionMarkup, {
    className: className,
    title: richTextElement
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
};
/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/block-library/accordion/editor.scss":
/*!*************************************************!*\
  !*** ./src/block-library/accordion/editor.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./src/block-library/accordion/block.json":
/*!************************************************!*\
  !*** ./src/block-library/accordion/block.json ***!
  \************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ucla-wcl-wpblocks/accordion","version":"0.1.0","title":"UCLA WCL Accordion","category":"ucla-wcl-wpblocks","icon":"chevronUpDown","description":"UCLA accordion web component.","supports":{"html":false},"attributes":{"title":{"type":"string"},"blockId":{"type":"string"}},"textdomain":"ucla-wcl-wpblocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","script":"wp-element","viewScript":"file:./view.js"}');

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
/*!**********************************************!*\
  !*** ./src/block-library/accordion/index.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-up-down.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/block-library/accordion/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/block-library/accordion/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/block-library/accordion/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map