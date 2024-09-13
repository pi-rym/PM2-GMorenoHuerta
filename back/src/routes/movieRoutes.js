const { Router } = require('express');
const {
    getMoviesController,
    postMovieController,
} = require('../controllers/moviesController');

const validateMovieData = require('../middlewares/validateMovieData');  // Importar el middleware

const router = Router();

// Rutas
router.get('/movies', getMoviesController);  // Obtener todas las películas
router.post('/movies', validateMovieData, postMovieController);  // Crear película con validación

module.exports = router;
