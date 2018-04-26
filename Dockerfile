FROM node:6

WORKDIR /opt/relay_api

ADD . /opt/relay_api

EXPOSE 3000

RUN npm install

CMD ["node", "server.js"]
