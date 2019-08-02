import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';
import { treeToReact } from '../utils/tree-to-react';

export default () => {
  const { post } = useRouteData();
  return (
    <div>
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
