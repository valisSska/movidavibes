<?php
namespace ElementorWpRentals\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Scheme_Typography;
use Elementor\Group_Control_Box_Shadow;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly


class WpRentals_Video_Player extends Widget_Base {

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
		return 'WpRentals_Video_Player';
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
		return __( 'WpRentals Video Player', 'rentals-elementor' );
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
		return '   eicon-email-field';
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
			'section_icon',
			[
				'label' => __( 'Icon', 'rentals-elementor' ),
			]
		);

		$this->add_control(
			'icon',
			[
				'label' => __( 'Icon', 'rentals-elementor' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-star',
					'library' => 'solid',
				],
			]
		);
                
                
                $this->add_control(
			'video_type',
			[
				'label' => __( 'Video Location', 'rentals-elementor' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'solid',
				'options' => [
					'youtube'  => __( 'YouTube', 'rentals-elementor' ),
					'vimeo' => __( 'Vimeo', 'rentals-elementor' ),
					'local' => __( 'Local', 'rentals-elementor' ),
									],
			]
		);
                
                
                $this->add_control(
			'video_id',
			[
                            'label' => __( 'Video Id( if youtube or vimeo)', 'rentals-elementor' ),
                            'type' => Controls_Manager::TEXT,
			]
		);

                    
                $this->add_control(
			'video_local',
			[
                            'label' => __( 'Video path (if filled will be used instead of vimeo or youtube videos)', 'rentals-elementor' ),
                            'type' => Controls_Manager::TEXT,
                            'label_block'=>true,
			]
		);


		$this->end_controls_section();

                $this->start_controls_section(
                         'style_section',
                         [
                             'label'     => esc_html__( 'Style', 'rentals-elementor' ),
                             'tab'       => Controls_Manager::TAB_STYLE,
                         ]
                     );
                   
                $this->add_control(
			'width',
			[
				'label' => __( 'Icon Size', 'plugin-domain' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 300,
						'step' => 1,
					],
					
				],
				'default' => [
					'unit' => 'px',
					'size' => 20,
				],
				'selectors' => [
                                    '{{WRAPPER}} .wprentals_video_wrapper i' => 'font-size: {{SIZE}}{{UNIT}};',
                                    '{{WRAPPER}} .wprentals_video_wrapper svg' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);

                   
                   
                   $this->add_responsive_control(
                         'icon_padding',
                         [
                             'label'      => esc_html__( 'Content Area Padding', 'rentals-elementor' ),
                             'type'       => Controls_Manager::DIMENSIONS,
                             'size_units' => [ 'px', '%', 'em' ],
                             'selectors'  => [
                                 '{{WRAPPER}} .wprentals_video_wrapper' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                             ],
                         ]
                     );

                   
             
                
               
            $this->add_control(
                  'unit_color',
                  [
                      'label'     => esc_html__( 'Icon Background', 'rentals-elementor' ),
                      'type'      => Controls_Manager::COLOR,
                      'default'   => '',
                      'selectors' => [
                          '{{WRAPPER}} .wprentals_video_wrapper' => 'background-color: {{VALUE}}',

                      ],
                  ]
              );
            
            $this->add_control(
                  'unit_color_icon',
                  [
                      'label'     => esc_html__( 'Icon Color', 'rentals-elementor' ),
                      'type'      => Controls_Manager::COLOR,
                      'default'   => '',
                      'selectors' => [
                            '{{WRAPPER}} .wprentals_video_wrapper i ' => 'color: {{VALUE}}',
                            '{{WRAPPER}} .wprentals_video_wrapper svg ' => 'fill: {{VALUE}}',
                      ],
                  ]
              );
            
             $this->add_control(
                  'unit_color_hover',
                  [
                      'label'     => esc_html__( 'Background Color on Hover', 'rentals-elementor' ),
                      'type'      => Controls_Manager::COLOR,
                      'default'   => '',
                      'selectors' => [
                          '{{WRAPPER}} .wprentals_video_wrapper:hover' => 'background-color: {{VALUE}}',

                      ],
                  ]
              );
             
             $this->add_control(
                  'unit_color_icon_hover',
                  [
                      'label'     => esc_html__( 'Icon Color on Hover', 'rentals-elementor' ),
                      'type'      => Controls_Manager::COLOR,
                      'default'   => '',
                      'selectors' => [
                          '{{WRAPPER}} .wprentals_video_wrapper:hover i'  => 'color: {{VALUE}}',
                           '{{WRAPPER}} .wprentals_video_wrapper:hover svg ' => 'fill: {{VALUE}}',

                      ],
                  ]
              );
            

            
              
               $this->add_responsive_control(
                    'button_border_width', [
                      'label' => esc_html__('Border Width', 'rentals-elementor'),
                      'type' => Controls_Manager::DIMENSIONS,
                      'placeholder' => '1',
                      'size_units' => ['px'],
                      'selectors' => [
                          '{{WRAPPER}} .wprentals_video_wrapper' => 'border-style: solid;border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                      ],
                          ]
                  );

                $this->add_responsive_control(
                        'button_border_radius', [
                    'label' => esc_html__('Border Radius', 'rentals-elementor'),
                    'type' => Controls_Manager::DIMENSIONS,
                    'size_units' => ['px', '%'],
                    'selectors' => [
                        '{{WRAPPER}} .wprentals_video_wrapper' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                     ],
                        ]
                );

                 $this->add_control(
                  'border_color_icon',
                  [
                      'label'     => esc_html__( 'Border Color ', 'rentals-elementor' ),
                      'type'      => Controls_Manager::COLOR,
                      'default'   => '',
                      'selectors' => [
                          '{{WRAPPER}} .wprentals_video_wrapper'  => 'border-color: {{VALUE}}',
                       

                      ],
                  ]
              );
            
                 
                  $this->add_control(
                  'border_color_icon_hover',
                  [
                      'label'     => esc_html__( 'Border Color on Hover', 'rentals-elementor' ),
                      'type'      => Controls_Manager::COLOR,
                      'default'   => '',
                      'selectors' => [
                             '{{WRAPPER}} .wprentals_video_wrapper:hover'  => 'border-color: {{VALUE}}',

                      ],
                  ]
              );
            
        
        
                 $this->end_controls_section();
                 
              
                
                
                $this->start_controls_section(
                'section_grid_box_shadow',
                [
                    'label' => esc_html__( 'Box Shadow', 'rentals-elementor' ),
                    'tab'   => Controls_Manager::TAB_STYLE,
                ]
                );
                $this->add_group_control(
                    Group_Control_Box_Shadow::get_type(),
                    [
                        'name'     => 'box_shadow',
                        'label'    => esc_html__( 'Box Shadow', 'rentals-elementor' ),
                        'selector' => '{{WRAPPER}} .wprentals_video_wrapper',
                    ]
                );

                $this->end_controls_section();
	}



      
	protected function render() {
            $settings = $this->get_settings_for_display();
       
          
            
            wp_enqueue_script('venobox.min');
            wp_enqueue_style('venobox');
       
            
            $video_type = $settings['video_type'];
            $video_id   = $settings['video_id'];
            
            $video_link         =   '';
            $protocol           =   is_ssl() ? 'https' : 'http';
            
            if($video_type=='vimeo'){
                $video_link .=  $protocol.'://player.vimeo.com/video/' . $video_id . '?api=1&amp;player_id=player_1';
            }else if ($video_type=='youtube'){
                $video_link .=  $protocol.'://www.youtube.com/embed/' . $video_id  . '?wmode=transparent&amp;rel=0';
            }else{
                 $video_link=  $settings['video_local'];
            }
            
            
      

    
     print '<div class="wprentals_video_wrapper">';
            if($video_type=='local'){
                print   '<a class="venobox " data-autoplay="true" data-vbtype="inline"  href="#wprentals_video">';
            }else{
                print   '<a href="'.esc_url($video_link).'"  data-autoplay="true" data-vbtype="video" class="venobox">';
            }
       
            ob_start();
            \Elementor\Icons_Manager::render_icon( $settings['icon'], [ 'aria-hidden' => 'true' ] ); 
            $icon = ob_get_contents();
            ob_end_clean();   
        
        
            print $icon;
            print '</a>';                       
    print '</div>';
    
    
            
    if($video_type=='local'){
        print '<div id="wprentals_video"  style="display:none;">
                   <video controls preload="metadata" autoplay>
                     <source src="'.esc_url($video_link).'" type="video/mp4">
                     Your browser does not support the video tag.
                   </video>
        </div>';    
    }


    print '
    <script type="text/javascript">
        //<![CDATA[
        jQuery(document).ready(function(){
            if (jQuery(".venobox").length > 0){
                jQuery(".venobox").venobox({';
                    if($video_type=='local'){
                        print '
                        framewidth:750,
                        frameheight:425';
                    }
                print'   
                });
            }
        });
        //]]>
    </script>';
    
    
    
   
	}


}
