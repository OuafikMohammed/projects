<?php
session_start();
if (!isset($_SESSION['codeEmp'])) {
    header("Location: connEmp.php");
    exit;
}
require('conxDB.php');
if (empty($_POST['villed'])||empty($_POST['villea'])||empty($_POST['datev'])||empty($_POST['nbrp'])){
    header("Location: Sinscrire.php");
    exit;
}
if ($_SERVER['REQUEST_METHOD'] == "POST"){
    $stmt = $pdo->prepare("INSERT INTO inscription(nbrePers , dateVoy) VALUES(? , ?)");
    $stmt->execute([$_POST['nbrp'],$_POST['datev']]);
    $insciption_data =  $stmt->fetch(PDO::FETCH_ASSOC);
    }
    $stmt = $pdo->prepare("SELECT codeVoyage FROM Voyage NATURAL JOIN DescriptionVoyage WHERE villeD = ? AND villeA = ?");
    $stmt->execute([$_POST['villed'], $_POST['villea']]);
    $voyage = $stmt->fetch(PDO::FETCH_ASSOC);

if ($voyage) {
    $stmt = $pdo->prepare("INSERT INTO Inscription (codeEmp, codeVoyage, nbrePers, dateVoy) VALUES (?, ?, ?, ?)");
    $stmt->execute([$_SESSION['codeEmp'], $voyage['codeVoyage'], $_POST['nbrp'], $_POST['datev']]);
    header("Location: listeIns.php");
} else {
    header("Location: Sinscrire.php");
}

?>