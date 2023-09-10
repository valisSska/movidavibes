import React, { __ } from '@wordpress/i18n';
import { RichText, InspectorControls, PanelColorSettings, MediaUpload } from '@wordpress/block-editor';
import { Button, SelectControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { dateI18n } from '@wordpress/date';
import paletteProterrasancta from './palette-proterrasancta';

export const editSectionLastNews = withSelect((select) => ({
  pages: select('core').getEntityRecords('postType', 'page'),
  categories: select('core').getEntityRecords('taxonomy', 'category'),
  news: select('core').getEntityRecords('postType', 'post', {
    per_page: 2,
    order: 'desc',
    orderby: 'date',
  }),
}))(({ pages, news, categories, className, attributes, setAttributes }) => {
  const { mediaID, mediaURL, selectedPost, categoryId, postType } = attributes;
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
    : [{ value: 0, label: 'Seleziona una sezione', url: '' }];

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
      <div className="row no-gutters">
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
              {!mediaID ? __('Upload Image', 'ce-lab') : <img src={mediaURL} alt={__('Last news Image', 'ce-lab')} />}
            </Button>
          )}
        />
      </div>
      <div
        className="row no-gutters"
        style={{
          display: 'flex',
        }}
      >
        <div className="col-6 news-column" style={{ padding: '10px' }}>
          <div className="news-teaser-heading">comunicato stampa</div>
          <div className="news-teaser-date">{dateI18n('d F Y', firstNews.date)}</div>
          <div className="news-teaser-title">{firstNews.title.rendered}</div>
          <div className="news-teaser-body" dangerouslySetInnerHTML={{ __html: firstNews.excerpt.rendered }} />
          <a href={`/${firstNews.slug}`}>
            <div className="btn-circle" style={{ backgroundColor: attributes.btnColor }}>
              <i className="fal fa-arrow-right" />
            </div>
          </a>
        </div>
        <div className="col-6 news-column" style={{ padding: '10px' }}>
          <div className="news-teaser-heading">comunicato stampa</div>
          <div className="news-teaser-date">{dateI18n('d F Y', secondNews.date)}</div>
          <div className="news-teaser-title">{secondNews.title.rendered}</div>
          <div className="news-teaser-body" dangerouslySetInnerHTML={{ __html: secondNews.excerpt.rendered }} />
          <a href={`/${secondNews.slug}`}>
            <div className="btn-circle" style={{ backgroundColor: attributes.btnColor }}>
              <i className="fal fa-arrow-right" />
            </div>
          </a>
          <a href={attributes.selectedPostURL} className="text-href" style={{ float: 'right' }}>
            <span className="news-teaser-heading" style={{ marginRight: '10px' }}>
              tutte le news
            </span>
            <div className="btn-circle-small" style={{ backgroundColor: attributes.btnColor }}>
              <i className="fal fa-arrow-right" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
});

export const saveSectionLastNews = ({ attributes }) => (
  <div style={{ backgroundColor: attributes.backgroundColor }}>
    <div className="container" style={{ backgroundImage: `url(${attributes.mediaURL})` }}>
      <div className="row">
        <div className="col-12 col-md-4 title" style={{ color: attributes.textColor }}>
          {attributes.title}
        </div>
        <div
          id="last-news-root"
          data-btn-href={attributes.selectedPostURL}
          data-btn-color={attributes.btnColor}
          data-cat={attributes.categoryId}
          data-post-type={attributes.postType}
          className="col-12 col-md-8 row"
        />
      </div>
    </div>
  </div>
);
