import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import locale from '../locale.json';

const buildCategoryText = (el) => {
  if (el.project && el.project[0] && el.project[0].name) {
    return el.project[0].name;
  }

  return '';
};

const fetchPosts = (cat, postType) => {
  const category = cat && cat !== '-1' ? `&categories=${cat}` : '';
  const type = postType && postType !== '-1' ? `&post_type=${postType}` : '';
  return fetch(`/wp-json/proterrasancta-api/v1/posts?per_page=3&offset=0${type}${category}&lang=${window.language}`)
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

const loadMore = (cat, postType, posts, setPosts) => {
  fetchPosts(cat, postType).then((result) => {
    if (result.length > 0) {
      const updatedPosts = [...posts];
      updatedPosts.push(...result);
      setPosts(updatedPosts);
    }
  });
};

const HighlightsSlidesSection = ({ cat, postType }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadMore(cat, postType, posts, setPosts);
  }, []);

  return (
    <div className="row">
      <div className="col-12 position-relative">
        <Splide
          options={{
            arrows: false,
            pagination: false,
            perPage: 3,
            perMove: 1,
            autoWidth: false,
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
            <SplideSlide key={index} className={`news-column same`}>
              <a href={el.link} className="news-card position-relative d-grid" style={{ backgroundColor: 'white' }}>
                <img
                  height="240"
                  width="360"
                  src={el['image-thumb']}
                  alt={el['image-thumb']}
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
                <div className="news-teaser-tag">{buildCategoryText(el)}</div>
                <h4 className="news-teaser-title" dangerouslySetInnerHTML={{ __html: el.title }} />
                <div
                  className="news-teaser-heading has-text-align-center has-small-font-size text-center"
                  dangerouslySetInnerHTML={{ __html: el.excerpt }}
                />
                <a href={el.link} className="btn btn-white m-auto my-4">
                  {locale[window.language].donate}
                </a>
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default HighlightsSlidesSection;
