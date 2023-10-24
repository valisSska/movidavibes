import React, { useState, useEffect } from 'react';

const fetchPosts = (cat, postType) => {
  const category = cat && cat !== '-1' ? `&categories=${cat}` : '';
  return fetch(`/wp-json/wp/v2/${postType}?_embed=true&per_page=4&order=desc&orderby=date${category}`)
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

const SectionLastNewsGrid = ({ titleColor, titleText, btnColor, btnHref, cat, postType }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts(cat, postType).then((result) => {
      setPosts(result);
    });
  }, [cat, postType]);

  return (
    <div className="row no-gutters">
      {posts.map((el, index) => (
        <div key={index} className="teaser-column p-2">
          <div
            style={{
              backgroundImage: `url(${el._embedded['wp:featuredmedia'][0].source_url})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="row no-gutters" style={{ height: '300px' }}>
              <div className="col">
                <div className="grid-teaser-heading">{titleText}</div>
                <div className="grid-teaser-title">{el.title.rendered}</div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: 'auto', padding: '15px' }}>
                  <a href={el.link}>
                    <div className="btn-circle-small" style={{ backgroundColor: btnColor }}>
                      <i className="fal fa-arrow-right" style={{ color: titleColor }} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="col-12 p-2">
        <a href={btnHref} style={{ float: 'right' }}>
          <span className="news-teaser-heading" style={{ marginRight: '10px', color: titleColor }}>
            tutti i post
          </span>
          <div className="btn-circle-small" style={{ backgroundColor: btnColor }}>
            <i className="fal fa-arrow-right" style={{ color: titleColor }} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SectionLastNewsGrid;
