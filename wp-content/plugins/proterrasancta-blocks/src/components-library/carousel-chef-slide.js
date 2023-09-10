import React, { __ } from '@wordpress/i18n';
import { MediaUpload, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export const editCarouselChefSlide = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeSummary = (newContent) => {
    setAttributes({ summary: newContent });
  };

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
                {!mediaID ? __('Upload Image', 'ce-lab') : <img src={mediaURL} alt="" />}
              </Button>
            )}
          />
        </div>
        <div className="col-6">
          <RichText
            className="values-summary"
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

export const saveCarouselChefSlide = ({ attributes }) => (
  <div className="carousel-item">
    <img src={attributes.mediaURL} alt={''} />
    <div className="carousel-caption">
      <RichText.Content className="values-summary" tagName="div" value={attributes.summary} />
    </div>
  </div>
);
