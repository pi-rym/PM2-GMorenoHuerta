const { getMoviesService, postMovie } = require('../services/moviesService');

// Controlador para obtener todas las películas
const getMoviesController = async (req, res) => {
    try {
        const movies = await getMoviesService();
        res.status(200).json({ message: "Lista de películas", data: movies });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las películas", error: error.message });
    }
};

// Controlador para crear una nueva película
const postMovieController = async (req, res) => {
    try {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        const movieCreated = await postMovie({
            title, year, director, duration, genre, rate, poster,
        });

        res.status(201).json({ error: false, data: movieCreated });
    } catch (error) {
        res.status(500).json({ error: true, message: error.message });
    }
};

module.exports = {
    getMoviesController,
    postMovieController
};

