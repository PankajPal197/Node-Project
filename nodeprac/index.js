// const dbConnect = require('./mongodb')
// const mongodb=require('./mongodb')

// dbConnect().then((resp) => {
//     resp.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })
// const main=async()=>{
//     let data=await dbConnect();
//     data=await data.find().toArray()
//     console.log(data)
// }
// main               
const mongodb=require('./mongodb')

mongodb().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.log(data);
    })
})