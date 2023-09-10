import React, { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button, TextControl, PanelRow, PanelBody } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editSectionHeroRight50 = ({ className, attributes, setAttributes }) => {
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
        <div className="col-6 summary">
          <RichText
            className="section-title"
            style={{
              color: attributes.textColor,
              flexGrow: 1,
            }}
            tagName="div"
            placeholder={__('Title …', 'ce-lab')}
            onChange={onChangeTitle}
            value={attributes.title}
          />
          <RichText
            className="section-text"
            style={{ flexGrow: 1 }}
            tagName="div"
            placeholder={__('Content …', 'ce-lab')}
            onChange={onChangeTextContent}
            value={attributes.textContent}
          />
        </div>
        <div className="col-6 d-flex">
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

export const saveSectionHeroRight50 = ({ attributes }) => (
  <div id={attributes.name} style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="container" style={{ backgroundColor: attributes.boxColor, minHeight: `${attributes.minHeight}px` }}>
      <div className="row">
        <div className="col-12">
          <div className="section-title" style={{ color: attributes.textColor }}>
            <RichText.Content tagName="div" value={attributes.title} />
          </div>
        </div>
        <div className="col-12 col-md-6 section-hero-right-50-block">
          <div>
            <RichText.Content
              className="section-text"
              tagName="div"
              value={attributes.textContent}
              style={{ color: attributes.textColor }}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 text-uppercase pb-3">
          <img src={attributes.mediaURL} alt={__('Background Image', 'proterrasancta')} />
        </div>
      </div>
    </div>
  </div>
);
