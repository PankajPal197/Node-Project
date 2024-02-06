const {MongoClient}=require('mongodb')
const url='mongodb+srv://pankajpalkc:tK4eDRnkhH20DRGv@pankajcluster.epsgo7l.mongodb.net/?retryWrites=true&w=majority';
const client=new MongoClient(url)
const Database_Name="Pankaj_demo";

async function getData(){
    const result=await client.connect();
    db= result.db(Database_Name)
    return  db.collection('User_name')
}
module.exports=getData
