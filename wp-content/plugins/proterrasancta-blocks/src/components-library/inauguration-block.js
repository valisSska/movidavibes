import React, { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { TextControl, PanelRow, PanelBody, DateTimePicker } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editInaugurationBlock = ({ className, attributes, setAttributes }) => {
  const { title, inaugurationDate } = attributes;

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeBoxColor = (color) => {
    setAttributes({ boxColor: color });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onChangeMinHeight = (size) => {
    setAttributes({ minHeight: size });
  };

  const onChangeInaugurationDate = (value) => {
    setAttributes({ inaugurationDate: value });
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
        <PanelBody title={'Special Settings'} initialOpen={false}>
          <PanelRow>
            <TextControl label="Min Height Px" value={attributes.minHeight} onChange={onChangeMinHeight} />
            <TextControl label="Font Size Px" value={attributes.fontSize} onChange={onChangeMinHeight} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.boxColor }}>
        <div className="col-12">
          <RichText
            className="inauguration-title"
            style={{ color: attributes.textColor }}
            tagName="div"
            placeholder={__('Titolo …', 'proterrasancta')}
            onChange={onChangeTitle}
            value={title}
          />
        </div>
        <div className="col-12 d-flex">
          <div className="d-block mx-auto fit-content">
            <DateTimePicker currentDate={inaugurationDate} onChange={onChangeInaugurationDate} is12Hour={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const saveInaugurationBlock = ({ attributes }) => (
  <div style={{ backgroundColor: attributes.backgroundColor }}>
    <div
      className="container py-5"
      style={{ backgroundColor: attributes.boxColor, minHeight: `${attributes.minHeight}px` }}
    >
      <div className="row">
        <div className="col-12 inauguration-title" style={{ color: attributes.textColor }}>
          <span className="text-wrapper">
            <span className="letters">
              <RichText.Content value={attributes.title} />
            </span>
          </span>
        </div>
        <div className="col-12">
          <div
            id="inauguration-date-root"
            className="d-block"
            data-inauguration-date={attributes.inaugurationDate}
            data-text-color={attributes.textColor}
          />
        </div>
      </div>
    </div>
  </div>
);
