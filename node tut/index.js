// const{MongoClient}=require('mongodb');
// const url="mongodb+srv://pankajpalkc:tK4eDRnkhH20DRGv@pankajcluster.epsgo7l.mongodb.net/?retryWrites=true&w=majority";
// const client=new MongoClient(url);
// const database="Pankaj_demo";

// async function getData(){
//   let result= await client.connect();
//   let db=result.db(database);
//   let collection=db.collection('User_name');
//   let response=await collection.find({}).toArray();
//   console.log(response);
// }
// getData();
const dbconnect=require('./mongodb');

const main=async()=>{
  let User_name=await dbconnect();
  User_name=await User_name.find().toArray();
  console.log(User_name);
}
main();
