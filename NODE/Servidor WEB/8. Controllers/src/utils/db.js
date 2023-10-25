//!--9----- REQUERIMOS DOTENV Y MONGOOSE

const dotenv = require ("dotenv")
dotenv.config()
const mongoose = require("mongoose")

//!--10---- NOS TRAEMOS LA MONGO_URI DEL .env

const MONGO_URI = process.env.MONGO_URI

//!--11---- CREAMOS LA FUNCION QUE SE EXPORTA QUE CONECTA CON LA MONGO DB

const connect = async () =>{
    try {
        const db = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        const { name, host } = db.connection
        console.log(`Conectada la DB con el host ${host} con el nombre ${name} ✅`)
        
    } catch (error) {
        console.log(`Error en la conexión con la DB ❌`, error)
    }
}

//!--12---- EXPORTAMOS LA FUNCION 
//la exportación de la funcion tiene que ser IGUAL que cuando se importe
//si la funcion va como { funcion }, se importa con {}, si no pues no

module.exports = connect

//!--13--- ahora es el momento de ejecutarla en el index.js en la conexion con la db