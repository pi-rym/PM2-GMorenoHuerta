const mongoose = require("mongoose");

// Definir el schema de la película (Movie)
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    genre: {
        type: [String],  // Un array de géneros
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    poster: {
        type: String,  // URL de la imagen del póster
        required: true
    }
});

// Exportar el modelo de Movie basado en el schema
module.exports = mongoose.model("Movie", movieSchema);
