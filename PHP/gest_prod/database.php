<?php
$dbname = 'gestion_produits';
$user = 'root';
$port = 3306;
$host = 'localhost';
$password = '';

$dsn = "mysql:host={$host};port={$port};dbname={$dbname};charset=utf8";

try{
    $pdo = new PDO($dsn, $user, $password);
    echo ' Connected successfuly';
}catch(PDOException $e){
    echo'Connection Failed :' . $e->getMessage();

}