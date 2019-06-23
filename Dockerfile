FROM node:12.3 AS node-build
# Copy frontend and backend node apps respectively
COPY frontend-v2 .

# build frontend
RUN npm install && npm install -D
RUN npm install react-scripts && npm run build

FROM node:12.3
COPY backend .
RUN npm install && npm install -D
COPY --from=node-build /build /build

CMD node index.js