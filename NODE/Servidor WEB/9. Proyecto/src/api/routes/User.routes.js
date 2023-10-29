const { userRegister } = require('../controllers/User.controllers')
const { upload } = require('../../middleware/files.middleware')


const UserRoutes = require('express').Router()

module.exports = UserRoutes