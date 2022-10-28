import './style.scss';
import '../../node_modules/ucla-bruin-components/public/css/ucla-lib.min.css';

/**  !!!! IMPORTANT - loading the global stylesheet using the latest version wpscripts
                    is breaking the build because assets in the stylesheet are included
                    using relative paths and are, are therefore, missing in the build.
                    Loading stylesheet using PHP in plugin main script.

                    Also, registering blocks now occurs in PHP in main plugin script.
*/




// /**
//  * Registers a new block provided a unique name and an object defining its behavior.
//  *
//  * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
//  */
// /**
//  * WordPress dependencies
//  */
// import '@wordpress/core-data';
// import '@wordpress/notices';
// import '@wordpress/block-editor';
// import {
//     registerBlockType,
//     unstable__bootstrapServerSideBlockDefinitions, // eslint-disable-line camelcase
// } from '@wordpress/blocks';

// /**
//  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
//  * All files containing `style` keyword are bundled together. The code used
//  * gets applied both to the front of your site and to the editor.
//  *
//  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
//  */

// /**
//  * Internal dependencies
//  */
// import * as accordion from '../accordion';
// import * as widgetone from '../widgetone';
// import * as widgettwo from '../widgettwo';

// /**
//  *
//  * @param {Object} block The block to be registered.
//  */
// const registerBlock = (block) => {
//     if (!block) {
//         return;
//     }
//     const { metadata, settings, name } = block;
//     if (metadata) {
//         unstable__bootstrapServerSideBlockDefinitions({ [name]: metadata });
//     }
//     registerBlockType(name, settings);
// };

// /**
//  * Function to register blocks into the block editor.
//  */
// export const registerUclaBlocks = () => {
//     [
//         // Common blocks are grouped at the top to prioritize their display
//         // in various contexts — like the inserter and auto-complete components.
//         accordion,
//         widgetone,
//         widgettwo,
//     ].forEach(registerBlock);
// };

// registerUclaBlocks();
