/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: ['core/site-logo'],
			transform: () => {
				return createBlock('ucla-wcl-wpblocks/ucla-primary-nav-link');
			},
		},
		{
			type: 'block',
			blocks: ['core/spacer'],
			transform: () => {
				return createBlock('ucla-wcl-wpblocks/ucla-primary-nav-link');
			},
		},
		{
			type: 'block',
			blocks: ['core/home-link'],
			transform: () => {
				return createBlock('ucla-wcl-wpblocks/ucla-primary-nav-link');
			},
		},
		{
			type: 'block',
			blocks: ['core/social-links'],
			transform: () => {
				return createBlock('ucla-wcl-wpblocks/ucla-primary-nav-link');
			},
		},
		{
			type: 'block',
			blocks: ['core/search'],
			transform: () => {
				return createBlock('ucla-wcl-wpblocks/ucla-primary-nav-link');
			},
		},
	],
	to: [
		{
			type: 'block',
			blocks: ['ucla-wcl-wpblocks/ucla-primary-nav-submenu'],
			transform: (attributes, innerBlocks) =>
				createBlock(
					'ucla-wcl-wpblocks/ucla-primary-nav-submenu',
					attributes,
					innerBlocks
				),
		},
		{
			type: 'block',
			blocks: ['core/spacer'],
			transform: () => {
				return createBlock('core/spacer');
			},
		},
		{
			type: 'block',
			blocks: ['core/site-logo'],
			transform: () => {
				return createBlock('core/site-logo');
			},
		},
		{
			type: 'block',
			blocks: ['core/home-link'],
			transform: () => {
				return createBlock('core/home-link');
			},
		},
		{
			type: 'block',
			blocks: ['core/social-links'],
			transform: () => {
				return createBlock('core/social-links');
			},
		},
		{
			type: 'block',
			blocks: ['core/search'],
			transform: () => {
				return createBlock('core/search', {
					showLabel: false,
					buttonUseIcon: true,
					buttonPosition: 'button-inside',
				});
			},
		},
	],
};

export default transforms;
