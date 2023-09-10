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

$author     = get_the_author();
$post_id    = get_the_ID(); // phpcs:ignore
$categories = get_the_terms($post_id, 'category');

?>

<!--  this is content -->
<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
  <div class="news-article-background">
    <?php
    if (has_post_thumbnail() && ! post_password_required()) {
      the_post_thumbnail();
    }
    get_template_part('template-parts/featured-image');
    ?>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="categories-container">
            <?php
            the_category();
            ?>
          </div>
          <?php
          the_title('<h1 class="news-title mt-3 animate-up">', '</h1>');
          the_date('', '<div class="news-date mt-1"><span>' . $author . '</span><span style="padding-left: 10px;"><i class="fa fa-clock-o text-primary" aria-hidden="true" style="margin-right: 3px;"></i>', '</span></div>'); // phpcs:ignore
          ?>
          <div class="news-text mt-5">
            <?php the_content(); ?>
          </div>
          <hr style="border-top: 2px solid #3F5E63; margin: 30px 0 30px 0">
          <div class="row no-gutters previous-next">
            <div class="col">
              <?php previous_post_link('<i class="fas fa-chevron-left" style="color: #3F5E63"></i> %link', __('Precedente', 'pro-terra-sancta-fixed'), true); // phpcs:ignore ?>
            </div>
            <div class="col d-flex">
              <div class="ml-auto">
                <?php next_post_link('%link <i class="fas fa-chevron-right" style="color: #3F5E63"></i>', __('Successivo', 'pro-terra-sancta-fixed'), true); // phpcs:ignore ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
