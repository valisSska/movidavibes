<?php

class bootstrap_4_walker_nav_menu extends Walker_Nav_menu // phpcs:ignore
{
  function start_lvl(&$output, $depth = 0, $args = []) // phpcs:ignore
  {
    $indent  = str_repeat("\t", $depth);
    $submenu = ($depth > 0) ? ' sub-menu' : '';
    $output .= "\n$indent<ul class=\"collapsible-body depth_$depth\">\n";
  }

  function start_el(&$output, $item, $depth = 0, $args = [], $id = 0) // phpcs:ignore
  {
    $indent = ($depth) ? str_repeat("\t", $depth) : '';

    $li_attributes = '';          // phpcs:ignore
    $class_names   = $value = ''; // phpcs:ignore

    $classes = empty($item->classes) ? [] : (array) $item->classes;

    $classes[] = ($args->walker->has_children) ? 'dropdown' : '';
    $classes[] = ($item->current || $item->current_item_anchestor) ? 'active' : ''; // phpcs:ignore
    $classes[] = 'nav-item';
    $classes[] = 'nav-item-' . $item->ID;

    // phpcs:ignore
    $class_names = join(
      ' ',
      apply_filters('nav_menu_css_class', array_filter($classes), $item, $args)
    );
    // phpcs:ignore
    $class_names = ' class="' . esc_attr($class_names) . '"';

    $id = apply_filters('nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args);
    $id = strlen($id) ? ' id="' . esc_attr($id) . '"' : '';

    // phpcs:ignore
    $output .= $indent . '<li ' . $id . $value . $class_names . $li_attributes . '>';

    // phpcs:ignore
    $attributes = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
    $attributes .= !empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
    $attributes .= !empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
    $attributes .= !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';

    $attributes .= ($args->walker->has_children)
      ? ' class="collapsible-header waves-effect arrow-r"' // phpcs:ignore
      : ' class="nav-link"'; // phpcs:ignore

    // phpcs:disable
    $item_output = $args->before;
    $item_output .=
      $depth > 0 ? '<a class=""' . $attributes . '>' : '<a' . $attributes . '>';
    $item_output .= '<span>';
    $item_output .=
      $args->link_before . apply_filters('the_title', $item->title, $item->ID) . $args->link_after;
    $item_output .= '</span>';
    $item_output .= ($args->walker->has_children) ? '<i class="fas fa-angle-down rotate-icon"></i>' : '';
    $item_output .= '</a>';
    $item_output .= $args->after;

    $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
  }
}
