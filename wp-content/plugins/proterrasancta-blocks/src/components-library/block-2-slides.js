import React from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls, MediaUpload, PanelColorSettings, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import paletteRovagnatiUS from './palette-proterrasancta';

export const editBlock2Slides = ({ className, attributes, setAttributes }) => {
  // eslint-disable-next-line object-curly-newline
  const { mediaID, mediaURL, mediaID2, mediaURL2, mediaID3, mediaURL3, mediaID4, mediaURL4 } = attributes;

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onChangeHeading1 = (newContent) => {
    setAttributes({ heading1: newContent });
  };

  const onChangeHeading2 = (newContent) => {
    setAttributes({ heading2: newContent });
  };

  const onChangeName = (value) => {
    setAttributes({ name: value });
  };

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeSummaryLeft = (newContent) => {
    setAttributes({ summaryLeft: newContent });
  };

  const onChangeAdditionalText = (newContent) => {
    setAttributes({ additionalText: newContent });
  };

  const onChangeSourcesText = (newContent) => {
    setAttributes({ sourcesText: newContent });
  };

  const onChangeSummaryRight = (newContent) => {
    setAttributes({ summaryRight: newContent });
  };

  const onSelectImage = (media) => {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id,
    });
  };

  const onSelectImage2 = (media) => {
    setAttributes({
      mediaURL2: media.url,
      mediaID2: media.id,
    });
  };

  const onChangeTitle2 = (newContent) => {
    setAttributes({ title2: newContent });
  };

  const onChangeSummaryLeft2 = (newContent) => {
    setAttributes({ summaryLeft2: newContent });
  };

  const onChangeAdditionalText2 = (newContent) => {
    setAttributes({ additionalText2: newContent });
  };

  const onChangeSourcesText2 = (newContent) => {
    setAttributes({ sourcesText2: newContent });
  };

  const onChangeSummaryRight2 = (newContent) => {
    setAttributes({ summaryRight2: newContent });
  };

  const onSelectImage3 = (media) => {
    setAttributes({
      mediaURL3: media.url,
      mediaID3: media.id,
    });
  };

  const onSelectImage4 = (media) => {
    setAttributes({
      mediaURL4: media.url,
      mediaID4: media.id,
    });
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
        <PanelBody title={'Special Settings'} initialOpen={false}>
          <PanelRow>
            <TextControl label="Anchor Name" value={attributes.name} onChange={onChangeName} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-12">
          <RichText
            className="hero-heading"
            style={{ color: attributes.textColor }}
            tagName="div"
            placeholder={__('Heading 1 …', 'proterrasancta')}
            onChange={onChangeHeading1}
            value={attributes.heading1}
          />
          <RichText
            className="hero-heading"
            style={{ color: attributes.textColor }}
            tagName="div"
            placeholder={__('Heading 2 …', 'proterrasancta')}
            onChange={onChangeHeading2}
            value={attributes.heading2}
          />
          <RichText
            className="title"
            style={{ color: attributes.textColor }}
            tagName="div"
            placeholder={__('Title …', 'proterrasancta')}
            onChange={onChangeTitle}
            value={attributes.title}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="hero-summary-left"
            tagName="div"
            placeholder={__('Summary Left …', 'proterrasancta')}
            onChange={onChangeSummaryLeft}
            value={attributes.summaryLeft}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="hero-summary-right"
            tagName="div"
            placeholder={__('Summary Right …', 'proterrasancta')}
            onChange={onChangeSummaryRight}
            value={attributes.summaryRight}
          />
        </div>
        <div className="col-6 d-flex">
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID ? (
                  __('Upload Image', 'proterrasancta')
                ) : (
                  <img src={mediaURL} alt={__('Background Image', 'ce-lab')} />
                )}
              </Button>
            )}
          />
        </div>
        <div className="col-6 d-flex">
          <MediaUpload
            onSelect={onSelectImage2}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID2 ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID2 ? (
                  __('Upload Image', 'proterrasancta')
                ) : (
                  <img src={mediaURL2} alt={__('Background Image', 'ce-lab')} />
                )}
              </Button>
            )}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="additional-text"
            tagName="div"
            placeholder={__('Additional Text …', 'proterrasancta')}
            onChange={onChangeAdditionalText}
            value={attributes.additionalText}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="sources-text"
            tagName="div"
            placeholder={__('Sources Text …', 'proterrasancta')}
            onChange={onChangeSourcesText}
            value={attributes.sourcesText}
          />
        </div>

        <div className="col-12">
          <RichText
            className="title2"
            style={{ color: attributes.textColor }}
            tagName="div"
            placeholder={__('Title 2 …', 'proterrasancta')}
            onChange={onChangeTitle2}
            value={attributes.title2}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="hero-summary-left2"
            tagName="div"
            placeholder={__('Summary Left 2 …', 'proterrasancta')}
            onChange={onChangeSummaryLeft2}
            value={attributes.summaryLeft2}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="hero-summary-right2"
            tagName="div"
            placeholder={__('Summary Right 2 …', 'proterrasancta')}
            onChange={onChangeSummaryRight2}
            value={attributes.summaryRight2}
          />
        </div>
        <div className="col-6 d-flex">
          <MediaUpload
            onSelect={onSelectImage3}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID3 ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID3 ? (
                  __('Upload Image', 'proterrasancta')
                ) : (
                  <img src={mediaURL3} alt={__('Background Image', 'ce-lab')} />
                )}
              </Button>
            )}
          />
        </div>
        <div className="col-6 d-flex">
          <MediaUpload
            onSelect={onSelectImage4}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID4 ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID4 ? (
                  __('Upload Image', 'proterrasancta')
                ) : (
                  <img src={mediaURL4} alt={__('Background Image', 'ce-lab')} />
                )}
              </Button>
            )}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="additional-text2"
            tagName="div"
            placeholder={__('Additional Text 2 …', 'proterrasancta')}
            onChange={onChangeAdditionalText2}
            value={attributes.additionalText2}
          />
        </div>
        <div className="col-6 p-3" style={{ backgroundColor: attributes.boxColor }}>
          <RichText
            className="sources-text2"
            tagName="div"
            placeholder={__('Sources Text 2 …', 'proterrasancta')}
            onChange={onChangeSourcesText2}
            value={attributes.sourcesText2}
          />
        </div>
      </div>
    </div>
  );
};

export const saveBlock2Slides = ({ attributes }) => (
  <div>
    <div style={{ backgroundColor: '#050505' }}>
      <div id="block-2-slides-menu" className="container">
        <div className="row justify-content-around">
          <RichText.Content className="col-5 heading1 selected" tagName="div" value={attributes.heading1} />
          <RichText.Content className="col-5 heading2 not-selected" tagName="div" value={attributes.heading2} />
        </div>
      </div>
    </div>
    <div id={attributes.name} style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container main">
        <div className="d-flex row py-3 slide slide1">
          <div
            className="col-12 col-md-6 content"
            style={{
              backgroundImage: `url(${attributes.mediaURL})`,
              backgroundSize: 'auto',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <RichText.Content
              className="title"
              tagName="div"
              value={attributes.title}
              style={{ color: attributes.textColor }}
            />
            <RichText.Content className="hero-summary-left text-left" tagName="div" value={attributes.summaryLeft} />
          </div>
          <div className="col-12 col-md-6 content">
            <div className="card">
              <RichText.Content
                className="hero-summary-right text-left text-lg-right"
                tagName="div"
                value={attributes.summaryRight}
              />
              <img src={attributes.mediaURL2} alt={''} />
              <RichText.Content className="additional-text" tagName="div" value={attributes.additionalText} />
              <RichText.Content className="sources-text" tagName="div" value={attributes.sourcesText} />
            </div>
          </div>
        </div>
        <div className="d-none row py-3 slide slide2">
          <div
            className="col-12 col-md-6 content"
            style={{
              backgroundImage: `url(${attributes.mediaURL3})`,
              backgroundSize: 'auto',
              backgroundRepeat: 'no-repeat',
              backgroundPositionX: 'right',
            }}
          >
            <RichText.Content
              className="title2"
              tagName="div"
              value={attributes.title2}
              style={{ color: attributes.textColor }}
            />
            <RichText.Content className="hero-summary-left2 text-left" tagName="div" value={attributes.summaryLeft2} />
          </div>
          <div className="col-12 col-md-6 content">
            <div className="card">
              <RichText.Content
                className="hero-summary-right2 text-left text-lg-right"
                tagName="div"
                value={attributes.summaryRight2}
              />
              <img src={attributes.mediaURL4} alt={''} />
              <RichText.Content className="additional-text2" tagName="div" value={attributes.additionalText2} />
              <RichText.Content className="sources-text2" tagName="div" value={attributes.sourcesText2} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ backgroundColor: '#050505', height: '50px' }} />
  </div>
);
