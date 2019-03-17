import React from 'react';

import '../scss/home.scss';

import Head from 'next/head';

export default () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Document - Custom Title</title>
    </Head>
    <div className="example">
      <p>Welcome to the custom Next.js build..</p>
      <img src="img/loader.gif" alt="" />
    </div>
  </>
);
