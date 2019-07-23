FROM node:12.3

WORKDIR /src
CMD npm install && npm install -D && npm install -g nodemon && nodemon index.js
