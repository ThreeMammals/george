const path = require('path');
const gql = require('graphql-tag');
const {
  serverApolloClient,
} = require('./src/utils/apollo-client');

module.exports.default = {
  siteRoot: process.env.GEORGE_SITE_ROOT,
  getRoutes: async ({
    incremental,
  }) => {
    const posts = await serverApolloClient.query({
      query: gql`{
                posts {
                  id
                  externalId
                  title
                  urlPath
                  tree
                  sticky
                }
                stickyPosts {
                  externalId
                }
              }`,
    });

    const {
      data: {
        posts: allPosts,
      },
    } = posts;

    // partial build of the blog....
    if (incremental) {
      // get the args from command line
      const args = process.argv;
      console.log(args);
      const externalId = parseInt(args[4]);
      console.log(externalId);
      // get the new post
      const post = await serverApolloClient.query({
        query: gql`{
                  post(externalId: ${externalId}) {
                    id
                    externalId
                    title
                    urlPath
                    tree
                    sticky
                  }
                  stickyPosts {
                    externalId
                  }
                }`,
      });

      console.log(post);

      const removedPostIDs = [];
      const newPosts = [];
      const {
        data: {
          post: newPost,
        },
      } = post;

      console.log('new post is...');
      console.log(post);

      if (newPost === null || newPost === undefined) {
        removedPostIDs.push(externalId);
      } else {
        newPosts.push(newPost);
      }


      // dont remove any posts for now as we only process PostUpdated

      // set the new post

      return [{
        path: '/blog',
        getData: () => ({
          allPosts, // Update the posts data for the /blog route
        }),
        children: [
          ...newPosts.map(post => ({
            path: `/post/${post.externalId}`,
            template: 'src/containers/Post',
            getData: () => ({
              post,
            }),
          })),
          ...removedPostIDs.map(removedExternalId => ({
            // Flag the old posts for removal
            path: `/post/${removedExternalId}`,
            remove: true,
          })),
        ],
      }];
    }

    // full blog build...
    return [{
      path: '/blog',
      getData: () => ({
        allPosts,
      }),
      children: allPosts.map(post => ({
        path: `/post/${post.externalId}`,
        template: 'src/containers/Post',
        getData: () => ({
          post,
        }),
      })),
    }];
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
};
