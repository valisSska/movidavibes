<?php

function post_event_ctp()
{
  $labels = [
      'name'               => __('Eventi', 'pro-terra-sancta-fixed'),
      'singular_name'      => __('Evento', 'pro-terra-sancta-fixed'),
      'add_new'            => __('Add New', 'pro-terra-sancta-fixed'),
      'add_new_item'       => __('Add New Evento', 'pro-terra-sancta-fixed'),
      'edit_item'          => __('Edit Evento', 'pro-terra-sancta-fixed'),
      'new_item'           => __('New Evento', 'pro-terra-sancta-fixed'),
      'all_items'          => __('All Eventi', 'pro-terra-sancta-fixed'),
      'view_item'          => __('View Evento', 'pro-terra-sancta-fixed'),
      'search_items'       => __('Search Eventi', 'pro-terra-sancta-fixed'),
      'not_found'          => __('Nothing found', 'pro-terra-sancta-fixed'),
      'not_found_in_trash' => __('Nothing found in Trash', 'pro-terra-sancta-fixed'),
      'update_item'        => __('Update', 'pro-terra-sancta-fixed'),
  ];

  $args = [
      'label'               => __('Eventi', 'pro-terra-sancta-fixed'),
      'description'         => __('Eventi', 'pro-terra-sancta-fixed'),
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

  register_post_type('event', $args);
  register_taxonomy_for_object_type('project_name', 'event');
  register_taxonomy_for_object_type('category', 'event');
  register_taxonomy_for_object_type('regione', 'event');
}

add_action('init', 'post_event_ctp', 0);
