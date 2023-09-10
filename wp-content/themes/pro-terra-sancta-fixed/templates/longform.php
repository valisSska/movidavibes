<?php
/*
  Template Name: Longform
  Template Post Type: post, page, campaign, event, project
*/
require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/breadcrumb.php';
?>

<?php get_header(); ?>

<!--  this is longform -->
<main id="site-content" role="main">

  <?php
  if (have_posts()) {
    while (have_posts()) {
      the_post();
      get_template_part('template-parts/content-single-page', get_post_type());
    }
  }

  ?>

</main>

<?php
get_footer();
