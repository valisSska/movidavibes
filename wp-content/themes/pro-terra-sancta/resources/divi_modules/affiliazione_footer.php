<?php

class ATS_affiliazione extends ET_Builder_Module {
	function init() {
		$this->name                 = esc_html__( 'Affilizioni', 'et_builder' );
		$this->slug                 = 'ats_affiliazione';
        $this->vb_support           = 'on';
        $this->fullwidth            = true;
		$this->child_slug           = 'ats_affiliazione_item';
		$this->child_item_text      = esc_html__( 'Aggiungi affiliziazione', 'et_builder' );
	}
    function add_new_child_text(){
        return $this->child_item_text;
    }
	function get_fields() {
		return array();
	}

	function render( $attrs, $content = null, $render_slug ) {
        return <<<OUTPUT
        <div id="ats-affiliati">
            <div class='carousel'>
                {$this->content}
            </div>
        </div>
OUTPUT;
	}

}

class ATS_affiliazione_item extends ET_Builder_Module {
	function init() {
		$this->name                        = esc_html__( 'Affilizione', 'et_builder' );
		$this->slug                        = 'ats_affiliazione_item';
		$this->type                        = 'child';
		$this->child_title_var             = 'name';
		$this->advanced_setting_title_text = esc_html__( 'affiliazione', 'et_builder' );
		$this->settings_text               = esc_html__( 'Impostazioni dell\'affiliazione', 'et_builder' );
	}

	function get_fields() {
		$fields = array(
            'name' => array(
                'label'           => esc_html__( 'Nome affiliazione', 'ats-theme' ),
				'type'             => 'text',
				'option_category' => 'basic_option',
            ),
            'src' => array(
				'label'              => esc_html__( 'Immagine', 'et_builder' ),
				'type'               => 'upload',
				'option_category'    => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text'        => esc_attr__( 'Choose an Image', 'et_builder' ),
				'update_text'        => esc_attr__( 'Set As Image', 'et_builder' ),
				'hide_metadata'      => true,
				'affects'            => array(
					'alt',
					'title_text',
				),
				'description'        => esc_html__( 'Upload your desired image, or type in the URL to the image you would like to display.', 'et_builder' ),
				'dynamic_content'    => 'image',
            ),
            'url' => array(
				'label'           => esc_html__( 'Link alla pagina', 'ats-theme' ),
				'type'             => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Indicare il link della pagina dei destinazione', 'ats-theme' ),
            ),
            'same_window' => array(
				'label'           	=> esc_html__( 'Apri in nuova finestra', 'ats-theme' ),
				'type'             	=> 'yes_no_button',
				'option_category' 	=> 'basic_option',
				'description'     	=> esc_html__( 'Indicare il link della pagina dei destinazione', 'ats-theme' ),
				'default'			=> 'on',
				'options' => array(
					'on' => esc_html__( 'Si', 'ats-theme'),
					'off' => esc_html__( 'No', 'ats-theme')
				)
			)
        );
		return $fields;
	}

	function render( $attrs, $content = null, $render_slug ) {
        $name   = $this->props['name'];
        $src    = $this->props['src'];
        $url    = $this->props['url'];
		$target = $this->props['same_window'];
		
        $target_blank = '';
        if($target == 'on'){
            $target_blank = 'target="_blank"';
        }

        // $output = '<div class="ats-affiliati_item">';
        // $output .= "<a title=\"{$name}\" href=\"{$url}\" {$target_blank}><img src=\"{$img}\" alt=\"{$name}\"></a>";
		// $output .= '</div>';
		$src_id = attachment_url_to_postid($src);
		$src_thumb = wp_get_attachment_image_src($src_id);
		$src_thumb_url = $src_thumb[0];
		if(empty($src_thumb_url)) $src_thumb_url = $src;
		$output = sprintf('
			<div class="ats-affiliati_item">
				<a title="%1$s" href="%2$s" %3$s><img src="%4$s" alt="%1$s"></a>
			</div>
			',
			$name,
			$url,
			$target,
			$src_thumb_url);
		return $output;
	}
}