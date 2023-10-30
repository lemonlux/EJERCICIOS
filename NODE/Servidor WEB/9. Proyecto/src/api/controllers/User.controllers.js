const User = require('../models/User.models');
const randomCode = require('../../utils/randomCode');
// randomCode(100000, 999999)
const { deleteImgCloudinary } = require('../../middleware/files.middleware');
const nodemailer = require('nodemailer');
const { setSendEmail, getSendEmail } = require('../../state/state.data')
const sendEmail = require('../../utils/sendEmail')


//! ------------------- register largo ------------------------

const userRegister = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await User.syncIndexes(); //como es un post hay que sincronizar los indexes
    let confirmationCode = randomCode(100000, 999999);
    const { userEmail, userName } = req.body;

    const userExists = await User.findOne(
      //ahora encuentra el username con estos parametros
      //se ponen por separado porque ambos son unique
      { email: req.body.userEmail },
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
        const userSave = await newUser.save();
        //si se ha guardado --- enviamos email de confirmacion
        if (userSave) {
          const emailSave = process.env.EMAIL;
          const password = process.env.PASSWORD;

          const transporter = nodemailer.createTransport({
            //metodo de nodemailer
            service: 'gmail',
            auth: {
              user: emailSave,
              pass: password,
            },
          });

          const mailInfo = {
            from: emailSave, //de mi email
            to: userEmail,
            subject: 'Confirmation code',
            text: `Hola ${userName}! Tu código de confirmación es ${confirmationCode}`, //al del usuario
          };

          transporter.sendMail(mailInfo, function (error, info) {
            //esta es la estructura segun la libreria
            if (error) {
              //el user está guardado pero el código no se ha enviado
              return res.status(404).json({
                user: userSave,
                confirmationCode: 'error, resend code', //esto es para el frontend
              });
            } else {
              //tiene que tener la misma estructura para estar igual en el front end
              return res.status(200).json({
                user: userSave,
                confirmationCode,
              });
            }
          });
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
      return res.status(409).json('this user already exists');
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


//! ------------------- register con el estado ------------------------
/* antes de hacer el register necesitamos crear el state.data.js para establecer el estado del email
con el set y el get, y hacer una función externa de sendEmail que ubicaremos en utils */

//* va a ser igual que el otro

const stateRegister = async (req,res,next) =>{
  let catchImg= req.file?.path

  try {
      await User.syncIndexes()
      let confirmationCode = randomCode()
      const { userName, userEmail } = req.body    //del model

      const userExists = await User.findOne(
        { userEmail: req.body.userEmail }, //ambas son unique por eso se ponen en objetos separados
        { userName: req.body.userName }
      )

        if(!userExists){
          const newUser = new User({ ...req.body, confirmationCode })
        
        req.file
        ? (newUser.image = req.file.path)
        : (newUser.image = 'https://pic.onlinewebfonts.com/svg/img_181369.png')

        try {   //como vamos a usar otro await - otro trycatch
            const saveUser = await newUser.save()

          if (saveUser){ //si el usuario se ha guardado enviamos el email

            sendEmail(userEmail, userName, confirmationCode)

            /* no tenemos acceso a la librería, la asincronia no es nuestra, por lo que vamos a usar
            un timeout */

            setTimeout(() => {
              if (getSendEmail()) {   //si es true (devuelve un boolean)
                setSendEmail(false)  //lo reseteamos a false por si hay que volver a mandarlo
              res.status(200).json({
                user: saveUser,
                confirmationCode
              })
              } else {
                setSendEmail(false)
                return res.status(404).json({
                  user: saveUser,
                  confirmationCode: 'error, resend code'   //para el front end
                })
              }



            }, 1400);

          } 

        } catch (error) {
          req.file && deleteImgCloudinary(catchImg)
          return (
            res.status(404).json({
              error: 'error en el catch del save',
              message: error.message,
            })
          )
        }


      } else {
        req.file?.path && deleteImgCloudinary(catchImg);
       return res.status(409).json('this user already exists')
      }

  } catch (error) {
    req.file && deleteImgCloudinary(catchImg)
    return (
      res.status(404).json({
        error: 'error en el catch general',
        message: error.message
      }) && next(error)
    )
  }

}






module.exports = { userRegister };
