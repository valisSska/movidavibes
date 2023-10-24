import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, MediaUpload, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import paletteRovagnatiUS from './palette-proterrasancta';

export const editMainHeroImage = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeLink = (value) => {
    setAttributes({ link: value });
  };

  const onChangeButtonText = (value) => {
    setAttributes({ btnText: value });
  };

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onSelectImage = (media) => {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id,
    });
  };

  return (
    <div className={className}>
      <InspectorControls>
        <PanelColorSettings
          title={'Background Color'}
          colorSettings={[
            {
              colors: paletteRovagnatiUS,
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
              colors: paletteRovagnatiUS,
              value: attributes.textColor,
              onChange: onChangeTextColor,
              label: __('Text Color'),
            },
          ]}
        />
        <PanelBody title={'Special Settings'} initialOpen={false}>
          <PanelRow>
            <TextControl label="Link" value={attributes.link} onChange={onChangeLink} />
          </PanelRow>
          <PanelRow>
            <TextControl label="button text" value={attributes.btnText} onChange={onChangeButtonText} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="row no-gutters">
          <div className="col-12 d-block p-3" style={{ backgroundColor: attributes.boxColor }}>
            <RichText
              className="title"
              style={{ color: attributes.textColor }}
              tagName="div"
              placeholder={__('Title …', 'proterrasancta')}
              onChange={onChangeTitle}
              value={attributes.title}
            />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-12 d-flex">
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes="image"
              value={mediaID}
              render={({ open }) => (
                <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                  {!mediaID ? (
                    __('Upload Image', 'ce-lab')
                  ) : (
                    <img src={mediaURL} alt={__('Background Image', 'ce-lab')} />
                  )}
                </Button>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const saveMainHeroImage = ({ attributes }) => (
  <Fragment>
    <div id="main-hero-image" style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        <div className="row py-5 no-gutters overflow-hidden">
          <div className="col-12 col-md-12 d-flex">
            <div className="m-auto">
              <RichText.Content
                className="title"
                tagName="div"
                value={attributes.title}
                style={{ color: attributes.textColor }}
              />
            </div>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-12 col-md-12 hero-image d-flex">
            <img className="m-auto" src={attributes.mediaURL} alt={__('Main Image', 'proterrasancta')} />
          </div>
          <div className={`col-12 py-3 ${attributes.btnText ? 'd-flex' : 'd-none'}`}>
            <a href={attributes.link} className="btn bg-secondary text-white mx-auto">
              {attributes.btnText}
            </a>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
