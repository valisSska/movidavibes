<?php
class ATS_Project_Category_List_Redirect extends ET_Builder_Module {
    function init(){
        parent::init();
        $this->name       = esc_html__( 'Lista progetti - Redirect', 'et_builder' );
        $this->slug       = 'ats_project_category_list_redirect';
        $this->taxonomy_name = 'project_name_redirect';
    }

    public function get_fields() {
        /*$fields = parent::get_fields();
        unset($fields['title']);
        unset($fields['content']);*/
        /*$fields['category'] = array(
            'label'           => esc_html__( 'Categoria progettto', 'ats-theme' ),
            'type'             => 'select',
            'option_category' => 'basic_option',
            'description'     => esc_html__( 'Selezionare categoria progetto', 'ats-theme' ),
            'options' => $this->get_project_cat_name()
        );
        $fields['enable_title'] = array(
            'label'             => esc_html__( 'Titolo automatico', 'ats-theme' ),
            'type'              => 'yes_no_button',
            'option_category'   => 'basic_option',
            'default'           => 'on',
            'description'       => esc_html__( 'Visualizza il titolo', 'ats-theme' ),
            'options'           => array(
                'on' => esc_html__('yes', 'divi'),
                'off' => esc_html__('no', 'divi'),
            )
        );
        $fields['custom_title'] = array(
            'label'             => esc_html__( 'Personalizza titolo', 'ats-theme' ),
            'type'              => 'text',
            'option_category'   => 'basic_option',
            'description'       => esc_html__( 'Inserisci il titolo ', 'ats-theme' ),
            'show_if'           => array(
                'enable_title' => 'off'
            )
        );
        return $fields;*/
        return array();
    }
    protected function get_project_cat_name(){
        $toRet = array();
        $terms = get_terms([
            'taxonomy' => $this->taxonomy_name,
            'hide_empty' => false,
        ]);
        foreach($terms as $term){
            $toRet[$term->slug] = $term->name;
        }
        return $toRet;
    }
    public function get_category_options(){
        $args_cat_nofilter = array(
            "hide_empty" => 0
        );
        $cat_nofilter = get_categories($args_cat_nofilter);
        $cat_filter = array();
        foreach($cat_nofilter as $cat){
            $cat_filter[$cat->slug] = $cat->name;
        }
        return $cat_filter;
    }

    function render( $attrs, $content = null, $render_slug ) {
        $lang = ATS::get_lang();
        $this->lang = $lang;
        global $translations;
        $traduzione = $translations['project_category_list_norder'];
        /*if($this->props['enable_title'] == 'on'){
            $this->props['title'] = $traduzione[$project_name_slug]->$lang;
        }*/
        $this->add_classname('et_pb_toggle');
        $this->add_classname('et_pb_toggle_item');
        return $this->generate_content($traduzione);
    }

    public function generate_content($traduzione){
        $toRet = array();
        $toRet[] = "<form id=\"project_list_norder\">";
        $toRet[] = $this->generate_post_list();
        $toRet[] = $this->generate_button($traduzione);
        $toRet[] = "</form>";
        // Added JS code on ds-script (Main Script)
        return implode($toRet);
    }
    protected function generate_button($traduzione){
        $lang = $this->lang;
        return "<input type=\"button\" value=\"{$traduzione['dona_progetto']->$lang}\">";
    }
    protected function generate_post_list(){
        $posts = get_posts([
            'numberposts' => -1,
            'post_type' => 'project',
            'orderby' => 'title',
            'order' => 'ASC',
            'tax_query' => array(
                'relation' => 'AND',
                // array(
                //     'taxonomy' => $this->taxonomy_name,
                //     'field' => 'slug',
                //     'terms' => $this->props['category']
                // ),
                array(
                    'taxonomy' => 'project_category',
                    'field' => 'slug',
                    'terms' => $this->lang
                ),
            )
        ]);

        $toRet = "<select>";
        foreach($posts as $post){
            $title = $post->post_title;
            $permalink = get_permalink($post). "#donate";
            $selected = "";
            if (
                strpos($title, "Dove c'è più bisogno") !== false ||
                strpos($title, "Where help is most needed") !== false ||
                strpos($title, "Donde hay más necesidad") !== false ||
                strpos($title, "La ou l'aide est le plus necessaire") !== false ||
                strpos($title, "Wo die Hilfe am Nötigsten ist") !== false 
            ) {
                $selected = "selected";
            }
            $toRet .= <<<PRINT
                <option value="{$permalink}" $selected>{$title}</option>
PRINT;
        }
        $toRet .= "</select>";
        return $toRet;
    }

    protected function _render_module_wrapper( $output = '', $render_slug = '' ) {
        return $output;
    }
}