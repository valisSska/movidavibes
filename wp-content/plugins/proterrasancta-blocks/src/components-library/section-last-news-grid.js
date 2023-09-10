import React, { __ } from '@wordpress/i18n';
import { RichText, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import paletteProterrasancta from './palette-proterrasancta';

export const editSectionLastNewsGrid = withSelect((select) => {
  const { getMedia } = select('core');
  const posts = select('core').getEntityRecords('postType', 'project', {
    per_page: 4,
    order: 'desc',
    orderby: 'date',
  });

  let postAndMedia = [];
  if (posts) {
    postAndMedia = posts.map((el) => {
      const featuredImageId = el.featured_media;
      const media = getMedia(featuredImageId);
      return {
        ...el,
        media: media || {},
      };
    });
  }

  return {
    pages: select('core').getEntityRecords('postType', 'page'),
    categories: select('core').getEntityRecords('taxonomy', 'category'),
    news: postAndMedia,
  };
})(({ pages, news, categories, className, attributes, setAttributes }) => {
  const { selectedPost, categoryId, postType } = attributes;
  const onChangeTitle = (newContent) => {
    setAttributes({ title: newContent });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onChangeTitleColor = (color) => {
    setAttributes({ titleColor: color });
  };

  const onChangeButtonColor = (color) => {
    setAttributes({ btnColor: color });
  };

  const listPages = pages
    ? pages.map((page) => ({
        value: page.id,
        label: page.title.rendered,
        url: page.link,
      }))
    : [{ value: 0, label: 'Seleziona una sezione', url: '' }];

  const listCategories = categories
    ? categories.map((category) => ({
        value: category.id,
        label: category.name,
      }))
    : [{ value: 0, name: 'nessuna categoria' }];
  listCategories.unshift({ value: -1, name: 'nessuna categoria' });

  const onChangeSelectPost = (value) => {
    const thisPage = listPages.find((page) => page.value === Number.parseInt(value, 10));
    setAttributes({
      selectedPost: Number.parseInt(value, 10),
      selectedPostURL: thisPage ? thisPage.url : '',
    });
  };

  const onChangeSelectCategory = (value) => {
    setAttributes({
      categoryId: Number.parseInt(value, 10),
    });
  };

  const onChangePostType = (value) => {
    setAttributes({
      postType: value,
    });
  };

  return (
    <div
      style={{
        backgroundColor: attributes.backgroundColor,
      }}
      className={className}
    >
      <InspectorControls>
        <SelectControl
          onChange={onChangePostType}
          value={postType}
          label={__('Seleziona una Tipo Post')}
          options={[
            {
              value: 'project',
              label: 'Projects',
            },
            {
              value: 'posts',
              label: 'News',
            },
          ]}
        />
        <SelectControl
          onChange={onChangeSelectPost}
          value={selectedPost}
          label={__('Seleziona una Sezione')}
          options={listPages}
        />
        <SelectControl
          onChange={onChangeSelectCategory}
          value={categoryId}
          label={__('Seleziona una Categoria')}
          options={listCategories}
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
              value: attributes.titleColor,
              onChange: onChangeTitleColor,
              label: __('Title Color'),
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
      <div className="row no-gutters">
        <RichText
          className="title"
          style={{ flexGrow: 1, color: attributes.titleColor }}
          tagName="div"
          placeholder={__('Scrivi il titolo …', 'ce-lab')}
          onChange={onChangeTitle}
          value={attributes.title}
        />
      </div>
      <div className="row no-gutters" style={{ display: 'flex', color: attributes.textColor }}>
        {news.map((el, index) => (
          <div key={index} className="col-6 p-1">
            <div
              className="p-2"
              style={{
                backgroundImage: `url(${el.media.source_url})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="grid-teaser-heading">{attributes.title}</div>
              <div className="grid-teaser-title">{el.title.rendered}</div>
              <a href={el.link}>
                <div className="btn-circle-small" style={{ backgroundColor: attributes.btnColor }}>
                  <i className="fal fa-arrow-right" style={{ color: attributes.titleColor }} />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export const saveSectionLastNewsGrid = ({ attributes }) => (
  <div style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="container">
      <div className="row">
        <RichText.Content
          className="col-12 col-md-4 title"
          style={{ color: attributes.titleColor }}
          tagName="div"
          value={attributes.title}
        />
        <div className="col-12 col-md-8 filler" />
      </div>
    </div>
    <div
      id="last-news-grid-root"
      className="container"
      data-cat={attributes.categoryId}
      data-btn-href={attributes.selectedPostURL}
      data-btn-color={attributes.btnColor}
      data-title-text={attributes.title}
      data-title-color={attributes.titleColor}
      data-post-type={attributes.postType}
      style={{ color: attributes.textColor }}
    />
  </div>
);
