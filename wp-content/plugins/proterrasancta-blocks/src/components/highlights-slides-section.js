import React, { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import paletteProterrasancta from './palette-proterrasancta';

const buildCategoryText = (el) => {
  if (
    el.taxonomy_info &&
    el.taxonomy_info.project_name &&
    el.taxonomy_info.project_name[0] &&
    el.taxonomy_info.project_name[0].label
  ) {
    return el.taxonomy_info.project_name[0].label;
  }

  return 'Nessuna categoria';
};

const buildCategoryColor = (el) => {
  let category = 0;
  if (
    el.taxonomy_info &&
    el.taxonomy_info.project_name &&
    el.taxonomy_info.project_name[0] &&
    el.taxonomy_info.project_name[0].value
  ) {
    category = el.taxonomy_info.project_name[0].value;
  }

  switch (category) {
    case 9442:
      return '#374856';
    case 9443:
      return '#E26E0E';
    case 9441:
      return '#D31418';
    default:
      return '#506679';
  }
};

export const editHighlightsSlidesSection = withSelect((select) => ({
  categories: select('core').getEntityRecords('taxonomy', 'category'),
  news: select('core').getEntityRecords('postType', 'project', {
    per_page: 100,
    order: 'desc',
    orderby: 'date',
  }),
}))(({ news, categories, className, attributes, setAttributes }) => {
  const { postType, categoryId } = attributes;
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
              value: 'project',
              label: 'Projects',
            },
            {
              value: 'campaign',
              label: 'Campaigns',
            },
            {
              value: 'post',
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
          title={'Card Color'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
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
        <div className="col-6 p-2 news-card" style={{ backgroundColor: buildCategoryColor(firstNews) }}>
          <div className="news-teaser-title pt-2" dangerouslySetInnerHTML={{ __html: firstNews.title.rendered }} />
          <div className="news-teaser-heading">{buildCategoryText(firstNews)}</div>
          <div
            className="news-teaser-excerpt"
            dangerouslySetInnerHTML={{ __html: `${firstNews.excerpt.rendered.slice(0, 100)} (...)` }}
          />
        </div>
        <div className="col-6 p-2 news-card" style={{ backgroundColor: buildCategoryColor(secondNews) }}>
          <div className="news-teaser-title pt-2" dangerouslySetInnerHTML={{ __html: secondNews.title.rendered }} />
          <div className="news-teaser-heading">{buildCategoryText(secondNews)}</div>
          <div
            className="news-teaser-excerpt"
            dangerouslySetInnerHTML={{ __html: `${secondNews.excerpt.rendered.slice(0, 100)} (...)` }}
          />
        </div>
      </div>
    </div>
  );
});

export const saveHighlightsSlidesSection = ({ attributes }) => (
  <div style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="container">
      <div
        id="highlights-slides-section-root"
        data-card-color={attributes.cardColor}
        data-cat={attributes.categoryId}
        data-post-type={attributes.postType}
        data-link={attributes.link}
        data-btn-text={attributes.btnText}
      />
    </div>
  </div>
);
