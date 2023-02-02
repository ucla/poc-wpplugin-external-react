/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	if (attributes.ref) {
		console.log('save.js: attributes.ref to', attributes.ref);
		// Rendering in index.php

		// Avoid rendering inner blocks when a ref is defined.
		// When this id is defined the inner blocks are loaded from the
		// `wp_navigation` entity rather than the hard-coded block html.
		return;
	}
	console.log('save.js: attributes.ref not set');
	return <InnerBlocks.Content />;
}