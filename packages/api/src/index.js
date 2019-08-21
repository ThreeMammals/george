const GraphQLDateTime = require('graphql-type-datetime');
const { ApolloServer, gql } = require('apollo-server');
const { Pool } = require('pg');
const GraphQLJSON = require('graphql-type-json');
const fetch = require('node-fetch');

const pool = new Pool({
  host: process.env.GEORGE_DATABASE_HOST,
  user: 'george',
  password: 'example',
  ssl: false,
  database: 'george',
});

const typeDefs = gql`
  scalar DateTime
  scalar JSON

  type Post {
    id: Int
    externalId: Int
    title: String
    urlPath: String
    tree: JSON
    sticky: Boolean
    postDate: DateTime
    postModified: DateTime
    meta: Meta
  }

  type Meta {
    title: String
    description: String
  }

  type StickyPost {
    id: Int
    externalId: Int
  }

  type Embed {
    value: JSON
  }

  type Query {
    post(externalId: Int): Post
    posts: [Post]
    stickyPosts: [StickyPost]
    embed(url: String, type: String): Embed
  }
`;

const resolvers = {
  JSON: GraphQLJSON,
  DateTime: GraphQLDateTime,
  Query: {
    async post(parent, args, context, info) {
      const selectSql = `SELECT p.*,
                          CASE
                          WHEN sp.external_id > 0 THEN
                          true
                          ELSE
                          false
                          END as sticky
                        FROM posts p
                        LEFT JOIN sticky_posts sp
                        ON sp.external_id=p.external_id
                        WHERE p.external_id = $1
                        AND p.trashed = false`;
      const selectValues = [args.externalId];
      const { rows } = await pool.query(selectSql, selectValues);
      return {
        id: rows[0].id,
        externalId: rows[0].external_id,
        title: rows[0].title,
        urlPath: rows[0].url_path,
        sticky: rows[0].sticky,
        postDate: rows[0].post_date,
        postModified: rows[0].post_modified,
        tree: rows[0].tree,
        meta: {
          title: rows[0].meta_title,
          description: rows[0].meta_description,
        },
      };
    },
    async posts(parent, args, context, info) {
      const selectSql = `SELECT p.*,
                          CASE
                          WHEN sp.external_id > 0 THEN
                          true
                          ELSE
                          false
                          END as sticky
                        FROM posts p
                        LEFT JOIN sticky_posts sp
                        ON sp.external_id=p.external_id
                        WHERE p.trashed = false
                        ORDER BY sticky DESC, p.post_date DESC`;
      const { rows } = await pool.query(selectSql);
      return rows.map(r => ({
        id: r.id,
        externalId: r.external_id,
        title: r.title,
        urlPath: r.url_path,
        sticky: r.sticky,
        postDate: r.post_date,
        postModified: r.post_modified,
        tree: r.tree,
        meta: {
          title: r.meta_title,
          description: r.meta_description,
        },
      }));
    },
    async stickyPosts(parent, args, context, info) {
      const selectSql = `SELECT *
                        FROM sticky_posts`;
      const { rows } = await pool.query(selectSql);
      return rows.map(r => ({
        id: r.id,
        externalId: r.external_id,
      }));
    },
    async embed(parent, args, context, info) {
      const { url, type } = args;

      if (type === 'twitter') {
        const api = `https://publish.twitter.com/oembed?maxwidth=620&url=${encodeURIComponent(url)}`;
        const result = await fetch(api);
        const json = await result.json();
        return {
          value: json,
        };

        // return {
        //   value: {
        //     html: '<p>here is some html</p>',
        //   },
        // };
      }

      return {
        value: 'embed not supported.',
      };
    },
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  cors: {
    // todo unfuck this...
    origin: '*',
  },
  typeDefs,
  resolvers,
  subscriptions: {
    path: '/api',
  },
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen({
  port: 4000,
  path: '/api',
}).then(({
  url,
}) => {
  console.log(`🚀  Server ready at ${url}`);
});
