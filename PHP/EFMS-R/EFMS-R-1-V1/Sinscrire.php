<?php 
require('conxDB.php');
require('menu.php');
if (!isset($_SESSION['user'])){
    header("Location: connEmp.php");
    exit;
}
// liste d 
$stmt_ville = $pdo->prepare("SELECT * FROM DescriptionVoyage ");
$stmt_ville->execute();
$villes = $stmt_ville->fetchAll(PDO::FETCH_ASSOC);
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S'inscrire</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h2 class="my-4">Inscription</h2>
        <form action="inscriptiontraitement.php" method="post">
            <div class="form-group">
                <label for="villed">Ville départ :</label>
                <select name="villed" id="villed" class="form-control">
                    <?php foreach($villes as $ville) :?>
                        <option value="<?=$ville['villeD']?>">
                            <?=$ville['villeD']?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="form-group">
                <label for="villea">Ville arrivée :</label>
                <select name="villea" id="villea" class="form-control">
                    <?php foreach($villes as $ville) :?>
                        <option value="<?=$ville['villeA']?>">
                            <?=$ville['villeA']?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="form-group">
                <label for="datev">Date de voyage :</label>
                <input type="date" name="datev" id="datev" class="form-control">
            </div>
            <div class="form-group">
                <label for="nbrp">Nombre de personnes :</label>
                <input type="number" name="nbrp" id="nbrp" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary" name="inscription">Ajouter</button>
        </form>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
