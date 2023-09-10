import React, { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button, TextControl, PanelRow, PanelBody } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editSectionHeroRight = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL, mediaID2, mediaURL2 } = attributes;

  const onChangeTextContent = (newContent) => {
    setAttributes({ textContent: newContent });
  };

  const onChangeHeading = (newContent) => {
    setAttributes({ heading: newContent });
  };

  const onChangeHeading2 = (newContent) => {
    setAttributes({ heading2: newContent });
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

  const onSelectImage2 = (media) => {
    setAttributes({
      mediaURL2: media.url,
      mediaID2: media.id,
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
            className="section-heading"
            style={{
              color: attributes.textColor,
              flexGrow: 1,
            }}
            tagName="div"
            placeholder={__('Heading …', 'proterrasancta')}
            onChange={onChangeHeading}
            value={attributes.heading}
          />
          <RichText
            className="section-heading2"
            style={{
              color: attributes.textColor,
              flexGrow: 1,
            }}
            tagName="div"
            placeholder={__('Heading 2 …', 'proterrasancta')}
            onChange={onChangeHeading2}
            value={attributes.heading2}
          />
          <RichText
            className="section-text"
            style={{ flexGrow: 1 }}
            tagName="div"
            placeholder={__('Content …', 'proterrasancta')}
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
                  __('Upload Image', 'proterrasancta')
                ) : (
                  <img src={mediaURL} alt={__('Side Image 1', 'proterrasancta')} />
                )}
              </Button>
            )}
          />
          <MediaUpload
            onSelect={onSelectImage2}
            allowedTypes="image"
            value={mediaID2}
            render={({ open }) => (
              <Button className={mediaID2 ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID2 ? (
                  __('Upload Image 2', 'proterrasancta')
                ) : (
                  <img src={mediaURL2} alt={__('Side Image 2', 'proterrasancta')} />
                )}
              </Button>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export const saveSectionHeroRight = ({ attributes }) => (
  <div id={attributes.name} style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="container" style={{ backgroundColor: attributes.boxColor, minHeight: `${attributes.minHeight}px` }}>
      <div className="row">
        <div className="d-block d-md-none col-12 col-md-4 pb-3">
          <div className="campaign-text" style={{ color: attributes.textColor, fontSize: '16px' }}>
            <RichText.Content className="section-heading text-center" tagName="div" value={attributes.heading} />
          </div>
          <div className="row">
            <div className="col-12 d-flex">
              <img className="m-auto" src={attributes.mediaURL} alt={__('Side Image 1', 'proterrasancta')} />
            </div>
          </div>
          <div className="campaign-text" style={{ color: attributes.textColor, fontSize: '16px' }}>
            <RichText.Content className="section-heading2 text-center" tagName="div" value={attributes.heading2} />
          </div>
          <div className="row">
            <div className="col-12 d-flex">
              <img className="m-auto" src={attributes.mediaURL2} alt={__('Side Image 2', 'proterrasancta')} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div style={{ fontSize: '20pt' }}>
            <RichText.Content className="section-text" tagName="div" value={attributes.textContent} />
          </div>
        </div>
        <div className="d-none d-md-block col-12 col-md-4 pb-3">
          <div style={{ color: attributes.textColor, fontSize: '12px' }}>
            <RichText.Content className="section-heading text-center" tagName="div" value={attributes.heading} />
          </div>
          <div className="row">
            <div className="col-6 col-md-12 d-flex">
              <img className="m-auto" src={attributes.mediaURL} alt={__('Side Image 1', 'proterrasancta')} />
            </div>
          </div>
          <div style={{ color: attributes.textColor, fontSize: '12px' }}>
            <RichText.Content className="section-heading2 text-center" tagName="div" value={attributes.heading2} />
          </div>
          <div className="row">
            <div className="col-6 col-md-12 d-flex">
              <img className="m-auto" src={attributes.mediaURL2} alt={__('Side Image 2', 'proterrasancta')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
