import React from 'react';
import {
  Link,
} from '@reach/router';

export default () => (
  <div>
    <h1>Welcome to ThreeMammals</h1>
    <Link to="/ocelot">Ocelot</Link>
    <p>The popular open source API gateway</p>
    <br />
    <Link to="/pushy">Pushy</Link>
    <p>Headless Wordpress done right.</p>
  </div>
);
