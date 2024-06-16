<?php 
require 'index.php';
// prepare method
$statement = $pdo->prepare('INSERT INTO Avion(NA,Nom,Capacite,Localite) VALUES (:NA , :Nom , :Capacite , :Localite)');

// executer le code
$statement->execute([
    ':NA' => 103,
    ':Nom' => "B737",
    ':Capacite' => 220,
   ':Localite' => 'RABAT'
]);

// fetch data
$results = $statement->fetchAll(PDO::FETCH_ASSOC);
var_dump($results);
?>