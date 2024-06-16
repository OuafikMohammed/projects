<?php
function connecter (){
    $dbname = 'gestion_produits';
    $user = 'root';
    $port = 3306;
    $host = 'localhost';
    $password = '';

    $dsn = "mysql:host={$host};port={$port};dbname={$dbname};charset=utf8";

    try{
        $pdo = new PDO($dsn, $user, $password);
        echo ' Connected successfuly';
        return $pdo ;

    } catch(PDOException $e){
        echo'Connection Failed :' . $e->getMessage();

    }

}

function getListeArticles (){
    $pdo = connecter();
    $stmt = $pdo->prepare("SELECT * FROM achats ");
    $stmt->execute();
    $liste_article = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $liste_article;
}
