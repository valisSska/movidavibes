<?php
class ATS_Newsletter_Mailup extends ET_Builder_Module {
    private $_parent;

    function __construct($mmInstance){
        $this->_parent = $mmInstance;
        parent::__construct();
    }
    public function init() {
        $this->name       = esc_html__( 'Newsletter Mailup', 'ats-theme' );
        $this->slug       = 'ats_newsletter_mailup';
        $this->settings_modal_toggles = array(
			'general'  => array(
				'toggles' => array(
					'main_content'   => esc_html__( 'Contenuti', 'ats-theme' ),
				)
			)
		);
    }
    public function get_fields() {
        $field = [
        ];
        return $field;
    }
    public function render( $unprocessed_props, $content = null, $render_slug ) {
        global $translations;
        $traduzione = $translations['newsletter_mailup'];
        $nonce_value = $this->_parent->getNonce();
        $submitID =  $this->_parent->getSubmitID();
        $formID =  $this->_parent->getFormID();
        $lang = ATS::get_lang();
		
		$idlist=get_post_meta( get_the_ID(), 'postIDMAILUP', true);
		if (!$idlist) $idlist=$traduzione['idlist']->$lang;
        $b_lang = base64_encode('lista_'.$idlist);
		
        
        $toRender = <<<RENDER
        <div id="b13dm-newsletter">
            <form id={$formID} data-nonce="{$nonce_value}" data-option="{$b_lang}">
                <div class='b13dm-newsletter-text'>
                    <h2>{$traduzione['title']->$lang}</h2>
                    <p>{$traduzione['subtitle']->$lang}</p>
                </div>
                <div class='b13dm-newsletter-input email'>
                    <input type="email" class='b13dmn-email' name='b13dmn-email' placeholder='{$traduzione['email']->$lang} *' required/>
                </div>
                <div class='b13dm-newsletter-input email'>
                    <input type="text" class='b13dmn-email' name='b13dmn-name' placeholder='{$traduzione['name']->$lang}'/>
                </div>
                <div class='b13dm-newsletter-input email'>
                    <input type="text" class='b13dmn-email' name='b13dmn-surname' placeholder='{$traduzione['surname']->$lang}'/>
                </div>
                <div class='b13dm-newsletter-input checkbox'>
                    <input type="checkbox" name="b13dmn-ppc" id="b13dmn-ppc" required>
                    <label for="b13dmn-ppc">
                        {$traduzione['privacy']->$lang}
                    </label>
                </div>
                <div class="b13dm-newsletter-send">
                    <input type="submit" id="{$submitID}" value="{$traduzione['btn_text']->$lang}">
                    <span class="b13dm-newsletter-send-state"><i class=""></i></span>
                </div>
            </form>
        </div>
RENDER;
        return $toRender;
    }
}
