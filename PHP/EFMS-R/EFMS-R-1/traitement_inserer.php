<?php 
    session_start();
    require("database.php");
    if (empty($_POST['nom'])||empty($_POST['prenom'])||empty($_POST['dateNaissance'])||empty($_POST['photoProfil'])){
        header("Location: insererstagiaire.php");
        exit;
    }
    if ($_SERVER['REQUEST_METHOD'] == 'POST' ){
        $stmt = $pdo->prepare("INSERT INTO stagiaire (nom, prenom, dateNaissance, photoProfil, idFiliere) 
        VALUES (? , ? , ? , ?, ?)");
        $stmt->execute([$_POST['nom'] , $_POST['prenom'] ,$_POST['dateNaissance'],$_POST['photoProfil'] , $_POST['idFiliere']]);
        $_SESSION["success_save"]="Ajouté avec succés";
        header("Location: espaceprivee.php");
    }
    
?>