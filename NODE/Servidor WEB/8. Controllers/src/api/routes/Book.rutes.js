
const { createBook, toggleAuthors, getBookById, getAllBooks } = require("./../controllers/Book.controllers")


const BookRoutes = require("express").Router()

BookRoutes.post("/", createBook)
BookRoutes.get("/:id", getBookById)
BookRoutes.get("/", getAllBooks)
BookRoutes.patch("/add/:id", toggleAuthors)



module.exports = BookRoutes