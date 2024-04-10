# Usa una imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todos los archivos de la API al directorio de trabajo
COPY . .

# Expone el puerto en el que la API escucha
EXPOSE 3000:3000

# Comando para ejecutar la API
CMD ["npm", "start"]
