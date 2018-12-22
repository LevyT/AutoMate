FROM node:8-alpine
WORKDIR /app
COPY ./app.js /app/
COPY ./healthcheck.js /app/
RUN npm i serve-index serve-static express
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD node healthcheck.js || exit 1
EXPOSE 8888
CMD node app.js
