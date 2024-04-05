# Etapa de construcción
FROM node:latest as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Exponer el puerto en el que la API escuchará
EXPOSE 3000

# Comando para iniciar la API
CMD ["npm", "start"]