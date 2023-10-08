const express = require('express');
const app = express();
const port = 3000;

// Configura Express para servir archivos estáticos desde la carpeta 'prueba2'
app.use(express.static('prueba2'));

// Ruta de inicio
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/prueba2/index.html'); // Ruta a tu página de inicio
});

// Endpoint para listar el contenido del catálogo
app.get('/catalogo', (req, res) => {
    // Reemplaza la ruta con la ubicación de tu archivo JSON
    const rutaJSON = 'ruta/al/Trailerflix.json';
  
    const fs = require('fs');
    fs.readFile(rutaJSON, 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo JSON:', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
  
      // Convierte el contenido del archivo JSON en un objeto JavaScript
      const catalogo = JSON.parse(data);
  
      // Envía el catálogo como respuesta en formato JSON
      res.json(catalogo);
    });
  });
  

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor web escuchando en http://localhost:${port}`);
});
