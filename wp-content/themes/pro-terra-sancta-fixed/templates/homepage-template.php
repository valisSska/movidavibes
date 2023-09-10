<?php
/* Template Name: homepage-template */

get_header();
?>

  <!--  this is homepage-template -->
  <main id="site-content" role="main">

    <?php

    if (have_posts()) {
      while (have_posts()) {
        the_post();
        get_template_part('template-parts/content', 'homepage');
      }
    }

    ?>

  </main>

<?php
get_footer();
