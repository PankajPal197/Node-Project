const mysql=require('mysql')
const con=mysql.createConnection({
    host:"localhost",
    user:'root',
    password: '',
    database:'mauth'
})
con.connect((err)=>{
    console.warn('error is connection')
})
// con.connect((err)=>{if(err) throw err;console.log("connected")});
module.exports=con
