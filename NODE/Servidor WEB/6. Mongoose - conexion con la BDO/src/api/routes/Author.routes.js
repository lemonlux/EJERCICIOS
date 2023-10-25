const { upload } = require("../../middleware/files.middleware")
const { create } = require("../controllers/Author.controllers")

const AuthorRoutes = require("express").Router()

AuthorRoutes.post("/", upload.single("image"), create)


module.exports = AuthorRoutes