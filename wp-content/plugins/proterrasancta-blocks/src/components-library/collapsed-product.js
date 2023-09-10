import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editCollapsedProduct = ({ className, attributes, setAttributes }) => {
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

  const onChangeProductLeft = (value) => {
    setAttributes({ productLeft: value });
  };

  const onChangeProductRight = (value) => {
    setAttributes({ productRight: value });
  };

  const onChangeSummary = (newContent) => {
    setAttributes({ summary: newContent });
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
              colors: paletteProterrasancta,
              value: attributes.backgroundColor,
              onChange: onChangeBackgroundColor,
              label: __('Background Color'),
            },
          ]}
        />
        <PanelBody title={'Special Settings'} initialOpen={false}>
          <PanelRow>
            <TextControl label="Anchor Name" value={attributes.name} onChange={onChangeName} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Left Arrow" value={attributes.productLeft} onChange={onChangeProductLeft} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Right Arrow" value={attributes.productRight} onChange={onChangeProductRight} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
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
        <div className="col-6 p-3">
          <RichText
            className="product-heading"
            tagName="div"
            placeholder={__('Summary Title …', 'proterrasancta')}
            onChange={onChangeHeading}
            value={attributes.heading}
          />
          <RichText
            className="product-title"
            tagName="div"
            placeholder={__('Title …', 'proterrasancta')}
            onChange={onChangeTitle}
            value={attributes.title}
          />
          <RichText
            className="product-summary"
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

export const saveCollapsedProduct = ({ attributes }) => (
  <Fragment>
    <div
      className={`col-12 collapse animated fadeInLeft product-${attributes.name}`}
      style={{ backgroundColor: attributes.backgroundColor }}
      data-parent=".accordion"
    >
      <div className="row py-5">
        <div className="col-12 col-md-6 collapsible-product-image">
          <img src={attributes.mediaURL} alt={__('Background Image', 'proterrasancta')} />
        </div>
        <div className="col-12 col-md-6 position-relative">
          <RichText.Content className="product-heading" tagName="div" value={attributes.heading} />
          <RichText.Content className="product-title" tagName="div" value={attributes.title} />
          <RichText.Content className="product-summary" tagName="div" value={attributes.summary} />
          <a className="product-collapse-btn" data-toggle="collapse" data-target={`.product-${attributes.name}`}>
            <i className="fal fa-times" />
          </a>
        </div>
        <div className="col-12 directions row justify-content-center">
          <div className="col-6">
            <a
              className="product-collapse-btn"
              data-toggle="collapse"
              data-target={`.product-${attributes.productLeft}`}
            >
              <i className="far fa-chevron-left" />
            </a>
          </div>
          <div className="col-6">
            <a
              className="product-collapse-btn"
              data-toggle="collapse"
              data-target={`.product-${attributes.productRight}`}
              style={{ left: '20px' }}
            >
              <i className="far fa-chevron-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
