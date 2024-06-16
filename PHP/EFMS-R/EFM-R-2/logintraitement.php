<?php
    
    session_start();
    require 'connBD.php';
    if (empty($_POST['login']) || empty($_POST['motPasse']) ){
        $_SESSION['loginError'] = "Please enter your login informations !";
        header("Location: loginClt.php");
        exit;
    } 
    $stmt = $pdo->prepare("SELECT * FROM Client WHERE Client.login = ? AND motPasse = ?");
    $stmt->execute([$_POST['login'],$_POST['motPasse']]);
    $admin = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($admin){
        $_SESSION['loginAdmin'] = $admin['login'];
        unset($_SESSION['loginError']);
        header("Location: espaceprivee.php");
        exit ;
    } else{
        $_SESSION['loginError'] = "Incorrect informations ";
        header('Location: loginClt.php');
        exit;
    }  
?>