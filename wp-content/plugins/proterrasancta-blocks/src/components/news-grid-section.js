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

export const editNewsGridSection = withSelect((select) => ({
  categories: select('core').getEntityRecords('taxonomy', 'category'),
  news: select('core').getEntityRecords('postType', 'project', {
    per_page: 100,
    order: 'desc',
    orderby: 'date',
  }),
}))(({ news, categories, className, attributes, setAttributes }) => {
  const listCategories = categories
    ? categories.map((category) => ({
        value: category.id,
        label: category.name,
      }))
    : [{ value: 0, name: 'nessuna categoria' }];
  listCategories.unshift({ value: -1, name: 'nessuna categoria' });

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onChangeCardColor = (color) => {
    setAttributes({ cardColor: color });
  };

  const onChangeMainTitle = (value) => {
    setAttributes({ mainTitle: value });
  };

  const onChangeBlock1Title = (value) => {
    setAttributes({ block1Title: value });
  };

  const onChangeBlock2Title = (value) => {
    setAttributes({ block2Title: value });
  };

  const onChangeBlock3Title = (value) => {
    setAttributes({ block3Title: value });
  };

  const onChangeBlock4Title = (value) => {
    setAttributes({ block4Title: value });
  };

  const onChangeButtonTextMain = (value) => {
    setAttributes({ btnTextMain: value });
  };

  const onChangeButtonTextBlock1 = (value) => {
    setAttributes({ btnTextBlock1: value });
  };

  const onChangeButtonTextBlock2 = (value) => {
    setAttributes({ btnTextBlock2: value });
  };

  const onChangeButtonTextBlock3 = (value) => {
    setAttributes({ btnTextBlock3: value });
  };

  const onChangeButtonTextBlock4 = (value) => {
    setAttributes({ btnTextBlock4: value });
  };

  const firstNews = news
    ? news[0]
    : { date: new Date(), excerpt: { rendered: '' }, title: { rendered: '' }, slug: '/' };

  const secondNews = news
    ? news[1]
    : { date: new Date(), excerpt: { rendered: '' }, title: { rendered: '' }, slug: '/' };

  const onChangePostTypeMain = (value) => {
    setAttributes({
      postTypeMain: value,
    });
  };

  const onChangePostTypeBlock1 = (value) => {
    setAttributes({
      postTypeBlock1: value,
    });
  };

  const onChangePostTypeBlock2 = (value) => {
    setAttributes({
      postTypeBlock2: value,
    });
  };

  const onChangePostTypeBlock3 = (value) => {
    setAttributes({
      postTypeBlock3: value,
    });
  };

  const onChangePostTypeBlock4 = (value) => {
    setAttributes({
      postTypeBlock4: value,
    });
  };

  const onChangeSelectCategoryMain = (value) => {
    setAttributes({
      categoryIdMain: Number.parseInt(value, 10),
    });
  };

  const onChangeSelectCategoryBlock1 = (value) => {
    setAttributes({
      categoryIdBlock1: Number.parseInt(value, 10),
    });
  };

  const onChangeSelectCategoryBlock2 = (value) => {
    setAttributes({
      categoryIdBlock2: Number.parseInt(value, 10),
    });
  };

  const onChangeSelectCategoryBlock3 = (value) => {
    setAttributes({
      categoryIdBlock3: Number.parseInt(value, 10),
    });
  };

  const onChangeSelectCategoryBlock4 = (value) => {
    setAttributes({
      categoryIdBlock4: Number.parseInt(value, 10),
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
          onChange={onChangePostTypeMain}
          value={attributes.postTypeMain}
          label={__('Seleziona Tipo Post Principale')}
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
            {
              value: 'page',
              label: 'Pagine',
            },
          ]}
        />
        <SelectControl
          onChange={onChangeSelectCategoryMain}
          value={attributes.categoryIdMain}
          label={__('Seleziona Categoria Principale')}
          options={listCategories}
        />
        <SelectControl
          onChange={onChangePostTypeBlock1}
          value={attributes.postTypeBlock1}
          label={__('Seleziona Tipo Post Blocco 1')}
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
            {
              value: 'page',
              label: 'Pagine',
            },
          ]}
        />
        <SelectControl
          onChange={onChangeSelectCategoryBlock1}
          value={attributes.categoryIdBlock1}
          label={__('Seleziona Categoria Blocco 1')}
          options={listCategories}
        />
        <SelectControl
          onChange={onChangePostTypeBlock2}
          value={attributes.postTypeBlock2}
          label={__('Seleziona Tipo Post Blocco 2')}
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
            {
              value: 'page',
              label: 'Pagine',
            },
          ]}
        />
        <SelectControl
          onChange={onChangeSelectCategoryBlock2}
          value={attributes.categoryIdBlock2}
          label={__('Seleziona Categoria Blocco 2')}
          options={listCategories}
        />
        <SelectControl
          onChange={onChangePostTypeBlock3}
          value={attributes.postTypeBlock3}
          label={__('Seleziona Tipo Post Blocco 3')}
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
            {
              value: 'page',
              label: 'Pagine',
            },
          ]}
        />
        <SelectControl
          onChange={onChangeSelectCategoryBlock3}
          value={attributes.categoryIdBlock3}
          label={__('Seleziona Categoria Blocco 3')}
          options={listCategories}
        />
        <SelectControl
          onChange={onChangePostTypeBlock4}
          value={attributes.postTypeBlock4}
          label={__('Seleziona Tipo Post Blocco 4')}
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
            {
              value: 'page',
              label: 'Pagine',
            },
          ]}
        />
        <SelectControl
          onChange={onChangeSelectCategoryBlock4}
          value={attributes.categoryIdBlock4}
          label={__('Seleziona Categoria Blocco 4')}
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
            <TextControl label="Titolo Principale" value={attributes.mainTitle} onChange={onChangeMainTitle} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Titolo Blocco 1" value={attributes.block1Title} onChange={onChangeBlock1Title} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Titolo Blocco 2" value={attributes.block2Title} onChange={onChangeBlock2Title} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Titolo Blocco 3" value={attributes.block3Title} onChange={onChangeBlock3Title} />
          </PanelRow>
          <PanelRow>
            <TextControl label="Titolo Blocco 4" value={attributes.block4Title} onChange={onChangeBlock4Title} />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="button text principale"
              value={attributes.btnTextMain}
              onChange={onChangeButtonTextMain}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="button text blocco 1"
              value={attributes.btnTextBlock1}
              onChange={onChangeButtonTextBlock1}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="button text blocco 2"
              value={attributes.btnTextBlock2}
              onChange={onChangeButtonTextBlock2}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="button text blocco 3"
              value={attributes.btnTextBlock3}
              onChange={onChangeButtonTextBlock3}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="button text blocco 4"
              value={attributes.btnTextBlock4}
              onChange={onChangeButtonTextBlock4}
            />
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

export const saveNewsGridSection = ({ attributes }) => (
  <div style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="container-fluid gx-0">
      <div
        id="news-grid-section-root"
        data-card-color={attributes.cardColor}
        data-post-type-main={attributes.postTypeMain}
        data-post-type-block1={attributes.postTypeBlock1}
        data-post-type-block2={attributes.postTypeBlock2}
        data-post-type-block3={attributes.postTypeBlock3}
        data-post-type-block4={attributes.postTypeBlock4}
        data-cat-main={attributes.categoryIdMain}
        data-cat-block1={attributes.categoryIdBlock1}
        data-cat-block2={attributes.categoryIdBlock2}
        data-cat-block3={attributes.categoryIdBlock3}
        data-cat-block4={attributes.categoryIdBlock4}
        data-btn-text-main={attributes.btnTextMain}
        data-btn-text-block1={attributes.btnTextBlock1}
        data-btn-text-block2={attributes.btnTextBlock2}
        data-btn-text-block3={attributes.btnTextBlock3}
        data-btn-text-block4={attributes.btnTextBlock4}
        data-main-title={attributes.mainTitle}
        data-block1-title={attributes.block1Title}
        data-block2-title={attributes.block2Title}
        data-block3-title={attributes.block3Title}
        data-block4-title={attributes.block4Title}
      />
    </div>
  </div>
);
