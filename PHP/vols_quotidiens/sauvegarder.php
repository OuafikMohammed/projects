<?php
$na = $_POST['na'];
$nom = $_POST['nom'];
$capacite = $_POST['capacite'];
$localite = $_POST['localite'];
$host = 'localhost';// name of the host or IpAdress
$port = 3306;//default port in mysql
$dbName = 'Vols_Quotidiens';
$user = 'root';
$password = '';// no pw in mysql
$dsn = "mysql:host={$host};port={$port};dbname={$dbName};charset=utf8"; 
try {
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Insert data into the database
    $stmt = $pdo->prepare("INSERT INTO Avion (NA, Nom, Capacite, Localite) VALUES (?, ?, ?, ?)");
    $stmt->execute([$na, $nom, $capacite, $localite]);
    
    // Redirect to the view page
    header("Location: view.php");
    exit();
} catch (PDOException $e) {
    echo "Erreur lors de l'insertion des données: " . $e->getMessage();
}
?>