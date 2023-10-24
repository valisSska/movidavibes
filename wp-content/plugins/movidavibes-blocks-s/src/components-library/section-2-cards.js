import React, { Fragment } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import paletteProterrasancta from './palette-proterrasancta';

export const editSection2Cards = ({ className, attributes, setAttributes }) => {
  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onChangeTextColor2 = (color) => {
    setAttributes({ textColor2: color });
  };

  const onChangeTextColor3 = (color) => {
    setAttributes({ textColor3: color });
  };

  const onChangeTitlePart1 = (newContent) => {
    setAttributes({ titlePart1: newContent });
  };

  const onChangeTitlePart2 = (newContent) => {
    setAttributes({ titlePart2: newContent });
  };

  const onChangeTitlePart3 = (newContent) => {
    setAttributes({ titlePart3: newContent });
  };

  const onChangeSummaryLeft = (newContent) => {
    setAttributes({ summaryLeft: newContent });
  };

  const onChangeSummaryRight = (newContent) => {
    setAttributes({ summaryRight: newContent });
  };

  const onChangeBoxColorLeft = (color) => {
    setAttributes({ boxColorLeft: color });
  };

  const onChangeBoxColorRight = (color) => {
    setAttributes({ boxColorRight: color });
  };

  return (
    <div className={className}>
      <InspectorControls>
        <PanelColorSettings
          title={'Background Color Box Left'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.boxColorLeft,
              onChange: onChangeBoxColorLeft,
              label: __('Background Color'),
            },
          ]}
        />
        <PanelColorSettings
          title={'Background Color Box Right'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.boxColorRight,
              onChange: onChangeBoxColorRight,
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
        <PanelColorSettings
          title={'Title Color'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.textColor2,
              onChange: onChangeTextColor2,
              label: __('Title Color'),
            },
          ]}
        />
        <PanelColorSettings
          title={'Title Color'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.textColor3,
              onChange: onChangeTextColor3,
              label: __('Title Color'),
            },
          ]}
        />
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="row no-gutters">
          <div className="col-12 p-3">
            <RichText
              className="titlePart1"
              style={{
                color: attributes.textColor,
                flexGrow: 1,
                textTransform: 'uppercase',
              }}
              tagName="div"
              placeholder={__('Scrivi il titolo parte 1 …', 'ce-lab')}
              onChange={onChangeTitlePart1}
              value={attributes.titlePart1}
            />
          </div>
          <div className="col-12 p-3">
            <RichText
              className="titlePart2"
              style={{
                color: attributes.textColor2,
                flexGrow: 1,
                textTransform: 'lowercase',
              }}
              tagName="div"
              placeholder={__('Scrivi il titolo parte 2 …', 'ce-lab')}
              onChange={onChangeTitlePart2}
              value={attributes.titlePart2}
            />
          </div>
          <div className="col-12 p-3">
            <RichText
              className="titlePart3"
              style={{
                color: attributes.textColor3,
                flexGrow: 1,
                textTransform: 'uppercase',
              }}
              tagName="div"
              placeholder={__('Scrivi il titolo parte 3 …', 'ce-lab')}
              onChange={onChangeTitlePart3}
              value={attributes.titlePart3}
            />
          </div>
          <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColorLeft }}>
            <RichText
              className="range-summary"
              tagName="div"
              placeholder={__('Box Left …', 'proterrasancta')}
              onChange={onChangeSummaryLeft}
              value={attributes.summaryLeft}
            />
          </div>
          <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColorRight }}>
            <RichText
              className="range-summary"
              tagName="div"
              placeholder={__('Box Right …', 'proterrasancta')}
              onChange={onChangeSummaryRight}
              value={attributes.summaryRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const saveSection2Cards = ({ attributes }) => (
  <Fragment>
    <div>
      <div className="container section-2-cards">
        <div className="row py-5 no-gutters overflow-hidden">
          <div className="col-12 col-lg-12 section-cover-title">
            <span className="titlePart1" style={{ color: attributes.textColor }}>
              {attributes.titlePart1}
            </span>
            <span className="titlePart2" style={{ color: attributes.textColor2, textTransform: 'lowercase' }}>
              {attributes.titlePart2}
            </span>
            <span className="titlePart3" style={{ color: attributes.textColor3 }}>
              {attributes.titlePart3}
            </span>
          </div>
          <div className="col-12 col-md-6 title-left-container d-flex">
            <div className="card my-3 mr-lg-3" style={{ backgroundColor: attributes.boxColorLeft }}>
              <div className="card-body">
                <RichText.Content className="summary-left text-2-cards" tagName="div" value={attributes.summaryLeft} />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 summery-right-container d-flex">
            <div className="card my-3 ml-lg-3" style={{ backgroundColor: attributes.boxColorRight }}>
              <div className="card-body">
                <RichText.Content
                  tagName="div"
                  className="summary-right text-2-cards"
                  value={attributes.summaryRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
