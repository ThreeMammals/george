import React from 'react';
import {
  Head,
} from 'react-static';

export default () => (
  <div>
    <Head>
      <title>Pushy</title>
      <meta name="Description" content="Pushy is an Open Source plugin that turns Wordpress into a headless CMS." />
    </Head>
    <h1>Pushy</h1>
    <p>Open Source Headless Wordpress</p>
    <p>
      <a
        href="http://github.com/threemammals/pushy"
        id="download-button"
      >
        Get Started
      </a>
    </p>
    <h2>Big Picture</h2>
    <p>
      Pushy is an open source Wordpress plugin that pushes data out of wordpress
      in the form of events. This enables using Wordpress as a headless CMS.
      That is rather than user requests for content hitting Wordpress for
      rendering etc you can create your own UI using whatever technology you
      want.
    </p>
    <h2>Open Source</h2>
    <p>
      Pushy is open source first. We make all features available to any user who
      wants to use it :) Our priority is to build a sustainable vibrant
      community for the future.
    </p>
    <h2>Easy to work with</h2>
    <p>
      We have provided detailed documentation as well as specific code examples
      to help new users get started. We are also always open to feedback and can
      answer any questions a user may have about Pushy.
    </p>
  </div>
);
