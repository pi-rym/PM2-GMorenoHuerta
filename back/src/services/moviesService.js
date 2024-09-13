const Movie = require("../models/Movie");

module.exports = {
    // Obtener todas las películas desde la base de datos
    getMoviesService: async () => {
        try {
            const movies = await Movie.find();  // Consulta la base de datos para obtener todas las películas
            return movies;
        } catch (error) {
            console.error("Error al obtener películas:", error);
            throw new Error("Error al obtener películas");
        }
    },

    // Crear una nueva película
    postMovie: async (movie) => {
        try {
            const movieCreated = await Movie.create(movie);
            return movieCreated;
        } catch (err) {
            throw Error(err.message);
        }
    },
};


