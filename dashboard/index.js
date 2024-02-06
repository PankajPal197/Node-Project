const express=require('express')
const app=express('express')

const getData=require('./mongodb')

// data find start
const main=async()=>{
    let User_name=await getData();
    User_name=await User_name.find().toArray();
    // console.log(User_name);
  }
  main();
// data find end

app.set('view engine','ejs')

// app.get('/',(req,resp)=>{
//     resp.render('index')
// });
app.get('/about',(repq,resp)=>{
    const main=async()=>{
    let User_name=await getData();
    User_name=await User_name.find().toArray();
    // console.log(User_name);
resp.render('about',{User_name})

  }
  main()
// resp.render('about',{User_name})
});
app.get('/profile',(req,resp)=>{
    const ProfileDetail=
    {
        fullName:"Pankaj Pal",
        email:"pankajpal197@gmail.com",
        phone:8974616416,
    }
    resp.render('profile',{ProfileDetail});
})

app.listen(8000)