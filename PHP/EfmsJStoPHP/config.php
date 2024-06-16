<?php
    

    $host = 'localhost';// name of the host or IpAdress
    $port = 3306;//default port in mysql
    $dbName = 'gestion_produits';
    $user = 'root';
    $password = '';// no pw in mysql
    $dsn = "mysql:host={$host};port={$port};dbname={$dbName};charset=utf8"; 
    $pdo = new PDO($dsn, $user, $password);
?>
