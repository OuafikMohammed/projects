<?php

require('conxDB.php');
require('menu.php');
if (!isset($_SESSION['codeEmp'])) {
    header("Location: connEmp.php");
    exit;
}
//SELECT * FROM Inscription NATURAL JOIN Voyage NATURAL JOIN DescriptionVoyage  WHERE codeEmp = ?  ORDER BY dateVoy DESC
$stmt = $pdo->prepare("SELECT * FROM Inscription NATURAL JOIN Voyage NATURAL JOIN DescriptionVoyage  WHERE codeEmp = ?  ORDER BY dateVoy DESC");
$stmt->execute([$_SESSION['codeEmp']]);
$inscriptions = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des Inscriptions</title>
    <!-- Inclure Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="mb-4">Liste des Inscriptions</h1>
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Code Inscription</th>
                    <th scope="col">Date de Voyage</th>
                    <th scope="col">Nombre de Personnes</th>
                    <th scope="col">Total à Payer</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($inscriptions as $inscription) : ?>
                    <tr>
                        <td><?= htmlspecialchars($inscription['codeInsc']) ?></td>
                        <td><?= htmlspecialchars($inscription['dateVoy']) ?></td>
                        <td><?= htmlspecialchars($inscription['nbrePers']) ?></td>
                        <td><?= htmlspecialchars($inscription['nbrePers'] * $inscription['prixTicket']) ?></td>
                        <td><a class="btn btn-primary btn-sm" href="afficher.php?codeInsc=<?= htmlspecialchars($inscription['codeInsc']) ?>">Afficher</a></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>

    <!-- Inclure Bootstrap JS et dépendances -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
