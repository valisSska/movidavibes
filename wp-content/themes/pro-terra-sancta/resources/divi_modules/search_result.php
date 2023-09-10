<?php
class Ats_search_result extends ET_Builder_Module {
    function init(){
        $this->name       = esc_html__( 'Risultati ricerca', 'ats' );
        $this->slug       = 'ats_search_result';
        $this->post_types = array( 'page' );
    }

    public function get_fields() {
		$fields = array();
		return $fields;
    }

    public function render( $unprocessed_props, $content = null, $render_slug ){
        global $wp_query;
        if(!$wp_query->is_search() && $wp_query->is_admin()){
            wp_die("NOT SEARCH PAGE, remove module from this page");
        }
        $page = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $_lang = (get_query_var('l')) ? get_query_var('l') : ATS::defaul_lang();
        $defaul_img = ATS_RES_URL . "/img/logo.svg";
        $toRet = <<<PRINT
        <div id="ats-latest-news">
            <div class="ats-archive">
PRINT;
        if(have_posts()){
            $toRet .= $this->get_post_result($page, $defaul_img);
        } else {
            $toRet .= $this->no_post_result();
        }
            
        $toRet .= <<<PRINT
            </div>
        </div>
PRINT;
        wp_reset_query();
        wp_reset_postdata();
        return $toRet;
    }
    private function no_post_result(){
        global $wp_query;
        $search_term = get_query_var('s');
        return "<h2 class='search-page-title'>No results found for: <span class='search-page-term'>{$search_term}</span></h2>";
    }
    private function get_post_result($page, $defaul_img){
        global $wp_query;
        $search_term = get_query_var('s');
        $toRet = "<h2 class='search-page-title'>Search result of: <span class='search-page-term'>{$search_term}</span></h2>";
        while(have_posts()) : the_post();
            $post_content = get_the_content();
            $post_content = ATS::getDescriptionText($post_content);
            $post_permalink = get_the_permalink();
            $post_thumb = get_the_post_thumbnail_url();
            /* Alternative image */
            if(empty($post_thumb)){
                $post_thumb = $defaul_img;
            }
            $post_title = get_the_title();
            
            $post_print = <<<PRINT
            <div class="ats-news-post">
                <a href="{$post_permalink}">
                    <div class="image-container">
                        <img src="{$post_thumb}">
                    </div>
                    <div class="post-container">
                        <div class="post-container-title">
                            <h2>{$post_title}</h2>
                        </div>
                        <div class="post-container-content">
                            {$post_content}
                        </div>
                    </div>
                </a>
            </div>
PRINT;
            $toRet .= $post_print;
        endwhile;
        
        $toRet .= <<<PRINT
        </div>
        <div class="controls">
PRINT;
        $arrow_path = ATS_RES_URL . "/svg/Arrow.svg";
        
        $paginate_links_args = array(
            'format'             => '?paged=%#%',
            'current'            => $page,
            'show_all'           => false,
            'prev_next'          => true,
            'prev_text'          => '«',
            'next_text'          => '»',
            'add_args'           => false,
            'mid_size'      => 1,
        );
        $toRet .= paginate_links($paginate_links_args);
        return $toRet;
    }
}