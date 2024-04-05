# Utiliza una imagen base de Node.js
FROM node:18.17.0

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto en el que la API estará escuchando
EXPOSE $PORT

# Comando para iniciar la API
CMD ["npm", "start"]