const { createBook, toggleAuthors } = require("./../controllers/Book.controllers")


const BookRoutes = require("express").Router()

BookRoutes.post("/", createBook)
BookRoutes.patch("/add/:id", toggleAuthors)


module.exports = BookRoutes