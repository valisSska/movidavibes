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
 * @since Amgen
 */

?>

<div class="col-12 col-sm-6 col-lg-4 news-column">
  <div class="news-teaser-heading"><?php the_category(', '); ?></div>
  <div class="news-teaser-date"><?php the_date(); ?></div>
  <div class="news-teaser-title"><?php the_title(); ?></div>
  <div><?php the_excerpt(); ?></div>
  <a href="<?php the_permalink(); ?>">
    <div class="btn-circle" style="background-color: green">
      <i class="fal fa-arrow-right"></i>
    </div>
  </a>
  <?php edit_post_link(); ?>
</div>
