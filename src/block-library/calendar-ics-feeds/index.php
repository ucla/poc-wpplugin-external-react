<?php

/**
 * Renders the `core/navigation` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_ucla_calendar_ics_feeds($attributes, $content, $block)
{
    //var_dump($attributes);

    echo do_shortcode('[ics_calendar url="https://calendar.google.com/calendar/ical/ucla.esat%40gmail.com/public/basic.ics"]');
}

/**
 * Register the navigation block.
 *
 * @uses render_block_core_navigation()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_ucla_calendar_ics_feeds()
{
    global $ucla_wcl_plugin_blocks_build_dir;
    register_block_type_from_metadata(
        $ucla_wcl_plugin_blocks_build_dir . '/calendar-ics-feeds',
        array(
            'render_callback' => 'render_block_ucla_calendar_ics_feeds',
        )
    );
}

add_action('init', 'register_block_ucla_calendar_ics_feeds');
