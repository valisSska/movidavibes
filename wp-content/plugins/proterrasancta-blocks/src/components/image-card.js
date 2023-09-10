import React, { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { RichText, InspectorControls, PanelColorSettings, MediaUpload } from '@wordpress/block-editor';
import paletteProterasancta from './palette-proterrasancta';

export const editImageCard = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeSubTitle = (newContent) => {
    setAttributes({ subTitle: newContent });
  };

  const onChangeTextContent = (newContent) => {
    setAttributes({ textContent: newContent });
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

  return (
    <div className={className}>
      <InspectorControls>
        <PanelColorSettings
          title={'Background Color'}
          colorSettings={[
            {
              colors: paletteProterasancta,
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
              colors: paletteProterasancta,
              value: attributes.textColor,
              onChange: onChangeTextColor,
              label: __('Text Color'),
            },
          ]}
        />
      </InspectorControls>
      <div style={{ backgroundColor: attributes.backgroundColor, color: attributes.textColor }}>
        <div className="history-block">
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID ? (
                  __('Upload Image', 'rovagnati-us')
                ) : (
                  <img src={mediaURL} alt={__('Icon Image', 'rovagnati-us')} />
                )}
              </Button>
            )}
          />
          <RichText
            className="title text-uppercase"
            tagName="div"
            placeholder={__('Title …', 'rovagnati-us')}
            onChange={onChangeTitle}
            value={attributes.title}
          />
          <RichText
            className="sub-title text-uppercase"
            tagName="div"
            placeholder={__('Summary …', 'rovagnati-us')}
            onChange={onChangeSubTitle}
            value={attributes.subTitle}
          />
          <RichText
            className="text-content"
            tagName="div"
            placeholder={__('Content …', 'rovagnati-us')}
            onChange={onChangeTextContent}
            value={attributes.textContent}
          />
        </div>
      </div>
    </div>
  );
};

export const saveImageCard = ({ attributes }) => (
  <div
    style={{
      backgroundColor: attributes.backgroundColor,
      color: attributes.textColor,
      height: '100%',
      backgroundImage: `url(${attributes.mediaURL})`,
    }}
  >
    <div className="history-block">
      <div className="container">
        <div className="row p-5 text-center">
          <div className="col-12">
            <div className="title font-weight-bold text-uppercase">
              <RichText.Content value={attributes.title} />
            </div>
          </div>
          <div className="col-12">
            <div className="sub-title text-uppercase">
              <RichText.Content value={attributes.subTitle} />
            </div>
          </div>
          <div className="col-12">
            <div className="text-content font-weight-normal">
              <RichText.Content value={attributes.textContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
