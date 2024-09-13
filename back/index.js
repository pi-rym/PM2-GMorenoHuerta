const app = require('./src/server');
const dbCon = require("./src/config/dbCon");
const PORT = process.env.PORT || 3000;

dbCon().then( 
    res=>{
     app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
     });
})

.catch((err) => {
    console.log("error al conectar a la base de datos")
});