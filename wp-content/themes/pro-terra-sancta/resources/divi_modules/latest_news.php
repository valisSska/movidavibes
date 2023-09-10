<?php
global $suff;
include get_stylesheet_directory() . '/lang/label-'.$suff.'.php';	
global $language;

class Ats_latest_news extends ET_Builder_Module {
    function init(){
        $this->name       = esc_html__( 'Latest post for category', 'et_builder' );
        $this->slug       = 'ats_latest_news';
    }

    public function get_fields() {

		$fields = array(
			'category' => array(

				'label' => esc_html__( 'Category', 'ats-theme' ),
                'type'  => 'select',
                
			),
        );
        $fields['category']['options'] = $this->get_category_options();
		return $fields;
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

    public function render( $unprocessed_props, $content = null, $render_slug ){
        global $wp_query;
		global $language;
        $setting = new stdClass();
        $setting->cat = $this->props['category'];
        $lang = ATS::get_lang();

		if ( get_query_var('paged') ) {
			$page = get_query_var('paged');
		} else if ( get_query_var('page') ) {
			$page = get_query_var('page');
		} else {
			$page = 1;
		}

        $args_q = array(
            'post_type' => "{$lang}-post",
            'tax_query' => array(
                    array(
                        "taxonomy" => "category",
                        "field" => "slug",
                        "terms" => $setting->cat
                    )
                ),
            'paged' => $page,
            'post_status'    => 'publish',
        );
        $wp_query = new WP_Query($args_q);
        $defaul_img = ATS_RES_URL . "/img/logo.svg";
        $toRet = <<<PRINT
        <div id="ats-latest-news">
            <div class="ats-archive">
PRINT;
            while(have_posts()) : the_post();
            $post_content = get_the_content();
            $post_content = ATS::getDescriptionText($post_content);
            $post_permalink = get_the_permalink();
            $post_thumb = get_the_post_thumbnail_url();
			
			$date_div='';
			if (contains("-post", get_post_type())) :
				$posthidedata=get_post_meta(get_the_ID(), 'posthidedata', true);
				if (!$posthidedata) :
					$nm='m'.get_the_time('n');
					$date_div='<div class="list_date">'.get_the_time('j').' '.$language[$nm].' '.get_the_time('Y').'</div>';
				endif;
			endif;
			
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
							{$date_div}
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
            'format'             => 'page/%#%/',
            'current'            => $page,
            'show_all'           => false,
            'prev_next'          => true,
            'prev_text'          => '«',
            'next_text'          => '»',
            'add_args'           => false,
            'mid_size'      => 1,
        );
        $toRet .= paginate_links($paginate_links_args);
        $toRet .= <<<PRINT
            </div>
        </div>
PRINT;

        wp_reset_query();
        wp_reset_postdata();
        return $toRet;
    }
}