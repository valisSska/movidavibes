<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage pro-terra-sancta-fixed
 * @since pro-terra-sancta-fixed 1.0
 */

$logo_url    = wp_get_attachment_image_src(get_theme_mod('image_logo'), 'full')[0];
$http_host   = isset($_SERVER['HTTP_HOST']) ? sanitize_key($_SERVER['HTTP_HOST']) : '';
$request_uri = isset($_SERVER['REQUEST_URI']) ? sanitize_key($_SERVER['REQUEST_URI']) : '';
$this_url    = 'https://' . $http_host . $request_uri;
?>

<!-- header clean -->
<!doctype html>
<html lang="<?php echo ICL_LANGUAGE_CODE; ?>">
<head>
  <?php if (!is_bot()) : ?>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-9002351-2"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-9002351-2');
    </script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VRGPJKFR3C"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-VRGPJKFR3C');
    </script>

    <!-- Facebook Pixel Code -->
    <script type="text/javascript">
      !function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
      }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      fbq('init', '175455487205946');
      fbq('track', 'PageView');
    </script>
    <noscript>
      <img height="1" width="1" src="https://www.facebook.com/tr?id=175455487205946&ev=PageView&noscript=1"/>
    </noscript>
    <!-- End Facebook Pixel Code -->

    <script type="text/javascript">
      _linkedin_partner_id = "2517225";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);</script>
    <script type="text/javascript">(function () {
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })(); </script>
    <noscript>
      <img height="1" width="1" style="display:none;" alt=""
           src="https://px.ads.linkedin.com/collect/?pid=2517225&fmt=gif"/>
    </noscript>
  <?php endif; ?>

    <!--  this is home-page-header -->
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta name="facebook-domain-verification" content="fy1v30dcayqiv0minhk1dcjdu5pa5i" />

  <?php // phpcs:disable ?>
  <link rel="icon" type="image/jpeg" href="<?php echo get_template_directory_uri(); ?>/assets/favicons/favicon.jpeg">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/main.min.css?ver=1.0.100">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/library.min.css?ver=1.0.100">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/fontawesome/css/all.min.css?ver=1.0.97">
  <?php // phpcs:enable ?>

  <?php wp_head(); ?>
  <script>document.documentElement.className = 'js';</script>
  <script type="text/javascript">
    window.language = '<?php echo ICL_LANGUAGE_CODE; ?>';
  </script>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>

  <?php if (is_single()) : ?>
    <script type="text/javascript">
      window.single_post = true;
    </script>
  <?php endif; ?>
