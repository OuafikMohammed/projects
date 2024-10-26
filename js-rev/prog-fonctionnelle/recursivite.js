// la récursivité
function factorielle(n){
    if (n==0){
        return 1
    }
    return n * factorielle(n-1);
}
console.log(factorielle(5))

// Les fonctions pures
let n1 = 5 , n2 = 10 ;
function somme (n1,n2){
    return n1 + n2 ;
}
let s = somme(n1,n2)
console.log(s);
// les fonctions impures 
let compteur = 0 ;
function suivant(){
    return compteur += 1 ;
}
suivant();
suivant();
suivant();
console.log(compteur)
// la recursivite : l'idee d'une fonction q'elle soit appelle elle meme et travailler avec le resultat qu'elle a recu