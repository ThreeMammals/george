const {
  HttpLink,
} = require('apollo-link-http');
const {
  InMemoryCache,
} = require('apollo-cache-inmemory');
const fetch = require('node-fetch');
const {
  ApolloClient,
} = require('apollo-client');

const serverApolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GEORGE_API_URL,
    fetch,
  }),
  cache: new InMemoryCache(),
});

const clientApolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GEORGE_PUBLIC_API_URL,
    fetch,
  }),
  cache: new InMemoryCache(),
});

module.exports.serverApolloClient = serverApolloClient;
module.exports.clientApolloClient = clientApolloClient;
