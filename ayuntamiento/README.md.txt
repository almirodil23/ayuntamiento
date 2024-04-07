compose:

  api: 
    build:
      context: ./ayuntamiento/api
      dockerfile: Dockerfile
    ports:
      - "3000:3000"  # Puertos de la API
    restart: always


Dockerfile:

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

actions:


      - name: Deploy to Heroku - API
        uses: gonuit/heroku-docker-deploy@v1.3.3
        with:
          heroku_api_key: "1b9d6eca-f0f1-414e-ba90-3d334fabcd3d"
          heroku_app_name: ayuntamiento
          email: alvaroados4b16@gmail.com
          dockerfile_directory: ayuntamiento/api  
          dockerfile_name: Dockerfile  # Nombre del Dockerfile de la API
          process_type: web   



          .