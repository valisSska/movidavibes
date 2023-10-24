import React, { __ } from '@wordpress/i18n';
import { RichText, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import paletteRovagnatiUS from './palette-proterrasancta';

export const editHistoryCard = ({ className, attributes, setAttributes }) => {
  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeSubTitle = (newContent) => {
    setAttributes({ subTitle: newContent });
  };

  const onChangeTextContent = (newContent) => {
    setAttributes({ textContent: newContent });
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
              colors: paletteRovagnatiUS,
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
              colors: paletteRovagnatiUS,
              value: attributes.textColor,
              onChange: onChangeTextColor,
              label: __('Text Color'),
            },
          ]}
        />
      </InspectorControls>
      <div style={{ backgroundColor: attributes.backgroundColor, color: attributes.textColor }}>
        <div className="history-block">
          <RichText
            className="title text-uppercase"
            tagName="div"
            placeholder={__('Title …', 'proterrasancta')}
            onChange={onChangeTitle}
            value={attributes.title}
          />
          <RichText
            className="sub-title text-uppercase"
            tagName="div"
            placeholder={__('Summary …', 'proterrasancta')}
            onChange={onChangeSubTitle}
            value={attributes.subTitle}
          />
          <RichText
            className="text-content"
            tagName="div"
            placeholder={__('Content …', 'proterrasancta')}
            onChange={onChangeTextContent}
            value={attributes.textContent}
          />
        </div>
      </div>
    </div>
  );
};

export const saveHistoryCard = ({ attributes }) => (
  <div
    className="col-12 col-md-6 col-lg-4"
    style={{ backgroundColor: attributes.backgroundColor, color: attributes.textColor }}
  >
    <div className="history-block">
      <div className="container">
        <div className="row p-5 text-center">
          <div className="col-12">
            <div className="title font-weight-bold text-uppercase">
              <RichText.Content value={attributes.title} />
            </div>
          </div>
          <div className="col-12">
            <div className="sub-title text-uppercase">
              <RichText.Content value={attributes.subTitle} />
            </div>
          </div>
          <div className="col-12">
            <div className="text-content font-weight-normal">
              <RichText.Content value={attributes.textContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
