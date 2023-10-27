const Author = require("./../models/Author.model")
const Book = require("../models/Book.model")


//!---------- POST ----------

const createBook = async (req,res,next)=>{
try {
    await Book.syncIndexes()
     console.log(req.body)
    const newBook = new Book(req.body)  //nuevo modelo -- nueva instancia
    const savedBook = await newBook.save()
    
    return res.status(savedBook? 200 : 404).json(savedBook? savedBook : "error al postear")

} catch (error) {
    return res.status(404).json({
        error: "error en el catch del post",
        message: error.message
    }) && next(error)    //para mandarlo al siguiente
}

}


//!------------------ READ ------------------

//* ---------------------- get by id ---------------------------

const getBookById = async (req, res, next)=>{
    try {
        const { id } = req.params
        const bookById = await Book.findById(id)
        if (bookById){
            return res.status(200).json(bookById)
        }else{
            return res.status(404).json("no se ha encontrado este libro por id")
        }

    } catch (error) {
        return res.status(404).json({
            error: "error en el catch de get by id",
            message: error.message
        })
    }
}


//* ---------------------- get all ---------------------------

const getAllBooks = async (req,res,next)=>{
    try {
        const allBooks = await Book.find()
        if(allBooks.length>0){
            return res.status(200).json(allBooks)
        }else{
            return res.status(404).json("no se han encontrado libros")
        }
    } catch (error) {
        return res.status(404).json({
            error: "error en el catch del get all",
            message: error.message
        })
    }
}











//!---------- PATCH ----------
//dentro de cada book hay un array en el que se pueden meter autores ocn un toggle

const toggleAuthors = async(req, res, next) =>{
//lo vamos a localizar con un id
    const { id } = req.params
    const { authors } = req.body   //esto crea un string separado por comas de los autores
    const bookById = await Book.findById(id)
    if (bookById){ 
        const arrayIdBooks = authors.split(",")
//recorremos el array creado con un mapeo y dentro de una promesa para manejar asincronías
console.log(bookById)
Promise.all(
        arrayIdBooks.map(async (author, index)=>{
            if (bookById.authors.includes(author)){
                try {
                    await Book.findByIdAndUpdate(id, {
                        $pull:{ authors: author }
                    })
                    try {
                        await Author.findByIdAndUpdate(id, {
                            $pull: { books: id }
                        })
                    } catch (error) {
                        res.status(404).json({
                            error: "error al actualizar el escritor",
                            message: error.message
                        })&& next(error)
                    }
                } catch (error) {
                    res.status(404).json({
                        error: "error al actualizar el libro",
                        message: error.message
                    })&& next(error)
                    
                }
            } else {
                try {
                    await Book.findByIdAndUpdate(id, {
                        $push:{ authors: author }
                    })
                    try {
                        await Author.findByIdAndUpdate(id, {
                            $push: { books: id }
                        })
                    } catch (error) {
                        res.status(404).json({
                            error: "error al actualizar el escritor",
                            message: error.message
                        })&& next(error)
                    }
                } catch (error) {
                    res.status(404).json({
                        error: "error al actualizar el libro",
                        message: error.message
                    })&& next(error)
                    
                }
            }
        })
    ).then( async () =>{
        return res.status(404).json({
            dataUpdate: await Book.findById(id)
        })
    })
    } else {
        return res.status(404).json("este libro no existe")
    }
}



module.exports = { createBook, toggleAuthors, getBookById, getAllBooks }