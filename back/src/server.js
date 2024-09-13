const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

// Configura Morgan para registrar en modo 'combined'
app.use(morgan('combined'));
console.log('Morgan está activado');

// Configura CORS y JSON
app.use(cors());
app.use(express.json());  // Middleware necesario para leer JSON en el body

// Usa las rutas definidas
app.use(movieRoutes);
console.log("Rutas cargadas");

// Exporta la app
module.exports = app;
