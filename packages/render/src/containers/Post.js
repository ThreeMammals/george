import React from 'react';
import { useRouteData, Head } from 'react-static';
import { Link } from '@reach/router';
import { treeToReact } from '../utils/tree-to-react';

export default () => {
  const { post } = useRouteData();
  return (
    <div>
      <Head>
        <title>{post.meta.title}</title>
        <meta name="Description" content={post.meta.description} />
      </Head>
      <Link to="/blog/">
        {'<'}
        {' '}
Back
      </Link>
      <br />
      <h3>{post.title}</h3>
      <React.Fragment>{treeToReact(post.tree)}</React.Fragment>
    </div>
  );
};
