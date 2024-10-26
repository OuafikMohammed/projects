<?php
session_start();

if (!isset($_SESSION['codeEmp'])) {
    header("Location: connEmp.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue</title>
    <!-- Inclure Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="alert alert-success" role="alert">
            <p class="mb-0">Bienvenue, <?= $_SESSION['nom'] ?> (<?=$_SESSION['fonction']?>)</p>
        </div>
        <nav class="nav">
            <a class="nav-link" href="Sinscrire.php">S'inscrire</a>
            <a class="nav-link" href="listeIns.php">Liste de Voyages</a>
            <a class="nav-link" href="deconnecter.php">Se déconnecter</a>
        </nav>
    </div>

    <!-- Inclure Bootstrap JS et dépendances -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
