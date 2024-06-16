<?php
session_start();
require('database.php');
if (empty($_POST['loginAdmin'])||empty($_POST['motPasse'])){
    $_SESSION['loginError'] = "Les donées d'authentification sont obligatoires ";
    header("Location: authentifier.php");
    exit;
}

$compte =  $pdo->prepare("SELECT * FROM compteadministrateur WHERE loginAdmin = ? AND motPasse = ?");
$compte->execute([$_POST['loginAdmin'],$_POST['motPasse']]);
$admin = $compte->fetch(PDO::FETCH_ASSOC);
if ($admin){
    var_dump($_SESSION['loginAdmin']);
    $_SESSION['loginAdmin'] = $admin['loginAdmin'];
    unset($_SESSION['loginError']);
    header("Location: espaceprivee.php");
    exit;
} else {
    $_SESSION['loginError'] = "Les donées d'authentification sont incorrectes ";
    header("Location: authentifier.php");
    exit;
}


?>