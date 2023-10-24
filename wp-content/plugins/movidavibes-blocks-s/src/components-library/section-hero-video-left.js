import React, { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, RichText, InnerBlocks } from '@wordpress/block-editor';
import { TextControl, PanelRow, PanelBody } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editSectionHeroVideoLeft = ({ className, attributes, setAttributes }) => {
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
        <div className="col-6 d-flex">
          <InnerBlocks allowedBlocks={['kadence/slider', 'kadence/videopopup']} />
        </div>
        <div className="col-6 summary">
          <RichText
            className="section-left-title"
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
      </div>
    </div>
  );
};

export const saveSectionHeroVideoLeft = ({ attributes }) => (
  <div id={attributes.name} style={{ backgroundColor: attributes.backgroundColor }}>
    <div
      className="container py-5"
      style={{ backgroundColor: attributes.boxColor, minHeight: `${attributes.minHeight}px` }}
    >
      <div className="row">
        <div className="col-12 col-md-5 d-block d-md-none section-hero-video-left-upsize-mobile">
          <div className="section-left-title" style={{ color: attributes.textColor }}>
            <RichText.Content tagName="div" value={attributes.title} />
          </div>
          <div>
            <RichText.Content className="section-text" tagName="div" value={attributes.textContent} />
          </div>
        </div>
        <div className="col-12 col-md-7 d-flex">
          <InnerBlocks.Content />
        </div>
        <div className="col-12 col-md-5 d-none d-md-block section-left-block">
          <div className="section-left-title" style={{ color: attributes.textColor }}>
            <RichText.Content tagName="div" value={attributes.title} />
          </div>
          <div>
            <RichText.Content className="section-text" tagName="div" value={attributes.textContent} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
