const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db)=>{

if(err){
   return console.log('unable to connect');
}
console.log('success');

db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
console.log('Todos');
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log('unable to fetch',err);
})

// db.close();

});
