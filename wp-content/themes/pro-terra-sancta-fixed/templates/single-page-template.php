<?php
/* Template Name: single-page-template */
require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/breadcrumb.php';
?>

<?php get_header(); ?>

<!--  this is single-page-template -->
<main class="single-page pb-4" id="site-content" role="main">
  <?php

  if (have_posts()) {
    while (have_posts()) {
      the_post();
      get_template_part('template-parts/content-single-page', get_post_type());
    }
  }

  ?>

</main>

  </div>
<?php

get_footer();
