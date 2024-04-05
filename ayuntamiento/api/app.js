const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'http://localhost';
const path = require('path');
var cors = require('cors');
const enrutamientoProovedores = require('./rutas.js')


app.use(express.json());

app.get('/', (req,res) => {
    res.send('Bienvenido a la API de Proveedores');
})

app.use(cors());


app.use('/proovedores', enrutamientoProovedores);

// Ruta estática para los archivos generados por Angular
app.use(express.static(path.join(__dirname, 'dist/front')));

// Ruta para todas las demás solicitudes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/front/index.html'));
});

app.listen(PORT, () => { 
    console.log(`Servidor corriendo en ${HOST}:${PORT}`);
});

