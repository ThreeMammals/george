import React from 'react';
import {
  Head,
} from 'react-static';

export default () => (
  <div>
    <Head>
      <title>Ocelot</title>
      <meta name="Description" content="Ocelot is an Open Source cross platform API Gateway built using .NET core." />
    </Head>
    <a href="https://github.com/threemammals/ocelot">
      <img src="/ocelot_logo.png" alt="Ocelot" />
    </a>
    <p>A modern fast, scalable API gateway built on ASP.NET core.</p>
    <p>
      <a
        href="http://ocelot.readthedocs.io/en/latest/introduction/gettingstarted.html"
        id="download-button"
      >
        Get Started
      </a>
    </p>
    <h2>Big Picture</h2>
    <p>
      Ocelot is aimed at people using .NET running a micro services / service
      orientated architecture that need a unified point of entry into their
      system. Ocelot is fast, scaleable and provides authentication, routing,
      request aggregation among many other features.
    </p>
    <h2>Open Source</h2>
    <p>
      Ocelot is open source first. We make all features available to any user
      who wants to host the API gateway whether in a single node or a clustered
      environment. Our priority is to build a sustainable vibrant community for
      the future.
    </p>
    <h2>Easy to work with</h2>
    <p>
      We have provided detailed documentation as well as specific code examples
      to help new users get started. We are also always open to feedback and can
      answer any questions a user may have about Ocelot.
    </p>
    <h2>Customers</h2>
    <p>These companies have used Ocleot.</p>
    <a href="https://github.com/dotnet-architecture/eShopOnContainers">
      <img src="/microsoft.jpg" alt="Microsoft" />
    </a>
    <img src="/tencent.jpg" alt="Tencent" />
  </div>
);
