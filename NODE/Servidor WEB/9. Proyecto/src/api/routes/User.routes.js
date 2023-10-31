const {
  userRegister,
  stateRegister,
  redirectRegister,
  sendCode,
  login,
  autoLogin,
  resendCode,
} = require('../controllers/User.controllers');
const { upload } = require('../../middleware/files.middleware');
const User = require('../models/User.models');

const UserRoutes = require('express').Router();

UserRoutes.post('/registerLong', upload.single('image'), userRegister);
UserRoutes.post('/registerState', upload.single('image'), stateRegister);
UserRoutes.post('/redirectRegister', upload.single('image'), redirectRegister);
UserRoutes.post('/login', login);
UserRoutes.post('/login/autoLogin', autoLogin);
UserRoutes.post('/resend', resendCode)

//'/redirect/sendMail/:id'
UserRoutes.post('/register/sendMail/:id', sendCode);

module.exports = UserRoutes;
