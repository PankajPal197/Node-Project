const express= require('express')
const app= express()
require('./config')
const Product= require('./product')
// const product = require('./product')

app.use(express.json())

app.get('/',async(req, resp)=>{
 let data=await Product.find()
    resp.send(data)

})

app.post('/store',async(req,resp)=>{
    let data=new Product(req.body)  
    let result= await data.save()
    console.log(result)
    resp.send(result)
})

app.put('/update/:_id', async(req,resp)=>{
    let data=await Product.updateOne(
        req.params,
        {
            $set:req.body
        }
    )
    resp.send(data)
    console.log(data)
})

app.delete('/delete/:_id',async(req, resp)=>{
    let data=await Product.deleteOne(req.params)
    resp.send(data)
    console.log(data)
})
app.listen(4500)