const createMovieCards = require('./tempData'); 
const axios = require("axios");

// Solicitud a la API de películas usando Axios
axios
  .get("http://localhost:3000/movies")
  .then((respuesta) => {
    console.log(respuesta.data.data)
    const dataTransformed = dataTransformResponse(respuesta.data.data);
    createMovieCards(dataTransformed); 
  })
  .catch((error) => {
    alert("La información de la API no se cargó correctamente");

    const tempData = []; 
    createMovieCards(tempData);
  });

// Función de transformación de datOS
function dataTransformResponse(data) {
  return data; 
}





























