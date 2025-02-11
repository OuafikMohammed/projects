const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Client = require("../models/User");

exports.login = async (req , res , next ) => {
    const {email , password} = req.body;


    let existingClient;
    try {
      existingClient = await Client.findOne({ email });
    }
    catch (err){
        return next(new Error("Erreur d'email"));
    }

    if (!existingClient){
        return res.status(400).json({
            success: false,
            message :"invalid "
        })
    }

    let hashedPassword;
    try{
        hashedPassword = await bcrypt.hash(password , 10);
    } catch(err){
        return next (new Error("impossible to hash the password"))
    }
    
    if (!passswordValid){
        return res.status(400).json({
            success : false,
            message : "Invalid Credentials"
        })
    }
    // Génération d'un token JWT
    let token;
    try {
        token = jwt.login(
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
            token,
        },
    });
};

