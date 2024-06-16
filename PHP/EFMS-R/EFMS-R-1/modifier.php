<?php 
    session_start();
    require('database.php');
    if (!isset($_SESSION['loginAdmin'])){
        header("Location: authentifier.php");
        exit;
    }
    // remplir la liste deroulante (categories)
    $statement = $pdo->prepare('SELECT idFiliere, intitule FROM filiere');
    $statement->execute();
    $filieres = $statement->fetchAll(PDO::FETCH_ASSOC);

    if(isset($_GET["id"])){
        $id = $_GET["id"];
        $statement = $pdo -> prepare('SELECT * FROM stagiaire WHERE idStagiaire = :idStagiaire');
        $statement -> execute([
            'idStagiaire' =>  $id
        ]);
        $stagiaire = $statement ->fetch(PDO::FETCH_ASSOC);
    }
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
<div class="container">
  <h2 class="text-center">Modifier un stagiaire</h2>
  <form action="traitement_modifier.php" method="post" >
    <button type="button" class="btn btn-secondary" onclick="location.href='espaceprivee.php'">Retour</button>
    <input type="hidden" name="idStagiaire" value="<?php echo $stagiaire['idStagiaire']; ?>">
    <div class="form-group">
      <label for="nom">Nom :</label>
      <input type="text" id="nom" name="nom" class="form-control">
    </div>
    <div class="form-group">
      <label for="prenom">Prénom :</label>
      <input type="text" id="prenom" name="prenom" class="form-control">
    </div>
    <div class="form-group">
      <label for="date_naissance">Date de naissance :</label>
      <input type="date" id="date_naissance" name="dateNaissance" class="form-control">
    </div>
    <div class="form-group">
        <select name="filieres" id="filieres" class="form-control">
            <?php foreach ($filieres as  $filiere) :?>
                <option value="<?php echo $filiere['idFiliere']; ?>" selected><?php echo $filiere['intitule']; ?></option>
            <?php endforeach;?>
        </select>
    </div>
    <button type="submit" class="btn btn-primary">Modifier</button>
  </form>
</div>
</body>
</html>