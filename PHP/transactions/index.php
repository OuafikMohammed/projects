<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion de produits</title>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    
</head>
<body>
    <div class="container">
        <h1 class="text-success text-center">Liste des achats</h1>
        <form action="index.php" method="POST" id="productsForm">
            <div class="mb-3">
                <label for="code" class="form-label">Code</label>
                <input type="text" class="form-control" name="code" id="code"/>
            </div>
            
            <div class="mb-3">
                <label for="titre" class="form-label">Titre</label>
                <input type="text" class="form-control" name="titre" id="titre"/>
            </div>

            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <input type="text" class="form-control" name="description" id="description"/>
            </div>
            
            <div class="mb-3">
                <label for="prix" class="form-label">Prix</label>
                <input type="number" class="form-control" name="prix" id="prix"/>
            </div>
            
            <div class="mb-3">
                <label for="categorie" class="form-label">Catégorie</label>
                <select class="form-select" name="categorie" id="categorie">
                    <option value="Informatique">Informatique</option>
                    <option value="Bureatique">Bureatique</option>
                    <option value="Matériel">Matériel</option>
                    <option value="Scolaire!">Scolaire!</option>
                </select>
            </div>
            
            <div class="mb-3">
                <button class="btn btn-primary" name="sauvegarder">Sauvegarder</button>
                <button class="btn btn-primary" name="vider">Vider</button>
            </div>
            <div class="mb-3">
                <button id="afficher-data" class="btn btn-secondary" name="afficher">Afficher</button>
            </div>
        </form>

        
        <form action="index.php" method="POST" id="deleteForm">
            <div class="mb-3">
                <label for="code_to_delete" class="form-label">Code à supprimer</label>
                <input type="text" class="form-control" name="code_to_delete" id="code_to_delete"/>
            </div>
            <div class="mb-3">
                <button name="supprimer" class="btn btn-danger">Supprimer</button>
            </div>
        </form>
    </div>

    <?php
    /*SESSIONS */
    

    /*COOKIES */

    $host = 'localhost';
    $port = 3306;
    $dbName = 'gestion_produits';
    $user = 'root';
    $password = '';
    $dsn = "mysql:host={$host};port={$port};dbname={$dbName};charset=utf8";

    try {
        $pdo = new PDO($dsn, $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo "Erreur de connexion: " . $e->getMessage();
    }

    function afficher_data() {
        global $pdo;
        $content = '';
        $stmt = $pdo->query("SELECT * FROM achats");
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $content .= '<tr>
                            <th scope="row">' . $row["codee"] . '</th>
                            <td>' . $row["titre"] . '</td>
                            <td>' . $row["description"] . '</td>
                            <td>' . $row["prix"] . '</td>
                            <td>' . $row["categorie"] . '</td>
                        </tr>';
        }
        echo $content;
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST['sauvegarder'])) {
            $code = $_POST['code'];
            $titre = $_POST['titre'];
            $description = $_POST['description'];
            $prix = $_POST['prix'];
            $categorie = $_POST['categorie'];

            try {
                $stmt = $pdo->prepare("INSERT INTO Achats (codee, titre, description, prix, categorie) VALUES (?, ?, ?, ?, ?)");
                $stmt->execute([$code, $titre, $description, $prix, $categorie]);
                echo "Les données ont été sauvegardées avec succès.";
            } catch (PDOException $e) {
                echo "Erreur lors de l'insertion des données: " . $e->getMessage();
            }
        } else if (isset($_POST['supprimer'])) {
            $code_to_delete = $_POST['code_to_delete'];

            try {
                $stmt = $pdo->prepare("DELETE FROM Achats WHERE codee = ?");
                $stmt->execute([$code_to_delete]);
                echo "L'achat avec le code $code_to_delete a été supprimé avec succès.";
            } catch (PDOException $e) {
                echo "Erreur lors de la suppression des données: " . $e->getMessage();
            }
        } else if (isset($_POST['afficher'])) {
            afficher_data();
        }
    }
    ?>

    <table id="achats-table" class="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Code</th>
                <th scope="col">Titre</th>
                <th scope="col">Description</th>
                <th scope="col">Prix</th>
                <th scope="col">Catégorie</th>
            </tr>
        </thead>
        <tbody id="tdata">
            <?php afficher_data(); ?>
        </tbody>
    </table>
    <style>
        table {
    width: 100%;
    border-collapse: collapse;
    }
    th, td {
        padding: 10px;
        border: 1px solid #ccc;
        text-align: left;
    }
    th {
        background-color: #077000;
        color: #fff;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    </style>
</body>
</html>
