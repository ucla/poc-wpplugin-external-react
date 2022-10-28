<?php

/**
 * Create A Simple Plugin Settings page.
 * https://deliciousbrains.com/create-wordpress-plugin-settings-page/#wp-settings-api
 */

// Start Class
if (!class_exists('UCLA_WCL_Page_Template_Settings')) {

	class UCLA_WCL_Page_Template_Settings
	{

		public static $text_domain;

		/**
		 * Start things up
		 *
		 * @since 1.0.0
		 */
		public function __construct($domain)
		{
			self::$text_domain = $domain;
			add_action('admin_menu', array('UCLA_WCL_Page_Template_Settings', 'add_admin_menu'));
			add_action('admin_init', array('UCLA_WCL_Page_Template_Settings', 'register_settings'));
		}


		/**
		 * Returns all theme options
		 *
		 * @since 1.0.0
		 */
		public static function get_options()
		{
			return get_option('ucla_template_options');
		}

		/**
		 * Returns single theme option
		 *
		 */
		public static function get_template_option($id)
		{
			$options = self::get_options();
			if (isset($options[$id])) {
				return $options[$id];
			}
		}

		/**
		 * Add sub menu page
		 *
		 * @since 1.0.0
		 */
		public static function add_admin_menu()
		{

			add_options_page(
				__('UCLA WCL Page Template Settings', self::$text_domain),
				__('UCLA WCL Page Template Settings', self::$text_domain),
				'manage_options',
				'ucla-wcl-wpblocks',
				array('UCLA_WCL_Page_Template_Settings', 'render_admin_page')
			);
		}

		/**
		 * Register a setting and its sanitization callback.
		 *
		 * We are only registering 1 setting so we can store all options in a single option as
		 * an array. You could, however, register a new setting for each option
		 *
		 * @since 1.0.0
		 */
		public static function register_settings()
		{
			register_setting('ucla_template_options', 'ucla_template_options', array('UCLA_WCL_Page_Template_Settings', 'sanitize'));
			add_settings_section('ucla_wcl_template_settings',  __('UCLA Page Template Settings', self::$text_domain), 'ucla_wcl_template_settings_section_text', 'ucla_wcl_wpblocks');
		}

		/**
		 * Sanitization callback
		 *
		 * @since 1.0.0
		 */
		public static function sanitize($options)
		{

			// If we have options lets sanitize them
			if ($options) {

				// Address Line One
				if (!empty($options['address_input_one'])) {
					$options['address_input_one'] = sanitize_textarea_field($options['address_input_one']);
				} else {
					unset($options['address_input_one']); // Remove from options if empty
				}

				// Address Line Two
				if (!empty($options['address_input_two'])) {
					$options['address_input_two'] = sanitize_textarea_field($options['address_input_two']);
				} else {
					unset($options['address_input_two']); // Remove from options if empty
				}

				// Phone line
				if (!empty($options['phone_input'])) {
					$options['phone_input'] = sanitize_textarea_field($options['phone_input']);
				} else {
					unset($options['phone_input']); // Remove from options if empty
				}

				// Email line
				if (!empty($options['email_input'])) {
					$options['email_input'] = sanitize_textarea_field($options['email_input']);
				} else {
					unset($options['email_input']); // Remove from options if empty
				}

				// GTM Tag
				if (!empty($options['gtm_input'])) {
					$options['gtm_input'] = sanitize_textarea_field($options['gtm_input']);
				} else {
					unset($options['gtm_input']); // Remove from options if empty
				}

				// Social links
				if (!empty($options['facebook_input'])) {
					$options['facebook_input'] = sanitize_textarea_field($options['facebook_input']);
				} else {
					unset($options['facebook_input']); // Remove from options if empty
				}
				if (!empty($options['twitter_input'])) {
					$options['twitter_input'] = sanitize_textarea_field($options['twitter_input']);
				} else {
					unset($options['twitter_input']); // Remove from options if empty
				}
				if (!empty($options['instagram_input'])) {
					$options['instagram_input'] = sanitize_textarea_field($options['instagram_input']);
				} else {
					unset($options['instagram_input']); // Remove from options if empty
				}
				if (!empty($options['snapchat_input'])) {
					$options['snapchat_input'] = sanitize_textarea_field($options['snapchat_input']);
				} else {
					unset($options['snapchat_input']); // Remove from options if empty
				}
				if (!empty($options['linkedin_input'])) {
					$options['linkedin_input'] = sanitize_textarea_field($options['linkedin_input']);
				} else {
					unset($options['linkedin_input']); // Remove from options if empty
				}
				if (!empty($options['youtube_input'])) {
					$options['youtube_input'] = sanitize_textarea_field($options['youtube_input']);
				} else {
					unset($options['youtube_input']); // Remove from options if empty
				}
				if (!empty($options['tiktok_input'])) {
					$options['tiktok_input'] = sanitize_textarea_field($options['tiktok_input']);
				} else {
					unset($options['tiktok_input']); // Remove from options if empty
				}
			}

			// Return sanitized options
			return $options;
		}


		/**
		 * Settings page output
		 *
		 * @since 1.0.0
		 */
		public static function render_admin_page()
		{
?>

			<div class="wrap">

				<form method="post" action="options.php">

					<?php settings_fields('ucla_template_options');
					do_settings_sections('ucla_wcl_wpblocks'); ?>


					<table class="form-table UCLA-custom-admin-login-table">
						<?php // Text input example 
						?>
						<tr valign="top">
							<th scope="row"><?php _e('Footer Address', self::$text_domain); ?></th>
							<td>
								<?php $address_one = self::get_template_option('address_input_one'); ?>
								<input type="text" name="ucla_template_options[address_input_one]" placeholder="1602 Molecular Science Building" value="<?php echo esc_attr($address_one); ?>" />
								<br />
								<?php $address_two = self::get_template_option('address_input_two'); ?>
								<input type="text" name="ucla_template_options[address_input_two]" placeholder="Los Angeles, CA 90024" value="<?php echo esc_attr($address_two); ?>" />
							</td>
						</tr>
						<tr valign="top">
							<th scope="row"><?php _e('Footer Phone', self::$text_domain); ?></th>
							<td>
								<?php $phone = self::get_template_option('phone_input'); ?>
								<input type="text" name="ucla_template_options[phone_input]" placeholder="123-45-678" value="<?php echo esc_attr($phone); ?>" />
							</td>
						</tr>
						<tr valign="top">
							<th scope="row"><?php _e('Footer Email', self::$text_domain); ?></th>
							<td>
								<?php $email = self::get_template_option('email_input'); ?>
								<input type="text" name="ucla_template_options[email_input]" placeholder="contact@ucla.edu" value="<?php echo esc_attr($email); ?>" />
							</td>
						</tr>

						<tr valign="top">
							<th scope="row"><?php _e('GTM Tag ID', self::$text_domain); ?></th>
							<td>
								<?php $gtm = self::get_template_option('gtm_input'); ?>
								<input type="text" name="ucla_template_options[gtm_input]" placeholder="id" value="<?php echo esc_attr($gtm); ?>" />
							</td>
						</tr>

						<!-- Social Links -->
						<tr valign="top">
							<th scope="row"><?php _e('Footer Facebook Link', self::$text_domain); ?></th>
							<td>
								<?php $facebook = self::get_template_option('facebook_input'); ?>
								<input type="text" name="ucla_template_options[facebook_input]" placeholder="facebook.com/" value="<?php echo esc_attr($facebook); ?>" />
							</td>
						</tr>
						<tr valign="top">
							<th scope="row"><?php _e('Footer Instagram Link', self::$text_domain); ?></th>
							<td>
								<?php $instagram = self::get_template_option('instagram_input'); ?>
								<input type="text" name="ucla_template_options[instagram_input]" placeholder="instagram.com/" value="<?php echo esc_attr($instagram); ?>" />
							</td>
						</tr>
						<tr valign="top">
							<th scope="row"><?php _e('Footer Twitter Link', self::$text_domain); ?></th>
							<td>
								<?php $twitter = self::get_template_option('twitter_input'); ?>
								<input type="text" name="ucla_template_options[twitter_input]" placeholder="twitter.com/" value="<?php echo esc_attr($twitter); ?>" />
							</td>
						</tr>
						<tr valign="top">
							<th scope="row"><?php _e('Footer Snapchat Link', self::$text_domain); ?></th>
							<td>
								<?php $snapchat = self::get_template_option('snapchat_input'); ?>
								<input type="text" name="ucla_template_options[snapchat_input]" placeholder="snapchat.com/" value="<?php echo esc_attr($snapchat); ?>" />
							</td>
						</tr>
						<tr valign="top">
							<th scope="row"><?php _e('Footer Linkedin Link', self::$text_domain); ?></th>
							<td>
								<?php $linkedin = self::get_template_option('linkedin_input'); ?>
								<input type="text" name="ucla_template_options[linkedin_input]" placeholder="linkedin.com/" value="<?php echo esc_attr($linkedin); ?>" />
							</td>
						</tr>
						<tr valign="top">
							<th scope="row"><?php _e('Footer Youtube Link', self::$text_domain); ?></th>
							<td>
								<?php $youtube = self::get_template_option('youtube_input'); ?>
								<input type="text" name="ucla_template_options[youtube_input]" placeholder="youtube.com/" value="<?php echo esc_attr($youtube); ?>" />
							</td>
						</tr>
						<tr valign="top">
							<th scope="row"><?php _e('Footer Tiktok Link', self::$text_domain); ?></th>
							<td>
								<?php $tiktok = self::get_template_option('tiktok_input'); ?>
								<input type="text" name="ucla_template_options[tiktok_input]" placeholder="tiktok.com/" value="<?php echo esc_attr($tiktok); ?>" />
							</td>
						</tr>
					</table>

					<?php submit_button(); ?>

				</form>

			</div><!-- .wrap -->
<?php }
	}
}

global $ucla_wcl_text_domain;

new UCLA_WCL_Page_Template_Settings($ucla_wcl_text_domain);

// Helper function to use in your theme to return a theme option value
function ucla_wcl_wpblocks_get_template_option($id = '')
{
	return UCLA_WCL_Page_Template_Settings::get_template_option($id);
}
