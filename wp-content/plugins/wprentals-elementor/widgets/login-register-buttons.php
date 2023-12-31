<?php
namespace ElementorWpRentals\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly


class Wprentals_Login_Register_Buttons extends Widget_Base {

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
		return 'Wprentals_Login_Register_Buttons';
	}

        public function get_categories() {
		return [ 'wprentals' ];
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
		return __( 'WpRentals Login & Register Button', 'rentals-elementor' );
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
		return 'eicon-text-field';
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
	return [ '' ];
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

    public function elementor_transform($input){
            $output=array();
            if( is_array($input) ){
                foreach ($input as $key=>$tax){
                    $output[$tax['value']]=$tax['label'];
                }
            }
            return $output;
        }

        protected function register_controls() {



            $this->start_controls_section(
                    'section_content',
                    [
                            'label' => __( 'Content', 'rentals-elementor' ),
                    ]
            );




            $this->add_control(
                    'register_label',
                    [
                        'label' => __( 'Register link text', 'rentals-elementor' ),
                        'label_block'=>true,
                        'type' => Controls_Manager::TEXT,
                    ]
            );


            $this->add_control(
                    'register_url',
                    [
                        'label' => __( 'Register page url', 'rentals-elementor' ),
                        'label_block'=>true,
                        'type' => Controls_Manager::TEXT,
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
                $attributes['register_label']    =   $settings['register_label'];
                $attributes['register_url'] =   $settings['register_url'];
                echo  wpestate_login_register_buttons_function($attributes);
	}


}
