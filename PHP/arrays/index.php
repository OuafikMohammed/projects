<?php
//echo => pour les strings
// print_r => readable human pour les arrays par exemple
$utilisateurs = ['user1' , 'user2' , 'user3'];
$notes = [12 , 14 , 07 , 11 , 2 , 20];
echo $utilisateurs;
// array_push 
array_push($utilisateurs , 'user4');
print_r($utilisateurs);


// array_unshift 
array_unshift($utilisateurs , 'user0');
print_r($utilisateurs);

// array_pop
array_pop($utilisateurs);
print_r($utilisateurs);

// array_shift
array_shift($utilisateurs);
print_r($utilisateurs);

// sort
sort($utilisateurs);
sort($notes);
print_r($utilisateurs);

// rsort
rsort($notes);
print_r($utilisateurs);

// array_splice
array_splice($utilisateurs , 1 , 3);
print_r($utilisateurs);

// array_slice
$etudiants = array_slice($utilisateurs , 1 , 3);
print_r($etudiants);

// count
$nbrStagiaires = count($utilisateurs);
print_r($utilisateurs);

// in_array => checks if an elem exists in an array
if (in_array('user4' , $utilisateurs)){
    echo "He is a trainnee";
}else{
    echo "trainee not found";
}
print_r($utilisateurs);
// array_search => return the first index of the element found
$firstmarkfound = array_search(20 , $_REQUEST)
?>