<?php
$host = 'localhost';
$port= 3306;
$dbname ='gestionstagiaires_v1';
$user = 'root';
$password = '';
$dsn ="mysql:host={$host};dbname={$dbname};port={$port}";
try {
    $pdo = new PDO ($dsn , $user , $password);
}catch(PDOException $e){
    echo "Connection failed due to " . $e->getMessage();
}