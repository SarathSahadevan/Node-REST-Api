
var express = require('express');
var bodyParser =  require('body-parser');



var {mongoose}=require('./db/mongoose');

var {Todo}=require('./models/todo');
var {User}=require('./models/user');


var app = express();

app.use(bodyParser.json());
app.post('/todos',(req,res)=>{


    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.status(200).send(doc); 
        console.log('saved to Todo',doc);
    },(e)=>{
        res.status(400).send(e);
        console.log('unable to save',e);
    });

});

app.get('/todos',(req,res)=>{
Todo.find().then((todos)=>{
res.send({todos});
},(e)=>{
    res.status(400).send(e);
})
});


app.delete('/todos',(req,res)=>{
    Todo.findOneAndRemove({text:"learning node"}).then((result)=>{
        res.status(200).send(result);
    },(e)=>{
        res.send(400).send(e);
    })
});


// app.update('/todos').findOneAndUpdate({
//     text:'abcd'
// },{
//     $set:{
//         completed:true
//     }
// },{
//     returnOriginal:false
// }).then((result)=>{
//     console.log(result)
// });



app.patch('/todos',(req,res)=>{
    Todo.findOneAndUpdate({
        completed:"false"
    },{
        $set:{
            completed:true
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        res.send(200).send(result)
    
    });

});

app.listen(3000,()=>{
    console.log('started on 3000');
});


module.exports={app};














// var newTodo = new Todo({
//     text:'cook dinner'
// });

// newTodo.save().then((doc)=>{
// console.log('saved',doc)
// },(e)=>{
//     console.log('unable to save')
// });

// var otherTodo = new Todo({
//     text:'learning node',
//     completed:true,
//     completedAt:12
// });

// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//     console.log('cant save othertodo',e);
// }

// ); 

