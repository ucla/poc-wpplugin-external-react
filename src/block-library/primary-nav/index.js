/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { navigation as icon } from '@wordpress/icons';

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
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import deprecated from './deprecated';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	icon,
	// example: {
	// 	innerBlocks: [
	// 		{
	// 			name: 'ucla-wcl-wpblocks/navigation-link',
	// 			attributes: {
	// 				// translators: 'Home' as in a website's home page.
	// 				label: __('Home'),
	// 				url: 'https://make.wordpress.org/',
	// 			},
	// 		},
	// 		{
	// 			name: 'ucla-wcl-wpblocks/navigation-link',
	// 			attributes: {
	// 				// translators: 'About' as in a website's about page.
	// 				label: __('About'),
	// 				url: 'https://make.wordpress.org/',
	// 			},
	// 		},
	// 		{
	// 			name: 'ucla-wcl-wpblocks/navigation-link',
	// 			attributes: {
	// 				// translators: 'Contact' as in a website's contact page.
	// 				label: __('Contact'),
	// 				url: 'https://make.wordpress.org/',
	// 			},
	// 		},
	// 	],
	// },
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
	deprecated
});

/** Original from ./navigation/index.js used ../utils/init-block coupled with init.js script but not necessary **/