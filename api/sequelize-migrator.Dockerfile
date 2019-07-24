from node:12.3

RUN npm install -g sequelize-cli

WORKDIR /src
CMD sequelize db:migrate\
  --url mysql://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_TABLE}
