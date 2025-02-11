//Import modules 

const express = require("express");
const mongoose = require("mongoose");
const authController = require("./controllers/Auth");
const app = express();

// Middleware
app.use(express.json()); 

// Database connection
mongoose 
    .connect("mongodb://localhost:27017/ecom") // Remplacer testDB par le nom de votre bd mongodb 
    .then(() => {
        app.listen(3000, () => {
            console.log("Server is listening on port 3000");
        });
    })
    .catch((err) => {
        console.error("Erreur de la connexion avec la bd", err);
    });

// Routes
app.post("/signup", authController.signup);
