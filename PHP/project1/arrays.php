<?php
require('./partials/header.php');
// 1st method
$nombres = [12 , 34 ,40];

// 2nd method
$stagiares = array('Ahmed' , 'Yassin' , 'Khaled');

var_dump ($nombres);
$stagiares[1] = "SAID";

echo $stagiares[1];

// Les tableaux asssociatifs
$nombresTest = [0 => 12 , 1 => 34 , 2 => 40];
echo $nombresTest[2];

$etudiant = ['nom'=>"Ouafik","prenom" => 'Med', 'groupe'=>105];
$etudiants = [
    ['nom'=>"Ouafik","prenom" => 'Med', 'groupe'=>105],
    ['nom'=>"Idrisy","prenom" => 'Aymen', 'groupe'=>105],
    ['nom'=>"Sidqui","prenom" => 'Zakaria', 'groupe'=>105]
];
echo '<br>';
echo $etudiant['prenom'];
echo '<br>';
echo $etudiants[1]['prenom'];
// $etudiant[4] = "tesst";
// $etudiant[] = "tessst";

array_push($etudiants , ['nom'=>'Marzoug' , 'prenom' => 'Khaled' , 'groupe'=>105]);
echo '<pre>';
var_dump ($etudiants);
echo '</pre>';