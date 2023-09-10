import React, { useState, useEffect } from 'react';

const slideDotsBuilder = (slides, target) => {
  const elements = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < slides; index++) {
    if (index === 0) {
      elements.push(<li data-target={target} data-slide-to={index} className="active" />);
    } else {
      elements.push(<li data-target={target} data-slide-to={index} />);
    }
  }

  return elements;
};

const slideBuilder = (posts, cardColor, cards) => {
  let elements = [];
  const slides = [];
  let n = 0;

  // eslint-disable-next-line no-plusplus, unicorn/no-for-loop
  for (let index = 0; index < posts.length; index++) {
    elements.push(
      <div key={posts[index].id} className="col-12 col-md-6 col-lg-3 news-column d-flex">
        <div
          className="shadow-md p-4 news-card position-relative"
          style={{ backgroundColor: cardColor, borderRadius: '20px', padding: '70px', height: '158px', width: '100%' }}
        >
          <a href={posts[index].link}>
            <img
              className="avatar-img-chef ml-2 position-absolute"
              style={{
                height: '80px',
                width: '80px',
                borderRadius: '50px',
                top: '-35px',
                left: 'calc(100% / 2 - 50px)',
              }}
              src={posts[index]._embedded['wp:featuredmedia'][0].source_url}
              alt="Chef Image"
            />
            <div
              className="news-teaser-title text-nowrap text-truncate pt-5 pb-3 text-center"
              style={{ color: '#69969D' }}
            >
              {posts[index].title.rendered}
            </div>
            <div className="news-teaser-heading text-center">RISTORANTE</div>
          </a>
        </div>
        <a
          className="shadow-md news-card-hover position-relative"
          href={posts[index].link}
          style={{
            backgroundImage: `url(${
              posts[index].custom_fields[0]
                ? posts[index].custom_fields[0]
                : posts[index]._embedded['wp:featuredmedia'][0].source_url
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '20px',
            height: '158px',
            width: '100%',
            opacity: '1',
          }}
        >
          <div className="text-white p-4 position-absolute fixed-bottom">
            <div className="news-teaser-title text-center">{posts[index].title.rendered}</div>
          </div>
        </a>
      </div>,
    );
    n += 1;

    if (n === cards) {
      slides.push(
        <div className={index === cards - 1 ? 'carousel-item active pt-4' : 'carousel-item pt-4'}>
          <div className="row no-gutters m-0">{elements.map((el) => el)}</div>
        </div>,
      );

      elements = [];
      n = 0;
    }
  }

  return slides;
};

const fetchPosts = (page, cat, postType) => {
  const category = cat && cat !== '-1' ? `&categories=${cat}` : '';
  return fetch(`/wp-json/wp/v2/${postType}?_embed=true&page=${page}&per_page=9&order=desc&orderby=date${category}`)
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

const ChefSlidesSection = ({ cardColor, cat, postType, link, btnText }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMore(page, setPage, cat, postType, posts, setPosts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      <div className="col-12 hero-title" style={{ color: '#3F5E63' }}>
        Meet the chef
      </div>
      <div className="col-12 text-center mb-4">Great chef, great restaurants</div>
      <div className="col-12">
        <div id="news-carousel" className="carousel slide d-none d-lg-block" data-ride="false" data-interval="0">
          <ol className="carousel-indicators">
            {slideDotsBuilder(Math.trunc(posts.length / 4), '#news-carousel').map((el) => el)}
          </ol>
          <div className="carousel-inner">{slideBuilder(posts, cardColor, 4)}</div>
          <div style={{ height: '50px' }} />
        </div>
        <div
          id="news-carousel-ipad"
          className="carousel slide d-none d-md-block d-lg-none"
          data-ride="false"
          data-interval="0"
        >
          <ol className="carousel-indicators">
            {slideDotsBuilder(Math.trunc(posts.length / 2), '#news-carousel-ipad').map((el) => el)}
          </ol>
          <div className="carousel-inner">{slideBuilder(posts, cardColor, 2)}</div>
          <div style={{ height: '50px' }} />
        </div>
        <div id="news-carousel-mobile" className="carousel slide d-md-none" data-ride="false" data-interval="0">
          <ol className="carousel-indicators">
            {slideDotsBuilder(Math.trunc(posts.length), '#news-carousel-mobile').map((el) => el)}
          </ol>
          <div className="carousel-inner">{slideBuilder(posts, cardColor, 1)}</div>
          <div style={{ height: '50px' }} />
        </div>
      </div>
      <div className={`col-12 py-3 ${btnText ? 'd-flex' : 'd-none'}`}>
        <a href={link} className="btn bg-secondary text-white mx-auto">
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default ChefSlidesSection;
