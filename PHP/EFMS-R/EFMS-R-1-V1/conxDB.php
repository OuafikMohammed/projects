<?php
$host = "localhost";
$port = 3306;
$dbname = "voyages";
$password = '';
$user = "root";
$dsn = "mysql:host={$host};port={$port};dbname={$dbname};charset=utf8";
try {
    $pdo = new PDO ($dsn , $user , $password);
    echo "Connected successfully";
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e){
    echo "Error to connect to dtabase due to :". $e->getMessage();
}