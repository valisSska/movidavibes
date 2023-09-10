<?php
/*
Template Name: Longform
Template Post Type: post, page, campaign
*/
?>

<?php get_header(); ?>

<!--  this is longform -->
<main id="main-content" role="main">

  <?php

  if (have_posts()) {
    while (have_posts()) {
      the_post();
      get_template_part('template-parts/content-page', get_post_type());
    }
  }

  ?>

</main>

<?php
get_footer();
