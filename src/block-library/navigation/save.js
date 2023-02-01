/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	console.log('save.js')
	if (attributes.ref) {
		console.log('save.js: attribute.ref set')

		// Avoid rendering inner blocks when a ref is defined.
		// When this id is defined the inner blocks are loaded from the
		// `wp_navigation` entity rather than the hard-coded block html.
		return;
	}
	console.log('save.js: attribute.ref not set')
	return <InnerBlocks.Content />;
}
