const mongoose= require('mongoose')
require('dotenv').config()

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    brand:{
        type:String,
        require:true
    }

})
module.exports=mongoose.model('products',productSchema)