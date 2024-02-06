const express=require('express')
const Route=express.Router()
const UserController=require('../controllers/userController')
const ProductController=require('../controllers/productController')

Route.get('/',UserController.user)
Route.post('/testStore',UserController.userStore)
Route.put('/update/:_id',UserController.getUserById)

Route.get('/product',ProductController.product);
Route.post('/storeData',ProductController.storeData);
Route.get('/edit/:_id',ProductController.updateProduct);

module.exports=Route