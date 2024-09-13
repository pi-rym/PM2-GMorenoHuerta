// Middleware para validar que todos los datos estén presentes y sean correctos
const validateMovieData = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    
    // Verificar que todos los campos estén presentes
    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({
            error: true,
            message: "Todos los campos son obligatorios: title, year, director, duration, genre, rate, poster"
        });
    }

    // Validar el formato del título
    if (typeof title !== 'string' || title.length < 1 || title.length > 100) {
        return res.status(400).json({
            error: true,
            message: "El título debe ser una cadena de texto de entre 1 y 100 caracteres."
        });
    }

    // Validar que el año sea un número de 4 dígitos
    const yearRegex = /^\d{4}$/;
    const currentYear = new Date().getFullYear();
    if (!yearRegex.test(year) || year < 1800 || year > currentYear) {
        return res.status(400).json({
            error: true,
            message: `El año debe estar entre 1800 y ${currentYear} y ser un número de 4 dígitos válido.`
        });
    }

 
    // Validar que la calificación sea un número entre 1 y 10 con hasta 2 decimales
    if (isNaN(rate) || rate < 1 || rate > 10 || !/^\d(\.\d{1,2})?$/.test(rate)) {
        return res.status(400).json({
            error: true,
            message: "La calificación debe ser un número entre 1 y 10 con hasta dos decimales."
        });
    }


    // Validar que el director sea una cadena de texto válida
    const directorRegex = /^[a-zA-Z\s]+$/;
    if (!directorRegex.test(director)) {
        return res.status(400).json({
            error: true,
            message: "El nombre del director debe contener solo letras y espacios."
        });
    }

    next();
};

module.exports = validateMovieData;
