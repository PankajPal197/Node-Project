// const http=require ('http')
// const app=http.createServer((req,resp)=>{
//     resp.write('helo');
//     resp.end()
// })
// app.listen (8000)
// const http= require('http')
// const data=require('./demoapi')
// const app=http.createServer((req,resp)=>{
//     resp.writeHead(201,{'content-type':'Application\json'})
//     resp.write(JSON.stringify({data}))
//     resp.end()
// })
// app.listen(8000)
  
// const express=require('express')
// const data= require('./demoapi')
// const app=express()
// app.get('/',function(req,res){
//     res.send(data)
// })
// app.listen(8000)

// const express=require ('express')
// const path= require('path')
// const app= express()
// const publicpath=path.join(__dirname,'public/demo')

// app.use(express.static(publicpath))
// app.listen(4500)

const fs=require('fs')
const input=process.argv
if (input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}
console.log(input)