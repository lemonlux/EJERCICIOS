const { userRegister } = require('../controllers/User.controllers')
const { upload } = require('../../middleware/files.middleware')


const UserRoutes = require('express').Router()

UserRoutes.post('/registerLong', upload.single('image'), userRegister)

module.exports = UserRoutes