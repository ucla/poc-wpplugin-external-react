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

/** Display errors during dev */
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$ucla_wcl_plugin_dir = plugin_dir_path(__FILE__);
$ucla_wcl_plugin_url = plugin_dir_url(__FILE__);
$ucla_wcl_plugin_blocks_build_dir = $ucla_wcl_plugin_dir . 'build/block-library/';
$ucla_wcl_plugin_blocks_src_dir = $ucla_wcl_plugin_dir . 'src/block-library/';
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
	global $ucla_wcl_plugin_blocks_build_dir;
	/** 
	 * Standard blocks registered here. Blocks that require PHP render included below.
	 * */
	//$block_paths = ['accordion', 'widgetone', 'widgettwo', 'widgetthree'];

	// Not sure why primary-nav-link needs to be registered here and in PHP. El needs to investigate.
	$block_paths = ['widgetone', 'ucla-primary-nav-link'];


	foreach ($block_paths as $block_path) {
		register_block_type_from_metadata($ucla_wcl_plugin_blocks_build_dir . $block_path);
	}
}

add_action('init', 'create_block_ucla_wcl_blocks_block_init');

/**
 * 
 * Blocks that require PHP render registered through index.php inclusion. 
 * !!IMPORTANT!! Blocks should only be registered through PHP or JS but not both. 
 *   Registering through JS will cause the PHP registered callback to be ignored.
 */

//include_once($ucla_wcl_plugin_blocks_src_dir . 'calendar-ics-feeds/index.php');
include_once($ucla_wcl_plugin_blocks_src_dir . 'ucla-primary-nav/index.php');
include_once($ucla_wcl_plugin_blocks_src_dir . 'ucla-primary-nav-link/index.php');
include_once($ucla_wcl_plugin_blocks_src_dir . 'ucla-primary-nav-submenu/index.php');

/**
 * 
 * Register custom block category in editor for ease of locating
 * 
 * IMPORTANT: Registering the UCLA WCL Blocks category replaces the exisitng array of categories and
 * appends the existing array after the new UCLA Blocks category which places UCLA at the top
 * of the list.
 * 
 */
function ucla_wcl_wpblocks_blocks_categories($categories, $post)
{
	global $ucla_wcl_text_domain;

	return array_merge(
		array(
			array(
				'slug' => 'ucla-wcl-wpblocks',
				'title' => __('UCLA Web Component Library', $ucla_wcl_text_domain),
				'icon'  => 'layout',
			),
		),
		$categories,

	);
}

add_filter('block_categories_all', 'ucla_wcl_wpblocks_blocks_categories', 10, 2);

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
