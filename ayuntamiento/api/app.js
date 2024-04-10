const express = require('express');
const app = express();
const PORT =  3000;
const HOST = "http://ec2-3-68-167-172.eu-central-1.compute.amazonaws.com";
const path = require('path');
const cors = require('cors');
const enrutamientoProovedores = require('./rutas.js')

app.use(express.json());
app.use(cors({
 origin:'http://ec2-3-68-167-172.eu-central-1.compute.amazonaws.com', 
 methods: ['GET','POST','PUT','DELETE'],
 allowedHeaders:['Content-Type','Authorization'],}
));
app.use('/proovedores', enrutamientoProovedores);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${HOST}:${PORT}`);
});
