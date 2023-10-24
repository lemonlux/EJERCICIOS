//--1. creamos el servidor web, importamos y configuramos

const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

//      traemos la conexion de la db -- ejecutamos la funcion

    const { connect } = require("./src/utils/db")

//--2. variables constantes ---> PORT --- luego a .env


const PORT = process.env.PORT


//--3. CREAMOS EL SERVIDOR WEB y lo escuchamos

const app = express()

app.listen(PORT, () =>{
    console.log(`Server listening on port http://localhost:${PORT}`)
})

// configuramos cloudinary

const { configCloudinary } = require("./src/middleware/files.middleware")
configCloudinary()

//  añadimos limitaciones de cantidad

app.use(express.json({limit: "5mb"}))
app.use(express.urlencoded({limit: "5mb", extended: false}))