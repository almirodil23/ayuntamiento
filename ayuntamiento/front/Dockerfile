# Utiliza una imagen base de Node.js
FROM node:18.17.0 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Compila la aplicación de Angular
RUN npm run build

# Configura una imagen más liviana para servir la aplicación
FROM nginx:alpine

RUN ls -l /app/dist

# Copia los archivos de compilación de Angular al directorio de Nginx
COPY --from=build /app/dist/ayuntamiento /usr/share/nginx/html

# Expone el puerto 80 para que la aplicación sea accesible
EXPOSE 80

# Comando para iniciar Nginx y servir la aplicación
CMD ["nginx", "-g", "daemon off;"]