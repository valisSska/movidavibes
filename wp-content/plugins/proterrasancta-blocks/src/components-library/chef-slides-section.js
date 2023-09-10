import React, { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { dateI18n } from '@wordpress/date';
import paletteRovagnatiUS from './palette-proterrasancta';

export const editChefSlidesSection = withSelect((select) => ({
  pages: select('core').getEntityRecords('postType', 'page'),
  categories: select('core').getEntityRecords('taxonomy', 'category'),
  news: select('core').getEntityRecords('postType', 'post', {
    per_page: 100,
    order: 'desc',
    orderby: 'date',
  }),
}))(({ news, categories, className, attributes, setAttributes }) => {
  const { categoryId, postType } = attributes;
  const onChangeLink = (value) => {
    setAttributes({ link: value });
  };

  const onChangeButtonText = (value) => {
    setAttributes({ btnText: value });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onChangeCardColor = (color) => {
    setAttributes({ cardColor: color });
  };

  const listCategories = categories
    ? categories.map((category) => ({
        value: category.id,
        label: category.name,
      }))
    : [{ value: 0, name: 'nessuna categoria' }];
  listCategories.unshift({ value: -1, name: 'nessuna categoria' });

  const firstNews = news
    ? news[0]
    : { date: new Date(), excerpt: { rendered: '' }, title: { rendered: '' }, slug: '/' };

  const secondNews = news
    ? news[1]
    : { date: new Date(), excerpt: { rendered: '' }, title: { rendered: '' }, slug: '/' };

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
              value: 'product',
              label: 'Products',
            },
            {
              value: 'recipe',
              label: 'Recipes',
            },
            {
              value: 'chef-card',
              label: 'Chefs',
            },
            {
              value: 'posts',
              label: 'News',
            },
          ]}
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
          title={'Card Color'}
          colorSettings={[
            {
              colors: paletteRovagnatiUS,
              value: attributes.cardColor,
              onChange: onChangeCardColor,
              label: __('Card Color'),
            },
          ]}
        />
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
        <div className="col-6 p-2">
          <img
            src={firstNews.featured_image_src_large ? firstNews.featured_image_src_large[0] : ''}
            alt={firstNews.featured_image_src_large ? firstNews.featured_image_src_large[0] : ''}
            style={{ height: '300px', width: '100%', objectFit: 'cover' }}
          />
          <div className="news-teaser-date">{dateI18n('d F Y', firstNews.date)}</div>
          <div className="news-teaser-title">{firstNews.title.rendered}</div>
        </div>
        <div className="col-6 p-2">
          <img
            src={secondNews.featured_image_src_large ? secondNews.featured_image_src_large[0] : ''}
            alt={secondNews.featured_image_src_large ? secondNews.featured_image_src_large[0] : ''}
            style={{ height: '300px', width: '100%', objectFit: 'cover' }}
          />
          <div className="news-teaser-date">{dateI18n('d F Y', secondNews.date)}</div>
          <div className="news-teaser-title">{secondNews.title.rendered}</div>
        </div>
      </div>
    </div>
  );
});

export const saveChefSlidesSection = ({ attributes }) => (
  <div style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="container">
      <div
        id="chef-slides-section-root"
        data-card-color={attributes.cardColor}
        data-cat={attributes.categoryId}
        data-post-type={attributes.postType}
        data-link={attributes.link}
        data-btn-text={attributes.btnText}
      />
    </div>
  </div>
);
