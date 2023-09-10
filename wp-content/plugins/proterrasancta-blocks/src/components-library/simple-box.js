import React, { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editSimpleBox = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeSummary = (newContent) => {
    setAttributes({ summary: newContent });
  };

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeBackgroundSize = (size) => {
    setAttributes({ backgroundSize: size });
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
            <TextControl label="Image Size" value={attributes.backgroundSize} onChange={onChangeBackgroundSize} />
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
                {!mediaID ? __('Upload Image', 'ce-lab') : <img src={mediaURL} alt="" />}
              </Button>
            )}
          />
        </div>
        <div className="col-6">
          <RichText
            className="values-title"
            tagName="div"
            placeholder={__('Title …', 'proterrasancta')}
            onChange={onChangeTitle}
            value={attributes.title}
          />
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

export const saveSimpleBox = ({ attributes }) => (
  <div className="col-12 col-lg-4 py-4">
    <div
      className="simple-box position-relative"
      style={{
        backgroundColor: attributes.backgroundColor,
        backgroundImage: `url(${attributes.mediaURL})`,
        backgroundSize: attributes.backgroundSize,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
    <div>
      <RichText.Content className="values-title" tagName="div" value={attributes.title} />
      <RichText.Content className="values-summary" tagName="div" value={attributes.summary} />
    </div>
  </div>
);
