const { upload } = require('../../middleware/files.middleware');
const User = require('../models/User.models');
const { isAuth } = require('../../middleware/auth.middleware')
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
  sendNewPassword,
  modifyPassword,
  userByEmail,
  deleteUser
} = require('../controllers/User.controllers');






const UserRoutes = require('express').Router();
//*---- post
UserRoutes.post('/registerLong', upload.single('image'), userRegister);
UserRoutes.post('/registerState', upload.single('image'), stateRegister);
UserRoutes.post('/redirectRegister', upload.single('image'), redirectRegister);
UserRoutes.post('/login', login);
UserRoutes.post('/login/autoLogin', autoLogin);
UserRoutes.post('/resend', resendCode)
UserRoutes.post('/verify', verifyCode)   //es el mismo que el checkNewUser de clase

//*----- patch
UserRoutes.patch('/setNewPassword', changePassword)    


//*----- get

UserRoutes.get('/:id', userById)
UserRoutes.get('/findByEmail/find', userByEmail)



//!---------- controladores autenticados
UserRoutes.patch('/modifyPassword', [isAuth], modifyPassword) 
UserRoutes.delete('/', [isAuth], deleteUser)
//el middleware NUESTRO (personalizado) se mete entre corchetes. podemos meter varios pero el orden importa


//!---------- controladores de redirect
//'/redirect/sendMail/:id'
UserRoutes.post('/register/sendMail/:id', sendCode);
UserRoutes.patch('/sendPassword/:id', sendNewPassword)   

module.exports = UserRoutes;
