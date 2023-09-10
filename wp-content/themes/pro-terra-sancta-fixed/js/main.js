import imagesLoaded from 'imagesloaded';
import '../assets/mdb-ui-kit/src/js/pro/lazy-load';
import '../assets/mdb-ui-kit/src/js/pro/sidenav';
import '../assets/mdb-ui-kit/src/js/free/dropdown';
import '../assets/mdb-ui-kit/src/js/free/input';
import '../assets/mdb-ui-kit/src/js/pro/modal';
import sharerbox from '../assets/sharerbox-main/sharerbox';

window.addEventListener('load', () => {
  if (window.single_post) {
    sharerbox({
      // Icon list: 'site1, site2, site3...'
      // Icon size: number
      socialNetworks: 'facebook twitter whatsapp linkedin',
      iconSize: window.share_size_mobile ? 35 : 55,
      // Setup arguments: Behavior, Position, Color, Visibility, Message
      behavior: 'popup',
      position: 'right',
      color: 'black',
      visibility: true,
    });
  }

  const splideSelector2 = document.querySelector('#splideblock');
  if (splideSelector2) {
    // eslint-disable-next-line no-undef
    new Splide(splideSelector2, {
      arrows: false,
      pagination: false,
      autoplay: true,
      type: 'loop',
      speed: 1000,
      perPage: 3,
      padding: {
        right: 0,
      },
      breakpoints: {
        800: {
          perPage: 2,
          padding: {
            right: 25,
          },
        },
        575: {
          perPage: 1,
          padding: {
            right: 60,
          },
        },
      },
    }).mount();
  }

  const splideSelector = document.querySelector('#splide');
  if (splideSelector) {
    // eslint-disable-next-line no-undef
    new Splide(splideSelector, {
      arrows: true,
      pagination: true,
      type: 'loop',
      perMove: 1,
      perPage: 3,
      padding: {
        right: 0,
      },
      breakpoints: {
        800: {
          perPage: 2,
          padding: {
            right: 25,
          },
        },
        575: {
          perPage: 1,
          padding: {
            right: 60,
          },
        },
      },
    }).mount();
  }

  imagesLoaded(document.querySelector('.donate-hand'), () => {
    const newsGridElement = document.querySelector('#site-header');
    newsGridElement.classList.remove('loading');
  });
});
