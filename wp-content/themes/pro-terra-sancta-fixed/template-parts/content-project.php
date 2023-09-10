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

$author      = get_the_author();
$post_id     = get_the_ID(); // phpcs:ignore
$categories  = get_the_terms($post_id, 'category');
$project     = get_the_terms(get_the_ID(), 'project_name');
$area        = get_the_terms(get_the_ID(), 'regione');
$color       = '#506679';
$icon        = 'icona-emergenze';
$donate      = get_post_custom_values('donate', get_the_ID());
$donate_link = __('https://www.proterrasancta.org/en/take-action/', 'pro-terra-sancta-fixed');

if (is_array($donate) && isset($donate[0])) {
  $donate_link = $donate[0];
}

if ($area && isset($area[0])) {
  $area_text = $area[0]->name;
}

switch ($project[0]->term_id) { // phpcs:ignore
  case 9830:
  case 9749:
  case 9442:
  case 9832:
  case 9836:
    $icon  = 'icona-conservazione';
    $color = '#374856';
    break;

  case 9750:
  case 9443:
  case 9829:
  case 9835:
  case 9833:
    $icon  = 'icona-istruzione';
    $color = '#E26E0E';
    break;

  case 9741:
  case 9441:
  case 9831:
  case 9837:
  case 9834:
    $icon  = 'icona-emergenze';
    $color = '#D31418';
    break;

  default:
    $icon  = 'icona-emergenze';
    $color = '#506679';
    break;
}//end switch

?>

<!--  this is content project -->
<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
  <div class="news-article-background">
    <div class="position-relative">
      <?php
      if (has_post_thumbnail() && ! post_password_required()) {
        the_post_thumbnail();
      }
      get_template_part('template-parts/featured-image');
      ?>
      <div class="project-title-block" style="background-color: <?php echo esc_html($color); ?>;">
        <div class="row h-100 w-100">
          <div class="col-5 col-md-3 d-flex align-items-center">
            <img
              height="110"
              width="110"
              class="icon-hero-box"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/<?php echo esc_html($icon); ?>.png"
              alt="icon-campaign"
            />
          </div>
          <div class="col-7 col-md-9 d-flex align-items-center">
            <div>
              <?php the_title('<h1 class="project-title">', '</h1>'); ?>
              <div class="region-block">
                <?php echo esc_html($area_text); ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="categories-container">
          </div>
          <div class="news-text mt-5">
            <?php the_content(); ?>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="project-bottom-block" style="background-color: <?php echo esc_html($color); ?>;">
    <div class="row h-100 w-100 gx-0">
      <div class="col-12 d-flex align-items-center">
        <div class="fit-content m-auto">
          <h3 class="project-bottom-title" style="text-transform: uppercase;">
            <?php _e('SUPPORT THE PROJECT IN', 'pro-terra-sancta-fixed'); // phpcs:disable ?>
            <?php echo esc_html($area_text); ?>
          </h3>
          <div class="project-bottom-summary">
            <?php _e('Foster bonds between the Holy Land and the world', 'pro-terra-sancta-fixed'); // phpcs:disable ?>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="dona-projects">
    <div class="row align-items-center h-100 gx-0">
      <div class="col-12" style="height: 45px">
        <a href="<?php echo esc_html($donate_link); // phpcs:disable ?>">
          <span style="font-size: 38px"><?php _e('DONATE', 'pro-terra-sancta-fixed'); // phpcs:disable ?></span>
        </a>
      </div>
      <div class="col-12">
        <a href="<?php echo esc_html($donate_link); // phpcs:disable ?>">
          <img class="donate-hand" style="width: 140px; margin: 10px" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/hand.png" alt="donate-hand" />
        </a>
      </div>
    </div>
  </div>
</article>
