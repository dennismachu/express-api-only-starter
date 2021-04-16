FROM node:14 as base
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:14-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --only=production
COPY --from=base /usr/app/build .

EXPOSE 3000

CMD node build/main/index.js

