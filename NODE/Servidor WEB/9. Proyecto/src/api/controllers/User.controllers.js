const User = require('../models/User.models');
const randomCode = require('../../utils/randomCode');
// randomCode(100000, 999999)
const { deleteImgCloudinary } = require('../../middleware/files.middleware');
const nodemailer = require('nodemailer');

//!----- GET
//* por mejorar compatibilidad es un get y no un post

const userRegister = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await User.syncIndexes(); //como es un post hay que sincronizar los indexes
    let confirmationCode = randomCode(100000, 999999);
    const { userEmail, userName } = req.body; 

    const userExists = await User.findOne(
      //ahora encuentra el username con estos parametros
      //se ponen por separado porque ambos son unique
      { email: req.body.email },
      { userName: req.body.userName }
    );
    //*findOne() --- conditions
    //*The conditions are cast to their respective SchemaTypes before the command is sent
    if (!userExists) {
      // si no existe nuevo user -nueva instancia
      const newUser = new User({ ...req.body, confirmationCode });

      req.file
        ? (newUser.image = req.file.path)
        : (newUser.image = 'https://pic.onlinewebfonts.com/svg/img_181369.png');

      try {
            //guardamos el user
            const userSave = await newUser.save()
            //si se ha guardado --- enviamos email de confirmacion
            if(userSave){
                const emailSave = process.env.EMAIL 
                const password = process.env.PASSWORD 

                const transporter = nodemailer.createTransport({ //metodo de nodemailer
                    service: 'gmail',
                    auth: {
                        user: emailSave,
                        pass: password
                    }
                })

                const mailInfo = {
                    from: emailSave,    //de mi email
                    to: userEmail,
                    subject: 'Confirmation code'  ,
                    text: `tu código es ${confirmationCode}`     //al del usuario
                }

                transporter.sendMail(mailInfo, function(error, info) { //esta es la estructura segun la libreria
                    if (error){ //el user está guardado pero el código no se ha enviado
                        return res.status(404).json({
                            user: userSave,
                            confirmationCode: 'error, resend code'  //esto es para el frontend
                        })
                    }else{ //tiene que tener la misma estructura para estar igual en el front end
                        return res.status(200).json({
                            user: userSave,
                            confirmationCode
                        })

                    }
                })

            }
      } catch (error) {
        req.file?.path && deleteImgCloudinary(catchImg);
        return (
          res.status(404).json({
            error: 'error en el catch del save',
            message: error.message,
          }) && next(error)
        );
      }
    } else {
      //el user ya existe -- borramos imagen y enviamos error
      req.file?.path && deleteImgCloudinary(catchImg);
      return res.status(404).json('this user already exists');
    }
  } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImg); //!--??
    return (
      res.status(404).json({
        error: 'error en el catch general',
        message: error.message,
      }) && next(error)
    );
  }
};

module.exports = { userRegister };
