const express = require("express");
const jwt = require("jsonwebtoken"); // Pour la vérification des tokens
const mongoose = require("mongoose");
const Produit = require("./Produit");

const app = express();
const PORT = process.env.PORT_ONE || 4000;

// Middleware pour parser le JSON
app.use(express.json());

// Middleware pour vérifier le JWT
function isAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Token non fourni" });
    }

    const token = authHeader.split(" ")[1]; // Supposons que le format est "Bearer <token>"
    jwt.verify(token, "secret", (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Token invalide" });
        }
        req.user = decoded; // Attach les informations décodées à req.user
        next(); // Passe au middleware ou route suivant
    });
}

// Connexion à la base de données MongoDB
mongoose.set("strictQuery", true);
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/produit-service");
        console.log("Produit-Service DB Connected");
    } catch (error) {
        console.error(`Erreur de connexion à la base de données : ${error.message}`);
        process.exit(1); // Arrêt de l'application si la connexion échoue
    }
};
connectDB();

// Route pour ajouter un produit (pas besoin d'authentification ici)
app.post("/produit/ajouter", async (req, res) => {
    try {
        const { nom, description, prix } = req.body;
        const newProduit = new Produit({ nom, description, prix });
        const produit = await newProduit.save();
        res.status(201).json(produit);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route pour récupérer des produits par ID (authentification requise)
app.post("/produit/acheter", isAuthenticated, async (req, res) => {
    try {
        const { ids } = req.body;
        const produits = await Produit.find({ _id: { $in: ids } });
        res.status(200).json(produits);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Une route GET pour tester (authentification requise)
app.get("/produit/acheter", isAuthenticated, async (req, res) => {
    try {
        const { ids } = req.body;
        const produits = await Produit.find({ _id: { $in: ids } });
        res.status(200).json(produits);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Product-Service running at port ${PORT}`);
});

module.exports = app;
