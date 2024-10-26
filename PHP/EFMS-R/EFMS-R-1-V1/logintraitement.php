<?php 
require('conxDB.php');
session_start();


if (empty($_POST['user']) || empty($_POST['pwd'])) {
    header("Location: connEmp.php");
    exit;
} 

$stmt1 = $pdo->prepare("SELECT * FROM Employe WHERE user = ? AND pwd = ?");
$stmt1->execute([$_POST['user'], $_POST['pwd']]);
$userdata = $stmt1->fetch(PDO::FETCH_ASSOC);

if ($userdata) {
    $_SESSION['user'] = $userdata['user'];
    $_SESSION['codeEmp'] = $userdata['codeEmp'];
    $_SESSION['nom'] = $userdata['nom'];
    $_SESSION['fonction'] = $userdata['fonction'];
    header("Location: Sinscrire.php");
    exit;
} else {
    header("Location: connEmp.php");
    exit;
}
?>
