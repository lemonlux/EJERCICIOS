const User = require('../models/User.models');
const randomCode = require('../../utils/randomCode');
// randomCode(100000, 999999)
const { deleteImgCloudinary } = require('../../middleware/files.middleware');
const nodemailer = require('nodemailer');
const { setSendEmail, getSendEmail } = require('../../state/state.data');
const sendEmail = require('../../utils/sendEmail');
const { generateToken } = require('../../utils/token');
const bcrypt = require('bcrypt');


//* ________________________________ POST _________________________________________

//?---------------------------------------------------------------------------------
//! --------------------------- REGISTER LARGO -------------------------------------
//?---------------------------------------------------------------------------------

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

//?---------------------------------------------------------------------------------
//! ------------------------ REGISTER CON EL ESTADO --------------------------------
//?---------------------------------------------------------------------------------
//
/* antes de hacer el register necesitamos crear el state.data.js para establecer el estado del email
con el set y el get, y hacer una función externa de sendEmail que ubicaremos en utils */

//* va a ser igual que el otro

const stateRegister = async (req, res, next) => {
  let catchImg = req.file?.path;

  try {
    await User.syncIndexes();
    let confirmationCode = randomCode(100000, 999999);
    const { userName, userEmail } = req.body;
    console.log(userEmail, userName); //del model

    const userExists = await User.findOne(
      { userEmail }, //ambas son unique por eso se ponen en objetos separados
      { userName }
    );

    if (!userExists) {
      const newUser = new User({ ...req.body, confirmationCode });

      req.file
        ? (newUser.image = req.file.path)
        : (newUser.image = 'https://pic.onlinewebfonts.com/svg/img_181369.png');

      try {
        //como vamos a usar otro await - otro trycatch     //?...-----!! EL RANDOM CODE TIENE PARAMETROS
        const userSaved = await newUser.save();
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

//?---------------------------------------------------------------------------------
//! ------------------------ REGISTER CON REDIRECT ---------------------------------
//?---------------------------------------------------------------------------------
//* es igual que anteriormente pero cuando comprobemos que el usuario este guardado redirigimos a una pagina que nos envie el codigo
//necesitamos de la funcion sendCode

const redirectRegister = async (req, res, next) => {
  let catchImg = req.file?.path;

  try {
    await User.syncIndexes(); //sincronizamos indexes
    let confirmationCode = randomCode(100000, 999999); //creamos el codigo de confirmacion
    const { userEmail, userName } = req.body;
    const userExist = await User.findOne(
      //buscamos el usuario
      { userEmail },
      { userName }
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

//?---------------------------------------------------------------------------------
//todo ------------------------ SEND CODE del redirect -----------------------------
//?---------------------------------------------------------------------------------

const sendCode = async (req, res, next) => {
  try {
    //hemos guardado el user y nos ha redireccionado
    // queremos: -el id para la busqueda del user -los parametros del env
    //* vamos a hacer: transporter, mailInfo y enviar con sendEmail

    const { id } = req.params;
    const findUser = await User.findById(id);

    const myEmail = process.env.EMAIL;
    const myPassword = process.env.PASSWORD;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: myEmail,
        pass: myPassword,
      },
    });

    const mailInfo = {
      from: myEmail,
      to: findUser.userEmail,
      subject: 'Confirmation code',
      text: `Hi ${findUser.userName}, your confirmation code is ${findUser.confirmationCode}`,
    };

    transporter.sendMail(mailInfo, function (error, info) {
      if (error) {
        console.log('hay un error!!!', error);
        return res.status(404).json({
          user: findUser,
          confirmationCode: 'error, resend code', //para el front
        });
      } else {
        console.log(info.response);
        return res.status(200).json({
          user: findUser,
          confirmationCode: findUser.confirmationCode,
        });
      }
    });
  } catch (error) {
    res.status(404).json({
      error: 'error en el catch del sendcode',
      message: error.message,
    }) && next(error);
  }
};

//?---------------------------------------------------------------------------------
//! --------------------------------- LOGIN ----------------------------------------
//?---------------------------------------------------------------------------------

const login = async (req, res, next) => {
  //no hay imagen que cachear ni que sincronizar indexes (no estamos metiendo info nueva)
  try {
    //ya tenemos usuario registrado tenemos que ver si existe
    const { userEmail, password } = req.body;
    const userDB = await User.findOne({ userEmail });

    if (userDB) {
      //comparamos la contraseña encriptada para ver si es la misma

      if (bcrypt.compareSync(password, userDB.password)) {
        //metodo que devuelve un boolean (password, hash)
        // hay que hacerlo con el metodo porque la que viene por el body no está encriptada y la guardada si

        //*generamos un token si las dos contraseñas coinciden
        const token = generateToken(userDB._id, userEmail);

        return res.status(200).json({
          user: userDB,
          token,
        });
      } else {
        //si las password no matchean
        return res.status(404).json('Wrong password');
      }
    } else {
      return res.status(404).json('This user is not registered');
    }
  } catch (error) {
    return res.status(404).json({
      error: 'error en el catch del login',
      message: error.message,
    });
  }
};

//?---------------------------------------------------------------------------------
//! ------------------------------- AUTOLOGIN --------------------------------------
//?---------------------------------------------------------------------------------
//* -- CUANDO HAGAMOS AUTOLOGIN tenemos que meter por insomnia la contraseña encriptada que nos da el login
//* -- lo metemos por JSON y el token que nos devuelve lo tenemos que copiar y pegar encima del token anterior
//* guardado en las variables de entorno

const autoLogin = async (req, res, next) => {
  try {
    const { userEmail, password } = req.body;
    const userDB = await User.findOne({ userEmail });

    if (userDB) {
      if (password === userDB.password) {
        //la password es la YA GUARDADA (AUTOLOGIN), y la userDB.password es la registrada
        //cada vez que el usuario se logea se genera un nuevo token
        const token = generateToken(userDB._id, userEmail);

        return res.status(200).json({
          user: userDB,
          token,
        });
      } else {
        return res.status(404).json('Wrong password');
      }
    } else {
      return res.status(404).json('This user does not exist');
    }
  } catch (error) {
    return res.status(404).json({
      error: 'error en el catch del autologin',
      message: error.message,
    });
  }
};

//?---------------------------------------------------------------------------------
//! ----------------------------- RESEND CODE --------------------------------------
//?---------------------------------------------------------------------------------

const resendCode = async (req, res, next) => {
  try {
    const userExists = await User.findOne({ email: req.body.userEmail });

    const myEmail = process.env.EMAIL;
    const myPassword = process.env.PASSWORD;

    if (userExists) {
      //esto en el sendCode no lo hacemos porque para que se redirija la pag 
      // el usuario ya tiene que existir, aqui en cambio es un boton independiente

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: myEmail,
          pass: myPassword,
        },
      });

      const mailInfo = {
        from: myEmail,
        to: userExists.userEmail,
        subject: 'Confirmation code',
        text: `Hi ${userExists.userName}, your confirmation code is ${userExists.confirmationCode}`,
      };

      transporter.sendMail(mailInfo, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(404).json({
            resend: false,
          });
        } else {
          console.log(info.response);
          return res.status(200).json({
            resend: true,
          });
        }
      });
    } else {
      return res.status(404).json('This user does not exist');
    }
  } catch (error) {
    return res.status(404).sjon({
      error: 'error en el catch general',
      message: error.message,
    });
  }
};

//?---------------------------------------------------------------------------------
//! ----------------------------- VERIFY CODE --------------------------------------
//?---------------------------------------------------------------------------------
/*tenemos que verificar que el codigo que nos devuelve el usuario es el mismo que el que le hemos dado
*/
























//* ________________________________ READ _________________________________________

const userById = async (req,res,next) =>{
 try {
  const { id } = req.params
  const userById = await User.findById(id)
if (userById) {
  return res.status(200).json(userById)
} else {
  return res.status(404).json('Usuario no encontrado')
}

 } catch (error) {
  return res.status(404).json({
    error: 'error en el catch',
    message: error.message
  })
  
 }
}



module.exports = {
  userRegister,
  stateRegister,
  redirectRegister,
  sendCode,
  login,
  autoLogin,
  resendCode,
  userById,
};
