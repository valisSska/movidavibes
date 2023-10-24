import React, { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
  RichText,
  AlignmentToolbar,
  BlockControls,
  InspectorControls,
  PanelColorSettings,
  InnerBlocks,
  RichTextToolbarButton,
} from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { editProjectSlidesSection, saveProjectSlidesSection } from './components/project-slides-section';
import { editNewsSlidesSection, saveNewsSlidesSection } from './components/news-slides-section';
import { editVideoCover, saveVideoCover } from './components/video-cover';
import { editSectionHero, saveSectionHero } from './components/section-hero';
import { editNewsList, saveNewsList } from './components/news-list';
import { editCoverSection, saveCoverSection } from './components/cover-section';

import paletteProterrasancta from './components/palette-proterrasancta';
import './index.scss';
import locale from './locale.json';

const HrButton = (props) => (
  <RichTextToolbarButton
    icon="editor-code"
    title="HR"
    onClick={() => {
      props.onChange(toggleFormat(props.value, { type: 'hr-format/hr-output' }));
    }}
    isActive={props.isActive}
  />
);

registerFormatType('hr-format/hr-output', {
  title: 'HR output',
  tagName: 'div',
  className: 'div-hr',
  edit: HrButton,
});

registerBlockType('proterrasancta/container', {
  title: __('Proterrasancta Container', 'proterrasancta'),
  icon: 'schedule',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#0B506B',
    },
  },
  styles: [
    {
      name: 'default',
      label: __('All page length'),
      isDefault: true,
    },
    {
      name: 'container',
      label: __('Container margins'),
    },
  ],
  edit: ({ attributes, setAttributes }) => {
    const onChangeBackgroundColor = (color) => {
      setAttributes({ backgroundColor: color });
    };

    return (
      <div>
        <InspectorControls>
          <PanelColorSettings
            title={'Background Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.backgroundColor,
                onChange: onChangeBackgroundColor,
                label: __('Background Color'),
              },
            ]}
          />
        </InspectorControls>
        <div style={{ backgroundColor: attributes.backgroundColor }}>
          <InnerBlocks />
        </div>
      </div>
    );
  },
  save: ({ attributes }) => (
    <div style={{ backgroundColor: attributes.backgroundColor }}>
      <InnerBlocks.Content />
    </div>
  ),
});

registerBlockType('proterrasancta/container-row', {
  title: __('Proterrasancta Container Row', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: '.title-row',
    },
    textColor: {
      type: 'string',
      default: 'white',
    },
    backgroundColor: {
      type: 'string',
      default: '#FFFFFF',
    },
  },
  edit: ({ className, attributes, setAttributes }) => {
    const onChangeTitle = (newContent) => {
      setAttributes({ title: newContent });
    };

    const onChangeTextColor = (color) => {
      setAttributes({ textColor: color });
    };

    const onChangeBackgroundColor = (color) => {
      setAttributes({ backgroundColor: color });
    };

    return (
      <div className={className}>
        <InspectorControls>
          <PanelColorSettings
            title={'Background Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.backgroundColor,
                onChange: onChangeBackgroundColor,
                label: __('Background Color'),
              },
            ]}
          />
          <PanelColorSettings
            title={'Title Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.textColor,
                onChange: onChangeTextColor,
                label: __('Title Color'),
              },
            ]}
          />
        </InspectorControls>
        <div style={{ backgroundColor: attributes.backgroundColor }}>
          <div className="container">
            <div className="row">
              <RichText
                className="title-row"
                style={{
                  color: attributes.textColor,
                  flexGrow: 1,
                }}
                tagName="div"
                placeholder={__('Scrivi il titolo …', 'proterrasancta')}
                onChange={onChangeTitle}
                value={attributes.title}
              />
            </div>
            <div className="row justify-content-center">
              <InnerBlocks />
            </div>
          </div>
        </div>
      </div>
    );
  },
  save: ({ attributes }) => (
    <div style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        {attributes.title ? (
          <div className="wp-block-proterrasancta-row row justify-content-center p-4">
            <div className="col-12 col-lg-6 title-row" style={{ color: attributes.textColor }}>
              {attributes.title}
            </div>
          </div>
        ) : (
          <div />
        )}
        <div className="row justify-content-center">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  ),
});

registerBlockType('proterrasancta/standard-icon-list', {
  title: __('Proterrasancta Standard Icon List', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: '#007EA7',
    },
    backgroundColor: {
      type: 'string',
      default: '#FFFFFF',
    },
  },
  edit: ({ className, attributes, setAttributes }) => {
    const onChangeTextColor = (color) => {
      setAttributes({ textColor: color });
    };

    const onChangeBackgroundColor = (color) => {
      setAttributes({ backgroundColor: color });
    };

    return (
      <div className={className}>
        <InspectorControls>
          <PanelColorSettings
            title={'Background Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.backgroundColor,
                onChange: onChangeBackgroundColor,
                label: __('Background Color'),
              },
            ]}
          />
          <PanelColorSettings
            title={'Title Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.textColor,
                onChange: onChangeTextColor,
                label: __('Title Color'),
              },
            ]}
          />
        </InspectorControls>
        <div style={{ backgroundColor: attributes.backgroundColor }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <img
                  className="icon-icon-list"
                  src="/wp-content/themes/pro-terra-sancta/images/donazioni.png"
                  alt="icon-campaign"
                />
                <img
                  className="icon-icon-list"
                  src="/wp-content/themes/pro-terra-sancta/images/progetti.png"
                  alt="icon-campaign"
                />
                <img
                  className="icon-icon-list"
                  src="/wp-content/themes/pro-terra-sancta/images/conservazione.png"
                  alt="icon-campaign"
                />
                <img
                  className="icon-icon-list"
                  src="/wp-content/themes/pro-terra-sancta/images/educazione.png"
                  alt="icon-campaign"
                />
                <img
                  className="icon-icon-list"
                  src="/wp-content/themes/pro-terra-sancta/images/emergenze.png"
                  alt="icon-campaign"
                />
                <img
                  className="icon-icon-list"
                  src="/wp-content/themes/pro-terra-sancta/images/campagne.png"
                  alt="icon-campaign"
                />
                <img
                  className="icon-icon-list"
                  src="/wp-content/themes/pro-terra-sancta/images/itinerari.png"
                  alt="icon-campaign"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  save: ({ attributes }) => (
    <div style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        <div id="icon-list-section-root" />
      </div>
    </div>
  ),
});

registerBlockType('proterrasancta/fivex1000', {
  title: __('Proterrasancta fivex1000', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: '#007EA7',
    },
    backgroundColor: {
      type: 'string',
      default: '#FFFFFF',
    },
  },
  edit: ({ className, attributes, setAttributes }) => {
    const onChangeTextColor = (color) => {
      setAttributes({ textColor: color });
    };

    const onChangeBackgroundColor = (color) => {
      setAttributes({ backgroundColor: color });
    };

    return (
      <div className={className}>
        <InspectorControls>
          <PanelColorSettings
            title={'Background Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.backgroundColor,
                onChange: onChangeBackgroundColor,
                label: __('Background Color'),
              },
            ]}
          />
          <PanelColorSettings
            title={'Title Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.textColor,
                onChange: onChangeTextColor,
                label: __('Title Color'),
              },
            ]}
          />
        </InspectorControls>
        <div style={{ backgroundColor: attributes.backgroundColor }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 col-md-5 col-lg-4 my-5" style={{ color: 'white', fontStyle: 'bold' }}>
                <div
                  style={{
                    backgroundColor: '#D31418',
                    height: '150px',
                    padding: '20px',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                  }}
                >
                  <div className="text-center py-2 font-weight-bold" style={{ fontSize: '26px' }}>
                    Inserisci il tuo reddito
                  </div>
                  <div className="md-form">
                    <i
                      className="fas fa-euro-sign input-prefix font-weight-bold"
                      style={{ fontSize: '26px', color: 'white' }}
                    />
                    <input
                      type="number"
                      id="reddito"
                      className="form-control font-weight-bold"
                      style={{ fontSize: '26px', color: 'white', paddingLeft: '35px', backgroundColor: '#D31418' }}
                    />
                  </div>
                </div>
                <div
                  className="text-center font-weight-bold"
                  style={{
                    backgroundColor: 'whitesmoke',
                    padding: '20px',
                    color: '#1d1d1b',
                    fontSize: '26px',
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '10px',
                  }}
                >
                  Il tuo 5x1000 è di € 50
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  save: ({ attributes }) => (
    <div style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        <div id="fivex1000-section-root" />
      </div>
    </div>
  ),
});

registerBlockType('proterrasancta/standard-logo-list', {
  title: __('Proterrasancta Standard Logo List', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: '#007EA7',
    },
    backgroundColor: {
      type: 'string',
      default: '#FFFFFF',
    },
  },
  edit: ({ className, attributes, setAttributes }) => {
    const onChangeTextColor = (color) => {
      setAttributes({ textColor: color });
    };

    const onChangeBackgroundColor = (color) => {
      setAttributes({ backgroundColor: color });
    };

    return (
      <div className={className}>
        <InspectorControls>
          <PanelColorSettings
            title={'Background Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.backgroundColor,
                onChange: onChangeBackgroundColor,
                label: __('Background Color'),
              },
            ]}
          />
          <PanelColorSettings
            title={'Title Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.textColor,
                onChange: onChangeTextColor,
                label: __('Title Color'),
              },
            ]}
          />
        </InspectorControls>
        <div style={{ backgroundColor: attributes.backgroundColor }}>
          <div className="container">
            <div className="row">
              <div className="ats-affiliati_item slick-slide" data-slick-index="-2" aria-hidden="true" tabIndex="-1">
                <a title="terrasanta.net" target="_blank" href="http://www.terrasanta.net/" on="" tabIndex="-1">
                  <img src="https://www.proterrasancta.org/wp-content/uploads/tsn-240x40.png" alt="terrasanta.net" />
                </a>
              </div>
              <div className="ats-affiliati_item slick-slide" data-slick-index="-1" aria-hidden="true" tabIndex="-1">
                <a
                  title="Mosaic Centre Jericho"
                  target="_blank"
                  href="http://www.mosaiccentre-jericho.com/"
                  on=""
                  tabIndex="-1"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/Logo-Mosaic-Centre-Jericho_new-240x228.png"
                    alt="Mosaic Centre Jericho"
                  />
                </a>
              </div>
              <div className="ats-affiliati_item slick-slide" data-slick-index="0" aria-hidden="true" tabIndex="-1">
                <a title="Custodia di Terra Santa" target="_blank" href="https://www.custodia.org" on="" tabIndex="-1">
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/LOGO-CUSTODIA2014-240x97.png"
                    alt="Custodia di Terra Santa"
                  />
                </a>
              </div>
              <div className="ats-affiliati_item slick-slide" data-slick-index="1" aria-hidden="true" tabIndex="-1">
                <a
                  title="Terra Sancta Museum"
                  target="_blank"
                  href="https://www.terrasanctamuseum.org/"
                  on=""
                  tabIndex="-1"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/tsm-1-240x76.png"
                    alt="Terra Sancta Museum"
                  />
                </a>
              </div>
              <div className="ats-affiliati_item slick-slide" data-slick-index="2" aria-hidden="true" tabIndex="-1">
                <a title="Frati minori di Assisi" target="_blank" href="https://www.assisiofm.it/" on="" tabIndex="-1">
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/frati_assisi-240x65.png"
                    alt="Frati minori di Assisi"
                  />
                </a>
              </div>
              <div className="ats-affiliati_item slick-slide" data-slick-index="3" aria-hidden="true" tabIndex="-1">
                <a
                  title="Christian Media Center"
                  target="_blank"
                  href="https://www.cmc-terrasanta.com/"
                  on=""
                  tabIndex="-1"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/Logo-CMC_color-240x120.png"
                    alt="Christian Media Center"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  save: ({ attributes }) => (
    <div style={{ backgroundColor: attributes.backgroundColor }}>
      <div id="ats-affiliati">
        <div id="splideblock" className="splide">
          <div className="splide__track" style={{ padding: '0px 50px', height: '120px' }}>
            <ul className="splide__list">
              <li className="ats-affiliati_item splide__slide" data-slick-index="-2" aria-hidden="true" tabIndex="-1">
                <a
                  title="terrasanta.net"
                  target="_blank"
                  href="http://www.terrasanta.net/"
                  on=""
                  tabIndex="-1"
                  rel="noopener noreferrer"
                >
                  <img src="https://www.proterrasancta.org/wp-content/uploads/tsn-240x40.png" alt="terrasanta.net" />
                </a>
              </li>
              <li className="ats-affiliati_item splide__slide" data-slick-index="-1" aria-hidden="true" tabIndex="-1">
                <a
                  title="Mosaic Centre Jericho"
                  target="_blank"
                  href="http://www.mosaiccentre-jericho.com/"
                  on=""
                  tabIndex="-1"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/Logo-Mosaic-Centre-Jericho_new-240x228.png"
                    alt="Mosaic Centre Jericho"
                  />
                </a>
              </li>
              <li className="ats-affiliati_item splide__slide" data-slick-index="0" aria-hidden="true" tabIndex="-1">
                <a
                  title="Custodia di Terra Santa"
                  target="_blank"
                  href="https://www.custodia.org"
                  on=""
                  tabIndex="-1"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/LOGO-CUSTODIA2014-240x97.png"
                    alt="Custodia di Terra Santa"
                  />
                </a>
              </li>
              <li className="ats-affiliati_item splide__slide" data-slick-index="1" aria-hidden="true" tabIndex="-1">
                <a
                  title="Terra Sancta Museum"
                  target="_blank"
                  href="https://www.terrasanctamuseum.org/"
                  on=""
                  tabIndex="-1"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/tsm-1-240x76.png"
                    alt="Terra Sancta Museum"
                  />
                </a>
              </li>
              <li className="ats-affiliati_item splide__slide" data-slick-index="2" aria-hidden="true" tabIndex="-1">
                <a
                  title="Frati minori di Assisi"
                  target="_blank"
                  href="https://www.assisiofm.it/"
                  on=""
                  tabIndex="-1"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/frati_assisi-240x65.png"
                    alt="Frati minori di Assisi"
                  />
                </a>
              </li>
              <li className="ats-affiliati_item splide__slide" data-slick-index="3" aria-hidden="true" tabIndex="-1">
                <a
                  title="Christian Media Center"
                  target="_blank"
                  href="https://www.cmc-terrasanta.com/"
                  on=""
                  tabIndex="-1"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/Logo-CMC_color-240x120.png"
                    alt="Christian Media Center"
                  />
                </a>
              </li>
              <li className="ats-affiliati_item splide__slide" data-slick-index="4" aria-hidden="false" tabIndex="0">
                <a
                  title="terrasanta.net"
                  target="_blank"
                  href="http://www.terrasanta.net/"
                  on=""
                  tabIndex="0"
                  rel="noopener noreferrer"
                >
                  <img src="https://www.proterrasancta.org/wp-content/uploads/tsn-240x40.png" alt="terrasanta.net" />
                </a>
              </li>
              <li className="ats-affiliati_item splide__slide" data-slick-index="5" aria-hidden="true" tabIndex="-1">
                <a
                  title="Mosaic Centre Jericho"
                  target="_blank"
                  href="http://www.mosaiccentre-jericho.com/"
                  on=""
                  tabIndex="-1"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/Logo-Mosaic-Centre-Jericho_new-240x228.png"
                    alt="Mosaic Centre Jericho"
                  />
                </a>
              </li>
              <li className="ats-affiliati_item splide__slide" data-slick-index="6" aria-hidden="true" tabIndex="-1">
                <a
                  title="Custodia di Terra Santa"
                  target="_blank"
                  href="https://www.custodia.org"
                  on=""
                  tabIndex="-1"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/LOGO-CUSTODIA2014-240x97.png"
                    alt="Custodia di Terra Santa"
                  />
                </a>
              </li>
              <li className="ats-affiliati_item splide__slide" data-slick-index="7" aria-hidden="true" tabIndex="-1">
                <a
                  title="Terra Sancta Museum"
                  target="_blank"
                  href="https://www.terrasanctamuseum.org/"
                  on=""
                  tabIndex="-1"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/tsm-1-240x76.png"
                    alt="Terra Sancta Museum"
                  />
                </a>
              </li>
              <li className="ats-affiliati_item splide__slide" data-slick-index="8" aria-hidden="true" tabIndex="-1">
                <a
                  title="Frati minori di Assisi"
                  target="_blank"
                  href="https://www.assisiofm.it/"
                  on=""
                  tabIndex="-1"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/frati_assisi-240x65.png"
                    alt="Frati minori di Assisi"
                  />
                </a>
              </li>
              <li className="ats-affiliati_item splide__slide" data-slick-index="9" aria-hidden="true" tabIndex="-1">
                <a
                  title="Christian Media Center"
                  target="_blank"
                  href="https://www.cmc-terrasanta.com/"
                  on=""
                  tabIndex="-1"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/Logo-CMC_color-240x120.png"
                    alt="Christian Media Center"
                  />
                </a>
              </li>
              <li className="ats-affiliati_item splide__slide" data-slick-index="10" aria-hidden="true" tabIndex="-1">
                <a
                  title="terrasanta.net"
                  target="_blank"
                  href="http://www.terrasanta.net/"
                  on=""
                  tabIndex="-1"
                  rel="noopener noreferrer"
                >
                  <img src="https://www.proterrasancta.org/wp-content/uploads/tsn-240x40.png" alt="terrasanta.net" />
                </a>
              </li>
              <li className="ats-affiliati_item splide__slide" data-slick-index="11" aria-hidden="true" tabIndex="-1">
                <a
                  title="Mosaic Centre Jericho"
                  target="_blank"
                  href="http://www.mosaiccentre-jericho.com/"
                  on=""
                  tabIndex="-1"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.proterrasancta.org/wp-content/uploads/Logo-Mosaic-Centre-Jericho_new-240x228.png"
                    alt="Mosaic Centre Jericho"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
});

registerBlockType('proterrasancta/facebook-block', {
  title: __('Proterrasancta Facebook Block', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: '#007EA7',
    },
    backgroundColor: {
      type: 'string',
      default: '#d31418',
    },
    link: {
      type: 'string',
      default: '/campaigns',
    },
    lang: {
      type: 'string',
      default: 'it',
    },
  },
  edit: ({ className, attributes, setAttributes }) => {
    const onChangeLink = (value) => {
      setAttributes({ link: value });
    };

    const onChangeTextColor = (color) => {
      setAttributes({ textColor: color });
    };

    const onChangeBackgroundColor = (color) => {
      setAttributes({ backgroundColor: color });
    };

    const onChangeLang = (value) => {
      setAttributes({
        lang: value,
      });
    };

    return (
      <div className={className}>
        <InspectorControls>
          <SelectControl
            onChange={onChangeLang}
            value={attributes.lang}
            label={__('Seleziona una Lingua')}
            options={[
              {
                value: 'it',
                label: 'Italiano',
              },
              {
                value: 'en',
                label: 'Inglese',
              },
              {
                value: 'fr',
                label: 'Francese',
              },
              {
                value: 'es',
                label: 'Spagnolo',
              },
              {
                value: 'de',
                label: 'Tedesco',
              },
            ]}
          />
          <PanelColorSettings
            title={'Background Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.backgroundColor,
                onChange: onChangeBackgroundColor,
                label: __('Background Color'),
              },
            ]}
          />
          <PanelColorSettings
            title={'Title Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.textColor,
                onChange: onChangeTextColor,
                label: __('Title Color'),
              },
            ]}
          />
          <PanelBody title={'Special Settings'} initialOpen={false}>
            <PanelRow>
              <TextControl label="Link" value={attributes.link} onChange={onChangeLink} />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <div
          className="facebook-block"
          style={{
            backgroundImage: 'url(wp-content/themes/pro-terra-sancta-fixed/assets/images/logo-facebook-background.png)',
            backgroundColor: attributes.backgroundColor,
          }}
        >
          <div className="container pt-0">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 row">
                <div className="ml-auto row align-items-center">
                  <div>
                    <div className="ideas">BATTESIMO</div>
                    <div className="ideas">COMUNIONE</div>
                    <div className="ideas">CRESIMA</div>
                    <div className="ideas">MATRIMONIO</div>
                  </div>
                </div>
                <div>
                  <img src="/wp-content/themes/pro-terra-sancta/images/donazione-fb.png" alt="icon-facebook-donation" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <div className="title">Idee per sostenerci</div>
                  <div className="summary">
                    Attiva su FACEBOOK una campagna di donazione a nome Pro Terra Sancta per festeggiare un evento
                    importante. Includi il pulsante nel tuo post e invita alla raccolta i tuoi amici, parenti, colleghi,
                    contatti. Ogni euro raccolto potrà essere utile per sostenere un progetto di aiuto.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  save: ({ attributes }) => (
    <a href={attributes.link}>
      <div
        className="facebook-block"
        style={{
          backgroundImage: 'url(wp-content/themes/pro-terra-sancta-fixed/assets/images/logo-facebook-background.png)',
          backgroundColor: attributes.backgroundColor,
        }}
      >
        <div className="container pt-0">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 row no-gutters">
              <div className="m-auto ml-md-auto mr-md-0 row align-items-center ideas-group">
                <div>
                  <div className="ideas">{locale[attributes.lang].BATTESIMO}</div>
                  <div className="ideas">{locale[attributes.lang].COMUNIONE}</div>
                  <div className="ideas">{locale[attributes.lang].CRESIMA}</div>
                  <div className="ideas">{locale[attributes.lang].MATRIMONIO}</div>
                </div>
              </div>
              <div className="img-container">
                <img src="/wp-content/themes/pro-terra-sancta/images/donazione-fb.png" alt="icon-facebook-donation" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="left-text">
                <div className="title">{locale[attributes.lang].idee}</div>
                <div className="summary">{locale[attributes.lang].ideeSummmary}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  ),
});

registerBlockType('proterrasancta/ibreviary-block', {
  title: __('Proterrasancta iBreviary Block', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: '#007EA7',
    },
    backgroundColor: {
      type: 'string',
      default: '#d31418',
    },
    link: {
      type: 'string',
      default: '/campaigns',
    },
    lang: {
      type: 'string',
      default: 'it',
    },
  },
  edit: ({ className, attributes, setAttributes }) => {
    const onChangeLink = (value) => {
      setAttributes({ link: value });
    };

    const onChangeTextColor = (color) => {
      setAttributes({ textColor: color });
    };

    const onChangeBackgroundColor = (color) => {
      setAttributes({ backgroundColor: color });
    };

    // eslint-disable-next-line sonarjs/no-identical-functions
    const onChangeLang = (value) => {
      setAttributes({
        lang: value,
      });
    };

    return (
      <div className={className}>
        <InspectorControls>
          <SelectControl
            onChange={onChangeLang}
            value={attributes.lang}
            label={__('Seleziona una Lingua')}
            options={[
              {
                value: 'it',
                label: 'Italiano',
              },
              {
                value: 'en',
                label: 'Inglese',
              },
              {
                value: 'fr',
                label: 'Francese',
              },
              {
                value: 'es',
                label: 'Spagnolo',
              },
              {
                value: 'de',
                label: 'Tedesco',
              },
            ]}
          />
          <PanelColorSettings
            title={'Background Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.backgroundColor,
                onChange: onChangeBackgroundColor,
                label: __('Background Color'),
              },
            ]}
          />
          <PanelColorSettings
            title={'Title Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.textColor,
                onChange: onChangeTextColor,
                label: __('Title Color'),
              },
            ]}
          />
          <PanelBody title={'Special Settings'} initialOpen={false}>
            <PanelRow>
              <TextControl label="Link" value={attributes.link} onChange={onChangeLink} />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <div className="ibreviary-block" style={{ backgroundColor: attributes.backgroundColor }}>
          <div className="container pt-0">
            <div className="row align-items-center">
              <div className="col-12 col-md-2 row no-gutters">
                <div className="img-container m-auto m-md-0">
                  <img
                    src="/wp-content/themes/pro-terra-sancta/images/ibreviary-logo.png"
                    alt="icon-facebook-donation"
                  />
                </div>
              </div>
              <div className="col-12 col-md-8">
                <div className="left-text">
                  <div className="title">{locale[attributes.lang]['ibreviary-title']}</div>
                  <div className="summary">{locale[attributes.lang]['ibreviary-summary']}</div>
                </div>
              </div>
              <div className="col-12 col-md-2 row no-gutters">
                <div className="img-app m-auto m-md-0">
                  <img
                    src={`/wp-content/themes/ATS10/resources/img/badge_store/asb_${[attributes.lang]}.svg`}
                    alt="icon-facebook-donation"
                  />
                </div>
                <div className="img-app m-auto m-md-0">
                  <img
                    src={`/wp-content/themes/ATS10/resources/img/badge_store/psb_${[attributes.lang]}.svg`}
                    alt="icon-facebook-donation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  save: ({ attributes }) => (
    <a href={attributes.link}>
      <div className="ibreviary-block" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="container pt-0">
          <div className="row align-items-center">
            <div className="col-12 col-md-2 row no-gutters">
              <div className="img-container m-auto m-md-0">
                <img src="/wp-content/themes/pro-terra-sancta/images/ibreviary-logo.png" alt="icon-facebook-donation" />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="left-text">
                <div className="title">{locale[attributes.lang]['ibreviary-title']}</div>
                <div className="summary">{locale[attributes.lang]['ibreviary-summary']}</div>
              </div>
            </div>
            <div className="col-12 col-md-2 row no-gutters">
              <div className="img-app m-auto m-md-0">
                <img
                  src={`/wp-content/themes/ATS10/resources/img/badge_store/asb_${[attributes.lang]}.svg`}
                  alt="icon-facebook-donation"
                />
              </div>
              <div className="img-app m-auto m-md-0">
                <img
                  src={`/wp-content/themes/ATS10/resources/img/badge_store/psb_${[attributes.lang]}.svg`}
                  alt="icon-facebook-donation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  ),
});

registerBlockType('proterrasancta/newsletter-block', {
  title: __('Proterrasancta Newsletter Block', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: '#007EA7',
    },
    backgroundColor: {
      type: 'string',
      default: '#d31418',
    },
    link: {
      type: 'string',
      default: '/campaigns',
    },
    lang: {
      type: 'string',
      default: 'it',
    },
  },
  edit: ({ className, attributes, setAttributes }) => {
    const onChangeLink = (value) => {
      setAttributes({ link: value });
    };

    const onChangeTextColor = (color) => {
      setAttributes({ textColor: color });
    };

    const onChangeBackgroundColor = (color) => {
      setAttributes({ backgroundColor: color });
    };

    // eslint-disable-next-line sonarjs/no-identical-functions
    const onChangeLang = (value) => {
      setAttributes({
        lang: value,
      });
    };

    return (
      <div className={className}>
        <InspectorControls>
          <SelectControl
            onChange={onChangeLang}
            value={attributes.lang}
            label={__('Seleziona una Lingua')}
            options={[
              {
                value: 'it',
                label: 'Italiano',
              },
              {
                value: 'en',
                label: 'Inglese',
              },
              {
                value: 'fr',
                label: 'Francese',
              },
              {
                value: 'es',
                label: 'Spagnolo',
              },
              {
                value: 'de',
                label: 'Tedesco',
              },
            ]}
          />
          <PanelColorSettings
            title={'Background Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.backgroundColor,
                onChange: onChangeBackgroundColor,
                label: __('Background Color'),
              },
            ]}
          />
          <PanelColorSettings
            title={'Title Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.textColor,
                onChange: onChangeTextColor,
                label: __('Title Color'),
              },
            ]}
          />
          <PanelBody title={'Special Settings'} initialOpen={false}>
            <PanelRow>
              <TextControl label="Link" value={attributes.link} onChange={onChangeLink} />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <div className="newsletter-block" style={{ backgroundColor: attributes.backgroundColor }}>
          <div className="container pt-0">
            <div className="row align-items-center">
              <div className="col-12 col-md-2 d-flex">
                <div className="img-container m-auto">
                  <img src="/wp-content/themes/pro-terra-sancta/images/newsletter-envelope.png" alt="icon-newsletter" />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="left-text">
                  <div className="title">{locale[attributes.lang]['newsletter-title']}</div>
                  <div className="summary">{locale[attributes.lang]['newsletter-summary']}</div>
                </div>
              </div>
              <div className="col-12 col-md-6 row no-gutters">
                <div className="img-app m-auto m-md-0">[contact-form-7 id="119534" title="Newsletter"]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  save: ({ attributes }) => (
    <div>
      <div className="newsletter-block" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="container pt-0">
          <div className="row align-items-center">
            <div className="col-12 col-lg-2 d-flex">
              <div className="img-container m-auto">
                <img src="/wp-content/themes/pro-terra-sancta/images/newsletter-envelope.png" alt="icon-newsletter" />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="left-text">
                <div className="title">{locale[attributes.lang]['newsletter-title']}</div>
                <div className="summary">{locale[attributes.lang]['newsletter-summary']}</div>
              </div>
            </div>
            <div className="col-12 col-lg-6 row no-gutters">
              <div className="img-app m-auto m-md-0 w-100">[contact-form-7 id="119582" title="Newsletter"]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
});

registerBlockType('proterrasancta/row', {
  title: __('Proterrasancta Row', 'proterrasancta'),
  icon: 'editor-insertmore',
  category: 'proterrasancta',
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: '.title-row',
    },
    textColor: {
      type: 'string',
      default: 'white',
    },
    backgroundColor: {
      type: 'string',
      default: '#0B506B',
    },
  },
  edit: () => (
    <div className="py-2" style={{ borderColor: 'black', borderWidth: '2px', borderStyle: 'solid' }}>
      <InnerBlocks />
    </div>
  ),
  save: () => (
    <div className="row">
      <InnerBlocks.Content />
    </div>
  ),
});

registerBlockType('proterrasancta/divider', {
  title: __('Proterrasancta Divider', 'proterrasancta'),
  icon: 'minus',
  category: 'proterrasancta',
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'p',
    },
    backgroundColor: {
      type: 'string',
      default: '#0B506B',
    },
    textColor: {
      type: 'string',
      default: 'white',
    },
    alignment: {
      type: 'string',
      default: 'none',
    },
  },
  styles: [
    {
      name: 'default',
      label: __('Default'),
      isDefault: true,
    },
    {
      name: 'shadow',
      label: __('shadow'),
    },
  ],
  example: {
    attributes: {
      content: __('Buongiorno Proterrasancta', 'proterrasancta'),
      alignment: 'right',
    },
  },
  edit: ({ attributes, setAttributes, className }) => {
    const onChangeContent = (newContent) => {
      setAttributes({ content: newContent });
    };

    const onChangeAlignment = (newAlignment) => {
      setAttributes({
        alignment: newAlignment === undefined ? 'none' : newAlignment,
      });
    };

    const onChangeBackgroundColor = (color) => {
      setAttributes({ backgroundColor: color });
    };

    const onChangeTextColor = (color) => {
      setAttributes({ textColor: color });
    };

    return (
      <div>
        <BlockControls>
          <AlignmentToolbar value={attributes.alignment} onChange={onChangeAlignment} />
        </BlockControls>
        <InspectorControls>
          <PanelColorSettings
            title={'Background Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.backgroundColor,
                onChange: onChangeBackgroundColor,
                label: __('Background Color'),
              },
            ]}
          />
          <PanelColorSettings
            title={'Text Color'}
            colorSettings={[
              {
                colors: paletteProterrasancta,
                value: attributes.textColor,
                onChange: onChangeTextColor,
                label: __('Text Color'),
              },
            ]}
          />
        </InspectorControls>
        <RichText
          className={className}
          style={{
            textAlign: attributes.alignment,
            backgroundColor: attributes.backgroundColor,
            color: attributes.textColor,
          }}
          tagName="p"
          placeholder={__('Scrivi il testo …', 'proterrasancta')}
          onChange={onChangeContent}
          value={attributes.content}
        />
      </div>
    );
  },
  save: ({ attributes }) => (
    <RichText.Content
      style={{
        textAlign: attributes.alignment,
        backgroundColor: attributes.backgroundColor,
        color: attributes.textColor,
      }}
      tagName="p"
      value={attributes.content}
    />
  ),
});

registerBlockType('proterrasancta/video-cover', {
  title: 'Proterrasancta Video Cover',
  icon: 'admin-site',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#f2f2f2',
    },
    boxColor: {
      type: 'string',
      default: 'white',
    },
    minHeight: {
      type: 'string',
      default: '380',
    },
    padding: {
      type: 'string',
      default: '',
    },
    mediaID: {
      type: 'number',
    },
    mediaURL: {
      type: 'string',
    },
  },
  styles: [
    {
      name: 'default',
      label: __('Full Padding'),
      isDefault: true,
    },
    {
      name: 'small-padding',
      label: __('Small Padding'),
    },
  ],
  edit: editVideoCover,
  save: saveVideoCover,
});

registerBlockType('proterrasancta/project-slides-section', {
  title: 'Proterrasancta Project Slides Section',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#BBE5ED',
    },
    textColor: {
      type: 'string',
      default: 'white',
    },
    cardColor: {
      type: 'string',
      default: '#009846',
    },
    postType: {
      type: 'string',
      default: 'post',
    },
  },
  supports: {
    multiple: false,
  },
  edit: editProjectSlidesSection,
  save: saveProjectSlidesSection,
});

registerBlockType('proterrasancta/news-slides-section', {
  title: 'Proterrasancta News Slides Section',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#BBE5ED',
    },
    textColor: {
      type: 'string',
      default: 'white',
    },
    cardColor: {
      type: 'string',
      default: '#009846',
    },
    postType: {
      type: 'string',
      default: 'post',
    },
  },
  supports: {
    multiple: false,
  },
  edit: editNewsSlidesSection,
  save: saveNewsSlidesSection,
});

registerBlockType('proterrasancta/section-hero', {
  title: 'Proterrasancta Section Hero',
  icon: 'admin-site',
  category: 'proterrasancta',
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: '.section-title',
    },
    textContent: {
      type: 'string',
      source: 'html',
      selector: '.section-text',
    },
    linkText: {
      type: 'string',
      source: 'html',
      selector: '.link-text',
    },
    textColor: {
      type: 'string',
      default: '#B91521',
    },
    backgroundColor: {
      type: 'string',
      default: '#BFD7BA',
    },
    boxColor: {
      type: 'string',
      default: 'white',
    },
    padding: {
      type: 'string',
      default: '',
    },
    mediaID: {
      type: 'number',
    },
    mediaURL: {
      type: 'string',
    },
    name: {
      type: 'string',
      default: 'emergency',
    },
    link: {
      type: 'string',
      default: '/progetti',
    },
    sectionType: {
      type: 'string',
      default: 'emergencies',
    },
  },
  styles: [
    {
      name: 'default',
      label: __('Full Padding'),
      isDefault: true,
    },
    {
      name: 'small-padding',
      label: __('Small Padding'),
    },
  ],
  edit: editSectionHero,
  save: saveSectionHero,
});

registerBlockType('proterrasancta/news-list', {
  title: 'Proterrasancta News List',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#BBE5ED',
    },
    textColor: {
      type: 'string',
      default: 'white',
    },
    cardColor: {
      type: 'string',
      default: '#009846',
    },
    categoryId: {
      type: 'number',
      default: '-1',
    },
    postType: {
      type: 'string',
      default: 'post',
    },
  },
  supports: {
    multiple: false,
  },
  edit: editNewsList,
  save: saveNewsList,
});

registerBlockType('proterrasancta/cover-section', {
  title: 'Proterrasancta Cover Section',
  icon: 'admin-home',
  category: 'proterrasancta',
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: '.cover-section-title',
    },
    textContent: {
      type: 'string',
      source: 'text',
      selector: '.cover-section-text',
    },
    backgroundColor: {
      type: 'string',
      default: 'white',
    },
    textColor: {
      type: 'string',
      default: 'white',
    },
    mediaID: {
      type: 'number',
    },
    mediaURL: {
      type: 'string',
    },
  },
  edit: editCoverSection,
  save: saveCoverSection,
});
