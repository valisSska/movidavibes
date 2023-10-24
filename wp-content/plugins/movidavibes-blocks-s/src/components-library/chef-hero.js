import React, { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button, TextControl, PanelRow, PanelBody } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editChefHero = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeTextContent = (newContent) => {
    setAttributes({ textContent: newContent });
  };

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeBoxColor = (color) => {
    setAttributes({ boxColor: color });
  };

  const onChangeMinHeight = (size) => {
    setAttributes({ minHeight: size });
  };

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
            <TextControl label="Anchor Name" value={attributes.name} onChange={onChangeName} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Min Height Px" value={attributes.minHeight} onChange={onChangeMinHeight} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Font Size Px" value={attributes.fontSize} onChange={onChangeMinHeight} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-6">
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
          <RichText
            className="chef-title"
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
        <div className="col-6 summary">
          <RichText
            className="chef-text"
            style={{ flexGrow: 1 }}
            tagName="div"
            placeholder={__('Content …', 'ce-lab')}
            onChange={onChangeTextContent}
            value={attributes.textContent}
          />
        </div>
      </div>
    </div>
  );
};

export const saveChefHero = ({ attributes }) => (
  <div id={attributes.name} style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="container" style={{ backgroundColor: attributes.boxColor, minHeight: `${attributes.minHeight}px` }}>
      <div className="row py-5">
        <div className="col-12 col-md-5 d-flex">
          <div className="my-auto mx-auto mx-md-0">
            <img
              className="d-block mx-auto avatar-big-img-chef"
              src={attributes.mediaURL}
              alt={__('Chef Image', 'proterrasancta')}
            />
            <div className="chef-title py-3 text-center text-lg-left" style={{ color: attributes.textColor }}>
              <RichText.Content tagName="div" value={attributes.title} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7 d-flex">
          <div className="my-auto text-center text-md-left">
            <RichText.Content className="chef-text" tagName="div" value={attributes.textContent} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
