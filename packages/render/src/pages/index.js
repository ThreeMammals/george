import React from 'react';
import {
  Link,
} from '@reach/router';
import {
  Head,
} from 'react-static';

export default () => (
  <div>
    <Head>
      <title>Home</title>
      <meta name="Description" content="ThreeMammals home of the Ocelot API Gateway." />
    </Head>
    <h1>Welcome to ThreeMammals</h1>
    <Link to="/ocelot">Ocelot</Link>
    <p>The popular open source API gateway</p>
    <br />
    <Link to="/pushy">Pushy</Link>
    <p>Headless Wordpress done right.</p>
  </div>
);
