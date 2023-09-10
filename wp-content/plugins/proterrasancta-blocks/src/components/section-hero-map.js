import React, { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { TextControl, PanelRow, PanelBody } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editSectionHeroMap = ({ className, attributes, setAttributes }) => {
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

  const onChangeLat = (value) => {
    setAttributes({ lat: value });
  };

  const onChangeLng = (value) => {
    setAttributes({ lng: value });
  };

  const onChangeArea = (value) => {
    setAttributes({ areaId: value });
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
            <TextControl label="Latitude" value={attributes.lat} onChange={onChangeLat} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Longitude" value={attributes.lng} onChange={onChangeLng} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Area" value={attributes.areaId} onChange={onChangeArea} />
          </PanelRow>
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
        <div className="col-12">
          <RichText
            className="section-title"
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
        <div className="col-6 summary">
          <RichText
            className="section-text"
            style={{
              color: attributes.textColor,
              flexGrow: 1,
            }}
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

export const saveSectionHeroMap = ({ attributes }) => (
  <div id={attributes.name} style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="container">
      <RichText.Content className="d-none section-title" tagName="div" value={attributes.title} />
      <RichText.Content className="d-none section-text" tagName="div" value={attributes.textContent} />
      <div
        id="section-map-root"
        data-area-id={attributes.areaId}
        data-text-color={attributes.textColor}
        data-text-title={attributes.title}
        data-text-content={attributes.textContent}
        data-lat={attributes.lat}
        data-lng={attributes.lng}
      />
    </div>
  </div>
);
