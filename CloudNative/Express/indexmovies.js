const mongoose = require('mongoose');
const Movie = require("./models/MoviesModel");
const express = require('express');
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/movies")
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => {
    console.log("error with connecting with DB ", error);
  });
  

  
app.get("/movies" , async(req,res)=>{
try{
    const movie = await Movie.find({});
    res.status(200).json(movie);
} catch(error){
    res.status(500).json({error:"ERREUR"})
}})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/movies/:id", async (req, res) => {
    try {
      const movieId = req.params.id; 
      const movie = await Movie.findById(movieId); 
      if (!movie) {

        return res.status(404).json({ error: "Movie not found" }); 
      }
      res.status(200).json(movie); 
    } catch (error) {
      res.status(500).json({ error: "Error fetching the movie" }); 
      // erreur d'ajout
    }
});

app.post("/moviespost" , async(req, res)=>{
    try{
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error){
        res.status(500).json({error: "Creation Error"})
    }
})