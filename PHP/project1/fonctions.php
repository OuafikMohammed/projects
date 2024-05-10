<?php
    //Local and Global scope 
    $nom = 'Mohammed';
    function sayHello (){
        global $nom;
        echo 'Hello' . $nom;
    }
    // function sayHello (){
    //     echo 'Hello dear ';
    // };
    // function somme($nombre1 , $nombre2){
    //     return $nombre1 + $nombre2 ;
    // }
    // sayHello();
    // $sommeDeuxNbrs = somme(10,17);
    // echo $sommeDeuxNbrs . '<br>';
?>     