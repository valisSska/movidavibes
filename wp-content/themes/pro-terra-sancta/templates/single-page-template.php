<?php
/* Template Name: single-page-template */
?>

<?php get_header(); ?>

<!--  this is single-page-template -->
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
