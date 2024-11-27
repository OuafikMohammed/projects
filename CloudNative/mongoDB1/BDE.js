const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:5555';
const dbName = 'BDE';
let db 
MongoClient.connect(url,function(err,client){
    if (err) {
        console.error("Failed to connect to MongoDB", err);
        return;
    }
    console.log("Connexion réussi avec Mongo");
    db = client.db(dbName);
})