import React from 'react';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editProductCarousel = ({ className, attributes, setAttributes }) => {
  const onChangeHeading = (newContent) => {
    setAttributes({ heading: newContent });
  };

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeSubTitle = (newContent) => {
    setAttributes({ subTitle: newContent });
  };

  const onChangeTextDescription = (newContent) => {
    setAttributes({ textDescription: newContent });
  };

  const onChangeLink = (value) => {
    setAttributes({ link: value });
  };

  const onChangeButtonText = (value) => {
    setAttributes({ btnText: value });
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
            <TextControl label="Link" value={attributes.link} onChange={onChangeLink} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Button text" value={attributes.btnText} onChange={onChangeButtonText} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-12 p-3">
          <RichText
            className="product-heading"
            style={{ flexGrow: 1 }}
            tagName="div"
            placeholder={__('Heading …', 'ce-lab')}
            onChange={onChangeHeading}
            value={attributes.heading}
          />
        </div>
        <div className="col-12 p-3">
          <RichText
            className="product-title"
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
        <div className="col-12 p-3">
          <RichText
            className="product-sub-title"
            style={{ flexGrow: 1 }}
            tagName="div"
            placeholder={__('Sub Title …', 'ce-lab')}
            onChange={onChangeSubTitle}
            value={attributes.subTitle}
          />
        </div>
        <div className="col-12 p-3">
          <RichText
            className="product-text"
            style={{ flexGrow: 1 }}
            tagName="div"
            placeholder={__('Text …', 'ce-lab')}
            onChange={onChangeTextDescription}
            value={attributes.textDescription}
          />
        </div>
        <div className="col-12">
          <InnerBlocks allowedBlocks={['proterrasancta/carousel-product']} />
        </div>
      </div>
    </div>
  );
};

export const saveProductCarousel = ({ attributes }) => (
  <div style={{ background: 'linear-gradient(to bottom, #EBF0F1 35%, white 30% 70%)' }}>
    <div className="container" style={{ backgroundColor: attributes.boxColor }}>
      <div className="row py-5">
        <div className="col-12 col-md-6">
          <InnerBlocks.Content />
        </div>
        <div className="col-12 col-md-6 d-flex">
          <div className="mx-auto mx-md-0 pr-5">
            <RichText.Content
              className="product-heading pb-3 text-center text-md-left"
              tagName="div"
              value={attributes.heading}
            />
            <RichText.Content
              className="product-title py-3 text-center text-md-left"
              tagName="div"
              value={attributes.title}
              style={{ color: attributes.textColor }}
            />
            <RichText.Content
              className="product-sub-title py-3 text-center text-md-left"
              tagName="div"
              value={attributes.subTitle}
            />
            <RichText.Content
              className="product-text py-3 text-center text-md-left"
              tagName="div"
              value={attributes.textDescription}
            />
            <div className="d-flex py-3">
              {attributes.link ? (
                <a href={attributes.link} className="btn bg-secondary mx-auto m-md-0 text-white">
                  {attributes.btnText}
                </a>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
