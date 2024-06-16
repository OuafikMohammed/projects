<?php 
$file = 'file.txt';
$traiter = fopen($file , 'r');
$data = fread($traiter , filesize($file));
echo $data ; 
fclose($traiter);

// Write into a file

$traiter = fopen('fichier2.txt' , 'w');
$txt = 'Hello from php file .';
fwrite($traiter , $txt);
fclose($traiter);
