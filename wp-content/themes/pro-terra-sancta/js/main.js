$(() => {
  $('.top-menu-bar .selectpicker').selectpicker();

  $.getScript('/wp-content/themes/pro-terra-sancta/assets/node_modules/mdbootstrap-pro/js/mdb.min.js', () => {
    $('.caret-left-container').click(() => {
      $('.carousel').carousel('prev');
    });
    $('.caret-right-container').click(() => {
      $('.carousel').carousel('next');
    });

    setTimeout(() => {
      $('.button-collapse').sideNav2({
        edge: 'left',
        closeOnClick: true,
        MENU_WIDTH: 300,
        showOverlay: true,
      });
      const sideNavScrollbar = document.querySelector('.custom-scrollbar');
      // eslint-disable-next-line no-undef, no-unused-vars
      const ps = new PerfectScrollbar(sideNavScrollbar);
    }, 100);
  });

  $.getScript('/wp-content/themes/pro-terra-sancta/resources/js/slick.min.js', () => {
    jQuery('#ats-affiliati .carousel .slick-track').slick({
      arrows: false,
      dots: false,
      centerMode: true,
      variableWidth: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 1,
      adaptiveHeight: true,
    });
  });
});
