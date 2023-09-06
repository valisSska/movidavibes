<?php
/**
 * The plugin general options array
 *
 * @author YITH <plugins@yithemes.com>
 * @package YITH PayPal Payments for WooCommerce
 * @version 1.0.0
 */

$merchant = YITH_PayPal_Merchant::get_merchant();

defined( 'ABSPATH' ) || exit;

return array(
	'general' => array(
		array(
			'title' => esc_html_x( 'General Options', 'Title of setting tab', 'yith-paypal-payments-for-woocommerce' ),
			'type'  => 'title',
			'desc'  => '',
			'id'    => 'yith_ppwc_general_options',
		),

		array(
			'id'        => 'yith_ppwc_gateway_options[enabled]',
			'title'     => esc_html_x( 'Enable YITH PayPal Payments', 'Admin panel option title', 'yith-paypal-payments-for-woocommerce' ),
			'desc'      => esc_html_x( 'Enable YITH PayPal Payments for WooCommerce features on your site.', 'Admin panel option description', 'yith-paypal-payments-for-woocommerce' ),
			'type'      => 'yith-field',
			'yith-type' => 'onoff',
			'default'   => 'no',
		),

		array(
			'id'        => 'yith_ppwc_gateway_options[title]',
			'title'     => esc_html_x( 'Title', 'Admin panel option title', 'yith-paypal-payments-for-woocommerce' ),
			'desc'      => esc_html_x( 'Enter a title to identify this payment method during checkout.', 'Admin panel option description', 'yith-paypal-payments-for-woocommerce' ),
			'type'      => 'yith-field',
			'yith-type' => 'text',
			'default'   => esc_html_x( 'Pay with PayPal', 'Default value for PayPal Payment title.', 'yith-paypal-payments-for-woocommerce' ),
		),

		array(
			'id'        => 'yith_ppwc_gateway_options[description]',
			'title'     => esc_html_x( 'Description', 'Admin panel option title', 'yith-paypal-payments-for-woocommerce' ),
			'desc'      => esc_html_x( 'Enter an optional description for this payment method.', 'Admin panel option description', 'yith-paypal-payments-for-woocommerce' ),
			'type'      => 'yith-field',
			'yith-type' => 'text',
			'default'   => esc_html_x( 'Pay safe with PayPal', 'Default value for PayPal Payment description.', 'yith-paypal-payments-for-woocommerce' ),
		),

		array(
			'id'        => 'yith_ppwc_gateway_options[environment]',
			'title'     => esc_html_x( 'Environment', 'Admin panel option title', 'yith-paypal-payments-for-woocommerce' ),
			'desc'      => esc_html_x( 'Choose if you want to take live payment transactions or test payments using a sandbox environment.', 'Admin panel option description', 'yith-paypal-payments-for-woocommerce' ),
			'type'      => 'yith-field',
			'yith-type' => 'radio',
			'options'   => array(
				'production' => esc_html_x( 'Live', 'Admin panel option. Production environment.', 'yith-paypal-payments-for-woocommerce' ),
				'sandbox'    => esc_html_x( 'Sandbox', 'Admin panel option. Development environment.', 'yith-paypal-payments-for-woocommerce' ),
			),
			'default'   => 'production',
		),

		array(
			'id'      => '',
			'title'   => '',
			'desc'    => '',
			'type'    => 'yith_ppwc_login_button',
			'default' => '',
		),

		array(
			'id'        => 'yith_ppwc_gateway_enabled_to_manage_custom_card',
			'title'     => '',
			'type'      => 'yith-field',
			'yith-type' => 'hidden',
			'default'   => wc_bool_to_string( $merchant->is_enabled_to_custom_card_fields() ),
		),

		array(
			'id'        => 'yith_ppwc_gateway_options[intent]',
			'title'     => esc_html_x( 'Payment action', 'Admin title option', 'yith-paypal-payments-for-woocommerce' ),
			'desc'      => esc_html_x( 'Choose whether to capture funds immediately or authorize the payment only.', 'Admin option', 'yith-paypal-payments-for-woocommerce' ),
			'type'      => 'yith-field',
			'yith-type' => 'radio',
			'default'   => 'capture',
			'options'   => array(
				// translators:placeholders are html tags.
				'capture'   => sprintf( esc_html_x( 'Sale %1$sFunds are transferred instantly from customer account to merchant account.%2$s', 'Admin option, the placeholder are tags', 'yith-paypal-payments-for-woocommerce' ), '<small>', '</small>' ),
				// translators:placeholders are html tags.
				'authorize' => sprintf( esc_html__( 'Authorize and capture %1$sFunds will be reserved for 3 days and the order will be set as "On hold" until the admin completes it.%2$s', 'yith-paypal-payments-for-woocommerce' ), '<small>', '</small>' ),
			),
		),


		array(
			'id'        => 'yith_ppwc_button_on',
			'title'     => esc_html_x( 'Show PayPal button on', 'Admin title option', 'yith-paypal-payments-for-woocommerce' ),
			'desc'      => esc_html_x( 'Choose where to show the PayPal payment button.', 'Admin description option', 'yith-paypal-payments-for-woocommerce' ),
			'type'      => 'yith-field',
			'yith-type' => 'checkbox-array',
			'default'   => array( 'cart', 'checkout' ),
			'options'   => array(
				// translators:placeholders are html tags.
				'cart'     => esc_html_x( 'Cart page', 'Admin option', 'yith-paypal-payments-for-woocommerce' ),
				// translators:placeholders are html tags.
				'checkout' => esc_html_x( 'Checkout', 'Admin option', 'yith-paypal-payments-for-woocommerce' ),
				// translators:placeholders are html tags.
				'product'  => esc_html_x( 'Single product pages', 'Admin option', 'yith-paypal-payments-for-woocommerce' ),
			),
		),

		array(
			'id'        => 'yith_ppwc_gateway_options[fast_checkout]',
			'title'     => esc_html_x( 'Fast checkout', 'Admin title option', 'yith-paypal-payments-for-woocommerce' ),
			'desc'      => esc_html_x( 'In case the payment button is displayed on the product page or in the cart and you enable this option, customers will be able to pay without leaving the product or cart page, and so will skip the checkout page.', 'Admin option', 'yith-paypal-payments-for-woocommerce' ),
			'type'      => 'yith-field',
			'yith-type' => 'onoff',
			'default'   => 'no',
		),


		array(
			'id'        => 'yith_ppwc_gateway_options[prefix]',
			'title'     => esc_html_x( 'Invoice prefix', 'Admin title option', 'yith-paypal-payments-for-woocommerce' ),
			'desc'      => esc_html_x( 'Enter a prefix that will be attached to the invoice number. This is useful if you have connected the same PayPal account to other shops.', 'Admin option', 'yith-paypal-payments-for-woocommerce' ),
			'type'      => 'yith-field',
			'yith-type' => 'text',
			'default'   => esc_html_x( 'YITH-', 'Admin option, this is the default option of invoice prefix, do not translate', 'yith-paypal-payments-for-woocommerce' ),
		),


		array(
			'type' => 'sectionend',
			'id'   => 'yith_ppwc_end_general_options',
		),
	),
);
