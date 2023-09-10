import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editMiniHeroCall = ({ className, attributes, setAttributes }) => {
  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeName = (value) => {
    setAttributes({ name: value });
  };

  const onChangeLink = (value) => {
    setAttributes({ link: value });
  };

  const onChangeButtonText = (value) => {
    setAttributes({ btnText: value });
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
          <PanelRow>
            <TextControl label="Link" value={attributes.link} onChange={onChangeLink} />
          </PanelRow>
          <PanelRow>
            <TextControl label="button text" value={attributes.btnText} onChange={onChangeButtonText} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-12">
          <RichText
            className="hero-title"
            tagName="div"
            placeholder={__('Titolo …', 'proterrasancta')}
            onChange={onChangeTitle}
            value={attributes.title}
          />
        </div>
        <div className="col-12 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="hero-summary"
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

export const saveMiniHeroCall = ({ attributes }) => (
  <Fragment>
    <div id={attributes.name} style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container">
        <div className="row py-1 py-md-4">
          <div className="col-12 hero-title">
            <RichText.Content className="col-12" value={attributes.title} />
          </div>
          <div className="col-12 hero-summary">
            <RichText.Content className="col-12" tagName="div" value={attributes.summary} />
          </div>
          <div className={`col-12 py-3 ${attributes.btnText ? 'd-flex' : 'd-none'}`}>
            <a href={attributes.link} className="btn bg-secondary text-white mx-auto">
              {attributes.btnText}
            </a>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
