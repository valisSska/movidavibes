<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage pro-terra-sancta-fixed
 * @since 1.0.0
 */
require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/breadcrumb.php';

get_header();
?>

<!--  this is singular -->
<main id="site-content" role="main">

  <?php

  if (have_posts()) {
    while (have_posts()) {
      the_post();
      get_template_part('template-parts/content', get_post_type());
    }
  }

  ?>

</main>

<?php
get_footer();
