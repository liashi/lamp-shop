const mongoose = require('mongoose')
const Schema = mongoose.Schema

const positionSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    all: {
        type: Number
    },
    img:{
        type: String
    },
    description: {
        type: String
    },
    id:{
        type: Number
    },
    user: {
        ref: ' users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model("positions", positionSchema)