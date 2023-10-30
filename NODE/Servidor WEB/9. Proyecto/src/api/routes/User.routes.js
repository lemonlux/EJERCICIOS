const { userRegister, stateRegister, redirectRegister } = require('../controllers/User.controllers');
const { upload } = require('../../middleware/files.middleware');

const UserRoutes = require('express').Router();

UserRoutes.post('/registerLong', upload.single('image'), userRegister);
UserRoutes.post('/registerState', upload.single('image'), stateRegister)
UserRoutes.post('/redirectRegister', upload.single('image'), redirectRegister)





module.exports = UserRoutes;
