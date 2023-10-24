const mongoose = require("mongoose")
//nos traemos de mongoose la parte de los esquemas de datos

const Schema = mongoose.Schema

const AuthorSchema = new Schema(
    {
        name: {
            type: String,
            required: false,
            unique: false
        },
        gender: {
            type: String,
            required: false,
            enum: ["hombre", "mujer", "no binario"]
        },
        age: {
            type: Number,
            required: false
        },
        image: {
            type: String,
            required: false,
          },
        books: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
        }]
    },
    {
    timestamps: true

    //esto es para guardar las fechas de creación y actualización de documentos
    }

)


// ahora con la definición de datos y su esquema vamos a crear el modelo de datos

const Author = mongoose.model("Author", AuthorSchema)

module.exports = { Author }