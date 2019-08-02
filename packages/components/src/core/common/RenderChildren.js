const PropTypes = require('prop-types');
const React = require('react');

const RenderChildren = ({ children }) => <React.Fragment>{children}</React.Fragment>;

RenderChildren.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RenderChildren;
