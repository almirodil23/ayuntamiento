const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'http://localhost';
const path = require('path');
var cors = require('cors');
const enrutamientoProovedores = require('./rutas.js')

app.use(express.json());
app.use(cors());
app.use('/proovedores', enrutamientoProovedores);

// Ruta estática para los archivos generados por Angular
//app.use(express.static('/usr/share/nginx/html'));

// Ruta para todas las demás solicitudes
//app.get('*', (req, res) => {
//  res.sendFile(path.join('/usr/share/nginx/html/index.html'));});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${HOST}:${PORT}`);
});
