# The instructions for the first stage
FROM node:10.16.0-alpine as first-stage

WORKDIR /app

COPY yarn.lock ./
COPY package.json ./

ENV PATH ./node_modules/.bin:$PATH
ENV NODE_ENV "production"

RUN yarn

COPY . .

RUN yarn build

EXPOSE 4000

CMD ["yarn", "prod"]
