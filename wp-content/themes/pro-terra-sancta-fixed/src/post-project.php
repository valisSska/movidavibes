<?php

function post_project_ctp()
{
  $labels = [
      'name'               => __('Progetti', 'pro-terra-sancta-fixed'),
      'singular_name'      => __('Progetto', 'pro-terra-sancta-fixed'),
      'add_new'            => __('Add New', 'pro-terra-sancta-fixed'),
      'add_new_item'       => __('Add New Progetto', 'pro-terra-sancta-fixed'),
      'edit_item'          => __('Edit Progetto', 'pro-terra-sancta-fixed'),
      'new_item'           => __('New Progetto', 'pro-terra-sancta-fixed'),
      'all_items'          => __('All Progetto', 'pro-terra-sancta-fixed'),
      'view_item'          => __('View Progetto', 'pro-terra-sancta-fixed'),
      'search_items'       => __('Search Progetto', 'pro-terra-sancta-fixed'),
      'not_found'          => __('Nothing found', 'pro-terra-sancta-fixed'),
      'not_found_in_trash' => __('Nothing found in Trash', 'pro-terra-sancta-fixed'),
      'update_item'        => __('Update', 'pro-terra-sancta-fixed'),
  ];

  $args = [
      'label'               => __('Progetti', 'pro-terra-sancta-fixed'),
      'description'         => __('Progetti', 'pro-terra-sancta-fixed'),
      'labels'              => $labels,
      'supports'            => [
          'page-attributes',
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

  register_post_type('project', $args);

  register_taxonomy_for_object_type('category', 'project');

  $args = [
      'hierarchical'      => true,
      'public'            => true,
      'label'             => 'Area',
      'show_ui'           => true,
      'show_in_menu'      => true,
      'show_in_rest'      => true,
      'show_admin_column' => true,
      'query_var'         => true,
  ];
  register_taxonomy('project_name', 'project', $args);

  $labels = [
      'name'          => __('Regioni', 'pro-terra-sancta-fixed'),
      'singular_name' => __('Regione', 'pro-terra-sancta-fixed'),
      'search_items'  => __('Search Regioni', 'pro-terra-sancta-fixed'),
      'all_items'     => __('All Regioni', 'pro-terra-sancta-fixed'),
      'edit_item'     => __('Edit Regione', 'pro-terra-sancta-fixed'),
      'update_item'   => __('Update Regione', 'pro-terra-sancta-fixed'),
      'add_new_item'  => __('Add New Regione', 'pro-terra-sancta-fixed'),
      'new_item_name' => __('New Regione Name', 'pro-terra-sancta-fixed'),
      'menu_name'     => __('Regione', 'pro-terra-sancta-fixed'),
  ];

  $args = [
      'hierarchical'      => true,
      'public'            => true,
      'labels'            => $labels,
      'show_ui'           => true,
      'show_in_menu'      => true,
      'show_in_rest'      => true,
      'show_admin_column' => true,
      'query_var'         => true,
  ];

  register_taxonomy('regione', 'project', $args);
}

add_action('init', 'post_project_ctp', 0);
