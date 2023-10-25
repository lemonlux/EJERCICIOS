//!--22----- IMPORTAMOS LA FUNCION deleteImgCloudinary Y LA FUNCION CORRESPONDIENTE DE LOS MODALES

const { deleteImgCloudinary } = require("../../middleware/files.middleware")
const Author = require("../models/Author.model")

//?------------------------------------------
//!--23--------------- POST------------------
//?------------------------------------------

const create = async (req, res, next) =>{
    let catchImg = req.file?.path

    try {
        // actualizamos los indexes, que se forman cuando una parte del objeto es unique
        //se puede modificar el modelo después de la creación del controlador
        await Author.syncIndexes()
        const newAuthor = new Author(req.body)
        if (req.file){      //si esto existe
            newAuthor.image = catchImg
        }else{
            newAuthor.image = "https://res.cloudinary.com/daxddugwt/image/upload/v1698162119/5770f01a32c3c53e90ecda61483ccb08_xabcjt.jpg"
        }

    const saveAuthor = await newAuthor.save()

    if(saveAuthor){ //si se ha guardado
        return res.status(200).json(newAuthor)
    }else{
        return res.status(404).json("no se ha guardado el nuevo autos")
    }
} catch (error) {
    // si hay un error, hay que borrar la imagen en el cloudinary
    req.file?.path && deleteImgCloudinary(catchImg)
    next(error)   // pasa el error al siguiente controlador o middleware
    return res.status(404).json("error en el creado del elemento", error)

}
}