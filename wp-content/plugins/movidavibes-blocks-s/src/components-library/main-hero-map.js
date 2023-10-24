import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, MediaUpload, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editMainHeroMap = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;
  const { mediaIDMobile, mediaURLMobile } = attributes;

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
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

  const onSelectImageMobile = (media) => {
    setAttributes({
      mediaURLMobile: media.url,
      mediaIDMobile: media.id,
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
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="row no-gutters">
          <div className="col-12 d-block p-3" style={{ backgroundColor: attributes.boxColor }}>
            <RichText
              className="title"
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
          <div className="col-12 d-flex">
            <MediaUpload
              onSelect={onSelectImageMobile}
              allowedTypes="image"
              value={mediaIDMobile}
              render={({ open }) => (
                <Button className={mediaIDMobile ? 'image-button' : 'button button-large'} onClick={open}>
                  {!mediaIDMobile ? (
                    __('Upload Image Mobile', 'ce-lab')
                  ) : (
                    <img src={mediaURLMobile} alt={__('Background Image Mobile', 'ce-lab')} />
                  )}
                </Button>
              )}
            />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-12 col-md-6 d-flex">
            <InnerBlocks />
          </div>
        </div>
      </div>
    </div>
  );
};

export const saveMainHeroMap = ({ attributes }) => (
  <Fragment>
    <div id="main-hero-map" style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        <div className="row py-5 no-gutters overflow-hidden">
          <div className="col-12 col-md-12 d-flex">
            <div className="m-auto">
              <RichText.Content className="title" tagName="div" value={attributes.title} />
            </div>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-12 col-md-12 hero-image d-flex">
            <div
              className="simple-box position-relative"
              style={{
                backgroundImage: `url(${attributes.mediaURL})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="container-text-box">
                <InnerBlocks.Content />
              </div>
              <img src={attributes.mediaURLMobile} className="image-mobile" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
