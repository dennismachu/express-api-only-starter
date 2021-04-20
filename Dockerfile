FROM node:14-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --only=production
COPY ./build ./build

EXPOSE 3000

CMD npm start

