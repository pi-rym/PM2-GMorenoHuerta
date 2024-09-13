function createMovieCards(data) {
    const tarjetaContainer = document.getElementById("tarjeta-container");
  
    const tarjetas = data.map(movie => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");
  
      // HTML para la tarjeta de película
      tarjeta.innerHTML = `
        <h3 class="titulo"><a href="#">${movie.title}</a></h3>
        <img class="poster" src="${movie.poster}" alt="${movie.title} Poster">
        <p class="director">Director: ${movie.director}</p>
        <p class="year">Año: ${movie.year}</p>
        <p class="duration">Duración: ${movie.duration}</p>
        <p class="genre">Género: ${movie.genre.join(", ")}</p>
        <p class="rate">Calificación: ${movie.rate}</p>
      `;
  
      return tarjeta;
    });
  
    // Agregar cada tarjeta al contenedor
    tarjetas.forEach(tarjeta => {
      tarjetaContainer.appendChild(tarjeta);
    });
  }
  

  module.exports = createMovieCards;
  