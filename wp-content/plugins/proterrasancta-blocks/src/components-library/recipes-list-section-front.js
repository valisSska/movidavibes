import React, { useState, Fragment, useEffect } from 'react';
import Anime from '@mollycule/react-anime';

const chooseTaxonomy = (
  taxonomy,
  setTaxonomyFilter,
  loadMore,
  setPage,
  setPosts,
  page,
  cat,
  postType,
  posts,
  setTotal,
  taxonomyType,
  setLoading,
  cardsNumber,
) => {
  setTaxonomyFilter(taxonomy.id);
  setPage(1);
  setPosts([]);
  loadMore(1, setPage, cat, postType, [], setPosts, setTotal, taxonomyType, taxonomy.id, setLoading, cardsNumber);
};

const chefImage = (terms) => terms.find((el) => el[0].taxonomy === 'chef')[0].custom_fields[1];

const fetchPosts = (page, cat, postType, taxonomyType, taxonomyFilter, cardsNumber) => {
  const category = cat && cat !== '-1' ? `&categories=${cat}` : '';
  const taxonomy = taxonomyFilter && taxonomyFilter !== -1 ? `&${taxonomyType}=${taxonomyFilter}` : '';
  return fetch(
    `/wp-json/wp/v2/${postType}?_embed=true&page=${page}&per_page=${cardsNumber}&order=desc&orderby=date${category}${taxonomy}`,
  )
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

const fetchTaxonomy = (taxonomyType) =>
  fetch(`/wp-json/wp/v2/${taxonomyType}`)
    .then(
      (response) => response.json(),
      (error) => {
        throw new TypeError(error);
      },
    )
    .then((elements) => elements)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(`error: ${error}`);
      return [];
    });

const loadMore = (
  page,
  setPage,
  cat,
  postType,
  posts,
  setPosts,
  setTotal,
  taxonomyType,
  taxonomyFilter,
  setLoading,
  cardsNumber = 6,
) => {
  setLoading(true);
  const previousScrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  fetchPosts(page, cat, postType, taxonomyType, taxonomyFilter, cardsNumber).then((result) => {
    setLoading(false);
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

// eslint-disable-next-line object-curly-newline
const RecipeListSection = ({ cardColor, cat, postType, taxonomyType, link, btnText, cardsNumber }) => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [recipeTypes, setRecipeTypes] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [taxonomyFilter, setTaxonomyFilter] = useState(-1);

  useEffect(() => {
    loadMore(
      page,
      setPage,
      cat,
      postType,
      posts,
      setPosts,
      setTotal,
      taxonomyType,
      taxonomyFilter,
      setLoading,
      cardsNumber,
    );
    fetchTaxonomy(taxonomyType).then((result) => {
      if (result.length > 0) {
        setRecipeTypes(result);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div style={{ backgroundColor: '#CDDADC' }}>
        <div className="container">
          <div className="col-12 text-center hero-title" style={{ color: '#3F5E63', fontSize: '20px' }}>
            Category
          </div>
          <div className="row flex-nowrap justify-content-md-center no-gutters pb-2" style={{ overflowX: 'scroll' }}>
            {recipeTypes.map((el) => (
              <div
                className="shadow-md p-2 m-2"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  width: '130px',
                  minWidth: '130px',
                  fontSize: '16px',
                  color: '#B91521',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  chooseTaxonomy(
                    el,
                    setTaxonomyFilter,
                    loadMore,
                    setPage,
                    setPosts,
                    page,
                    cat,
                    postType,
                    posts,
                    setTotal,
                    taxonomyType,
                    setLoading,
                    cardsNumber,
                  )
                }
              >
                <div className="d-flex">
                  <img
                    src={el.custom_fields[1]}
                    alt={el.name}
                    style={{
                      height: '80px',
                      width: 'auto',
                      margin: 'auto',
                    }}
                  />
                </div>
                <div className="text-center text-wrap p-2">{el.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="recipes row">
          <div className="col-12 news-column text-center text-md-left" style={{ fontSize: '18px ' }}>
            Showing 1 - {6 * (page - 1) > total ? total : 6 * (page - 1)} of {total} results
          </div>
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
                    className="shadow-md news-card"
                    style={{ backgroundColor: cardColor, borderRadius: '20px', height: '410px' }}
                  >
                    <a href={el.link}>
                      <img
                        src={el._embedded['wp:featuredmedia'][0].source_url}
                        alt={el._embedded['wp:featuredmedia'][0].title.rendered}
                        style={{
                          height: '200px',
                          width: '100%',
                          objectFit: 'cover',
                          borderTopLeftRadius: '20px',
                          borderTopRightRadius: '20px',
                        }}
                      />
                      <div className="p-4 position-relative">
                        <img
                          className="avatar-img-chef ml-2 position-absolute"
                          src={chefImage(el._embedded['wp:term'])}
                          alt="Chef Image"
                        />
                        <div className="news-teaser-heading chef text-center pt-3">
                          By: <strong>{el.taxonomy_info.chef[0].label}</strong>
                        </div>
                        <hr />
                        <div className="news-teaser-heading text-center text-uppercase">
                          {el.taxonomy_info['recipe-type'][0].label}
                        </div>
                        <div className="news-teaser-title py-3 text-center">{el.title.rendered}</div>
                      </div>
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
                      alt={el._embedded['wp:featuredmedia'][0].title.rendered}
                      style={{
                        borderRadius: '20px',
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        filter: 'brightness(70%)',
                      }}
                    />
                    <div className="text-white p-4 position-absolute fixed-bottom">
                      <div className="news-teaser-heading text-center text-uppercase">
                        {el.taxonomy_info['recipe-type'][0].label}
                      </div>
                      <div className="news-teaser-title py-3 text-center">{el.title.rendered}</div>
                    </div>
                  </a>
                </div>
              </Anime>
            ))}
            {6 * (page - 1) >= total ? (
              <div />
            ) : (
              <div className="col-12 pt-4 pb-4 mb-2 d-flex">
                <button
                  className="btn bg-secondary text-white mx-auto waves-effect waves-light"
                  onClick={
                    link
                      ? () => {
                          window.location = link;
                        }
                      : () =>
                          loadMore(
                            page,
                            setPage,
                            cat,
                            postType,
                            posts,
                            setPosts,
                            setTotal,
                            taxonomyType,
                            taxonomyFilter,
                            setLoading,
                            cardsNumber,
                          )
                  }
                >
                  {btnText}
                </button>
              </div>
            )}
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeListSection;
