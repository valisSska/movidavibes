import React, { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button, TextControl, PanelRow, PanelBody, SelectControl } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

const getBackgroundColor = (sectionType) => {
  switch (sectionType) {
    case 'emergencies':
      return '#D31418';
    case 'projects':
      return '#D31418';
    case 'itinerary':
      return '#D31418';
    case 'education':
      return '#374856';
    case 'conservazione':
      return '#E26E0E';
    case 'campaigns':
      return '#E26E0E';
    default:
      return '#D31418';
  }
};

const getSectionIcon = (sectionType) => {
  switch (sectionType) {
    case 'emergencies':
      return 'icona-emergenze';
    case 'projects':
      return 'icona-progetti';
    case 'itinerary':
      return 'icona-itinerari';
    case 'education':
      return 'icona-istruzione';
    case 'conservazione':
      return 'icona-conservazione';
    case 'campaigns':
      return 'icona-campagne';
    default:
      return 'icona-emergenze';
  }
};

export const editSectionHero = ({ className, attributes, setAttributes }) => {
  const { sectionType, mediaID, mediaURL } = attributes;

  const onChangeTextContent = (newContent) => {
    setAttributes({ textContent: newContent });
  };

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeLinkText = (newContent) => {
    setAttributes({ linkText: newContent });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeBoxColor = (color) => {
    setAttributes({ boxColor: color });
  };

  const onChangeName = (value) => {
    setAttributes({ name: value });
  };

  const onChangeLink = (value) => {
    setAttributes({ link: value });
  };

  const onSelectImage = (media) => {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id,
    });
  };

  const onChangeSectionType = (value) => {
    setAttributes({
      sectionType: value,
    });
  };

  return (
    <div className={className}>
      <InspectorControls>
        <SelectControl
          onChange={onChangeSectionType}
          value={sectionType}
          label={__('Seleziona tipo sezione')}
          options={[
            {
              value: 'emergencies',
              label: 'Emergenze',
            },
            {
              value: 'conservazione',
              label: 'Conservazione',
            },
            {
              value: 'education',
              label: 'Educazione',
            },
            {
              value: 'campaigns',
              label: 'Campagne',
            },
            {
              value: 'itinerary',
              label: 'Itinerari',
            },
            {
              value: 'projects',
              label: 'Progetti',
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
        <PanelColorSettings
          title={'Box Color'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.boxColor,
              onChange: onChangeBoxColor,
              label: __('Box Color'),
            },
          ]}
        />
        <PanelBody title={'Special Settings'} initialOpen={false}>
          <PanelRow>
            <TextControl label="Anchor Name" value={attributes.name} onChange={onChangeName} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Link" value={attributes.link} onChange={onChangeLink} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="top-hero-box" style={{ backgroundColor: getBackgroundColor(sectionType) }}>
        <div className="container pt-0">
          <div className="row">
            <div className="col-12 col-md-6 row no-gutters align-items-center justify-content-center justify-content-md-start">
              <div>
                <img
                  className="icon-hero-box"
                  src={`/wp-content/themes/pro-terra-sancta/images/${getSectionIcon(sectionType)}.png`}
                  alt="icon-campaign"
                />
              </div>
              <div>
                <div className="section-title">
                  <RichText
                    className="section-title"
                    style={{ flexGrow: 1 }}
                    tagName="div"
                    placeholder={__('Title …', 'ce-lab')}
                    onChange={onChangeTitle}
                    value={attributes.title}
                  />
                </div>
                <div>
                  <RichText
                    className="section-text"
                    style={{ flexGrow: 1 }}
                    tagName="div"
                    placeholder={__('Content …', 'ce-lab')}
                    onChange={onChangeTextContent}
                    value={attributes.textContent}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 align-items-center row no-gutters">
              <div className="help-text m-auto ml-md-auto mr-md-0">
                <RichText
                  className="link-text"
                  style={{ flexGrow: 1 }}
                  tagName="span"
                  placeholder={__('Content …', 'ce-lab')}
                  onChange={onChangeLinkText}
                  value={attributes.linkText}
                />
                <i className="ml-2 fas fa-caret-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-box-image">
        <MediaUpload
          onSelect={onSelectImage}
          allowedTypes="image"
          value={mediaID}
          render={({ open }) => (
            <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
              {!mediaID ? __('Upload Image', 'ce-lab') : <img src={mediaURL} alt={__('Background Image', 'ce-lab')} />}
            </Button>
          )}
        />
      </div>
    </div>
  );
};

export const saveSectionHero = ({ attributes }) => (
  <div id={attributes.name} style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="top-hero-box" style={{ backgroundColor: getBackgroundColor(attributes.sectionType) }}>
      <div className="container pt-0">
        <div className="row">
          <div className="col-12 col-md-6 row no-gutters align-items-center justify-content-center justify-content-md-start">
            <div>
              <img
                className="icon-hero-box"
                src={`/wp-content/themes/pro-terra-sancta/images/${getSectionIcon(attributes.sectionType)}.png`}
                alt="icon-campaign"
              />
            </div>
            <div>
              <div className="section-title animate-up">
                <RichText.Content tagName="div" value={attributes.title} />
              </div>
              <div>
                <RichText.Content
                  className="section-text animate-up-delay-100"
                  tagName="div"
                  value={attributes.textContent}
                />
              </div>
            </div>
          </div>
          <a href={attributes.link} className="col-12 col-md-6 align-items-center row no-gutters">
            <div className="help-text m-auto ml-md-auto mr-md-0 animate-up-delay-100">
              <RichText.Content className="link-text" tagName="span" value={attributes.linkText} />
              <i className="ml-2 fas fa-caret-down" />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="hero-box-image">
      <img src={attributes.mediaURL} alt={__('Hero Image', 'proterrasancta')} />
    </div>
  </div>
);
