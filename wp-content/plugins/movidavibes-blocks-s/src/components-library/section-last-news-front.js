import React, { useState, useEffect, Fragment } from 'react';
import { DateTime } from 'luxon';

const buildCategoryText = (el) => {
  if (el._embedded && el._embedded['wp:term'] && el._embedded['wp:term'][0]) {
    return el._embedded['wp:term'][0].map((term) => term.name).join(', ');
  }

  return 'Nessuna categoria';
};

const fetchPosts = (cat, postType) => {
  const category = cat && cat !== '-1' ? `&categories=${cat}` : '';
  return fetch(`/wp-json/wp/v2/${postType}?_embed=true&per_page=2&order=desc&orderby=date${category}`)
    .then(
      (response) => response.json(),
      (error) => {
        throw new TypeError(error);
      },
    )
    .then((posts) => posts)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(`error: ${error}`);
      return [];
    });
};

const SectionLastNews = ({ btnColor, btnHref, cat, postType }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts(cat, postType).then((result) => {
      setPosts(result);
    });
  }, [cat, postType]);

  return (
    <Fragment>
      {posts.map((el, index) => (
        <div key={index} className="col-12 col-md-6 news-column">
          <div className="news-teaser-heading">{buildCategoryText(el)}</div>
          <div className="news-teaser-date">{DateTime.fromISO(el.date).toFormat('d LLLL Y')}</div>
          <div className="news-teaser-title">{el.title.rendered}</div>
          <div dangerouslySetInnerHTML={{ __html: el.excerpt.rendered }} />
          <a href={`/${el.slug}`}>
            <div className="btn-circle" style={{ backgroundColor: btnColor }}>
              <i className="fal fa-arrow-right" />
            </div>
          </a>
        </div>
      ))}
      <div className="col-12 pb-3">
        <a href={btnHref} style={{ float: 'right' }}>
          <span className="news-teaser-heading" style={{ marginRight: '10px' }}>
            tutte le news
          </span>
          <div className="btn-circle-small" style={{ backgroundColor: btnColor }}>
            <i className="fal fa-arrow-right" />
          </div>
        </a>
      </div>
    </Fragment>
  );
};

export default SectionLastNews;
