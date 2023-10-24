const { upload } = require("../../middleware/files.middleware")
const { create } = require("../controllers/Athor.controllers")

const AuthorRoutes = require("express").Router()

AuthorRoutes.post("/", upload.single("image"), create)


module.exports = AuthorRoutes