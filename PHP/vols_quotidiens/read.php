<?php 
require 'index.php';
// prepare method
$statement = $pdo->prepare('SELECT * FROM Avion where Localite = :Localite1 OR Localite = :Localite2');
// executer le code
$statement->execute([
    ':Localite1' => "CASA",
    ':Localite2' => "RABAT"
]);
// fetch data
$results = $statement->fetchAll(PDO::FETCH_ASSOC);
var_dump($results);
?>