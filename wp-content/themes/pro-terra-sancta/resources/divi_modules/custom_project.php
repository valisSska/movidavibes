<?php 
if (!defined('ABSPATH')) die();
class ATS_CUSTOM_PROJECT extends ET_Builder_Module {

	public $slug = 'ats_custom_module';
	public $vb_support = 'on';


	protected $module_credits = array(
		'module_uri' => 'https://www.brera13studio.com/',
		'author'     => 'Gianmarco Venturi - Brera13 Developer',
		'author_uri' => 'https://www.brera13studio.com/',
	);
	
	public function init() {
		$this->name = esc_html__( 'Custom project', 'ats-theme' );
		$this->settings_modal_toggles = array(
			'general'  => array(
				'toggles' => array(
					'main_content'   => esc_html__( 'Contenuti', 'ats-theme' ),
				)
			)
		);

	}
	
	public function get_fields() {
		$fields = array(
			'title' => array(
				'label'           => esc_html__( 'Titolo progetto', 'ats-theme' ),
				'type'             => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Inserire il titolo del progetto', 'ats-theme' ),
			),
			'desc' => array(
				'label'           => esc_html__( 'Descrizione', 'ats-theme' ),
				'type'             => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Inserire una breve descrizione del progetto', 'ats-theme' ),
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
			'version' => array(
				'label'           => esc_html__( 'Versione', 'ats-theme' ),
				'type'             => 'select',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Inserire una breve descrizione del progetto', 'ats-theme' ),
				'options' => array(
					'v1' => 'Normale',
					'v2' => 'Donazioni',
				)
			),
			'url' => array(
				'label'           => esc_html__( 'Link alla pagina', 'ats-theme' ),
				'type'             => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Indicare il link della pagina dei destinazione', 'ats-theme' ),
			),
			'button_link' => array(
				'label'           => esc_html__( 'Visualizzare il pulsante', 'ats-theme' ),
				'type'             => 'yes_no_button',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Indicare il link della pagina dei destinazione', 'ats-theme' ),
				'default'			=> 'off',
				'options' => array(
					'on' => esc_html__( 'Si', 'ats-theme'),
					'off' => esc_html__( 'No', 'ats-theme')
				)
			),
			'same_window' => array(
				'label'           	=> esc_html__( 'Apri in nuova finestra', 'ats-theme' ),
				'type'             	=> 'yes_no_button',
				'option_category' 	=> 'basic_option',
				'description'     	=> esc_html__( 'Indicare il link della pagina dei destinazione', 'ats-theme' ),
				'default'			=> 'off',
				'options' => array(
					'on' => esc_html__( 'Si', 'ats-theme'),
					'off' => esc_html__( 'No', 'ats-theme')
				)
			)
		);
		return $fields;
	}
	
	public function render( $unprocessed_props, $content = null, $render_slug ) {
		$lang =  ATS::get_lang();
		global $translations;
		$title = $this->props['title'];
		$desc = $this->props['desc'];

		$url = $this->props['url'];

		$src = $this->props['src'];
		$version = $this->props['version'];
		$button = $this->props['button_link'];
		$same_window = $this->props['same_window'];
		$href_tag = "";
		if($same_window == 'on')
			$href_tag = " target=\"_blank\"";

		$class = "articoli_plus";
		if($version == "v2"){
			$class .= " articoli_red";
		}

		$button_html = "";
		if (strpos($button, 'on') !== false){
			$btn_label = $translations['custom_project']['button_text']->$lang;
			$button_html = "<span href='{$url}'>{$btn_label}</span>";
		}
		$src_id = attachment_url_to_postid($src);
		$src_thumb = wp_get_attachment_image_src($src_id, "medium_large");
		$src_thumb_url = $src_thumb[0];
		if(empty($src_thumb_url)) $src_thumb_url = $src;
		$output = <<<PRINT
<div id="articoli_plus" class="{$class}">
	<a href="{$url}" $href_tag>
		<div class="ap_img" data-attr="{$src_id}" data-thumb="{$src_thumb}">
			<img src="{$src_thumb_url}">
		</div>
		<div class="ap_desc">
			<div class="ap_content">
				<h2>{$title}</h2>
				<p>{$desc}</p>
				{$button_html}
			</div>
			<div class="ap_draw"></div>
		</div>
	</a>
</div>
PRINT;
		wp_enqueue_style( 'custom_project_css', ATS_RES_URL . '/divi_modules/css/custom_project.css', false );
		wp_enqueue_script( 'custom_project_js', ATS_RES_URL . '/divi_modules/js/custom_project.js', array('jquery'), false, true);
		return $output;
	}
}