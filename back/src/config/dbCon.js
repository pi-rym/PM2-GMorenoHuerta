require("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI
        );
        console.log("Conexión a MongoDB establecida con éxito");
        console.log(process.env.MONGO_URI);
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        process.exit(1); // Cerrar el proceso si ocurre un error
    }
};

module.exports = dbCon;
