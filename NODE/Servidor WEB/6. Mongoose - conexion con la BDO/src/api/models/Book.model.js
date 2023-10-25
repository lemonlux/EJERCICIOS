const mongoose = require("mongoose")

const Schema = new mongoose.Schema

const BookSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
        },
        year: {
            type: Number,
            required: false,
        },
        genre:{
            type: String,
            required: false,
        },
        authors: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author"
        }]

    },
    {
        timestamps: true
    }
)

const Book = mongoose.model("Book", BookSchema)

module.exports= { Book }
