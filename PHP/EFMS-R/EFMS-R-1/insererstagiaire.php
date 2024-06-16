<?php
    session_start();
    require('database.php');
    if(!isset($_SESSION['loginAdmin'])){
        header("Location: authentifier.php");
        exit;
    }
    /* Liste deroulante */
    $stmt_stg = $pdo->prepare("SELECT * FROM filiere");
    $stmt_stg->execute();
    $list_fil = $stmt_stg->fetchAll(PDO::FETCH_ASSOC);
    /* */
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajout</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
<div class="container">
  <h2 class="text-center">Ajouter un stagiaire</h2>
  <form action="traitement_inserer.php" method="post" >
    <button type="button" class="btn btn-secondary" onclick="location.href='espaceprivee.php'">Retour</button>
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
      <label for="photo_profil">Photo de profil :</label>
      <input type="file" id="photo_profil" name="photoProfil" class="form-control-file">
    </div>
    <div class="form-group">
        <select name="filieres" id="filieres" class="form-control">
            <?php foreach ($list_fil as  $filiere) :?>
                <option value="<?php echo $filiere['idFiliere']; ?>" selected><?php echo $filiere['intitule']; ?></option>
            <?php endforeach;?>
        </select>
    </div>
    <button type="submit" class="btn btn-primary">Ajouter</button>
  </form>
</div>
</body>
</html>