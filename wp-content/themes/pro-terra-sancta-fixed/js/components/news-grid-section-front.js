import React, { useState, useEffect } from 'react';

const buildTitleText = (text) => text;

const fetchPosts = (
  postTypeMain,
  postTypeBlock1,
  postTypeBlock2,
  postTypeBlock3,
  postTypeBlock4,
  catMain,
  catBlock1,
  catBlock2,
  catBlock3,
  catBlock4,
) => {
  const catMainQ = catMain && catMain !== '-1' ? `&catMain=${catMain}` : '';
  const catBlock1Q = catBlock1 && catBlock1 !== '-1' ? `&catBlock1=${catBlock1}` : '';
  const catBlock2Q = catBlock2 && catBlock2 !== '-1' ? `&catBlock2=${catBlock2}` : '';
  const catBlock3Q = catBlock3 && catBlock3 !== '-1' ? `&catBlock3=${catBlock3}` : '';
  const catBlock4Q = catBlock4 && catBlock4 !== '-1' ? `&catBlock4=${catBlock4}` : '';
  return fetch(
    `/wp-json/proterrasancta-api/v1/news-grid-posts?postTypeMain=${postTypeMain}&postTypeBlock1=${postTypeBlock1}&postTypeBlock2=${postTypeBlock2}&postTypeBlock3=${postTypeBlock3}&postTypeBlock4=${postTypeBlock4}${catMainQ}${catBlock1Q}${catBlock2Q}${catBlock3Q}${catBlock4Q}&lang=${window.language}`,
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

const loadMore = (
  postTypeMain,
  postTypeBlock1,
  postTypeBlock2,
  postTypeBlock3,
  postTypeBlock4,
  catMain,
  catBlock1,
  catBlock2,
  catBlock3,
  catBlock4,
  posts,
  setPosts,
) => {
  fetchPosts(
    postTypeMain,
    postTypeBlock1,
    postTypeBlock2,
    postTypeBlock3,
    postTypeBlock4,
    catMain,
    catBlock1,
    catBlock2,
    catBlock3,
    catBlock4,
  ).then((result) => {
    if (result.length > 0) {
      const updatedPosts = [...posts];
      updatedPosts.push(...result);
      setPosts(updatedPosts);
    }
  });
};

const NewsSlidesSection = ({
  mainTitle,
  block1Title,
  block2Title,
  block3Title,
  block4Title,
  btnTextMain,
  btnTextBlock1,
  btnTextBlock2,
  btnTextBlock3,
  btnTextBlock4,
  postTypeMain,
  postTypeBlock1,
  postTypeBlock2,
  postTypeBlock3,
  postTypeBlock4,
  catMain,
  catBlock1,
  catBlock2,
  catBlock3,
  catBlock4,
}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadMore(
      postTypeMain,
      postTypeBlock1,
      postTypeBlock2,
      postTypeBlock3,
      postTypeBlock4,
      catMain,
      catBlock1,
      catBlock2,
      catBlock3,
      catBlock4,
      posts,
      setPosts,
    );
  }, []);

  if (posts.length < 5) {
    return (
      <div className="d-flex">
        <div className="mx-auto">
          <div className="spinner-border m-3" role="status">
            <span className="sr-only">Caricamento ...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row gx-0">
      <div className="col-12 col-md-6">
        <div className="news-grid-card news-grid-card-main">
          <a href={posts[0].link} className="d-block">
            <div className="heading d-none d-md-block">{mainTitle}</div>
            <img height="480" width="330" src={posts[0]['image-full']} alt={posts[0]['image-full']} />
            <div className="img-cover-gradient"></div>
            <div className="position-absolute block-middle-main" style={{ padding: '40px' }}>
              <div className="heading-text d-block d-md-none">{mainTitle}</div>
              <div
                className="pt-2 pb-4 py-md-4 text-white text-title"
                dangerouslySetInnerHTML={{ __html: buildTitleText(posts[0].title) }}
              />
              <div className="d-flex">
                <button className="btn btn-primary">{btnTextMain}</button>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className=" col-12 col-md-6 container-right-cards row gx-2 mx-0 gy-2 pe-md-0" style={{ marginTop: 0 }}>
        <div className="col-6 news-grid-card news-grid-card-right mt-0" style={{ backgroundColor: 'white' }}>
          <a href={posts[1].link} className="d-block">
            <div className="heading d-none d-md-block" style={{ backgroundColor: '#374856' }}>
              {block1Title}
            </div>
            <img height="240" width="330" src={posts[1]['image-thumb']} alt={posts[1]['image-thumb']} />
            <div className="img-cover-gradient grad1"></div>
            <div className="position-absolute block-middle">
              <div className="heading-text d-block d-md-none">{block1Title}</div>
              <div
                className="text-white text-title"
                dangerouslySetInnerHTML={{ __html: buildTitleText(posts[1].title) }}
              />
              <div className="d-flex">
                <button className="btn btn-primary">{btnTextBlock1}</button>
              </div>
            </div>
          </a>
        </div>
        <div className="col-6 news-grid-card news-grid-card-right mt-0 pe-md-0" style={{ backgroundColor: 'white' }}>
          <a href={posts[2].link} className="d-block">
            <div className="heading d-none d-md-block" style={{ backgroundColor: '#E26E0E' }}>
              {block2Title}
            </div>
            <img height="240" width="330" src={posts[2]['image-thumb']} alt={posts[2]['image-thumb']} />
            <div className="img-cover-gradient grad2"></div>
            <div className="position-absolute block-middle">
              <div className="heading-text d-block d-md-none">{block2Title}</div>
              <div
                className="text-white text-title"
                dangerouslySetInnerHTML={{ __html: buildTitleText(posts[2].title) }}
              />
              <div className="d-flex">
                <button className="btn btn-primary">{btnTextBlock2}</button>
              </div>
            </div>
          </a>
        </div>
        <div className="col-6 news-grid-card news-grid-card-right" style={{ backgroundColor: 'white' }}>
          <a href={posts[3].link} className="d-block">
            <div className="heading d-none d-md-block" style={{ backgroundColor: '#F9BA55' }}>
              {block3Title}
            </div>
            <img height="240" width="330" src={posts[3]['image-thumb']} alt={posts[3]['image-thumb']} />
            <div className="img-cover-gradient grad3"></div>
            <div className="position-absolute block-middle">
              <div className="heading-text d-block d-md-none">{block3Title}</div>
              <div
                className="text-white text-title"
                dangerouslySetInnerHTML={{ __html: buildTitleText(posts[3].title) }}
              />
              <div className="d-flex">
                <button className="btn btn-primary">{btnTextBlock3}</button>
              </div>
            </div>
          </a>
        </div>
        <div className="col-6 news-grid-card news-grid-card-right pe-md-0" style={{ backgroundColor: 'white' }}>
          <a href={posts[4].link} className="d-block">
            <div className="heading d-none d-md-block" style={{ backgroundColor: '#D31418' }}>
              {block4Title}
            </div>
            <img height="240" width="330" src={posts[4]['image-thumb']} alt={posts[4]['image-thumb']} />
            <div className="img-cover-gradient grad4"></div>
            <div className="position-absolute block-middle">
              <div className="heading-text d-block d-md-none">{block4Title}</div>
              <div
                className="text-white text-title"
                dangerouslySetInnerHTML={{ __html: buildTitleText(posts[4].title) }}
              />
              <div className="d-flex">
                <button className="btn btn-primary">{btnTextBlock4}</button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsSlidesSection;
