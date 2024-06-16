<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vols Quotidiens</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
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
        /* vols quotidiens lien */
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
</head>
<body>
    <h2>Vols Quotidiens</h2>
    <table>
        <thead>
            <tr>
                <th>Numéro Avion (NA)</th>
                <th>Nom Avion</th>
                <th>Capacité</th>
                <th>Localité</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            // Connexion à la base de données
            $host = 'localhost';// name of the host or IpAdress
            $port = 3306;//default port in mysql
            $dbName = 'Vols_Quotidiens';
            $user = 'root';
            $password = '';// no pw in mysql
            $dsn = "mysql:host={$host};port={$port};dbname={$dbName};charset=utf8"; 
            try {
                $pdo = new PDO($dsn, $user, $password);
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                
                // Récupère les données de la table Avion
                $stmt = $pdo->query("SELECT * FROM Avion");
                while ($row = $stmt->fetch()) {
                    echo "<tr>";
                    echo "<td>" . $row['NA'] . "</td>";
                    echo "<td>" . $row['Nom'] . "</td>";
                    echo "<td>" . $row['Capacite'] . "</td>";
                    echo "<td>" . $row['Localite'] . "</td>";
                    echo "<td>";
                    echo "<form action='modifier.php' method='post'>";
                    echo "<input type='hidden' name='na' value='" . $row['NA'] . "'>";
                    echo "<input type='hidden' name='nom' value='" . $row['Nom'] . "'>";
                    echo "<input type='hidden' name='capacite' value='" . $row['Capacite'] . "'>";
                    echo "<input type='hidden' name='localite' value='" . $row['Localite'] . "'>";
                    echo "</form>";
                    echo "<form action='supprimer.php' method='post'>";
                    echo "<input type='hidden' name='na' value='" . $row['NA'] . "'>";
                    echo "<input type='hidden' name='nom' value='" . $row['Nom'] . "'>";
                    echo "<input type='hidden' name='capacite' value='" . $row['Capacite'] . "'>";
                    echo "<input type='hidden' name='localite' value='" . $row['Localite'] . "'>";
                    echo "<input type='submit' name='supprimer' value='Supprimer' style='background-color: #ff0000; color: #fff;'>";
                    echo "</form>";
                    echo "</td>";
                    echo "</tr>";
                    
                }
            } catch (PDOException $e) {
                echo "Erreur lors de la récupération des données: " . $e->getMessage();
            }
            ?>
        </tbody>
    </table>
     <button class="vq"><a href="Vols_quotidiens.php"  class="vql">Aller a Vols Quotidiens</a></button>
</body>
</html>