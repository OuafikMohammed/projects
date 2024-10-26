<?php
require('conxDB.php');
require('menu.php');

if (!isset($_SESSION['codeEmp'])) {
    header("Location: connEmp.php");
    exit;
}

if (!isset($_GET['codeInsc'])) {
    header("Location: listeIns.php");
    exit;
}

$stmt = $pdo->prepare("SELECT Inscription.*, Voyage.heureDepart, Voyage.duree, DescriptionVoyage.villeD, DescriptionVoyage.villeA 
                       FROM Inscription 
                       JOIN Voyage ON Inscription.codeVoyage = Voyage.codeVoyage 
                       JOIN DescriptionVoyage ON Voyage.codeDesc = DescriptionVoyage.codeDesc 
                       WHERE Inscription.codeInsc = ?");
$stmt->execute([$_GET['codeInsc']]);
$inscription = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$inscription) {
    header("Location: listeIns.php");
    exit;
}

$heureArrivee = date("H:i:s", strtotime($inscription['heureDepart']) + $inscription['duree'] * 3600);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Détails de l'Inscription</title>
</head>
<body>
    
    <h1>Détails de l'Inscription</h1>
    <p>Date de Voyage: <?= htmlspecialchars($inscription['dateVoy']) ?></p>
    <p>Ville de départ: <?= htmlspecialchars($inscription['villeD']) ?></p>
    <p>Ville d'arrivée: <?= htmlspecialchars($inscription['villeA']) ?></p>
    <p>Heure de départ: <?= htmlspecialchars($inscription['heureDepart']) ?></p>
    <p>Heure d'arrivée: <?= htmlspecialchars($heureArrivee) ?></p>
</body>
</html>
