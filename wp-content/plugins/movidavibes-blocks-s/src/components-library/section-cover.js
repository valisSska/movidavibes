import React, { __ } from '@wordpress/i18n';
import { RichText, InspectorControls, PanelColorSettings, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editSectionCover = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL, mediaURLTitle, mediaIDTitle } = attributes;

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onSelectImage = (media) => {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id,
    });
  };

  const onSelectImageTitle = (media) => {
    setAttributes({
      mediaURLTitle: media.url,
      mediaIDTitle: media.id,
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
      </InspectorControls>
      <div
        className="row no-gutters"
        style={{
          ...(mediaURL ? { backgroundImage: `url(${mediaURL})` } : {}),
          backgroundColor: attributes.backgroundColor,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="col-6">
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className="button button-large" onClick={open}>
                {__('Upload Image', 'gutenberg-examples')}
              </Button>
            )}
          />
        </div>
        <div
          className="col-6"
          style={{
            backgroundImage: `url(${mediaURLTitle})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <MediaUpload
            onSelect={onSelectImageTitle}
            allowedTypes="image"
            value={mediaIDTitle}
            render={({ open }) => (
              <Button className="button button-large" onClick={open}>
                {__('Upload Image', 'ce-lab')}
              </Button>
            )}
          />
          <RichText
            className="title"
            style={{
              color: attributes.textColor,
              flexGrow: 1,
            }}
            tagName="div"
            placeholder={__('Scrivi il titolo …', 'ce-lab')}
            onChange={onChangeTitle}
            value={attributes.title}
          />
        </div>
      </div>
    </div>
  );
};

export const saveSectionCover = ({ attributes }) => (
  <div
    style={{
      ...(attributes.mediaURL ? { backgroundImage: `url(${attributes.mediaURL})` } : {}),
      backgroundColor: attributes.backgroundColor,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 section-cover-title" style={{ color: attributes.textColor, opacity: 0 }}>
          {attributes.title}
        </div>
        <div
          className="col-12 col-lg-8 brand"
          style={
            attributes.mediaIDTitle
              ? {
                  backgroundImage: `url(${attributes.mediaURLTitle})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right',
                }
              : {}
          }
        />
      </div>
    </div>
  </div>
);
