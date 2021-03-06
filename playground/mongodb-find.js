// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error,client) => {
  if(error){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');
  db.collection('Todos').find({major:"CS"}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  }, (error) => {
    console.log('Unable to get documents',error);
  });

  db.collection('Todos').find().count().then((count) => {
    console.log('Todos count :' + count);
  }, (error) => {
    console.log('Unable to get count Todos',error);
  });
  client.close();
})
