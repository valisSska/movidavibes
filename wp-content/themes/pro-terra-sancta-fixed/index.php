<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

get_header(); ?>

  <main id="site-content" role="main">

    <?php
    $archive_title    = '';
    $archive_subtitle = '';

    if (is_search()) {
      global $wp_query; // phpcs:ignore

      $archive_title = sprintf(
        '%1$s %2$s',
        '<span class="color-accent">' . __('Search:', 'pro-terra-sancta-fixed') . '</span>',
        '&ldquo;' . get_search_query() . '&rdquo;'
      );

      if ($wp_query->found_posts) {
        $archive_subtitle = sprintf(
          /* translators: %s: Number of search results. */
          _n(
            'There is %s result for your search.',
            'There are %s results for your search.',
            $wp_query->found_posts,
            'pro-terra-sancta-fixed'
          ),
          number_format_i18n($wp_query->found_posts)
        );
      } else {
        $archive_subtitle = __('No results for your search. Try again with another term.', 'pro-terra-sancta-fixed');
      }
    }//end if

    if ($archive_title || $archive_subtitle) {
      ?>
      <header class="archive-header has-text-align-center header-footer-group">
        <div class="archive-header-inner section-inner medium">

      <?php if ($archive_title) { ?>
        <h1 class="archive-title"><?php echo wp_kses_post($archive_title); ?></h1>
      <?php } ?>

      <?php if ($archive_subtitle) { ?>
        <div class="archive-subtitle section-inner thin max-percentage intro-text">
        <?php echo wp_kses_post(wpautop($archive_subtitle)); ?>
        </div>
      <?php } ?>

        </div>
      </header>

      <?php
    }//end if

    if (have_posts()) {
      $i = 0;
      ?>
      <div class="container">
        <div class="row">
      <?php
      while (have_posts()) {
        $i++;
        the_post();
        get_template_part('template-parts/content-excerpt', get_post_type());
      }
      ?>
        </div>
      </div>
      <?php
    } elseif (is_search()) {
      ?>

      <div class="no-search-results-form section-inner thin">

      <?php get_search_form([ 'label' => __('search again', 'pro-terra-sancta-fixed') ]); ?>

      </div>

      <?php
    }//end if
    ?>

    <?php get_template_part('template-parts/pagination'); ?>

  </main>

<?php
get_footer();
