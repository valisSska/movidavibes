<?php
/**
 * Plugin Name: Movidavibes blocks
 * Version: 1.1.0
 * Author: Valik
 *
 * @package movidavibes-blocks-s
 */

if (!defined('ABSPATH')) {
  exit();
}

function movidavibes_block_categories($categories)
{
  return array_merge($categories, [
      [
          'slug'  => 'movidavibes',
          'title' => 'Movidavibes blocks',
          'icon'  => 'wordpress',
      ],
  ]);
}
add_filter('block_categories', 'movidavibes_block_categories', 10, 2);

function ce_lab_register_blocks()
{
  $asset_file = include plugin_dir_path(__FILE__) . 'build/index.asset.php';

  wp_register_script(
    'movidavibes-blocks-s',
    plugins_url('build/index.js', __FILE__),
    $asset_file['dependencies'],
    $asset_file['version'],
    true,
  );

  wp_register_style(
    'movidavibes-blocks-s-editor-style',
    plugins_url('build/index.css', __FILE__),
    [ 'wp-edit-blocks' ],
    filemtime(plugin_dir_path(__FILE__) . 'build/index.css'),
  );

  register_block_type('rovagnati-us/divider', [
      'editor_script' => 'movidavibes-blocks-s',
      'editor_style'  => 'movidavibes-blocks-s-editor-style',
  ]);

  register_block_type('rovagnati-us/container', [
      'editor_script' => 'movidavibes-blocks-s',
      'editor_style'  => 'movidavibes-blocks-s-editor-style',
  ]);

  register_block_type('rovagnati-us/container-row', [
      'editor_script' => 'movidavibes-blocks-s',
      'editor_style'  => 'movidavibes-blocks-s-editor-style',
  ]);

  register_block_type('rovagnati-us/row', [
      'editor_script' => 'movidavibes-blocks-s',
      'editor_style'  => 'movidavibes-blocks-s-editor-style',
  ]);
}
add_action('init', 'ce_lab_register_blocks');

function fontawesome_dashboard()
{
  wp_enqueue_script('fontawesome-kit', 'https://kit.fontawesome.com/52eb9865a2.js', [], '5.13.1', true);
}
add_action('admin_init', 'fontawesome_dashboard');




//importazione file custom php
// include ('custom-functions.php');
