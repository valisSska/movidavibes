<?php
class MailUpNewsletterModule{
    private $_mmInstance;
    private $nonce;
    private $uuid4;
    private $submitID;
    private $formID;
    private $nonce_namespace;
    private $jsID;
    function __construct($moduleInstance){
        $this->init_action();
        $this->_mmInstance = $moduleInstance;
        $this->uuid4 = wp_generate_uuid4();
        $this->nonce_namespace = "newsletter_module_" .  $this->uuid4;
        $this->nonce = wp_create_nonce($this->nonce_namespace);
        $this->submitID = wp_generate_uuid4();
        $this->formID = wp_generate_uuid4();
        $this->jsID = wp_generate_uuid4();
    }
    function registerJs(){
        $scriptName = "b13dm-newsletter-".$this->jsID;
        wp_register_script( $scriptName, ATS_MODULE_URL .'/newsletter_mailup/b13dm-newsletter.js', array( 'jquery' ), null, true );
        
        wp_localize_script( $scriptName, 'setting', array(
            'ajaxurl'    => admin_url( 'admin-ajax.php' ),
            'form' => "#".$this->formID,
            'action' => $this->getAjaxConfig()->name,
            'ss' => base64_encode($this->uuid4)
        ) );
        wp_enqueue_script($scriptName);
    }
    function init_action(){
        $ajaxConfig = $this->getAjaxConfig();
        add_action( 'wp_enqueue_scripts' , array($this, 'registerJs') );
        add_action( 'et_builder_ready' , array($this, 'loadModule') );
        add_action( 'wp_ajax_nopriv_' . $ajaxConfig->name, $ajaxConfig->callback);
        add_action( 'wp_ajax_' . $ajaxConfig->name, $ajaxConfig->callback);
    }
    private function getAjaxConfig(){
        $aj = new stdClass();
        $aj->name = "b13dm_news";
        $aj->callback = array( $this, 'ajax_request' );
        return $aj;
    }

    function getInstance()  {return $this;}
    function getNonce()     {return $this->nonce;}
    function getSubmitID()  {return $this->submitID;}
    function getFormID()    {return $this->formID;}

    public function loadModule(){
        include_once ATS_MODULE_PATH . "/newsletter_mailup/module.php";
        new ATS_Newsletter_Mailup($this);
    }

    public function ajax_request(){
        $data = $_POST;
        $nonce_namespace = "newsletter_module_".base64_decode($_POST['ss']);
        if ( check_ajax_referer( $nonce_namespace, 's', false ) == false ) {
            wp_send_json_error("Error, you aren't authorized");
        }
        $f = $data['d'];
        $f = base64_decode($f);
        $lang = str_replace('lista_','',base64_decode($data['o']));
        parse_str($f,$a);
        if($this->checkFormData($a))
            if($this->insertInEmail($lang, $a))
                wp_send_json_success();
            else
                wp_send_json_error("Error parsing form data");  
        else
            wp_send_json_error("Error parsing form data");
    }
    
    private function checkFormData(array $formData){
        if(empty($formData['b13dmn-email'])) return false;
        if(empty($formData['b13dmn-ppc'])) return false;
        if($formData['b13dmn-ppc'] != "on") return false;
        if(!filter_var($formData['b13dmn-email'], FILTER_VALIDATE_EMAIL)) return false;
        return true;
    }

    private function insertInEmail($lang, array $data){
        include_once get_stylesheet_directory() . '/functions.php';
        include_once __DIR__ . "/mailupcore/Core.php";
        if (filter_var($lang, FILTER_VALIDATE_INT)) {
        $auth = new MailUpCoreAuth(
            'm127315', 
            'Wellnet18', 
            'c927acd3-2279-4cd1-81a6-116e205bbccc', 
            '8ec479f7-3c66-464d-b9ad-655fb8e52330', 
            'https://www.proterrasancta.org/'
        );
        $mailUp = new MailUpCore($auth);

        $newId = $mailUp->AddToMailGroup($lang,$data['b13dmn-email'],$data['b13dmn-name'],$data['b13dmn-surname']);
		return true;
		} else  {
			return false;
		}
	}
}