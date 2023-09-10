import React, { useState, useEffect } from 'react';

const fetchPosts = () =>
  fetch('/wp-json/wp/v2/posts')
    .then(
      (response) => response.json(),
      (error) => {
        throw new TypeError(error);
      },
    )
    .then((posts) => {
      // eslint-disable-next-line no-console
      console.log(posts);
      return posts;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(`error: ${error}`);
      return [];
    });

const LastPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts().then((result) => setPosts(result));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <a href={post.link}>
          <h1>{post.title.rendered}</h1>
        </a>
      ))}
    </div>
  );
};

export default LastPosts;
