import React, { __ } from '@wordpress/i18n';
import { MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export const editCarouselProductSlide = ({ className, attributes, setAttributes }) => {
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
        <div className="col-12 d-flex">
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID ? __('Upload Image', 'ce-lab') : <img src={mediaURL} alt="" />}
              </Button>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export const saveCarouselProductSlide = ({ attributes }) => (
  <div className="carousel-item">
    <img src={attributes.mediaURL} alt={''} />
  </div>
);
