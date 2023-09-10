<?php
/**
 * The template for displaying category page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage pro-terra-sancta-fixed
 * @since 1.0.0
 */
require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/is-mobile.php';

$this_term = get_queried_object();

$args = [
    'posts_per_page' => 7,
    'paged'          => ( get_query_var('paged') ) ? get_query_var('paged') : 1,
    'post_type'      => 'post',
    'orderby'        => 'date',
    'order'          => 'DESC',
    'tax_query'      => [
        [
            'taxonomy' => 'category',
            'field'    => 'slug',
            'terms'    => $this_term->slug,
        ],
    ],
];
$news = new WP_Query($args);

get_header();
?>
  <!--  this is category news -->
  <main id="site-content" role="main">
    <div class="news-article-background">
      <div class="news-text">
        <div style="background-color: white" class="wp-block-proterrasancta-news-list">
          <div id="news-list" data-card-color="white" data-cat="-1" data-post-type="post">
            <?php
            $index = 0;
            while ($news->have_posts()) :
              $index++;
              $news->the_post();
              $thumb_id    = get_post_thumbnail_id();
              $terms       = get_the_tags(get_the_ID());
              $term1       = isset($terms[0]) ? $terms[0]->name : '';
              $feature_full_src = wp_get_attachment_image_src($thumb_id, 'full');
              $feature_src = wp_get_attachment_image_src($thumb_id, 'main-thumb');
              if (!$feature_src[3]) {
                $feature_src = wp_get_attachment_image_src($thumb_id, 'medium');
              }
              $feature_image = $feature_src[0];
              $feature_full_image = $feature_full_src[0];
              ?>
              <?php if ($index === 1) : ?>
                <div
                class="background-div"
                style="background-image: url(<?php echo esc_html($feature_full_image); ?>);
                     background-size: cover;
                     background-repeat: no-repeat;"
              >
                <div class="container h-100 pt-0">
                  <div class="row align-items-center h-100">
                    <div class="d-none col-4 d-md-flex" style="min-height: 360px"></div>
                    <div class="col-12 col-md-8 d-flex" style="min-height: 360px">
                      <a
                        href="<?php echo esc_html(get_permalink()); ?>"
                        class="cover-text-block"
                      ><div class="news-teaser-date" style="transform: translateY(0px); opacity: 1">
                          <?php echo get_the_date(); ?><span class="news-teaser-tag pl-1"><?php echo $term1; ?></span>
                        </div>
                        <div class="news-teaser-title" style="transform: translateY(0px); opacity: 1">
                          <?php echo get_the_title(); ?>
                        </div>
                        <div class="cover-section-text">
                          <?php echo esc_html(wp_trim_words(get_the_excerpt(), 80, '' )); // phpcs:ignore ?>
                        </div></a
                      >
                    </div>
                  </div>
                </div>
              </div>
                <div class="container mt-5">
                  <div class="row" style="position: relative">
              <?php else: ?>
                    <div class="col-12 col-sm-6 col-lg-4 news-column" style="opacity: 1; transform: translateY(0px)">
                    <div style="background-color: white; height: 445px">
                      <a href="<?php echo esc_html(get_permalink()); ?>"
                      ><img
                          height="225"
                          width="410"
                          src="<?php echo esc_html($feature_image); ?>"
                          alt="<?php echo esc_html($feature_image); ?>"
                          loading="lazy"
                          style="height: 225px; width: 100%; object-fit: cover"
                        />
                        <div class="news-teaser-date pt-4 px-4">
                          <?php echo get_the_date(); ?><span class="news-teaser-tag ps-1"><?php echo $term1; ?></span>
                        </div>
                        <div class="news-teaser-title px-4 pb-4"><?php echo get_the_title(); ?></div></a
                      >
                    </div>
                  </div>
              <?php endif; ?>
            <?php endwhile; ?>
              </div>
                  <div class="mt-5"></div>
                  <?php
                  the_posts_pagination([
                    'screen_reader_text' => ' ',
                    'mid_size'           => 2,
                    'prev_text'          => __('<', 'pro-terra-sancta-fixed'),
                    'next_text'          => __('>', 'pro-terra-sancta-fixed'),
                  ]);
                  ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

<?php
get_footer();
