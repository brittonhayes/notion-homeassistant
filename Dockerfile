FROM node as builder

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm pkg delete scripts.prepare
RUN npm ci --omit=dev
COPY . .
RUN npm run build

FROM node:slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm pkg delete scripts.prepare
RUN npm ci --omit=dev --production
COPY --from=builder /usr/src/app/dist ./dist

CMD [ "node", "dist/index.js" ]