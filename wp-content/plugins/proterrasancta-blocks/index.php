<?php
/**
 * Plugin Name: ProTerraSancta blocks
 * Plugin URI: https://www.webdevotion.net
 * Description: Building blocks for ProTerraSancta sites.
 * Version: 1.1.0
 * Author: Web devotion SRL
 *
 * @package proterrasancta-blocks
 */

if (!defined('ABSPATH')) {
  exit();
}

function proterrasancta_block_categories($categories)
{
  return array_merge($categories, [
      [
          'slug'  => 'proterrasancta',
          'title' => 'Proterrasancta blocks',
          'icon'  => 'wordpress',
      ],
  ]);
}
add_filter('block_categories', 'proterrasancta_block_categories', 10, 2);

function ce_lab_register_blocks()
{
  $asset_file = include plugin_dir_path(__FILE__) . 'build/index.asset.php';

  wp_register_script(
    'proterrasancta-blocks',
    plugins_url('build/index.js', __FILE__),
    $asset_file['dependencies'],
    $asset_file['version'],
    true,
  );

  wp_register_style(
    'proterrasancta-blocks-editor-style',
    plugins_url('build/index.css', __FILE__),
    [ 'wp-edit-blocks' ],
    filemtime(plugin_dir_path(__FILE__) . 'build/index.css'),
  );

  register_block_type('rovagnati-us/divider', [
      'editor_script' => 'proterrasancta-blocks',
      'editor_style'  => 'proterrasancta-blocks-editor-style',
  ]);

  register_block_type('rovagnati-us/container', [
      'editor_script' => 'proterrasancta-blocks',
      'editor_style'  => 'proterrasancta-blocks-editor-style',
  ]);

  register_block_type('rovagnati-us/container-row', [
      'editor_script' => 'proterrasancta-blocks',
      'editor_style'  => 'proterrasancta-blocks-editor-style',
  ]);

  register_block_type('rovagnati-us/row', [
      'editor_script' => 'proterrasancta-blocks',
      'editor_style'  => 'proterrasancta-blocks-editor-style',
  ]);
}
add_action('init', 'ce_lab_register_blocks');

function fontawesome_dashboard()
{
  wp_enqueue_script('fontawesome-kit', 'https://kit.fontawesome.com/52eb9865a2.js', [], '5.13.1', true);
}
add_action('admin_init', 'fontawesome_dashboard');
