<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire d'Avion</title>
</head>
<body>
<style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        form {
            max-width: 400px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            text-align: center;
        }
        label {
            display: block;
            margin-bottom: 5px;
        }
        input[type="text"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
            box-sizing: border-box;
        }
        #sauvegarder {
            width: 100%;
            padding: 10px;
            background-color: #077000;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        #modifier {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        #supprimer {
            width: 100%;
            padding: 10px;
            background-color: #ff0000;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        input[type="submit"]:hover {
            background-color: #0056b3;
        }
        .vq {
            background-color: blue;
            border: none;
            color: white;
            padding: 7.5px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 2px 1px;
            cursor: pointer;
            border-radius: 12px;
            }

        .vql {
            color: white;
            text-decoration: none;
            }
    </style>
    <h2>Formulaire d'Avion</h2>
    <form action="Vols_quotidiens.php" method="post">
        <label for="na">Numéro Avion (NA):</label><br>
        <input type="text" id="na" name="na"><br>
        <label for="nom">Nom Avion:</label><br>
        <input type="text" id="nom" name="nom"><br>
        <label for="capacite">Capacité:</label><br>
        <input type="text" id="capacite" name="capacite"><br>
        <label for="localite">Localité:</label><br>
        <input type="text" id="localite" name="localite"><br><br>
        <input type="submit" value="Sauvegarder" name="sauvegarder" id="sauvegarder" formaction="sauvegarder.php">
        <br><br>
        <input type="submit" value="Supprimer" name="supprimer" id="supprimer" formaction="supprimer.php">
        <br><br>
        <input type="submit" value="Modifier" name="modifier" id="modifier" formaction="modifier.php">
        <br><br>
    </form>
<?php
        

        // Connexion à la base de données
        $host = 'localhost';// name of the host or IpAdress
        $port = 3306;//default port in mysql
        $dbName = 'Vols_Quotidiens';
        $user = 'root';
        $password = '';// no pw in mysql
        $dsn = "mysql:host={$host};port={$port};dbname={$dbName};charset=utf8"; 
        // Vérifie si le formulaire est soumis
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Vérifie si le bouton Sauvegarder est cliqué
            if (isset($_POST['sauvegarder'])) {
                // Récupère les valeurs des champs du formulaire
                $na = $_POST['na'];
                $nom = $_POST['nom'];
                $capacite = $_POST['capacite'];
                $localite = $_POST['localite'];
                try {
                    $pdo = new PDO($dsn, $user, $password);
                    // Configure PDO pour générer une exception lorsqu'une requête échoue
                    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    
                    // Prépare et exécute la requête d'insertion
                    $stmt = $pdo->prepare("INSERT INTO Avion (NA, Nom, Capacite, Localite) VALUES (?, ?, ?, ?)");
                    $stmt->execute([$na, $nom, $capacite, $localite]);
                    $fetching=$stmt->fetch();
                    echo "Les données ont été sauvegardées avec succès.";
                    
                } catch (PDOException $e) {
                    echo "Erreur lors de l'insertion des données: " . $e->getMessage();
                }
            } elseif (isset($_POST['supprimer'])) {
                        try {
                            
                            // Récupère les valeurs des champs du formulaire
                            $na = $_POST['na'];
                            $nom = $_POST['nom'];
                            $capacite = $_POST['capacite'];
                            $localite = $_POST['localite'];
                            
                            // Connexion à la base de données
                            $host = 'localhost';// name of the host or IpAdress
                            $port = 3306;//default port in mysql
                            $dbName = 'Vols_Quotidiens';
                            $user = 'root';
                            $password = '';// no pw in mysql
                            $dsn = "mysql:host={$host};port={$port};dbname={$dbName};charset=utf8"; 
                            $pdo = new PDO($dsn, $user, $password);
                            // Configure PDO pour générer une exception lorsqu'une requête échoue
                            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
                            // Prepare the statement
                            $stmt = $pdo->prepare("DELETE  FROM Avion WHERE NA = ?");
                            // Execute the statement
                            $stmt->execute([$na]);
                            // Redirect back to the view page 'Vols_quotidiens.php'
                            echo "Les données ont été supprimées avec succès.";
                        } catch (PDOException $e){
                            
                            echo "Erreur lors de la suppression des données: " . $e->getMessage();
                            
                        }
                        
                    

            }
            elseif (isset($_POST['modifier'])) {
               try{
                $na = $_POST['na'];
                $nom = $_POST['nom'];
                $capacite = $_POST['capacite'];
                $localite = $_POST['localite'];
                // Connexion à la base de données
                $host = 'localhost';// name of the host or IpAdress
                $port = 3306;//default port in mysql
                $dbName = 'Vols_Quotidiens';
                $user = 'root';
                $password = '';// no pw in mysql
                $dsn = "mysql:host={$host};port={$port};dbname={$dbName};charset=utf8"; 
                $pdo = new PDO($dsn, $user, $password);
                // Configure PDO pour générer une exception lorsqu'une requête échoue
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
            
                // Prépare et exécute la requête d'update
                $stmt = $pdo->prepare("UPDATE Avion SET NA = ?, Nom = ?, Capacite = ?, Localite = ? WHERE NA = ?");
                $stmt->execute([$na, $nom, $capacite, $localite, $na]);
            
                echo "Les données ont été modifiées avec succès.";
               } catch (PDOException $e){
                echo "Erreur lors de la suppression des données: " . $e->getMessage();
               }

            }
        }
?>
        
<button class="vq"><a href="view.php"  class="vql">Voir les informations</a></button>

</body>
</html>
