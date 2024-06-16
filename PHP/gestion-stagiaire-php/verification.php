<?php
session_start();
// session used to take the same data across multiple pages for the same user
require('database.php');
// POST used to send data of the input LoginAdmin and motPasse
// SESSION ERROR = "THE MESSAGE IS HERE"
if (empty($_POST['loginAdmin']) || empty($_POST['motPasse'])) {
    // on a choisi la session car son data reste accessible par plusieurs pages .
    $_SESSION['loginError'] = "Les données d'authentification sont obligatoires";
    header("Location: authentifier.php");
    // REDIRECT U TO THE LOGIN PAGE authentifier.php    
    exit;
}


$statement = $pdo->prepare("SELECT * FROM compteadministrateur WHERE loginAdmin = :loginAdmin AND motPasse = :motPasse");
$statement->execute([
    ':loginAdmin' => $_POST['loginAdmin'],
    ':motPasse' => $_POST['motPasse']
]);
$admin = $statement -> fetch(PDO::FETCH_ASSOC);
// donees correctes
if ($admin) {
    // session
    $_SESSION['loginAdmin'] = $admin['loginAdmin']; 
    unset($_SESSION["loginError"]);
    header("Location: espaceprivee.php");
    exit;
} else{
    /* */
    $_SESSION['loginError'] = "Les données d'authentification sont incorrects ";
    
    header('Location: authentifier.php');
    exit;
}
// donees erronnees

?>
