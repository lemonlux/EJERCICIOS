const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")

// nos traemos la mongo uri del .env

const MONGO_URI = process.env.MONGO_URI


//--- creamos la funcion que se exporta que conecta con la base de datos de MONGO DB