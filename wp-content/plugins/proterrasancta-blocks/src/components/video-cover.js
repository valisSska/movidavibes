import React, { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } from '@wordpress/block-editor';
import { Button, TextControl, PanelRow, PanelBody } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editVideoCover = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeBoxColor = (color) => {
    setAttributes({ boxColor: color });
  };

  const onChangeMinHeight = (size) => {
    setAttributes({ minHeight: size });
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
            <TextControl label="Min Height Px" value={attributes.minHeight} onChange={onChangeMinHeight} />
            <TextControl label="Font Size Px" value={attributes.fontSize} onChange={onChangeMinHeight} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-6 d-flex">
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="video"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID ? (
                  __('Upload Video', 'ce-lab')
                ) : (
                  <video playsinline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={mediaURL} type="video/mp4" />
                  </video>
                )}
              </Button>
            )}
          />
        </div>
        <div className="col-6 summary">
          <InnerBlocks />
        </div>
      </div>
    </div>
  );
};

export const saveVideoCover = ({ attributes }) => (
  <div style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="overlay"></div>
    <video playsinline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
      <source src={attributes.mediaURL} type="video/mp4" />
    </video>
    <div className="container h-100">
      <div className="d-flex h-100 text-center align-items-center">
        <div className="w-100 text-white">
          <h1 className="display-3">{attributes.title}</h1>
          <p className="lead mb-0">
            {' '}
            <InnerBlocks.Content />{' '}
          </p>
          <button type="button" className="btn btn-danger">
            Discover
          </button>
          <p className="lead mb-0">
            <i className="fa fa-angle-double-down" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
);
