import { __ } from '@wordpress/i18n';
import { RichText, InspectorControls, PanelColorSettings, MediaUpload, InnerBlocks } from '@wordpress/block-editor';
import { Button, SelectControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import paletteRovagnatiUS from './palette-proterrasancta';

export const editSectionTeaser = withSelect((select) => ({
  pages: select('core').getEntityRecords('postType', 'page'),
}))(({ pages, className, attributes, setAttributes }) => {
  const { mediaID, mediaURL, selectedPost } = attributes;

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
        <PanelColorSettings
          title={'Button Color'}
          colorSettings={[
            {
              colors: paletteRovagnatiUS,
              value: attributes.btnColor,
              onChange: onChangeButtonColor,
              label: __('Button Color'),
            },
          ]}
        />
      </InspectorControls>
      <div className="row no-gutters" style={{ backgroundColor: attributes.backgroundColor }}>
        <div className="col-6">
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
          <div className="btn-circle" style={{ backgroundColor: attributes.btnColor }}>
            <i className="fal fa-arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
});

export const saveSectionTeaser = ({ attributes }) => (
  <div style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="container" style={{ backgroundImage: `url(${attributes.mediaURL})` }}>
      <div className="row">
        <div className="col-12 col-md-4 title" style={{ color: attributes.textColor }}>
          {attributes.title}
        </div>
        <div className="col-12 col-md-8 summary-column">
          <InnerBlocks.Content />
          <a href={attributes.selectedPostURL}>
            <div className="btn-circle" style={{ backgroundColor: attributes.btnColor }}>
              <i className="fal fa-arrow-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);
