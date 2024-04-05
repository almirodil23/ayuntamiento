FROM node 
WORKDIR /app 
COPY package*.json ./ 
RUN npm install 
COPY . . 
EXPOSE process.env.PORT || 3000;
CMD [ "npm", "start" ]