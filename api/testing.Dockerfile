FROM node:12.3

WORKDIR /src

RUN npm install
RUN npm install -D

RUN npm install -g nodemon
CMD nodemon index.js
