FROM node:12.3

WORKDIR /src

RUN npm install
RUN npm install -D

CMD npm start
