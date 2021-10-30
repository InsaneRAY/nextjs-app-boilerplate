const express = require('express');
const apiRouter = require('./server/routes/api');
const { env } = require('./server/utils/utils');
const { PORT } = require('./lib/constants');
const server = express();
const port = parseInt(env(PORT), 10) || 3000;

// Transfer to apiRouter
server.use('/api', apiRouter);

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
