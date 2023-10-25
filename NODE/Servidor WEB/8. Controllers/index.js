//!--1--- CREAR SERVIDOR WEB

const express = require ("express")
const dotenv = require("dotenv")
dotenv.config()

//!------ traer la conexion de la db y ejecutar la funcion 
//--esto luego, pero va aquí



//!--2---- CONEXION CON CLOUDINARY
//traemos primero el files.middleware.js a middleware y cambiamos el nombre del proyecto y los
//formatos de las imagenes permitidas. nos traemos la funcion configCloudinary

const { configCloudinary } = require("./src/middleware/files.middleware")
configCloudinary()


//!--3----  VARIABLES CONSTANTES -- PORT

const PORT = process.env.PORT


//!--4---- CREAMOS EL SERVIDOR WEB E INSTALAMOS Y TRAEMOS LAS CORS

const app = express()

// npm i cors
const cors = require("cors")
app.use(cors())

//!--5---- ESTABLECEMOS LOS LIMITES JSON EN EL BACK END

app.use(express.json({limit: "5mb"}))
app.use(express.urlencoded({limit: "5mb", extended:false}))


//!--6---- GENERAMOS LOS ERRORES DE RUTA INCORRECTA Y CRASH DEL SERVIDOR


app.use("*", (req,res,next)=>{
    const error = new Error("Route not found")
    error.status = 404
    return next(error)
})

app.use((error,req,res)=>{
    return res.status(error.status || 500).json(error.message || "unexpected error")
})