    const { deleteImgCloudinary } = require("../../middleware/files.middleware")

    const Author = require("../models/Author.model")

    const create = async (req, res, next) =>{
        let catchImg = req.file?.path

        try {
            await Author.syncIndexes()
            const newAuthor = new Author(req.body)
            if (req.file){
                newAuthor.image = catchImg

            } else {
                newAuthor.img="https://res.cloudinary.com/daxddugwt/image/upload/v1698162119/5770f01a32c3c53e90ecda61483ccb08_xabcjt.jpg"
            }
        
            const saveAuthor = await newAuthor.save()

            if (saveAuthor){
                return res.status(200).json(newAuthor)
            }else{
                return res.status(404).json("no se ha guardado el usuario")
            }


        } catch (error) {
            req.file?.path && deleteImgCloudinary(catchImg)
            next(error)
            return res.status(404).json({
                message: "error",
                error: error,
            })
            
        }
    }

    module.exports= { create }