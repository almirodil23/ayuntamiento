const express = require('express'); 
const app = express(); 
const port = 3000;
const path = require('path');
var cors = require('cors');
const enrutamientoProovedores = require('./rutas.js')


app.use(express.json());

app.get('/', (req,res) => {
    res.send('Bienvenido a la API de Proveedores');
})

app.use(cors());


app.use('/proovedores', enrutamientoProovedores);


app.listen(3000, () => { 
    console.log('Servidor corriendo en http://localhost:3000'); 
});
