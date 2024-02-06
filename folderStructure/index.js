require('dotenv').config()
const mongoose=require('mongoose')
const express=require('express')
const app=express()
const port=process.env.PORT ||4500
const db=process.env.DB_NAME
// add batabase
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const database = mongoose.connection;
app.use(express.json())

const userRoute=require('./routes/userRoutes')

app.use(userRoute)

app.listen(port, ()=>console.log(`server listening on port ${port}`))