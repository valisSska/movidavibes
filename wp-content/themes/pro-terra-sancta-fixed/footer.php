<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package WordPress
 * @subpackage
 * @since pro-terra-sancta-fixed
 */

?>

<footer class="bg-primary text-center text-lg-start">
  <!-- Grid container -->
  <div class="container py-4">
    <!--Grid row-->
    <div class="row pb-0 pb-lg-0">
      <!--Grid column-->
      <div class="col-lg-6 col-md-12 mb-0 mb-md-0">
        <div class="fit-content m-auto m-lg-0 text-center text-lg-start">
          <h3 class="text-uppercase text-company animate-up"><?php _e('Pro Terra Sancta Association', 'pro-terra-sancta-fixed'); ?></h3>
          <h4 class="text-company-sub animate-up-delay-100"><?php _e('TO FOSTER BONDS BETWEEN THE HOLY LAND AND THE WORLD', 'pro-terra-sancta-fixed'); ?></h4>
          <div class="text-address-footer"><b><?php _e('Jerusalem', 'pro-terra-sancta-fixed'); ?></b> <?php _e('91001 St. Saviour Monastery POB 186', 'pro-terra-sancta-fixed'); ?></div>
          <div class="text-address-footer"><b><?php _e('Milan', 'pro-terra-sancta-fixed'); ?></b> <?php _e('20121 Piazza Sant\'Angelo, 2', 'pro-terra-sancta-fixed'); ?> | <b>Tel: +39 026572453</b></div>
          <div class="text-address-footer"><b><?php _e('London', 'pro-terra-sancta-fixed'); ?></b> <?php _e('7 Bell Yard WC2A 2JR London, UK', 'pro-terra-sancta-fixed'); ?> | <a style="color: #f9ba55"  class="font-weight-bold" href="https://www.proterrasancta.org.uk" target="_blank">website</a></div>
          <div class="row mt-3 no-gutters">
            <ul class="social-circle social-circle-footer m-auto m-md-0">
              <li>
                <a href="<?php _e('https://www.facebook.com/proterrasanctauk', 'pro-terra-sancta-fixed'); ?>"
                   title="Segui su Facebook" target="_blank">
                  <img class="icon-footer-social" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/icona_facebook.png" alt="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/proterrasancta" title="Segui su Twitter" target="_blank">
                  <img class="icon-footer-social" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/icona_twitter.png" alt="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/proterrasancta/" title="Segui su Instagram"
                   target="_blank">
                  <img class="icon-footer-social" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/icona_instagram.png" alt="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/proterrasancta" title="Segui su Youtube"
                   target="_blank">
                  <img class="icon-footer-social" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/icona_youtube.png" alt="icon-youtube" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/pro-terra-sancta/"
                   title="Segui su LinkedIn" target="_blank">
                  <img class="icon-footer-social" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/icona_linkedin.png" alt="icon-linkedin" />
                </a>
              </li>
            </ul>
            <a href="mailto:info@proterrasancta.org" class="mail-footer m-auto m-md-0 pl-3 pt-3 pt-md-1 d-none d-lg-block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.97 35.58">
                <defs/>
                <g data-name="Livello 2">
                  <g fill="#f9ba55" data-name="FOOTER STANDARD">
                    <text font-family="OpenSans-Bold,Open Sans" font-size="10" font-weight="700"
                          transform="translate(43.42 29.49)"><?php _e('write us', 'pro-terra-sancta-fixed'); ?>
                    </text>
                    <path d="M17.29 34.58H1c-.76 0-.95-.19-.95-.93V14.49a1.12 1.12 0 01.46-1c1.39-1.11 2.77-2.25 4.16-3.37A.76.76 0 005 9.47V7.01c0-.63.22-.84.85-.84h3.37a.89.89 0 00.5-.17l7-5.71c.46-.37.68-.37 1.14 0l7 5.71a1 1 0 00.51.18h3.39c.68 0 .88.2.88.9v2.5a.59.59 0 00.25.53c1.39 1.12 2.76 2.26 4.16 3.37a1.29 1.29 0 01.54 1.12v19c0 .83-.17 1-1 1zM2.42 33.29h29.77L17.3 21.17zm9.91-9.66l-11-8.18v17.16zm10 0l11 9V15.45zm.84-17.47L17.3 1.42l-5.82 4.74zM4.92 11.49l-3.28 2.68 3.28 2.44zm24.76 5.12L33 14.17l-3.28-2.68z"/>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0 d-none d-lg-block">
        <div class="logos-donate m-auto me-lg-0 ms-lg-auto">
          <div>
            <div class="row fit-content gx-0 m-auto ms-lg-auto me-lg-0">
              <div class="icons-footer row justify-content-center" style="width: 245px">
                <a class="col-4" href="<?php _e('https://www.proterrasancta.org/en/campaigns/', 'pro-terra-sancta-fixed'); ?>"><img class="icon-footer" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/icona-campagne.png" alt="icon-campaign" /></a>
                <a class="col-4" href="<?php _e('https://www.proterrasancta.org/en/projects/', 'pro-terra-sancta-fixed'); ?>"><img class="icon-footer" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/icona-conservazione.png" alt="icon-campaign" /></a>
                <a class="col-4" href="<?php _e('https://www.proterrasancta.org/en/projects/', 'pro-terra-sancta-fixed'); ?>"><img class="icon-footer" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/icona-emergenze.png" alt="icon-campaign" /></a>
                <a class="col-4" href="<?php _e('https://www.proterrasancta.org/en/projects/', 'pro-terra-sancta-fixed'); ?>"><img class="icon-footer" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/icona-istruzione.png" alt="icon-campaign" /></a>
                <a class="col-4" href="<?php _e('https://www.proterrasancta.org/en/tours/', 'pro-terra-sancta-fixed'); ?>"><img class="icon-footer" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/icona-itinerari.png" alt="icon-campaign" /></a>
                <a class="col-4" href="<?php _e('https://www.proterrasancta.org/en/projects/', 'pro-terra-sancta-fixed'); ?>"><img class="icon-footer" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/icona-progetti.png" alt="icon-campaign" /></a>
              </div>
              <div class="dona-big d-none d-md-block" style="width: 133px; height: 133px; margin-left: 10px">
                <div class="row align-items-center h-100">
                  <div class="col-12 gx-0" style="height: 45px; padding-top: 10px">
                    <a href="<?php _e('https://www.proterrasancta.org/en/take-action/', 'pro-terra-sancta-fixed'); ?>">
                      <span style="font-size: 30px"><?php _e('DONATE', 'pro-terra-sancta-fixed'); ?></span>
                    </a>
                  </div>
                  <div class="col-12 gx-0">
                    <a href="<?php _e('https://www.proterrasancta.org/en/take-action/', 'pro-terra-sancta-fixed'); ?>">
                      <img class="donate-hand" style="width: 135px; max-width: 100%" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/hand.png" alt="donate-hand" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-none d-md-block">
              <div class="mt-4 row justify-content-end no-gutters">
                <?php
                if ( defined( 'ICL_LANGUAGE_CODE' ) && ICL_LANGUAGE_CODE == 'it' ): ?>
                  <div class="col img-giornalino pt-4 pt-md-0 pt-lg-0 pt-xl-0 d-flex">
                    <a class="ms-auto mr-5" href="<?php _e('https://www.proterrasancta.org/it/giornalino/', 'pro-terra-sancta-fixed'); ?>">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 45.9">
                        <defs>
                          <style>
                            .cls-1-g {
                              fill: #fff
                            }

                            .cls-2-g {
                              fill: none;
                              stroke: #fff;
                              stroke-miterlimit: 10;
                              stroke-width: .25px
                            }</style>
                        </defs>
                        <g id="Livello_2" data-name="Livello 2">
                          <g id="Livello_1-2" data-name="Livello 1">
                            <path class="cls-1-g"
                                  d="M10.47 17.82h-.41a.22.22 0 01-.19-.13.57.57 0 01-.07-.29.31.31 0 01.11-.2.33.33 0 01.21-.12h.4l.72.05h.9c.27 0 .66 0 1.2-.05s.93 0 1.2 0a.14.14 0 01.16.15q0 .09-.18.27a.53.53 0 01-.31.19h-1.58c-.07.44-.12 1-.16 1.57s-.05 1.43-.05 2.43a1.09 1.09 0 00.21.69.87.87 0 00.73.27h.36a.1.1 0 01.09.06.79.79 0 010 .17.32.32 0 01-.1.25 1.26 1.26 0 01-.33.17 1.18 1.18 0 01-.38.08 1.31 1.31 0 01-.56-.12A1.36 1.36 0 0112 23a1.27 1.27 0 01-.29-.42 1 1 0 01-.1-.42v-.37c0-.19.07-.58.1-.89s0-.69 0-1.16c0-.78 0-1.42-.07-1.91zM16.24 21c.08 0 .13 0 .13.08v.07l-.09.09-.11.08H15a2 2 0 00.32 1.23 1.23 1.23 0 001 .41.43.43 0 01.2 0s.05 0 .05.11 0 .08-.11.12a1 1 0 01-.35.05 2 2 0 01-.88-.17 1.23 1.23 0 01-.5-.45 1.56 1.56 0 01-.21-.58 4.43 4.43 0 01-.05-.66 4.52 4.52 0 01.12-1.12 2.21 2.21 0 01.33-.74 1.22 1.22 0 01.47-.41A1.31 1.31 0 0116 19a1.1 1.1 0 01.38 0 .16.16 0 01.11.16c0 .1 0 .15-.13.15h-.4a.73.73 0 00-.33.08.7.7 0 00-.27.25 2 2 0 00-.21.52 4.18 4.18 0 00-.11.82.48.48 0 01.3-.11zM19.38 19.19a1 1 0 01.22.66 1.24 1.24 0 01-.17.66.84.84 0 01-.37.36l-.49.22a.32.32 0 01.23.11 7.07 7.07 0 00.61.68c.19.2.4.4.63.61a1.71 1.71 0 01.26.26.29.29 0 010 .09l-.07.09c-.06.06-.1.09-.13.09h-.11a.16.16 0 01-.1 0 .22.22 0 01-.09-.08l-.13-.16c-.17-.2-.32-.38-.47-.54l-.73-.79a.38.38 0 00-.3-.12V23a.17.17 0 010 .1.12.12 0 01-.1 0h-.13l-.17-.05-.23-.05a.12.12 0 01-.06-.09s.05-.11.13-.22a.72.72 0 000-.21 2.86 2.86 0 000-.46v-.84-.78-.57a.12.12 0 00-.08-.09l-.08-.05v-.1a.23.23 0 01.08-.18 2.91 2.91 0 01.66-.33 2.2 2.2 0 01.54-.11.76.76 0 01.62.25m-1.26 1.7s.05.05.12.05a.62.62 0 00.18-.07l.3-.2a1.18 1.18 0 00.27-.32.72.72 0 00.12-.4.68.68 0 00-.13-.47.43.43 0 00-.33-.15.57.57 0 00-.25.06.53.53 0 00-.2.16 3.57 3.57 0 00-.06.44v.61zM22.67 19.19a1 1 0 01.21.66 1.24 1.24 0 01-.16.66.86.86 0 01-.38.36l-.48.22a.28.28 0 01.22.11c.22.26.42.49.61.68l.64.61a1.36 1.36 0 01.25.26.28.28 0 010 .09l-.08.09c-.06.06-.1.09-.13.09h-.11a.16.16 0 01-.1 0A.31.31 0 0123 23l-.13-.16c-.16-.2-.32-.38-.46-.54l-.74-.79a.37.37 0 00-.29-.12V23a.17.17 0 010 .1.11.11 0 01-.1 0h-.13l-.15-.05a.58.58 0 01-.14-.08.12.12 0 01-.06-.09s0-.11.13-.22a1.5 1.5 0 000-.21v-.46-.49-.35-.78-.57c0-.15 0-.07-.08-.09a.18.18 0 01-.07-.05.13.13 0 010-.1.21.21 0 01.09-.18 2.55 2.55 0 01.66-.33 2.2 2.2 0 01.54-.11.77.77 0 01.62.25m-1.26 1.7s.05.05.12.05a.51.51 0 00.17-.07 2.29 2.29 0 00.31-.2 1.69 1.69 0 00.27-.32.72.72 0 00.12-.4.73.73 0 00-.13-.47.43.43 0 00-.34-.15.53.53 0 00-.24.06.46.46 0 00-.2.16 3.57 3.57 0 00-.06.44v.61zM25.21 21.72c-.06 0-.11.08-.15.19a1.65 1.65 0 01-.09.21l-.15.29-.14.3a.68.68 0 00-.07.17c0 .12-.06.18-.13.19H23.91a.05.05 0 01-.05 0 .19.19 0 010-.07.29.29 0 010-.12.1.1 0 01.06-.05.57.57 0 00.22-.11.48.48 0 00.16-.24s.09-.17.23-.42.28-.51.39-.73.22-.43.33-.66a6.94 6.94 0 00.29-.65 1.67 1.67 0 00.11-.47.63.63 0 000-.14l-.05-.14c0-.05.05-.1.15-.16a.54.54 0 01.22-.08s.07 0 .12.08a.66.66 0 01.14.2c0 .09.13.27.25.53l.44.93c.13.25.28.53.45.82a7.86 7.86 0 00.48.78 5.35 5.35 0 00.32.43.29.29 0 01.06.1v.09A.2.2 0 0128 23h-.49a.19.19 0 01-.1-.08.77.77 0 01-.07-.16 1.6 1.6 0 00-.08-.2 2.5 2.5 0 00-.14-.3 2.13 2.13 0 00-.16-.28.32.32 0 00-.09-.13.64.64 0 00-.22-.05h-1.02a1.63 1.63 0 00-.42 0m1.49-.34l-.54-1.05-.1-.21L26 20a.68.68 0 000 .13v.12l-.5.75-.05.08a2.08 2.08 0 00-.1.24s0 .05.12.05zM10.64 26.91c-.06 0-.11.09-.16.2a.89.89 0 01-.1.23 3.16 3.16 0 01-.16.32l-.15.33a.87.87 0 00-.08.19c0 .13-.07.2-.14.21h-.63-.06a.24.24 0 010-.08.31.31 0 010-.13.12.12 0 01.07-.05.85.85 0 00.25-.13.51.51 0 00.17-.26l.25-.46.43-.8c.12-.23.25-.47.37-.73s.22-.49.31-.71a1.63 1.63 0 00.12-.51.66.66 0 000-.16.48.48 0 01-.05-.16s.05-.1.15-.16a.51.51 0 01.25-.1s.07 0 .14.1a.71.71 0 01.15.22c0 .09.14.29.27.58l.49 1c.14.28.3.58.48.91s.39.66.53.86a5.64 5.64 0 00.36.47.29.29 0 01.06.1c0 .05 0 .09-.05.11a.21.21 0 01-.12 0 1.55 1.55 0 01-.29 0h-.29a.19.19 0 01-.11-.09.75.75 0 01-.1-.21 1.19 1.19 0 00-.08-.21 3.26 3.26 0 00-.16-.34c-.06-.12-.12-.23-.17-.31a.42.42 0 00-.1-.13.51.51 0 00-.24-.06h-1.12a1.52 1.52 0 00-.47 0m1.64-.38l-.59-1.15-.1-.23c0-.09-.07-.13-.09-.13h-.05v.15l-.05.13-.39.79v.08a1 1 0 00-.12.27s0 .05.13.05zM19.14 25.38a2 2 0 01.62-.8 2.33 2.33 0 01.79-.39 2.86 2.86 0 01.79-.12.86.86 0 01.47.12c.12.07.18.15.18.23a.19.19 0 010 .11.63.63 0 01-.11.12.57.57 0 01-.13.1.28.28 0 01-.12.05s-.06 0-.12-.11a1.41 1.41 0 00-.18-.17.34.34 0 00-.22-.06 1.38 1.38 0 00-.83.24 1.57 1.57 0 00-.53.59 2.87 2.87 0 00-.26.68 3.4 3.4 0 00-.07.56 1.34 1.34 0 00.1.49 1.72 1.72 0 00.27.52 1.55 1.55 0 00.42.39 1 1 0 00.51.16 1.33 1.33 0 00.57-.13 3.8 3.8 0 00.51-.32.68.68 0 01.27-.16.14.14 0 01.16.16s-.07.13-.2.27a1.42 1.42 0 01-.41.33 1.47 1.47 0 01-.48.16 2.81 2.81 0 01-.62.07 1.44 1.44 0 01-.51-.1 1.88 1.88 0 01-.52-.31 1.72 1.72 0 01-.4-.57 1.92 1.92 0 01-.16-.83 2.86 2.86 0 01.25-1.28M23 24.71h-.29a.15.15 0 01-.13-.09.41.41 0 01-.05-.19.25.25 0 01.09-.15.23.23 0 01.14-.08H25.78a.1.1 0 01.11.11s0 .1-.12.18a.35.35 0 01-.21.13h-1.09c0 .3-.08.66-.11 1.08s0 1 0 1.66a.77.77 0 00.14.47.59.59 0 00.5.19h.25a.05.05 0 01.06 0 .37.37 0 010 .11.22.22 0 01-.06.17.62.62 0 01-.23.12.66.66 0 01-.26.05.79.79 0 01-.38-.08.85.85 0 01-.31-.21.89.89 0 01-.2-.29.82.82 0 01-.07-.29 2.14 2.14 0 010-.25l.06-.61v-.8a12 12 0 00-.05-1.31zM27.26 26.91c-.06 0-.11.09-.16.2a1.46 1.46 0 01-.1.23 3.16 3.16 0 01-.16.32c-.06.14-.12.24-.16.33a.76.76 0 00-.07.19c0 .13-.07.2-.14.21h-.63a.05.05 0 01-.06 0 .24.24 0 010-.08.31.31 0 010-.13l.07-.05a.7.7 0 00.24-.13.52.52 0 00.18-.26s.09-.19.24-.46.31-.56.43-.8.25-.47.37-.73.23-.49.31-.71a1.45 1.45 0 00.13-.51 1.07 1.07 0 00-.05-.16 1.07 1.07 0 01-.05-.16s.05-.1.16-.16a.45.45 0 01.24-.1s.08 0 .14.1a.71.71 0 01.15.22c.05.09.15.29.28.58s.34.73.48 1 .3.58.49.91a9.57 9.57 0 00.53.86c.13.19.25.34.35.47a.24.24 0 01.07.1.13.13 0 01-.05.11.21.21 0 01-.12 0 1.62 1.62 0 01-.3 0h-.28a.19.19 0 01-.11-.09.75.75 0 01-.08-.21 1.19 1.19 0 00-.08-.21 3.26 3.26 0 00-.16-.34c-.07-.12-.12-.23-.17-.31a.42.42 0 00-.1-.13.59.59 0 00-.24-.06h-1.12a1.48 1.48 0 00-.47 0m1.63-.38l-.58-1.15-.11-.23c0-.09-.06-.13-.09-.13a.64.64 0 00-.05.15l-.06.13-.38.79v.08a1.27 1.27 0 00-.11.27s0 .05.13.05zM5.23 27.75a.25.25 0 01.16-.06 2 2 0 01.44.09 3.17 3.17 0 00.87.15 1.08 1.08 0 00.71-.23.61.61 0 00.28-.5 1.83 1.83 0 00-.26-.82c-.18-.33-.44-.75-.79-1.27s-.6-.94-.78-1.26a1.84 1.84 0 01-.26-.8 1.49 1.49 0 01.23-.62 4.25 4.25 0 01.61-.8 3.4 3.4 0 01.87-.63 2 2 0 011-.27 2.71 2.71 0 01.36 0l.44.06a2.07 2.07 0 01.37.11c.09.05.14.11.14.17a.36.36 0 01-.12.32 1.47 1.47 0 01-.58.09 2.67 2.67 0 00-1.54.36 1 1 0 00-.51.89 1.38 1.38 0 00.18.61 11 11 0 00.55 1 16.33 16.33 0 01.79 1.45 2.89 2.89 0 01.28 1.16 1.54 1.54 0 01-.1.45 2.68 2.68 0 01-.31.64 2.13 2.13 0 01-.61.58 1.69 1.69 0 01-.93.24 2 2 0 01-.37 0 2.47 2.47 0 01-.47-.11 3.15 3.15 0 01-.4-.13.46.46 0 01-.19-.13 1.09 1.09 0 01-.11-.45.25.25 0 01.07-.19M14.74 25.33V25a.55.55 0 00-.1-.37.6.6 0 00-.23-.16l-.22-.08a.15.15 0 01-.1-.14s0-.07.08-.11l.27-.22a.26.26 0 01.1-.07h.08a.15.15 0 01.09 0l.1.1c.29.35.59.7.9 1s.59.67.85.95.49.53.69.73.32.33.39.39c0-.25.07-.5.09-.73s0-.47 0-.72a3.86 3.86 0 000-.51v-.37a2.42 2.42 0 00-.05-.24 1 1 0 010-.15.13.13 0 01.06-.1l.14-.07H18.22a.15.15 0 01.14.07.23.23 0 010 .14 1 1 0 010 .25c0 .12-.05.27-.08.47s-.06.44-.08.74 0 .64 0 1v.86a.28.28 0 01-.07.16 1.21 1.21 0 01-.16.16.66.66 0 01-.17.12.19.19 0 01-.11.05s-.05 0-.06-.08 0-.13-.07-.21a1.53 1.53 0 00-.11-.29 1.08 1.08 0 00-.2-.31c-.2-.24-.4-.46-.61-.69l-.64-.52-.49-.52-.34-.35v2.95a.35.35 0 010 .13.14.14 0 01-.11.08l-.27.07a.58.58 0 01-.18 0c-.1 0-.14 0-.14-.1a.27.27 0 010-.12.85.85 0 00.09-.14 1.74 1.74 0 00.1-.23 1.68 1.68 0 00.06-.37l.09-1.86a2.53 2.53 0 010-.28M4.87 18.24a1.9 1.9 0 000-.4.1.1 0 010-.07.12.12 0 01.06-.1l.07-.16.17-.06h.37l.24.07a.35.35 0 01.1.08l.09.1.06.12a.35.35 0 010 .12.7.7 0 01-.03.36.57.57 0 01-.1.13l-.12.14-.13.1a.16.16 0 01-.09 0H5.3h.07a.55.55 0 00.29-.16.39.39 0 00.1-.27.76.76 0 000-.14.44.44 0 000-.15.38.38 0 00-.09-.13.19.19 0 00-.14-.05.41.41 0 00-.16 0l-.14.07v1.69a.8.8 0 010 .31.18.18 0 01-.17.1.05.05 0 01-.06-.06.09.09 0 010-.05V19.03v-.64M7.18 17.88a.52.52 0 01.1.31.58.58 0 010 .19.35.35 0 01-.06.14l-.08.1a.35.35 0 01-.09.06l-.23.1h.06a2 2 0 00.27.3l.23.23.16.15s.06.06.06.07h-.2-.05l-.11-.13a2.31 2.31 0 00-.18-.21L6.71 19a.1.1 0 00-.07 0h-.07v.79h-.28v-.05c0-.05 0 0 0 0v-.06a.2.2 0 000-.11 1.34 1.34 0 000-.21 1.77 1.77 0 000-.23v-.35-.26-.21a.07.07 0 010-.05.08.08 0 010-.08.75.75 0 01.17-.1l.17-.07H6.87a.35.35 0 01.3.13m-.55.84h.07a.6.6 0 00.15-.09.64.64 0 00.16-.45.36.36 0 00.06-.2A.33.33 0 007 18a.21.21 0 00-.16-.07L6.7 18a.16.16 0 00-.09.07.64.64 0 000 .09v.56h.06M7.71 18.55a.89.89 0 01.15-.31.8.8 0 01.26-.24.74.74 0 01.38-.09.7.7 0 01.25.05.62.62 0 01.2.16.69.69 0 01.14.27 1.14 1.14 0 01.06.39 1.12 1.12 0 01-.07.38.9.9 0 01-.18.28.85.85 0 01-.25.17.77.77 0 01-.3.06.62.62 0 01-.46-.21.72.72 0 01-.16-.25 1 1 0 01-.06-.36 1.22 1.22 0 010-.32m.21.44a1 1 0 00.09.22.7.7 0 00.16.19.46.46 0 00.27.08h.15a.37.37 0 00.16-.09.58.58 0 00.13-.2.93.93 0 000-.32 1.09 1.09 0 000-.34.9.9 0 00-.11-.22.36.36 0 00-.16-.12.39.39 0 00-.18 0 .44.44 0 00-.23.06.61.61 0 00-.17.15.74.74 0 00-.1.22.84.84 0 000 .27 1.49 1.49 0 000 .17"/>
                            <path class="cls-1-g"
                                  d="M35.28 45.9H0V10.52L25 0v10.56h10.28zM1 44.93h33.24V11.6H1zM24 1.52l-21.5 9H24z"/>
                            <path class="cls-2-g"
                                  d="M7.28 32.2h20.73M7.28 36.07h20.73M7.28 39.94h20.73"/>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>

                  <div class="text-giornalino fit-content">
                    <a href="<?php _e('/it/giornalino/', 'pro-terra-sancta-fixed'); ?>" style="color: white">
                      IL GIORNALINO - SCARICA LA TUA COPIA
                    </a>
                  </div>
                <?php endif; ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center p-3 bg-white">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6">
          <p class="text-copyright text-center text-md-start">
            Codice Fiscale 97275880587
          </p>
        </div>
        <div class="col-12 col-sm-6 text-privacy-footer text-center text-md-end">
          <a href="<?php _e('https://www.proterrasancta.org/en/privacy-policy/', 'pro-terra-sancta-fixed'); // phpcs:disable ?>"> privacy policy </a> -
          <a href="<?php _e('https://www.proterrasancta.org/en/news_en/', 'pro-terra-sancta-fixed'); // phpcs:disable ?>"> news </a> -
          <a href="<?php _e('https://www.proterrasancta.org/en/press-contacts/', 'pro-terra-sancta-fixed'); // phpcs:disable ?>"> press </a>
        </div>
      </div>
    </div>
  </div>
  <div class="elevate"></div>
</footer>

<?php wp_footer(); ?>

</body>
</html>
