<?php 
class Ats_offline_donation extends ET_Builder_Module {
    function init(){
        $this->name       = esc_html__( 'Promemoria donazione', 'et_builder' );
        $this->slug       = 'ats_offline_donation';
        $this->use_raw_content = true;

        $this->settings_modal_toggles = array(
			'general'  => array(
				'toggles' => array(
					'main_content' => esc_html__( 'Text', 'et_builder' ),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'width' => array(
						'title'    => esc_html__( 'Sizing', 'et_builder' ),
						'priority' => 65,
					),
				),
			),
        );
        
        $this->advanced_fields = array(
			'borders'               => array(
				'default' => false,
			),
			'margin_padding' => array(
				'css' => array(
					'important' => array( 'custom_margin' ), // needed to overwrite last module margin-bottom styling
				),
			),
			'text_shadow'           => array(
				// Don't add text-shadow fields since they already are via font-options
				'default' => false,
			),
			'box_shadow'            => array(
				'default' => false,
			),
			'fonts'                 => false,
			'button'                => false,
		);
    }

    public function get_fields() {
        $fields = array(
			'raw_content' => array(
				'label'           => esc_html__( 'Code', 'et_builder' ),
				'type'            => 'codemirror',
				'mode'            => 'html',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can create the content that will be used within the module.', 'et_builder' ),
				'is_fb_content'   => true,
				'toggle_slug'     => 'main_content',
				'mobile_options'  => true,
				'hover'           => 'tabs',
			),
        );
        return $fields;
    }

    function render( $attrs, $content = null, $render_slug ) {
		$lang = ATS::get_lang();
		
		$lang = strtoupper($lang);
		$post_name = "Testo promemoria donazione - {$lang}";
		
        $text = $this->get_text_module($lang);       
        $text = do_shortcode($text);
        
        return sprintf('
			<div id="donate"></div>
            <div class="offline-donation">
                <div class="code-container">%2$s</div>
                <div class="text-container">
                    <div class="border-container">%1$s</div>
                </div>
            </div>
        ',
        $text,
		$content
		);
	}

    private function get_text_module($lang){
		$lang = strtoupper($lang);
		$post_name = "Testo promemoria donazione - {$lang}";
		$post = get_page_by_title($post_name, "OBJECT", "et_pb_layout");
		if(is_a($post,"WP_Post")){
			$content = $post->post_content;
			$content = preg_replace('/\[et_pb_code.*?\].*\[\/et_pb_code\]/', '', $content);
			$content = preg_replace('/\[\/?et_pb.*?\]/', '', $content);
			$content = preg_replace('/\[embed\].*\[\/embed\]/', '', $content);
			$content = trim($content);
			return $content;
		}
		if(is_array($post)){
			foreach($posts as $post){
				$content = $post->post_content;
				$content = preg_replace('/\[et_pb_code.*?\].*\[\/et_pb_code\]/', '', $content);
				$content = preg_replace('/\[\/?et_pb.*?\]/', '', $content);
				$content = preg_replace('/\[embed\].*\[\/embed\]/', '', $content);
				$content = trim($content);
				return $content;
			}
		}
        
        
    }
    protected function _render_module_wrapper( $output = '', $render_slug = '' ) {
        return $output;
    }
}