const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User.js"); // Import du modèle utilisateur

// Contrôleur pour l'inscription (Signup controller)
exports.signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    // Vérifier si un utilisateur avec cet email existe déjà
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return next(new Error("Erreur"));
    } 

    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "Un utilisateur existe déjà avec cet email !",
        });
    }

    // Hachage du mot de passe
    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 10); // Hachage avec un facteur de salage de 10
    } catch (err) {
        return next(new Error("Impossible de chiffrer le mot de passe."));
    }

    // Création d'un nouvel utilisateur
    const newUser = new User({
        name,
        email,
        password: hashedPassword, // Stocker le mot de passe chiffré
    });

    // Enregistrer de l'utilisateur dans la base de données
    try {
        await newUser.save();
    } catch (err) {
        return next(new Error("Erreur ! Impossible de créer l'utilisateur."));
    }

    // Génération d'un token JWT
    let token;
    try {
        token = jwt.sign(
             // Données incluses dans le token
            { userId: newUser.id, email: newUser.email },
            "RANDOM_TOKEN_SECRET", // Clé secrète
            { expiresIn: "1h" } // Expiration du token
        );
    } catch (err) {
        return next(new Error("Échec de la génération du token"));
    }

    // Réponse en cas de succès
    res.status(201).json({
        success: true,
        data: {
            userId: newUser.id,
            email: newUser.email,
            token,
        },
    });
};