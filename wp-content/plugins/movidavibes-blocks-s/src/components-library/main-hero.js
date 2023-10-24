import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, MediaUpload, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import paletteRovagnatiUS from './palette-proterrasancta';

export const editMainHero = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeSummaryTitle1 = (newContent) => {
    setAttributes({ summaryTitle1: newContent });
  };

  const onChangeSummaryTitle2 = (newContent) => {
    setAttributes({ summaryTitle2: newContent });
  };

  const onChangeSummary = (newContent) => {
    setAttributes({ summary: newContent });
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
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="row no-gutters">
          <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
            <RichText
              className="summary-title1"
              tagName="div"
              placeholder={__('Summary Title 1 …', 'proterrasancta')}
              onChange={onChangeSummaryTitle1}
              value={attributes.summaryTitle1}
            />
            <RichText
              className="summary-title2"
              tagName="div"
              placeholder={__('Summary Title 2 …', 'proterrasancta')}
              onChange={onChangeSummaryTitle2}
              value={attributes.summaryTitle2}
            />
          </div>
          <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
            <RichText
              className="range-summary"
              tagName="div"
              placeholder={__('Summary …', 'proterrasancta')}
              onChange={onChangeSummary}
              value={attributes.summary}
            />
          </div>
        </div>
        <div className="row no-gutters">
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
    </div>
  );
};

export const saveMainHero = ({ attributes }) => (
  <Fragment>
    <div id={attributes.name} style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        <div className="row py-5 no-gutters overflow-hidden">
          <div className="col-12 col-md-6 title-left-container d-flex">
            <div className="title-left">
              <RichText.Content className="summary-title1" tagName="div" value={attributes.summaryTitle1} />
              <RichText.Content className="summary-title2" tagName="div" value={attributes.summaryTitle2} />
            </div>
          </div>
          <div className="col-12 col-md-6 summery-right-container d-flex">
            <div className="fit-content">
              <RichText.Content className="range-summary" tagName="div" value={attributes.summary} />
            </div>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-12 hero-image d-flex d-lg-none">
            <img className="m-auto" src={attributes.mediaURL} alt={__('Background Image', 'proterrasancta')} />
          </div>
          <RichText.Content
            className="col-6 col-lg-3 hero-summary-left text-left"
            tagName="div"
            value={attributes.summaryLeft}
          />
          <div className="col-6 hero-image d-none d-lg-flex">
            <img className="m-auto" src={attributes.mediaURL} alt={__('Background Image', 'proterrasancta')} />
          </div>
          <RichText.Content
            className="col-6 col-lg-3 hero-summary-right text-left text-lg-right"
            tagName="div"
            value={attributes.summaryRight}
          />
        </div>
      </div>
    </div>
  </Fragment>
);
