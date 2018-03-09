const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db)=>{

if(err){
   return console.log('unable to connect');
}
console.log('success');

// db.collection('Todos').insertOne({

// text:'something to do',
// completed:false


// },(err,result)=>{
//     if(err){
//         return console.log('unable to insert',err);
//     }

// console.log(JSON.stringify(result.ops,undefined,2));

// });


// db.collection('Users').insertOne({
//     _id:123,
//     name:'sarath',
//     age:22,
//     location:'india'
// },(err,result)=>{
//     if(err){
//         return console.log('unable to insert',err);

//     }
//     console.log(result.ops)
// });




db.close();

});
