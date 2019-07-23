FROM node:12.3

WORKDIR /src
CMD npm install && npm install -D && npm start
