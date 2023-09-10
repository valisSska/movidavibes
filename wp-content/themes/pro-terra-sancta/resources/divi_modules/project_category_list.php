<?php
class ATS_Project_Category_List extends ET_Builder_Module_Toggle {
    function init(){
        parent::init();
        $this->name       = esc_html__( 'Lista progetti', 'et_builder' );
        $this->slug       = 'ats_project_category_list';
        $this->taxonomy_name = 'project_name';
    }

    public function get_fields() {
        $fields = parent::get_fields();
        unset($fields['title']);
        unset($fields['content']);

        $fields['category'] = array(
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
		return $fields;
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
        $traduzione = $translations['project_category_list'];
        $project_name_slug = $this->props['category'];
        if(empty($project_name_slug)) return '';
        if($this->props['enable_title'] == 'on'){
            $ct = $this->props['custom_title'];
            if(empty($this->props['custom_title'])){
                $this->props['title'] = $traduzione[$project_name_slug]->$lang;
            } else {
                $this->props['title'] = $this->props['custom_title'];
            }
            
        }
        $this->content = $this->generate_content();
        $this->add_classname('et_pb_toggle');
        $this->add_classname('et_pb_toggle_item');
        return parent::render($attrs, $content, $render_slug);
    }

    public function generate_content(){
        $posts = get_posts([
            'numberposts' => -1,
            'post_type' => 'project',
            'orderby' => 'title',
            'order' => 'DESC',
            'tax_query' => array(
                'relation' => 'AND',
                array(
                    'taxonomy' => $this->taxonomy_name,
                    'field' => 'slug',
                    'terms' => $this->props['category']
                ),
                array(
                    'taxonomy' => 'project_category',
                    'field' => 'slug',
                    'terms' => $this->lang
                ),
            )
        ]);

        $toRet = "<ul>";
        foreach($posts as $post){
            $title = $post->post_title;
            $permalink = get_permalink($post);
            $toRet .= <<<PRINT
            <li>
                <a href="{$permalink}">{$title}</a>
            </li>
PRINT;
        }
        $toRet .= "</ul>";
        return $toRet;
    }

    protected function _render_module_wrapper( $output = '', $render_slug = '' ) {
        return $output;
    }
}