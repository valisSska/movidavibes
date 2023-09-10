<?php
/**
 * The default template for displaying content
 *
 * Used for both singular and index.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage astrazeneca
 * @since astrazeneca
 */

$post_id     = get_the_ID(); // phpcs:ignore
$category    = get_the_terms($post_id, 'post_tag');
$date        = get_the_date('d M Y');
$label       = isset($category[0]) ? $category[0]->name : '-';
?>

<!--  this is content search -->
<article <?php post_class('search post type-post'); ?> id="post-<?php the_ID(); ?>">

  <div>
    <h1 class="search-title container"><?php _e('Search:', 'pro-terra-sancta-fixed'); ?></h1>
  </div>

  <div class="container">
    <div class="row justify-content-center">
        <?php get_search_form(); ?>
    </div>
  </div>

  <?php if (!empty(get_search_query())) : ?>
  <div class="related-articles category-<?php echo esc_html($class_color); ?>" style="background-color: white">
      <div class="container">
        <div class="row">
    <?php
    while (have_posts()) :
      the_post();
      $category      = get_the_terms(get_the_ID(), 'category');
      $feature_image = get_the_post_thumbnail_url(get_the_ID(), 'full');
      $thumb_id      = get_post_thumbnail_id();
      $feature_src   = wp_get_attachment_image_src($thumb_id, 'main-thumb');
      if (!$feature_src[3]) {
        $feature_src = wp_get_attachment_image_src($thumb_id, 'medium');
      }
      $feature_image = $feature_src[0];
      ?>
            <div class="col-12 col-sm-6 col-lg-4 news-column category-<?php echo esc_html($category); ?>">
              <a href="<?php echo esc_html(get_permalink()); ?>">
                <div class="position-relative">
                  <img
                    width="383"
                    height="288"
                    loading="lazy"
                    class="news-featured-img lazy"
                    data-mdb-lazy-src="<?php echo esc_html($feature_image); ?>"
                    data-mdb-lazy-placeholder="<?php echo esc_url(get_template_directory_uri() . '/assets/images/383x288.png'); // phpcs:ignore ?>"
                    data-mdb-lazy-error="<?php echo esc_url(get_template_directory_uri() . '/assets/images/383x288.png'); // phpcs:ignore ?>"
                    alt="<?php echo esc_html($feature_image); ?>">
                  <div class="news-teaser-date pt-4">
                    <?php echo get_the_date(); ?>
                    <span class="news-teaser-tag pl-1"><?php echo esc_html($label); ?></span>
                  </div>
                </div>
                <div class="container-news-title">
              <?php
              the_title('<div class="news-title">', '</div>');
              ?>
                </div>
              </a>
            </div>
    <?php endwhile; ?>
        </div>
      </div>
    </div>
  <?php endif; ?>

</article>
