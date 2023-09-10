<?php
require_once ABSPATH . 'vendor/autoload.php';
require ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/menu.php';
require ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/menu-sidebar.php';
require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/breadcrumb.php';
require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/is-mobile.php';
require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/is-bot.php';
require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/post-project.php';
require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/post-campaign.php';
require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/post-eventi.php';
require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/iubenda-cookie-class/iubenda.class.php';

use Aws\CloudFront\CloudFrontClient;
use Aws\Exception\AwsException;

add_theme_support('post-thumbnails');
add_image_size('postbox-thumb', 239, 250, true);
add_image_size('main-thumb', 524, 300, [ 'left', 'top' ]);

add_action('customize_register', 'theme_copyright_customizer');
function theme_copyright_customizer($wp_customize)
{
  $wp_customize->add_section('edit_extras_section', [ 'title' => 'Personalizza Tema' ]);

  $wp_customize->add_setting('image_logo', [ 'default' => '' ]);

  $logo = new WP_Customize_Media_Control($wp_customize, 'image_logo', [
      'label'     => __('Logo', 'pro-terra-sancta-fixed'),
      'section'   => 'edit_extras_section',
      'mime_type' => 'image',
      'priority'  => 1,
  ]);
  $wp_customize->add_control($logo);

  add_theme_support('title-tag');

  add_theme_support('html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'script', 'style' ]); // phpcs:disable

  // Add support for full and wide align images.
  add_theme_support('align-wide');

  // Add support for responsive embeds.
  add_theme_support('responsive-embeds');

  // Add theme support for selective refresh for widgets.
  add_theme_support('customize-selective-refresh-widgets');
}

function enqueue_load_fa()
{
  wp_enqueue_script('regenerator-runtime');
  wp_enqueue_script('jquery');
  wp_enqueue_script('main', get_template_directory_uri() . '/assets/main.min.js', ['regenerator-runtime'], '1.0.105', true); // phpcs:disable
  wp_enqueue_script('library', get_template_directory_uri() . '/assets/library.min.js', [], '1.0.105', true); // phpcs:disable
  wp_enqueue_script(
    'splide',
    get_template_directory_uri() . '/assets/node_modules/@splidejs/splide/dist/js/splide.min.js',
    [],
    '1',
    true
  ); // phpcs:disable

  if(!is_bot()) {
    wp_enqueue_script('swal', '//cdn.jsdelivr.net/npm/sweetalert2@11', [ 'main'  ], '1', true); // phpcs:disable
    // wp_enqueue_script('crazyegg', '//script.crazyegg.com/pages/scripts/0115/4395.js', [ 'main'  ], '1', false); // phpcs:disable
  }

  // wp_dequeue_script( 'jquery');
  // wp_dequeue_script( 'google-hosted-jquery');
  // wp_deregister_script( 'jquery');
  // wp_deregister_script( 'google-hosted-jquery');
}
add_action('wp_enqueue_scripts', 'enqueue_load_fa');

function webp_upload_mimes($existing_mimes)
{
  $existing_mimes['webp'] = 'image/webp';
  return $existing_mimes;
}
add_filter('mime_types', 'webp_upload_mimes');

function webp_is_displayable($result, $path)
{
  if ($result === false) {
    $displayable_image_types = [IMAGETYPE_WEBP];
    $info = @getimagesize($path); // phpcs:ignore

    if (empty($info)) {
      $result = false;
    } elseif (!in_array($info[2], $displayable_image_types)) {
      // phpcs:ignore
      $result = false;
    } else {
      $result = true;
    }
  }
  return $result;
}
add_filter('file_is_displayable_image', 'webp_is_displayable', 10, 2);

function wpse69948_archive_disabler()
{
  if (is_tag() || is_date() || is_author()) {
    global $wp_query;
    $wp_query->set_404();
  }
}
add_action('template_redirect', 'wpse69948_archive_disabler');

function defer_parsing_of_js($url)
{
  if (is_user_logged_in()) {
    return $url;
  } //don't break WP Admin
  if (false === strpos($url, '.js')) {
    return $url;
  }
  if (strpos($url, 'jquery.js')) {
    return $url;
  }
  return str_replace(' src', ' defer src', $url);
}
add_filter('script_loader_tag', 'defer_parsing_of_js', 10);

function setup_proterrasancta()
{
  add_theme_support('editor-color-palette', [
    [
      'name' => __('Blue', 'pro-terra-sancta-fixed'),
      'slug' => 'blue',
      'color' => '#374856',
    ],
    [
      'name' => __('Grey', 'pro-terra-sancta-fixed'),
      'slug' => 'grey',
      'color' => '#575756',
    ],
    [
      'name' => __('Orange', 'pro-terra-sancta-fixed'),
      'slug' => 'orange',
      'color' => '#E26E0E',
    ],
    [
      'name' => __('Yellow', 'pro-terra-sancta-fixed'),
      'slug' => 'yellow',
      'color' => '#F9BA55',
    ],
    [
      'name' => __('Red', 'pro-terra-sancta-fixed'),
      'slug' => 'red',
      'color' => '#D31418',
    ],
    [
      'name' => __('White', 'pro-terra-sancta-fixed'),
      'slug' => 'white',
      'color' => 'white',
    ],
    [
      'name' => __('Black', 'pro-terra-sancta-fixed'),
      'slug' => 'black',
      'color' => 'black',
    ],
  ]);
}
add_action('after_setup_theme', 'setup_proterrasancta');

function get_post_by_name($post_name, $output = OBJECT)
{
  global $wpdb;
  $post = $wpdb->get_var($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE post_name = %s AND post_type='project'", $post_name));
  if ($post) {
    return get_post($post, $output);
  }

  return null;
}

function maybe_redirect_old_permalinks( $wp )
{
  $slug = str_replace('project', '', $wp->request);
  $slug = str_replace('en', '', $slug);
  $slug = str_replace('it', '', $slug);
  $slug = str_replace('fr', '', $slug);
  $slug = str_replace('es', '', $slug);
  $slug = str_replace('de', '', $slug);
  $slug = str_replace('/', '', $slug);
  $post = get_post_by_name($slug);
  if ($post !== null && $wp->request !== '' && $wp->request !== '/') {
    $my_reallink = get_permalink($post->ID);
    $my_reallink_base = str_replace(get_site_url(), '', $my_reallink);
    $my_reallink_base = str_replace('/en', '', $my_reallink_base);
    $my_reallink_base = str_replace('/it', '', $my_reallink_base);
    $my_reallink_base = str_replace('/fr', '', $my_reallink_base);
    $my_reallink_base = str_replace('/es', '', $my_reallink_base);
    $my_reallink_base = str_replace('/de', '', $my_reallink_base);

    $current_uri = "/" . $wp->request . "/";
    if ($my_reallink_base !== $current_uri) {
      wp_redirect($my_reallink, 301);
      exit;
    }
  }
}
// add_action('parse_request', 'maybe_redirect_old_permalinks');

function invalidate_cloudfront( $post_id, $post, $update )
{
  if (isset($post->post_status) && 'auto-draft' === $post->post_status) {
    return;
  }

  if (isset($post->post_status) && 'draft' === $post->post_status) {
    return;
  }

  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
    return;
  }

  if (defined('DOING_AJAX') && DOING_AJAX) {
    return;
  }

  $post_url = get_permalink($post_id);

  if(strpos($post_url, '?p=') !== false){
    return;
  }

  if(strpos($post_url, '-autosave-v') !== false){
    return;
  }

  if(strpos($post_url, '-revision-v') !== false){
    return;
  }

  $distributionId = getenv('AWS_DISTRIBUTION');
  $callerReference = time();

  error_log('$post_url: ' . $post_url);
  error_log('home_url(): ' . home_url());

  if (strpos($post_url, home_url()) === false) {
    return;
  }

  switch (ICL_LANGUAGE_CODE) {
    case 'it':
      $paths = ['/it/' . str_replace(home_url(), '', $post_url)];
      break;
    case 'en':
      $paths = ['/en/' . str_replace(home_url(), '', $post_url)];
      break;
    case 'fr':
      $paths = ['/fr/' . str_replace(home_url(), '', $post_url)];
      break;
    case 'de':
      $paths = ['/de/' . str_replace(home_url(), '', $post_url)];
      break;
    case 'es':
      $paths = ['/es/' . str_replace(home_url(), '', $post_url)];
      break;
    default:
      $paths = ['/it/' . str_replace(home_url(), '', $post_url)];
      break;
  }
  $quantity = 1;

  if (!$update || $post_url === home_url()) {
    switch (ICL_LANGUAGE_CODE) {
      case 'it':
        $paths = ['/it/' . str_replace(home_url(), '', $post_url), '/it/', '/it/campagne/', '/it/progetti/', '/it/category/news/'];
        break;
      case 'en':
        $paths = ['/en/' . str_replace(home_url(), '', $post_url), '/en/', '/en/campaigns/', '/en/projects/', '/en/category/news-en/'];
        break;
      case 'fr':
        $paths = ['/fr/' . str_replace(home_url(), '', $post_url), '/fr/', '/fr/campagnes/', '/fr/projets/', '/fr/category/nouvelles/'];
        break;
      case 'de':
        $paths = ['/de/' . str_replace(home_url(), '', $post_url), '/de/', '/de/kampagnen/', '/de/projekte/', '/de/category/nachrichten/'];
        break;
      case 'es':
        $paths = ['/es/' . str_replace(home_url(), '', $post_url), '/es/', '/es/campanas/', '/es/proyectos/', '/es/category/news-es/'];
        break;
      default:
        $paths = ['/it/' . str_replace(home_url(), '', $post_url), '/it/', '/it/campagne/', '/it/progetti/', '/it/category/news/'];
        break;
    }
    $quantity = 5;
  }

  try {
    $cloudFrontClient = new Aws\CloudFront\CloudFrontClient([
      'version' => '2018-06-18',
      'region' => 'us-east-1'
    ]);

    $result = $cloudFrontClient->createInvalidation([
      'DistributionId' => $distributionId,
      'InvalidationBatch' => [
        'CallerReference' => $callerReference,
        'Paths' => [
          'Items' => $paths,
          'Quantity' => $quantity,
        ],
      ]
    ]);

    $message = '';
    if (isset($result['Location']))
    {
      $message = 'The invalidation location is: ' . $result['Location'];
    }
    $message .= ' and the effective URI is ' . $result['@metadata']['effectiveUri'] . '.';

    error_log($message);
  } catch (AwsException $e) {
    error_log('Error: ' . $e->getAwsErrorMessage());
  }
}
add_action('save_post', 'invalidate_cloudfront', 1, 3);

function the_preview_fix($preview_link) {
  return $preview_link . '&ver=' . round(microtime(true) * 1000);
}
add_filter( 'preview_post_link', 'the_preview_fix' );

function add_script_google_optimize() {
  if (is_single ('191202')) {
    ?>
    <script src="https://www.googleoptimize.com/optimize.js?id=OPT-5CRGBQN"></script>
    <?php
  }
}
add_action('wp_head', 'add_script_google_optimize');
