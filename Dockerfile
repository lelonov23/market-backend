FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN npm i

COPY . .
