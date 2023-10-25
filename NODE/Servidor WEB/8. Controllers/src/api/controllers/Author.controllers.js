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

//?------------------------------------------
//!--31--------------- READ ------------------
//?------------------------------------------

//* ---------------------- get by id ---------------------------

const getById = async (req,res,next)=>{
    try {
        const { id } = req.params
        const authorById = await Author.findById(id)

        if (authorById) {
            return res.status(200).json(authorById)
        
        } else {
            return res.status(404).json("no se ha encontrado este autor")
            
        }
    } catch (error) {
        return res.status(404).json("error en busqueda por id", error)
    }
}

//* ------------------------- get all ---------------------------

const getAll = async (req, res, next)=>{
    try {
        const allAuthors = await Author.find()
        //el find nos devuelve un array
        if (allAuthors.length > 0) {
            return res.status(200).json(allAuthors)
        } else {
            return res.status(404).json("no se han encontrado autores")
        }
    } catch (error) {
        return res.status(404).json("error en busqueda de getAll", error)
    }
}

//* ------------------------- get by name ---------------------------

const getByName = async(req, res, next) =>{
    try {
        const { name } = req.params
        // console.log(name)
        const authorsByName = await Author.find({name})
        console.log(authorsByName)
        // en el find({name}) el name coincide en clave y valor y por eso solo ponemos name, y no name[name]
        // nos devuelve un array
        if (authorsByName.length > 0) {
            return res.status(200).json(authorsByName)
        } else {
            return res.status(404).json("no se ha encontrado a este autor por nombre")
            
        }
    } catch (error) {
        return res.status(404).json("error en la busqueda por nombre", error)
    }
}




//* ------------------------- delete ---------------------------


const deleteAuthor = async (req, res,next)=>{
    try {

    const { id } = req.params
    const author = await Author.findByIdAndRemove(id)
        if (author) {
            //lo ha borrado, pero ahora vamos a hacer el TESTING--- EXISTE?
            const findByIdAuthor = await Author.findById(id)
        // si existe... ERROR
            return res.status(findByIdAuthor ? 404 : 202).json({
                deleteTest: findByIdAuthor ? false : true
            })
        } else {
            return res.status(404).json("este autor no existe")
        }
    } catch (error) {
        return res.status(404).json("error en el borrado", error)
    }
}



//!---24----- EXPORTAMOS LA FUNCION ENTRE {} (VA A HABER MAS) Y LA IMPORTAMOS EN RUTAS
module.exports = {
    create,
    getById,
    getAll,
    getByName,
    deleteAuthor
}