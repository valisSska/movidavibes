import React, { __ } from '@wordpress/i18n';
import { InspectorControls, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';

export const editCarouselHeroSlide = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL } = attributes;

  const onChangeSummary = (newContent) => {
    setAttributes({ summary: newContent });
  };

  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeLink = (value) => {
    setAttributes({ link: value });
  };

  const onChangeButtonText = (value) => {
    setAttributes({ btnText: value });
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
        <PanelBody title={'Special Settings'} initialOpen={false}>
          <PanelRow>
            <TextControl label="Link" value={attributes.link} onChange={onChangeLink} />
          </PanelRow>
          <PanelRow>
            <TextControl label="button text" value={attributes.btnText} onChange={onChangeButtonText} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="row no-gutters">
        <div className="col-6 d-flex">
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID ? __('Upload Image', 'ce-lab') : <img src={mediaURL} alt="" />}
              </Button>
            )}
          />
        </div>
        <div className="col-6">
          <RichText
            className="values-title"
            tagName="div"
            placeholder={__('Title …', 'proterrasancta')}
            onChange={onChangeTitle}
            value={attributes.title}
          />
          <RichText
            className="values-summary"
            tagName="div"
            placeholder={__('Summary …', 'proterrasancta')}
            onChange={onChangeSummary}
            value={attributes.summary}
          />
        </div>
      </div>
    </div>
  );
};

export const saveCarouselHeroSlide = ({ attributes }) => (
  <div className="carousel-item">
    <img src={attributes.mediaURL} alt={''} />
    <div className="carousel-caption">
      <RichText.Content className="values-title" tagName="div" value={attributes.title} />
      <RichText.Content className="values-summary" tagName="div" value={attributes.summary} />
      {attributes.link ? (
        <a href={attributes.link} className="btn btn-danger waves-effect waves-light">
          {attributes.btnText}
        </a>
      ) : (
        <div />
      )}
    </div>
  </div>
);
