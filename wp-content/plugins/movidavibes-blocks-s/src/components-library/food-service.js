import React, { __ } from '@wordpress/i18n';
import { MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';

export const editFoodService = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeLink = (newContent) => {
    setAttributes({ link: newContent });
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
            <TextControl label="Link" value={attributes.link} onChange={onChangeLink} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row">
        <div className="col-6 shadow-md " style={{ padding: '20px', backgroundColor: 'white' }}>
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID ? 'image-team' : 'button button-large'} onClick={open}>
                {__('Upload Image', 'proterrasancta')}
                {!mediaID ? (
                  __('Upload Image', 'proterrasancta')
                ) : (
                  <img src={mediaURL} alt={__('Team Image', 'proterrasancta')} />
                )}
              </Button>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export const saveFoodService = ({ attributes }) => (
  <div className="col-6 col-md-4 col-lg-3">
    <div className="h-100 p-3">
      <div className="row no-gutters h-100">
        <div className="col-12 d-flex">
          <div className="shadow-md where-to-buy-square mx-auto" style={{ padding: '20px', backgroundColor: 'white' }}>
            <a className="link-retailer h-100 d-flex" href={attributes.link} target="_blank" rel="noopener noreferrer">
              <img className="m-auto" src={attributes.mediaURL} alt={attributes.mediaURL} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
