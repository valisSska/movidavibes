<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header();
?>

  <!--  this is serch -->
  <main id="site-content" role="main">

    <?php
    get_template_part('template-parts/content-search');
    ?>

  </main>

<?php
get_footer();
