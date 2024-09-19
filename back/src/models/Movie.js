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
        type: [String], 
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    poster: {
        type: String,  
        required: true
    }
});

module.exports = mongoose.model("Movie", movieSchema);
