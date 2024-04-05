# Parte del Dockerfile de la API

# Selecciona una imagen base
FROM node:18.17.0

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y el archivo package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos estáticos del frontend (asumiendo que la carpeta de los archivos estáticos del frontend es "dist")
COPY ../front/dist ./dist

# Copia el resto del código de la API
COPY . .

# Puerto en el que la aplicación va a correr
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
