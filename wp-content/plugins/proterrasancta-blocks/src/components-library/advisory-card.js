import React, { __ } from '@wordpress/i18n';
import { RichText, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { v4 as uuidv4 } from 'uuid';
import paletteProterrasancta from './palette-proterrasancta';

export const editAdvisoryCard = ({ className, attributes, setAttributes }) => {
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
          title={'Title Color'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.textColor,
              onChange: onChangeTextColor,
              label: __('Title Color'),
            },
          ]}
        />
      </InspectorControls>
      <div>
        <div className="advisory-block shadow" style={{ backgroundColor: attributes.backgroundColor }}>
          <div style={{ color: attributes.textColor }}>
            <span>
              <RichText
                className="advisory-title"
                tagName="div"
                placeholder={__('Titolo …', 'ce-lab')}
                onChange={onChangeTitle}
                value={attributes.title}
              />
            </span>
            <RichText
              className="advisory-text"
              tagName="div"
              placeholder={__('Testo …', 'ce-lab')}
              onChange={onChangeContent}
              value={attributes.content}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const saveAdvisoryCard = ({ attributes }) => (
  <div>
    <div className="advisory-block shadow-md" style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="advisory-title" style={{ color: attributes.textColor }}>
        <span>{attributes.title}</span>
        <i className="far fa-chevron-right" style={{ color: '#FFA700' }} />
      </div>
      <a
        className="btn-circle-small collapsed"
        data-toggle="collapse"
        data-target={`.ce-lab-${attributes.instanceId}`}
        style={{ backgroundColor: attributes.backgroundColor, borderColor: attributes.textColor }}
      >
        <i className="fal fa-arrow-up" style={{ color: attributes.textColor }} />
        <i className="fal fa-arrow-down" style={{ color: attributes.textColor }} />
      </a>
    </div>
    <div className="advisory-card-background" />
    <RichText.Content
      className={`collapse advisory-text ce-lab-${attributes.instanceId}`}
      tagName="div"
      value={attributes.content}
    />
  </div>
);
