import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { DateTime } from 'luxon';

const displayImage = (el) => {
  const imageList =
    el._embedded &&
    el._embedded['wp:featuredmedia'] &&
    el._embedded['wp:featuredmedia'][0] &&
    el._embedded['wp:featuredmedia'][0].media_details &&
    el._embedded['wp:featuredmedia'][0].media_details.sizes &&
    el._embedded['wp:featuredmedia'][0].media_details.sizes
      ? el._embedded['wp:featuredmedia'][0].media_details.sizes
      : undefined;

  if (!imageList) {
    return '/wp-content/themes/pro-terra-sancta/assets/images/logo-long.png';
    // eslint-disable-next-line no-else-return
  } else if (imageList['main-thumb']) {
    return `${el._embedded['wp:featuredmedia'][0].media_details.sizes['main-thumb'].source_url}.webp`;
    // eslint-disable-next-line no-else-return
  } else if (imageList.medium) {
    return `${el._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}`;
  }

  return `${el._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}.webp`;
};

const displayTitle = (el) =>
  el._embedded &&
  el._embedded['wp:featuredmedia'] &&
  el._embedded['wp:featuredmedia'][0] &&
  el._embedded['wp:featuredmedia'][0].title
    ? el._embedded['wp:featuredmedia'][0].title.rendered
    : ' - ';

const buildTitleText = (text) => {
  if (text.length > 52) {
    return `${text.slice(0, 52)} ...`;
  }
  return text;
};

const buildCategoryText = (el) => {
  if (
    el.taxonomy_info &&
    el.taxonomy_info.category &&
    el.taxonomy_info.category[0] &&
    el.taxonomy_info.category[0].label
  ) {
    return el.taxonomy_info.category[0].label;
  }

  return '-';
};

const fetchPosts = (page, cat, postType) => {
  const category = cat && cat !== '-1' ? `&categories=${cat}` : '';
  let projectFetch = `/wp-json/wp/v2/project?_embed=true&page=${page}&per_page=9&order=desc&orderby=date${category}&lang=${window.language}`;

  if (postType === 'post') {
    projectFetch = `/wp-json/wp/v2/posts?_embed=true&page=${page}&per_page=6&order=desc&orderby=date${category}&lang=${window.language}`;
  }

  return fetch(projectFetch)
    .then(
      (response) => {
        const headers = [...response.headers.entries()];
        const nItems = headers.find((el) => el[0] === 'x-wp-total');
        return Promise.all([nItems[1], response.json()]);
        // return { nItems, posts: response.json() };
      },
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

const loadMore = (page, setPage, cat, postType, posts, setPosts) => {
  fetchPosts(page, cat, postType).then((result) => {
    if (result[1].length > 0) {
      const updatedPosts = [...posts];
      updatedPosts.push(...result[1]);
      setPosts(updatedPosts);
      setPage(page + 1);
    }
  });
};

const NewsSlidesSection = ({ cat, postType }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMore(page, setPage, cat, postType, posts, setPosts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      <div className="col-12 position-relative">
        <Splide
          options={{
            arrows: true,
            pagination: false,
            perPage: 2,
            perMove: 1,
            type: 'loop',
            autoWidth: true,
            padding: {
              right: 0,
            },
            breakpoints: {
              800: {
                perPage: 2,
                padding: {
                  right: 25,
                },
              },
              575: {
                perPage: 1,
                padding: {
                  right: 60,
                },
              },
            },
          }}
        >
          {posts.map((el, index) => (
            <SplideSlide key={index} className={`news-column  ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <a
                href={el.link}
                className="news-card position-relative"
                style={{ backgroundColor: 'white', height: '100%', width: '100%' }}
              >
                <img
                  height="231"
                  width={index % 2 === 0 ? '330' : '540'}
                  src={displayImage(el)}
                  alt={displayTitle(el)}
                  loading="lazy"
                  style={{ height: '70%', width: '100%', objectFit: 'cover' }}
                />
                <div className="news-teaser-date pt-2 pt-md-4 px-4">
                  {DateTime.fromISO(el.date).toFormat('d.M.y')}
                  <span className="news-teaser-tag pl-1">
                    {el.taxonomy_info.post_tag && el.taxonomy_info.post_tag[0]
                      ? el.taxonomy_info.post_tag[0].label
                      : ''}
                  </span>
                </div>
                <div
                  className="news-teaser-title px-4 pb-4"
                  dangerouslySetInnerHTML={{ __html: `${el.title.rendered.slice(0, 40)} (...)` }}
                />
              </a>
              <div className="news-card-hover" style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
                <a href={el.link}>
                  <img
                    height="330"
                    width={index % 2 === 0 ? '330' : '540'}
                    src={displayImage(el)}
                    alt={displayTitle(el)}
                    loading="lazy"
                    style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                  />
                  <div className="text-white position-absolute fixed-bottom" style={{ padding: '40px' }}>
                    <div
                      className="news-teaser-title pt-2 text-white"
                      dangerouslySetInnerHTML={{ __html: buildTitleText(el.title.rendered) }}
                      style={{ fontSize: '20px' }}
                    />
                    <div className="news-teaser-heading text-white" style={{ fontSize: '16px' }}>
                      {buildCategoryText(el)}
                    </div>
                  </div>
                </a>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default NewsSlidesSection;
