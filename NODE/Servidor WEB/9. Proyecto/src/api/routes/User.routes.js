const {
  userRegister,
  stateRegister,
  redirectRegister,
  sendCode,
  login,
  autoLogin,
  resendCode,
  userById,
  verifyCode,
  changePassword,
  sendNewPassword
} = require('../controllers/User.controllers');
const { upload } = require('../../middleware/files.middleware');
const User = require('../models/User.models');

const UserRoutes = require('express').Router();
//*---- post
UserRoutes.post('/registerLong', upload.single('image'), userRegister);
UserRoutes.post('/registerState', upload.single('image'), stateRegister);
UserRoutes.post('/redirectRegister', upload.single('image'), redirectRegister);
UserRoutes.post('/login', login);
UserRoutes.post('/login/autoLogin', autoLogin);
UserRoutes.post('/resend', resendCode)
UserRoutes.post('/verify', verifyCode)   //es el mismo que el checkNewUser de clase
UserRoutes.post('/changePassword', changePassword)
UserRoutes.post('/changePassword/:id', sendNewPassword)

//*----- get

UserRoutes.get('/:id', userById)



//---------- controladores autenticados


//---------- controladores de redirect
//'/redirect/sendMail/:id'
UserRoutes.post('/register/sendMail/:id', sendCode);

module.exports = UserRoutes;
