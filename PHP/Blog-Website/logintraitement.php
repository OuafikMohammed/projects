<?php
    
    session_start();
    require 'database.php';
    if (empty($_POST['username']) || empty($_POST['password']) ){
        $_SESSION['loginError'] = "Please enter your login informations !";
        header("Location: login.php");
        exit;
    } 
    $stmt = $pdo->prepare("SELECT * FROM userx WHERE username = ? AND passwordx = ?");
    $stmt->execute([$_POST['username'],$_POST['password']]);
    $admin = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($admin){
        $_SESSION['loginAdmin'] = $admin['loginAdmin'];
        unset($_SESSION['loginError']);
        header("Location: espaceprivee.php");
        exit ;
    } else{
        $_SESSION['loginError'] = "Incorrect informations ";
        header('Location: login.php');
        exit;
    }
    
?>
