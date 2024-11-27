const express = require("express");
const cors = require("cors");
const Post = require("./models/Post");
const mongoose = require("mongoose");
// const equipes = require('./equipes.json')
// const stagiaires = require('./stagiaires.json')
// const salaries = require('./salaries.json')
// const livres = require('./livres.json')

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost:27017/TestPosts")
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => {
    console.log("error with connecting with DB ", error);
  });

// Middleware
app.use(express.json());
app.use(cors());

// GET
// app.get('/equipes',(req, res) => {
//     res.status(200).json(equipes)
// })

// app.get('/equipes/:id',(req, res) => {
//     const id = parseInt(req.params.id)
//     const equipe = equipes.find(equipe => equipe.id === id)
//     res.status(200).json(equipe)
// })

// // POST
// app.post('/equipes',(req, res) => {
//     equipes.push(req.body)
//     res.status(200).json(equipes)
// })

// // PUT
// app.put('/equipes/:id',(req, res) => {
//     const id = parseInt(req.params.id)
//     let equipe = equipes.find(equipe => equipe.id === id)
//     equipe.nom = req.body.nom
//     equipe.pays = req.body.pays
//     res.status(200).json(equipe)
// })

// // DELETE
// app.delete('/equipes/:id',(req, res) => {
//     const id = parseInt(req.params.id)
//     let equipe = equipes.filter(equipe => equipe.id != id)
//     res.status(200).json(equipe)
// })

// app.get('/salaries',(req, res) => {
//     res.status(200).json(salaries)
// })

// app.get('/stagiaires',(req, res) => {
//     res.status(200).json(stagiaires)
// })

// app.get('/livres',(req, res) => {
//     res.status(200).json(livres)
// })

app.post("/post", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();

    res.json(newPost);
  } catch(error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
