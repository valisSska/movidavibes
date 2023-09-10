import React, { __ } from '@wordpress/i18n';
import { RichText, InspectorControls, PanelColorSettings, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editPressRelease = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL, pdfID } = attributes;

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onChangeButtonColor = (color) => {
    setAttributes({ btnColor: color });
  };

  const onSelectPdfLink = (pdf) => {
    setAttributes({
      pdfURL: pdf.url,
      pdfID: pdf.id,
    });
  };

  const onSelectImage = (media) => {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id,
    });
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
        <PanelColorSettings
          title={'Button Color'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.btnColor,
              onChange: onChangeButtonColor,
              label: __('Button Color'),
            },
          ]}
        />
      </InspectorControls>
      <div
        className="row no-gutters"
        style={{
          backgroundColor: attributes.backgroundColor,
          backgroundImage: `url(${mediaURL})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <div className="col-12">
          <RichText
            className="press-title"
            style={{
              color: attributes.textColor,
              flexGrow: 1,
            }}
            tagName="div"
            placeholder={__('Scrivi il titolo …', 'ce-lab')}
            onChange={onChangeTitle}
            value={attributes.title}
          />
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={'button button-large'} onClick={open}>
                {__('Upload Image', 'ce-lab')}
              </Button>
            )}
          />
          <MediaUpload
            onSelect={onSelectPdfLink}
            allowedTypes="pdf"
            value={pdfID}
            render={({ open }) => (
              <Button className={'image-button'} onClick={open}>
                <div className="btn-circle-press" style={{ color: attributes.btnColor }}>
                  <i className="fas fa-download" />
                </div>
              </Button>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export const savePressRelease = ({ attributes }) => (
  <div
    className="mx-auto mr-md-auto ml-md-0"
    style={{ backgroundColor: attributes.backgroundColor, backgroundImage: `url(${attributes.mediaURL})` }}
  >
    <div className="container h-100">
      <div className="row h-100 align-items-end">
        <div className="col-12 press-title" style={{ color: attributes.textColor }}>
          {attributes.title}
        </div>
        <div className="col-12">
          <a href={attributes.pdfURL} target="_blank" rel="noopener noreferrer">
            <div className="btn-circle-press mx-auto" style={{ color: attributes.btnColor }}>
              <i className="fas fa-download" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);
