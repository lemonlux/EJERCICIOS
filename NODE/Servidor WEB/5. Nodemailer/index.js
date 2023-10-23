const express = require ("express")
const nodemailer = require("nodemailer")
const dotenv = require("dotenv")

dotenv.config()


//---- traemos las variables de entorno

const PORT = process.env.PORT

//----- configuramos el servidor web

const server = express()

//----- configuramos un router

const router = express.Router()

// hay que llamar al router que es el que tiene el express configurado
//get -- dame

router.get("/sendNewMail", (req, res, next)=>{   //utilizamos next para tratar los errores
    const email = process.env.EMAIL
    const password = process.env.PASSWORD
    
    const transporter = nodemailer.createTransport({
        //dentro de create transport vamos a hacer el objeto
        service: "gmail",
        auth:{
            //se pone pass en vez de password
            user: email,
            pass: password
        }
    })

    const mailOptions = {
        from: email,
        to: "cbeelux@gmail.com",
        subject: "hola! esto es una prueba",
        text:"lo hemos conseguido"
    }

    transporter.sendMail(mailOptions, function(error,info){
        if (error){
            return next(error)
        } else{
            return res.status(200).json(`email send ${info.response}`)
        }
    })
})

server.use("/", router)

//----- escuchamos el puerto

server.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})