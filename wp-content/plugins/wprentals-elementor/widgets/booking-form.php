<?php

namespace ElementorWpRentals\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Scheme_Typography;
use Elementor\Group_Control_Box_Shadow;

if (!defined('ABSPATH'))
    exit; // Exit if accessed directly

class Wprentals_Booking_Form extends Widget_Base {

    public function __construct($data = [], $args = null) {
        parent::__construct($data, $args);

        //   wp_register_script( 'booking_form_elementor', trailingslashit( get_template_directory_uri() ).'js/booking_form_elementor.js', [ 'elementor-frontend' ], '1.0.0', true );
    }

    /**
     * Retrieve the widget name.
     *
     * @since 1.0.0
     *
     * @access public
     *
     * @return string Widget name.
     */
    public function get_name() {
        return 'Wprentals_Booking_Form';
    }

    public function get_categories() {
        return ['wprentals'];
    }

    /**
     * Retrieve the widget title.
     *
     * @since 1.0.0
     *
     * @access public
     *
     * @return string Widget title.
     */
    public function get_title() {
        return __('WpRentals Booking Form', 'rentals-elementor');
    }

    /**
     * Retrieve the widget icon.
     *
     * @since 1.0.0
     *
     * @access public
     *
     * @return string Widget icon.
     */
    public function get_icon() {
        return 'eicon-post';
    }

    /**
     * Retrieve the list of scripts the widget depended on.
     *
     * Used to set scripts dependencies required to run the widget.
     *
     * @since 1.0.0
     *
     * @access public
     *
     * @return array Widget scripts dependencies.
     */
    public function get_script_depends() {
        return ['wpestate_property'];
    }

    /**
     * Register the widget controls.
     *
     * Adds different input fields to allow the user to change and customize the widget settings.
     *
     * @since 1.0.0
     *
     * @access protected
     */
    public function elementor_transform($input) {
        $output = array();
        if (is_array($input)) {
            foreach ($input as $key => $tax) {
                $output[$tax['value']] = $tax['label'];
            }
        }
        return $output;
    }

    protected function register_controls() {



        $this->start_controls_section(
                'section_content',
                [
                    'label' => __('Content', 'rentals-elementor'),
                ]
        );

        $this->add_control(
                'article_id',
                [
                    'label' => __('Id of the property', 'rentals-elementor'),
                    'label_block' => true,
                    'type' => Controls_Manager::TEXT,
                ]
        );

        $this->end_controls_section();

        /*
         * -------------------------------------------------------------------------------------------------
         * Start Hide sections
         */
        $this->start_controls_section(
                'hide_show_section',
                [
                    'label' => esc_html__('Show/Hide Data', 'residence-elementor'),
                    'tab' => Controls_Manager::TAB_CONTENT,
                ]
        );

        $this->add_control(
                'hide_contact',
                [
                    'label' => esc_html__('Hide Favorites & Contact section', 'residence-elementor'),
                    'type' => Controls_Manager::SWITCHER,
                    'label_on' => esc_html__('Yes', 'residence-elementor'),
                    'label_off' => esc_html__('No', 'residence-elementor'),
                    'return_value' => 'none',
                    'default' => '',
                    'selectors' => [
                        '{{WRAPPER}}  .third-form-wrapper' => 'display: {{VALUE}};',
                    ],
                ]
        );

        $this->add_control(
                'hide_social',
                [
                    'label' => esc_html__('Hide Social section', 'residence-elementor'),
                    'type' => Controls_Manager::SWITCHER,
                    'label_on' => esc_html__('Yes', 'residence-elementor'),
                    'label_off' => esc_html__('No', 'residence-elementor'),
                    'return_value' => 'none',
                    'default' => '',
                    'selectors' => [
                        '{{WRAPPER}}  .prop_social' => 'display: {{VALUE}};',
                    ],
                ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
                'section_grid_stylew',
                [
                    'label' => esc_html__('Style', 'residence-elementor'),
                    'tab' => Controls_Manager::TAB_STYLE,
                ]
        );

        $this->add_responsive_control(
                'form_wrapper-content_padding', [
            'label' => esc_html__('Booking Form Padding ', 'rentals-elementor'),
            'type' => Controls_Manager::DIMENSIONS,
            'size_units' => ['px', 'em', '%'],
            'selectors' => [
                '{{WRAPPER}} .booking_form_request ' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
            ],
                ]
        );
        $this->end_controls_section();

        /*
         * -------------------------------------------------------------------------------------------------
         * Start shadow section
         */
        $this->start_controls_section(
                'section_grid_box_shadow',
                [
                    'label' => esc_html__('Box Shadow', 'residence-elementor'),
                    'tab' => Controls_Manager::TAB_STYLE,
                ]
        );
        $this->add_group_control(
                Group_Control_Box_Shadow::get_type(),
                [
                    'name' => 'box_shadow',
                    'label' => esc_html__('Box Shadow', 'residence-elementor'),
                    'selector' => '{{WRAPPER}} .booking_form_request',
                ]
        );

        $this->end_controls_section();
        /*
         * -------------------------------------------------------------------------------------------------
         * End shadow section
         */


        /* -------------------------------------------------------------------------------------------------
         * Start color section
         */
        $this->start_controls_section(
                'section_grid_colors',
                [
                    'label' => esc_html__('Colors', 'residence-elementor'),
                    'tab' => Controls_Manager::TAB_STYLE,
                ]
        );

        $this->add_control(
                'unit_color',
                [
                    'label' => esc_html__('Background Color', 'residence-elementor'),
                    'type' => Controls_Manager::COLOR,
                    'default' => '',
                    'selectors' => [
                        '{{WRAPPER}} .booking_form_request' => 'background-color: {{VALUE}}',
                    ],
                ]
        );

        $this->end_controls_section();
        /*
         * -------------------------------------------------------------------------------------------------
         * End color section
         */


        $this->start_controls_section(
                'typography_section',
                [
                    'label' => esc_html__('Typography', 'residence-elementor'),
                    'tab' => Controls_Manager::TAB_STYLE,
                ]
        );

        $this->add_group_control(
                Group_Control_Typography::get_type(),
                [
                    'name' => 'property_title',
                    'label' => esc_html__('Property Title', 'residence-elementor'),
                    'scheme' => \Elementor\Core\Schemes\Typography::TYPOGRAPHY_1,
                    'selector' => '{{WRAPPER}} .booking_form_request h3',
                ]
        );

        $this->end_controls_section();
    }

    /**
     * Render the widget output on the frontend.
     *
     * Written in PHP and used to generate the final HTML.
     *
     * @since 1.0.0
     *
     * @access protected
     */
    protected function render() {
        $settings = $this->get_settings_for_display();
        $attributes['id'] = $settings['article_id'];

        echo wpestate_booking_form($attributes);
        wpestate_ajax_show_contact_owner_form();
    }

}
