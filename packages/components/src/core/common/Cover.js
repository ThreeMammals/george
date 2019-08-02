const PropTypes = require('prop-types');
const React = require('react');

const Cover = ({ children, style }) => (
  <div style={{ ...style }}>{children}</div>
);

Cover.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.node.isRequired,
};

export default Cover;
