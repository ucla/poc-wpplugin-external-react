<?php

/**
 * Renders the `ucla-wcl-wpblocks/calendar-ics-feeds` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function ucla_calendar_ics_feeds_render_block($attributes, $content, $block)
{
    /** 
     * Get ucla-calendar-ics-feeds cookie and set selected based on value of cookie
     * See ./view.js
     * 
     */


    if (isset($_COOKIE['ucla-calendar-ics-feeds'])) {
        $selected_ids = explode(',', $_COOKIE['ucla-calendar-ics-feeds']);
    } else $selected_ids = [];

    $markup = <<<TEXT
        <div class="ucla-select-calendars">
            <form id="ucla-select-calendars__form">
                <label for="cals">Include Multiple Calendars:</label>
                <select name="cals" id="cals" multiple="multiple" size="1" class="ucla-select-calendars__field-select">
    TEXT;

    foreach ($attributes['feeds'] as $i => $feed) {

        if (count($selected_ids) > 0 && $i == $selected_ids[0]) {
            $opt_markup = '<option value="%s" selected="selected">%s</option>';
            array_shift($selected_ids);
            $selected_urls[] = $feed[1];
        } else {
            $opt_markup = '<option value="%s">%s</option>';
        }

        $markup .= sprintf($opt_markup, $i, esc_html($feed[0]));
    }

    $markup .= <<<TEXT

                </select>
                <button type="submit">Select</button>
            </form>
        </div>
    TEXT;

    $markup .= do_shortcode('[ics_calendar url="' . implode(' | ', $selected_urls) . '"]');

    return $markup;
}

/**
 * Register the calendar-ics-feeds block.
 *
 * @uses render_block_core_navigation()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function ucla_calendar_ics_feeds_register_blocks()
{
    global $ucla_wcl_plugin_blocks_build_dir;
    register_block_type_from_metadata(
        $ucla_wcl_plugin_blocks_build_dir . '/calendar-ics-feeds',
        array(
            'render_callback' => 'ucla_calendar_ics_feeds_render_block',
        )
    );
}

add_action('init', 'ucla_calendar_ics_feeds_register_blocks');

/**
 * 
 * enqueue stylesheets - Registering front-end styles in the block.json is not working.
 * see WP ticket: https://wordpress.org/support/topic/custom-gutenberg-block-styles-not-loading-on-frontend/
 * 
 */

function ucla_calendar_ics_feeds_enqueue_assets()
{
    global $ucla_wcl_plugin_url;

    wp_enqueue_style('ucla-calendar-ics-feeds-block-styles',  $ucla_wcl_plugin_url . '/assets/css/calendar-ics-feeds-view.css');
}

add_action('enqueue_block_assets', 'ucla_calendar_ics_feeds_enqueue_assets');
