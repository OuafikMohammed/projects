<?php 
    session_start();
    require('database.php');

    if (!isset($_SESSION['loginAdmin'])) {
        header("Location: authentifier.php");
        exit;
    }
    if (isset($_SESSION['save'])){
        header("Location: espaceprivee.php");
        exit;
    }
    $heure = date("H");
    if ($heure < 18){
        $msg = 'Bonjour';
    }else {
        $msg = 'Bonsoir';
    }
    /* Liste des stagiaires */
    $stmt_stg = $pdo->prepare("SELECT * FROM stagiaire NATURAL JOIN filiere ");
    $stmt_stg->execute();
    $liste_stg = $stmt_stg->fetchAll(PDO::FETCH_ASSOC);
    /* NOM et PRENOM de l'Admin */
    $stmt_adm = $pdo->prepare("SELECT * FROM compteadministrateur WHERE loginAdmin = ? ");
    $stmt_adm->execute([$_SESSION['loginAdmin']]);
    /*execute([$_SESSION['loginAdmin']]) */
    $data_adm = $stmt_adm->fetch(PDO::FETCH_ASSOC);
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Espace Privé</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1 class="text-center">Espace Privé</h1>
        <form action="deconnecter.php">
            <input type="submit" name="deconnecter" value="Déconnecter" class="btn btn-danger"/>
        </form>
        <h1 class="text-center"><?= $msg . " " . strtoupper($data_adm['nom']) .  " " . strtoupper($data_adm['prenom']); ?></h1>
        <a href="insererstagiaire.php"> <input type="button" value="Ajouter" name="ajouter" class="btn btn-primary"/> </a>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Date de Naissance</th>
                        <th>Photo de Profil</th>
                        <th>Filière</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($liste_stg as $stagiaire): ?>
                        <tr>
                            <td><?= $stagiaire['nom'] ?></td>
                            <td><?= $stagiaire['prenom'] ?></td>
                            <td><?= $stagiaire['dateNaissance'] ?></td>
                            <td><?= $stagiaire['photoProfil'] ?></td>
                            <td><?= $stagiaire['intitule'] ?></td>
                            <td> <a href="modifier.php"> <input type="button" name="modifier" value="Modifier" class="btn btn-warning" /> </a> </td>
                            <td>
                                <form action="supprimer.php" method="POST">
                                    <input type="hidden" name="id" value="<?php echo $stagiaire['idStagiaire']; ?>">
                                    <input type="submit" value="Supprimer" class="btn btn-danger" >
                                </form>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        
    </div>
</body>
</html>