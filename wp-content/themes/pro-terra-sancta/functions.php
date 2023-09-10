<?php
require_once ABSPATH . 'vendor/autoload.php';
require ABSPATH . 'wp-content/themes/pro-terra-sancta/menu.php';

use Aws\CloudFront\CloudFrontClient;
use Aws\Exception\AwsException;

if (!defined('ABSPATH')) die();
define("ATS_RES_PATH", get_stylesheet_directory()."/resources");
define("ATS_RES_URL", get_stylesheet_directory_uri()."/resources");


add_action( 'after_setup_theme', array("ATS", 'load_module_manager') );
add_action( 'wp_enqueue_scripts', array("ATS", 'style') );
add_action( 'init', array("ATS",'init'), 11 );
add_action( 'load-post-new.php', array("ATS", 'enable_divi_builder_on_new_post') );
add_action( 'pre_get_posts', array("ATS", 'permalink_fix'), 11 );
add_action( 'admin_enqueue_scripts', array("ATS", 'admin_style') );
add_action( 'parse_query', array("ATS",'replace_search' ));
add_action( 'wp_print_styles', array("ATS",'deregister_styles'), 100 );



add_filter( 'single_template', array("ATS", 'check_for_category_single_template') );
add_filter( 'register_post_type_args', array("ATS", 'fix_project_ctp'), 10 , 2 );
add_filter( 'post_type_link', array("ATS", 'fix_project_links'), 1, 2 );
add_filter( 'wpgmza_google_maps_api_params', array("ATS", 'googleMapsParam') , 10, 1);
add_filter( 'query_vars', array("ATS",'add_my_var'));
add_filter( 'script_loader_tag', array("ATS",'js_async_attr'), 10 );


/* Clean Divi cache for backend */
define("CLEAR_LOCAL", false);

global $translations;
$overrideLang = "";
/* Custom Class */
class ATS{
	public static function deregister_styles() {
		if(!is_user_logged_in())
			wp_deregister_style( 'dashicons' );
	}
	public static function footer_enqueue_scripts() {
		remove_action('wp_head', 'wp_print_scripts');
		remove_action('wp_head', 'wp_print_head_scripts', 9);
		remove_action('wp_head', 'wp_enqueue_scripts', 1);
		add_action('wp_footer', 'wp_print_scripts', 5);
		add_action('wp_footer', 'wp_enqueue_scripts', 5);
		add_action('wp_footer', 'wp_print_head_scripts', 5);
	}
	public static function js_async_attr($tag){
		if(is_admin()) return $tag;
		if (strpos($tag, 'maps') !== true) return $tag;
		return str_replace( ' src', ' async="async" src', $tag );
	}
	public static function init(){

		self::load_custom_post_type();
		self::load_traduzioni();
		self::load_menubar();
		update_option( 'link_manager_enabled', 0 );
		global $wp_rewrite;
	}
	public static function add_my_var($public_query_vars) {
		$public_query_vars[] = 'lang';
		return $public_query_vars;
	}
	public static function replace_search( $query )
	{
		if( $query->is_search() ) {
			$_lang = (get_query_var('lang')) ? get_query_var('lang') : "NOTFOUNDQUERYPAR"; //ATS::defaul_lang();
			$query->add("lang", $_lang);
		}
		return $query;
	}

	public static function defaul_lang(){
		return 'it';
	}

	public static function get_footer_header_dona_btn_links(){
		$toRet = new StdClass();
		$toRet->it = home_url("/it/come-sostenerci/#donaonline");
		$toRet->en = home_url("/en/take-action/#donaonline");
		$toRet->es = home_url("/es/ayudanos/#donaonline");
		$toRet->fr = home_url("/fr/aider/#donaonline");
		$toRet->de = home_url("/de/mithelfen/#donaonline");
		return $toRet;
	}

	public static function get_footer_news_btn_links(){
		$toRet = new StdClass();
		$toRet->it = home_url("/it/news_it/");
		$toRet->en = home_url("/en/news_en/");
		$toRet->es = home_url("/es/news_es/");
		$toRet->fr = home_url("/fr/news_fr/");
		$toRet->de = home_url("/de/news_de/");
		return $toRet;
	}

	public static function get_footer_journal_btn_links(){
		$toRet = new StdClass();
		$toRet->it = home_url("/it/giornalino/");
		$toRet->en = home_url("/en/journal/");
		$toRet->es = home_url("/es/diario/");
		$toRet->fr = home_url("/fr/journal-fr/");
		$toRet->de = home_url("/de/herunter/");
		return $toRet;
	}

	public static function get_footer_presscontacts_btn_links(){
		$toRet = new StdClass();
		$toRet->it = home_url("/it/contatti-stampa/");
		$toRet->en = home_url("/en/press-contacts/");
		$toRet->es = home_url("/es/contactos-de-prensa/");
		$toRet->fr = home_url("/fr/contacts-presse/");
		$toRet->de = home_url("/de/drucken-sie-die-kontakte/");
		return $toRet;
	}

  public static function get_associazione_name(){
    $toRet = new StdClass();
    $toRet->it = "Associazione Pro Terra Sancta";
    $toRet->en = "ASSOCIATION PRO TERRA SANCTA";
    $toRet->es = "ASOCIACIÓN PRO TERRA SANCTA";
    $toRet->fr = "ASSOCIATION PRO TERRA SANCTA";
    $toRet->de = "VEREIN PRO TERRA SANCTA";
    return $toRet;
  }

  public static function get_footer_projects_btn_links(){
    $toRet = new StdClass();
    $toRet->it = home_url("/it/progetti/");
    $toRet->en = home_url("/en/projects/");
    $toRet->es = home_url("/es/que-hacemos/");
    $toRet->fr = home_url("/fr/projets/");
    $toRet->de = home_url("/de/projekte/");
    return $toRet;
  }

  public static function get_footer_campagne_btn_links(){
    $toRet = new StdClass();
    $toRet->it = home_url("/it/campagne/");
    $toRet->en = home_url("/en/campaigns/");
    $toRet->es = home_url("/es/");
    $toRet->fr = home_url("/fr/");
    $toRet->de = home_url("/de/");
    return $toRet;
  }

  public static function get_footer_itinerari_btn_links(){
    $toRet = new StdClass();
    $toRet->it = home_url("/it/itinerari-in-terra-santa/");
    $toRet->en = home_url("/en/tours/");
    $toRet->es = home_url("/es/itinerarios-en-tierra-santa/");
    $toRet->fr = home_url("/fr/itineraires-en-terre-sainte/");
    $toRet->de = home_url("/de/marschrouten/");
    return $toRet;
  }

	public static function load_traduzioni(){
		global $translations;
		include_once ATS_RES_PATH . '/traduzioni/main.php';
		$translations = ATS_Traduzioni::init();
	}

	public static function admin_style(){
		wp_enqueue_style( 'admin_style', get_stylesheet_directory_uri(). '/admin_style.css' );
		if(CLEAR_LOCAL == true){
			wp_enqueue_script( 'clear_local_storage_builder', ATS_RES_URL . '/js/clear_local_storage.js' );
		}
	}
	public static function style() {
		wp_enqueue_style( 	'parent_style'	, get_template_directory_uri() . '/style.css',false );
		wp_enqueue_style( 	'fa'			, get_stylesheet_directory_uri() . '/fonts/FontAwesome/css/font-awesome.min.css', false);

		wp_enqueue_style( 	'slick_css'		, ATS_RES_URL . "/css/slick.min.css");
		wp_enqueue_script( 	'slick_js'		, ATS_RES_URL . "/js/slick.min.js", 	array("jquery"), false, true);

		wp_enqueue_script( 'ats_main_script', get_stylesheet_directory_uri() . '/ds-script.js',array("jquery"), false, true );
	}

	public static function get_privacy_policy_link($l){
		switch($l){
			case 'it':
				return "/it/privacy-policy/";
			default:
				return "/en/privacy-policy/";
		}
	}
	public static function fix_project_links($post_link, $id  = 0){
		$post = get_post($id);
		if ( is_object( $post ) ){
			$terms = wp_get_object_terms( $post->ID, 'project_category' );
			if( $terms ){
				return str_replace( '%project_category%' , $terms[0]->slug , $post_link );
			} else {
				return str_replace( '%project_category%/' , "" , $post_link );
			}
		}
		return $post_link;
	}
	public static function fix_project_ctp($args, $post_type){
		if($post_type == "project"){
			$args["rewrite"] = array(
				'slug' => "project/%project_category%"
			);
		}
    if($post_type == "campaign"){
      $args["rewrite"] = array(
        'slug' => "%project_category%"
      );
    }
		return $args;
	}
	public static function load_module_manager(){
		define("ATS_MODULE_PATH", get_stylesheet_directory()."/resources/divi_modules");
		define("ATS_MODULE_URL", get_stylesheet_directory_uri()."/resources/divi_modules");
		include_once ATS_MODULE_PATH . "/module_manager.php";
		new ModuleManager();
	}
	public static function permalink_fix($query){
		$support_cpt = array('post', 'it-post', 'en-post', 'es-post', 'fr-post', 'de-post', 'page', 'project', 'campaign');
		if(!$query->is_main_query()) return $query;
		if($query->is_search() && !is_admin()){
			$lang = (get_query_var('lang')) ? get_query_var('lang') : ATS::defaul_lang();
			$parent_page = -1;
			switch($lang){
				case 'it': $parent_page = 674; break;
				case 'es': $parent_page = 106641; break;
				case 'en': $parent_page = 106947; break;
				case 'fr': $parent_page = 106644; break;
				case 'de': $parent_page = 106639; break;
			}
			$query->set("post_type", array("{$lang}-post", "page", "post"));
			$query->set("post_status", "publish");
			$query->set("posts_per_page", 10);
			if($parent_page != -1){
				$query->set("post_parent__in",
					array(
						"post_type" => "page",
						"post_parent" => $parent_page
					)
				);
			}
			global $overrideLang;
			$overrideLang = $lang;
		}
		else if(!is_admin()){
			$query->set("post_type", "any");
			$query->set("post_status", "publish");
		}

		return $query;
	}
	public static function load_custom_post_type(){
		include_once ATS_RES_PATH . "/cpt.php";
		CPT_CUSTOM::init();
	}
	public static function get_valid_lang(){
		return array('it', 'en', 'es', 'fr', 'de');
	}
	public static function get_gallery_divi_translation($lang){
		if(self::verify_lang($lang)){
			$lang = 'it';
		}
		switch($lang){
			case 'it': $gallery_lang = array("next"=>"Avanti", "prev"=>"Indietro" ); break;
			case 'en': $gallery_lang = array("next"=>"Next", "prev"=>"Previous" ); break;
			case 'es': $gallery_lang = array("next"=>"Siguiente", "prev"=>"Anterior" ); break;
			case 'fr': $gallery_lang = array("next"=>"Suivant", "prev"=>"Precedent" ); break;
			case 'de': $gallery_lang = array("next"=>"Nachste", "prev"=>"Fruher" ); break;
		}
		$gallery_translation = json_encode($gallery_lang);
		$toRet = <<<PRINT
		<script type="text/javascript">
			jQuery(document).ready(function(){
				var gallery_translation = {$gallery_translation};
				et_pb_custom.next = gallery_translation.next;
				et_pb_custom.prev = gallery_translation.prev;
			});
		</script>
PRINT;
		return $toRet;
	}
	public static function verify_lang($lang){
		$valid_lang = self::get_valid_lang();
		$lang = strtolower($lang);
		if(in_array($lang, $valid_lang)) return true;
		return false;
	}
	public static function get_lang($last_url = ''){
		global $wp;
		global $overrideLang;
		if(!empty($overrideLang)){
			if(self::verify_lang($overrideLang))return $overrideLang;
		}
		if(empty($last_url))
			$current_url = home_url( add_query_arg( array(), $wp->request ) );
		else
			$current_url = $last_url;
		if (substr($current_url, -1) != '/'){$current_url.='/';}
		$re = '/\/(?<lang>it|en|es|de|fr)\//';
		preg_match($re, $current_url, $matches, PREG_OFFSET_CAPTURE, 0);
		if(count($matches) < 1) return 'it';
		$lang = $matches['lang'];
		switch($lang[0]){
			default:
			case 'it': return 'it';
			case 'en': return 'en';
			case 'es': return 'es';
			case 'fr': return 'fr';
			case 'de': return 'de';
		}
	}

	public static function get_language_attributes(){
		$lang = self::get_lang();
		switch($lang){
			case 'en':
				$lang_code = 'en-GB';
				break;
			case 'it':
			default:
				$lang_code = 'it-IT';
				break;
			case 'es':
				$lang_code = 'es-ES';
				break;
			case 'fr':
				$lang_code = 'fr-FR';
				break;
			case 'de':
				$lang_code = 'de-DE';
				break;
		}
		echo "lang='{$lang_code}'";
	}
	public static function get_menu_name($lang = ''){
		$lang = strtolower($lang);
		if(self::verify_lang($lang)){
			$lang = self::get_lang();
		}
		$lang = strtoupper($lang);
		return "MENU-HOME-{$lang}";
	}
	public static function get_home_url($lang){
		$lang = strtolower($lang);
		if(self::verify_lang($lang)){
			$lang = self::get_lang();
		}
		if($lang == 'it'){ $lang = ''; }
		echo esc_url( home_url( '/' ) ).$lang;
	}
	public static function isFlagActive($clang){
		if($clang == self::get_lang()) echo 'active';
	}

	public static function load_menubar(){
		include_once ATS_RES_PATH . '/menu_page.php';
		ATS_MENU::init();
	}
	public static function enable_divi_builder_on_new_post() {
		add_filter('et_builder_always_enabled', '__return_true');
	}
	public static function check_for_category_single_template( $t )
	{
		$dir = get_stylesheet_directory();
		foreach( (array) get_the_category() as $cat )
		{
			if ( file_exists($dir . "/single-category-{$cat->slug}.php") ) return $dir . "/single-category-{$cat->slug}.php";
			if($cat->parent)
			{
				$cat = get_the_category_by_ID( $cat->parent );
				if ( file_exists($dir . "/single-category-{$cat->slug}.php") ) return $dir . "/single-category-{$cat->slug}.php";
			}
		}
		return $t;
	}

	public static function filterBuilderText($content){
		$content = preg_replace('/\[et_pb_code.*?\].*\[\/et_pb_code\]/', '', $content);
		$content = preg_replace('/\[\/?et_pb.*?\]/', '', $content);
		$content = preg_replace('/\[embed\].*\[\/embed\]/', '', $content);
		$content = trim($content);
		$content = strip_tags($content);
		$content = str_replace("&nbsp;", ' ', $content);
		return $content;
	}

	public static function getDescriptionText($content,$length = 250){
		$content = apply_filters('the_content', $content);
		$content = self::filterBuilderText($content);
		$getTempLength= $length + 50;
		$tempContent = substr($content, 0, $getTempLength);
		$tempContent = explode(' ',$tempContent);
		$countWords = 0;
		$retContent = "";

		foreach($tempContent as $word){
			if($countWords > $length) break;
			$word = trim($word);
			$countWords = $countWords + strlen($word) + 1;
			$retContent = $retContent. ' ' . $word;
		}
		$retContent .= '...';
		return $retContent;
	}

	public static function googleMapsParam($params){
		$lang = self::get_lang();
		$params['language'] = $lang;
		return $params;
	}

}


//VQ

global $suff;
if (stristr($_SERVER['REQUEST_URI'], "/en/")) $suff="en";
if (stristr($_SERVER['REQUEST_URI'], "/es/")) $suff="es";
if (stristr($_SERVER['REQUEST_URI'], "/fr/")) $suff="fr";
if (stristr($_SERVER['REQUEST_URI'], "/de/")) $suff="de";
if (stristr($_SERVER['REQUEST_URI'], "/it/")) $suff="it";
if (!$suff) $suff="it";
if ($_SERVER['REQUEST_URI']=="/") $suff="it";

global $constvalue;
$constvalue = array(
'enable_cookie'   => 1,
);


add_action( 'init', 'pages_prioriry' );
function pages_prioriry() {
    $GLOBALS['wp_rewrite']->use_verbose_page_rules = true;
}

add_filter( 'page_rewrite_rules', 'collect_page_rewrite_rules' );
function collect_page_rewrite_rules( $page_rewrite_rules )
{
    $GLOBALS['page_rewrite_rules'] = $page_rewrite_rules;
    return array();
}

add_filter( 'rewrite_rules_array', 'prepend_page_rewrite_rules' );
function prepend_page_rewrite_rules( $rewrite_rules )
{
    return $GLOBALS['page_rewrite_rules'] + $rewrite_rules;
}

function contains($substring="", $string="") {
	if (strlen($string)>0 and $substring!="") {
		$pos = strpos($string, $substring);
		if($pos === false) {
			return false;
		}
		else {
			return true;
		}
	}
	else {
		return false;
	}
}

function save_postmeta( $obj_id=null, $obj_key=null, $obj_val=null) {
global $wpdb;
	if ($obj_id && $obj_key) :
		if (strlen($obj_val)>0) :
			update_post_meta($obj_id, $obj_key, $obj_val);
		else :
			delete_post_meta($obj_id, $obj_key);
		endif;
	endif;
}


function add_post_custom_fields1($post) {
	global $pagenow;
	global $wpdb;
	if ( $pagenow == 'post.php' && $post->ID) :
		$theID=$post->ID;

		$postIDlang=get_post_meta($theID, 'postIDlang', true);
		$posthidedata=get_post_meta($theID, 'posthidedata', true);
		$posthideheader=get_post_meta($theID, 'posthideheader', true);
		$posthidefooter=get_post_meta($theID, 'posthidefooter', true);
		$posthidesocial=get_post_meta($theID, 'posthidesocial', true);

		$content.='<input type="hidden" name="updatefield" value="1"><div style="display: -moz-inline-block; display:inline-block; width:100%; ">ID page/post multilingua <span style="float:right;"><input type="text" size="10" value="'.$postIDlang.'" name="IDpostlang"></span></div>';

		if ($post->post_type!='page' && $post->post_type!='project') :
			$checked='';
			if ($posthidedata) $checked=' CHECKED';
			$content.='<div style="display: -moz-inline-block; display:inline-block; width:100%; padding-top:10px; margin-top:10px; border-top:1px solid #eee; ">Nascondi data <span style="float:right;"><input type="checkbox" value="1" name="hidedata"'.$checked.'></span></div>';
		endif;

		if ($post->post_type!='project') :
			$checked='';
			if ($posthideheader) $checked=' CHECKED';
			$content.='<div style="display: -moz-inline-block; display:inline-block; width:100%; padding-top:10px; margin-top:10px; border-top:1px solid #eee; ">Nascondi Header <span style="float:right;"><input type="checkbox" value="1" name="hideheader"'.$checked.'></span></div>';

			$checked='';
			if ($posthidefooter) $checked=' CHECKED';
			$content.='<div style="display: -moz-inline-block; display:inline-block; width:100%; padding-top:10px; margin-top:10px; border-top:1px solid #eee; ">Nascondi Footer <span style="float:right;"><input type="checkbox" value="1" name="hidefooter"'.$checked.'></span></div>';
		endif;

		$checked='';
		if ($posthidesocial) $checked=' CHECKED';
		$content.='<div style="display: -moz-inline-block; display:inline-block; width:100%; padding-top:10px; margin-top:10px; border-top:1px solid #eee; ">Nascondi Condividi <span style="float:right;"><input type="checkbox" value="1" name="hidesocial"'.$checked.'></span></div>';


	echo '
<div class="moz">
'.$content.'
</div>
';
	endif;
}

function box_post_custom_fields() {
	add_meta_box( 'postbox1', 'Altre opzioni', 'add_post_custom_fields1', array('page', 'it-post', 'en-post', 'fr-post', 'de-post', 'es-post','project', 'campaign'),'side');
}
add_action( 'admin_menu' , 'box_post_custom_fields' );


add_action('save_post', 'custom_save_post', 201);

function custom_save_post($id) {
	global $wpdb;
	$post_type=get_post_type($id);
	if (get_post_status($id)!='trash' && $_POST['updatefield']) :
		save_postmeta( $id, 'postIDlang', $_POST['IDpostlang']);
		save_postmeta( $id, 'posthidedata', $_POST['hidedata']);
		save_postmeta( $id, 'posthideheader', $_POST['hideheader']);
		save_postmeta( $id, 'posthidefooter', $_POST['hidefooter']);
		save_postmeta( $id, 'posthidesocial', $_POST['hidesocial']);
	endif;

}


function get_link_post_lang() {
global $wpdb;
global $constvalue;

	if (is_singular()) :
		if (have_posts()) : while (have_posts()) : the_post();
			$idpost=get_the_ID();
			$constvalue['title']=get_the_title();
			$constvalue['description']=get_the_excerpt();
			$postIDlang=get_post_meta($idpost, 'postIDlang', true);
			$lingue="EN,ES,FR,IT,DE";
			$listIDitem = explode(",", $lingue);

			if ($postIDlang) :
				$query = "SELECT wposts.ID, wposts.post_type FROM $wpdb->posts wposts, $wpdb->postmeta wpostmeta WHERE wposts.ID = wpostmeta.post_id AND wpostmeta.meta_key = 'postIDlang' AND wpostmeta.meta_value = %d AND wposts.post_status='publish' UNION SELECT wposts.ID, wposts.post_type FROM $wpdb->posts wposts, $wpdb->postmeta wpostmeta WHERE wposts.ID = wpostmeta.meta_value AND wpostmeta.meta_key = 'postIDlang' AND wpostmeta.post_id = %d AND wposts.post_status='publish' UNION SELECT wposts.ID, wposts.post_type FROM $wpdb->posts wposts WHERE wposts.ID = %d ";
				$query = $wpdb->prepare( $query, $postIDlang, $postIDlang, $postIDlang  );
			else :
				$query = "SELECT wposts.ID, wposts.post_type FROM $wpdb->posts wposts, $wpdb->postmeta wpostmeta WHERE wposts.ID = wpostmeta.post_id AND wpostmeta.meta_key = 'postIDlang' AND wpostmeta.meta_value = %d AND wposts.post_status='publish' UNION SELECT wposts.ID, wposts.post_type FROM $wpdb->posts wposts, $wpdb->postmeta wpostmeta WHERE wposts.ID = wpostmeta.meta_value AND wpostmeta.meta_key = 'postIDlang' AND wpostmeta.post_id = %d AND wposts.post_status='publish' UNION SELECT wposts.ID, wposts.post_type FROM $wpdb->posts wposts WHERE wposts.ID = %d ";
				$query = $wpdb->prepare( $query, $idpost, $idpost, $idpost  );
			endif;


			foreach ( $listIDitem as $value ) {
				$constvalue['linkML'][$value]=get_home_url().'/'.strtolower($value);
				if ($value=="IT") $constvalue['linkML'][$value]=get_home_url();
			}

			$langposts = $wpdb->get_results($query, OBJECT);
			foreach ( $langposts as $langpost ) {
				$type=$langpost->post_type;
				$link=get_permalink($langpost->ID);
				foreach ( $listIDitem as $value ) {
					if (contains('/'.strtolower($value).'/',$link)) $constvalue['linkML'][$value]=$link;
				}
			}

		endwhile; endif;
	endif;
}

add_shortcode('get_facebook', 'get_embed_facebook');

function get_embed_facebook($atts, $content="") {
global $wpdb;
global $constvalue;
$embed_content='';
if (current_user_can('moderate_comments') || ($constvalue['enable_cookie'] && $_COOKIE["cookies_policy_facebook"]=="ok") || !$constvalue['enable_cookie']) :
	$embed_content='<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fproterrasancta%2F&tabs=timeline&width=500&height=385&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=644291819048907" width="500" height="385" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>';
endif;

return $embed_content;
}




function get_share() {
global $wpdb;
global $post;
global $language;
global $constvalue;
$URI=$_SERVER['REQUEST_URI'];
$link = explode("?", $URI);
$linkshare='https://'.$_SERVER["HTTP_HOST"].$link[0];
$title=html_entity_decode($constvalue['title'],ENT_QUOTES,'UTF-8');
$content='
<div class="moz">
<a title="email" rel="nofollow" href="mailto:?subject='.rawurlencode($title).'&body='.rawurlencode(html_entity_decode($constvalue['description'],ENT_QUOTES,'UTF-8').PHP_EOL.PHP_EOL).$linkshare.'" class="sb"><img src="'.get_stylesheet_directory_uri().'/images/mail_64.png" width="32" height="32" border="0" alt="email"></a>
<a title="whatsapp" rel="nofollow" href="whatsapp://send?text='.urlencode($title.' '.$linkshare).'" data-action="share/whatsapp/share" class="sb"><img src="'.get_stylesheet_directory_uri().'/images/whatsapp_64.png" width="32" height="32" border="0" alt="whatsapp"></a>
<a title="telegram" rel="nofollow" href="https://telegram.me/share/url?url='.urlencode($linkshare).'&text='.urlencode($title.' '.$linkshare).'" class="sb"><img src="'.get_stylesheet_directory_uri().'/images/share_telegram.png" width="32" height="32" border="0" alt="telegram" style="border:3px solid rgb(100,169,220);"></a>
<a title="facebook" rel="nofollow" href="https://www.facebook.com/sharer/sharer.php?u='.$linkshare.'" class="sb" target="_blank"><img src="'.get_stylesheet_directory_uri().'/images/facebook_64.png" width="32" height="32" border="0" alt="facebook"></a>
<a title="twitter" rel="nofollow" href="https://twitter.com/intent/tweet?url='.urlencode($linkshare).'&text='.urlencode($title).'" class="sb" target="_blank"><img src="'.get_stylesheet_directory_uri().'/images/twitter_64.png" width="32" height="32" border="0" alt="twitter"></a>
</div>
';

return $content;
}


function get_excerpt_by_txt($txt,$excerpt_length){
    $the_excerpt = $txt;
    $the_excerpt = strip_tags(strip_shortcodes($the_excerpt));
    $words = explode(' ', $the_excerpt, $excerpt_length + 1);

    if(count($words) > $excerpt_length) :
        array_pop($words);
        array_push($words, '...');
        $the_excerpt = implode(' ', $words);
    endif;

    return $the_excerpt;
}


function get_meta_header() {
global $wpdb;
$wptitle=get_bloginfo('name').' | '.get_bloginfo('description');
$blogname=get_bloginfo('name');
$blogdesc=get_bloginfo('description');

	if (is_singular()) :
		if (have_posts()) : while (have_posts()) : the_post();

			$postID=get_the_ID();
			$wptitle=get_the_title();

			$wptitle=$wptitle.' | '.$blogname;
			if (strtolower(trim(get_the_title()))==strtolower(trim($blogname))) $wptitle=get_the_title().' | '.$blogdesc;

			$postSOMMARIO=get_the_excerpt();
			if (!$postSOMMARIO) $postSOMMARIO=get_excerpt_by_txt(get_the_content(),35);

			$thumb = get_the_post_thumbnail($postID, 'large');
			$pattern= "/(?<=src=['|\"])[^'|\"]*?(?=['|\"])/i";
			preg_match($pattern, $thumb, $thePath);
			$image_ft = $thePath[0];
			if ($image_ft) $image_src=$image_ft;

		endwhile; endif;
	endif;

	$mydescription="";
	if ($postSOMMARIO) $mydescription.=$postSOMMARIO;

	if (trim(strip_tags($mydescription))=="") $mydescription=$blogdesc;
	$mydescription=get_excerpt_by_txt(str_replace(chr(10)," ",trim(strip_tags(htmlspecialchars_decode($mydescription, ENT_NOQUOTES)))),35);
	$mydescription=html_entity_decode($mydescription, ENT_QUOTES, "UTF-8");

	if (is_page_template('page_home.php') || is_home() || is_front_page()) $wptitle=$blogname;

	if (is_tag()) $wptitle=single_tag_title("",false).' | '.$blogname;
	if (is_search()) $wptitle=$blogname;

	if (is_month() || is_year() || is_year() || is_day() || is_tag()) $mydescription=str_replace(' | '.$blogname,'',$wptitle).' - '.$mydescription;

	echo PHP_EOL;
	if ($noindex=="1") echo '<meta name="robots" content="noindex">'.PHP_EOL;
	echo '<meta name="twitter:card" content="summary" />'.PHP_EOL;
	$wptitle=strip_tags(html_entity_decode($wptitle,ENT_QUOTES,'UTF-8'));
	echo '<meta property="og:title" content="'.str_replace(" | ".get_bloginfo('name'),"",trim($wptitle)).'" />'.PHP_EOL;
	if ($image_src) echo '<meta property="og:image" content="'.$image_src.'" />'.PHP_EOL;
	if ($image_src) echo '<meta property="twitter:image" content="'.$image_src.'" />'.PHP_EOL;
	echo '<meta property="og:description" content="'.$mydescription.'" />'.PHP_EOL;
	echo '<title>'.$wptitle.'</title>'.PHP_EOL.'<META NAME="Description" CONTENT="'.$mydescription.'">'.PHP_EOL;

}

function invalidate_cloudfront( $post_id, $post )
{
  if (isset($post->post_status) && 'auto-draft' === $post->post_status) {
    return;
  }
  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
    return;
  }

  if (defined('DOING_AJAX') && DOING_AJAX) {
    return;
  }

  $post_url = get_permalink($post_id);

  if(strpos($post_url, '?p=') !== false){
    return;
  }

  if(strpos($post_url, '-autosave-v') !== false){
    return;
  }

  if(strpos($post_url, '-revision-v') !== false){
    return;
  }

  $distributionId = getenv('AWS_DISTRIBUTION');
  $callerReference = time();
  $paths = [str_replace(home_url(), '', $post_url), '/', '/en/', '/es/', '/de/', '/fr/'];
  $quantity = 6;

  try {
    $cloudFrontClient = new Aws\CloudFront\CloudFrontClient([
      'version' => '2018-06-18',
      'region' => 'us-east-1'
    ]);

    $result = $cloudFrontClient->createInvalidation([
      'DistributionId' => $distributionId,
      'InvalidationBatch' => [
        'CallerReference' => $callerReference,
        'Paths' => [
          'Items' => $paths,
          'Quantity' => $quantity,
        ],
      ]
    ]);

    $message = '';
    if (isset($result['Location']))
    {
      $message = 'The invalidation location is: ' . $result['Location'];
    }
    $message .= ' and the effective URI is ' . $result['@metadata']['effectiveUri'] . '.';

    error_log($message);
  } catch (AwsException $e) {
    error_log('Error: ' . $e->getAwsErrorMessage());
  }
}
add_action('save_post', 'invalidate_cloudfront', 1, 2);
