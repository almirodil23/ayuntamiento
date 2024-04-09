const express = require('express');
const app = express();
const PORT =  3000;
const HOST = process.env.HOST || 'http://localhost';
const path = require('path');
var cors = require('cors');
const enrutamientoProovedores = require('./rutas.js')

app.use(express.json());
app.use(cors());
app.use('/proovedores', enrutamientoProovedores);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${HOST}:${PORT}`);
});
