const User = require('../models/User.models');
const randomCode = require('../../utils/randomCode');
// randomCode(100000, 999999)
const { deleteImgCloudinary } = require('../../middleware/files.middleware');
const nodemailer = require('nodemailer');
const { setSendEmail, getSendEmail } = require('../../state/state.data');
const sendEmail = require('../../utils/sendEmail');

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
      { userEmail: req.body.userEmail },
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

const stateRegister = async (req, res, next) => {
  //!!! ERRROR
  let catchImg = req.file?.path;

  try {
    await User.syncIndexes();
    let confirmationCode = randomCode(100000, 999999);
    const { userName, userEmail } = req.body;
    console.log(userEmail, userName); //del model

    const userExists = await User.findOne(
      { userEmail: req.body.userEmail }, //ambas son unique por eso se ponen en objetos separados
      { userName: req.body.userName }
    );

    if (!userExists) {
      const newUser = new User({ ...req.body, confirmationCode });

      req.file
        ? (newUser.image = req.file.path)
        : (newUser.image = 'https://pic.onlinewebfonts.com/svg/img_181369.png');

      try {
        //como vamos a usar otro await - otro trycatch     //?...-----??? EL RANDOM CODE TIENE PARAMETROS
        console.log('entrooooo en el trycatch');
        const userSaved = await newUser.save();

        console.log(newUser);
        if (userSaved) {
          //si el usuario se ha guardado enviamos el email

          sendEmail(userEmail, userName, confirmationCode);
          console.log('entrooooo donde el email');
          /* no tenemos acceso a la librería, la asincronia no es nuestra, por lo que vamos a usar
            un timeout */

          setTimeout(() => {
            if (getSendEmail()) {
              //si es true (devuelve un boolean)
              setSendEmail(false); //lo reseteamos a false por si hay que volver a mandarlo
              res.status(200).json({
                user: userSaved,
                confirmationCode,
              });
            } else {
              setSendEmail(false);
              return res.status(404).json({
                user: userSaved,
                confirmationCode: 'error, resend code', //para el front end
              });
            }
          }, 2000);
        }
      } catch (error) {
        req.file && deleteImgCloudinary(catchImg);
        return res.status(404).json({
          error: 'error en el catch del save',
          message: error.message,
        });
      }
    } else {
      req.file?.path && deleteImgCloudinary(catchImg);
      return res.status(409).json('this user already exists');
    }
  } catch (error) {
    req.file && deleteImgCloudinary(catchImg);
    return (
      res.status(404).json({
        error: 'error en el catch general',
        message: error.message,
      }) && next(error)
    );
  }
};

//!------------------ register con redirect ---------------------
//* es igual que anteriormente pero cuando comprobemos que el usuario este guardado redirigimos a una pagina que nos envie el codigo

const redirectRegister = async (req, res, next) => {
  let catchImg = req.file?.path;

  try {
    await User.syncIndexes(); //sincronizamos indexes
    let confirmationCode = randomCode(100000, 999999); //creamos el codigo de confirmacion
    const userExist = await User.findOne(
      //buscamos el usuario
      { userEmail: req.body.userEmail },
      { userName: req.body.userName }
    );
    if (!userExist) {
      //si el usuario no existe hay que hacer uno nuevo
      const newUser = new User({ ...req.body, confirmationCode });

      req.file
        ? (newUser.image = req.file.path)
        : (newUser.image = 'https://pic.onlinewebfonts.com/svg/img_181369.png');

      //para guardar tenemos q hacer un await --- trycatch
      try {
        const userSaved = await newUser.save();

        if (userSaved) {
          //!--- aqui viene lo diferente del redirect

          return res.redirect(
            307,
            `http://localhost:8080/api/v1/users/register/sendMail/${userSaved._id}`
          );

          //*esta ruta tiene que ser la misma que especifiquemos en user routes para la funcion send mail
        }
      } catch (error) {
        rreq.file && deleteImgCloudinary(catchImg);
        return (
          res.status(404).json({
            error: 'error en el catch del save',
            message: error.message,
          }) && next(error)
        );
      }
    } else {
      //si el user ya existe hay que borrar la imagen del cloudinary y decir q ya existe
      req.file && deleteImgCloudinary(catchImg);
      return res.status(409).json('this user already exists');
    }
  } catch (error) {
    //da feedback al usuario y a nosotros
    req.file && deleteImgCloudinary(catchImg);
    return (
      res.status(404).json({
        error: 'error en el catch general',
        message: error.message,
      }) && next(error)
    );
  }
};


//todo---------- SEND CODE del redirect ---------


const sendCode = async (req,res,next) =>{
try {  //hemos guardado el user y nos ha redireccionado
  // queremos: -el id para la busqueda del user -los parametros del env
  //* vamos a hacer: transporter, mailInfo y enviar con sendEmail
  
  const { id } = req.params
  const findUser = await User.findById(id)
  
  const myEmail = process.env.EMAIL
  const myPassword = process.env.PASSWORD

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: myEmail,
      pass: myPassword
    }
  })

  const mailInfo = {
    from: myEmail,
    to: findUser.userEmail,
    subject: 'Confirmation code',
    text: `Hi ${findUser.userName}, your confirmation code is ${findUser.confirmationCode}`
  }

  transporter.sendMail(mailInfo, function (error, info){
    if (error){
      console.log("hay un error!!!", error)
      return res.status(404).json({
        user: findUser,
        confirmationCode: 'error, resend code'  //para el front
      })
    }else{
      console.log (info.response)
      return res.status(200).json({
        user: findUser,
        confirmationCode: findUser.confirmationCode
      })
    }
  })




} catch (error) {
  res.status(404).json({
    error: 'error en el catch del sendcode',
    message: error.message,
  }) && next(error)
}




}




module.exports = { userRegister, stateRegister, redirectRegister, sendCode };
