const {MongoClient}= require('mongodb')
const url='mongodb://127.0.0.1:27017'
const databaseName='e-comm'
// const databaseName='demo'
const client=new MongoClient(url)
 
async function dbConnect(){
    let result=await client.connect();
    db=result.db(databaseName)
    // return db
    return db.collection('users')
    // return db.collection('test')
}
module.exports=dbConnect;
