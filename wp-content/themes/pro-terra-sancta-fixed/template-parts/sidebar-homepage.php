<?php

$args = [
    'posts_per_page' => 4,
    'paged'          => false,
    'post_type'      => 'post',
    'orderby'        => 'date',
    'order'          => 'DESC',
];
$news = new WP_Query($args);

$args  = [
    'posts_per_page' => 4,
    'paged'          => false,
    'post_type'      => 'post',
    'orderby'        => 'date',
    'order'          => 'DESC',
    'tax_query'      => [
        [
            'taxonomy' => 'category',
            'field'    => 'slug',
            'terms'    => 'video',
        ],
    ],
];
$video = new WP_Query($args);

$args    = [
    'posts_per_page' => 4,
    'paged'          => false,
    'post_type'      => 'post',
    'orderby'        => 'date',
    'order'          => 'DESC',
    'tax_query'      => [
        [
            'taxonomy' => 'category',
            'field'    => 'slug',
            'terms'    => 'pro-terra-sancta-fixed-stories',
        ],
    ],
];
$stories = new WP_Query($args);

$args    = [
    'posts_per_page' => 4,
    'paged'          => false,
    'post_type'      => 'post',
    'orderby'        => 'date',
    'order'          => 'DESC',
    'tax_query'      => [
        [
            'taxonomy' => 'category',
            'field'    => 'slug',
            'terms'    => 'daily-tech-briefing',
        ],
    ],
];
$dailies = new WP_Query($args);

?>

<?php if (!is_bot()) : ?>
  <center>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <!-- side-300x250 -->
    <ins class="adsbygoogle"
         style="display:inline-block;width:300px;height:250px"
         data-ad-client="ca-pub-5309736205587423"
         data-ad-slot="7761060399"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </center>
<?php endif; ?>

<div class="row side-news">
  <div class="col-12 side-news-main-title">VIDEO</div>
  <?php
  while ($video->have_posts()) :
    $video->the_post();
    $category    = get_the_terms(get_the_ID(), 'category');
    $thumb_id    = get_post_thumbnail_id();
    $feature_src = wp_get_attachment_image_src($thumb_id, 'main-thumb');
    if (!$feature_src[3]) {
      $feature_src = wp_get_attachment_image_src($thumb_id, 'penci-masonry-thumb');
    }
    if (!$feature_src[3]) {
      $feature_src = wp_get_attachment_image_src($thumb_id, 'medium');
    }
    $feature_image = $feature_src[0];
    ?>
    <a class="news-link-anchor" href="<?php echo esc_html(get_permalink()); ?>" rel="noindex, nofollow">
      <div class="row side-news-teaser">
        <div class="col-5 position-relative img-container">
          <img
            width="130" height="100"
            class="side-news-img lazy"
            data-mdb-lazy-src="<?php echo esc_html($feature_image); ?>"
            data-mdb-lazy-placeholder="<?php echo esc_url(get_template_directory_uri() . '/assets/images/383x288.gif'); // phpcs:ignore ?>"
            data-mdb-lazy-error="<?php echo esc_url(get_template_directory_uri() . '/assets/images/383x288.gif'); // phpcs:ignore ?>"
            alt="<?php echo esc_html($feature_image); ?>"
            loading="lazy"
          />
          <i class="far fa-play-circle icon-box-sidebar"></i>
        </div>
    <?php
    the_title('<div class="col-7 side-news-title">', '</div>');
    ?>
      </div>
    </a>
  <?php endwhile; ?>
</div>

<div class="box-mail-chimp">
  <h4>Registrati alla newsletter e diventa un tech-lover</h4>
  <?php echo do_shortcode('[mc4wp_form id="72088"]'); ?>
</div>

<?php if (!is_bot()) : ?>
  <center>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <!-- side-300x600 -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-5309736205587423"
         data-ad-slot="9188502761"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </center>
<?php endif; ?>

<div class="row side-news mt-4" style="background-color: rgb(234, 234, 234)">
  <div class="col-12 side-news-main-title">MISTER GADGET DAILY</div>
  <?php
  while ($dailies->have_posts()) :
    $dailies->the_post();
    $category    = get_the_terms(get_the_ID(), 'category');
    $thumb_id    = get_post_thumbnail_id();
    $feature_src = wp_get_attachment_image_src($thumb_id, 'main-thumb');
    if (!$feature_src[3]) {
      $feature_src = wp_get_attachment_image_src($thumb_id, 'penci-masonry-thumb');
    }
    if (!$feature_src[3]) {
      $feature_src = wp_get_attachment_image_src($thumb_id, 'medium');
    }
    $feature_image = $feature_src[0];
    ?>
    <a class="news-link-anchor" href="<?php echo esc_html(get_permalink()); ?>" rel="noindex, nofollow">
      <div class="row side-news-teaser">
        <div class="col-5 position-relative img-container">
          <img
            width="130" height="100"
            class="side-news-img lazy"
            data-mdb-lazy-src="<?php echo esc_html($feature_image); ?>"
            data-mdb-lazy-placeholder="<?php echo esc_url(get_template_directory_uri() . '/assets/images/383x288.gif'); // phpcs:ignore ?>"
            data-mdb-lazy-error="<?php echo esc_url(get_template_directory_uri() . '/assets/images/383x288.gif'); // phpcs:ignore ?>"
            loading="lazy"
          />
          <i class="far fa-podcast icon-box-sidebar"></i>
        </div>
    <?php
    the_title('<div class="col-7 side-news-title">', '</div>');
    ?>
      </div>
    </a>
  <?php endwhile; ?>
</div>

<div class="row side-news mt-4">
  <div class="col-12 side-news-main-title">MISTER GADGET STORIES</div>
  <?php
  while ($stories->have_posts()) :
    $stories->the_post();
    $category    = get_the_terms(get_the_ID(), 'category');
    $thumb_id    = get_post_thumbnail_id();
    $feature_src = wp_get_attachment_image_src($thumb_id, 'main-thumb');
    if (!$feature_src[3]) {
      $feature_src = wp_get_attachment_image_src($thumb_id, 'penci-masonry-thumb');
    }
    if (!$feature_src[3]) {
      $feature_src = wp_get_attachment_image_src($thumb_id, 'medium');
    }
    $feature_image = $feature_src[0];
    ?>
    <a class="news-link-anchor" href="<?php echo esc_html(get_permalink()); ?>" rel="noindex, nofollow">
      <div class="row side-news-teaser">
        <div class="col-5 position-relative img-container">
          <img
            width="130" height="100"
            class="side-news-img lazy"
            data-mdb-lazy-src="<?php echo esc_html($feature_image); ?>"
            data-mdb-lazy-placeholder="<?php echo esc_url(get_template_directory_uri() . '/assets/images/383x288.gif'); // phpcs:ignore ?>"
            data-mdb-lazy-error="<?php echo esc_url(get_template_directory_uri() . '/assets/images/383x288.gif'); // phpcs:ignore ?>"
            alt="<?php echo esc_html($feature_image); ?>"
            loading="lazy"
          />
          <i class="far fa-podcast icon-box-sidebar"></i>
        </div>
    <?php
    the_title('<div class="col-7 side-news-title">', '</div>');
    ?>
      </div>
    </a>
  <?php endwhile; ?>
</div>
