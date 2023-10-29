const User = require('../models/User.models')
const randomCode = require('../../utils/randomCode')
// randomCode(100000, 999999)
const { deleteImgCloudinary } = require('../../middleware/files.middleware')
const nodemailer = require('nodemailer')

//!----- post


const userRegister = async(req,res,next) =>{
let catchImg = req.file?.path

try {
await User.syncIndexes() //como es un post hay que sincronizar los indexes
let confirmationCode = randomCode(100000, 999999)
const { email, userName } = req.body 

const userExists = await User.findOne(  //ahora encuentra el username con estos parametros
    { email:req.body.email },
    { userName: req.body.userName }
)
//*findOne() --- conditions
//*The conditions are cast to their respective SchemaTypes before the command is sent

if (!userExists){

}else{  //ya existe -- borramos imagen y enviamos error

}








    
} catch (error) {
    req.file?.path && deleteImgCloudinary(catchImg)   //!--??
    return (
    res.status(404).json({
        error: 'error en el catch general',
        message: error.message
    }) && next(error)
    )
}







    
}


module.exports = { userRegister }