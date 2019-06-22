FROM node:12.3 AS node-build
# Copy frontend and backend node apps respectively
COPY frontend .
COPY backend .

# build frontend
RUN cd frontend && npm install react-scripts && npm run build

FROM debian:latest
COPY --from=node-build /frontend /dashboard
COPY --from=node-build /backend /
CMD node index.js