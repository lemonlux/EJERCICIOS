//vamos a crear otro middleware para comprobar que el usuario que entra a las rutas autenticadas está autorizado

//el metodo que utiliza para ello es un token generado por la librería jsonwebtoken --> creamos token en utils

//!- importaciones

const User = require('./../api/models/User.models')
const dotenv = require ('dotenv')
dotenv.config()