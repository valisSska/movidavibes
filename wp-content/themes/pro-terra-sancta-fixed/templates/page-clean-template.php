<?php
/*
  Template Name: page-clean-template
  Template Post Type: post, page, campaign, event, project
*/
?>

<?php get_header('clean'); ?>

<!--  this is clean template -->
<div role="main">

  <?php

  if (have_posts()) {
    while (have_posts()) {
      the_post();
      get_template_part('template-parts/content-page-clean', get_post_type());
    }
  }

  ?>

</div>

<?php
get_footer('clean');
