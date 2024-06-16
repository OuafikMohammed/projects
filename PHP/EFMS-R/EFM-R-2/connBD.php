<?php
$dbname = "PromenadesEnMer";
$host = "localhost";
$user = "root";
$password = '';
$port = 3306;
$dsn = "mysql:host={$host};dbname={$dbname};port={$port};charset=utf8";
try {
    $pdo = new PDO ($dsn  ,$user , $password );
    echo "Connected sucsessfully";
} catch(PDOException $e){
    echo "Error : " . $e->getMessage() ;
}