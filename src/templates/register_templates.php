<?php

/**
 * 
 * Register WCL page templates which add layouts that include the default 
 * UCLA header and footer. Including the page layouts here in the plug-in gives
 * implementers the flexibility of using the theme of their choice. This can
 * increase adoption. - ESat Register templates
 *
 *  Add page templates.
 *
 * @param array $templates The list of page templates
 *
 * @return array $templates The modified list of page templates
 */

$template_dir = plugin_dir_path(__FILE__);

function ucla_wcl_wpblocks_add_page_template_to_dropdown($templates)
{
    global $template_dir;
    $templates[$template_dir . 'page_templates/default.php'] = __('UCLA Default Page Template', 'ucla-wcl-wpblocks');

    return $templates;
}
/**
 * Callback to be executed when the template change is saved.
 */
function ucla_wcl_wpblocks_change_page_template($template)
{
    if (is_page()) {
        $meta = get_post_meta(get_the_ID());

        if (!empty($meta['_wp_page_template'][0]) && $meta['_wp_page_template'][0] != $template) {
            $template = $meta['_wp_page_template'][0];
        }
    }

    return $template;
}

add_filter('theme_page_templates', 'ucla_wcl_wpblocks_add_page_template_to_dropdown');
add_filter('template_include', 'ucla_wcl_wpblocks_change_page_template', 99);

/**
 * Register the Page Template Settings page.
 */
include_once($template_dir . 'page_template_settings_page.php');
