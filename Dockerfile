FROM node:alpine

WORKDIR /devhub/nodeapp

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_DB_USERNAME=admin123
ENV MONGO_DB_PWD=pass123

EXPOSE 3030

CMD ["node","server.js"]