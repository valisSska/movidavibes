import React, { useState, Fragment, useEffect } from 'react';
import Anime from '@mollycule/react-anime';

const buildCategoryText = (el) => {
  if (el._embedded && el._embedded['wp:term'] && el._embedded['wp:term'][0]) {
    return el._embedded['wp:term'][0].map((term) => term.name).join(', ');
  }

  return 'Nessuna categoria';
};

const fetchPosts = (page, cat, postType) => {
  const category = cat && cat !== '-1' ? `&categories=${cat}` : '';
  return fetch(`/wp-json/wp/v2/${postType}?_embed=true&page=${page}&per_page=6&order=desc&orderby=date${category}`)
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

const loadMore = (page, setPage, cat, postType, posts, setPosts, setTotal) => {
  const previousScrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  fetchPosts(page, cat, postType).then((result) => {
    if (result && result[1] && result[1].length > 0) {
      const updatedPosts = [...posts];
      updatedPosts.push(...result[1]);
      setPosts(updatedPosts);
      setPage(page + 1);
      setTotal(result[0]);
      // eslint-disable-next-line no-multi-assign
      document.documentElement.scrollTop = document.body.scrollTop = previousScrollPosition - 50;
    }
  });
};

const NewsListSection = ({ cardColor, cat, postType }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadMore(page, setPage, cat, postType, posts, setPosts, setTotal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      <div className="col-12 news-column text-center text-md-left" style={{ fontSize: '18px ' }}>
        Showing 1 - {6 * (page - 1) > total ? total : 6 * (page - 1)} of {total} results
      </div>
      {posts && posts.length > 0 ? (
        <Fragment>
          {posts.map((el, index) => (
            <Anime
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
                <div
                  className="shadow-md p-4 news-card"
                  style={{ backgroundColor: cardColor, borderRadius: '20px', height: '410px' }}
                >
                  <a href={el.link}>
                    <img
                      src={el._embedded['wp:featuredmedia'][0].source_url}
                      alt={
                        el._embedded['wp:featuredmedia'] &&
                        el._embedded['wp:featuredmedia'][0] &&
                        el._embedded['wp:featuredmedia'][0].title
                          ? el._embedded['wp:featuredmedia'][0].title.rendered
                          : 'logo-terra-sancta'
                      }
                      style={{ height: '292px', width: '100%', objectFit: 'cover' }}
                    />
                    <div className="news-teaser-title pt-2">{el.title.rendered}</div>
                    <div className="news-teaser-heading">{buildCategoryText(el)}</div>
                  </a>
                </div>
                <a
                  className="shadow-md news-card-hover position-relative"
                  href={el.link}
                  style={{
                    borderRadius: '20px',
                    height: '410px',
                    width: '100%',
                    opacity: '1',
                  }}
                >
                  <img
                    src={el.custom_fields[0] ? el.custom_fields[0] : el._embedded['wp:featuredmedia'][0].source_url}
                    alt={
                      el._embedded['wp:featuredmedia'] &&
                      el._embedded['wp:featuredmedia'][0] &&
                      el._embedded['wp:featuredmedia'][0].title
                        ? el._embedded['wp:featuredmedia'][0].title.rendered
                        : 'logo-terra-sancta'
                    }
                    style={{
                      borderRadius: '20px',
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(70%)',
                    }}
                  />
                  <div className="text-white p-4 position-absolute fixed-bottom">
                    <div className="news-teaser-title py-3">{el.title.rendered}</div>
                    <div className="news-teaser-heading">{buildCategoryText(el)}</div>
                  </div>
                </a>
              </div>
            </Anime>
          ))}
        </Fragment>
      ) : (
        <div className="loading" />
      )}
      <div className="col-12 py-4 d-flex">
        <button
          className="btn bg-secondary text-white mx-auto waves-effect waves-light"
          onClick={() => loadMore(page, setPage, cat, postType, posts, setPosts, setTotal)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default NewsListSection;
