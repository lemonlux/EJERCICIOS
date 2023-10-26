const Author = require("./../models/Author.model")
const Book = require("../models/Book.model")


//!---------- POST ----------

const createBook = async (req,res,next)=>{
try {
    await Author.syncIndexes()
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



module.exports = { createBook }