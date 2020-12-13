//CRUD

const {MongoClient, ObjectID} = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

 
MongoClient.connect(connectionUrl, {useNewUrlParser:true, useUnifiedTopology: true}, (error, client) =>{

    if(error) {
        return console.log('Unable to connect to database');
    }

 
    const db = client.db(databaseName);

    //5fd4b64581d51d15a0e4a07e

    // db.collection('users').updateOne({_id: new ObjectID("5fd4b64581d51d15a0e4a07e")}, {$inc:{
    //     age:-444
    // }}).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // });

    
    db.collection('users').updateMany({_id: new ObjectID("5fd4b64581d51d15a0e4a07e")}, {$inc:{
        age:-444
    }}).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });


});




