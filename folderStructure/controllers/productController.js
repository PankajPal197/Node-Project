const Product=require('../models/product')



const ProductController={
    product:async(req,resp)=>{
        const data=await Product.find()
        resp.send(data)
    },
    storeData:async(req,resp)=>{
        let data=new Product(req.body)
        const result=await data.save()
        if(result){
            resp.status(200).json({message:"Product created"})
        }
        else{
            resp.send("Error")
        }
    },
    updateProduct:async(req,resp)=>{
        const productId=params.req.id
        console.log(productId)
    }
}
module.exports= ProductController