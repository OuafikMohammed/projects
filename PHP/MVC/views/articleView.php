<?php 
    require "../controllers/controller.php" ;
    $liste_article = getListeArticles();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion de produits</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css" />
    <link rel="stylesheet" href="../css/style.css" />
</head>
<body>
    <div class="container">
        <h1 class="text-success text-center">Liste des achats</h1>
        <form action="index.php" method="POST" id="productsForm">
            <div class="mb-3">
                <label for="code" class="form-label">Code</label>
                <input type="text" class="form-control" name="code" id="code"/>
            </div>
            
            <div class="mb-3">
                <label for="titre" class="form-label">Titre</label>
                <input type="text" class="form-control" name="titre" id="titre"/>
            </div>

            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <input type="text" class="form-control" name="description" id="description"/>
            </div>
            
            <div class="mb-3">
                <label for="prix" class="form-label">Prix</label>
                <input type="number" class="form-control" name="prix" id="prix"/>
            </div>
            
            <div class="mb-3">
                <label for="categorie" class="form-label">Catégorie</label>
                <select class="form-select" name="categorie" id="categorie">
                    <option value="Informatique">Informatique</option>
                    <option value="Bureatique">Bureatique</option>
                    <option value="Matériel">Matériel</option>
                    <option value="Scolaire!">Scolaire!</option>
                </select>
            </div>
            
            <div class="mb-3">
                <button class="btn btn-primary" name="sauvegarder">Sauvegarder</button>
                <button class="btn btn-primary" name="vider">Vider</button>
            </div>
            <div class="mb-3">
                <button id="afficher-data" class="btn btn-secondary" name="afficher">Afficher</button>
            </div>
        </form>

        
        <form action="index.php" method="POST" id="deleteForm">
            <div class="mb-3">
                <label for="code_to_delete" class="form-label">Code à supprimer</label>
                <input type="text" class="form-control" name="code_to_delete" id="code_to_delete"/>
            </div>
            <div class="mb-3">
                <button name="supprimer" class="btn btn-danger">Supprimer</button>
            </div>
        </form>
    </div>

    

    <table id="achats-table" class="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Code</th>
                <th scope="col">Titre</th>
                <th scope="col">Description</th>
                <th scope="col">Prix</th>
                <th scope="col">Catégorie</th>
            </tr>
        </thead>
        <tbody id="tdata">
            <?php  foreach ($liste_article as $achat) : ?>
                <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><?php echo $achat['codee']; ?></td>
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><?php echo $achat['titre']; ?></td>
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><?php echo $achat['description']; ?></td>
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><?php echo $achat['prix']; ?></td>
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><?php echo $achat['categorie']; ?></td>
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <!-- mdifier.php? -->
                        <!-- ' ? ' => indicates start of a query string -->
                        <!-- <?php ?> -->
                        <!--  ' id = < ?='valuegiven'?> ' => -->
                        <a href="modifier.php?id=<?= $achat['codee'] ?>"><button type="submit" name="modifier" class="btn btn-warning">Modifier</button></a>
                    

                        <form action="" method="" onsubmit="return confirmSuppression(e)">
                            <input type="hidden" name="id" value="<?php echo $achat['codee']; ?>">
                            <input type="hidden" name="_method" value="delete">
                            <input type="submit" value="Supprimer" class="btn btn-danger" >
                        </form>
                        
                    </td>
                </tr>	
            <?php endforeach; ?>
        </tbody>
    </table>
    <style>
        table {
    width: 100%;
    border-collapse: collapse;
    }
    th, td {
        padding: 10px;
        border: 1px solid #ccc;
        text-align: left;
    }
    th {
        background-color: #077000;
        color: #fff;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    </style>
</body>
</html>
