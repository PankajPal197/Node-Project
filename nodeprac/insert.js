const dbConnect = require('./mongodb')
 const insert=async ()=>{
    let db=await dbConnect()
    let result=await db.insertOne({name:'suresh',email:'suresh@gmail.com',phone:7845781298})
    console.log(result)
 }
 insert()
// async function insertData() {
//       const db = await dbConnect();
  
//       const collection = db.collection('users');
  
//       const documentToInsert = {
//         name: 'Ramesh',
//         email: 'ramesh@gmail.com',
//         phone: 464678161,
//       };
  
//       const result = await collection.insertOne(documentToInsert);
  
//       console.log('Document inserted successfully');
//       console.log('Inserted document ID:', result.insertedId);
//     }

  
//   insertData();


// update data 
// async function update(){
//     const dbconn =await dbConnect()
//     const collection= db.collection('users')
    
//     const filter= {name:'suresh'};
//     const updateData={
//         $set:
//         {
//             email:'suresh@gmail.com',
//         },
//     }
//     const result= await collection.updateOne(filter,updateData);
//     console.log('Document updated successfully');
// }
// update()