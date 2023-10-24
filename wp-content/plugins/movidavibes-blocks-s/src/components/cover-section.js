import React, { __ } from '@wordpress/i18n';
import { RichText, InspectorControls, PanelColorSettings, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editCoverSection = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeTextContent = (newContent) => {
    setAttributes({ textContent: newContent });
  };

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onSelectImage = (media) => {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id,
    });
  };

  const ButtonUploadImage = ({ open }) => (
    <Button className="button button-large" onClick={open}>
      {__('Upload Image', 'ce-lab')}
    </Button>
  );

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
          title={'Text Color'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.textColor,
              onChange: onChangeTextColor,
              label: __('Text Color'),
            },
          ]}
        />
      </InspectorControls>
      <div
        className="row no-gutters"
        style={{
          backgroundImage: `url(${mediaURL})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: attributes.backgroundColor,
        }}
      >
        <div className="col-12">
          <MediaUpload onSelect={onSelectImage} allowedTypes="image" value={mediaID} render={ButtonUploadImage} />
        </div>
        <div className="col-12">
          <RichText
            className="cover-section-title"
            style={{
              color: attributes.textColor,
              flexGrow: 1,
            }}
            tagName="div"
            placeholder={__('Title …', 'ce-lab')}
            onChange={onChangeTitle}
            value={attributes.title}
          />
        </div>
        <div className="col-12">
          <RichText
            className="cover-section-text"
            style={{
              color: attributes.textColor,
              flexGrow: 1,
            }}
            tagName="div"
            placeholder={__('Text …', 'ce-lab')}
            onChange={onChangeTextContent}
            value={attributes.textContent}
          />
        </div>
      </div>
    </div>
  );
};

export const saveCoverSection = ({ attributes }) => (
  <div
    style={{
      backgroundImage: `url(${attributes.mediaURL})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundColor: attributes.backgroundColor,
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex" style={{ minHeight: '350px' }}>
          <div className="cover-text-block m-auto text-center">
            <RichText.Content
              style={{ color: attributes.textColor }}
              className="cover-section-title"
              tagName="div"
              value={attributes.title}
            />
            <div className="cover-section-text" style={{ color: attributes.textColor }}>
              <RichText.Content tagName="div" value={attributes.textContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
