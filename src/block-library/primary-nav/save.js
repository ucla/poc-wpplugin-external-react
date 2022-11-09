/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	console.log(attributes);
	/** 
	 * Unfortunately cannot use the wp_navigation entity for custom navigation (as WP does) so
	 * output component markup here for saving in DB.
	 * 
	 * Not being able to use the wp_navigation entity means the HTML for the entire navigation would
	 * be saved with each iteration of a page template that has the navigation. Primary navigation should
	 * be added to a page template not the content of a page. - ESat
	 *  
	 * */
	// if (attributes.ref) {
	// 	// Avoid rendering inner blocks when a ref is defined.
	// 	// When this id is defined the inner blocks are loaded from the
	// 	// `wp_navigation` entity rather than the hard-coded block html.
	// 	return;
	// }
	return (
		<nav tabindex="0" class="block-editor-block-list__block wp-block has-block-overlay is-layout-flex is-responsive block-editor-block-content-overlay wp-block-ucla-wcl-wpblocks-primary-nav" id="block-7fc8e8f8-33fd-4a60-896c-0f964f13dfaa" role="document" aria-label="Block: UCLA WCL Primary Navigation" data-block="7fc8e8f8-33fd-4a60-896c-0f964f13dfaa" data-type="ucla-wcl-wpblocks/primary-nav" data-title="UCLA WCL Primary Navigation" style="user-select: none;"><button type="button" aria-haspopup="true" aria-label="Open menu" class="components-button wp-block-navigation__responsive-container-open"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><rect x="4" y="7.5" width="16" height="1.5"></rect><rect x="4" y="15" width="16" height="1.5"></rect></svg></button><div class="wp-block-navigation__responsive-container" id="7fc8e8f8-33fd-4a60-896c-0f964f13dfaa-modal"><div class="wp-block-navigation__responsive-close" tabindex="-1" style="pointer-events: none;"><div class="wp-block-navigation__responsive-dialog"><button type="button" aria-label="Close menu" class="components-button wp-block-navigation__responsive-container-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg></button><div class="wp-block-navigation__responsive-container-content" id="7fc8e8f8-33fd-4a60-896c-0f964f13dfaa-modal-content"><div class="wp-block-navigation__container block-editor-block-list__layout"><div class="block-editor-block-list__block wp-block wp-block-navigation-item has-link wp-block-navigation-link" id="block-13f9f4e9-84a2-4625-a9d8-1a77761db738" role="document" aria-label="Block: Custom Link" data-block="13f9f4e9-84a2-4625-a9d8-1a77761db738" data-type="core/navigation-link" data-title="Custom Link" style="pointer-events: none;"><a class="wp-block-navigation-item__content"><div role="textbox" aria-multiline="true" aria-label="Navigation link text" class="block-editor-rich-text__editable wp-block-navigation-item__label rich-text" contenteditable="false" style="white-space: pre-wrap; min-width: 1px; pointer-events: none;">About Us</div></a></div></div></div></div></div></div></nav>
	)

	//return <InnerBlocks.Content />;
}
