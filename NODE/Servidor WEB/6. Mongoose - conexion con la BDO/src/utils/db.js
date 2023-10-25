const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")

// nos traemos la mongo uri del .env

const MONGO_URI = process.env.MONGO_URI


//--- creamos la funcion que se exporta que conecta con la base de datos de MONGO DB
// va a tener un try catch para capturar los errores

const connect = async () => {

    //mejor copiar lo de useNew y useUnified
    try {
        const db = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        const { name, host } = db.connection
        console.log(`Conectada la DB con el host ${host} con el nombre ${name}🥳✅`)
    } catch (error) {
        console.log(`error con la conexion DB ❌`, error)
    }
}



//exportamos la funcion

module.exports= { connect }