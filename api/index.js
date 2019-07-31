const sequelize = require('./models').sequelize;
sequelize.sync();

const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');
const routesdir = path.resolve(__dirname, 'routes');

fs.readdirSync(routesdir)
  .forEach(route => {
    app.use(
      path.resolve('/api', path.parse(route).name),
      require(path.resolve(routesdir, route)));
  });

app.listen(process.env.API_PORT);
