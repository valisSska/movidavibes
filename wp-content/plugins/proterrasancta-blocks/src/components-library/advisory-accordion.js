import React, { __ } from '@wordpress/i18n';
import { RichText, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { v4 as uuidv4 } from 'uuid';
import paletteRovagnatiUS from './palette-proterrasancta';

export const editAdvisoryAccordion = ({ className, attributes, setAttributes }) => {
  if (!attributes.instanceId) {
    setAttributes({ instanceId: uuidv4() });
  }

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeContent = (newContent) => {
    setAttributes({ content: newContent });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onChangeWidth = (color) => {
    setAttributes({ width: color });
  };

  return (
    <div className={className}>
      <InspectorControls>
        <PanelColorSettings
          title={'Background Color'}
          colorSettings={[
            {
              colors: paletteRovagnatiUS,
              value: attributes.backgroundColor,
              onChange: onChangeBackgroundColor,
              label: __('Background Color'),
            },
          ]}
        />
        <PanelColorSettings
          title={'Title Color'}
          colorSettings={[
            {
              colors: paletteRovagnatiUS,
              value: attributes.textColor,
              onChange: onChangeTextColor,
              label: __('Title Color'),
            },
          ]}
        />
        <PanelBody title={'Special Settings'} initialOpen={false}>
          <PanelRow>
            <TextControl label="Width Px" value={attributes.width} onChange={onChangeWidth} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div
        className="advisory-accordion-block shadow-md"
        style={{
          backgroundColor: attributes.backgroundColor,
          borderColor: attributes.textColor,
          width: `340px`,
        }}
      >
        <div style={{ color: attributes.textColor }}>
          <span>
            <RichText
              className="advisory-accordion-title"
              tagName="div"
              placeholder={__('Titolo …', 'proterrasancta')}
              onChange={onChangeTitle}
              value={attributes.title}
            />
          </span>
          <a
            className="btn-circle-small collapsed"
            style={{ backgroundColor: attributes.textColor, borderColor: attributes.textColor }}
          >
            <i className="far fa-chevron-up" />
            <i className="far fa-chevron-down" />
          </a>
        </div>
        <RichText
          className="advisory-text"
          tagName="div"
          placeholder={__('Testo …', 'proterrasancta')}
          onChange={onChangeContent}
          value={attributes.content}
        />
      </div>
    </div>
  );
};

export const saveAdvisoryAccordion = ({ attributes }) => (
  <div
    className="advisory-accordion-block shadow-md"
    style={{
      backgroundColor: attributes.backgroundColor,
      borderColor: attributes.textColor,
      ...(attributes.width ? { width: `${attributes.width}px` } : {}),
    }}
  >
    <div className="advisory-accordion-title" style={{ color: attributes.textColor }}>
      <RichText.Content tagName="span" value={attributes.title} />
      <a
        className="btn-circle-small collapsed"
        data-toggle="collapse"
        data-target={`.proterrasancta-${attributes.instanceId}`}
        style={{ backgroundColor: attributes.textColor, borderColor: attributes.textColor }}
      >
        <i className="far fa-chevron-up" />
        <i className="far fa-chevron-down" />
      </a>
    </div>
    <RichText.Content
      className={`collapse advisory-text proterrasancta-${attributes.instanceId}`}
      tagName="div"
      value={attributes.content}
    />
  </div>
);
