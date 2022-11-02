<?php

/**
 * Plugin Name:       UCLA WCL Blocks and Templates
 * Description:       Proof of Concept - UCLA branded and ADA accessible web components available as blocks and page templates.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Disabilities and Computing Program and Strategic Communications Patnership
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ucla-wcl-wpblocks
 *
 * @package           ucla-wcl-wpblocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

$ucla_wcl_plugin_dir = plugin_dir_path(__FILE__);
$ucla_wcl_plugin_url = plugin_dir_url(__FILE__);
$ucla_wcl_plugin_blocks_dir = $ucla_wcl_plugin_dir . 'build/blocks/';
$ucla_wcl_text_domain = 'ucla-wcl-wpblocks';

function ucla_wcl_wpblocks_editor_assets()
{
	// We could include from local codebase if there was a
	// way to import from node_modules in dist but there isn't because import is breaking build.
	// See node in src/_global/index.js

	wp_enqueue_style('ucla-wcl-global-styles',  'https://strategic-communications.ucla.edu/wp-content/themes/ucla-wp/dist/css/global.css?ver=6.0.2');
	wp_enqueue_style('ucla-wcl-block-styles',  'https://cdn.webcomponents.ucla.edu/1.0.0/css/ucla-lib.min.css?ver=6.0.2');
}

//add_theme_support('editor-styles');
add_action('enqueue_block_assets', 'ucla_wcl_wpblocks_editor_assets');

function create_block_ucla_wcl_blocks_block_init()
{
	global $ucla_wcl_plugin_blocks_dir;

	register_block_type_from_metadata($ucla_wcl_plugin_blocks_dir . "widgetone/");
	register_block_type_from_metadata($ucla_wcl_plugin_blocks_dir . "widgettwo/");
	register_block_type_from_metadata($ucla_wcl_plugin_blocks_dir . "widgetthree/");
	register_block_type_from_metadata($ucla_wcl_plugin_blocks_dir . "accordion/");
}

add_action('init', 'create_block_ucla_wcl_blocks_block_init');

/**
 * 
 * Register custom block category in editor for ease of locating
 * 
 */
function ucla_wcl_wpblocks_blocks_categories($categories, $post)
{
	global $ucla_wcl_text_domain;

	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'ucla-wcl-wpblocks',
				'title' => __('UCLA WCL Blocks', $ucla_wcl_text_domain),
				'icon'  => 'wordpress',
			),
		)
	);
}

add_filter('block_categories', 'ucla_wcl_wpblocks_blocks_categories', 10, 2);

// /** 
//  * See note below. Finally got working using view.js by including wp-element and using wp-element
//  * to render. - El
//  * 
//  * WordPress block.json is acting buggy and not loading view scripts even when adding
//  *  as render callback so enqueue here.
//  */
// function ucla_wcl_wpblocks_load_view_scripts()
// {
// 	if (is_admin()) return;
// 	global $ucla_wcl_plugin_url;

// 	// Enqueue block editor styles
// 	wp_enqueue_script(
// 		'ucla-wcl-wpblocks-accordion-viewscripts',
// 		$ucla_wcl_plugin_url . "/build/blocks/accordion/view.js"
// 	);
// }

// /**
//  * Hook the enqueue functions into the frontend
//  */
// add_action('enqueue_block_assets', 'ucla_wcl_wpblocks_load_view_scripts');



/** 
 * Register WCL page templates which add layouts that include the default 
 * UCLA header and footer. Including the page layouts here in the plug-in gives
 * implementers the flexibility of using the theme of their choice. This can
 * increase adoption. - ESat
 * 
 */
include_once $ucla_wcl_plugin_dir . 'src/templates/register_templates.php';
