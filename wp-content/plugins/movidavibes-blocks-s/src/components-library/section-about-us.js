import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } from '@wordpress/block-editor';
import { Button, SelectControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import paletteProterrasancta from './palette-proterrasancta';

export const editSectionAboutUs = withSelect((select) => ({
  pages: select('core').getEntityRecords('postType', 'page'),
}))(({ pages, className, attributes, setAttributes }) => {
  const { mediaID, mediaURL, selectedPost } = attributes;

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onChangeButtonColor = (color) => {
    setAttributes({ btnColor: color });
  };

  const onSelectImage = (media) => {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id,
    });
  };

  const listPages = pages
    ? pages.map((page) => ({
        value: page.id,
        label: page.title.rendered,
        url: page.link,
      }))
    : [{ value: '0', label: 'Seleziona una pagina', url: '' }];

  const onChangeSelectPost = (value) => {
    const thisPage = listPages.find((page) => page.value === Number.parseInt(value, 10));
    setAttributes({
      selectedPost: Number.parseInt(value, 10),
      selectedPostURL: thisPage ? thisPage.url : '',
    });
  };

  return (
    <div className={className}>
      <InspectorControls>
        <SelectControl
          onChange={onChangeSelectPost}
          value={selectedPost}
          label={__('Seleziona una Sezione')}
          options={listPages}
        />
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
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-6">
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID ? (
                  __('Upload Image', 'gutenberg-examples')
                ) : (
                  <img src={mediaURL} alt={__('Upload Recipe Image', 'gutenberg-examples')} />
                )}
              </Button>
            )}
          />
        </div>
        <div className="col-6 summary">
          <InnerBlocks />
        </div>
      </div>
    </div>
  );
});

export const saveSectionAboutUs = ({ attributes }) => (
  <div style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 title">
          <img src={attributes.mediaURL} alt="" />
        </div>
        <div className="col-12 col-md-6 summary-column">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  </div>
);
