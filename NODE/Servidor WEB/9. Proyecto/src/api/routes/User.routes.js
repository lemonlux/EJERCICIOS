const { userRegister, stateRegister, redirectRegister } = require('../controllers/User.controllers');
const { upload } = require('../../middleware/files.middleware');
const User = require('../models/User.models');

const UserRoutes = require('express').Router();

UserRoutes.post('/registerLong', upload.single('image'), userRegister);
UserRoutes.post('/registerState', upload.single('image'), stateRegister)
UserRoutes.post('/redirectRegister', upload.single('image'), redirectRegister)



//'/redirect/sendMail/:id'

module.exports = UserRoutes;
