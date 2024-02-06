const mongoose=require('mongoose')
require('./config')
const productSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});
module.exports=mongoose.model('User',productSchema)
