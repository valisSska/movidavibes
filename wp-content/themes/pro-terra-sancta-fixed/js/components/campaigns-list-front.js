/* eslint-disable no-console */
/* eslint-disable  no-unused-vars */
/* eslint-disable   consistent-return */
/* eslint-disable   no-undef */
import React, { useState, Fragment, useEffect } from 'react';
import moment from 'moment';
import Anime from '@mollycule/react-anime';
import locale from '../locale.json';

const buildCategoryText = (el) => {
  if (el.project && el.project[0] && el.project[0].name) {
    return el.project[0].name;
  }
  return '';
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

const fetchPosts = (page, count, cat, postType) => {
  const category = cat && cat !== '-1' ? `&categories=${cat}` : '';
  const type = postType && postType !== '-1' ? `&post_type=${postType}` : '';
  return fetch(
    `/wp-json/proterrasancta-api/v1/posts?per_page=${count}&offset=${page}${type}${category}&lang=${window.language}`,
  )
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

const loadMore = (page, setPage, cat, posts, setPosts, setLoading, postType, setShowMoreButton) => {
  setLoading(true);

  const articlesCount = 6;
  const offset = page * 6;

  fetchPosts(offset, articlesCount, cat, postType).then((result) => {
    if (result.length > 0) {
      const updatedPosts = [...posts];
      updatedPosts.push(...result);
      setPosts(updatedPosts);
      setPage(page + 1);
      setLoading(false);
    }
    if (result.length < articlesCount) {
      setShowMoreButton(false);
    }
  });
};
const ControlTime = ({ temp, text }) => {
  const time = temp;
  const txt = text;
  const dateA = moment(time);
  const SixM = moment(1658075068);
  if (!dateA.isAfter(SixM)) {
    return (
      <div className="terminated">
        <p
          style={{
            fontSize: '25px',
            fontFamily: 'Arial Black',
            opacity: '0.8',
          }}
          className="terminated-text"
        >
          {txt}
        </p>
      </div>
    );
  }
  return [];
};

const CampaignsList = ({ cat, postType }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(true);

  useEffect(() => {
    loadMore(page, setPage, cat, posts, setPosts, setLoading, postType, setShowMoreButton);
  }, []);

  return (
    <Fragment>
      {posts && posts.length > 0 ? (
        <Fragment>
          <div className="container">
            <div className="row" style={{ position: 'relative' }}>
              {posts.map((el, index) => (
                <Anime
                  key={el.id}
                  in
                  duration={1500}
                  appear
                  onEntering={{
                    translateY: [100, 0],
                    opacity: [0, 1],
                    delay: (index % 6) * 100,
                    easing: 'easeOutElastic(2, .5)',
                  }}
                >
                  <div key={el.id} className="col-12 col-sm-6 col-lg-4 news-column" style={{ opacity: 0 }}>
                    <div className="cmp-container" style={{ backgroundColor: buildCategoryColor(el), height: '445px' }}>
                      <a className="text-Category">{buildCategoryText(el)}</a>
                      <a href={el.link}>
                        <ControlTime temp={el.date_timestamp} text={locale[window.language].terminato} />
                        <img
                          height="225"
                          width="410"
                          src={el['image-thumb']}
                          alt={el['image-thumb']}
                          loading="lazy"
                          style={{ height: '225px', width: '100%', objectFit: 'cover' }}
                        />
                        <div className="news-teaser-date pt-4 px-4">{el.dateY}</div>
                        <div
                          className="news-teaser-title px-4 pb-4"
                          dangerouslySetInnerHTML={{ __html: `${el.title}` }}
                        />
                      </a>
                      <div>
                        <a href={el.link}>
                          <button
                            type="button"
                            className="btn-campaign btn btn-donate btn-rounded btn-block btn-primary"
                          >
                            <a className="btn-campaign-text">{locale[window.language].sostieni}</a>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Anime>
              ))}
              {showMoreButton && (
                <div className="col-12 pt-4 pb-4 mb-2 d-flex">
                  <button
                    className="btn btn-primary m-auto"
                    style={{ display: loading ? 'none' : 'block' }}
                    onClick={() =>
                      loadMore(page, setPage, cat, posts, setPosts, setLoading, postType, setShowMoreButton)
                    }
                  >
                    Guarda altre campagne
                  </button>
                </div>
              )}
              <div className="col-12 py-4" style={{ display: loading ? 'flex' : 'none' }}>
                <div className="spinner-border text-primary m-auto" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <div className="loading" />
      )}
    </Fragment>
  );
};

export default CampaignsList;
