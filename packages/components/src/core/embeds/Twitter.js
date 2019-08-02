const gql = require('graphql-tag');
const {
  Query,
} = require('react-apollo');

const PropTypes = require('prop-types');
const React = require('react');
const {
  dangerouslySetInnerHTML,
} = require('react-dom');

const getEmbed = gql`
  query Embed($url: String, $type:String) {
    embed(url: $url, type: $type) {
      value
    }
  }
`;

const Twitter = ({ url, providerNameSlug }) => (
  <Query
    query={getEmbed}
    variables={{ url, type: providerNameSlug }}
  >
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (

        <div dangerouslySetInnerHTML={
          {
            __html: data.embed.value.html,
          }
        }
        />
      // <select name="dog" onChange={onDogSelected}>
      //   {data.dogs.map(dog => (
      //     <option key={dog.id} value={dog.breed}>
      //       {dog.breed}
      //     </option>
      //   ))}
      // </select>
      );
    }}
  </Query>
);

// const Embed = ({ children }) => (
//   <Query query={getEmbed}>
//     <React.Fragment>{children}</React.Fragment>
//   </Query>
// );

Twitter.propTypes = {
  url: PropTypes.node.isRequired,
  providerNameSlug: PropTypes.node.isRequired,
};

export default Twitter;
