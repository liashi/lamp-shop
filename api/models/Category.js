const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: ''
    },
    price:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    id:{
        type: Number
    },
    all:{
        type: Number
    },
    user:{
        ref:'users',
        type: Schema.Types.ObjectId
    }

})


module.exports = mongoose.model('categories', categorySchema)