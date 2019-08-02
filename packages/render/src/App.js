
import './app.css';
import React from 'react';
import {
  Root,
  Routes,
  addPrefetchExcludes,
} from 'react-static';
import {
  Link,
  Router,
} from '@reach/router';
import {
  ApolloProvider,
} from 'react-apollo';
import {
  Footer,
} from '@george/components';
import {
  clientApolloClient,
} from './utils/apollo-client';

addPrefetchExcludes(['dynamic']);

const App = () => (
  <ApolloProvider client={clientApolloClient}>
    <Root>
      <nav>
        <Link to="/">ThreeMammals</Link>
        <Link to="/ocelot">Ocelot</Link>
        <Link to="/pushy">Pushy</Link>
        {/* <Link to="/dynamic">Dynamic</Link> */}
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            {/* <Dynamic path="dynamic" /> */}
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <Footer />
    </Root>
  </ApolloProvider>
);

export { App };
