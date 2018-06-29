FROM node:8.11.3-alpine

ADD package.json /tmp/package.json

RUN cd /tmp \
    && npm i npm@latest -g \
    && npm install

RUN mkdir -p /apps \
    && cp -a /tmp/node_modules /apps

WORKDIR /apps

ADD . /apps

EXPOSE 3000

CMD npm start app.js -i 0 --no-daemon