const { createBook } = require("./../controllers/Book.controllers")


const BookRoutes = require("express").Router()

BookRoutes.post("/", createBook)


module.exports = BookRoutes