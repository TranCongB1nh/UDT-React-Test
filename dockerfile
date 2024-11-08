FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18 AS runtime

WORKDIR /app

COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/package-lock.json /app/package-lock.json

COPY --from=build /app/webpack.config.cjs /app/webpack.config.cjs
COPY --from=build /app/dist /app/dist
COPY --from=build /app/src/client/index.html /app/src/client/index.html
COPY --from=build /app/node_modules /app/node_modules

EXPOSE 3000

CMD ["node", "./dist/server.cjs"]
