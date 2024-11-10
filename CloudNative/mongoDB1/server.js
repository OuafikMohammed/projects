const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'bdmonapi';
let db 
MongoClient.connect(url,function(err,client){
    console.log("Connexion réussi avec Mongo");
    db = client.db(dbName);
})