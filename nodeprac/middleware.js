const middleware=((req,res,next)=>{
    if(!req.query.age){
        res.send("Please Enter Your Age")
    }
    else if(req.query.age<18){
        res.send("Are You Not Eligible ")
    }
    else{
        next()
    }
})
module.exports==middleware