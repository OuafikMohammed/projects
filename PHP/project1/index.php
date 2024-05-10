
<?php
require(".partials/header.php");

//affichage
    echo "<br/>";
    echo "Hello World <br/>";
    //decalaration de variables
    $prenom = 'YOUSEF';
    $nom = "Rahamani";
    $age = 10;
    $isStudent =true;
    $note = 14.5;
    echo $prenom ;  
    echo '<br/>';
    echo $nom;
    echo '<br/>';
    // concatenation
    echo $nom . ''. $prenom;
    echo "I am {$nom}";
    $nombre1 = 15;
    $nombre2 = 20;
    $nombre3 = '25';

    $result = $nombre1 + $nombre2;
    echo $result;
    $result2 = $nombre1 + $nombre3;
    $nombre3 = (int)$nombre3;
    var_dump($nombre3);
    echo $result;
    echo '<br/>';
    echo $result2;
    // 1st method
    define ('DB_NAME' , 'gestion_stock');
    // 2nd method
    const PI = 3.14;
?>
</body>
</html>