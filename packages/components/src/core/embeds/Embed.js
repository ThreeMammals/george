const PropTypes = require('prop-types');
const React = require('react');

const Embed = ({ children }) => (<React.Fragment>{children}</React.Fragment>);

Embed.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Embed;
