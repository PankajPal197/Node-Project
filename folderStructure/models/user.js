const mongoose=require('mongoose')
require('dotenv').config()

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true, 
    },
    email:{
        type: String,
        required: true,
        unique:true,
        match:/^\S+@\S+\.\S+$/
    },
    location:String
})
module.exports = mongoose.model('test',userSchema)