const express=require('express')
const con=require('./mysqlconfig')
const app=express()

app.use(express.json())
app.get('/',(req,resp)=>{
    con.query("select * from users",(err,result)=>{
        if(err){
            resp.send("error")
        }
        else{
            resp.send(result)
        }
    })
    // resp.send("route done")
})
app.post('/store',(req,resp)=>{
    // const data= {name:"tester",email:'tester@gmail.com',password:'789456123'}
    const data= req.body
    con.query("INSERT INTO users SET ?", data,(error, result,fields)=>{
        if(error) error
        resp.send(result)
    })
})

app.put('/:id',(req,resp)=>{
    const data=[req.body.name,req.body.email,body.req.password]
    con.query("Update users SET name =?,email=?, password=? where id=?",data,(error,result, fields)=>{
        if(error) throw error
        resp.send(result)
    })
    // resp.send("update api worling")
})
app.listen(4500)