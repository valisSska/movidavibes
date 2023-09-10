<?php

function post_inglese_ctp()
{
  $labels = [
      'all_items'          => __('All', 'pro-terra-sancta-fixed'),
      'update_item'        => __('Update', 'pro-terra-sancta-fixed'),
      'name'               => __('Inglese', 'pro-terra-sancta-fixed'),
      'singular_name'      => __('Inglese', 'pro-terra-sancta-fixed'),
      'add_new'            => __('Add new', 'pro-terra-sancta-fixed'),
      'add_new_item'       => __('Inglese', 'pro-terra-sancta-fixed'),
      'edit_item'          => __('Edit', 'pro-terra-sancta-fixed'),
      'new_item'           => __('New', 'pro-terra-sancta-fixed'),
      'view_item'          => __('View', 'pro-terra-sancta-fixed'),
      'search_items'       => __('Search', 'pro-terra-sancta-fixed'),
      'not_found'          => __('Not found', 'pro-terra-sancta-fixed'),
      'not_found_in_trash' => __('Not found', 'pro-terra-sancta-fixed'),
      'parent_item_colon'  => __('Parent', 'pro-terra-sancta-fixed'),
      'menu_name'          => __('Inglese', 'pro-terra-sancta-fixed'),
  ];

  $args = [
      'label'               => __('Inglese', 'pro-terra-sancta-fixed'),
      'description'         => __('Inglese', 'pro-terra-sancta-fixed'),
      'labels'              => $labels,
      'supports'            => [
          'title',
          'editor',
          'excerpt',
          'author',
          'trackbacks',
          'thumbnail',
          'comments',
          'revisions',
          'custom-fields',
          'post-formats',
      ],
      'hierarchical'        => false,
      'public'              => true,
      'show_in_rest'        => true,
      'show_ui'             => true,
      'show_in_menu'        => true,
      'show_in_nav_menus'   => true,
      'show_in_admin_bar'   => true,
      'menu_position'       => 5,
      'can_export'          => true,
      'query_var'           => true,
      'has_archive'         => false,
      'exclude_from_search' => false,
      'publicly_queryable'  => true,
      'capability_type'     => 'post',
  ];

  register_post_type('en-post', $args);

  $args = [
      'hierarchical'          => false,
      'label'                 => 'Tag',
      'show_ui'               => true,
      'show_admin_column'     => true,
      'update_count_callback' => '_update_post_term_count',
      'query_var'             => true,
      'show_in_rest'          => true,
  ];
  register_taxonomy('en-tag', 'en-post', $args);
  register_taxonomy_for_object_type('category', 'en-post');
  register_taxonomy_for_object_type('post_tag', 'en-post');
}

add_action('init', 'post_inglese_ctp', 0);
