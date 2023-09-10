<?php

function post_campaign_ctp()
{
  $labels = [
      'name'               => __('Campagne', 'pro-terra-sancta-fixed'),
      'singular_name'      => __('Campagna', 'pro-terra-sancta-fixed'),
      'add_new'            => __('Add New', 'pro-terra-sancta-fixed'),
      'add_new_item'       => __('Add New Campaign', 'pro-terra-sancta-fixed'),
      'edit_item'          => __('Edit Campaign', 'pro-terra-sancta-fixed'),
      'new_item'           => __('New Campaign', 'pro-terra-sancta-fixed'),
      'all_items'          => __('All Campaign', 'pro-terra-sancta-fixed'),
      'view_item'          => __('View Campaign', 'pro-terra-sancta-fixed'),
      'search_items'       => __('Search Campaign', 'pro-terra-sancta-fixed'),
      'not_found'          => __('Nothing found', 'pro-terra-sancta-fixed'),
      'not_found_in_trash' => __('Nothing found in Trash', 'pro-terra-sancta-fixed'),
      'update_item'        => __('Update', 'pro-terra-sancta-fixed'),
  ];

  $args = [
      'label'               => __('Campagne', 'pro-terra-sancta-fixed'),
      'description'         => __('Campagne', 'pro-terra-sancta-fixed'),
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

  register_post_type('campaign', $args);
  register_taxonomy_for_object_type('project_name', 'campaign');
  register_taxonomy_for_object_type('category', 'campaign');
  register_taxonomy_for_object_type('regione', 'campaign');
}

add_action('init', 'post_campaign_ctp', 0);
