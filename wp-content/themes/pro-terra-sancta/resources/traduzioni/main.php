<?php
class ATS_Traduzioni{
	public static function init(){
		$translations = array();
		$translations['header'] = self::header();
		$translations['footer'] = self::footer();
		$translations['custom_project'] = self::custom_project();
		$translations['newsletter_mailup'] = self::newsletter_mailup();
		$translations['project_category_list'] = self::project_category_list();
		$translations['project_category_list_norder'] = self::project_category_list_norder();
		$translations['give_module'] = self::give_module();
		$translations['module_donazioni_give'] = self::module_donazioni_give();
		return $translations;
	}
	private static function module_donazioni_give(){
		include __DIR__ . '/module_donazioni_give.php';
		return get_module_donazioni_give();
	}
	private static function give_module(){
		include __DIR__ . '/give_module.php';
		return get_give_module();
	}
	private static function project_category_list(){
		include __DIR__ . '/project_category_list.php';
		return get_project_category_list();
	}
	private static function project_category_list_norder(){
		include __DIR__ . '/project_category_list_norder.php';
		return get_project_category_list_norder();
	}
	private static function newsletter_mailup(){
		include __DIR__ . '/newsletter_mailup.php';
		return get_newsletter_mailup();
	}
	private static function header(){
		include __DIR__ . '/header.php';
		return get_header_translation();
	}
	private static function custom_project(){
		include __DIR__ . '/custom_project.php';
		return get_custom_project();
	}
	private static function footer(){
		include __DIR__ . '/footer.php';
		return get_footer_translation();
	}
}

class Traduzione{
	public $it;
	public $en;
	public $es;
	public $fr;
	public $de;
	
	public function setIt($frase){$this->it = $frase;}
	public function setEn($frase){$this->en = $frase;}
	public function setEs($frase){$this->es = $frase;}
	public function setFr($frase){$this->fr = $frase;}
	public function setDe($frase){$this->de = $frase;}
}