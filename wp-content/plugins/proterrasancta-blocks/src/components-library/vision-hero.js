import React, { __ } from '@wordpress/i18n';
import { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import paletteRovagnatiUS from './palette-proterrasancta';

export const editVisionHero = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL, mediaRightURL, mediaRightID } = attributes;

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

  const onSelectRightImage = (media) => {
    setAttributes({
      mediaRightURL: media.url,
      mediaRightID: media.id,
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
          title={'Title Color'}
          colorSettings={[
            {
              colors: paletteRovagnatiUS,
              value: attributes.textColor,
              onChange: onChangeTextColor,
              label: __('Title Color'),
            },
          ]}
        />
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-6 vision-left">
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={'button button-large'} onClick={open}>
                {__('Upload Left Image', 'ce-lab')}
              </Button>
            )}
          />
          <div className="img-title row align-itmes-end" style={{ backgroundImage: `url(${mediaURL})` }}>
            <div className="d-block vision-title m-auto" style={{ color: attributes.textColor }}>
              <RichText
                className="title"
                style={{ color: attributes.textColor }}
                tagName="div"
                placeholder={__('Scrivi il titolo …', 'ce-lab')}
                onChange={onChangeTitle}
                value={attributes.title}
              />
            </div>
          </div>
        </div>
        <div className="col-6 vision-right" style={{ backgroundImage: `url(${mediaRightURL})` }}>
          <MediaUpload
            onSelect={onSelectRightImage}
            allowedTypes="image"
            value={mediaRightID}
            render={({ open }) => (
              <Button className={'button button-large'} onClick={open}>
                {__('Upload Right Image', 'ce-lab')}
              </Button>
            )}
          />
          <InnerBlocks />
        </div>
      </div>
    </div>
  );
};

export const saveVisionHero = ({ attributes }) => {
  const { mediaURL, mediaRightURL } = attributes;
  return (
    <div style={{ backgroundColor: attributes.backgroundColor }}>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 col-md-4 vision-left">
            <div className="img-title row align-itmes-end" style={{ backgroundImage: `url(${mediaURL})` }}>
              <div className="d-block vision-title m-auto" style={{ color: attributes.textColor }}>
                {attributes.title}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 vision-right">
            <div className="img-title row align-itmes-end" style={{ backgroundImage: `url(${mediaRightURL})` }}>
              <div className="text-vision">
                <InnerBlocks.Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
