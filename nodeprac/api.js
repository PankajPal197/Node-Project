const express=require('express')
const dbConnect= require('./mongodb')
const mongodb=require('mongodb')
const app=express()

app.use(express.json())

// get data 
app.get('/',async (req,resp)=>{
    let data=await dbConnect()
    data=await data.find({name:'Rahul'}).toArray()
    // console.log(data)
    resp.send(data)
})

// store data 
app.post('/',async(req,resp)=>{
   
    let data=await dbConnect()
    let result=await data.insertOne(req.body)
    resp.send(result)
})

// update data 
app.put('/:name',async(req,resp)=>{
    // console.log('update Data')
    let data= await dbConnect()
    let result=await data.updateOne(
        {
            // name:req.body.name
            name:req.params.name
        },
        {
            $set:req.body
        }
        )
    resp.send({result})
})

app.delete('/:id', async(req,resp)=>{
    // console.log(req.params.id)
    let data = await dbConnect()
    let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    // console.log(result)
    resp.send(result)
})

app.listen(4500)