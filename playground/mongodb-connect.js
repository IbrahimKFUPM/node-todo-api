// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error,client) => {
  if(error){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');
  var user = {name: 'Ibrahim',age:23};
  var {name} = user;
  // console.log(name);
  // console.log(user);
  // db.collection('Todos').insertOne({
  //   name:'Ibrahim',
  //   age:25
  // }, (error,result) => {
  //   if(error){
  //     return console.log('Unable to insert entry. '+ error);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   _id: 134,
  //   name:'Ibrahim',
  //   age:25,
  //   location: 'Boston'
  // }, (error, result) => {
  //   if(error){
  //     return console.log('Unable to insert entry. ' + error)
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })
  client.close();
})
