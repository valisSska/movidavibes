<?php
$lang = ATS::get_lang();
$menu_name = ATS::get_menu_name($lang);
global $translations;
global $constvalue;
$header = $translations['header'];
$header_links = get_header_locate_links();
?>
    <!DOCTYPE html>
    <!--[if IE 6]>
    <html id="ie6" <?php ATS::get_language_attributes(); ?>>
    <![endif]-->
    <!--[if IE 7]>
    <html id="ie7" <?php ATS::get_language_attributes(); ?>>
    <![endif]-->
    <!--[if IE 8]>
    <html id="ie8" <?php ATS::get_language_attributes(); ?>>
    <![endif]-->
    <!--[if !(IE 6) | !(IE 7) | !(IE 8)  ]><!-->
<html <?php ATS::get_language_attributes(); ?>>
    <!--<![endif]-->
    <head>
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

        <meta charset="<?php bloginfo('charset'); ?>"/>
		<?php elegant_description(); ?>
		<?php elegant_keywords(); ?>
		<?php elegant_canonical(); ?>
		<?php get_link_post_lang(); ?>
    <link rel="alternate" href="<?php echo $constvalue['linkML']['IT']; ?>" hreflang="x-default"/>
    <link rel="alternate" href="<?php echo $constvalue['linkML']['EN']; ?>" hreflang="en"/>
    <link rel="alternate" href="<?php echo $constvalue['linkML']['FR']; ?>" hreflang="fr"/>
    <link rel="alternate" href="<?php echo $constvalue['linkML']['ES']; ?>" hreflang="es"/>
    <link rel="alternate" href="<?php echo $constvalue['linkML']['DE']; ?>" hreflang="de"/>
    <meta http-equiv="content-language" content="<?php echo $lang; ?>"/>
    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/main.min.css?ver=4">
    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/style.min.css?ver=4">

    <meta name="facebook-domain-verification" content="fy1v30dcayqiv0minhk1dcjdu5pa5i" />

		<?php do_action('et_head_meta'); ?>
		<?php get_meta_header(); ?>

        <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>"/>

		<?php $template_directory_uri = get_template_directory_uri(); ?>
        <!--[if lt IE 9]>
        <script src="<?php echo esc_url($template_directory_uri . '/js/html5.js"'); ?>" type="text/javascript"></script>
        <![endif]-->

        <script type="text/javascript">
            document.documentElement.className = 'js';
            window.language = '<?php echo $lang; ?>';
        </script>

		<?php wp_head(); ?>
		<?php echo ATS::get_gallery_divi_translation($lang); ?>


		<?php if (
    $constvalue['enable_cookie'] &&
    !current_user_can('moderate_comments') &&
    $_COOKIE['cookies_policy_facebook2'] == 'ok'
  ): ?>
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
		<?php endif; ?>

		<?php if (
    $constvalue['enable_cookie'] &&
    !current_user_can('moderate_comments') &&
    $_COOKIE['cookies_policy_linkedin'] == 'ok'
  ): ?>
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

        <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/custom15.css"/>
        <link rel="stylesheet" type="text/css"
              href="<?php echo get_stylesheet_directory_uri(); ?>/js/magnific-popup.css"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.2/css/bootstrap-select.min.css"
              rel="stylesheet"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/css/flag-icon.min.css" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/main_after.min.css?ver=9">
        <script src="https://kit.fontawesome.com/52eb9865a2.js" crossorigin="anonymous"></script>
    </head>
<body <?php body_class(); ?>>
  <!-- Sidebar navigation -->
  <div id="slide-out" class="side-nav2 side bg-white position-fixed shadow-lg p-3 d-block d-lg-none" style="z-index: 999999; top: 0">
    <ul class="custom-scrollbar">
      <!--/. Logo -->
      <div></div>
      <!-- Side navigation links -->
      <?php
      $defaults = [
        'theme_location'  => 'primary-menu',
        'menu'            => $menu_name,
        'container'       => '',
        'container_class' => '',
        'container_id'    => '',
        'menu_class'      => 'collapsible collapsible-accordion',
        'menu_id'         => '',
        'echo'            => true,
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
        'depth'           => 0,
        'walker'          => new bootstrap_4_walker_nav_menu(),
      ];
      wp_nav_menu($defaults);
      ?>
      <!--/. Side navigation links -->
    </ul>
    <div class="sidenav-bg"></div>
  </div>
  <!--/. Sidebar navigation -->

<?php
if (is_singular()):
  if (have_posts()):
    while (have_posts()):
      the_post();
      $posthideheader = get_post_meta(get_the_ID(), 'posthideheader', true);
      $posthidefooter = get_post_meta(get_the_ID(), 'posthidefooter', true);
      if ($_GET['vwp']):
        $yes_vwp = get_post_meta(get_the_ID(), 'yes_vwp', true);
        if ($yes_vwp):
          $posthideheader = 1;
          $posthidefooter = 1;
        endif;
      endif;

      $constvalue['posthidefooter'] = $posthidefooter;
    endwhile;
  endif;
endif;

$product_tour_enabled = et_builder_is_product_tour_enabled();
$page_container_style = $product_tour_enabled ? ' style="padding-top: 0px;"' : '';
?>
<div id="page-container"<?php echo $page_container_style; ?>>
<?php
if ($product_tour_enabled || is_page_template('page-template-blank.php')) {
  return;
}

$et_secondary_nav_items = et_divi_get_top_nav_items();

$et_phone_number = $et_secondary_nav_items->phone_number;

$et_email = $et_secondary_nav_items->email;

$et_contact_info_defined = $et_secondary_nav_items->contact_info_defined;

$show_header_social_icons = $et_secondary_nav_items->show_header_social_icons;

$et_secondary_nav = $et_secondary_nav_items->secondary_nav;

$et_top_info_defined = $et_secondary_nav_items->top_info_defined;

$et_slide_header =
  'slide' === et_get_option('header_style', 'left') || 'fullscreen' === et_get_option('header_style', 'left')
    ? true
    : false;

if (!$posthideheader): ?>

	<?php if (($et_top_info_defined && !$et_slide_header) || is_customize_preview()): ?>
        <div id="top-header"<?php echo $et_top_info_defined ? '' : 'style="display: none;"'; ?>>
            <div class="container clearfix">

				<?php if ($et_contact_info_defined): ?>

                    <div id="et-info">
						<?php if ('' !== ($et_phone_number = et_get_option('phone_number'))): ?>
                            <span id="et-info-phone"><?php echo et_sanitize_html_input_text($et_phone_number); ?></span>
						<?php endif; ?>

						<?php if ('' !== ($et_email = et_get_option('header_email'))): ?>
                            <a href="<?php echo esc_attr('mailto:' . $et_email); ?>"><span
                                        id="et-info-email"><?php echo esc_html($et_email); ?></span></a>
						<?php endif; ?>

						<?php if (true === $show_header_social_icons) {
        get_template_part('includes/social_icons', 'header');
      } ?>
                    </div> <!-- #et-info -->

				<?php endif;
   // true === $et_contact_info_defined
   ?>

                <div id="et-secondary-menu">
					<?php
     if (!$et_contact_info_defined && true === $show_header_social_icons) {
       get_template_part('includes/social_icons', 'header');
     } elseif ($et_contact_info_defined && true === $show_header_social_icons) {
       ob_start();

       get_template_part('includes/social_icons', 'header');

       $duplicate_social_icons = ob_get_contents();

       ob_end_clean();

       printf(
         '<div class="et_duplicate_social_icons">
								%1$s
							</div>',
         $duplicate_social_icons
       );
     }

     if ('' !== $et_secondary_nav) {
       echo $et_secondary_nav;
     }

     et_show_cart_total();
     ?>
                </div> <!-- #et-secondary-menu -->

            </div> <!-- .container -->
        </div> <!-- #top-header -->
	<?php endif;
  // true ==== $et_top_info_defined
  ?>

	<?php if ($et_slide_header || is_customize_preview()): ?>
        <div class="et_slide_in_menu_container">
			<?php if ('fullscreen' === et_get_option('header_style', 'left') || is_customize_preview()) { ?>
                <span class="mobile_menu_bar et_toggle_fullscreen_menu"></span>
			<?php } ?>

			<?php
   if (
     $et_contact_info_defined ||
     true === $show_header_social_icons ||
     false !== et_get_option('show_search_icon', true) ||
     class_exists('woocommerce') ||
     is_customize_preview()
   ) { ?>
            <div class="et_slide_menu_top">

				<?php if ('fullscreen' === et_get_option('header_style', 'left')) { ?>
                <div class="et_pb_top_menu_inner">
					<?php } ?>
					<?php }

   if (true === $show_header_social_icons) {
     get_template_part('includes/social_icons', 'header');
   }

   et_show_cart_total();
   ?>
					<?php if (false !== et_get_option('show_search_icon', true) || is_customize_preview()): ?>
						<?php if ('fullscreen' !== et_get_option('header_style', 'left')) { ?>
                            <div class="clear"></div>
						<?php } ?>
                        <form role="search" method="get" class="et-search-form"
                              action="<?php echo esc_url(home_url('/')); ?>">
							<?php printf(
         '<input type="search" class="et-search-field" placeholder="%1$s" value="%2$s" name="s" title="%3$s" />',
         esc_attr__('Search &hellip;', 'Divi'),
         get_search_query(),
         esc_attr__('Search for:', 'Divi')
       ); ?>
                            <button type="submit" id="searchsubmit_header"></button>

                        </form>
					<?php endif;
   // true === et_get_option( 'show_search_icon', false )
   ?>

					<?php if ($et_contact_info_defined): ?>

                        <div id="et-info">
							<?php if ('' !== ($et_phone_number = et_get_option('phone_number'))): ?>
                                <span id="et-info-phone"><?php echo et_sanitize_html_input_text(
                                  $et_phone_number
                                ); ?></span>
							<?php endif; ?>

							<?php if ('' !== ($et_email = et_get_option('header_email'))): ?>
                                <a href="<?php echo esc_attr('mailto:' . $et_email); ?>"><span
                                            id="et-info-email"><?php echo esc_html($et_email); ?></span></a>
							<?php endif; ?>
                        </div> <!-- #et-info -->

					<?php endif;
   // true === $et_contact_info_defined
   ?>
					<?php if (
       $et_contact_info_defined ||
       true === $show_header_social_icons ||
       false !== et_get_option('show_search_icon', true) ||
       class_exists('woocommerce') ||
       is_customize_preview()
     ) { ?>
					<?php if ('fullscreen' === et_get_option('header_style', 'left')) { ?>
                </div> <!-- .et_pb_top_menu_inner -->
			<?php } ?>

            </div> <!-- .et_slide_menu_top -->
		<?php } ?>

            <div class="et_pb_fullscreen_nav_container">
				<?php
    $slide_nav = '';
    $slide_menu_class = 'et_mobile_menu';
    $slide_nav = wp_nav_menu([
      'theme_location' => 'primary-menu',
      'container' => '',
      'fallback_cb' => '',
      'echo' => false,
      'items_wrap' => '%3$s',
    ]);
    $slide_nav .= wp_nav_menu([
      'theme_location' => 'secondary-menu',
      'container' => '',
      'fallback_cb' => '',
      'echo' => false,
      'items_wrap' => '%3$s',
    ]);
    ?>

                <ul id="mobile_menu_slide" class="<?php echo esc_attr($slide_menu_class); ?>">

					<?php if ('' == $slide_nav): ?>
						<?php if ('on' == et_get_option('divi_home_link')) { ?>
                            <li <?php if (is_home()) {
                              echo 'class="current_page_item"';
                            } ?>>
                                <a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home', 'Divi'); ?></a>
                            </li>
						<?php } ?>

						<?php show_page_menu($slide_menu_class, false, false); ?>
						<?php show_categories_menu($slide_menu_class, false); ?>
					<?php else:echo $slide_nav;endif; ?>

                </ul>
            </div>
        </div>
	<?php endif;
  // true ==== $et_slide_header
  ?>

    <header id="main-header" data-height-onload="<?php echo esc_attr(et_get_option('menu_height', '66')); ?>">
        <div class="top-menu-bar">
            <div class="container">
                <div class="row">
                    <div class="col-7 col-sm-6 d-flex align-items-center">
                        <ul class="social-circle social-circle-header">
                            <li>
                                <a href="<?php echo $header['facebook']->$lang; ?>"
                                   title="Segui su Facebook" target="_blank">
                                    <img class="icon-header" src="<?php echo get_stylesheet_directory_uri(); ?>/images/icona_facebook.png" alt="icon-facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/proterrasancta" title="Segui su Twitter" target="_blank">
                                  <img class="icon-header" src="<?php echo get_stylesheet_directory_uri(); ?>/images/icona_twitter.png" alt="icon-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/proterrasancta/" title="Segui su Instagram"
                                   target="_blank">
                                  <img class="icon-header" src="<?php echo get_stylesheet_directory_uri(); ?>/images/icona_instagram.png" alt="icon-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/proterrasancta" title="Segui su Youtube"
                                   target="_blank">
                                  <img class="icon-header" src="<?php echo get_stylesheet_directory_uri(); ?>/images/icona_youtube.png" alt="icon-youtube" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/pro-terra-sancta/"
                                   title="Segui su LinkedIn" target="_blank">
                                  <img class="icon-header" src="<?php echo get_stylesheet_directory_uri(); ?>/images/icona_linkedin.png" alt="icon-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-5 col-sm-6 d-block d-sm-block align-items-center" style="max-height: 42px">
                        <li class="select-language nav-item dropdown ml-auto d-block">
                            <a class="nav-link pr-0 pl-0 dropdown-toggle is-language-<?php ATS::isFlagActive('it'); ?>" href="#" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flag-icon flag-icon-it"> </span> Italian</a>
                            <a class="nav-link pr-0 pl-0 dropdown-toggle is-language-<?php ATS::isFlagActive('en'); ?>" href="#" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flag-icon flag-icon-gb"> </span> English</a>
                            <a class="nav-link pr-0 pl-0 dropdown-toggle is-language-<?php ATS::isFlagActive('es'); ?>" href="#" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flag-icon flag-icon-es"> </span> Spanish</a>
                            <a class="nav-link pr-0 pl-0 dropdown-toggle is-language-<?php ATS::isFlagActive('fr'); ?>" href="#" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flag-icon flag-icon-fr"> </span> French</a>
                            <a class="nav-link pr-0 pl-0 dropdown-toggle is-language-<?php ATS::isFlagActive('de'); ?>" href="#" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flag-icon flag-icon-de"> </span> German</a>
                            <div class="dropdown-menu" aria-labelledby="dropdown09">
                                <a class="dropdown-item" href="<?php echo $constvalue['linkML']['IT']; ?>"><span class="flag-icon flag-icon-it"> </span>  Italian</a>
                                <a class="dropdown-item" href="<?php echo $constvalue['linkML']['EN']; ?>"><span class="flag-icon flag-icon-gb"> </span>  English</a>
                                <a class="dropdown-item" href="<?php echo $constvalue['linkML']['ES']; ?>"><span class="flag-icon flag-icon-es"> </span>  Spanish</a>
                                <a class="dropdown-item" href="<?php echo $constvalue['linkML']['FR']; ?>"><span class="flag-icon flag-icon-fr"> </span>  French</a>
                                <a class="dropdown-item" href="<?php echo $constvalue['linkML']['DE']; ?>"><span class="flag-icon flag-icon-de"> </span>  German</a>
                            </div>
                        </li>
                        <div id="translator-container-desktop" class="item-flex">
                            <a class="itb flags <?php ATS::isFlagActive('it'); ?>"
                               href="<?php echo $constvalue['linkML']['IT']; ?>"></a>
                            <a class="enb flags <?php ATS::isFlagActive('en'); ?>"
                               href="<?php echo $constvalue['linkML']['EN']; ?>"></a>
                            <a class="esb flags <?php ATS::isFlagActive('es'); ?>"
                               href="<?php echo $constvalue['linkML']['ES']; ?>"></a>
                            <a class="frb flags <?php ATS::isFlagActive('fr'); ?>"
                               href="<?php echo $constvalue['linkML']['FR']; ?>"></a>
                            <a class="deb flags <?php ATS::isFlagActive('de'); ?>"
                               href="<?php echo $constvalue['linkML']['DE']; ?>"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container" bis_skin_checked="1">
				<?php $logo =
            ($user_logo = et_get_option('divi_logo')) && '' != $user_logo
            ? $user_logo
            : $template_directory_uri . '/images/logo.png'; ?>
                <div class="navbar-brand">
                    <span class="logo_helper"></span>
                    <a href="<?php ATS::get_home_url($lang); ?>">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180.59 81.91">
                            <defs>
                                <style>.cls-1-logo {
                                        fill: #d31418
                                    }

                                    .cls-2-logo {
                                        fill: #575756
                                    }</style>
                            </defs>
                            <g id="Livello_2" data-name="Livello 2">
                                <g id="Livello_1-2" data-name="Livello 1">
                                    <path class="cls-1-logo"
                                          d="M40.07 5c-.3 0-.76 0-1.37.07s-1.17.08-1.52.08a1.49 1.49 0 01-1.33-.92 3.93 3.93 0 01-.5-2 2.29 2.29 0 01.84-1.39A2.3 2.3 0 0137.63 0q.76 0 2.82.15c1.73.16 3.4.27 5 .35s3.73.11 6.32.11q2.74 0 8.37-.3t8.4-.31c.76 0 1.14.36 1.14 1.07 0 .41-.41 1-1.22 1.86a3.73 3.73 0 01-2.21 1.33c-1.11.1-2.64.19-4.56.27s-3.56.11-4.87.11l-1.6.08a104.86 104.86 0 00-1.14 11q-.39 6.44-.38 17a7.57 7.57 0 001.48 4.8q1.49 1.9 5.14 1.9a11 11 0 001.37-.15c.61-.05 1-.08 1.14-.08a.6.6 0 01.61.46 3.66 3.66 0 01.15 1.14 2.25 2.25 0 01-.68 1.75 8 8 0 01-2.32 1.22 7.85 7.85 0 01-2.59.54 9.38 9.38 0 01-4-.84 10.3 10.3 0 01-3.16-2.2 10.07 10.07 0 01-2-2.93 7.43 7.43 0 01-.68-2.93c0-.41.07-1.27.23-2.59.25-2 .47-4.11.64-6.24s.27-4.85.27-8.15q0-8.22-.53-13.39zM80.46 27q.9 0 .9.57a1 1 0 01-.26.45 6.43 6.43 0 01-.64.64 7.16 7.16 0 01-.76.57 1.31 1.31 0 01-.57.24c-1.46.13-3.45.2-6 .23h-1.24q0 5.7 2.28 8.57c1.52 1.92 3.88 2.87 7.07 2.87a3.58 3.58 0 011.41.19.85.85 0 01.35.81c0 .32-.26.59-.78.83a6.21 6.21 0 01-2.45.36 13.63 13.63 0 01-6.19-1.21A8.33 8.33 0 0170.11 39a11.43 11.43 0 01-1.48-4 30.09 30.09 0 01-.33-4.63 32 32 0 01.83-7.83 15.22 15.22 0 012.28-5.2 8.89 8.89 0 013.3-2.85 9 9 0 013.94-.88 7.79 7.79 0 012.69.31 1.11 1.11 0 01.73 1.08c0 .69-.3 1-.9 1h-2.8a5 5 0 00-2.28.52 5.22 5.22 0 00-1.92 1.8A11.54 11.54 0 0072.69 22a31.49 31.49 0 00-.78 5.75 3.34 3.34 0 012.14-.75zM102.46 14.65a6.9 6.9 0 011.54 4.63 8.53 8.53 0 01-1.16 4.6 6.29 6.29 0 01-2.64 2.52l-3.37 1.52V28a2.28 2.28 0 011.57.76 61.87 61.87 0 004.27 4.8q2 2 4.42 4.22a10 10 0 011.8 1.86 1.41 1.41 0 01-.12.59 2.33 2.33 0 01-.5.64l-.19.19c-.41.41-.71.62-.9.62h-.76a1.52 1.52 0 01-.71-.15A2.37 2.37 0 01105 41a13.94 13.94 0 01-.9-1.09 94.781 94.781 0 00-3.27-3.79l-5.13-5.56a2.66 2.66 0 00-2.09-.86c-.06 1.33-.1 2.58-.1 3.76v7.73a1.18 1.18 0 01-.21.72.8.8 0 01-.69.28 4.64 4.64 0 01-.91-.19 8.27 8.27 0 01-1.16-.38 4.25 4.25 0 01-1-.55.83.83 0 01-.4-.64 3.71 3.71 0 01.9-1.52 5.72 5.72 0 00.29-1.49c.09-.84.16-1.89.21-3.16s.08-2.41.09-3.44 0-1.85 0-2.45c0-2.05 0-3.88-.07-5.48s-.13-2.92-.22-4a.84.84 0 00-.57-.66 1.27 1.27 0 01-.52-.36 1 1 0 01-.19-.69 1.44 1.44 0 01.67-1.18 17.21 17.21 0 014.63-2.33 13.89 13.89 0 013.78-.8 5.35 5.35 0 014.32 1.78m-8.83 11.89c.09.26.38.38.85.38a4.28 4.28 0 001.24-.52 12.7 12.7 0 002.11-1.4 8.53 8.53 0 001.92-2.2 5.28 5.28 0 00.81-2.83 4.91 4.91 0 00-.9-3.27 2.93 2.93 0 00-2.33-1.05 4.27 4.27 0 00-1.73.4 3.56 3.56 0 00-1.4 1.12 19.23 19.23 0 00-.41 3.09c-.1 1.48-.16 2.91-.16 4.27zM125.47 14.65a6.9 6.9 0 011.53 4.63 8.53 8.53 0 01-1.16 4.6 6.29 6.29 0 01-2.64 2.52l-3.37 1.52V28a2.28 2.28 0 011.57.76 61.87 61.87 0 004.27 4.8q2 2 4.42 4.22a10 10 0 011.8 1.86 1.41 1.41 0 01-.12.59 2.33 2.33 0 01-.5.64l-.18.19c-.42.41-.72.62-.91.62h-.76a1.52 1.52 0 01-.71-.15A2.23 2.23 0 01128 41a11.57 11.57 0 01-.91-1.09 94.781 94.781 0 00-3.27-3.79l-5.13-5.56a2.66 2.66 0 00-2.09-.86c-.06 1.33-.1 2.58-.1 3.76v7.73a1.18 1.18 0 01-.21.72.8.8 0 01-.69.28 4.47 4.47 0 01-.92-.14 8 8 0 01-1.17-.38 4.47 4.47 0 01-1-.55.83.83 0 01-.4-.64 3.71 3.71 0 01.9-1.52 5.3 5.3 0 00.29-1.49c.09-.84.16-1.89.21-3.16s.08-2.41.09-3.44 0-1.85 0-2.45c0-2.05 0-3.88-.07-5.48s-.12-2.92-.22-4a.84.84 0 00-.57-.66 1.27 1.27 0 01-.52-.36 1 1 0 01-.19-.69 1.42 1.42 0 01.62-1.23 16.93 16.93 0 014.63-2.33 13.77 13.77 0 013.77-.8 5.35 5.35 0 014.32 1.78m-8.83 11.89c.1.26.38.38.85.38a4.28 4.28 0 001.24-.52 12.7 12.7 0 002.21-1.4 8.75 8.75 0 001.93-2.2 5.36 5.36 0 00.8-2.83 4.91 4.91 0 00-.9-3.27 2.93 2.93 0 00-2.33-1.05 4.3 4.3 0 00-1.73.4 3.56 3.56 0 00-1.4 1.12 19.23 19.23 0 00-.41 3.09c-.1 1.48-.16 2.91-.16 4.27zM143.25 32.36c-.4.14-.73.58-1 1.3a14.27 14.27 0 01-.64 1.5c-.27.55-.61 1.22-1 2s-.75 1.55-1 2.08a7.48 7.48 0 00-.47 1.19c-.16.86-.46 1.32-.91 1.38-.22 0-.87.05-1.94.14-1.3.13-2 .19-2.09.19a.39.39 0 01-.36-.26 1.16 1.16 0 01-.11-.5 2.17 2.17 0 01.11-.88.7.7 0 01.45-.3 4.3 4.3 0 001.55-.79 3.81 3.81 0 001.11-1.69c.1-.22.62-1.2 1.57-2.94q1.48-2.78 2.71-5.06c.79-1.48 1.57-3 2.35-4.65s1.43-3.13 2-4.56a10.12 10.12 0 00.81-3.27 6.71 6.71 0 00-.28-1 4.85 4.85 0 01-.34-1c0-.32.34-.67 1-1.07a3.5 3.5 0 011.57-.59c.19 0 .48.2.87.59a5.18 5.18 0 011 1.4c.31.64.9 1.87 1.75 3.71 1.18 2.53 2.2 4.69 3.09 6.48s1.92 3.71 3.09 5.77q2.08 3.64 3.37 5.48c.85 1.22 1.61 2.23 2.28 3a1.79 1.79 0 01.42.67.69.69 0 01-.31.66 1.41 1.41 0 01-.78.19 14.44 14.44 0 01-1.87-.21 14.69 14.69 0 01-1.83-.36 1.18 1.18 0 01-.69-.57 4 4 0 01-.5-1.14c-.09-.28-.27-.73-.52-1.35s-.6-1.33-1-2.14-.79-1.46-1.09-2a2.78 2.78 0 00-.64-.86 5.06 5.06 0 00-1.52-.4c-.73-.11-1.52-.19-2.35-.24s-1.71-.09-2.62-.12-1.63 0-2.2 0a11.9 11.9 0 00-3 .22M153.67 30l-3.75-7.36c-.19-.38-.41-.85-.66-1.42s-.42-.86-.57-.86-.19.1-.29.29a6.26 6.26 0 00-.33.9l-.33.85-2.47 5-.29.52a8.2 8.2 0 00-.71 1.71q0 .33.81.33zM41.29 68.66a2.29 2.29 0 00-1.11 1.44c-.18.48-.41 1-.71 1.64s-.67 1.34-1.12 2.26-.82 1.71-1.09 2.29a7.9 7.9 0 00-.52 1.31c-.18.93-.51 1.44-1 1.51-.25 0-1 0-2.14.16l-2.29.2a.4.4 0 01-.39-.28 1.33 1.33 0 01-.13-.55 2.29 2.29 0 01.13-1 .82.82 0 01.49-.34 4.56 4.56 0 001.7-.86 4.09 4.09 0 001.22-1.84c.1-.24.68-1.32 1.72-3.23 1.14-2.09 2.15-3.94 3-5.58s1.73-3.33 2.58-5.1 1.57-3.44 2.16-5a11.33 11.33 0 00.89-3.6 6.48 6.48 0 00-.29-1.09 5.83 5.83 0 01-.36-1.1c0-.34.36-.74 1.09-1.17a3.82 3.82 0 011.72-.65c.21 0 .53.22 1 .65a5.36 5.36 0 011.07 1.54c.34.69 1 2 1.92 4.06q1.94 4.17 3.39 7.11c1 2 2.1 4.07 3.39 6.33 1.52 2.68 2.76 4.68 3.7 6s1.77 2.44 2.5 3.31c.31.38.47.62.47.73a.81.81 0 01-.34.73 1.61 1.61 0 01-.86.21 15.25 15.25 0 01-2.08-.24q-1.49-.24-2-.39a1.3 1.3 0 01-.75-.63 4.37 4.37 0 01-.55-1.25c-.1-.31-.3-.8-.57-1.48s-.67-1.46-1.13-2.35-.87-1.6-1.2-2.16a3.45 3.45 0 00-.7-.94 5.64 5.64 0 00-1.67-.44c-.8-.12-1.66-.21-2.58-.26L47 68.48h-2.42a13.53 13.53 0 00-3.26.23M52.73 66l-4.12-8c-.2-.42-.45-.94-.72-1.57s-.46-.93-.63-.93-.21.1-.31.31a6.48 6.48 0 00-.37 1l-.36.94-2.71 5.52-.31.57a9.11 9.11 0 00-.79 1.88c0 .24.3.36.89.36zM100.76 58a14.6 14.6 0 014.37-5.58 16.4 16.4 0 015.55-2.76 21.14 21.14 0 015.5-.78 6.3 6.3 0 013.28.78c.87.52 1.3 1.08 1.3 1.67a1.35 1.35 0 01-.31.75 5.51 5.51 0 01-.76.87 5.22 5.22 0 01-.94.7 1.67 1.67 0 01-.8.28c-.17 0-.47-.24-.89-.73a8.14 8.14 0 00-1.2-1.17 2.51 2.51 0 00-1.56-.44 10 10 0 00-5.86 1.67 11.72 11.72 0 00-3.67 4.11A18.49 18.49 0 00103 62.1a19.47 19.47 0 00-.5 3.93 10.47 10.47 0 00.68 3.47 14.4 14.4 0 001.9 3.59 10.48 10.48 0 002.92 2.76 6.62 6.62 0 003.62 1.07 8.66 8.66 0 003.93-.86 21.06 21.06 0 003.57-2.26 5.24 5.24 0 011.88-1.1 1 1 0 011.1 1.1c0 .31-.46.94-1.36 1.9a12.58 12.58 0 01-2.89 2.3 12 12 0 01-3.36 1.12 21 21 0 01-4.36.49 10.17 10.17 0 01-3.51-.7 11.82 11.82 0 01-3.62-2.2 11.07 11.07 0 01-2.84-4A14.18 14.18 0 0199 66.92a20.63 20.63 0 011.72-9M127.49 53.32h-.94c-.41 0-.8.06-1 .06a1 1 0 01-.91-.63 2.89 2.89 0 01-.34-1.36 1.63 1.63 0 01.58-1 1.56 1.56 0 011-.57c.35 0 1 0 1.93.11 1.18.1 2.32.18 3.44.23s2.55.08 4.32.08q1.88 0 5.73-.21t5.73-.21c.52 0 .78.24.78.73 0 .28-.28.7-.83 1.28a2.57 2.57 0 01-1.51.91c-.77.07-1.81.13-3.13.18s-2.43.08-3.33.08h-1.1c-.34 2.09-.6 4.59-.78 7.53s-.26 6.82-.26 11.65a5.16 5.16 0 001 3.28 4.19 4.19 0 003.51 1.3 7.46 7.46 0 00.94-.11l.78-.05a.42.42 0 01.42.32 2.42 2.42 0 01.1.78 1.53 1.53 0 01-.46 1.2 5.85 5.85 0 01-1.59.83 5.51 5.51 0 01-1.8.36 6.45 6.45 0 01-2.71-.57 7.06 7.06 0 01-2.16-1.51 6.69 6.69 0 01-1.38-2 4.87 4.87 0 01-.47-2q0-.42.15-1.77c.18-1.39.33-2.82.45-4.28s.18-3.31.18-5.57a90.69 90.69 0 00-.37-9.17zM157.63 68.66a2.29 2.29 0 00-1.11 1.44c-.18.48-.42 1-.71 1.64s-.67 1.34-1.12 2.21-.82 1.71-1.09 2.29a7.08 7.08 0 00-.52 1.31c-.18.93-.51 1.44-1 1.51-.25 0-1 0-2.14.16l-2.29.2a.4.4 0 01-.39-.28 1.35 1.35 0 01-.14-.55 2.24 2.24 0 01.14-1 .82.82 0 01.49-.34 4.44 4.44 0 001.69-.86 4 4 0 001.23-1.84c.1-.24.68-1.32 1.72-3.23 1.14-2.09 2.15-3.94 3-5.58s1.73-3.33 2.58-5.1 1.57-3.44 2.16-5a11.33 11.33 0 00.89-3.6 6.48 6.48 0 00-.32-1.09 5.83 5.83 0 01-.36-1.1c0-.34.36-.74 1.09-1.17a3.78 3.78 0 011.72-.65c.21 0 .53.22 1 .65a5.57 5.57 0 011.07 1.54c.34.69 1 2 1.92 4.06q1.94 4.17 3.39 7.11c1 2 2.1 4.07 3.38 6.33 1.53 2.68 2.76 4.68 3.7 6s1.78 2.44 2.5 3.31c.32.38.48.62.48.73a.81.81 0 01-.34.73 1.64 1.64 0 01-.86.21 15.25 15.25 0 01-2.06-.24q-1.49-.24-2-.39a1.3 1.3 0 01-.75-.63 4.37 4.37 0 01-.55-1.25c-.11-.31-.3-.8-.57-1.48s-.66-1.46-1.12-2.35-.87-1.6-1.2-2.16a3.2 3.2 0 00-.71-.94 5.46 5.46 0 00-1.66-.44c-.8-.12-1.66-.21-2.58-.26l-2.87-.13h-2.42a13.53 13.53 0 00-3.26.23M169.07 66L165 58c-.2-.42-.45-.94-.72-1.57s-.46-.93-.63-.93-.21.1-.31.31a6.48 6.48 0 00-.37 1l-.36.94-2.71 5.52-.32.57a9.41 9.41 0 00-.78 1.88c0 .24.3.36.89.36zM3.38 74.61a1.7 1.7 0 011.1-.44 13.33 13.33 0 013.11.61 22.32 22.32 0 006.12 1 7.72 7.72 0 005-1.56 4.5 4.5 0 002-3.57A12.69 12.69 0 0018.78 65q-1.84-3.37-5.53-8.86t-5.42-8.88A12.18 12.18 0 016 41.65a10 10 0 011.61-4.3 30.42 30.42 0 014.27-5.65 25.42 25.42 0 016.04-4.7 13.91 13.91 0 016.86-1.91c.62 0 1.46.06 2.54.17s2.12.26 3.11.44a9.13 9.13 0 012.55.78c.68.35 1 .72 1 1.13 0 1.16-.29 1.91-.86 2.26a10.35 10.35 0 01-4.1.61q-7.12.05-10.7 2.52a7.32 7.32 0 00-3.58 6.26A9.81 9.81 0 0016 43.48q1.2 2.43 3.86 6.78a106.18 106.18 0 015.54 10.17 19.34 19.34 0 012 8.09 12 12 0 01-.69 3.22 18.41 18.41 0 01-2.19 4.47 13.39 13.39 0 01-4.21 4 12.06 12.06 0 01-6.52 1.7 17.7 17.7 0 01-2.65-.26 29.18 29.18 0 01-3.29-.74A24.22 24.22 0 015 80a2.82 2.82 0 01-1.33-1 8 8 0 01-.8-3.13 1.61 1.61 0 01.51-1.3M70 57.59v-2a3.79 3.79 0 00-.74-2.59 4 4 0 00-1.58-1.13l-1.58-.61a1 1 0 01-.71-.95c0-.24.19-.51.58-.79l1.9-1.52a2.67 2.67 0 01.71-.48 1.6 1.6 0 01.55-.1 1.14 1.14 0 01.61.18 3.69 3.69 0 01.71.72q3.06 3.63 6.28 7.27t6 6.65q2.78 3 4.8 5.12c1.36 1.4 2.28 2.32 2.77 2.74.28-1.8.48-3.51.61-5.15s.18-3.31.18-5c0-1.37 0-2.57-.15-3.59s-.22-1.88-.32-2.58-.21-1.27-.32-1.69a4.78 4.78 0 01-.16-1 1.11 1.11 0 01.45-.77 3.17 3.17 0 011-.45 6.65 6.65 0 011.21-.2c.42 0 .81-.06 1.16-.06a1.05 1.05 0 011 .45 2 2 0 01.27 1 9.24 9.24 0 01-.27 1.74c-.17.81-.36 1.9-.58 3.27s-.4 3.08-.58 5.14-.26 4.53-.26 7.41v2.82c0 1 .06 2.07.06 3.19a1.88 1.88 0 01-.48 1.14 8.08 8.08 0 01-1.08 1.11 9.32 9.32 0 01-1.19.84 2 2 0 01-.79.34c-.17 0-.32-.19-.45-.58s-.27-.88-.45-1.48a15.79 15.79 0 00-.76-2 9.42 9.42 0 00-1.4-2.19q-2.09-2.43-4.29-4.81l-4.11-4.35q-1.92-2-3.48-3.61c-1-1-1.82-1.88-2.35-2.48-.1 1.48-.19 3-.26 4.56s-.12 3.09-.13 4.57 0 2.86 0 4.13v5.6c0 .79.05 1.4.05 1.82a2.34 2.34 0 01-.18.87 1 1 0 01-.77.6c-.84.21-1.48.38-1.92.48a5.09 5.09 0 01-1.24.16c-.67 0-1-.25-1-.74a1.44 1.44 0 01.26-.82c.18-.26.38-.59.61-1a8.28 8.28 0 00.66-1.61 11.35 11.35 0 00.42-2.59l.63-13c0-.67.06-1.33.08-2"/>
                                    <path class="cls-2-logo"
                                          d="M.89 8C.84 6.72.78 5.78.69 5.18a1.71 1.71 0 00-.08-.29.43.43 0 00-.21-.21C.13 4.53 0 4.37 0 4.2a.89.89 0 01.46-.7 6.36 6.36 0 011.07-.6 9.31 9.31 0 011.26-.42 4.27 4.27 0 011-.16 9 9 0 011.59.17A9 9 0 017 3a2.55 2.55 0 01.69.51 4.94 4.94 0 01.62.75 3.87 3.87 0 01.45.85 2.06 2.06 0 01.17.8 5 5 0 01-.45 2.54 6.69 6.69 0 01-.68.91 11.21 11.21 0 01-.89.93 8.23 8.23 0 01-.87.72 1.24 1.24 0 01-.62.3 1.67 1.67 0 01-.52-.11 5.89 5.89 0 01-.58-.24 2 2 0 01-.48-.29c-.13-.1-.19-.18-.19-.24a.26.26 0 01.13-.22 1.47 1.47 0 01.5-.17 3.56 3.56 0 002-1.11A2.81 2.81 0 007.06 7a6.34 6.34 0 00-.09-1 4.16 4.16 0 00-.33-1A2.7 2.7 0 006 4.07a1.44 1.44 0 00-1-.37 3.64 3.64 0 00-1.07.15 5.45 5.45 0 00-1 .48c0 .3-.07.66-.1 1.07s-.07.85-.1 1.3-.1.89-.11 1.3 0 .84 0 1.19v7a5.27 5.27 0 01-.33 2.15 1.17 1.17 0 01-1.18.66c-.3 0-.45-.14-.45-.4a.75.75 0 010-.24c0-.09.06-.21.11-.36a3.35 3.35 0 00.1-.61 9.14 9.14 0 000-1v-3.91C1 10.77.93 9.27.89 8M17 5.46a3.46 3.46 0 01.7 2.19A4.83 4.83 0 0117.56 9a4.2 4.2 0 01-.45 1 3.46 3.46 0 01-.59.7 3.3 3.3 0 01-.62.41l-1.62.73a3.52 3.52 0 01.44.11.77.77 0 01.32.26c.63.79 1.25 1.49 1.85 2.11S18 15.46 18.5 15.9l1.14 1c.29.26.43.42.43.48a.64.64 0 01-.05.28 1.13 1.13 0 01-.24.31l-.31.3a.33.33 0 01-.22.09h-.36a.74.74 0 01-.66-.34l-.77-.94c-.29-.36-.71-.83-1.24-1.41L13.76 13a1.07 1.07 0 00-.47-.33 1.78 1.78 0 00-.53-.08V18.11a.63.63 0 01-.09.33.37.37 0 01-.34.15 2.41 2.41 0 01-.44-.07q-.27-.08-.54-.18a2.16 2.16 0 01-.48-.27q-.21-.15-.21-.3a.53.53 0 01.13-.3c.08-.12.18-.27.3-.43a2.67 2.67 0 00.13-.77q.06-.64.09-1.47t.06-1.62v-2.41-1.84c0-.58-.06-1.08-.11-1.49q0-.2-.12-.24l-.21-.11a.58.58 0 01-.25-.09.51.51 0 01-.09-.34.68.68 0 01.3-.59 7.41 7.41 0 011.18-.69 11.31 11.31 0 011.16-.47 7.08 7.08 0 011-.26 3.46 3.46 0 01.69-.08 2.49 2.49 0 012.08.89m-3.86 5.86a3.11 3.11 0 00.53-.23 5.83 5.83 0 001-.65 4.61 4.61 0 00.95-1A2.49 2.49 0 0016.08 8a2.28 2.28 0 00-.45-1.61 1.5 1.5 0 00-1.1-.47 2.14 2.14 0 00-.82.18 1.54 1.54 0 00-.68.55 2.73 2.73 0 00-.12.59c0 .26-.05.56-.07.89s-.05.68-.06 1 0 .7 0 1v1c0 .13.18.19.41.19M20.77 10.13a6.4 6.4 0 011-2.12 5.36 5.36 0 014.5-2.17A4.29 4.29 0 0128 6.2a3.78 3.78 0 011.44 1.09 5.76 5.76 0 011 1.9 9.1 9.1 0 01.36 2.72 7 7 0 01-.47 2.67 5.87 5.87 0 01-1.24 2 5.44 5.44 0 01-1.77 1.2 5.37 5.37 0 01-2.06.41 4.47 4.47 0 01-1.71-.37A4.53 4.53 0 0122 16.69a5.63 5.63 0 01-1.12-1.79 6.63 6.63 0 01-.43-2.49 8.76 8.76 0 01.32-2.28m1.48 3.1a5.58 5.58 0 00.58 1.54A4.44 4.44 0 0024 16.11a3 3 0 001.87.57 3.84 3.84 0 001.08-.19 2.89 2.89 0 001.12-.68 3.62 3.62 0 00.89-1.38 6 6 0 00.36-2.25A8 8 0 0029 9.81a4.71 4.71 0 00-.77-1.54 2.92 2.92 0 00-1.1-.84 3.32 3.32 0 00-2.87.14 3.66 3.66 0 00-1.19 1.06 4.83 4.83 0 00-.73 1.55 6.7 6.7 0 00-.25 1.87 6 6 0 00.16 1.18"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
                <a href="" data-toggle="modal" data-target="#modal-search" class="search-icon d-flex d-lg-none" style="height: 20px;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.05 20.05">
                    <g data-name="Livello 2">
                      <path d="M14.35 13.26l5.1 5 .18.17c.46.42.59.91.13 1.37s-.9.25-1.3-.16c-1.44-1.45-2.89-2.88-4.32-4.34a12 12 0 01-.86-1.06 8.14 8.14 0 01-7.18 1.64 7.75 7.75 0 01-4.55-3.1 8 8 0 011-10.56A8.09 8.09 0 0113 1.65c2.8 2.12 4.68 6.86 1.37 11.61M1.7 8A6.33 6.33 0 008 14.43a6.38 6.38 0 10.06-12.75A6.32 6.32 0 001.7 8"
                            data-name="Livello 1"/>
                    </g>
                  </svg>
              </a>
              <button class="navbar-toggler button-collapse" type="button" data-activates="slide-out" data-bs-toggle="collapse" data-bs-target="#navbarCollapse1" aria-controls="navbarCollapse1" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse1" bis_skin_checked="1">
        <?php
           $menuClass = 'nav navbar-nav mr-auto ml-auto mt-2 mt-lg-0';
           if ('on' == et_get_option('divi_disable_toptier')) {
             $menuClass .= ' et_disable_top_tier';
           }
           $primaryNav = '';

           $primaryNav = wp_nav_menu([
             'menu' => $menu_name,
             'theme_location' => 'primary-menu',
             'container' => '',
             'fallback_cb' => '',
             'menu_class' => $menuClass,
             'menu_id' => 'top-menu',
             'echo' => false,
           ]);

           if ('' == $primaryNav): ?> <ul id="top-menu" class="<?php echo esc_attr($menuClass); ?>">
              <?php if ('on' == et_get_option('divi_home_link')) { ?>
              <li <?php if (is_home()) { echo 'class="current_page_item"'; } ?>>
                  <a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home', 'Divi'); ?></a>
              </li>
          <?php } ?>
          <?php show_page_menu($menuClass, false, false); ?>
          <?php show_categories_menu($menuClass, false); ?>
          </ul>
					<?php else:echo $primaryNav;endif; ?>
                    <a href="" data-toggle="modal" data-target="#modal-search" class="search-icon d-flex" style="height: 20px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.05 20.05">
                            <g data-name="Livello 2">
                                <path d="M14.35 13.26l5.1 5 .18.17c.46.42.59.91.13 1.37s-.9.25-1.3-.16c-1.44-1.45-2.89-2.88-4.32-4.34a12 12 0 01-.86-1.06 8.14 8.14 0 01-7.18 1.64 7.75 7.75 0 01-4.55-3.1 8 8 0 011-10.56A8.09 8.09 0 0113 1.65c2.8 2.12 4.68 6.86 1.37 11.61M1.7 8A6.33 6.33 0 008 14.43a6.38 6.38 0 10.06-12.75A6.32 6.32 0 001.7 8"
                                      data-name="Livello 1"/>
                            </g>
                        </svg>
                    </a>

                    <div class="dona">
                      <div class="row align-items-center h-100">
                        <div class="col-12" style="height: 45px;">
                          <a href="<?php echo $header_links['dona_btn']->$lang; ?>">
                            <?php
                            if ( $lang == 'it' || $lang == 'es' ): ?>
                              <span style="font-size: 24px"><?php echo $header['dona_btn']->$lang; ?></span>
                            <?php elseif ( $lang == 'fr' ): ?>
                              <div style="font-size: 12px; line-height: 20px;"><?php echo $header['dona_btn']->$lang; ?></div>
                            <?php else: ?>
                              <span style="font-size: 17px"><?php echo $header['dona_btn']->$lang; ?></span>
                            <?php endif; ?>
                          </a>
                        </div>
                        <div class="col-12">
                          <a href="<?php echo $header_links['dona_btn']->$lang; ?>">
                            <img class="donate-hand" src="<?php echo get_stylesheet_directory_uri(); ?>/images/hand.png" alt="donate-hand" />
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </nav>
    </header> <!-- #main-header -->
<?php endif;
?>

    <div id="et-main-area" style="margin-top: 0!important">
<?php if (!$posthideheader): ?>

    <div class="modal fade" id="modal-search" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h4 class="modal-title w-100 font-weight-bold">Search</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body mx-3">
          <div class="md-form mb-5">
            <i class="fas fa-search prefix grey-text"></i>
            <?php get_search_form(); ?>
          </div>
        </div>
      </div>
    </div>
  </div>

    <?php if (is_front_page() or is_page('en') or is_page('de') or is_page('es') or is_page('fr') or is_page('it')): ?>
    <div id="dona-mobile">
      <div class="row align-items-center h-100">
        <div class="col-12" style="height: 45px">
          <a href="<?php echo $header_links['dona_btn']->$lang; ?>">
            <span style="font-size: 38px"><?php echo $header['dona_btn']->$lang; ?></span>
          </a>
        </div>
        <div class="col-12">
          <a href="<?php echo $header_links['dona_btn']->$lang; ?>">
            <img class="donate-hand" src="<?php echo get_stylesheet_directory_uri(); ?>/images/hand.png" alt="donate-hand" />
          </a>
        </div>
      </div>
    </div>
    <?php endif; ?>
<?php endif; ?>
<?php function get_header_locate_links()
{
  $toRet = [];
  $toRet['dona_btn'] = ATS::get_footer_header_dona_btn_links();
  return $toRet;
}
