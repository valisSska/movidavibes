import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export const editQualitySeparatorImage = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onSelectImage = (media) => {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id,
    });
  };

  return (
    <div className={className}>
      <div className="row no-gutters">
        <div className="col-6 d-flex">
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID ? __('Upload Image', 'ce-lab') : <img src={mediaURL} alt={__('Quality Image', 'ce-lab')} />}
              </Button>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export const saveQualitySeparatorImage = ({ attributes }) => (
  <Fragment>
    <div id="separator-image" style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 col-md-12 d-flex">
            <img className="m-auto" src={attributes.mediaURL} alt={__('Background Image', 'proterrasancta')} />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
