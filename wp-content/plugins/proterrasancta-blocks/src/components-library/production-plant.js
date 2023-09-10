import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editProductionPlant = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeSummaryTitle = (newContent) => {
    setAttributes({ summaryTitle: newContent });
  };

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeName = (value) => {
    setAttributes({ name: value });
  };

  const onChangeSummary = (newContent) => {
    setAttributes({ summary: newContent });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeBoxColor = (color) => {
    setAttributes({ boxColor: color });
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
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-12">
          <RichText
            className="plant-title"
            tagName="div"
            placeholder={__('Titolo …', 'proterrasancta')}
            onChange={onChangeTitle}
            value={attributes.title}
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
        <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="summary-title"
            tagName="div"
            placeholder={__('Summary Title …', 'proterrasancta')}
            onChange={onChangeSummaryTitle}
            value={attributes.summaryTitle}
          />
          <RichText
            className="plant-summary"
            tagName="div"
            placeholder={__('Summary …', 'proterrasancta')}
            onChange={onChangeSummary}
            value={attributes.summary}
          />
        </div>
      </div>
    </div>
  );
};

export const saveProductionPlant = ({ attributes }) => (
  <Fragment>
    <div id={attributes.name} style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        <div className="row">
          <div className="col-12 plant-title">
            <RichText.Content className="col-12" value={attributes.title} />
          </div>
        </div>
      </div>
    </div>
    <div style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        <div className="row no-gutters overflow-hidden">
          <div className="col-12 col-md-6 plant-image">
            <img src={attributes.mediaURL} alt={__('Background Image', 'proterrasancta')} />
          </div>
          <div className="col-12 col-md-6 plant-text d-flex" style={{ backgroundColor: attributes.boxColor }}>
            <div className="fit-content plant-right-box">
              <RichText.Content className="summary-title" tagName="div" value={attributes.summaryTitle} />
              <RichText.Content className="plant-summary" tagName="div" value={attributes.summary} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
