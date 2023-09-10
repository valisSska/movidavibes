<?php
class CPT_CUSTOM{
	public static function init() {
		self::campaign_type();
		self::it_lang();
		self::en_lang();
		self::es_lang();
		self::fr_lang();
		self::de_lang();
		//self::donation_form();
		//self::msg();
		self::taxo_img();
		self::edit_project_category();
	}
	public static function edit_project_category()
	{
		$p_cat = get_taxonomy('project_category');
		$p_cat->label = "Lingue";

		$labels = new stdClass();
		$labels->name = "Lingue";
		$labels->singular_name = "Lingua";
		$labels->search_item = "Cerca lingua";
		$labels->all_items = "Tutte le lingue";
		$labels->parent_item = 'Lingua';
		$labels->parent_item_colon = "Lingua";
		$labels->edit_item = 'Modifica lingua';
		$labels->view_item = 'Visualizza lingua';
		$labels->update_item = 'Aggiorna lingua';
		$labels->add_new_item = 'Aggiungi nuova lingua';
		$labels->new_item_name = 'Nome nuova lingua';
		$labels->not_found = 'Non ci sono lingue impostate';
		$labels->no_terms = 'Nessuna lingua';
		$labels->items_list_navigation = "Navigazione elenco lingue";
		$labels->items_list = 'Elenco lingue';
		$labels->back_to_items = 'Torna alle lingue';
		$labels->menu_name = 'Lingue';
		$labels->name_admin_bar = "Gestione lingue";
		$labels->archives = 'Tutte le lingue';

		$p_cat->labels = $labels;
		register_taxonomy('project_category', 'project', (array) $p_cat);

		$args = array(
			'hierarchical' => true,
			'label' => 'Categoria',
			'show_ui' => true,
			'show_admin_column' => true,
			'query_var' => true,
			//'rewrite' => array( 'slug' => 'it' ),
		);
		register_taxonomy( 'project_name', 'project', $args );
		register_taxonomy( 'project_name', 'campaign', $args );
    register_taxonomy_for_object_type('project_category', 'campaign');
	}

	public static function campaign_type(){
    $labels = array(
      'name'               => esc_html__( 'Campagne', 'et_builder' ),
      'singular_name'      => esc_html__( 'Campagna', 'et_builder' ),
      'add_new'            => esc_html__( 'Add New', 'et_builder' ),
      'add_new_item'       => esc_html__( 'Add New Campaign', 'et_builder' ),
      'edit_item'          => esc_html__( 'Edit Campaign', 'et_builder' ),
      'new_item'           => esc_html__( 'New Campaign', 'et_builder' ),
      'all_items'          => esc_html__( 'All Campaign', 'et_builder' ),
      'view_item'          => esc_html__( 'View Campaign', 'et_builder' ),
      'search_items'       => esc_html__( 'Search Campaign', 'et_builder' ),
      'not_found'          => esc_html__( 'Nothing found', 'et_builder' ),
      'not_found_in_trash' => esc_html__( 'Nothing found in Trash', 'et_builder' ),
      'parent_item_colon'  => '',
    );

    $args = array(
      'labels'             => $labels,
      'public'             => true,
      'publicly_queryable' => true,
      'show_ui'            => true,
      'can_export'         => true,
      'show_in_nav_menus'  => true,
      'query_var'          => true,
      'has_archive'        => true,
      'rewrite'            => apply_filters(
        'et_project_posttype_rewrite_args',
        array(
          'feeds'      => true,
          'slug'       => 'campaign',
          'with_front' => false,
        )
      ),
      'capability_type'    => 'post',
      'hierarchical'       => false,
      'menu_position'      => null,
      'show_in_rest'       => true,
      'supports'           => array( 'title', 'page-attributes', 'author', 'editor', 'thumbnail', 'excerpt', 'comments', 'revisions', 'custom-fields' ),
      );

    register_post_type( 'campaign', apply_filters( 'et_project_posttype_args', $args ) );
  }

	public static function it_lang(){
		$labels = array(
			'name' => _x( 'Italiano', 'it-post' ),
			'singular_name' => _x( 'Italiano', 'it-post' ),
			'add_new' => _x( 'Add new', 'it-post' ),
			'add_new_item' => _x( 'Italiano', 'it-post' ),
			'edit_item' => _x( 'Edit', 'it-post' ),
			'new_item' => _x( 'New', 'it-post' ),
			'view_item' => _x( 'View', 'it-post' ),
			'search_items' => _x( 'Search', 'it-post' ),
			'not_found' => _x( 'Not found', 'it-post' ),
			'not_found_in_trash' => _x( 'Not found', 'it-post' ),
			'parent_item_colon' => _x( 'Parent', 'it-post' ),
			'menu_name' => _x( 'Italiano', 'it-post' ),
		);

		$args = array(
			'labels' => $labels,
			'hierarchical' => false,
			'rewrite' => array('slug' => 'it'),
			'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'post-formats' ),
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'menu_position' => 5,
			'show_in_nav_menus' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => false,
			'has_archive' => false,
			'query_var' => true,
			'can_export' => true,
			'capability_type' => 'post',
      'show_in_rest' => true,
		);

		register_post_type( 'it-post', $args );

		$args = array(
				'hierarchical' => false,
				'label' => 'Tag',
				'show_ui' => true,
				'show_admin_column' => true,
				'update_count_callback' => '_update_post_term_count',
				'query_var' => true,
        'show_in_rest' => true,
				//'rewrite' => array( 'slug' => 'it' ),
			);
      register_taxonomy( 'it-tag', 'it-post', $args );
		register_taxonomy_for_object_type('category', 'it-post');
		register_taxonomy_for_object_type('post_tag', 'it-post');
	}
	public static function en_lang(){

		$labels = array(
			'name' => _x( 'English', 'en-post' ),
			'singular_name' => _x( 'English', 'en-post' ),
			'add_new' => _x( 'Add new', 'en-post' ),
			'add_new_item' => _x( 'English', 'en-post' ),
			'edit_item' => _x( 'Edit', 'en-post' ),
			'new_item' => _x( 'New', 'en-post' ),
			'view_item' => _x( 'View', 'en-post' ),
			'search_items' => _x( 'Search', 'en-post' ),
			'not_found' => _x( 'Not found', 'en-post' ),
			'not_found_in_trash' => _x( 'Not found', 'en-post' ),
			'parent_item_colon' => _x( 'Parent', 'en-post' ),
			'menu_name' => _x( 'English', 'en-post' ),
		);

		$args = array(
			'labels' => $labels,
			'hierarchical' => false,
			'rewrite' => array('slug' => 'en'),
			'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'post-formats' ),
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'menu_position' => 5,
			'show_in_nav_menus' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => false,
			'has_archive' => false,
			'query_var' => true,
			'can_export' => true,
			'capability_type' => 'post',
      'show_in_rest' => true,
		);

		register_post_type( 'en-post', $args );

		$args = array(
				'hierarchical' => false,
				'label' => 'Tag',
				'show_ui' => true,
				'show_admin_column' => true,
				'update_count_callback' => '_update_post_term_count',
				'query_var' => true,
        'show_in_rest' => true,
				//'rewrite' => array( 'slug' => 'en' ),
			);

		register_taxonomy( 'en-tag', 'en-post', $args );
		register_taxonomy_for_object_type('category', 'en-post');
    register_taxonomy_for_object_type('post_tag', 'en-post');
	}
	public static function es_lang(){
		$labels = array(
			'name' => _x( 'Español', 'es-post' ),
			'singular_name' => _x( 'Español', 'es-post' ),
			'add_new' => _x( 'Add new', 'es-post' ),
			'add_new_item' => _x( 'Español', 'es-post' ),
			'edit_item' => _x( 'Edit', 'es-post' ),
			'new_item' => _x( 'New', 'es-post' ),
			'view_item' => _x( 'View', 'es-post' ),
			'search_items' => _x( 'Search', 'es-post' ),
			'not_found' => _x( 'Not found', 'es-post' ),
			'not_found_in_trash' => _x( 'Not found', 'es-post' ),
			'parent_item_colon' => _x( 'Parent', 'es-post' ),
			'menu_name' => _x( 'Español', 'es-post' ),
		);

		$args = array(
			'labels' => $labels,
			'hierarchical' => false,
			'rewrite' => array('slug' => 'es'),
			'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'post-formats' ),
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'menu_position' => 5,
			'show_in_nav_menus' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => false,
			'has_archive' => false,
			'query_var' => true,
			'can_export' => true,
      'show_in_rest' => true,
			'capability_type' => 'post'
		);

		register_post_type( 'es-post', $args );
		$args = array(
				'hierarchical' => false,
				'label' => 'Tag',
				'show_ui' => true,
				'show_admin_column' => true,
				'update_count_callback' => '_update_post_term_count',
				'query_var' => true,
        'show_in_rest' => true,
				//'rewrite' => array( 'slug' => 'es' ),
			);

		register_taxonomy( 'es-tag', 'es-post', $args );
		register_taxonomy_for_object_type('category', 'es-post');
    register_taxonomy_for_object_type('post_tag', 'es-post');
	}
	public static function fr_lang(){
		$labels = array(
			'name' => _x( 'Français', 'fr-post' ),
			'singular_name' => _x( 'Français', 'fr-post' ),
			'add_new' => _x( 'Add new', 'fr-post' ),
			'add_new_item' => _x( 'Français', 'fr-post' ),
			'edit_item' => _x( 'Edit', 'fr-post' ),
			'new_item' => _x( 'New', 'fr-post' ),
			'view_item' => _x( 'View', 'fr-post' ),
			'search_items' => _x( 'Search', 'fr-post' ),
			'not_found' => _x( 'Not found', 'fr-post' ),
			'not_found_in_trash' => _x( 'Not found', 'fr-post' ),
			'parent_item_colon' => _x( 'Parent', 'fr-post' ),
			'menu_name' => _x( 'Français', 'fr-post' ),
		);

		$args = array(
			'labels' => $labels,
			'hierarchical' => false,
			'rewrite' => array('slug' => 'fr'),
			'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'post-formats' ),
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'menu_position' => 5,
			'show_in_nav_menus' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => false,
			'has_archive' => false,
			'query_var' => true,
			'can_export' => true,
      'show_in_rest' => true,
			'capability_type' => 'post'
		);

		register_post_type( 'fr-post', $args );
		$args = array(
				'hierarchical' => false,
				'label' => 'Tag',
				'show_ui' => true,
				'show_admin_column' => true,
				'update_count_callback' => '_update_post_term_count',
				'query_var' => true,
        'show_in_rest' => true,
				//'rewrite' => array( 'slug' => 'fr' ),
			);

		register_taxonomy( 'fr-tag', 'fr-post', $args );
		register_taxonomy_for_object_type('category', 'fr-post');
    register_taxonomy_for_object_type('post_tag', 'fr-post');
	}
	public static function de_lang(){
		$labels = array(
			'name' => _x( 'Deutsch', 'de-post' ),
			'singular_name' => _x( 'Deutsch', 'de-post' ),
			'add_new' => _x( 'Add new', 'de-post' ),
			'add_new_item' => _x( 'Deutsch', 'de-post' ),
			'edit_item' => _x( 'Edit', 'de-post' ),
			'new_item' => _x( 'New', 'de-post' ),
			'view_item' => _x( 'View', 'de-post' ),
			'search_items' => _x( 'Search', 'de-post' ),
			'not_found' => _x( 'Not found', 'de-post' ),
			'not_found_in_trash' => _x( 'Not found', 'de-post' ),
			'parent_item_colon' => _x( 'Parent', 'de-post' ),
			'menu_name' => _x( 'Deutsch', 'de-post' ),
		);

		$args = array(
			'labels' => $labels,
			'hierarchical' => false,
			'rewrite' => array('slug' => 'de'),
			'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'post-formats' ),
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'menu_position' => 5,
			'show_in_nav_menus' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => false,
			'has_archive' => false,
			'query_var' => true,
			'can_export' => true,
      'show_in_rest' => true,
			'capability_type' => 'post'
		);

		register_post_type( 'de-post', $args );
		$args = array(
				'hierarchical' => false,
				'label' => 'Tag',
				'show_ui' => true,
				'show_admin_column' => true,
				'update_count_callback' => '_update_post_term_count',
				'query_var' => true,
        'show_in_rest' => true,
				//'rewrite' => array( 'slug' => 'de' ),
			);

		register_taxonomy( 'de-tag', 'de-post', $args );
		register_taxonomy_for_object_type('category', 'de-post');
    register_taxonomy_for_object_type('post_tag', 'de-post');
  }

	public static function donation_form(){
		$labels = array(
			'name' => _x( 'Form Donazioni', 'donateform' ),
			'singular_name' => _x( 'Form Donazioni', 'donateform' ),
			'add_new' => _x( 'Aggiungi nuovo', 'donateform' ),
			'add_new_item' => _x( 'Aggiungi nuovo', 'donateform' ),
			'edit_item' => _x( 'Edit', 'donateform' ),
			'new_item' => _x( 'Nuovo', 'donateform' ),
			'view_item' => _x( 'Vedi', 'donateform' ),
			'search_items' => _x( 'Cerca', 'donateform' ),
			'not_found' => _x( 'Non trovato', 'donateform' ),
			'not_found_in_trash' => _x( 'Non trovato', 'donateform' ),
			'parent_item_colon' => _x( 'Parent', 'donateform' ),
			'menu_name' => _x( 'Form Donazioni', 'donateform' ),
		);

		$args = array(
			'labels' => $labels,
			'hierarchical' => false,
			'rewrite' => array('slug' => 'donateform'),
			'supports' => array( 'title', 'custom-fields'),
			'public' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'menu_position' => 52,
			'show_in_nav_menus' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => true,
			'has_archive' => false,
			'query_var' => true,
			'can_export' => true,
			'capability_type' => 'post'
		);
		register_post_type( 'donateform', $args );
	}

	public static function msg(){
		$labels = array(
			'name' => _x( 'Messaggi', 'msg' ),
			'singular_name' => _x( 'Messaggio', 'msg' ),
			'add_new' => _x( 'Aggiungi nuovo', 'msg' ),
			'add_new_item' => _x( 'Aggiungi nuovo', 'msg' ),
			'edit_item' => _x( 'Edit', 'msg' ),
			'new_item' => _x( 'Nuovo', 'msg' ),
			'view_item' => _x( 'Vedi', 'msg' ),
			'search_items' => _x( 'Cerca', 'msg' ),
			'not_found' => _x( 'Non trovato', 'msg' ),
			'not_found_in_trash' => _x( 'Non trovato', 'msg' ),
			'parent_item_colon' => _x( 'Parent', 'msg' ),
			'menu_name' => _x( 'Messaggi', 'msg' ),
		);

		$args = array(
			'labels' => $labels,
			'hierarchical' => false,
			'rewrite' => array('slug' => 'msg'),
			'supports' => false,
			'public' => false,
			'show_ui' => true,
			'show_in_menu' => true,
			'menu_position' => 51,
			'show_in_nav_menus' => true,
			'publicly_queryable' => false,
			'exclude_from_search' => true,
			'has_archive' => true,
			'query_var' => true,
			'can_export' => true,
			'capability_type' => 'post'
		);

		register_post_type( 'msg', $args );
	}
	public static function taxo_img(){
		$labels = array(
			'name'              => 'Categorie',
			'singular_name'     => 'Categoria',
			'search_items'      => 'Cerca Categorie',
			'all_items'         => 'Tutte le Categorie',
			'parent_item'       => 'Categoria superiore',
			'parent_item_colon' => 'Categoria superiore:',
			'edit_item'         => 'Modifica',
			'update_item'       => 'Aggiorna',
			'add_new_item'      => 'Aggiungi nuova Categoria',
			'new_item_name'     => 'Nuova Categoria',
			'menu_name'         => 'Categorie',
		);

		$args = array(
			'labels' => $labels,
			'hierarchical' => true,
			'query_var' => 'gallery',
			//'rewrite' => 'true',
			'show_admin_column' => 'true',
			'update_count_callback' => 'my_update_count',
		);

		register_taxonomy( 'gallery', 'attachment', $args );
	}
}
