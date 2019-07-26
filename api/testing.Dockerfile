FROM node:12.3

WORKDIR /src
CMD npm install &&\
  npm install -D &&\
  npx sequelize db:migrate\
    --url mysql://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_TABLE} &&\
  npx nodemon index.js
