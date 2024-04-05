# Etapa de construcción
FROM node:latest as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Exponer el puerto en el que la API escuchará
# Exponer el puerto en el que el servidor Nginx escuchará
EXPOSE 3000

ENV PORT=3000


# Comando para iniciar la API
CMD ["npm", "start"]