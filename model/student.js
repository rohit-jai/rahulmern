const mongoose = require('mongoose')
const validator = require('validator')
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email : {
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        trim:true,
        default:0

    }
})

module.exports = mongoose.model('Student',studentSchema)