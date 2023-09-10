import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, MediaUpload, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editBigHeroCallBiggerImage = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeHeading = (newContent) => {
    setAttributes({ heading: newContent });
  };

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeName = (value) => {
    setAttributes({ name: value });
  };

  const onChangeLink = (value) => {
    setAttributes({ link: value });
  };

  const onChangeButtonText = (value) => {
    setAttributes({ btnText: value });
  };

  const onChangeSummaryLeft = (newContent) => {
    setAttributes({ summaryLeft: newContent });
  };

  const onChangeSummaryRight = (newContent) => {
    setAttributes({ summaryRight: newContent });
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
        <PanelBody title={'Special Settings'} initialOpen={false}>
          <PanelRow>
            <TextControl label="Anchor Name" value={attributes.name} onChange={onChangeName} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Link" value={attributes.link} onChange={onChangeLink} />
          </PanelRow>
          <PanelRow>
            <TextControl label="button text" value={attributes.btnText} onChange={onChangeButtonText} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-12">
          <RichText
            className="hero-heading"
            style={{ color: attributes.textColor }}
            tagName="div"
            placeholder={__('Heading …', 'proterrasancta')}
            onChange={onChangeHeading}
            value={attributes.heading}
          />
          <RichText
            className="big-hero-title"
            style={{ color: attributes.textColor }}
            tagName="div"
            placeholder={__('Title …', 'proterrasancta')}
            onChange={onChangeTitle}
            value={attributes.title}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="hero-summary-left"
            tagName="div"
            placeholder={__('Summary Left …', 'proterrasancta')}
            onChange={onChangeSummaryLeft}
            value={attributes.summaryLeft}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="hero-summary-right"
            tagName="div"
            placeholder={__('Summary Right …', 'proterrasancta')}
            onChange={onChangeSummaryRight}
            value={attributes.summaryRight}
          />
        </div>
        <div className="col-6 d-flex">
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
  );
};

export const saveBigHeroCallBiggerImage = ({ attributes }) => (
  <Fragment>
    <div id={attributes.name} style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        <div className="row py-5">
          <RichText.Content
            className="col-12 hero-heading"
            tagName="div"
            value={attributes.heading}
            style={{ color: attributes.textColor }}
          />
          <RichText.Content
            className="col-12 big-hero-title"
            tagName="div"
            value={attributes.title}
            style={{ color: attributes.textColor }}
          />
          <RichText.Content
            className="col-12 col-md-1 hero-summary-left text-center text-md-left"
            tagName="div"
            value={attributes.summaryLeft}
          />
          <div className="col-12 col-md-10 hero-image d-flex">
            <img className="m-auto" src={attributes.mediaURL} alt={__('Background Image', 'proterrasancta')} />
          </div>
          <RichText.Content
            className="col-12 col-md-1 hero-summary-right text-center text-md-right"
            tagName="div"
            value={attributes.summaryRight}
          />
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
