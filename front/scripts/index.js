const createMovieCards = require('./tempData'); // Asegúrate de que 'tempData.js' esté exportando la función correctamente
const axios = require("axios");

// Solicitud a la API de películas usando Axios
axios
  .get("http://localhost:3000/movies")
  .then((respuesta) => {
    console.log(respuesta.data.data)
    const dataTransformed = dataTransformResponse(respuesta.data.data);
    createMovieCards(dataTransformed); // Llama a la función que crea las tarjetas
  })
  .catch((error) => {
    alert("La información de la API no se cargó correctamente");

    const tempData = []; // Aquí deberías definir datos temporales si la API falla
    createMovieCards(tempData);
  });

// Función de transformación de datOS
function dataTransformResponse(data) {
  return data; // Retorna los datos transformados si es necesario
}





























