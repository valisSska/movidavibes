<?php
/**
 * Plugin Name: YITH PayPal Payments for WooCommerce Extended
 * Plugin URI: https://yithemes.com/themes/plugins/yith-paypal-payments-for-woocommerce/
 * Description: <code><strong>YITH PayPal Payments for WooCommerce</strong></code> allows you to connect your WooCommerce store with the PayPal Commerce Platform. Take different payment types from 200 markets in 100+ currencies, plus you can activate the unbranded credit card payment option. <a href="https://yithemes.com/" target="_blank">Get more plugins for your e-commerce shop on <strong>YITH</strong></a>.
 * Version: 2.11.0
 * Author: YITH
 * Author URI: https://yithemes.com/
 * Domain Path: /languages/
 * Text Domain: yith-paypal-payments-for-woocommerce
 * WC requires at least: 7.7
 * WC tested up to: 7.9
 *
 * @package YITH
 */

defined( 'ABSPATH' ) || exit;

// Define plugin constants.
defined( 'YITH_PAYPAL_PAYMENTS_VERSION' ) || define( 'YITH_PAYPAL_PAYMENTS_VERSION', '2.11.0' );
defined( 'YITH_PAYPAL_PAYMENTS_URL' ) || define( 'YITH_PAYPAL_PAYMENTS_URL', plugin_dir_url( __FILE__ ) );
defined( 'YITH_PAYPAL_PAYMENTS_PATH' ) || define( 'YITH_PAYPAL_PAYMENTS_PATH', plugin_dir_path( __FILE__ ) );
defined( 'YITH_PAYPAL_PAYMENTS_FILE' ) || define( 'YITH_PAYPAL_PAYMENTS_FILE', __FILE__ );
defined( 'YITH_PAYPAL_PAYMENTS_INIT' ) || define( 'YITH_PAYPAL_PAYMENTS_INIT', plugin_basename( __FILE__ ) );
defined( 'YITH_PAYPAL_PAYMENTS_SLUG' ) || define( 'YITH_PAYPAL_PAYMENTS_SLUG', 'yith-paypal-payments-for-woocommerce' );


/* Plugin Framework Version Check */
if ( ! function_exists( 'yit_maybe_plugin_fw_loader' ) && file_exists( YITH_PAYPAL_PAYMENTS_PATH . 'plugin-fw/init.php' ) ) {
	require_once YITH_PAYPAL_PAYMENTS_PATH . 'plugin-fw/init.php';
}
yit_maybe_plugin_fw_loader( YITH_PAYPAL_PAYMENTS_PATH );

if ( ! function_exists( 'yith_paypal_payments_install_woocommerce_admin_notice' ) ) {
	/**
	 * Administrator Notice that will display if WooCommerce plugin is deactivated.
	 */
	function yith_paypal_payments_install_woocommerce_admin_notice() {
		?>
		<div class="error">
			<p><?php esc_html_e( 'YITH PayPal Payments for WooCommerce is enabled but not effective. It requires WooCommerce in order to work.', 'yith-paypal-payments-for-woocommerce' ); ?></p>
		</div>
		<?php
	}
}

if ( ! function_exists( 'yith_paypal_payments_init' ) ) {
	/**
	 * Init plugin
	 *
	 * @since 1.0.0
	 * @author YITH <plugins@yithemes.com>
	 * @return void
	 */
	function yith_paypal_payments_init() {

		if ( ! function_exists( 'WC' ) ) {
			add_action( 'admin_notices', 'yith_paypal_payments_install_woocommerce_admin_notice' );
		}else{
			// include class and start plugin.
			include_once YITH_PAYPAL_PAYMENTS_PATH . 'includes/class-yith-paypal.php';

			load_plugin_textdomain( 'yith-paypal-payments-for-woocommerce', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

			YITH_PayPal::get_instance();
		}
	}

	add_action( 'plugins_loaded', 'yith_paypal_payments_init', 11 );
}
