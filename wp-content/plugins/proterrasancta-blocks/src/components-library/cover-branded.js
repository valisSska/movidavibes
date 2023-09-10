import React, { __ } from '@wordpress/i18n';
import { RichText, InspectorControls, PanelColorSettings, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editCoverBranded = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL, mediaID2, mediaURL2, mediaID3, mediaURL3 } = attributes;

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

  const onSelectImage2 = (media) => {
    setAttributes({
      mediaURL2: media.url,
      mediaID2: media.id,
    });
  };

  const onSelectImage3 = (media) => {
    setAttributes({
      mediaURL3: media.url,
      mediaID3: media.id,
    });
  };

  const ButtonUploadImage = ({ open }) => (
    <Button className="button button-large" onClick={open}>
      {__('Upload Image', 'ce-lab')}
    </Button>
  );

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
      </InspectorControls>
      <div
        className="row no-gutters"
        style={{
          backgroundImage: `url(${mediaURL})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="col-6">
          <MediaUpload onSelect={onSelectImage} allowedTypes="image" value={mediaID} render={ButtonUploadImage} />
          <RichText
            className="cover-title"
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
        <div className="col-6">
          <MediaUpload
            onSelect={onSelectImage2}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID2 ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID2 ? (
                  __('Upload Image', 'ce-lab')
                ) : (
                  <img src={mediaURL2} alt={__('Background Image', 'ce-lab')} />
                )}
              </Button>
            )}
          />
          <MediaUpload
            onSelect={onSelectImage3}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID3 ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID3 ? (
                  __('Upload Image', 'ce-lab')
                ) : (
                  <img src={mediaURL3} alt={__('Background Image', 'ce-lab')} />
                )}
              </Button>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export const saveCoverBranded = ({ attributes }) => (
  <div
    style={{ backgroundImage: `url(${attributes.mediaURL})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
  >
    <img className="img1" src={attributes.mediaURL2} alt={''} />
    <div className="container">
      <div className="row">
        <div className="col-12 cover-text-block">
          <div className="row justify-content-md-end">
            <div className="col-12 col-md-11 col-lg-8">
              <div className="row justify-content-center">
                <div className="col-8 col-md-12">
                  <img className="img2" src={attributes.mediaURL3} alt={''} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
