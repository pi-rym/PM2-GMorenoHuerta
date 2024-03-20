const renderFilms = require ("./renderFilms")

$.get('https://students-api.up.railway.app/movies', 
    function(data) {
        data.forEach(renderFilms);
    })
    .fail(function() {
        console.error("Error al cargar los datos de la película.");
    });


    module.exports = getfilms 

