import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';

export const editProductCard = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeName = (value) => {
    setAttributes({ name: value });
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
        <PanelBody title={'Special Settings'} initialOpen={false}>
          <PanelRow>
            <TextControl label="Anchor Name" value={attributes.name} onChange={onChangeName} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
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
  );
};

export const saveProductCard = ({ attributes }) => (
  <Fragment>
    <a
      className="col-12 col-md-4 product-image collapsed"
      data-toggle="collapse"
      data-target={`.product-${attributes.name}`}
    >
      <img src={attributes.mediaURL} alt={__('Background Image', 'proterrasancta')} />
    </a>
  </Fragment>
);
