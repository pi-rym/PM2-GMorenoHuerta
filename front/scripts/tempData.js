function createMovieCards(data) {
    const tarjetaContainer = document.getElementById("tarjeta-container");

    const tarjetas = data.map(movie => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = `
            <h3><a class="titulo" href="#">${movie.title}</a></h3>
            <img class="poster" src="${movie.poster}" alt="${movie.title} Poster">
            <p class="director">Director: ${movie.director}</p>
            <p class="year">Año: ${movie.year}</p>
            <p class="duration">Duración: ${movie.duration}</p>
            <p class="genre">Género: ${movie.genre.join(", ")}</p>
            <p class="rate">Calificación: ${movie.rate}</p>
        `;
        return tarjeta;
    });

    tarjetas.forEach(tarjeta => {
        tarjetaContainer.appendChild(tarjeta);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const tempData = [
        {
            title: "Guardians of the Galaxy Vol. 2",
            year: 2017,
            director: "James Gunn",
            duration: "2h 16min",
            genre: ["Action", "Adventure", "Comedy"],
            rate: 7.7,
            poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
        },
        {
            title: "Star Wars: Episode IV - A New Hope",
            poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
            year: 1977,
            director: "George Lucas",
            duration: "2h 1min",
            genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
            rate: 8.7,
        },
        {
            title: "The Lord of the Rings: The Fellowship of the Ring",
            poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
            year: 2001,
            director: "Peter Jackson",
            duration: "2h 58min",
            genre: ["Action", "Adventure", "Drama", "Fantasy"],
            rate: 8.8,
        },
    ];

    createMovieCards(tempData);
});
