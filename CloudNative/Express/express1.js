const express =  require("express");
const app = express();
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId
// MiddleWare
app.use(express.json())

//connection to DB
let dbConnection;
MongoClient.connect("mongodb://127.0.0.1:27017")
    .then((client) => {
        dbConnection = client.db("equipes");
        console.log("Connected to MongoDB");
    })
    .catch(err => console.log(err));


// Routes
app.get("/equipes", (req, res) => {
    dbConnection.collection("equipes")
                .find()
                .toArray()
                .then((devices) => {res.json(devices);
                    })
})


app.get("/equipes",(req, res) => {
    let equipes = []
    dbConnection.collection("equipes")
                .find()
                .forEach(equipe => equipes.push(equipe))
                .then(()=> res.status(200).json({err:"error"}))
});



app.listen(3000, () => {
    console.log("started on port 3000");
});

app.get("/equipes/:id",(req,res)=>{
    dbConnection.collection('equipes')
                .findOne({_id: new ObjectId(req.params.id)})
                .then((doc)=>res.status(200).json(doc))
                .catch(()=>res.status(500).json({err:"error"}));
})

// :id means that we determine the value of the id 
// dbConnection.collection('equipes') pour acceder a la collection equipes
// .findOne({_id : })

app.post('/equipes',(req,res)=>{
    const equipeAajouter = req.body;
    dbConnection.collection("equipes")
                .insertOne(equipeAajouter)
                .then((result)=> res.status(201).json(result))
                .catch(()=> res.status(500).json({err:"error"}))
})


app.put('/equipes/:id',(req,res)=>{
    const equipeAmodifier = req.body;
    dbConnection.collection("equipes")
                .updateOne(
                    { _id: new ObjectId(req.params.id) }, 
                    { $set: equipeAmodifier }              
                )
                .then((result)=> res.status(201).json(result))
                .catch(()=> res.status(500).json({err:"error"}))
                
})