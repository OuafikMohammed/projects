// Object Destructuring

let personne = {
    nom : "Nadir",
    prenom : "Ait Taleb" ,
    id : 1
}

function salutation({nom , prenom}){
    return `Bonjour Mr ${nom} , ${prenom}`
}
let vSalut = salutation(personne)
console.log(vSalut);

let {nom , prenom} = personne
console.log(nom);

//  Array detructuring(decompréssion d'un tableau)










let etudiants = [
    {id : 1 , nom : "Ait Taleb" , prenom : "Nader " , age : 18 , note : 15},
    {id : 2 , nom : "Sidqki" , prenom : "Zakaria " , age : 20 , note : 17}
]

let etudiantsC = [
    {id : 3 , nom : "Mahfoud " , nom : "Annass " , age : 20 , note : 12}
]
etudiants = [...etudiants , ...etudiantsC]
console.log(etudiants);
// permutation des valeurs
let xnom = " Mohammed";

let xprenom = "Ouafik ";

[xnom , xprenom] = [xprenom , xnom];

console.log(xnom);
console.log(xprenom);