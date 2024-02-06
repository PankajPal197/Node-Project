const mongodb= require('./mongodb')

const deleteData=async ()=>{
    let db=await mongodb();
    let result=await db.deleteMany({name:'suresh'})
    console.log(result);
}
deleteData();