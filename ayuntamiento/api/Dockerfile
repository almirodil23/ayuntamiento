# Etapa de construcción
FROM node:18.17.0 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY ../ayuntamiento/front/dist ./public

# Etapa final
FROM node:18.17.0

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD ["node", "app.js"]
