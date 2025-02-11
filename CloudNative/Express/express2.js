// express js est un framework de node js
// schema de donees represente les noms de colonnes comme id nom filiere en sql
// schema de donnee en noSql represente les cles
// {
//  'id': 1,
//   nom : "x"
// }
// L'abstraction en API 
const express = require("express");
const app = express();
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

app.use(express.json());

let dbConnection;
MongoClient.connect("mongodb://127.0.0.1:27017")
    .then((client)=>{
        dbConnection
    })