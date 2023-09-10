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

$http_host   = isset($_SERVER['HTTP_HOST']) ? sanitize_key($_SERVER['HTTP_HOST']) : '';
$request_uri = isset($_SERVER['REQUEST_URI']) ? sanitize_key($_SERVER['REQUEST_URI']) : '';
$this_url    = 'https://' . $http_host . $request_uri;
?>

<!-- header -->
<!doctype html>
<html lang="<?php echo ICL_LANGUAGE_CODE; ?>">
<head>
  <?php if (!is_bot()) : ?>
    <script type="text/javascript">
      var _iub = _iub || [];
      _iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"consentOnContinuedBrowsing":false,"countryDetection":true,"enableCcpa":true,"enableLgpd":true,"floatingPreferencesButtonDisplay":"bottom-left","invalidateConsentWithoutLog":true,"lgpdAppliesGlobally":false,"perPurposeConsent":true,"priorConsent":false,"siteId":2811063,"whitelabel":false,"cookiePolicyId":61999796,"lang":"it","cookiePolicyUrl":"https://www.proterrasancta.org/it/privacy-policy/","privacyPolicyUrl":"https://www.proterrasancta.org/it/privacy-policy/", "banner":{ "acceptButtonCaptionColor":"#FFFFFF","acceptButtonColor":"#CE0028","acceptButtonDisplay":true,"backgroundColor":"#FFFFFF","brandBackgroundColor":"#FFFFFF","brandTextColor":"#000000","closeButtonDisplay":false,"customizeButtonCaptionColor":"#4D4D4D","customizeButtonColor":"#DADADA","customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"logo":null,"position":"float-bottom-center","rejectButtonCaptionColor":"#FFFFFF","rejectButtonColor":"#CE0006","rejectButtonDisplay":true,"textColor":"#000000" }};
    </script>
    <script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"></script>
    <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>

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
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/main.min.css?ver=1.0.113">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/library.min.css?ver=1.0.113">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/fontawesome/css/all.min.css?ver=1.0.98">
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

  <?php if (is_mobile()) : ?>
    <script type="text/javascript">
      window.share_size_mobile = true;
    </script>

    <!-- Sidenav -->
    <nav
      id="sidenav-1"
      class="sidenav"
      data-mdb-hidden="true"
    >
      <!--/. Logo -->
      <div class="navbar-brand sidenav-logo d-flex border-bottom">
        <a class="mx-auto" href="<?php echo esc_url(home_url('/')); ?>">
          <img
            class="header-logo"
            width="140"
            height="63"
            src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo-long.png'); ?>"
            loading="lazy"
            alt="logo-pro-terra-sancta-fixed">
        </a>
      </div>
      <!-- Side navigation links -->
    <?php
    $defaults = [
        'theme_location'  => 'navbar',
        'menu'            => '',
        'container'       => '',
        'container_class' => '',
        'container_id'    => '',
        'menu_class'      => 'sidenav-menu',
        'menu_id'         => '',
        'echo'            => true,
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
        'depth'           => 0,
        'walker'          => new bootstrap_5_walker_nav_menu_sidebar(),
    ];
    wp_nav_menu($defaults);
    ?>
      <div style="padding: 12px">
        <a href="<?php echo esc_url(home_url('/')) . '?s'; // phpcs:ignore ?>" class="nav-link fit-content my-auto search-icon">
          <i class="fas fa-search" style="color: black;"></i>
        </a>
      </div>
    </nav>
    <!-- Sidenav -->
  <?php endif; ?>

  <header id="site-header" class="loading">
    <nav
      id="header-nav"
      class="navbar bg-white pb-0 shadow-sm navbar-expand-lg position-fixed w-100">
      <div class="container">
        <div class="d-flex w-100">
          <div class="navbar-brand">
            <a href="<?php echo esc_url(home_url('/')); ?>">
              <img
                class="header-logo"
                width="140"
                height="63"
                src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo-long.png'); ?>"
                loading="lazy"
                alt="logo-pro-terra-sancta-fixed">
            </a>
          </div>

          <button
            id="public-button"
            class="navbar-toggler button-collapse ml-auto"
            type="button"
            data-mdb-toggle="sidenav"
            data-mdb-target="#sidenav-1"
            aria-controls="#sidenav-1"
            aria-haspopup="true"
          >
          <span class="dark-blue-text">
            <i
              class="fas fa-bars text-primary"
              style="font-size: 30px;">
            </i>
          </span>
          </button>

          <?php if (!is_mobile()) : ?>
            <div class="navbar navbar-menu collapse navbar-collapse" style="display: none">
            <?php
            $defaults = [
                'theme_location'  => 'navbar',
                'menu'            => '',
                'container'       => '',
                'container_class' => '',
                'container_id'    => '',
                'menu_class'      => 'navbar-nav main-menu text-menu-header text-uppercase m-auto',
                'menu_id'         => 'main-menu-top',
                'echo'            => true,
                'fallback_cb'     => 'wp_page_menu',
                'before'          => '',
                'after'           => '',
                'link_before'     => '',
                'link_after'      => '',
                'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                'depth'           => 0,
                'walker'          => new bootstrap_5_walker_nav_menu(),
            ];
            wp_nav_menu($defaults);
            ?>
            </div>
            <a href="<?php echo esc_url(home_url('/')) . '?s'; // phpcs:ignore ?>" class="d-none d-xl-block nav-link fit-content my-auto search-icon">
              <i class="fas fa-search" style="color: black;"></i>
            </a>
            <div class="dona-big d-none d-md-block" style="height: 100%; margin-left: 10px">
              <div class="row align-items-center h-100">
                <div class="col-12 gx-0" style="height: 45px; padding-top: 0;">
                  <a href="<?php _e('https://www.proterrasancta.org/en/take-action/', 'pro-terra-sancta-fixed'); ?>">
                    <span style="font-size: 22px"><?php _e('DONATE', 'pro-terra-sancta-fixed'); ?></span>
                  </a>
                </div>
                <div class="col-12 gx-0">
                  <a href="<?php _e('https://www.proterrasancta.org/en/take-action/', 'pro-terra-sancta-fixed'); ?>">
                    <img class="donate-hand" style="width: 135px; max-width: 100%" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/hand.png" alt="donate-hand" />
                  </a>
                </div>
              </div>
            </div>
          <?php endif; ?>

        </div>
      </div>
    </nav>
  </header>
