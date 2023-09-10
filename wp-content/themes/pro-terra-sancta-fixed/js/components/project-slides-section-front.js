import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const buildTitleText = (text) => {
  if (text.length > 52) {
    return `${text.slice(0, 52)} ...`;
  }
  return text;
};

const buildCategoryText = (el) => {
  if (el.project && el.project[0] && el.project[0].name) {
    return el.project[0].name;
  }

  return '-';
};

const buildCategoryColor = (el) => {
  let category = 0;
  if (el.project && el.project[0] && el.project[0].term_id) {
    category = el.project[0].term_id;
  }

  switch (category) {
    case 9830:
    case 9749:
    case 9442:
    case 9832:
    case 9836:
      return '#374856';
    case 9750:
    case 9443:
    case 9829:
    case 9835:
    case 9833:
      return '#E26E0E';
    case 9741:
    case 9441:
    case 9831:
    case 9837:
    case 9834:
      return '#D31418';
    default:
      return '#506679';
  }
};

const fetchPosts = (cat, postType) => {
  const category = cat && cat !== '-1' ? `&categories=${cat}` : '';
  const type = postType && postType !== '-1' ? `&post_type=${postType}` : '';
  return fetch(`/wp-json/proterrasancta-api/v1/posts?per_page=9&offset=0${type}${category}&lang=${window.language}`)
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

const ProjectSlidesSection = ({ cat, postType }) => {
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
            perPage: 3,
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
            <SplideSlide key={index} className="news-column projects">
              <a
                href={el.link}
                className="shadow-md news-card position-relative"
                style={{ backgroundColor: buildCategoryColor(el), height: '100%', width: '100%' }}
              >
                <div>
                  <div
                    className="news-teaser-title pt-2"
                    dangerouslySetInnerHTML={{ __html: buildTitleText(el.title) }}
                  />
                  <div className="news-teaser-heading">{buildCategoryText(el)}</div>
                  <div
                    className="news-teaser-excerpt"
                    dangerouslySetInnerHTML={{ __html: `${el.excerpt.slice(0, 100)} (...)` }}
                  />
                </div>
              </a>
              <div
                className="shadow-md news-card-hover"
                style={{ backgroundColor: buildCategoryColor(el), height: '100%', width: '100%' }}
              >
                <a href={el.link}>
                  <img
                    height="231"
                    width="360"
                    src={el['image-thumb']}
                    alt={el['image-thumb']}
                    loading="lazy"
                    style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                  />
                  <div className="text-white position-absolute fixed-bottom" style={{ padding: '40px' }}>
                    <div
                      className="news-teaser-title pt-2"
                      dangerouslySetInnerHTML={{ __html: buildTitleText(el.title) }}
                      style={{ fontSize: '20px' }}
                    />
                    <div className="news-teaser-heading" style={{ fontSize: '16px' }}>
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

export default ProjectSlidesSection;
