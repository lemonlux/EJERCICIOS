//--1. creamos el servidor web, importamos y configuramos

const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

//      traemos la conexion de la db -- ejecutamos la funcion


//--2. variables constantes ---> PORT --- luego a .env


const PORT = process.env.PORT


//--3. CREAMOS EL SERVIDOR WEB y lo escuchamos

const app = express()

app.listen(PORT, () =>{
    console.log(`Server listening on port http://localhost:${PORT}`)
})
