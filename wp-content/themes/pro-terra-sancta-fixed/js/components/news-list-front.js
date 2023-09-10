import React, { useState, Fragment, useEffect } from 'react';
import Anime from '@mollycule/react-anime';

const buildCategoryText = (el) => {
  if (el.term && el.term[0] && el.term[0].name) {
    return el.term[0].name;
  }

  return '';
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

  const articlesCount = page === 1 ? 7 : 6;
  const offset = page === 1 ? 0 : 7 + (page - 2) * 6;

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

const LastNews = ({ cardColor, cat, postType }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(true);

  useEffect(() => {
    loadMore(page, setPage, cat, posts, setPosts, setLoading, postType, setShowMoreButton);
  }, []);

  return (
    <Fragment>
      {posts && posts.length > 0 ? (
        <Fragment>
          <div
            className="background-div"
            style={{
              backgroundImage: `url(${posts[0]['image-full']})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="container h-100 pt-0">
              <div className="row align-items-center h-100">
                <div className="d-none col-4 d-md-flex" style={{ minHeight: '360px' }} />
                <div className="col-12 col-md-8 d-flex" style={{ minHeight: '360px' }}>
                  <a href={posts[0].link} className="cover-text-block">
                    <Anime
                      in
                      duration={1500}
                      appear
                      onEntering={{
                        translateY: [25, 0],
                        opacity: [0, 1],
                        duration: 2000,
                        easing: 'easeOutElastic(2, 1)',
                      }}
                    >
                      <div className="news-teaser-date">
                        {posts[0].date}
                        <span className="news-teaser-tag pl-1">{buildCategoryText(posts[0])}</span>
                      </div>
                    </Anime>
                    <Anime
                      in
                      duration={1500}
                      appear
                      onEntering={{
                        translateY: [25, 0],
                        opacity: [0, 1],
                        duration: 2000,
                        delay: 500,
                        easing: 'easeOutElastic(2, 1)',
                      }}
                    >
                      <div className="news-teaser-title" dangerouslySetInnerHTML={{ __html: `${posts[0].title}` }} />
                    </Anime>
                    <div
                      className="cover-section-text"
                      dangerouslySetInnerHTML={{ __html: `${posts[0].excerpt.slice(0, 1000)} (...)` }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row" style={{ position: 'relative' }}>
              {posts.map((el, index) =>
                index === 0 ? (
                  <Fragment key={el.id} />
                ) : (
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
                      <div style={{ backgroundColor: cardColor, height: '445px' }}>
                        <a href={el.link}>
                          <img
                            height="225"
                            width="410"
                            src={el['image-thumb']}
                            alt={el['image-thumb']}
                            loading="lazy"
                            style={{ height: '225px', width: '100%', objectFit: 'cover' }}
                          />
                          <div className="news-teaser-date pt-4 px-4">
                            {el.date}
                            <span className="news-teaser-tag ps-1">{buildCategoryText(el)}</span>
                          </div>
                          <div
                            className="news-teaser-title px-4 pb-4"
                            dangerouslySetInnerHTML={{ __html: `${el.title}` }}
                          />
                        </a>
                      </div>
                    </div>
                  </Anime>
                ),
              )}
              {showMoreButton && (
                <div className="col-12 pt-4 pb-4 mb-2 d-flex">
                  <button
                    className="btn btn-primary m-auto"
                    style={{ display: loading ? 'none' : 'block' }}
                    onClick={() =>
                      loadMore(page, setPage, cat, posts, setPosts, setLoading, postType, setShowMoreButton)
                    }
                  >
                    Mostra altri articoli
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

export default LastNews;
