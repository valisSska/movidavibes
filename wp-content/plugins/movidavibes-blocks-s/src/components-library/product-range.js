import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editProductRange = ({ className, attributes, setAttributes }) => {
  const onChangeSummaryTitle1 = (newContent) => {
    setAttributes({ summaryTitle1: newContent });
  };

  const onChangeSummaryTitle2 = (newContent) => {
    setAttributes({ summaryTitle2: newContent });
  };

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeName = (value) => {
    setAttributes({ name: value });
  };

  const onChangeSummary = (newContent) => {
    setAttributes({ summary: newContent });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
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
            <TextControl label="Anchor Name" value={attributes.name} onChange={onChangeName} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-12">
          <RichText
            className="range-title"
            tagName="div"
            placeholder={__('Titolo …', 'proterrasancta')}
            onChange={onChangeTitle}
            value={attributes.title}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="summary-title1"
            tagName="div"
            placeholder={__('Summary Title 1 …', 'proterrasancta')}
            onChange={onChangeSummaryTitle1}
            value={attributes.summaryTitle1}
          />
          <RichText
            className="summary-title2"
            tagName="div"
            placeholder={__('Summary Title 2 …', 'proterrasancta')}
            onChange={onChangeSummaryTitle2}
            value={attributes.summaryTitle2}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="range-summary"
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

export const saveProductRange = ({ attributes }) => (
  <Fragment>
    <div id={attributes.name} style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        <div className="row">
          <div className="col-12 range-title">
            <RichText.Content className="col-12" value={attributes.title} />
          </div>
        </div>
      </div>
    </div>
    <div style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        <div className="row no-gutters overflow-hidden">
          <div className="col-12 col-md-6 range-image d-flex">
            <div className="range-left">
              <RichText.Content className="summary-title1" tagName="div" value={attributes.summaryTitle1} />
              <RichText.Content className="summary-title2" tagName="div" value={attributes.summaryTitle2} />
            </div>
          </div>
          <div className="col-12 col-md-6 range-text d-flex">
            <div className="fit-content">
              <RichText.Content className="range-summary" tagName="div" value={attributes.summary} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
