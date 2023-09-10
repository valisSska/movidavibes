import React, { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { TextControl, PanelRow, PanelBody } from '@wordpress/components';
import paletteRovagnatiUS from './palette-proterrasancta';

export const editTheRestaurant = ({ className, attributes, setAttributes }) => {
  const onChangeTextAddress = (newContent) => {
    setAttributes({ textAddress: newContent });
  };

  const onChangeTextDescription = (newContent) => {
    setAttributes({ textDescription: newContent });
  };

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
        <PanelColorSettings
          title={'Box Color'}
          colorSettings={[
            {
              colors: paletteRovagnatiUS,
              value: attributes.boxColor,
              onChange: onChangeBoxColor,
              label: __('Box Color'),
            },
          ]}
        />
        <PanelBody title={'Special Settings'} initialOpen={false}>
          <PanelRow>
            <TextControl label="Min Height Px" value={attributes.minHeight} onChange={onChangeMinHeight} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Font Size Px" value={attributes.fontSize} onChange={onChangeMinHeight} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-12 p-3">
          <RichText
            className="restaurant-title"
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
            className="restaurant-text"
            style={{ flexGrow: 1 }}
            tagName="div"
            placeholder={__('Content …', 'ce-lab')}
            onChange={onChangeTextContent}
            value={attributes.textContent}
          />
        </div>
        <div className="col-12 p-3">
          <RichText
            className="restaurant-address"
            style={{ flexGrow: 1 }}
            tagName="div"
            placeholder={__('Address …', 'ce-lab')}
            onChange={onChangeTextAddress}
            value={attributes.textAddress}
          />
        </div>
        <div className="col-12 p-3">
          <RichText
            className="restaurant-description"
            style={{ flexGrow: 1 }}
            tagName="div"
            placeholder={__('Description …', 'ce-lab')}
            onChange={onChangeTextDescription}
            value={attributes.textDescription}
          />
        </div>
        <div className="col-12">
          <InnerBlocks allowedBlocks={['proterrasancta/carousel-chef']} />
        </div>
      </div>
    </div>
  );
};

export const saveTheRestaurant = ({ attributes }) => (
  <div style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="container" style={{ backgroundColor: attributes.boxColor, minHeight: `${attributes.minHeight}px` }}>
      <div className="row py-5">
        <div className="col-12 col-md-5 d-flex">
          <div className="mx-auto mx-md-0">
            <div className="restaurant-title py-3 text-center text-md-left" style={{ color: attributes.textColor }}>
              <RichText.Content tagName="div" value={attributes.title} />
            </div>
            <div className="restaurant-text py-3 text-center text-md-left">
              <RichText.Content tagName="div" value={attributes.textContent} />
            </div>
            <div className="restaurant-address py-3 text-center text-md-left">
              <RichText.Content tagName="div" value={attributes.textAddress} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  </div>
);
