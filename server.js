// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 5000;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // API routes
    server.use('/', require('./routes/api'));

    // routing for assets
    server.get('*', (req, res) => {
      handle(req, res, req.url);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    // eslint-disable-next-line no-console
    console.log(ex.stack);
    process.exit(1);
  });
