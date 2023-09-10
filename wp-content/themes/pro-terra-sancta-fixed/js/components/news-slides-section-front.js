import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const buildTitleText = (text) => text;

const buildCategoryText = (el) => {
  if (el.category && el.category[0] && el.category[0].name) {
    return el.category[0].name;
  }

  return '-';
};

const fetchPosts = (cat, postType) => {
  const category = cat && cat !== '-1' ? `&categories=${cat}` : '';
  const type = postType && postType !== '-1' ? `&post_type=${postType}` : '';
  return fetch(`/wp-json/proterrasancta-api/v1/posts?per_page=6&offset=0${type}${category}&lang=${window.language}`)
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

const NewsSlidesSection = ({ cat, postType }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadMore(cat, postType, posts, setPosts);
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
                  src={el['image-thumb']}
                  alt={el['image-thumb']}
                  loading="lazy"
                  style={{ height: '70%', width: '100%', objectFit: 'cover' }}
                />
                <div className="news-teaser-date pt-2 pt-md-4 px-4">
                  {el.date}
                  <span className="news-teaser-tag pl-1">{el.term && el.term[0] ? el.term[0].name : ''}</span>
                </div>
                <div className="news-teaser-title px-4" dangerouslySetInnerHTML={{ __html: el.title }} />
              </a>
              <div className="news-card-hover" style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
                <a href={el.link}>
                  <img
                    height="330"
                    width={index % 2 === 0 ? '330' : '540'}
                    src={el['image-thumb']}
                    alt={el['image-thumb']}
                    loading="lazy"
                    style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                  />
                  <div className="text-white position-absolute fixed-bottom" style={{ padding: '40px' }}>
                    <div
                      className="news-teaser-title pt-2 text-white"
                      dangerouslySetInnerHTML={{ __html: buildTitleText(el.title) }}
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
