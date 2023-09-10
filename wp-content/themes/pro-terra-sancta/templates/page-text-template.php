<?php
/* Template Name: page-text-template */
?>

<?php get_header(); ?>

<!--  this is longform -->
<main id="main-content" role="main">

  <?php

  if (have_posts()) {
    while (have_posts()) {
      the_post();
      get_template_part('template-parts/content-page-text', get_post_type());
    }
  }

  ?>

</main>

<?php
get_footer();
