const User =require('../models/user')

const UserController={

user:async(req,resp)=>{
    const data= await User.find()
    resp.send(data)
},
// getUserById:(req,res)=>{},
userStore:async(req,resp)=>{
    let data=new User(req.body)
    const result=await data.save()

    if(result){
        resp.status(200).json({message:"User created"})
    }
    else{
        resp.send("Error")
    }
},
getUserById:(req,res)=>{
    const result=User.updateOne(req.params.id)
    console.log(result)
// const userId=req.params.id

console.log(userId)
},

}
module.exports= UserController