<?php
$dbname = 'blog_web';
$user = 'root';
$password = '';
$host = 'localhost';
$port = 3306 ;
$dsn = "mysql:host={$host};dbname={$dbname};port={$port}charset=utf8";
try {
    $pdo = new PDO ($dsn , $user , $password);
    echo "Connected successfully";
}
catch ( PDOException $e) {
    echo "Failed to connect to database due to " . $e->getMessage();
}
