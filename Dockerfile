FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm install
RUN npm run build

# CMD [ "yarn","preview","--port","5173" ]
