<?php
/**
 * The plugin general options array
 *
 * @author YITH <plugins@yithemes.com>
 * @package YITH PayPal Payments for WooCommerce
 * @version 1.0.0
 */

defined( 'ABSPATH' ) || exit;

return array(
	'button' => array(
		array(
			'title' => esc_html_x( 'Button Options', 'Title of setting tab.', 'yith-paypal-payments-for-woocommerce' ),
			'type'  => 'title',
			'desc'  => '',
			'id'    => 'yith_ppwc_button_options',
		),

		array(
			'id'        => 'yith_ppwc_button_shape',
			'title'     => esc_html_x( 'Button shape', 'Admin title option', 'yith-paypal-payments-for-woocommerce' ),
			// translators:placeholders are html tags.
			'desc'      => sprintf( esc_html_x( 'Choose the PayPal button shape style. The recommended shape is %1$srectangular%2$s.', 'Admin option, the placeholder are tags', 'yith-paypal-payments-for-woocommerce' ), '<strong>', '</strong>' ),
			'type'      => 'yith-field',
			'yith-type' => 'radio',
			'default'   => 'rect',
			'options'   => array(
				'rect' => esc_html_x( 'Rectangular', 'Admin option', 'yith-paypal-payments-for-woocommerce' ),
				'pill' => esc_html_x( 'Pill', 'Admin option', 'yith-paypal-payments-for-woocommerce' ),
			),
		),

		array(
			'id'        => 'yith_ppwc_button_color',
			'title'     => esc_html_x( 'Button color', 'Admin title option', 'yith-paypal-payments-for-woocommerce' ),
			// translators:placeholders are html tags.
			'desc'      => sprintf( esc_html_x( 'Choose the PayPal button color. The recommended color is %1$sgold%2$s.', 'Admin option, the placeholder are tags', 'yith-paypal-payments-for-woocommerce' ), '<strong>', '</strong>' ),
			'type'      => 'yith-field',
			'yith-type' => 'select-images',
			'default'   => 'gold-rect',
			'options'   => array(
				'gold-rect'   => array(
					'label' => esc_html_x( 'Gold', 'Option: Button color', 'yith-paypal-payments-for-woocommerce' ),
					'image' => YITH_PAYPAL_PAYMENTS_URL . 'assets/images/gold.jpeg',
				),
				'blue-rect'   => array(
					'label' => esc_html_x( 'Blue', 'Option: Button color', 'yith-paypal-payments-for-woocommerce' ),
					'image' => YITH_PAYPAL_PAYMENTS_URL . 'assets/images/blue.jpeg',
				),
				'silver-rect' => array(
					'label' => esc_html_x( 'Silver', 'Option: Button color', 'yith-paypal-payments-for-woocommerce' ),
					'image' => YITH_PAYPAL_PAYMENTS_URL . 'assets/images/silver.jpeg',
				),
				'white-rect'  => array(
					'label' => esc_html_x( 'White', 'Option: Button color', 'yith-paypal-payments-for-woocommerce' ),
					'image' => YITH_PAYPAL_PAYMENTS_URL . 'assets/images/white.jpeg',
				),
				'black-rect'  => array(
					'label' => esc_html_x( 'Black', 'Option: Button color', 'yith-paypal-payments-for-woocommerce' ),
					'image' => YITH_PAYPAL_PAYMENTS_URL . 'assets/images/black.jpeg',
				),
				'gold-pill'   => array(
					'label' => esc_html_x( 'Gold', 'Option: Button color', 'yith-paypal-payments-for-woocommerce' ),
					'image' => YITH_PAYPAL_PAYMENTS_URL . 'assets/images/gold_pill.jpeg',
				),
				'blue-pill'   => array(
					'label' => esc_html_x( 'Blue', 'Option: Button color', 'yith-paypal-payments-for-woocommerce' ),
					'image' => YITH_PAYPAL_PAYMENTS_URL . 'assets/images/blue_pill.jpeg',
				),
				'silver-pill' => array(
					'label' => esc_html_x( 'Silver', 'Option: Button color', 'yith-paypal-payments-for-woocommerce' ),
					'image' => YITH_PAYPAL_PAYMENTS_URL . 'assets/images/silver_pill.jpeg',
				),
				'white-pill'  => array(
					'label' => esc_html_x( 'White', 'Option: Button color', 'yith-paypal-payments-for-woocommerce' ),
					'image' => YITH_PAYPAL_PAYMENTS_URL . 'assets/images/white_pill.jpeg',
				),
				'black-pill'  => array(
					'label' => esc_html_x( 'Black', 'Option: Button color', 'yith-paypal-payments-for-woocommerce' ),
					'image' => YITH_PAYPAL_PAYMENTS_URL . 'assets/images/black_pill.jpeg',
				),
			),

		),

		array(
			'id'           => 'yith_ppwc_button_size',
			'title'        => esc_html_x( 'Button container width', 'Admin title option', 'yith-paypal-payments-for-woocommerce' ),
			'desc'         => sprintf( esc_html_x( 'Use this value to edit the button size.', 'Admin option', 'yith-paypal-payments-for-woocommerce' ), '<strong>', '</strong>' ),
			'type'         => 'yith-field',
			'yith-type'    => 'dimensions',
			'allow_linked' => false,
			'dimensions'   => array(
				'width' => esc_html_x( 'Width', 'Admin option', 'yith-paypal-payments-for-woocommerce' ),
			),
			'default'      => array(
				'dimensions' => array(
					'width' => 100,
				),
				'unit'       => 'percentage',
			),
		),

		array(
			'type' => 'sectionend',
			'id'   => 'yith_ppwc_end_button_options',
		),

		array(
			'title' => esc_html_x( 'Additional payments buttons', 'Title of setting tab.', 'yith-paypal-payments-for-woocommerce' ),
			'type'  => 'title',
			'desc'  => sprintf( esc_html_x( 'Please note: the alternative payment buttons are basically a list of external services that you can offer to your customers to pay. They can be used on the condition that the gateways are available in their country. The displayed services are the ones offered by PayPal Commerce Platform and you can choose whether to enable them and which of them. For more information about the availability, please, contact %s.', 'placeholder is PayPal support link', 'yith-paypal-payments-for-woocommerce' ), yith_ppwc_get_pp_support_link() ),
			'id'    => 'yith_ppwc_funding_options',
		),

		array(
			'id'        => 'yith_ppwc_button_funding_sources',
			'title'     => esc_html_x( 'Additional payments buttons for PayPal transactions', 'Admin title option', 'yith-paypal-payments-for-woocommerce' ),
			'desc'      => sprintf( esc_html_x( 'Select the additional payments buttons that will be available in the PayPal wallet by default.%sWhether these are eligible and visible to the user, this will depend on a variety of factors including customer location.', 'Admin option. Placeholder is an html tag.', 'yith-paypal-payments-for-woocommerce' ), '<br>' ),
			'type'      => 'yith-field',
			'yith-type' => 'checkbox-array',
			'default'   => array( 'card' ),
			'options'   => yith_ppwc_funding_sources_list(),
		),

		array(
			'type' => 'sectionend',
			'id'   => 'yith_ppwc_end_funding_options',
		),
	),
);
