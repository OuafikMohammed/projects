<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style2.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
<?php
    $logged = true ;
    if ($logged){
        echo "<h3 >You are logged , WELCOME !</h3>";
    }else{
        echo "Please sign-in";
    };
    $today = date('N');
    switch($today){
        case 1 :
            echo "Lundi";
            break;
        case 2 :
            echo "Mardi";
            break;
        case 3 :
            echo "Mercredi";
            break;
        case 4 :
            echo "Jeudi";
            break;
        case 5 :
            echo "Vendredi";
            break;
        case 6 :
            echo "Samedi";
            break;
        case 7 :
            echo "Dimanche";
            break;
        default;
    }
?>
    <div class="container-big">
        <?php if ($logged) : ?>
        <div  class="container" >
            Welcome Dear
        </div>
        <?php else :?>
        <div >
            Log in
        </div>
        <?php endif; ?>
    </div>
    <?php
    $etudiants = ["OUAFIK","MAHFOUD", "HARCHED","ZAKRIA"];
    for($i = 0 ; $i<count($etudiants);$i++){
        echo $etudiants[$i] . "</br>";
    }
    foreach($etudiants as $etudiant){
        echo $etudiant . "</br>";
    }
    // Tableau associatif fonctionne comme une liste contenant les objets 
    $posts = [
        ["id"=>"1","contenu"=>"Am Am Am","tags"=>"[]"],
        ["id"=>"2","contenu"=>"Am Am Am Am","tags"=>"[]"],
        ["id"=>"3","contenu"=>"Am Am Am Am Am","tags"=>"[]"],
    ]
    ?>
    <div class="container">
    <div class="row mb-4">
    <?php foreach($posts as $post) : ?>
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card hover-lift hover-shadow-xl shadow-sm border-0">
                <!--card-body-->
                <div class="card-body p-4">
                    <div class="d-flex mb-4 align-items-center">

                        <!--Companies group-->
                        <div class="flex-grow-1 d-flex align-items-center">
                            <!--Campany-->
                            <div class="width-5x height-5x p-2 bg-white shadow-sm position-relative flex-center rounded-circle border">
                                
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="img-fluid" alt="">
                            </div>
                            <!--Campany-->
                            <div class="width-5x height-5x p-2 ms-n3 bg-white shadow-sm position-relative flex-center rounded-circle border">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="img-fluid" alt="">
                            </div>
                            <!--Campany-->
                            <div class="width-5x height-5x p-2 ms-n3 bg-white shadow-sm position-relative flex-center rounded-circle border">
                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                    <h5>Content Creator</h5>
                    <p class="mb-0 text-muted">7 Jobs opportunities</p>
                    <h1><?php echo $post["contenu"];?></h1>
                </div>
                <!--link-->
                <a href="#!" class="stretched-link"></a>
            </div>
        </div>
    <?php   endforeach; ?>
    </div>
</div>
