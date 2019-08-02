import React from 'react';
import { useRouteData } from 'react-static';
//
import { Link } from '@reach/router';

export default function Blog() {
  const { allPosts } = useRouteData();
  return (
    <div>
      <h1>It's blog time.</h1>
      <div>
        <a href="#bottom" id="top">
          Scroll to bottom!
        </a>
      </div>
      <br />
      All Posts:
      <ul>
        {allPosts.map(post => (
          <li key={post.externalId}>
            <Link to={`/blog/post/${post.externalId}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <a href="#top" id="bottom">
        Scroll to top!
      </a>
    </div>
  );
}
