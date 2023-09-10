<?php
class ModuleManager{

    function __construct(){
        add_action("init", array($this, 'after_theme_setup') );
        $this->load_standalone_module();
    }
    function load_standalone_module(){
        include_once ATS_MODULE_PATH . "/newsletter_mailup/loadModule.php";
        new MailUpNewsletterModule($this);  
    }
    function after_theme_setup(){
        /* Builder Dependency */
        add_action( 'et_builder_ready' , array($this, 'load_module_with_builder_dependency'));
    }
    function load_module_with_builder_dependency(){
        include_once ATS_MODULE_PATH . "/fullwidth_post_slider_custom.php";
        new Fullwidth_Post_Slider_Custom;
        include_once ATS_MODULE_PATH . "/custom_project.php";
        new ATS_CUSTOM_PROJECT;
        include_once ATS_MODULE_PATH . "/latest_news.php";
        new Ats_latest_news;
        include_once ATS_MODULE_PATH . "/project_category_list.php";
        new ATS_Project_Category_List;
        include_once ATS_MODULE_PATH . "/project_category_listnorder.php";
        new ATS_Project_Category_List_Redirect;
        include_once ATS_MODULE_PATH . "/search_result.php";
        new Ats_search_result;
        include_once ATS_MODULE_PATH . "/affiliazione_footer.php";
        new ATS_affiliazione;
        new ATS_affiliazione_item;
        include_once ATS_MODULE_PATH . "/module-offline-donation.php";
        new Ats_offline_donation;
	}
}