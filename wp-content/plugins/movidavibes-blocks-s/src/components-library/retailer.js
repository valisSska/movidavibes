import React, { __ } from '@wordpress/i18n';
import { RichText, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';

export const editRetailer = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeName = (newContent) => {
    setAttributes({ name: newContent });
  };

  const onChangeContent = (newContent) => {
    setAttributes({ content: newContent });
  };

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
        <div className="col-4 shadow-md " style={{ padding: '20px', backgroundColor: 'white' }}>
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
        <div className="col-8">
          <RichText
            className="name-retailer"
            tagName="div"
            placeholder={__('Nome …', 'proterrasancta')}
            onChange={onChangeName}
            value={attributes.name}
          />
          <RichText
            className="content-retailer"
            tagName="div"
            placeholder={__('Content …', 'proterrasancta')}
            onChange={onChangeContent}
            value={attributes.content}
          />
        </div>
      </div>
    </div>
  );
};

export const saveRetailer = ({ attributes }) => (
  <div className="col-12 mb-5 px-0">
    <div className="container px-0">
      <div className="row no-gutters">
        <div className="col-5 col-md-6 d-flex">
          <div
            className="shadow-md d-flex where-to-buy-square m-auto"
            style={{ padding: '20px', backgroundColor: 'white' }}
          >
            <img className="m-auto" src={attributes.mediaURL} alt={attributes.mediaURL} />
          </div>
        </div>
        <div className="col-7 col-md-6">
          <div className="name-retailer pb-0 pb-md-3 pt-3 pt-md-0">{attributes.name}</div>
          <div className="content-retailer">{attributes.content}</div>
          {attributes.link ? (
            <a className="link-retailer" href={attributes.link} target="_blank" rel="noopener noreferrer">
              {attributes.link}
            </a>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  </div>
);
