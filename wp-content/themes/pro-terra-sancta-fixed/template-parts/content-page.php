<?php
/**
 * The default template for displaying content
 *
 * Used for both singular and index.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage pro-terra-sancta-fixed
 * @since pro-terra-sancta-fixed
 */

require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/is-mobile.php';
?>

<?php
/**
 * The default template for displaying content
 *
 * Used for both singular and index.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage pro-terra-sancta-fixed
 * @since pro-terra-sancta-fixed
 */

require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/is-mobile.php';

?>

<!--  this is page -->
<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
  <div class="news-article-background position-relative">
    <?php
    if (has_post_thumbnail() && ! post_password_required()) {
      the_post_thumbnail();
    }
    get_template_part('template-parts/featured-image');
    ?>

    <div class="page-title-container">
      <?php
      the_title('<h1 class="page-title">', '</h1>');
      ?>
    </div>
  </div>

  <div class="container mt-5 news-article-background">
    <div class="row news-text">
      <?php the_content(); ?>
    </div>
  </div>
</article>
