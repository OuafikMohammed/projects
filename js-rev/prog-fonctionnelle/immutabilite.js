// Spread operator
let personne1 = {
    id : 1,
    nom : "Haloui",
    prenom : "Adam"
}
let personne2 = { ...personne1 , age:20 };
personne2.prenom = 'Ilyas';
// Object.assign(target , souce)
// source est transsfere dasn target
console.log(personne2);
console.log(personne1);
let personne3 = Object.assign({classe : '105'} , personne1 , {branche : 'DD'});
console.log(personne3);
let etudiants = [personne1 , personne2 , personne3];
// 1ere methode de concatenation : SPREAD OPERATOR
let stagiaires = [...etudiants];
stagiaires.push({id:4 , nom : "Ait Taleb" , prenom : "Nader" , note: 13})
console.log(stagiaires);
// 2eme methode de concatenation : concat()
let stagiairesx = etudiants.concat({id:4 , nom : "Ait Taleb" , prenom : "Nader" , note: 13})
console.log(stagiairesx);
/////////////////////////////////////////////////
// functions as first classes
let somme = function(n1 , n2){
    return  n1 + n2
}
s = somme(10 , 15)
console.log(s)
// fonctions sont consideres comme des citoyens de premiere clase 
//  ce qui signifie qu'elles peuvent etres passes comme arguments a d'autres fonctions 
function saluer (name){
    console.log("Bonjour" + name  + "!");
}
// setTimeOutr est une fonction qui prend une autre fonction comme argument
setTimeout(function(){
    return(saluer("Alice"))
},1000);
// Fonction qui prend une fonction commme argument : map , filter ...

// Les fermetures (closures)

function compteur(){
    let count = 0;
    return function (){
        return count +=1 ;
        // l'execution se fait juste a l'interieur de fonction
    }
};
let ct = compteur()
console.log(ct());
console.log(ct());
console.log(ct());
console.log(ct());
console.log(ct());