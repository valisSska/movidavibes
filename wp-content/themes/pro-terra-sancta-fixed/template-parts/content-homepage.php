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

<!--  this is homepage -->
<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
  <div class="news-article-background">
    <?php
    if (has_post_thumbnail() && ! post_password_required()) {
      the_post_thumbnail();
    }
    get_template_part('template-parts/featured-image');
    ?>
    <div>
      <?php the_content(); ?>
    </div>
  </div>
</article>

<?php if (is_mobile()): ?>
  <div id="dona-mobile">
    <div class="row align-items-center h-100">
      <div class="col-12" style="height: 45px">
        <a href="<?php _e('https://www.proterrasancta.org/en/take-action/', 'pro-terra-sancta-fixed'); // phpcs:disable ?>">
          <span style="font-size: 38px"><?php _e('DONATE', 'pro-terra-sancta-fixed'); // phpcs:disable ?></span>
        </a>
      </div>
      <div class="col-12">
        <a href="<?php _e('https://www.proterrasancta.org/en/take-action/', 'pro-terra-sancta-fixed'); // phpcs:disable ?>">
          <img class="donate-hand" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/hand.png" alt="donate-hand" />
        </a>
      </div>
    </div>
  </div>
<?php endif; ?>
