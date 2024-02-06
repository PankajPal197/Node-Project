const express = require('express')

const app = express()
const User = require('./db/User')
const Product=require('./db/Product')
// const fetch = require('node-fetch');
const cors = require('cors')
app.use(express.json())
app.use(cors({ origin: '*' }));

app.post('/register', async (req, resp) => {
    let data = new User(req.body)
    let result = await data.save()
    result=result.toObject()
    delete result.password
    resp.send(result)
})

app.post('/login', async (req, resp) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select('-password')
        if (user) {
            resp.send(user)
        }
        else {
            resp.send("Data Not Matched")
        }

    }
    else{
        resp.send("Please Enter Email and Password")
    }

})

app.post('/add-product',async(req,resp)=>{
    let product= new Product(req.body)
    const result=await product.save();
    console.log(result);
    resp.send(result)
})

app.get('/products', async(req,resp)=>{
    let products=await  Product.find()
    if(products.length>0){
        resp.send(products)
    }
    else{
        resp.send({result:"No Product Found"})
    }
})

app.delete('/product/:id',async(req,resp)=>{
    const result=await Product.deleteOne({_id : req.params.id})
    resp.send(result);
})

app.get('/getProduct/:id',async(req,resp)=>{
    let result=await Product.findOne({
        _id:req.params.id
    })
    if (result){
        resp.send(result)
    }
    else{
        resp.send({result:'No Record Found'})
    }
})

app.put('/update/:id',async(req,resp)=>{
let result=await Product.updateOne({_id:req.params.id},{$set:req.body})
resp.send(result);

})

app.get('/search/:key',async(req,resp)=>{
    let result=await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {price:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
        ]
    })
resp.send(result)
})

app.listen(4500)