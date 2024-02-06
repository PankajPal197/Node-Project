const mongodb=require('./mongodb')

const updateData=async ()=>{
    const db= await mongodb()
    const result=await db.updateOne({name:'suresh'},
    {
        $set:{
            name:"Karan"
        }
    })
    console.log(result)
}
updateData()