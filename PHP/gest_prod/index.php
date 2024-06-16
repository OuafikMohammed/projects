<?php
require('database.php');
try {
    $pdo->beginTransaction();
    $pdo->exec('INSERT INTO  achats (codee  ,titre ,description,prix ,categorie) VALUES (2, "PC GAMER" , "GOOD PC" , 8000 , "GAMING")');
    $pdo->exec('INSERT INTO article (nom, description, prix, categorie) VALUES ("Laptop", "High performance laptop", 1200.00, "Electronics")');
    $pdo->commit();
}catch (\Throwable $e){
    $pdo->rollBack();
    echo $e->getMessage();
}
?>