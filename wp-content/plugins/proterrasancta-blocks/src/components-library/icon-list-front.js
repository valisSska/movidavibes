import React from 'react';
import locale from '../locale.json';

const getDonazioniLink = () => {
  switch (window.language) {
    case 'it':
      return '/it/come-sostenerci/#donaonline';
    case 'en':
      return '/en/take-action/#donaonline';
    case 'es':
      return '/es/ayudanos/#donaonline';
    case 'fr':
      return '/fr/aider/#donaonline';
    case 'de':
      return '/de/mithelfen/#donaonline';
    default:
      return '9435';
  }
};

const getProgettiLink = () => {
  switch (window.language) {
    case 'it':
      return '/it/progetti/';
    case 'en':
      return '/en/projects/';
    case 'es':
      return '/es/que-hacemos/';
    case 'fr':
      return '/fr/projets/';
    case 'de':
      return '/de/projekte/';
    default:
      return '9435';
  }
};

const getEmergenzeLink = () => {
  switch (window.language) {
    case 'it':
      return '/it/campagne/';
    case 'en':
      return '/en/campagne/';
    case 'es':
      return '/es/';
    case 'fr':
      return '/fr/';
    case 'de':
      return '/de/';
    default:
      return '9435';
  }
};

const getItinerariLink = () => {
  switch (window.language) {
    case 'it':
      return '/it/itinerari-in-terra-santa/';
    case 'en':
      return '/en/tours/';
    case 'es':
      return '/es/itinerarios-en-tierra-santa/';
    case 'fr':
      return '/fr/itineraires-en-terre-sainte/';
    case 'de':
      return '/de/marschrouten/';
    default:
      return '9435';
  }
};

const IconLisSection = () => (
  <div className="row justify-content-center justify-content-md-between">
    <a href={getDonazioniLink()} className="d-none d-lg-block animate-up-stagger">
      <img
        className="icon-icon-list"
        src="/wp-content/themes/pro-terra-sancta/images/donazioni.png"
        alt="icon-campaign"
      />
      <div className="text-icon-list">{locale[window.language].donazioni}</div>
    </a>
    <a href={getProgettiLink()} className="animate-up-stagger">
      <img
        className="icon-icon-list"
        src="/wp-content/themes/pro-terra-sancta/images/progetti.png"
        alt="icon-campaign"
      />
      <div className="text-icon-list">{locale[window.language].progetti}</div>
    </a>
    <a href={getProgettiLink()} className="animate-up-stagger">
      <img
        className="icon-icon-list"
        src="/wp-content/themes/pro-terra-sancta/images/conservazione.png"
        alt="icon-campaign"
      />
      <div className="text-icon-list">{locale[window.language].conservazione}</div>
    </a>
    <a href={getProgettiLink()} className="animate-up-stagger">
      <img
        className="icon-icon-list"
        src="/wp-content/themes/pro-terra-sancta/images/educazione.png"
        alt="icon-campaign"
      />
      <div className="text-icon-list">{locale[window.language].educazione}</div>
    </a>
    <a href={getProgettiLink()} className="animate-up-stagger">
      <img
        className="icon-icon-list"
        src="/wp-content/themes/pro-terra-sancta/images/emergenze.png"
        alt="icon-campaign"
      />
      <div className="text-icon-list">{locale[window.language].emergenze}</div>
    </a>
    <a href={getEmergenzeLink()} className="animate-up-stagger">
      <img
        className="icon-icon-list"
        src="/wp-content/themes/pro-terra-sancta/images/campagne.png"
        alt="icon-campaign"
      />
      <div className="text-icon-list">{locale[window.language].campagne}</div>
    </a>
    <a href={getItinerariLink()} className="animate-up-stagger">
      <img
        className="icon-icon-list"
        src="/wp-content/themes/pro-terra-sancta/images/itinerari.png"
        alt="icon-campaign"
      />
      <div className="text-icon-list">{locale[window.language].itinerari}</div>
    </a>
  </div>
);

export default IconLisSection;
